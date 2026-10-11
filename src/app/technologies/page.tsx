import Link from "next/link";
import type { Metadata } from "next";
import { TECH_DATA, totalItemCount } from "@/lib/technologies";
import { getMeshForIndex, FEATURED_MESH } from "@/lib/patterns";
import { breadcrumbsJsonLd, collectionPageJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Technologies — Browse 647 Developer Cheat Sheets",
  description:
    "Explore 647 technologies across 37 categories — AI/ML, Cloud, DevOps, Databases, Security, Web Technologies and more. Free PDF cheat sheets, interview questions, and practice worksheets.",
  keywords: [
    "technologies cheat sheet",
    "developer cheat sheets",
    "coding cheat sheets pdf",
    "devops cheat sheets",
    "ai ml cheat sheets",
    "cloud computing cheat sheets",
    "database cheat sheets",
    "free tech worksheets",
    "technical interview prep pdf",
  ],
  alternates: { canonical: "/technologies" },
  openGraph: {
    title: "Technologies | 647 Developer Cheat Sheets | WorksheetDownload",
    description: "Browse 647 technology topics across 37 categories — AI/ML, Cloud, DevOps, Security, and more.",
    url: "/technologies",
    type: "website",
  },
  twitter: {
    title: "Technologies | 647 Developer Cheat Sheets | WorksheetDownload",
    description: "Browse 647 technology topics across 37 categories with free PDF cheat sheets and interview prep.",
  },
};

export default function TechnologiesPage() {
  const count = totalItemCount();

  const breadcrumbSchema = breadcrumbsJsonLd([
    { name: "Home", url: "/" },
    { name: "Technologies", url: "/technologies" },
  ]);

  const collectionSchema = collectionPageJsonLd({
    name: "Developer Cheat Sheets & Technology Learning Hub",
    description: `Browse ${count}+ technologies across ${TECH_DATA.length} categories with free downloadable cheat sheets.`,
    url: "/technologies",
  });

  return (
    <div className="min-h-screen bg-[#F7F5EF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Hero */}
      <div className="bg-[#0F1E4A] border-b border-[#1b2d63] px-4 sm:px-6 pt-14 pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-xs text-[#F2B33D] font-bold mb-5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F2B33D]" />
            <span>Developer Learning &amp; Cheatsheet Hub</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-4">
            Browse by Technology
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECH_DATA.map((cat, i) => {
            const itemCount = cat.subcategories.reduce((sum, s) => sum + s.items.length, 0);
            const sampleItems = cat.subcategories[0]?.items.slice(0, 4).map((it) => it.name) ?? [];
            const bg = FEATURED_MESH[cat.slug] ?? getMeshForIndex(i);
            return (
              <Link
                key={cat.slug}
                href={`/technologies/${cat.slug}`}
                className="group bg-white border border-[#E4E0D4] hover:border-[#1E3A8A] rounded-2xl overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
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
                <div className="px-4 py-4">
                  <p className="text-[#5B6072] text-xs leading-relaxed line-clamp-2 mb-3">
                    {cat.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {sampleItems.map((name) => (
                      <span
                        key={name}
                        className="px-2.5 py-0.5 rounded-md text-[10px] text-[#5B6072] bg-[#FAF9F5] border border-[#E4E0D4]"
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

