import Link from "next/link";
import type { GradeDef } from "@/lib/curriculum";
import { GradeIcon } from "@/components/icons/GradeIcons";

// Mesh gradient patterns — organic radial blobs, rich but not neon, on near-black base
const GRADE_MESH: Record<string, string> = {
  kindergarten:
    "radial-gradient(ellipse 80% 60% at 20% 25%, rgba(244,114,182,0.95) 0%, transparent 62%)," +
    "radial-gradient(ellipse 55% 70% at 78% 72%, rgba(217,70,239,0.90) 0%, transparent 60%)," +
    "radial-gradient(ellipse 45% 50% at 50% 45%, rgba(249,168,212,0.38) 0%, transparent 55%)," +
    "radial-gradient(ellipse 40% 40% at 28% 75%, rgba(192,38,211,0.80) 0%, transparent 50%)," +
    "linear-gradient(148deg,#86198f,#9d174d)",

  "grade-1":
    "radial-gradient(ellipse 80% 60% at 20% 25%, rgba(96,165,250,0.95) 0%, transparent 62%)," +
    "radial-gradient(ellipse 55% 70% at 78% 72%, rgba(34,211,238,0.90) 0%, transparent 60%)," +
    "radial-gradient(ellipse 45% 50% at 50% 45%, rgba(191,219,254,0.35) 0%, transparent 55%)," +
    "radial-gradient(ellipse 40% 40% at 28% 75%, rgba(14,165,233,0.80) 0%, transparent 50%)," +
    "linear-gradient(148deg,#1e3a8a,#0e6490)",

  "grade-2":
    "radial-gradient(ellipse 80% 60% at 20% 25%, rgba(52,211,153,0.95) 0%, transparent 62%)," +
    "radial-gradient(ellipse 55% 70% at 78% 72%, rgba(45,212,191,0.90) 0%, transparent 60%)," +
    "radial-gradient(ellipse 45% 50% at 50% 45%, rgba(167,243,208,0.35) 0%, transparent 55%)," +
    "radial-gradient(ellipse 40% 40% at 28% 75%, rgba(13,148,136,0.80) 0%, transparent 50%)," +
    "linear-gradient(148deg,#065f46,#0f766e)",

  "grade-3":
    "radial-gradient(ellipse 80% 60% at 20% 25%, rgba(251,146,60,0.95) 0%, transparent 62%)," +
    "radial-gradient(ellipse 55% 70% at 78% 72%, rgba(251,191,36,0.90) 0%, transparent 60%)," +
    "radial-gradient(ellipse 45% 50% at 50% 45%, rgba(253,230,138,0.35) 0%, transparent 55%)," +
    "radial-gradient(ellipse 40% 40% at 28% 75%, rgba(234,88,12,0.80) 0%, transparent 50%)," +
    "linear-gradient(148deg,#92400e,#b45309)",

  "grade-4":
    "radial-gradient(ellipse 80% 60% at 20% 25%, rgba(45,212,191,0.95) 0%, transparent 62%)," +
    "radial-gradient(ellipse 55% 70% at 78% 72%, rgba(56,189,248,0.90) 0%, transparent 60%)," +
    "radial-gradient(ellipse 45% 50% at 50% 45%, rgba(153,246,228,0.35) 0%, transparent 55%)," +
    "radial-gradient(ellipse 40% 40% at 28% 75%, rgba(14,165,233,0.80) 0%, transparent 50%)," +
    "linear-gradient(148deg,#0f766e,#0369a1)",

  "grade-5":
    "radial-gradient(ellipse 80% 60% at 20% 25%, rgba(167,139,250,0.95) 0%, transparent 62%)," +
    "radial-gradient(ellipse 55% 70% at 78% 72%, rgba(129,140,248,0.90) 0%, transparent 60%)," +
    "radial-gradient(ellipse 45% 50% at 50% 45%, rgba(221,214,254,0.35) 0%, transparent 55%)," +
    "radial-gradient(ellipse 40% 40% at 28% 75%, rgba(99,102,241,0.80) 0%, transparent 50%)," +
    "linear-gradient(148deg,#4c1d95,#3730a3)",

  "grade-6":
    "radial-gradient(ellipse 80% 60% at 20% 25%, rgba(248,113,113,0.95) 0%, transparent 62%)," +
    "radial-gradient(ellipse 55% 70% at 78% 72%, rgba(249,115,22,0.90) 0%, transparent 60%)," +
    "radial-gradient(ellipse 45% 50% at 50% 45%, rgba(254,202,202,0.32) 0%, transparent 55%)," +
    "radial-gradient(ellipse 40% 40% at 28% 75%, rgba(220,38,38,0.80) 0%, transparent 50%)," +
    "linear-gradient(148deg,#991b1b,#c2410c)",

  "grade-7":
    "radial-gradient(ellipse 80% 60% at 20% 25%, rgba(129,140,248,0.95) 0%, transparent 62%)," +
    "radial-gradient(ellipse 55% 70% at 78% 72%, rgba(96,165,250,0.90) 0%, transparent 60%)," +
    "radial-gradient(ellipse 45% 50% at 50% 45%, rgba(199,210,254,0.35) 0%, transparent 55%)," +
    "radial-gradient(ellipse 40% 40% at 28% 75%, rgba(59,130,246,0.80) 0%, transparent 50%)," +
    "linear-gradient(148deg,#3730a3,#1d4ed8)",

  "grade-8":
    "radial-gradient(ellipse 80% 60% at 20% 25%, rgba(148,163,184,0.95) 0%, transparent 62%)," +
    "radial-gradient(ellipse 55% 70% at 78% 72%, rgba(100,116,139,0.90) 0%, transparent 60%)," +
    "radial-gradient(ellipse 45% 50% at 50% 45%, rgba(226,232,240,0.35) 0%, transparent 55%)," +
    "radial-gradient(ellipse 40% 40% at 28% 75%, rgba(71,85,105,0.80) 0%, transparent 50%)," +
    "linear-gradient(148deg,#334155,#475569)",
};

export default function GradeTile({ id, label, ageRange }: GradeDef) {
  const gradeNum = id === "kindergarten" ? "KG" : id.replace("grade-", "");
  const bg = GRADE_MESH[id] ?? GRADE_MESH["grade-8"];

  return (
    <Link
      href={`/grades/${id}`}
      className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1.5 flex flex-col bg-white border border-slate-100"
    >
      {/* Mesh gradient header */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ background: bg }}
      >
        {/* SVG grain texture */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.12] mix-blend-soft-light"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <filter id={`grade-noise-${id}`}>
              <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter={`url(#grade-noise-${id})`} />
        </svg>

        {/* Radial vignette — subtle only */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.20) 100%)" }}
        />

        {/* Decorative ring accents */}
        <div className="absolute top-3 right-4 w-14 h-14 rounded-full border border-white/10" />
        <div className="absolute bottom-5 left-5 w-10 h-10 rounded-full border border-white/8" />
        <div className="absolute top-12 left-10 w-5 h-5 rounded-full bg-white/8" />

        {/* Grade number badge */}
        <div className="absolute top-3 left-3 bg-black/30 backdrop-blur-sm rounded-full w-9 h-9 flex items-center justify-center border border-white/10">
          <span className="text-white text-xs font-black tracking-tight">{gradeNum}</span>
        </div>

        {/* Icon in white card */}
        <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-200 relative z-10">
          <GradeIcon gradeId={id} className="w-14 h-14" />
        </div>

        {/* Top-edge light reflection */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Label strip */}
      <div className="px-4 py-3.5 flex items-center justify-between bg-white">
        <div>
          <p className="font-bold text-gray-900 text-sm leading-snug">{label}</p>
          <p className="text-gray-400 text-xs mt-0.5">{ageRange}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-violet-100 flex items-center justify-center transition-colors flex-shrink-0">
          <span className="text-gray-400 group-hover:text-violet-600 transition-colors text-lg leading-none">›</span>
        </div>
      </div>
    </Link>
  );
}
