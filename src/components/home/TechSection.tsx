import Link from "next/link";
import { TECH_DATA } from "@/lib/technologies";
import { FEATURED_MESH, getMeshForIndex } from "@/lib/patterns";
import { TechAvatar } from "@/components/icons/TechAvatars";

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
            const bg = FEATURED_MESH[cat.slug] ?? getMeshForIndex(FEATURED_SLUGS.indexOf(cat.slug));
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

                {/* Radial vignette — subtle corner shadow only */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.20) 100%)" }}
                />

                {/* Subtle top-edge light reflection on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Avatar — right side decorative */}
                <div className="absolute bottom-0 right-0 pointer-events-none opacity-90" style={{ width: 76, height: 76 }}>
                  <TechAvatar
                    slug={cat.slug}
                    style={{ width: "100%", height: "100%", filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.5))" }}
                    className="group-hover:scale-105 transition-transform duration-200"
                  />
                </div>

                {/* Content */}
                <span className="relative z-10 text-3xl leading-none drop-shadow-sm">{cat.icon}</span>
                <div className="relative z-10 mt-auto pr-16">
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
