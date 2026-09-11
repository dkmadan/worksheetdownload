import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  COLORING_CATEGORIES,
  COLORING_SHEETS,
  getCategory,
  getSheet,
  getSheetsByCategory,
} from "@/lib/coloring";
import ColoringSheetCard from "@/components/coloring/ColoringSheetCard";
import PrintableWorksheetFrame from "./PrintableWorksheetFrame";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return COLORING_SHEETS.map((sheet) => ({
    category: sheet.categoryId,
    slug: sheet.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: catSlug, slug: sheetSlug } = await params;
  const sheet = getSheet(catSlug, sheetSlug);
  if (!sheet) return {};

  return {
    title: `${sheet.title} Coloring Worksheet (Free Printable PDF) | WorksheetDownload`,
    description: `Free printable ${sheet.title} coloring worksheet for kids (${sheet.ageRange}). Clean bold outline illustration with student strip and coloring prompt. Download instant PDF or print directly.`,
    keywords: [
      `${sheet.title.toLowerCase()} coloring page`,
      `print ${sheet.title.toLowerCase()} worksheet`,
      `${sheet.categoryName.toLowerCase()} coloring`,
      ...sheet.tags,
      "free coloring worksheet pdf",
    ],
    alternates: {
      canonical: `https://worksheetdownload.com/coloring-sheets/${sheet.categoryId}/${sheet.slug}`,
    },
    openGraph: {
      title: `${sheet.title} Coloring Worksheet (Free Printable PDF)`,
      description: `Free printable ${sheet.title} coloring worksheet with friendly bold outlines for kids. Instant PDF download.`,
      url: `https://worksheetdownload.com/coloring-sheets/${sheet.categoryId}/${sheet.slug}`,
      type: "article",
    },
  };
}

export default async function ColoringSheetDetailPage({ params }: PageProps) {
  const { category: catSlug, slug: sheetSlug } = await params;
  const category = getCategory(catSlug);
  const sheet = getSheet(catSlug, sheetSlug);

  if (!category || !sheet) {
    notFound();
  }

  const categorySheets = getSheetsByCategory(category.id);
  const relatedSheets = categorySheets.filter((s) => s.id !== sheet.id).slice(0, 4);

  // Schema Markup for LearningResource / Worksheet
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: `${sheet.title} Coloring Page`,
    description: sheet.subtitle,
    learningResourceType: "Coloring Worksheet",
    educationalLevel: sheet.ageRange,
    isAccessibleForFree: true,
    url: `https://worksheetdownload.com/coloring-sheets/${category.slug}/${sheet.slug}`,
    inLanguage: "en",
    author: {
      "@type": "Organization",
      name: "WorksheetDownload",
      url: "https://worksheetdownload.com",
    },
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Breadcrumb Bar (hidden on print) ── */}
      <div className="bg-white border-b border-slate-200 print:hidden">
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
            <Link
              href={`/coloring-sheets/${category.slug}`}
              className="hover:text-slate-900 transition-colors"
            >
              {category.name}
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">{sheet.title}</span>
          </nav>
        </div>
      </div>

      {/* ── Main Interactive Printable Frame ── */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <PrintableWorksheetFrame sheet={sheet} category={category} />
      </main>

      {/* ── More in this Category (hidden on print) ── */}
      {relatedSheets.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 print:hidden">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              More {category.name} Coloring Sheets
            </h2>
            <Link
              href={`/coloring-sheets/${category.slug}`}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>View all {category.name}</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedSheets.map((item) => (
              <ColoringSheetCard key={item.id} sheet={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
