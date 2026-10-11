import type { Metadata } from "next";
import Link from "next/link";
import { TOOLS } from "@/lib/tools/registry";
import { breadcrumbsJsonLd, collectionPageJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Free Worksheet Generators — Make Your Own Printable Practice Sheets",
  description:
    "Free interactive worksheet generators: reading comprehension, visual fractions, money counting, crossword puzzles, grammar exercises, flashcards, math, handwriting, and more. Instant printable PDFs with answer keys — 100% free.",
  keywords: [
    "worksheet generator",
    "free worksheet maker",
    "reading comprehension worksheet generator",
    "visual fractions worksheet generator",
    "money counting worksheet generator",
    "crossword puzzle generator",
    "grammar exercise worksheet generator",
    "flashcard generator",
    "math worksheet generator",
    "handwriting practice generator",
    "printable worksheet creator",
    "custom worksheets pdf",
    "number line generator",
    "graph paper generator",
    "spelling worksheet generator",
  ],
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "Free Worksheet Generators | WorksheetDownload",
    description:
      "Build your own printable reading, fractions, money counting, crossword, grammar, flashcards, and math worksheets. Instant randomized PDFs with answer keys.",
    url: "/tools",
    type: "website",
  },
  twitter: {
    title: "Free Worksheet Generators | WorksheetDownload",
    description: "Free interactive worksheet makers with instant randomized printable PDFs and answer keys.",
  },
};

export default function ToolsHubPage() {
  const breadcrumbSchema = breadcrumbsJsonLd([
    { name: "Home", url: "/" },
    { name: "Tools", url: "/tools" },
  ]);

  const collectionSchema = collectionPageJsonLd({
    name: "Interactive Printable Worksheet Generators",
    description:
      "Free interactive generator tools to build custom math worksheets, handwriting practice, number lines, graph paper, times tables and spelling sheets.",
    url: "/tools",
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
      <div className="bg-[#0F1E4A] border-b border-[#1b2d63] text-white py-16 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#F2B33D] text-xs font-bold px-4 py-1.5 rounded-full mb-6 border border-white/20 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F2B33D]" />
            <span>Interactive Worksheet Generators</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight mb-4">
            Build Your Own Worksheets
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Pick your options and generate a fresh, randomized printable sheet in seconds —
            complete with answer keys. Everything runs in your browser. Always free, no sign-up.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-10 pb-20">
        <div className="grid sm:grid-cols-2 gap-5">
          {TOOLS.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group bg-white rounded-2xl shadow-2xs hover:shadow-xl border border-[#E4E0D4] hover:border-[#1E3A8A] overflow-hidden transition-all hover:-translate-y-1"
            >
              <div className={`h-1.5 bg-gradient-to-r ${tool.gradient}`} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{tool.emoji}</span>
                  <h2 className="text-lg font-bold text-[#0F1E4A] group-hover:text-[#1E3A8A] transition-colors">
                    {tool.title}
                  </h2>
                </div>
                <p className="text-sm text-[#5B6072] leading-relaxed mb-4">{tool.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600">
                  Open generator
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: "🎲", title: "Randomized", desc: "A new set of problems on every click" },
            { icon: "✅", title: "Answer keys", desc: "Auto-generated and always correct" },
            { icon: "🖨️", title: "Print-ready", desc: "Clean A4 PDF, download instantly" },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-xl border border-slate-100 p-4 text-center shadow-sm">
              <div className="text-2xl mb-1.5">{f.icon}</div>
              <div className="text-sm font-bold text-slate-800">{f.title}</div>
              <div className="text-xs text-slate-400 mt-1">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

