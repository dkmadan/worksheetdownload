import Link from "next/link";
import type { GradeDef } from "@/lib/curriculum";
import { GradeIcon } from "@/components/icons/GradeIcons";

export default function GradeTile({ id, label, ageRange, gradient }: GradeDef) {
  const gradeNum = id === "kindergarten" ? "KG" : id.replace("grade-", "");

  return (
    <Link
      href={`/grades/${id}`}
      className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1.5 flex flex-col bg-white border border-white/60"
    >
      {/* Gradient header */}
      <div className={`bg-gradient-to-br ${gradient} relative h-44 flex items-center justify-center overflow-hidden`}>
        {/* Decorative floating circles */}
        <div className="absolute top-3 right-4 w-14 h-14 rounded-full bg-white/10" />
        <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/10" />
        <div className="absolute top-10 left-8 w-6 h-6 rounded-full bg-white/15" />
        <div className="absolute bottom-6 right-10 w-5 h-5 rounded-full bg-white/10" />
        <div className="absolute top-4 left-14 w-3 h-3 rounded-full bg-white/20" />

        {/* Grade number badge */}
        <div className="absolute top-3 left-3 bg-black/25 backdrop-blur-sm rounded-full w-9 h-9 flex items-center justify-center">
          <span className="text-white text-xs font-black tracking-tight">{gradeNum}</span>
        </div>

        {/* Icon in white rounded card */}
        <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-200">
          <GradeIcon gradeId={id} className="w-14 h-14" />
        </div>
      </div>

      {/* Label strip */}
      <div className="px-4 py-3.5 flex items-center justify-between bg-white">
        <div>
          <p className="font-bold text-gray-900 text-sm leading-snug">{label}</p>
          <p className="text-gray-400 text-xs mt-0.5">{ageRange}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-cyan-100 flex items-center justify-center transition-colors flex-shrink-0">
          <span className="text-gray-400 group-hover:text-cyan-600 transition-colors text-lg leading-none">›</span>
        </div>
      </div>
    </Link>
  );
}
