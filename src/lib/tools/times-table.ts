// ─────────────────────────────────────────────────────────────────────────────
// Multiplication / times-table generator. Deterministic given config + seed.
// ─────────────────────────────────────────────────────────────────────────────

import { makeRng, shuffle } from "./prng";

export type TableMode = "single" | "drill" | "grid" | "missing-factor";

export const TABLE_MODES: { id: TableMode; label: string }[] = [
  { id: "single", label: "Single table" },
  { id: "drill", label: "Mixed fact drill" },
  { id: "missing-factor", label: "Missing factor" },
  { id: "grid", label: "Blank grid" },
];

export interface TableConfig {
  mode: TableMode;
  /** for "single": the table (e.g. 7 → the 7× table) */
  table: number;
  /** for "drill" / "missing-factor": which tables to draw facts from */
  tables: number[];
  /** highest multiplier, e.g. 12 → ×1..×12 */
  maxFactor: number;
  count: number; // drill / missing-factor
  /** grid mode: 0..gridMax on each axis */
  gridMax: number;
}

export const DEFAULT_TABLE_CONFIG: TableConfig = {
  mode: "single",
  table: 7,
  tables: [2, 3, 4, 5],
  maxFactor: 12,
  count: 24,
  gridMax: 12,
};

export interface TableFact {
  a: number;
  b: number;
  /** left side shown to the student, e.g. "7 × 3" or "7 × __" */
  prompt: string;
  answer: string;
}

export function clampTableConfig(c: TableConfig): TableConfig {
  return {
    ...c,
    table: Math.max(0, Math.min(c.table, 15)),
    maxFactor: Math.max(5, Math.min(c.maxFactor, 15)),
    count: Math.max(6, Math.min(c.count, 60)),
    gridMax: Math.max(5, Math.min(c.gridMax, 15)),
    tables: c.tables.length ? c.tables : [2, 3, 4, 5],
  };
}

export function generateTable(config: TableConfig, seed: number): TableFact[] {
  const c = clampTableConfig(config);
  const rng = makeRng(seed);

  if (c.mode === "single") {
    return Array.from({ length: c.maxFactor }, (_, i) => {
      const b = i + 1;
      return { a: c.table, b, prompt: `${c.table} × ${b}`, answer: `${c.table * b}` };
    });
  }

  // build the pool of all facts from the chosen tables
  const pool: [number, number][] = [];
  for (const t of c.tables) for (let b = 1; b <= c.maxFactor; b++) pool.push([t, b]);
  const shuffled = shuffle(rng, pool);

  const out: TableFact[] = [];
  let i = 0;
  while (out.length < c.count) {
    const [a, b] = shuffled[i % shuffled.length];
    i++;
    if (c.mode === "missing-factor") {
      // hide a or b at random
      const hideA = rng() < 0.5;
      out.push({
        a,
        b,
        prompt: hideA ? `__ × ${b} = ${a * b}` : `${a} × __ = ${a * b}`,
        answer: `${hideA ? a : b}`,
      });
    } else {
      out.push({ a, b, prompt: `${a} × ${b}`, answer: `${a * b}` });
    }
  }
  return out;
}

/** header values for the blank multiplication grid */
export function gridAxis(gridMax: number, seed: number, shuffled: boolean): number[] {
  const base = Array.from({ length: gridMax }, (_, i) => i + 1);
  return shuffled ? shuffle(makeRng(seed), base) : base;
}

export function tableTitle(c: TableConfig): string {
  switch (c.mode) {
    case "single":
      return `The ${c.table} Times Table`;
    case "drill":
      return `Multiplication Facts — ${c.tables.join(", ")}× Tables`;
    case "missing-factor":
      return `Missing Factor — ${c.tables.join(", ")}× Tables`;
    case "grid":
      return `Multiplication Grid (0–${c.gridMax})`;
  }
}
