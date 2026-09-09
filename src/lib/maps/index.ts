import { CORE_MAPS } from "./data/core";
import { GEOGRAPHY_MAPS } from "./data/geography";
import { INDIA_MAPS } from "./data/india";
import { REGIONAL_MAPS } from "./data/regional";
import { SKILLS_MAPS } from "./data/skills";
import { HISTORY_MAPS } from "./data/history";
import { CATEGORY_META, type MapCategory, type MapWorksheet } from "./types";

export * from "./types";
export { CATEGORY_META } from "./types";

export const MAP_WORKSHEETS: MapWorksheet[] = [
  ...CORE_MAPS,
  ...GEOGRAPHY_MAPS,
  ...INDIA_MAPS,
  ...REGIONAL_MAPS,
  ...SKILLS_MAPS,
  ...HISTORY_MAPS,
];

const BY_SLUG = new Map(MAP_WORKSHEETS.map((m) => [m.slug, m]));

export function getMapWorksheet(slug: string): MapWorksheet | undefined {
  return BY_SLUG.get(slug);
}

/** category → maps, in the order categories should appear on the hub */
export const CATEGORY_ORDER: MapCategory[] = [
  "core",
  "india",
  "geography",
  "regional",
  "skills",
  "history",
];

export function mapsByCategory(): { category: MapCategory; meta: (typeof CATEGORY_META)[MapCategory]; maps: MapWorksheet[] }[] {
  return CATEGORY_ORDER.map((category) => ({
    category,
    meta: CATEGORY_META[category],
    maps: MAP_WORKSHEETS.filter((m) => m.category === category),
  })).filter((g) => g.maps.length > 0);
}

/** related slugs that actually resolve to a page */
export function resolvedRelated(m: MapWorksheet): MapWorksheet[] {
  return (m.related ?? [])
    .map((slug) => BY_SLUG.get(slug))
    .filter((x): x is MapWorksheet => Boolean(x) && x!.slug !== m.slug)
    .slice(0, 6);
}
