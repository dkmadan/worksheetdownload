import { PDFDocument, PDFPage, PDFFont, StandardFonts, rgb, degrees } from "pdf-lib";

// ── A4 Portrait layout ───────────────────────────────────────────────────────
const W = 595, H = 842;
const ML = 30, MR = 30, MT = 28, MB = 25;
const CW = W - ML - MR; // 535
const COL_GAP = 10;
const COL_W = (CW - COL_GAP) / 2; // 262.5

const LOGO_SZ  = 40;
const HDR_H    = 54;
const HDR_GAP  = 8;
const STRIP_H  = 22;
const STRIP_GAP= 7;
const BNR_H    = 42;
const BNR_GAP  = 8;
const FTR_H    = 20;
const FTR_GAP  = 6;

const HDR_TOP   = H - MT;
const HDR_BOT   = HDR_TOP - HDR_H;
const STRIP_TOP = HDR_BOT - HDR_GAP;
const STRIP_BOT = STRIP_TOP - STRIP_H;
const BNR_TOP   = STRIP_BOT - STRIP_GAP;
const BNR_BOT   = BNR_TOP - BNR_H;
const GRID_TOP  = BNR_BOT - BNR_GAP;
const FTR_TOP   = MB + FTR_H;
const GRID_BOT  = FTR_TOP + FTR_GAP;
const GRID_H    = GRID_TOP - GRID_BOT;
const CARD_GAP  = 7;
const CARD_H    = Math.floor((GRID_H - 4 * CARD_GAP) / 5);

// Page 2 (no strip): banner starts right after header
const BNR_TOP2  = HDR_BOT - HDR_GAP;
const BNR_BOT2  = BNR_TOP2 - BNR_H;
const GRID_TOP2 = BNR_BOT2 - BNR_GAP;
const GRID_H2   = GRID_TOP2 - GRID_BOT;
const CARD_H2   = Math.floor((GRID_H2 - 4 * CARD_GAP) / 5);

type RGB3 = readonly [number, number, number];
const NAVY:  RGB3 = [0.118, 0.227, 0.541];
const BLUE:  RGB3 = [0.145, 0.388, 0.922];
const SL100: RGB3 = [0.945, 0.961, 0.976];
const SL200: RGB3 = [0.886, 0.910, 0.941];
const SL300: RGB3 = [0.796, 0.835, 0.882];
const SL500: RGB3 = [0.392, 0.455, 0.545];
const SL700: RGB3 = [0.200, 0.255, 0.333];
const SL900: RGB3 = [0.059, 0.090, 0.165];
const BPILL: RGB3 = [0.937, 0.961, 1.000];
const BLINE: RGB3 = [0.749, 0.859, 0.996];
const BTEXT: RGB3 = [0.114, 0.306, 0.847];
const GRN_ACC: RGB3 = [0.024, 0.373, 0.275];  // #065f46 dark green
const GRN_BG:  RGB3 = [0.925, 0.992, 0.961];  // #ecfdf5
const GRN_BD:  RGB3 = [0.655, 0.953, 0.816];  // #a7f3d0
const GRN_TXT: RGB3 = [0.278, 0.471, 0.325];  // #047857

const Q_TAGS = [
  "Threat Model", "Architecture", "Configuration", "Hardening", "SSO / IdP",
  "Observability","Lifecycle",    "Compliance",    "Testing",   "Tuning",
];

interface Fonts { bold: PDFFont; reg: PDFFont; mono: PDFFont }
function c3(c: RGB3) { return rgb(c[0], c[1], c[2]); }

function sanitize(t: string): string {
  return t.replace(/[^\x00-\xFF]/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").trim();
}

function wrap(text: string, maxW: number, font: PDFFont, sz: number): string[] {
  const s = sanitize(text);
  if (font.widthOfTextAtSize(s, sz) <= maxW) return [s];
  const words = s.split(" "); const out: string[] = []; let line = "";
  for (const w of words) {
    const t = line ? line + " " + w : w;
    if (font.widthOfTextAtSize(t, sz) > maxW && line) { out.push(line); line = w; } else line = t;
  }
  if (line) out.push(line);
  return out;
}

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

function drawLogo(page: PDFPage, sx: number, sy: number) {
  const s = LOGO_SZ / 100;
  page.drawRectangle({ x: sx, y: sy, width: LOGO_SZ, height: LOGO_SZ, color: rgb(0.141,0.231,0.431) });
  page.drawRectangle({ x: sx+18*s, y: sy+22*s, width: 52*s, height: 64*s, color: rgb(1,1,1) });
  for (const [gy,x1,x2] of [[36,28,60],[46,28,56],[56,28,58],[66,28,50]] as [number,number,number][]) {
    page.drawLine({ start: { x: sx+x1*s, y: sy+(100-gy)*s }, end: { x: sx+x2*s, y: sy+(100-gy)*s }, thickness: 3.5*s, color: rgb(0.58,0.64,0.73) });
  }
  page.drawLine({ start: { x: sx+38*s, y: sy+32*s }, end: { x: sx+65*s, y: sy+60*s }, thickness: 7*s, color: rgb(0.984,0.749,0.141) });
  page.drawLine({ start: { x: sx+63*s, y: sy+62*s }, end: { x: sx+70*s, y: sy+69*s }, thickness: 7*s, color: rgb(0.984,0.443,0.522) });
  page.drawLine({ start: { x: sx+33*s, y: sy+28*s }, end: { x: sx+38*s, y: sy+32*s }, thickness: 5*s, color: rgb(0.216,0.255,0.318) });
}

function drawWatermark(page: PDFPage, font: PDFFont) {
  page.drawText("WORKSHEETDOWNLOAD", { x: 70, y: H/2+30, size: 52, font, color: c3(BLUE), opacity: 0.032, rotate: degrees(-34) });
}

function drawHeader(page: PDFPage, tagline: string, badgeLabel: string, badgeName: string, f: Fonts) {
  const logoY = HDR_BOT + (HDR_H - LOGO_SZ) / 2;
  drawLogo(page, ML, logoY);
  const bx = ML + LOGO_SZ + 10, by = logoY + LOGO_SZ - 11;
  const ws = f.bold.widthOfTextAtSize("Worksheet", 12);
  const dl = f.bold.widthOfTextAtSize("Download", 12);
  page.drawText("Worksheet", { x: bx,      y: by, size: 12, font: f.bold, color: c3(SL900) });
  page.drawText("Download",  { x: bx+ws,   y: by, size: 12, font: f.bold, color: c3(BLUE) });
  page.drawText(".com",      { x: bx+ws+dl, y: by, size: 12, font: f.bold, color: c3(SL900) });
  page.drawText(sanitize(tagline).toUpperCase(), { x: bx, y: by-13, size: 6.5, font: f.bold, color: c3(SL500) });

  const bW=130, bH=34, bX=W-MR-bW, bY=HDR_BOT+(HDR_H-bH)/2;
  page.drawRectangle({ x: bX, y: bY, width: bW, height: bH, color: c3(BPILL), borderColor: c3(BLINE), borderWidth: 0.75 });
  const lbl = sanitize(badgeLabel).substring(0,24).toUpperCase();
  const lw = f.bold.widthOfTextAtSize(lbl, 6);
  page.drawText(lbl, { x: bX+bW-lw-7, y: bY+bH-11, size: 6, font: f.bold, color: c3(BTEXT) });
  const nm = sanitize(badgeName).substring(0,18);
  const nw = f.bold.widthOfTextAtSize(nm, 9.5);
  page.drawText(nm, { x: bX+bW-nw-7, y: bY+8, size: 9.5, font: f.bold, color: c3(NAVY) });
  page.drawLine({ start: { x: ML, y: HDR_BOT }, end: { x: W-MR, y: HDR_BOT }, thickness: 1.5, color: c3(SL100) });
}

function drawStudentStrip(page: PDFPage, f: Fonts) {
  page.drawRectangle({ x: ML, y: STRIP_BOT, width: CW, height: STRIP_H, color: rgb(0.973,0.980,0.988), borderColor: c3(SL200), borderWidth: 0.75 });
  const labels = ["Name:", "Cohort/Batch:", "Date:", "Score:"];
  const ratios  = [0.35, 0.28, 0.22, 0.15]; // proportions of available field space (sum = 1.0)
  const lPad = 8, rPad = 8, lblGap = 4, fldGap = 8;
  const n = labels.length;
  const lblWidths = labels.map(l => f.bold.widthOfTextAtSize(l, 7));
  const totalLblW = lblWidths.reduce((a, b) => a + b, 0);
  const totalFldW = CW - lPad - rPad - totalLblW - lblGap * n - fldGap * (n - 1);
  let lx = ML + lPad;
  const ly = STRIP_BOT + STRIP_H / 2 + 1;
  for (let i = 0; i < n; i++) {
    page.drawText(labels[i], { x: lx, y: ly, size: 7, font: f.bold, color: c3(SL500) });
    lx += lblWidths[i] + lblGap;
    const fieldW = Math.max(20, totalFldW * ratios[i]);
    page.drawLine({ start: { x: lx, y: ly-1 }, end: { x: lx+fieldW, y: ly-1 }, thickness: 1.2, color: c3(SL300), dashArray: [2,2], dashPhase: 0 });
    lx += fieldW + (i < n - 1 ? fldGap : 0);
  }
}

function drawBanner(page: PDFPage, banY: number, title: string, subtitle: string, pill: string, f: Fonts) {
  const banBot = banY - BNR_H;
  drawGrad(page, ML, banBot, CW, BNR_H, NAVY, BLUE);
  page.drawText(sanitize(title).substring(0, 65), { x: ML+12, y: banBot+BNR_H-16, size: 10.5, font: f.bold, color: rgb(1,1,1) });
  page.drawText(sanitize(subtitle).substring(0, 85), { x: ML+12, y: banBot+BNR_H-29, size: 7, font: f.reg, color: c3(BLINE) });
  const pt = sanitize(pill).toUpperCase();
  const pW = f.bold.widthOfTextAtSize(pt, 6.5) + 18;
  const pX = W-MR-pW-4, pY = banBot+(BNR_H-18)/2;
  page.drawRectangle({ x: pX, y: pY, width: pW, height: 18, color: rgb(1,1,1), opacity: 0.2 });
  page.drawRectangle({ x: pX, y: pY, width: pW, height: 18, color: rgb(1,1,1), opacity: 0, borderColor: rgb(1,1,1), borderWidth: 0.75, borderOpacity: 0.35 });
  page.drawText(pt, { x: pX+9, y: pY+6, size: 6.5, font: f.bold, color: rgb(1,1,1) });
}

function drawFooter(page: PDFPage, pgNum: number, f: Fonts) {
  page.drawLine({ start: { x: ML, y: FTR_TOP }, end: { x: W-MR, y: FTR_TOP }, thickness: 1, color: c3(SL100) });
  const fy = MB + 7;
  page.drawText("(c) 2026 ", { x: ML, y: fy, size: 7, font: f.reg, color: c3(SL500) });
  const c1w = f.reg.widthOfTextAtSize("(c) 2026 ", 7);
  page.drawText("WorksheetDownload.com", { x: ML+c1w, y: fy, size: 7, font: f.bold, color: c3(BLUE) });
  const c2w = f.bold.widthOfTextAtSize("WorksheetDownload.com", 7);
  page.drawText(" - Free Tech Learning Resources & Practice Sheets", { x: ML+c1w+c2w, y: fy, size: 7, font: f.reg, color: c3(SL500) });
  const url = "https://worksheetdownload.com/";
  const uw = f.reg.widthOfTextAtSize(url, 7);
  page.drawText(url, { x: W/2-uw/2, y: fy, size: 7, font: f.reg, color: c3(SL300) });
  const badge = `Sheet ${pgNum}/2`;
  const bw = f.bold.widthOfTextAtSize(badge, 7) + 14;
  page.drawRectangle({ x: W-MR-bw, y: MB+3, width: bw, height: 13, color: c3(SL100), borderColor: c3(SL200), borderWidth: 0.5 });
  page.drawText(badge, { x: W-MR-bw+7, y: MB+6, size: 7, font: f.bold, color: c3(SL500) });
}

function drawQCard(page: PDFPage, x: number, top: number, w: number, h: number, idx: number, q: string, tag: string, f: Fonts) {
  const bot = top - h;
  page.drawRectangle({ x, y: bot, width: w, height: h, color: rgb(1,1,1), borderColor: c3(SL200), borderWidth: 0.75 });
  page.drawRectangle({ x, y: bot, width: 3, height: h, color: c3(BLUE) });

  // Q badge
  const qStr = `Q${idx}`;
  page.drawRectangle({ x: x+5, y: top-22, width: 24, height: 18, color: c3(BPILL), borderColor: c3(BLINE), borderWidth: 0.75 });
  const qnw = f.bold.widthOfTextAtSize(qStr, 6.8);
  page.drawText(qStr, { x: x+5+(24-qnw)/2, y: top-17, size: 6.8, font: f.bold, color: c3(BTEXT) });

  // Tag
  const tagTxt = sanitize(tag);
  const tagW = f.bold.widthOfTextAtSize(tagTxt, 5.8) + 8;
  const tagX = x + w - tagW - 4;
  page.drawRectangle({ x: tagX, y: top-22, width: tagW, height: 11, color: c3(BPILL), borderColor: c3(BLINE), borderWidth: 0.5 });
  page.drawText(tagTxt, { x: tagX+4, y: top-17, size: 5.8, font: f.bold, color: c3(BTEXT) });

  // Question text
  const qLines = wrap(sanitize(q), w - 40, f.bold, 7.4);
  let qy = top - 17;
  const maxQLines = Math.min(qLines.length, 2);
  for (let i = 0; i < maxQLines; i++) {
    page.drawText(qLines[i], { x: x+32, y: qy, size: 7.4, font: f.bold, color: c3(SL900) });
    qy -= 9;
  }

  // 2 answer lines — positioned below question text with spacing
  const lineX = x + 7, lineW = w - 14;
  const ansMinY = bot + 6;
  const ansStartY = qy - 8; // 8pt gap below last question line
  for (let l = 0; l < 2; l++) {
    const ly = ansStartY - l * 14;
    if (ly < ansMinY) break;
    page.drawLine({ start: { x: lineX, y: ly }, end: { x: lineX+lineW, y: ly }, thickness: 1.2, color: c3(SL300) });
  }
}

function drawACard(page: PDFPage, x: number, top: number, w: number, h: number, idx: number, q: string, a: string, tag: string, f: Fonts) {
  const bot = top - h;
  page.drawRectangle({ x, y: bot, width: w, height: h, color: rgb(1,1,1), borderColor: c3(SL200), borderWidth: 0.75 });
  page.drawRectangle({ x, y: bot, width: 3, height: h, color: c3(GRN_ACC) });

  // A badge
  const aStr = `A${idx}`;
  page.drawRectangle({ x: x+5, y: top-22, width: 24, height: 18, color: c3(GRN_BG), borderColor: c3(GRN_BD), borderWidth: 0.75 });
  const anw = f.bold.widthOfTextAtSize(aStr, 6.8);
  page.drawText(aStr, { x: x+5+(24-anw)/2, y: top-17, size: 6.8, font: f.bold, color: c3(GRN_TXT) });

  // Green tag
  const tagTxt = sanitize(tag);
  const tagW = f.bold.widthOfTextAtSize(tagTxt, 5.8) + 8;
  const tagX = x + w - tagW - 4;
  page.drawRectangle({ x: tagX, y: top-22, width: tagW, height: 11, color: c3(GRN_BG), borderColor: c3(GRN_BD), borderWidth: 0.5 });
  page.drawText(tagTxt, { x: tagX+4, y: top-17, size: 5.8, font: f.bold, color: c3(GRN_TXT) });

  // Key title (first ~8 words of answer)
  const titleWords = sanitize(a).split(" ").slice(0, 7).join(" ");
  const titleLines = wrap(titleWords, w - 40, f.bold, 7.5);
  let ty = top - 17;
  page.drawText(titleLines[0] ?? "", { x: x+32, y: ty, size: 7.5, font: f.bold, color: c3(GRN_ACC) });
  ty -= 10;

  // Answer text
  const aLines = wrap(sanitize(a), w - 14, f.reg, 6.8);
  for (const al of aLines.slice(0, 4)) {
    if (ty < bot + 6) break;
    page.drawText(al, { x: x+7, y: ty, size: 6.8, font: f.reg, color: c3(SL700) });
    ty -= 8.5;
  }
}

export interface QAPair { q: string; a: string }
export interface PracticeSheetSpec {
  name: string; subtitle: string; accentHex: string;
  pairs: QAPair[];
}

export async function buildPracticeSheetPdf(spec: PracticeSheetSpec): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontReg  = await doc.embedFont(StandardFonts.Helvetica);
  const fontMono = await doc.embedFont(StandardFonts.Courier);
  const f: Fonts = { bold: fontBold, reg: fontReg, mono: fontMono };

  const name = sanitize(spec.name);
  const subtitle = sanitize(spec.subtitle || "Practice Worksheet");
  const pairs = spec.pairs.slice(0, 10);

  // ── Page 1: Questions ───────────────────────────────────────────────────
  {
    const page = doc.addPage([W, H]);
    drawWatermark(page, fontBold);
    drawHeader(page, subtitle + " · Practice Worksheet", "Conceptual Series", name, f);
    drawStudentStrip(page, f);
    drawBanner(page, BNR_TOP, `${name.toUpperCase()} PRACTICE SHEET - 10 CONCEPTUAL Q&A`, subtitle, "Total: 10 Questions", f);
    drawFooter(page, 1, f);

    for (let col = 0; col < 2; col++) {
      const colX = ML + col * (COL_W + COL_GAP);
      let cardY = GRID_TOP;
      for (let row = 0; row < 5; row++) {
        const idx = col * 5 + row;
        const pair = pairs[idx];
        if (!pair) break;
        const tag = Q_TAGS[idx] ?? "General";
        drawQCard(page, colX, cardY, COL_W, CARD_H, idx + 1, pair.q, tag, f);
        cardY -= CARD_H + CARD_GAP;
      }
    }
  }

  // ── Page 2: Answer Key ──────────────────────────────────────────────────
  {
    const page = doc.addPage([W, H]);
    drawWatermark(page, fontBold);
    drawHeader(page, subtitle + " · Solutions Guide", "Solutions Guide", name, f);
    drawBanner(page, BNR_TOP2, "ANSWER KEY & EXPLANATORY SOLUTIONS", "Comprehensive verified answers, best-practice configs, security controls & reference guides", "Verified Solutions", f);
    drawFooter(page, 2, f);

    const answerTags = ["Mitigation","Primitives","Hardening","Gotchas","Federation","Observability","Automation","Governance","Assessment","Optimization"];

    for (let col = 0; col < 2; col++) {
      const colX = ML + col * (COL_W + COL_GAP);
      let cardY = GRID_TOP2;
      for (let row = 0; row < 5; row++) {
        const idx = col * 5 + row;
        const pair = pairs[idx];
        if (!pair) break;
        const tag = answerTags[idx] ?? "Answer";
        drawACard(page, colX, cardY, COL_W, CARD_H2, idx + 1, pair.q, pair.a, tag, f);
        cardY -= CARD_H2 + CARD_GAP;
      }
    }
  }

  return doc.save();
}
