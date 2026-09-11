import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { COLORING_CATEGORIES, getCategory, getSheetsByCategory } from "@/lib/coloring";
import ColoringSheetCard from "@/components/coloring/ColoringSheetCard";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return COLORING_CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: catSlug } = await params;
  const category = getCategory(catSlug);
  if (!category) return {};

  return {
    title: `${category.name} Coloring Sheets (10 Free Printable PDFs) | WorksheetDownload`,
    description: `Download 10 free printable ${category.name.toLowerCase()} coloring pages for kids. High quality bold-outline drawings including ${category.tagline}. 100% free PDF download.`,
    keywords: [
      `${category.name.toLowerCase()} coloring pages`,
      `${category.name.toLowerCase()} coloring sheets`,
      `printable ${category.name.toLowerCase()} worksheets`,
      `kids ${category.name.toLowerCase()} coloring`,
      "free coloring pages pdf",
    ],
    alternates: {
      canonical: `https://worksheetdownload.com/coloring-sheets/${category.slug}`,
    },
    openGraph: {
      title: `${category.name} Coloring Sheets (10 Free Printable PDFs)`,
      description: `Download 10 free printable ${category.name.toLowerCase()} coloring pages with bold vector outlines. Free instant PDF download.`,
      url: `https://worksheetdownload.com/coloring-sheets/${category.slug}`,
      type: "website",
    },
  };
}

export default async function CategoryColoringPage({ params }: PageProps) {
  const { category: catSlug } = await params;
  const category = getCategory(catSlug);

  if (!category) {
    notFound();
  }

  const sheets = getSheetsByCategory(category.id);
  const otherCategories = COLORING_CATEGORIES.filter((c) => c.id !== category.id);

  // Structured Data JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} Coloring Sheets`,
    description: `10 free printable ${category.name.toLowerCase()} coloring worksheets for kids.`,
    url: `https://worksheetdownload.com/coloring-sheets/${category.slug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: sheets.map((sheet, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: sheet.title,
        url: `https://worksheetdownload.com/coloring-sheets/${category.slug}/${sheet.slug}`,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Breadcrumb Bar ── */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/coloring-sheets" className="hover:text-slate-900 transition-colors">
              Coloring Sheets
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* ── Header Banner ── */}
      <section className="bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-xs font-bold uppercase tracking-wider mb-3">
              <span className="text-base">{category.emoji}</span>
              <span>10 Printable Worksheets</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {category.name} Coloring Sheets
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {category.description} Grab your favorite crayons, pencils, or paints and color your way through this printable set.
            </p>
          </div>

          {/* Quick jump menu */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link
              href="/coloring-sheets"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>All 15 Categories</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Worksheets Grid (10 items) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Worksheets in this Set ({sheets.length})
          </h2>
          <div className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
            Format: Standard US Letter / A4 Print PDF
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {sheets.map((sheet) => (
            <ColoringSheetCard key={sheet.id} sheet={sheet} />
          ))}
        </div>
      </section>

      {/* ── Explore Other Categories ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-slate-200">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-6">
          Explore More Coloring Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {otherCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/coloring-sheets/${cat.slug}`}
              className="group p-3 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col items-center text-center"
            >
              <span className="text-3xl mb-1.5 group-hover:scale-115 transition-transform duration-200">
                {cat.emoji}
              </span>
              <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 line-clamp-1">
                {cat.name}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">10 Sheets</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
