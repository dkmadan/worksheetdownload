// ─────────────────────────────────────────────────────────────────────────────
// Helpers for the Spelling Practice Sheet generator. Deterministic given the
// word list + seed (used only for the scramble in the ABC-order activity).
// ─────────────────────────────────────────────────────────────────────────────

import { makeRng, shuffle } from "./prng";

export type SpellingActivity =
  | "trace-write"
  | "abc-order"
  | "missing-letters"
  | "write-sentence"
  | "spelling-test"
  | "pyramid";

export const SPELLING_ACTIVITIES: { id: SpellingActivity; label: string; blurb: string }[] = [
  { id: "trace-write", label: "Trace & write", blurb: "Trace each word, then write it two more times." },
  { id: "abc-order", label: "ABC order", blurb: "Rewrite the words in alphabetical order." },
  { id: "missing-letters", label: "Missing letters", blurb: "Fill in the missing letters in each word." },
  { id: "write-sentence", label: "Use in a sentence", blurb: "Write a sentence using each word." },
  { id: "spelling-test", label: "Spelling test lines", blurb: "Numbered lines for a dictation test." },
  { id: "pyramid", label: "Pyramid writing", blurb: "Build each word one letter at a time." },
];

export function parseWordList(raw: string): string[] {
  return raw
    .split(/[\n,]/)
    .map((w) => w.trim())
    .filter((w) => w.length > 0)
    .slice(0, 30);
}

export function abcSort(words: string[]): string[] {
  return [...words].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

export function scramble(words: string[], seed: number): string[] {
  return shuffle(makeRng(seed), words);
}

const VOWELS = new Set(["a", "e", "i", "o", "u"]);

/** blank out the vowels (or every other letter for very short words) */
export function withMissingLetters(word: string): string {
  const chars = word.split("");
  const vowelIdx = chars.map((c, i) => (VOWELS.has(c.toLowerCase()) ? i : -1)).filter((i) => i >= 0);
  const blanks = vowelIdx.length >= 1 ? vowelIdx : chars.map((_, i) => i).filter((i) => i % 2 === 1);
  return chars.map((c, i) => (blanks.includes(i) ? "_" : c)).join(" ");
}

/** "cat" -> ["c", "ca", "cat"] */
export function pyramidRows(word: string): string[] {
  return word.split("").map((_, i) => word.slice(0, i + 1));
}
