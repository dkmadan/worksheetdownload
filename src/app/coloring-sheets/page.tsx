import { Metadata } from "next";
import Link from "next/link";
import { COLORING_CATEGORIES, getAllColoringSheets } from "@/lib/coloring";
import ColoringIllustration from "@/components/coloring/ColoringIllustration";
import ColoringSheetCard from "@/components/coloring/ColoringSheetCard";

export const metadata: Metadata = {
  title: "150+ Free Printable Coloring Sheets & Pages for Kids | WorksheetDownload",
  description:
    "Explore 150 free printable coloring worksheets across 15 popular categories: Animals, Birds, Dinosaurs, Vehicles, Flowers, Space, and more. Clean bold outlines, high-resolution PDF download.",
  keywords: [
    "coloring sheets",
    "free coloring pages",
    "printable coloring worksheets",
    "kids coloring pages",
    "animals coloring sheet",
    "dinosaur coloring pages",
    "space coloring sheets",
  ],
  alternates: {
    canonical: "https://worksheetdownload.com/coloring-sheets",
  },
  openGraph: {
    title: "150+ Free Printable Coloring Sheets & Pages for Kids",
    description:
      "Explore 150 free printable coloring worksheets across 15 categories with cute bold outlines for crayons and markers. Instant PDF download.",
    url: "https://worksheetdownload.com/coloring-sheets",
    type: "website",
  },
};

export default function ColoringDirectoryPage() {
  const allSheets = getAllColoringSheets();
  const featuredSheets = allSheets.filter((s) =>
    [
      "cute-bear",
      "baby-hippo",
      "friendly-elephant",
      "wise-owl",
      "sunny-sunflower",
      "mighty-t-rex",
      "speedy-race-car",
      "blasting-space-rocket",
    ].includes(s.id)
  );

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free Printable Coloring Sheets & Pages for Kids",
    description:
      "150 free printable coloring pages with bold outline illustrations across 15 categories.",
    url: "https://worksheetdownload.com/coloring-sheets",
    numberOfItems: 150,
    hasPart: COLORING_CATEGORIES.map((cat) => ({
      "@type": "WebPage",
      name: `${cat.name} Coloring Sheets`,
      url: `https://worksheetdownload.com/coloring-sheets/${cat.slug}`,
      description: cat.description,
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        {/* Glow ambient spots */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-5">
            <span>🎨 150 Free Printable Coloring Sheets</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-tight">
            Fun, Cute & Bold <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-indigo-300 bg-clip-text text-transparent">
              Printable Coloring Worksheets
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Download high-resolution, vector line-art coloring pages with friendly bold outlines — perfect for crayons, colored pencils, and markers at school or home.
          </p>

          {/* Quick Metrics */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-300">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
              <span className="text-xl">📚</span>
              <span>15 Thematic Categories</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
              <span className="text-xl">🖨️</span>
              <span>150 Ready-to-Print PDFs</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
              <span className="text-xl">✨</span>
              <span>100% Free & No Signup</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 15 Category Tiles Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">
              Explore Collections
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Browse by Category
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            10 free sheets in every category · Total 150 sheets
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {COLORING_CATEGORIES.map((category) => {
            // Pick a sample sheet for the thumbnail
            const sample = allSheets.find((s) => s.categoryId === category.id);
            return (
              <Link
                key={category.id}
                href={`/coloring-sheets/${category.slug}`}
                className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden transform hover:-translate-y-1"
              >
                {/* Visual Preview Header */}
                <div className="relative aspect-4/3 bg-slate-50/80 border-b border-slate-100 flex items-center justify-center p-3 overflow-hidden group-hover:bg-amber-50/20 transition-colors">
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
                      backgroundSize: "14px 14px",
                    }}
                  />
                  {sample && (
                    <div className="relative z-10 w-28 h-28 drop-shadow-xs group-hover:scale-110 transition-transform duration-300">
                      <ColoringIllustration type={sample.svgType} />
                    </div>
                  )}
                  {/* Category icon badge */}
                  <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-xl bg-white shadow-2xs border border-slate-200 flex items-center justify-center text-lg">
                    {category.emoji}
                  </div>
                  {/* Sheet count pill */}
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-slate-900 text-white text-[10px] font-extrabold">
                    10 Sheets
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                    <span>View 10 Worksheets</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Featured Coloring Sheets ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-extrabold text-amber-600 uppercase tracking-wider">
              Hand-Picked Favorites
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Popular Coloring Worksheets
            </h2>
          </div>
          <Link
            href="/coloring-sheets/animals"
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <span>See all animals</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSheets.map((sheet) => (
            <ColoringSheetCard key={sheet.id} sheet={sheet} />
          ))}
        </div>
      </section>

      {/* ── Educational Guide / Parent & Teacher Benefits ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Coloring is Essential for Early Childhood Learning
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Coloring activities are more than just a creative pastime. Our worksheets are intentionally designed with thick vector outlines and high-contrast borders to foster fine motor coordination, pencil grip, focus, color recognition, and spatial awareness.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/60">
              <div className="text-2xl mb-2">✋</div>
              <h3 className="font-bold text-slate-900 text-sm">Fine Motor Skills & Grip</h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Strengthens hand and finger muscles required for handwriting, scissor usage, and precise pencil control.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/60">
              <div className="text-2xl mb-2">🧠</div>
              <h3 className="font-bold text-slate-900 text-sm">Focus & Mindful Calm</h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Provides calming, screen-free focus time that encourages patience, visual processing, and emotional regulation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/60">
              <div className="text-2xl mb-2">🌈</div>
              <h3 className="font-bold text-slate-900 text-sm">Creativity & Self-Expression</h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Encourages experimentation with color palettes, shading, patterns, and boundless artistic storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
