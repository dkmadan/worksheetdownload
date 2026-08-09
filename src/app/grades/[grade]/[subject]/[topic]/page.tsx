import { notFound } from "next/navigation";
import Link from "next/link";
import PracticeSheetTile from "@/components/ui/PracticeSheetTile";
import {
  GRADES_CURRICULUM, SUBJECTS_META,
  unslugifyTopic, isValidGrade, isValidSubject, CURRICULUM,
  slugifyTopic,
} from "@/lib/curriculum";
import type { Metadata } from "next";

export function generateStaticParams() {
  const params: { grade: string; subject: string; topic: string }[] = [];
  for (const gradeId of Object.keys(CURRICULUM)) {
    for (const [subjectId, topics] of Object.entries(CURRICULUM[gradeId])) {
      for (const topic of topics) {
        params.push({ grade: gradeId, subject: subjectId, topic: slugifyTopic(topic) });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ grade: string; subject: string; topic: string }>;
}): Promise<Metadata> {
  const { grade, subject, topic } = await params;
  const topicLabel = unslugifyTopic(grade, subject, topic);
  const gradeDef = GRADES_CURRICULUM.find((g) => g.id === grade);
  const subjectDef = SUBJECTS_META[subject];
  if (!gradeDef || !subjectDef || !topicLabel) return {};
  return {
    title: `${topicLabel} — ${subjectDef.label} ${gradeDef.label} | Worksheets Download`,
    description: `Practice sheets for ${topicLabel} (${subjectDef.label}, ${gradeDef.label}). Free printable worksheets.`,
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ grade: string; subject: string; topic: string }>;
}) {
  const { grade, subject, topic } = await params;

  if (!isValidGrade(grade) || !isValidSubject(grade, subject)) notFound();

  const topicLabel = unslugifyTopic(grade, subject, topic);
  if (!topicLabel) notFound();

  const gradeDef = GRADES_CURRICULUM.find((g) => g.id === grade)!;
  const subjectDef = SUBJECTS_META[subject]!;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6 flex-wrap">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span>›</span>
        <Link href="/grades" className="hover:text-gray-600">Grades</Link>
        <span>›</span>
        <Link href={`/grades/${grade}`} className="hover:text-gray-600">{gradeDef.label}</Link>
        <span>›</span>
        <Link href={`/grades/${grade}/${subject}`} className="hover:text-gray-600">{subjectDef.label}</Link>
        <span>›</span>
        <span className="text-gray-700 font-medium">{topicLabel}</span>
      </nav>

      <div className="mb-8">
        <p className="text-sm text-gray-400 font-medium">
          {gradeDef.label} · {subjectDef.label}
        </p>
        <h1 className="text-3xl font-bold text-gray-900 mt-1">{topicLabel}</h1>
        <p className="text-gray-500 mt-2">4 practice sheets available — free to view and download.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[1, 2, 3, 4].map((n) => (
          <PracticeSheetTile
            key={n}
            sheetNumber={n}
            gradeLabel={gradeDef.label}
            subjectLabel={subjectDef.label}
            topic={topicLabel}
          />
        ))}
      </div>
    </div>
  );
}
