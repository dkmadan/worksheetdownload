/**
 * Inline SVG kid characters — beautifully illustrated, one per grade.
 * All share viewBox="0 0 100 130".
 * Girls have big eyes with eyelashes + colored irises.
 * Boys have clean expressive eyes with highlights.
 * Skin and hair use gradients for depth.
 */

interface KidProps {
  className?: string;
  style?: React.CSSProperties;
}

// ── Shared eye helpers ───────────────────────────────────────────────────────

function GirlEye({ cx, cy, irisColor = "#795548", lashColor = "#3E2723" }: {
  cx: number; cy: number; irisColor?: string; lashColor?: string;
}) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx={9} ry={10} fill="white" />
      <circle cx={cx} cy={cy + 1} r={7}   fill={irisColor} />
      <circle cx={cx} cy={cy + 1} r={4.5} fill="#111" />
      <circle cx={cx - 3} cy={cy - 2} r={2.5} fill="white" />
      <circle cx={cx + 3} cy={cy + 3} r={1.2} fill="white" opacity={0.65} />
      {/* Upper lash arc */}
      <path d={`M ${cx-10} ${cy-8} Q ${cx} ${cy-14} ${cx+10} ${cy-8}`}
        stroke={lashColor} strokeWidth={3} fill="none" strokeLinecap="round" />
    </g>
  );
}

function BoyEye({ cx, cy, irisColor = "#5D4037" }: {
  cx: number; cy: number; irisColor?: string;
}) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx={8} ry={9} fill="white" />
      <circle cx={cx} cy={cy + 1} r={6}   fill={irisColor} />
      <circle cx={cx} cy={cy + 1} r={3.8} fill="#111" />
      <circle cx={cx - 2.5} cy={cy - 2} r={2} fill="white" />
      <circle cx={cx + 2.5} cy={cy + 2.5} r={1} fill="white" opacity={0.6} />
    </g>
  );
}

function Brow({ x1, y1, mx, my, x2, y2, color }: {
  x1: number; y1: number; mx: number; my: number; x2: number; y2: number; color: string;
}) {
  return (
    <path d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`}
      stroke={color} strokeWidth={2.4} fill="none" strokeLinecap="round" />
  );
}

// ── KG — Girl, pigtails + pink bows, dress ──────────────────────────────────
export function KgKid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <defs>
        <linearGradient id="kg-sk" x1="50" y1="6"  x2="50" y2="75"  gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FFECD2" />
          <stop offset="100%" stopColor="#FFD09B" />
        </linearGradient>
        <linearGradient id="kg-hr" x1="50" y1="0"  x2="50" y2="50"  gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#8D6E63" />
          <stop offset="100%" stopColor="#3E2723" />
        </linearGradient>
        <linearGradient id="kg-dr" x1="50" y1="60" x2="50" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#F48FB1" />
          <stop offset="100%" stopColor="#E91E8C" />
        </linearGradient>
      </defs>

      {/* ── Pigtail spheres (behind head) ── */}
      <circle cx="12" cy="28" r="12" fill="url(#kg-hr)" />
      <circle cx="88" cy="28" r="12" fill="url(#kg-hr)" />
      {/* Pink bows */}
      <ellipse cx="7"  cy="20" rx="5" ry="3" transform="rotate(-30 7 20)"  fill="#FF1493" />
      <ellipse cx="17" cy="20" rx="5" ry="3" transform="rotate(30 17 20)"  fill="#FF1493" />
      <circle  cx="12" cy="20" r="3.5" fill="#FF69B4" />
      <ellipse cx="83" cy="20" rx="5" ry="3" transform="rotate(-30 83 20)" fill="#FF1493" />
      <ellipse cx="93" cy="20" rx="5" ry="3" transform="rotate(30 93 20)"  fill="#FF1493" />
      <circle  cx="88" cy="20" r="3.5" fill="#FF69B4" />

      {/* ── Shoes ── */}
      <ellipse cx="31" cy="125" rx="13" ry="6.5" fill="#E91E8C" />
      <ellipse cx="69" cy="125" rx="13" ry="6.5" fill="#E91E8C" />
      {/* Shoe strap */}
      <rect x="22" y="119" width="18" height="5" rx="2.5" fill="#C2185B" />
      <rect x="60" y="119" width="18" height="5" rx="2.5" fill="#C2185B" />

      {/* ── Legs ── */}
      <rect x="22" y="98" width="18" height="26" rx="9"  fill="#FFDDE9" />
      <rect x="60" y="98" width="18" height="26" rx="9"  fill="#FFDDE9" />

      {/* ── Dress skirt flare ── */}
      <path d="M 16 78 Q 50 100 84 78 L 82 102 Q 50 116 18 102 Z" fill="#F06292" />
      {/* ── Dress bodice ── */}
      <rect x="24" y="62" width="52" height="24" rx="13" fill="url(#kg-dr)" />
      {/* ── Arms ── */}
      <rect x="4"  y="64" width="22" height="28" rx="11" fill="url(#kg-dr)" />
      <rect x="74" y="64" width="22" height="28" rx="11" fill="url(#kg-dr)" />
      {/* ── Hands ── */}
      <circle cx="15" cy="93" r="10" fill="url(#kg-sk)" />
      <circle cx="85" cy="93" r="10" fill="url(#kg-sk)" />

      {/* ── Neck ── */}
      <rect x="41" y="56" width="18" height="10" rx="5" fill="url(#kg-sk)" />

      {/* ── Head ── */}
      <ellipse cx="50" cy="36" rx="30" ry="33" fill="url(#kg-sk)" />
      {/* ── Top hair ── */}
      <path d="M 20 30 C 20 6 80 6 80 30 C 80 15 50 5 50 5 Z" fill="url(#kg-hr)" />

      {/* ── Ears ── */}
      <ellipse cx="20" cy="38" rx="5" ry="7.5" fill="#FFD09B" />
      <ellipse cx="80" cy="38" rx="5" ry="7.5" fill="#FFD09B" />

      {/* ── Eyes ── */}
      <GirlEye cx={36} cy={35} irisColor="#6D4C41" lashColor="#3E2723" />
      <GirlEye cx={64} cy={35} irisColor="#6D4C41" lashColor="#3E2723" />

      {/* ── Eyebrows ── */}
      <Brow x1={25} y1={22} mx={36} my={18} x2={47} y2={22} color="#5D4037" />
      <Brow x1={53} y1={22} mx={64} my={18} x2={75} y2={22} color="#5D4037" />

      {/* ── Nose ── */}
      <ellipse cx="50" cy="49" rx="3.5" ry="2" fill="#FFD09B" style={{ filter: "brightness(0.88)" }} />

      {/* ── Smile ── */}
      <path d="M 37 57 Q 50 68 63 57" stroke="#C62828" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M 39 57 Q 50 65 61 57" fill="#FF8A80" opacity="0.45" />

      {/* ── Cheeks ── */}
      <ellipse cx="20" cy="46" rx="9"  ry="6.5" fill="#FF9999" opacity="0.38" />
      <ellipse cx="80" cy="46" rx="9"  ry="6.5" fill="#FF9999" opacity="0.38" />

      {/* ── Collar bow ── */}
      <ellipse cx="44" cy="64" rx="5" ry="3" transform="rotate(-20 44 64)" fill="#FF4081" />
      <ellipse cx="56" cy="64" rx="5" ry="3" transform="rotate(20 56 64)"  fill="#FF4081" />
      <circle  cx="50" cy="64" r="3.5" fill="#FF80AB" />
    </svg>
  );
}

// ── G1 — Boy, neat short hair, blue shirt ───────────────────────────────────
export function G1Kid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <defs>
        <linearGradient id="g1-sk" x1="50" y1="6"  x2="50" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FFDDB4" />
          <stop offset="100%" stopColor="#FFBF7A" />
        </linearGradient>
        <linearGradient id="g1-hr" x1="50" y1="0"  x2="50" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#37240E" />
          <stop offset="100%" stopColor="#1a0a00" />
        </linearGradient>
        <linearGradient id="g1-sh" x1="50" y1="60" x2="50" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#42A5F5" />
          <stop offset="100%" stopColor="#1565C0" />
        </linearGradient>
      </defs>

      {/* ── Shoes ── */}
      <ellipse cx="31" cy="125" rx="13" ry="6" fill="#1a1a2e" />
      <ellipse cx="69" cy="125" rx="13" ry="6" fill="#1a1a2e" />
      {/* ── Pants ── */}
      <rect x="22" y="98" width="19" height="28" rx="9.5" fill="#263238" />
      <rect x="59" y="98" width="19" height="28" rx="9.5" fill="#263238" />
      {/* ── Shirt ── */}
      <rect x="20" y="62" width="60" height="40" rx="14" fill="url(#g1-sh)" />
      {/* ── Arms ── */}
      <rect x="2"  y="64" width="20" height="30" rx="10" fill="url(#g1-sh)" />
      <rect x="78" y="64" width="20" height="30" rx="10" fill="url(#g1-sh)" />
      {/* ── Hands ── */}
      <circle cx="12" cy="95" r="10" fill="url(#g1-sk)" />
      <circle cx="88" cy="95" r="10" fill="url(#g1-sk)" />
      {/* ── Collar ── */}
      <path d="M 36 62 L 50 76 L 64 62" fill="white" opacity="0.2" />
      {/* ── Neck ── */}
      <rect x="41" y="56" width="18" height="10" rx="5" fill="url(#g1-sk)" />

      {/* ── Head ── */}
      <ellipse cx="50" cy="36" rx="30" ry="33" fill="url(#g1-sk)" />
      {/* ── Short boy hair ── */}
      <path d="M 20 28 C 20 5 80 5 80 28 C 80 14 50 4 50 4 Z" fill="url(#g1-hr)" />
      <rect x="18" y="24" width="7"  height="16" rx="3.5" fill="url(#g1-hr)" />
      <rect x="75" y="24" width="7"  height="14" rx="3.5" fill="url(#g1-hr)" />

      {/* ── Ears ── */}
      <ellipse cx="20" cy="38" rx="5" ry="7.5" fill="#FFBF7A" />
      <ellipse cx="80" cy="38" rx="5" ry="7.5" fill="#FFBF7A" />

      {/* ── Eyes ── */}
      <BoyEye cx={36} cy={35} irisColor="#5D4037" />
      <BoyEye cx={64} cy={35} irisColor="#5D4037" />

      {/* ── Eyebrows ── */}
      <Brow x1={25} y1={23} mx={36} my={19} x2={47} y2={23} color="#37240E" />
      <Brow x1={53} y1={23} mx={64} my={19} x2={75} y2={23} color="#37240E" />

      {/* ── Nose ── */}
      <ellipse cx="50" cy="48" rx="3" ry="2" fill="#FFBF7A" style={{ filter: "brightness(0.88)" }} />
      {/* ── Smile ── */}
      <path d="M 37 57 Q 50 68 63 57" stroke="#B71C1C" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {/* ── Cheeks ── */}
      <ellipse cx="20" cy="46" rx="9" ry="6" fill="#FF9999" opacity="0.35" />
      <ellipse cx="80" cy="46" rx="9" ry="6" fill="#FF9999" opacity="0.35" />
    </svg>
  );
}

// ── G2 — Girl, high ponytail, green outfit ──────────────────────────────────
export function G2Kid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <defs>
        <linearGradient id="g2-sk" x1="50" y1="6"  x2="50" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FFE8C8" />
          <stop offset="100%" stopColor="#FFCC8A" />
        </linearGradient>
        <linearGradient id="g2-hr" x1="50" y1="0"  x2="50" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#6D4C41" />
          <stop offset="100%" stopColor="#3E2723" />
        </linearGradient>
        <linearGradient id="g2-sh" x1="50" y1="60" x2="50" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#66BB6A" />
          <stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
      </defs>

      {/* ── Ponytail (behind head, top) ── */}
      <circle cx="50" cy="6"  r="10" fill="url(#g2-hr)" />
      <rect   x="46" y="6"   width="8" height="14" rx="4" fill="url(#g2-hr)" />
      {/* Scrunchie */}
      <rect x="44" y="14" width="12" height="6" rx="3" fill="#A5D6A7" />

      {/* ── Shoes ── */}
      <ellipse cx="31" cy="125" rx="13" ry="6" fill="#1B5E20" />
      <ellipse cx="69" cy="125" rx="13" ry="6" fill="#1B5E20" />
      {/* ── Pants ── */}
      <rect x="22" y="98" width="19" height="28" rx="9.5" fill="#1B5E20" />
      <rect x="59" y="98" width="19" height="28" rx="9.5" fill="#1B5E20" />
      {/* ── Shirt ── */}
      <rect x="20" y="62" width="60" height="40" rx="14" fill="url(#g2-sh)" />
      {/* ── Arms ── */}
      <rect x="2"  y="64" width="20" height="30" rx="10" fill="url(#g2-sh)" />
      <rect x="78" y="64" width="20" height="30" rx="10" fill="url(#g2-sh)" />
      {/* ── Hands ── */}
      <circle cx="12" cy="95" r="10" fill="url(#g2-sk)" />
      <circle cx="88" cy="95" r="10" fill="url(#g2-sk)" />
      {/* ── Neck ── */}
      <rect x="41" y="56" width="18" height="10" rx="5" fill="url(#g2-sk)" />

      {/* ── Long side hair (behind head) ── */}
      <rect x="16" y="26" width="10" height="38" rx="5" fill="url(#g2-hr)" />
      <rect x="74" y="26" width="10" height="38" rx="5" fill="url(#g2-hr)" />

      {/* ── Head ── */}
      <ellipse cx="50" cy="36" rx="30" ry="33" fill="url(#g2-sk)" />
      {/* ── Top hair ── */}
      <path d="M 20 28 C 20 6 80 6 80 28 C 80 14 50 4 50 4 Z" fill="url(#g2-hr)" />

      {/* ── Ears ── */}
      <ellipse cx="20" cy="38" rx="5" ry="7.5" fill="#FFCC8A" />
      <ellipse cx="80" cy="38" rx="5" ry="7.5" fill="#FFCC8A" />

      {/* ── Eyes ── */}
      <GirlEye cx={36} cy={35} irisColor="#4CAF50" lashColor="#3E2723" />
      <GirlEye cx={64} cy={35} irisColor="#4CAF50" lashColor="#3E2723" />

      {/* ── Eyebrows ── */}
      <Brow x1={25} y1={22} mx={36} my={18} x2={47} y2={22} color="#5D4037" />
      <Brow x1={53} y1={22} mx={64} my={18} x2={75} y2={22} color="#5D4037" />

      {/* ── Nose / Smile / Cheeks ── */}
      <ellipse cx="50" cy="48" rx="3" ry="2" fill="#FFCC8A" style={{ filter: "brightness(0.88)" }} />
      <path d="M 37 57 Q 50 68 63 57" stroke="#C62828" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M 39 57 Q 50 65 61 57" fill="#FF8A80" opacity="0.45" />
      <ellipse cx="20" cy="46" rx="9" ry="6.5" fill="#FF9999" opacity="0.38" />
      <ellipse cx="80" cy="46" rx="9" ry="6.5" fill="#FF9999" opacity="0.38" />
    </svg>
  );
}

// ── G3 — Boy, natural curly hair, orange shirt, darker skin ─────────────────
export function G3Kid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <defs>
        <linearGradient id="g3-sk" x1="50" y1="6"  x2="50" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#D4956A" />
          <stop offset="100%" stopColor="#A0622A" />
        </linearGradient>
        <linearGradient id="g3-sh" x1="50" y1="60" x2="50" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FF7043" />
          <stop offset="100%" stopColor="#E64A19" />
        </linearGradient>
      </defs>
      {/* ── Afro/Curly mass ── */}
      <circle cx="50" cy="24" r="30" fill="#1A0A00" />
      {/* Curly texture picks */}
      <circle cx="26" cy="10" r="6" fill="#1A0A00" />
      <circle cx="38" cy="5"  r="7" fill="#1A0A00" />
      <circle cx="50" cy="3"  r="7" fill="#1A0A00" />
      <circle cx="62" cy="5"  r="7" fill="#1A0A00" />
      <circle cx="74" cy="10" r="6" fill="#1A0A00" />
      <circle cx="20" cy="18" r="5" fill="#1A0A00" />
      <circle cx="80" cy="18" r="5" fill="#1A0A00" />
      {/* ── Shoes ── */}
      <ellipse cx="31" cy="125" rx="13" ry="6" fill="#1a1a1a" />
      <ellipse cx="69" cy="125" rx="13" ry="6" fill="#1a1a1a" />
      {/* ── Pants ── */}
      <rect x="22" y="98" width="19" height="28" rx="9.5" fill="#4E342E" />
      <rect x="59" y="98" width="19" height="28" rx="9.5" fill="#4E342E" />
      {/* ── Shirt ── */}
      <rect x="20" y="62" width="60" height="40" rx="14" fill="url(#g3-sh)" />
      {/* ── Arms ── */}
      <rect x="2"  y="64" width="20" height="30" rx="10" fill="url(#g3-sh)" />
      <rect x="78" y="64" width="20" height="30" rx="10" fill="url(#g3-sh)" />
      {/* ── Hands ── */}
      <circle cx="12" cy="95" r="10" fill="url(#g3-sk)" />
      <circle cx="88" cy="95" r="10" fill="url(#g3-sk)" />
      {/* ── Neck ── */}
      <rect x="41" y="56" width="18" height="10" rx="5" fill="url(#g3-sk)" />
      {/* ── Head ── */}
      <ellipse cx="50" cy="36" rx="28" ry="30" fill="url(#g3-sk)" />
      {/* ── Ears ── */}
      <ellipse cx="22" cy="38" rx="5" ry="7" fill="#A0622A" />
      <ellipse cx="78" cy="38" rx="5" ry="7" fill="#A0622A" />
      {/* ── Eyes ── */}
      <BoyEye cx={36} cy={35} irisColor="#5D2E0C" />
      <BoyEye cx={64} cy={35} irisColor="#5D2E0C" />
      {/* ── Eyebrows ── */}
      <Brow x1={26} y1={23} mx={36} my={19} x2={46} y2={23} color="#1A0A00" />
      <Brow x1={54} y1={23} mx={64} my={19} x2={74} y2={23} color="#1A0A00" />
      {/* ── Nose / Smile / Cheeks ── */}
      <ellipse cx="50" cy="48" rx="3" ry="2" fill="#A0622A" style={{ filter: "brightness(0.88)" }} />
      <path d="M 37 57 Q 50 68 63 57" stroke="#7B1818" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <ellipse cx="22" cy="46" rx="8" ry="6" fill="#FF9999" opacity="0.3" />
      <ellipse cx="78" cy="46" rx="8" ry="6" fill="#FF9999" opacity="0.3" />
    </svg>
  );
}

// ── G4 — Girl, bob haircut + round glasses, teal outfit ─────────────────────
export function G4Kid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <defs>
        <linearGradient id="g4-sk" x1="50" y1="6"  x2="50" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FFE0CC" />
          <stop offset="100%" stopColor="#FFBA87" />
        </linearGradient>
        <linearGradient id="g4-hr" x1="50" y1="0"  x2="50" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#BF360C" />
          <stop offset="100%" stopColor="#7B2300" />
        </linearGradient>
        <linearGradient id="g4-sh" x1="50" y1="60" x2="50" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#4DB6AC" />
          <stop offset="100%" stopColor="#00796B" />
        </linearGradient>
      </defs>
      {/* ── Bob hair sides (behind head) ── */}
      <rect x="16" y="24" width="11" height="26" rx="5.5" fill="url(#g4-hr)" />
      <rect x="73" y="24" width="11" height="26" rx="5.5" fill="url(#g4-hr)" />
      {/* ── Shoes ── */}
      <ellipse cx="31" cy="125" rx="13" ry="6" fill="#004D40" />
      <ellipse cx="69" cy="125" rx="13" ry="6" fill="#004D40" />
      {/* ── Pants ── */}
      <rect x="22" y="98" width="19" height="28" rx="9.5" fill="#004D40" />
      <rect x="59" y="98" width="19" height="28" rx="9.5" fill="#004D40" />
      {/* ── Shirt ── */}
      <rect x="20" y="62" width="60" height="40" rx="14" fill="url(#g4-sh)" />
      {/* ── Arms ── */}
      <rect x="2"  y="64" width="20" height="30" rx="10" fill="url(#g4-sh)" />
      <rect x="78" y="64" width="20" height="30" rx="10" fill="url(#g4-sh)" />
      {/* ── Hands ── */}
      <circle cx="12" cy="95" r="10" fill="url(#g4-sk)" />
      <circle cx="88" cy="95" r="10" fill="url(#g4-sk)" />
      {/* ── Neck ── */}
      <rect x="41" y="56" width="18" height="10" rx="5" fill="url(#g4-sk)" />
      {/* ── Head ── */}
      <ellipse cx="50" cy="36" rx="30" ry="33" fill="url(#g4-sk)" />
      {/* ── Bob top hair ── */}
      <path d="M 20 28 C 20 6 80 6 80 28 C 80 14 50 4 50 4 Z" fill="url(#g4-hr)" />
      {/* ── Ears ── */}
      <ellipse cx="20" cy="38" rx="5" ry="7.5" fill="#FFBA87" />
      <ellipse cx="80" cy="38" rx="5" ry="7.5" fill="#FFBA87" />
      {/* ── Eyes (behind glasses) ── */}
      <GirlEye cx={36} cy={35} irisColor="#1565C0" lashColor="#7B2300" />
      <GirlEye cx={64} cy={35} irisColor="#1565C0" lashColor="#7B2300" />
      {/* ── Round glasses ── */}
      <g stroke="#4a3728" strokeWidth="1.8" fill="none">
        <circle cx="36" cy="36" r="11" />
        <circle cx="64" cy="36" r="11" />
        <line x1="47" y1="36" x2="53" y2="36" />
        <line x1="25" y1="36" x2="18" y2="38" />
        <line x1="75" y1="36" x2="82" y2="38" />
      </g>
      {/* ── Eyebrows ── */}
      <Brow x1={24} y1={22} mx={36} my={18} x2={48} y2={22} color="#7B2300" />
      <Brow x1={52} y1={22} mx={64} my={18} x2={76} y2={22} color="#7B2300" />
      {/* ── Nose / Smile / Cheeks ── */}
      <ellipse cx="50" cy="48" rx="3" ry="2" fill="#FFBA87" style={{ filter: "brightness(0.88)" }} />
      <path d="M 37 57 Q 50 68 63 57" stroke="#C62828" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M 39 57 Q 50 65 61 57" fill="#FF8A80" opacity="0.45" />
      <ellipse cx="20" cy="48" rx="9" ry="6.5" fill="#FF9999" opacity="0.38" />
      <ellipse cx="80" cy="48" rx="9" ry="6.5" fill="#FF9999" opacity="0.38" />
    </svg>
  );
}

// ── G5 — Boy, side-part medium hair, violet hoodie ──────────────────────────
export function G5Kid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <defs>
        <linearGradient id="g5-sk" x1="50" y1="6"  x2="50" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FFDDB4" />
          <stop offset="100%" stopColor="#FFB870" />
        </linearGradient>
        <linearGradient id="g5-hr" x1="50" y1="0"  x2="50" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#4E342E" />
          <stop offset="100%" stopColor="#1A0A00" />
        </linearGradient>
        <linearGradient id="g5-sh" x1="50" y1="60" x2="50" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#9C27B0" />
          <stop offset="100%" stopColor="#4A148C" />
        </linearGradient>
      </defs>
      {/* ── Shoes ── */}
      <ellipse cx="31" cy="125" rx="13" ry="6" fill="#212121" />
      <ellipse cx="69" cy="125" rx="13" ry="6" fill="#212121" />
      {/* ── Pants ── */}
      <rect x="22" y="98" width="19" height="28" rx="9.5" fill="#263238" />
      <rect x="59" y="98" width="19" height="28" rx="9.5" fill="#263238" />
      {/* ── Hoodie ── */}
      <rect x="20" y="62" width="60" height="40" rx="14" fill="url(#g5-sh)" />
      {/* Hoodie pocket */}
      <rect x="38" y="88" width="24" height="10" rx="5" fill="#6A1B9A" />
      {/* ── Arms ── */}
      <rect x="2"  y="64" width="20" height="30" rx="10" fill="url(#g5-sh)" />
      <rect x="78" y="64" width="20" height="30" rx="10" fill="url(#g5-sh)" />
      {/* ── Hands ── */}
      <circle cx="12" cy="95" r="10" fill="url(#g5-sk)" />
      <circle cx="88" cy="95" r="10" fill="url(#g5-sk)" />
      {/* ── Neck ── */}
      <rect x="41" y="56" width="18" height="10" rx="5" fill="url(#g5-sk)" />
      {/* ── Head ── */}
      <ellipse cx="50" cy="36" rx="30" ry="33" fill="url(#g5-sk)" />
      {/* ── Side-part hair ── */}
      <path d="M 20 27 C 20 5 80 5 80 27 C 80 13 50 3 50 3 Z" fill="url(#g5-hr)" />
      {/* Side part sweep */}
      <path d="M 20 27 Q 32 10 48 18 Q 32 18 20 27 Z" fill="url(#g5-hr)" />
      <rect x="18" y="22" width="7" height="18" rx="3.5" fill="url(#g5-hr)" />
      {/* ── Ears ── */}
      <ellipse cx="20" cy="38" rx="5" ry="7.5" fill="#FFB870" />
      <ellipse cx="80" cy="38" rx="5" ry="7.5" fill="#FFB870" />
      {/* ── Eyes ── */}
      <BoyEye cx={36} cy={35} irisColor="#4E342E" />
      <BoyEye cx={64} cy={35} irisColor="#4E342E" />
      {/* ── Eyebrows ── */}
      <Brow x1={25} y1={23} mx={36} my={19} x2={47} y2={23} color="#4E342E" />
      <Brow x1={53} y1={23} mx={64} my={19} x2={75} y2={23} color="#4E342E" />
      {/* ── Nose / Smile / Cheeks ── */}
      <ellipse cx="50" cy="48" rx="3" ry="2" fill="#FFB870" style={{ filter: "brightness(0.88)" }} />
      <path d="M 37 57 Q 50 68 63 57" stroke="#B71C1C" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <ellipse cx="20" cy="46" rx="9" ry="6" fill="#FF9999" opacity="0.33" />
      <ellipse cx="80" cy="46" rx="9" ry="6" fill="#FF9999" opacity="0.33" />
    </svg>
  );
}

// ── G6 — Teen girl, long straight black hair, red top ───────────────────────
export function G6Kid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <defs>
        <linearGradient id="g6-sk" x1="50" y1="6"  x2="50" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FFCC8A" />
          <stop offset="100%" stopColor="#D4844A" />
        </linearGradient>
        <linearGradient id="g6-sh" x1="50" y1="60" x2="50" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#EF5350" />
          <stop offset="100%" stopColor="#B71C1C" />
        </linearGradient>
      </defs>
      {/* ── Long hair panels behind head ── */}
      <rect x="14" y="22" width="13" height="54" rx="6.5" fill="#111" />
      <rect x="73" y="22" width="13" height="54" rx="6.5" fill="#111" />
      {/* ── Shoes ── */}
      <ellipse cx="31" cy="125" rx="13" ry="6" fill="#111" />
      <ellipse cx="69" cy="125" rx="13" ry="6" fill="#111" />
      {/* ── Pants ── */}
      <rect x="22" y="98" width="19" height="28" rx="9.5" fill="#1a1a2e" />
      <rect x="59" y="98" width="19" height="28" rx="9.5" fill="#1a1a2e" />
      {/* ── Shirt ── */}
      <rect x="20" y="62" width="60" height="40" rx="14" fill="url(#g6-sh)" />
      {/* ── Arms ── */}
      <rect x="2"  y="64" width="20" height="30" rx="10" fill="url(#g6-sh)" />
      <rect x="78" y="64" width="20" height="30" rx="10" fill="url(#g6-sh)" />
      {/* ── Hands ── */}
      <circle cx="12" cy="95" r="10" fill="url(#g6-sk)" />
      <circle cx="88" cy="95" r="10" fill="url(#g6-sk)" />
      {/* ── Neck ── */}
      <rect x="41" y="56" width="18" height="10" rx="5" fill="url(#g6-sk)" />
      {/* ── Head ── */}
      <ellipse cx="50" cy="36" rx="30" ry="33" fill="url(#g6-sk)" />
      {/* ── Top hair ── */}
      <path d="M 20 28 C 20 6 80 6 80 28 C 80 14 50 4 50 4 Z" fill="#111" />
      {/* ── Ears ── */}
      <ellipse cx="20" cy="38" rx="5" ry="7.5" fill="#D4844A" />
      <ellipse cx="80" cy="38" rx="5" ry="7.5" fill="#D4844A" />
      {/* ── Eyes ── */}
      <GirlEye cx={36} cy={35} irisColor="#795548" lashColor="#111" />
      <GirlEye cx={64} cy={35} irisColor="#795548" lashColor="#111" />
      {/* ── Eyebrows ── */}
      <Brow x1={25} y1={22} mx={36} my={18} x2={47} y2={22} color="#111" />
      <Brow x1={53} y1={22} mx={64} my={18} x2={75} y2={22} color="#111" />
      {/* ── Nose / Smile / Cheeks ── */}
      <ellipse cx="50" cy="48" rx="3" ry="2" fill="#D4844A" style={{ filter: "brightness(0.88)" }} />
      <path d="M 37 57 Q 50 68 63 57" stroke="#7B1818" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M 39 57 Q 50 65 61 57" fill="#FF8A80" opacity="0.4" />
      <ellipse cx="20" cy="46" rx="9" ry="6.5" fill="#FF9999" opacity="0.35" />
      <ellipse cx="80" cy="46" rx="9" ry="6.5" fill="#FF9999" opacity="0.35" />
      {/* ── Earrings ── */}
      <circle cx="20" cy="46" r="3" fill="#FFD700" />
      <circle cx="80" cy="46" r="3" fill="#FFD700" />
    </svg>
  );
}

// ── G7 — Teen boy, casual hair, indigo jacket ───────────────────────────────
export function G7Kid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <defs>
        <linearGradient id="g7-sk" x1="50" y1="6"  x2="50" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#C8924A" />
          <stop offset="100%" stopColor="#8D5A1C" />
        </linearGradient>
        <linearGradient id="g7-sh" x1="50" y1="60" x2="50" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#3F51B5" />
          <stop offset="100%" stopColor="#1A237E" />
        </linearGradient>
      </defs>
      {/* ── Shoes ── */}
      <ellipse cx="31" cy="125" rx="13" ry="6" fill="#111" />
      <ellipse cx="69" cy="125" rx="13" ry="6" fill="#111" />
      {/* ── Pants ── */}
      <rect x="22" y="98" width="19" height="28" rx="9.5" fill="#263238" />
      <rect x="59" y="98" width="19" height="28" rx="9.5" fill="#263238" />
      {/* ── Jacket ── */}
      <rect x="20" y="62" width="60" height="40" rx="14" fill="url(#g7-sh)" />
      {/* Jacket lapels */}
      <path d="M 36 62 L 48 80 L 50 62" fill="#283593" />
      <path d="M 64 62 L 52 80 L 50 62" fill="#283593" />
      {/* White shirt underneath */}
      <rect x="44" y="62" width="12" height="24" rx="4" fill="white" opacity="0.25" />
      {/* ── Arms ── */}
      <rect x="2"  y="64" width="20" height="30" rx="10" fill="url(#g7-sh)" />
      <rect x="78" y="64" width="20" height="30" rx="10" fill="url(#g7-sh)" />
      {/* ── Hands ── */}
      <circle cx="12" cy="95" r="10" fill="url(#g7-sk)" />
      <circle cx="88" cy="95" r="10" fill="url(#g7-sk)" />
      {/* ── Neck ── */}
      <rect x="41" y="56" width="18" height="10" rx="5" fill="url(#g7-sk)" />
      {/* ── Head ── */}
      <ellipse cx="50" cy="36" rx="30" ry="33" fill="url(#g7-sk)" />
      {/* ── Casual swept hair ── */}
      <path d="M 20 27 C 20 5 80 5 80 27 C 80 13 50 3 50 3 Z" fill="#1C0A00" />
      <path d="M 20 27 Q 30 8 44 16 Q 30 18 20 27 Z" fill="#1C0A00" />
      <rect x="18" y="22" width="7" height="16" rx="3.5" fill="#1C0A00" />
      {/* ── Ears ── */}
      <ellipse cx="20" cy="38" rx="5" ry="7.5" fill="#8D5A1C" />
      <ellipse cx="80" cy="38" rx="5" ry="7.5" fill="#8D5A1C" />
      {/* ── Eyes ── */}
      <BoyEye cx={36} cy={35} irisColor="#5D2E0C" />
      <BoyEye cx={64} cy={35} irisColor="#5D2E0C" />
      {/* ── Eyebrows ── */}
      <Brow x1={25} y1={23} mx={36} my={19} x2={47} y2={23} color="#1C0A00" />
      <Brow x1={53} y1={23} mx={64} my={19} x2={75} y2={23} color="#1C0A00" />
      {/* ── Nose / Smile / Cheeks ── */}
      <ellipse cx="50" cy="48" rx="3" ry="2" fill="#8D5A1C" style={{ filter: "brightness(0.88)" }} />
      <path d="M 37 57 Q 50 68 63 57" stroke="#7B1818" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <ellipse cx="20" cy="46" rx="8" ry="6" fill="#FF9999" opacity="0.28" />
      <ellipse cx="80" cy="46" rx="8" ry="6" fill="#FF9999" opacity="0.28" />
    </svg>
  );
}

// ── G8 — Teen girl, neat bun, navy blazer ───────────────────────────────────
export function G8Kid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <defs>
        <linearGradient id="g8-sk" x1="50" y1="6"  x2="50" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FFECD2" />
          <stop offset="100%" stopColor="#FFCB87" />
        </linearGradient>
        <linearGradient id="g8-hr" x1="50" y1="0"  x2="50" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#5D4037" />
          <stop offset="100%" stopColor="#1C0A00" />
        </linearGradient>
        <linearGradient id="g8-sh" x1="50" y1="60" x2="50" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#546E7A" />
          <stop offset="100%" stopColor="#263238" />
        </linearGradient>
      </defs>
      {/* ── Hair bun on top ── */}
      <circle cx="50" cy="5"  r="12" fill="url(#g8-hr)" />
      <ellipse cx="50" cy="14" rx="9" ry="6" fill="url(#g8-hr)" />
      {/* ── Side hair ── */}
      <rect x="16" y="24" width="9" height="24" rx="4.5" fill="url(#g8-hr)" />
      <rect x="75" y="24" width="9" height="24" rx="4.5" fill="url(#g8-hr)" />
      {/* ── Shoes ── */}
      <ellipse cx="31" cy="125" rx="13" ry="6" fill="#111" />
      <ellipse cx="69" cy="125" rx="13" ry="6" fill="#111" />
      {/* ── Skirt/Pants ── */}
      <rect x="22" y="98" width="19" height="28" rx="9.5" fill="#1a1a2e" />
      <rect x="59" y="98" width="19" height="28" rx="9.5" fill="#1a1a2e" />
      {/* ── Blazer ── */}
      <rect x="20" y="62" width="60" height="40" rx="14" fill="url(#g8-sh)" />
      {/* Lapels */}
      <path d="M 38 62 L 50 80 L 50 62" fill="#37474F" />
      <path d="M 62 62 L 50 80 L 50 62" fill="#37474F" />
      {/* White shirt collar */}
      <ellipse cx="50" cy="66" rx="8" ry="5" fill="white" opacity="0.3" />
      {/* ── Arms ── */}
      <rect x="2"  y="64" width="20" height="30" rx="10" fill="url(#g8-sh)" />
      <rect x="78" y="64" width="20" height="30" rx="10" fill="url(#g8-sh)" />
      {/* ── Hands ── */}
      <circle cx="12" cy="95" r="10" fill="url(#g8-sk)" />
      <circle cx="88" cy="95" r="10" fill="url(#g8-sk)" />
      {/* ── Neck ── */}
      <rect x="41" y="56" width="18" height="10" rx="5" fill="url(#g8-sk)" />
      {/* ── Head ── */}
      <ellipse cx="50" cy="36" rx="30" ry="33" fill="url(#g8-sk)" />
      {/* ── Top hair band ── */}
      <path d="M 20 28 C 20 8 80 8 80 28 C 80 16 50 8 50 8 Z" fill="url(#g8-hr)" />
      {/* ── Ears ── */}
      <ellipse cx="20" cy="38" rx="5" ry="7.5" fill="#FFCB87" />
      <ellipse cx="80" cy="38" rx="5" ry="7.5" fill="#FFCB87" />
      {/* ── Eyes ── */}
      <GirlEye cx={36} cy={35} irisColor="#1565C0" lashColor="#3E2723" />
      <GirlEye cx={64} cy={35} irisColor="#1565C0" lashColor="#3E2723" />
      {/* ── Eyebrows ── */}
      <Brow x1={25} y1={22} mx={36} my={18} x2={47} y2={22} color="#5D4037" />
      <Brow x1={53} y1={22} mx={64} my={18} x2={75} y2={22} color="#5D4037" />
      {/* ── Nose / Smile / Cheeks ── */}
      <ellipse cx="50" cy="48" rx="3" ry="2" fill="#FFCB87" style={{ filter: "brightness(0.88)" }} />
      <path d="M 37 57 Q 50 68 63 57" stroke="#C62828" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M 39 57 Q 50 65 61 57" fill="#FF8A80" opacity="0.45" />
      <ellipse cx="20" cy="46" rx="9" ry="6.5" fill="#FF9999" opacity="0.35" />
      <ellipse cx="80" cy="46" rx="9" ry="6.5" fill="#FF9999" opacity="0.35" />
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
  const Comp = GRADE_KID_MAP[gradeId] ?? G5Kid;
  return <Comp {...rest} />;
}

// ── Generic student kid for subject tiles ────────────────────────────────────
export function StudentKid({ className, style }: KidProps) {
  return (
    <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <defs>
        <linearGradient id="st-sk" x1="50" y1="6"  x2="50" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FFE8C8" />
          <stop offset="100%" stopColor="#FFCC8A" />
        </linearGradient>
        <linearGradient id="st-sh" x1="50" y1="60" x2="50" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#42A5F5" />
          <stop offset="100%" stopColor="#1565C0" />
        </linearGradient>
      </defs>
      <ellipse cx="31" cy="125" rx="13" ry="6" fill="#1a1a2e" />
      <ellipse cx="69" cy="125" rx="13" ry="6" fill="#1a1a2e" />
      <rect x="22" y="98" width="19" height="28" rx="9.5" fill="#263238" />
      <rect x="59" y="98" width="19" height="28" rx="9.5" fill="#263238" />
      <rect x="20" y="62" width="60" height="40" rx="14" fill="url(#st-sh)" />
      <rect x="2"  y="64" width="20" height="30" rx="10" fill="url(#st-sh)" />
      <rect x="78" y="64" width="20" height="30" rx="10" fill="url(#st-sh)" />
      <circle cx="12" cy="95" r="10" fill="url(#st-sk)" />
      <circle cx="88" cy="95" r="10" fill="url(#st-sk)" />
      <rect x="41" y="56" width="18" height="10" rx="5" fill="url(#st-sk)" />
      <ellipse cx="50" cy="36" rx="30" ry="33" fill="url(#st-sk)" />
      <path d="M 20 27 C 20 5 80 5 80 27 C 80 13 50 3 50 3 Z" fill="#4E342E" />
      <rect x="18" y="22" width="7" height="16" rx="3.5" fill="#4E342E" />
      <rect x="75" y="22" width="7" height="14" rx="3.5" fill="#4E342E" />
      <ellipse cx="20" cy="38" rx="5" ry="7.5" fill="#FFCC8A" />
      <ellipse cx="80" cy="38" rx="5" ry="7.5" fill="#FFCC8A" />
      <BoyEye cx={36} cy={35} irisColor="#4E342E" />
      <BoyEye cx={64} cy={35} irisColor="#4E342E" />
      <Brow x1={25} y1={23} mx={36} my={19} x2={47} y2={23} color="#4E342E" />
      <Brow x1={53} y1={23} mx={64} my={19} x2={75} y2={23} color="#4E342E" />
      <ellipse cx="50" cy="48" rx="3" ry="2" fill="#FFCC8A" style={{ filter: "brightness(0.88)" }} />
      <path d="M 37 57 Q 50 68 63 57" stroke="#B71C1C" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <ellipse cx="20" cy="46" rx="9" ry="6" fill="#FF9999" opacity="0.33" />
      <ellipse cx="80" cy="46" rx="9" ry="6" fill="#FF9999" opacity="0.33" />
    </svg>
  );
}
