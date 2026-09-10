// Browser-side PDF builder for map labeling worksheets. Reuses the shared
// chrome (header / footer / watermark / student strip) from the tools builder.

import type { PDFPage, PDFFont } from "pdf-lib";
import {
  drawChrome,
  newDoc,
  text,
  enc,
  TOK,
  type Box,
  type Fonts,
} from "@/lib/tools/pdf";
import { diagramSpec } from "./diagram-spec";
import { seededShuffle } from "./helpers";
import { allAnswers, splitItem, type DiagramKind, type MapWorksheet } from "./types";

// ── reference map image ─────────────────────────────────────────────────────
type RefImage = { bytes: Uint8Array; kind: "png" | "jpg" };

/** rasterise an SVG string to PNG bytes via an offscreen canvas (client-only) */
async function rasterizeSvg(svgText: string, scale = 3): Promise<RefImage | null> {
  try {
    const blob = new Blob([svgText], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    try {
      const img = new Image();
      img.decoding = "sync";
      img.src = url;
      await img.decode();
      const w = (img.naturalWidth || 820) * scale;
      const h = (img.naturalHeight || 500) * scale;
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);
      const pngBlob: Blob | null = await new Promise((res) => canvas.toBlob(res, "image/png"));
      if (!pngBlob) return null;
      return { bytes: new Uint8Array(await pngBlob.arrayBuffer()), kind: "png" };
    } finally {
      URL.revokeObjectURL(url);
    }
  } catch {
    return null;
  }
}

/** fetch /maps/reference/<file>; returns null (never throws) if missing/bad */
async function loadReferenceImage(file: string): Promise<RefImage | null> {
  try {
    const res = await fetch(`/maps/reference/${encodeURIComponent(file)}`, { cache: "force-cache" });
    if (!res.ok) return null;
    if (/\.svg$/i.test(file)) return rasterizeSvg(await res.text());
    const buf = new Uint8Array(await res.arrayBuffer());
    if (buf.length < 8) return null;
    if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) return { bytes: buf, kind: "png" };
    if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return { bytes: buf, kind: "jpg" };
    return null;
  } catch {
    return null;
  }
}

// ── word bank ───────────────────────────────────────────────────────────────
function drawWordBank(page: PDFPage, F: Fonts, b: Box, top: number, words: string[]): number {
  const pad = 10;
  const colW = b.width - pad * 2;
  // pack words into lines
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const chunk = enc(w);
    const test = line ? `${line}    ${chunk}` : chunk;
    if (F.reg.widthOfTextAtSize(test, 8) > colW && line) {
      lines.push(line);
      line = chunk;
    } else line = test;
  }
  if (line) lines.push(line);

  const boxH = 16 + lines.length * 12 + 6;
  page.drawRectangle({
    x: b.left,
    y: top - boxH,
    width: b.width,
    height: boxH,
    color: TOK.FAINT2,
    borderColor: TOK.FAINT,
    borderWidth: 0.75,
  });
  text(page, "WORD BANK", b.left + pad, top - 12, 7, F.bold, TOK.MUTED);
  let ly = top - 24;
  for (const l of lines) {
    text(page, l, b.left + pad, ly, 8, F.reg, TOK.BODY);
    ly -= 12;
  }
  return top - boxH - 12;
}

// ── diagram ─────────────────────────────────────────────────────────────────
function drawDiagram(page: PDFPage, F: Fonts, b: Box, kind: DiagramKind, top: number, maxH: number): number {
  const spec = diagramSpec(kind);
  const H = Math.min(maxH, 210);
  const labelPadL = spec.shape === "world" ? 150 : 20;
  const labelPadB = 16;
  const fx0 = b.left + labelPadL;
  const fx1 = b.right - 14;
  const fy1 = top - 6; // top of frame
  const fy0 = fy1 - (H - labelPadB); // bottom of frame
  const fw = fx1 - fx0;
  const fh = fy1 - fy0;
  const nx = (n: number) => fx0 + n * fw;
  const ny = (n: number) => fy1 - n * fh; // spec n is top-down

  if (spec.shape === "world") {
    const vertical = kind === "prime-meridian";
    for (const band of spec.bands) {
      if (vertical) {
        page.drawRectangle({ x: nx(band.from), y: fy0, width: nx(band.to) - nx(band.from), height: fh, color: TOK.INK, opacity: band.tint });
      } else {
        page.drawRectangle({ x: fx0, y: ny(band.to), width: fw, height: ny(band.from) - ny(band.to), color: TOK.INK, opacity: band.tint });
      }
    }
    page.drawRectangle({ x: fx0, y: fy0, width: fw, height: fh, borderColor: TOK.BODY, borderWidth: 1.1 });
    for (const band of spec.bands) {
      const cx = vertical ? (nx(band.from) + nx(band.to)) / 2 : fx0 + fw / 2;
      const cy = vertical ? fy0 + fh / 2 : (ny(band.from) + ny(band.to)) / 2;
      text(page, band.label, cx, cy - 3, 7.5, F.bold, TOK.MUTED, { align: "center" });
    }
    for (const ln of spec.hlines) {
      page.drawLine({
        start: { x: fx0, y: ny(ln.at) },
        end: { x: fx1, y: ny(ln.at) },
        thickness: ln.bold ? 1.6 : 0.9,
        color: ln.dashed ? TOK.LINE : TOK.BODY,
        dashArray: ln.dashed ? [3, 3] : undefined,
      });
      if (ln.label) text(page, ln.label, fx0 - 6, ny(ln.at) - 2.5, 6.5, ln.bold ? F.bold : F.reg, TOK.BODY, { align: "right" });
    }
    for (const ln of spec.vlines) {
      page.drawLine({
        start: { x: nx(ln.at), y: fy0 },
        end: { x: nx(ln.at), y: fy1 },
        thickness: ln.bold ? 1.6 : 0.8,
        color: ln.dashed ? TOK.LINE : TOK.BODY,
        dashArray: ln.dashed ? [3, 3] : undefined,
      });
      if (ln.label) text(page, ln.label, nx(ln.at), fy0 - 10, 6, ln.bold ? F.bold : F.reg, TOK.BODY, { align: "center" });
    }
  } else if (spec.shape === "globe-ns" || spec.shape === "globe-ew") {
    const r = Math.min(fh, fw) / 2 - 4;
    const cx = fx0 + fw / 2;
    const cy = fy0 + fh / 2;
    page.drawCircle({ x: cx, y: cy, size: r, borderColor: TOK.BODY, borderWidth: 1.4, color: TOK.FAINT2 });
    page.drawLine({ start: { x: cx - r, y: cy }, end: { x: cx + r, y: cy }, thickness: spec.shape === "globe-ns" ? 1.6 : 0.9, color: TOK.BODY, dashArray: spec.shape === "globe-ew" ? [3, 3] : undefined });
    page.drawLine({ start: { x: cx, y: cy - r }, end: { x: cx, y: cy + r }, thickness: spec.shape === "globe-ew" ? 1.6 : 0.9, color: TOK.BODY, dashArray: spec.shape === "globe-ns" ? [3, 3] : undefined });
    if (spec.shape === "globe-ns") {
      text(page, "Northern Hemisphere", cx, cy + r / 2, 8, F.bold, TOK.MUTED, { align: "center" });
      text(page, "Southern Hemisphere", cx, cy - r / 2, 8, F.bold, TOK.MUTED, { align: "center" });
      text(page, "Equator", cx - r - 4, cy - 2, 6.5, F.reg, TOK.BODY, { align: "right" });
    } else {
      text(page, "Western", cx - r / 2, cy - 2, 8, F.bold, TOK.MUTED, { align: "center" });
      text(page, "Eastern", cx + r / 2, cy - 2, 8, F.bold, TOK.MUTED, { align: "center" });
      text(page, "Prime Meridian", cx, cy + r + 4, 6.5, F.reg, TOK.BODY, { align: "center" });
    }
  } else if (spec.shape === "compass") {
    const cx = fx0 + fw / 2;
    const cy = fy0 + fh / 2;
    const R = Math.min(fh, fw) / 2 - 12;
    page.drawCircle({ x: cx, y: cy, size: R, borderColor: TOK.FAINT, borderWidth: 1 });
    const dirs: [number, string, boolean][] = [
      [0, "N", true], [45, "NE", false], [90, "E", true], [135, "SE", false],
      [180, "S", true], [225, "SW", false], [270, "W", true], [315, "NW", false],
    ];
    for (const [deg, label, card] of dirs) {
      const a = ((deg - 90) * Math.PI) / 180; // 0deg = up
      const ex = cx + Math.cos(a) * R;
      const ey = cy - Math.sin(a) * R;
      page.drawLine({ start: { x: cx, y: cy }, end: { x: ex, y: ey }, thickness: card ? 1.6 : 0.8, color: card ? TOK.NAVY : TOK.LINE });
      text(page, label, cx + Math.cos(a) * (R + 10), cy - Math.sin(a) * (R + 10) - 3, card ? 10 : 8, F.bold, TOK.BODY, { align: "center" });
    }
    page.drawCircle({ x: cx, y: cy, size: 2.5, color: TOK.NAVY });
  } else if (spec.shape === "grid" && spec.grid) {
    const { cols, rows } = spec.grid;
    const cw = fw / cols;
    const ch = fh / rows;
    page.drawRectangle({ x: fx0, y: fy0, width: fw, height: fh, borderColor: TOK.BODY, borderWidth: 1.1, color: TOK.FAINT2 });
    for (let i = 1; i < cols; i++) page.drawLine({ start: { x: fx0 + i * cw, y: fy0 }, end: { x: fx0 + i * cw, y: fy1 }, thickness: 0.5, color: TOK.LINE });
    for (let j = 1; j < rows; j++) page.drawLine({ start: { x: fx0, y: fy0 + j * ch }, end: { x: fx1, y: fy0 + j * ch }, thickness: 0.5, color: TOK.LINE });
    const letters = "ABCDEFGHJKLMN".split("");
    for (let i = 0; i < cols; i++) text(page, letters[i], fx0 + i * cw + cw / 2, fy1 + 4, 7, F.bold, TOK.MUTED, { align: "center" });
    for (let j = 0; j < rows; j++) text(page, `${j + 1}`, fx0 - 8, fy1 - j * ch - ch / 2 - 2, 7, F.bold, TOK.MUTED, { align: "center" });
  }

  text(page, spec.caption, b.left, fy0 - (spec.shape === "world" ? 24 : 14), 6.5, F.reg, TOK.MUTED, { maxW: b.width });
  return fy0 - 34;
}

function drawMapArea(page: PDFPage, F: Fonts, b: Box, top: number, prompt: string, h: number): number {
  page.drawRectangle({ x: b.left, y: top - h, width: b.width, height: h, borderColor: TOK.LINE, borderWidth: 0.9, color: TOK.FAINT2, opacity: 0.5 });
  text(page, "MAP AREA — draw or attach your map here, then label it", b.left + 10, top - 14, 7, F.bold, TOK.MUTED);
  text(page, prompt, b.left + 10, top - 26, 7, F.reg, TOK.BODY, { maxW: b.width - 20 });
  return top - h - 12;
}

// ── row model ───────────────────────────────────────────────────────────────
type Row =
  | { kind: "head"; text: string }
  | { kind: "blank"; n: number; answer: string; prompt?: string; clue?: string };

function sectionRows(m: MapWorksheet): { label: Row[]; clue: Row[] } {
  let n = 0;
  const label: Row[] = [];
  for (const g of m.groups) {
    label.push({ kind: "head", text: g.heading });
    for (const item of g.items) {
      const { prompt, answer } = splitItem(item);
      label.push({ kind: "blank", n: ++n, answer, prompt });
    }
  }
  const clue: Row[] = [];
  if (m.clues && m.clues.length) {
    clue.push({ kind: "head", text: "Part B — Identify each place from the clue" });
    for (const cItem of m.clues) clue.push({ kind: "blank", n: ++n, answer: cItem.answer, clue: cItem.clue });
  }
  return { label, clue };
}

const rowH = (r: Row) => (r.kind === "head" ? 20 : r.clue ? 30 : 19);

function renderRows(
  page: PDFPage,
  F: Fonts,
  b: Box,
  top: number,
  rows: Row[],
  answers: boolean,
): number {
  let y = top;
  for (const r of rows) {
    if (r.kind === "head") {
      y -= 6;
      text(page, r.text, b.left, y - 10, 9, F.bold, answers ? TOK.GREEN : TOK.NAVY);
      y -= 20;
    } else {
      const numX = b.left + 4;
      text(page, `${r.n}.`, numX, y - 10, 8.5, F.bold, TOK.MUTED);
      let cursorX = numX + 20;
      if (r.clue) {
        const clueLines = wrapText(F.reg, enc(r.clue), 8, b.width - 26);
        for (const cl of clueLines) {
          text(page, cl, cursorX, y - 10, 8, F.reg, TOK.BODY);
          y -= 11;
        }
        y += 11; // step back onto the answer line
      } else if (r.prompt) {
        const label = `${r.prompt}  —  `;
        text(page, label, cursorX, y - 10, 8.5, F.reg, TOK.BODY);
        cursorX += F.reg.widthOfTextAtSize(enc(label), 8.5);
      }
      if (answers) {
        text(page, r.answer, cursorX, y - 10, 8.5, F.bold, TOK.GREEN, { maxW: b.right - 6 - cursorX });
      } else {
        page.drawLine({ start: { x: cursorX, y: y - 12 }, end: { x: b.right - 6, y: y - 12 }, thickness: 0.9, color: TOK.LINE });
      }
      y -= r.clue ? 20 : 19;
    }
  }
  return y;
}

function wrapText(font: PDFFont, s: string, size: number, maxW: number): string[] {
  const words = s.split(" ");
  const out: string[] = [];
  let line = "";
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (font.widthOfTextAtSize(test, size) > maxW && line) {
      out.push(line);
      line = w;
    } else line = test;
  }
  if (line) out.push(line);
  return out;
}

// ── public ──────────────────────────────────────────────────────────────────
export async function buildMapWorksheetPdf(m: MapWorksheet): Promise<Uint8Array> {
  const { doc, F } = await newDoc();
  doc.setTitle(`${m.title} Worksheet — WorksheetDownload.com`);

  const { label, clue } = sectionRows(m);
  const words = seededShuffle(allAnswers(m), m.slug);
  const refImage = m.referenceImage ? await loadReferenceImage(m.referenceImage) : null;

  // ── plan pages ────────────────────────────────────────────────────────────
  // page 1 gets diagram/map-area + word bank; label rows flow across pages;
  // then clue rows; then answer-key page(s).
  const worksheetPages: Row[][] = [];
  const cluePages: Row[][] = [];

  // greedily fill pages
  const probe = doc.addPage([595.28, 841.89]);
  const pbox = drawChrome(probe, F, { title: m.h1, subtitle: m.labelPrompt, badge: "Map Worksheet", studentStrip: true, pageNum: 1, pageCount: 1 });
  doc.removePage(doc.getPageCount() - 1);
  const fullH = pbox.top - pbox.bottom;

  const diagramH = m.diagram ? 250 : 132; // reserved on page 1
  const wordBankH = 16 + Math.ceil(words.join("    ").length / 90) * 12 + 30;

  {
    let firstBudget = fullH - diagramH - wordBankH;
    const rest = label.slice();
    const first: Row[] = [];
    while (rest.length && rowH(rest[0]) <= firstBudget) {
      const r = rest.shift()!;
      first.push(r);
      firstBudget -= rowH(r);
    }
    worksheetPages.push(first);
    while (rest.length) {
      let budget = fullH;
      const pg: Row[] = [];
      while (rest.length && rowH(rest[0]) <= budget) {
        const r = rest.shift()!;
        pg.push(r);
        budget -= rowH(r);
      }
      worksheetPages.push(pg);
    }
  }

  if (clue.length) {
    const rest = clue.slice();
    while (rest.length) {
      let budget = fullH - (cluePages.length === 0 ? wordBankH : 0);
      const pg: Row[] = [];
      while (rest.length && rowH(rest[0]) <= budget) {
        const r = rest.shift()!;
        pg.push(r);
        budget -= rowH(r);
      }
      cluePages.push(pg);
    }
  }

  const keyRows: Row[] = [...label, ...clue];
  const keyPages: Row[][] = [];
  {
    const rest = keyRows.slice();
    while (rest.length) {
      let budget = fullH;
      const pg: Row[] = [];
      while (rest.length && rowH(rest[0]) <= budget) {
        const r = rest.shift()!;
        pg.push(r);
        budget -= rowH(r);
      }
      keyPages.push(pg);
    }
  }

  const total = worksheetPages.length + cluePages.length + keyPages.length + (refImage ? 1 : 0);
  let pageNum = 0;

  // ── worksheet pages ───────────────────────────────────────────────────────
  worksheetPages.forEach((rows, i) => {
    pageNum++;
    const page = doc.addPage([595.28, 841.89]);
    const b = drawChrome(page, F, {
      title: m.h1,
      subtitle: m.labelPrompt,
      badge: worksheetPages.length > 1 ? `Worksheet ${i + 1}/${worksheetPages.length}` : "Map Worksheet",
      studentStrip: i === 0,
      pageNum,
      pageCount: total,
    });
    let y = b.top;
    if (i === 0) {
      y = m.diagram
        ? drawDiagram(page, F, b, m.diagram, y, diagramH)
        : drawMapArea(page, F, b, y, m.labelPrompt, 110);
      y = drawWordBank(page, F, b, y, words);
      text(page, "Section A — Use the word bank to fill each blank.", b.left, y - 8, 8, F.bold, TOK.MUTED);
      y -= 18;
    }
    renderRows(page, F, b, y, rows, false);
  });

  // ── clue pages ────────────────────────────────────────────────────────────
  cluePages.forEach((rows, i) => {
    pageNum++;
    const page = doc.addPage([595.28, 841.89]);
    const b = drawChrome(page, F, {
      title: m.h1,
      subtitle: "Identify each place from its description.",
      badge: "Map Worksheet",
      pageNum,
      pageCount: total,
    });
    let y = b.top;
    if (i === 0) y = drawWordBank(page, F, b, y, words);
    renderRows(page, F, b, y, rows, false);
  });

  // ── answer key ────────────────────────────────────────────────────────────
  keyPages.forEach((rows) => {
    pageNum++;
    const page = doc.addPage([595.28, 841.89]);
    const b = drawChrome(page, F, {
      title: "Answer Key",
      subtitle: m.title,
      badge: "Answer Key",
      isAnswerKey: true,
      pageNum,
      pageCount: total,
    });
    renderRows(page, F, b, b.top, rows, true);
  });

  // ── reference map (final page) ────────────────────────────────────────────
  if (refImage) {
    pageNum++;
    const page = doc.addPage([595.28, 841.89]);
    const b = drawChrome(page, F, {
      title: "Reference Map",
      subtitle: `A labelled map of ${m.title.replace(/ Map$/, "")} to check your work.`,
      badge: "Reference",
      pageNum,
      pageCount: total,
    });
    try {
      const img = refImage.kind === "png" ? await doc.embedPng(refImage.bytes) : await doc.embedJpg(refImage.bytes);
      const availW = b.width;
      const availH = b.top - b.bottom - 6;
      const s = Math.min(availW / img.width, availH / img.height);
      const w = img.width * s;
      const h = img.height * s;
      page.drawImage(img, {
        x: b.left + (availW - w) / 2,
        y: b.top - 6 - h,
        width: w,
        height: h,
      });
    } catch {
      text(page, "Reference map image could not be loaded.", b.left, b.top - 20, 9, F.reg, TOK.MUTED);
    }
  }

  return doc.save();
}
