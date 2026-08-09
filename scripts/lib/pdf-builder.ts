import { PDFDocument, rgb, StandardFonts, PDFPage, PDFFont, degrees } from "pdf-lib";

export type WorksheetLayout = "math-grid" | "qa-2col" | "kg-2col" | "letter-practice";

export interface Question { question: string; answer: string }

export interface BuildOpts {
  topicLabel: string;
  gradeLabel: string;
  subjectLabel: string;
  sheetNumber: number;
  questions: Question[];
  layout?: WorksheetLayout;
}

const BLUE  = rgb(37/255,  99/255, 235/255);
const DBLUE = rgb(30/255,  64/255, 175/255);
const GRAY  = rgb(107/255,114/255,128/255);
const LGRAY = rgb(209/255,213/255,219/255);
const BLACK = rgb(0, 0, 0);
const WHITE = rgb(1, 1, 1);
const W = 612, H = 792, M = 36;

function trunc(text: string, font: PDFFont, size: number, maxPt: number): string {
  if (font.widthOfTextAtSize(text, size) <= maxPt) return text;
  let t = text;
  while (t.length > 3 && font.widthOfTextAtSize(t + "...", size) > maxPt) t = t.slice(0, -1);
  return t + "...";
}

function drawWatermark(page: PDFPage, font: PDFFont) {
  page.drawText("worksheetdownload.com", {
    x: 72, y: 195,
    size: 55, font,
    color: rgb(0.72, 0.86, 1),
    opacity: 0.15,
    rotate: degrees(38),
  });
}

function drawHeader(page: PDFPage, bold: PDFFont, reg: PDFFont, obl: PDFFont) {
  const top = H - 56;
  // Blue icon box
  page.drawRectangle({ x: M, y: top, width: 38, height: 38, color: BLUE });
  page.drawRectangle({ x: M + 7, y: top + 8, width: 18, height: 22, color: WHITE });
  page.drawLine({ start: { x: M+9, y: top+24 }, end: { x: M+23, y: top+24 }, thickness: 1, color: LGRAY });
  page.drawLine({ start: { x: M+9, y: top+19 }, end: { x: M+22, y: top+19 }, thickness: 1, color: LGRAY });
  page.drawLine({ start: { x: M+9, y: top+14 }, end: { x: M+20, y: top+14 }, thickness: 1, color: LGRAY });
  page.drawRectangle({ x: M+27, y: top+3, width: 5, height: 28, color: rgb(0.98, 0.83, 0.24) });
  page.drawRectangle({ x: M+27, y: top-1, width: 5, height: 5, color: rgb(0.28, 0.28, 0.28) });

  // Brand text
  const bx = M + 50;
  page.drawText("WorksheetDownload", { x: bx, y: top+22, size: 15, font: bold, color: BLUE });
  const ww = bold.widthOfTextAtSize("WorksheetDownload", 15);
  page.drawText(".com", { x: bx + ww, y: top+22, size: 15, font: bold, color: DBLUE });
  page.drawText("Learn \xB7 Practice \xB7 Excel", { x: bx, y: top+7, size: 8.5, font: obl, color: GRAY });

  // Blue rule
  page.drawLine({ start: { x: M, y: H-64 }, end: { x: W-M, y: H-64 }, thickness: 1.5, color: BLUE });
}

function drawNameRow(page: PDFPage, bold: PDFFont) {
  const y = H - 82;
  const lc = LGRAY;
  page.drawText("Name:",     { x: 36,  y, size: 9, font: bold, color: GRAY });
  page.drawLine({ start: { x: 67,  y: y-2 }, end: { x: 193, y: y-2 }, thickness: 0.7, color: lc });
  page.drawText("Class/Sec:", { x: 200, y, size: 9, font: bold, color: GRAY });
  page.drawLine({ start: { x: 258, y: y-2 }, end: { x: 318, y: y-2 }, thickness: 0.7, color: lc });
  page.drawText("Roll No:", { x: 325, y, size: 9, font: bold, color: GRAY });
  page.drawLine({ start: { x: 366, y: y-2 }, end: { x: 426, y: y-2 }, thickness: 0.7, color: lc });
  page.drawText("Date:",    { x: 433, y, size: 9, font: bold, color: GRAY });
  page.drawLine({ start: { x: 457, y: y-2 }, end: { x: 576, y: y-2 }, thickness: 0.7, color: lc });
}

function drawTitle(page: PDFPage, bold: PDFFont, reg: PDFFont, topicLabel: string, sheetNumber: number) {
  const titleY = H - 107;
  const title = topicLabel.toUpperCase();
  const maxW = W - M * 2;
  const titleStr = trunc(title, bold, 18, maxW);
  const tw = bold.widthOfTextAtSize(titleStr, 18);
  page.drawText(titleStr, { x: (W - tw) / 2, y: titleY, size: 18, font: bold, color: BLUE });

  const instrY = titleY - 22;
  page.drawText("Solve the following problems. Write your answer on the line.", {
    x: M, y: instrY, size: 8, font: reg, color: GRAY,
  });
  const scoreStr = `Score: ______ / 20   Sheet ${sheetNumber} of 4`;
  const sw = reg.widthOfTextAtSize(scoreStr, 8);
  page.drawText(scoreStr, { x: W - M - sw, y: instrY, size: 8, font: reg, color: GRAY });
}

function drawFooter(page: PDFPage, reg: PDFFont) {
  const copy = "\xA9 2025 WorksheetDownload.com  |  Free printable worksheets";
  const cw = reg.widthOfTextAtSize(copy, 7);
  page.drawText(copy, { x: (W - cw) / 2, y: 30, size: 7, font: reg, color: GRAY });
  const url = "https://worksheetdownload.com/";
  const uw = reg.widthOfTextAtSize(url, 7);
  page.drawText(url, { x: (W - uw) / 2, y: 18, size: 7, font: reg, color: BLUE });
}

// ── Math Grid: 4 cols × 5 rows, large font ──────────────────────────────────
function drawMathGrid(page: PDFPage, bold: PDFFont, reg: PDFFont, questions: Question[]) {
  const gridTop = H - 142;   // y where first row top is
  const COLS = 4, ROWS = 5;
  const colW = (W - M * 2) / COLS;   // 135 pt
  const rowH = (gridTop - 52) / ROWS; // ~99 pt

  for (let i = 0; i < Math.min(20, questions.length); i++) {
    const row = Math.floor(i / COLS);
    const col = i % COLS;
    const cx = M + col * colW;
    const cellTop = gridTop - row * rowH;
    const q = questions[i];

    // Light cell border
    page.drawRectangle({
      x: cx, y: cellTop - rowH,
      width: colW, height: rowH,
      borderColor: LGRAY, borderWidth: 0.3,
      color: rgb(1, 1, 1),
      opacity: 0,
      borderOpacity: 1,
    });

    // Question number
    const numStr = `${i + 1})`;
    page.drawText(numStr, { x: cx + 6, y: cellTop - 22, size: 10, font: bold, color: BLUE });

    // Question text (truncated) — strip trailing " ?" if present
    let qText = q.question.endsWith(" ?") ? q.question.slice(0, -2) : q.question;
    qText = trunc(qText, bold, 14, colW - 14);
    page.drawText(qText, { x: cx + 6, y: cellTop - 40, size: 14, font: bold, color: BLACK });

    // Answer underline
    page.drawLine({
      start: { x: cx + 8, y: cellTop - 76 },
      end:   { x: cx + colW - 10, y: cellTop - 76 },
      thickness: 1, color: LGRAY,
    });
  }
}

// ── QA 2-col Grid: 2 cols × 10 rows ─────────────────────────────────────────
function drawQaGrid(page: PDFPage, bold: PDFFont, reg: PDFFont, questions: Question[], kgStyle = false) {
  const gridTop = H - 142;
  const COLS = 2, ROWS = 10;
  const colW = (W - M * 2) / COLS;   // 270 pt
  const rowH = (gridTop - 52) / ROWS; // ~59 pt
  const qSize = kgStyle ? 11 : 10;
  const numSize = kgStyle ? 10 : 9;

  for (let i = 0; i < Math.min(20, questions.length); i++) {
    const row = Math.floor(i / COLS);
    const col = i % COLS;
    const cx = M + col * colW;
    const cellTop = gridTop - row * rowH;
    const q = questions[i];

    // Cell border
    page.drawRectangle({
      x: cx, y: cellTop - rowH,
      width: colW, height: rowH,
      borderColor: LGRAY, borderWidth: 0.3,
      color: rgb(1,1,1), opacity: 0, borderOpacity: 1,
    });

    // Question number
    page.drawText(`${i + 1})`, { x: cx + 5, y: cellTop - 15, size: numSize, font: bold, color: BLUE });

    // Question text
    const qText = trunc(q.question, reg, qSize, colW - 26);
    page.drawText(qText, { x: cx + 22, y: cellTop - 15, size: qSize, font: reg, color: BLACK });

    // Answer line
    page.drawLine({
      start: { x: cx + 8, y: cellTop - 44 },
      end:   { x: cx + colW - 10, y: cellTop - 44 },
      thickness: 0.8, color: LGRAY,
    });
  }
}

// ── KG Letter Practice: 4 cols × 7 rows ─────────────────────────────────────
function drawLetterGrid(page: PDFPage, bold: PDFFont, reg: PDFFont, questions: Question[]) {
  const gridTop = H - 142;
  const COLS = 4, ROWS = 7;  // max 28 items but we show 20
  const colW = (W - M * 2) / COLS;
  const rowH = (gridTop - 52) / ROWS;

  for (let i = 0; i < Math.min(20, questions.length); i++) {
    const row = Math.floor(i / COLS);
    const col = i % COLS;
    const cx = M + col * colW;
    const cellTop = gridTop - row * rowH;

    page.drawRectangle({
      x: cx, y: cellTop - rowH,
      width: colW, height: rowH,
      borderColor: LGRAY, borderWidth: 0.3,
      color: rgb(1,1,1), opacity: 0, borderOpacity: 1,
    });

    const q = questions[i];
    // Number
    page.drawText(`${i + 1})`, { x: cx + 5, y: cellTop - 14, size: 8, font: bold, color: BLUE });
    // Question (often a single letter or short phrase)
    const qText = trunc(q.question, bold, 13, colW - 20);
    page.drawText(qText, { x: cx + 22, y: cellTop - 14, size: 13, font: bold, color: BLACK });
    // Answer blank
    page.drawLine({
      start: { x: cx + 10, y: cellTop - rowH + 10 },
      end:   { x: cx + colW - 10, y: cellTop - rowH + 10 },
      thickness: 0.8, color: LGRAY,
    });
  }
}

// ── Main builder ─────────────────────────────────────────────────────────────
export async function buildWorksheetPdf(opts: BuildOpts): Promise<Uint8Array> {
  const { topicLabel, gradeLabel, subjectLabel, sheetNumber, questions, layout = "qa-2col" } = opts;

  const doc  = await PDFDocument.create();
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await doc.embedFont(StandardFonts.Helvetica);
  const obl  = await doc.embedFont(StandardFonts.HelveticaOblique);

  const page = doc.addPage([W, H]);

  drawWatermark(page, obl);
  drawHeader(page, bold, reg, obl);
  drawNameRow(page, bold);
  drawTitle(page, bold, reg, topicLabel, sheetNumber);
  drawFooter(page, reg);

  if (layout === "math-grid") {
    drawMathGrid(page, bold, reg, questions);
  } else if (layout === "letter-practice") {
    drawLetterGrid(page, bold, reg, questions);
  } else if (layout === "kg-2col") {
    drawQaGrid(page, bold, reg, questions, true);
  } else {
    drawQaGrid(page, bold, reg, questions, false);
  }

  return doc.save();
}
