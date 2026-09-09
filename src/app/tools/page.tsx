import type { Metadata } from "next";
import Link from "next/link";
import { TOOLS } from "@/lib/tools/registry";

export const metadata: Metadata = {
  title: "Free Worksheet Generators — Make Your Own Printable Practice Sheets",
  description:
    "Free interactive worksheet generators: math practice sheets, handwriting practice, number lines and graph paper. Choose your options and download a randomized printable PDF with answer key — no sign-up.",
  keywords: [
    "worksheet generator",
    "free worksheet maker",
    "math worksheet generator",
    "handwriting practice generator",
    "printable worksheet creator",
    "custom worksheets pdf",
    "number line generator",
    "graph paper generator",
  ],
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "Free Worksheet Generators | WorksheetDownload",
    description:
      "Build your own printable math, handwriting, number line and graph paper worksheets. Instant randomized PDFs with answer keys.",
    url: "/tools",
    type: "website",
  },
};

export default function ToolsHubPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950 text-white py-16 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
            ⚡ Interactive Generators
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight mb-4">
            Build Your Own Worksheets
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto leading-relaxed">
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
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200/80 overflow-hidden transition-all hover:-translate-y-0.5"
            >
              <div className={`h-1.5 bg-gradient-to-r ${tool.gradient}`} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{tool.emoji}</span>
                  <h2 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {tool.title}
                  </h2>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{tool.description}</p>
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
