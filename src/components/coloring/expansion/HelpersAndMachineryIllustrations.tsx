import React from "react";

export function renderHelpersAndMachinery(slug: string): React.ReactNode | null {
  switch (slug) {
    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 7: COMMUNITY HELPERS & HEROES
    // ══════════════════════════════════════════════════════════════════
    case "mail-carrier-with-delivery-bag-coloring-page":
    case "neighborhood-postal-mail-carrier-coloring-page":
      return (
        <g>
          {/* Mailbox stand */}
          <rect x="280" y="160" width="80" height="55" rx="20" fill="#fff" strokeWidth={3.5} />
          <polygon points="360,170 375,150 375,170" fill="#111827" />
          <rect x="310" y="215" width="20" height="150" fill="#111827" />
          {/* Mail carrier body */}
          <polygon points="120,170 230,170 240,330 110,330" fill="#fff" strokeWidth={4} />
          {/* Postal bag satchel strap across chest */}
          <line x1="130" y1="170" x2="220" y2="270" strokeWidth={10} stroke="#111827" />
          {/* Big leather mail satchel */}
          <rect x="190" y="230" width="65" height="60" rx="8" fill="#fff" strokeWidth={3.5} />
          {/* Hand holding letter with stamp */}
          <rect x="235" y="180" width="40" height="28" rx="2" fill="#fff" strokeWidth={2.5} />
          <line x1="235" y1="180" x2="255" y2="198" strokeWidth={1.5} />
          <line x1="275" y1="180" x2="255" y2="198" strokeWidth={1.5} />
          <rect x="264" y="183" width="8" height="8" fill="#111827" />
          {/* Friendly face & postal cap */}
          <circle cx="175" cy="120" r="35" fill="#fff" strokeWidth={3.5} />
          <circle cx="165" cy="115" r="5" fill="#111827" />
          <circle cx="188" cy="115" r="5" fill="#111827" />
          <path d="M168 132 Q178 142 188 132" fill="none" strokeWidth={2.5} />
          <ellipse cx="175" cy="95" rx="38" ry="12" fill="#fff" strokeWidth={3} />
          <polygon points="150,95 155,70 195,70 200,95" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "pediatric-nurse-with-clipboard-coloring-page":
    case "caring-pediatric-doctor-with-stethoscope-coloring-page":
      return (
        <g>
          {/* Nurse medical scrubs top & pants */}
          <polygon points="140,160 260,160 270,330 130,330" fill="#fff" strokeWidth={4} />
          <path d="M175 160 L200 190 L225 160" fill="none" strokeWidth={3} />
          {/* Pocket with medical pen and thermometer */}
          <rect x="150" y="210" width="30" height="35" rx="3" fill="#fff" strokeWidth={2} />
          <line x1="160" y1="200" x2="160" y2="215" strokeWidth={3} stroke="#111827" />
          <line x1="170" y1="203" x2="170" y2="215" strokeWidth={2.5} stroke="#111827" />
          {/* Holding medical chart clipboard */}
          <rect x="220" y="200" width="60" height="80" rx="4" fill="#fff" strokeWidth={3} />
          <rect x="240" y="195" width="20" height="10" rx="2" fill="#111827" />
          <line x1="230" y1="220" x2="270" y2="220" strokeWidth={2} />
          <line x1="230" y1="235" x2="265" y2="235" strokeWidth={2} />
          <line x1="230" y1="250" x2="260" y2="250" strokeWidth={2} />
          <circle cx="233" cy="220" r="2" fill="#111827" />
          <circle cx="233" cy="235" r="2" fill="#111827" />
          {/* Stethoscope around neck */}
          <path d="M175 160 Q170 210 190 235 L205 235 Q230 210 225 160" fill="none" strokeWidth={3.5} stroke="#111827" />
          <circle cx="205" cy="235" r="8" fill="#fff" strokeWidth={2.5} />
          {/* Smiling friendly nurse face & ponytail */}
          <circle cx="200" cy="115" r="38" fill="#fff" strokeWidth={3.5} />
          <circle cx="188" cy="110" r="5" fill="#111827" />
          <circle cx="212" cy="110" r="5" fill="#111827" />
          <path d="M190 128 Q200 138 210 128" fill="none" strokeWidth={2.5} />
          <path d="M165 105 C165 70, 235 70, 235 105" fill="none" strokeWidth={4} />
          <ellipse cx="238" cy="115" rx="10" ry="16" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "childrens-dentist-with-toothbrush-coloring-page":
      return (
        <g>
          {/* Friendly Dentist in uniform */}
          <polygon points="120,180 230,180 240,340 110,340" fill="#fff" strokeWidth={4} />
          <rect x="155" y="220" width="30" height="30" rx="3" fill="#fff" strokeWidth={2} />
          {/* Dentist face */}
          <circle cx="175" cy="125" r="36" fill="#fff" strokeWidth={3.5} />
          <circle cx="165" cy="120" r="4.5" fill="#111827" />
          <circle cx="185" cy="120" r="4.5" fill="#111827" />
          <path d="M168 138 Q175 146 182 138" fill="none" strokeWidth={2.5} />
          {/* Dental protective cap */}
          <path d="M140 115 C140 80, 210 80, 210 115 Z" fill="#fff" strokeWidth={3} />
          {/* Giant toothbrush in hand */}
          <line x1="210" y1="280" x2="310" y2="120" strokeWidth={8} stroke="#111827" strokeLinecap="round" />
          <rect x="290" y="95" width="35" height="25" rx="4" fill="#fff" strokeWidth={3} transform="rotate(-30 307 107)" />
          {/* Bristles */}
          <line x1="300" y1="90" x2="315" y2="80" strokeWidth={3} stroke="#111827" />
          <line x1="305" y1="95" x2="320" y2="85" strokeWidth={3} stroke="#111827" />
          <line x1="310" y1="100" x2="325" y2="90" strokeWidth={3} stroke="#111827" />
          {/* Giant happy smiling tooth mascot */}
          <path d="M280 230 C270 200, 310 190, 325 210 C340 190, 380 200, 370 230 C365 260, 360 300, 350 300 C340 300, 335 270, 325 270 C315 270, 310 300, 300 300 C290 300, 285 260, 280 230 Z" fill="#fff" strokeWidth={3.5} />
          <circle cx="310" cy="225" r="4" fill="#111827" />
          <circle cx="340" cy="225" r="4" fill="#111827" />
          <path d="M315 240 Q325 250 335 240" fill="none" strokeWidth={2.5} />
          {/* Sparkle star */}
          <polygon points="360,200 363,208 372,208 365,213 368,221 360,216 352,221 355,213 348,208 357,208" fill="#111827" />
        </g>
      );

    case "paramedic-and-ambulance-coloring-page":
      return (
        <g>
          {/* Ambulance vehicle in background */}
          <rect x="180" y="160" width="180" height="110" rx="10" fill="#fff" strokeWidth={3.5} />
          <path d="M310 190 L360 210 L360 270 L310 270 Z" fill="#fff" strokeWidth={3} />
          <rect x="290" y="175" width="45" height="35" rx="3" fill="#fff" strokeWidth={2} />
          <circle cx="220" cy="270" r="22" fill="#fff" strokeWidth={3.5} />
          <circle cx="220" cy="270" r="8" fill="#111827" />
          <circle cx="320" cy="270" r="22" fill="#fff" strokeWidth={3.5} />
          <circle cx="320" cy="270" r="8" fill="#111827" />
          {/* Ambulance flashing light beacon */}
          <rect x="250" y="145" width="30" height="15" rx="4" fill="#fff" strokeWidth={2.5} />
          {/* Red cross on ambulance door */}
          <rect x="225" y="195" width="8" height="30" fill="#111827" />
          <rect x="214" y="206" width="30" height="8" fill="#111827" />
          {/* Paramedic in foreground */}
          <polygon points="80,210 180,210 190,340 70,340" fill="#fff" strokeWidth={4} />
          {/* Reflective high-vis stripes */}
          <line x1="75" y1="250" x2="185" y2="250" strokeWidth={6} stroke="#111827" />
          <line x1="72" y1="290" x2="188" y2="290" strokeWidth={6} stroke="#111827" />
          {/* Paramedic Head */}
          <circle cx="130" cy="155" r="35" fill="#fff" strokeWidth={3.5} />
          <circle cx="120" cy="150" r="4.5" fill="#111827" />
          <circle cx="140" cy="150" r="4.5" fill="#111827" />
          <path d="M122 165 Q130 173 138 165" fill="none" strokeWidth={2.5} />
          {/* Holding medical emergency trauma kit */}
          <rect x="150" y="270" width="55" height="45" rx="5" fill="#fff" strokeWidth={3} />
          <line x1="168" y1="270" x2="168" y2="260" strokeWidth={3} stroke="#111827" />
          <line x1="188" y1="270" x2="188" y2="260" strokeWidth={3} stroke="#111827" />
          <line x1="168" y1="260" x2="188" y2="260" strokeWidth={3} stroke="#111827" />
          <rect x="174" y="283" width="6" height="18" fill="#111827" />
          <rect x="168" y="289" width="18" height="6" fill="#111827" />
        </g>
      );

    case "veterinarian-caring-for-puppy-coloring-page":
    case "compassionate-veterinarian-checking-puppy-coloring-page":
      return (
        <g>
          {/* Examination table */}
          <rect x="50" y="260" width="300" height="20" rx="4" fill="#fff" strokeWidth={3.5} />
          <rect x="70" y="280" width="20" height="90" fill="#111827" />
          <rect x="310" y="280" width="20" height="90" fill="#111827" />
          {/* Cute puppy sitting on table */}
          <ellipse cx="230" cy="210" rx="45" ry="40" fill="#fff" strokeWidth={3.5} />
          <circle cx="210" cy="160" r="30" fill="#fff" strokeWidth={3.5} />
          {/* Floppy puppy ears */}
          <ellipse cx="185" cy="160" rx="12" ry="22" fill="#fff" strokeWidth={3} transform="rotate(15 185 160)" />
          <ellipse cx="235" cy="160" rx="12" ry="22" fill="#fff" strokeWidth={3} transform="rotate(-15 235 160)" />
          <circle cx="202" cy="155" r="5" fill="#111827" />
          <circle cx="218" cy="155" r="5" fill="#111827" />
          <circle cx="210" cy="166" r="4" fill="#111827" />
          {/* Bandaged paw */}
          <rect x="195" y="235" width="16" height="25" rx="4" fill="#fff" strokeWidth={2.5} />
          <line x1="195" y1="245" x2="211" y2="245" strokeWidth={2} />
          {/* Caring vet standing beside */}
          <circle cx="120" cy="120" r="35" fill="#fff" strokeWidth={3.5} />
          <circle cx="112" cy="115" r="4" fill="#111827" />
          <circle cx="132" cy="115" r="4" fill="#111827" />
          <path d="M115 130 Q122 138 130 130" fill="none" strokeWidth={2} />
          <path d="M80 170 L150 170 L140 260 L70 260 Z" fill="#fff" strokeWidth={3.5} />
        </g>
      );

    case "school-librarian-with-storybooks-coloring-page":
    case "kind-school-teacher-at-chalkboard-coloring-page":
      return (
        <g>
          {/* Bookshelf behind */}
          <rect x="40" y="60" width="180" height="260" fill="#fff" strokeWidth={3.5} />
          <line x1="40" y1="130" x2="220" y2="130" strokeWidth={3} stroke="#111827" />
          <line x1="40" y1="200" x2="220" y2="200" strokeWidth={3} stroke="#111827" />
          <line x1="40" y1="270" x2="220" y2="270" strokeWidth={3} stroke="#111827" />
          {/* Books lined up on shelves */}
          <rect x="55" y="80" width="18" height="50" rx="2" fill="#fff" strokeWidth={2} />
          <rect x="75" y="75" width="22" height="55" rx="2" fill="#fff" strokeWidth={2} />
          <rect x="100" y="85" width="16" height="45" rx="2" fill="#fff" strokeWidth={2} />
          <rect x="120" y="70" width="24" height="60" rx="2" fill="#fff" strokeWidth={2} />
          <rect x="55" y="150" width="20" height="50" rx="2" fill="#fff" strokeWidth={2} />
          <rect x="80" y="145" width="25" height="55" rx="2" fill="#fff" strokeWidth={2} />
          {/* Smiling Librarian */}
          <circle cx="280" cy="130" r="35" fill="#fff" strokeWidth={3.5} />
          <circle cx="270" cy="125" r="4.5" fill="#111827" />
          <circle cx="290" cy="125" r="4.5" fill="#111827" />
          <path d="M272 142 Q280 150 288 142" fill="none" strokeWidth={2.5} />
          {/* Reading glasses */}
          <circle cx="270" cy="125" r="9" fill="none" strokeWidth={2} />
          <circle cx="290" cy="125" r="9" fill="none" strokeWidth={2} />
          <line x1="279" y1="125" x2="281" y2="125" strokeWidth={2} />
          {/* Librarian holding open storybook */}
          <polygon points="240,180 320,180 330,340 230,340" fill="#fff" strokeWidth={4} />
          <path d="M220 220 Q260 210 270 230 Q280 210 320 220 L320 260 Q280 250 270 270 Q260 250 220 260 Z" fill="#fff" strokeWidth={3} />
          <line x1="270" y1="230" x2="270" y2="270" strokeWidth={2.5} stroke="#111827" />
        </g>
      );

    case "sanitation-worker-with-recycling-truck-coloring-page":
      return (
        <g>
          {/* Recycling truck rear hopper */}
          <rect x="180" y="140" width="180" height="150" rx="8" fill="#fff" strokeWidth={3.5} />
          <circle cx="230" cy="290" r="28" fill="#fff" strokeWidth={4} />
          <circle cx="230" cy="290" r="10" fill="#111827" />
          <circle cx="290" cy="290" r="28" fill="#fff" strokeWidth={4} />
          <circle cx="290" cy="290" r="10" fill="#111827" />
          {/* Chasing arrows recycling logo on truck */}
          <circle cx="270" cy="200" r="24" fill="none" strokeWidth={3} strokeDasharray="16 8" />
          {/* Sanitation worker in foreground */}
          <polygon points="80,180 170,180 180,330 70,330" fill="#fff" strokeWidth={4} />
          <line x1="75" y1="230" x2="175" y2="230" strokeWidth={6} stroke="#111827" />
          <circle cx="125" cy="130" r="35" fill="#fff" strokeWidth={3.5} />
          <circle cx="115" cy="125" r="4.5" fill="#111827" />
          <circle cx="135" cy="125" r="4.5" fill="#111827" />
          <path d="M117 140 Q125 148 133 140" fill="none" strokeWidth={2.5} />
          {/* Safety cap */}
          <ellipse cx="125" cy="105" rx="38" ry="12" fill="#fff" strokeWidth={3} />
          {/* Rolling curbside wheeled recycling bin */}
          <rect x="150" y="230" width="45" height="70" rx="4" fill="#fff" strokeWidth={3} />
          <circle cx="155" cy="300" r="10" fill="#fff" strokeWidth={3} />
          <circle cx="190" cy="300" r="10" fill="#fff" strokeWidth={3} />
          <rect x="145" y="222" width="55" height="10" rx="3" fill="#111827" />
        </g>
      );

    case "school-crossing-guard-coloring-page":
    case "friendly-police-officer-crossing-guard-coloring-page":
      return (
        <g>
          {/* Crosswalk lines on road pavement */}
          <line x1="30" y1="350" x2="370" y2="350" strokeWidth={4} stroke="#111827" />
          <rect x="50" y="325" width="40" height="25" fill="#111827" />
          <rect x="130" y="325" width="40" height="25" fill="#111827" />
          <rect x="210" y="325" width="40" height="25" fill="#111827" />
          <rect x="290" y="325" width="40" height="25" fill="#111827" />
          {/* Crossing guard body with reflective bright vest */}
          <polygon points="120,170 230,170 240,330 110,330" fill="#fff" strokeWidth={4} />
          {/* High-vis fluorescent X sash stripes */}
          <line x1="125" y1="175" x2="225" y2="290" strokeWidth={8} stroke="#111827" />
          <line x1="225" y1="175" x2="125" y2="290" strokeWidth={8} stroke="#111827" />
          {/* Friendly face */}
          <circle cx="175" cy="120" r="35" fill="#fff" strokeWidth={3.5} />
          <circle cx="165" cy="115" r="5" fill="#111827" />
          <circle cx="185" cy="115" r="5" fill="#111827" />
          <path d="M168 132 Q175 142 182 132" fill="none" strokeWidth={2.5} />
          <ellipse cx="175" cy="95" rx="40" ry="14" fill="#fff" strokeWidth={3} />
          <polygon points="150,95 155,70 195,70 200,95" fill="#fff" strokeWidth={3} />
          {/* Hand holding high-visibility octagonal STOP paddle */}
          <line x1="230" y1="190" x2="280" y2="150" strokeWidth={10} stroke="#111827" strokeLinecap="round" />
          <line x1="280" y1="150" x2="290" y2="70" strokeWidth={6} stroke="#111827" />
          <polygon points="290,40 315,50 325,75 315,100 290,110 265,100 255,75 265,50" fill="#fff" strokeWidth={3.5} />
          <text x="270" y="82" fontSize="13" fontWeight="bold" fill="#111827" stroke="none">STOP</text>
        </g>
      );

    case "park-ranger-with-binoculars-coloring-page":
      return (
        <g>
          {/* Mountain pine tree background */}
          <polygon points="40,320 80,210 120,320" fill="#fff" strokeWidth={3} />
          <polygon points="280,320 330,190 380,320" fill="#fff" strokeWidth={3} />
          {/* Ranger body uniform */}
          <polygon points="130,170 250,170 260,330 120,330" fill="#fff" strokeWidth={4} />
          <line x1="190" y1="170" x2="190" y2="330" strokeWidth={2.5} />
          {/* Ranger star badge on chest */}
          <polygon points="155,200 160,210 172,210 162,218 166,228 155,222 144,228 148,218 138,210 150,210" fill="#111827" />
          {/* Ranger Head */}
          <circle cx="190" cy="120" r="35" fill="#fff" strokeWidth={3.5} />
          <circle cx="180" cy="115" r="4.5" fill="#111827" />
          <circle cx="200" cy="115" r="4.5" fill="#111827" />
          <path d="M182 130 Q190 138 198 130" fill="none" strokeWidth={2.5} />
          {/* Iconic broad-brim campaign ranger hat */}
          <ellipse cx="190" cy="95" rx="55" ry="15" fill="#fff" strokeWidth={3.5} />
          <path d="M165 95 C165 60, 215 60, 215 95 Z" fill="#fff" strokeWidth={3.5} />
          {/* Binoculars hanging around neck strap */}
          <path d="M175 160 L180 230 L200 230 L205 160" fill="none" strokeWidth={3} stroke="#111827" />
          <rect x="175" y="230" width="16" height="28" rx="4" fill="#fff" strokeWidth={2.5} />
          <rect x="195" y="230" width="16" height="28" rx="4" fill="#fff" strokeWidth={2.5} />
          <line x1="185" y1="240" x2="201" y2="240" strokeWidth={3} stroke="#111827" />
        </g>
      );

    case "beach-lifeguard-on-tower-coloring-page":
      return (
        <g>
          {/* Ocean waves rolling on shore */}
          <path d="M20 340 Q100 320 180 340 T360 340" fill="none" strokeWidth={3} />
          <path d="M40 365 Q120 345 200 365 T380 365" fill="none" strokeWidth={2.5} />
          {/* Lifeguard observation tower structure */}
          <line x1="120" y1="350" x2="150" y2="180" strokeWidth={5} stroke="#111827" />
          <line x1="260" y1="350" x2="230" y2="180" strokeWidth={5} stroke="#111827" />
          {/* X cross braces */}
          <line x1="130" y1="310" x2="250" y2="220" strokeWidth={2.5} />
          <line x1="250" y1="310" x2="130" y2="220" strokeWidth={2.5} />
          {/* Tower platform deck */}
          <rect x="130" y="175" width="120" height="15" rx="3" fill="#fff" strokeWidth={3.5} />
          {/* Tower canopy sun roof */}
          <polygon points="120,110 260,110 250,90 130,90" fill="#fff" strokeWidth={3.5} />
          <line x1="140" y1="175" x2="140" y2="110" strokeWidth={3} stroke="#111827" />
          <line x1="240" y1="175" x2="240" y2="110" strokeWidth={3} stroke="#111827" />
          {/* Lifeguard sitting on chair */}
          <circle cx="190" cy="140" r="18" fill="#fff" strokeWidth={3} />
          <polygon points="180,158 200,158 205,175 175,175" fill="#fff" strokeWidth={2.5} />
          {/* Rescue torpedo can buoy hanging from railing */}
          <ellipse cx="245" cy="155" rx="10" ry="24" fill="#fff" strokeWidth={3} />
          <line x1="245" y1="135" x2="245" y2="175" strokeWidth={2} />
          <path d="M235 155 L245 130 L255 155" fill="none" strokeWidth={2} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 8: CONSTRUCTION & HEAVY MACHINERY
    // ══════════════════════════════════════════════════════════════════
    case "excavator-digger-scooping-soil-coloring-page":
      return (
        <g>
          {/* Continuous tracks / treads */}
          <rect x="70" y="270" width="180" height="55" rx="27" fill="#fff" strokeWidth={4} />
          <circle cx="100" cy="297" r="18" fill="#fff" strokeWidth={3} />
          <circle cx="160" cy="297" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="220" cy="297" r="18" fill="#fff" strokeWidth={3} />
          {/* Cab body */}
          <path d="M80 210 L190 210 L190 270 L80 270 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M120 150 L185 150 L185 210 L120 210 Z" fill="#fff" strokeWidth={3.5} />
          <rect x="135" y="160" width="40" height="40" rx="4" fill="#fff" strokeWidth={2.5} />
          {/* Articulated boom and dipper arm */}
          <line x1="180" y1="210" x2="260" y2="120" strokeWidth={16} stroke="#fff" />
          <line x1="180" y1="210" x2="260" y2="120" strokeWidth={3.5} stroke="#111827" />
          <line x1="260" y1="120" x2="330" y2="190" strokeWidth={14} stroke="#fff" />
          <line x1="260" y1="120" x2="330" y2="190" strokeWidth={3.5} stroke="#111827" />
          {/* Toothed bucket scooping soil */}
          <path d="M330 190 C340 230, 360 250, 375 240 L370 220 L350 210 Z" fill="#fff" strokeWidth={3} />
          <polygon points="360,245 365,260 375,250 380,265 385,250" fill="#111827" />
        </g>
      );

    case "heavy-bulldozer-pushing-dirt-coloring-page":
    case "bulldozer-clearing-construction-site-coloring-page":
      return (
        <g>
          {/* Bulldozer crawler tracks */}
          <rect x="110" y="270" width="180" height="55" rx="27" fill="#fff" strokeWidth={4} />
          <circle cx="140" cy="297" r="18" fill="#fff" strokeWidth={3} />
          <circle cx="200" cy="297" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="260" cy="297" r="18" fill="#fff" strokeWidth={3} />
          {/* Heavy engine hood and cab */}
          <path d="M120 200 L280 200 L280 270 L120 270 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M190 140 L270 140 L270 200 L190 200 Z" fill="#fff" strokeWidth={3.5} />
          <rect x="205" y="150" width="50" height="40" rx="4" fill="#fff" strokeWidth={2.5} />
          {/* Giant curved front push blade */}
          <path d="M50 210 C70 210, 80 270, 70 330 L90 330 C100 270, 90 200, 70 200 Z" fill="#fff" strokeWidth={3.5} />
          <line x1="80" y1="265" x2="140" y2="265" strokeWidth={10} stroke="#111827" />
          {/* Earth/dirt pile in front */}
          <ellipse cx="40" cy="330" rx="30" ry="15" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "big-dump-truck-tipping-gravel-coloring-sheet":
    case "heavy-duty-dump-truck-hauling-gravel-coloring-page":
      return (
        <g>
          {/* Truck cab */}
          <path d="M40 200 L110 200 L120 270 L40 270 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M60 140 L110 140 L110 200 L50 200 Z" fill="#fff" strokeWidth={3.5} />
          <rect x="65" y="150" width="35" height="35" rx="3" fill="#fff" strokeWidth={2} />
          {/* Heavy wheels */}
          <circle cx="80" cy="295" r="30" fill="#fff" strokeWidth={4} />
          <circle cx="80" cy="295" r="14" fill="#111827" />
          <circle cx="260" cy="295" r="30" fill="#fff" strokeWidth={4} />
          <circle cx="260" cy="295" r="14" fill="#111827" />
          <circle cx="325" cy="295" r="30" fill="#fff" strokeWidth={4} />
          <circle cx="325" cy="295" r="14" fill="#111827" />
          {/* Tilted dump bed dumping gravel */}
          <polygon points="135,210 320,130 350,190 165,270" fill="#fff" strokeWidth={4} />
          {/* Hydraulic lifting cylinder */}
          <line x1="150" y1="270" x2="200" y2="210" strokeWidth={8} stroke="#111827" />
          {/* Gravel pile tumbling out */}
          <circle cx="355" cy="210" r="7" fill="#fff" strokeWidth={2} />
          <circle cx="370" cy="230" r="9" fill="#fff" strokeWidth={2} />
          <circle cx="360" cy="260" r="12" fill="#fff" strokeWidth={2} />
          <circle cx="375" cy="290" r="15" fill="#fff" strokeWidth={2} />
        </g>
      );

    case "concrete-mixer-truck-spinning-coloring-page":
    case "revolving-cement-mixer-truck-coloring-page":
      return (
        <g>
          {/* Truck cab */}
          <path d="M40 210 L100 210 L110 280 L40 280 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M60 160 L100 160 L100 210 L50 210 Z" fill="#fff" strokeWidth={3.5} />
          <rect x="65" y="170" width="30" height="30" rx="3" fill="#fff" strokeWidth={2} />
          {/* Wheels */}
          <circle cx="80" cy="300" r="28" fill="#fff" strokeWidth={4} />
          <circle cx="80" cy="300" r="12" fill="#111827" />
          <circle cx="250" cy="300" r="28" fill="#fff" strokeWidth={4} />
          <circle cx="250" cy="300" r="12" fill="#111827" />
          <circle cx="310" cy="300" r="28" fill="#fff" strokeWidth={4} />
          <circle cx="310" cy="300" r="12" fill="#111827" />
          {/* Chassis frame */}
          <rect x="90" y="260" width="260" height="20" fill="#fff" strokeWidth={3} />
          {/* Barrel mixer revolving drum */}
          <polygon points="120,230 220,130 310,180 230,260" fill="#fff" strokeWidth={4} />
          <line x1="160" y1="190" x2="270" y2="210" strokeWidth={3} strokeDasharray="10 5" />
          {/* Pouring chute at rear */}
          <polygon points="310,190 350,220 335,240 300,210" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "road-roller-compactor-coloring-page":
    case "heavy-road-roller-paving-smooth-asphalt-coloring-page":
      return (
        <g>
          {/* Ground asphalt line */}
          <line x1="20" y1="320" x2="380" y2="320" strokeWidth={4} stroke="#111827" />
          {/* Front giant smooth steel drum */}
          <circle cx="110" cy="270" r="50" fill="#fff" strokeWidth={4} />
          <circle cx="110" cy="270" r="20" fill="#fff" strokeWidth={3} />
          {/* Rear large pneumatic tires */}
          <circle cx="290" cy="270" r="45" fill="#fff" strokeWidth={4} />
          <circle cx="290" cy="270" r="18" fill="#111827" />
          {/* Roller body and cab */}
          <rect x="140" y="210" width="160" height="60" rx="10" fill="#fff" strokeWidth={3.5} />
          <path d="M200 130 L280 130 L290 210 L190 210 Z" fill="#fff" strokeWidth={3.5} />
          <rect x="210" y="145" width="60" height="45" rx="4" fill="#fff" strokeWidth={2.5} />
          {/* Steering pivot arm to front drum */}
          <line x1="110" y1="270" x2="160" y2="240" strokeWidth={10} stroke="#111827" />
        </g>
      );

    case "high-tower-crane-lifting-girder-coloring-page":
    case "tall-tower-crane-lifting-steel-beam-coloring-page":
      return (
        <g>
          {/* Vertical trellis mast */}
          <line x1="140" y1="70" x2="140" y2="360" strokeWidth={4} stroke="#111827" />
          <line x1="170" y1="70" x2="170" y2="360" strokeWidth={4} stroke="#111827" />
          {/* Lattice X cross-braces */}
          <line x1="140" y1="120" x2="170" y2="160" strokeWidth={2} />
          <line x1="170" y1="120" x2="140" y2="160" strokeWidth={2} />
          <line x1="140" y1="180" x2="170" y2="220" strokeWidth={2} />
          <line x1="170" y1="180" x2="140" y2="220" strokeWidth={2} />
          <line x1="140" y1="240" x2="170" y2="280" strokeWidth={2} />
          <line x1="170" y1="240" x2="140" y2="280" strokeWidth={2} />
          <line x1="140" y1="300" x2="170" y2="340" strokeWidth={2} />
          <line x1="170" y1="300" x2="140" y2="340" strokeWidth={2} />
          {/* Operator cab */}
          <rect x="125" y="70" width="30" height="35" rx="3" fill="#fff" strokeWidth={2.5} />
          {/* Horizontal jib arm */}
          <line x1="50" y1="70" x2="360" y2="70" strokeWidth={4} stroke="#111827" />
          <line x1="155" y1="30" x2="60" y2="70" strokeWidth={2} />
          <line x1="155" y1="30" x2="280" y2="70" strokeWidth={2} />
          <polygon points="155,30 145,70 165,70" fill="#fff" strokeWidth={2.5} />
          {/* Hoist cable & hook lifting I-beam */}
          <line x1="280" y1="70" x2="280" y2="180" strokeWidth={2} />
          <circle cx="280" cy="185" r="5" fill="#111827" />
          <path d="M280 190 Q285 205 275 205" fill="none" strokeWidth={3} />
          {/* Steel I-beam */}
          <rect x="220" y="210" width="120" height="20" fill="#fff" strokeWidth={3} />
          <line x1="220" y1="216" x2="340" y2="216" strokeWidth={1.5} />
          <line x1="220" y1="224" x2="340" y2="224" strokeWidth={1.5} />
        </g>
      );

    case "warehouse-forklift-stacking-coloring-page":
    case "industrial-forklift-lifting-wooden-pallet-coloring-page":
      return (
        <g>
          {/* Forklift chassis & counterweight */}
          <rect x="150" y="210" width="130" height="70" rx="12" fill="#fff" strokeWidth={4} />
          {/* Overhead protective guard cage */}
          <line x1="180" y1="210" x2="180" y2="120" strokeWidth={4} stroke="#111827" />
          <line x1="240" y1="210" x2="240" y2="120" strokeWidth={4} stroke="#111827" />
          <line x1="170" y1="120" x2="250" y2="120" strokeWidth={5} stroke="#111827" />
          {/* Wheels */}
          <circle cx="170" cy="295" r="25" fill="#fff" strokeWidth={4} />
          <circle cx="170" cy="295" r="10" fill="#111827" />
          <circle cx="255" cy="295" r="22" fill="#fff" strokeWidth={4} />
          <circle cx="255" cy="295" r="9" fill="#111827" />
          {/* Vertical lifting mast */}
          <line x1="120" y1="90" x2="120" y2="310" strokeWidth={6} stroke="#111827" />
          <line x1="130" y1="90" x2="130" y2="310" strokeWidth={4} stroke="#111827" />
          {/* L-shaped steel tines lifting pallet */}
          <path d="M120 180 L80 180 L40 180" strokeWidth={6} stroke="#111827" />
          {/* Wooden pallet with heavy cargo box */}
          <rect x="40" y="170" width="70" height="12" fill="#fff" strokeWidth={2.5} />
          <rect x="45" y="100" width="60" height="70" fill="#fff" strokeWidth={3} />
          <line x1="45" y1="100" x2="105" y2="170" strokeWidth={1.5} />
          <line x1="105" y1="100" x2="45" y2="170" strokeWidth={1.5} />
        </g>
      );

    case "front-end-wheel-loader-coloring-page":
    case "front-end-wheel-loader-carrying-dirt-coloring-page":
      return (
        <g>
          {/* Giant loader tires */}
          <circle cx="140" cy="280" r="45" fill="#fff" strokeWidth={4} />
          <circle cx="140" cy="280" r="20" fill="#111827" />
          <circle cx="280" cy="280" r="45" fill="#fff" strokeWidth={4} />
          <circle cx="280" cy="280" r="20" fill="#111827" />
          {/* Articulated center chassis and cab */}
          <rect x="160" y="210" width="120" height="60" rx="8" fill="#fff" strokeWidth={3.5} />
          <path d="M210 130 L270 130 L280 210 L200 210 Z" fill="#fff" strokeWidth={3.5} />
          <rect x="220" y="145" width="45" height="45" rx="3" fill="#fff" strokeWidth={2} />
          {/* Massive front lift arms */}
          <line x1="180" y1="220" x2="80" y2="180" strokeWidth={12} stroke="#fff" />
          <line x1="180" y1="220" x2="80" y2="180" strokeWidth={3.5} stroke="#111827" />
          {/* Huge front bucket holding dirt */}
          <path d="M80 170 C40 170, 30 220, 50 250 L95 240 L85 180 Z" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="60" cy="180" rx="20" ry="10" fill="#fff" strokeWidth={2} />
        </g>
      );

    case "skid-steer-loader-with-bucket-coloring-page":
    case "skid-steer-compact-bobcat-loader-coloring-page":
      return (
        <g>
          {/* Compact body with roll cage */}
          <rect x="140" y="160" width="130" height="100" rx="15" fill="#fff" strokeWidth={4} />
          {/* Mesh safety window */}
          <rect x="160" y="175" width="60" height="55" rx="5" fill="#fff" strokeWidth={2.5} />
          <line x1="160" y1="195" x2="220" y2="195" strokeWidth={1.5} />
          <line x1="160" y1="215" x2="220" y2="215" strokeWidth={1.5} />
          {/* Four chunky rough-terrain wheels */}
          <circle cx="150" cy="285" r="35" fill="#fff" strokeWidth={4} />
          <circle cx="150" cy="285" r="15" fill="#111827" />
          <circle cx="240" cy="285" r="35" fill="#fff" strokeWidth={4} />
          <circle cx="240" cy="285" r="15" fill="#111827" />
          {/* Compact side lift boom arms */}
          <line x1="250" y1="180" x2="90" y2="230" strokeWidth={8} stroke="#111827" />
          {/* Compact front scoop bucket */}
          <polygon points="90,210 50,225 55,270 100,260" fill="#fff" strokeWidth={3.5} />
        </g>
      );

    case "backhoe-loader-tractor-coloring-page":
    case "motor-grader-leveling-gravel-roadway-coloring-page":
      return (
        <g>
          {/* Tractor center body & high glass cab */}
          <rect x="140" y="190" width="110" height="70" rx="10" fill="#fff" strokeWidth={4} />
          <path d="M160 130 L230 130 L240 190 L150 190 Z" fill="#fff" strokeWidth={3.5} />
          <rect x="165" y="140" width="60" height="42" rx="4" fill="#fff" strokeWidth={2} />
          {/* Large rear tractor tire & smaller front tire */}
          <circle cx="230" cy="280" r="42" fill="#fff" strokeWidth={4} />
          <circle cx="230" cy="280" r="18" fill="#111827" />
          <circle cx="120" cy="290" r="30" fill="#fff" strokeWidth={4} />
          <circle cx="120" cy="290" r="12" fill="#111827" />
          {/* Front loader arms and front bucket */}
          <line x1="140" y1="230" x2="70" y2="250" strokeWidth={8} stroke="#111827" />
          <polygon points="70,220 30,240 35,290 75,280" fill="#fff" strokeWidth={3.5} />
          {/* Rear articulated backhoe boom arm and digging bucket */}
          <line x1="250" y1="240" x2="310" y2="170" strokeWidth={10} stroke="#111827" />
          <line x1="310" y1="170" x2="360" y2="220" strokeWidth={8} stroke="#111827" />
          <path d="M360 220 C375 240, 385 270, 365 275 L350 250 Z" fill="#fff" strokeWidth={3} />
        </g>
      );

    default:
      return null;
  }
}
