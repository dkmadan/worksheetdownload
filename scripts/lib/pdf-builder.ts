import { PDFDocument, rgb, StandardFonts, PDFPage, PDFFont } from "pdf-lib";

// Palette — all values are Latin-1 safe for Helvetica embedding
const BLUE  = rgb(37/255,  99/255, 235/255);  // #2563EB
const AMBER = rgb(217/255,119/255,   6/255);  // #D97706
const GRAY  = rgb(107/255,114/255, 128/255);  // #6B7280
const LGRAY = rgb(209/255,213/255, 219/255);  // #D1D5DB
const BLACK = rgb(0, 0, 0);
const WHITE = rgb(1, 1, 1);

export interface Question { question: string; answer: string }

function drawHeader(page: PDFPage, bold: PDFFont, reg: PDFFont, obl: PDFFont) {
  const W = 612, H = 792, M = 36;

  // Icon — blue rect + white paper + pencil mark
  page.drawRectangle({ x: M, y: H - 60, width: 36, height: 36, color: BLUE });
  page.drawRectangle({ x: M + 7, y: H - 52, width: 18, height: 22, color: WHITE });
  page.drawLine({ start: { x: M + 9, y: H - 36 }, end: { x: M + 23, y: H - 36 }, thickness: 1, color: LGRAY });
  page.drawLine({ start: { x: M + 9, y: H - 40 }, end: { x: M + 21, y: H - 40 }, thickness: 1, color: LGRAY });
  page.drawLine({ start: { x: M + 9, y: H - 44 }, end: { x: M + 19, y: H - 44 }, thickness: 1, color: LGRAY });
  // Pencil shape (yellow bar)
  page.drawRectangle({ x: M + 26, y: H - 55, width: 5, height: 16, color: rgb(0.99,0.83,0.25) });
  page.drawRectangle({ x: M + 26, y: H - 59, width: 5, height: 5,  color: rgb(0.3,0.3,0.3)  });

  // Brand name
  const bx = M + 44;
  page.drawText("WorksheetDownload", { x: bx, y: H - 40, size: 14, font: bold, color: BLUE });
  const wdW = bold.widthOfTextAtSize("WorksheetDownload", 14);
  page.drawText(".com",  { x: bx + wdW, y: H - 40, size: 14, font: bold, color: BLUE });
  page.drawText("Learn  \xB7  Practice  \xB7  Excel", { x: bx, y: H - 56, size: 8, font: obl, color: GRAY });

  // Blue rule
  page.drawLine({ start: { x: M, y: H - 64 }, end: { x: W - M, y: H - 64 }, thickness: 1.5, color: BLUE });
}

function drawNameDate(page: PDFPage, reg: PDFFont) {
  const W = 612, H = 792, M = 36;
  const y = H - 83;
  page.drawText("Name:", { x: M, y, size: 9, font: reg, color: GRAY });
  page.drawLine({ start: { x: M + 36, y: y - 2 }, end: { x: M + 220, y: y - 2 }, thickness: 0.7, color: LGRAY });
  page.drawText("Date:", { x: W / 2 + 20, y, size: 9, font: reg, color: GRAY });
  page.drawLine({ start: { x: W / 2 + 52, y: y - 2 }, end: { x: W - M, y: y - 2 }, thickness: 0.7, color: LGRAY });
}

function drawQuestionGrid(
  page: PDFPage,
  bold: PDFFont,
  reg: PDFFont,
  questions: Question[],
  gridTop: number,
  isKey: boolean
) {
  const M = 36, W = 612;
  const colW = (W - M * 2) / 4;   // 135 pt
  const rowH = (gridTop - 55) / 5; // ~5 rows to y≈55

  // Faint grid lines
  for (let r = 0; r <= 5; r++) {
    const ly = gridTop - r * rowH;
    page.drawLine({ start: { x: M, y: ly }, end: { x: W - M, y: ly }, thickness: 0.25, color: rgb(0.88,0.88,0.88) });
  }
  for (let c = 0; c <= 4; c++) {
    const lx = M + c * colW;
    page.drawLine({ start: { x: lx, y: gridTop }, end: { x: lx, y: gridTop - 5 * rowH }, thickness: 0.25, color: rgb(0.88,0.88,0.88) });
  }

  for (let i = 0; i < Math.min(20, questions.length); i++) {
    const row = Math.floor(i / 4);
    const col = i % 4;
    const cx  = M + col * colW + 6;
    const qy  = gridTop - row * rowH - 26;
    const q   = questions[i];

    const numStr = `${i + 1})`;
    page.drawText(numStr, { x: cx, y: qy, size: 9.5, font: bold, color: BLUE });
    const numW = bold.widthOfTextAtSize(numStr + " ", 9.5);

    if (!isKey) {
      page.drawText(q.question, { x: cx + numW, y: qy, size: 9.5, font: reg, color: BLACK });
      // Answer underline
      page.drawLine({ start: { x: cx + 8, y: qy - 20 }, end: { x: cx + 95, y: qy - 20 }, thickness: 0.7, color: LGRAY });
    } else {
      page.drawText(q.question, { x: cx + numW, y: qy, size: 9, font: reg, color: rgb(0.35,0.35,0.35) });
      page.drawText(q.answer,   { x: cx + 8,    y: qy - 20, size: 10, font: bold, color: AMBER });
    }
  }
}

function drawFooter(page: PDFPage, reg: PDFFont, pageNum: number) {
  const W = 612, M = 36;
  const y = 28;
  const copy = "\xA9 2025 WorksheetDownload.com  |  Free printable worksheets";
  const cw = reg.widthOfTextAtSize(copy, 7);
  page.drawText(copy, { x: (W - cw) / 2, y, size: 7, font: reg, color: GRAY });

  const pg = `Page ${pageNum} of 2`;
  const pw = reg.widthOfTextAtSize(pg, 7);
  page.drawText(pg, { x: W - M - pw, y, size: 7, font: reg, color: GRAY });

  const url = "https://worksheetdownload.com/";
  const uw = reg.widthOfTextAtSize(url, 7);
  page.drawText(url, { x: (W - uw) / 2, y: y - 11, size: 7, font: reg, color: BLUE });
}

export async function buildWorksheetPdf(opts: {
  topicLabel: string;
  gradeLabel: string;
  subjectLabel: string;
  sheetNumber: number;
  questions: Question[];
}): Promise<Uint8Array> {
  const { topicLabel, gradeLabel, subjectLabel, sheetNumber, questions } = opts;
  const W = 612, H = 792, M = 36;

  const doc  = await PDFDocument.create();
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await doc.embedFont(StandardFonts.Helvetica);
  const obl  = await doc.embedFont(StandardFonts.HelveticaOblique);

  // ---------- Page 1: Questions ----------
  const p1 = doc.addPage([W, H]);
  drawHeader(p1, bold, reg, obl);
  drawNameDate(p1, reg);

  // Title
  const titleY = H - 108;
  const titleStr = topicLabel.toUpperCase();
  const tw = bold.widthOfTextAtSize(titleStr, 17);
  p1.drawText(titleStr, { x: (W - tw) / 2, y: titleY, size: 17, font: bold, color: BLUE });

  // Instruction + Score
  const instrY = titleY - 22;
  p1.drawText("Solve the following problems. Write your answer on the line.", { x: M, y: instrY, size: 8, font: reg, color: GRAY });
  const scoreStr = "Score: ______ / 20";
  const sw = reg.widthOfTextAtSize(scoreStr, 8);
  p1.drawText(scoreStr, { x: W - M - sw, y: instrY, size: 8, font: reg, color: GRAY });

  // Subtitle: grade + subject + sheet
  const subY = instrY - 12;
  const subStr = `${gradeLabel}  |  ${subjectLabel}  |  Sheet ${sheetNumber}`;
  const subW = reg.widthOfTextAtSize(subStr, 7.5);
  p1.drawText(subStr, { x: (W - subW) / 2, y: subY, size: 7.5, font: reg, color: GRAY });

  drawQuestionGrid(p1, bold, reg, questions, subY - 10, false);
  drawFooter(p1, reg, 1);

  // ---------- Page 2: Answer Key ----------
  const p2 = doc.addPage([W, H]);
  drawHeader(p2, bold, reg, obl);
  drawNameDate(p2, reg);

  const akY = H - 108;
  const akStr = "ANSWER KEY";
  const akW = bold.widthOfTextAtSize(akStr, 19);
  p2.drawText(akStr, { x: (W - akW) / 2, y: akY, size: 19, font: bold, color: BLUE });

  const solY = akY - 22;
  const solStr = `${topicLabel} -- Solutions`;
  const solW = reg.widthOfTextAtSize(solStr, 10);
  p2.drawText(solStr, { x: (W - solW) / 2, y: solY, size: 10, font: reg, color: GRAY });

  const subY2 = solY - 14;
  const subStr2 = `${gradeLabel}  |  ${subjectLabel}  |  Sheet ${sheetNumber}`;
  const subW2 = reg.widthOfTextAtSize(subStr2, 7.5);
  p2.drawText(subStr2, { x: (W - subW2) / 2, y: subY2, size: 7.5, font: reg, color: GRAY });

  drawQuestionGrid(p2, bold, reg, questions, subY2 - 10, true);
  drawFooter(p2, reg, 2);

  return doc.save();
}
