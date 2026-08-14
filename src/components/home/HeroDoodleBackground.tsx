export default function HeroDoodleBackground() {
  const col = "#6a95b2"; // blue-grey icons on gradient

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Gradient fills the full viewport once */}
        <radialGradient id="hero-bg-grad" cx="0.32" cy="0.46" r="0.72">
          <stop offset="0%" stopColor="#4a6478" />
          <stop offset="50%" stopColor="#2e4559" />
          <stop offset="100%" stopColor="#192838" />
        </radialGradient>

        {/* 400×400 tile — transparent bg so gradient shows through */}
        <pattern
          id="tech-icon-pattern"
          x="0"
          y="0"
          width="400"
          height="400"
          patternUnits="userSpaceOnUse"
        >

          {/* ══ ROW 1 (y=52): Robot · Laptop · Code Window · Game Controller ══ */}

          {/* Robot */}
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

          {/* Laptop */}
          <g transform="translate(150,52)" stroke={col} strokeWidth="1.8" fill="none">
            <rect x="-19" y="-18" width="38" height="24" rx="2" />
            <line x1="-13" y1="-10" x2="3" y2="-10" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="-13" y1="-5" x2="9" y2="-5" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="-13" y1="0" x2="1" y2="0" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M-22,6 L22,6 L20,11 L-20,11 Z" />
            <rect x="-7" y="7" width="14" height="3" rx="1" strokeWidth="1" />
          </g>

          {/* Code Window </>  */}
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

          {/* Game Controller */}
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

          {/* ── accents between row 1 & 2 (y≈105) ── */}

          {/* Mouse cursor */}
          <g transform="translate(195,104)" stroke={col} strokeWidth="1.5" fill="none">
            <path d="M-5,-13 L-5,9 L0,4 L4,13 L7,12 L3,3 L9,3 Z" strokeLinejoin="round" />
          </g>

          {/* Small WiFi */}
          <g transform="translate(95,100)" stroke={col} strokeWidth="1.4" fill="none">
            <circle cx="0" cy="7" r="2" fill={col} stroke="none" />
            <path d="M-5,2 A6,6 0 0 1 5,2" strokeLinecap="round" />
            <path d="M-10,-4 A12,12 0 0 1 10,-4" strokeLinecap="round" />
          </g>

          {/* Small gear */}
          <g transform="translate(295,100)" stroke={col} strokeWidth="1.4" fill="none">
            <circle r="10" />
            <circle r="4" />
            <rect x="-1.8" y="-13" width="3.6" height="3" rx="0.5" />
            <rect x="-1.8" y="10" width="3.6" height="3" rx="0.5" />
            <rect x="-13" y="-1.8" width="3" height="3.6" rx="0.5" />
            <rect x="10" y="-1.8" width="3" height="3.6" rx="0.5" />
          </g>

          {/* 4-pt star */}
          <g transform="translate(390,95)" fill={col}>
            <path d="M0,-7 L2,-2 L7,0 L2,2 L0,7 L-2,2 L-7,0 L-2,-2 Z" />
          </g>

          {/* ══ ROW 2 (y=152): WiFi · Gear · CPU · Cloud ══ */}

          {/* WiFi */}
          <g transform="translate(50,152)" stroke={col} strokeWidth="1.8" fill="none">
            <circle cx="0" cy="12" r="3" fill={col} stroke="none" />
            <path d="M-8,6 A10,10 0 0 1 8,6" strokeLinecap="round" />
            <path d="M-16,-1 A18,18 0 0 1 16,-1" strokeLinecap="round" />
            <path d="M-24,-9 A27,27 0 0 1 24,-9" strokeLinecap="round" />
          </g>

          {/* Gear */}
          <g transform="translate(150,152)" stroke={col} strokeWidth="1.8" fill="none">
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

          {/* CPU Chip */}
          <g transform="translate(250,152)" stroke={col} strokeWidth="1.8" fill="none">
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

          {/* Cloud Upload */}
          <g transform="translate(350,150)" stroke={col} strokeWidth="1.8" fill="none">
            <ellipse cx="2" cy="-2" rx="15" ry="8" />
            <circle cx="-8" cy="-6" r="8" />
            <circle cx="10" cy="-8" r="9" />
            <line x1="2" y1="18" x2="2" y2="6" strokeLinecap="round" />
            <path d="M-5,12 L2,5 L9,12" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* ── accents between row 2 & 3 (y≈205): maths symbols ── */}

          {/* Sigma ∑ */}
          <g transform="translate(50,205)" stroke={col} strokeWidth="1.8" fill="none">
            <path d="M9,-12 L-9,-12 L5,0 L-9,12 L9,12" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Pi π */}
          <g transform="translate(150,207)" stroke={col} strokeWidth="1.8" fill="none">
            <line x1="-11" y1="-8" x2="11" y2="-8" strokeLinecap="round" />
            <path d="M-5,-8 C-6,-2 -7,4 -8,12" strokeLinecap="round" />
            <path d="M5,-8 C4,-2 3,4 2,12" strokeLinecap="round" />
          </g>

          {/* Square root √ */}
          <g transform="translate(255,205)" stroke={col} strokeWidth="1.8" fill="none">
            <path d="M-12,2 L-6,10 L2,-10 L16,-10" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Code brackets */}
          <g transform="translate(8,205)" stroke={col} strokeWidth="1.5" fill="none">
            <path d="M3,-10 L-4,0 L3,10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15,-10 L22,0 L15,10" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Lightning bolt */}
          <g transform="translate(392,200)" fill={col}>
            <path d="M3,-12 L-2,0 L2,0 L-3,12 L8,-4 L3,-4 Z" />
          </g>

          {/* ══ ROW 3 (y=255): Maths · Science · English · Pencil ══ */}

          {/* Maths — Calculator */}
          <g transform="translate(50,255)" stroke={col} strokeWidth="1.6" fill="none">
            <rect x="-15" y="-22" width="30" height="44" rx="3" />
            <rect x="-11" y="-19" width="22" height="9" rx="1" strokeWidth="1.2" />
            <rect x="-11" y="-6" width="6" height="5" rx="1" strokeWidth="1.2" />
            <rect x="-3" y="-6" width="6" height="5" rx="1" strokeWidth="1.2" />
            <rect x="5" y="-6" width="6" height="5" rx="1" strokeWidth="1.2" />
            <rect x="-11" y="3" width="6" height="5" rx="1" strokeWidth="1.2" />
            <rect x="-3" y="3" width="6" height="5" rx="1" strokeWidth="1.2" />
            <rect x="5" y="3" width="6" height="5" rx="1" strokeWidth="1.2" />
            <rect x="-11" y="12" width="6" height="5" rx="1" strokeWidth="1.2" />
            <rect x="-3" y="12" width="14" height="5" rx="1" strokeWidth="1.2" />
          </g>

          {/* Science — Erlenmeyer Flask */}
          <g transform="translate(150,255)" stroke={col} strokeWidth="1.8" fill="none">
            {/* Neck */}
            <rect x="-6" y="-22" width="12" height="14" rx="1" />
            {/* Body */}
            <path d="M-6,-8 L-20,16 L20,16 L6,-8 Z" strokeLinejoin="round" />
            {/* Liquid level */}
            <line x1="-15" y1="9" x2="15" y2="9" strokeWidth="1.2" />
            {/* Bubbles */}
            <circle cx="-5" cy="3" r="2.5" />
            <circle cx="6" cy="7" r="1.8" />
          </g>

          {/* English — Open Book */}
          <g transform="translate(250,255)" stroke={col} strokeWidth="1.8" fill="none">
            {/* Spine */}
            <line x1="0" y1="-16" x2="0" y2="16" />
            {/* Left page */}
            <path d="M0,-16 C-8,-18 -22,-16 -22,-4 L-22,16 C-12,14 0,16 0,16" strokeLinejoin="round" />
            {/* Right page */}
            <path d="M0,-16 C8,-18 22,-16 22,-4 L22,16 C12,14 0,16 0,16" strokeLinejoin="round" />
            {/* Text lines left */}
            <line x1="-18" y1="-8" x2="-3" y2="-8" strokeWidth="1.2" />
            <line x1="-18" y1="-2" x2="-3" y2="-2" strokeWidth="1.2" />
            <line x1="-18" y1="4" x2="-3" y2="4" strokeWidth="1.2" />
            <line x1="-18" y1="10" x2="-8" y2="10" strokeWidth="1.2" />
            {/* Text lines right */}
            <line x1="3" y1="-8" x2="18" y2="-8" strokeWidth="1.2" />
            <line x1="3" y1="-2" x2="18" y2="-2" strokeWidth="1.2" />
            <line x1="3" y1="4" x2="18" y2="4" strokeWidth="1.2" />
            <line x1="3" y1="10" x2="13" y2="10" strokeWidth="1.2" />
          </g>

          {/* Pencil */}
          <g transform="translate(350,255)" stroke={col} strokeWidth="1.8" fill="none">
            {/* Body */}
            <path d="M-6,-22 L6,-22 L6,14 L0,22 L-6,14 Z" strokeLinejoin="round" />
            {/* Eraser cap */}
            <rect x="-6" y="-28" width="12" height="6" rx="1" />
            {/* Ferrule band */}
            <line x1="-6" y1="-16" x2="6" y2="-16" strokeWidth="1.2" />
            {/* Tip divider */}
            <line x1="-6" y1="14" x2="6" y2="14" strokeWidth="1.2" />
          </g>

          {/* ── accents between row 3 & 4 (y≈310): science symbols ── */}

          {/* Atom */}
          <g transform="translate(100,310)" stroke={col} strokeWidth="1.4" fill="none">
            <circle r="4" fill={col} stroke="none" />
            <ellipse rx="18" ry="7" />
            <ellipse rx="18" ry="7" transform="rotate(60)" />
            <ellipse rx="18" ry="7" transform="rotate(120)" />
          </g>

          {/* 5-pt star */}
          <g transform="translate(200,310)" stroke={col} strokeWidth="1.4" fill="none">
            <path d="M0,-9 L2,-3 L8,-2.8 L3.5,1.5 L5,8 L0,4 L-5,8 L-3.5,1.5 L-8,-2.8 L-2,-3 Z" strokeLinejoin="round" />
          </g>

          {/* Sparkle 4-pt */}
          <g transform="translate(300,310)" fill={col}>
            <path d="M0,-8 L2,-2 L8,0 L2,2 L0,8 L-2,2 L-8,0 L-2,-2 Z" />
          </g>

          {/* Small lightbulb */}
          <g transform="translate(392,310)" stroke={col} strokeWidth="1.4" fill="none">
            <path d="M0,-12 C8,-12 12,-6 12,0 C12,6 8,10 4,10 L-4,10 C-8,10 -12,6 -12,0 C-12,-6 -8,-12 0,-12 Z" />
            <line x1="-4" y1="10" x2="-4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="14" />
            <line x1="-4" y1="14" x2="4" y2="14" />
          </g>

          {/* ══ ROW 4 (y=355): Circuit Nodes · Sparkle · Monitor · Plug ══ */}

          {/* Circuit Nodes */}
          <g transform="translate(50,355)" stroke={col} strokeWidth="1.5" fill="none">
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

          {/* Sparkle Star */}
          <g transform="translate(150,355)" stroke={col} strokeWidth="1.8" fill="none">
            <path d="M0,-20 L4,-4 L20,0 L4,4 L0,20 L-4,4 L-20,0 L-4,-4 Z" strokeLinejoin="round" />
            <path d="M14,-11 L16,-6 L21,-4 L16,-2 L14,3 L12,-2 L7,-4 L12,-6 Z" fill={col} stroke="none" />
          </g>

          {/* Desktop Monitor */}
          <g transform="translate(250,355)" stroke={col} strokeWidth="1.8" fill="none">
            <rect x="-20" y="-16" width="40" height="26" rx="3" />
            <rect x="-16" y="-12" width="32" height="18" rx="1" strokeWidth="1" />
            <line x1="-10" y1="-7" x2="2" y2="-7" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="-10" y1="-2" x2="8" y2="-2" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="-10" y1="3" x2="-1" y2="3" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="0" y1="10" x2="0" y2="18" strokeWidth="2" strokeLinecap="round" />
            <line x1="-10" y1="18" x2="10" y2="18" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Power Plug */}
          <g transform="translate(350,355)" stroke={col} strokeWidth="1.8" fill="none">
            <circle r="14" />
            <line x1="-5" y1="-8" x2="-5" y2="-20" strokeWidth="3" strokeLinecap="round" />
            <line x1="5" y1="-8" x2="5" y2="-20" strokeWidth="3" strokeLinecap="round" />
            <circle cx="-4" cy="2" r="2.5" />
            <circle cx="4" cy="2" r="2.5" />
            <path d="M-4,7 Q0,12 4,7" strokeLinecap="round" />
            <line x1="0" y1="14" x2="0" y2="22" strokeWidth="2" strokeLinecap="round" />
          </g>

        </pattern>
      </defs>

      {/* Gradient fills the whole hero once */}
      <rect width="100%" height="100%" fill="url(#hero-bg-grad)" />
      {/* Icon pattern tiles on top with transparent bg */}
      <rect width="100%" height="100%" fill="url(#tech-icon-pattern)" />
    </svg>
  );
}
