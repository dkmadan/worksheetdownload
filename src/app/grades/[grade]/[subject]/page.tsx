import { notFound } from "next/navigation";
import Link from "next/link";
import TopicTile from "@/components/ui/TopicTile";
import {
  GRADES_CURRICULUM, SUBJECTS_META,
  getTopicsForGradeSubject, isValidGrade, isValidSubject, CURRICULUM,
} from "@/lib/curriculum";
import type { Metadata } from "next";

export function generateStaticParams() {
  const params: { grade: string; subject: string }[] = [];
  for (const gradeId of Object.keys(CURRICULUM)) {
    for (const subjectId of Object.keys(CURRICULUM[gradeId])) {
      params.push({ grade: gradeId, subject: subjectId });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ grade: string; subject: string }>;
}): Promise<Metadata> {
  const { grade, subject } = await params;
  const gradeDef = GRADES_CURRICULUM.find((g) => g.id === grade);
  const subjectDef = SUBJECTS_META[subject];
  if (!gradeDef || !subjectDef) return {};
  const topics = getTopicsForGradeSubject(grade, subject);
  const sampleTopics = topics.slice(0, 3).join(", ");
  const title = `${subjectDef.label} Worksheets for ${gradeDef.label} — ${topics.length} Topics`;
  const description = `Free printable ${subjectDef.label} worksheets for ${gradeDef.label} (${gradeDef.ageRange}). ${topics.length} topics including ${sampleTopics} and more. Download 4 unique practice sheets per topic with answer keys.`;
  return {
    title,
    description,
    keywords: [
      `${gradeDef.label} ${subjectDef.label} worksheets`,
      `${subjectDef.label} worksheets for ${gradeDef.label}`,
      `free ${subjectDef.label} worksheets ${gradeDef.label}`,
      `printable ${subjectDef.label} practice sheets`,
      ...topics.slice(0, 5).map((t) => `${t} worksheet`),
    ],
    alternates: { canonical: `/grades/${grade}/${subject}` },
    openGraph: {
      title: `${subjectDef.label} Worksheets for ${gradeDef.label} | WorksheetDownload`,
      description,
      url: `/grades/${grade}/${subject}`,
      type: "website",
    },
    twitter: {
      title: `${subjectDef.label} Worksheets for ${gradeDef.label} | WorksheetDownload`,
      description,
    },
  };
}

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ grade: string; subject: string }>;
}) {
  const { grade, subject } = await params;

  if (!isValidGrade(grade) || !isValidSubject(grade, subject)) notFound();

  const gradeDef = GRADES_CURRICULUM.find((g) => g.id === grade)!;
  const subjectDef = SUBJECTS_META[subject]!;
  const topics = getTopicsForGradeSubject(grade, subject);

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
        <span className="text-gray-700 font-medium">{subjectDef.label}</span>
      </nav>

      <div className="mb-8 flex items-center gap-4">
        <span className="text-5xl">{subjectDef.emoji}</span>
        <div>
          <p className="text-sm text-gray-400 font-medium">{gradeDef.label}</p>
          <h1 className="text-3xl font-bold text-gray-900">{subjectDef.label}</h1>
          <p className="text-gray-500 mt-1">{topics.length} topics available</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {topics.map((topic, i) => (
          <TopicTile
            key={topic}
            topic={topic}
            gradeId={grade}
            gradeLabel={gradeDef.label}
            subjectId={subject}
            subjectLabel={subjectDef.label}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
