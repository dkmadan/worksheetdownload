// ─────────────────────────────────────────────────────────────────────────────
// Randomized arithmetic problem generator for the Math Worksheet tool.
// Pure + deterministic: same (config, seed) → same problems.
// ─────────────────────────────────────────────────────────────────────────────

import { makeRng, randInt, pick, gcd, type Rng } from "./prng";

export type MathOperation =
  | "addition"
  | "subtraction"
  | "multiplication"
  | "division"
  | "fractions";

export const OPERATIONS: { id: MathOperation; label: string; symbol: string }[] = [
  { id: "addition", label: "Addition", symbol: "+" },
  { id: "subtraction", label: "Subtraction", symbol: "−" },
  { id: "multiplication", label: "Multiplication", symbol: "×" },
  { id: "division", label: "Division", symbol: "÷" },
  { id: "fractions", label: "Fractions (+/−)", symbol: "½" },
];

export interface RangePreset {
  id: string;
  label: string;
  min: number;
  max: number;
}

export const RANGE_PRESETS: RangePreset[] = [
  { id: "1-10", label: "1 – 10", min: 1, max: 10 },
  { id: "1-20", label: "1 – 20", min: 1, max: 20 },
  { id: "1-50", label: "1 – 50", min: 1, max: 50 },
  { id: "1-100", label: "1 – 100", min: 1, max: 100 },
  { id: "10-999", label: "10 – 999", min: 10, max: 999 },
];

export interface MathConfig {
  operations: MathOperation[];
  min: number;
  max: number;
  count: number;
  /** allow answers below zero for subtraction */
  allowNegatives: boolean;
  /** largest denominator used for the fractions operation */
  maxDenominator: number;
}

export const DEFAULT_MATH_CONFIG: MathConfig = {
  operations: ["addition"],
  min: 1,
  max: 20,
  count: 20,
  allowNegatives: false,
  maxDenominator: 8,
};

export interface MathProblem {
  /** left-hand side, e.g. "7 + 5" or "3/4 − 1/2" */
  prompt: string;
  /** the solution, e.g. "12" or "1/4" */
  answer: string;
}

// ── per-operation builders ──────────────────────────────────────────────────

function buildAddition(rng: Rng, c: MathConfig): MathProblem {
  const a = randInt(rng, c.min, c.max);
  const b = randInt(rng, c.min, c.max);
  return { prompt: `${a} + ${b}`, answer: `${a + b}` };
}

function buildSubtraction(rng: Rng, c: MathConfig): MathProblem {
  let a = randInt(rng, c.min, c.max);
  let b = randInt(rng, c.min, c.max);
  if (!c.allowNegatives && b > a) [a, b] = [b, a];
  return { prompt: `${a} − ${b}`, answer: `${a - b}` };
}

function buildMultiplication(rng: Rng, c: MathConfig): MathProblem {
  const a = randInt(rng, c.min, c.max);
  const b = randInt(rng, c.min, c.max);
  return { prompt: `${a} × ${b}`, answer: `${a * b}` };
}

function buildDivision(rng: Rng, c: MathConfig): MathProblem {
  // keep it whole: pick divisor + quotient, multiply back
  const divisor = Math.max(1, randInt(rng, Math.max(1, c.min), Math.max(2, Math.min(c.max, 12))));
  const quotient = randInt(rng, Math.max(1, c.min), c.max);
  const dividend = divisor * quotient;
  return { prompt: `${dividend} ÷ ${divisor}`, answer: `${quotient}` };
}

function simplify(n: number, d: number): [number, number] {
  const g = gcd(n, d);
  return [n / g, d / g];
}

function fracStr(n: number, d: number): string {
  if (n === 0) return "0";
  if (d === 1) return `${n}`;
  if (Math.abs(n) > d) {
    const whole = Math.trunc(n / d);
    const rem = Math.abs(n % d);
    return rem === 0 ? `${whole}` : `${whole} ${rem}/${d}`;
  }
  return `${n}/${d}`;
}

function buildFraction(rng: Rng, c: MathConfig): MathProblem {
  const maxD = Math.max(2, Math.min(12, c.maxDenominator));
  const d1 = randInt(rng, 2, maxD);
  const d2 = randInt(rng, 2, maxD);
  const n1 = randInt(rng, 1, d1 - 1);
  const n2 = randInt(rng, 1, d2 - 1);
  const op = pick(rng, ["+", "−"] as const);

  const commonD = (d1 * d2) / gcd(d1, d2);
  const a = n1 * (commonD / d1);
  const b = n2 * (commonD / d2);
  let resN = op === "+" ? a + b : a - b;
  let resD = commonD;
  if (!c.allowNegatives && resN < 0) {
    // flip operands so the result stays non-negative
    return buildFraction(rng, c);
  }
  [resN, resD] = simplify(resN, resD);

  return {
    prompt: `${n1}/${d1} ${op} ${n2}/${d2}`,
    answer: fracStr(resN, resD),
  };
}

const BUILDERS: Record<MathOperation, (rng: Rng, c: MathConfig) => MathProblem> = {
  addition: buildAddition,
  subtraction: buildSubtraction,
  multiplication: buildMultiplication,
  division: buildDivision,
  fractions: buildFraction,
};

// ── public ──────────────────────────────────────────────────────────────────

export function generateMathProblems(config: MathConfig, seed: number): MathProblem[] {
  const rng = makeRng(seed);
  const ops = config.operations.length ? config.operations : (["addition"] as MathOperation[]);
  const out: MathProblem[] = [];
  const seen = new Set<string>();

  let guard = 0;
  while (out.length < config.count && guard < config.count * 40) {
    guard++;
    const op = ops[out.length % ops.length];
    const problem = BUILDERS[op](rng, config);
    if (seen.has(problem.prompt)) continue;
    seen.add(problem.prompt);
    out.push(problem);
  }
  // if de-dup couldn't fill (tiny range), allow repeats
  while (out.length < config.count) {
    const op = ops[out.length % ops.length];
    out.push(BUILDERS[op](rng, config));
  }
  return out;
}

export function clampMathConfig(c: MathConfig): MathConfig {
  const min = Math.max(0, Math.min(c.min, 9999));
  const max = Math.max(min + 1, Math.min(c.max, 9999));
  return {
    ...c,
    min,
    max,
    count: Math.max(4, Math.min(c.count, 60)),
    maxDenominator: Math.max(2, Math.min(c.maxDenominator, 12)),
    operations: c.operations.length ? c.operations : ["addition"],
  };
}
