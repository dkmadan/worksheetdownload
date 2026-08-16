import Link from "next/link";
import { getSubjectIcon } from "@/components/icons/SubjectIcons";
import type { SubjectDef } from "@/lib/curriculum";
import { StudentKid } from "@/components/icons/KidAvatars";

interface SubjectTileProps extends SubjectDef {
  gradeId: string;
  gradeLabel: string;
  topicCount: number;
}

export default function SubjectTile({ id, label, description, color, gradeId, gradeLabel, topicCount }: SubjectTileProps) {
  return (
    <Link
      href={`/grades/${gradeId}/${id}`}
      className={`group relative rounded-2xl border-2 ${color} bg-white hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 p-5 flex flex-col gap-3 overflow-hidden`}
    >
      {/* Kid character — bottom-right decorative */}
      <div className="absolute bottom-0 right-0 opacity-90 pointer-events-none" style={{ width: 52, height: 69 }}>
        <StudentKid
          style={{ width: "100%", height: "100%", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" }}
        />
      </div>

      <div className="flex items-start justify-between">
        {getSubjectIcon(id, "w-12 h-12")}
        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium">
          {topicCount} topics
        </span>
      </div>

      <div className="pr-10">
        <p className="text-xs text-gray-400 font-medium mb-0.5">{gradeLabel}</p>
        <h3 className="font-bold text-gray-900 text-base leading-tight">{label}</h3>
        <p className="text-gray-500 text-xs mt-1 leading-relaxed line-clamp-2">{description}</p>
      </div>

      <span className="text-xs font-semibold text-cyan-600 group-hover:text-cyan-800 transition-colors mt-auto">
        Explore Topics →
      </span>
    </Link>
  );
}
