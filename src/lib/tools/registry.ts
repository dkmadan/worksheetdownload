// ─────────────────────────────────────────────────────────────────────────────
// Registry of interactive generator tools. Drives the /tools hub, the dynamic
// /tools/[slug] route, the navbar link list and the homepage section.
// ─────────────────────────────────────────────────────────────────────────────

export type ToolSlug =
  | "math-worksheet-generator"
  | "handwriting-practice"
  | "number-line-generator"
  | "graph-paper-generator";

export interface ToolMeta {
  slug: ToolSlug;
  title: string;
  /** Short label for nav / cards. */
  short: string;
  emoji: string;
  tagline: string;
  description: string;
  /** SEO keywords for the tool page. */
  keywords: string[];
  /** Tailwind gradient classes for the hero / card. */
  gradient: string;
  accent: string; // solid accent, e.g. "bg-blue-600"
}

export const TOOLS: ToolMeta[] = [
  {
    slug: "math-worksheet-generator",
    title: "Math Worksheet Generator",
    short: "Math Worksheets",
    emoji: "➗",
    tagline: "Addition, subtraction, multiplication, division & fractions",
    description:
      "Pick an operation, number range and how many problems — get an instant randomized practice sheet with a matching answer key. Print or download as PDF, unlimited free.",
    keywords: [
      "math worksheet generator",
      "addition worksheet generator",
      "multiplication worksheet maker",
      "division practice sheet",
      "fraction worksheet generator",
      "printable math practice",
      "custom math worksheets",
    ],
    gradient: "from-blue-500 via-indigo-500 to-violet-600",
    accent: "bg-blue-600",
  },
  {
    slug: "handwriting-practice",
    title: "Handwriting Practice Generator",
    short: "Handwriting Sheets",
    emoji: "✍️",
    tagline: "Custom trace-and-write sheets on 3-line guides",
    description:
      "Type any words, letters or a sentence and generate ruled handwriting practice pages — dotted trace rows followed by blank rows, with adjustable line height for every age.",
    keywords: [
      "handwriting practice generator",
      "handwriting worksheet maker",
      "tracing worksheet generator",
      "print handwriting practice",
      "name tracing worksheet",
      "custom handwriting sheets",
      "3 line handwriting paper",
    ],
    gradient: "from-rose-500 via-pink-500 to-fuchsia-600",
    accent: "bg-rose-600",
  },
  {
    slug: "number-line-generator",
    title: "Number Line & Counting Sheet Generator",
    short: "Number Lines",
    emoji: "📏",
    tagline: "Blank, filled or fill-the-gap number lines & skip counting",
    description:
      "Build printable number lines for any start, end and step. Choose blank ticks, every label filled, or missing-number gaps for students to complete — answer key included.",
    keywords: [
      "number line generator",
      "printable number line",
      "skip counting worksheet",
      "blank number line",
      "fill in the missing number worksheet",
      "counting practice sheet",
    ],
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    accent: "bg-emerald-600",
  },
  {
    slug: "graph-paper-generator",
    title: "Graph & Grid Paper Generator",
    short: "Graph Paper",
    emoji: "📐",
    tagline: "Squared, dot and coordinate-grid paper, any spacing",
    description:
      "Generate printable graph paper with adjustable square size, dot grid or full coordinate grid with axes and numbering. Perfect A4 PDF, ready to print.",
    keywords: [
      "graph paper generator",
      "printable graph paper",
      "dot grid paper pdf",
      "coordinate grid paper",
      "squared paper generator",
      "custom grid paper",
    ],
    gradient: "from-amber-500 via-orange-500 to-red-500",
    accent: "bg-amber-600",
  },
];

export function getTool(slug: string): ToolMeta | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
