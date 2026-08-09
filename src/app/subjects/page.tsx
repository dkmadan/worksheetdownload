import SubjectPageTile from "@/components/ui/SubjectPageTile";
import { SUBJECTS_META } from "@/lib/curriculum";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Subjects | Worksheets Download",
  description:
    "Browse all subjects — Mathematics, English, Science, EVS, GK, Reasoning, Social Studies and more. Free printable worksheets for K–8.",
};

export default function SubjectsPage() {
  const subjects = Object.values(SUBJECTS_META);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Page hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-indigo-100 rounded-full px-4 py-1.5 text-sm text-indigo-600 font-semibold mb-4 shadow-sm">
            📚 Browse All Subjects
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Explore by Subject
          </h1>
          <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto">
            Choose any subject to browse all topics and practice sheets across every grade level.
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            { label: "Subjects", value: `${subjects.length}`, icon: "📖" },
            { label: "Grades", value: "K–8", icon: "🎓" },
            { label: "Topics", value: "750+", icon: "📋" },
            { label: "Practice Sheets", value: "3000+", icon: "✏️" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2 bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-100">
              <span className="text-xl">{stat.icon}</span>
              <div>
                <p className="text-lg font-bold text-gray-900 leading-none">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Subject grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {subjects.map((subject) => (
            <SubjectPageTile key={subject.id} subject={subject} />
          ))}
        </div>
      </div>
    </div>
  );
}
