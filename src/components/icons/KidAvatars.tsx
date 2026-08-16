import React from "react";

/**
 * Grade kid avatars with learning props — self-contained circular icon tiles.
 * viewBox="0 0 100 100". Designs from gemini-code-1786897990225.html.
 * Props: KG=ABC blocks, G1=book, G2=magnifier+bulb, G3=globe, G4=palette+brush,
 *        G5=gear, G6=science notebook, G7=laptop, G8=trophy.
 */

interface KidProps {
  className?: string;
  style?: React.CSSProperties;
}

// ── KG — Amber hair bumps, headband, blue shirt · ABC blocks ─────────────────
export function KgKid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#FEF3C7"/>
      <circle cx="50" cy="50" r="42" fill="#FDE68A"/>
      <circle cx="34" cy="30" r="7" fill="#F59E0B"/>
      <circle cx="34" cy="30" r="4" fill="#FEF3C7"/>
      <circle cx="66" cy="30" r="7" fill="#F59E0B"/>
      <circle cx="66" cy="30" r="4" fill="#FEF3C7"/>
      <path d="M30 42 C30 25, 70 25, 70 42 Z" fill="#F59E0B"/>
      <rect x="28" y="39" width="44" height="6" rx="3" fill="#D97706"/>
      <ellipse cx="50" cy="52" rx="20" ry="18" fill="#FFDFC4"/>
      <circle cx="37" cy="55" r="4" fill="#F87171" opacity={0.4}/>
      <circle cx="63" cy="55" r="4" fill="#F87171" opacity={0.4}/>
      <circle cx="43" cy="50" r="2.5" fill="#1E293B"/>
      <circle cx="57" cy="50" r="2.5" fill="#1E293B"/>
      <path d="M44 56 Q50 63 56 56" fill="none" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M34 70 Q50 66 66 70 L72 92 L28 92 Z" fill="#3B82F6"/>
      {/* Block A — right */}
      <g transform="translate(68, 52) rotate(8)">
        <rect width="18" height="18" rx="4" fill="#EF4444"/>
        <rect x="2" y="2" width="14" height="14" rx="2" fill="#F87171"/>
        <text x="9" y="13" fontSize="10" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">A</text>
      </g>
      {/* Block B — left */}
      <g transform="translate(14, 56) rotate(-10)">
        <rect width="16" height="16" rx="3.5" fill="#10B981"/>
        <text x="8" y="12" fontSize="9" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">B</text>
      </g>
      <rect x="36" y="78" width="28" height="15" rx="7.5" fill="#EF4444"/>
      <text x="50" y="89" fontSize="11" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">K</text>
    </svg>
  );
}

// ── G1 — Brown curly hair, pink ears, caramel face, green shirt · book ────────
export function G1Kid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#FFEDD5"/>
      <circle cx="50" cy="50" r="42" fill="#FED7AA"/>
      <circle cx="25" cy="46" r="8" fill="#78350F"/>
      <circle cx="75" cy="46" r="8" fill="#78350F"/>
      <circle cx="28" cy="48" r="3.5" fill="#EC4899"/>
      <circle cx="72" cy="48" r="3.5" fill="#EC4899"/>
      <ellipse cx="50" cy="47" rx="24" ry="22" fill="#78350F"/>
      <ellipse cx="50" cy="53" rx="19" ry="18" fill="#FCD34D"/>
      <path d="M31 46 C35 34, 65 34, 69 46 C60 40, 40 40, 31 46 Z" fill="#78350F"/>
      <circle cx="38" cy="56" r="3.5" fill="#FB7185" opacity={0.45}/>
      <circle cx="62" cy="56" r="3.5" fill="#FB7185" opacity={0.45}/>
      <circle cx="43" cy="51" r="2.5" fill="#1E293B"/>
      <circle cx="57" cy="51" r="2.5" fill="#1E293B"/>
      <path d="M45 57 Q50 63 55 57" fill="none" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M33 71 Q50 67 67 71 L73 92 L27 92 Z" fill="#10B981"/>
      {/* Book */}
      <g transform="translate(66, 56) rotate(14)">
        <rect width="18" height="22" rx="3" fill="#3B82F6"/>
        <rect x="2" y="2" width="14" height="18" rx="2" fill="#FFFFFF"/>
        <line x1="5" y1="6"  x2="13" y2="6"  stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="5" y1="10" x2="13" y2="10" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="5" y1="14" x2="10" y2="14" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round"/>
      </g>
      <rect x="33" y="78" width="34" height="15" rx="7.5" fill="#F97316"/>
      <text x="50" y="89" fontSize="10" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">GR 1</text>
    </svg>
  );
}

// ── G2 — Red cap, pale face, indigo shirt · magnifying glass + lightbulb ──────
export function G2Kid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#E0F2FE"/>
      <circle cx="50" cy="50" r="42" fill="#BAE6FD"/>
      <path d="M26 38 C26 24, 74 24, 74 38 Z" fill="#EF4444"/>
      <path d="M36 38 Q50 33 64 38 L68 41 Q50 36 32 41 Z" fill="#B91C1C"/>
      <ellipse cx="50" cy="52" rx="19" ry="18" fill="#F7D0B4"/>
      <path d="M29 45 L32 54 L36 46 Z" fill="#451A03"/>
      <path d="M71 45 L68 54 L64 46 Z" fill="#451A03"/>
      <circle cx="43" cy="50" r="2.5" fill="#1E293B"/>
      <circle cx="57" cy="50" r="2.5" fill="#1E293B"/>
      <path d="M44 57 Q50 64 56 57" fill="#1E293B"/>
      <path d="M32 70 Q50 66 68 70 L74 92 L26 92 Z" fill="#6366F1"/>
      {/* Magnifying glass */}
      <g transform="translate(14, 52) rotate(-25)">
        <circle cx="10" cy="10" r="8" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.5"/>
        <line x1="16" y1="16" x2="23" y2="23" stroke="#D97706" strokeWidth="3.5" strokeLinecap="round"/>
      </g>
      {/* Lightbulb */}
      <g transform="translate(74, 20)">
        <circle cx="7" cy="7" r="6" fill="#FBBF24"/>
        <rect x="5" y="13" width="4" height="2" fill="#94A3B8"/>
        <line x1="7" y1="-1" x2="7"  y2="-3" stroke="#F59E0B" strokeWidth="1.5"/>
        <line x1="14" y1="3" x2="16" y2="1"  stroke="#F59E0B" strokeWidth="1.5"/>
      </g>
      <rect x="33" y="78" width="34" height="15" rx="7.5" fill="#0284C7"/>
      <text x="50" y="89" fontSize="10" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">GR 2</text>
    </svg>
  );
}

// ── G3 — Dark hair buns, brown face, amber shirt · globe ─────────────────────
export function G3Kid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#D1FAE5"/>
      <circle cx="50" cy="50" r="42" fill="#A7F3D0"/>
      <circle cx="28" cy="30" r="10" fill="#1F2937"/>
      <circle cx="72" cy="30" r="10" fill="#1F2937"/>
      <ellipse cx="50" cy="46" rx="23" ry="20" fill="#1F2937"/>
      <ellipse cx="50" cy="53" rx="19" ry="18" fill="#C68642"/>
      <path d="M31 47 Q50 36 69 47 Q50 43 31 47 Z" fill="#1F2937"/>
      <circle cx="43" cy="51" r="2.5" fill="#111827"/>
      <circle cx="57" cy="51" r="2.5" fill="#111827"/>
      <path d="M45 58 Q50 63 55 58" fill="none" stroke="#111827" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M32 71 Q50 67 68 71 L74 92 L26 92 Z" fill="#F59E0B"/>
      {/* Globe */}
      <g transform="translate(68, 46)">
        <circle cx="12" cy="12" r="10" fill="#38BDF8"/>
        <path d="M6 10 Q10 8 13 11 Q17 9 19 13 Q15 17 11 16 Z" fill="#4ADE80"/>
        <path d="M2 12 A10 10 0 0 0 22 12" fill="none" stroke="#78350F" strokeWidth="2"/>
        <line x1="12" y1="22" x2="12" y2="26" stroke="#78350F" strokeWidth="2"/>
        <line x1="7"  y1="26" x2="17" y2="26" stroke="#78350F" strokeWidth="2" strokeLinecap="round"/>
      </g>
      <rect x="33" y="78" width="34" height="15" rx="7.5" fill="#059669"/>
      <text x="50" y="89" fontSize="10" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">GR 3</text>
    </svg>
  );
}

// ── G4 — Dark hair, purple glasses, pink face, blue shirt · palette + brush ───
export function G4Kid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#F3E8FF"/>
      <circle cx="50" cy="50" r="42" fill="#E9D5FF"/>
      <ellipse cx="50" cy="45" rx="23" ry="21" fill="#4B2414"/>
      <ellipse cx="50" cy="53" rx="19" ry="18" fill="#FBD5B5"/>
      <path d="M28 42 C40 28, 70 38, 72 48 C60 40, 40 40, 28 42 Z" fill="#4B2414"/>
      <circle cx="42" cy="51" r="6" fill="none" stroke="#9333EA" strokeWidth="2"/>
      <circle cx="58" cy="51" r="6" fill="none" stroke="#9333EA" strokeWidth="2"/>
      <line x1="48" y1="51" x2="52" y2="51" stroke="#9333EA" strokeWidth="2"/>
      <circle cx="42" cy="51" r="2" fill="#1E293B"/>
      <circle cx="58" cy="51" r="2" fill="#1E293B"/>
      <path d="M46 61 Q50 65 54 61" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 71 Q50 67 68 71 L74 92 L26 92 Z" fill="#0EA5E9"/>
      {/* Paint palette */}
      <g transform="translate(68, 52) rotate(10)">
        <ellipse cx="11" cy="11" rx="11" ry="9" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5"/>
        <circle cx="6"  cy="9"  r="1.8" fill="#EF4444"/>
        <circle cx="11" cy="6"  r="1.8" fill="#3B82F6"/>
        <circle cx="16" cy="9"  r="1.8" fill="#10B981"/>
        <circle cx="14" cy="14" r="1.8" fill="#A855F7"/>
      </g>
      {/* Brush */}
      <g transform="translate(14, 52) rotate(-35)">
        <rect x="4" y="6" width="2.5" height="15" rx="1" fill="#78350F"/>
        <path d="M3.5 6 L7 6 L5.25 1 Z" fill="#EC4899"/>
      </g>
      <rect x="33" y="78" width="34" height="15" rx="7.5" fill="#7E22CE"/>
      <text x="50" y="89" fontSize="10" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">GR 4</text>
    </svg>
  );
}

// ── G5 — Black hair, pink headband, peach face, blue shirt · gear/STEM ────────
export function G5Kid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#ECFDF5"/>
      <circle cx="50" cy="50" r="42" fill="#D1FAE5"/>
      <ellipse cx="50" cy="49" rx="24" ry="23" fill="#18181B"/>
      <path d="M28 47 Q50 30 72 47" fill="none" stroke="#EC4899" strokeWidth="4" strokeLinecap="round"/>
      <ellipse cx="50" cy="54" rx="19" ry="18" fill="#FFDFC4"/>
      <path d="M31 46 Q50 42 69 46 Q50 36 31 46 Z" fill="#18181B"/>
      <circle cx="43" cy="52" r="2.5" fill="#1E293B"/>
      <circle cx="57" cy="52" r="2.5" fill="#1E293B"/>
      <path d="M44 59 Q50 65 56 59" fill="none" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M31 72 Q50 68 69 72 L75 92 L25 92 Z" fill="#0284C7"/>
      {/* Gear */}
      <g transform="translate(68, 48)">
        <circle cx="12" cy="12" r="9"   fill="#F97316"/>
        <circle cx="12" cy="12" r="3.5" fill="#FFFFFF"/>
        <rect x="10.5" y="1"    width="3" height="3" fill="#EA580C"/>
        <rect x="10.5" y="20"   width="3" height="3" fill="#EA580C"/>
        <rect x="1"    y="10.5" width="3" height="3" fill="#EA580C"/>
        <rect x="20"   y="10.5" width="3" height="3" fill="#EA580C"/>
      </g>
      <rect x="33" y="78" width="34" height="15" rx="7.5" fill="#059669"/>
      <text x="50" y="89" fontSize="10" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">GR 5</text>
    </svg>
  );
}

// ── G6 — Dark hair, headphones, honey face, orange shirt · science notebook ───
export function G6Kid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#EEF2FF"/>
      <circle cx="50" cy="50" r="42" fill="#E0E7FF"/>
      <path d="M24 48 C24 26, 76 26, 76 48" fill="none" stroke="#475569" strokeWidth="4"/>
      <rect x="20" y="44" width="7" height="14" rx="3.5" fill="#3B82F6"/>
      <rect x="73" y="44" width="7" height="14" rx="3.5" fill="#3B82F6"/>
      <ellipse cx="50" cy="46" rx="21" ry="19" fill="#292524"/>
      <ellipse cx="50" cy="53" rx="18" ry="18" fill="#A16207"/>
      <circle cx="43" cy="51" r="2.5" fill="#1C1917"/>
      <circle cx="57" cy="51" r="2.5" fill="#1C1917"/>
      <path d="M45 59 Q50 64 55 59" fill="none" stroke="#1C1917" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M31 72 Q50 68 69 72 L75 92 L25 92 Z" fill="#F97316"/>
      {/* Science notebook */}
      <g transform="translate(10, 50) rotate(-12)">
        <rect width="18" height="24" rx="3" fill="#1E293B"/>
        <rect x="0" y="0" width="3.5" height="24" fill="#0F172A"/>
        <text x="11" y="9"  fontSize="5"   fontFamily="monospace" fontWeight="900" fill="#38BDF8" textAnchor="middle">H₂O</text>
        <text x="11" y="16" fontSize="4.5" fontFamily="monospace" fontWeight="900" fill="#FBBF24" textAnchor="middle">E=mc²</text>
      </g>
      <rect x="33" y="78" width="34" height="15" rx="7.5" fill="#4F46E5"/>
      <text x="50" y="89" fontSize="10" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">GR 6</text>
    </svg>
  );
}

// ── G7 — Purple ponytail, pink flower, yellow face, violet shirt · laptop ──────
export function G7Kid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#FFE4E6"/>
      <circle cx="50" cy="50" r="42" fill="#FECDD3"/>
      <ellipse cx="68" cy="33" rx="9" ry="15" transform="rotate(25 68 33)" fill="#581C87"/>
      <circle cx="60" cy="36" r="4" fill="#F43F5E"/>
      <ellipse cx="49" cy="48" rx="21" ry="19" fill="#581C87"/>
      <ellipse cx="49" cy="54" rx="18" ry="17" fill="#FCD34D"/>
      <path d="M30 45 Q44 42 54 48 Q64 42 67 49 Z" fill="#581C87"/>
      <circle cx="44" cy="52" r="2" fill="#1E293B"/>
      <circle cx="56" cy="52" r="2" fill="#1E293B"/>
      <path d="M45 60 Q50 65 55 60" fill="none" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M31 72 Q50 68 69 72 L75 92 L25 92 Z" fill="#8B5CF6"/>
      {/* Laptop */}
      <g transform="translate(68, 52) rotate(8)">
        <rect width="22" height="15" rx="2" fill="#0F172A"/>
        <rect x="2" y="2" width="18" height="11" rx="1" fill="#38BDF8"/>
        <path d="M5 10 L9 6 L13 8 L17 4" stroke="#FFFFFF" strokeWidth="1.2" fill="none"/>
        <rect x="-2" y="15" width="26" height="3" rx="1" fill="#64748B"/>
      </g>
      <rect x="33" y="78" width="34" height="15" rx="7.5" fill="#E11D48"/>
      <text x="50" y="89" fontSize="10" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">GR 7</text>
    </svg>
  );
}

// ── G8 — Dark peaked hair, peach face, navy shirt · golden trophy ─────────────
export function G8Kid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#CFFAFE"/>
      <circle cx="50" cy="50" r="42" fill="#A5F3FC"/>
      <path d="M30 42 C28 26, 45 23, 50 20 C58 24, 72 26, 70 42 Z" fill="#1E293B"/>
      <ellipse cx="50" cy="53" rx="19" ry="18" fill="#FBD5B5"/>
      <path d="M31 43 C38 37, 62 37, 69 43 C60 40, 40 40, 31 43 Z" fill="#1E293B"/>
      <circle cx="44" cy="51" r="2.5" fill="#1E293B"/>
      <circle cx="56" cy="51" r="2.5" fill="#1E293B"/>
      <path d="M46 59 Q52 64 56 59" fill="none" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M30 72 Q50 67 70 72 L76 92 L24 92 Z" fill="#0F172A"/>
      <polygon points="44,72 50,82 56,72" fill="#EAB308"/>
      {/* Trophy */}
      <g transform="translate(68, 44) rotate(10)">
        <path d="M6 3 L18 3 L16 11 Q12 15 8 11 Z" fill="#F59E0B"/>
        <path d="M3 5 Q1 8 6 9 M21 5 Q23 8 18 9" fill="none" stroke="#D97706" strokeWidth="1.8"/>
        <line x1="12" y1="14" x2="12" y2="18" stroke="#D97706" strokeWidth="2.5"/>
        <rect x="7" y="18" width="10" height="4" rx="1" fill="#78350F"/>
        <polygon points="12,5 13,8 16,8 13.5,10 14.5,13 12,11 9.5,13 10.5,10 8,8 11,8" fill="#FEF08A"/>
      </g>
      <rect x="33" y="78" width="34" height="15" rx="7.5" fill="#0891B2"/>
      <text x="50" y="89" fontSize="10" fontFamily="sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">GR 8</text>
    </svg>
  );
}

// ── Grade → kid map ──────────────────────────────────────────────────────────

const GRADE_KID_MAP: Record<string, (p: KidProps) => React.ReactElement> = {
  kindergarten: KgKid,
  "grade-1":    G1Kid,
  "grade-2":    G2Kid,
  "grade-3":    G3Kid,
  "grade-4":    G4Kid,
  "grade-5":    G5Kid,
  "grade-6":    G6Kid,
  "grade-7":    G7Kid,
  "grade-8":    G8Kid,
};

export function GradeKid({ gradeId, ...rest }: { gradeId: string } & KidProps) {
  const Comp = GRADE_KID_MAP[gradeId] ?? G6Kid;
  return <Comp {...rest} />;
}

// ── Generic student for subject tiles ────────────────────────────────────────
export function StudentKid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect x="43" y="67" width="14" height="12" rx="5" fill={skin} />
      <path d="M 8 80 Q 10 74 28 74 Q 50 82 72 74 Q 90 74 92 80 L 100 110 L 0 110 Z" fill="#29B6F6" />
      <circle cx="50" cy="42" r="29" fill={skin} />
      <path d="M 21 42 C 21 13 79 13 79 42 Z" fill="#5D4037" />
      <rect x="19" y="35" width="7" height="13" rx="3.5" fill="#5D4037" />
      <rect x="74" y="35" width="7" height="13" rx="3.5" fill="#5D4037" />
      <circle cx="41" cy="44" r="3.5" fill="#2b1200" />
      <circle cx="59" cy="44" r="3.5" fill="#2b1200" />
      <circle cx="28" cy="53" r="6"   fill="#FF8A80" opacity={0.4} />
      <circle cx="72" cy="53" r="6"   fill="#FF8A80" opacity={0.4} />
      <path d="M 41 55 Q 50 62 59 55" stroke="#C45050" strokeWidth={2.5} fill="none" strokeLinecap="round" />
    </svg>
  );
}
