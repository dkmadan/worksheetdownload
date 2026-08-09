import { notFound } from "next/navigation";
import Link from "next/link";
import TopicTile from "@/components/ui/TopicTile";
import { getSubjectIcon } from "@/components/icons/SubjectIcons";
import {
  SUBJECTS_META,
  CURRICULUM,
  GRADES_CURRICULUM,
  getGradesForSubject,
  getAllTopicsForSubject,
  isValidSubjectGlobal,
} from "@/lib/curriculum";
import type { Metadata } from "next";

export function generateStaticParams() {
  const subjectIds = new Set<string>();
  for (const gradeId of Object.keys(CURRICULUM)) {
    for (const subjectId of Object.keys(CURRICULUM[gradeId])) {
      subjectIds.add(subjectId);
    }
  }
  return Array.from(subjectIds).map((subject) => ({ subject }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string }>;
}): Promise<Metadata> {
  const { subject } = await params;
  const subjectDef = SUBJECTS_META[subject];
  if (!subjectDef) return {};
  return {
    title: `${subjectDef.label} Worksheets | Worksheets Download`,
    description: `All ${subjectDef.label} topics from Kindergarten to Grade 8. ${subjectDef.description} Free printable worksheets.`,
  };
}

export default async function SubjectTopicsPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;

  if (!isValidSubjectGlobal(subject)) notFound();

  const subjectDef = SUBJECTS_META[subject]!;
  const grades = getGradesForSubject(subject);
  const totalTopics = getAllTopicsForSubject(subject).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Gradient hero */}
      <div className={`bg-gradient-to-br ${subjectDef.headerGradient}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/subjects" className="hover:text-white transition-colors">Subjects</Link>
            <span>›</span>
            <span className="text-white font-semibold">{subjectDef.label}</span>
          </nav>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* Icon */}
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              {getSubjectIcon(subject, "w-12 h-12")}
            </div>

            <div className="text-white flex-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">{subjectDef.label}</h1>
              <p className="mt-1.5 text-white/80 text-sm max-w-lg">{subjectDef.description}</p>
              <div className="flex flex-wrap items-center gap-2.5 mt-3">
                <span className="bg-white/20 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                  📋 {totalTopics} topics
                </span>
                <span className="bg-white/20 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                  🎓 {grades.length} grade{grades.length !== 1 ? "s" : ""}
                </span>
                <span className="bg-white/20 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                  ✏️ {totalTopics * 4} practice sheets
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topics grouped by grade */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {grades.map((grade) => {
          const topics = CURRICULUM[grade.id]?.[subject] ?? [];
          return (
            <section key={grade.id}>
              {/* Grade section header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${grade.gradient} flex items-center justify-center text-xl shadow-sm flex-shrink-0`}
                >
                  {grade.emoji}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900">{grade.label}</h2>
                  <p className="text-xs text-gray-400">{grade.ageRange} · {topics.length} topics</p>
                </div>
                <Link
                  href={`/grades/${grade.id}/${subject}`}
                  className="text-xs text-cyan-600 hover:text-cyan-700 font-semibold bg-cyan-50 hover:bg-cyan-100 rounded-full px-3 py-1.5 transition-colors"
                >
                  View subject page →
                </Link>
              </div>

              {/* Topic tiles grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {topics.map((topic, idx) => (
                  <TopicTile
                    key={`${grade.id}-${topic}`}
                    topic={topic}
                    gradeId={grade.id}
                    gradeLabel={grade.label}
                    subjectId={subject}
                    subjectLabel={subjectDef.label}
                    index={idx}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
          <p className="text-gray-500 text-sm">
            Looking for a different subject?{" "}
            <Link href="/subjects" className="text-cyan-600 font-semibold hover:text-cyan-700">
              Browse all subjects →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
