// ─────────────────────────────────────────────────────────────────────────────
// Word search generator. Deterministic given the word list + options + seed.
// ─────────────────────────────────────────────────────────────────────────────

import { makeRng, randInt, shuffle, type Rng } from "./prng";

export interface WordSearchOptions {
  size: number; // grid is size × size
  allowDiagonal: boolean;
  allowBackward: boolean;
  allowVertical: boolean;
}

export interface PlacedWord {
  word: string;
  /** grid cells the word occupies, in order */
  cells: { r: number; c: number }[];
}

export interface WordSearch {
  size: number;
  grid: string[][]; // uppercase letters
  placed: PlacedWord[];
  unplaced: string[];
}

const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

type Dir = [number, number];

function directions(o: WordSearchOptions): Dir[] {
  const dirs: Dir[] = [[0, 1]]; // horizontal →
  if (o.allowVertical) dirs.push([1, 0]); // vertical ↓
  if (o.allowDiagonal) {
    dirs.push([1, 1]); // ↘
    if (o.allowVertical) dirs.push([1, -1]); // ↙
  }
  if (o.allowBackward) {
    const rev = dirs.map(([dr, dc]) => [-dr, -dc] as Dir);
    return [...dirs, ...rev];
  }
  return dirs;
}

function cleanWords(words: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const w of words) {
    const u = w.replace(/[^A-Za-z]/g, "").toUpperCase();
    if (u.length >= 2 && u.length <= 18 && !seen.has(u)) {
      seen.add(u);
      out.push(u);
    }
  }
  return out.slice(0, 24);
}

function tryPlace(
  grid: (string | null)[][],
  size: number,
  word: string,
  dir: Dir,
  rng: Rng,
): { r: number; c: number }[] | null {
  const [dr, dc] = dir;
  const len = word.length;
  const rMin = dr < 0 ? (len - 1) * -dr : 0;
  const rMax = dr > 0 ? size - 1 - (len - 1) * dr : size - 1;
  const cMin = dc < 0 ? (len - 1) * -dc : 0;
  const cMax = dc > 0 ? size - 1 - (len - 1) * dc : size - 1;
  if (rMax < rMin || cMax < cMin) return null;

  for (let attempt = 0; attempt < 60; attempt++) {
    const r0 = randInt(rng, rMin, rMax);
    const c0 = randInt(rng, cMin, cMax);
    const cells: { r: number; c: number }[] = [];
    let ok = true;
    for (let i = 0; i < len; i++) {
      const r = r0 + dr * i;
      const c = c0 + dc * i;
      const cur = grid[r][c];
      if (cur !== null && cur !== word[i]) {
        ok = false;
        break;
      }
      cells.push({ r, c });
    }
    if (ok) return cells;
  }
  return null;
}

export function generateWordSearch(
  words: string[],
  options: WordSearchOptions,
  seed: number,
): WordSearch {
  const rng = makeRng(seed);
  const list = cleanWords(words);
  const longest = list.reduce((m, w) => Math.max(m, w.length), 3);
  const size = Math.max(options.size, longest + 1, 8);

  const grid: (string | null)[][] = Array.from({ length: size }, () => Array(size).fill(null));
  const dirs = directions(options);
  const placed: PlacedWord[] = [];
  const unplaced: string[] = [];

  // longest words first — easier to fit
  for (const word of [...list].sort((a, b) => b.length - a.length || a.localeCompare(b))) {
    let done = false;
    // Fisher-Yates via the seeded rng — consumes a fixed number of rng values
    // so SSR and client hydration produce an identical grid.
    const dirOrder = shuffle(rng, dirs);
    for (const dir of dirOrder) {
      const cells = tryPlace(grid, size, word, dir, rng);
      if (cells) {
        cells.forEach((cell, i) => (grid[cell.r][cell.c] = word[i]));
        placed.push({ word, cells });
        done = true;
        break;
      }
    }
    if (!done) unplaced.push(word);
  }

  // fill blanks
  const filled: string[][] = grid.map((row) =>
    row.map((ch) => ch ?? ALPHA[Math.floor(rng() * 26)]),
  );

  return {
    size,
    grid: filled,
    placed: placed.sort((a, b) => a.word.localeCompare(b.word)),
    unplaced,
  };
}
