/**
 * Inline SVG kid characters — one per grade + a generic StudentKid.
 * All share viewBox="0 0 64 90" so they drop into any sized container.
 * Layering order: background hair → legs/body → neck → head → top-hair → ears → face → accessories
 */

interface KidProps {
  className?: string;
  style?: React.CSSProperties;
}

// ── Reusable sub-elements ────────────────────────────────────────────────────

function Face({ skin, hair, smileY = 36 }: { skin: string; hair: string; smileY?: number }) {
  return (
    <>
      <ellipse cx="23" cy="24" rx="3.5" ry="4" fill="#1a1a1a" />
      <ellipse cx="41" cy="24" rx="3.5" ry="4" fill="#1a1a1a" />
      <circle cx="24.5" cy="22" r="1.2" fill="white" />
      <circle cx="42.5" cy="22" r="1.2" fill="white" />
      <path d="M 17 17 Q 23 14.5 29 17" stroke={hair} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M 35 17 Q 41 14.5 47 17" stroke={hair} strokeWidth="2" strokeLinecap="round" fill="none" />
      <ellipse cx="32" cy="30" rx="2" ry="1.3" fill={skin} style={{ filter: "brightness(0.87)" }} />
      <path d={`M 22 ${smileY} Q 32 ${smileY + 8} 42 ${smileY}`} stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <ellipse cx="15" cy="30" rx="5" ry="3.5" fill="#ffaaaa" opacity="0.42" />
      <ellipse cx="49" cy="30" rx="5" ry="3.5" fill="#ffaaaa" opacity="0.42" />
    </>
  );
}

function Body({ shirt, pants, skin }: { shirt: string; pants: string; skin: string }) {
  return (
    <>
      {/* Shoes */}
      <ellipse cx="19" cy="85" rx="10" ry="5" fill="#2d2d2d" />
      <ellipse cx="45" cy="85" rx="10" ry="5" fill="#2d2d2d" />
      {/* Legs */}
      <rect x="11" y="62" width="16" height="25" rx="8" fill={pants} />
      <rect x="37" y="62" width="16" height="25" rx="8" fill={pants} />
      {/* Arms */}
      <rect x="1" y="42" width="12" height="22" rx="6" fill={shirt} />
      <rect x="51" y="42" width="12" height="22" rx="6" fill={shirt} />
      {/* Hands */}
      <circle cx="7" cy="65" r="7" fill={skin} />
      <circle cx="57" cy="65" r="7" fill={skin} />
      {/* Body */}
      <rect x="9" y="40" width="46" height="26" rx="13" fill={shirt} />
      {/* Neck */}
      <rect x="25" y="34" width="14" height="9" rx="4.5" fill={skin} />
    </>
  );
}

function Ears({ skin }: { skin: string }) {
  return (
    <>
      <ellipse cx="11" cy="26" rx="3.5" ry="5" fill={skin} />
      <ellipse cx="53" cy="26" rx="3.5" ry="5" fill={skin} />
    </>
  );
}

function Glasses() {
  return (
    <g stroke="#555" strokeWidth="1.6" fill="none">
      <rect x="15" y="19" width="12" height="9" rx="3" />
      <rect x="37" y="19" width="12" height="9" rx="3" />
      <line x1="27" y1="23.5" x2="37" y2="23.5" />
      <line x1="15" y1="23.5" x2="10" y2="25" />
      <line x1="49" y1="23.5" x2="54" y2="25" />
    </g>
  );
}

// ── Grade kids ───────────────────────────────────────────────────────────────

/** KG — girl, pigtails, pink dress, light skin */
export function KgKid({ className, style }: KidProps) {
  const skin = "#FDDBB4", hair = "#5D4037", shirt = "#EC407A", pants = "#FCE4EC";
  return (
    <svg viewBox="0 0 64 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Pigtail spheres behind head */}
      <circle cx="8"  cy="17" r="8" fill={hair} />
      <circle cx="56" cy="17" r="8" fill={hair} />
      {/* Pigtail bands */}
      <rect x="4" y="22" width="8" height="4" rx="2" fill="#E91E63" />
      <rect x="52" y="22" width="8" height="4" rx="2" fill="#E91E63" />
      <Body shirt={shirt} pants={pants} skin={skin} />
      {/* Dress flare */}
      <path d="M 14 55 Q 32 68 50 55 L 50 66 Q 32 78 14 66 Z" fill="#F48FB1" />
      {/* Head */}
      <ellipse cx="32" cy="23" rx="21" ry="22" fill={skin} />
      {/* Top hair */}
      <path d="M 11 18 C 11 3 53 3 53 18 C 53 9 32 2 32 2 Z" fill={hair} />
      <Ears skin={skin} />
      <Face skin={skin} hair={hair} smileY={32} />
    </svg>
  );
}

/** Grade 1 — boy, short dark hair, blue shirt, medium skin */
export function G1Kid({ className, style }: KidProps) {
  const skin = "#EDB98A", hair = "#2C1810", shirt = "#1565C0", pants = "#37474F";
  return (
    <svg viewBox="0 0 64 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <Body shirt={shirt} pants={pants} skin={skin} />
      {/* Head */}
      <ellipse cx="32" cy="23" rx="21" ry="22" fill={skin} />
      {/* Short boy hair */}
      <path d="M 11 18 C 11 2 53 2 53 18 C 53 8 32 1 32 1 Z" fill={hair} />
      {/* Side hair texture */}
      <rect x="9"  y="16" width="5" height="10" rx="2.5" fill={hair} />
      <rect x="50" y="16" width="5" height="10" rx="2.5" fill={hair} />
      <Ears skin={skin} />
      <Face skin={skin} hair={hair} />
      {/* Collar accent */}
      <path d="M 24 40 L 32 50 L 40 40" fill="white" opacity="0.18" />
    </svg>
  );
}

/** Grade 2 — girl, high ponytail, green outfit, light-medium skin */
export function G2Kid({ className, style }: KidProps) {
  const skin = "#F5CBA7", hair = "#4E342E", shirt = "#2E7D32", pants = "#1B5E20";
  return (
    <svg viewBox="0 0 64 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Ponytail */}
      <ellipse cx="32" cy="4"  rx="7"  ry="7"  fill={hair} />
      <rect    x="29"  y="4"   width="6" height="10" rx="3" fill={hair} />
      <Body shirt={shirt} pants={pants} skin={skin} />
      {/* Head */}
      <ellipse cx="32" cy="23" rx="21" ry="22" fill={skin} />
      {/* Top hair */}
      <path d="M 11 20 C 11 4 53 4 53 20 C 53 10 32 3 32 3 Z" fill={hair} />
      {/* Side long strands */}
      <rect x="8"  y="18" width="7" height="26" rx="3.5" fill={hair} />
      <rect x="49" y="18" width="7" height="26" rx="3.5" fill={hair} />
      <Ears skin={skin} />
      <Face skin={skin} hair={hair} />
    </svg>
  );
}

/** Grade 3 — boy, curly/natural hair, orange shirt, darker skin */
export function G3Kid({ className, style }: KidProps) {
  const skin = "#C68642", hair = "#1a0f00", shirt = "#E65100", pants = "#4E342E";
  return (
    <svg viewBox="0 0 64 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Afro/curly mass behind head */}
      <circle cx="32" cy="20" r="23" fill={hair} />
      <Body shirt={shirt} pants={pants} skin={skin} />
      {/* Head */}
      <ellipse cx="32" cy="23" rx="20" ry="21" fill={skin} />
      {/* Curly top picks */}
      <circle cx="22" cy="4"  r="5" fill={hair} />
      <circle cx="32" cy="2"  r="5" fill={hair} />
      <circle cx="42" cy="4"  r="5" fill={hair} />
      <circle cx="17" cy="9"  r="4" fill={hair} />
      <circle cx="47" cy="9"  r="4" fill={hair} />
      <Ears skin={skin} />
      <Face skin={skin} hair={hair} />
    </svg>
  );
}

/** Grade 4 — girl, bob haircut + glasses, teal outfit, medium skin */
export function G4Kid({ className, style }: KidProps) {
  const skin = "#F0C27F", hair = "#3E2723", shirt = "#00695C", pants = "#004D40";
  return (
    <svg viewBox="0 0 64 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Bob sides */}
      <rect x="8"  y="16" width="10" height="20" rx="5" fill={hair} />
      <rect x="46" y="16" width="10" height="20" rx="5" fill={hair} />
      <Body shirt={shirt} pants={pants} skin={skin} />
      {/* Head */}
      <ellipse cx="32" cy="23" rx="21" ry="22" fill={skin} />
      {/* Bob top */}
      <path d="M 11 20 C 11 4 53 4 53 20 C 53 10 32 2 32 2 Z" fill={hair} />
      <Ears skin={skin} />
      <Face skin={skin} hair={hair} />
      <Glasses />
    </svg>
  );
}

/** Grade 5 — boy, side-part medium hair, violet shirt, medium skin */
export function G5Kid({ className, style }: KidProps) {
  const skin = "#FDDBB4", hair = "#3D2314", shirt = "#6A1B9A", pants = "#311B92";
  return (
    <svg viewBox="0 0 64 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Side medium hair */}
      <rect x="8"  y="14" width="8" height="18" rx="4" fill={hair} />
      <rect x="48" y="14" width="8" height="14" rx="4" fill={hair} />
      <Body shirt={shirt} pants={pants} skin={skin} />
      {/* Head */}
      <ellipse cx="32" cy="23" rx="21" ry="22" fill={skin} />
      {/* Top hair with side part sweep */}
      <path d="M 11 18 C 11 2 53 2 53 18 C 53 9 32 1 32 1 Z" fill={hair} />
      <path d="M 11 18 Q 20 8 36 14" fill={hair} />
      <Ears skin={skin} />
      <Face skin={skin} hair={hair} />
      {/* Shirt collar */}
      <path d="M 26 40 L 32 48 L 38 40" fill="white" opacity="0.15" />
    </svg>
  );
}

/** Grade 6 — teen girl, long straight hair, red top, medium skin */
export function G6Kid({ className, style }: KidProps) {
  const skin = "#EDB98A", hair = "#212121", shirt = "#B71C1C", pants = "#263238";
  return (
    <svg viewBox="0 0 64 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Long hair flowing behind */}
      <rect x="7"  y="14" width="11" height="44" rx="5.5" fill={hair} />
      <rect x="46" y="14" width="11" height="44" rx="5.5" fill={hair} />
      <Body shirt={shirt} pants={pants} skin={skin} />
      {/* Head */}
      <ellipse cx="32" cy="23" rx="21" ry="22" fill={skin} />
      {/* Top hair */}
      <path d="M 11 19 C 11 3 53 3 53 19 C 53 9 32 1 32 1 Z" fill={hair} />
      <Ears skin={skin} />
      <Face skin={skin} hair={hair} />
    </svg>
  );
}

/** Grade 7 — teen boy, casual hair, indigo hoodie, medium-dark skin */
export function G7Kid({ className, style }: KidProps) {
  const skin = "#C68642", hair = "#1C0F00", shirt = "#283593", pants = "#1A237E";
  return (
    <svg viewBox="0 0 64 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <Body shirt={shirt} pants={pants} skin={skin} />
      {/* Head */}
      <ellipse cx="32" cy="23" rx="21" ry="22" fill={skin} />
      {/* Swept casual hair */}
      <path d="M 11 19 C 11 2 53 2 53 19 C 53 9 32 1 32 1 Z" fill={hair} />
      <path d="M 11 19 Q 18 6 28 12 Q 18 14 11 19 Z" fill={hair} />
      {/* Hoodie drawstring */}
      <circle cx="30" cy="48" r="1.5" fill="white" opacity="0.4" />
      <circle cx="34" cy="48" r="1.5" fill="white" opacity="0.4" />
      <Ears skin={skin} />
      <Face skin={skin} hair={hair} />
    </svg>
  );
}

/** Grade 8 — teen girl, high bun, navy blazer, light skin */
export function G8Kid({ className, style }: KidProps) {
  const skin = "#FFDCAA", hair = "#2C1E0F", shirt = "#37474F", pants = "#212121";
  return (
    <svg viewBox="0 0 64 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Bun on top */}
      <circle cx="32" cy="4" r="9" fill={hair} />
      <ellipse cx="32" cy="10" rx="6" ry="4" fill={hair} />
      {/* Side hair */}
      <rect x="9"  y="16" width="7" height="18" rx="3.5" fill={hair} />
      <rect x="48" y="16" width="7" height="18" rx="3.5" fill={hair} />
      <Body shirt={shirt} pants={pants} skin={skin} />
      {/* Head */}
      <ellipse cx="32" cy="24" rx="21" ry="22" fill={skin} />
      {/* Top hair neat band */}
      <path d="M 11 20 C 11 5 53 5 53 20 C 53 11 32 4 32 4 Z" fill={hair} />
      {/* Blazer lapels */}
      <path d="M 20 40 L 30 52 L 32 40" fill="#546E7A" opacity="0.6" />
      <path d="M 44 40 L 34 52 L 32 40" fill="#546E7A" opacity="0.6" />
      <Ears skin={skin} />
      <Face skin={skin} hair={hair} />
    </svg>
  );
}

// ── Grade → kid component map ────────────────────────────────────────────────

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
  const Comp = GRADE_KID_MAP[gradeId] ?? G5Kid;
  return <Comp {...rest} />;
}

// ── Generic student kid for subject tiles ────────────────────────────────────

/** Generic student — boy, round glasses, neutral look */
export function StudentKid({ className, style }: KidProps) {
  const skin = "#F5CBA7", hair = "#4E342E", shirt = "#1976D2", pants = "#37474F";
  return (
    <svg viewBox="0 0 64 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <Body shirt={shirt} pants={pants} skin={skin} />
      {/* Head */}
      <ellipse cx="32" cy="23" rx="21" ry="22" fill={skin} />
      {/* Short hair */}
      <path d="M 11 18 C 11 2 53 2 53 18 C 53 8 32 1 32 1 Z" fill={hair} />
      <rect x="9"  y="15" width="5" height="10" rx="2.5" fill={hair} />
      <rect x="50" y="15" width="5" height="10" rx="2.5" fill={hair} />
      <Ears skin={skin} />
      <Face skin={skin} hair={hair} />
    </svg>
  );
}
