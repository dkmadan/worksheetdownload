/**
 * Cartoon-style subject-specific kid avatars.
 * Large round cartoon eyes with iris+pupil+catchlight, subject props, distinct characters.
 * viewBox="0 0 100 120"  Head: cx=50 cy=46 r=30
 */

interface KidProps {
  className?: string;
  style?: React.CSSProperties;
}

const DOME = "M 20 46 C 20 16 80 16 80 46 Z";
const DOME_L = "M 50 16 C 37 16 20 29 20 46 L 50 46 Z";
const DOME_R = "M 50 16 C 63 16 80 29 80 46 L 50 46 Z";

// ── Cartoon eye (big, with iris / pupil / catchlight) ────────────────────────
function Eye({ cx, cy, iris = "#4A90D9", girl = false }: {
  cx: number; cy: number; iris?: string; girl?: boolean;
}) {
  return (
    <>
      <ellipse cx={cx} cy={cy}       rx={7.5} ry={8.5} fill="white" />
      <ellipse cx={cx} cy={cy + 0.5} rx={5}   ry={6}   fill={iris} />
      <ellipse cx={cx} cy={cy + 0.5} rx={3.5} ry={4.5} fill="#1a1005" />
      <ellipse cx={cx - 2.2} cy={cy - 2.5} rx={1.8} ry={2.2} fill="white" opacity={0.92} />
      {girl && (
        <path
          d={`M ${cx - 7.5} ${cy - 7} Q ${cx} ${cy - 12.5} ${cx + 7.5} ${cy - 7}`}
          stroke="#2b1200" strokeWidth={1.8} fill="none" strokeLinecap="round"
        />
      )}
    </>
  );
}

// ── Shared face drawn on top of hair ─────────────────────────────────────────
function Face({ skin, eyeY = 44, mouthY = 59, girl = false, iris = "#4A90D9" }: {
  skin: string; eyeY?: number; mouthY?: number; girl?: boolean; iris?: string;
}) {
  return (
    <>
      <circle cx="50" cy="46" r="30" fill={skin} />
      <Eye cx={38} cy={eyeY} iris={iris} girl={girl} />
      <Eye cx={62} cy={eyeY} iris={iris} girl={girl} />
      <ellipse cx={26} cy={mouthY - 4} rx={8}   ry={5}   fill="#FF8A80" opacity={0.4} />
      <ellipse cx={74} cy={mouthY - 4} rx={8}   ry={5}   fill="#FF8A80" opacity={0.4} />
      <path
        d={`M 38 ${mouthY} Q 50 ${mouthY + 9} 62 ${mouthY}`}
        stroke="#C45050" strokeWidth={2.5} fill="none" strokeLinecap="round"
      />
    </>
  );
}

function Shirt({ color, skin }: { color: string; skin: string }) {
  return (
    <>
      <rect x="43" y="73" width="14" height="11" rx="4" fill={skin} />
      <path d="M 5 84 Q 10 77 28 77 Q 50 85 72 77 Q 90 77 95 84 L 100 120 L 0 120 Z" fill={color} />
    </>
  );
}

// ── Mathematics — boy, dark+brown swept hair, chalkboard ─────────────────────
export function MathKid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect x="17" y="34" width="9" height="48" rx="4" fill="#212121" />
      <rect x="74" y="34" width="9" height="48" rx="4" fill="#212121" />
      <Shirt color="#1565C0" skin={skin} />
      <Face skin={skin} iris="#42A5F5" />
      <path d={DOME} fill="#212121" />
      <path d="M 20 44 C 28 22 46 16 64 19 C 46 17 30 27 26 44 Z" fill="#5D4037" />
      {/* Chalkboard */}
      <rect x="65" y="55" width="27" height="20" rx="3" fill="#1B5E20" />
      <rect x="67" y="57" width="23" height="16" rx="2" fill="#2E7D32" />
      <text x="78.5" y="64" fontSize="5.5" fill="white" textAnchor="middle"
        fontFamily="Arial,sans-serif" fontWeight="bold">1+2</text>
      <text x="78.5" y="70" fontSize="5.5" fill="#A5D6A7" textAnchor="middle"
        fontFamily="Arial,sans-serif" fontWeight="bold">=3</text>
    </svg>
  );
}

// ── English — girl, brown pigtails, open ABC book ─────────────────────────────
export function EnglishKid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <ellipse cx="14" cy="50" rx="12" ry="20" fill="#8B5E3C" />
      <ellipse cx="86" cy="50" rx="12" ry="20" fill="#8B5E3C" />
      <Shirt color="#C62828" skin={skin} />
      <Face skin={skin} girl iris="#66BB6A" />
      <path d={DOME} fill="#8B5E3C" />
      <line x1="50" y1="16" x2="50" y2="40" stroke="#6B4226" strokeWidth="2.5" />
      <ellipse cx="14" cy="38" rx="8" ry="5" fill="#F06292" />
      {/* Open book */}
      <path d="M 36 58 L 36 78 Q 49 74 50 78 L 50 58 Q 38 54 36 58 Z" fill="#EF9A9A" />
      <path d="M 64 58 L 64 78 Q 51 74 50 78 L 50 58 Q 62 54 64 58 Z" fill="#E53935" />
      <line x1="50" y1="58" x2="50" y2="78" stroke="#C62828" strokeWidth="1.5" />
      <text x="57" y="70" fontSize="6" fill="white" textAnchor="middle"
        fontFamily="Arial,sans-serif" fontWeight="bold">ABC</text>
    </svg>
  );
}

// ── Science — girl, brown ponytail, beaker with liquid ────────────────────────
export function ScienceKid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Ponytail behind right side */}
      <rect x="64" y="18" width="12" height="44" rx="6" fill="#8B5E3C" />
      <rect x="17" y="34" width="9" height="44" rx="4" fill="#8B5E3C" />
      <Shirt color="#0277BD" skin={skin} />
      <Face skin={skin} girl iris="#00BCD4" />
      <path d={DOME} fill="#8B5E3C" />
      <ellipse cx="70" cy="27" rx="5" ry="4" fill="#E91E63" />
      {/* Beaker */}
      <path d="M 70 56 L 66 72 Q 66 81 76 81 Q 86 81 86 72 L 82 56 Z" fill="#B3E5FC" stroke="#0288D1" strokeWidth="1.5" />
      <ellipse cx="76" cy="56" rx="7" ry="3" fill="#E1F5FE" stroke="#0288D1" strokeWidth="1" />
      <path d="M 68 70 Q 68 79 76 79 Q 84 79 84 70 Z" fill="#29B6F6" opacity={0.78} />
      <circle cx="74" cy="68" r="2"   fill="white" opacity={0.6} />
      <circle cx="79" cy="64" r="1.5" fill="white" opacity={0.5} />
    </svg>
  );
}

// ── EVS / General Awareness — boy, dark hair, leaf + sun ─────────────────────
export function EvsKid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect x="17" y="38" width="8" height="14" rx="4" fill="#212121" />
      <rect x="75" y="38" width="8" height="14" rx="4" fill="#212121" />
      <Shirt color="#2E7D32" skin={skin} />
      <Face skin={skin} iris="#8BC34A" />
      <path d={DOME} fill="#212121" />
      {/* Leaf */}
      <path d="M 66 55 C 68 42 86 38 90 51 C 94 64 78 72 68 64 Z" fill="#4CAF50" />
      <path d="M 66 55 C 73 57 82 58 90 51" stroke="#1B5E20" strokeWidth="1.2" fill="none" />
      <line x1="66" y1="55" x2="82" y2="49" stroke="#1B5E20" strokeWidth="1.2" />
      {/* Mini sun */}
      <circle cx="80" cy="22" r="7" fill="#FDD835" />
      {["0","45","90","135","180","225","270","315"].map((deg, i) => {
        const r = Number(deg) * Math.PI / 180;
        return (
          <line key={i}
            x1={80 + Math.cos(r) * 9}  y1={22 + Math.sin(r) * 9}
            x2={80 + Math.cos(r) * 12} y2={22 + Math.sin(r) * 12}
            stroke="#FDD835" strokeWidth="2" strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

// ── GK — girl, caramel bun hair, globe ───────────────────────────────────────
export function GkKid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <circle cx="50" cy="13" r="10" fill="#C8A96E" />
      <rect x="12" y="26" width="13" height="72" rx="6" fill="#C8A96E" />
      <rect x="75" y="26" width="13" height="72" rx="6" fill="#C8A96E" />
      <Shirt color="#6A1B9A" skin={skin} />
      <Face skin={skin} girl iris="#AB47BC" />
      <path d={DOME} fill="#C8A96E" />
      {/* Globe */}
      <circle cx="77" cy="64" r="14" fill="#1565C0" />
      <ellipse cx="77" cy="64" rx="5"  ry="14" fill="none" stroke="#64B5F6" strokeWidth="1" />
      <ellipse cx="77" cy="59" rx="14" ry="5"  fill="none" stroke="#64B5F6" strokeWidth="0.8" />
      <line x1="63" y1="64" x2="91" y2="64" stroke="#64B5F6" strokeWidth="1" />
      <circle cx="77" cy="64" r="14" fill="none" stroke="#0D47A1" strokeWidth="1.5" />
    </svg>
  );
}

// ── Reasoning — boy, dark hair with fringe, glowing lightbulb ────────────────
export function ReasoningKid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect x="17" y="38" width="8" height="14" rx="4" fill="#1a1a1a" />
      <rect x="75" y="38" width="8" height="14" rx="4" fill="#1a1a1a" />
      <Shirt color="#E65100" skin={skin} />
      <Face skin={skin} iris="#FF8F00" />
      <path d={DOME} fill="#1a1a1a" />
      <path d="M 20 44 C 28 22 46 16 64 19 C 46 17 30 27 26 44 Z" fill="#5D4037" />
      {/* Glowing bulb */}
      <circle cx="76" cy="22" r="11" fill="#FFF176" />
      <circle cx="76" cy="22" r="11" fill="none" stroke="#F9A825" strokeWidth="1.5" />
      <path d="M 70 28 Q 70 34 76 34 Q 82 34 82 28" stroke="#F9A825" strokeWidth="1.5" fill="none" />
      <rect x="73" y="33" width="6" height="4" rx="1" fill="#BDBDBD" />
      <line x1="76" y1="10" x2="76" y2="6"  stroke="#FDD835" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="66" y1="14" x2="63" y2="11" stroke="#FDD835" strokeWidth="2"   strokeLinecap="round" />
      <line x1="86" y1="14" x2="89" y2="11" stroke="#FDD835" strokeWidth="2"   strokeLinecap="round" />
      <line x1="64" y1="22" x2="60" y2="22" stroke="#FDD835" strokeWidth="2"   strokeLinecap="round" />
      <line x1="88" y1="22" x2="92" y2="22" stroke="#FDD835" strokeWidth="2"   strokeLinecap="round" />
    </svg>
  );
}

// ── Social Studies — girl, brown ponytail + hair tie, map scroll ──────────────
export function SocialStudiesKid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect x="64" y="18" width="12" height="50" rx="6" fill="#8B5E3C" />
      <rect x="17" y="34" width="9"  height="44" rx="4" fill="#8B5E3C" />
      <Shirt color="#B71C1C" skin={skin} />
      <Face skin={skin} girl iris="#FF5722" />
      <path d={DOME} fill="#8B5E3C" />
      <ellipse cx="70" cy="26" rx="6" ry="5" fill="#E91E63" />
      {/* Map scroll */}
      <rect x="63" y="54" width="28" height="22" rx="4" fill="#FFF8E1" stroke="#F9A825" strokeWidth="1.5" />
      <line x1="70" y1="61" x2="85" y2="61" stroke="#8D6E63" strokeWidth="1.2" />
      <line x1="70" y1="66" x2="85" y2="66" stroke="#8D6E63" strokeWidth="1.2" />
      <line x1="70" y1="71" x2="78" y2="71" stroke="#8D6E63" strokeWidth="1.2" />
      <circle cx="80" cy="63" r="4" fill="none" stroke="#F9A825" strokeWidth="1.2" />
      <circle cx="80" cy="63" r="1.5" fill="#F9A825" />
    </svg>
  );
}

// ── Coloring & Creative / Social Emotional — girl, buns, artist palette ───────
export function ArtKid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <circle cx="28" cy="15" r="9" fill="#8B5E3C" />
      <circle cx="72" cy="15" r="9" fill="#8B5E3C" />
      <rect x="13" y="22" width="12" height="72" rx="6" fill="#8B5E3C" />
      <rect x="75" y="22" width="12" height="72" rx="6" fill="#8B5E3C" />
      <Shirt color="#880E4F" skin={skin} />
      <Face skin={skin} girl iris="#E040FB" />
      <path d={DOME} fill="#8B5E3C" />
      {/* Palette */}
      <path d="M 63 53 C 63 47 69 43 77 45 C 87 43 93 51 91 59 C 89 69 79 71 73 67 C 65 69 61 61 63 53 Z" fill="#FFECB3" />
      <circle cx="70" cy="49" r="3.5" fill="#E53935" />
      <circle cx="79" cy="47" r="3.5" fill="#FDD835" />
      <circle cx="87" cy="54" r="3.5" fill="#43A047" />
      <circle cx="86" cy="63" r="3.5" fill="#1E88E5" />
      <ellipse cx="77" cy="54" rx="4.5" ry="4.5" fill="white" />
    </svg>
  );
}

// ── Logic Thinking — boy, dark hair, puzzle piece ────────────────────────────
export function LogicKid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect x="17" y="38" width="8" height="14" rx="4" fill="#1a1a1a" />
      <rect x="75" y="38" width="8" height="14" rx="4" fill="#1a1a1a" />
      <Shirt color="#4A148C" skin={skin} />
      <Face skin={skin} iris="#CE93D8" />
      <path d={DOME} fill="#1a1a1a" />
      {/* Puzzle piece */}
      <path
        d="M 63 52 L 63 63 Q 68 61 68 66 Q 68 71 63 69 L 63 80
           L 92 80 L 92 69 Q 87 71 87 66 Q 87 61 92 63 L 92 52 Z"
        fill="#7E57C2" stroke="#4527A0" strokeWidth="1.2"
      />
      <line x1="63" y1="66" x2="92" y2="66" stroke="#4527A0" strokeWidth="0.8" opacity={0.5} />
    </svg>
  );
}

// ── Shapes & Visual — boy, brown hair, floating geometric shapes ──────────────
export function ShapesKid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect x="17" y="38" width="8" height="14" rx="4" fill="#5D4037" />
      <rect x="75" y="38" width="8" height="14" rx="4" fill="#5D4037" />
      <Shirt color="#00695C" skin={skin} />
      <Face skin={skin} iris="#26C6DA" />
      <path d={DOME} fill="#5D4037" />
      {/* Shapes prop */}
      <circle cx="81" cy="55" r="11" fill="#29B6F6" opacity={0.88} />
      <path d="M 64 74 L 72 58 L 80 74 Z" fill="#FF7043" opacity={0.92} />
      <rect x="64" y="54" width="12" height="12" rx="2" fill="#66BB6A" opacity={0.88} />
    </svg>
  );
}

// ── Two-tone hair boy for kindergarten subjects ───────────────────────────────
export function KgSubjectKid({ className, style }: KidProps) {
  const skin = "#FDDAB9";
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <Shirt color="#FF8F00" skin={skin} />
      <Face skin={skin} girl iris="#FFCA28" />
      {/* Long blonde side panels */}
      <rect x="11" y="26" width="14" height="76" rx="7" fill="#FFCA28" />
      <rect x="75" y="26" width="14" height="76" rx="7" fill="#FFCA28" />
      <path d={DOME} fill="#FFCA28" />
      {/* Star props */}
      <text x="78" y="28" fontSize="18" textAnchor="middle" fontFamily="Arial,sans-serif">⭐</text>
    </svg>
  );
}

// ── Subject → kid component map ──────────────────────────────────────────────

const MAP: Record<string, (p: KidProps) => React.ReactElement> = {
  "mathematics":        MathKid,
  "english":           EnglishKid,
  "english-language":  KgSubjectKid,
  "science":           ScienceKid,
  "evs":              EvsKid,
  "general-awareness": EvsKid,
  "gk":               GkKid,
  "reasoning":        ReasoningKid,
  "logic-thinking":   LogicKid,
  "social-studies":   SocialStudiesKid,
  "coloring-creative": ArtKid,
  "social-emotional":  ArtKid,
  "shapes-visual":     ShapesKid,
};

export function SubjectKid({ subjectId, ...rest }: { subjectId: string } & KidProps) {
  const Comp = MAP[subjectId] ?? MathKid;
  return <Comp {...rest} />;
}
