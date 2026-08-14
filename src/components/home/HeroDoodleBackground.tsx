export default function HeroDoodleBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="kids-doodle-pattern"
          x="0"
          y="0"
          width="400"
          height="320"
          patternUnits="userSpaceOnUse"
        >
          {/* ── Background ── */}
          <rect width="400" height="320" fill="#3c3c3c" />

          {/* ══ ROW 1  y ≈ 30-75 ══ */}

          {/* Sun + water waves */}
          <g transform="translate(55,48)">
            <circle r="11" fill="none" stroke="#eab308" strokeWidth="2.5" />
            <line x1="0" y1="-16" x2="0" y2="-21" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            <line x1="16" y1="0" x2="21" y2="0" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            <line x1="0" y1="16" x2="0" y2="21" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            <line x1="-16" y1="0" x2="-21" y2="0" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            <line x1="11" y1="-11" x2="15" y2="-15" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            <line x1="11" y1="11" x2="15" y2="15" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            <line x1="-11" y1="11" x2="-15" y2="15" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            <line x1="-11" y1="-11" x2="-15" y2="-15" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            <path d="M-18,18 C-13,14 -7,14 -2,18 C3,22 9,22 14,18" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M-15,26 C-10,22 -4,22 1,26 C6,30 12,30 17,26" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Balloon (red) */}
          <g transform="translate(150,42)">
            <ellipse rx="13" ry="16" fill="none" stroke="#ef4444" strokeWidth="2.5" />
            <path d="M-3,15 L3,15 L0,21 Z" fill="#ef4444" />
            <line x1="0" y1="21" x2="-3" y2="36" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Rainbow */}
          <g transform="translate(232,54)">
            <path d="M-26,0 A26,26,0,0,0,26,0" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M-20,0 A20,20,0,0,0,20,0" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M-14,0 A14,14,0,0,0,14,0" fill="none" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M-8,0 A8,8,0,0,0,8,0" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* 4-pointed star */}
          <g transform="translate(318,35)">
            <path d="M0,-14 L4,-4 L14,0 L4,4 L0,14 L-4,4 L-14,0 L-4,-4 Z"
              fill="none" stroke="#eab308" strokeWidth="2.5" strokeLinejoin="round" />
          </g>

          {/* Small red heart */}
          <g transform="translate(376,55)">
            <path d="M0,7 C0,7 -9,-1 -9,-6 C-9,-11 -4,-12 0,-7 C4,-12 9,-11 9,-6 C9,-1 0,7 0,7 Z" fill="#ef4444" />
          </g>

          {/* Tiny blue triangle */}
          <g transform="translate(88,70)">
            <path d="M0,-10 L10,8 L-10,8 Z" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round" />
          </g>

          {/* Green leaf */}
          <g transform="translate(168,76)">
            <path d="M0,10 C6,4 8,-6 0,-10 C-6,-4 -6,4 0,10 Z" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="0" y1="-8" x2="0" y2="10" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Small lightning accent */}
          <g transform="translate(258,64)">
            <path d="M3,-10 L-2,1 L2,1 L-3,10 L6,-3 L2,-3 Z" fill="#eab308" />
          </g>

          {/* Small green heart */}
          <g transform="translate(340,68)">
            <path d="M0,6 C0,6 -7,-1 -7,-5 C-7,-9 -2,-10 0,-5 C2,-10 7,-9 7,-5 C7,-1 0,6 0,6 Z" fill="#22c55e" />
          </g>

          {/* ══ ROW 2  y ≈ 100-145 ══ */}

          {/* Cloud (blue) */}
          <g transform="translate(28,118)">
            <ellipse cx="4" cy="2" rx="18" ry="10" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
            <circle cx="-6" cy="-5" r="8" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
            <circle cx="12" cy="-6" r="10" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
          </g>

          {/* UFO (purple) */}
          <g transform="translate(112,122)">
            <ellipse cx="0" cy="5" rx="22" ry="8" fill="none" stroke="#a855f7" strokeWidth="2.5" />
            <path d="M-11,5 Q0,-12 11,5" fill="none" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="-9" cy="8" r="2.5" fill="#a855f7" />
            <circle cx="0" cy="10" r="2.5" fill="#a855f7" />
            <circle cx="9" cy="8" r="2.5" fill="#a855f7" />
          </g>

          {/* 6-petal flower (orange) */}
          <g transform="translate(198,118)">
            <circle cx="0" cy="-9" r="5" fill="none" stroke="#f97316" strokeWidth="2" />
            <circle cx="8" cy="-5" r="5" fill="none" stroke="#f97316" strokeWidth="2" />
            <circle cx="8" cy="5" r="5" fill="none" stroke="#f97316" strokeWidth="2" />
            <circle cx="0" cy="9" r="5" fill="none" stroke="#f97316" strokeWidth="2" />
            <circle cx="-8" cy="5" r="5" fill="none" stroke="#f97316" strokeWidth="2" />
            <circle cx="-8" cy="-5" r="5" fill="none" stroke="#f97316" strokeWidth="2" />
            <circle cx="0" cy="0" r="5.5" fill="#f97316" />
            <line x1="0" y1="14" x2="0" y2="28" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* House (orange/red) */}
          <g transform="translate(278,118)">
            <rect x="-14" y="-4" width="28" height="20" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M-18,-4 L0,-20 L18,-4" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinejoin="round" />
            <rect x="-5" y="6" width="10" height="10" fill="none" stroke="#f97316" strokeWidth="2" />
          </g>

          {/* Lightning bolt (yellow) */}
          <g transform="translate(358,118)">
            <path d="M5,-18 L-3,1 L3,1 L-5,18 L12,-5 L5,-5 Z" fill="#eab308" />
          </g>

          {/* ══ ROW 3  y ≈ 175-215 ══ */}

          {/* Spiral / swirl (yellow) */}
          <g transform="translate(52,190)">
            <path d="M0,-12 C8,-12 14,-6 14,0 C14,8 8,14 0,14 C-8,14 -13,7 -13,0 C-13,-5 -8,-10 -2,-10 C3,-10 7,-5 6,0 C5,4 1,7 -3,5"
              fill="none" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Small rainbow */}
          <g transform="translate(132,188)">
            <path d="M-22,0 A22,22,0,0,0,22,0" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M-16,0 A16,16,0,0,0,16,0" fill="none" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M-10,0 A10,10,0,0,0,10,0" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M-5,0 A5,5,0,0,0,5,0" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Red dots cluster */}
          <g transform="translate(212,185)">
            <circle cx="0" cy="-9" r="4" fill="#ef4444" />
            <circle cx="8" cy="-2" r="4" fill="#ef4444" />
            <circle cx="5" cy="8" r="4" fill="#ef4444" />
            <circle cx="-5" cy="8" r="4" fill="#ef4444" />
            <circle cx="-8" cy="-2" r="4" fill="#ef4444" />
          </g>

          {/* Lollipop tree (green) */}
          <g transform="translate(288,188)">
            <circle cx="0" cy="-13" r="17" fill="none" stroke="#22c55e" strokeWidth="2.5" />
            <circle cx="0" cy="-13" r="8" fill="none" stroke="#22c55e" strokeWidth="1.5" />
            <line x1="0" y1="4" x2="0" y2="22" stroke="#92400e" strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* Shooting star (yellow) */}
          <g transform="translate(358,190)">
            <path d="M0,-11 L3,-4 L11,-4 L5,1 L7,9 L0,4 L-7,9 L-5,1 L-11,-4 L-3,-4 Z" fill="#eab308" />
            <line x1="-14" y1="12" x2="-22" y2="20" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            <line x1="-8" y1="14" x2="-15" y2="21" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Blue snowflake/asterisk accent */}
          <g transform="translate(175,152)">
            <circle r="4" fill="#3b82f6" />
            <line x1="0" y1="-12" x2="0" y2="-6" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="0" y1="6" x2="0" y2="12" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="-12" y1="0" x2="-6" y2="0" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="6" y1="0" x2="12" y2="0" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="-9" y1="-9" x2="-5" y2="-5" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
            <line x1="5" y1="5" x2="9" y2="9" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
            <line x1="9" y1="-9" x2="5" y2="-5" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
            <line x1="-5" y1="5" x2="-9" y2="9" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* ══ ROW 4  y ≈ 248-295 ══ */}

          {/* Sun + water (repeat) */}
          <g transform="translate(62,262)">
            <circle r="10" fill="none" stroke="#eab308" strokeWidth="2.5" />
            <line x1="0" y1="-15" x2="0" y2="-20" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            <line x1="15" y1="0" x2="20" y2="0" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            <line x1="0" y1="15" x2="0" y2="20" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            <line x1="-15" y1="0" x2="-20" y2="0" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="-10" x2="14" y2="-14" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="10" x2="14" y2="14" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            <line x1="-10" y1="10" x2="-14" y2="14" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            <line x1="-10" y1="-10" x2="-14" y2="-14" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            <path d="M-16,16 C-11,12 -5,12 0,16 C5,20 11,20 16,16" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M-13,24 C-8,20 -2,20 3,24 C8,28 14,28 19,24" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Cloud (repeat) */}
          <g transform="translate(158,262)">
            <ellipse cx="0" cy="0" rx="16" ry="9" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
            <circle cx="-7" cy="-6" r="7" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
            <circle cx="7" cy="-7" r="9" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
          </g>

          {/* Balloon (pink) */}
          <g transform="translate(242,255)">
            <ellipse rx="12" ry="15" fill="none" stroke="#ec4899" strokeWidth="2.5" />
            <path d="M-3,14 L3,14 L0,20 Z" fill="#ec4899" />
            <line x1="0" y1="20" x2="3" y2="34" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Ice cream cone */}
          <g transform="translate(322,272)">
            <path d="M-12,0 L0,24 L12,0 Z" fill="none" stroke="#92400e" strokeWidth="2.5" strokeLinejoin="round" />
            <line x1="-8" y1="8" x2="8" y2="8" stroke="#92400e" strokeWidth="1.5" />
            <line x1="-5" y1="16" x2="5" y2="16" stroke="#92400e" strokeWidth="1.5" />
            <circle cx="0" cy="-11" r="12" fill="none" stroke="#f9a8d4" strokeWidth="2.5" />
          </g>

          {/* Green heart */}
          <g transform="translate(382,268)">
            <path d="M0,7 C0,7 -8,-1 -8,-5 C-8,-10 -3,-11 0,-6 C3,-11 8,-10 8,-5 C8,-1 0,7 0,7 Z" fill="#22c55e" />
          </g>

          {/* Small red flower near bottom-left area */}
          <g transform="translate(28,210)">
            <circle cx="0" cy="-7" r="4" fill="none" stroke="#ef4444" strokeWidth="2" />
            <circle cx="6" cy="-4" r="4" fill="none" stroke="#ef4444" strokeWidth="2" />
            <circle cx="6" cy="4" r="4" fill="none" stroke="#ef4444" strokeWidth="2" />
            <circle cx="0" cy="7" r="4" fill="none" stroke="#ef4444" strokeWidth="2" />
            <circle cx="-6" cy="4" r="4" fill="none" stroke="#ef4444" strokeWidth="2" />
            <circle cx="-6" cy="-4" r="4" fill="none" stroke="#ef4444" strokeWidth="2" />
            <circle cx="0" cy="0" r="4.5" fill="#ef4444" />
          </g>

        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#kids-doodle-pattern)" />
    </svg>
  );
}
