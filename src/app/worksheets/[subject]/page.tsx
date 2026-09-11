import { notFound } from "next/navigation";
import Link from "next/link";
import WorksheetGrid from "@/components/worksheets/WorksheetGrid";
import { SUBJECTS, getWorksheetsBySubject } from "@/lib/data";
import type { Subject } from "@/lib/types";
import { breadcrumbsJsonLd, collectionPageJsonLd } from "@/lib/jsonLd";
import BookmarkButton from "@/components/bookmarks/BookmarkButton";
import type { Metadata } from "next";

const VALID_SUBJECTS = SUBJECTS.map((s) => s.id);

export function generateStaticParams() {
  return SUBJECTS.map((s) => ({ subject: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ subject: string }> }): Promise<Metadata> {
  const { subject } = await params;
  const meta = SUBJECTS.find((s) => s.id === subject);
  if (!meta) return {};
  return {
    title: `${meta.label} Worksheets — Free Printable PDF Practice Sheets`,
    description: `Free printable ${meta.label.toLowerCase()} worksheets for kindergarten through Grade 5 with answer keys. Download high-quality practice sheets instantly.`,
    keywords: [
      `${meta.label.toLowerCase()} worksheets`,
      `free ${meta.label.toLowerCase()} worksheets`,
      `printable ${meta.label.toLowerCase()} worksheets`,
      `${meta.label.toLowerCase()} practice sheets`,
      `${meta.label.toLowerCase()} worksheets pdf`,
    ],
    alternates: { canonical: `/worksheets/${subject}` },
    openGraph: {
      title: `${meta.label} Worksheets | WorksheetDownload`,
      description: `Free printable ${meta.label.toLowerCase()} worksheets for K–5.`,
      url: `/worksheets/${subject}`,
      type: "website",
    },
    twitter: {
      title: `${meta.label} Worksheets | WorksheetDownload`,
      description: `Free printable ${meta.label.toLowerCase()} worksheets for K–5.`,
    },
  };
}

export default async function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;

  if (!VALID_SUBJECTS.includes(subject as Subject)) {
    notFound();
  }

  const meta = SUBJECTS.find((s) => s.id === subject)!;
  const worksheets = getWorksheetsBySubject(subject as Subject);

  const breadcrumbSchema = breadcrumbsJsonLd([
    { name: "Home", url: "/" },
    { name: "Worksheets", url: "/worksheets" },
    { name: `${meta.label} Worksheets`, url: `/worksheets/${subject}` },
  ]);

  const collectionSchema = collectionPageJsonLd({
    name: `${meta.label} Printable Worksheets`,
    description: `Free printable ${meta.label.toLowerCase()} worksheets for kindergarten through Grade 5.`,
    url: `/worksheets/${subject}`,
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span>›</span>
        <Link href="/worksheets" className="hover:text-gray-600">Worksheets</Link>
        <span>›</span>
        <span className="text-gray-700 font-medium">{meta.label}</span>
      </nav>

      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{meta.emoji}</span>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{meta.label} Worksheets</h1>
            <p className="text-gray-500 mt-1">{meta.description}</p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <BookmarkButton
            item={{
              id: `/worksheets/${subject}`,
              url: `/worksheets/${subject}`,
              title: `${meta.label} Worksheets`,
              category: "Worksheet",
              badge: meta.label,
              icon: meta.emoji,
              description: meta.description,
            }}
            variant="button"
          />
        </div>
      </div>
      <WorksheetGrid worksheets={worksheets} emptyMessage={`No ${meta.label} worksheets yet — check back soon!`} />
    </div>
  );
}

