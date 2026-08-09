import Link from "next/link";
import { slugifyTopic } from "@/lib/curriculum";

interface TopicTileProps {
  topic: string;
  gradeId: string;
  gradeLabel: string;
  subjectId: string;
  subjectLabel: string;
  index: number;
}

const TOPIC_COLORS = [
  "border-blue-200 hover:border-blue-400 hover:bg-blue-50",
  "border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50",
  "border-amber-200 hover:border-amber-400 hover:bg-amber-50",
  "border-purple-200 hover:border-purple-400 hover:bg-purple-50",
  "border-rose-200 hover:border-rose-400 hover:bg-rose-50",
  "border-cyan-200 hover:border-cyan-400 hover:bg-cyan-50",
];

export default function TopicTile({ topic, gradeId, gradeLabel, subjectId, subjectLabel, index }: TopicTileProps) {
  const slug = slugifyTopic(topic);
  const color = TOPIC_COLORS[index % TOPIC_COLORS.length];

  return (
    <Link
      href={`/grades/${gradeId}/${subjectId}/${slug}`}
      className={`group rounded-xl border-2 bg-white ${color} transition-all duration-150 p-4 flex items-center gap-4 hover:shadow-sm`}
    >
      {/* Worksheet icon */}
      <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shadow-sm">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="2" width="16" height="20" rx="2" fill="white" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M17 2 L20 2 L20 6 Z" fill="#E2E8F0" />
          <path d="M17 2 L20 6 L17 6 Z" fill="white" stroke="#CBD5E1" strokeWidth="0.5" />
          <line x1="7" y1="10" x2="17" y2="10" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="7" y1="13" x2="15" y2="13" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="7" y1="16" x2="16" y2="16" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
          <g transform="rotate(-35 22 20)">
            <rect x="20" y="14" width="4" height="7" rx="0.5" fill="#FCD34D" />
            <rect x="20" y="13" width="4" height="1.5" rx="0.5" fill="#FB7185" />
            <path d="M20 21 L24 21 L22 24 Z" fill="#F5E6C8" />
            <path d="M20.8 21 L23.2 21 L22 23 Z" fill="#374151" />
          </g>
        </svg>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-400 font-medium truncate">{gradeLabel} · {subjectLabel}</p>
        <h3 className="font-semibold text-gray-900 text-sm mt-0.5 group-hover:text-cyan-700 transition-colors">{topic}</h3>
      </div>

      <span className="text-gray-300 group-hover:text-cyan-500 transition-colors flex-shrink-0">›</span>
    </Link>
  );
}
