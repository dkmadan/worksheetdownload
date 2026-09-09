import type { Metadata } from "next";
import Link from "next/link";
import { MAP_WORKSHEETS, mapsByCategory } from "@/lib/maps";

export const metadata: Metadata = {
  title: "Free Printable Map Worksheets — World, India, US & Geography Maps",
  description:
    "Free printable map worksheets: world map, continents and oceans, US states, India political and physical maps, rivers, mountains, climate zones, latitude and longitude and more. Each with a preview, word bank and answer key — download as PDF.",
  keywords: [
    "map worksheets",
    "printable map worksheets pdf",
    "blank map to label",
    "world map worksheet",
    "geography worksheets",
    "india map worksheet",
    "us map worksheet",
    "continents and oceans worksheet",
    "latitude and longitude worksheet",
  ],
  alternates: { canonical: "/maps" },
  openGraph: {
    title: "Free Printable Map Worksheets | WorksheetDownload",
    description:
      "World, India, US and geography map worksheets — label the map, use the word bank, check the answer key. Free PDF downloads.",
    url: "/maps",
    type: "website",
  },
};

export default function MapsHubPage() {
  const groups = mapsByCategory();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-br from-emerald-700 via-teal-800 to-cyan-900 text-white py-16 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
            🗺️ {MAP_WORKSHEETS.length} Map Worksheets
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight mb-4">
            Printable Map Worksheets
          </h1>
          <p className="text-emerald-50/90 text-lg max-w-xl mx-auto leading-relaxed">
            Label the world, your country and the big ideas of geography. Every worksheet has a
            preview, a word bank and an answer key — and downloads as a clean printable PDF. Always free.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 pb-20">
        {groups.map((g) => (
          <section key={g.category} className="mb-10">
            <div className="flex items-center gap-2.5 mb-1">
              <span className="text-2xl">{g.meta.emoji}</span>
              <h2 className="text-xl font-extrabold text-slate-900">{g.meta.label}</h2>
              <span className="text-xs font-semibold text-slate-400">({g.maps.length})</span>
            </div>
            <p className="text-sm text-slate-500 mb-4">{g.meta.blurb}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {g.maps.map((m) => (
                <Link
                  key={m.slug}
                  href={`/maps/${m.slug}`}
                  className="group bg-white rounded-xl border border-slate-200/80 p-4 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="text-2xl leading-none">{m.emoji}</span>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {m.title}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{m.gradeBand}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
