import Link from "next/link";
import { getSubjectIcon } from "@/components/icons/SubjectIcons";
import { getGradesForSubject, getAllTopicsForSubject } from "@/lib/curriculum";
import type { SubjectDef } from "@/lib/curriculum";

export default function SubjectPageTile({ subject }: { subject: SubjectDef }) {
  const grades = getGradesForSubject(subject.id);
  const totalTopics = getAllTopicsForSubject(subject.id).length;

  let gradeRange = "";
  if (grades.length === 0) gradeRange = "";
  else if (grades.length === 1) gradeRange = grades[0].label;
  else if (grades[0].id === "kindergarten" && grades[grades.length - 1].id === "grade-8")
    gradeRange = "All Grades · K–8";
  else gradeRange = `${grades[0].label} – ${grades[grades.length - 1].label}`;

  return (
    <Link
      href={`/subjects/${subject.id}`}
      className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-200 hover:-translate-y-1 bg-white flex flex-col"
    >
      {/* Gradient header */}
      <div className={`bg-gradient-to-br ${subject.headerGradient} h-28 flex items-center justify-center relative`}>
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md">
          {getSubjectIcon(subject.id, "w-10 h-10")}
        </div>
        <div className="absolute top-3 right-3 bg-black/20 backdrop-blur-sm rounded-full px-2.5 py-0.5 text-white text-xs font-semibold">
          {totalTopics} topics
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-base leading-tight group-hover:text-cyan-700 transition-colors">
          {subject.label}
        </h3>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2 flex-1">{subject.description}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-xs bg-gray-100 rounded-full px-2.5 py-1 text-gray-600 font-medium">
            🎓 {gradeRange}
          </span>
          <span className="text-xs text-gray-400 group-hover:text-cyan-600 transition-colors font-semibold">
            Explore →
          </span>
        </div>
      </div>
    </Link>
  );
}
