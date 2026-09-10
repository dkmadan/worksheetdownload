// ─────────────────────────────────────────────────────────────────────────────
// Map worksheet data model. Every map page is a "labeling worksheet": a word
// bank + numbered blanks for each feature + an answer-key page. Geometry-based
// maps (latitude/longitude, equator, time zones …) also render an accurate
// diagram; outline maps leave a bordered map area for the student's atlas map.
// ─────────────────────────────────────────────────────────────────────────────

export type MapCategory =
  | "core" // World, Continents, USA, India …
  | "geography" // rivers, mountains, deserts, climate …
  | "india" // India-specific
  | "regional" // Europe, Canada, Middle East …
  | "skills" // compass rose, grid, map key …
  | "history"; // Thirteen Colonies, Ancient Egypt …

export const CATEGORY_META: Record<
  MapCategory,
  { label: string; emoji: string; blurb: string }
> = {
  core: {
    label: "Main Maps",
    emoji: "🗺️",
    blurb: "World, continents, oceans and the most-taught countries.",
  },
  geography: {
    label: "Geography Practice",
    emoji: "🌍",
    blurb: "Rivers, mountains, deserts, climate zones, latitude & longitude and more.",
  },
  india: {
    label: "India Maps",
    emoji: "🇮🇳",
    blurb: "Political, physical, states & capitals, rivers, monsoon, resources.",
  },
  regional: {
    label: "Regions & Countries",
    emoji: "📍",
    blurb: "Europe, North America, the Middle East, Scandinavia and more.",
  },
  skills: {
    label: "Map Skills",
    emoji: "🧭",
    blurb: "Compass rose, grid references, map keys, scale and direction.",
  },
  history: {
    label: "History Maps",
    emoji: "📜",
    blurb: "Classroom history maps — colonies, empires and ancient worlds.",
  },
};

export type DiagramKind =
  | "latitude-longitude"
  | "equator"
  | "tropics"
  | "polar-circles"
  | "climate-zones"
  | "time-zones"
  | "prime-meridian"
  | "hemispheres-ns"
  | "hemispheres-ew"
  | "grid"
  | "compass-rose";

export interface LabelGroup {
  heading: string;
  /** correct answers, in a natural / conventional order */
  items: string[];
}

export interface ClueItem {
  clue: string;
  answer: string;
}

export interface MapFaq {
  q: string;
  a: string;
}

export interface MapWorksheet {
  slug: string;
  title: string; // card / nav label — "World Map"
  h1: string; // page H1 — "World Map Labeling Worksheet"
  category: MapCategory;
  emoji: string;
  gradeBand: string; // "Grades 2–8"
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string; // 2–4 sentence lead paragraph (page + OG)
  diagram?: DiagramKind;
  /**
   * Filename of a reference map image under /public/maps/reference/. When the
   * file exists it is shown on the page and appended as the final PDF page.
   * If the file is missing, everything degrades gracefully.
   */
  referenceImage?: string;
  /** instruction line printed above the label section */
  labelPrompt: string;
  groups: LabelGroup[];
  /** optional "identify from the clue" section — adds a Part B page */
  clues?: ClueItem[];
  facts: string[]; // "Quick Facts" reference box
  faqs: MapFaq[];
  related?: string[]; // slugs
}

/**
 * A group item can be a plain name ("Asia") or a "prompt — answer" pair
 * ("Maine — Augusta"). Split on the spaced em-dash used throughout the data.
 */
export function splitItem(s: string): { prompt?: string; answer: string } {
  const i = s.indexOf(" — ");
  if (i === -1) return { answer: s };
  return { prompt: s.slice(0, i), answer: s.slice(i + 3) };
}

/** every distinct word-bank entry (the answer side of each item) */
export function allAnswers(m: MapWorksheet): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const g of m.groups)
    for (const it of g.items) {
      const a = splitItem(it).answer;
      if (!seen.has(a.toLowerCase())) {
        seen.add(a.toLowerCase());
        out.push(a);
      }
    }
  return out;
}

export function totalItems(m: MapWorksheet): number {
  return m.groups.reduce((n, g) => n + g.items.length, 0);
}
