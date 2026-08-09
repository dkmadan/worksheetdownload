import { PDFDocument, rgb, StandardFonts, PDFPage, PDFFont, degrees } from "pdf-lib";

export type WorksheetLayout = "math-grid" | "qa-2col" | "kg-2col" | "letter-practice";
export interface Question { question: string; answer: string }
export interface BuildOpts {
  topicLabel: string; gradeLabel: string; subjectLabel: string;
  sheetNumber: number; questions: Question[]; layout?: WorksheetLayout;
}

// ── Color palette ─────────────────────────────────────────────────────────────
const BLUE     = rgb( 37/255,  99/255, 235/255);   // #2563EB
const DBLUE    = rgb( 30/255,  64/255, 175/255);   // #1E40AF
const BLUE_BG  = rgb(239/255, 246/255, 255/255);   // #EFF6FF
const BLUE_MD  = rgb(219/255, 234/255, 254/255);   // #DBEAFE
const TEAL     = rgb( 13/255, 148/255, 136/255);   // #0D9488
const TEAL_BG  = rgb(240/255, 253/255, 250/255);   // #F0FDFA
const PURPLE   = rgb(124/255,  58/255, 237/255);   // #7C3AED
const PURP_BG  = rgb(245/255, 243/255, 255/255);   // #F5F3FF
const ORANGE   = rgb(234/255,  88/255,  12/255);   // #EA580C
const ORNG_BG  = rgb(255/255, 247/255, 237/255);   // #FFF7ED
const ROSE     = rgb(225/255,  29/255,  72/255);   // #E11D48
const ROSE_BG  = rgb(255/255, 241/255, 242/255);   // #FFF1F2
const AMBER    = rgb(245/255, 158/255,  11/255);   // #F59E0B
const EMERALD  = rgb(  5/255, 150/255, 105/255);   // #059669
const EMRLD_BG = rgb(236/255, 253/255, 245/255);   // #ECFDF5
const EMRLD_MD = rgb(167/255, 243/255, 208/255);   // #A7F3D0
const GRAY     = rgb(107/255, 114/255, 128/255);   // #6B7280
const LGRAY    = rgb(229/255, 231/255, 235/255);   // #E5E7EB
const DGRAY    = rgb( 55/255,  65/255,  81/255);   // #374151
const WHITE    = rgb(1, 1, 1);

const W = 612, H = 792, M = 36;
const INNER = W - M * 2; // 540pt

// Layout geometry – computed once
const HDR_BOT   = H - 60;   // 732: bottom of blue banner
const BAND_BOT  = H - 80;   // 712: bottom of grade band
const NAME_BOT  = H - 106;  // 686: bottom of name-row box
const TITLE_Y   = H - 124;  // 668: title first line
const INSTR_Y   = H - 154;  // 638: instruction line
const RULE_Y    = H - 162;  // 630: thin separator
const GRID_TOP  = H - 166;  // 626
const GRID_BOT  = 48;
const GRID_H    = GRID_TOP - GRID_BOT; // 578

// Five cycling badge colors (FG + BG)
const FG5 = [BLUE, TEAL, PURPLE, ORANGE, ROSE] as const;
const BG5 = [BLUE_BG, TEAL_BG, PURP_BG, ORNG_BG, ROSE_BG] as const;
function fg(i: number) { return FG5[i % 5]; }
function bg(i: number) { return BG5[i % 5]; }

// ── Text helpers ──────────────────────────────────────────────────────────────
function wrapText(text: string, font: PDFFont, size: number, maxW: number, maxLines = 3): string[] {
  if (font.widthOfTextAtSize(text, size) <= maxW) return [text];
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(test, size) > maxW && line) {
      lines.push(line);
      if (lines.length >= maxLines) { line = word; break; }
      line = word;
    } else {
      line = test;
    }
  }
  if (line) {
    if (lines.length >= maxLines) {
      // Fit trailing words into the last allowed line with ellipsis
      let last = lines[maxLines - 1];
      last += " " + line;
      while (font.widthOfTextAtSize(last + "...", size) > maxW && last.length > 4)
        last = last.slice(0, -1);
      lines[maxLines - 1] = last.trimEnd() + "...";
    } else {
      lines.push(line);
    }
  }
  return lines;
}

function trunc(text: string, font: PDFFont, size: number, maxW: number): string {
  if (font.widthOfTextAtSize(text, size) <= maxW) return text;
  let t = text;
  while (t.length > 3 && font.widthOfTextAtSize(t + "...", size) > maxW) t = t.slice(0, -1);
  return t + "...";
}

// ── Shared structural pieces ──────────────────────────────────────────────────
function drawWatermark(page: PDFPage, font: PDFFont) {
  page.drawText("worksheetdownload.com", {
    x: 72, y: 195, size: 55, font,
    color: rgb(0.72, 0.86, 1), opacity: 0.10,
    rotate: degrees(38),
  });
}

function drawHeader(
  page: PDFPage,
  bold: PDFFont, reg: PDFFont, obl: PDFFont,
  gradeLabel: string, subjectLabel: string
) {
  // Blue banner
  page.drawRectangle({ x: 0, y: HDR_BOT, width: W, height: 60, color: BLUE });

  // Icon (white-tinted document + pencil)
  const ix = M, iy = H - 54;
  page.drawRectangle({ x: ix,    y: iy,    width: 26, height: 34, color: rgb(1,1,1), opacity: 0.18 });
  page.drawRectangle({ x: ix+3,  y: iy+5,  width: 14, height: 20, color: WHITE });
  for (let l = 0; l < 3; l++) {
    page.drawLine({ start: { x: ix+5,  y: iy+20-l*5 }, end: { x: ix+15, y: iy+20-l*5 }, thickness: 0.8, color: LGRAY });
  }
  page.drawRectangle({ x: ix+18, y: iy+4,  width: 3,  height: 22, color: AMBER });
  page.drawRectangle({ x: ix+18, y: iy+1,  width: 3,  height: 4,  color: DGRAY });

  // Brand text
  const bx = M + 38;
  page.drawText("WorksheetDownload", { x: bx, y: H - 27, size: 14, font: bold, color: WHITE });
  const ww = bold.widthOfTextAtSize("WorksheetDownload", 14);
  page.drawText(".com",               { x: bx + ww, y: H - 27, size: 14, font: bold, color: AMBER });
  page.drawText("Learn \xB7 Practice \xB7 Excel",
    { x: bx, y: H - 45, size: 8, font: obl, color: rgb(0.85, 0.9, 1) });

  // Right tagline
  const tag = "Free Printable Worksheets";
  const tw  = obl.widthOfTextAtSize(tag, 8);
  page.drawText(tag, { x: W - M - tw, y: H - 36, size: 8, font: obl, color: rgb(0.85, 0.9, 1) });

  // Grade / Subject band
  page.drawRectangle({ x: 0, y: BAND_BOT, width: W, height: 20, color: BLUE_MD });
  page.drawText(`${gradeLabel}  \xB7  ${subjectLabel}`,
    { x: M, y: BAND_BOT + 5, size: 8, font: bold, color: DBLUE });
  const site = "worksheetdownload.com";
  const sw   = reg.widthOfTextAtSize(site, 7.5);
  page.drawText(site, { x: W - M - sw, y: BAND_BOT + 5, size: 7.5, font: reg, color: DBLUE });
}

function drawNameRow(page: PDFPage, bold: PDFFont) {
  const bh = NAME_BOT - BAND_BOT; // 26pt
  page.drawRectangle({
    x: M, y: NAME_BOT, width: INNER, height: bh,
    color: BLUE_BG, borderColor: BLUE_MD, borderWidth: 0.8,
  });
  const fields: { label: string; w: number }[] = [
    { label: "Name:",      w: 198 },
    { label: "Class/Sec:", w: 118 },
    { label: "Roll No:",   w: 90  },
    { label: "Date:",      w: 134 },
  ];
  let cx = M;
  for (let i = 0; i < fields.length; i++) {
    const f = fields[i];
    if (i > 0) page.drawLine({
      start: { x: cx, y: BAND_BOT }, end: { x: cx, y: NAME_BOT + bh },
      thickness: 0.5, color: BLUE_MD,
    });
    page.drawText(f.label, { x: cx + 5, y: NAME_BOT + 8, size: 8, font: bold, color: BLUE });
    const lw = bold.widthOfTextAtSize(f.label, 8);
    page.drawLine({
      start: { x: cx + lw + 6, y: NAME_BOT + 8 },
      end:   { x: cx + f.w - 5, y: NAME_BOT + 8 },
      thickness: 0.3, color: LGRAY,
    });
    cx += f.w;
  }
}

function drawTitle(page: PDFPage, bold: PDFFont, reg: PDFFont, topicLabel: string, sheetNumber: number) {
  const title = topicLabel.toUpperCase();
  const lines = wrapText(title, bold, 16, INNER, 2);
  for (let i = 0; i < lines.length; i++) {
    const lw = bold.widthOfTextAtSize(lines[i], 16);
    page.drawText(lines[i], { x: (W - lw) / 2, y: TITLE_Y - i * 20, size: 16, font: bold, color: BLUE });
  }

  page.drawText("Write your answer on the blank line provided.",
    { x: M, y: INSTR_Y, size: 8, font: reg, color: GRAY });

  // Score box
  const sbW = 132, sbX = W - M - sbW;
  page.drawRectangle({
    x: sbX, y: INSTR_Y - 3, width: sbW, height: 14,
    color: BLUE_BG, borderColor: BLUE_MD, borderWidth: 0.5,
  });
  page.drawText("Score:", { x: sbX + 4, y: INSTR_Y, size: 8, font: bold, color: GRAY });
  page.drawLine({
    start: { x: sbX + 46, y: INSTR_Y }, end: { x: sbX + 82, y: INSTR_Y },
    thickness: 0.8, color: GRAY,
  });
  page.drawText("/ 20", { x: sbX + 84, y: INSTR_Y, size: 8, font: bold, color: GRAY });
  const sn = `Sheet ${sheetNumber}/4`;
  const snW = bold.widthOfTextAtSize(sn, 7.5);
  page.drawText(sn, { x: sbX + sbW - snW - 3, y: INSTR_Y - 11, size: 7.5, font: bold, color: BLUE });

  // Separator rule with dots
  page.drawLine({
    start: { x: M, y: RULE_Y }, end: { x: W - M, y: RULE_Y },
    thickness: 0.5, color: BLUE_MD,
  });
}

function drawFooter(page: PDFPage, reg: PDFFont) {
  page.drawLine({ start: { x: M, y: 44 }, end: { x: W - M, y: 44 }, thickness: 0.5, color: LGRAY });
  const copy = "\xA9 2025 WorksheetDownload.com  |  Free printable worksheets for K-8";
  const cw   = reg.widthOfTextAtSize(copy, 6.5);
  page.drawText(copy, { x: (W - cw) / 2, y: 30, size: 6.5, font: reg, color: GRAY });
  const url  = "https://worksheetdownload.com/";
  const uw   = reg.widthOfTextAtSize(url, 6.5);
  page.drawText(url,  { x: (W - uw) / 2, y: 18, size: 6.5, font: reg, color: BLUE });
}

// ── Circle badge helper ───────────────────────────────────────────────────────
function drawBadge(page: PDFPage, bold: PDFFont, cx: number, cy: number, num: number, r: number, color: ReturnType<typeof rgb>) {
  page.drawEllipse({ x: cx, y: cy, xScale: r, yScale: r, color });
  const s = `${num}`;
  const sw = bold.widthOfTextAtSize(s, r * 0.9);
  page.drawText(s, { x: cx - sw / 2, y: cy - r * 0.38, size: r * 0.9, font: bold, color: WHITE });
}

// ── Math Grid: 4 cols × 5 rows ───────────────────────────────────────────────
function drawMathGrid(page: PDFPage, bold: PDFFont, _reg: PDFFont, questions: Question[]) {
  const COLS = 4, ROWS = 5;
  const colW = INNER / COLS;           // 135pt
  const rowH = GRID_H / ROWS;          // 115.6pt

  for (let i = 0; i < Math.min(20, questions.length); i++) {
    const row = Math.floor(i / COLS), col = i % COLS;
    const cx = M + col * colW;
    const cellTop = GRID_TOP - row * rowH;

    // Cell background (alternating)
    page.drawRectangle({
      x: cx, y: cellTop - rowH, width: colW, height: rowH,
      color: i % 2 === 0 ? BLUE_BG : WHITE,
      borderColor: LGRAY, borderWidth: 0.4,
    });
    // Left accent stripe
    page.drawRectangle({ x: cx, y: cellTop - rowH, width: 3, height: rowH, color: fg(i) });

    // Number badge
    drawBadge(page, bold, cx + 16, cellTop - 17, i + 1, 11, fg(i));

    // Question text (strip trailing " ?", wrap to 2 lines)
    let qText = questions[i].question.endsWith(" ?") ? questions[i].question.slice(0, -2) : questions[i].question;
    const textX = cx + 8, textMaxW = colW - 14;
    const qLines = wrapText(qText, bold, 13, textMaxW, 2);
    for (let l = 0; l < qLines.length; l++) {
      page.drawText(qLines[l], { x: textX, y: cellTop - 40 - l * 16, size: 13, font: bold, color: DGRAY });
    }

    // Ans: label + underline (pinned 24pt above cell bottom)
    const ansLabelY = cellTop - rowH + 24;
    page.drawText("Ans:", { x: cx + 8, y: ansLabelY, size: 8, font: bold, color: fg(i) });
    page.drawLine({
      start: { x: cx + 34,        y: ansLabelY - 1 },
      end:   { x: cx + colW - 8,  y: ansLabelY - 1 },
      thickness: 0.9, color: LGRAY,
    });
  }
}

// ── QA 2-col Grid: 2 cols × 10 rows ─────────────────────────────────────────
function drawQaGrid(page: PDFPage, bold: PDFFont, reg: PDFFont, questions: Question[], kgStyle = false) {
  const COLS = 2, ROWS = 10;
  const colW = INNER / COLS;           // 270pt
  const rowH = GRID_H / ROWS;         // 57.8pt
  const qSize   = kgStyle ? 11 : 9.5;
  const lineH   = kgStyle ? 14 : 12;
  const qFont   = kgStyle ? bold : reg;

  for (let i = 0; i < Math.min(20, questions.length); i++) {
    const row = Math.floor(i / COLS), col = i % COLS;
    const cx = M + col * colW;
    const cellTop = GRID_TOP - row * rowH;

    // Cell background
    page.drawRectangle({
      x: cx, y: cellTop - rowH, width: colW, height: rowH,
      color: i % 2 === 0 ? bg(i) : WHITE,
      borderColor: LGRAY, borderWidth: 0.3,
    });
    // Left stripe
    page.drawRectangle({ x: cx, y: cellTop - rowH, width: 2, height: rowH, color: fg(i) });

    // Square badge
    page.drawRectangle({ x: cx + 4, y: cellTop - 16, width: 13, height: 13, color: fg(i) });
    const ns = `${i + 1}`;
    const nw = bold.widthOfTextAtSize(ns, 7.5);
    page.drawText(ns, { x: cx + 4 + (13 - nw) / 2, y: cellTop - 13, size: 7.5, font: bold, color: WHITE });

    // Question text (wrapped, max 2 lines)
    const textX = cx + 21, textMaxW = colW - 25;
    const qLines = wrapText(questions[i].question, qFont, qSize, textMaxW, 2);
    for (let l = 0; l < qLines.length; l++) {
      page.drawText(qLines[l], { x: textX, y: cellTop - 13 - l * lineH, size: qSize, font: qFont, color: DGRAY });
    }

    // Ans: + underline (pinned 13pt above cell bottom)
    const ansY = cellTop - rowH + 13;
    page.drawText("Ans:", { x: cx + 6, y: ansY, size: 7.5, font: bold, color: fg(i) });
    page.drawLine({
      start: { x: cx + 30,       y: ansY - 1 },
      end:   { x: cx + colW - 6, y: ansY - 1 },
      thickness: 0.7, color: LGRAY,
    });
  }
}

// ── Letter Practice: 2 cols × 10 rows, large font ───────────────────────────
// (Changed from 4-col to 2-col so long questions like "1st letter of alphabet?" fully visible)
function drawLetterGrid(page: PDFPage, bold: PDFFont, _reg: PDFFont, questions: Question[]) {
  const COLS = 2, ROWS = 10;
  const colW = INNER / COLS;   // 270pt — plenty of room
  const rowH = GRID_H / ROWS;  // 57.8pt

  for (let i = 0; i < Math.min(20, questions.length); i++) {
    const row = Math.floor(i / COLS), col = i % COLS;
    const cx = M + col * colW;
    const cellTop = GRID_TOP - row * rowH;

    page.drawRectangle({
      x: cx, y: cellTop - rowH, width: colW, height: rowH,
      color: i % 2 === 0 ? PURP_BG : WHITE,
      borderColor: LGRAY, borderWidth: 0.3,
    });
    page.drawRectangle({ x: cx, y: cellTop - rowH, width: 2, height: rowH, color: PURPLE });

    // Circle badge (purple)
    drawBadge(page, bold, cx + 12, cellTop - 14, i + 1, 9, PURPLE);

    // Question text at 13pt bold, up to 2 lines
    const textMaxW = colW - 28;
    const qLines = wrapText(questions[i].question, bold, 13, textMaxW, 2);
    for (let l = 0; l < qLines.length; l++) {
      page.drawText(qLines[l], { x: cx + 26, y: cellTop - 13 - l * 16, size: 13, font: bold, color: DGRAY });
    }

    // Write: + underline
    const ansY = cellTop - rowH + 13;
    page.drawText("Write:", { x: cx + 6, y: ansY, size: 7.5, font: bold, color: PURPLE });
    page.drawLine({
      start: { x: cx + 36,       y: ansY - 1 },
      end:   { x: cx + colW - 6, y: ansY - 1 },
      thickness: 0.7, color: LGRAY,
    });
  }
}

// ── Answer Key (Page 2) ───────────────────────────────────────────────────────
function drawAnswerKey(
  page: PDFPage,
  bold: PDFFont, reg: PDFFont, obl: PDFFont,
  questions: Question[], topicLabel: string
) {
  // "ANSWER KEY" banner below header
  const bannerTop = BAND_BOT;      // 712
  const bannerH   = 28;
  const bannerBot = bannerTop - bannerH;  // 684

  page.drawRectangle({ x: 0, y: bannerBot, width: W, height: bannerH, color: EMERALD });
  const ak = "ANSWER KEY";
  const akW = bold.widthOfTextAtSize(ak, 14);
  page.drawText(ak, { x: (W - akW) / 2, y: bannerBot + 8, size: 14, font: bold, color: WHITE });

  // Topic subtitle
  const sub = topicLabel;
  const subW = obl.widthOfTextAtSize(sub, 9);
  page.drawText(sub, { x: (W - subW) / 2, y: bannerBot - 18, size: 9, font: obl, color: EMERALD });

  // Green rule
  page.drawLine({
    start: { x: M, y: bannerBot - 26 }, end: { x: W - M, y: bannerBot - 26 },
    thickness: 0.8, color: EMRLD_MD,
  });

  // Answer grid: 4 cols × 5 rows
  const AK_TOP = bannerBot - 32;   // 652
  const AK_BOT = 48;
  const AK_H   = AK_TOP - AK_BOT; // 604
  const COLS = 4, ROWS = 5;
  const colW = INNER / COLS;       // 135pt
  const rowH = AK_H / ROWS;        // 120.8pt

  for (let i = 0; i < Math.min(20, questions.length); i++) {
    const row = Math.floor(i / COLS), col = i % COLS;
    const cx = M + col * colW;
    const cellTop = AK_TOP - row * rowH;

    // Cell (green-tinted alternating)
    page.drawRectangle({
      x: cx, y: cellTop - rowH, width: colW, height: rowH,
      color: i % 2 === 0 ? EMRLD_BG : WHITE,
      borderColor: EMRLD_MD, borderWidth: 0.4,
    });
    // Left stripe
    page.drawRectangle({ x: cx, y: cellTop - rowH, width: 3, height: rowH, color: EMERALD });

    // Circle badge (green)
    drawBadge(page, bold, cx + 14, cellTop - 16, i + 1, 11, EMERALD);

    // Question text (small, gray, 1 line truncated)
    let qText = questions[i].question.endsWith(" ?") ? questions[i].question.slice(0, -2) : questions[i].question;
    qText = trunc(qText, reg, 7.5, colW - 30);
    page.drawText(qText, { x: cx + 28, y: cellTop - 13, size: 7.5, font: reg, color: GRAY });

    // Divider
    page.drawLine({
      start: { x: cx + 6, y: cellTop - 28 }, end: { x: cx + colW - 6, y: cellTop - 28 },
      thickness: 0.4, color: EMRLD_MD,
    });

    // "Ans:" label
    page.drawText("Ans:", { x: cx + 8, y: cellTop - 41, size: 8, font: bold, color: EMERALD });

    // Answer text (bold, emerald, up to 2 lines)
    const ansLines = wrapText(questions[i].answer, bold, 12, colW - 14, 2);
    for (let l = 0; l < ansLines.length; l++) {
      page.drawText(ansLines[l], { x: cx + 8, y: cellTop - 56 - l * 15, size: 12, font: bold, color: EMERALD });
    }
  }
}

// ── Main builder ──────────────────────────────────────────────────────────────
export async function buildWorksheetPdf(opts: BuildOpts): Promise<Uint8Array> {
  const { topicLabel, gradeLabel, subjectLabel, sheetNumber, questions, layout = "qa-2col" } = opts;

  const doc  = await PDFDocument.create();
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await doc.embedFont(StandardFonts.Helvetica);
  const obl  = await doc.embedFont(StandardFonts.HelveticaOblique);

  // ── Page 1: Questions ────────────────────────────────────────────────────
  const p1 = doc.addPage([W, H]);
  drawWatermark(p1, obl);
  drawHeader(p1, bold, reg, obl, gradeLabel, subjectLabel);
  drawNameRow(p1, bold);
  drawTitle(p1, bold, reg, topicLabel, sheetNumber);
  drawFooter(p1, reg);

  if (layout === "math-grid") {
    drawMathGrid(p1, bold, reg, questions);
  } else if (layout === "letter-practice") {
    drawLetterGrid(p1, bold, reg, questions);
  } else if (layout === "kg-2col") {
    drawQaGrid(p1, bold, reg, questions, true);
  } else {
    drawQaGrid(p1, bold, reg, questions, false);
  }

  // ── Page 2: Answer Key ───────────────────────────────────────────────────
  const p2 = doc.addPage([W, H]);
  drawWatermark(p2, obl);
  drawHeader(p2, bold, reg, obl, gradeLabel, subjectLabel);
  drawFooter(p2, reg);
  drawAnswerKey(p2, bold, reg, obl, questions, topicLabel);

  return doc.save();
}
