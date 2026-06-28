import { notFound } from "next/navigation";
import WorksheetGrid from "@/components/worksheets/WorksheetGrid";
import { GRADES, getWorksheetsByGrade } from "@/lib/data";
import type { Grade } from "@/lib/types";
import type { Metadata } from "next";

const VALID_GRADES = GRADES.map((g) => g.id);

export function generateStaticParams() {
  return GRADES.map((g) => ({ grade: g.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ grade: string }> }): Promise<Metadata> {
  const { grade } = await params;
  const meta = GRADES.find((g) => g.id === grade);
  if (!meta) return {};
  return {
    title: `${meta.label} Worksheets | KidsWorksheets`,
    description: `Free printable worksheets for ${meta.label} students (${meta.ageRange}).`,
  };
}

export default async function GradePage({ params }: { params: Promise<{ grade: string }> }) {
  const { grade } = await params;

  if (!VALID_GRADES.includes(grade as Grade)) {
    notFound();
  }

  const meta = GRADES.find((g) => g.id === grade)!;
  const worksheets = getWorksheetsByGrade(grade as Grade);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{meta.label} Worksheets</h1>
        <p className="text-gray-500 mt-1">{meta.ageRange} · {worksheets.length} worksheets available</p>
      </div>
      <WorksheetGrid worksheets={worksheets} emptyMessage={`No worksheets for ${meta.label} yet — check back soon!`} />
    </div>
  );
}
