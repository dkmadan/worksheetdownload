import Link from "next/link";
import type { Metadata } from "next";
import { KNOWLEDGE_ARTICLES, ACCENTS, relatedGrades } from "@/lib/knowledge";
import KnowledgeArt from "@/components/knowledge/KnowledgeArt";

export const metadata: Metadata = {
  title: "Knowledge — Illustrated Science Explainers for Kids",
  description:
    "Beautifully illustrated explainers of nature's cycles — the water cycle, a butterfly's life cycle, seed to plant, decomposers and soil, and the oxygen–carbon dioxide swap. Linked to K–8 Science and EVS worksheets.",
  alternates: { canonical: "/knowledge" },
  openGraph: {
    title: "Knowledge — Illustrated Science Explainers | WorksheetDownload",
    description:
      "Explore nature's cycles with clear diagrams and simple language, then practise with matching K–8 worksheets.",
    url: "/knowledge",
    type: "website",
  },
};

export default function KnowledgePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/15">
            📖 Knowledge Library
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Nature Runs in Cycles
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Clear, colourful explainers of the loops that keep our planet alive —
            with step-by-step diagrams, key words, fun facts, and a hands-on
            activity for every topic. Each article links straight to matching
            Science and EVS worksheets.
          </p>
        </div>
      </div>

      {/* ── Article tiles ────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-5">
          {KNOWLEDGE_ARTICLES.length} illustrated articles
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {KNOWLEDGE_ARTICLES.map((article) => {
            const accent = ACCENTS[article.accent];
            const grades = relatedGrades(article);
            return (
              <Link
                key={article.slug}
                href={`/knowledge/${article.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                {/* Illustration header */}
                <div className={`relative h-40 bg-gradient-to-br ${accent.gradient}`}>
                  <KnowledgeArt slug={article.slug} className="absolute inset-0" />
                  <span className="absolute top-3 left-3 text-2xl drop-shadow">{article.emoji}</span>
                  <span className="absolute bottom-3 right-3 bg-white/85 backdrop-blur text-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                    {article.cycle.length} stages · {article.readingMinutes} min read
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className={`text-lg font-bold text-slate-900 leading-snug ${accent.groupHoverText} transition-colors`}>
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1.5 leading-relaxed flex-1">
                    {article.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 mt-4">
                    {grades.map((g) => (
                      <span
                        key={g.id}
                        className={`inline-flex items-center gap-1 ${accent.chipBg} ${accent.chipText} text-[11px] font-semibold px-2 py-0.5 rounded-full`}
                      >
                        {g.emoji} {g.label}
                      </span>
                    ))}
                  </div>

                  <span className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${accent.text}`}>
                    Read article
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
