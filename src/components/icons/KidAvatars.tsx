/**
 * Flat-design kid bust portraits — exact reference image style.
 * Round dot eyes, clean geometric hair domes, round cheeks.
 * viewBox="0 0 100 110" — head + shoulders.
 * Head: cx=50 cy=42 r=29  |  top y=13  |  sides x=21, x=79
 */

interface KidProps {
  className?: string;
  style?: React.CSSProperties;
}

// ── Shared hair dome paths ───────────────────────────────────────────────────
const DOME       = "M 21 42 C 21 13 79 13 79 42 Z";         // full dome cap
const DOME_LEFT  = "M 50 13 C 37 13 21 26 21 42 L 50 42 Z"; // left half
const DOME_RIGHT = "M 50 13 C 63 13 79 26 79 42 L 50 42 Z"; // right half

// ── Shared face: small round dot eyes, round cheeks, curved smile ────────────
function Face({ skin, eyeY = 44, smileY = 55 }: { skin: string; eyeY?: number; smileY?: number }) {
  return (
    <>
      <circle cx={41} cy={eyeY} r={3.5} fill="#2b1200" />
      <circle cx={59} cy={eyeY} r={3.5} fill="#2b1200" />
      <circle cx={28} cy={smileY - 2} r={6}   fill="#FF8A80" opacity={0.4} />
      <circle cx={72} cy={smileY - 2} r={6}   fill="#FF8A80" opacity={0.4} />
      <path
        d={`M 41 ${smileY} Q 50 ${smileY + 7} 59 ${smileY}`}
        stroke="#C45050" strokeWidth={2} fill="none" strokeLinecap="round"
      />
    </>
  );
}

// ── Shirt block ──────────────────────────────────────────────────────────────
function Shirt({ color, skin }: { color: string; skin: string }) {
  return (
    <>
      <rect x="43" y="67" width="14" height="12" rx="5" fill={skin} />
      <path d="M 8 80 Q 10 74 28 74 Q 50 82 72 74 Q 90 74 92 80 L 100 110 L 0 110 Z" fill={color} />
    </>
  );
}

// ── KG — Long straight blonde hair, teal top ────────────────────────────────
export function KgKid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Long blonde side panels behind head */}
      <rect x="11" y="28" width="15" height="74" rx="7" fill="#FFCA28" />
      <rect x="74" y="28" width="15" height="74" rx="7" fill="#FFCA28" />
      <Shirt color="#26C6DA" skin={skin} />
      <circle cx="50" cy="42" r="29" fill={skin} />
      {/* Blonde dome */}
      <path d={DOME} fill="#FFCA28" />
      <Face skin={skin} />
    </svg>
  );
}

// ── G1 — Boy, two-tone split hair (dark left / brown right), yellow + teal bib ─
export function G1Kid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <Shirt color="#FDD835" skin={skin} />
      {/* Teal overalls bib */}
      <rect x="36" y="76" width="28" height="34" rx="3" fill="#26C6DA" />
      <circle cx="50" cy="42" r="29" fill={skin} />
      {/* Two-tone dome: dark left, brown right */}
      <path d={DOME_LEFT}  fill="#1a1a1a" />
      <path d={DOME_RIGHT} fill="#8B6343" />
      {/* Side sideburn tabs matching each half */}
      <rect x="19" y="36" width="7" height="13" rx="3.5" fill="#1a1a1a" />
      <rect x="74" y="36" width="7" height="13" rx="3.5" fill="#8B6343" />
      <Face skin={skin} />
    </svg>
  );
}

// ── G2 — Girl, brown pigtails, center part, pink top ────────────────────────
export function G2Kid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Pigtail blobs at sides */}
      <ellipse cx="16" cy="52" rx="12" ry="22" fill="#8B5E3C" />
      <ellipse cx="84" cy="52" rx="12" ry="22" fill="#8B5E3C" />
      <Shirt color="#F48FB1" skin={skin} />
      <circle cx="50" cy="42" r="29" fill={skin} />
      {/* Brown dome */}
      <path d={DOME} fill="#8B5E3C" />
      {/* Center part line */}
      <line x1="50" y1="13" x2="50" y2="38" stroke="#6B4226" strokeWidth="2.5" />
      <Face skin={skin} />
    </svg>
  );
}

// ── G3 — Boy, teal baseball cap (brim right), orange hair sides, green top ──
export function G3Kid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Orange hair visible at sides under cap */}
      <ellipse cx="19" cy="47" rx="12" ry="16" fill="#E64A19" />
      <ellipse cx="81" cy="47" rx="12" ry="16" fill="#E64A19" />
      <Shirt color="#66BB6A" skin={skin} />
      <circle cx="50" cy="42" r="29" fill={skin} />
      {/* Cap dome */}
      <path d={DOME} fill="#26C6DA" />
      {/* Cap band */}
      <rect x="20" y="40" width="60" height="6" rx="2" fill="#00ACC1" />
      {/* Brim — extends right */}
      <path d="M 46 43 Q 76 38 92 45 L 90 52 Q 74 48 46 50 Z" fill="#00ACC1" />
      {/* Cap button */}
      <circle cx="50" cy="14" r="3" fill="#0097A7" />
      <Face skin={skin} eyeY={46} smileY={57} />
    </svg>
  );
}

// ── G4 — Girl, long dark hair + inner yellow strip (left), teal top ─────────
export function G4Kid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Dark outer panels */}
      <rect x="10" y="24" width="18" height="78" rx="8" fill="#1a1a1a" />
      <rect x="72" y="24" width="18" height="78" rx="8" fill="#1a1a1a" />
      {/* Yellow inner highlight strip on left panel */}
      <rect x="17" y="32" width="9"  height="64" rx="4" fill="#FFCA28" />
      <Shirt color="#26C6DA" skin={skin} />
      <circle cx="50" cy="42" r="29" fill={skin} />
      {/* Dark dome */}
      <path d={DOME} fill="#1a1a1a" />
      <Face skin={skin} />
    </svg>
  );
}

// ── G5 — Girl, dark hair + right side braid, red top ────────────────────────
export function G5Kid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Short left hair panel */}
      <rect x="13" y="26" width="13" height="36" rx="6" fill="#1a1a1a" />
      {/* Right side braid rope */}
      <path d="M 75 30 Q 88 54 84 80 Q 82 92 82 102"
        stroke="#1a1a1a" strokeWidth="13" fill="none" strokeLinecap="round" />
      {/* Braid texture highlight */}
      <path d="M 75 30 Q 88 54 84 80 Q 82 92 82 102"
        stroke="#424242" strokeWidth="4"  fill="none" strokeLinecap="round" strokeDasharray="6 6" />
      <Shirt color="#EF5350" skin={skin} />
      {/* Orange stripe on shirt */}
      <path d="M 8 88 Q 50 96 92 88 L 92 96 Q 50 104 8 96 Z" fill="#FF7043" />
      <circle cx="50" cy="42" r="29" fill={skin} />
      {/* Dark dome */}
      <path d={DOME} fill="#1a1a1a" />
      <Face skin={skin} />
    </svg>
  );
}

// ── G6 — Boy, dark hair with brown side-swept fringe, teal top ───────────────
export function G6Kid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <Shirt color="#26C6DA" skin={skin} />
      <circle cx="50" cy="42" r="29" fill={skin} />
      {/* Dark main dome */}
      <path d={DOME} fill="#1a1a1a" />
      {/* Brown side-swept fringe accent */}
      <path d="M 21 40 C 28 20 46 14 64 17 C 46 15 30 25 27 40 Z" fill="#5D4037" />
      {/* Side sideburn tabs */}
      <rect x="19" y="35" width="7" height="13" rx="3.5" fill="#1a1a1a" />
      <rect x="74" y="35" width="7" height="13" rx="3.5" fill="#1a1a1a" />
      <Face skin={skin} />
    </svg>
  );
}

// ── G7 — Girl, orange hair, purple headband, purple top ──────────────────────
export function G7Kid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Orange side panels */}
      <rect x="11" y="28" width="15" height="65" rx="7" fill="#FF8F00" />
      <rect x="74" y="28" width="15" height="65" rx="7" fill="#FF8F00" />
      <Shirt color="#9C27B0" skin={skin} />
      <circle cx="50" cy="42" r="29" fill={skin} />
      {/* Orange dome */}
      <path d={DOME} fill="#FF8F00" />
      {/* Purple headband */}
      <path d="M 22 32 Q 50 26 78 32" stroke="#7B1FA2" strokeWidth="9" fill="none" strokeLinecap="round" />
      <Face skin={skin} />
    </svg>
  );
}

// ── G8 — Girl, brown hair + right side braid, teal top ───────────────────────
export function G8Kid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Short left hair panel */}
      <rect x="13" y="28" width="13" height="38" rx="6" fill="#8D6E63" />
      {/* Right side braid rope */}
      <path d="M 74 32 Q 86 56 82 80 Q 80 90 80 100"
        stroke="#8D6E63" strokeWidth="13" fill="none" strokeLinecap="round" />
      {/* Braid texture highlight */}
      <path d="M 74 32 Q 86 56 82 80 Q 80 90 80 100"
        stroke="#BCAAA4" strokeWidth="4"  fill="none" strokeLinecap="round" strokeDasharray="6 6" />
      <Shirt color="#26C6DA" skin={skin} />
      <circle cx="50" cy="42" r="29" fill={skin} />
      {/* Brown dome */}
      <path d={DOME} fill="#8D6E63" />
      <Face skin={skin} />
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
      <Shirt color="#29B6F6" skin={skin} />
      <circle cx="50" cy="42" r="29" fill={skin} />
      <path d={DOME} fill="#5D4037" />
      <rect x="19" y="35" width="7" height="13" rx="3.5" fill="#5D4037" />
      <rect x="74" y="35" width="7" height="13" rx="3.5" fill="#5D4037" />
      <Face skin={skin} />
    </svg>
  );
}
