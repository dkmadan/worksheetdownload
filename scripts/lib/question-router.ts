import type { Question, WorksheetLayout } from "./pdf-builder";
import { generateMathQuestions } from "./question-banks/math";
import { generateEnglishQuestions } from "./question-banks/english";
import { generateScienceQuestions } from "./question-banks/science";
import { generateEvsQuestions } from "./question-banks/evs";
import { generateGkQuestions } from "./question-banks/gk";
import { generateReasoningQuestions } from "./question-banks/reasoning";
import { generateSocialStudiesQuestions } from "./question-banks/social-studies";
import { generateKindergartenQuestions } from "./question-banks/kindergarten";

function mulberry32(seed: string): () => number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  let s = h >>> 0;
  return () => {
    s |= 0; s = s + 0x6d2b79f5 | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = t + Math.imul(t ^ (t >>> 7), 61 | t) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(arr: T[], seed: string): T[] {
  const rng = mulberry32(seed);
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// Shuffle a bank and pick 20, ensuring different order per sheet
function shufflePick(bank: Question[], topicLabel: string, sheetNumber: number): Question[] {
  if (bank.length === 0) return [];
  // If bank is smaller than 20, repeat it enough times before shuffling
  let pool = bank;
  while (pool.length < 20) pool = [...pool, ...bank];
  const shuffled = seededShuffle(pool, `${topicLabel}|${sheetNumber}`);
  return shuffled.slice(0, 20);
}

function tk(t: string) {
  return t.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
}

export function getLayout(
  gradeId: string,
  subjectId: string,
  topicLabel: string
): WorksheetLayout {
  if (subjectId === "mathematics") return "math-grid";

  if (gradeId === "kindergarten") {
    const k = tk(topicLabel);
    // Letter/alphabet topics get the letter-practice grid (4×7, bigger text)
    if (
      k.includes("capital") ||
      k.includes("small letter") ||
      k.includes("letter tracing") ||
      k.includes("alphabet") ||
      k.includes("tracing") ||
      k.includes("letter recogni") ||
      k.includes("alphabet match") ||
      k.includes("letter match")
    ) return "letter-practice";
    // All other KG topics use 2-col with larger font
    return "kg-2col";
  }

  // Grades 1–8: standard 2-col QA layout
  return "qa-2col";
}

export function getQuestions(
  gradeId: string,
  subjectId: string,
  topicLabel: string,
  sheetNumber: number
): Question[] {
  // Kindergarten subjects handled specially
  if (gradeId === "kindergarten") {
    if (subjectId === "mathematics") {
      return generateMathQuestions(gradeId, topicLabel, sheetNumber);
    }
    return generateKindergartenQuestions(gradeId, topicLabel, sheetNumber);
  }

  switch (subjectId) {
    case "mathematics":
      return generateMathQuestions(gradeId, topicLabel, sheetNumber);
    case "english":
    case "english-language": {
      const raw = generateEnglishQuestions(gradeId, topicLabel, sheetNumber);
      // Apply seeded shuffle so each sheet has different ordering
      return shufflePick(raw.length >= 20 ? raw : raw, topicLabel + subjectId, sheetNumber);
    }
    case "science": {
      const raw = generateScienceQuestions(gradeId, topicLabel, sheetNumber);
      return shufflePick(raw, topicLabel + subjectId, sheetNumber);
    }
    case "evs": {
      const raw = generateEvsQuestions(gradeId, topicLabel, sheetNumber);
      return shufflePick(raw, topicLabel + subjectId, sheetNumber);
    }
    case "gk":
    case "general-awareness": {
      const raw = generateGkQuestions(gradeId, topicLabel, sheetNumber);
      return shufflePick(raw, topicLabel + subjectId, sheetNumber);
    }
    case "reasoning":
    case "logic-thinking":
      return generateReasoningQuestions(gradeId, topicLabel, sheetNumber);
    case "social-studies": {
      const raw = generateSocialStudiesQuestions(gradeId, topicLabel, sheetNumber);
      return shufflePick(raw, topicLabel + subjectId, sheetNumber);
    }
    default:
      if (subjectId.includes("math")) return generateMathQuestions(gradeId, topicLabel, sheetNumber);
      return shufflePick(generateGkQuestions(gradeId, topicLabel, sheetNumber), topicLabel, sheetNumber);
  }
}
