import Link from "next/link";
import type { GradeMeta } from "@/lib/types";

export default function GradeCard({ id, label, ageRange }: GradeMeta) {
  return (
    <Link
      href={`/grades/${id}`}
      className="flex items-center justify-between bg-white rounded-xl px-5 py-4 hover:bg-amber-50 transition-colors group"
    >
      <div>
        <p className="font-semibold text-gray-900 text-sm">{label}</p>
        <p className="text-gray-500 text-xs mt-0.5">{ageRange}</p>
      </div>
      <span className="text-gray-400 group-hover:text-cyan-600 transition-colors text-lg font-light">›</span>
    </Link>
  );
}
