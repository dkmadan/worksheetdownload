import Link from "next/link";
import type { Metadata } from "next";
import { TECH_DATA, totalItemCount } from "@/lib/technologies";
import { getMeshForIndex, FEATURED_MESH } from "@/lib/patterns";

export const metadata: Metadata = {
  title: "Technologies — Browse by Tech Topic",
  description:
    "Explore 650+ technologies across 37 categories — AI/ML, Cloud, DevOps, Databases, Security, Web Technologies and more. Worksheets and learning resources for every tech stack.",
  alternates: { canonical: "/technologies" },
  openGraph: {
    title: "Technologies | WorksheetDownload",
    description: "Browse 650+ technology topics across 37 categories — AI/ML, Cloud, DevOps, Security, and more.",
    url: "/technologies",
    type: "website",
  },
};

export default function TechnologiesPage() {
  const count = totalItemCount();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-10 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 text-sm text-blue-400 font-semibold mb-5">
          💻 Technology Learning Hub
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Browse by Technology
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          {count}+ technologies across {TECH_DATA.length} categories — from AI/ML and Cloud to DevOps, Security, and Web.
        </p>
      </div>

      {/* Shared noise filter for all cards */}
      <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="tech-list-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
      </svg>

      {/* Category grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECH_DATA.map((cat, i) => {
            const itemCount = cat.subcategories.reduce((sum, s) => sum + s.items.length, 0);
            const sampleItems = cat.subcategories[0]?.items.slice(0, 4).map((it) => it.name) ?? [];
            const bg = FEATURED_MESH[cat.slug] ?? getMeshForIndex(i);
            return (
              <Link
                key={cat.slug}
                href={`/technologies/${cat.slug}`}
                className="group bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-gray-600/80 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
              >
                {/* Mesh gradient header strip */}
                <div className="relative px-4 py-4 flex items-center gap-3 overflow-hidden" style={{ background: bg }}>
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.14] mix-blend-soft-light"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                  >
                    <rect width="100%" height="100%" filter="url(#tech-list-noise)" />
                  </svg>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.18) 100%)" }}
                  />
                  <span className="relative text-3xl z-10">{cat.icon}</span>
                  <div className="relative z-10">
                    <p className="text-white font-bold text-sm leading-tight">{cat.label}</p>
                    <p className="text-white/60 text-xs">{itemCount} technologies</p>
                  </div>
                </div>
                {/* Body */}
                <div className="px-4 py-3">
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">
                    {cat.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {sampleItems.map((name) => (
                      <span key={name} className="px-2 py-0.5 rounded text-[10px] text-gray-400 bg-gray-700/60 border border-gray-600/40">
                        {name}
                      </span>
                    ))}
                    {itemCount > 4 && (
                      <span className="px-2 py-0.5 rounded text-[10px] text-gray-500">
                        +{itemCount - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
