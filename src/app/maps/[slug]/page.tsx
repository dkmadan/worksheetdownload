import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MAP_WORKSHEETS,
  getMapWorksheet,
  resolvedRelated,
  CATEGORY_META,
  totalItems,
} from "@/lib/maps";
import MapWorksheetView from "@/components/maps/MapWorksheetView";

export function generateStaticParams() {
  return MAP_WORKSHEETS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getMapWorksheet(slug);
  if (!m) return {};
  return {
    title: m.metaTitle,
    description: m.metaDescription,
    keywords: m.keywords,
    alternates: { canonical: `/maps/${m.slug}` },
    openGraph: {
      title: `${m.title} Worksheet | WorksheetDownload`,
      description: m.metaDescription,
      url: `/maps/${m.slug}`,
      type: "article",
    },
  };
}

export default async function MapWorksheetPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = getMapWorksheet(slug);
  if (!m) notFound();

  const related = resolvedRelated(m);
  const cat = CATEGORY_META[m.category];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LearningResource",
        name: m.h1,
        description: m.metaDescription,
        url: `https://worksheetdownload.com/maps/${m.slug}`,
        learningResourceType: "Worksheet",
        educationalUse: ["assignment", "practice"],
        typicalAgeRange: "7-14",
        isFamilyFriendly: true,
        inLanguage: "en",
        isAccessibleForFree: true,
        provider: { "@type": "Organization", name: "WorksheetDownload", url: "https://worksheetdownload.com" },
      },
      {
        "@type": "FAQPage",
        mainEntity: m.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://worksheetdownload.com/" },
          { "@type": "ListItem", position: 2, name: "Map Worksheets", item: "https://worksheetdownload.com/maps" },
          { "@type": "ListItem", position: 3, name: m.title, item: `https://worksheetdownload.com/maps/${m.slug}` },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-gradient-to-r from-emerald-700 via-teal-800 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <nav className="text-xs font-medium text-white/70 mb-3 flex items-center gap-1.5 flex-wrap">
            <Link href="/maps" className="hover:text-white">Map Worksheets</Link>
            <span>/</span>
            <span className="text-white/90">{cat.label}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight flex items-start gap-3">
            <span>{m.emoji}</span>
            <span>{m.h1}</span>
          </h1>
          <div className="flex flex-wrap items-center gap-2 mt-3 text-xs font-semibold">
            <span className="bg-white/15 border border-white/20 px-2.5 py-1 rounded-full">{m.gradeBand}</span>
            <span className="bg-white/15 border border-white/20 px-2.5 py-1 rounded-full">{totalItems(m)} labels</span>
            <span className="bg-white/15 border border-white/20 px-2.5 py-1 rounded-full">Word bank + answer key</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <p className="text-slate-600 leading-relaxed text-[15px]">{m.intro}</p>

        <div className="mt-6">
          <MapWorksheetView map={m} />
        </div>

        {/* Quick facts */}
        <section className="mt-10 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-3">Quick facts</h2>
          <ul className="space-y-2">
            {m.facts.map((f, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-slate-600">
                <span className="text-emerald-600 font-bold shrink-0">•</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How to use */}
        <section className="mt-6 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-3">How to use this worksheet</h2>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside">
            <li>Download and print the PDF, or work from the preview above.</li>
            <li>{m.diagram ? "Label every line, zone and marker on the diagram." : "Draw or attach a blank map of the area in the map box."}</li>
            <li>Use the word bank to fill in Section A. Cross off each word as you place it.</li>
            {m.clues && m.clues.length > 0 && <li>Answer Part B by matching each clue to the right place.</li>}
            <li>Check your work against the answer-key page.</li>
          </ol>
        </section>

        {/* FAQ */}
        <section className="mt-6">
          <h2 className="text-lg font-bold text-slate-900 mb-3">Frequently asked questions</h2>
          <div className="space-y-3">
            {m.faqs.map((f, i) => (
              <details key={i} className="group bg-white rounded-xl border border-slate-200/80 p-4 shadow-sm">
                <summary className="font-semibold text-slate-800 text-sm cursor-pointer list-none flex items-center justify-between">
                  {f.q}
                  <span className="text-slate-400 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                </summary>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-10">
            <h2 className="text-lg font-bold text-slate-900 mb-3">Related map worksheets</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/maps/${r.slug}`}
                  className="flex items-center gap-3 bg-white rounded-xl border border-slate-200/80 p-3.5 shadow-sm hover:border-emerald-400 transition-colors"
                >
                  <span className="text-xl">{r.emoji}</span>
                  <span className="text-sm font-semibold text-slate-700">{r.title}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10 text-center">
          <Link href="/maps" className="text-sm font-bold text-emerald-700 hover:text-emerald-800">
            ← All {MAP_WORKSHEETS.length} map worksheets
          </Link>
        </div>
      </div>
    </div>
  );
}
