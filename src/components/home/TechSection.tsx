import Link from "next/link";
import { TECH_DATA } from "@/lib/technologies";
import { FEATURED_MESH } from "@/lib/patterns";

const FEATURED_SLUGS = [
  "backend-technologies",
  "ai-ml",
  "ai-agents",
  "cloud",
  "api-technologies",
  "architecture",
  "caching",
  "bi-visualization",
];

// Local overrides kept for reference; actual values come from shared patterns.ts
const MESH: Record<string, string> = {
  "backend-technologies":
    "radial-gradient(ellipse 78% 65% at 18% 22%, rgba(16,185,129,0.72) 0%, transparent 62%)," +
    "radial-gradient(ellipse 55% 72% at 80% 78%, rgba(5,150,105,0.78) 0%, transparent 62%)," +
    "radial-gradient(ellipse 50% 48% at 55% 38%, rgba(52,211,153,0.32) 0%, transparent 55%)," +
    "radial-gradient(ellipse 38% 40% at 28% 76%, rgba(6,95,70,0.70) 0%, transparent 52%)," +
    "linear-gradient(148deg,#01080a,#021510)",

  "ai-ml":
    "radial-gradient(ellipse 78% 65% at 18% 22%, rgba(139,92,246,0.70) 0%, transparent 62%)," +
    "radial-gradient(ellipse 55% 72% at 80% 76%, rgba(109,40,217,0.76) 0%, transparent 62%)," +
    "radial-gradient(ellipse 50% 48% at 55% 38%, rgba(167,139,250,0.30) 0%, transparent 55%)," +
    "radial-gradient(ellipse 38% 40% at 28% 74%, rgba(76,29,149,0.68) 0%, transparent 52%)," +
    "linear-gradient(148deg,#07040e,#0e0520)",

  "ai-agents":
    "radial-gradient(ellipse 78% 65% at 18% 25%, rgba(59,130,246,0.68) 0%, transparent 62%)," +
    "radial-gradient(ellipse 55% 72% at 80% 73%, rgba(37,99,235,0.74) 0%, transparent 62%)," +
    "radial-gradient(ellipse 50% 48% at 52% 40%, rgba(96,165,250,0.28) 0%, transparent 55%)," +
    "radial-gradient(ellipse 38% 40% at 28% 74%, rgba(29,78,216,0.66) 0%, transparent 52%)," +
    "linear-gradient(148deg,#020610,#030e22)",

  "cloud":
    "radial-gradient(ellipse 78% 65% at 20% 22%, rgba(14,165,233,0.62) 0%, transparent 62%)," +
    "radial-gradient(ellipse 55% 72% at 78% 76%, rgba(6,182,212,0.68) 0%, transparent 62%)," +
    "radial-gradient(ellipse 50% 48% at 52% 38%, rgba(56,189,248,0.26) 0%, transparent 55%)," +
    "radial-gradient(ellipse 38% 40% at 24% 74%, rgba(8,145,178,0.64) 0%, transparent 52%)," +
    "linear-gradient(148deg,#020912,#03111e)",

  "api-technologies":
    "radial-gradient(ellipse 78% 65% at 18% 22%, rgba(245,158,11,0.60) 0%, transparent 62%)," +
    "radial-gradient(ellipse 55% 72% at 80% 75%, rgba(234,88,12,0.68) 0%, transparent 62%)," +
    "radial-gradient(ellipse 50% 48% at 52% 38%, rgba(251,191,36,0.26) 0%, transparent 55%)," +
    "radial-gradient(ellipse 38% 40% at 26% 74%, rgba(180,83,9,0.66) 0%, transparent 52%)," +
    "linear-gradient(148deg,#0e0802,#180d02)",

  "architecture":
    "radial-gradient(ellipse 78% 65% at 18% 22%, rgba(100,116,139,0.72) 0%, transparent 62%)," +
    "radial-gradient(ellipse 55% 72% at 80% 75%, rgba(71,85,105,0.78) 0%, transparent 62%)," +
    "radial-gradient(ellipse 50% 48% at 52% 38%, rgba(148,163,184,0.28) 0%, transparent 55%)," +
    "radial-gradient(ellipse 38% 40% at 26% 74%, rgba(51,65,85,0.70) 0%, transparent 52%)," +
    "linear-gradient(148deg,#060810,#0b0f1e)",

  "caching":
    "radial-gradient(ellipse 78% 65% at 18% 22%, rgba(239,68,68,0.65) 0%, transparent 62%)," +
    "radial-gradient(ellipse 55% 72% at 80% 75%, rgba(220,38,38,0.72) 0%, transparent 62%)," +
    "radial-gradient(ellipse 50% 48% at 52% 38%, rgba(252,165,165,0.24) 0%, transparent 55%)," +
    "radial-gradient(ellipse 38% 40% at 26% 74%, rgba(185,28,28,0.66) 0%, transparent 52%)," +
    "linear-gradient(148deg,#0d0202,#170404)",

  "bi-visualization":
    "radial-gradient(ellipse 78% 65% at 18% 22%, rgba(236,72,153,0.65) 0%, transparent 62%)," +
    "radial-gradient(ellipse 55% 72% at 80% 75%, rgba(190,24,93,0.72) 0%, transparent 62%)," +
    "radial-gradient(ellipse 50% 48% at 52% 38%, rgba(249,168,212,0.24) 0%, transparent 55%)," +
    "radial-gradient(ellipse 38% 40% at 26% 74%, rgba(157,23,77,0.64) 0%, transparent 52%)," +
    "linear-gradient(148deg,#0b0206,#16030c)",
};

const FALLBACK_MESH =
  "radial-gradient(ellipse 78% 65% at 18% 22%, rgba(99,102,241,0.65) 0%, transparent 62%)," +
  "linear-gradient(148deg,#04060f,#080b1e)";

export default function TechSection() {
  const featured = FEATURED_SLUGS.map(
    (slug) => TECH_DATA.find((c) => c.slug === slug)!
  ).filter(Boolean);

  const totalItems = TECH_DATA.reduce(
    (n, cat) => n + cat.subcategories.reduce((m, sub) => m + sub.items.length, 0),
    0
  );

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6">
      {/* Shared SVG noise filter — one definition, referenced by all cards */}
      <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="tech-card-noise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
      </svg>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">
            Developer Resources
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Tech Cheat Sheets & Interview Prep
          </h2>
          <p className="text-slate-500 mt-3 max-w-lg mx-auto text-base">
            Free PDF cheat sheets for {totalItems}+ technologies across{" "}
            {TECH_DATA.length} categories — perfect for interviews and quick reference.
          </p>
        </div>

        {/* Featured category cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {featured.map((cat) => {
            const count = cat.subcategories.reduce((n, sub) => n + sub.items.length, 0);
            const bg = FEATURED_MESH[cat.slug] ?? MESH[cat.slug] ?? FALLBACK_MESH;
            return (
              <Link
                key={cat.slug}
                href={`/technologies/${cat.slug}`}
                className="group relative overflow-hidden rounded-2xl p-5 flex flex-col gap-3 hover:-translate-y-1.5 hover:shadow-2xl shadow-lg transition-all duration-250"
                style={{ minHeight: 140 }}
              >
                {/* Mesh gradient background */}
                <div className="absolute inset-0" style={{ background: bg }} />

                {/* SVG grain texture — gives depth/material feel */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.14] mix-blend-soft-light"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect width="100%" height="100%" filter="url(#tech-card-noise)" />
                </svg>

                {/* Radial vignette — darkens corners to focus attention on content */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.45) 100%)" }}
                />

                {/* Subtle top-edge light reflection on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <span className="relative text-3xl leading-none drop-shadow-sm">{cat.icon}</span>
                <div className="relative mt-auto">
                  <h3 className="font-bold text-white text-sm leading-snug drop-shadow-sm">
                    {cat.label}
                  </h3>
                  <p className="text-white/60 text-xs mt-0.5">{count} resources</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Browse all link */}
        <div className="text-center mt-8">
          <Link
            href="/technologies"
            className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-indigo-400 text-slate-700 hover:text-indigo-600 font-semibold text-sm px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          >
            Browse all {TECH_DATA.length} tech categories
            <span className="text-base">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
