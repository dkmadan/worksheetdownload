/**
 * Flat-design kid bust portraits — matches the reference image style.
 * Simple solid colors, clean geometric hair, small happy eyes, rosy cheeks.
 * viewBox="0 0 100 110" — head + shoulders bust crop.
 */

interface KidProps {
  className?: string;
  style?: React.CSSProperties;
}

// ── Shared face formula ──────────────────────────────────────────────────────

function Face({
  skin, eyeY = 44, smileY = 55,
}: { skin: string; eyeY?: number; smileY?: number }) {
  return (
    <>
      {/* Eyes — small happy squint */}
      <ellipse cx={41} cy={eyeY} rx={4.5} ry={3.2} fill="#2b1700" />
      <ellipse cx={59} cy={eyeY} rx={4.5} ry={3.2} fill="#2b1700" />
      {/* Rosy cheeks */}
      <ellipse cx={28} cy={smileY - 2} rx={7}   ry={4.5} fill="#FF8A80" opacity={0.45} />
      <ellipse cx={72} cy={smileY - 2} rx={7}   ry={4.5} fill="#FF8A80" opacity={0.45} />
      {/* Smile */}
      <path
        d={`M ${41} ${smileY} Q 50 ${smileY + 7} ${59} ${smileY}`}
        stroke="#C45050" strokeWidth={2} fill="none" strokeLinecap="round"
      />
    </>
  );
}

// Shirt block — shoulder trapezoid at bottom of bust
function Shirt({ color, skin }: { color: string; skin: string }) {
  return (
    <>
      {/* Neck */}
      <rect x="43" y="67" width="14" height="12" rx="5" fill={skin} />
      {/* Shirt body */}
      <path d="M 8 80 Q 10 74 28 74 Q 50 82 72 74 Q 90 74 92 80 L 100 110 L 0 110 Z" fill={color} />
    </>
  );
}

// ── KG — Blonde girl, orange headband, long blonde hair, teal top ────────────
export function KgKid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Long blonde hair behind head */}
      <rect x="13" y="26" width="14" height="68" rx="7"  fill="#FFCA28" />
      <rect x="73" y="26" width="14" height="68" rx="7"  fill="#FFCA28" />
      <Shirt color="#26C6DA" skin={skin} />
      {/* Head */}
      <circle cx="50" cy="42" r="29" fill={skin} />
      {/* Top hair */}
      <path d="M 21 36 C 21 10 79 10 79 36 C 79 20 50 10 50 10 Z" fill="#FFCA28" />
      {/* Orange headband */}
      <path d="M 21 30 Q 50 24 79 30" stroke="#FF8F00" strokeWidth="8" fill="none" strokeLinecap="round" />
      <Face skin={skin} />
    </svg>
  );
}

// ── G1 — Boy, short black hair, yellow top with teal bib/overalls ────────────
export function G1Kid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <Shirt color="#FDD835" skin={skin} />
      {/* Teal overalls bib */}
      <rect x="36" y="76" width="28" height="34" rx="4" fill="#26C6DA" />
      {/* Head */}
      <circle cx="50" cy="42" r="29" fill={skin} />
      {/* Short black hair cap */}
      <path d="M 21 38 C 21 10 79 10 79 38 C 79 22 50 10 50 10 Z" fill="#212121" />
      {/* Side hair tabs */}
      <rect x="19" y="34" width="7"  height="14" rx="3.5" fill="#212121" />
      <rect x="74" y="34" width="7"  height="14" rx="3.5" fill="#212121" />
      <Face skin={skin} />
    </svg>
  );
}

// ── G2 — Girl, brown pigtail strands, pink top ──────────────────────────────
export function G2Kid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Pigtail strands hanging on both sides */}
      <rect x="14" y="30" width="13" height="52" rx="6.5" fill="#6D4C41" />
      <rect x="73" y="30" width="13" height="52" rx="6.5" fill="#6D4C41" />
      {/* Pink ribbon bands */}
      <rect x="12" y="38" width="17" height="7"  rx="3.5" fill="#F06292" />
      <rect x="71" y="38" width="17" height="7"  rx="3.5" fill="#F06292" />
      <Shirt color="#F48FB1" skin={skin} />
      {/* Head */}
      <circle cx="50" cy="42" r="29" fill={skin} />
      {/* Top hair */}
      <path d="M 21 36 C 21 10 79 10 79 36 C 79 20 50 10 50 10 Z" fill="#6D4C41" />
      <Face skin={skin} />
    </svg>
  );
}

// ── G3 — Boy, teal baseball cap, orange hair, green hoodie ──────────────────
export function G3Kid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Orange hair visible at sides under cap */}
      <circle cx="22" cy="46" r="12" fill="#E64A19" />
      <circle cx="78" cy="46" r="12" fill="#E64A19" />
      <Shirt color="#66BB6A" skin={skin} />
      {/* Head */}
      <circle cx="50" cy="42" r="29" fill={skin} />
      {/* Cap dome (teal) */}
      <path d="M 20 44 C 20 13 80 13 80 44 Z" fill="#26C6DA" />
      {/* Cap brim — extends to right, slightly angled */}
      <path d="M 46 44 Q 76 40 90 46 L 88 53 Q 74 48 46 50 Z" fill="#00ACC1" />
      {/* Cap band */}
      <rect x="20" y="42" width="60" height="5" rx="2" fill="#00ACC1" />
      {/* Cap button */}
      <circle cx="50" cy="15" r="3" fill="#0097A7" />
      <Face skin={skin} eyeY={46} smileY={57} />
    </svg>
  );
}

// ── G4 — Girl, long dark two-tone hair, teal top ────────────────────────────
export function G4Kid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Dark back hair panels */}
      <rect x="12" y="22" width="16" height="75" rx="8"  fill="#212121" />
      <rect x="72" y="22" width="16" height="75" rx="8"  fill="#212121" />
      {/* Lighter inner highlight strip (two-tone effect) */}
      <rect x="15" y="28" width="8"  height="58" rx="4"  fill="#616161" />
      <rect x="77" y="28" width="8"  height="58" rx="4"  fill="#616161" />
      <Shirt color="#26C6DA" skin={skin} />
      {/* Head */}
      <circle cx="50" cy="42" r="29" fill={skin} />
      {/* Top hair */}
      <path d="M 21 34 C 21 10 79 10 79 34 C 79 19 50 10 50 10 Z" fill="#212121" />
      <Face skin={skin} />
    </svg>
  );
}

// ── G5 — Girl, dark hair with side braid, red-orange striped top ─────────────
export function G5Kid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Left short hair panel */}
      <rect x="14" y="26" width="12" height="32" rx="6" fill="#212121" />
      {/* Right braid — thick rope shape */}
      <path d="M 76 32 Q 84 52 78 72 Q 74 84 72 96"
        stroke="#212121" strokeWidth="12" fill="none" strokeLinecap="round" />
      {/* Braid texture highlight */}
      <path d="M 76 32 Q 84 52 78 72 Q 74 84 72 96"
        stroke="#616161" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="5 7" />
      <Shirt color="#EF5350" skin={skin} />
      {/* Orange stripe on shirt */}
      <path d="M 8 88 Q 50 96 92 88 L 92 96 Q 50 104 8 96 Z" fill="#FF7043" />
      {/* Head */}
      <circle cx="50" cy="42" r="29" fill={skin} />
      {/* Top hair */}
      <path d="M 21 34 C 21 10 79 10 79 34 C 79 19 50 10 50 10 Z" fill="#212121" />
      {/* Side part line */}
      <line x1="42" y1="14" x2="38" y2="28" stroke="#1a1a1a" strokeWidth="2" />
      <Face skin={skin} />
    </svg>
  );
}

// ── G6 — Boy, neat short dark hair, teal top ────────────────────────────────
export function G6Kid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <Shirt color="#26C6DA" skin={skin} />
      {/* Head */}
      <circle cx="50" cy="42" r="29" fill={skin} />
      {/* Neat short hair */}
      <path d="M 21 38 C 21 10 79 10 79 38 C 79 22 50 10 50 10 Z" fill="#212121" />
      {/* Slight side parting emphasis */}
      <path d="M 21 38 Q 32 16 50 20" fill="#212121" />
      <rect x="19" y="33" width="7"  height="12" rx="3.5" fill="#212121" />
      <rect x="74" y="33" width="7"  height="12" rx="3.5" fill="#212121" />
      <Face skin={skin} />
    </svg>
  );
}

// ── G7 — Girl, blonde hair, purple headband, purple top ─────────────────────
export function G7Kid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Blonde shoulder-length hair on sides */}
      <rect x="13" y="26" width="14" height="58" rx="7"  fill="#FFCA28" />
      <rect x="73" y="26" width="14" height="58" rx="7"  fill="#FFCA28" />
      <Shirt color="#9C27B0" skin={skin} />
      {/* Head */}
      <circle cx="50" cy="42" r="29" fill={skin} />
      {/* Top blonde hair */}
      <path d="M 21 36 C 21 10 79 10 79 36 C 79 20 50 10 50 10 Z" fill="#FFCA28" />
      {/* Purple headband */}
      <path d="M 21 30 Q 50 24 79 30" stroke="#7B1FA2" strokeWidth="8"  fill="none" strokeLinecap="round" />
      <Face skin={skin} />
    </svg>
  );
}

// ── G8 — Girl, brown braids on both sides, teal top ─────────────────────────
export function G8Kid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Left braid */}
      <path d="M 26 34 Q 16 54 20 78 Q 22 88 22 96"
        stroke="#8D6E63" strokeWidth="11" fill="none" strokeLinecap="round" />
      <path d="M 26 34 Q 16 54 20 78 Q 22 88 22 96"
        stroke="#A1887F" strokeWidth="4"  fill="none" strokeLinecap="round" strokeDasharray="5 7" />
      {/* Right braid */}
      <path d="M 74 34 Q 84 54 80 78 Q 78 88 78 96"
        stroke="#8D6E63" strokeWidth="11" fill="none" strokeLinecap="round" />
      <path d="M 74 34 Q 84 54 80 78 Q 78 88 78 96"
        stroke="#A1887F" strokeWidth="4"  fill="none" strokeLinecap="round" strokeDasharray="5 7" />
      <Shirt color="#26C6DA" skin={skin} />
      {/* Head */}
      <circle cx="50" cy="42" r="29" fill={skin} />
      {/* Top hair */}
      <path d="M 22 36 C 22 10 78 10 78 36 C 78 20 50 10 50 10 Z" fill="#8D6E63" />
      {/* Centre parting */}
      <line x1="50" y1="11" x2="50" y2="28" stroke="#6D4C41" strokeWidth="2" />
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
      {/* Short neat hair */}
      <path d="M 21 38 C 21 10 79 10 79 38 C 79 22 50 10 50 10 Z" fill="#5D4037" />
      <rect x="19" y="33" width="7" height="12" rx="3.5" fill="#5D4037" />
      <rect x="74" y="33" width="7" height="12" rx="3.5" fill="#5D4037" />
      <Face skin={skin} />
    </svg>
  );
}
