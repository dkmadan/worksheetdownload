import { PDFDocument, PDFPage, PDFFont, StandardFonts, rgb, degrees } from "pdf-lib";

// ── Page geometry (A4 Portrait) ──────────────────────────────────────────────
const W = 595, H = 842;
const ML = 30, MR = 30, MT = 28, MB = 25;
const CW = W - ML - MR;              // 535pt
const COL_GAP  = 12;
const COL_W    = (CW - COL_GAP) / 2; // 261.5pt

// Section heights
const LOGO_SZ   = 42;
const HDR_H     = 54;
const HDR_GAP   = 8;
const STRIP_H   = 24;   // student info strip
const STRIP_GAP = 8;
const BNR_H     = 42;   // title banner
const BNR_GAP   = 8;
const FTR_H     = 20;
const FTR_GAP   = 6;

// Page 1 vertical geometry
const HDR_TOP   = H  - MT;
const HDR_BOT   = HDR_TOP  - HDR_H;
const STRIP_TOP = HDR_BOT  - HDR_GAP;
const STRIP_BOT = STRIP_TOP - STRIP_H;
const BNR_TOP   = STRIP_BOT - STRIP_GAP;
const BNR_BOT   = BNR_TOP  - BNR_H;
const GRID_TOP  = BNR_BOT  - BNR_GAP;
const FTR_TOP   = MB + FTR_H;
const GRID_BOT  = FTR_TOP  + FTR_GAP;
const GRID_H    = GRID_TOP - GRID_BOT;   // available height for 10-row×2-col grid
const CARD_GAP  = 8;
const CARD_H    = Math.floor((GRID_H - 9 * CARD_GAP) / 10);   // ~54–55pt

// Page 2: no student strip
const BNR_TOP2  = HDR_BOT  - HDR_GAP;
const BNR_BOT2  = BNR_TOP2 - BNR_H;
const GRID_TOP2 = BNR_BOT2 - BNR_GAP;
const GRID_H2   = GRID_TOP2 - GRID_BOT;
const CARD_H2   = Math.floor((GRID_H2 - 9 * CARD_GAP) / 10);  // ~57–58pt

// ── Colour tokens ────────────────────────────────────────────────────────────
const px = (r: number, g: number, b: number) => rgb(r/255, g/255, b/255);

const NAVY     = px( 30,  58, 138);   // #1e3a8a
const BLUE     = px( 37,  99, 235);   // #2563eb
const BLUE_T   = px( 30,  64, 175);   // #1e40af
const BLUE_B   = px(239, 246, 255);   // #eff6ff  q-number badge bg
const BLUE_M   = px(219, 234, 254);   // #dbeafe  q-number badge border
const BLINE_C  = px(191, 219, 254);   // #bfdbfe  banner subtitle tint
const SL100    = px(241, 245, 249);   // #f1f5f9
const SL200    = px(226, 232, 240);   // #e2e8f0  card border
const SL300    = px(203, 213, 225);   // #cbd5e1  dashed underline
const SL400    = px(148, 163, 184);   // #94a3b8  answer underline
const SL500    = px(100, 116, 139);   // #64748b  muted text
const SL700    = px( 51,  65,  81);   // #334155  body text
const SL900    = px( 15,  23,  42);   // #0f172a  title text
const SL_BG    = px(248, 250, 252);   // #f8fafc  strip bg
const EMRLD    = px( 16, 185, 129);   // #10b981  answer-card left accent
const EMRLD_D  = px(  6,  95,  70);   // #065f46  green banner grad start
const EMRLD_M  = px(  5, 150, 105);   // #059669  green banner grad end
const EMRLD_B  = px(236, 253, 245);   // #ecfdf5  answer badge bg
const EMRLD_L  = px(167, 243, 208);   // #a7f3d0  answer badge border
const EMRLD_T  = px(  4, 120,  87);   // #047857  answer badge text
const GRNA_C   = px(167, 243, 208);   // #a7f3d0  green banner subtitle tint
const AMBER    = px(245, 158,  11);   // #f59e0b
const WHITE    = rgb(1, 1, 1);

interface Fonts { bold: PDFFont; reg: PDFFont }

function sanitize(t: string): string {
  return t.replace(/[^\x00-\xFF]/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").trim();
}

function wrap(text: string, maxW: number, font: PDFFont, sz: number, maxLines = 3): string[] {
  const s = sanitize(text);
  if (font.widthOfTextAtSize(s, sz) <= maxW) return [s];
  const words = s.split(" ");
  const out: string[] = [];
  let line = "";
  for (const w of words) {
    const t = line ? line + " " + w : w;
    if (font.widthOfTextAtSize(t, sz) > maxW && line) {
      out.push(line);
      if (out.length >= maxLines) { line = w; break; }
      line = w;
    } else line = t;
  }
  if (line) {
    if (out.length >= maxLines) {
      let last = out[maxLines - 1] + " " + line;
      while (font.widthOfTextAtSize(last + "...", sz) > maxW && last.length > 4) last = last.slice(0, -1);
      out[maxLines - 1] = last.trimEnd() + "...";
    } else out.push(line);
  }
  return out;
}

function trunc(text: string, font: PDFFont, sz: number, maxW: number): string {
  const s = sanitize(text);
  if (font.widthOfTextAtSize(s, sz) <= maxW) return s;
  let t = s;
  while (t.length > 3 && font.widthOfTextAtSize(t + "...", sz) > maxW) t = t.slice(0, -1);
  return t.trimEnd() + "...";
}

// ── Gradient helper ──────────────────────────────────────────────────────────
type RGB3 = [number, number, number];
function drawGrad(page: PDFPage, x: number, y: number, w: number, h: number, c1: RGB3, c2: RGB3) {
  const n = 24, sw = w / n;
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    page.drawRectangle({
      x: x + i * sw, y, width: sw + 0.5, height: h,
      color: rgb(c1[0]+t*(c2[0]-c1[0]), c1[1]+t*(c2[1]-c1[1]), c1[2]+t*(c2[2]-c1[2])),
    });
  }
}

// ── Logo ─────────────────────────────────────────────────────────────────────
function drawLogo(page: PDFPage, sx: number, sy: number) {
  const s = LOGO_SZ / 100;
  page.drawRectangle({ x: sx, y: sy, width: LOGO_SZ, height: LOGO_SZ, color: px(36, 59, 110) });
  page.drawRectangle({ x: sx+18*s, y: sy+22*s, width: 52*s, height: 64*s, color: WHITE });
  for (const [gy, x1, x2] of [[36,28,60],[46,28,56],[56,28,58],[66,28,50]] as RGB3[]) {
    page.drawLine({ start: { x: sx+x1*s, y: sy+(100-gy)*s }, end: { x: sx+x2*s, y: sy+(100-gy)*s }, thickness: 3.5*s, color: px(148,163,184) });
  }
  page.drawLine({ start: { x: sx+38*s, y: sy+32*s }, end: { x: sx+65*s, y: sy+60*s }, thickness: 7*s, color: AMBER });
  page.drawLine({ start: { x: sx+63*s, y: sy+62*s }, end: { x: sx+70*s, y: sy+69*s }, thickness: 7*s, color: px(251,113,133) });
  page.drawLine({ start: { x: sx+33*s, y: sy+28*s }, end: { x: sx+38*s, y: sy+32*s }, thickness: 5*s, color: px(55,65,81) });
}

// ── Watermark ────────────────────────────────────────────────────────────────
function drawWatermark(page: PDFPage, font: PDFFont) {
  page.drawText("WORKSHEETDOWNLOAD", { x: 70, y: H/2+30, size: 52, font, color: BLUE, opacity: 0.032, rotate: degrees(-34) });
}

// ── Header bar ───────────────────────────────────────────────────────────────
function drawHeader(page: PDFPage, gradeLabel: string, subjectLabel: string, isAnswerKey: boolean, f: Fonts) {
  const logoY = HDR_BOT + (HDR_H - LOGO_SZ) / 2;
  drawLogo(page, ML, logoY);

  const bx = ML + LOGO_SZ + 10;
  const by = logoY + LOGO_SZ - 12;
  const w1 = f.bold.widthOfTextAtSize("Worksheet", 13);
  const w2 = f.bold.widthOfTextAtSize("Download", 13);
  page.drawText("Worksheet", { x: bx,       y: by, size: 13, font: f.bold, color: SL900 });
  page.drawText("Download",  { x: bx+w1,    y: by, size: 13, font: f.bold, color: BLUE });
  page.drawText(".com",      { x: bx+w1+w2, y: by, size: 13, font: f.bold, color: SL900 });
  page.drawText("LEARN \xB7 PRACTICE \xB7 EXCEL", { x: bx, y: by-13, size: 6.5, font: f.bold, color: SL500 });

  // Grade badge
  const bW = 130, bH = 36, bX = W-MR-bW, bY = HDR_BOT + (HDR_H-bH)/2;
  const badgeBg = isAnswerKey ? EMRLD_B : BLUE_B;
  const badgeBd = isAnswerKey ? EMRLD_L : BLUE_M;
  page.drawRectangle({ x: bX, y: bY, width: bW, height: bH, color: badgeBg, borderColor: badgeBd, borderWidth: 0.75 });
  const subj = subjectLabel.toUpperCase().substring(0, 22);
  const subjW = f.bold.widthOfTextAtSize(subj, 6);
  page.drawText(subj, { x: bX+bW-subjW-8, y: bY+bH-12, size: 6, font: f.bold, color: isAnswerKey ? EMRLD_T : BLUE_T });
  const grade = sanitize(gradeLabel).substring(0, 16);
  const gradeW = f.bold.widthOfTextAtSize(grade, 10);
  page.drawText(grade, { x: bX+bW-gradeW-8, y: bY+8, size: 10, font: f.bold, color: isAnswerKey ? EMRLD_D : NAVY });

  page.drawLine({ start: { x: ML, y: HDR_BOT }, end: { x: W-MR, y: HDR_BOT }, thickness: 1.5, color: SL100 });
}

// ── Student info strip (page 1 only) ────────────────────────────────────────
function drawStudentStrip(page: PDFPage, f: Fonts) {
  page.drawRectangle({ x: ML, y: STRIP_BOT, width: CW, height: STRIP_H, color: SL_BG, borderColor: SL200, borderWidth: 0.75 });
  const labels = ["Name:", "Class/Sec:", "Roll No:", "Date:"];
  const ratios  = [0.35, 0.28, 0.18, 0.19];
  const lPad = 8, rPad = 6, lblGap = 4, fldGap = 10, n = labels.length;
  const lblWidths = labels.map(l => f.bold.widthOfTextAtSize(l, 7));
  const totalLblW = lblWidths.reduce((a, b) => a + b, 0);
  const totalFldW = CW - lPad - rPad - totalLblW - lblGap * n - fldGap * (n - 1);
  let lx = ML + lPad;
  const ly = STRIP_BOT + STRIP_H / 2;
  for (let i = 0; i < n; i++) {
    page.drawText(labels[i], { x: lx, y: ly, size: 7, font: f.bold, color: SL500 });
    lx += lblWidths[i] + lblGap;
    const fw = Math.max(18, totalFldW * ratios[i]);
    page.drawLine({ start: { x: lx, y: ly-1 }, end: { x: lx+fw, y: ly-1 }, thickness: 1.5, color: SL300, dashArray: [2, 2], dashPhase: 0 });
    lx += fw + (i < n-1 ? fldGap : 0);
  }
}

// ── Title banner ─────────────────────────────────────────────────────────────
function drawBanner(
  page: PDFPage, banTop: number,
  title: string, subtitle: string, isAnswerKey: boolean, totalItems: number,
  f: Fonts
) {
  const banBot = banTop - BNR_H;
  const g1: RGB3 = isAnswerKey ? [EMRLD_D.red, EMRLD_D.green, EMRLD_D.blue] : [NAVY.red, NAVY.green, NAVY.blue];
  const g2: RGB3 = isAnswerKey ? [EMRLD_M.red, EMRLD_M.green, EMRLD_M.blue] : [BLUE.red, BLUE.green, BLUE.blue];
  drawGrad(page, ML, banBot, CW, BNR_H, g1, g2);

  page.drawText(sanitize(title).substring(0, 55), { x: ML+12, y: banBot+BNR_H-17, size: 11, font: f.bold, color: WHITE });
  const subColor = isAnswerKey ? GRNA_C : BLINE_C;
  page.drawText(sanitize(subtitle).substring(0, 75), { x: ML+12, y: banBot+BNR_H-30, size: 7, font: f.reg, color: subColor });

  if (!isAnswerKey) {
    // Score badge: "Score: ___ / 20"
    const sc1 = "Score:";
    const sc2 = "/ 20";
    const sc1W = f.bold.widthOfTextAtSize(sc1, 7);
    const sc2W = f.bold.widthOfTextAtSize(sc2, 7);
    const lineW = 26;
    const pillW = sc1W + 5 + lineW + 5 + sc2W + 16;
    const pillH = 20, pillX = W-MR-pillW-4, pillY = banBot+(BNR_H-pillH)/2;
    page.drawRectangle({ x: pillX, y: pillY, width: pillW, height: pillH, color: WHITE, opacity: 0.18 });
    page.drawRectangle({ x: pillX, y: pillY, width: pillW, height: pillH, color: WHITE, opacity: 0, borderColor: WHITE, borderWidth: 0.75, borderOpacity: 0.3 });
    const ty = pillY + pillH/2 - 3;
    let px2 = pillX + 8;
    page.drawText(sc1, { x: px2, y: ty, size: 7, font: f.bold, color: WHITE });
    px2 += sc1W + 5;
    page.drawLine({ start: { x: px2, y: ty-1 }, end: { x: px2+lineW, y: ty-1 }, thickness: 1, color: WHITE, opacity: 0.85 });
    px2 += lineW + 5;
    page.drawText(sc2, { x: px2, y: ty, size: 7, font: f.bold, color: WHITE });
  } else {
    // "Total: N Items" pill
    const pillTxt = `Total: ${totalItems} Items`;
    const pillW = f.bold.widthOfTextAtSize(pillTxt, 6.5) + 18;
    const pillH = 18, pillX = W-MR-pillW-4, pillY = banBot+(BNR_H-pillH)/2;
    page.drawRectangle({ x: pillX, y: pillY, width: pillW, height: pillH, color: WHITE, opacity: 0.18 });
    page.drawRectangle({ x: pillX, y: pillY, width: pillW, height: pillH, color: WHITE, opacity: 0, borderColor: WHITE, borderWidth: 0.75, borderOpacity: 0.3 });
    page.drawText(pillTxt, { x: pillX+9, y: pillY+5, size: 6.5, font: f.bold, color: WHITE });
  }
}

// ── Footer ───────────────────────────────────────────────────────────────────
function drawFooter(page: PDFPage, pgNum: number, f: Fonts) {
  page.drawLine({ start: { x: ML, y: FTR_TOP }, end: { x: W-MR, y: FTR_TOP }, thickness: 1, color: SL100 });

  // Line 1 (top): full-width copyright — no badge here so no overlap possible
  const fy1 = MB + 13;
  page.drawText("\xA9 2026 ", { x: ML, y: fy1, size: 7, font: f.reg, color: SL500 });
  const c1w = f.reg.widthOfTextAtSize("\xA9 2026 ", 7);
  page.drawText("WorksheetDownload.com", { x: ML+c1w, y: fy1, size: 7, font: f.bold, color: BLUE });
  const c2w = f.bold.widthOfTextAtSize("WorksheetDownload.com", 7);
  page.drawText(" - Free Printable Educational Resources", { x: ML+c1w+c2w, y: fy1, size: 7, font: f.reg, color: SL500 });

  // Line 2 (bottom): centered URL + right-aligned sheet badge — different x ranges, no overlap
  const fy2 = MB + 3;
  const url = "https://worksheetdownload.com/";
  const uw = f.reg.widthOfTextAtSize(url, 6.5);
  page.drawText(url, { x: W/2-uw/2, y: fy2+1, size: 6.5, font: f.reg, color: SL400 });

  const badge = `Sheet ${pgNum}/2`;
  const bw = f.bold.widthOfTextAtSize(badge, 7) + 14;
  page.drawRectangle({ x: W-MR-bw, y: fy2-1, width: bw, height: 11, color: SL100, borderColor: SL200, borderWidth: 0.5 });
  page.drawText(badge, { x: W-MR-bw+7, y: fy2, size: 7, font: f.bold, color: SL500 });
}

// ── Q card (page 1) ──────────────────────────────────────────────────────────
function drawQCard(
  page: PDFPage, x: number, top: number, w: number, h: number,
  num: number, question: string, qFontSize: number, f: Fonts
) {
  const bot = top - h;

  // Card background + border
  page.drawRectangle({ x, y: bot, width: w, height: h, color: WHITE, borderColor: SL200, borderWidth: 0.75 });

  // Number badge (20×20, blue tint)
  const BADGE = 20;
  const badgeX = x + 6, badgeY = top - 6 - BADGE;
  page.drawRectangle({ x: badgeX, y: badgeY, width: BADGE, height: BADGE, color: BLUE_B, borderColor: BLUE_M, borderWidth: 1.2 });
  const ns = `${num}`;
  const nw = f.bold.widthOfTextAtSize(ns, 7.5);
  page.drawText(ns, { x: badgeX + (BADGE-nw)/2, y: badgeY + 5.5, size: 7.5, font: f.bold, color: BLUE_T });

  // Question text — starts to the right of badge, vertically centered with badge
  const qTextX = badgeX + BADGE + 5;
  const maxQW  = w - (qTextX - x) - 6;
  const qLines = wrap(question, maxQW, f.bold, qFontSize, 2);
  const qCenterY = badgeY + BADGE/2;  // badge vertical center
  // For 1 line: baseline at center. For 2 lines: first line center + half line-height above center
  const lineH = qFontSize + 2;
  const totalQH = qLines.length * lineH;
  let qy = qCenterY + totalQH/2 - lineH/2 + 1;
  for (const line of qLines) {
    page.drawText(line, { x: qTextX, y: qy, size: qFontSize, font: f.bold, color: SL900 });
    qy -= lineH;
  }

  // "Ans:" label + answer line — pinned near bottom
  const ansY  = bot + 12;
  const labelTxt = "Ans:";
  const labelW   = f.bold.widthOfTextAtSize(labelTxt, 7);
  page.drawText(labelTxt, { x: x+7, y: ansY, size: 7, font: f.bold, color: SL500 });
  page.drawLine({
    start: { x: x+7+labelW+4, y: ansY-1 },
    end:   { x: x+w-7,        y: ansY-1 },
    thickness: 1.2, color: SL400,
  });
}

// ── A card (page 2) ──────────────────────────────────────────────────────────
function drawACard(
  page: PDFPage, x: number, top: number, w: number, h: number,
  num: number, question: string, answer: string, f: Fonts
) {
  const bot = top - h;

  // Card background + border
  page.drawRectangle({ x, y: bot, width: w, height: h, color: WHITE, borderColor: SL200, borderWidth: 0.75 });
  // Green left accent (3.5pt)
  page.drawRectangle({ x, y: bot, width: 3.5, height: h, color: EMRLD });

  // Number badge (20×20, green tint)
  const BADGE = 20;
  const badgeX = x + 7, badgeY = top - 6 - BADGE;
  page.drawRectangle({ x: badgeX, y: badgeY, width: BADGE, height: BADGE, color: EMRLD_B, borderColor: EMRLD_L, borderWidth: 1.2 });
  const ns = `${num}`;
  const nw = f.bold.widthOfTextAtSize(ns, 7.5);
  page.drawText(ns, { x: badgeX + (BADGE-nw)/2, y: badgeY + 5.5, size: 7.5, font: f.bold, color: EMRLD_T });

  // Question text (1 line, truncated, next to badge)
  const qTextX  = badgeX + BADGE + 5;
  const maxQW   = w - (qTextX - x) - 6;
  const qShort  = trunc(question, f.reg, 7.5, maxQW);
  const qCenterY = badgeY + BADGE/2;
  page.drawText(qShort, { x: qTextX, y: qCenterY - 3, size: 7.5, font: f.reg, color: SL700 });

  // Thin separator below badge row
  const sepY = badgeY - 4;
  page.drawLine({ start: { x: x+4, y: sepY }, end: { x: x+w-4, y: sepY }, thickness: 0.5, color: EMRLD_L });

  // Answer pill — pinned near bottom
  const pillH = 13;
  const pillY = bot + 8;
  const ansText = sanitize(answer).substring(0, 48);
  const ansW = f.bold.widthOfTextAtSize(ansText, 7.5);
  const pillW = Math.min(w - 14, ansW + 16);
  const clippedAns = ansW + 16 > w - 14
    ? trunc(answer, f.bold, 7.5, w - 30)
    : ansText;
  page.drawRectangle({ x: x+7, y: pillY, width: pillW, height: pillH, color: EMRLD_B, borderColor: EMRLD_L, borderWidth: 0.75 });
  page.drawText(clippedAns, { x: x+15, y: pillY + 3, size: 7.5, font: f.bold, color: EMRLD_T });
}

// ── Grid helpers ─────────────────────────────────────────────────────────────
function drawQuestionGrid(
  page: PDFPage, questions: Question[], gridTop: number, cardH: number, qFontSize: number, f: Fonts
) {
  for (let col = 0; col < 2; col++) {
    const colX = ML + col * (COL_W + COL_GAP);
    let cardY = gridTop;
    for (let row = 0; row < 10; row++) {
      const idx = col * 10 + row;
      if (idx >= questions.length) break;
      drawQCard(page, colX, cardY, COL_W, cardH, idx + 1, questions[idx].question, qFontSize, f);
      cardY -= cardH + CARD_GAP;
    }
  }
}

function drawAnswerGrid(
  page: PDFPage, questions: Question[], gridTop: number, cardH: number, f: Fonts
) {
  for (let col = 0; col < 2; col++) {
    const colX = ML + col * (COL_W + COL_GAP);
    let cardY = gridTop;
    for (let row = 0; row < 10; row++) {
      const idx = col * 10 + row;
      if (idx >= questions.length) break;
      drawACard(page, colX, cardY, COL_W, cardH, idx + 1, questions[idx].question, questions[idx].answer, f);
      cardY -= cardH + CARD_GAP;
    }
  }
}

// ── Public interface ─────────────────────────────────────────────────────────
export type WorksheetLayout = "math-grid" | "qa-2col" | "kg-2col" | "letter-practice";
export interface Question { question: string; answer: string }
export interface BuildOpts {
  topicLabel: string; gradeLabel: string; subjectLabel: string;
  sheetNumber: number; questions: Question[]; layout?: WorksheetLayout;
}

export async function buildWorksheetPdf(opts: BuildOpts): Promise<Uint8Array> {
  const { topicLabel, gradeLabel, subjectLabel, sheetNumber, questions, layout = "qa-2col" } = opts;

  const doc  = await PDFDocument.create();
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await doc.embedFont(StandardFonts.Helvetica);
  const f: Fonts = { bold, reg };

  const allQ = questions.slice(0, 20);
  const topicUp = sanitize(topicLabel).toUpperCase();
  const isKg = layout === "kg-2col" || layout === "letter-practice";
  const qFontSize = isKg ? 9.5 : 8;

  // ── Page 1: Questions ──────────────────────────────────────────────────────
  {
    const page = doc.addPage([W, H]);
    drawWatermark(page, bold);
    drawHeader(page, gradeLabel, subjectLabel, false, f);
    drawStudentStrip(page, f);
    drawBanner(
      page, BNR_TOP,
      `${topicUp} WORKSHEET`,
      "Write your answer on the blank line provided.",
      false, allQ.length, f
    );
    drawFooter(page, 1, f);
    drawQuestionGrid(page, allQ, GRID_TOP, CARD_H, qFontSize, f);
  }

  // ── Page 2: Answer Key ─────────────────────────────────────────────────────
  {
    const page = doc.addPage([W, H]);
    drawWatermark(page, bold);
    drawHeader(page, gradeLabel, subjectLabel, true, f);
    drawBanner(
      page, BNR_TOP2,
      "ANSWER KEY & SOLUTIONS",
      "Verified answers for grading and self-assessment.",
      true, allQ.length, f
    );
    drawFooter(page, 2, f);
    drawAnswerGrid(page, allQ, GRID_TOP2, CARD_H2, f);
  }

  return doc.save();
}
