import type { Metadata } from "next";
import { GRADES_CURRICULUM, SUBJECTS_META, CURRICULUM } from "@/lib/curriculum";
import { TECH_DATA } from "@/lib/technologies";
import QuizConfig from "@/components/quiz/QuizConfig";

export const metadata: Metadata = {
  title: "Quiz — Test Your Knowledge",
  description:
    "Take a free 10-question multiple-choice quiz on any Grade & Subject or Technology. Instant results with explanations.",
  alternates: { canonical: "/quiz" },
};

export default function QuizPage() {
  const gradeOptions = GRADES_CURRICULUM.map((g) => ({
    id: g.id,
    label: g.label,
    emoji: g.emoji,
  }));

  const subjectsPerGrade: Record<string, { id: string; label: string; emoji: string }[]> = {};
  for (const grade of GRADES_CURRICULUM) {
    const gradeSubjects = CURRICULUM[grade.id] ?? {};
    subjectsPerGrade[grade.id] = Object.keys(gradeSubjects).map((subId) => ({
      id: subId,
      label: SUBJECTS_META[subId]?.label ?? subId,
      emoji: SUBJECTS_META[subId]?.emoji ?? "📚",
    }));
  }

  const techCategories = TECH_DATA.map((cat) => ({
    slug: cat.slug,
    label: cat.label,
    icon: cat.icon,
    items: cat.subcategories.flatMap((sub) =>
      sub.items.map((it) => ({ slug: it.slug, name: it.name }))
    ),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-14 sm:py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
            🧠 Knowledge Quiz Engine
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
            Test Your Knowledge
          </h1>
          <p className="text-blue-100 text-lg max-w-md mx-auto leading-relaxed">
            10 multiple-choice questions. Pick any grade, subject, or technology — get instant results with full explanations.
          </p>

          <div className="flex justify-center gap-8 mt-10 flex-wrap">
            {[
              { n: "10", label: "Questions" },
              { n: "MCQ", label: "Format" },
              { n: "⚡", label: "Instant Results" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black text-white">{s.n}</div>
                <div className="text-blue-200 text-xs font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Config card floats up over the hero */}
      <div className="max-w-xl mx-auto px-4 -mt-10 pb-16">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-5">Configure Your Quiz</h2>
          <QuizConfig
            gradeOptions={gradeOptions}
            subjectsPerGrade={subjectsPerGrade}
            techCategories={techCategories}
          />
        </div>

        {/* How it works */}
        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
          {[
            { icon: "🎯", title: "Pick a Topic", desc: "Grade & Subject or a Technology" },
            { icon: "📝", title: "Answer 10 Questions", desc: "Navigate at your own pace" },
            { icon: "📊", title: "See Results", desc: "Score + full explanations" },
          ].map((t) => (
            <div key={t.title} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm text-center">
              <div className="text-2xl mb-1.5">{t.icon}</div>
              <div className="text-xs font-bold text-gray-800 leading-snug">{t.title}</div>
              <div className="text-xs text-gray-400 mt-1 leading-snug">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
