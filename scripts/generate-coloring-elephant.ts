// Generates one printable "Color the Elephant" coloring-page PDF.
// Pure vector line art (pdf-lib primitives + SVG bezier paths), outline-only
// so kids can colour it in. Reuses the shared chrome/branding from the
// tools PDF builder.
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
import { rgb } from "pdf-lib";
import { newDoc, drawChrome, PAGE, text } from "../src/lib/tools/pdf";

const OUT_DIR = join(process.cwd(), "public", "worksheets", "pdfs");
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const BLACK = rgb(0, 0, 0);
const WHITE = rgb(1, 1, 1);
const INK = rgb(0.06, 0.09, 0.15);

async function run() {
  const { doc, F } = await newDoc();
  doc.setTitle("Color the Elephant — Printable Coloring Page");
  const page = doc.addPage([PAGE.PW, PAGE.PH]);

  const box = drawChrome(page, F, {
    title: "Color the Elephant!",
    subtitle: "Grab your crayons or markers and give this elephant some colour.",
    badge: "Coloring Page",
    studentStrip: true,
    pageNum: 1,
    pageCount: 1,
  });

  text(page, "Use any colours you like — there's no wrong way to colour!", box.left, box.top - 10, 9, F.reg, rgb(0.4, 0.46, 0.56), {
    align: "left",
  });

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
    page.drawSvgPath(
      `M0 0 C -3 -10, -3 -16, 0 -22 C 3 -16, 3 -10, 0 0 Z`,
      { x: gx, y: groundY, borderColor: BLACK, borderWidth: 1.5 },
    );
  }

  // ── sun in the corner (decorative, also colourable) ────────────────────
  const sunCX = box.right - 55;
  const sunCY = areaTop - 30;
  page.drawCircle({ x: sunCX, y: sunCY, size: 18, borderColor: BLACK, borderWidth: 2 });
  for (let i = 0; i < 8; i++) {
    const a = (Math.PI * 2 * i) / 8;
    const r1 = 24, r2 = 34;
    page.drawLine({
      start: { x: sunCX + Math.cos(a) * r1, y: sunCY + Math.sin(a) * r1 },
      end: { x: sunCX + Math.cos(a) * r2, y: sunCY + Math.sin(a) * r2 },
      thickness: 2,
      color: BLACK,
    });
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  ELEPHANT — designed on a shared 400×430 local canvas (x: 0-400,
  //  y: 0-430, y grows downward like SVG). One anchor + one scale maps the
  //  whole canvas onto the page, so every shape below uses the same plain
  //  local coordinates: drawSvgPath gets them straight as path data, and
  //  drawCircle/drawEllipse go through P()/S() to convert to page space.
  // ═══════════════════════════════════════════════════════════════════════
  const DRAW_W = 400;
  const DRAW_H = 430;
  const availH = areaTop - groundY;
  const scale = Math.min((box.width - 50) / DRAW_W, availH / DRAW_H);
  const ax = box.left + (box.width - DRAW_W * scale) / 2;
  const ay = groundY + DRAW_H * scale; // page-y of local (x,0)

  const P = (lx: number, ly: number) => ({ x: ax + lx * scale, y: ay - ly * scale });
  const S = (r: number) => r * scale;
  const svg = (
    d: string,
    opts: { fill?: boolean; width?: number } = {},
  ) =>
    page.drawSvgPath(d, {
      x: ax,
      y: ay,
      scale,
      color: opts.fill === false ? undefined : WHITE,
      borderColor: BLACK,
      borderWidth: opts.width ?? 2.75,
    });

  // tail — small curl at the back, tucked under the body
  svg(`M95 300 C 78 312, 70 330, 80 350 C 68 348, 58 342, 52 332`, { fill: false, width: 2.5 });

  // body
  {
    const c = P(200, 318);
    page.drawEllipse({ x: c.x, y: c.y, xScale: S(120), yScale: S(92), borderColor: BLACK, borderWidth: 2.75, color: WHITE });
  }

  // ears — big round flaps mostly hidden behind the head (drawn after);
  // only the crescent outside the head stays visible.
  {
    const l = P(58, 152);
    page.drawCircle({ x: l.x, y: l.y, size: S(78), borderColor: BLACK, borderWidth: 2.5, color: WHITE });
    const r = P(342, 152);
    page.drawCircle({ x: r.x, y: r.y, size: S(78), borderColor: BLACK, borderWidth: 2.5, color: WHITE });
  }
  // inner-ear creases, sitting inside the visible crescent of each ear
  svg(`M22 108 C 8 132, 10 168, 40 196`, { fill: false, width: 2 });
  svg(`M378 108 C 392 132, 390 168, 360 196`, { fill: false, width: 2 });

  // head
  {
    const h = P(200, 175);
    page.drawCircle({ x: h.x, y: h.y, size: S(98), borderColor: BLACK, borderWidth: 2.75, color: WHITE });
  }

  // trunk — hangs from the face down toward the ground, well clear of the
  // legs, and curls into a small spiral at the tip
  svg(
    `M188 222
     C 168 236, 152 258, 150 284
     C 148 306, 156 324, 152 340
     C 150 350, 138 354, 128 347
     C 122 342, 124 334, 132 333
     C 138 332, 141 336, 140 341
     C 146 330, 142 312, 148 292
     C 154 268, 170 246, 198 228
     C 204 224, 202 218, 194 216 Z`,
    { width: 2.75 },
  );
  // wrinkle lines across the trunk
  svg(`M154 268 C 162 270, 172 269, 180 264`, { fill: false, width: 1.75 });
  svg(`M150 300 C 158 303, 168 302, 176 297`, { fill: false, width: 1.75 });
  svg(`M149 328 C 156 331, 164 330, 170 326`, { fill: false, width: 1.75 });

  // mouth — small smile just above where the trunk begins
  svg(`M182 212 C 190 219, 210 219, 218 212`, { fill: false, width: 2 });

  // eyes — big and expressive
  for (const ex of [163, 237]) {
    const e = P(ex, 158);
    page.drawCircle({ x: e.x, y: e.y, size: S(21), borderColor: BLACK, borderWidth: 2.25, color: WHITE });
    const pupil = P(ex + 4, 163);
    page.drawCircle({ x: pupil.x, y: pupil.y, size: S(10), color: INK });
    const glint = P(ex, 156);
    page.drawCircle({ x: glint.x, y: glint.y, size: S(3.4), color: WHITE });
  }
  // eyebrows
  svg(`M132 122 C 144 112, 162 112, 176 121`, { fill: false, width: 2.25 });
  svg(`M268 122 C 256 112, 238 112, 224 121`, { fill: false, width: 2.25 });

  // legs — drawn last so they cleanly attach under the belly
  const legLocalXs = [104, 158, 242, 296];
  for (const lx of legLocalXs) {
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
    // toes
    for (let t = 0; t < 3; t++) {
      const toe = P(lx + 6 + t * 12, 430);
      page.drawLine({ start: { x: toe.x, y: toe.y }, end: { x: toe.x, y: toe.y + 7 }, thickness: 2, color: BLACK });
    }
  }

  const pdfBytes = await doc.save();
  const outPath = join(OUT_DIR, "color-elephant.pdf");
  writeFileSync(outPath, pdfBytes);
  console.log(`Wrote ${outPath}`);
}

run().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
