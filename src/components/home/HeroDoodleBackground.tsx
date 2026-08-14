export default function HeroDoodleBackground() {
  const col = "#64748b"; // slate-500 — visible on light bg

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="tech-icon-pattern"
          x="0"
          y="0"
          width="400"
          height="300"
          patternUnits="userSpaceOnUse"
        >
          {/* Light grey background */}
          <rect width="400" height="300" fill="#e2e8f0" />

          {/* ── ROW 1: Robot · Laptop · Code Window · Game Controller ── */}

          {/* Robot @ (50, 52) */}
          <g transform="translate(50,52)" stroke={col} strokeWidth="1.8" fill="none">
            <rect x="-16" y="-14" width="32" height="26" rx="3" />
            <circle cx="-6" cy="-2" r="4" />
            <circle cx="6" cy="-2" r="4" />
            <circle cx="-6" cy="-2" r="1.5" fill={col} stroke="none" />
            <circle cx="6" cy="-2" r="1.5" fill={col} stroke="none" />
            <rect x="-9" y="6" width="18" height="5" rx="1" />
            <line x1="-3" y1="6" x2="-3" y2="11" strokeWidth="1" />
            <line x1="3" y1="6" x2="3" y2="11" strokeWidth="1" />
            <line x1="0" y1="-14" x2="0" y2="-22" />
            <circle cx="0" cy="-25" r="3" />
            <rect x="-22" y="-6" width="6" height="8" rx="1.5" />
            <rect x="16" y="-6" width="6" height="8" rx="1.5" />
          </g>

          {/* Laptop @ (150, 52) */}
          <g transform="translate(150,52)" stroke={col} strokeWidth="1.8" fill="none">
            <rect x="-19" y="-18" width="38" height="24" rx="2" />
            <line x1="-13" y1="-10" x2="3" y2="-10" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="-13" y1="-5" x2="9" y2="-5" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="-13" y1="0" x2="1" y2="0" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M-22,6 L22,6 L20,11 L-20,11 Z" />
            <rect x="-7" y="7" width="14" height="3" rx="1" strokeWidth="1" />
          </g>

          {/* Code Window @ (250, 52) */}
          <g transform="translate(250,52)" stroke={col} strokeWidth="1.8" fill="none">
            <rect x="-21" y="-17" width="42" height="34" rx="3" />
            <line x1="-21" y1="-9" x2="21" y2="-9" strokeWidth="1.2" />
            <circle cx="-15" cy="-13" r="2" fill={col} stroke="none" />
            <circle cx="-9" cy="-13" r="2" fill={col} stroke="none" />
            <circle cx="-3" cy="-13" r="2" fill={col} stroke="none" />
            <path d="M-10,-3 L-16,3 L-10,9" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="-3" y1="9" x2="3" y2="-3" strokeLinecap="round" />
            <path d="M6,-3 L12,3 L6,9" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Game Controller @ (350, 52) */}
          <g transform="translate(350,52)" stroke={col} strokeWidth="1.8" fill="none">
            <path d="M-18,5 C-18,-8 -10,-13 0,-13 C10,-13 18,-8 18,5 C18,13 12,15 6,15 L-6,15 C-12,15 -18,13 -18,5 Z" />
            <path d="M-18,1 C-20,-3 -22,-1 -22,7 C-22,13 -18,15 -16,15" strokeLinecap="round" />
            <path d="M18,1 C20,-3 22,-1 22,7 C22,13 18,15 16,15" strokeLinecap="round" />
            <rect x="-13" y="-2" width="4" height="10" rx="1" fill={col} stroke="none" />
            <rect x="-17" y="2" width="12" height="4" rx="1" fill={col} stroke="none" />
            <circle cx="8" cy="-4" r="2.5" />
            <circle cx="14" cy="2" r="2.5" />
            <circle cx="8" cy="8" r="2.5" />
            <circle cx="2" cy="2" r="2.5" />
            <circle cx="0" cy="-3" r="2" fill={col} stroke="none" />
          </g>

          {/* ── ROW 2: WiFi · Gear · CPU Chip · Cloud Upload ── */}

          {/* WiFi @ (50, 150) */}
          <g transform="translate(50,150)" stroke={col} strokeWidth="1.8" fill="none">
            <circle cx="0" cy="12" r="3" fill={col} stroke="none" />
            <path d="M-8,6 A10,10 0 0 1 8,6" strokeLinecap="round" />
            <path d="M-16,-1 A18,18 0 0 1 16,-1" strokeLinecap="round" />
            <path d="M-24,-9 A27,27 0 0 1 24,-9" strokeLinecap="round" />
          </g>

          {/* Gear @ (150, 150) */}
          <g transform="translate(150,150)" stroke={col} strokeWidth="1.8" fill="none">
            <circle r="14" />
            <circle r="5" />
            <rect x="-2.5" y="-18" width="5" height="4" rx="0.5" />
            <rect x="-2.5" y="14" width="5" height="4" rx="0.5" />
            <rect x="-18" y="-2.5" width="4" height="5" rx="0.5" />
            <rect x="14" y="-2.5" width="4" height="5" rx="0.5" />
            <g transform="rotate(45)">
              <rect x="-2.5" y="-18" width="5" height="4" rx="0.5" />
              <rect x="-2.5" y="14" width="5" height="4" rx="0.5" />
              <rect x="-18" y="-2.5" width="4" height="5" rx="0.5" />
              <rect x="14" y="-2.5" width="4" height="5" rx="0.5" />
            </g>
          </g>

          {/* CPU Chip @ (250, 150) */}
          <g transform="translate(250,150)" stroke={col} strokeWidth="1.8" fill="none">
            <rect x="-15" y="-15" width="30" height="30" rx="2" />
            <rect x="-8" y="-8" width="16" height="16" rx="1" />
            <line x1="-8" y1="0" x2="8" y2="0" strokeWidth="0.8" />
            <line x1="0" y1="-8" x2="0" y2="8" strokeWidth="0.8" />
            <line x1="-8" y1="-15" x2="-8" y2="-20" strokeLinecap="round" />
            <line x1="-3" y1="-15" x2="-3" y2="-20" strokeLinecap="round" />
            <line x1="3" y1="-15" x2="3" y2="-20" strokeLinecap="round" />
            <line x1="8" y1="-15" x2="8" y2="-20" strokeLinecap="round" />
            <line x1="-8" y1="15" x2="-8" y2="20" strokeLinecap="round" />
            <line x1="-3" y1="15" x2="-3" y2="20" strokeLinecap="round" />
            <line x1="3" y1="15" x2="3" y2="20" strokeLinecap="round" />
            <line x1="8" y1="15" x2="8" y2="20" strokeLinecap="round" />
            <line x1="-15" y1="-6" x2="-20" y2="-6" strokeLinecap="round" />
            <line x1="-15" y1="0" x2="-20" y2="0" strokeLinecap="round" />
            <line x1="-15" y1="6" x2="-20" y2="6" strokeLinecap="round" />
            <line x1="15" y1="-6" x2="20" y2="-6" strokeLinecap="round" />
            <line x1="15" y1="0" x2="20" y2="0" strokeLinecap="round" />
            <line x1="15" y1="6" x2="20" y2="6" strokeLinecap="round" />
          </g>

          {/* Cloud Upload @ (350, 148) */}
          <g transform="translate(350,148)" stroke={col} strokeWidth="1.8" fill="none">
            <ellipse cx="2" cy="-2" rx="15" ry="8" />
            <circle cx="-8" cy="-6" r="8" />
            <circle cx="10" cy="-8" r="9" />
            <line x1="2" y1="18" x2="2" y2="6" strokeLinecap="round" />
            <path d="M-5,12 L2,5 L9,12" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* ── ROW 3: Circuit Nodes · Sparkle · Monitor · Plug ── */}

          {/* Circuit Nodes @ (50, 250) */}
          <g transform="translate(50,250)" stroke={col} strokeWidth="1.5" fill="none">
            <line x1="-22" y1="0" x2="22" y2="0" />
            <circle cx="-12" cy="0" r="3" fill={col} stroke="none" />
            <circle cx="6" cy="0" r="3" fill={col} stroke="none" />
            <circle cx="-22" cy="0" r="2.5" />
            <circle cx="22" cy="0" r="2.5" />
            <line x1="-12" y1="0" x2="-20" y2="-14" />
            <circle cx="-20" cy="-14" r="3" />
            <line x1="6" y1="0" x2="14" y2="-14" />
            <circle cx="14" cy="-14" r="3" />
            <line x1="-12" y1="0" x2="-12" y2="16" />
            <circle cx="-12" cy="16" r="3" />
            <line x1="6" y1="0" x2="6" y2="16" />
            <circle cx="6" cy="16" r="3" />
            <line x1="0" y1="0" x2="0" y2="-18" />
            <circle cx="0" cy="-18" r="3" />
          </g>

          {/* Sparkle Star @ (150, 250) */}
          <g transform="translate(150,250)" stroke={col} strokeWidth="1.8" fill="none">
            <path d="M0,-20 L4,-4 L20,0 L4,4 L0,20 L-4,4 L-20,0 L-4,-4 Z" strokeLinejoin="round" />
            <path d="M14,-11 L16,-6 L21,-4 L16,-2 L14,3 L12,-2 L7,-4 L12,-6 Z" fill={col} stroke="none" />
          </g>

          {/* Desktop Monitor @ (250, 250) */}
          <g transform="translate(250,250)" stroke={col} strokeWidth="1.8" fill="none">
            <rect x="-20" y="-16" width="40" height="26" rx="3" />
            <rect x="-16" y="-12" width="32" height="18" rx="1" strokeWidth="1" />
            <line x1="-10" y1="-7" x2="2" y2="-7" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="-10" y1="-2" x2="8" y2="-2" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="-10" y1="3" x2="-1" y2="3" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="0" y1="10" x2="0" y2="18" strokeWidth="2" strokeLinecap="round" />
            <line x1="-10" y1="18" x2="10" y2="18" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Power Plug @ (350, 250) */}
          <g transform="translate(350,250)" stroke={col} strokeWidth="1.8" fill="none">
            <circle r="14" />
            <line x1="-5" y1="-8" x2="-5" y2="-20" strokeWidth="3" strokeLinecap="round" />
            <line x1="5" y1="-8" x2="5" y2="-20" strokeWidth="3" strokeLinecap="round" />
            <circle cx="-4" cy="2" r="2.5" />
            <circle cx="4" cy="2" r="2.5" />
            <path d="M-4,7 Q0,12 4,7" strokeLinecap="round" />
            <line x1="0" y1="14" x2="0" y2="22" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* ── ACCENT ICONS between rows ── */}

          {/* Mouse cursor @ (195, 104) */}
          <g transform="translate(195,104)" stroke={col} strokeWidth="1.5" fill="none">
            <path d="M-5,-13 L-5,9 L0,4 L4,13 L7,12 L3,3 L9,3 Z" strokeLinejoin="round" />
          </g>

          {/* Small WiFi @ (95, 100) */}
          <g transform="translate(95,100)" stroke={col} strokeWidth="1.4" fill="none">
            <circle cx="0" cy="7" r="2" fill={col} stroke="none" />
            <path d="M-5,2 A6,6 0 0 1 5,2" strokeLinecap="round" />
            <path d="M-10,-4 A12,12 0 0 1 10,-4" strokeLinecap="round" />
          </g>

          {/* Small gear @ (295, 100) */}
          <g transform="translate(295,100)" stroke={col} strokeWidth="1.4" fill="none">
            <circle r="10" />
            <circle r="4" />
            <rect x="-1.8" y="-13" width="3.6" height="3" rx="0.5" />
            <rect x="-1.8" y="10" width="3.6" height="3" rx="0.5" />
            <rect x="-13" y="-1.8" width="3" height="3.6" rx="0.5" />
            <rect x="10" y="-1.8" width="3" height="3.6" rx="0.5" />
          </g>

          {/* 4-pt star @ (390, 95) */}
          <g transform="translate(390,95)" fill={col}>
            <path d="M0,-7 L2,-2 L7,0 L2,2 L0,7 L-2,2 L-7,0 L-2,-2 Z" />
          </g>

          {/* Code brackets @ (8, 200) */}
          <g transform="translate(8,200)" stroke={col} strokeWidth="1.5" fill="none">
            <path d="M3,-10 L-4,0 L3,10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15,-10 L22,0 L15,10" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Lightning bolt @ (392, 196) */}
          <g transform="translate(392,196)" fill={col}>
            <path d="M3,-12 L-2,0 L2,0 L-3,12 L8,-4 L3,-4 Z" />
          </g>

          {/* 5-pt star @ (195, 200) */}
          <g transform="translate(195,200)" stroke={col} strokeWidth="1.4" fill="none">
            <path d="M0,-9 L2,-3 L8,-2.8 L3.5,1.5 L5,8 L0,4 L-5,8 L-3.5,1.5 L-8,-2.8 L-2,-3 Z" strokeLinejoin="round" />
          </g>

        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#tech-icon-pattern)" />
    </svg>
  );
}
