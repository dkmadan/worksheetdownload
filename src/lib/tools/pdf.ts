// ─────────────────────────────────────────────────────────────────────────────
// Browser-side PDF builders for the generator tools. Uses pdf-lib (already a
// project dependency) — runs entirely in the client, no server round-trip.
//
// One shared "chrome" (brand header + student strip + footer + watermark) with
// a per-tool body renderer. Everything is A4 portrait.
// ─────────────────────────────────────────────────────────────────────────────

import {
  PDFDocument,
  PDFPage,
  PDFFont,
  StandardFonts,
  rgb,
  degrees,
} from "pdf-lib";
import type { MathProblem } from "./math";

// ── geometry ────────────────────────────────────────────────────────────────
const PW = 595.28;
const PH = 841.89;
const ML = 38;
const MR = 38;
const MT = 34;
const MB = 34;
const CONTENT_W = PW - ML - MR;

// ── colour ──────────────────────────────────────────────────────────────────
export const c = (r: number, g: number, b: number) => rgb(r / 255, g / 255, b / 255);
const NAVY = c(30, 58, 138);
const BLUE = c(37, 99, 235);
const INK = c(15, 23, 42);
const BODY = c(51, 65, 85);
const MUTED = c(100, 116, 139);
const LINE = c(148, 163, 184);
const FAINT = c(226, 232, 240);
const FAINT2 = c(241, 245, 249);
const GREEN = c(5, 150, 105);
const GREEN_BG = c(236, 253, 245);
const GREEN_BD = c(167, 243, 208);
const WHITE = rgb(1, 1, 1);

/** colour tokens for other builders in this folder */
export const TOK = {
  NAVY, BLUE, INK, BODY, MUTED, LINE, FAINT, FAINT2, GREEN, GREEN_BG, GREEN_BD, WHITE,
};

export interface Fonts {
  bold: PDFFont;
  reg: PDFFont;
}

// Helvetica standard font is WinAnsi-encoded — swap glyphs it can't encode.
export function enc(s: string): string {
  return s
    .replace(/−|–|—/g, "-") // minus / en-dash / em-dash → hyphen
    .replace(/\s/g, " ") // normalise every whitespace char to a plain space
    .replace(/[^\x00-\xFF]/g, ""); // drop anything WinAnsi can't encode
}


export function text(
  page: PDFPage,
  s: string,
  x: number,
  y: number,
  size: number,
  font: PDFFont,
  color: ReturnType<typeof rgb> = INK,
  opts: { align?: "left" | "center" | "right"; maxW?: number } = {},
) {
  let str = enc(s);
  if (opts.maxW) {
    while (str.length > 1 && font.widthOfTextAtSize(str, size) > opts.maxW) {
      str = str.slice(0, -1);
    }
  }
  let tx = x;
  if (opts.align === "center") tx = x - font.widthOfTextAtSize(str, size) / 2;
  if (opts.align === "right") tx = x - font.widthOfTextAtSize(str, size);
  page.drawText(str, { x: tx, y, size, font, color });
}

// ── brand mark ──────────────────────────────────────────────────────────────
function drawMark(page: PDFPage, x: number, y: number, s: number) {
  const u = s / 100;
  page.drawRectangle({ x, y, width: s, height: s, color: c(36, 59, 110) });
  page.drawRectangle({
    x: x + 18 * u,
    y: y + 22 * u,
    width: 52 * u,
    height: 64 * u,
    color: WHITE,
  });
  for (const [gy, x1, x2] of [
    [36, 28, 60],
    [46, 28, 56],
    [56, 28, 58],
    [66, 28, 50],
  ]) {
    page.drawLine({
      start: { x: x + x1 * u, y: y + (100 - gy) * u },
      end: { x: x + x2 * u, y: y + (100 - gy) * u },
      thickness: 3.5 * u,
      color: c(148, 163, 184),
    });
  }
  page.drawLine({
    start: { x: x + 38 * u, y: y + 32 * u },
    end: { x: x + 66 * u, y: y + 60 * u },
    thickness: 7 * u,
    color: c(245, 158, 11),
  });
}

// ── chrome ──────────────────────────────────────────────────────────────────
export interface ChromeOpts {
  title: string;
  subtitle?: string;
  badge?: string;
  isAnswerKey?: boolean;
  studentStrip?: boolean;
  pageNum: number;
  pageCount: number;
}

export interface Box {
  left: number;
  right: number;
  top: number;
  bottom: number;
  width: number;
}

export const PAGE = { PW, PH, ML, MR, MT, MB, CONTENT_W };

export function drawChrome(page: PDFPage, F: Fonts, o: ChromeOpts): Box {
  // watermark
  page.drawText("WORKSHEETDOWNLOAD", {
    x: 64,
    y: PH / 2 + 20,
    size: 46,
    font: F.bold,
    color: BLUE,
    opacity: 0.03,
    rotate: degrees(-32),
  });

  // header
  const markS = 30;
  const headTop = PH - MT;
  drawMark(page, ML, headTop - markS, markS);
  const bx = ML + markS + 8;
  const w1 = F.bold.widthOfTextAtSize("Worksheet", 12);
  text(page, "Worksheet", bx, headTop - 11, 12, F.bold, INK);
  text(page, "Download", bx + w1, headTop - 11, 12, F.bold, BLUE);
  text(page, ".com", bx + w1 + F.bold.widthOfTextAtSize("Download", 12), headTop - 11, 12, F.bold, INK);
  text(page, "FREE PRINTABLE WORKSHEET GENERATOR", bx, headTop - 22, 6, F.bold, MUTED);

  if (o.badge) {
    const bw = F.bold.widthOfTextAtSize(enc(o.badge), 7) + 16;
    const bgCol = o.isAnswerKey ? GREEN_BG : c(239, 246, 255);
    const bdCol = o.isAnswerKey ? GREEN_BD : c(191, 219, 254);
    const txCol = o.isAnswerKey ? GREEN : BLUE;
    page.drawRectangle({
      x: PW - MR - bw,
      y: headTop - markS + 4,
      width: bw,
      height: 18,
      color: bgCol,
      borderColor: bdCol,
      borderWidth: 0.75,
    });
    text(page, o.badge, PW - MR - bw + 8, headTop - markS + 10, 7, F.bold, txCol);
  }

  let y = headTop - markS - 8;
  page.drawLine({
    start: { x: ML, y },
    end: { x: PW - MR, y },
    thickness: 1.25,
    color: FAINT2,
  });
  y -= 14;

  // title banner
  const banH = 40;
  page.drawRectangle({
    x: ML,
    y: y - banH,
    width: CONTENT_W,
    height: banH,
    color: o.isAnswerKey ? GREEN : NAVY,
  });
  text(page, o.title, ML + 12, y - 17, 12, F.bold, WHITE, { maxW: CONTENT_W - 24 });
  if (o.subtitle) {
    text(page, o.subtitle, ML + 12, y - 30, 7.5, F.reg, o.isAnswerKey ? GREEN_BD : c(191, 219, 254), {
      maxW: CONTENT_W - 24,
    });
  }
  y -= banH + 10;

  // student strip
  if (o.studentStrip && !o.isAnswerKey) {
    const stripH = 22;
    page.drawRectangle({
      x: ML,
      y: y - stripH,
      width: CONTENT_W,
      height: stripH,
      color: c(248, 250, 252),
      borderColor: FAINT,
      borderWidth: 0.75,
    });
    const midY = y - stripH / 2 - 2.5;
    let sx = ML + 10;
    for (const [label, frac] of [
      ["Name:", 0.5],
      ["Class:", 0.22],
      ["Date:", 0.28],
    ] as [string, number][]) {
      text(page, label, sx, midY, 7.5, F.bold, MUTED);
      sx += F.bold.widthOfTextAtSize(label, 7.5) + 4;
      const fw = (CONTENT_W - 40) * frac;
      page.drawLine({
        start: { x: sx, y: midY - 1 },
        end: { x: sx + fw, y: midY - 1 },
        thickness: 1,
        color: LINE,
        dashArray: [2, 2],
      });
      sx += fw + 12;
    }
    y -= stripH + 12;
  }

  // footer
  const fy = MB;
  page.drawLine({
    start: { x: ML, y: fy + 14 },
    end: { x: PW - MR, y: fy + 14 },
    thickness: 1,
    color: FAINT2,
  });
  text(page, "© 2026 WorksheetDownload.com · Free to print & share", ML, fy + 4, 7, F.reg, MUTED);
  text(
    page,
    `Page ${o.pageNum} of ${o.pageCount}`,
    PW - MR,
    fy + 4,
    7,
    F.bold,
    MUTED,
    { align: "right" },
  );

  return { left: ML, right: PW - MR, top: y, bottom: MB + 24, width: CONTENT_W };
}

export async function newDoc(): Promise<{ doc: PDFDocument; F: Fonts }> {
  const doc = await PDFDocument.create();
  doc.setTitle("WorksheetDownload — Generated Worksheet");
  doc.setProducer("WorksheetDownload.com");
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const reg = await doc.embedFont(StandardFonts.Helvetica);
  return { doc, F: { bold, reg } };
}

// ═══════════════════════════════════════════════════════════════════════════
//  MATH WORKSHEET
// ═══════════════════════════════════════════════════════════════════════════

export interface MathPdfOpts {
  title: string;
  subtitle: string;
  problems: MathProblem[];
  columns: number;
  vertical: boolean;
  includeAnswerKey: boolean;
}

export function paginate<T>(items: T[], perPage: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += perPage) pages.push(items.slice(i, i + perPage));
  return pages.length ? pages : [[]];
}

export async function buildMathPdf(o: MathPdfOpts): Promise<Uint8Array> {
  const { doc, F } = await newDoc();
  const cols = Math.max(1, Math.min(o.columns, 5));
  const rowH = o.vertical ? 66 : 34;

  // rough rows-per-page using a probe chrome on a scratch page
  const probe = doc.addPage([PW, PH]);
  const box = drawChrome(probe, F, {
    title: o.title,
    subtitle: o.subtitle,
    badge: "Worksheet",
    studentStrip: true,
    pageNum: 1,
    pageCount: 1,
  });
  doc.removePage(doc.getPageCount() - 1);
  const usableH = box.top - box.bottom;
  const rowsPerPage = Math.max(1, Math.floor(usableH / rowH));
  const perPage = rowsPerPage * cols;

  const pages = paginate(o.problems, perPage);
  const answerPages = o.includeAnswerKey ? paginate(o.problems, 60) : [];
  const totalPages = pages.length + answerPages.length;

  // worksheet pages
  pages.forEach((chunk, pi) => {
    const page = doc.addPage([PW, PH]);
    const b = drawChrome(page, F, {
      title: o.title,
      subtitle: o.subtitle,
      badge: pages.length > 1 ? `Worksheet ${pi + 1}/${pages.length}` : "Worksheet",
      studentStrip: pi === 0,
      pageNum: pi + 1,
      pageCount: totalPages,
    });
    const colW = b.width / cols;
    // spread rows to fill the page when there is spare room (more writing space)
    const rowsThisPage = Math.max(1, Math.ceil(chunk.length / cols));
    const usableOnPage = b.top - b.bottom;
    const rowSpacing = Math.min(rowH * 2.6, Math.max(rowH, usableOnPage / rowsThisPage));
    chunk.forEach((p, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = b.left + col * colW;
      const yTop = b.top - row * rowSpacing - 2;
      const n = pi * perPage + i + 1;
      text(page, `${n}.`, x, yTop - 12, 9, F.bold, MUTED);
      const nx = x + 18;
      if (o.vertical) {
        const [lhs, op, rhs] = p.prompt.split(" ");
        text(page, lhs, nx + 46, yTop - 12, 12, F.reg, INK, { align: "right" });
        text(page, `${op}  ${rhs}`, nx + 46, yTop - 26, 12, F.reg, INK, { align: "right" });
        page.drawLine({
          start: { x: nx + 2, y: yTop - 32 },
          end: { x: nx + 50, y: yTop - 32 },
          thickness: 1,
          color: INK,
        });
      } else {
        text(page, `${p.prompt} =`, nx, yTop - 12, 11, F.reg, INK);
        const pw = F.reg.widthOfTextAtSize(enc(`${p.prompt} =`), 11);
        page.drawLine({
          start: { x: nx + pw + 6, y: yTop - 13 },
          end: { x: x + colW - 12, y: yTop - 13 },
          thickness: 1,
          color: LINE,
        });
      }
    });
  });

  // answer key pages
  answerPages.forEach((chunk, pi) => {
    const page = doc.addPage([PW, PH]);
    const b = drawChrome(page, F, {
      title: "Answer Key",
      subtitle: o.title,
      badge: "Answer Key",
      isAnswerKey: true,
      pageNum: pages.length + pi + 1,
      pageCount: totalPages,
    });
    const keyCols = 4;
    const colW = b.width / keyCols;
    const kRowH = 18;
    chunk.forEach((p, i) => {
      const col = i % keyCols;
      const row = Math.floor(i / keyCols);
      const x = b.left + col * colW;
      const y = b.top - row * kRowH - 12;
      const n = pi * 60 + i + 1;
      text(page, `${n}.`, x, y, 8, F.bold, MUTED);
      text(page, `${p.prompt} = `, x + 16, y, 8, F.reg, BODY);
      const pw = F.reg.widthOfTextAtSize(enc(`${p.prompt} = `), 8);
      text(page, p.answer, x + 16 + pw, y, 8, F.bold, GREEN);
    });
  });

  return doc.save();
}

// ═══════════════════════════════════════════════════════════════════════════
//  HANDWRITING PRACTICE
// ═══════════════════════════════════════════════════════════════════════════

export interface HandwritingPdfOpts {
  title: string;
  lines: string[]; // one string per practice line group
  sizePt: number; // x-height / baseline-to-midline in points
  traceRows: number; // dotted trace rows per line
  blankRows: number; // empty rows per line
  guideStyle: "dashed" | "solid";
}

export async function buildHandwritingPdf(o: HandwritingPdfOpts): Promise<Uint8Array> {
  const { doc, F } = await newDoc();
  const x = o.sizePt; // 1 x-height
  const ascender = x * 1.9;
  const descender = x * 0.75;
  const groupH = ascender + descender;
  const rowsPerGroup = Math.max(1, o.traceRows + o.blankRows);
  const groupGap = 14;

  // build the flat list of (label, isTrace) rows — long lines wrap onto
  // consecutive practice rows so every character the user typed is included
  const glyphSize = ascender * 0.92;
  const rowMaxW = CONTENT_W - 12;
  const wrapLine = (line: string): string[] => {
    const s = enc(line);
    if (F.reg.widthOfTextAtSize(s, glyphSize) <= rowMaxW) return [s];
    const words = s.split(" ");
    const segs: string[] = [];
    let cur = "";
    for (const w of words) {
      const test = cur ? `${cur} ${w}` : w;
      if (F.reg.widthOfTextAtSize(test, glyphSize) > rowMaxW && cur) {
        segs.push(cur);
        cur = w;
      } else cur = test;
    }
    if (cur) segs.push(cur);
    return segs.length ? segs : [s];
  };

  type Row = { label: string; trace: boolean; firstOfGroup: boolean; repeat: boolean };
  const rows: Row[] = [];
  const sourceLines = o.lines.length ? o.lines : ["Aa Bb Cc"];
  for (const rawLine of sourceLines) {
    const segs = wrapLine(rawLine);
    const repeat = segs.length === 1; // fill the row with guide text only when the line isn't wrapped
    segs.forEach((line, si) => {
      for (let t = 0; t < o.traceRows; t++)
        rows.push({ label: line, trace: true, firstOfGroup: si === 0 && t === 0, repeat });
      for (let bnk = 0; bnk < o.blankRows; bnk++)
        rows.push({ label: line, trace: false, firstOfGroup: si === 0 && o.traceRows === 0 && bnk === 0, repeat });
    });
  }

  // probe
  const probe = doc.addPage([PW, PH]);
  const pbox = drawChrome(probe, F, { title: o.title, badge: "Handwriting", studentStrip: true, pageNum: 1, pageCount: 1 });
  doc.removePage(doc.getPageCount() - 1);
  const usableH = pbox.top - pbox.bottom;

  const rowUnit = groupH; // vertical space per row line-set
  const perGroupH = rowsPerGroup * rowUnit + groupGap;
  const groupsPerPage = Math.max(1, Math.floor(usableH / perGroupH));
  const rowsPerPage = groupsPerPage * rowsPerGroup;

  const pageChunks = paginate(rows, rowsPerPage);

  pageChunks.forEach((chunk, pi) => {
    const page = doc.addPage([PW, PH]);
    const b = drawChrome(page, F, {
      title: o.title,
      subtitle: "Trace the guide letters, then write on your own.",
      badge: "Handwriting",
      studentStrip: pi === 0,
      pageNum: pi + 1,
      pageCount: pageChunks.length,
    });

    // spread rows to use spare vertical space
    const groupsThisPage = Math.max(1, chunk.filter((r) => r.firstOfGroup).length);
    const contentH = chunk.length * rowUnit + (groupsThisPage - 1) * groupGap;
    const spare = Math.max(0, b.top - b.bottom - contentH - 8);
    const extraPerRow = Math.min(rowUnit * 0.7, spare / chunk.length);

    let cursor = b.top - 6;
    chunk.forEach((row, i) => {
      if (row.firstOfGroup && i !== 0) cursor -= groupGap;
      const baseline = cursor - ascender;
      const midline = baseline + x;
      const topline = baseline + ascender;
      const descLine = baseline - descender;

      // guide lines
      page.drawLine({ start: { x: b.left, y: topline }, end: { x: b.right, y: topline }, thickness: 0.75, color: FAINT });
      if (o.guideStyle === "dashed") {
        page.drawLine({
          start: { x: b.left, y: midline },
          end: { x: b.right, y: midline },
          thickness: 0.75,
          color: LINE,
          dashArray: [3, 3],
        });
      } else {
        page.drawLine({ start: { x: b.left, y: midline }, end: { x: b.right, y: midline }, thickness: 0.5, color: FAINT });
      }
      page.drawLine({ start: { x: b.left, y: baseline }, end: { x: b.right, y: baseline }, thickness: 1, color: BODY });
      page.drawLine({ start: { x: b.left, y: descLine }, end: { x: b.right, y: descLine }, thickness: 0.5, color: FAINT });

      // guide text
      if (row.trace) {
        const size = ascender * 0.92;
        const glyphs = enc(row.label);
        const glyphW = F.reg.widthOfTextAtSize(glyphs, size);
        const repeatW = F.reg.widthOfTextAtSize(glyphs + "   ", size);
        let gx = b.left + 6;
        if (!row.repeat || repeatW <= 0) {
          page.drawText(glyphs, { x: gx, y: baseline, size, font: F.reg, color: FAINT });
        } else {
          while (gx + glyphW < b.right - 6) {
            page.drawText(glyphs, { x: gx, y: baseline, size, font: F.reg, color: FAINT });
            gx += repeatW;
          }
        }
      }
      cursor -= rowUnit + extraPerRow;
    });
  });

  return doc.save();
}

// ═══════════════════════════════════════════════════════════════════════════
//  NUMBER LINE / COUNTING
// ═══════════════════════════════════════════════════════════════════════════

export interface NumberLinePdfOpts {
  title: string;
  lines: { start: number; end: number; step: number; mode: "blank" | "filled" | "gaps"; gapIdx: number[] }[];
  includeAnswerKey: boolean;
}

export async function buildNumberLinePdf(o: NumberLinePdfOpts): Promise<Uint8Array> {
  const { doc, F } = await newDoc();
  const lineGap = 78;

  const probe = doc.addPage([PW, PH]);
  const pbox = drawChrome(probe, F, { title: o.title, badge: "Number Lines", studentStrip: true, pageNum: 1, pageCount: 1 });
  doc.removePage(doc.getPageCount() - 1);
  const perPage = Math.max(1, Math.floor((pbox.top - pbox.bottom) / lineGap));

  const chunks = paginate(o.lines, perPage);
  const total = chunks.length + (o.includeAnswerKey ? 1 : 0);

  const drawLineSet = (
    page: PDFPage,
    b: Box,
    y: number,
    ln: NumberLinePdfOpts["lines"][number],
    showAll: boolean,
  ) => {
    const ticks: number[] = [];
    for (let v = ln.start; v <= ln.end + 1e-9; v += ln.step) ticks.push(Math.round(v * 1000) / 1000);
    const x0 = b.left + 14;
    const x1 = b.right - 14;
    const span = x1 - x0;
    page.drawLine({ start: { x: x0 - 8, y }, end: { x: x1 + 8, y }, thickness: 1.25, color: INK });
    // arrows
    page.drawSvgPath("M0 0 L6 -3 L6 3 Z", { x: x1 + 8, y, color: INK });
    page.drawSvgPath("M0 0 L-6 -3 L-6 3 Z", { x: x0 - 8, y, color: INK });
    ticks.forEach((t, i) => {
      const tx = x0 + (ticks.length === 1 ? 0 : (span * i) / (ticks.length - 1));
      page.drawLine({ start: { x: tx, y: y - 5 }, end: { x: tx, y: y + 5 }, thickness: 1, color: INK });
      const isGap = ln.mode === "gaps" && ln.gapIdx.includes(i);
      const show = showAll || (ln.mode === "filled") || (ln.mode === "gaps" && !isGap);
      if (show) {
        text(page, `${t}`, tx, y - 16, 8, F.bold, isGap && showAll ? GREEN : INK, { align: "center" });
      } else {
        page.drawRectangle({ x: tx - 9, y: y - 20, width: 18, height: 13, color: WHITE, borderColor: LINE, borderWidth: 0.75 });
      }
    });
  };

  chunks.forEach((chunk, pi) => {
    const page = doc.addPage([PW, PH]);
    const b = drawChrome(page, F, {
      title: o.title,
      subtitle: "Fill in the missing numbers on each line.",
      badge: "Number Lines",
      studentStrip: pi === 0,
      pageNum: pi + 1,
      pageCount: total,
    });
    const spacing = Math.min(lineGap * 1.9, Math.max(lineGap, (b.top - b.bottom) / chunk.length));
    let y = b.top - 30;
    chunk.forEach((ln, i) => {
      const gi = pi * perPage + i + 1;
      text(page, `${gi}.  Count by ${ln.step} from ${ln.start} to ${ln.end}`, b.left, y + 14, 8.5, F.bold, BODY);
      drawLineSet(page, b, y - 8, ln, false);
      y -= spacing;
    });
  });

  if (o.includeAnswerKey) {
    const page = doc.addPage([PW, PH]);
    const b = drawChrome(page, F, {
      title: "Answer Key",
      subtitle: o.title,
      badge: "Answer Key",
      isAnswerKey: true,
      pageNum: total,
      pageCount: total,
    });
    const keyLines = o.lines.slice(0, perPage);
    const keySpacing = Math.min(lineGap * 1.9, Math.max(lineGap, (b.top - b.bottom) / keyLines.length));
    let y = b.top - 30;
    keyLines.forEach((ln, i) => {
      text(page, `${i + 1}.`, b.left, y + 14, 8.5, F.bold, MUTED);
      drawLineSet(page, b, y - 8, ln, true);
      y -= keySpacing;
    });
  }

  return doc.save();
}

// ═══════════════════════════════════════════════════════════════════════════
//  GRAPH / GRID PAPER
// ═══════════════════════════════════════════════════════════════════════════

export interface GridPaperPdfOpts {
  title: string;
  style: "squares" | "dots" | "coordinate";
  /** square size in mm */
  spacingMm: number;
  heavyEvery: number; // bold every N lines (0 = never)
  showChrome: boolean;
}

export async function buildGridPaperPdf(o: GridPaperPdfOpts): Promise<Uint8Array> {
  const { doc, F } = await newDoc();
  const page = doc.addPage([PW, PH]);

  let b: Box;
  if (o.showChrome) {
    b = drawChrome(page, F, {
      title: o.title,
      subtitle:
        o.style === "coordinate" ? "Coordinate grid with numbered axes." : `${o.spacingMm} mm grid.`,
      badge: "Grid Paper",
      pageNum: 1,
      pageCount: 1,
    });
  } else {
    b = { left: 24, right: PW - 24, top: PH - 24, bottom: 24, width: PW - 48 };
  }

  const mm = 72 / 25.4;
  const gap = Math.max(2 * mm, o.spacingMm * mm);
  const gridW = b.right - b.left;
  const gridH = b.top - b.bottom;
  const cols = Math.floor(gridW / gap);
  const rows = Math.floor(gridH / gap);
  const ox = b.left + (gridW - cols * gap) / 2;
  const oy = b.bottom + (gridH - rows * gap) / 2;

  const light = c(203, 213, 225);
  const heavy = c(100, 116, 139);

  if (o.style === "dots") {
    for (let i = 0; i <= cols; i++)
      for (let j = 0; j <= rows; j++)
        page.drawCircle({ x: ox + i * gap, y: oy + j * gap, size: 0.7, color: heavy });
  } else {
    for (let i = 0; i <= cols; i++) {
      const bold = o.heavyEvery > 0 && i % o.heavyEvery === 0;
      page.drawLine({
        start: { x: ox + i * gap, y: oy },
        end: { x: ox + i * gap, y: oy + rows * gap },
        thickness: bold ? 0.9 : 0.4,
        color: bold ? heavy : light,
      });
    }
    for (let j = 0; j <= rows; j++) {
      const bold = o.heavyEvery > 0 && j % o.heavyEvery === 0;
      page.drawLine({
        start: { x: ox, y: oy + j * gap },
        end: { x: ox + cols * gap, y: oy + j * gap },
        thickness: bold ? 0.9 : 0.4,
        color: bold ? heavy : light,
      });
    }
  }

  if (o.style === "coordinate") {
    const cx = ox + Math.floor(cols / 2) * gap;
    const cy = oy + Math.floor(rows / 2) * gap;
    page.drawLine({ start: { x: ox, y: cy }, end: { x: ox + cols * gap, y: cy }, thickness: 1.3, color: INK });
    page.drawLine({ start: { x: cx, y: oy }, end: { x: cx, y: oy + rows * gap }, thickness: 1.3, color: INK });
    const half = Math.floor(cols / 2);
    for (let i = -half; i <= half; i++) {
      if (i === 0) continue;
      if (i % 5 === 0) text(page, `${i}`, cx + i * gap, cy - 12, 6, F.reg, MUTED, { align: "center" });
    }
    const halfR = Math.floor(rows / 2);
    for (let j = -halfR; j <= halfR; j++) {
      if (j === 0) continue;
      if (j % 5 === 0) text(page, `${j}`, cx - 12, cy + j * gap - 2, 6, F.reg, MUTED, { align: "center" });
    }
  }

  return doc.save();
}

// ── shared: trigger a download in the browser ───────────────────────────────
export function downloadPdf(bytes: Uint8Array, filename: string) {
  const blob = new Blob([bytes.slice()], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename.endsWith(".pdf") ? filename : `${filename}.pdf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}
