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
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950 px-4 sm:px-6 pt-14 pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full px-4 py-1.5 text-sm text-indigo-300 font-semibold mb-5">
            💻 Technology Learning Hub
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Browse by Technology
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            {count}+ technologies across {TECH_DATA.length} categories — from AI/ML and Cloud to DevOps, Security, and Web.
          </p>
        </div>
      </div>

      {/* Shared noise filter for all card header strips */}
      <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="tech-list-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
      </svg>

      {/* Category grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECH_DATA.map((cat, i) => {
            const itemCount = cat.subcategories.reduce((sum, s) => sum + s.items.length, 0);
            const sampleItems = cat.subcategories[0]?.items.slice(0, 4).map((it) => it.name) ?? [];
            const bg = FEATURED_MESH[cat.slug] ?? getMeshForIndex(i);
            return (
              <Link
                key={cat.slug}
                href={`/technologies/${cat.slug}`}
                className="group bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                {/* Coloured header strip */}
                <div
                  className="relative px-4 py-5 flex items-center gap-3 overflow-hidden"
                  style={{ background: bg }}
                >
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.12] mix-blend-soft-light"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect width="100%" height="100%" filter="url(#tech-list-noise)" />
                  </svg>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.15) 100%)" }}
                  />
                  <span className="relative text-3xl z-10">{cat.icon}</span>
                  <div className="relative z-10">
                    <p className="text-white font-bold text-sm leading-tight drop-shadow-sm">{cat.label}</p>
                    <p className="text-white/70 text-xs">{itemCount} technologies</p>
                  </div>
                </div>

                {/* Card body */}
                <div className="px-4 py-3">
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-3">
                    {cat.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {sampleItems.map((name) => (
                      <span
                        key={name}
                        className="px-2 py-0.5 rounded text-[10px] text-slate-500 bg-slate-100 border border-slate-200"
                      >
                        {name}
                      </span>
                    ))}
                    {itemCount > 4 && (
                      <span className="px-2 py-0.5 rounded text-[10px] text-slate-400">
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
