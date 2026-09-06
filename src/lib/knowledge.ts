// ─────────────────────────────────────────────────────────────────────────────
// Knowledge articles — 60 illustrated explainers across 6 science categories.
// Each article links out to the relevant grade + subject worksheet pages.
// Rendered by src/app/knowledge/[slug]/page.tsx.
// ─────────────────────────────────────────────────────────────────────────────

import {
  GRADES_CURRICULUM,
  SUBJECTS_META,
  getTopicsForGradeSubject,
  slugifyTopic,
} from "./curriculum";

export type KnowledgeAccent =
  | "sky"
  | "orange"
  | "emerald"
  | "amber"
  | "violet"
  | "rose"
  | "teal"
  | "indigo";

export interface AccentTokens {
  gradient: string;
  text: string;
  groupHoverText: string;
  softBg: string;
  softBorder: string;
  chipBg: string;
  chipText: string;
  ring: string;
  dot: string;
  strongBg: string;
  strongHoverBg: string;
  svg: { a: string; b: string; ink: string };
}

export const ACCENTS: Record<KnowledgeAccent, AccentTokens> = {
  sky: {
    gradient: "from-sky-500 via-cyan-500 to-blue-600",
    text: "text-sky-700",
    groupHoverText: "group-hover:text-sky-700",
    softBg: "bg-sky-50",
    softBorder: "border-sky-200",
    chipBg: "bg-sky-100",
    chipText: "text-sky-700",
    ring: "ring-sky-200",
    dot: "bg-sky-500",
    strongBg: "bg-sky-600",
    strongHoverBg: "hover:bg-sky-500",
    svg: { a: "#38bdf8", b: "#2563eb", ink: "#0c4a6e" },
  },
  orange: {
    gradient: "from-orange-400 via-pink-500 to-fuchsia-600",
    text: "text-orange-700",
    groupHoverText: "group-hover:text-orange-700",
    softBg: "bg-orange-50",
    softBorder: "border-orange-200",
    chipBg: "bg-orange-100",
    chipText: "text-orange-700",
    ring: "ring-orange-200",
    dot: "bg-orange-500",
    strongBg: "bg-orange-600",
    strongHoverBg: "hover:bg-orange-500",
    svg: { a: "#fb923c", b: "#db2777", ink: "#9a3412" },
  },
  emerald: {
    gradient: "from-lime-500 via-emerald-500 to-green-600",
    text: "text-emerald-700",
    groupHoverText: "group-hover:text-emerald-700",
    softBg: "bg-emerald-50",
    softBorder: "border-emerald-200",
    chipBg: "bg-emerald-100",
    chipText: "text-emerald-700",
    ring: "ring-emerald-200",
    dot: "bg-emerald-500",
    strongBg: "bg-emerald-600",
    strongHoverBg: "hover:bg-emerald-500",
    svg: { a: "#4ade80", b: "#16a34a", ink: "#14532d" },
  },
  amber: {
    gradient: "from-amber-500 via-orange-600 to-stone-700",
    text: "text-amber-700",
    groupHoverText: "group-hover:text-amber-700",
    softBg: "bg-amber-50",
    softBorder: "border-amber-200",
    chipBg: "bg-amber-100",
    chipText: "text-amber-800",
    ring: "ring-amber-200",
    dot: "bg-amber-600",
    strongBg: "bg-amber-600",
    strongHoverBg: "hover:bg-amber-500",
    svg: { a: "#f59e0b", b: "#78350f", ink: "#78350f" },
  },
  violet: {
    gradient: "from-teal-400 via-cyan-500 to-violet-600",
    text: "text-violet-700",
    groupHoverText: "group-hover:text-violet-700",
    softBg: "bg-violet-50",
    softBorder: "border-violet-200",
    chipBg: "bg-violet-100",
    chipText: "text-violet-700",
    ring: "ring-violet-200",
    dot: "bg-violet-500",
    strongBg: "bg-violet-600",
    strongHoverBg: "hover:bg-violet-500",
    svg: { a: "#2dd4bf", b: "#7c3aed", ink: "#4c1d95" },
  },
  rose: {
    gradient: "from-rose-500 via-pink-500 to-red-600",
    text: "text-rose-700",
    groupHoverText: "group-hover:text-rose-700",
    softBg: "bg-rose-50",
    softBorder: "border-rose-200",
    chipBg: "bg-rose-100",
    chipText: "text-rose-700",
    ring: "ring-rose-200",
    dot: "bg-rose-500",
    strongBg: "bg-rose-600",
    strongHoverBg: "hover:bg-rose-500",
    svg: { a: "#fb7185", b: "#e11d48", ink: "#881337" },
  },
  teal: {
    gradient: "from-teal-400 via-emerald-500 to-cyan-700",
    text: "text-teal-700",
    groupHoverText: "group-hover:text-teal-700",
    softBg: "bg-teal-50",
    softBorder: "border-teal-200",
    chipBg: "bg-teal-100",
    chipText: "text-teal-700",
    ring: "ring-teal-200",
    dot: "bg-teal-500",
    strongBg: "bg-teal-600",
    strongHoverBg: "hover:bg-teal-500",
    svg: { a: "#2dd4bf", b: "#0d9488", ink: "#134e4a" },
  },
  indigo: {
    gradient: "from-indigo-500 via-purple-500 to-blue-700",
    text: "text-indigo-700",
    groupHoverText: "group-hover:text-indigo-700",
    softBg: "bg-indigo-50",
    softBorder: "border-indigo-200",
    chipBg: "bg-indigo-100",
    chipText: "text-indigo-700",
    ring: "ring-indigo-200",
    dot: "bg-indigo-500",
    strongBg: "bg-indigo-600",
    strongHoverBg: "hover:bg-indigo-500",
    svg: { a: "#818cf8", b: "#4f46e5", ink: "#312e81" },
  },
};

export interface KnowledgeCategory {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  accent: KnowledgeAccent;
  count: number;
}

export const KNOWLEDGE_CATEGORIES: KnowledgeCategory[] = [
  {
    slug: "nature-earth",
    name: "Nature & Earth",
    emoji: "🌍",
    description: "Discover rock cycles, food webs, carbon paths, rivers, soil formation, and the wonders of our planet.",
    accent: "emerald",
    count: 10,
  },
  {
    slug: "weather-climate",
    name: "Weather & Climate",
    emoji: "🌦️",
    description: "Explore cloud creation, wind journeys, rain, thunderstorms, seasons, snow, and weather forecasting.",
    accent: "sky",
    count: 10,
  },
  {
    slug: "space",
    name: "Space",
    emoji: "🪐",
    description: "Journey across the Solar System, stars, moon phases, eclipses, rocket science, and northern lights.",
    accent: "indigo",
    count: 10,
  },
  {
    slug: "animal-plant-life",
    name: "Animal & Plant Life",
    emoji: "🐛",
    description: "Explore lifecycles, photosynthesis, honey bees, bird nests, and animal adaptations in diverse ecosystems.",
    accent: "orange",
    count: 10,
  },
  {
    slug: "human-body",
    name: "Human Body",
    emoji: "🧍",
    description: "Unravel how digestion works, how the heart pumps, brain messages, five senses, and why we sleep.",
    accent: "rose",
    count: 10,
  },
  {
    slug: "everyday-science",
    name: "Everyday Science",
    emoji: "⚡",
    description: "Understand electricity, magnets, sound waves, light, rainbows, states of matter, and simple machines.",
    accent: "amber",
    count: 10,
  },
];

export interface CycleStep {
  emoji: string;
  label: string;
  description: string;
}

export interface KnowledgeSection {
  heading: string;
  paragraphs: string[];
}

export interface RelatedLink {
  gradeId: string;
  subjectId: string;
  topic?: string;
}

export interface KnowledgeArticle {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: string;
  categoryEmoji: string;
  emoji: string;
  accent: KnowledgeAccent;
  readingMinutes: number;
  bigIdea: string;
  intro: string;
  cycleTitle: string;
  cycle: CycleStep[];
  sections: KnowledgeSection[];
  vocabulary: { term: string; definition: string }[];
  facts: string[];
  activity: { title: string; steps: string[] };
  related: RelatedLink[];
}

// ─────────────────────────────────────────────────────────────────────────────
// The 60 Science Knowledge Articles
// ─────────────────────────────────────────────────────────────────────────────

import { NATURE_EARTH_ARTICLES } from "./knowledge/nature-earth";
import { WEATHER_CLIMATE_ARTICLES } from "./knowledge/weather-climate";
import { SPACE_ARTICLES } from "./knowledge/space";
import { ANIMAL_PLANT_ARTICLES } from "./knowledge/animal-plant";
import { HUMAN_BODY_ARTICLES } from "./knowledge/human-body";
import { EVERYDAY_SCIENCE_ARTICLES } from "./knowledge/everyday-science";

export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  ...NATURE_EARTH_ARTICLES,
  ...WEATHER_CLIMATE_ARTICLES,
  ...SPACE_ARTICLES,
  ...ANIMAL_PLANT_ARTICLES,
  ...HUMAN_BODY_ARTICLES,
  ...EVERYDAY_SCIENCE_ARTICLES,
];

// Legacy slug aliases to ensure no broken links
const SLUG_ALIASES: Record<string, string> = {
  "water-life-cycle": "the-journey-of-a-raindrop",
  "butterfly-life-cycle": "the-life-cycle-of-a-ladybug",
  "seed-to-plant-cycle": "the-life-of-a-tree",
  "decomposer-soil-cycle": "how-soil-is-made",
  "oxygen-carbon-dioxide-breath-swap": "how-we-breathe",
};

export function getArticle(slug: string): KnowledgeArticle | undefined {
  const resolvedSlug = SLUG_ALIASES[slug] || slug;
  return KNOWLEDGE_ARTICLES.find((a) => a.slug === resolvedSlug);
}

export function getArticlesByCategory(categorySlug: string): KnowledgeArticle[] {
  return KNOWLEDGE_ARTICLES.filter((a) => a.categorySlug === categorySlug);
}

// ── Curriculum linking ──────────────────────────────────────────────────────

export interface ResolvedRelatedLink {
  href: string;
  gradeId: string;
  gradeLabel: string;
  gradeEmoji: string;
  gradeGradient: string;
  subjectId: string;
  subjectLabel: string;
  subjectEmoji: string;
  topic?: string;
}

export function resolveRelatedLink(link: RelatedLink): ResolvedRelatedLink | null {
  const grade = GRADES_CURRICULUM.find((g) => g.id === link.gradeId);
  const subject = SUBJECTS_META[link.subjectId];
  if (!grade || !subject) return null;

  const topics = getTopicsForGradeSubject(link.gradeId, link.subjectId);
  const hasTopic = !!link.topic && topics.includes(link.topic);
  const href = hasTopic
    ? `/grades/${link.gradeId}/${link.subjectId}/${slugifyTopic(link.topic!)}`
    : `/grades/${link.gradeId}/${link.subjectId}`;

  return {
    href,
    gradeId: grade.id,
    gradeLabel: grade.label,
    gradeEmoji: grade.emoji,
    gradeGradient: grade.gradient,
    subjectId: subject.id,
    subjectLabel: subject.label,
    subjectEmoji: subject.emoji,
    topic: hasTopic ? link.topic : undefined,
  };
}

export function relatedSubjects(
  article: KnowledgeArticle
): { id: string; label: string; emoji: string }[] {
  const seen = new Map<string, { id: string; label: string; emoji: string }>();
  for (const link of article.related) {
    const s = SUBJECTS_META[link.subjectId];
    if (s && !seen.has(s.id)) seen.set(s.id, { id: s.id, label: s.label, emoji: s.emoji });
  }
  return [...seen.values()];
}

export function relatedGrades(
  article: KnowledgeArticle
): { id: string; label: string; emoji: string }[] {
  const seen = new Map<string, { id: string; label: string; emoji: string }>();
  for (const link of article.related) {
    const g = GRADES_CURRICULUM.find((x) => x.id === link.gradeId);
    if (g && !seen.has(g.id)) seen.set(g.id, { id: g.id, label: g.label, emoji: g.emoji });
  }
  return [...seen.values()];
}
