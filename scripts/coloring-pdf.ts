import React from "react";
import ReactDOMServer from "react-dom/server";
import { PDFPage, rgb, degrees } from "pdf-lib";
import { newDoc, drawChrome, PAGE, text, Fonts } from "@/lib/tools/pdf";
import { ColoringSheet } from "@/lib/coloring";
import { renderArtwork } from "@/components/coloring/ColoringIllustration";

const BLACK = rgb(0, 0, 0);
const WHITE = rgb(1, 1, 1);
const INK = rgb(0.06, 0.09, 0.15);

function parseAttr(el: string, attr: string): string | undefined {
  const m = el.match(new RegExp(`${attr}="([^"]*)"`, "i"));
  return m ? m[1] : undefined;
}

function parseTransform(transform: string | undefined): { deg: number; cx?: number; cy?: number } | null {
  if (!transform) return null;
  const m = transform.match(/rotate\(\s*(-?[\d.]+)(?:\s+(-?[\d.]+)\s+(-?[\d.]+))?\s*\)/);
  if (m) {
    return {
      deg: parseFloat(m[1]),
      cx: m[2] !== undefined ? parseFloat(m[2]) : undefined,
      cy: m[3] !== undefined ? parseFloat(m[3]) : undefined,
    };
  }
  return null;
}

function rotatePoint(x: number, y: number, cx: number, cy: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const dx = x - cx;
  const dy = y - cy;
  return {
    x: cx + dx * cos - dy * sin,
    y: cy + dx * sin + dy * cos,
  };
}

export function drawSvgElementsToPage(
  html: string,
  page: PDFPage,
  F: Fonts,
  ax: number,
  ay: number,
  scale: number
) {
  const P = (lx: number, ly: number) => ({ x: ax + lx * scale, y: ay - ly * scale });
  const S = (r: number) => r * scale;

  const elRegex = /<(path|circle|ellipse|rect|line|polygon|polyline|text)\b([^>]*?)(?:\/>|>(.*?)<\/\1>)/gi;
  let match;

  while ((match = elRegex.exec(html)) !== null) {
    const tag = match[1].toLowerCase();
    const attrs = match[2];
    const textContent = match[3];

    const fillAttr = parseAttr(attrs, "fill");
    const strokeAttr = parseAttr(attrs, "stroke");
    const strokeWidthAttr = parseAttr(attrs, "stroke-width") || parseAttr(attrs, "strokeWidth");
    const strokeW = strokeWidthAttr ? parseFloat(strokeWidthAttr) : 3;
    const transformStr = parseAttr(attrs, "transform");
    const rot = parseTransform(transformStr);

    const isFillNone = fillAttr === "none";
    const isInkFill = fillAttr === "#111827" || fillAttr === "#000" || fillAttr === "black";
    const fillColor = isFillNone ? undefined : isInkFill ? INK : WHITE;
    const strokeColor = strokeAttr === "none" ? undefined : BLACK;
    const borderWidth = strokeAttr === "none" ? 0 : Math.max(1, S(strokeW));

    if (tag === "path") {
      const d = parseAttr(attrs, "d");
      if (d) {
        try {
          page.drawSvgPath(d, {
            x: ax,
            y: ay,
            scale,
            color: fillColor,
            borderColor: strokeColor,
            borderWidth: borderWidth,
          });
        } catch (e) {
          // ignore invalid path segments
        }
      }
    } else if (tag === "circle") {
      const cx = parseFloat(parseAttr(attrs, "cx") || "0");
      const cy = parseFloat(parseAttr(attrs, "cy") || "0");
      const r = parseFloat(parseAttr(attrs, "r") || "0");
      const pt = P(cx, cy);
      page.drawCircle({
        x: pt.x,
        y: pt.y,
        size: S(r),
        color: fillColor,
        borderColor: strokeColor,
        borderWidth: borderWidth,
      });
    } else if (tag === "ellipse") {
      const cx = parseFloat(parseAttr(attrs, "cx") || "0");
      const cy = parseFloat(parseAttr(attrs, "cy") || "0");
      const rx = parseFloat(parseAttr(attrs, "rx") || "0");
      const ry = parseFloat(parseAttr(attrs, "ry") || "0");
      const pt = P(cx, cy);
      page.drawEllipse({
        x: pt.x,
        y: pt.y,
        xScale: S(rx),
        yScale: S(ry),
        rotate: rot ? degrees(-rot.deg) : undefined,
        color: fillColor,
        borderColor: strokeColor,
        borderWidth: borderWidth,
      });
    } else if (tag === "rect") {
      const x = parseFloat(parseAttr(attrs, "x") || "0");
      const y = parseFloat(parseAttr(attrs, "y") || "0");
      const width = parseFloat(parseAttr(attrs, "width") || "0");
      const height = parseFloat(parseAttr(attrs, "height") || "0");

      if (rot) {
        const rotCx = rot.cx !== undefined ? rot.cx : x + width / 2;
        const rotCy = rot.cy !== undefined ? rot.cy : y + height / 2;
        const p1 = rotatePoint(x, y, rotCx, rotCy, rot.deg);
        const p2 = rotatePoint(x + width, y, rotCx, rotCy, rot.deg);
        const p3 = rotatePoint(x + width, y + height, rotCx, rotCy, rot.deg);
        const p4 = rotatePoint(x, y + height, rotCx, rotCy, rot.deg);
        const d = `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y} L ${p4.x} ${p4.y} Z`;
        try {
          page.drawSvgPath(d, {
            x: ax,
            y: ay,
            scale,
            color: fillColor,
            borderColor: strokeColor,
            borderWidth: borderWidth,
          });
        } catch (e) {}
      } else {
        const pt = P(x, y + height);
        page.drawRectangle({
          x: pt.x,
          y: pt.y,
          width: S(width),
          height: S(height),
          color: fillColor,
          borderColor: strokeColor,
          borderWidth: borderWidth,
        });
      }
    } else if (tag === "line") {
      const x1 = parseFloat(parseAttr(attrs, "x1") || "0");
      const y1 = parseFloat(parseAttr(attrs, "y1") || "0");
      const x2 = parseFloat(parseAttr(attrs, "x2") || "0");
      const y2 = parseFloat(parseAttr(attrs, "y2") || "0");
      const p1 = P(x1, y1);
      const p2 = P(x2, y2);
      page.drawLine({
        start: p1,
        end: p2,
        thickness: borderWidth || 2,
        color: strokeColor || BLACK,
      });
    } else if (tag === "polygon" || tag === "polyline") {
      const points = parseAttr(attrs, "points");
      if (points) {
        const pts = points
          .trim()
          .split(/\s+/)
          .map((pt, i) => {
            const [px, py] = pt.split(",").map(Number);
            return (i === 0 ? "M " : "L ") + `${px} ${py}`;
          })
          .join(" ") + (tag === "polygon" ? " Z" : "");
        try {
          page.drawSvgPath(pts, {
            x: ax,
            y: ay,
            scale,
            color: fillColor,
            borderColor: strokeColor,
            borderWidth: borderWidth,
          });
        } catch (e) {}
      }
    } else if (tag === "text" && textContent) {
      const rawText = textContent.replace(/<[^>]+>/g, "").trim();
      if (rawText) {
        const x = parseFloat(parseAttr(attrs, "x") || "0");
        const y = parseFloat(parseAttr(attrs, "y") || "0");
        const fontSizeAttr = parseAttr(attrs, "font-size") || parseAttr(attrs, "fontSize");
        const fSize = (fontSizeAttr ? parseFloat(fontSizeAttr) : 18) * scale;
        const font = (parseAttr(attrs, "font-weight") || parseAttr(attrs, "fontWeight")) === "bold" ? F.bold : F.reg;
        const anchor = parseAttr(attrs, "text-anchor") || parseAttr(attrs, "textAnchor");
        let pt = P(x, y);
        if (anchor === "middle") {
          const w = font.widthOfTextAtSize(rawText, fSize);
          pt.x -= w / 2;
        } else if (anchor === "end") {
          const w = font.widthOfTextAtSize(rawText, fSize);
          pt.x -= w;
        }
        page.drawText(rawText, {
          x: pt.x,
          y: pt.y,
          size: fSize,
          font: font,
          color: fillColor || strokeColor || INK,
        });
      }
    }
  }
}

export async function buildColoringPdf(sheet: ColoringSheet): Promise<Uint8Array> {
  const { doc, F } = await newDoc();
  doc.setTitle(`${sheet.title} — Printable Coloring Page`);
  const page = doc.addPage([PAGE.PW, PAGE.PH]);

  const box = drawChrome(page, F, {
    title: sheet.prompt || `Color the ${sheet.title}!`,
    subtitle: sheet.subtitle || "",
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
  const groundY = areaBottom;

  // Ground line
  page.drawLine({
    start: { x: box.left + 20, y: groundY },
    end: { x: box.right - 20, y: groundY },
    thickness: 2.5,
    color: BLACK,
  });

  // Grass tufts
  for (let gx = box.left + 40; gx < box.right - 30; gx += 26) {
    page.drawSvgPath(`M0 0 C -3 -10, -3 -16, 0 -22 C 3 -16, 3 -10, 0 0 Z`, {
      x: gx,
      y: groundY,
      borderColor: BLACK,
      borderWidth: 1.5,
    });
  }

  // Sun in the corner
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

  const DRAW_W = 400;
  const DRAW_H = 400;
  const availH = areaTop - groundY;
  const scale = Math.min((box.width - 50) / DRAW_W, availH / DRAW_H);
  const ax = box.left + (box.width - DRAW_W * scale) / 2;
  const ay = groundY + DRAW_H * scale;

  // Render artwork
  const node = renderArtwork(sheet.slug) || renderArtwork(sheet.svgType);
  if (node) {
    const html = ReactDOMServer.renderToStaticMarkup(node as React.ReactElement);
    drawSvgElementsToPage(html, page, F, ax, ay, scale);
  }

  return await doc.save();
}
