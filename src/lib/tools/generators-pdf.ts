// ─────────────────────────────────────────────────────────────────────────────
// PDF Builders for the 6 Advanced Generators
// Client-side high-resolution vector PDF generation via pdf-lib.
// Supports A4 / Letter, duplex flashcards, SVG diagrams, and matching answer keys.
// ─────────────────────────────────────────────────────────────────────────────

import { PDFPage, rgb } from "pdf-lib";
import {
  newDoc,
  drawChrome,
  text,
  enc,
  TOK,
  PAGE,
  paginate,
  downloadPdf,
  type Fonts,
  type Box,
} from "./pdf";
import type { ReadingQuestion } from "./reading";
import type { FractionProblem } from "./fractions";
import { formatFraction } from "./fractions";
import type { MoneyProblem, CurrencyCode } from "./money";
import { formatMoney } from "./money";
import type { CrosswordResult } from "./crossword";
import type { GrammarItem } from "./grammar";
import type { Flashcard } from "./flashcards";
import { getDuplexCardOrder } from "./flashcards";

export { downloadPdf };

const { PW, PH, ML, MR } = PAGE;
const CONTENT_W = PW - ML - MR;

// ═══════════════════════════════════════════════════════════════════════════
// 1. READING COMPREHENSION PDF
// ═══════════════════════════════════════════════════════════════════════════

export interface ReadingPdfOpts {
  title: string;
  category: string;
  grade: string;
  paragraphs: string[];
  questions: ReadingQuestion[];
  includeAnswerKey: boolean;
}

export async function buildReadingPdf(o: ReadingPdfOpts): Promise<Uint8Array> {
  const { doc, F } = await newDoc();
  const totalPages = 1 + (o.questions.length > 5 ? 1 : 0) + (o.includeAnswerKey ? 1 : 0);

  // Page 1: Passage + initial questions
  const page1 = doc.addPage([PW, PH]);
  const b1 = drawChrome(page1, F, {
    title: o.title,
    subtitle: `${o.category} · ${o.grade} Reading Comprehension`,
    badge: "Reading",
    studentStrip: true,
    pageNum: 1,
    pageCount: totalPages,
  });

  let curY = b1.top - 6;

  // Boxed Passage Section
  text(page1, "READING PASSAGE", b1.left, curY, 9, F.bold, TOK.NAVY);
  curY -= 14;

  const passBoxTop = curY;
  const wrapParagraph = (para: string, maxWidth: number): string[] => {
    const words = para.split(" ");
    const lines: string[] = [];
    let curLine = "";
    for (const w of words) {
      const test = curLine ? `${curLine} ${w}` : w;
      if (F.reg.widthOfTextAtSize(enc(test), 9) > maxWidth && curLine) {
        lines.push(curLine);
        curLine = w;
      } else {
        curLine = test;
      }
    }
    if (curLine) lines.push(curLine);
    return lines;
  };

  const passageLines: string[] = [];
  for (const para of o.paragraphs) {
    passageLines.push(...wrapParagraph(para, CONTENT_W - 20));
    passageLines.push(""); // paragraph gap
  }

  // Draw passage background box
  const passageBoxHeight = Math.min(220, passageLines.length * 11 + 10);
  page1.drawRectangle({
    x: b1.left,
    y: passBoxTop - passageBoxHeight,
    width: CONTENT_W,
    height: passageBoxHeight,
    color: rgb(0.97, 0.98, 0.99),
    borderColor: TOK.FAINT,
    borderWidth: 1,
  });

  let pY = passBoxTop - 12;
  for (const line of passageLines) {
    if (pY < passBoxTop - passageBoxHeight + 8) break;
    if (line) {
      text(page1, line, b1.left + 10, pY, 8.5, F.reg, TOK.BODY);
    }
    pY -= 11;
  }

  curY = passBoxTop - passageBoxHeight - 16;

  // Questions Section
  text(page1, "COMPREHENSION QUESTIONS", b1.left, curY, 9, F.bold, TOK.NAVY);
  curY -= 16;

  const firstBatch = o.questions.length > 5 ? o.questions.slice(0, 5) : o.questions;
  const secondBatch = o.questions.length > 5 ? o.questions.slice(5) : [];

  const drawQuestion = (page: PDFPage, q: ReadingQuestion, num: number, y: number): number => {
    text(page, `${num}.`, b1.left, y, 9, F.bold, TOK.NAVY);
    const pLines = wrapParagraph(q.prompt, CONTENT_W - 28);
    let qY = y;
    for (const pl of pLines) {
      text(page, pl, b1.left + 16, qY, 9, F.bold, TOK.INK);
      qY -= 12;
    }

    if (q.type === "multiple-choice" && q.options) {
      let optX = b1.left + 24;
      const optW = (CONTENT_W - 32) / 2;
      q.options.forEach((opt, idx) => {
        const ox = optX + (idx % 2) * optW;
        const oy = qY - Math.floor(idx / 2) * 12;
        text(page, `[  ]  ${opt}`, ox, oy, 8, F.reg, TOK.BODY);
      });
      qY -= Math.ceil(q.options.length / 2) * 12 + 4;
    } else if (q.type === "true-false") {
      text(page, "[  ] True      [  ] False", b1.left + 24, qY, 8.5, F.bold, TOK.BODY);
      qY -= 16;
    } else {
      // Short answer lines
      page.drawLine({
        start: { x: b1.left + 16, y: qY - 2 },
        end: { x: b1.right - 10, y: qY - 2 },
        thickness: 0.75,
        color: TOK.LINE,
        dashArray: [2, 2],
      });
      qY -= 14;
      page.drawLine({
        start: { x: b1.left + 16, y: qY - 2 },
        end: { x: b1.right - 10, y: qY - 2 },
        thickness: 0.75,
        color: TOK.LINE,
        dashArray: [2, 2],
      });
      qY -= 12;
    }

    return qY - 6;
  };

  firstBatch.forEach((q, idx) => {
    curY = drawQuestion(page1, q, idx + 1, curY);
  });

  // Optional Page 2 for extra questions
  if (secondBatch.length > 0) {
    const page2 = doc.addPage([PW, PH]);
    const b2 = drawChrome(page2, F, {
      title: o.title,
      subtitle: "Comprehension Questions (Continued)",
      badge: "Part 2",
      studentStrip: false,
      pageNum: 2,
      pageCount: totalPages,
    });
    let y2 = b2.top - 10;
    secondBatch.forEach((q, idx) => {
      y2 = drawQuestion(page2, q, firstBatch.length + idx + 1, y2);
    });
  }

  // Answer Key Page
  if (o.includeAnswerKey) {
    const keyPage = doc.addPage([PW, PH]);
    const kb = drawChrome(keyPage, F, {
      title: "Answer Key & Explanations",
      subtitle: `${o.title} · Comprehension Solutions`,
      badge: "Answer Key",
      isAnswerKey: true,
      pageNum: totalPages,
      pageCount: totalPages,
    });

    let ky = kb.top - 10;
    o.questions.forEach((q, idx) => {
      text(keyPage, `${idx + 1}.`, kb.left, ky, 8.5, F.bold, TOK.GREEN);
      text(keyPage, q.prompt, kb.left + 16, ky, 8.5, F.bold, TOK.INK, { maxW: CONTENT_W - 20 });
      ky -= 12;
      text(keyPage, `Correct Answer: ${q.answer}`, kb.left + 16, ky, 8, F.bold, TOK.GREEN);
      ky -= 16;
    });
  }

  return doc.save();
}

// ═══════════════════════════════════════════════════════════════════════════
// 2. FRACTIONS VISUAL WORKSHEET PDF
// ═══════════════════════════════════════════════════════════════════════════

export interface FractionsPdfOpts {
  title: string;
  problems: FractionProblem[];
  includeAnswerKey: boolean;
  grayscale: boolean;
}

export async function buildFractionsPdf(o: FractionsPdfOpts): Promise<Uint8Array> {
  const { doc, F } = await newDoc();
  const perPage = 6;
  const chunks = paginate(o.problems, perPage);
  const totalPages = chunks.length + (o.includeAnswerKey ? 1 : 0);

  const drawVectorCircle = (
    page: PDFPage,
    cx: number,
    cy: number,
    r: number,
    num: number,
    den: number,
    shaded: number
  ) => {
    page.drawCircle({
      x: cx,
      y: cy,
      size: r,
      color: rgb(1, 1, 1),
      borderColor: rgb(0.1, 0.15, 0.25),
      borderWidth: 1.25,
    });

    // Draw division spokes
    for (let i = 0; i < den; i++) {
      const angle = (i * 2 * Math.PI) / den - Math.PI / 2;
      const x2 = cx + r * Math.cos(angle);
      const y2 = cy + r * Math.sin(angle);
      page.drawLine({
        start: { x: cx, y: cy },
        end: { x: x2, y: y2 },
        thickness: 1,
        color: rgb(0.1, 0.15, 0.25),
      });
    }

    // Indicate shaded count
    if (shaded > 0) {
      text(page, `${shaded}/${den}`, cx, cy - 4, 8, F.bold, TOK.BLUE, { align: "center" });
    }
  };

  const drawVectorBar = (
    page: PDFPage,
    x: number,
    y: number,
    w: number,
    h: number,
    den: number,
    shaded: number
  ) => {
    const cellW = w / den;
    for (let i = 0; i < den; i++) {
      const isShaded = i < shaded;
      page.drawRectangle({
        x: x + i * cellW,
        y,
        width: cellW,
        height: h,
        color: isShaded ? (o.grayscale ? rgb(0.35, 0.4, 0.45) : rgb(0.2, 0.5, 0.95)) : rgb(1, 1, 1),
        borderColor: rgb(0.1, 0.15, 0.25),
        borderWidth: 1,
      });
    }
  };

  chunks.forEach((chunk, pi) => {
    const page = doc.addPage([PW, PH]);
    const b = drawChrome(page, F, {
      title: o.title,
      subtitle: "Visual Fraction Diagrams & Problem Practice",
      badge: "Fractions",
      studentStrip: pi === 0,
      pageNum: pi + 1,
      pageCount: totalPages,
    });

    const cols = 2;
    const colW = (b.width - 20) / cols;
    const rowH = 92;

    chunk.forEach((p, idx) => {
      const cIdx = idx % cols;
      const rIdx = Math.floor(idx / cols);
      const px = b.left + cIdx * (colW + 20);
      const py = b.top - rIdx * rowH - 10;

      // Problem Number and instructions
      text(page, `${p.num}.`, px, py, 9, F.bold, TOK.NAVY);
      text(page, p.prompt, px + 16, py, 8, F.bold, TOK.INK, { maxW: colW - 20 });

      const diagY = py - 46;

      if (p.type === "compare" && p.diagramB) {
        drawVectorCircle(page, px + 36, diagY, 20, p.diagramA.numerator, p.diagramA.denominator, p.diagramA.shadedParts);
        page.drawCircle({ x: px + 80, y: diagY, size: 10, color: rgb(1, 1, 1), borderColor: TOK.LINE, borderWidth: 1 });
        drawVectorCircle(page, px + 124, diagY, 20, p.diagramB.numerator, p.diagramB.denominator, p.diagramB.shadedParts);
      } else if ((p.type === "addition" || p.type === "subtraction") && p.diagramB) {
        drawVectorBar(page, px + 16, diagY - 8, 56, 16, p.diagramA.denominator, p.diagramA.shadedParts);
        text(page, p.operator || "+", px + 80, diagY - 4, 11, F.bold, TOK.NAVY);
        drawVectorBar(page, px + 94, diagY - 8, 56, 16, p.diagramB.denominator, p.diagramB.shadedParts);
        text(page, "= ____", px + 158, diagY - 4, 9, F.bold, TOK.INK);
      } else {
        if (p.diagramA.visualType === "circle") {
          drawVectorCircle(page, px + 45, diagY, 22, p.diagramA.numerator, p.diagramA.denominator, p.diagramA.shadedParts);
        } else {
          drawVectorBar(page, px + 16, diagY - 8, 90, 18, p.diagramA.denominator, p.diagramA.shadedParts);
        }
        text(page, "Answer: ________", px + 115, diagY - 4, 8.5, F.bold, TOK.INK);
      }

      // Divider line
      page.drawLine({
        start: { x: px, y: py - rowH + 12 },
        end: { x: px + colW, y: py - rowH + 12 },
        thickness: 0.5,
        color: TOK.FAINT,
      });
    });
  });

  if (o.includeAnswerKey) {
    const keyPage = doc.addPage([PW, PH]);
    const kb = drawChrome(keyPage, F, {
      title: "Answer Key",
      subtitle: `${o.title} · Step-by-Step Solutions`,
      badge: "Answer Key",
      isAnswerKey: true,
      pageNum: totalPages,
      pageCount: totalPages,
    });

    const keyCols = 2;
    const colW = (kb.width - 20) / keyCols;
    const rowH = 34;

    o.problems.forEach((p, idx) => {
      const cIdx = idx % keyCols;
      const rIdx = Math.floor(idx / keyCols);
      const kx = kb.left + cIdx * (colW + 20);
      const ky = kb.top - rIdx * rowH - 10;

      text(keyPage, `${p.num}.`, kx, ky, 8.5, F.bold, TOK.GREEN);
      text(keyPage, `Answer: ${p.answer}`, kx + 16, ky, 8.5, F.bold, TOK.INK);
      text(keyPage, p.answerExplanation, kx + 16, ky - 11, 7.5, F.reg, TOK.MUTED, { maxW: colW - 20 });
    });
  }

  return doc.save();
}

// ═══════════════════════════════════════════════════════════════════════════
// 3. MONEY-COUNTING WORKSHEET PDF
// ═══════════════════════════════════════════════════════════════════════════

export interface MoneyPdfOpts {
  title: string;
  problems: MoneyProblem[];
  currency: CurrencyCode;
  includeAnswerKey: boolean;
  grayscale: boolean;
}

export async function buildMoneyPdf(o: MoneyPdfOpts): Promise<Uint8Array> {
  const { doc, F } = await newDoc();
  const perPage = 5;
  const chunks = paginate(o.problems, perPage);
  const totalPages = chunks.length + (o.includeAnswerKey ? 1 : 0);

  const drawVectorCoin = (page: PDFPage, cx: number, cy: number, r: number, label: string) => {
    page.drawCircle({
      x: cx,
      y: cy,
      size: r,
      color: o.grayscale ? rgb(0.7, 0.75, 0.8) : rgb(0.85, 0.65, 0.25),
      borderColor: rgb(0.2, 0.25, 0.3),
      borderWidth: 1.5,
    });
    text(page, label, cx, cy - 3, 7.5, F.bold, rgb(0.1, 0.1, 0.1), { align: "center" });
  };

  const drawVectorNote = (page: PDFPage, x: number, y: number, w: number, h: number, label: string) => {
    page.drawRectangle({
      x,
      y,
      width: w,
      height: h,
      color: o.grayscale ? rgb(0.5, 0.55, 0.6) : rgb(0.15, 0.55, 0.3),
      borderColor: rgb(0.1, 0.15, 0.2),
      borderWidth: 1.25,
    });
    text(page, label, x + w / 2, y + h / 2 - 3, 8.5, F.bold, rgb(1, 1, 1), { align: "center" });
  };

  chunks.forEach((chunk, pi) => {
    const page = doc.addPage([PW, PH]);
    const b = drawChrome(page, F, {
      title: o.title,
      subtitle: `Currency: ${o.currency} · Practical Math Exercises`,
      badge: "Money Math",
      studentStrip: pi === 0,
      pageNum: pi + 1,
      pageCount: totalPages,
    });

    let cy = b.top - 10;
    const rowH = 100;

    chunk.forEach((p) => {
      text(page, `${p.num}.`, b.left, cy, 9, F.bold, TOK.NAVY);
      text(page, p.instructions, b.left + 16, cy, 8.5, F.bold, TOK.INK, { maxW: CONTENT_W - 20 });
      cy -= 14;

      // Render money items
      let itemX = b.left + 16;
      if (p.itemsA && p.itemsA.length > 0) {
        p.itemsA.forEach((it) => {
          if (it.isCoin) {
            drawVectorCoin(page, itemX + 14, cy - 14, 13, it.displayStr);
            itemX += 32;
          } else {
            drawVectorNote(page, itemX, cy - 22, 42, 22, it.displayStr);
            itemX += 48;
          }
        });
      } else if (p.prompt) {
        text(page, p.prompt, b.left + 16, cy, 8, F.reg, TOK.BODY, { maxW: CONTENT_W - 24 });
      }

      cy -= 36;
      text(page, "Total / Answer: ____________________", b.left + 16, cy, 8.5, F.bold, TOK.INK);
      cy -= 20;

      page.drawLine({
        start: { x: b.left, y: cy + 6 },
        end: { x: b.right, y: cy + 6 },
        thickness: 0.5,
        color: TOK.FAINT,
      });
      cy -= 8;
    });
  });

  if (o.includeAnswerKey) {
    const keyPage = doc.addPage([PW, PH]);
    const kb = drawChrome(keyPage, F, {
      title: "Money Worksheet Answer Key",
      subtitle: `${o.title} · Exact Calculations`,
      badge: "Answer Key",
      isAnswerKey: true,
      pageNum: totalPages,
      pageCount: totalPages,
    });

    let ky = kb.top - 12;
    o.problems.forEach((p) => {
      text(keyPage, `${p.num}.`, kb.left, ky, 8.5, F.bold, TOK.GREEN);
      text(keyPage, `Answer: ${p.answer}`, kb.left + 16, ky, 8.5, F.bold, TOK.INK);
      ky -= 12;
      text(keyPage, p.answerExplanation, kb.left + 16, ky, 7.5, F.reg, TOK.MUTED, { maxW: CONTENT_W - 20 });
      ky -= 18;
    });
  }

  return doc.save();
}

// ═══════════════════════════════════════════════════════════════════════════
// 4. CROSSWORD PUZZLE PDF
// ═══════════════════════════════════════════════════════════════════════════

export interface CrosswordPdfOpts {
  title: string;
  crossword: CrosswordResult;
  includeWordBank: boolean;
  includeAnswerKey: boolean;
}

export async function buildCrosswordPdf(o: CrosswordPdfOpts): Promise<Uint8Array> {
  const { doc, F } = await newDoc();
  const totalPages = 1 + (o.includeAnswerKey ? 1 : 0);

  const drawCrosswordGrid = (page: PDFPage, b: Box, isSolution: boolean) => {
    const { size, grid } = o.crossword;
    const maxGridW = 280;
    const cellSize = Math.min(24, Math.floor(maxGridW / size));
    const startX = b.left + Math.floor((b.width - size * cellSize) / 2);
    let startY = b.top - 12;

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        const cell = grid[r][c];
        const cx = startX + c * cellSize;
        const cy = startY - (r + 1) * cellSize;

        if (cell === null) {
          page.drawRectangle({
            x: cx,
            y: cy,
            width: cellSize,
            height: cellSize,
            color: rgb(0.12, 0.16, 0.22),
          });
        } else {
          page.drawRectangle({
            x: cx,
            y: cy,
            width: cellSize,
            height: cellSize,
            color: rgb(1, 1, 1),
            borderColor: rgb(0.15, 0.2, 0.28),
            borderWidth: 1,
          });

          if (cell.number) {
            text(page, `${cell.number}`, cx + 2, cy + cellSize - 6, 6, F.bold, TOK.MUTED);
          }

          if (isSolution) {
            text(page, cell.char, cx + cellSize / 2, cy + cellSize / 2 - 4, 10, F.bold, TOK.GREEN, {
              align: "center",
            });
          }
        }
      }
    }

    return startY - size * cellSize - 18;
  };

  // Puzzle Page
  const pPage = doc.addPage([PW, PH]);
  const pb = drawChrome(pPage, F, {
    title: o.title,
    subtitle: "Complete the crossword puzzle using the clues below.",
    badge: "Crossword",
    studentStrip: true,
    pageNum: 1,
    pageCount: totalPages,
  });

  const clueStartY = drawCrosswordGrid(pPage, pb, false);

  // Clues in 2 Columns (Across & Down)
  const colW = (CONTENT_W - 20) / 2;
  text(pPage, "ACROSS", pb.left, clueStartY, 9, F.bold, TOK.NAVY);
  text(pPage, "DOWN", pb.left + colW + 20, clueStartY, 9, F.bold, TOK.NAVY);

  let ay = clueStartY - 14;
  o.crossword.acrossClues.forEach((c) => {
    text(pPage, `${c.number}.`, pb.left, ay, 7.5, F.bold, TOK.NAVY);
    text(pPage, c.clue, pb.left + 14, ay, 7.5, F.reg, TOK.BODY, { maxW: colW - 16 });
    ay -= 11;
  });

  let dy = clueStartY - 14;
  o.crossword.downClues.forEach((c) => {
    text(pPage, `${c.number}.`, pb.left + colW + 20, dy, 7.5, F.bold, TOK.NAVY);
    text(pPage, c.clue, pb.left + colW + 34, dy, 7.5, F.reg, TOK.BODY, { maxW: colW - 16 });
    dy -= 11;
  });

  // Solution Page
  if (o.includeAnswerKey) {
    const sPage = doc.addPage([PW, PH]);
    const sb = drawChrome(sPage, F, {
      title: "Crossword Puzzle Solution",
      subtitle: `${o.title} · Solved Grid`,
      badge: "Solution",
      isAnswerKey: true,
      pageNum: 2,
      pageCount: 2,
    });

    drawCrosswordGrid(sPage, sb, true);
  }

  return doc.save();
}

// ═══════════════════════════════════════════════════════════════════════════
// 5. GRAMMAR EXERCISE WORKSHEET PDF
// ═══════════════════════════════════════════════════════════════════════════

export interface GrammarPdfOpts {
  title: string;
  subtitle: string;
  items: GrammarItem[];
  includeAnswerKey: boolean;
}

export async function buildGrammarPdf(o: GrammarPdfOpts): Promise<Uint8Array> {
  const { doc, F } = await newDoc();
  const perPage = 8;
  const chunks = paginate(o.items, perPage);
  const totalPages = chunks.length + (o.includeAnswerKey ? 1 : 0);

  chunks.forEach((chunk, pi) => {
    const page = doc.addPage([PW, PH]);
    const b = drawChrome(page, F, {
      title: o.title,
      subtitle: o.subtitle,
      badge: "Grammar",
      studentStrip: pi === 0,
      pageNum: pi + 1,
      pageCount: totalPages,
    });

    let y = b.top - 8;

    chunk.forEach((item, idx) => {
      const qNum = pi * perPage + idx + 1;
      text(page, `${qNum}.`, b.left, y, 9, F.bold, TOK.NAVY);
      text(page, item.instructions, b.left + 16, y, 8, F.bold, TOK.MUTED);
      y -= 12;

      text(page, item.prompt, b.left + 16, y, 9, F.bold, TOK.INK, { maxW: CONTENT_W - 20 });
      y -= 14;

      if (item.exerciseType === "multiple-choice" && item.options) {
        const optW = (CONTENT_W - 24) / 4;
        item.options.forEach((opt, oIdx) => {
          text(page, opt, b.left + 16 + oIdx * optW, y, 8, F.reg, TOK.BODY);
        });
        y -= 14;
      } else if (item.exerciseType === "match-columns" && item.columns) {
        const halfW = (CONTENT_W - 30) / 2;
        item.columns.forEach((row) => {
          text(page, row.a, b.left + 20, y, 7.5, F.reg, TOK.INK);
          text(page, row.b, b.left + 20 + halfW, y, 7.5, F.reg, TOK.INK);
          y -= 10;
        });
        y -= 4;
      } else {
        page.drawLine({
          start: { x: b.left + 16, y },
          end: { x: b.right - 10, y },
          thickness: 0.75,
          color: TOK.LINE,
        });
        y -= 12;
      }

      y -= 8;
    });
  });

  if (o.includeAnswerKey) {
    const keyPage = doc.addPage([PW, PH]);
    const kb = drawChrome(keyPage, F, {
      title: "Grammar Answer Key",
      subtitle: `${o.title} · Solutions & Explanations`,
      badge: "Answer Key",
      isAnswerKey: true,
      pageNum: totalPages,
      pageCount: totalPages,
    });

    let ky = kb.top - 10;
    o.items.forEach((item, idx) => {
      text(keyPage, `${idx + 1}.`, kb.left, ky, 8.5, F.bold, TOK.GREEN);
      text(keyPage, `Answer: ${item.answer}`, kb.left + 16, ky, 8.5, F.bold, TOK.INK);
      ky -= 12;
      if (item.explanation) {
        text(keyPage, `(${item.explanation})`, kb.left + 16, ky, 7.5, F.reg, TOK.MUTED, {
          maxW: CONTENT_W - 20,
        });
        ky -= 12;
      }
      ky -= 4;
    });
  }

  return doc.save();
}

// ═══════════════════════════════════════════════════════════════════════════
// 6. FLASHCARDS PDF (DUPLEX ALIGNMENT)
// ═══════════════════════════════════════════════════════════════════════════

export interface FlashcardsPdfOpts {
  title: string;
  cards: Flashcard[];
  cardsPerPage: 2 | 4 | 6 | 8 | 9;
  orientation: "portrait" | "landscape";
  borders: boolean;
  doubleSided: boolean;
  colorMode: "color" | "monochrome";
}

export async function buildFlashcardsPdf(o: FlashcardsPdfOpts): Promise<Uint8Array> {
  const { doc, F } = await newDoc();
  const { frontPages, backPages } = getDuplexCardOrder(o.cards, o.cardsPerPage);

  let cols = 2;
  let rows = 2;
  if (o.cardsPerPage === 2) { cols = 1; rows = 2; }
  else if (o.cardsPerPage === 4) { cols = 2; rows = 2; }
  else if (o.cardsPerPage === 6) { cols = 2; rows = 3; }
  else if (o.cardsPerPage === 8) { cols = 2; rows = 4; }
  else if (o.cardsPerPage === 9) { cols = 3; rows = 3; }

  const marginX = 36;
  const marginY = 40;
  const gridW = PW - marginX * 2;
  const gridH = PH - marginY * 2;
  const cardW = gridW / cols;
  const cardH = gridH / rows;

  const drawCardFace = (
    page: PDFPage,
    card: Flashcard,
    c: number,
    r: number,
    isBack: boolean
  ) => {
    const x = marginX + c * cardW;
    const y = PH - marginY - (r + 1) * cardH;

    // Card border / dashed cut line
    if (o.borders) {
      page.drawRectangle({
        x: x + 4,
        y: y + 4,
        width: cardW - 8,
        height: cardH - 8,
        color: rgb(1, 1, 1),
        borderColor: TOK.LINE,
        borderWidth: 0.75,
        borderDashArray: [4, 4],
      });
    }

    const midX = x + cardW / 2;
    const midY = y + cardH / 2;
    const mainText = isBack ? card.back : card.front;
    const subText = isBack ? card.subtextBack : card.subtextFront;

    // Subtext header
    if (subText) {
      text(page, subText.toUpperCase(), midX, y + cardH - 24, 7.5, F.bold, TOK.MUTED, { align: "center" });
    }

    // Main Card Text (Auto-scaling)
    const fontSize = mainText.length > 30 ? 10 : mainText.length > 15 ? 13 : 16;
    text(page, mainText, midX, midY - 4, fontSize, F.bold, isBack ? TOK.GREEN : TOK.NAVY, {
      align: "center",
      maxW: cardW - 24,
    });
  };

  const totalSheets = frontPages.length;
  for (let pIdx = 0; pIdx < totalSheets; pIdx++) {
    // 1. Front Page
    const fPage = doc.addPage([PW, PH]);
    const frontChunk = frontPages[pIdx];
    frontChunk.forEach((card, idx) => {
      const c = idx % cols;
      const r = Math.floor(idx / cols);
      drawCardFace(fPage, card, c, r, false);
    });

    // 2. Back Page (Duplex aligned)
    if (o.doubleSided && backPages[pIdx]) {
      const bPage = doc.addPage([PW, PH]);
      const backChunk = backPages[pIdx];
      backChunk.forEach((card, idx) => {
        const c = idx % cols;
        const r = Math.floor(idx / cols);
        drawCardFace(bPage, card, c, r, true);
      });
    }
  }

  return doc.save();
}
