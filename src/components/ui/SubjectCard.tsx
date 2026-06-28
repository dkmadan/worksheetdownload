import Link from "next/link";
import type { SubjectMeta } from "@/lib/types";

export default function SubjectCard({ id, label, emoji, description }: SubjectMeta) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col gap-3">
      <span className="text-3xl">{emoji}</span>
      <div>
        <h3 className="font-semibold text-gray-900 text-base">{label}</h3>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">{description}</p>
      </div>
      <Link
        href={`/worksheets/${id}`}
        className="text-sm font-medium text-cyan-600 hover:text-cyan-800 transition-colors mt-auto"
      >
        Browse {label} →
      </Link>
    </div>
  );
}
