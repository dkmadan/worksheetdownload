import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

// ── Layout constants ─────────────────────────────────────────────────────────
const W = 792, H = 612; // landscape letter
const M = 15;           // margin
const HDR_H = 52;       // header band height
const FTR_H = 18;       // footer height
const COL_GAP = 5;
const NUM_COLS = 3;
const BODY_W = W - M * 2;                            // 762
const COL_W = (BODY_W - COL_GAP * (NUM_COLS - 1)) / NUM_COLS; // ~250
const BODY_TOP = H - M - HDR_H;                     // y of body top
const BODY_BOT = M + FTR_H;                         // y of body bottom
const BODY_H = BODY_TOP - BODY_BOT;                 // ~510

// ── Color palette ────────────────────────────────────────────────────────────
const SEC_COLORS: [number, number, number][] = [
  [13, 148, 136],   // teal-600
  [37, 99, 235],    // blue-600
  [22, 163, 74],    // green-600
  [217, 119, 6],    // amber-600
  [124, 58, 237],   // violet-600
  [2, 132, 199],    // sky-600
  [5, 150, 105],    // emerald-600
  [234, 88, 12],    // orange-600
  [147, 51, 234],   // purple-600
  [15, 118, 110],   // teal-700
  [29, 78, 216],    // blue-700
  [220, 38, 38],    // red-600 (gotchas)
];

function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

export interface Section {
  title: string;
  lines: string[]; // lines starting with "§ " are rendered as code (monospace)
}

export interface CheatSheetSpec {
  name: string;
  subtitle: string;
  emoji: string;
  accentHex: string;
  sections: Section[];
}

/** Strip non-WinAnsi characters (emoji, CJK, etc.) so pdf-lib doesn't throw. */
function sanitize(text: string): string {
  return text.replace(/[^\x00-\xFF]/g, "").trim();
}

function wrap(text: string, maxChars: number): string[] {
  if (text.length <= maxChars) return [text];
  const words = text.split(" ");
  const out: string[] = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > maxChars) {
      if (line) out.push(line.trim());
      line = w;
    } else {
      line = line ? line + " " + w : w;
    }
  }
  if (line) out.push(line.trim());
  return out;
}

export async function buildCheatSheetPdf(spec: CheatSheetSpec): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const page = doc.addPage([W, H]);
  const { drawText, drawRectangle } = page;

  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontReg = await doc.embedFont(StandardFonts.Helvetica);
  const fontMono = await doc.embedFont(StandardFonts.Courier);

  const accent = hexToRgb(spec.accentHex);
  const accentDark = accent.map(v => Math.max(0, v - 40)) as [number, number, number];

  // ── Header band ─────────────────────────────────────────────────────────
  page.drawRectangle({
    x: 0, y: H - HDR_H,
    width: W, height: HDR_H,
    color: rgb(accent[0] / 255, accent[1] / 255, accent[2] / 255),
  });
  // Darker right strip for depth
  page.drawRectangle({
    x: W - 160, y: H - HDR_H,
    width: 160, height: HDR_H,
    color: rgb(accentDark[0] / 255, accentDark[1] / 255, accentDark[2] / 255),
  });

  // Tech name (emoji stripped — WinAnsi fonts don't support Unicode)
  page.drawText(`${sanitize(spec.name)} Cheat Sheet`, {
    x: M + 2, y: H - 22,
    size: 17, font: fontBold,
    color: rgb(1, 1, 1),
  });
  page.drawText(sanitize(spec.subtitle), {
    x: M + 2, y: H - 37,
    size: 8, font: fontReg,
    color: rgb(0.88, 0.88, 0.88),
  });

  // Brand text top-right
  page.drawText("worksheetdownload.com", {
    x: W - 158, y: H - 20,
    size: 8, font: fontBold,
    color: rgb(0.95, 0.95, 0.95),
  });
  page.drawText("{ }", {
    x: W - 43, y: H - 42,
    size: 20, font: fontBold,
    color: rgb(0.85, 0.85, 0.85),
  });

  // ── Footer ──────────────────────────────────────────────────────────────
  const footerText = `${sanitize(spec.name)} Cheat Sheet - generated for quick reference - worksheetdownload.com`;
  page.drawText(footerText, {
    x: M, y: M + 4,
    size: 6.5, font: fontReg,
    color: rgb(0.55, 0.55, 0.55),
  });

  // ── Layout sections into 3 columns ──────────────────────────────────────
  // Distribute sections across columns as evenly as possible
  const secs = spec.sections;
  const perCol = Math.ceil(secs.length / NUM_COLS);
  const cols: Section[][] = [];
  for (let c = 0; c < NUM_COLS; c++) {
    cols.push(secs.slice(c * perCol, (c + 1) * perCol));
  }

  const SHDR_H = 13;    // section header height
  const SPAD = 5;       // padding inside section body
  const LINE_H = 9.5;   // line height
  const CODE_SZ = 7;    // code font size
  const PROSE_SZ = 7.5; // prose font size
  const TITLE_SZ = 7;   // section title font size
  const MAX_CHARS = 36; // approximate chars per line at col width

  let globalSecIdx = 0;

  for (let c = 0; c < NUM_COLS; c++) {
    const colX = M + c * (COL_W + COL_GAP);
    let curY = BODY_TOP;

    for (const sec of cols[c]) {
      const [r, g, b] = SEC_COLORS[globalSecIdx % SEC_COLORS.length];
      globalSecIdx++;

      // Estimate section height
      let bodyLines: { text: string; isCode: boolean }[] = [];
      for (const ln of sec.lines) {
        if (ln.startsWith("§ ")) {
          // code line – may be long, wrap at MAX_CHARS+4
          const code = sanitize(ln.slice(2));
          if (!code) continue;
          const wrapped = wrap(code, MAX_CHARS + 4);
          for (const w of wrapped) bodyLines.push({ text: w, isCode: true });
        } else {
          const safe = sanitize(ln);
          if (!safe) continue;
          const wrapped = wrap(safe, MAX_CHARS);
          for (const w of wrapped) bodyLines.push({ text: w, isCode: false });
        }
      }
      const secBodyH = bodyLines.length * LINE_H + SPAD * 2;
      const secTotalH = SHDR_H + secBodyH;

      // If overflow, stop (sections will be clipped — shouldn't happen with good data)
      if (curY - secTotalH < BODY_BOT) break;

      // Section header
      page.drawRectangle({
        x: colX, y: curY - SHDR_H,
        width: COL_W, height: SHDR_H,
        color: rgb(r / 255, g / 255, b / 255),
      });
      page.drawText(sanitize(sec.title), {
        x: colX + 5, y: curY - SHDR_H + 3.5,
        size: TITLE_SZ, font: fontBold,
        color: rgb(1, 1, 1),
      });

      // Section body background (very light)
      page.drawRectangle({
        x: colX, y: curY - secTotalH,
        width: COL_W, height: secBodyH,
        color: rgb(0.97, 0.97, 0.97),
      });

      // Section body text
      let lineY = curY - SHDR_H - SPAD - LINE_H + 2.5;
      for (const { text, isCode } of bodyLines) {
        page.drawText(text, {
          x: colX + (isCode ? 7 : 5),
          y: lineY,
          size: isCode ? CODE_SZ : PROSE_SZ,
          font: isCode ? fontMono : fontReg,
          color: isCode ? rgb(0.1, 0.3, 0.6) : rgb(0.15, 0.15, 0.15),
        });
        lineY -= LINE_H;
      }

      // Thin border on left of section header (accent)
      page.drawRectangle({
        x: colX, y: curY - secTotalH,
        width: 2.5, height: secTotalH,
        color: rgb(r / 255, g / 255, b / 255),
      });

      curY -= secTotalH + 4;
    }
  }

  return doc.save();
}
