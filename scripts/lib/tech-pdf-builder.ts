import { PDFDocument, PDFPage, PDFFont, StandardFonts, rgb, degrees } from "pdf-lib";

// ── A4 Portrait layout ───────────────────────────────────────────────────────
const W = 595, H = 842;
const ML = 30, MR = 30, MT = 28, MB = 25;
const CW = W - ML - MR;            // 535
const COL_GAP = 12;
const COL_W = (CW - COL_GAP) / 2;  // 261.5

const LOGO_SZ = 40;
const HDR_H   = 54;
const HDR_GAP = 8;
const BNR_H   = 44;
const BNR_GAP = 10;
const FTR_H   = 20;
const FTR_GAP = 6;

const HDR_TOP  = H - MT;
const HDR_BOT  = HDR_TOP - HDR_H;
const BNR_TOP  = HDR_BOT - HDR_GAP;
const BNR_BOT  = BNR_TOP - BNR_H;
const GRID_TOP = BNR_BOT - BNR_GAP;
const FTR_TOP  = MB + FTR_H;
const GRID_BOT = FTR_TOP + FTR_GAP;
const GRID_H   = GRID_TOP - GRID_BOT;   // usable grid height per page

// Card sizing constants
const CARD_HDR_H  = 26;   // header zone: badge row + separator
const CARD_PAD_T  = 8;    // space from separator to first content line
const CARD_PAD_B  = 6;    // bottom inner padding
const PROSE_LH    = 9.5;  // prose line height (pt)
const CODE_LH     = 8.5;  // code line height (pt)
const CODE_PAD    = 4;    // code block top/bottom inner padding
const CODE_BLK_GAP = 5;   // gap below a code block before next seg
const CARD_GAP    = 12;   // vertical gap between cards
const CARD_MIN_H  = 72;   // minimum card height

type RGB3 = readonly [number, number, number];
const NAVY:  RGB3 = [0.118, 0.227, 0.541];
const BLUE:  RGB3 = [0.145, 0.388, 0.922];
const GRN1:  RGB3 = [0.024, 0.373, 0.275];
const GRN2:  RGB3 = [0.035, 0.584, 0.408];
const SL100: RGB3 = [0.945, 0.961, 0.976];
const SL200: RGB3 = [0.886, 0.910, 0.941];
const SL300: RGB3 = [0.796, 0.835, 0.882];
const SL500: RGB3 = [0.392, 0.455, 0.545];
const SL700: RGB3 = [0.200, 0.255, 0.333];
const SL900: RGB3 = [0.059, 0.090, 0.165];
const BPILL: RGB3 = [0.937, 0.961, 1.000];
const BLINE: RGB3 = [0.749, 0.859, 0.996];
const BTEXT: RGB3 = [0.114, 0.306, 0.847];

const CARD_ACCENTS: RGB3[] = [
  [0.145, 0.388, 0.922],
  [0.239, 0.510, 0.965],
  [0.012, 0.518, 0.776],
  [0.392, 0.361, 0.945],
  [0.545, 0.227, 0.918],
  [0.925, 0.220, 0.600],
  [0.020, 0.588, 0.408],
  [0.012, 0.518, 0.776],
  [0.482, 0.227, 0.918],
  [0.961, 0.620, 0.004],
  [0.145, 0.388, 0.922],
  [0.937, 0.267, 0.267],
];

const SECTION_TAGS = [
  "Installation", "Architecture", "YAML / Config",
  "Workflow", "CRUD API", "Integration",
  "Hardening", "Observability", "Optimization",
  "Unit Tests", "Commands", "Warning",
];

interface Fonts { bold: PDFFont; reg: PDFFont; mono: PDFFont }
interface Seg { type: "prose" | "code"; lines: string[] }

function c3(c: RGB3) { return rgb(c[0], c[1], c[2]); }

function sanitize(t: string): string {
  return t.replace(/[^\x00-\xFF]/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&rarr;/g, "->").trim();
}

function wrap(text: string, maxW: number, font: PDFFont, sz: number): string[] {
  const s = sanitize(text);
  if (font.widthOfTextAtSize(s, sz) <= maxW) return [s];
  const words = s.split(" ");
  const out: string[] = [];
  let line = "";
  for (const w of words) {
    const t = line ? line + " " + w : w;
    if (font.widthOfTextAtSize(t, sz) > maxW && line) { out.push(line); line = w; }
    else line = t;
  }
  if (line) out.push(line);
  return out;
}

function drawGrad(page: PDFPage, x: number, y: number, w: number, h: number, c1: RGB3, c2: RGB3) {
  const n = 24;
  const sw = w / n;
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
  page.drawRectangle({ x: sx, y: sy, width: LOGO_SZ, height: LOGO_SZ, color: rgb(0.141, 0.231, 0.431) });
  page.drawRectangle({ x: sx+18*s, y: sy+22*s, width: 52*s, height: 64*s, color: rgb(1,1,1) });
  for (const [gy, x1, x2] of [[36,28,60],[46,28,56],[56,28,58],[66,28,50]] as [number,number,number][]) {
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
  const bx = ML + LOGO_SZ + 10;
  const by = logoY + LOGO_SZ - 11;
  const ws = f.bold.widthOfTextAtSize("Worksheet", 12);
  const dl = f.bold.widthOfTextAtSize("Download", 12);
  page.drawText("Worksheet", { x: bx,    y: by, size: 12, font: f.bold, color: c3(SL900) });
  page.drawText("Download",  { x: bx+ws, y: by, size: 12, font: f.bold, color: c3(BLUE) });
  page.drawText(".com",      { x: bx+ws+dl, y: by, size: 12, font: f.bold, color: c3(SL900) });
  page.drawText(sanitize(tagline).toUpperCase(), { x: bx, y: by-13, size: 6.5, font: f.bold, color: c3(SL500) });

  const bW = 130, bH = 34, bX = W-MR-bW, bY = HDR_BOT + (HDR_H-bH)/2;
  page.drawRectangle({ x: bX, y: bY, width: bW, height: bH, color: c3(BPILL), borderColor: c3(BLINE), borderWidth: 0.75 });
  const lbl = sanitize(badgeLabel).toUpperCase().substring(0, 24);
  const lw = f.bold.widthOfTextAtSize(lbl, 6);
  page.drawText(lbl, { x: bX+bW-lw-7, y: bY+bH-11, size: 6, font: f.bold, color: c3(BTEXT) });
  const nm = sanitize(badgeName).substring(0, 18);
  const nw = f.bold.widthOfTextAtSize(nm, 9.5);
  page.drawText(nm, { x: bX+bW-nw-7, y: bY+8, size: 9.5, font: f.bold, color: c3(NAVY) });

  page.drawLine({ start: { x: ML, y: HDR_BOT }, end: { x: W-MR, y: HDR_BOT }, thickness: 1.5, color: c3(SL100) });
}

function drawBanner(page: PDFPage, title: string, subtitle: string, pill: string, g1: RGB3, g2: RGB3, f: Fonts) {
  drawGrad(page, ML, BNR_BOT, CW, BNR_H, g1, g2);
  page.drawText(sanitize(title).substring(0, 60), { x: ML+12, y: BNR_BOT+BNR_H-17, size: 11, font: f.bold, color: rgb(1,1,1) });
  page.drawText(sanitize(subtitle).substring(0, 80), { x: ML+12, y: BNR_BOT+BNR_H-30, size: 7, font: f.reg, color: c3(BLINE) });
  const pText = sanitize(pill).toUpperCase();
  const pW = f.bold.widthOfTextAtSize(pText, 6.5) + 18;
  const pX = W-MR-pW-4, pY = BNR_BOT + (BNR_H-18)/2;
  page.drawRectangle({ x: pX, y: pY, width: pW, height: 18, color: rgb(1,1,1), opacity: 0.2 });
  page.drawRectangle({ x: pX, y: pY, width: pW, height: 18, color: rgb(1,1,1), opacity: 0, borderColor: rgb(1,1,1), borderWidth: 0.75, borderOpacity: 0.35 });
  page.drawText(pText, { x: pX+9, y: pY+6, size: 6.5, font: f.bold, color: rgb(1,1,1) });
}

function drawFooter(page: PDFPage, pgNum: number, f: Fonts) {
  page.drawLine({ start: { x: ML, y: FTR_TOP }, end: { x: W-MR, y: FTR_TOP }, thickness: 1, color: c3(SL100) });
  const fy = MB + 7;
  page.drawText("(c) 2026 ", { x: ML, y: fy, size: 7, font: f.reg, color: c3(SL500) });
  const c1w = f.reg.widthOfTextAtSize("(c) 2026 ", 7);
  page.drawText("WorksheetDownload.com", { x: ML+c1w, y: fy, size: 7, font: f.bold, color: c3(BLUE) });
  const c2w = f.bold.widthOfTextAtSize("WorksheetDownload.com", 7);
  page.drawText(" - Free Developer & IT Reference Guides", { x: ML+c1w+c2w, y: fy, size: 7, font: f.reg, color: c3(SL500) });
  const url = "https://worksheetdownload.com/";
  const uw = f.reg.widthOfTextAtSize(url, 7);
  page.drawText(url, { x: W/2-uw/2, y: fy, size: 7, font: f.reg, color: c3(SL300) });
  const badge = `Sheet ${pgNum}/2`;
  const bw = f.bold.widthOfTextAtSize(badge, 7) + 14;
  page.drawRectangle({ x: W-MR-bw, y: MB+3, width: bw, height: 13, color: c3(SL100), borderColor: c3(SL200), borderWidth: 0.5 });
  page.drawText(badge, { x: W-MR-bw+7, y: MB+6, size: 7, font: f.bold, color: c3(SL500) });
}

// ── Segment building ─────────────────────────────────────────────────────────

function buildSegs(lines: string[], f: Fonts, cw: number): Seg[] {
  const segs: Seg[] = [];
  let codeAcc: string[] = [], proseAcc: string[] = [];
  const flushP = () => { if (proseAcc.length) { segs.push({ type: "prose", lines: [...proseAcc] }); proseAcc = []; } };
  const flushC = () => { if (codeAcc.length)  { segs.push({ type: "code",  lines: [...codeAcc]  }); codeAcc = []; } };

  for (const ln of lines) {
    if (ln.startsWith("§ ")) {
      flushP();
      const codeLine = sanitize(ln.slice(2));
      if (codeLine) codeAcc.push(codeLine);
    } else {
      flushC();
      const s = sanitize(ln);
      if (s) { for (const wl of wrap(s, cw - 10, f.reg, 7)) proseAcc.push(wl); }
    }
  }
  flushC(); flushP();
  return segs;
}

function measureCardH(segs: Seg[]): number {
  let h = CARD_HDR_H + CARD_PAD_T;
  for (const seg of segs) {
    if (seg.type === "prose") {
      h += seg.lines.length * PROSE_LH + 2;
    } else {
      h += seg.lines.length * CODE_LH + CODE_PAD * 2 + CODE_BLK_GAP;
    }
  }
  return Math.max(CARD_MIN_H, h + CARD_PAD_B);
}

// ── Card drawing ─────────────────────────────────────────────────────────────

function drawCard(
  page: PDFPage,
  x: number, top: number, width: number, height: number,
  secNum: number, title: string, tag: string, segs: Seg[],
  accent: RGB3, f: Fonts
) {
  const bot = top - height;

  // Card background + 3pt left accent strip
  page.drawRectangle({ x, y: bot, width, height, color: rgb(1,1,1), borderColor: c3(SL200), borderWidth: 0.75 });
  page.drawRectangle({ x, y: bot, width: 3, height, color: c3(accent) });

  // Number badge pill
  const badgeTxt = String(secNum).padStart(2, "0");
  const badgeW = f.bold.widthOfTextAtSize(badgeTxt, 6.5) + 10;
  const badgeH = 13;
  const badgeX = x + 6;
  const badgeY = top - 3 - badgeH;   // top of card minus 3pt padding minus badge height
  page.drawRectangle({ x: badgeX, y: badgeY, width: badgeW, height: badgeH, color: c3(accent) });
  page.drawText(badgeTxt, { x: badgeX + 5, y: badgeY + 3, size: 6.5, font: f.bold, color: rgb(1,1,1) });

  // Tag pill (drawn first to get tagX for title constraint)
  const tagTxt = sanitize(tag);
  const tagW = f.bold.widthOfTextAtSize(tagTxt, 5.8) + 10;
  const tagX = x + width - tagW - 5;
  page.drawRectangle({ x: tagX, y: badgeY, width: tagW, height: badgeH, color: c3(BPILL), borderColor: c3(BLINE), borderWidth: 0.5 });
  page.drawText(tagTxt, { x: tagX + 5, y: badgeY + 3, size: 5.8, font: f.bold, color: c3(BTEXT) });

  // Title — strip any "01. " prefix since badge shows the number
  const rawTitle = sanitize(title).replace(/^\d+\.\s*/, "");
  const titleX = badgeX + badgeW + 5;
  const maxTitleW = Math.max(30, tagX - titleX - 4);
  const titleLines = wrap(rawTitle, maxTitleW, f.bold, 7.5);
  page.drawText(titleLines[0] ?? "", { x: titleX, y: badgeY + 3.5, size: 7.5, font: f.bold, color: c3(SL900) });

  // Separator at CARD_HDR_H from top
  const sepY = top - CARD_HDR_H;
  page.drawLine({ start: { x: x+3, y: sepY }, end: { x: x+width, y: sepY }, thickness: 0.6, color: c3(SL100) });

  // Content area
  const cx = x + 7;
  const cw = width - 14;
  let curY = sepY - CARD_PAD_T;
  const minY = bot + CARD_PAD_B;

  for (const seg of segs) {
    if (curY < minY + 8) break;

    if (seg.type === "prose") {
      for (const l of seg.lines) {
        if (curY < minY) break;
        // Accent-colored bullet
        page.drawText("•", { x: cx, y: curY, size: 7, font: f.reg, color: c3(accent) });
        page.drawText(l, { x: cx + 9, y: curY, size: 7, font: f.reg, color: c3(SL700) });
        curY -= PROSE_LH;
      }
      curY -= 2;
    } else {
      // Code block: size to available space
      const maxLines = Math.min(seg.lines.length, Math.floor((curY - minY - CODE_PAD * 2 - 4) / CODE_LH));
      if (maxLines < 1) break;
      const cbH = maxLines * CODE_LH + CODE_PAD * 2;
      const cbY = curY - cbH;
      if (cbY < minY) break;

      // Dark bg + accent left bar
      page.drawRectangle({ x: cx-2, y: cbY, width: cw+4, height: cbH, color: c3(SL900) });
      page.drawRectangle({ x: cx-2, y: cbY, width: 2.5, height: cbH, color: c3(accent) });

      let cy = cbY + cbH - CODE_PAD;
      for (let li = 0; li < maxLines; li++) {
        const raw = seg.lines[li];
        const txt = raw.length > 46 ? raw.substring(0, 45) + "..." : raw;
        const trimmed = raw.trimStart();
        // Gray for comments, near-white for code
        const isComment = trimmed.startsWith("#") || trimmed.startsWith("//") || trimmed.startsWith("--");
        const textColor = isComment ? rgb(0.53, 0.62, 0.75) : rgb(0.973, 0.980, 0.988);
        page.drawText(txt, { x: cx+4, y: cy - CODE_LH + 2, size: 6, font: f.mono, color: textColor });
        cy -= CODE_LH;
      }
      curY = cbY - CODE_BLK_GAP;
    }
  }
}

// ── Public interface ─────────────────────────────────────────────────────────

export interface Section { title: string; lines: string[] }
export interface CheatSheetSpec {
  name: string; subtitle: string; emoji: string; accentHex: string;
  sections: Section[];
}

export async function buildCheatSheetPdf(spec: CheatSheetSpec): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontReg  = await doc.embedFont(StandardFonts.Helvetica);
  const fontMono = await doc.embedFont(StandardFonts.Courier);
  const f: Fonts = { bold: fontBold, reg: fontReg, mono: fontMono };

  const name = sanitize(spec.name);
  const subtitle = sanitize(spec.subtitle || "Quick Reference");
  const all = spec.sections.slice(0, 12);
  const half = Math.ceil(all.length / 2);

  const PAGE_DEFS = [
    { pill: "Part 1: Setup & Core",   g1: NAVY, g2: BLUE, bLabel: subtitle,          title: `${name.toUpperCase()} CHEAT SHEET`,         sub: "Core setup, initialization, operations & integration quick reference" },
    { pill: "Part 2: Ops & Security", g1: GRN1, g2: GRN2, bLabel: "Operations Guide", title: "SECURITY, MONITORING & OPERATIONS", sub: "Production hardening, observability, performance tuning & CLI reference" },
  ];

  // Pre-build segments for all sections once (fonts are needed for text measurement)
  const segsAll = all.map(s => buildSegs(s.lines, f, COL_W - 14));

  for (let pi = 0; pi < 2; pi++) {
    const page = doc.addPage([W, H]);
    const pageStart = pi === 0 ? 0 : half;
    const pageEnd   = pi === 0 ? half : all.length;
    const pageSecs  = all.slice(pageStart, pageEnd);
    const pageSegs  = segsAll.slice(pageStart, pageEnd);
    const def = PAGE_DEFS[pi];

    drawWatermark(page, fontBold);
    drawHeader(page, subtitle, def.bLabel, name, f);
    drawBanner(page, def.title, def.sub, def.pill, def.g1, def.g2, f);
    drawFooter(page, pi + 1, f);

    for (let col = 0; col < 2; col++) {
      const colX = ML + col * (COL_W + COL_GAP);
      let cardY = GRID_TOP;

      for (let row = 0; row < 3; row++) {
        const si = col * 3 + row;
        if (si >= pageSecs.length) break;

        const available = cardY - GRID_BOT;
        if (available < CARD_MIN_H) break;

        const segs = pageSegs[si];
        const prefH = measureCardH(segs);

        // Reserve space for remaining rows in this column
        const remainingRows = 2 - row;
        const reservedH = remainingRows > 0 ? remainingRows * (CARD_MIN_H + CARD_GAP) : 0;
        const maxH  = Math.max(CARD_MIN_H, available - reservedH - (row < 2 ? CARD_GAP : 0));
        const cardH = Math.min(prefH, maxH);

        const globalIdx = pageStart + si;
        const tag = SECTION_TAGS[globalIdx] ?? "Reference";
        const accentIdx = globalIdx % CARD_ACCENTS.length;

        drawCard(page, colX, cardY, COL_W, cardH, globalIdx + 1, pageSecs[si].title, tag, segs, CARD_ACCENTS[accentIdx], f);
        cardY -= cardH + CARD_GAP;
      }
    }
  }

  return doc.save();
}
