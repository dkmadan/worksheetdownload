import { PDFDocument, StandardFonts, rgb, degrees } from "pdf-lib";

const W = 792, H = 612;
const M = 15;
const HDR_H = 52;
const FTR_H = 18;
const COL_GAP = 8;
const COL_W = (W - M * 2 - COL_GAP) / 2; // ~377
const BODY_TOP = H - M - HDR_H;           // 545
const CONTENT_TOP = BODY_TOP - 6;         // 539
const CONTENT_BOT = M + FTR_H + 2;        // 35
const CONTENT_H = CONTENT_TOP - CONTENT_BOT; // 504
const Q_H = CONTENT_H / 5;               // ~100.8 per question slot

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

function hexToRgb(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}

export interface InterviewSheetSpec {
  name: string;
  subtitle: string;
  accentHex: string;
  questions: string[]; // exactly 10
}

export async function buildInterviewSheetPdf(spec: InterviewSheetSpec): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const page = doc.addPage([W, H]);

  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontReg  = await doc.embedFont(StandardFonts.Helvetica);

  const accent     = hexToRgb(spec.accentHex);
  const accentDark = accent.map(v => Math.max(0, v - 40)) as [number, number, number];
  const ar = accent[0] / 255, ag = accent[1] / 255, ab = accent[2] / 255;

  // ── Diagonal watermark ─────────────────────────────────────────────────
  for (const pos of [
    { x: 55,  y: 200 }, { x: 300, y: 340 }, { x: 540, y: 185 },
    { x: 155, y: 430 }, { x: 430, y: 445 },
  ]) {
    page.drawText("worksheetdownload.com", {
      x: pos.x, y: pos.y,
      size: 14, font: fontBold,
      color: rgb(0.88, 0.88, 0.88),
      rotate: degrees(30),
      opacity: 0.45,
    });
  }

  // ── Header band ────────────────────────────────────────────────────────
  page.drawRectangle({ x: 0, y: H - HDR_H, width: W, height: HDR_H,
    color: rgb(ar, ag, ab) });
  page.drawRectangle({ x: W - 160, y: H - HDR_H, width: 160, height: HDR_H,
    color: rgb(accentDark[0] / 255, accentDark[1] / 255, accentDark[2] / 255) });

  page.drawText(`${sanitize(spec.name)} - Interview Sheet`, {
    x: M + 2, y: H - 23, size: 16, font: fontBold, color: rgb(1, 1, 1) });
  page.drawText(sanitize(spec.subtitle), {
    x: M + 2, y: H - 39, size: 7.5, font: fontReg, color: rgb(0.88, 0.88, 0.88) });

  page.drawText("worksheetdownload.com", {
    x: W - 158, y: H - 21, size: 8, font: fontBold, color: rgb(0.95, 0.95, 0.95) });
  page.drawText("Top 10 Interview Questions", {
    x: W - 153, y: H - 36, size: 7, font: fontReg, color: rgb(0.85, 0.85, 0.85) });

  // ── Footer ─────────────────────────────────────────────────────────────
  page.drawText(
    `${sanitize(spec.name)} Interview Sheet  -  worksheetdownload.com  -  Free Tech Interview Prep`,
    { x: M, y: M + 5, size: 6.5, font: fontReg, color: rgb(0.55, 0.55, 0.55) });

  // ── Questions: 2 columns × 5 rows ─────────────────────────────────────
  const qs = spec.questions.slice(0, 10);

  for (let i = 0; i < 10; i++) {
    const col = Math.floor(i / 5);
    const row = i % 5;
    const colX = M + col * (COL_W + COL_GAP);
    const qTop = CONTENT_TOP - row * Q_H;
    const qBot = qTop - Q_H;

    // Left accent bar
    page.drawRectangle({
      x: colX, y: qBot + 3,
      width: 3, height: Q_H - 5,
      color: rgb(ar, ag, ab),
    });

    // Q-number
    page.drawText(`Q${i + 1}.`, {
      x: colX + 7, y: qTop - 14,
      size: 8.5, font: fontBold,
      color: rgb(ar, ag, ab),
    });

    // Question text (2 lines max)
    const qLines = wrap(sanitize(qs[i] || ""), 67);
    page.drawText(qLines[0] || "", {
      x: colX + 27, y: qTop - 13,
      size: 7.5, font: fontBold, color: rgb(0.1, 0.1, 0.1),
    });
    if (qLines[1]) {
      page.drawText(qLines[1], {
        x: colX + 27, y: qTop - 23,
        size: 7.5, font: fontBold, color: rgb(0.1, 0.1, 0.1),
      });
    }

    // "Answer:" label + 3 ruled lines
    const ansY = qTop - 40;
    page.drawText("Answer:", {
      x: colX + 7, y: ansY,
      size: 6.5, font: fontReg, color: rgb(0.5, 0.5, 0.5),
    });
    for (let l = 0; l < 3; l++) {
      page.drawLine({
        start: { x: colX + 7, y: ansY - 3 - l * 17 },
        end:   { x: colX + COL_W - 4, y: ansY - 3 - l * 17 },
        thickness: 0.5, color: rgb(0.78, 0.78, 0.78),
      });
    }

    // Row separator (except after last row in each column)
    if (row < 4) {
      page.drawLine({
        start: { x: colX + 3, y: qBot + 3 },
        end:   { x: colX + COL_W, y: qBot + 3 },
        thickness: 0.3, color: rgb(0.85, 0.85, 0.85),
      });
    }
  }

  // Column divider
  const sepX = M + COL_W + COL_GAP / 2;
  page.drawLine({
    start: { x: sepX, y: CONTENT_TOP },
    end:   { x: sepX, y: CONTENT_BOT },
    thickness: 0.5, color: rgb(0.82, 0.82, 0.82),
  });

  return doc.save();
}
