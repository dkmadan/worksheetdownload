/**
 * Subject-specific kid avatars — self-contained circular icon tiles.
 * viewBox="0 0 100 100". Designs from gemini-code-1786898444045.html.
 * 13 subjects: Math, English, EnglishLanguage, Science, EVS, GeneralAwareness,
 *   SocialStudies, GK, Reasoning, Shapes, Coloring/Creative, Logic, SocialEmotional.
 */

import React from "react";

interface KidProps {
  className?: string;
  style?: React.CSSProperties;
}

// ── Mathematics — glasses, dark hair, blue shirt · blackboard + triangle ──────
export function MathKid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#EFF6FF"/>
      <circle cx="50" cy="50" r="42" fill="#DBEAFE"/>
      <ellipse cx="50" cy="45" rx="22" ry="20" fill="#451A03"/>
      <ellipse cx="50" cy="53" rx="19" ry="18" fill="#FFDFC4"/>
      <path d="M30 43 Q50 38 70 43 Q50 34 30 43 Z" fill="#451A03"/>
      <circle cx="42" cy="51" r="6" fill="none" stroke="#2563EB" strokeWidth="2"/>
      <circle cx="58" cy="51" r="6" fill="none" stroke="#2563EB" strokeWidth="2"/>
      <line x1="48" y1="51" x2="52" y2="51" stroke="#2563EB" strokeWidth="2"/>
      <circle cx="42" cy="51" r="2" fill="#1E293B"/>
      <circle cx="58" cy="51" r="2" fill="#1E293B"/>
      <path d="M45 61 Q50 65 55 61" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 71 Q50 67 68 71 L74 92 L26 92 Z" fill="#3B82F6"/>
      {/* Blackboard */}
      <g transform="translate(64, 42) rotate(8)">
        <rect width="22" height="18" rx="2" fill="#064E3B" stroke="#D97706" strokeWidth="1.5"/>
        <text x="11" y="12" fontSize="7" fontFamily="monospace" fontWeight="900" fill="#FEF08A" textAnchor="middle">1+2</text>
      </g>
      {/* Triangle */}
      <g transform="translate(10, 50)">
        <polygon points="4,18 16,18 4,4" fill="#F59E0B" stroke="#D97706" strokeWidth="1"/>
      </g>
      <rect x="22" y="78" width="56" height="15" rx="7.5" fill="#2563EB"/>
      <text x="50" y="89" fontSize="8.5" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">MATH</text>
    </svg>
  );
}

// ── English — purple hair, pink shirt · ABC reading book ──────────────────────
export function EnglishKid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#FDF2F8"/>
      <circle cx="50" cy="50" r="42" fill="#FCE7F3"/>
      <ellipse cx="50" cy="48" rx="23" ry="21" fill="#701A75"/>
      <ellipse cx="50" cy="54" rx="19" ry="18" fill="#FCD34D"/>
      <path d="M30 45 Q50 40 70 45 Q50 35 30 45 Z" fill="#701A75"/>
      <circle cx="43" cy="52" r="2.5" fill="#1E293B"/>
      <circle cx="57" cy="52" r="2.5" fill="#1E293B"/>
      <path d="M44 59 Q50 65 56 59" fill="none" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M31 72 Q50 68 69 72 L75 92 L25 92 Z" fill="#DB2777"/>
      {/* Reading book */}
      <g transform="translate(62, 50) rotate(12)">
        <path d="M2 4 Q12 2 22 6 L22 22 Q12 18 2 20 Z" fill="#3B82F6"/>
        <path d="M4 6 Q12 4 20 8 L20 20 Q12 17 4 18 Z" fill="#FFFFFF"/>
        <text x="12" y="14" fontSize="5.5" fontFamily="sans-serif" fontWeight="900" fill="#1E293B" textAnchor="middle">ABC</text>
      </g>
      <rect x="22" y="78" width="56" height="15" rx="7.5" fill="#DB2777"/>
      <text x="50" y="89" fontSize="8.5" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">ENGLISH</text>
    </svg>
  );
}

// ── English / Language (KG) — brown hair, amber shirt · stacked books + pencil ─
export function KgSubjectKid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#FFFBEB"/>
      <circle cx="50" cy="50" r="42" fill="#FEF3C7"/>
      <ellipse cx="50" cy="46" rx="22" ry="20" fill="#78350F"/>
      <ellipse cx="50" cy="53" rx="19" ry="18" fill="#FFDFC4"/>
      <path d="M31 44 Q50 38 69 44 Q50 35 31 44 Z" fill="#78350F"/>
      <circle cx="43" cy="51" r="2.5" fill="#1E293B"/>
      <circle cx="57" cy="51" r="2.5" fill="#1E293B"/>
      <path d="M45 58 Q50 63 55 58" fill="none" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M32 71 Q50 67 68 71 L74 92 L26 92 Z" fill="#F59E0B"/>
      {/* Stacked books */}
      <g transform="translate(66, 44)">
        <rect x="2"  y="16" width="20" height="5" rx="1.5" fill="#EF4444"/>
        <rect x="4"  y="10" width="18" height="5" rx="1.5" fill="#10B981"/>
        <rect x="6"  y="4"  width="16" height="5" rx="1.5" fill="#3B82F6"/>
      </g>
      {/* Pencil */}
      <g transform="translate(10, 46) rotate(-20)">
        <polygon points="4,16 6,1 9,1 11,16" fill="#FCD34D"/>
        <polygon points="6,1 7.5,-3 9,1" fill="#1E293B"/>
      </g>
      <rect x="18" y="78" width="64" height="15" rx="7.5" fill="#D97706"/>
      <text x="50" y="89" fontSize="8" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">LANGUAGE</text>
    </svg>
  );
}

// ── Science — dark hair, lab goggles, lab coat · flask + atom ─────────────────
export function ScienceKid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#F0FDFA"/>
      <circle cx="50" cy="50" r="42" fill="#CCFBF1"/>
      <ellipse cx="50" cy="46" rx="22" ry="20" fill="#1E293B"/>
      <ellipse cx="50" cy="53" rx="19" ry="18" fill="#FFDFC4"/>
      {/* Lab goggles */}
      <rect x="30" y="45" width="40" height="12" rx="6" fill="#06B6D4" opacity={0.8}/>
      <circle cx="42" cy="51" r="3" fill="#FFFFFF"/>
      <circle cx="58" cy="51" r="3" fill="#FFFFFF"/>
      <path d="M45 61 Q50 65 55 61" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinecap="round"/>
      {/* Lab coat */}
      <path d="M32 71 Q50 67 68 71 L74 92 L26 92 Z" fill="#F8FAFC"/>
      <polygon points="43,71 50,80 57,71" fill="#0D9488"/>
      {/* Flask */}
      <g transform="translate(68, 48)">
        <path d="M8 2 L12 2 L12 8 L18 18 Q19 20 17 21 L3 21 Q1 20 2 18 L8 8 Z" fill="#14B8A6"/>
        <circle cx="10" cy="14" r="1.5" fill="#FFFFFF"/>
        <circle cx="7"  cy="17" r="1"   fill="#FFFFFF"/>
      </g>
      {/* Atom */}
      <g transform="translate(10, 44)">
        <ellipse cx="10" cy="10" rx="8" ry="3" fill="none" stroke="#0D9488" strokeWidth="1.2" transform="rotate(30 10 10)"/>
        <ellipse cx="10" cy="10" rx="8" ry="3" fill="none" stroke="#0D9488" strokeWidth="1.2" transform="rotate(-30 10 10)"/>
        <circle cx="10" cy="10" r="2" fill="#F59E0B"/>
      </g>
      <rect x="22" y="78" width="56" height="15" rx="7.5" fill="#0D9488"/>
      <text x="50" y="89" fontSize="8.5" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">SCIENCE</text>
    </svg>
  );
}

// ── EVS — green hair buns, green shirt · plant sprout in pot ──────────────────
export function EvsKid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#F0FDF4"/>
      <circle cx="50" cy="50" r="42" fill="#DCFCE7"/>
      <circle cx="28" cy="32" r="9" fill="#15803D"/>
      <circle cx="72" cy="32" r="9" fill="#15803D"/>
      <ellipse cx="50" cy="46" rx="22" ry="20" fill="#15803D"/>
      <ellipse cx="50" cy="53" rx="19" ry="18" fill="#FCD34D"/>
      <path d="M31 47 Q50 38 69 47 Z" fill="#15803D"/>
      <circle cx="43" cy="51" r="2.5" fill="#14532D"/>
      <circle cx="57" cy="51" r="2.5" fill="#14532D"/>
      <path d="M45 58 Q50 63 55 58" fill="none" stroke="#14532D" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M32 71 Q50 67 68 71 L74 92 L26 92 Z" fill="#22C55E"/>
      {/* Plant sprout in pot */}
      <g transform="translate(68, 48)">
        <path d="M4 12 L16 12 L14 20 L6 20 Z" fill="#B45309"/>
        <path d="M10 12 L10 5 Q14 2 17 6 Q14 9 10 7" fill="#4ADE80"/>
        <path d="M10 8 Q6 4 3 8 Q6 11 10 9" fill="#22C55E"/>
      </g>
      <rect x="26" y="78" width="48" height="15" rx="7.5" fill="#16A34A"/>
      <text x="50" y="89" fontSize="8.5" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">EVS</text>
    </svg>
  );
}

// ── General Awareness / EVS — green cap, green shirt · leaf + sun ─────────────
export function GeneralAwarenessKid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#ECFDF5"/>
      <circle cx="50" cy="50" r="42" fill="#D1FAE5"/>
      {/* Cap */}
      <path d="M26 40 C26 26, 74 26, 74 40 Z" fill="#15803D"/>
      <ellipse cx="50" cy="52" rx="19" ry="18" fill="#F7D0B4"/>
      <circle cx="43" cy="50" r="2.5" fill="#1E293B"/>
      <circle cx="57" cy="50" r="2.5" fill="#1E293B"/>
      <path d="M44 57 Q50 64 56 57" fill="#1E293B"/>
      <path d="M32 70 Q50 66 68 70 L74 92 L26 92 Z" fill="#047857"/>
      {/* Leaf */}
      <g transform="translate(68, 45) rotate(15)">
        <path d="M2 18 Q12 18 18 4 Q4 10 2 18 Z" fill="#10B981"/>
        <line x1="2" y1="18" x2="14" y2="7" stroke="#065F46" strokeWidth="1.5"/>
      </g>
      {/* Sun */}
      <g transform="translate(12, 42)">
        <circle cx="8" cy="8" r="6" fill="#FBBF24"/>
      </g>
      <rect x="16" y="78" width="68" height="15" rx="7.5" fill="#047857"/>
      <text x="50" y="89" fontSize="8" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">GEN AWARE</text>
    </svg>
  );
}

// ── Social Studies — dark hair, blue shirt · map + compass ────────────────────
export function SocialStudiesKid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#F0F9FF"/>
      <circle cx="50" cy="50" r="42" fill="#E0F2FE"/>
      <ellipse cx="50" cy="46" rx="22" ry="20" fill="#334155"/>
      <ellipse cx="50" cy="53" rx="19" ry="18" fill="#FFDFC4"/>
      <path d="M31 44 Q50 38 69 44 Z" fill="#334155"/>
      <circle cx="43" cy="51" r="2.5" fill="#1E293B"/>
      <circle cx="57" cy="51" r="2.5" fill="#1E293B"/>
      <path d="M45 58 Q50 63 55 58" fill="none" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M32 71 Q50 67 68 71 L74 92 L26 92 Z" fill="#0284C7"/>
      {/* Map */}
      <g transform="translate(66, 48) rotate(10)">
        <rect width="20" height="16" rx="2" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.2"/>
        <path d="M4 8 Q10 4 16 10" fill="none" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="2 1"/>
      </g>
      {/* Compass */}
      <g transform="translate(10, 48)">
        <circle cx="9" cy="9" r="8" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5"/>
        <polygon points="9,3 12,9 9,15 6,9" fill="#EF4444"/>
      </g>
      <rect x="18" y="78" width="64" height="15" rx="7.5" fill="#0369A1"/>
      <text x="50" y="89" fontSize="8" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">SOC STUDIES</text>
    </svg>
  );
}

// ── General Knowledge — dark hair, blue shirt · globe ─────────────────────────
export function GkKid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#EFF6FF"/>
      <circle cx="50" cy="50" r="42" fill="#DBEAFE"/>
      <ellipse cx="50" cy="46" rx="23" ry="20" fill="#1E293B"/>
      <ellipse cx="50" cy="53" rx="19" ry="18" fill="#FCD34D"/>
      <path d="M31 46 Q50 40 69 46 Z" fill="#1E293B"/>
      <circle cx="43" cy="51" r="2.5" fill="#1E293B"/>
      <circle cx="57" cy="51" r="2.5" fill="#1E293B"/>
      <path d="M45 58 Q50 63 55 58" fill="none" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M32 71 Q50 67 68 71 L74 92 L26 92 Z" fill="#2563EB"/>
      {/* Globe */}
      <g transform="translate(68, 44)">
        <circle cx="12" cy="12" r="10" fill="#38BDF8"/>
        <path d="M5 10 Q10 8 13 11 Q17 9 19 13 Q15 17 11 16 Z" fill="#4ADE80"/>
        <path d="M2 12 A10 10 0 0 0 22 12" fill="none" stroke="#1E40AF" strokeWidth="1.8"/>
        <line x1="12" y1="22" x2="12" y2="26" stroke="#1E40AF" strokeWidth="1.8"/>
        <line x1="7"  y1="26" x2="17" y2="26" stroke="#1E40AF" strokeWidth="1.8" strokeLinecap="round"/>
      </g>
      <rect x="24" y="78" width="52" height="15" rx="7.5" fill="#1D4ED8"/>
      <text x="50" y="89" fontSize="8.5" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">GK</text>
    </svg>
  );
}

// ── Reasoning — purple hair, purple shirt · brain + magnifier ─────────────────
export function ReasoningKid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#FDF2F8"/>
      <circle cx="50" cy="50" r="42" fill="#FCE7F3"/>
      <ellipse cx="50" cy="45" rx="22" ry="20" fill="#4C1D95"/>
      <ellipse cx="50" cy="53" rx="19" ry="18" fill="#FFDFC4"/>
      <path d="M30 43 Q50 38 70 43 Z" fill="#4C1D95"/>
      <circle cx="43" cy="51" r="2.5" fill="#1E293B"/>
      <circle cx="57" cy="51" r="2.5" fill="#1E293B"/>
      <path d="M45 59 Q50 64 55 59" fill="none" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M32 71 Q50 67 68 71 L74 92 L26 92 Z" fill="#9333EA"/>
      {/* Brain */}
      <g transform="translate(68, 42)">
        <ellipse cx="10" cy="8" rx="8" ry="6" fill="#F472B6"/>
        <path d="M6 7 Q10 4 14 7 M6 10 Q10 12 14 10" stroke="#DB2777" strokeWidth="1.2" fill="none"/>
      </g>
      {/* Magnifier */}
      <g transform="translate(10, 48) rotate(-15)">
        <circle cx="9" cy="9" r="7" fill="#FFFFFF" stroke="#9333EA" strokeWidth="2"/>
        <line x1="14" y1="14" x2="20" y2="20" stroke="#D97706" strokeWidth="3" strokeLinecap="round"/>
      </g>
      <rect x="18" y="78" width="64" height="15" rx="7.5" fill="#9333EA"/>
      <text x="50" y="89" fontSize="8" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">REASONING</text>
    </svg>
  );
}

// ── Shapes & Visual Skills — black hair, blue shirt · triangle + square ────────
export function ShapesKid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#F0F9FF"/>
      <circle cx="50" cy="50" r="42" fill="#E0F2FE"/>
      <ellipse cx="50" cy="46" rx="22" ry="20" fill="#0F172A"/>
      <ellipse cx="50" cy="53" rx="19" ry="18" fill="#FFDFC4"/>
      <path d="M31 45 Q50 39 69 45 Z" fill="#0F172A"/>
      <circle cx="43" cy="51" r="2.5" fill="#1E293B"/>
      <circle cx="57" cy="51" r="2.5" fill="#1E293B"/>
      <path d="M45 58 Q50 63 55 58" fill="none" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M32 71 Q50 67 68 71 L74 92 L26 92 Z" fill="#0284C7"/>
      {/* Triangle + white circle */}
      <g transform="translate(68, 44)">
        <polygon points="10,2 18,16 2,16" fill="#F59E0B"/>
        <circle cx="10" cy="10" r="3" fill="#FFFFFF"/>
      </g>
      {/* Square + white triangle */}
      <g transform="translate(10, 48)">
        <rect width="14" height="14" rx="2" fill="#EC4899"/>
        <polygon points="7,2 12,12 2,12" fill="#FFFFFF"/>
      </g>
      <rect x="22" y="78" width="56" height="15" rx="7.5" fill="#0284C7"/>
      <text x="50" y="89" fontSize="8.5" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">SHAPES</text>
    </svg>
  );
}

// ── Coloring & Creative — brown curly hair, amber shirt · palette + brush ──────
export function ArtKid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#FEF3C7"/>
      <circle cx="50" cy="50" r="42" fill="#FDE68A"/>
      <circle cx="25" cy="46" r="8" fill="#B45309"/>
      <circle cx="75" cy="46" r="8" fill="#B45309"/>
      <ellipse cx="50" cy="47" rx="24" ry="22" fill="#B45309"/>
      <ellipse cx="50" cy="53" rx="19" ry="18" fill="#FFDFC4"/>
      <circle cx="43" cy="51" r="2.5" fill="#1E293B"/>
      <circle cx="57" cy="51" r="2.5" fill="#1E293B"/>
      <path d="M45 57 Q50 63 55 57" fill="none" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M33 71 Q50 67 67 71 L73 92 L27 92 Z" fill="#F59E0B"/>
      {/* Palette */}
      <g transform="translate(66, 48) rotate(12)">
        <ellipse cx="11" cy="11" rx="11" ry="9" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.5"/>
        <circle cx="6"  cy="9"  r="2" fill="#EF4444"/>
        <circle cx="11" cy="6"  r="2" fill="#3B82F6"/>
        <circle cx="16" cy="9"  r="2" fill="#10B981"/>
      </g>
      {/* Brush */}
      <g transform="translate(12, 50) rotate(-35)">
        <rect width="3" height="16" rx="1" fill="#78350F"/>
        <polygon points="0,3 3,3 1.5,-2" fill="#EC4899"/>
      </g>
      <rect x="20" y="78" width="60" height="15" rx="7.5" fill="#D97706"/>
      <text x="50" y="89" fontSize="8.5" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">CREATIVE</text>
    </svg>
  );
}

// ── Logic & Thinking — green cap, green shirt · puzzle piece ──────────────────
export function LogicKid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#ECFDF5"/>
      <circle cx="50" cy="50" r="42" fill="#D1FAE5"/>
      <path d="M26 38 C26 24, 74 24, 74 38 Z" fill="#059669"/>
      <ellipse cx="50" cy="52" rx="19" ry="18" fill="#FCD34D"/>
      <circle cx="43" cy="50" r="2.5" fill="#1E293B"/>
      <circle cx="57" cy="50" r="2.5" fill="#1E293B"/>
      <path d="M44 57 Q50 64 56 57" fill="#1E293B"/>
      <path d="M32 70 Q50 66 68 70 L74 92 L26 92 Z" fill="#047857"/>
      {/* Puzzle piece */}
      <g transform="translate(66, 46)">
        <rect width="18" height="18" rx="3" fill="#10B981"/>
        <circle cx="9" cy="0"  r="3.5" fill="#10B981"/>
        <circle cx="18" cy="9" r="3.5" fill="#10B981"/>
        <circle cx="9" cy="9"  r="2.5" fill="#FFFFFF"/>
      </g>
      <rect x="24" y="78" width="52" height="15" rx="7.5" fill="#059669"/>
      <text x="50" y="89" fontSize="8.5" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">LOGIC</text>
    </svg>
  );
}

// ── Social & Emotional — dark red hair, red shirt · glowing heart ─────────────
export function SocialEmotionalKid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#FFF1F2"/>
      <circle cx="50" cy="50" r="42" fill="#FFE4E6"/>
      <ellipse cx="50" cy="46" rx="23" ry="21" fill="#881337"/>
      <ellipse cx="50" cy="53" rx="19" ry="18" fill="#FFDFC4"/>
      <circle cx="37" cy="55" r="3.5" fill="#F43F5E" opacity={0.5}/>
      <circle cx="63" cy="55" r="3.5" fill="#F43F5E" opacity={0.5}/>
      <circle cx="43" cy="51" r="2.5" fill="#1E293B"/>
      <circle cx="57" cy="51" r="2.5" fill="#1E293B"/>
      <path d="M44 57 Q50 63 56 57" fill="none" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M32 71 Q50 67 68 71 L74 92 L26 92 Z" fill="#E11D48"/>
      {/* Heart */}
      <g transform="translate(68, 44)">
        <path d="M10 5 C6 0, 0 3, 0 9 C0 15, 10 20, 10 20 C10 20, 20 15, 20 9 C20 3, 14 0, 10 5 Z" fill="#E11D48"/>
        <circle cx="6" cy="6" r="1.5" fill="#FFFFFF"/>
      </g>
      <rect x="22" y="78" width="56" height="15" rx="7.5" fill="#E11D48"/>
      <text x="50" y="89" fontSize="8.5" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">EMOTION</text>
    </svg>
  );
}

// ── Subject → kid map ────────────────────────────────────────────────────────

const MAP: Record<string, (p: KidProps) => React.ReactElement> = {
  "mathematics":        MathKid,
  "english":            EnglishKid,
  "english-language":   KgSubjectKid,
  "science":            ScienceKid,
  "evs":                EvsKid,
  "general-awareness":  GeneralAwarenessKid,
  "gk":                 GkKid,
  "reasoning":          ReasoningKid,
  "logic-thinking":     LogicKid,
  "social-studies":     SocialStudiesKid,
  "coloring-creative":  ArtKid,
  "social-emotional":   SocialEmotionalKid,
  "shapes-visual":      ShapesKid,
};

export function SubjectKid({ subjectId, ...rest }: { subjectId: string } & KidProps) {
  const Comp = MAP[subjectId] ?? MathKid;
  return <Comp {...rest} />;
}
