import { notFound } from "next/navigation";
import Link from "next/link";
import SubjectTile from "@/components/ui/SubjectTile";
import {
  GRADES_CURRICULUM, getSubjectsForGrade, getTopicsForGradeSubject,
  isValidGrade, CURRICULUM,
} from "@/lib/curriculum";
import type { Metadata } from "next";

export function generateStaticParams() {
  return GRADES_CURRICULUM.map((g) => ({ grade: g.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ grade: string }>;
}): Promise<Metadata> {
  const { grade } = await params;
  const gradeDef = GRADES_CURRICULUM.find((g) => g.id === grade);
  if (!gradeDef) return {};
  return {
    title: `${gradeDef.label} Subjects | Worksheets Download`,
    description: `Browse all subjects for ${gradeDef.label} (${gradeDef.ageRange}). Free printable worksheets.`,
  };
}

export default async function GradePage({
  params,
}: {
  params: Promise<{ grade: string }>;
}) {
  const { grade } = await params;

  if (!isValidGrade(grade)) notFound();

  const gradeDef = GRADES_CURRICULUM.find((g) => g.id === grade)!;
  const subjects = getSubjectsForGrade(grade);
  const totalTopics = Object.values(CURRICULUM[grade] ?? {}).reduce(
    (sum, topics) => sum + topics.length,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span>›</span>
        <Link href="/grades" className="hover:text-gray-600">Grades</Link>
        <span>›</span>
        <span className="text-gray-700 font-medium">{gradeDef.label}</span>
      </nav>

      <div className="mb-8 flex items-center gap-4">
        <span className="text-5xl">{gradeDef.emoji}</span>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{gradeDef.label}</h1>
          <p className="text-gray-500 mt-1">
            {gradeDef.ageRange} · {subjects.length} subjects · {totalTopics} topics
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => {
          const topicCount = getTopicsForGradeSubject(grade, subject.id).length;
          return (
            <SubjectTile
              key={subject.id}
              {...subject}
              gradeId={grade}
              gradeLabel={gradeDef.label}
              topicCount={topicCount}
            />
          );
        })}
      </div>
    </div>
  );
}
