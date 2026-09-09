import type { MapWorksheet } from "./types";

/**
 * Fill in the derived / boilerplate fields so each data entry stays concise.
 * Pass everything meaningful; metaTitle / metaDescription default from title +
 * intro when omitted.
 */
export function defineMap(
  input: Omit<MapWorksheet, "metaTitle" | "metaDescription"> &
    Partial<Pick<MapWorksheet, "metaTitle" | "metaDescription">>,
): MapWorksheet {
  return {
    ...input,
    metaTitle: input.metaTitle ?? `${input.title} Worksheet — Free Printable & Labeling PDF`,
    metaDescription:
      input.metaDescription ??
      `${input.intro} Free printable PDF with a word bank and answer key.`.slice(0, 320),
  };
}

/** deterministic shuffle for the word bank (seeded by the slug) */
export function seededShuffle<T>(arr: readonly T[], slug: string): T[] {
  let h = 2166136261;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  let s = h >>> 0;
  const rng = () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
