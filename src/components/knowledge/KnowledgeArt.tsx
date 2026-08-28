/**
 * Hand-drawn-style SVG scene for each knowledge article. Rendered large in the
 * article hero and scaled down inside the index tiles. Pure SVG, no assets.
 */
interface Props {
  slug: string;
  className?: string;
}

const VB = "0 0 440 260";

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg viewBox={VB} className="w-full h-full" role="img" aria-label={label} preserveAspectRatio="xMidYMid slice">
      {children}
    </svg>
  );
}

function WaterScene() {
  return (
    <Frame label="Illustration of the water cycle: sun, clouds, rain, mountains and the sea">
      <defs>
        <linearGradient id="wtr-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="wtr-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#wtr-sky)" />
      {/* sun */}
      <circle cx="372" cy="60" r="30" fill="#fde68a" />
      <circle cx="372" cy="60" r="30" fill="#fbbf24" opacity="0.4" />
      {[...Array(8)].map((_, i) => {
        const a = (i * Math.PI) / 4;
        return (
          <line
            key={i}
            x1={372 + 38 * Math.cos(a)}
            y1={60 + 38 * Math.sin(a)}
            x2={372 + 50 * Math.cos(a)}
            y2={60 + 50 * Math.sin(a)}
            stroke="#fde68a"
            strokeWidth="4"
            strokeLinecap="round"
          />
        );
      })}
      {/* mountains */}
      <path d="M0 200 L90 96 L165 200 Z" fill="#1e3a8a" opacity="0.55" />
      <path d="M110 200 L190 120 L270 200 Z" fill="#1e40af" opacity="0.5" />
      <path d="M78 128 L90 96 L104 122 L96 128 L100 138 L88 132 L80 138 Z" fill="#fff" opacity="0.85" />
      {/* sea */}
      <path d="M0 196 Q60 182 120 196 T240 196 T360 196 T480 196 V260 H0 Z" fill="url(#wtr-sea)" />
      <path d="M0 214 Q70 202 140 214 T280 214 T440 214 V260 H0 Z" fill="#0c4a6e" opacity="0.45" />
      {/* cloud */}
      <g>
        <ellipse cx="150" cy="72" rx="46" ry="26" fill="#fff" />
        <ellipse cx="192" cy="80" rx="34" ry="22" fill="#fff" />
        <ellipse cx="118" cy="84" rx="30" ry="20" fill="#fff" />
        <rect x="112" y="80" width="110" height="20" fill="#fff" />
      </g>
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1={128 + i * 24}
          y1={104}
          x2={122 + i * 24}
          y2={126}
          stroke="#e0f2fe"
          strokeWidth="4"
          strokeLinecap="round"
        />
      ))}
      {/* evaporation arrow */}
      <path d="M300 188 C300 150 250 140 236 108" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeDasharray="3 10" opacity="0.9" />
      <path d="M236 108 l-9 10 l14 2 Z" fill="#fff" />
      {/* return arrow */}
      <path d="M96 130 C70 160 70 176 96 190" fill="none" stroke="#bae6fd" strokeWidth="5" strokeLinecap="round" strokeDasharray="3 10" />
      <path d="M96 190 l4 -13 l-13 4 Z" fill="#bae6fd" />
    </Frame>
  );
}

function ButterflyScene() {
  return (
    <Frame label="Illustration of a butterfly life cycle: egg, caterpillar, chrysalis and adult butterfly on a leafy branch">
      <defs>
        <linearGradient id="bf-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fdba74" />
          <stop offset="55%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#c026d3" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#bf-bg)" />
      {/* soft blobs */}
      <circle cx="60" cy="50" r="60" fill="#fff" opacity="0.12" />
      <circle cx="400" cy="220" r="80" fill="#fff" opacity="0.1" />
      {/* branch */}
      <path d="M20 210 C120 180 300 210 430 150" fill="none" stroke="#7c2d12" strokeWidth="8" strokeLinecap="round" />
      {/* leaves */}
      <path d="M120 196 q-24 -30 -50 -22 q10 30 50 22 Z" fill="#4d7c0f" />
      <path d="M250 196 q26 -30 52 -20 q-12 30 -52 20 Z" fill="#65a30d" />
      {/* stage 1 egg */}
      <ellipse cx="70" cy="180" rx="7" ry="9" fill="#fef9c3" stroke="#eab308" strokeWidth="2" />
      {/* stage 2 caterpillar */}
      <g>
        {[0, 1, 2, 3, 4].map((i) => (
          <circle key={i} cx={150 + i * 15} cy={190 - (i === 2 ? 3 : 0)} r="10" fill="#84cc16" stroke="#4d7c0f" strokeWidth="2" />
        ))}
        <circle cx="146" cy="188" r="2" fill="#1a2e05" />
      </g>
      {/* stage 3 chrysalis */}
      <path d="M290 168 q14 -6 16 14 q2 26 -10 40 q-14 -10 -12 -36 q1 -14 6 -18 Z" fill="#16a34a" stroke="#14532d" strokeWidth="2" />
      <line x1="298" y1="160" x2="300" y2="150" stroke="#14532d" strokeWidth="2" />
      {/* stage 4 butterfly */}
      <g transform="translate(380 96)">
        <ellipse cx="0" cy="0" rx="4" ry="16" fill="#1f2937" />
        <path d="M0 -6 C-34 -40 -46 -6 -20 6 C-40 22 -14 34 0 10 Z" fill="#fb923c" stroke="#7c2d12" strokeWidth="2" />
        <path d="M0 -6 C34 -40 46 -6 20 6 C40 22 14 34 0 10 Z" fill="#f472b6" stroke="#7c2d12" strokeWidth="2" />
        <circle cx="-16" cy="-8" r="4" fill="#fde68a" />
        <circle cx="16" cy="-8" r="4" fill="#fde68a" />
        <path d="M0 -14 q-6 -12 -12 -14 M0 -14 q6 -12 12 -14" stroke="#1f2937" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* flow arrows */}
      {[[95, 175, 135, 178], [185, 182, 275, 176], [315, 168, 360, 120]].map(([x1, y1, x2, y2], i) => (
        <g key={i}>
          <path d={`M${x1} ${y1} Q ${(x1 + x2) / 2} ${Math.min(y1, y2) - 26} ${x2} ${y2}`} fill="none" stroke="#fff" strokeWidth="3.5" strokeDasharray="2 8" strokeLinecap="round" opacity="0.9" />
        </g>
      ))}
    </Frame>
  );
}

function SeedScene() {
  return (
    <Frame label="Illustration of a seed growing: seed and roots underground, a sprout, a young plant and a flowering plant, with the sun above">
      <defs>
        <linearGradient id="sd-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bef264" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#sd-sky)" />
      {/* sun */}
      <circle cx="70" cy="56" r="26" fill="#fde68a" />
      {[...Array(8)].map((_, i) => {
        const a = (i * Math.PI) / 4;
        return (
          <line key={i} x1={70 + 32 * Math.cos(a)} y1={56 + 32 * Math.sin(a)} x2={70 + 44 * Math.cos(a)} y2={56 + 44 * Math.sin(a)} stroke="#fde68a" strokeWidth="4" strokeLinecap="round" />
        );
      })}
      {/* soil */}
      <rect x="0" y="176" width="440" height="84" fill="#7c4a1e" />
      <rect x="0" y="176" width="440" height="12" fill="#a16207" />
      <path d="M0 176 Q110 168 220 176 T440 176 V186 H0 Z" fill="#4d7c0f" />
      {/* seed + root */}
      <ellipse cx="80" cy="206" rx="10" ry="7" fill="#fde68a" stroke="#a16207" strokeWidth="2" transform="rotate(-18 80 206)" />
      <path d="M80 210 C80 226 68 232 64 246 M80 210 C82 228 94 234 98 248" stroke="#fef3c7" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* sprout */}
      <path d="M175 176 C175 158 175 150 175 140" stroke="#15803d" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M175 150 q-16 -6 -20 -20 q18 0 20 20 M175 156 q16 -6 20 -20 q-18 0 -20 20" fill="#22c55e" />
      {/* young plant */}
      <path d="M270 176 C270 140 270 128 270 108" stroke="#15803d" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M270 140 q-26 -6 -34 -30 q30 0 34 30 M270 128 q26 -6 34 -30 q-30 0 -34 30 M270 116 q-22 -4 -28 -24 q26 0 28 24" fill="#16a34a" />
      {/* flowering plant */}
      <path d="M375 176 C375 128 375 110 375 84" stroke="#166534" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M375 140 q-30 -6 -40 -34 q34 0 40 34 M375 124 q30 -6 40 -34 q-34 0 -40 34" fill="#15803d" />
      <g transform="translate(375 74)">
        {[...Array(6)].map((_, i) => {
          const a = (i * Math.PI) / 3;
          return <ellipse key={i} cx={14 * Math.cos(a)} cy={14 * Math.sin(a)} rx="9" ry="6" fill="#f9a8d4" transform={`rotate(${(a * 180) / Math.PI} ${14 * Math.cos(a)} ${14 * Math.sin(a)})`} />;
        })}
        <circle cx="0" cy="0" r="8" fill="#fbbf24" />
      </g>
      {/* growth arrow */}
      <path d="M96 150 C160 96 300 70 372 60" fill="none" stroke="#fff" strokeWidth="4" strokeDasharray="2 9" strokeLinecap="round" opacity="0.85" />
      <path d="M372 60 l-13 1 l7 11 Z" fill="#fff" />
    </Frame>
  );
}

function SoilScene() {
  return (
    <Frame label="Illustration of decomposers in soil: fallen leaves, mushrooms, an earthworm, soil layers and plant roots">
      <defs>
        <linearGradient id="so-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="55%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#so-bg)" />
      {/* leaf litter */}
      <rect x="0" y="86" width="440" height="26" fill="#78350f" opacity="0.5" />
      {[30, 90, 150, 210, 280, 350, 410].map((x, i) => (
        <path key={i} d={`M${x} 96 q10 -12 22 -4 q-6 14 -22 4 Z`} fill={i % 2 ? "#ca8a04" : "#d97706"} transform={`rotate(${(i * 37) % 40 - 20} ${x} 96)`} />
      ))}
      {/* soil layers */}
      <rect x="0" y="112" width="440" height="52" fill="#5c3317" />
      <rect x="0" y="164" width="440" height="46" fill="#3f2410" />
      <rect x="0" y="210" width="440" height="50" fill="#2a1809" />
      {/* speckles */}
      {[...Array(26)].map((_, i) => (
        <circle key={i} cx={(i * 53) % 440} cy={126 + ((i * 31) % 120)} r={1.5 + (i % 3)} fill="#fbbf24" opacity="0.35" />
      ))}
      {/* roots */}
      <path d="M150 112 C150 140 130 150 132 186 M150 130 C150 150 172 158 176 196 M150 150 C150 172 140 186 138 214" stroke="#e7c9a0" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.85" />
      {/* worm */}
      <path d="M250 150 q18 -14 34 2 q16 16 34 2 q16 -14 30 0" fill="none" stroke="#f9a8d4" strokeWidth="9" strokeLinecap="round" />
      <circle cx="250" cy="150" r="4.5" fill="#db2777" />
      {/* mushrooms */}
      <g transform="translate(70 96)">
        <rect x="-4" y="-2" width="8" height="16" rx="3" fill="#fef3c7" />
        <path d="M-16 0 q16 -22 32 0 Z" fill="#dc2626" />
        <circle cx="-6" cy="-6" r="2.2" fill="#fff" />
        <circle cx="6" cy="-3" r="2" fill="#fff" />
      </g>
      <g transform="translate(96 98) scale(0.7)">
        <rect x="-4" y="-2" width="8" height="16" rx="3" fill="#fef3c7" />
        <path d="M-16 0 q16 -22 32 0 Z" fill="#ea580c" />
      </g>
      {/* recycle arrow */}
      <path d="M370 60 a40 40 0 1 1 -20 -34" fill="none" stroke="#fde68a" strokeWidth="5" strokeLinecap="round" />
      <path d="M350 26 l-12 -4 l4 13 Z" fill="#fde68a" />
    </Frame>
  );
}

function BreathScene() {
  return (
    <Frame label="Illustration of the oxygen and carbon dioxide swap between a person and a tree, with the sun">
      <defs>
        <linearGradient id="br-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5eead4" />
          <stop offset="55%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#br-bg)" />
      <circle cx="220" cy="48" r="24" fill="#fde68a" opacity="0.9" />
      {/* ground */}
      <path d="M0 214 Q220 196 440 214 V260 H0 Z" fill="#065f46" opacity="0.5" />
      {/* person */}
      <g transform="translate(96 150)">
        <circle cx="0" cy="0" r="22" fill="#fcd9b6" />
        <path d="M-26 64 q26 -34 52 0 Z" fill="#1e3a8a" />
        <circle cx="-7" cy="-2" r="2.4" fill="#1f2937" />
        <circle cx="7" cy="-2" r="2.4" fill="#1f2937" />
        <path d="M-6 10 q6 6 12 0" stroke="#1f2937" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* tree */}
      <g transform="translate(348 150)">
        <rect x="-8" y="10" width="16" height="60" rx="4" fill="#7c2d12" />
        <circle cx="0" cy="-6" r="36" fill="#15803d" />
        <circle cx="-26" cy="10" r="24" fill="#16a34a" />
        <circle cx="26" cy="10" r="24" fill="#16a34a" />
      </g>
      {/* O2 arrow: tree -> person */}
      <path d="M300 120 C240 96 190 96 140 122" fill="none" stroke="#ecfeff" strokeWidth="5" strokeDasharray="2 9" strokeLinecap="round" />
      <path d="M140 122 l14 -3 l-6 -12 Z" fill="#ecfeff" />
      <text x="220" y="92" textAnchor="middle" fontSize="17" fontWeight="700" fill="#ffffff">O₂</text>
      {/* CO2 arrow: person -> tree */}
      <path d="M132 176 C200 210 270 210 320 180" fill="none" stroke="#c7d2fe" strokeWidth="5" strokeDasharray="2 9" strokeLinecap="round" />
      <path d="M320 180 l-14 2 l6 12 Z" fill="#c7d2fe" />
      <text x="220" y="214" textAnchor="middle" fontSize="17" fontWeight="700" fill="#ffffff">CO₂</text>
    </Frame>
  );
}

const SCENES: Record<string, () => React.ReactElement> = {
  "water-life-cycle": WaterScene,
  "butterfly-life-cycle": ButterflyScene,
  "seed-to-plant-cycle": SeedScene,
  "decomposer-soil-cycle": SoilScene,
  "oxygen-carbon-dioxide-breath-swap": BreathScene,
};

export default function KnowledgeArt({ slug, className }: Props) {
  const Scene = SCENES[slug];
  return (
    <div className={className}>
      {Scene ? <Scene /> : <div className="w-full h-full bg-slate-200" />}
    </div>
  );
}
