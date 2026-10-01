import React from "react";

export function renderLandmarksAndFood(slug: string): React.ReactNode | null {
  switch (slug) {
    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 13: GEOGRAPHY & WORLD LANDMARKS
    // ══════════════════════════════════════════════════════════════════
    case "eiffel-tower-in-paris-coloring-page":
    case "eiffel-tower-paris-france-monument-coloring-page":
      return (
        <g>
          {/* Ground */}
          <line x1="60" y1="350" x2="340" y2="350" strokeWidth={4} stroke="#111827" />
          {/* Base arch of Eiffel Tower */}
          <path d="M120 350 L140 250 Q200 220 260 250 L280 350" fill="none" strokeWidth={4} />
          {/* First platform */}
          <rect x="130" y="240" width="140" height="15" rx="3" fill="#fff" strokeWidth={3.5} />
          {/* Second tier */}
          <polygon points="145,240 165,150 235,150 255,240" fill="#fff" strokeWidth={3.5} />
          {/* Second platform */}
          <rect x="160" y="140" width="80" height="12" rx="2" fill="#fff" strokeWidth={3} />
          {/* Upper spire spire tower */}
          <polygon points="175,140 195,45 205,45 225,140" fill="#fff" strokeWidth={3.5} />
          {/* Spire tip antenna & flag */}
          <line x1="200" y1="45" x2="200" y2="25" strokeWidth={3} />
          <polygon points="200,25 220,32 200,40" fill="#111827" />
          {/* Lattice cross braces */}
          <line x1="175" y1="180" x2="225" y2="210" strokeWidth={2} />
          <line x1="225" y1="180" x2="175" y2="210" strokeWidth={2} />
        </g>
      );

    case "statue-of-liberty-new-york-coloring-page":
    case "statue-of-liberty-new-york-harbor-coloring-page":
      return (
        <g>
          {/* Harbor water ripples and pedestal base */}
          <path d="M40 350 Q200 330 360 350" fill="none" strokeWidth={3} />
          <polygon points="140,350 150,270 250,270 260,350" fill="#fff" strokeWidth={4} />
          <rect x="160" y="250" width="80" height="20" rx="3" fill="#fff" strokeWidth={3} />
          {/* Classical draped stola robes of Lady Liberty */}
          <polygon points="170,160 230,160 240,250 160,250" fill="#fff" strokeWidth={4} />
          <line x1="180" y1="170" x2="175" y2="250" strokeWidth={2.5} />
          <line x1="200" y1="170" x2="195" y2="250" strokeWidth={2.5} />
          <line x1="220" y1="170" x2="225" y2="250" strokeWidth={2.5} />
          {/* Head & Crown with 7 radiant spikes */}
          <circle cx="200" cy="120" r="22" fill="#fff" strokeWidth={3.5} />
          {/* Seven spikes */}
          <polygon points="170,105 150,90 175,100" fill="#111827" />
          <polygon points="178,98 165,78 185,95" fill="#111827" />
          <polygon points="190,95 185,70 198,92" fill="#111827" />
          <polygon points="200,92 200,65 205,92" fill="#111827" />
          <polygon points="207,95 215,70 210,95" fill="#111827" />
          <polygon points="215,98 235,78 222,98" fill="#111827" />
          <polygon points="225,105 250,90 230,105" fill="#111827" />
          {/* Raised right arm holding flaming Torch */}
          <path d="M220 160 L260 70" strokeWidth={14} stroke="#fff" />
          <path d="M220 160 L260 70" strokeWidth={3.5} stroke="#111827" />
          <polygon points="255,70 270,70 275,55 250,55" fill="#fff" strokeWidth={2.5} />
          <path d="M255 55 Q262 25 270 55 Z" fill="#111827" />
          {/* Left arm holding tablet of law */}
          <rect x="150" y="165" width="22" height="35" rx="2" fill="#fff" strokeWidth={2.5} transform="rotate(15 161 182)" />
        </g>
      );

    case "colosseum-of-rome-coloring-page":
    case "colosseum-amphitheatre-rome-italy-coloring-page":
      return (
        <g>
          {/* Elliptical Roman amphitheatre facade */}
          <rect x="50" y="160" width="300" height="150" rx="20" fill="#fff" strokeWidth={4} />
          {/* Multi-story tier archways */}
          <line x1="50" y1="210" x2="350" y2="210" strokeWidth={3} />
          <line x1="50" y1="260" x2="350" y2="260" strokeWidth={3} />
          {/* First tier rounded arches */}
          <path d="M70 260 L70 230 Q85 215 100 230 L100 260 Z" fill="#fff" strokeWidth={2.5} />
          <path d="M120 260 L120 230 Q135 215 150 230 L150 260 Z" fill="#fff" strokeWidth={2.5} />
          <path d="M170 260 L170 230 Q185 215 200 230 L200 260 Z" fill="#fff" strokeWidth={2.5} />
          <path d="M220 260 L220 230 Q235 215 250 230 L250 260 Z" fill="#fff" strokeWidth={2.5} />
          <path d="M270 260 L270 230 Q285 215 300 230 L300 260 Z" fill="#fff" strokeWidth={2.5} />
          {/* Second tier arches */}
          <path d="M70 310 L70 280 Q85 265 100 280 L100 310 Z" fill="#fff" strokeWidth={2.5} />
          <path d="M120 310 L120 280 Q135 265 150 280 L150 310 Z" fill="#fff" strokeWidth={2.5} />
          <path d="M170 310 L170 280 Q185 265 200 280 L200 310 Z" fill="#fff" strokeWidth={2.5} />
          <path d="M220 310 L220 280 Q235 265 250 280 L250 310 Z" fill="#fff" strokeWidth={2.5} />
          <path d="M270 310 L270 280 Q285 265 300 280 L300 310 Z" fill="#fff" strokeWidth={2.5} />
          {/* Characteristic broken outer wall ridge on left */}
          <polygon points="50,160 80,120 180,120 180,160" fill="#fff" strokeWidth={3.5} />
        </g>
      );

    case "taj-mahal-palace-coloring-page":
    case "taj-mahal-marble-mausoleum-agra-india-coloring-page":
      return (
        <g>
          {/* Symmetrical white marble Taj Mahal */}
          {/* Main cubic block */}
          <rect x="130" y="180" width="140" height="110" fill="#fff" strokeWidth={4} />
          {/* Grand central iwan archway */}
          <path d="M170 290 L170 220 Q200 195 230 220 L230 290 Z" fill="#fff" strokeWidth={3.5} />
          {/* Flanking arched portals */}
          <path d="M140 235 L140 205 Q150 195 160 205 L160 235 Z" fill="#fff" strokeWidth={2.5} />
          <path d="M140 280 L140 250 Q150 240 160 250 L160 280 Z" fill="#fff" strokeWidth={2.5} />
          <path d="M240 235 L240 205 Q250 195 260 205 L260 235 Z" fill="#fff" strokeWidth={2.5} />
          <path d="M240 280 L240 250 Q250 240 260 250 L260 280 Z" fill="#fff" strokeWidth={2.5} />
          {/* Central onion dome with finial */}
          <path d="M165 180 C150 110, 250 110, 235 180 Z" fill="#fff" strokeWidth={4} />
          <line x1="200" y1="120" x2="200" y2="85" strokeWidth={3} stroke="#111827" />
          <circle cx="200" cy="80" r="4" fill="#111827" />
          {/* Left minaret tower */}
          <rect x="80" y="130" width="16" height="160" fill="#fff" strokeWidth={3.5} />
          <path d="M80 130 C80 115, 96 115, 96 130 Z" fill="#fff" strokeWidth={2.5} />
          {/* Right minaret tower */}
          <rect x="304" y="130" width="16" height="160" fill="#fff" strokeWidth={3.5} />
          <path d="M304 130 C304 115, 320 115, 320 130 Z" fill="#fff" strokeWidth={2.5} />
          {/* Reflecting pool terrace in foreground */}
          <polygon points="50,340 350,340 310,290 90,290" fill="#fff" strokeWidth={3.5} />
          <line x1="170" y1="290" x2="150" y2="340" strokeWidth={2} />
          <line x1="230" y1="290" x2="250" y2="340" strokeWidth={2} />
        </g>
      );

    case "big-ben-clock-tower-london-coloring-page":
    case "big-ben-elizabeth-tower-london-england-coloring-page":
      return (
        <g>
          {/* Elizabeth Tower body shaft */}
          <rect x="150" y="110" width="100" height="240" fill="#fff" strokeWidth={4} />
          {/* Vertical architectural stone ribs */}
          <line x1="165" y1="110" x2="165" y2="350" strokeWidth={2} />
          <line x1="185" y1="110" x2="185" y2="350" strokeWidth={2} />
          <line x1="215" y1="110" x2="215" y2="350" strokeWidth={2} />
          <line x1="235" y1="110" x2="235" y2="350" strokeWidth={2} />
          {/* Iconic Clock face chamber */}
          <rect x="140" y="110" width="120" height="85" fill="#fff" strokeWidth={4} />
          <circle cx="200" cy="152" r="32" fill="#fff" strokeWidth={3.5} />
          <circle cx="200" cy="152" r="4" fill="#111827" />
          {/* Clock hands pointing to Big Ben time */}
          <line x1="200" y1="152" x2="200" y2="128" strokeWidth={3} stroke="#111827" />
          <line x1="200" y1="152" x2="218" y2="152" strokeWidth={3} stroke="#111827" />
          {/* Victorian Gothic roof belfry & spire */}
          <polygon points="140,110 200,30 260,110" fill="#fff" strokeWidth={4} />
          <line x1="200" y1="30" x2="200" y2="15" strokeWidth={3} />
          <polygon points="175,70 185,55 195,70" fill="#111827" />
          <polygon points="205,70 215,55 225,70" fill="#111827" />
        </g>
      );

    case "mount-fuji-with-cherry-blossoms-coloring-page":
    case "mount-fuji-with-cherry-blossoms-japan-coloring-page":
      return (
        <g>
          {/* Symmetrical volcanic cone of Mount Fuji */}
          <polygon points="30,320 200,100 370,320" fill="#fff" strokeWidth={4} />
          {/* Snow-capped summit glacier boundary */}
          <path d="M150 170 Q170 195 185 170 Q200 205 215 170 Q230 195 250 170" fill="#111827" stroke="#111827" strokeWidth={2} />
          <polygon points="150,170 200,100 250,170" fill="#fff" strokeWidth={3} />
          {/* Lake Kawaguchi reflection in foreground */}
          <path d="M40 340 Q200 325 360 340" fill="none" strokeWidth={2.5} />
          {/* Blooming cherry blossom sakura branch in foreground */}
          <path d="M50 40 Q130 60 180 110" fill="none" strokeWidth={5} stroke="#111827" strokeLinecap="round" />
          {/* 5-petaled Sakura flowers */}
          <circle cx="100" cy="50" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="100" cy="50" r="4" fill="#111827" />
          <circle cx="140" cy="75" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="140" cy="75" r="4" fill="#111827" />
          <circle cx="170" cy="115" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="170" cy="115" r="4" fill="#111827" />
        </g>
      );

    case "great-wall-of-china-coloring-page":
    case "great-wall-of-china-winding-ridge-coloring-page":
      return (
        <g>
          {/* Mountain ridgeline hills */}
          <path d="M30 260 Q100 160 200 240 Q300 140 370 200" fill="none" strokeWidth={3} />
          {/* Winding stone wall rampart traversing ridge */}
          <path d="M40 280 C120 220, 160 280, 240 200 C280 160, 340 180, 360 210 L370 240 C340 210, 270 190, 230 230 C150 310, 110 250, 40 320 Z" fill="#fff" strokeWidth={4} />
          {/* Stone battlements / crenellations along parapet */}
          <line x1="50" y1="285" x2="50" y2="295" strokeWidth={3} />
          <line x1="70" y1="275" x2="70" y2="285" strokeWidth={3} />
          <line x1="90" y1="265" x2="90" y2="275" strokeWidth={3} />
          <line x1="130" y1="250" x2="130" y2="260" strokeWidth={3} />
          <line x1="180" y1="240" x2="180" y2="250" strokeWidth={3} />
          <line x1="280" y1="185" x2="280" y2="195" strokeWidth={3} />
          {/* Fortified two-story watchtower */}
          <rect x="210" y="160" width="50" height="60" rx="4" fill="#fff" strokeWidth={3.5} />
          <rect x="220" y="170" width="12" height="20" rx="6" fill="#111827" />
          <rect x="238" y="170" width="12" height="20" rx="6" fill="#111827" />
          {/* Watchtower hip roof */}
          <polygon points="200,160 235,135 270,160" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "leaning-tower-of-pisa-coloring-page":
    case "leaning-tower-of-pisa-bell-tower-italy-coloring-page":
      return (
        <g>
          {/* Ground */}
          <line x1="60" y1="350" x2="340" y2="350" strokeWidth={4} stroke="#111827" />
          {/* Tilted cylinder tower body leaning ~4 degrees */}
          <polygon points="140,350 180,90 260,90 220,350" fill="#fff" strokeWidth={4} />
          {/* Multi-story arched colonnaded open loggia tiers */}
          <line x1="174" y1="130" x2="254" y2="130" strokeWidth={3} />
          <line x1="168" y1="170" x2="248" y2="170" strokeWidth={3} />
          <line x1="162" y1="210" x2="242" y2="210" strokeWidth={3} />
          <line x1="156" y1="250" x2="236" y2="250" strokeWidth={3} />
          <line x1="150" y1="290" x2="230" y2="290" strokeWidth={3} />
          {/* Arched windows in each gallery tier */}
          <rect x="180" y="100" width="10" height="20" rx="5" fill="#111827" />
          <rect x="200" y="100" width="10" height="20" rx="5" fill="#111827" />
          <rect x="220" y="100" width="10" height="20" rx="5" fill="#111827" />
          <rect x="175" y="140" width="10" height="20" rx="5" fill="#111827" />
          <rect x="195" y="140" width="10" height="20" rx="5" fill="#111827" />
          <rect x="215" y="140" width="10" height="20" rx="5" fill="#111827" />
          {/* Top belfry room */}
          <rect x="185" y="60" width="60" height="30" rx="2" fill="#fff" strokeWidth={3} />
          <circle cx="215" cy="75" r="7" fill="#111827" />
        </g>
      );

    case "sydney-opera-house-coloring-page":
    case "sydney-opera-house-harbor-sails-australia-coloring-page":
      return (
        <g>
          {/* Sydney Harbour blue water waves */}
          <path d="M30 310 Q100 295 200 310 T370 310" fill="none" strokeWidth={3} />
          <path d="M50 340 Q150 325 250 340 T350 340" fill="none" strokeWidth={3} />
          {/* Granite monumental podium base */}
          <polygon points="50,290 350,290 330,320 70,320" fill="#fff" strokeWidth={4} />
          {/* Iconic shell-vault sail roofs (first main hall) */}
          <path d="M80 290 C80 180, 160 110, 190 100 C180 180, 160 260, 140 290 Z" fill="#fff" strokeWidth={4} />
          <path d="M140 290 C140 210, 195 150, 220 140 C210 210, 195 270, 180 290 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M180 290 C180 230, 225 190, 245 185 C240 235, 230 275, 215 290 Z" fill="#fff" strokeWidth={3} />
          {/* Second hall shell roofs */}
          <path d="M220 290 C220 210, 275 160, 295 150 C290 210, 280 270, 265 290 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M265 290 C265 235, 305 195, 320 190 C315 240, 305 275, 295 290 Z" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "golden-gate-bridge-san-francisco-coloring-page":
      return (
        <g>
          {/* San Francisco bay water */}
          <path d="M20 330 Q100 310 200 330 T380 330" fill="none" strokeWidth={3.5} />
          <path d="M40 360 Q140 345 240 360 T380 360" fill="none" strokeWidth={2.5} />
          {/* Marin Headlands hill in background */}
          <path d="M20 260 Q80 210 160 260" fill="none" strokeWidth={2.5} strokeDasharray="6 4" />
          {/* Bridge Roadway Deck */}
          <rect x="20" y="240" width="360" height="15" fill="#fff" strokeWidth={3.5} />
          <line x1="20" y1="245" x2="380" y2="245" strokeWidth={2} />
          {/* South Tower */}
          <rect x="120" y="60" width="24" height="230" fill="#fff" strokeWidth={3.5} />
          {/* North Tower */}
          <rect x="256" y="60" width="24" height="230" fill="#fff" strokeWidth={3.5} />
          {/* Tower Art Deco Cross Struts */}
          <rect x="124" y="90" width="16" height="25" fill="#fff" strokeWidth={2} />
          <rect x="124" y="140" width="16" height="35" fill="#fff" strokeWidth={2} />
          <rect x="124" y="200" width="16" height="35" fill="#fff" strokeWidth={2} />
          <rect x="260" y="90" width="16" height="25" fill="#fff" strokeWidth={2} />
          <rect x="260" y="140" width="16" height="35" fill="#fff" strokeWidth={2} />
          <rect x="260" y="200" width="16" height="35" fill="#fff" strokeWidth={2} />
          {/* Sweeping Main Suspension Cables */}
          <path d="M20 180 Q80 120 132 60 Q200 240 268 60 Q320 120 380 180" fill="none" strokeWidth={4.5} stroke="#111827" />
          {/* Vertical suspender ropes */}
          <line x1="60" y1="150" x2="60" y2="240" strokeWidth={1.5} />
          <line x1="90" y1="110" x2="90" y2="240" strokeWidth={1.5} />
          <line x1="165" y1="140" x2="165" y2="240" strokeWidth={1.5} />
          <line x1="185" y1="200" x2="185" y2="240" strokeWidth={1.5} />
          <line x1="200" y1="225" x2="200" y2="240" strokeWidth={1.5} />
          <line x1="215" y1="200" x2="215" y2="240" strokeWidth={1.5} />
          <line x1="235" y1="140" x2="235" y2="240" strokeWidth={1.5} />
          <line x1="310" y1="110" x2="310" y2="240" strokeWidth={1.5} />
          <line x1="340" y1="150" x2="340" y2="240" strokeWidth={1.5} />
        </g>
      );

    case "great-pyramid-of-giza-and-sphinx-egypt-coloring-page":
      return (
        <g>
          {/* Desert dune sands */}
          <path d="M30 350 Q160 310 370 340" fill="none" strokeWidth={3.5} />
          {/* Great Pyramid stepped triangular mass */}
          <polygon points="180,70 60,280 300,280" fill="#fff" strokeWidth={4} />
          {/* Pyramid face facet shadow divide */}
          <line x1="180" y1="70" x2="200" y2="280" strokeWidth={3} />
          {/* Stepped horizontal limestone courses */}
          <line x1="150" y1="120" x2="230" y2="120" strokeWidth={2} />
          <line x1="125" y1="170" x2="255" y2="170" strokeWidth={2} />
          <line x1="95" y1="225" x2="280" y2="225" strokeWidth={2} />
          {/* Distant second pyramid */}
          <polygon points="310,130 250,250 370,250" fill="#fff" strokeWidth={3} />
          {/* Great Sphinx statue in foreground */}
          <rect x="230" y="270" width="100" height="50" rx="15" fill="#fff" strokeWidth={3.5} />
          <circle cx="250" cy="245" r="22" fill="#fff" strokeWidth={3.5} />
          {/* Nemes pharaoh headdress */}
          <polygon points="230,230 270,230 280,265 220,265" fill="#fff" strokeWidth={2.5} />
          <ellipse cx="250" cy="245" rx="5" ry="4" fill="#111827" />
          {/* Forepaws */}
          <rect x="200" y="300" width="45" height="15" rx="5" fill="#fff" strokeWidth={3} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 14: HEALTHY FRUITS & FRESH VEGETABLES
    // ══════════════════════════════════════════════════════════════════
    case "crispy-red-apple-with-stem-coloring-page":
      return (
        <g>
          {/* Plump crisp apple body */}
          <path d="M200 135 C150 90 90 120 90 200 C90 280 140 330 200 325 C260 330 310 280 310 200 C310 120 250 90 200 135 Z" fill="#fff" strokeWidth={4} />
          {/* Top dimple notch */}
          <path d="M185 130 Q200 145 215 130" fill="none" strokeWidth={3} />
          {/* Sturdy woody stem */}
          <path d="M200 135 C205 90 220 60 235 45" fill="none" strokeWidth={6} stroke="#111827" strokeLinecap="round" />
          {/* Leaf attached to stem */}
          <path d="M210 100 C240 70 280 80 290 110 C260 125 220 120 210 100 Z" fill="#fff" strokeWidth={3} />
          <path d="M210 100 Q250 105 290 110" fill="none" strokeWidth={2} />
          {/* Shiny apple skin highlight curve */}
          <path d="M125 170 Q115 220 130 255" fill="none" strokeWidth={3.5} strokeLinecap="round" strokeDasharray="20 10" />
        </g>
      );

    case "sweet-banana-bunch-coloring-page":
    case "sunny-yellow-banana-bunch-coloring-page":
      return (
        <g>
          {/* Banana crown stem uniting cluster */}
          <rect x="70" y="110" width="35" height="30" rx="6" fill="#111827" />
          {/* First curved banana */}
          <path d="M90 120 C140 110, 260 140, 310 240 C260 220, 150 200, 90 120 Z" fill="#fff" strokeWidth={4} />
          <path d="M95 125 C145 118, 260 148, 305 240" fill="none" strokeWidth={2.5} />
          {/* Second banana below */}
          <path d="M85 135 C130 145, 230 180, 275 280 C230 250, 135 210, 85 135 Z" fill="#fff" strokeWidth={4} />
          {/* Third banana behind */}
          <path d="M100 110 C160 90, 280 120, 340 210 C290 180, 180 160, 100 110 Z" fill="#fff" strokeWidth={4} />
        </g>
      );

    case "juicy-watermelon-wedge-coloring-page":
    case "sliced-ripe-watermelon-wedge-with-seeds-coloring-page":
      return (
        <g>
          {/* Thick curved green rind */}
          <path d="M50 240 C100 350, 300 350, 350 240 Z" fill="#fff" strokeWidth={4.5} />
          {/* White inner rind boundary */}
          <path d="M65 240 C110 330, 290 330, 335 240 Z" fill="#fff" strokeWidth={2.5} />
          {/* Juicy watermelon seeds */}
          <polygon points="120,250 115,262 125,262" fill="#111827" />
          <polygon points="160,270 155,282 165,282" fill="#111827" />
          <polygon points="200,285 195,297 205,297" fill="#111827" />
          <polygon points="240,270 235,282 245,282" fill="#111827" />
          <polygon points="280,250 275,262 285,262" fill="#111827" />
          <polygon points="175,245 170,257 180,257" fill="#111827" />
          <polygon points="225,245 220,257 230,257" fill="#111827" />
        </g>
      );

    case "crunchy-garden-carrots-coloring-page":
    case "crunchy-orange-carrots-with-leafy-green-tops-coloring-page":
      return (
        <g>
          {/* Main long tapered carrot */}
          <polygon points="180,130 220,130 200,340" fill="#fff" strokeWidth={4} />
          {/* Horizontal root texture lines */}
          <line x1="187" y1="180" x2="205" y2="180" strokeWidth={2.5} />
          <line x1="195" y1="225" x2="212" y2="225" strokeWidth={2.5} />
          <line x1="192" y1="270" x2="207" y2="270" strokeWidth={2.5} />
          {/* Second angled carrot */}
          <polygon points="130,150 160,170 100,320" fill="#fff" strokeWidth={3.5} />
          {/* Feathery carrot foliage tops */}
          <path d="M200 130 Q170 60 130 40 M200 130 Q200 50 200 30 M200 130 Q230 60 270 40" fill="none" strokeWidth={3.5} strokeLinecap="round" />
          <path d="M165 80 L145 75 M175 60 L155 55 M190 70 L210 65 M235 80 L255 75" strokeWidth={2.5} />
        </g>
      );

    case "healthy-broccoli-florets-coloring-page":
    case "mini-broccoli-tree-florets-coloring-page":
      return (
        <g>
          {/* Sturdy thick stalk */}
          <rect x="175" y="240" width="50" height="90" rx="10" fill="#fff" strokeWidth={4} />
          <line x1="185" y1="260" x2="185" y2="310" strokeWidth={2} />
          <line x1="215" y1="260" x2="215" y2="310" strokeWidth={2} />
          {/* Puffy cloud-tree broccoli canopy */}
          <circle cx="200" cy="140" r="55" fill="#fff" strokeWidth={4} />
          <circle cx="140" cy="180" r="45" fill="#fff" strokeWidth={3.5} />
          <circle cx="260" cy="180" r="45" fill="#fff" strokeWidth={3.5} />
          <circle cx="160" cy="120" r="40" fill="#fff" strokeWidth={3.5} />
          <circle cx="240" cy="120" r="40" fill="#fff" strokeWidth={3.5} />
          {/* Tiny floret texture curls */}
          <circle cx="160" cy="140" r="8" fill="none" strokeWidth={2} />
          <circle cx="200" cy="120" r="8" fill="none" strokeWidth={2} />
          <circle cx="240" cy="140" r="8" fill="none" strokeWidth={2} />
          <circle cx="170" cy="190" r="8" fill="none" strokeWidth={2} />
          <circle cx="230" cy="190" r="8" fill="none" strokeWidth={2} />
        </g>
      );

    case "tropical-sweet-pineapple-coloring-page":
      return (
        <g>
          {/* Spiky pineapple leafy crown at top */}
          <polygon points="200,140 180,60 195,130" fill="#fff" strokeWidth={3} />
          <polygon points="200,140 200,40 205,130" fill="#fff" strokeWidth={3} />
          <polygon points="200,140 220,60 210,130" fill="#fff" strokeWidth={3} />
          <polygon points="190,140 160,80 180,135" fill="#fff" strokeWidth={3} />
          <polygon points="210,140 240,80 220,135" fill="#fff" strokeWidth={3} />
          <polygon points="180,140 145,105 170,140" fill="#fff" strokeWidth={3} />
          <polygon points="220,140 255,105 230,140" fill="#fff" strokeWidth={3} />
          {/* Big oval pineapple fruit body */}
          <ellipse cx="200" cy="245" rx="80" ry="100" fill="#fff" strokeWidth={4} />
          {/* Diagonal lattice crisscross grid lines */}
          <line x1="135" y1="190" x2="245" y2="300" strokeWidth={2.5} />
          <line x1="125" y1="230" x2="225" y2="330" strokeWidth={2.5} />
          <line x1="140" y1="160" x2="265" y2="285" strokeWidth={2.5} />
          <line x1="175" y1="150" x2="275" y2="250" strokeWidth={2.5} />
          <line x1="265" y1="190" x2="155" y2="300" strokeWidth={2.5} />
          <line x1="275" y1="230" x2="175" y2="330" strokeWidth={2.5} />
          <line x1="260" y1="160" x2="135" y2="285" strokeWidth={2.5} />
          <line x1="225" y1="150" x2="125" y2="250" strokeWidth={2.5} />
          {/* Pineapple eye scales small dots */}
          <circle cx="200" cy="200" r="3.5" fill="#111827" />
          <circle cx="200" cy="245" r="3.5" fill="#111827" />
          <circle cx="200" cy="290" r="3.5" fill="#111827" />
          <circle cx="165" cy="225" r="3.5" fill="#111827" />
          <circle cx="235" cy="225" r="3.5" fill="#111827" />
          <circle cx="165" cy="270" r="3.5" fill="#111827" />
          <circle cx="235" cy="270" r="3.5" fill="#111827" />
        </g>
      );

    case "creamy-avocado-halves-coloring-page":
      return (
        <g>
          {/* Whole avocado half standing behind */}
          <path d="M120 180 C120 110 160 80 180 80 C200 80 230 110 220 170 C240 230 220 300 170 310 C120 310 100 250 120 180 Z" fill="#fff" strokeWidth={3.5} strokeDasharray="5 3" />
          {/* Cut avocado half in front */}
          <path d="M220 140 C220 90 250 70 270 70 C290 70 320 90 320 140 C350 200 350 280 300 320 C250 340 210 280 210 220 C210 180 220 150 220 140 Z" fill="#fff" strokeWidth={4} />
          {/* Inner rind contour */}
          <path d="M230 145 C230 105 255 85 270 85 C285 85 305 105 305 145 C330 200 330 265 295 305 C260 320 225 270 225 220 C225 180 230 155 230 145 Z" fill="#fff" strokeWidth={2.5} />
          {/* Large round smooth avocado seed / pit */}
          <circle cx="275" cy="245" r="38" fill="#fff" strokeWidth={3.5} />
          {/* Crescent highlight on pit */}
          <path d="M260 225 Q285 220 295 240" fill="none" strokeWidth={3} strokeLinecap="round" />
        </g>
      );

    case "fresh-citrus-lemon-and-lime-coloring-page":
    case "citrus-orange-and-lemon-sliced-halves-coloring-page":
      return (
        <g>
          {/* Whole orange */}
          <circle cx="140" cy="180" r="70" fill="#fff" strokeWidth={4} />
          <ellipse cx="140" cy="115" rx="16" ry="8" fill="#fff" strokeWidth={2.5} />
          <circle cx="140" cy="115" r="4" fill="#111827" />
          {/* Sliced citrus wheel half in foreground */}
          <circle cx="260" cy="240" r="75" fill="#fff" strokeWidth={4} />
          <circle cx="260" cy="240" r="62" fill="#fff" strokeWidth={2.5} />
          <circle cx="260" cy="240" r="10" fill="#111827" />
          {/* 8 juicy triangular citrus segments */}
          <line x1="260" y1="180" x2="260" y2="300" strokeWidth={2.5} />
          <line x1="200" y1="240" x2="320" y2="240" strokeWidth={2.5} />
          <line x1="218" y1="198" x2="302" y2="282" strokeWidth={2.5} />
          <line x1="218" y1="282" x2="302" y2="198" strokeWidth={2.5} />
        </g>
      );

    case "sweet-corn-on-the-cob-coloring-page":
    case "sweet-corn-cob-with-silky-husk-coloring-page":
      return (
        <g>
          {/* Ear of corn cob */}
          <rect x="160" y="80" width="80" height="210" rx="40" fill="#fff" strokeWidth={4} />
          {/* Neat rows of corn kernels */}
          <line x1="180" y1="90" x2="180" y2="280" strokeWidth={2} />
          <line x1="200" y1="90" x2="200" y2="280" strokeWidth={2} />
          <line x1="220" y1="90" x2="220" y2="280" strokeWidth={2} />
          <line x1="165" y1="120" x2="235" y2="120" strokeWidth={2} />
          <line x1="160" y1="150" x2="240" y2="150" strokeWidth={2} />
          <line x1="160" y1="180" x2="240" y2="180" strokeWidth={2} />
          <line x1="160" y1="210" x2="240" y2="210" strokeWidth={2} />
          <line x1="165" y1="240" x2="235" y2="240" strokeWidth={2} />
          {/* Peeling green husks pulled back at base */}
          <path d="M160 250 C110 230, 90 290, 80 340 C120 340, 160 310, 180 280" fill="#fff" strokeWidth={3.5} />
          <path d="M240 250 C290 230, 310 290, 320 340 C280 340, 240 310, 220 280" fill="#fff" strokeWidth={3.5} />
          {/* Silky corn strands on top */}
          <path d="M190 80 Q170 40 150 30 M200 80 Q200 40 195 25 M210 80 Q230 40 245 30" strokeWidth={2.5} strokeLinecap="round" />
        </g>
      );

    case "plump-purple-grape-cluster-coloring-page":
    case "cluster-of-juicy-purple-grapes-on-vine-coloring-page":
      return (
        <g>
          {/* Woody vine branch on top */}
          <path d="M70 70 Q200 90 330 60" fill="none" strokeWidth={6} stroke="#111827" />
          {/* Curled spiral tendril */}
          <path d="M280 65 Q310 40 330 60 Q340 80 320 85" fill="none" strokeWidth={2.5} />
          {/* Grape leaf with serrated lobes */}
          <polygon points="120,80 80,110 100,140 130,130 150,150 150,110" fill="#fff" strokeWidth={3} />
          {/* Triangular pyramid cluster of round grapes */}
          {/* Top row */}
          <circle cx="160" cy="130" r="22" fill="#fff" strokeWidth={3} />
          <circle cx="200" cy="130" r="22" fill="#fff" strokeWidth={3} />
          <circle cx="240" cy="130" r="22" fill="#fff" strokeWidth={3} />
          {/* Second row */}
          <circle cx="140" cy="170" r="22" fill="#fff" strokeWidth={3} />
          <circle cx="180" cy="170" r="22" fill="#fff" strokeWidth={3} />
          <circle cx="220" cy="170" r="22" fill="#fff" strokeWidth={3} />
          <circle cx="260" cy="170" r="22" fill="#fff" strokeWidth={3} />
          {/* Third row */}
          <circle cx="160" cy="210" r="22" fill="#fff" strokeWidth={3} />
          <circle cx="200" cy="210" r="22" fill="#fff" strokeWidth={3} />
          <circle cx="240" cy="210" r="22" fill="#fff" strokeWidth={3} />
          {/* Fourth row */}
          <circle cx="180" cy="250" r="22" fill="#fff" strokeWidth={3} />
          <circle cx="220" cy="250" r="22" fill="#fff" strokeWidth={3} />
          {/* Bottom grape */}
          <circle cx="200" cy="290" r="22" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "overflowing-fruit-bowl-with-bananas-and-apples-coloring-page":
      return (
        <g>
          {/* Woven fruit bowl */}
          <path d="M80 220 Q200 220 320 220 C300 330, 100 330, 80 220 Z" fill="#fff" strokeWidth={4} />
          <ellipse cx="200" cy="330" rx="55" ry="12" fill="#fff" strokeWidth={3} />
          {/* Apples in bowl */}
          <circle cx="150" cy="180" r="35" fill="#fff" strokeWidth={3.5} />
          <path d="M150 145 Q155 130 165 125" fill="none" strokeWidth={3} />
          <circle cx="250" cy="180" r="35" fill="#fff" strokeWidth={3.5} />
          {/* Cluster of bananas curving above */}
          <path d="M130 110 C180 100, 240 120, 280 170 C240 140, 180 130, 130 110 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M135 120 C185 110, 245 130, 285 180" fill="none" strokeWidth={2.5} />
          {/* Grapes bunch cascading */}
          <circle cx="200" cy="190" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="180" cy="215" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="210" cy="215" r="14" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "sweet-plump-strawberries-in-woven-basket-coloring-page":
      return (
        <g>
          {/* Punnet berry basket */}
          <polygon points="90,210 310,210 290,340 110,340" fill="#fff" strokeWidth={4} />
          <line x1="140" y1="210" x2="150" y2="340" strokeWidth={2.5} />
          <line x1="200" y1="210" x2="200" y2="340" strokeWidth={2.5} />
          <line x1="260" y1="210" x2="250" y2="340" strokeWidth={2.5} />
          <line x1="95" y1="275" x2="305" y2="275" strokeWidth={2.5} />
          {/* Big plump strawberry in center */}
          <path d="M200 120 C150 120, 140 190, 200 240 C260 190, 250 120, 200 120 Z" fill="#fff" strokeWidth={4} />
          {/* Calyx leaves */}
          <polygon points="200,120 180,95 190,120 200,90 210,120 220,95 200,120" fill="#111827" />
          {/* Strawberry seeds */}
          <circle cx="175" cy="150" r="3" fill="#111827" />
          <circle cx="200" cy="155" r="3" fill="#111827" />
          <circle cx="225" cy="150" r="3" fill="#111827" />
          <circle cx="185" cy="180" r="3" fill="#111827" />
          <circle cx="215" cy="180" r="3" fill="#111827" />
          <circle cx="200" cy="205" r="3" fill="#111827" />
        </g>
      );

    case "ripe-red-tomatoes-on-the-vine-coloring-page":
      return (
        <g>
          {/* Green vine branch */}
          <path d="M70 120 Q180 140 330 110" fill="none" strokeWidth={6} stroke="#111827" />
          {/* Main plump round tomato */}
          <circle cx="170" cy="230" r="65" fill="#fff" strokeWidth={4} />
          {/* Star-shaped leafy calyx on top */}
          <polygon points="170,165 160,145 175,155 190,140 185,160 200,165 185,172 188,190 175,178 160,185 168,172" fill="#111827" />
          {/* Second tomato hanging beside */}
          <circle cx="270" cy="220" r="55" fill="#fff" strokeWidth={4} />
          <polygon points="270,165 260,150 275,158 290,145 285,162 298,168 285,174 288,188 275,178 260,184 268,172" fill="#111827" />
        </g>
      );

    default:
      return null;
  }
}
