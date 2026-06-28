import { notFound } from "next/navigation";
import WorksheetGrid from "@/components/worksheets/WorksheetGrid";
import { SUBJECTS, getWorksheetsBySubject } from "@/lib/data";
import type { Subject } from "@/lib/types";
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
    title: `${meta.label} Worksheets | KidsWorksheets`,
    description: `Free printable ${meta.label.toLowerCase()} worksheets for kindergarten through 5th grade.`,
  };
}

export default async function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;

  if (!VALID_SUBJECTS.includes(subject as Subject)) {
    notFound();
  }

  const meta = SUBJECTS.find((s) => s.id === subject)!;
  const worksheets = getWorksheetsBySubject(subject as Subject);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8 flex items-center gap-3">
        <span className="text-4xl">{meta.emoji}</span>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{meta.label} Worksheets</h1>
          <p className="text-gray-500 mt-1">{meta.description}</p>
        </div>
      </div>
      <WorksheetGrid worksheets={worksheets} emptyMessage={`No ${meta.label} worksheets yet — check back soon!`} />
    </div>
  );
}
