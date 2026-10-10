// ─────────────────────────────────────────────────────────────────────────────
// Fractions Visual Engine
// Mathematically accurate SVG diagram generators and rational arithmetic.
// ─────────────────────────────────────────────────────────────────────────────

import { makeRng, randInt, pick, gcd, type Rng } from "./prng";

export type FractionVisualType =
  | "circle"
  | "bar"
  | "rectangle"
  | "number-line"
  | "mixed";

export type FractionExerciseType =
  | "identify"
  | "shade"
  | "equivalent"
  | "compare"
  | "simplify"
  | "addition"
  | "subtraction"
  | "improper"
  | "mixed-numbers";

export interface FractionDiagramData {
  numerator: number;
  denominator: number;
  shadedParts: number; // 0 for blank/shading exercises
  visualType: "circle" | "bar" | "rectangle" | "number-line";
  whole?: number; // for mixed numbers (whole + fraction)
}

export interface FractionProblem {
  id: string;
  num: number;
  type: FractionExerciseType;
  prompt: string;
  instructions: string;
  diagramA: FractionDiagramData;
  diagramB?: FractionDiagramData;
  operator?: "+" | "-" | "vs" | "=";
  answer: string;
  answerExplanation: string;
}

export interface FractionsConfig {
  grade: number; // 1 to 8
  difficulty: "easy" | "medium" | "hard";
  visualType: FractionVisualType;
  problemCount: number; // 5, 10, 15, 20, 30
  denominators: number[]; // e.g. [2, 3, 4, 5, 6, 8, 10, 12]
  exercises: FractionExerciseType[];
  grayscale: boolean;
  includeAnswerKey: boolean;
}

export const EXERCISE_OPTIONS: { id: FractionExerciseType; label: string }[] = [
  { id: "identify", label: "Identify Fractions" },
  { id: "shade", label: "Shade the Fraction" },
  { id: "equivalent", label: "Equivalent Fractions" },
  { id: "compare", label: "Compare (<, >, =)" },
  { id: "simplify", label: "Simplify / Reduce" },
  { id: "addition", label: "Visual Addition" },
  { id: "subtraction", label: "Visual Subtraction" },
  { id: "improper", label: "Improper Fractions" },
  { id: "mixed-numbers", label: "Mixed Numbers" },
];

export const VISUAL_OPTIONS: { id: FractionVisualType; label: string }[] = [
  { id: "circle", label: "Fraction Circles" },
  { id: "bar", label: "Fraction Bars" },
  { id: "rectangle", label: "Grid Rectangles" },
  { id: "number-line", label: "Number Lines" },
  { id: "mixed", label: "Mixed Diagrams" },
];

export const DEFAULT_FRACTIONS_CONFIG: FractionsConfig = {
  grade: 3,
  difficulty: "medium",
  visualType: "circle",
  problemCount: 10,
  denominators: [2, 3, 4, 5, 6, 8],
  exercises: ["identify", "shade", "compare", "addition"],
  grayscale: false,
  includeAnswerKey: true,
};

// ── Exact Rational Arithmetic ─────────────────────────────────────────────────

export function simplify(n: number, d: number): { n: number; d: number } {
  if (d === 0) return { n: 0, d: 1 };
  const g = gcd(n, d);
  return { n: n / g, d: d / g };
}

export function formatFraction(n: number, d: number): string {
  if (d === 1) return `${n}`;
  return `${n}/${d}`;
}

export function formatMixedNumber(whole: number, n: number, d: number): string {
  if (whole === 0) return formatFraction(n, d);
  if (n === 0) return `${whole}`;
  return `${whole} ${n}/${d}`;
}

// ── SVG Rendering Utilities ───────────────────────────────────────────────────

/** Polar coordinate conversion for circle arcs */
function polarToCartesian(cx: number, cy: number, r: number, angleInDegrees: number) {
  const rad = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

/** SVG Arc Path describing a pie slice */
function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y} Z`;
}

/** Render a single circle partition SVG */
export function renderFractionCircle(
  num: number,
  den: number,
  shaded: number,
  size = 72,
  grayscale = false
): string {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 3;
  const anglePerSlice = 360 / den;
  const shadedFill = grayscale ? "#475569" : "#3b82f6";
  const unshadedFill = "#ffffff";
  const stroke = "#1e293b";

  if (den === 1) {
    const fill = shaded >= 1 ? shadedFill : unshadedFill;
    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="1.5" />
    </svg>`;
  }

  const slices: string[] = [];
  for (let i = 0; i < den; i++) {
    const startAngle = i * anglePerSlice;
    const endAngle = (i + 1) * anglePerSlice;
    const isShaded = i < shaded;
    const fill = isShaded ? shadedFill : unshadedFill;
    slices.push(
      `<path d="${describeArc(cx, cy, r, startAngle, endAngle)}" fill="${fill}" stroke="${stroke}" stroke-width="1.25" stroke-linejoin="round" />`
    );
  }

  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    ${slices.join("")}
  </svg>`;
}

/** Render a horizontal fraction bar SVG */
export function renderFractionBar(
  num: number,
  den: number,
  shaded: number,
  w = 120,
  h = 32,
  grayscale = false
): string {
  const cellW = (w - 2) / den;
  const shadedFill = grayscale ? "#475569" : "#3b82f6";
  const unshadedFill = "#ffffff";
  const stroke = "#1e293b";

  const cells: string[] = [];
  for (let i = 0; i < den; i++) {
    const isShaded = i < shaded;
    const fill = isShaded ? shadedFill : unshadedFill;
    const x = 1 + i * cellW;
    cells.push(
      `<rect x="${x}" y="1" width="${cellW}" height="${h - 2}" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />`
    );
  }

  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    ${cells.join("")}
  </svg>`;
}

/** Render a 2D grid rectangle SVG */
export function renderFractionRect(
  num: number,
  den: number,
  shaded: number,
  w = 90,
  h = 48,
  grayscale = false
): string {
  let cols = den;
  let rows = 1;

  if (den === 4) { cols = 2; rows = 2; }
  else if (den === 6) { cols = 3; rows = 2; }
  else if (den === 8) { cols = 4; rows = 2; }
  else if (den === 9) { cols = 3; rows = 3; }
  else if (den === 10) { cols = 5; rows = 2; }
  else if (den === 12) { cols = 4; rows = 3; }

  const cellW = (w - 2) / cols;
  const cellH = (h - 2) / rows;
  const shadedFill = grayscale ? "#475569" : "#3b82f6";
  const unshadedFill = "#ffffff";
  const stroke = "#1e293b";

  const cells: string[] = [];
  let cellIdx = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const isShaded = cellIdx < shaded;
      const fill = isShaded ? shadedFill : unshadedFill;
      const x = 1 + c * cellW;
      const y = 1 + r * cellH;
      cells.push(
        `<rect x="${x}" y="${y}" width="${cellW}" height="${cellH}" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />`
      );
      cellIdx++;
    }
  }

  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    ${cells.join("")}
  </svg>`;
}

/** Render a fraction number line SVG */
export function renderFractionNumberLine(
  num: number,
  den: number,
  showDot = true,
  w = 140,
  h = 42
): string {
  const pad = 14;
  const lineW = w - pad * 2;
  const y = 20;
  const step = lineW / den;
  const stroke = "#1e293b";

  const ticks: string[] = [];
  for (let i = 0; i <= den; i++) {
    const tx = pad + i * step;
    ticks.push(`<line x1="${tx}" y1="${y - 6}" x2="${tx}" y2="${y + 6}" stroke="${stroke}" stroke-width="1.2" />`);
    if (i === 0 || i === den) {
      const lbl = i === 0 ? "0" : "1";
      ticks.push(`<text x="${tx}" y="${y + 16}" font-size="9" font-weight="bold" fill="#64748b" text-anchor="middle">${lbl}</text>`);
    }
  }

  const dotX = pad + num * step;
  const dot = showDot
    ? `<circle cx="${dotX}" cy="${y}" r="4" fill="#2563eb" stroke="#ffffff" stroke-width="1.5" />`
    : "";

  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <line x1="${pad - 4}" y1="${y}" x2="${pad + lineW + 4}" y2="${y}" stroke="${stroke}" stroke-width="1.5" />
    <!-- arrowheads -->
    <path d="M ${pad - 6} ${y} L ${pad - 2} ${y - 3} L ${pad - 2} ${y + 3} Z" fill="${stroke}" />
    <path d="M ${pad + lineW + 6} ${y} L ${pad + lineW + 2} ${y - 3} L ${pad + lineW + 2} ${y + 3} Z" fill="${stroke}" />
    ${ticks.join("")}
    ${dot}
  </svg>`;
}

// ── Problem Generation Engine ─────────────────────────────────────────────────

export function generateFractionProblems(
  cfg: FractionsConfig,
  seed: number
): FractionProblem[] {
  const rng = makeRng(seed);
  const dens = cfg.denominators.length > 0 ? cfg.denominators : [2, 3, 4, 5, 6, 8];
  const exercises = cfg.exercises.length > 0 ? cfg.exercises : ["identify", "shade", "compare", "addition"];
  const visualOpts: ("circle" | "bar" | "rectangle" | "number-line")[] =
    cfg.visualType === "mixed"
      ? ["circle", "bar", "rectangle", "number-line"]
      : [cfg.visualType as "circle" | "bar" | "rectangle" | "number-line"];

  const problems: FractionProblem[] = [];

  for (let i = 0; i < cfg.problemCount; i++) {
    const exType = exercises[i % exercises.length];
    const vType = pick(rng, visualOpts);
    const d1 = pick(rng, dens);
    const n1 = randInt(rng, 1, Math.max(1, d1 - 1));

    switch (exType) {
      case "identify": {
        problems.push({
          id: `p-${i + 1}`,
          num: i + 1,
          type: "identify",
          prompt: "Write the fraction represented by the shaded diagram.",
          instructions: "Count the shaded parts (numerator) and total equal parts (denominator).",
          diagramA: { numerator: n1, denominator: d1, shadedParts: n1, visualType: vType },
          answer: formatFraction(n1, d1),
          answerExplanation: `${n1} of ${d1} parts shaded = ${formatFraction(n1, d1)}`,
        });
        break;
      }

      case "shade": {
        problems.push({
          id: `p-${i + 1}`,
          num: i + 1,
          type: "shade",
          prompt: `Shade ${formatFraction(n1, d1)} of the shape.`,
          instructions: `Color exactly ${n1} out of the ${d1} equal parts.`,
          diagramA: { numerator: n1, denominator: d1, shadedParts: 0, visualType: vType },
          answer: `Shade any ${n1} of ${d1} parts`,
          answerExplanation: `${n1} parts must be shaded`,
        });
        break;
      }

      case "equivalent": {
        const mult = randInt(rng, 2, 3);
        const d2 = d1 * mult;
        const n2 = n1 * mult;
        problems.push({
          id: `p-${i + 1}`,
          num: i + 1,
          type: "equivalent",
          prompt: `Find the equivalent fraction: ${formatFraction(n1, d1)} = ___ / ${d2}`,
          instructions: "Notice how both diagrams represent the exact same amount.",
          diagramA: { numerator: n1, denominator: d1, shadedParts: n1, visualType: vType },
          diagramB: { numerator: n2, denominator: d2, shadedParts: n2, visualType: vType },
          operator: "=",
          answer: `${n2} (so ${formatFraction(n1, d1)} = ${formatFraction(n2, d2)})`,
          answerExplanation: `Multiply numerator and denominator by ${mult}: ${n1} × ${mult} = ${n2}`,
        });
        break;
      }

      case "compare": {
        const d2 = pick(rng, dens);
        const n2 = randInt(rng, 1, Math.max(1, d2 - 1));
        const val1 = n1 / d1;
        const val2 = n2 / d2;
        const comp = val1 > val2 ? ">" : val1 < val2 ? "<" : "=";
        problems.push({
          id: `p-${i + 1}`,
          num: i + 1,
          type: "compare",
          prompt: `Compare the fractions: ${formatFraction(n1, d1)} [   ] ${formatFraction(n2, d2)}`,
          instructions: "Write <, >, or = in the circle.",
          diagramA: { numerator: n1, denominator: d1, shadedParts: n1, visualType: vType },
          diagramB: { numerator: n2, denominator: d2, shadedParts: n2, visualType: vType },
          operator: "vs",
          answer: comp,
          answerExplanation: `${n1}/${d1} (${val1.toFixed(2)}) is ${comp} ${n2}/${d2} (${val2.toFixed(2)})`,
        });
        break;
      }

      case "simplify": {
        const mult = randInt(rng, 2, 4);
        const simp = simplify(n1, d1);
        const unsimpN = simp.n * mult;
        const unsimpD = simp.d * mult;
        problems.push({
          id: `p-${i + 1}`,
          num: i + 1,
          type: "simplify",
          prompt: `Reduce ${formatFraction(unsimpN, unsimpD)} to its simplest form.`,
          instructions: "Divide both numerator and denominator by their greatest common factor.",
          diagramA: { numerator: unsimpN, denominator: unsimpD, shadedParts: unsimpN, visualType: vType },
          answer: formatFraction(simp.n, simp.d),
          answerExplanation: `Divide by ${mult}: ${formatFraction(simp.n, simp.d)}`,
        });
        break;
      }

      case "addition": {
        // Same denominator for visual addition
        const maxN = d1 - 1;
        const addN1 = randInt(rng, 1, Math.max(1, maxN - 1));
        const addN2 = randInt(rng, 1, Math.max(1, maxN - addN1));
        const sumN = addN1 + addN2;
        problems.push({
          id: `p-${i + 1}`,
          num: i + 1,
          type: "addition",
          prompt: `${formatFraction(addN1, d1)} + ${formatFraction(addN2, d1)} = _____`,
          instructions: "Add the numerators together and keep the common denominator.",
          diagramA: { numerator: addN1, denominator: d1, shadedParts: addN1, visualType: vType },
          diagramB: { numerator: addN2, denominator: d1, shadedParts: addN2, visualType: vType },
          operator: "+",
          answer: formatFraction(sumN, d1),
          answerExplanation: `${addN1}/${d1} + ${addN2}/${d1} = ${sumN}/${d1}`,
        });
        break;
      }

      case "subtraction": {
        const maxN = d1 - 1;
        const subN1 = randInt(rng, 2, maxN);
        const subN2 = randInt(rng, 1, subN1 - 1);
        const diffN = subN1 - subN2;
        problems.push({
          id: `p-${i + 1}`,
          num: i + 1,
          type: "subtraction",
          prompt: `${formatFraction(subN1, d1)} - ${formatFraction(subN2, d1)} = _____`,
          instructions: "Subtract the second numerator from the first.",
          diagramA: { numerator: subN1, denominator: d1, shadedParts: subN1, visualType: vType },
          diagramB: { numerator: subN2, denominator: d1, shadedParts: subN2, visualType: vType },
          operator: "-",
          answer: formatFraction(diffN, d1),
          answerExplanation: `${subN1}/${d1} - ${subN2}/${d1} = ${diffN}/${d1}`,
        });
        break;
      }

      case "improper": {
        const wholeParts = randInt(rng, 1, 2);
        const remParts = randInt(rng, 1, d1 - 1);
        const totalN = wholeParts * d1 + remParts;
        problems.push({
          id: `p-${i + 1}`,
          num: i + 1,
          type: "improper",
          prompt: "Write the improper fraction shown by the shaded shapes.",
          instructions: `Count all shaded parts across both shapes. Total parts per whole is ${d1}.`,
          diagramA: { numerator: totalN, denominator: d1, shadedParts: totalN, whole: wholeParts, visualType: vType },
          answer: formatFraction(totalN, d1),
          answerExplanation: `${wholeParts} wholes (${wholeParts * d1}/${d1}) + ${remParts}/${d1} = ${totalN}/${d1}`,
        });
        break;
      }

      case "mixed-numbers": {
        const whole = randInt(rng, 1, 2);
        const rem = randInt(rng, 1, d1 - 1);
        problems.push({
          id: `p-${i + 1}`,
          num: i + 1,
          type: "mixed-numbers",
          prompt: "Write the mixed number (whole and fraction) shown.",
          instructions: "Identify whole shaded shapes plus the fraction of the remaining shape.",
          diagramA: { numerator: rem, denominator: d1, shadedParts: rem, whole, visualType: vType },
          answer: formatMixedNumber(whole, rem, d1),
          answerExplanation: `${whole} whole shape(s) and ${rem}/${d1} = ${formatMixedNumber(whole, rem, d1)}`,
        });
        break;
      }
    }
  }

  return problems;
}
