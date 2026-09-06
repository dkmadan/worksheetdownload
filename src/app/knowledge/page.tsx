import type { Metadata } from "next";
import { KNOWLEDGE_ARTICLES, KNOWLEDGE_CATEGORIES } from "@/lib/knowledge";
import KnowledgeDirectory from "@/components/knowledge/KnowledgeDirectory";

export const metadata: Metadata = {
  title: "Knowledge Library — 60 Illustrated Science Explainers for Kids",
  description:
    "Explore 60 beautifully illustrated science guides across 6 categories: Nature & Earth, Weather & Climate, Space, Animal & Plant Life, Human Body, and Everyday Science. Linked to K–8 Science and EVS worksheets.",
  alternates: { canonical: "/knowledge" },
  openGraph: {
    title: "Knowledge Library — 60 Illustrated Science Explainers | WorksheetDownload",
    description:
      "Explore nature's cycles, space physics, the human body, weather, and everyday science with clear diagrams and hands-on activities, then practise with matching K–8 worksheets.",
    url: "/knowledge",
    type: "website",
  },
};

export default function KnowledgePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-4 sm:px-6 py-14 sm:py-20 relative overflow-hidden">
        {/* Subtle decorative background stars */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 border border-white/15 backdrop-blur">
            📖 Comprehensive STEM Knowledge Library
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            How the World Works
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            60 clearly illustrated, step-by-step science explainers for young learners.
            Explore planetary cycles, rocket physics, human anatomy, ecosystems, and weather
            phenomena — complete with key vocabulary, fun facts, try-it-yourself activities, and
            curriculum-matched printable worksheets.
          </p>

          {/* Category Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-10 max-w-4xl mx-auto">
            {KNOWLEDGE_CATEGORIES.map((cat) => (
              <div
                key={cat.slug}
                className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl p-3 text-center backdrop-blur transition-all"
              >
                <span className="text-2xl">{cat.emoji}</span>
                <p className="text-white text-xs font-bold mt-1 line-clamp-1">{cat.name}</p>
                <p className="text-slate-400 text-[10px] mt-0.5">{cat.count} articles</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Interactive Directory ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <KnowledgeDirectory articles={KNOWLEDGE_ARTICLES} />
      </div>
    </div>
  );
}
