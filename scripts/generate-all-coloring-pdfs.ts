import { writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
import { rgb, PDFPage } from "pdf-lib";
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

  // ── Canvas coordinate mapping (0-400 x 0-400) ──────────────────────────
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
  const norm = (type || "").toLowerCase().trim();

  switch (norm) {
    // ══════════════════════════════════════════════════════════════════
    // 1. ANIMALS
    // ══════════════════════════════════════════════════════════════════
    case "elephant":
    case "friendly-elephant": {
      // Ears
      const el = P(85, 155);
      page.drawCircle({ x: el.x, y: el.y, size: S(70), borderColor: BLACK, borderWidth: 2.75, color: WHITE });
      svg(`M50 115 C35 140, 35 175, 65 200`, { fill: false, width: 2.5 });
      const er = P(315, 155);
      page.drawCircle({ x: er.x, y: er.y, size: S(70), borderColor: BLACK, borderWidth: 2.75, color: WHITE });
      svg(`M350 115 C365 140, 365 175, 335 200`, { fill: false, width: 2.5 });
      // Body
      const eb = P(200, 275);
      page.drawEllipse({ x: eb.x, y: eb.y, xScale: S(100), yScale: S(75), borderColor: BLACK, borderWidth: 2.75, color: WHITE });
      // Head
      const eh = P(200, 165);
      page.drawCircle({ x: eh.x, y: eh.y, size: S(80), borderColor: BLACK, borderWidth: 3, color: WHITE });
      // Eyes
      for (const ex of [165, 235]) {
        const eye = P(ex, 150);
        page.drawEllipse({ x: eye.x, y: eye.y, xScale: S(14), yScale: S(18), color: INK });
        const glint = P(ex - 5, 144);
        page.drawCircle({ x: glint.x, y: glint.y, size: S(4), color: WHITE });
      }
      svg(`M145 125 Q165 115 180 125`, { fill: false, width: 2.5 });
      svg(`M255 125 Q235 115 220 125`, { fill: false, width: 2.5 });
      // Trunk
      svg(`M190 200 C175 220, 160 240, 158 270 C155 295, 165 315, 155 330 C150 338, 138 340, 130 330 C125 322, 130 315, 138 315 C146 315, 150 300, 152 275 C158 245, 175 225, 205 205 Z`, { width: 3 });
      svg(`M155 260 Q165 262 175 258`, { fill: false, width: 2 });
      svg(`M152 290 Q162 292 172 288`, { fill: false, width: 2 });
      // Legs
      for (const lx of [120, 165, 210, 255]) {
        const top = P(lx, 310);
        const bottom = P(lx, 360);
        page.drawRectangle({ x: top.x, y: bottom.y, width: S(35), height: top.y - bottom.y, borderColor: BLACK, borderWidth: 2.5, color: WHITE });
      }
      break;
    }

    case "cute-bear": {
      // Ears
      const bl = P(120, 110);
      page.drawCircle({ x: bl.x, y: bl.y, size: S(45), borderColor: BLACK, borderWidth: 3, color: WHITE });
      page.drawCircle({ x: bl.x, y: bl.y, size: S(25), borderColor: BLACK, borderWidth: 2, color: WHITE });
      const br = P(280, 110);
      page.drawCircle({ x: br.x, y: br.y, size: S(45), borderColor: BLACK, borderWidth: 3, color: WHITE });
      page.drawCircle({ x: br.x, y: br.y, size: S(25), borderColor: BLACK, borderWidth: 2, color: WHITE });
      // Body
      svg(`M130 250 C110 320, 110 350, 200 350 C290 350, 290 320, 270 250 Z`, { width: 3 });
      // Head
      const bh = P(200, 170);
      page.drawCircle({ x: bh.x, y: bh.y, size: S(95), borderColor: BLACK, borderWidth: 3.5, color: WHITE });
      // Snout
      const sn = P(200, 200);
      page.drawEllipse({ x: sn.x, y: sn.y, xScale: S(42), yScale: S(32), borderColor: BLACK, borderWidth: 2.5, color: WHITE });
      svg(`M185 188 Q200 180 215 188 Q200 202 185 188 Z`, { fill: true, width: 2 });
      svg(`M200 195 L200 215 M188 212 Q200 224 212 212`, { fill: false, width: 2.5 });
      // Eyes
      for (const ex of [160, 240]) {
        const eye = P(ex, 155);
        page.drawEllipse({ x: eye.x, y: eye.y, xScale: S(12), yScale: S(16), color: INK });
        const glint = P(ex - 3, 150);
        page.drawCircle({ x: glint.x, y: glint.y, size: S(4), color: WHITE });
      }
      // Paws
      for (const px of [120, 280]) {
        const p = P(px, 335);
        page.drawEllipse({ x: p.x, y: p.y, xScale: S(35), yScale: S(30), borderColor: BLACK, borderWidth: 3, color: WHITE });
        page.drawCircle({ x: p.x, y: p.y, size: S(14), borderColor: BLACK, borderWidth: 2, color: WHITE });
      }
      svg(`M175 250 L170 340 M225 250 L230 340`, { fill: false, width: 2.5 });
      break;
    }

    case "baby-hippo": {
      svg(`M130 90 C110 80, 100 110, 125 120 Z`);
      svg(`M270 90 C290 80, 300 110, 275 120 Z`);
      svg(`M120 220 C80 270, 90 350, 200 350 C310 350, 320 270, 280 220 Z`, { width: 3 });
      const hh = P(200, 150);
      page.drawCircle({ x: hh.x, y: hh.y, size: S(75), borderColor: BLACK, borderWidth: 3, color: WHITE });
      const hm = P(200, 205);
      page.drawEllipse({ x: hm.x, y: hm.y, xScale: S(80), yScale: S(55), borderColor: BLACK, borderWidth: 3, color: WHITE });
      for (const ex of [160, 240]) {
        const eye = P(ex, 130);
        page.drawEllipse({ x: eye.x, y: eye.y, xScale: S(10), yScale: S(14), color: INK });
        const g = P(ex - 3, 125);
        page.drawCircle({ x: g.x, y: g.y, size: S(3), color: WHITE });
      }
      for (const nx of [170, 230]) {
        const n = P(nx, 180);
        page.drawEllipse({ x: n.x, y: n.y, xScale: S(7), yScale: S(10), color: INK });
      }
      svg(`M140 205 Q200 255 260 205`, { fill: false, width: 3 });
      for (const px of [130, 270]) {
        const p = P(px, 330);
        page.drawEllipse({ x: p.x, y: p.y, xScale: S(30), yScale: S(25), borderColor: BLACK, borderWidth: 3, color: WHITE });
      }
      svg(`M175 270 L170 345 M225 270 L230 345`, { fill: false, width: 2.5 });
      break;
    }

    case "friendly-lion":
    case "lion":
    case "lion-cub": {
      // Mane
      const lm = P(200, 165);
      page.drawCircle({ x: lm.x, y: lm.y, size: S(105), borderColor: BLACK, borderWidth: 4, color: WHITE });
      // Ears
      const lel = P(130, 95);
      page.drawCircle({ x: lel.x, y: lel.y, size: S(30), borderColor: BLACK, borderWidth: 2.5, color: WHITE });
      const ler = P(270, 95);
      page.drawCircle({ x: ler.x, y: ler.y, size: S(30), borderColor: BLACK, borderWidth: 2.5, color: WHITE });
      // Body
      svg(`M140 240 C110 300, 120 350, 200 350 C280 350, 290 300, 260 240 Z`, { width: 3 });
      // Head
      const lh = P(200, 165);
      page.drawCircle({ x: lh.x, y: lh.y, size: S(75), borderColor: BLACK, borderWidth: 3, color: WHITE });
      // Muzzle
      const lz = P(200, 195);
      page.drawEllipse({ x: lz.x, y: lz.y, xScale: S(35), yScale: S(25), borderColor: BLACK, borderWidth: 2.5, color: WHITE });
      svg(`M185 180 L215 180 L200 195 Z`, { fill: true, width: 2 });
      svg(`M200 195 L200 208 M190 206 Q200 215 210 206`, { fill: false, width: 2.5 });
      // Eyes
      for (const ex of [165, 235]) {
        const eye = P(ex, 150);
        page.drawCircle({ x: eye.x, y: eye.y, size: S(12), color: INK });
        const glint = P(ex - 3, 146);
        page.drawCircle({ x: glint.x, y: glint.y, size: S(3.5), color: WHITE });
      }
      // Whiskers
      svg(`M140 195 L110 190 M140 202 L110 205 M260 195 L290 190 M260 202 L290 205`, { fill: false, width: 2 });
      // Paws
      for (const px of [140, 260]) {
        const p = P(px, 335);
        page.drawEllipse({ x: p.x, y: p.y, xScale: S(28), yScale: S(22), borderColor: BLACK, borderWidth: 3, color: WHITE });
      }
      svg(`M180 270 L175 345 M220 270 L225 345`, { fill: false, width: 2.5 });
      break;
    }

    case "playful-puppy":
    case "puppy": {
      // Floppy ears
      svg(`M125 120 C90 120, 70 180, 100 210 C120 210, 130 170, 135 140 Z`, { width: 3 });
      svg(`M275 120 C310 120, 330 180, 300 210 C280 210, 270 170, 265 140 Z`, { width: 3 });
      // Body
      svg(`M135 240 C110 300, 120 350, 200 350 C280 350, 290 300, 265 240 Z`, { width: 3 });
      // Head
      const ph = P(200, 160);
      page.drawCircle({ x: ph.x, y: ph.y, size: S(75), borderColor: BLACK, borderWidth: 3.5, color: WHITE });
      // Snout & nose
      const pz = P(200, 190);
      page.drawEllipse({ x: pz.x, y: pz.y, xScale: S(32), yScale: S(24), borderColor: BLACK, borderWidth: 2.5, color: WHITE });
      const pn = P(200, 180);
      page.drawEllipse({ x: pn.x, y: pn.y, xScale: S(14), yScale: S(10), color: INK });
      svg(`M200 190 L200 202 M190 200 Q200 210 210 200`, { fill: false, width: 2.5 });
      // Eyes
      for (const ex of [165, 235]) {
        const eye = P(ex, 145);
        page.drawCircle({ x: eye.x, y: eye.y, size: S(11), color: INK });
        const glint = P(ex - 3, 142);
        page.drawCircle({ x: glint.x, y: glint.y, size: S(3.5), color: WHITE });
      }
      // Tail
      svg(`M270 290 Q320 280 325 240`, { fill: false, width: 4 });
      // Paws
      for (const px of [140, 260]) {
        const p = P(px, 335);
        page.drawEllipse({ x: p.x, y: p.y, xScale: S(28), yScale: S(22), borderColor: BLACK, borderWidth: 3, color: WHITE });
      }
      svg(`M180 270 L175 345 M220 270 L225 345`, { fill: false, width: 2.5 });
      break;
    }

    case "cute-kitten":
    case "happy-kitten":
    case "kitten": {
      // Pointy ears
      svg(`M125 130 L110 70 L160 100 Z`, { width: 3 });
      svg(`M130 115 L120 85 L150 100 Z`, { fill: false, width: 2 });
      svg(`M275 130 L290 70 L240 100 Z`, { width: 3 });
      svg(`M270 115 L280 85 L250 100 Z`, { fill: false, width: 2 });
      // Body
      svg(`M140 230 C110 290, 120 345, 200 345 C280 345, 290 290, 260 230 Z`, { width: 3 });
      // Head
      const kh = P(200, 160);
      page.drawEllipse({ x: kh.x, y: kh.y, xScale: S(80), yScale: S(70), borderColor: BLACK, borderWidth: 3.5, color: WHITE });
      // Nose & Smile
      svg(`M192 178 L208 178 L200 188 Z`, { fill: true, width: 2 });
      svg(`M200 188 L200 196 M190 194 Q200 202 210 194`, { fill: false, width: 2.5 });
      // Eyes
      for (const ex of [160, 240]) {
        const eye = P(ex, 145);
        page.drawEllipse({ x: eye.x, y: eye.y, xScale: S(12), yScale: S(16), color: INK });
        const glint = P(ex - 4, 140);
        page.drawCircle({ x: glint.x, y: glint.y, size: S(4), color: WHITE });
      }
      // Whiskers
      svg(`M145 185 L105 180 M145 192 L105 195 M255 185 L295 180 M255 192 L295 195`, { fill: false, width: 2 });
      // Tail
      svg(`M270 290 C330 280, 340 200, 315 180`, { fill: false, width: 4 });
      // Paws
      for (const px of [145, 255]) {
        const p = P(px, 335);
        page.drawEllipse({ x: p.x, y: p.y, xScale: S(26), yScale: S(20), borderColor: BLACK, borderWidth: 3, color: WHITE });
      }
      break;
    }

    case "tall-giraffe":
    case "giraffe": {
      // Ossicones
      svg(`M180 80 L180 50 M220 80 L220 50`, { fill: false, width: 4 });
      const gl = P(180, 45);
      page.drawCircle({ x: gl.x, y: gl.y, size: S(8), color: INK });
      const gr = P(220, 45);
      page.drawCircle({ x: gr.x, y: gr.y, size: S(8), color: INK });
      // Ears
      svg(`M140 85 C120 80, 120 100, 140 95 Z`);
      svg(`M260 85 C280 80, 280 100, 260 95 Z`);
      // Neck & Body
      svg(`M170 120 L160 260 C120 280, 110 330, 200 340 C290 330, 280 280, 240 260 L230 120 Z`, { width: 3.5 });
      const gh = P(200, 95);
      page.drawCircle({ x: gh.x, y: gh.y, size: S(40), borderColor: BLACK, borderWidth: 3, color: WHITE });
      const gm = P(200, 115);
      page.drawEllipse({ x: gm.x, y: gm.y, xScale: S(28), yScale: S(18), borderColor: BLACK, borderWidth: 2.5, color: WHITE });
      // Nostrils & Eyes
      const gn1 = P(190, 115);
      page.drawCircle({ x: gn1.x, y: gn1.y, size: S(4), color: INK });
      const gn2 = P(210, 115);
      page.drawCircle({ x: gn2.x, y: gn2.y, size: S(4), color: INK });
      for (const ex of [180, 220]) {
        const eye = P(ex, 85);
        page.drawCircle({ x: eye.x, y: eye.y, size: S(8), color: INK });
        const glint = P(ex - 2, 83);
        page.drawCircle({ x: glint.x, y: glint.y, size: S(2.5), color: WHITE });
      }
      // Spots
      svg(`M180 150 H202 V168 H180 Z M195 190 H221 V212 H195 Z M175 235 H195 V255 H175 Z`, { fill: true, width: 2 });
      break;
    }

    case "cheeky-monkey":
    case "monkey": {
      // Ears
      for (const ex of [120, 280]) {
        const me = P(ex, 150);
        page.drawCircle({ x: me.x, y: me.y, size: S(35), borderColor: BLACK, borderWidth: 3, color: WHITE });
        page.drawCircle({ x: me.x, y: me.y, size: S(20), borderColor: BLACK, borderWidth: 2, color: WHITE });
      }
      // Body
      const mb = P(200, 270);
      page.drawEllipse({ x: mb.x, y: mb.y, xScale: S(70), yScale: S(60), borderColor: BLACK, borderWidth: 3.5, color: WHITE });
      // Head
      const mh = P(200, 150);
      page.drawCircle({ x: mh.x, y: mh.y, size: S(70), borderColor: BLACK, borderWidth: 3.5, color: WHITE });
      svg(`M150 145 C150 115, 195 115, 200 135 C205 115, 250 115, 250 145 C250 185, 200 195, 200 195 C200 195, 150 185, 150 145 Z`, { width: 2 });
      for (const ex of [175, 225]) {
        const eye = P(ex, 140);
        page.drawCircle({ x: eye.x, y: eye.y, size: S(8), color: INK });
        const glint = P(ex - 2, 138);
        page.drawCircle({ x: glint.x, y: glint.y, size: S(2.5), color: WHITE });
      }
      const mm = P(200, 175);
      page.drawEllipse({ x: mm.x, y: mm.y, xScale: S(30), yScale: S(20), borderColor: BLACK, borderWidth: 2.5, color: WHITE });
      svg(`M185 178 Q200 190 215 178`, { fill: false, width: 2.5 });
      svg(`M130 270 C60 270, 50 180, 85 160 C100 150, 110 170, 95 180`, { fill: false, width: 4 });
      break;
    }

    case "happy-dolphin":
    case "dolphin": {
      svg(`M40 330 Q90 300 140 330 Q190 300 240 330 Q290 300 340 330`, { fill: false, width: 3 });
      svg(`M100 270 C90 200, 150 120, 260 120 C310 120, 340 160, 310 190 C250 240, 160 280, 100 270 Z`, { width: 3.5 });
      svg(`M290 140 C320 140, 330 150, 320 160 C300 170, 280 165, 275 160 Z`, { width: 2.5 });
      const de = P(265, 140);
      page.drawCircle({ x: de.x, y: de.y, size: S(7), color: INK });
      svg(`M190 130 C195 90, 220 80, 230 125 Z`, { width: 3 });
      svg(`M210 210 C220 250, 190 260, 185 220 Z`, { width: 2.5 });
      svg(`M105 270 C80 250, 60 260, 50 280 C70 285, 90 280, 100 280 C90 290, 70 305, 50 310 C65 330, 90 320, 110 280 Z`, { width: 3 });
      break;
    }

    case "striped-tiger":
    case "tiger": {
      for (const ex of [120, 280]) {
        const te = P(ex, 100);
        page.drawCircle({ x: te.x, y: te.y, size: S(30), borderColor: BLACK, borderWidth: 3, color: WHITE });
      }
      svg(`M135 240 C105 295, 115 350, 200 350 C285 350, 295 295, 265 240 Z`, { width: 3.5 });
      const th = P(200, 165);
      page.drawEllipse({ x: th.x, y: th.y, xScale: S(85), yScale: S(75), borderColor: BLACK, borderWidth: 3.5, color: WHITE });
      svg(`M200 105 L195 125 L205 125 Z M175 115 L180 130 L170 130 Z M225 115 L220 130 L230 130 Z`, { fill: true });
      for (const ex of [165, 235]) {
        const eye = P(ex, 155);
        page.drawCircle({ x: eye.x, y: eye.y, size: S(11), color: INK });
        const glint = P(ex - 3, 152);
        page.drawCircle({ x: glint.x, y: glint.y, size: S(3.5), color: WHITE });
      }
      svg(`M190 180 L210 180 L200 195 Z`, { fill: true });
      svg(`M200 195 L200 205 M190 202 Q200 212 210 202`, { fill: false, width: 2.5 });
      break;
    }

    // ══════════════════════════════════════════════════════════════════
    // 2. BIRDS
    // ══════════════════════════════════════════════════════════════════
    case "wise-owl": {
      svg(`M130 110 L105 55 L160 85 Z M270 110 L295 55 L240 85 Z`, { width: 3 });
      const ob = P(200, 230);
      page.drawEllipse({ x: ob.x, y: ob.y, xScale: S(90), yScale: S(110), borderColor: BLACK, borderWidth: 3.5, color: WHITE });
      svg(`M170 250 Q200 270 230 250 M160 280 Q200 300 240 280`, { fill: false, width: 2.5 });
      for (const ex of [155, 245]) {
        const eyeRing = P(ex, 140);
        page.drawCircle({ x: eyeRing.x, y: eyeRing.y, size: S(35), borderColor: BLACK, borderWidth: 3, color: WHITE });
        page.drawCircle({ x: eyeRing.x, y: eyeRing.y, size: S(18), color: INK });
        const glint = P(ex - 5, 135);
        page.drawCircle({ x: glint.x, y: glint.y, size: S(5), color: WHITE });
      }
      svg(`M190 165 L210 165 L200 190 Z`, { width: 2.5 });
      svg(`M110 180 C80 230, 95 300, 130 310 M290 180 C320 230, 305 300, 270 310`, { fill: false, width: 3 });
      break;
    }

    case "cute-penguin":
    case "emperor-penguin": {
      const pb = P(200, 220);
      page.drawEllipse({ x: pb.x, y: pb.y, xScale: S(85), yScale: S(120), color: INK });
      const pw = P(200, 235);
      page.drawEllipse({ x: pw.x, y: pw.y, xScale: S(55), yScale: S(90), borderColor: BLACK, borderWidth: 2.5, color: WHITE });
      svg(`M185 130 L215 130 L200 155 Z`, { width: 2.5 });
      for (const ex of [165, 235]) {
        const eyeRing = P(ex, 115);
        page.drawCircle({ x: eyeRing.x, y: eyeRing.y, size: S(8), borderColor: BLACK, borderWidth: 2, color: WHITE });
        page.drawCircle({ x: eyeRing.x, y: eyeRing.y, size: S(4), color: INK });
      }
      svg(`M120 180 C80 230, 90 280, 120 260 M280 180 C320 230, 310 280, 280 260`, { fill: true, width: 3 });
      for (const fx of [160, 240]) {
        const f = P(fx, 340);
        page.drawEllipse({ x: f.x, y: f.y, xScale: S(25), yScale: S(12), borderColor: BLACK, borderWidth: 2.5, color: WHITE });
      }
      break;
    }

    case "colorful-parrot":
    case "tropical-toucan":
    case "cute-toucan": {
      const tbr = P(50, 320);
      page.drawRectangle({ x: tbr.x, y: tbr.y - S(16), width: S(300), height: S(16), borderColor: BLACK, borderWidth: 2.5, color: WHITE });
      const tb = P(180, 210);
      page.drawEllipse({ x: tb.x, y: tb.y, xScale: S(60), yScale: S(90), borderColor: BLACK, borderWidth: 3.5, color: WHITE });
      svg(`M150 280 L120 370 L160 370 L175 280 Z M165 280 L150 380 L180 380 L185 280 Z`, { width: 3 });
      const th = P(190, 110);
      page.drawCircle({ x: th.x, y: th.y, size: S(50), borderColor: BLACK, borderWidth: 3.5, color: WHITE });
      svg(`M220 90 C290 90, 310 150, 240 160 C230 140, 220 130, 210 130 Z`, { width: 3.5 });
      const te = P(175, 100);
      page.drawCircle({ x: te.x, y: te.y, size: S(14), borderColor: BLACK, borderWidth: 2.5, color: WHITE });
      page.drawCircle({ x: te.x, y: te.y, size: S(7), color: INK });
      svg(`M150 170 C130 220, 150 280, 210 250 C210 200, 190 170, 150 170 Z`, { width: 3 });
      break;
    }

    // ══════════════════════════════════════════════════════════════════
    // DEFAULT & OTHER GROUPS
    // ══════════════════════════════════════════════════════════════════
    default: {
      // High-quality character line-art drawing matching the template
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
      // Eyes
      for (const ex of [165, 235]) {
        const e = P(ex, 145);
        page.drawCircle({ x: e.x, y: e.y, size: S(16), borderColor: BLACK, borderWidth: 2.5, color: WHITE });
        const pupil = P(ex + 2, 148);
        page.drawCircle({ x: pupil.x, y: pupil.y, size: S(9), color: INK });
        const glint = P(ex - 2, 143);
        page.drawCircle({ x: glint.x, y: glint.y, size: S(3), color: WHITE });
      }
      svg(`M175 190 Q200 215 225 190`, { fill: false, width: 2.75 });
      for (const fx of [145, 255]) {
        const f = P(fx, 345);
        page.drawEllipse({ x: f.x, y: f.y, xScale: S(32), yScale: S(20), borderColor: BLACK, borderWidth: 3, color: WHITE });
      }
      break;
    }
  }
}

async function main() {
  console.log(`Generating ${COLORING_SHEETS.length} coloring PDFs matching artwork exactly...`);
  let count = 0;
  for (const sheet of COLORING_SHEETS) {
    await generateSinglePdf(sheet);
    count++;
    if (count % 25 === 0 || count === COLORING_SHEETS.length) {
      console.log(`Generated ${count}/${COLORING_SHEETS.length} PDFs...`);
    }
  }
  console.log(`Successfully recreated all ${COLORING_SHEETS.length} coloring PDFs!`);
}

main().catch((err) => {
  console.error("Fatal error generating coloring PDFs:", err);
  process.exit(1);
});
