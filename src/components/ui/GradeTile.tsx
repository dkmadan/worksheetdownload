import Link from "next/link";
import type { GradeDef } from "@/lib/curriculum";

export default function GradeTile({ id, label, ageRange, emoji, gradient }: GradeDef) {
  return (
    <Link
      href={`/grades/${id}`}
      className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex flex-col"
    >
      {/* Gradient top panel */}
      <div className={`bg-gradient-to-br ${gradient} flex items-center justify-center py-8`}>
        <span className="text-5xl drop-shadow">{emoji}</span>
      </div>

      {/* Label strip */}
      <div className="bg-white px-4 py-3 flex items-center justify-between">
        <div>
          <p className="font-bold text-gray-900 text-sm">{label}</p>
          <p className="text-gray-400 text-xs mt-0.5">{ageRange}</p>
        </div>
        <span className="text-gray-300 group-hover:text-cyan-500 transition-colors text-xl font-light">›</span>
      </div>
    </Link>
  );
}
