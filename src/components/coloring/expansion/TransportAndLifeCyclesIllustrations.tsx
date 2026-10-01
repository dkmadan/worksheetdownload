import React from "react";

export function renderTransportAndLifeCycles(slug: string): React.ReactNode | null {
  switch (slug) {
    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 17: SPECIALIZED WORKING TRANSPORT
    // ══════════════════════════════════════════════════════════════════
    case "deep-sea-yellow-submarine-coloring-page":
      return (
        <g>
          {/* Deep sea water bubbles and waves */}
          <circle cx="90" cy="110" r="10" fill="#fff" strokeWidth={2.5} />
          <circle cx="110" cy="85" r="6" fill="#fff" strokeWidth={2} />
          <circle cx="340" cy="130" r="12" fill="#fff" strokeWidth={2.5} />
          <path d="M30 360 Q110 340 200 360 T370 360" fill="none" strokeWidth={3} />
          {/* Sea floor coral and plants */}
          <path d="M50 370 Q60 310 80 320 T65 370" fill="#fff" strokeWidth={3} />
          <path d="M330 370 Q345 300 360 325 T340 370" fill="#fff" strokeWidth={3} />
          {/* Main Submarine Hull */}
          <ellipse cx="200" cy="220" rx="130" ry="70" fill="#fff" strokeWidth={4} />
          {/* Conning Tower (Sail) */}
          <rect x="170" y="120" width="60" height="40" rx="8" fill="#fff" strokeWidth={3.5} />
          {/* Periscope with optic lens */}
          <path d="M195 120 L195 70 L225 70 L225 85" fill="none" strokeWidth={5} stroke="#111827" strokeLinecap="round" />
          <circle cx="230" cy="78" r="8" fill="#fff" strokeWidth={3} />
          {/* Three large circular porthole windows with rivet rims */}
          <circle cx="130" cy="220" r="22" fill="#fff" strokeWidth={3.5} />
          <circle cx="130" cy="220" r="15" fill="#fff" strokeWidth={2} />
          <circle cx="195" cy="220" r="22" fill="#fff" strokeWidth={3.5} />
          <circle cx="195" cy="220" r="15" fill="#fff" strokeWidth={2} />
          <circle cx="260" cy="220" r="22" fill="#fff" strokeWidth={3.5} />
          <circle cx="260" cy="220" r="15" fill="#fff" strokeWidth={2} />
          {/* Tail fins and propulsion propeller */}
          <polygon points="70,210 35,170 50,215" fill="#fff" strokeWidth={3.5} />
          <polygon points="70,230 35,270 50,225" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="30" cy="220" rx="6" ry="24" fill="#fff" strokeWidth={3} />
          <circle cx="35" cy="220" r="6" fill="#111827" />
          {/* Front bow searchlight beam */}
          <path d="M320 205 L380 180 L380 260 L320 235 Z" fill="none" strokeWidth={2.5} strokeDasharray="6 4" />
        </g>
      );

    case "harbor-tugboat-towing-coloring-page":
    case "harbor-tugboat-pushing-cargo-barge-coloring-page":
      return (
        <g>
          {/* Ocean harbor waves */}
          <path d="M20 320 Q90 295 180 320 T360 320" fill="none" strokeWidth={3.5} />
          <path d="M40 350 Q130 330 220 350 T380 350" fill="none" strokeWidth={3} />
          {/* Sturdy tugboat hull */}
          <path d="M60 250 C90 320, 240 320, 260 250 L60 250 Z" fill="#fff" strokeWidth={4} />
          {/* Heavy rubber tire bow fender bumper */}
          <ellipse cx="60" cy="260" rx="14" ry="24" fill="#111827" />
          {/* Wheelhouse and bridge */}
          <rect x="120" y="160" width="85" height="90" rx="8" fill="#fff" strokeWidth={3.5} />
          <rect x="135" y="175" width="22" height="25" rx="3" fill="#fff" strokeWidth={2} />
          <rect x="170" y="175" width="22" height="25" rx="3" fill="#fff" strokeWidth={2} />
          {/* Smokestack / funnel puffing exhaust */}
          <rect x="185" y="115" width="20" height="45" rx="3" fill="#111827" />
          <circle cx="195" cy="95" r="10" fill="#fff" strokeWidth={2} />
          <circle cx="205" cy="75" r="14" fill="#fff" strokeWidth={2} />
          {/* High mast and radar dome */}
          <line x1="150" y1="160" x2="150" y2="100" strokeWidth={3} stroke="#111827" />
          <ellipse cx="150" cy="95" rx="14" ry="6" fill="#fff" strokeWidth={2} />
          {/* Strong towing hawser cable running off the stern */}
          <path d="M250 260 Q300 240 370 270" fill="none" strokeWidth={5} stroke="#111827" />
          <rect x="340" y="260" width="40" height="45" rx="4" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "alpine-aerial-cable-car-gondola-coloring-page":
    case "emergency-medical-rescue-helicopter-coloring-page":
    case "airport-cargo-jet-loading-freight-coloring-page":
      return (
        <g>
          {/* Alpine mountain peaks in background */}
          <polygon points="20,380 90,260 160,380" fill="#fff" strokeWidth={3.5} />
          <polygon points="90,260 70,300 110,300" fill="#111827" />
          <polygon points="220,380 300,230 380,380" fill="#fff" strokeWidth={3.5} />
          <polygon points="300,230 280,270 320,270" fill="#111827" />
          {/* Pine trees on hills */}
          <polygon points="175,380 185,340 195,380" fill="#fff" strokeWidth={2.5} />
          {/* Heavy steel suspension cable spanning diagonally */}
          <line x1="20" y1="90" x2="380" y2="150" strokeWidth={5} stroke="#111827" />
          {/* Overhead cable pulley grip & suspension hanger arm */}
          <circle cx="200" cy="120" r="10" fill="#fff" strokeWidth={3.5} />
          <circle cx="200" cy="120" r="4" fill="#111827" />
          <path d="M200 130 L185 180 L200 200" fill="none" strokeWidth={5} stroke="#111827" />
          {/* Modern aerodynamic gondola cabin */}
          <rect x="135" y="195" width="130" height="110" rx="20" fill="#fff" strokeWidth={4} />
          {/* Panoramic tinted glass windows */}
          <rect x="145" y="210" width="50" height="45" rx="8" fill="#fff" strokeWidth={2.5} />
          <rect x="205" y="210" width="50" height="45" rx="8" fill="#fff" strokeWidth={2.5} />
          {/* Gondola center sliding door divide */}
          <line x1="200" y1="200" x2="200" y2="300" strokeWidth={2.5} />
          {/* Exterior safety bumper stripe */}
          <line x1="140" y1="275" x2="260" y2="275" strokeWidth={4} stroke="#111827" />
        </g>
      );

    case "hot-air-balloon-over-valley-coloring-page":
      return (
        <g>
          {/* Rolling landscape hills below */}
          <path d="M20 360 Q120 300 240 340 Q310 310 380 360" fill="none" strokeWidth={3.5} />
          {/* Teardrop hot air balloon envelope */}
          <path d="M120 180 C100 80, 300 80, 280 180 C270 230, 230 250, 220 270 L180 270 C170 250, 130 230, 120 180 Z" fill="#fff" strokeWidth={4} />
          {/* Vertical geometric gore stripes */}
          <path d="M160 90 Q150 180 190 270" fill="none" strokeWidth={3} />
          <path d="M240 90 Q250 180 210 270" fill="none" strokeWidth={3} />
          <line x1="200" y1="85" x2="200" y2="270" strokeWidth={3} />
          {/* Burner & suspension rigging ropes */}
          <line x1="185" y1="270" x2="185" y2="300" strokeWidth={2.5} stroke="#111827" />
          <line x1="215" y1="270" x2="215" y2="300" strokeWidth={2.5} stroke="#111827" />
          {/* Wicker passenger basket */}
          <rect x="175" y="300" width="50" height="40" rx="5" fill="#fff" strokeWidth={3.5} />
          <line x1="175" y1="320" x2="225" y2="320" strokeWidth={2} />
        </g>
      );

    case "elevated-monorail-transit-coloring-page":
      return (
        <g>
          {/* Elevated concrete beam track */}
          <rect x="30" y="270" width="340" height="25" fill="#fff" strokeWidth={4} />
          {/* Heavy support pillar column */}
          <rect x="180" y="295" width="40" height="80" fill="#111827" />
          {/* Streamlined futuristic monorail train cars */}
          <rect x="50" y="200" width="140" height="70" rx="15" fill="#fff" strokeWidth={4} />
          {/* Bullet aerodynamic front nose */}
          <path d="M190 200 C270 200, 310 230, 320 270 L190 270 Z" fill="#fff" strokeWidth={4} />
          {/* Large panoramic passenger windows */}
          <rect x="70" y="215" width="35" height="30" rx="4" fill="#fff" strokeWidth={2.5} />
          <rect x="120" y="215" width="35" height="30" rx="4" fill="#fff" strokeWidth={2.5} />
          <rect x="170" y="215" width="35" height="30" rx="4" fill="#fff" strokeWidth={2.5} />
          <polygon points="220,215 260,215 280,245 220,245" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "automated-recycling-truck-coloring-page":
      return (
        <g>
          {/* Truck cab */}
          <path d="M40 210 L100 210 L110 280 L40 280 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M60 160 L100 160 L100 210 L50 210 Z" fill="#fff" strokeWidth={3.5} />
          <rect x="65" y="170" width="30" height="30" rx="3" fill="#fff" strokeWidth={2} />
          {/* Large recycling compactor box body */}
          <rect x="110" y="140" width="200" height="140" rx="10" fill="#fff" strokeWidth={4} />
          {/* Universal chasing arrows recycling symbol on side */}
          <polygon points="190,180 220,180 205,210" fill="#fff" strokeWidth={2.5} />
          <circle cx="205" cy="195" r="18" fill="none" strokeWidth={3} strokeDasharray="12 8" />
          {/* Wheels */}
          <circle cx="80" cy="295" r="28" fill="#fff" strokeWidth={4} />
          <circle cx="80" cy="295" r="10" fill="#111827" />
          <circle cx="230" cy="295" r="28" fill="#fff" strokeWidth={4} />
          <circle cx="230" cy="295" r="10" fill="#111827" />
          <circle cx="280" cy="295" r="28" fill="#fff" strokeWidth={4} />
          <circle cx="280" cy="295" r="10" fill="#111827" />
          {/* Automated mechanical side arm lifting curbside blue bin */}
          <line x1="310" y1="240" x2="350" y2="200" strokeWidth={5} stroke="#111827" />
          <rect x="335" y="190" width="35" height="50" rx="4" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "winter-mountain-snowmobile-coloring-page":
      return (
        <g>
          {/* Snow powder trail */}
          <path d="M30 350 Q180 320 370 350" fill="none" strokeWidth={3.5} />
          {/* Snowmobile chassis & seat */}
          <polygon points="120,230 200,190 280,210 320,280 120,280" fill="#fff" strokeWidth={4} />
          {/* Windshield & cowl hood */}
          <path d="M80 250 C90 200, 140 180, 170 190 L170 250 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M130 180 C140 130, 180 130, 185 180" fill="#fff" strokeWidth={2.5} />
          {/* Handlebars */}
          <line x1="175" y1="180" x2="165" y2="150" strokeWidth={4} stroke="#111827" />
          <line x1="150" y1="150" x2="180" y2="150" strokeWidth={5} stroke="#111827" strokeLinecap="round" />
          {/* Front steering skis */}
          <path d="M60 300 L140 300 Q155 300 160 285" fill="none" strokeWidth={5} stroke="#111827" strokeLinecap="round" />
          <line x1="110" y1="260" x2="110" y2="300" strokeWidth={5} stroke="#111827" />
          {/* Rear continuous rubber snow tread track */}
          <rect x="180" y="280" width="130" height="30" rx="15" fill="#111827" />
          <circle cx="200" cy="295" r="10" fill="#fff" />
          <circle cx="280" cy="295" r="10" fill="#fff" />
        </g>
      );

    case "island-passenger-ferryboat-coloring-page":
      return (
        <g>
          {/* Blue ocean waves */}
          <path d="M30 310 Q110 290 200 310 T370 310" fill="none" strokeWidth={3.5} />
          <path d="M40 340 Q130 325 220 340 T380 340" fill="none" strokeWidth={3} />
          {/* Multi-deck passenger ferry hull */}
          <polygon points="60,250 330,250 310,310 90,310" fill="#fff" strokeWidth={4} />
          {/* Lower passenger cabin deck with windows */}
          <rect x="90" y="200" width="210" height="50" rx="5" fill="#fff" strokeWidth={3.5} />
          <circle cx="120" cy="225" r="10" fill="#fff" strokeWidth={2.5} />
          <circle cx="160" cy="225" r="10" fill="#fff" strokeWidth={2.5} />
          <circle cx="200" cy="225" r="10" fill="#fff" strokeWidth={2.5} />
          <circle cx="240" cy="225" r="10" fill="#fff" strokeWidth={2.5} />
          <circle cx="280" cy="225" r="10" fill="#fff" strokeWidth={2.5} />
          {/* Upper observation bridge deck */}
          <rect x="130" y="150" width="130" height="50" rx="5" fill="#fff" strokeWidth={3.5} />
          <rect x="145" y="165" width="25" height="20" rx="3" fill="#111827" />
          <rect x="180" y="165" width="25" height="20" rx="3" fill="#111827" />
          {/* Funnel smokestack */}
          <rect x="220" y="110" width="22" height="40" fill="#111827" />
          {/* Life preserver ring on side of ship */}
          <circle cx="80" cy="275" r="14" fill="#fff" strokeWidth={3} />
          <circle cx="80" cy="275" r="6" fill="#fff" strokeWidth={2} />
        </g>
      );

    case "seaplane-touching-down-coloring-page":
      return (
        <g>
          {/* Water surface spray */}
          <path d="M40 330 Q120 310 200 330 T360 330" fill="none" strokeWidth={3} />
          {/* Water spray rooster tail plumes */}
          <path d="M80 320 Q60 280 40 290 Q70 300 80 325" fill="#fff" strokeWidth={2.5} />
          {/* Twin pontoon floats */}
          <rect x="80" y="310" width="180" height="20" rx="10" fill="#fff" strokeWidth={4} />
          {/* Pontoon struts to fuselage */}
          <line x1="120" y1="310" x2="150" y2="240" strokeWidth={4} stroke="#111827" />
          <line x1="220" y1="310" x2="220" y2="240" strokeWidth={4} stroke="#111827" />
          {/* Airplane fuselage */}
          <polygon points="60,210 280,210 330,170 330,190 280,240 60,240" fill="#fff" strokeWidth={4} />
          {/* High wings on top */}
          <polygon points="120,180 240,180 230,150 130,150" fill="#fff" strokeWidth={3.5} />
          {/* Nose spinning propeller */}
          <ellipse cx="60" cy="225" rx="6" ry="35" fill="#fff" strokeWidth={3} />
          <circle cx="60" cy="225" r="7" fill="#111827" />
        </g>
      );

    case "high-speed-bullet-train-coloring-page":
      return (
        <g>
          {/* Ballast railroad tracks */}
          <line x1="30" y1="330" x2="370" y2="330" strokeWidth={4} stroke="#111827" />
          <line x1="30" y1="350" x2="370" y2="350" strokeWidth={4} stroke="#111827" />
          <line x1="70" y1="330" x2="60" y2="350" strokeWidth={2.5} />
          <line x1="140" y1="330" x2="130" y2="350" strokeWidth={2.5} />
          <line x1="210" y1="330" x2="200" y2="350" strokeWidth={2.5} />
          <line x1="280" y1="330" x2="270" y2="350" strokeWidth={2.5} />
          {/* Bullet train aerodynamic needle nose */}
          <path d="M50 250 C120 180, 240 180, 350 250 L350 310 L50 310 Z" fill="#fff" strokeWidth={4} />
          {/* Needle nose tip */}
          <path d="M350 250 C380 270, 380 300, 350 310 Z" fill="#fff" strokeWidth={3.5} />
          {/* Driver cockpit curved windshield */}
          <path d="M260 215 C300 215, 330 240, 340 260 L260 260 Z" fill="#111827" />
          {/* Sleek horizontal aerodynamic speed stripe */}
          <line x1="50" y1="280" x2="365" y2="280" strokeWidth={5} stroke="#111827" />
          {/* Passenger tinted windows */}
          <rect x="80" y="230" width="40" height="25" rx="4" fill="#111827" />
          <rect x="140" y="230" width="40" height="25" rx="4" fill="#111827" />
          <rect x="200" y="230" width="40" height="25" rx="4" fill="#111827" />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 18: LIFE CYCLES & NATURE SCIENCE
    // ══════════════════════════════════════════════════════════════════
    case "butterfly-life-cycle-stages-coloring-page":
      return (
        <g>
          {/* 4 circular stage quadrants with connecting cycle arrows */}
          {/* Stage 1: Eggs on leaf (top left) */}
          <path d="M80 140 C60 100, 110 80, 140 110 C140 140, 100 160, 80 140 Z" fill="#fff" strokeWidth={2.5} />
          <circle cx="100" cy="115" r="4" fill="#111827" />
          <circle cx="110" cy="110" r="4" fill="#111827" />
          <circle cx="115" cy="120" r="4" fill="#111827" />
          {/* Arrow 1 -> 2 */}
          <path d="M150 90 Q200 65 240 90" fill="none" strokeWidth={3} stroke="#111827" />
          <polygon points="240,82 250,92 238,98" fill="#111827" />
          {/* Stage 2: Caterpillar (top right) */}
          <circle cx="280" cy="115" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="300" cy="115" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="320" cy="110" r="16" fill="#fff" strokeWidth={2.5} />
          <circle cx="322" cy="106" r="3" fill="#111827" />
          {/* Arrow 2 -> 3 */}
          <path d="M330 140 Q350 200 330 250" fill="none" strokeWidth={3} stroke="#111827" />
          <polygon points="338,245 328,255 324,242" fill="#111827" />
          {/* Stage 3: Chrysalis cocoon hanging on twig (bottom right) */}
          <line x1="270" y1="260" x2="330" y2="260" strokeWidth={4} stroke="#111827" />
          <path d="M290 260 C280 290, 280 320, 295 340 C310 320, 310 290, 300 260 Z" fill="#fff" strokeWidth={3} />
          {/* Arrow 3 -> 4 */}
          <path d="M270 330 Q200 350 140 330" fill="none" strokeWidth={3} stroke="#111827" />
          <polygon points="145,338 135,328 147,322" fill="#111827" />
          {/* Stage 4: Adult butterfly (bottom left) */}
          <ellipse cx="100" cy="270" rx="5" ry="25" fill="#111827" />
          <ellipse cx="80" cy="255" rx="20" ry="14" fill="#fff" strokeWidth={2.5} />
          <ellipse cx="120" cy="255" rx="20" ry="14" fill="#fff" strokeWidth={2.5} />
          <ellipse cx="85" cy="285" rx="15" ry="12" fill="#fff" strokeWidth={2.5} />
          <ellipse cx="115" cy="285" rx="15" ry="12" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "frog-metamorphosis-life-cycle-coloring-page":
      return (
        <g>
          {/* Stage 1: Jelly frogspawn eggs (top) */}
          <circle cx="200" cy="70" r="28" fill="#fff" strokeWidth={2.5} />
          <circle cx="190" cy="65" r="4" fill="#111827" />
          <circle cx="205" cy="65" r="4" fill="#111827" />
          <circle cx="200" cy="78" r="4" fill="#111827" />
          {/* Arrow to tadpole */}
          <path d="M240 70 Q310 90 320 140" fill="none" strokeWidth={3} stroke="#111827" />
          <polygon points="325,135 320,148 312,138" fill="#111827" />
          {/* Stage 2: Swimming tadpole with tail (right) */}
          <circle cx="320" cy="180" r="20" fill="#fff" strokeWidth={3} />
          <circle cx="315" cy="175" r="4" fill="#111827" />
          <path d="M338 185 Q370 200 350 230" fill="none" strokeWidth={4} strokeLinecap="round" />
          {/* Arrow to froglet */}
          <path d="M320 250 Q290 300 240 310" fill="none" strokeWidth={3} stroke="#111827" />
          <polygon points="245,318 232,310 242,302" fill="#111827" />
          {/* Stage 3: Froglet with hind legs and tail (bottom) */}
          <ellipse cx="190" cy="300" rx="25" ry="18" fill="#fff" strokeWidth={3} />
          <path d="M175 305 L150 325 L160 335" strokeWidth={2.5} />
          <path d="M210 305 Q240 315 250 295" strokeWidth={3} fill="none" />
          {/* Arrow to adult */}
          <path d="M140 290 Q80 250 80 180" fill="none" strokeWidth={3} stroke="#111827" />
          <polygon points="72,185 80,172 88,185" fill="#111827" />
          {/* Stage 4: Adult frog (left) */}
          <ellipse cx="90" cy="120" rx="30" ry="24" fill="#fff" strokeWidth={3.5} />
          <circle cx="80" cy="105" r="8" fill="#111827" />
          <circle cx="100" cy="105" r="8" fill="#111827" />
          <path d="M80 130 Q90 140 100 130" fill="none" strokeWidth={2} />
        </g>
      );

    case "bean-seed-germination-cycle-coloring-page":
      return (
        <g>
          {/* Soil line dividing underground and sky */}
          <line x1="30" y1="230" x2="370" y2="230" strokeWidth={4} stroke="#111827" />
          <line x1="30" y1="240" x2="370" y2="240" strokeWidth={2} strokeDasharray="10 5" />
          {/* Step 1: Bean seed in soil (left) */}
          <ellipse cx="80" cy="280" rx="16" ry="12" fill="#fff" strokeWidth={3} transform="rotate(30 80 280)" />
          {/* Step 2: Seed with emerging taproot (center-left) */}
          <ellipse cx="160" cy="270" rx="16" ry="12" fill="#fff" strokeWidth={3} />
          <path d="M165 280 Q170 310 160 340" fill="none" strokeWidth={3} stroke="#111827" />
          {/* Step 3: Green shoot reaching above ground with cotyledons (center-right) */}
          <path d="M240 270 Q240 200 240 160" fill="none" strokeWidth={3.5} stroke="#111827" />
          <ellipse cx="230" cy="155" rx="14" ry="8" fill="#fff" strokeWidth={2.5} transform="rotate(-30 230 155)" />
          <ellipse cx="250" cy="155" rx="14" ry="8" fill="#fff" strokeWidth={2.5} transform="rotate(30 250 155)" />
          <path d="M240 270 Q230 310 245 350" fill="none" strokeWidth={3} stroke="#111827" />
          {/* Step 4: Full leafy flowering bean plant (right) */}
          <line x1="320" y1="340" x2="320" y2="80" strokeWidth={4} stroke="#111827" />
          <ellipse cx="300" cy="120" rx="20" ry="10" fill="#fff" strokeWidth={2.5} transform="rotate(-30 300 120)" />
          <ellipse cx="340" cy="120" rx="20" ry="10" fill="#fff" strokeWidth={2.5} transform="rotate(30 340 120)" />
          <ellipse cx="300" cy="170" rx="22" ry="12" fill="#fff" strokeWidth={2.5} transform="rotate(-25 300 170)" />
          <ellipse cx="340" cy="170" rx="22" ry="12" fill="#fff" strokeWidth={2.5} transform="rotate(25 340 170)" />
          <circle cx="320" cy="75" r="10" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "honeybee-colony-life-cycle-coloring-page":
      return (
        <g>
          {/* Honeycomb grid cells */}
          <polygon points="80,140 110,120 140,140 140,180 110,200 80,180" fill="#fff" strokeWidth={3.5} />
          {/* Cell 1: Queen Egg */}
          <ellipse cx="110" cy="160" rx="4" ry="10" fill="#111827" />
          <polygon points="140,140 170,120 200,140 200,180 170,200 140,180" fill="#fff" strokeWidth={3.5} />
          {/* Cell 2: Fed Bee Larva curled in royal jelly */}
          <path d="M165 150 C185 150, 185 175, 165 175" fill="none" strokeWidth={5} stroke="#111827" strokeLinecap="round" />
          <polygon points="200,140 230,120 260,140 260,180 230,200 200,180" fill="#fff" strokeWidth={3.5} />
          {/* Cell 3: Pupa casing */}
          <ellipse cx="230" cy="160" rx="10" ry="18" fill="#fff" strokeWidth={2.5} />
          {/* Flying Adult Honeybee emerging above */}
          <ellipse cx="230" cy="270" rx="55" ry="38" fill="#fff" strokeWidth={4} />
          <line x1="205" y1="238" x2="205" y2="302" strokeWidth={5} stroke="#111827" />
          <line x1="230" y1="232" x2="230" y2="308" strokeWidth={5} stroke="#111827" />
          <line x1="255" y1="240" x2="255" y2="300" strokeWidth={5} stroke="#111827" />
          <circle cx="170" cy="270" r="24" fill="#fff" strokeWidth={3.5} />
          <circle cx="162" cy="265" r="5" fill="#111827" />
          <ellipse cx="215" cy="210" rx="20" ry="40" fill="#fff" strokeWidth={3} transform="rotate(-30 215 210)" />
        </g>
      );

    case "apple-tree-four-seasons-cycle-coloring-page":
      return (
        <g>
          {/* 4 Quadrants dividing cross lines */}
          <line x1="200" y1="40" x2="200" y2="360" strokeWidth={3} stroke="#111827" />
          <line x1="40" y1="200" x2="360" y2="200" strokeWidth={3} stroke="#111827" />
          {/* Q1: Winter bare branches with snow (top left) */}
          <rect x="110" y="140" width="16" height="50" fill="#111827" />
          <path d="M118 140 L90 80 M118 140 L140 80 M100 110 L80 115" strokeWidth={3} stroke="#111827" strokeLinecap="round" />
          <circle cx="118" cy="70" r="4" fill="#fff" strokeWidth={1.5} />
          {/* Q2: Spring pink blossoms (top right) */}
          <rect x="270" y="140" width="16" height="50" fill="#111827" />
          <circle cx="280" cy="100" r="38" fill="#fff" strokeWidth={3} />
          <circle cx="265" cy="85" r="6" fill="#111827" />
          <circle cx="295" cy="85" r="6" fill="#111827" />
          <circle cx="280" cy="115" r="6" fill="#111827" />
          {/* Q3: Autumn harvest with falling leaves (bottom left) */}
          <rect x="110" y="300" width="16" height="50" fill="#111827" />
          <circle cx="120" cy="260" r="38" fill="#fff" strokeWidth={3} />
          <circle cx="105" cy="250" r="7" fill="#111827" />
          <circle cx="135" cy="250" r="7" fill="#111827" />
          <ellipse cx="70" cy="330" rx="8" ry="4" fill="#111827" transform="rotate(30 70 330)" />
          {/* Q4: Summer lush canopy with ripe apples (bottom right) */}
          <rect x="270" y="300" width="16" height="50" fill="#111827" />
          <circle cx="280" cy="255" r="42" fill="#fff" strokeWidth={4} />
          <circle cx="265" cy="245" r="8" fill="#fff" strokeWidth={2} />
          <circle cx="295" cy="245" r="8" fill="#fff" strokeWidth={2} />
          <circle cx="280" cy="275" r="8" fill="#fff" strokeWidth={2} />
        </g>
      );

    case "chicken-egg-to-hen-cycle-coloring-page":
      return (
        <g>
          {/* Circular cycle */}
          {/* 1. Whole egg in straw nest (top) */}
          <ellipse cx="200" cy="80" rx="24" ry="32" fill="#fff" strokeWidth={3.5} />
          {/* 2. Cracked egg with chick pecking out (right) */}
          <ellipse cx="310" cy="180" rx="26" ry="34" fill="#fff" strokeWidth={3.5} />
          <path d="M284 180 L295 190 L305 175 L315 190 L325 175 L336 180" fill="none" strokeWidth={3} />
          <circle cx="310" cy="165" r="4" fill="#111827" />
          <polygon points="310,172 322,176 310,180" fill="#111827" />
          {/* 3. Fluffy yellow chick (bottom) */}
          <circle cx="200" cy="300" r="26" fill="#fff" strokeWidth={3.5} />
          <circle cx="185" cy="275" r="18" fill="#fff" strokeWidth={3} />
          <circle cx="180" cy="270" r="3.5" fill="#111827" />
          <polygon points="170,273 160,276 170,279" fill="#111827" />
          {/* 4. Adult laying hen (left) */}
          <ellipse cx="90" cy="180" rx="35" ry="28" fill="#fff" strokeWidth={3.5} />
          <circle cx="120" cy="155" r="16" fill="#fff" strokeWidth={3} />
          <polygon points="135,152 145,155 135,158" fill="#111827" />
          <polygon points="115,140 122,130 128,140" fill="#111827" />
          {/* Connecting circular arrows */}
          <path d="M235 80 Q290 100 300 140" fill="none" strokeWidth={3} stroke="#111827" />
          <path d="M310 220 Q290 280 235 300" fill="none" strokeWidth={3} stroke="#111827" />
          <path d="M165 300 Q110 280 90 220" fill="none" strokeWidth={3} stroke="#111827" />
          <path d="M90 140 Q110 90 165 80" fill="none" strokeWidth={3} stroke="#111827" />
        </g>
      );

    case "ladybug-metamorphosis-stages-coloring-page":
      return (
        <g>
          {/* Broad leaf background with stages */}
          <path d="M50 350 C30 180, 150 60, 360 40 C340 230, 200 360, 50 350 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M50 350 Q200 210 360 40" fill="none" strokeWidth={2} strokeDasharray="6 6" />
          {/* Stage 1: Yellow egg cluster under leaf */}
          <ellipse cx="100" cy="140" rx="5" ry="8" fill="#111827" />
          <ellipse cx="112" cy="140" rx="5" ry="8" fill="#111827" />
          <ellipse cx="106" cy="152" rx="5" ry="8" fill="#111827" />
          {/* Stage 2: Spiky elongated larva */}
          <ellipse cx="230" cy="110" rx="30" ry="12" fill="#fff" strokeWidth={2.5} transform="rotate(30 230 110)" />
          <line x1="210" y1="100" x2="250" y2="120" strokeWidth={3} stroke="#111827" />
          {/* Stage 3: Pupa casing attached to leaf */}
          <ellipse cx="300" cy="200" rx="20" ry="16" fill="#fff" strokeWidth={3} />
          {/* Stage 4: Adult spotted ladybug */}
          <ellipse cx="170" cy="270" rx="45" ry="40" fill="#fff" strokeWidth={4} />
          <line x1="170" y1="230" x2="170" y2="310" strokeWidth={3} />
          <circle cx="150" cy="255" r="8" fill="#111827" />
          <circle cx="190" cy="255" r="8" fill="#111827" />
          <circle cx="150" cy="285" r="8" fill="#111827" />
          <circle cx="190" cy="285" r="8" fill="#111827" />
        </g>
      );

    case "salmon-river-migration-journey-coloring-page":
      return (
        <g>
          {/* Mountain river waterfall cascading */}
          <path d="M50 80 Q150 140 150 220 Q150 300 350 350" fill="none" strokeWidth={8} stroke="#111827" />
          {/* River stones on bed with eggs */}
          <circle cx="80" cy="100" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="75" cy="95" r="3" fill="#111827" />
          <circle cx="85" cy="95" r="3" fill="#111827" />
          {/* Juvenile swimming parr */}
          <ellipse cx="120" cy="180" rx="24" ry="8" fill="#fff" strokeWidth={2.5} />
          <polygon points="96,180 85,172 85,188" fill="#111827" />
          {/* Mighty adult wild salmon leaping upwards through waterfall */}
          <path d="M190 280 C210 200, 310 170, 330 230 C310 250, 220 280, 190 280 Z" fill="#fff" strokeWidth={4} />
          {/* Salmon hooked jaw kype & eye */}
          <circle cx="315" cy="215" r="5" fill="#111827" />
          <path d="M315 228 Q325 235 320 240" fill="none" strokeWidth={3} />
          {/* Tail and dorsal fin */}
          <polygon points="190,280 160,260 160,300" fill="#fff" strokeWidth={3} />
          <polygon points="260,188 275,160 285,190" fill="#fff" strokeWidth={3} />
          {/* Water splash droplets around leaping salmon */}
          <circle cx="210" cy="230" r="5" fill="#111827" />
          <circle cx="250" cy="170" r="6" fill="#111827" />
          <circle cx="340" cy="190" r="6" fill="#111827" />
        </g>
      );

    case "water-cycle-nature-diagram-coloring-page":
      return (
        <g>
          {/* Calm lake in foreground */}
          <ellipse cx="200" cy="330" rx="150" ry="30" fill="#fff" strokeWidth={4} />
          {/* Sun in top left driving evaporation */}
          <circle cx="80" cy="80" r="28" fill="#fff" strokeWidth={3.5} />
          <line x1="80" y1="45" x2="80" y2="30" strokeWidth={2.5} />
          <line x1="45" y1="80" x2="30" y2="80" strokeWidth={2.5} />
          {/* Wavy Evaporation arrows rising from lake to sky */}
          <path d="M100 290 Q90 230 110 180" fill="none" strokeWidth={3} stroke="#111827" />
          <polygon points="105,180 112,170 118,180" fill="#111827" />
          {/* Fluffy condensation rain cloud (top center) */}
          <path d="M170 120 C150 120, 150 90, 180 90 C180 70, 210 70, 220 85 C230 70, 260 70, 260 90 C280 90, 280 120, 250 120 Z" fill="#fff" strokeWidth={3.5} />
          {/* Precipitation rain falling from cloud */}
          <line x1="180" y1="135" x2="170" y2="160" strokeWidth={2.5} stroke="#111827" />
          <line x1="205" y1="135" x2="195" y2="160" strokeWidth={2.5} stroke="#111827" />
          <line x1="230" y1="135" x2="220" y2="160" strokeWidth={2.5} stroke="#111827" />
          <line x1="255" y1="135" x2="245" y2="160" strokeWidth={2.5} stroke="#111827" />
          {/* Mountains on right collecting runoff */}
          <polygon points="260,310 320,170 370,310" fill="#fff" strokeWidth={3.5} />
          <path d="M300 220 Q260 270 230 310" fill="none" strokeWidth={3} strokeDasharray="6 4" />
        </g>
      );

    case "oak-tree-acorn-to-canopy-coloring-page":
      return (
        <g>
          {/* Soil line */}
          <line x1="30" y1="330" x2="370" y2="330" strokeWidth={4} stroke="#111827" />
          {/* Stage 1: Round Acorn with textured cup (left) */}
          <path d="M70 280 C50 280, 50 315, 70 325 C90 315, 90 280, 70 280 Z" fill="#fff" strokeWidth={3} />
          <path d="M52 285 C52 270, 88 270, 88 285 Z" fill="#111827" />
          {/* Stage 2: Sprouting seedling sapling (center-left) */}
          <line x1="150" y1="330" x2="150" y2="250" strokeWidth={3.5} stroke="#111827" />
          <ellipse cx="138" cy="245" rx="14" ry="8" fill="#fff" strokeWidth={2.5} transform="rotate(-30 138 245)" />
          <ellipse cx="162" cy="245" rx="14" ry="8" fill="#fff" strokeWidth={2.5} transform="rotate(30 162 245)" />
          {/* Stage 3: Mighty mature spreading Oak tree (right) */}
          {/* Massive oak trunk & roots */}
          <polygon points="265,220 250,330 300,330 285,220" fill="#fff" strokeWidth={4} />
          <line x1="260" y1="330" x2="240" y2="345" strokeWidth={3.5} stroke="#111827" />
          <line x1="290" y1="330" x2="310" y2="345" strokeWidth={3.5} stroke="#111827" />
          {/* Grand lobed oak canopy */}
          <circle cx="275" cy="130" r="55" fill="#fff" strokeWidth={4} />
          <circle cx="230" cy="160" r="45" fill="#fff" strokeWidth={3.5} />
          <circle cx="320" cy="160" r="45" fill="#fff" strokeWidth={3.5} />
          <circle cx="275" cy="170" r="45" fill="#fff" strokeWidth={3} />
        </g>
      );

    default:
      return null;
  }
}
