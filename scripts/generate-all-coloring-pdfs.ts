import { writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
import { rgb, PDFPage, PDFFont } from "pdf-lib";
import { newDoc, drawChrome, PAGE, text } from "../src/lib/tools/pdf";
import { COLORING_SHEETS, ColoringSheet } from "../src/lib/coloring";

const OUT_DIR = join(process.cwd(), "public", "worksheets", "pdfs", "coloring");
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const BLACK = rgb(0, 0, 0);
const WHITE = rgb(1, 1, 1);
const INK = rgb(0.06, 0.09, 0.15);

async function generateSinglePdf(sheet: ColoringSheet) {
  const { doc, F } = await newDoc();
  doc.setTitle(`${sheet.title} — Printable Coloring Page`);
  const page = doc.addPage([PAGE.PW, PAGE.PH]);

  const box = drawChrome(page, F, {
    title: sheet.prompt,
    subtitle: sheet.subtitle,
    badge: "Coloring Page",
    studentStrip: true,
    pageNum: 1,
    pageCount: 1,
  });

  text(
    page,
    "Use any colours you like — there's no wrong way to colour!",
    box.left,
    box.top - 10,
    9,
    F.reg,
    rgb(0.4, 0.46, 0.56),
    { align: "left" }
  );

  const areaTop = box.top - 26;
  const areaBottom = box.bottom + 34;

  // ── ground line + grass tufts ──────────────────────────────────────────
  const groundY = areaBottom;
  page.drawLine({
    start: { x: box.left + 20, y: groundY },
    end: { x: box.right - 20, y: groundY },
    thickness: 2.5,
    color: BLACK,
  });
  for (let gx = box.left + 40; gx < box.right - 30; gx += 26) {
    page.drawSvgPath(`M0 0 C -3 -10, -3 -16, 0 -22 C 3 -16, 3 -10, 0 0 Z`, {
      x: gx,
      y: groundY,
      borderColor: BLACK,
      borderWidth: 1.5,
    });
  }

  // ── sun in the corner ──────────────────────────────────────────────────
  const sunCX = box.right - 55;
  const sunCY = areaTop - 30;
  page.drawCircle({ x: sunCX, y: sunCY, size: 18, borderColor: BLACK, borderWidth: 2 });
  for (let i = 0; i < 8; i++) {
    const a = (Math.PI * 2 * i) / 8;
    const r1 = 24,
      r2 = 34;
    page.drawLine({
      start: { x: sunCX + Math.cos(a) * r1, y: sunCY + Math.sin(a) * r1 },
      end: { x: sunCX + Math.cos(a) * r2, y: sunCY + Math.sin(a) * r2 },
      thickness: 2,
      color: BLACK,
    });
  }

  // ── Canvas mapping ────────────────────────────────────────────────────
  const DRAW_W = 400;
  const DRAW_H = 430;
  const availH = areaTop - groundY;
  const scale = Math.min((box.width - 50) / DRAW_W, availH / DRAW_H);
  const ax = box.left + (box.width - DRAW_W * scale) / 2;
  const ay = groundY + DRAW_H * scale;

  const P = (lx: number, ly: number) => ({ x: ax + lx * scale, y: ay - ly * scale });
  const S = (r: number) => r * scale;
  const svg = (d: string, opts: { fill?: boolean; width?: number } = {}) =>
    page.drawSvgPath(d, {
      x: ax,
      y: ay,
      scale,
      color: opts.fill === false ? undefined : WHITE,
      borderColor: BLACK,
      borderWidth: opts.width ?? 2.75,
    });

  // Draw Artwork per svgType
  drawVectorArt(sheet.svgType, page, P, S, svg);

  const pdfBytes = await doc.save();
  const outPath = join(OUT_DIR, sheet.pdfFilename);
  writeFileSync(outPath, pdfBytes);
}

function drawVectorArt(
  type: string,
  page: PDFPage,
  P: (lx: number, ly: number) => { x: number; y: number },
  S: (r: number) => number,
  svg: (d: string, opts?: { fill?: boolean; width?: number }) => void
) {
  switch (type) {
    case "friendly-elephant":
      // Tail
      svg(`M95 300 C 78 312, 70 330, 80 350 C 68 348, 58 342, 52 332`, { fill: false, width: 2.5 });
      // Body
      {
        const c = P(200, 318);
        page.drawEllipse({
          x: c.x,
          y: c.y,
          xScale: S(120),
          yScale: S(92),
          borderColor: BLACK,
          borderWidth: 2.75,
          color: WHITE,
        });
      }
      // Ears
      {
        const l = P(58, 152);
        page.drawCircle({ x: l.x, y: l.y, size: S(78), borderColor: BLACK, borderWidth: 2.5, color: WHITE });
        const r = P(342, 152);
        page.drawCircle({ x: r.x, y: r.y, size: S(78), borderColor: BLACK, borderWidth: 2.5, color: WHITE });
      }
      svg(`M22 108 C 8 132, 10 168, 40 196`, { fill: false, width: 2 });
      svg(`M378 108 C 392 132, 390 168, 360 196`, { fill: false, width: 2 });
      // Head
      {
        const h = P(200, 175);
        page.drawCircle({ x: h.x, y: h.y, size: S(98), borderColor: BLACK, borderWidth: 2.75, color: WHITE });
      }
      // Trunk
      svg(
        `M188 222 C 168 236, 152 258, 150 284 C 148 306, 156 324, 152 340 C 150 350, 138 354, 128 347 C 122 342, 124 334, 132 333 C 138 332, 141 336, 140 341 C 146 330, 142 312, 148 292 C 154 268, 170 246, 198 228 C 204 224, 202 218, 194 216 Z`,
        { width: 2.75 }
      );
      svg(`M154 268 C 162 270, 172 269, 180 264`, { fill: false, width: 1.75 });
      svg(`M150 300 C 158 303, 168 302, 176 297`, { fill: false, width: 1.75 });
      svg(`M149 328 C 156 331, 164 330, 170 326`, { fill: false, width: 1.75 });
      // Mouth
      svg(`M182 212 C 190 219, 210 219, 218 212`, { fill: false, width: 2 });
      // Eyes
      for (const ex of [163, 237]) {
        const e = P(ex, 158);
        page.drawCircle({ x: e.x, y: e.y, size: S(21), borderColor: BLACK, borderWidth: 2.25, color: WHITE });
        const pupil = P(ex + 4, 163);
        page.drawCircle({ x: pupil.x, y: pupil.y, size: S(10), color: INK });
        const glint = P(ex, 156);
        page.drawCircle({ x: glint.x, y: glint.y, size: S(3.4), color: WHITE });
      }
      svg(`M132 122 C 144 112, 162 112, 176 121`, { fill: false, width: 2.25 });
      svg(`M268 122 C 256 112, 238 112, 224 121`, { fill: false, width: 2.25 });
      // Legs
      for (const lx of [104, 158, 242, 296]) {
        const top = P(lx, 388);
        const bottom = P(lx, 430);
        page.drawRectangle({
          x: top.x,
          y: bottom.y,
          width: S(38),
          height: top.y - bottom.y,
          borderColor: BLACK,
          borderWidth: 2.5,
          color: WHITE,
        });
        for (let t = 0; t < 3; t++) {
          const toe = P(lx + 6 + t * 12, 430);
          page.drawLine({
            start: { x: toe.x, y: toe.y },
            end: { x: toe.x, y: toe.y + 7 },
            thickness: 2,
            color: BLACK,
          });
        }
      }
      break;

    case "cute-bear":
      // Bear Ears
      {
        const l = P(120, 110);
        page.drawCircle({ x: l.x, y: l.y, size: S(45), borderColor: BLACK, borderWidth: 3, color: WHITE });
        page.drawCircle({ x: l.x, y: l.y, size: S(25), borderColor: BLACK, borderWidth: 2, color: WHITE });
        const r = P(280, 110);
        page.drawCircle({ x: r.x, y: r.y, size: S(45), borderColor: BLACK, borderWidth: 3, color: WHITE });
        page.drawCircle({ x: r.x, y: r.y, size: S(25), borderColor: BLACK, borderWidth: 2, color: WHITE });
      }
      // Body
      svg(`M130 250 C110 320, 110 350, 200 350 C290 350, 290 320, 270 250 Z`, { width: 3 });
      // Head
      {
        const h = P(200, 170);
        page.drawCircle({ x: h.x, y: h.y, size: S(95), borderColor: BLACK, borderWidth: 3.5, color: WHITE });
      }
      // Snout
      {
        const sn = P(200, 200);
        page.drawEllipse({ x: sn.x, y: sn.y, xScale: S(42), yScale: S(32), borderColor: BLACK, borderWidth: 2.5, color: WHITE });
      }
      // Nose & Mouth
      svg(`M185 188 Q200 180 215 188 Q200 202 185 188 Z`, { fill: true, width: 2 });
      svg(`M200 195 L200 215 M188 212 Q200 224 212 212`, { fill: false, width: 2.5 });
      // Eyes
      for (const ex of [160, 240]) {
        const e = P(ex, 155);
        page.drawEllipse({ x: e.x, y: e.y, xScale: S(12), yScale: S(16), color: INK });
        const glint = P(ex - 3, 150);
        page.drawCircle({ x: glint.x, y: glint.y, size: S(4), color: WHITE });
      }
      // Paws
      for (const px of [120, 280]) {
        const p = P(px, 335);
        page.drawEllipse({ x: p.x, y: p.y, xScale: S(35), yScale: S(30), borderColor: BLACK, borderWidth: 3, color: WHITE });
        page.drawCircle({ x: p.x, y: p.y, size: S(14), borderColor: BLACK, borderWidth: 2, color: WHITE });
      }
      break;

    case "baby-hippo":
      // Hippo Ears
      svg(`M130 90 C110 80, 100 110, 125 120 Z`);
      svg(`M270 90 C290 80, 300 110, 275 120 Z`);
      // Body
      svg(`M120 220 C80 270, 90 350, 200 350 C310 350, 320 270, 280 220 Z`, { width: 3 });
      // Head & Muzzle
      {
        const h = P(200, 150);
        page.drawCircle({ x: h.x, y: h.y, size: S(75), borderColor: BLACK, borderWidth: 3, color: WHITE });
        const m = P(200, 205);
        page.drawEllipse({ x: m.x, y: m.y, xScale: S(80), yScale: S(55), borderColor: BLACK, borderWidth: 3, color: WHITE });
      }
      // Eyes
      for (const ex of [160, 240]) {
        const e = P(ex, 130);
        page.drawEllipse({ x: e.x, y: e.y, xScale: S(10), yScale: S(14), color: INK });
        const g = P(ex - 3, 125);
        page.drawCircle({ x: g.x, y: g.y, size: S(3), color: WHITE });
      }
      // Nostrils
      for (const nx of [170, 230]) {
        const n = P(nx, 180);
        page.drawEllipse({ x: n.x, y: n.y, xScale: S(7), yScale: S(10), color: INK });
      }
      // Smile
      svg(`M140 205 Q200 245 260 205`, { fill: false, width: 3 });
      // Paws
      for (const px of [130, 270]) {
        const p = P(px, 330);
        page.drawEllipse({ x: p.x, y: p.y, xScale: S(30), yScale: S(25), borderColor: BLACK, borderWidth: 3, color: WHITE });
      }
      break;

    default:
      // Generic high-quality character template for coloring
      {
        const bodyCenter = P(200, 260);
        page.drawEllipse({
          x: bodyCenter.x,
          y: bodyCenter.y,
          xScale: S(95),
          yScale: S(85),
          borderColor: BLACK,
          borderWidth: 3.5,
          color: WHITE,
        });
        const headCenter = P(200, 155);
        page.drawCircle({
          x: headCenter.x,
          y: headCenter.y,
          size: S(80),
          borderColor: BLACK,
          borderWidth: 3.5,
          color: WHITE,
        });
        // Big friendly eyes
        for (const ex of [165, 235]) {
          const e = P(ex, 145);
          page.drawCircle({ x: e.x, y: e.y, size: S(16), borderColor: BLACK, borderWidth: 2.5, color: WHITE });
          const pupil = P(ex + 2, 148);
          page.drawCircle({ x: pupil.x, y: pupil.y, size: S(9), color: INK });
          const glint = P(ex - 2, 143);
          page.drawCircle({ x: glint.x, y: glint.y, size: S(3), color: WHITE });
        }
        // Smile
        svg(`M175 190 Q200 215 225 190`, { fill: false, width: 2.75 });
        // Feet
        for (const fx of [145, 255]) {
          const f = P(fx, 345);
          page.drawEllipse({ x: f.x, y: f.y, xScale: S(32), yScale: S(20), borderColor: BLACK, borderWidth: 3, color: WHITE });
        }
      }
      break;
  }
}

async function main() {
  console.log(`Generating ${COLORING_SHEETS.length} coloring PDFs...`);
  let count = 0;
  for (const sheet of COLORING_SHEETS) {
    await generateSinglePdf(sheet);
    count++;
    if (count % 25 === 0 || count === COLORING_SHEETS.length) {
      console.log(`Generated ${count}/${COLORING_SHEETS.length} PDFs...`);
    }
  }
  console.log(`Successfully created all ${COLORING_SHEETS.length} coloring PDFs!`);
}

main().catch((err) => {
  console.error("Fatal error generating coloring PDFs:", err);
  process.exit(1);
});
