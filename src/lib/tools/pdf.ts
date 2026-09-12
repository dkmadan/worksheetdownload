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
import fontkit from "@pdf-lib/fontkit";
import type { MathProblem } from "./math";
import type { SpellingActivity } from "./spelling";
import { abcSort, scramble, withMissingLetters, pyramidRows, SPELLING_ACTIVITIES } from "./spelling";
import type { TableFact } from "./times-table";
import type { WordSearch } from "./wordsearch";
import type { ClockTime } from "./clock";
import { handAngles, handPoint, fmtDigital } from "./clock";

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
//  CURSIVE WRITING PRACTICE
// ═══════════════════════════════════════════════════════════════════════════

// The script font is fetched once and reused across every generated PDF in
// this tab — it's the same "Dancing Script" file also loaded as a CSS
// @font-face (globals.css) so the on-screen preview matches the PDF exactly.
let cursiveFontBytes: ArrayBuffer | null = null;
async function loadCursiveFontBytes(): Promise<ArrayBuffer> {
  if (!cursiveFontBytes) {
    const res = await fetch("/fonts/DancingScript-Bold.ttf");
    cursiveFontBytes = await res.arrayBuffer();
  }
  return cursiveFontBytes;
}

export interface CursivePdfOpts {
  title: string;
  lines: string[]; // one string per practice line group
  sizePt: number; // nominal cursive glyph draw size in points
  traceRows: number; // dotted trace rows per line
  blankRows: number; // empty rows per line
  guideStyle: "dashed" | "solid";
}

export async function buildCursivePdf(o: CursivePdfOpts): Promise<Uint8Array> {
  const { doc, F } = await newDoc();
  doc.registerFontkit(fontkit);
  const cursive = await doc.embedFont(await loadCursiveFontBytes(), { subset: true });

  const size = o.sizePt;
  // derive real ascender/descender from the font's own metrics, with a bit of
  // padding since Dancing Script's swashes/loops overshoot the reported box
  const unitFull = cursive.heightAtSize(1);
  const unitAscent = cursive.heightAtSize(1, { descender: false });
  const unitDescent = Math.max(0, unitFull - unitAscent);
  const ascender = size * unitAscent * 1.15;
  const descender = size * unitDescent * 1.3;
  const groupH = ascender + descender;
  const rowsPerGroup = Math.max(1, o.traceRows + o.blankRows);
  const groupGap = 14;

  const glyphSize = size;
  const rowMaxW = CONTENT_W - 12;
  const wrapLine = (line: string): string[] => {
    const s = enc(line);
    if (cursive.widthOfTextAtSize(s, glyphSize) <= rowMaxW) return [s];
    const words = s.split(" ");
    const segs: string[] = [];
    let cur = "";
    for (const w of words) {
      const test = cur ? `${cur} ${w}` : w;
      if (cursive.widthOfTextAtSize(test, glyphSize) > rowMaxW && cur) {
        segs.push(cur);
        cur = w;
      } else cur = test;
    }
    if (cur) segs.push(cur);
    return segs.length ? segs : [s];
  };

  type Row = { label: string; trace: boolean; firstOfGroup: boolean; repeat: boolean };
  const rows: Row[] = [];
  const sourceLines = o.lines.length ? o.lines : ["a b c d e f g h"];
  for (const rawLine of sourceLines) {
    const segs = wrapLine(rawLine);
    const repeat = segs.length === 1;
    segs.forEach((line, si) => {
      for (let t = 0; t < o.traceRows; t++)
        rows.push({ label: line, trace: true, firstOfGroup: si === 0 && t === 0, repeat });
      for (let bnk = 0; bnk < o.blankRows; bnk++)
        rows.push({ label: line, trace: false, firstOfGroup: si === 0 && o.traceRows === 0 && bnk === 0, repeat });
    });
  }

  const probe = doc.addPage([PW, PH]);
  const pbox = drawChrome(probe, F, { title: o.title, badge: "Cursive", studentStrip: true, pageNum: 1, pageCount: 1 });
  doc.removePage(doc.getPageCount() - 1);
  const usableH = pbox.top - pbox.bottom;

  const rowUnit = groupH;
  const perGroupH = rowsPerGroup * rowUnit + groupGap;
  const groupsPerPage = Math.max(1, Math.floor(usableH / perGroupH));
  const rowsPerPage = groupsPerPage * rowsPerGroup;

  const pageChunks = paginate(rows, rowsPerPage);

  pageChunks.forEach((chunk, pi) => {
    const page = doc.addPage([PW, PH]);
    const b = drawChrome(page, F, {
      title: o.title,
      subtitle: "Trace the flowing guide letters, then write on your own.",
      badge: "Cursive",
      studentStrip: pi === 0,
      pageNum: pi + 1,
      pageCount: pageChunks.length,
    });

    const groupsThisPage = Math.max(1, chunk.filter((r) => r.firstOfGroup).length);
    const contentH = chunk.length * rowUnit + (groupsThisPage - 1) * groupGap;
    const spare = Math.max(0, b.top - b.bottom - contentH - 8);
    const extraPerRow = Math.min(rowUnit * 0.7, spare / chunk.length);

    let cursor = b.top - 6;
    chunk.forEach((row, i) => {
      if (row.firstOfGroup && i !== 0) cursor -= groupGap;
      const baseline = cursor - ascender;
      const topline = baseline + ascender;
      const midline = baseline + size * unitAscent * 0.55; // approx x-height guide
      const descLine = baseline - descender;

      page.drawLine({ start: { x: b.left, y: topline }, end: { x: b.right, y: topline }, thickness: 0.75, color: FAINT });
      page.drawLine({
        start: { x: b.left, y: midline },
        end: { x: b.right, y: midline },
        thickness: o.guideStyle === "dashed" ? 0.75 : 0.5,
        color: o.guideStyle === "dashed" ? LINE : FAINT,
        dashArray: o.guideStyle === "dashed" ? [3, 3] : undefined,
      });
      page.drawLine({ start: { x: b.left, y: baseline }, end: { x: b.right, y: baseline }, thickness: 1, color: BODY });
      page.drawLine({ start: { x: b.left, y: descLine }, end: { x: b.right, y: descLine }, thickness: 0.5, color: FAINT });

      if (row.trace) {
        const glyphs = enc(row.label);
        const glyphW = cursive.widthOfTextAtSize(glyphs, glyphSize);
        const repeatW = cursive.widthOfTextAtSize(glyphs + "   ", glyphSize);
        let gx = b.left + 6;
        if (!row.repeat || repeatW <= 0) {
          page.drawText(glyphs, { x: gx, y: baseline, size: glyphSize, font: cursive, color: FAINT });
        } else {
          while (gx + glyphW < b.right - 6) {
            page.drawText(glyphs, { x: gx, y: baseline, size: glyphSize, font: cursive, color: FAINT });
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

// ═══════════════════════════════════════════════════════════════════════════
//  SPELLING PRACTICE SHEET
// ═══════════════════════════════════════════════════════════════════════════

type SpRow =
  | { k: "head"; text: string; note: string }
  | { k: "line"; left: string; faint?: boolean; tall?: boolean }
  | { k: "test"; n: number };

const spRowH = (r: SpRow) => (r.k === "head" ? 26 : r.k === "test" ? 22 : r.tall ? 30 : 22);

export interface SpellingPdfOpts {
  title: string;
  words: string[];
  activities: SpellingActivity[];
  seed: number;
  includeAnswerKey: boolean;
}

export async function buildSpellingPdf(o: SpellingPdfOpts): Promise<Uint8Array> {
  const { doc, F } = await newDoc();
  const words = o.words.slice(0, 30);
  const label = (id: SpellingActivity) => SPELLING_ACTIVITIES.find((a) => a.id === id)!;

  const rows: SpRow[] = [];
  const keyRows: SpRow[] = [];
  for (const act of o.activities) {
    const meta = label(act);
    rows.push({ k: "head", text: meta.label, note: meta.blurb });
    if (act === "trace-write") {
      for (const w of words) rows.push({ k: "line", left: w, faint: true });
    } else if (act === "abc-order") {
      const scrambled = scramble(words, o.seed);
      rows.push({ k: "line", left: `Given:  ${scrambled.join(",  ")}`, tall: false });
      words.forEach((_, i) => rows.push({ k: "test", n: i + 1 }));
      keyRows.push({ k: "head", text: "ABC Order", note: "" });
      abcSort(words).forEach((w, i) => keyRows.push({ k: "line", left: `${i + 1}.  ${w}` }));
    } else if (act === "missing-letters") {
      for (const w of words) rows.push({ k: "line", left: withMissingLetters(w) });
      keyRows.push({ k: "head", text: "Missing Letters", note: "" });
      words.forEach((w) => keyRows.push({ k: "line", left: `${withMissingLetters(w)}   →   ${w}` }));
    } else if (act === "write-sentence") {
      for (const w of words) rows.push({ k: "line", left: w, tall: true });
    } else if (act === "spelling-test") {
      words.forEach((_, i) => rows.push({ k: "test", n: i + 1 }));
      keyRows.push({ k: "head", text: "Spelling Test", note: "" });
      words.forEach((w, i) => keyRows.push({ k: "line", left: `${i + 1}.  ${w}` }));
    } else if (act === "pyramid") {
      for (const w of words)
        rows.push({ k: "line", left: pyramidRows(w).join("  ·  "), faint: true, tall: true });
    }
  }

  const renderRows = (list: SpRow[]) => {
    // paginate
    const probe = doc.addPage([PW, PH]);
    const pb = drawChrome(probe, F, { title: o.title, badge: "Spelling", studentStrip: true, pageNum: 1, pageCount: 1 });
    doc.removePage(doc.getPageCount() - 1);
    const usable = pb.top - pb.bottom;
    const pages: SpRow[][] = [];
    let cur: SpRow[] = [];
    let h = 0;
    for (const r of list) {
      const rh = spRowH(r);
      if (h + rh > usable && cur.length) {
        pages.push(cur);
        cur = [];
        h = 0;
      }
      cur.push(r);
      h += rh;
    }
    if (cur.length) pages.push(cur);
    return pages;
  };

  const wsPages = renderRows(rows);
  const keyPages = o.includeAnswerKey && keyRows.length ? renderRows(keyRows) : [];
  const total = wsPages.length + keyPages.length;
  let pn = 0;

  const paint = (pages: SpRow[][], answers: boolean) => {
    pages.forEach((chunk, i) => {
      pn++;
      const page = doc.addPage([PW, PH]);
      const b = drawChrome(page, F, {
        title: answers ? "Answer Key" : o.title,
        subtitle: answers ? o.title : `Word list: ${words.join(", ")}`,
        badge: answers ? "Answer Key" : "Spelling",
        isAnswerKey: answers,
        studentStrip: !answers && i === 0,
        pageNum: pn,
        pageCount: total,
      });
      let y = b.top;
      for (const r of chunk) {
        if (r.k === "head") {
          y -= 4;
          text(page, r.text, b.left, y - 11, 10, F.bold, answers ? GREEN : NAVY);
          if (r.note) text(page, r.note, b.left + F.bold.widthOfTextAtSize(enc(r.text), 10) + 10, y - 11, 7.5, F.reg, MUTED);
          y -= 22;
        } else if (r.k === "test") {
          text(page, `${r.n}.`, b.left + 4, y - 11, 9, F.bold, MUTED);
          page.drawLine({ start: { x: b.left + 26, y: y - 13 }, end: { x: b.right - 6, y: y - 13 }, thickness: 0.9, color: LINE });
          y -= 22;
        } else {
          text(page, r.left, b.left + 4, y - 11, 9.5, r.faint ? F.reg : F.bold, r.faint ? FAINT : answers ? GREEN : BODY);
          if (!answers) {
            const lx = b.left + 4 + F.bold.widthOfTextAtSize(enc(r.left), 9.5) + 14;
            page.drawLine({ start: { x: Math.min(lx, b.left + 220), y: y - 13 }, end: { x: b.right - 6, y: y - 13 }, thickness: 0.9, color: LINE });
            if (r.tall) page.drawLine({ start: { x: b.left + 4, y: y - 26 }, end: { x: b.right - 6, y: y - 26 }, thickness: 0.9, color: FAINT });
          }
          y -= r.tall ? 30 : 22;
        }
      }
    });
  };

  paint(wsPages, false);
  paint(keyPages, true);

  return doc.save();
}

// ═══════════════════════════════════════════════════════════════════════════
//  MULTIPLICATION / TIMES TABLE
// ═══════════════════════════════════════════════════════════════════════════

export interface TimesTablePdfOpts {
  title: string;
  mode: "single" | "drill" | "grid" | "missing-factor";
  facts: TableFact[];
  columns: number;
  includeAnswerKey: boolean;
  grid?: { axisRow: number[]; axisCol: number[] };
}

export async function buildTimesTablePdf(o: TimesTablePdfOpts): Promise<Uint8Array> {
  const { doc, F } = await newDoc();

  if (o.mode === "grid" && o.grid) {
    const draw = (answers: boolean, pn: number, total: number) => {
      const page = doc.addPage([PW, PH]);
      const b = drawChrome(page, F, {
        title: answers ? "Answer Key" : o.title,
        subtitle: "Multiply the row by the column.",
        badge: answers ? "Answer Key" : "Times Table",
        isAnswerKey: answers,
        studentStrip: !answers,
        pageNum: pn,
        pageCount: total,
      });
      const n = o.grid!.axisRow.length;
      const cell = Math.min((b.width) / (n + 1), (b.top - b.bottom) / (n + 1), 40);
      const gx = b.left + (b.width - cell * (n + 1)) / 2;
      const gy = b.top - 10;
      for (let i = 0; i <= n + 1; i++) {
        page.drawLine({ start: { x: gx, y: gy - i * cell }, end: { x: gx + cell * (n + 1), y: gy - i * cell }, thickness: i === 1 ? 1.4 : 0.6, color: i <= 1 ? BODY : FAINT });
        page.drawLine({ start: { x: gx + i * cell, y: gy }, end: { x: gx + i * cell, y: gy - cell * (n + 1) }, thickness: i === 1 ? 1.4 : 0.6, color: i <= 1 ? BODY : FAINT });
      }
      text(page, "×", gx + cell / 2, gy - cell / 2 - 4, 12, F.bold, NAVY, { align: "center" });
      o.grid!.axisRow.forEach((v, i) => text(page, `${v}`, gx + (i + 1.5) * cell, gy - cell / 2 - 4, 10, F.bold, NAVY, { align: "center" }));
      o.grid!.axisCol.forEach((v, j) => text(page, `${v}`, gx + cell / 2, gy - (j + 1.5) * cell - 4, 10, F.bold, NAVY, { align: "center" }));
      if (answers) {
        o.grid!.axisCol.forEach((rv, j) =>
          o.grid!.axisRow.forEach((cv, i) =>
            text(page, `${rv * cv}`, gx + (i + 1.5) * cell, gy - (j + 1.5) * cell - 4, 9, F.reg, GREEN, { align: "center" }),
          ),
        );
      }
    };
    const total = o.includeAnswerKey ? 2 : 1;
    draw(false, 1, total);
    if (o.includeAnswerKey) draw(true, 2, total);
    return doc.save();
  }

  // list modes
  const cols = Math.max(1, Math.min(o.columns, 4));
  const rowH = 30;
  const probe = doc.addPage([PW, PH]);
  const pb = drawChrome(probe, F, { title: o.title, badge: "Times Table", studentStrip: true, pageNum: 1, pageCount: 1 });
  doc.removePage(doc.getPageCount() - 1);
  const usable = pb.top - pb.bottom;
  const perPage = Math.max(1, Math.floor(usable / rowH)) * cols;
  const pages = paginate(o.facts, perPage);
  const keyPages = o.includeAnswerKey ? paginate(o.facts, 60) : [];
  const total = pages.length + keyPages.length;
  let pn = 0;

  pages.forEach((chunk, pi) => {
    pn++;
    const page = doc.addPage([PW, PH]);
    const b = drawChrome(page, F, {
      title: o.title,
      subtitle: "Fill in each product.",
      badge: pages.length > 1 ? `Worksheet ${pi + 1}/${pages.length}` : "Times Table",
      studentStrip: pi === 0,
      pageNum: pn,
      pageCount: total,
    });
    const colW = b.width / cols;
    const rowsThis = Math.ceil(chunk.length / cols);
    const spacing = Math.min(rowH * 2.4, Math.max(rowH, (b.top - b.bottom) / rowsThis));
    chunk.forEach((f, i) => {
      const x = b.left + (i % cols) * colW;
      const y = b.top - Math.floor(i / cols) * spacing - 4;
      text(page, `${pi * perPage + i + 1}.`, x, y - 12, 9, F.bold, MUTED);
      text(page, o.mode === "missing-factor" ? enc(f.prompt) : `${f.prompt} =`, x + 18, y - 12, 12, F.reg, INK);
      if (o.mode !== "missing-factor") {
        const pw = F.reg.widthOfTextAtSize(enc(`${f.prompt} =`), 12);
        page.drawLine({ start: { x: x + 22 + pw, y: y - 13 }, end: { x: x + colW - 12, y: y - 13 }, thickness: 1, color: LINE });
      }
    });
  });

  keyPages.forEach((chunk, pi) => {
    pn++;
    const page = doc.addPage([PW, PH]);
    const b = drawChrome(page, F, { title: "Answer Key", subtitle: o.title, badge: "Answer Key", isAnswerKey: true, pageNum: pn, pageCount: total });
    const kc = 4;
    const cw = b.width / kc;
    chunk.forEach((f, i) => {
      const x = b.left + (i % kc) * cw;
      const y = b.top - Math.floor(i / kc) * 18 - 12;
      text(page, `${pi * 60 + i + 1}. ${enc(f.prompt)}${o.mode === "missing-factor" ? "" : " = "}`, x, y, 8, F.reg, BODY);
      const pw = F.reg.widthOfTextAtSize(enc(`${pi * 60 + i + 1}. ${f.prompt}${o.mode === "missing-factor" ? "" : " = "}`), 8);
      text(page, f.answer, x + pw, y, 8, F.bold, GREEN);
    });
  });

  return doc.save();
}

// ═══════════════════════════════════════════════════════════════════════════
//  WORD SEARCH
// ═══════════════════════════════════════════════════════════════════════════

export interface WordSearchPdfOpts {
  title: string;
  ws: WordSearch;
  showWordBank: boolean;
  includeAnswerKey: boolean;
}

export async function buildWordSearchPdf(o: WordSearchPdfOpts): Promise<Uint8Array> {
  const { doc, F } = await newDoc();
  const total = o.includeAnswerKey ? 2 : 1;

  const drawGrid = (answers: boolean, pn: number) => {
    const page = doc.addPage([PW, PH]);
    const b = drawChrome(page, F, {
      title: answers ? "Answer Key" : o.title,
      subtitle: answers ? "All words circled." : "Find and circle every word from the list.",
      badge: answers ? "Answer Key" : "Word Search",
      isAnswerKey: answers,
      studentStrip: !answers,
      pageNum: pn,
      pageCount: total,
    });

    let y = b.top;
    if (o.showWordBank) {
      const bankWords = [...o.ws.placed.map((p) => p.word), ...o.ws.unplaced];
      const perRow = 4;
      const rows = Math.ceil(bankWords.length / perRow);
      const bh = 16 + rows * 12 + 6;
      page.drawRectangle({ x: b.left, y: y - bh, width: b.width, height: bh, color: FAINT2, borderColor: FAINT, borderWidth: 0.75 });
      text(page, "WORD BANK", b.left + 10, y - 12, 7, F.bold, MUTED);
      bankWords.forEach((w, i) => {
        const cx = b.left + 12 + (i % perRow) * (b.width / perRow);
        const cy = y - 26 - Math.floor(i / perRow) * 12;
        text(page, w, cx, cy, 8.5, F.bold, BODY);
      });
      y -= bh + 14;
    }

    const n = o.ws.size;
    const cell = Math.min(b.width / n, (y - b.bottom) / n, 26);
    const gx = b.left + (b.width - cell * n) / 2;
    const gy = y;

    // answer highlights first (behind letters)
    if (answers) {
      for (const pw of o.ws.placed) {
        const first = pw.cells[0];
        const last = pw.cells[pw.cells.length - 1];
        const x1 = gx + (first.c + 0.5) * cell;
        const y1 = gy - (first.r + 0.5) * cell;
        const x2 = gx + (last.c + 0.5) * cell;
        const y2 = gy - (last.r + 0.5) * cell;
        const steps = Math.max(pw.cells.length * 4, 8);
        for (let s = 0; s <= steps; s++) {
          const t = s / steps;
          page.drawCircle({ x: x1 + (x2 - x1) * t, y: y1 + (y2 - y1) * t, size: cell * 0.42, color: GREEN_BD, opacity: 0.55 });
        }
      }
    }

    // grid lines
    for (let i = 0; i <= n; i++) {
      page.drawLine({ start: { x: gx, y: gy - i * cell }, end: { x: gx + n * cell, y: gy - i * cell }, thickness: 0.5, color: FAINT });
      page.drawLine({ start: { x: gx + i * cell, y: gy }, end: { x: gx + i * cell, y: gy - n * cell }, thickness: 0.5, color: FAINT });
    }
    page.drawRectangle({ x: gx, y: gy - n * cell, width: n * cell, height: n * cell, borderColor: BODY, borderWidth: 1 });

    // letters
    for (let r = 0; r < n; r++) {
      for (let cc = 0; cc < n; cc++) {
        text(page, o.ws.grid[r][cc], gx + (cc + 0.5) * cell, gy - (r + 0.5) * cell - cell * 0.28, cell * 0.5, F.bold, answers ? BODY : INK, { align: "center" });
      }
    }
    if (o.ws.unplaced.length) {
      text(page, `Could not place: ${o.ws.unplaced.join(", ")}`, b.left, gy - n * cell - 14, 7, F.reg, MUTED);
    }
  };

  drawGrid(false, 1);
  if (o.includeAnswerKey) drawGrid(true, 2);
  return doc.save();
}

// ═══════════════════════════════════════════════════════════════════════════
//  TELLING TIME — ANALOG CLOCKS
// ═══════════════════════════════════════════════════════════════════════════

function drawClockFace(
  page: PDFPage,
  F: Fonts,
  cx: number,
  cy: number,
  r: number,
  opts: { h: number; m: number; hands: boolean; numbers?: boolean },
) {
  page.drawCircle({ x: cx, y: cy, size: r, borderColor: BODY, borderWidth: 1.4, color: WHITE });
  page.drawCircle({ x: cx, y: cy, size: 2, color: BODY });
  for (let t = 0; t < 60; t++) {
    const [x1, y1] = handPoint(cx, cy, t * 6, r - (t % 5 === 0 ? 6 : 3), false);
    const [x2, y2] = handPoint(cx, cy, t * 6, r - 1, false);
    page.drawLine({ start: { x: x1, y: y1 }, end: { x: x2, y: y2 }, thickness: t % 5 === 0 ? 1.1 : 0.5, color: t % 5 === 0 ? BODY : LINE });
  }
  if (opts.numbers !== false) {
    for (let n = 1; n <= 12; n++) {
      const [nx, ny] = handPoint(cx, cy, n * 30, r - 16, false);
      text(page, `${n}`, nx, ny - 4, r * 0.24, F.bold, BODY, { align: "center" });
    }
  }
  if (opts.hands) {
    const { hour, minute } = handAngles(opts);
    const [hx, hy] = handPoint(cx, cy, hour, r * 0.5, false);
    const [mx, my] = handPoint(cx, cy, minute, r * 0.78, false);
    page.drawLine({ start: { x: cx, y: cy }, end: { x: hx, y: hy }, thickness: 3, color: INK });
    page.drawLine({ start: { x: cx, y: cy }, end: { x: mx, y: my }, thickness: 2, color: BLUE });
  }
}

export interface ClockPdfOpts {
  title: string;
  times: ClockTime[];
  columns: number;
  includeAnswerKey: boolean;
}

export async function buildClockPdf(o: ClockPdfOpts): Promise<Uint8Array> {
  const { doc, F } = await newDoc();
  const cols = Math.max(2, Math.min(o.columns, 4));

  const probe = doc.addPage([PW, PH]);
  const pb = drawChrome(probe, F, { title: o.title, badge: "Telling Time", studentStrip: true, pageNum: 1, pageCount: 1 });
  doc.removePage(doc.getPageCount() - 1);
  const usable = pb.top - pb.bottom;

  const cellW = CONTENT_W / cols;
  const r = Math.min(cellW * 0.36, 46);
  const cellH = r * 2 + 34;
  const rowsPerPage = Math.max(1, Math.floor(usable / cellH));
  const perPage = rowsPerPage * cols;

  const pages = paginate(o.times, perPage);
  const total = pages.length + (o.includeAnswerKey ? pages.length : 0);
  let pn = 0;

  const paint = (answers: boolean) => {
    pages.forEach((chunk, pi) => {
      pn++;
      const page = doc.addPage([PW, PH]);
      const b = drawChrome(page, F, {
        title: answers ? "Answer Key" : o.title,
        subtitle: answers ? o.title : "Read the clock, or draw the hands to show the time.",
        badge: answers ? "Answer Key" : "Telling Time",
        isAnswerKey: answers,
        studentStrip: !answers && pi === 0,
        pageNum: pn,
        pageCount: total,
      });
      const rowsThis = Math.ceil(chunk.length / cols);
      const spacing = Math.min(cellH * 1.5, Math.max(cellH, (b.top - b.bottom) / rowsThis));
      chunk.forEach((t, i) => {
        const col = i % cols;
        const cx = b.left + col * cellW + cellW / 2;
        const top = b.top - Math.floor(i / cols) * spacing;
        const clockY = top - r - 6;
        const showHands = answers || t.task === "read";
        drawClockFace(page, F, cx, clockY, r, { h: t.h, m: t.m, hands: showHands });
        text(page, `${pi * perPage + i + 1}`, cx - cellW / 2 + 4, top - 8, 8, F.bold, MUTED);
        const belowY = clockY - r - 12;
        if (t.task === "read") {
          if (answers) {
            text(page, fmtDigital(t), cx, belowY, 11, F.bold, GREEN, { align: "center" });
          } else {
            page.drawLine({ start: { x: cx - 34, y: belowY - 2 }, end: { x: cx - 6, y: belowY - 2 }, thickness: 1, color: LINE });
            text(page, ":", cx, belowY, 12, F.bold, MUTED, { align: "center" });
            page.drawLine({ start: { x: cx + 6, y: belowY - 2 }, end: { x: cx + 34, y: belowY - 2 }, thickness: 1, color: LINE });
          }
        } else {
          text(page, fmtDigital(t), cx, belowY, 12, F.bold, answers ? GREEN : INK, { align: "center" });
        }
      });
    });
  };

  paint(false);
  if (o.includeAnswerKey) paint(true);
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
