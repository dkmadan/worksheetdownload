import type { SVGProps } from "react";

type P = { className?: string } & SVGProps<SVGSVGElement>;

/* ── Kindergarten — colourful ABC blocks ─────────────────────────────── */
export function KindergartenIcon({ className = "w-12 h-12", ...p }: P) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...p}>
      {/* Block A — blue, bottom-left */}
      <rect x="4" y="34" width="24" height="24" rx="4" fill="#3B82F6"/>
      <rect x="4" y="30" width="24" height="7" rx="3" fill="#60A5FA"/>
      <rect x="8" y="38" width="16" height="2" rx="1" fill="white" opacity="0.5"/>
      <text x="16" y="53" textAnchor="middle" fontFamily="Georgia,serif" fontSize="13" fontWeight="bold" fill="white">A</text>
      {/* Block B — rose, bottom-right */}
      <rect x="36" y="34" width="24" height="24" rx="4" fill="#F43F5E"/>
      <rect x="36" y="30" width="24" height="7" rx="3" fill="#FB7185"/>
      <rect x="40" y="38" width="16" height="2" rx="1" fill="white" opacity="0.5"/>
      <text x="48" y="53" textAnchor="middle" fontFamily="Georgia,serif" fontSize="13" fontWeight="bold" fill="white">B</text>
      {/* Block C — amber, top-center */}
      <rect x="20" y="6" width="24" height="24" rx="4" fill="#F59E0B"/>
      <rect x="20" y="2" width="24" height="7" rx="3" fill="#FBBF24"/>
      <rect x="24" y="10" width="16" height="2" rx="1" fill="white" opacity="0.5"/>
      <text x="32" y="25" textAnchor="middle" fontFamily="Georgia,serif" fontSize="13" fontWeight="bold" fill="white">C</text>
    </svg>
  );
}

/* ── Grade 1 — open book with an apple ──────────────────────────────── */
export function Grade1Icon({ className = "w-12 h-12", ...p }: P) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...p}>
      {/* Left page */}
      <path d="M8 16 Q8 12 13 12 L30 14 L30 52 L13 50 Q8 50 8 46 Z" fill="#BFDBFE" stroke="#60A5FA" strokeWidth="1.5"/>
      {/* Right page */}
      <path d="M34 14 L51 12 Q56 12 56 16 L56 46 Q56 50 51 50 L34 52 Z" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="1.5"/>
      {/* Spine */}
      <rect x="29" y="12" width="6" height="40" rx="2" fill="#2563EB"/>
      {/* Lines left */}
      <line x1="13" y1="24" x2="27" y2="24" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="13" y1="30" x2="27" y2="30" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="13" y1="36" x2="24" y2="36" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="13" y1="42" x2="26" y2="42" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Lines right */}
      <line x1="37" y1="24" x2="51" y2="24" stroke="#BFDBFE" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="37" y1="30" x2="51" y2="30" stroke="#BFDBFE" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="37" y1="36" x2="48" y2="36" stroke="#BFDBFE" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="37" y1="42" x2="50" y2="42" stroke="#BFDBFE" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Apple */}
      <circle cx="47" cy="10" r="7" fill="#EF4444"/>
      <path d="M47 3 Q50 0 53 2" stroke="#16A34A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <ellipse cx="44" cy="8" rx="2" ry="3" fill="white" opacity="0.25" transform="rotate(-20 44 8)"/>
    </svg>
  );
}

/* ── Grade 2 — rocket ship ───────────────────────────────────────────── */
export function Grade2Icon({ className = "w-12 h-12", ...p }: P) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...p}>
      {/* Flame outer */}
      <path d="M24 46 Q26 56 32 62 Q38 56 40 46 Z" fill="#FB923C"/>
      {/* Flame inner */}
      <path d="M27 46 Q29 53 32 58 Q35 53 37 46 Z" fill="#FDE68A"/>
      {/* Body */}
      <path d="M20 30 L20 46 L44 46 L44 30 Q44 12 32 6 Q20 12 20 30 Z" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1.5"/>
      {/* Nose cone */}
      <path d="M20 30 Q20 14 32 6 Q44 14 44 30 Z" fill="#3B82F6" stroke="#2563EB" strokeWidth="1"/>
      {/* Left fin */}
      <path d="M20 38 L10 50 L20 47 Z" fill="#60A5FA" stroke="#3B82F6" strokeWidth="1"/>
      {/* Right fin */}
      <path d="M44 38 L54 50 L44 47 Z" fill="#60A5FA" stroke="#3B82F6" strokeWidth="1"/>
      {/* Porthole */}
      <circle cx="32" cy="30" r="7" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2"/>
      <circle cx="32" cy="30" r="4" fill="#7DD3FC"/>
      <ellipse cx="29" cy="28" rx="2" ry="2.5" fill="white" opacity="0.4" transform="rotate(-20 29 28)"/>
      {/* Stars */}
      <circle cx="8" cy="12" r="2" fill="#FCD34D"/>
      <circle cx="54" cy="8" r="2.5" fill="#FCD34D"/>
      <circle cx="58" cy="28" r="1.5" fill="#FDE68A"/>
    </svg>
  );
}

/* ── Grade 3 — friendly lion face ───────────────────────────────────── */
export function Grade3Icon({ className = "w-12 h-12", ...p }: P) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...p}>
      {/* Mane — 8 rounded petals */}
      <ellipse cx="32" cy="11" rx="5" ry="9" fill="#F59E0B"/>
      <ellipse cx="44" cy="15" rx="5" ry="9" fill="#FBBF24" transform="rotate(45 44 15)"/>
      <ellipse cx="48" cy="28" rx="5" ry="9" fill="#F59E0B" transform="rotate(90 48 28)"/>
      <ellipse cx="44" cy="41" rx="5" ry="9" fill="#FBBF24" transform="rotate(135 44 41)"/>
      <ellipse cx="32" cy="46" rx="5" ry="9" fill="#F59E0B"/>
      <ellipse cx="20" cy="41" rx="5" ry="9" fill="#FBBF24" transform="rotate(-135 20 41)"/>
      <ellipse cx="16" cy="28" rx="5" ry="9" fill="#F59E0B" transform="rotate(90 16 28)"/>
      <ellipse cx="20" cy="15" rx="5" ry="9" fill="#FBBF24" transform="rotate(-45 20 15)"/>
      {/* Face */}
      <circle cx="32" cy="28" r="18" fill="#FCD34D" stroke="#F59E0B" strokeWidth="1.5"/>
      {/* Ears */}
      <path d="M16 16 L9 7 L21 13 Z" fill="#FBBF24"/>
      <path d="M16 16 L11 9 L19 13 Z" fill="#FCA5A5"/>
      <path d="M48 16 L55 7 L43 13 Z" fill="#FBBF24"/>
      <path d="M48 16 L53 9 L45 13 Z" fill="#FCA5A5"/>
      {/* Eyes */}
      <ellipse cx="24" cy="25" rx="4.5" ry="5" fill="white"/>
      <ellipse cx="40" cy="25" rx="4.5" ry="5" fill="white"/>
      <circle cx="25" cy="26" r="3" fill="#1E293B"/>
      <circle cx="41" cy="26" r="3" fill="#1E293B"/>
      <circle cx="26" cy="25" r="1.2" fill="white"/>
      <circle cx="42" cy="25" r="1.2" fill="white"/>
      {/* Snout */}
      <ellipse cx="32" cy="35" rx="8" ry="5" fill="#FCA5A5" opacity="0.6"/>
      {/* Nose */}
      <path d="M28 33 L32 30 L36 33 L32 36 Z" fill="#F97316"/>
      {/* Mouth */}
      <path d="M28 36 Q32 41 36 36" stroke="#92400E" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Whisker dots */}
      <circle cx="16" cy="35" r="1.2" fill="#D97706"/>
      <circle cx="20" cy="38" r="1.2" fill="#D97706"/>
      <circle cx="48" cy="35" r="1.2" fill="#D97706"/>
      <circle cx="44" cy="38" r="1.2" fill="#D97706"/>
    </svg>
  );
}

/* ── Grade 4 — telescope with moon ──────────────────────────────────── */
export function Grade4Icon({ className = "w-12 h-12", ...p }: P) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...p}>
      {/* Stars */}
      <circle cx="52" cy="6" r="2.5" fill="#FCD34D"/>
      <circle cx="44" cy="4" r="1.5" fill="#FDE68A"/>
      <circle cx="60" cy="14" r="1.5" fill="#FDE68A"/>
      <path d="M52 2 L52 10 M48 6 L56 6" stroke="#FCD34D" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
      {/* Moon (crescent) */}
      <circle cx="54" cy="18" r="7" fill="#FDE68A"/>
      <circle cx="58" cy="15" r="6" fill="#4C1D95" opacity="0.85"/>
      {/* Telescope tube (rotated ~-30 deg) */}
      <path d="M8 50 L38 22 L46 30 L16 58 Z" fill="#0F766E" rx="4"/>
      <path d="M8 50 L38 22 L42 26 L12 54 Z" fill="#14B8A6"/>
      {/* Objective lens */}
      <circle cx="10" cy="52" r="6" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2"/>
      <circle cx="10" cy="52" r="3" fill="#7DD3FC" opacity="0.6"/>
      {/* Eyepiece */}
      <rect x="40" y="19" width="12" height="6" rx="3" fill="#1E293B"/>
      {/* Focuser knob */}
      <circle cx="30" cy="36" r="3" fill="#064E3B" stroke="#0F766E" strokeWidth="1"/>
      {/* Tripod */}
      <line x1="13" y1="55" x2="4"  y2="64" stroke="#334155" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="13" y1="55" x2="14" y2="64" stroke="#334155" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="13" y1="55" x2="22" y2="62" stroke="#334155" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

/* ── Grade 5 — lightning bolt in storm cloud ─────────────────────────── */
export function Grade5Icon({ className = "w-12 h-12", ...p }: P) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...p}>
      {/* Cloud layers */}
      <ellipse cx="32" cy="26" rx="22" ry="13" fill="#7C3AED"/>
      <ellipse cx="18" cy="28" rx="12" ry="10" fill="#6D28D9"/>
      <ellipse cx="46" cy="28" rx="12" ry="10" fill="#7C3AED"/>
      <ellipse cx="32" cy="32" rx="24" ry="11" fill="#8B5CF6"/>
      {/* Lightning bolt */}
      <path d="M38 8 L22 36 L31 36 L26 58 L46 30 L37 30 L44 8 Z"
        fill="#FCD34D" stroke="#F59E0B" strokeWidth="1.2" strokeLinejoin="round"/>
      {/* Bolt shine */}
      <path d="M38 8 L25 34 L32 34" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.35"/>
      {/* Side sparks */}
      <path d="M50 38 L56 34 M49 42 L55 42" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round"/>
      <path d="M14 38 L8  34 M15 42 L9  42" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round"/>
      {/* Rain drops */}
      <ellipse cx="20" cy="52" rx="2" ry="3" fill="#A5B4FC" opacity="0.7"/>
      <ellipse cx="32" cy="56" rx="2" ry="3" fill="#A5B4FC" opacity="0.7"/>
      <ellipse cx="44" cy="52" rx="2" ry="3" fill="#A5B4FC" opacity="0.7"/>
    </svg>
  );
}

/* ── Grade 6 — earth globe ───────────────────────────────────────────── */
export function Grade6Icon({ className = "w-12 h-12", ...p }: P) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...p}>
      {/* Ocean */}
      <circle cx="32" cy="32" r="27" fill="#0EA5E9"/>
      {/* Continents */}
      <path d="M18 14 Q14 20 11 30 Q14 40 18 44 Q23 46 26 40 Q28 34 26 28 Q28 22 22 16 Z" fill="#22C55E"/>
      <path d="M22 16 Q26 14 28 18 Q24 24 26 28 Z" fill="#16A34A"/>
      <path d="M32 12 Q38 10 43 14 Q46 20 44 28 Q40 30 37 26 Q34 20 32 18 Z" fill="#22C55E"/>
      <path d="M35 30 Q40 28 44 32 Q44 42 39 46 Q34 48 31 44 Q28 38 31 33 Z" fill="#16A34A"/>
      <path d="M44 14 Q52 16 54 26 Q52 30 47 28 Q44 22 44 18 Z" fill="#22C55E"/>
      <path d="M46 32 Q52 32 54 38 Q52 44 48 44 Q44 42 44 38 Z" fill="#16A34A"/>
      {/* Grid overlay */}
      <ellipse cx="32" cy="32" rx="27" ry="11" fill="none" stroke="white" strokeWidth="0.8" opacity="0.25"/>
      <ellipse cx="32" cy="32" rx="27" ry="22" fill="none" stroke="white" strokeWidth="0.8" opacity="0.15"/>
      <line x1="32" y1="5" x2="32" y2="59" stroke="white" strokeWidth="0.8" opacity="0.25"/>
      <line x1="5"  y1="32" x2="59" y2="32" stroke="white" strokeWidth="0.8" opacity="0.25"/>
      {/* Border */}
      <circle cx="32" cy="32" r="27" fill="none" stroke="#0284C7" strokeWidth="2"/>
      {/* Shine */}
      <ellipse cx="21" cy="20" rx="8" ry="5" fill="white" opacity="0.18" transform="rotate(-30 21 20)"/>
    </svg>
  );
}

/* ── Grade 7 — DNA double helix ──────────────────────────────────────── */
export function Grade7Icon({ className = "w-12 h-12", ...p }: P) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...p}>
      {/* Left strand */}
      <path d="M22 4 Q30 14 22 24 Q14 34 22 44 Q30 54 22 62"
        stroke="#6366F1" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      {/* Right strand */}
      <path d="M42 4 Q34 14 42 24 Q50 34 42 44 Q34 54 42 62"
        stroke="#EC4899" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      {/* Rungs */}
      <line x1="22" y1="4"  x2="42" y2="4"  stroke="#C7D2FE" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="16" y1="12" x2="48" y2="12" stroke="#FBCFE8" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="22" y1="20" x2="42" y2="20" stroke="#C7D2FE" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="16" y1="28" x2="48" y2="28" stroke="#FBCFE8" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="22" y1="36" x2="42" y2="36" stroke="#C7D2FE" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="16" y1="44" x2="48" y2="44" stroke="#FBCFE8" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="22" y1="52" x2="42" y2="52" stroke="#C7D2FE" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="16" y1="60" x2="48" y2="60" stroke="#FBCFE8" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Dots at strand endpoints */}
      {[4,20,36,52].map(y => <circle key={y}  cx="22" cy={y} r="3.5" fill="#6366F1"/>)}
      {[4,20,36,52].map(y => <circle key={y}  cx="42" cy={y} r="3.5" fill="#EC4899"/>)}
      {[12,28,44,60].map(y => <circle key={y} cx="16" cy={y} r="2.5" fill="#A5B4FC"/>)}
      {[12,28,44,60].map(y => <circle key={y} cx="48" cy={y} r="2.5" fill="#F9A8D4"/>)}
    </svg>
  );
}

/* ── Grade 8 — gold trophy ───────────────────────────────────────────── */
export function Grade8Icon({ className = "w-12 h-12", ...p }: P) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...p}>
      {/* Confetti */}
      <circle cx="8"  cy="10" r="2.5" fill="#EF4444"/>
      <rect x="52" y="6"  width="4" height="4" rx="1" fill="#22C55E" transform="rotate(20 54 8)"/>
      <circle cx="56" cy="40" r="2" fill="#3B82F6"/>
      <rect x="6"  y="44" width="3" height="3" rx="1" fill="#A855F7" transform="rotate(15 7 45)"/>
      <circle cx="58" cy="18" r="1.5" fill="#FCD34D"/>
      {/* Cup body */}
      <path d="M16 8 L48 8 L46 36 Q44 46 32 48 Q20 46 18 36 Z"
        fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Cup shine */}
      <path d="M20 10 Q25 8 29 12 L26 36 Q24 40 21 38 Z" fill="white" opacity="0.18"/>
      {/* Left handle */}
      <path d="M16 14 Q6 14 6 26 Q6 36 16 36"
        stroke="#D97706" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      {/* Right handle */}
      <path d="M48 14 Q58 14 58 26 Q58 36 48 36"
        stroke="#D97706" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      {/* Star on cup */}
      <path d="M32 16 L34.5 23 L42 23 L36 27.5 L38.5 34.5 L32 30 L25.5 34.5 L28 27.5 L22 23 L29.5 23 Z"
        fill="white" opacity="0.92"/>
      {/* Stem */}
      <rect x="28" y="48" width="8" height="7" rx="2" fill="#D97706"/>
      {/* Base */}
      <rect x="18" y="55" width="28" height="6" rx="3" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5"/>
    </svg>
  );
}

/* ── Dispatcher ────────────────────────────────────────────────────────── */
export function GradeIcon({ gradeId, className }: { gradeId: string; className?: string }) {
  switch (gradeId) {
    case "kindergarten": return <KindergartenIcon className={className} />;
    case "grade-1":      return <Grade1Icon       className={className} />;
    case "grade-2":      return <Grade2Icon       className={className} />;
    case "grade-3":      return <Grade3Icon       className={className} />;
    case "grade-4":      return <Grade4Icon       className={className} />;
    case "grade-5":      return <Grade5Icon       className={className} />;
    case "grade-6":      return <Grade6Icon       className={className} />;
    case "grade-7":      return <Grade7Icon       className={className} />;
    case "grade-8":      return <Grade8Icon       className={className} />;
    default:             return <Grade8Icon       className={className} />;
  }
}
