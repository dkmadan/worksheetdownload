// Mesh gradient palette — rich cinematic tones, not neon.
// Multiple organic radial blobs over a near-black base give depth and texture.
// These cycle across tech category cards throughout the site.

export const TECH_PALETTE: string[] = [
  // 0 — deep indigo/blue
  "radial-gradient(ellipse 78% 65% at 18% 25%, rgba(59,130,246,0.68) 0%, transparent 62%)," +
  "radial-gradient(ellipse 55% 72% at 80% 73%, rgba(37,99,235,0.74) 0%, transparent 62%)," +
  "radial-gradient(ellipse 50% 48% at 52% 40%, rgba(96,165,250,0.28) 0%, transparent 55%)," +
  "linear-gradient(148deg,#020610,#030e22)",

  // 1 — violet/purple
  "radial-gradient(ellipse 78% 65% at 18% 22%, rgba(139,92,246,0.70) 0%, transparent 62%)," +
  "radial-gradient(ellipse 55% 72% at 80% 76%, rgba(109,40,217,0.76) 0%, transparent 62%)," +
  "radial-gradient(ellipse 50% 48% at 55% 38%, rgba(167,139,250,0.30) 0%, transparent 55%)," +
  "linear-gradient(148deg,#07040e,#0e0520)",

  // 2 — emerald/teal
  "radial-gradient(ellipse 78% 65% at 18% 22%, rgba(16,185,129,0.70) 0%, transparent 62%)," +
  "radial-gradient(ellipse 55% 72% at 80% 78%, rgba(5,150,105,0.76) 0%, transparent 62%)," +
  "radial-gradient(ellipse 50% 48% at 50% 38%, rgba(52,211,153,0.28) 0%, transparent 55%)," +
  "linear-gradient(148deg,#01080a,#021510)",

  // 3 — amber/orange
  "radial-gradient(ellipse 78% 65% at 18% 22%, rgba(245,158,11,0.60) 0%, transparent 62%)," +
  "radial-gradient(ellipse 55% 72% at 80% 75%, rgba(234,88,12,0.68) 0%, transparent 62%)," +
  "radial-gradient(ellipse 50% 48% at 52% 38%, rgba(251,191,36,0.26) 0%, transparent 55%)," +
  "linear-gradient(148deg,#0e0802,#180d02)",

  // 4 — cyan/sky
  "radial-gradient(ellipse 78% 65% at 20% 22%, rgba(14,165,233,0.62) 0%, transparent 62%)," +
  "radial-gradient(ellipse 55% 72% at 78% 76%, rgba(6,182,212,0.68) 0%, transparent 62%)," +
  "radial-gradient(ellipse 50% 48% at 52% 38%, rgba(56,189,248,0.26) 0%, transparent 55%)," +
  "linear-gradient(148deg,#020912,#03111e)",

  // 5 — crimson/red
  "radial-gradient(ellipse 78% 65% at 18% 22%, rgba(239,68,68,0.65) 0%, transparent 62%)," +
  "radial-gradient(ellipse 55% 72% at 80% 75%, rgba(220,38,38,0.72) 0%, transparent 62%)," +
  "radial-gradient(ellipse 50% 48% at 52% 38%, rgba(252,165,165,0.24) 0%, transparent 55%)," +
  "linear-gradient(148deg,#0d0202,#170404)",

  // 6 — rose/magenta
  "radial-gradient(ellipse 78% 65% at 18% 22%, rgba(236,72,153,0.65) 0%, transparent 62%)," +
  "radial-gradient(ellipse 55% 72% at 80% 75%, rgba(190,24,93,0.72) 0%, transparent 62%)," +
  "radial-gradient(ellipse 50% 48% at 52% 38%, rgba(249,168,212,0.24) 0%, transparent 55%)," +
  "linear-gradient(148deg,#0b0206,#16030c)",

  // 7 — steel/slate
  "radial-gradient(ellipse 78% 65% at 18% 22%, rgba(100,116,139,0.72) 0%, transparent 62%)," +
  "radial-gradient(ellipse 55% 72% at 80% 75%, rgba(71,85,105,0.78) 0%, transparent 62%)," +
  "radial-gradient(ellipse 50% 48% at 52% 38%, rgba(148,163,184,0.28) 0%, transparent 55%)," +
  "linear-gradient(148deg,#060810,#0b0f1e)",

  // 8 — warm indigo/cobalt
  "radial-gradient(ellipse 78% 65% at 22% 28%, rgba(79,70,229,0.68) 0%, transparent 62%)," +
  "radial-gradient(ellipse 55% 72% at 76% 70%, rgba(99,102,241,0.64) 0%, transparent 62%)," +
  "radial-gradient(ellipse 50% 48% at 50% 42%, rgba(165,180,252,0.26) 0%, transparent 55%)," +
  "linear-gradient(148deg,#040610,#080e1c)",

  // 9 — forest/dark-green
  "radial-gradient(ellipse 78% 65% at 18% 22%, rgba(22,163,74,0.66) 0%, transparent 62%)," +
  "radial-gradient(ellipse 55% 72% at 80% 76%, rgba(21,128,61,0.72) 0%, transparent 62%)," +
  "radial-gradient(ellipse 50% 48% at 52% 38%, rgba(74,222,128,0.24) 0%, transparent 55%)," +
  "linear-gradient(148deg,#010c04,#021408)",

  // 10 — deep teal/ocean
  "radial-gradient(ellipse 78% 65% at 18% 22%, rgba(20,184,166,0.64) 0%, transparent 62%)," +
  "radial-gradient(ellipse 55% 72% at 80% 76%, rgba(13,148,136,0.70) 0%, transparent 62%)," +
  "radial-gradient(ellipse 50% 48% at 52% 38%, rgba(94,234,212,0.24) 0%, transparent 55%)," +
  "linear-gradient(148deg,#020c0c,#031614)",

  // 11 — plum/dark-violet
  "radial-gradient(ellipse 78% 65% at 18% 22%, rgba(168,85,247,0.66) 0%, transparent 62%)," +
  "radial-gradient(ellipse 55% 72% at 80% 76%, rgba(126,34,206,0.72) 0%, transparent 62%)," +
  "radial-gradient(ellipse 50% 48% at 52% 38%, rgba(196,181,253,0.24) 0%, transparent 55%)," +
  "linear-gradient(148deg,#080412,#100620)",
];

// Per-slug overrides for the 8 featured homepage cards
export const FEATURED_MESH: Record<string, string> = {
  "backend-technologies": TECH_PALETTE[2],
  "ai-ml":                TECH_PALETTE[1],
  "ai-agents":            TECH_PALETTE[0],
  "cloud":                TECH_PALETTE[4],
  "api-technologies":     TECH_PALETTE[3],
  "architecture":         TECH_PALETTE[7],
  "caching":              TECH_PALETTE[5],
  "bi-visualization":     TECH_PALETTE[6],
};

/** Returns a mesh gradient string for any tech category slug, cycling through the palette. */
export function getMeshForIndex(index: number): string {
  return TECH_PALETTE[index % TECH_PALETTE.length];
}
