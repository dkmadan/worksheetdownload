import Link from "next/link";
import { SubjectKid } from "@/components/icons/SubjectKidAvatars";
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
      className="group rounded-2xl overflow-hidden border border-[#E4E0D4] hover:border-[#1E3A8A] shadow-2xs hover:shadow-xl transition-all duration-200 hover:-translate-y-1 bg-white flex flex-col"
    >
      {/* Gradient header */}
      <div className={`bg-gradient-to-br ${subject.headerGradient} h-28 flex items-center justify-center relative overflow-hidden`}>
        <SubjectKid
          subjectId={subject.id}
          style={{ width: 88, height: 88, filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.25))" }}
          className="group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-3 right-3 bg-black/25 backdrop-blur-sm rounded-full px-2.5 py-0.5 text-white text-xs font-semibold border border-white/10">
          {totalTopics} topics
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-[#0F1E4A] text-base leading-tight group-hover:text-[#1E3A8A] transition-colors">
          {subject.label}
        </h3>
        <p className="text-xs text-[#5B6072] mt-1 line-clamp-2 flex-1">{subject.description}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-xs bg-[#FAF9F5] border border-[#E4E0D4] rounded-full px-2.5 py-1 text-[#5B6072] font-medium">
            🎓 {gradeRange}
          </span>
          <span className="text-xs text-[#1E3A8A] group-hover:text-[#0F1E4A] transition-colors font-semibold">
            Explore →
          </span>
        </div>
      </div>
    </Link>
  );
}
