// ─────────────────────────────────────────────────────────────────────────────
// Registry of interactive generator tools. Drives the /tools hub, the dynamic
// /tools/[slug] route, the navbar link list and the homepage section.
// ─────────────────────────────────────────────────────────────────────────────

export type ToolSlug =
  | "math-worksheet-generator"
  | "handwriting-practice"
  | "number-line-generator"
  | "graph-paper-generator"
  | "spelling-worksheet-generator"
  | "multiplication-table-generator"
  | "word-search-generator"
  | "telling-time-worksheet-generator"
  | "cursive-writing-generator";

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
  {
    slug: "spelling-worksheet-generator",
    title: "Spelling Worksheet Generator",
    short: "Spelling Sheets",
    emoji: "🔤",
    tagline: "Turn any word list into a full spelling practice packet",
    description:
      "Paste this week's spelling list and pick your activities — trace & write, ABC order, missing letters, use-in-a-sentence, pyramid writing and a dictation test. Instant printable PDF with an answer key.",
    keywords: [
      "spelling worksheet generator",
      "spelling worksheet maker",
      "spelling practice sheet",
      "make your own spelling worksheet",
      "spelling list worksheet pdf",
      "abc order worksheet generator",
      "missing letters spelling worksheet",
    ],
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-600",
    accent: "bg-fuchsia-600",
  },
  {
    slug: "multiplication-table-generator",
    title: "Multiplication & Times Table Generator",
    short: "Times Tables",
    emoji: "✖️",
    tagline: "Single tables, mixed drills, missing factors and blank grids",
    description:
      "Build times-table practice your way: one table at a time, a mixed drill from the tables you choose, missing-factor problems, or a blank multiplication grid to fill in. Randomized, with a matching answer key.",
    keywords: [
      "multiplication worksheet generator",
      "times table worksheet generator",
      "times tables practice sheet",
      "multiplication table printable",
      "blank multiplication grid",
      "missing factor multiplication worksheet",
      "multiplication drill generator",
    ],
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    accent: "bg-sky-600",
  },
  {
    slug: "word-search-generator",
    title: "Word Search Generator",
    short: "Word Search",
    emoji: "🔎",
    tagline: "Any word list into a printable puzzle with a solution page",
    description:
      "Type your words, pick the grid size and directions (horizontal, vertical, diagonal, backwards), and get an instant word search with a word bank and a solution key. Great for vocabulary, spelling and sub plans.",
    keywords: [
      "word search generator",
      "word search maker",
      "make your own word search",
      "printable word search pdf",
      "custom word search puzzle",
      "vocabulary word search generator",
      "word search with answer key",
    ],
    gradient: "from-teal-500 via-emerald-500 to-green-600",
    accent: "bg-teal-600",
  },
  {
    slug: "telling-time-worksheet-generator",
    title: "Telling Time Worksheet Generator",
    short: "Telling Time",
    emoji: "🕐",
    tagline: "Read-the-clock and draw-the-hands sheets with analog clocks",
    description:
      "Generate telling-time practice with real analog clock faces — read the clock and write the digital time, or draw the hands to match. Choose the precision from o'clock down to the minute. Answer key included.",
    keywords: [
      "telling time worksheet generator",
      "clock worksheet generator",
      "reading a clock worksheet",
      "draw the hands on the clock worksheet",
      "analog clock practice sheet",
      "telling time to the hour half hour worksheet",
      "printable clock worksheet pdf",
    ],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    accent: "bg-orange-600",
  },
  {
    slug: "cursive-writing-generator",
    title: "Cursive Writing Generator",
    short: "Cursive Writing",
    emoji: "✒️",
    tagline: "Trace-and-write cursive practice in a flowing script font",
    description:
      "Type any letters, words or a sentence and generate elegant cursive practice sheets — dotted trace rows in a real connected script font followed by blank rows, with adjustable letter size for every age.",
    keywords: [
      "cursive writing generator",
      "cursive handwriting worksheet",
      "cursive alphabet practice sheet",
      "trace cursive letters worksheet",
      "printable cursive writing practice",
      "cursive worksheet maker",
      "cursive writing practice for kids",
    ],
    gradient: "from-purple-600 via-violet-600 to-indigo-700",
    accent: "bg-purple-700",
  },
];

export function getTool(slug: string): ToolMeta | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
