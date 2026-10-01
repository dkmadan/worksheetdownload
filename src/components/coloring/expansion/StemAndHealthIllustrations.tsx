import React from "react";

export function renderStemAndHealth(slug: string): React.ReactNode | null {
  switch (slug) {
    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 11: STEM SCIENCE & SIMPLE MACHINES
    // ══════════════════════════════════════════════════════════════════
    case "classroom-optical-microscope-coloring-page":
    case "laboratory-compound-microscope-and-slides-coloring-page":
      return (
        <g>
          {/* Heavy horseshoe base */}
          <ellipse cx="200" cy="340" rx="90" ry="25" fill="#fff" strokeWidth={4} />
          {/* Curved arm pillar */}
          <path d="M220 340 C280 300, 270 170, 210 140" fill="none" strokeWidth={16} stroke="#fff" />
          <path d="M220 340 C280 300, 270 170, 210 140" fill="none" strokeWidth={4} stroke="#111827" />
          {/* Optical body tube & eyepiece */}
          <rect x="155" y="60" width="30" height="90" rx="4" fill="#fff" strokeWidth={3.5} transform="rotate(-15 170 105)" />
          <rect x="150" y="40" width="40" height="20" rx="3" fill="#fff" strokeWidth={3} transform="rotate(-15 170 50)" />
          {/* Revolving nosepiece & objective lenses */}
          <circle cx="185" cy="165" r="20" fill="#fff" strokeWidth={3} />
          <rect x="165" y="175" width="12" height="25" fill="#111827" />
          <rect x="185" y="180" width="12" height="22" fill="#111827" />
          {/* Specimen stage platform */}
          <rect x="110" y="215" width="110" height="15" rx="3" fill="#fff" strokeWidth={3.5} />
          {/* Glass slide with droplet specimen */}
          <rect x="135" y="210" width="60" height="8" rx="2" fill="#fff" strokeWidth={2} />
          <circle cx="165" cy="214" r="2.5" fill="#111827" />
          {/* Substage light mirror / condenser */}
          <ellipse cx="165" cy="270" rx="22" ry="12" fill="#fff" strokeWidth={3} transform="rotate(30 165 270)" />
          {/* Focus adjustment knob */}
          <circle cx="245" cy="200" r="14" fill="#fff" strokeWidth={3} />
          <circle cx="245" cy="200" r="6" fill="#111827" />
        </g>
      );

    case "horseshoe-magnet-with-paperclips-coloring-page":
    case "bar-magnet-with-magnetic-field-iron-filings-coloring-page":
      return (
        <g>
          {/* Large U-shaped horseshoe magnet */}
          <path d="M120 180 C120 90, 280 90, 280 180 L280 270 L230 270 L230 180 C230 140, 170 140, 170 180 L170 270 L120 270 Z" fill="#fff" strokeWidth={4.5} />
          {/* North pole stripe */}
          <rect x="120" y="230" width="50" height="40" fill="#111827" />
          <text x="135" y="260" fontSize="24" fontWeight="bold" fill="#fff" stroke="none">N</text>
          {/* South pole stripe */}
          <rect x="230" y="230" width="50" height="40" fill="#fff" strokeWidth={3.5} />
          <text x="248" y="260" fontSize="24" fontWeight="bold" fill="#111827" stroke="none">S</text>
          {/* Arched magnetic field lines connecting poles */}
          <path d="M145 270 C145 340, 255 340, 255 270" fill="none" strokeWidth={2.5} strokeDasharray="8 6" />
          <path d="M130 270 C130 380, 270 380, 270 270" fill="none" strokeWidth={2} strokeDasharray="8 6" />
          {/* Paperclips attracted to poles */}
          <rect x="135" y="280" width="16" height="35" rx="8" fill="none" strokeWidth={2.5} stroke="#111827" />
          <rect x="245" y="280" width="16" height="35" rx="8" fill="none" strokeWidth={2.5} stroke="#111827" />
          <rect x="190" y="320" width="35" height="16" rx="8" fill="none" strokeWidth={2.5} stroke="#111827" />
        </g>
      );

    case "erupting-volcano-science-fair-coloring-page":
      return (
        <g>
          {/* Science fair display table */}
          <rect x="40" y="330" width="320" height="30" rx="4" fill="#fff" strokeWidth={3.5} />
          {/* Paper mache volcano cone */}
          <path d="M90 330 L160 170 L240 170 L310 330 Z" fill="#fff" strokeWidth={4} />
          {/* Volcano crater summit opening */}
          <ellipse cx="200" cy="170" rx="40" ry="12" fill="#111827" />
          {/* Foaming erupting lava pouring down sides */}
          <path d="M175 170 Q160 210 180 240 Q170 270 185 300" fill="none" strokeWidth={5} stroke="#111827" />
          <path d="M225 170 Q240 220 220 260 Q235 290 225 320" fill="none" strokeWidth={5} stroke="#111827" />
          {/* Bubbly smoke and ash plume explosion */}
          <circle cx="200" cy="130" r="22" fill="#fff" strokeWidth={3} />
          <circle cx="170" cy="100" r="26" fill="#fff" strokeWidth={3} />
          <circle cx="230" cy="95" r="28" fill="#fff" strokeWidth={3} />
          <circle cx="200" cy="65" r="32" fill="#fff" strokeWidth={3.5} />
          {/* Project display card */}
          <rect x="60" y="260" width="45" height="60" rx="3" fill="#fff" strokeWidth={2} />
          <line x1="68" y1="275" x2="97" y2="275" strokeWidth={1.5} />
          <line x1="68" y1="290" x2="97" y2="290" strokeWidth={1.5} />
        </g>
      );

    case "pulley-system-hoisting-crate-coloring-page":
    case "simple-machines-inclined-plane-and-pulley-coloring-page":
      return (
        <g>
          {/* Overhead wooden scaffold beam */}
          <rect x="50" y="50" width="300" height="25" rx="4" fill="#fff" strokeWidth={4} />
          <line x1="90" y1="75" x2="90" y2="350" strokeWidth={6} stroke="#111827" />
          {/* Pulley block fixed to beam */}
          <rect x="190" y="75" width="20" height="25" fill="#111827" />
          <circle cx="200" cy="120" r="25" fill="#fff" strokeWidth={4} />
          <circle cx="200" cy="120" r="8" fill="#111827" />
          {/* Pulley groove line and rope */}
          <line x1="175" y1="120" x2="175" y2="220" strokeWidth={3.5} stroke="#111827" />
          <line x1="225" y1="120" x2="300" y2="320" strokeWidth={3.5} stroke="#111827" />
          {/* Cargo wooden crate hoisted in air */}
          <rect x="135" y="220" width="80" height="80" rx="5" fill="#fff" strokeWidth={4} />
          <line x1="135" y1="220" x2="215" y2="300" strokeWidth={2.5} />
          <line x1="215" y1="220" x2="135" y2="300" strokeWidth={2.5} />
          {/* Hoisting hook */}
          <path d="M175 205 L175 220" strokeWidth={3} stroke="#111827" />
        </g>
      );

    case "lever-and-fulcrum-seesaw-coloring-page":
    case "science-balance-scale-comparing-weights-coloring-page":
      return (
        <g>
          {/* Ground */}
          <line x1="30" y1="330" x2="370" y2="330" strokeWidth={4} stroke="#111827" />
          {/* Triangular fulcrum pivot */}
          <polygon points="200,210 160,330 240,330" fill="#fff" strokeWidth={4} />
          <circle cx="200" cy="210" r="8" fill="#111827" />
          {/* Tilted lever plank beam */}
          <polygon points="50,150 350,270 345,285 45,165" fill="#fff" strokeWidth={4} />
          {/* Heavy load block on elevated side */}
          <rect x="65" y="100" width="55" height="55" rx="4" fill="#fff" strokeWidth={3.5} />
          <text x="80" y="135" fontSize="16" fontWeight="bold" fill="#111827" stroke="none">10kg</text>
          {/* Light effort block on lower side */}
          <rect x="280" y="225" width="40" height="40" rx="4" fill="#fff" strokeWidth={3.5} />
          <text x="290" y="250" fontSize="14" fontWeight="bold" fill="#111827" stroke="none">5kg</text>
          {/* Motion indicator curve */}
          <path d="M90 70 Q130 50 170 80" fill="none" strokeWidth={2.5} strokeDasharray="4 3" />
        </g>
      );

    case "science-beakers-and-flasks-coloring-page":
    case "bubbling-erlenmeyer-flasks-chemistry-set-coloring-page":
      return (
        <g>
          {/* Large Erlenmeyer conical flask */}
          <polygon points="120,110 160,110 220,290 60,290" fill="#fff" strokeWidth={4} />
          <rect x="115" y="95" width="50" height="15" rx="4" fill="#fff" strokeWidth={3} />
          <line x1="80" y1="230" x2="200" y2="230" strokeWidth={2.5} strokeDasharray="6 4" />
          <circle cx="110" cy="260" r="8" fill="#fff" strokeWidth={2} />
          <circle cx="140" cy="245" r="12" fill="#fff" strokeWidth={2} />
          <circle cx="170" cy="265" r="7" fill="#fff" strokeWidth={2} />
          <circle cx="130" cy="200" r="9" fill="#fff" strokeWidth={2} />
          <circle cx="150" cy="170" r="6" fill="#fff" strokeWidth={2} />
          <circle cx="135" cy="75" r="8" fill="#fff" strokeWidth={2} />
          <circle cx="145" cy="50" r="11" fill="#fff" strokeWidth={2} />
          {/* Test tube on right rack */}
          <rect x="250" y="140" width="25" height="150" rx="12" fill="#fff" strokeWidth={3.5} />
          <line x1="250" y1="200" x2="275" y2="200" strokeWidth={2} />
          <circle cx="262" cy="240" r="5" fill="#fff" strokeWidth={1.5} />
          {/* Dropper pipette */}
          <polygon points="285,90 315,90 305,180 300,200 295,180" fill="#fff" strokeWidth={2.5} />
          <path d="M285 90 C285 70, 315 70, 315 90 Z" fill="#111827" />
        </g>
      );

    case "optical-glass-prism-rainbow-coloring-page":
      return (
        <g>
          {/* Triangular optical glass prism */}
          <polygon points="200,80 110,270 290,270" fill="#fff" strokeWidth={4.5} />
          {/* Incident white light beam entering left face */}
          <line x1="30" y1="180" x2="155" y2="180" strokeWidth={6} stroke="#111827" />
          {/* Light refracting through glass */}
          <line x1="155" y1="180" x2="245" y2="190" strokeWidth={3} stroke="#111827" />
          {/* Fan of rainbow spectrum colors emerging from right face */}
          <line x1="245" y1="190" x2="370" y2="140" strokeWidth={3} stroke="#111827" />
          <line x1="245" y1="190" x2="370" y2="165" strokeWidth={3} stroke="#111827" />
          <line x1="245" y1="190" x2="370" y2="190" strokeWidth={3} stroke="#111827" />
          <line x1="245" y1="190" x2="370" y2="215" strokeWidth={3} stroke="#111827" />
          <line x1="245" y1="190" x2="370" y2="240" strokeWidth={3} stroke="#111827" />
          {/* Rainbow arc on top for fun */}
          <path d="M70 120 Q120 70 170 120" fill="none" strokeWidth={2} />
          <path d="M75 125 Q120 80 165 125" fill="none" strokeWidth={2} />
        </g>
      );

    case "interlocking-gear-wheels-coloring-page":
    case "meshing-interlocking-gears-and-cogs-system-coloring-page":
      return (
        <g>
          {/* Large primary gear wheel */}
          <circle cx="160" cy="180" r="85" fill="#fff" strokeWidth={4} />
          <circle cx="160" cy="180" r="35" fill="#fff" strokeWidth={3} />
          <circle cx="160" cy="180" r="12" fill="#111827" />
          {/* Outer gear teeth */}
          <rect x="150" y="85" width="20" height="20" fill="#fff" strokeWidth={3} />
          <rect x="150" y="255" width="20" height="20" fill="#fff" strokeWidth={3} />
          <rect x="65" y="170" width="20" height="20" fill="#fff" strokeWidth={3} />
          <rect x="235" y="170" width="20" height="20" fill="#fff" strokeWidth={3} />
          <rect x="95" y="110" width="18" height="18" fill="#fff" strokeWidth={2.5} transform="rotate(45 104 119)" />
          <rect x="205" y="110" width="18" height="18" fill="#fff" strokeWidth={2.5} transform="rotate(45 214 119)" />
          <rect x="95" y="230" width="18" height="18" fill="#fff" strokeWidth={2.5} transform="rotate(45 104 239)" />
          <rect x="205" y="230" width="18" height="18" fill="#fff" strokeWidth={2.5} transform="rotate(45 214 239)" />
          {/* Meshing secondary gear wheel */}
          <circle cx="280" cy="270" r="55" fill="#fff" strokeWidth={4} />
          <circle cx="280" cy="270" r="22" fill="#fff" strokeWidth={3} />
          <circle cx="280" cy="270" r="8" fill="#111827" />
          <rect x="272" y="205" width="16" height="16" fill="#fff" strokeWidth={2.5} />
          <rect x="272" y="315" width="16" height="16" fill="#fff" strokeWidth={2.5} />
          <rect x="215" y="262" width="16" height="16" fill="#fff" strokeWidth={2.5} />
          <rect x="325" y="262" width="16" height="16" fill="#fff" strokeWidth={2.5} />
          {/* Rotation arrow indicator */}
          <path d="M125 155 A50 50 0 0 1 195 155" fill="none" strokeWidth={3} stroke="#111827" />
          <polygon points="195,150 205,158 195,165" fill="#111827" />
        </g>
      );

    case "inclined-plane-ramp-cart-coloring-page":
    case "solar-powered-model-science-car-coloring-page":
      return (
        <g>
          {/* Triangular incline ramp */}
          <polygon points="50,330 330,120 330,330" fill="#fff" strokeWidth={4} />
          {/* Measurement tick marks along ramp slope */}
          <line x1="120" y1="275" x2="110" y2="265" strokeWidth={2.5} />
          <line x1="180" y1="230" x2="170" y2="220" strokeWidth={2.5} />
          <line x1="240" y1="185" x2="230" y2="175" strokeWidth={2.5} />
          {/* Wheeled laboratory cart rolling down ramp */}
          <rect x="140" y="170" width="70" height="35" rx="5" fill="#fff" strokeWidth={3.5} transform="rotate(-37 175 187)" />
          <circle cx="160" cy="225" r="14" fill="#fff" strokeWidth={3} />
          <circle cx="215" cy="185" r="14" fill="#fff" strokeWidth={3} />
          {/* Motion speed lines */}
          <line x1="90" y1="220" x2="60" y2="245" strokeWidth={2.5} strokeDasharray="4 3" />
          <line x1="110" y1="210" x2="80" y2="235" strokeWidth={2.5} strokeDasharray="4 3" />
        </g>
      );

    case "solar-system-hanging-mobile-coloring-page":
    case "astronomical-refractor-telescope-on-tripod-coloring-page":
      return (
        <g>
          {/* Ceiling hook & main mobile hanger wire */}
          <line x1="200" y1="30" x2="200" y2="70" strokeWidth={3} stroke="#111827" />
          {/* Large central Sun */}
          <circle cx="200" cy="110" r="38" fill="#fff" strokeWidth={4} />
          <circle cx="190" cy="105" r="4" fill="#111827" />
          <circle cx="210" cy="105" r="4" fill="#111827" />
          <path d="M192 120 Q200 128 208 120" fill="none" strokeWidth={2} />
          {/* Horizontal crossbars for hanging planets */}
          <line x1="60" y1="160" x2="340" y2="160" strokeWidth={3.5} stroke="#111827" />
          <line x1="200" y1="148" x2="200" y2="160" strokeWidth={3} stroke="#111827" />
          {/* Planet 1: Mercury */}
          <line x1="80" y1="160" x2="80" y2="220" strokeWidth={2} />
          <circle cx="80" cy="235" r="14" fill="#fff" strokeWidth={2.5} />
          {/* Planet 2: Earth & Moon */}
          <line x1="140" y1="160" x2="140" y2="270" strokeWidth={2} />
          <circle cx="140" cy="290" r="20" fill="#fff" strokeWidth={3} />
          <circle cx="160" cy="275" r="5" fill="#fff" strokeWidth={2} />
          {/* Planet 3: Ringed Saturn */}
          <line x1="260" y1="160" x2="260" y2="240" strokeWidth={2} />
          <circle cx="260" cy="265" r="24" fill="#fff" strokeWidth={3} />
          <ellipse cx="260" cy="265" rx="42" ry="10" fill="none" strokeWidth={3} transform="rotate(-15 260 265)" />
          {/* Planet 4: Jupiter with stripes */}
          <line x1="320" y1="160" x2="320" y2="210" strokeWidth={2} />
          <circle cx="320" cy="235" r="26" fill="#fff" strokeWidth={3.5} />
          <line x1="298" y1="230" x2="342" y2="230" strokeWidth={2} />
          <line x1="296" y1="240" x2="344" y2="240" strokeWidth={2} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 12: HEALTHY HABITS & DAILY ROUTINES
    // ══════════════════════════════════════════════════════════════════
    case "brushing-teeth-sparkle-routine-coloring-page":
    case "brushing-teeth-sparkling-smile-routine-coloring-page":
      return (
        <g>
          {/* Giant friendly smiling cartoon tooth */}
          <path d="M140 130 C120 80, 160 60, 200 70 C240 60, 280 80, 260 130 C280 190, 260 250, 240 310 C220 310, 210 240, 200 240 C190 240, 180 310, 160 310 C140 250, 120 190, 140 130 Z" fill="#fff" strokeWidth={4} />
          {/* Cheerful eyes and big smile */}
          <circle cx="178" cy="140" r="7" fill="#111827" />
          <circle cx="176" cy="137" r="2.5" fill="#fff" stroke="none" />
          <circle cx="222" cy="140" r="7" fill="#111827" />
          <circle cx="220" cy="137" r="2.5" fill="#fff" stroke="none" />
          <path d="M175 165 Q200 185 225 165" fill="none" strokeWidth={3} />
          {/* Toothbrush with swirl of toothpaste */}
          <rect x="60" y="200" width="180" height="22" rx="10" fill="#fff" strokeWidth={3.5} transform="rotate(-30 150 211)" />
          <rect x="65" y="195" width="40" height="15" rx="3" fill="#111827" transform="rotate(-30 85 202)" />
          {/* Foamy bubbles & sparkle stars */}
          <circle cx="150" cy="110" r="10" fill="#fff" strokeWidth={2} />
          <circle cx="250" cy="100" r="8" fill="#fff" strokeWidth={2} />
          <polygon points="275,60 280,75 295,75 282,85 287,100 275,90 263,100 268,85 255,75 270,75" fill="#111827" />
        </g>
      );

    case "washing-hands-with-bubbly-soap-coloring-page":
    case "washing-hands-at-sink-with-bubbles-coloring-page":
      return (
        <g>
          {/* Water faucet spout */}
          <path d="M200 50 L200 100 Q200 130 170 130 L160 130" fill="none" strokeWidth={14} stroke="#fff" />
          <path d="M200 50 L200 100 Q200 130 170 130 L160 130" fill="none" strokeWidth={3.5} stroke="#111827" />
          <path d="M160 130 Q160 190 170 240 M155 130 Q155 190 165 240" strokeWidth={3} stroke="#111827" strokeDasharray="6 4" />
          {/* Pair of hands lathering soap */}
          <ellipse cx="160" cy="260" rx="35" ry="25" fill="#fff" strokeWidth={3.5} transform="rotate(-15 160 260)" />
          <ellipse cx="210" cy="260" rx="35" ry="25" fill="#fff" strokeWidth={3.5} transform="rotate(15 210 260)" />
          {/* Bar of soap */}
          <rect x="160" y="240" width="50" height="30" rx="12" fill="#fff" strokeWidth={3} />
          {/* Sudsy frothy soap bubbles */}
          <circle cx="130" cy="230" r="14" fill="#fff" strokeWidth={2} />
          <circle cx="240" cy="230" r="12" fill="#fff" strokeWidth={2} />
          <circle cx="150" cy="200" r="9" fill="#fff" strokeWidth={2} />
          <circle cx="220" cy="195" r="11" fill="#fff" strokeWidth={2} />
          <circle cx="185" cy="180" r="8" fill="#fff" strokeWidth={2} />
          <path d="M60 320 Q200 360 340 320" fill="none" strokeWidth={4} />
        </g>
      );

    case "eating-crunchy-vegetables-coloring-page":
    case "nutritious-balanced-meal-myplate-coloring-page":
      return (
        <g>
          {/* Dinner plate rim */}
          <circle cx="190" cy="200" r="140" fill="#fff" strokeWidth={4.5} />
          <circle cx="190" cy="200" r="115" fill="#fff" strokeWidth={2.5} />
          {/* MyPlate quadrant division lines */}
          <line x1="190" y1="85" x2="190" y2="315" strokeWidth={3} />
          <line x1="75" y1="200" x2="305" y2="200" strokeWidth={3} />
          {/* Vegetables & healthy foods */}
          <circle cx="140" cy="140" r="18" fill="#fff" strokeWidth={2.5} />
          <path d="M140 122 Q145 110 152 110" fill="none" strokeWidth={2} />
          <polygon points="120,270 150,225 155,235" fill="#fff" strokeWidth={2.5} />
          <rect x="220" y="125" width="40" height="40" rx="8" fill="#fff" strokeWidth={2.5} />
          <ellipse cx="245" cy="255" rx="22" ry="14" fill="#fff" strokeWidth={2.5} />
          {/* Glass cup */}
          <ellipse cx="330" cy="100" rx="30" ry="15" fill="#fff" strokeWidth={3.5} />
          <path d="M300 100 L310 180 Q330 195 350 180 L360 100" fill="#fff" strokeWidth={3.5} />
        </g>
      );

    case "drinking-pure-fresh-water-coloring-page":
    case "drinking-fresh-water-from-glass-cup-coloring-page":
      return (
        <g>
          {/* Clear glass cup */}
          <ellipse cx="200" cy="110" rx="65" ry="20" fill="#fff" strokeWidth={4} />
          <path d="M135 110 L150 310 Q200 335 250 310 L265 110" fill="#fff" strokeWidth={4} />
          <ellipse cx="200" cy="150" rx="58" ry="15" fill="#fff" strokeWidth={2.5} strokeDasharray="6 4" />
          {/* Striped drinking straw standing in cup */}
          <rect x="180" y="50" width="16" height="250" rx="6" fill="#fff" strokeWidth={3} transform="rotate(15 188 175)" />
          <line x1="205" y1="80" x2="220" y2="80" strokeWidth={3} stroke="#111827" />
          <line x1="195" y1="120" x2="210" y2="120" strokeWidth={3} stroke="#111827" />
          <line x1="185" y1="160" x2="200" y2="160" strokeWidth={3} stroke="#111827" />
          {/* Fresh water splash droplets */}
          <circle cx="105" cy="140" r="10" fill="#fff" strokeWidth={2.5} />
          <circle cx="90" cy="170" r="7" fill="#fff" strokeWidth={2.5} />
          <circle cx="295" cy="150" r="9" fill="#fff" strokeWidth={2.5} />
          <circle cx="310" cy="180" r="12" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "tying-sneaker-shoelaces-coloring-page":
      return (
        <g>
          {/* Big sporty running sneaker */}
          <path d="M70 230 C70 170, 140 160, 200 180 L250 200 C300 210, 350 240, 360 280 L70 280 Z" fill="#fff" strokeWidth={4} />
          {/* Thick rubber sneaker sole & tread */}
          <rect x="60" y="280" width="310" height="40" rx="10" fill="#fff" strokeWidth={4} />
          <line x1="60" y1="300" x2="370" y2="300" strokeWidth={2.5} />
          {/* Sneaker collar and tongue */}
          <path d="M120 170 Q160 140 200 175" fill="none" strokeWidth={3.5} />
          <ellipse cx="115" cy="175" rx="20" ry="12" fill="#fff" strokeWidth={3} />
          {/* Eyelets with criss-cross laces */}
          <circle cx="160" cy="190" r="4" fill="#111827" />
          <circle cx="190" cy="200" r="4" fill="#111827" />
          <circle cx="220" cy="210" r="4" fill="#111827" />
          <line x1="160" y1="190" x2="190" y2="200" strokeWidth={3} stroke="#111827" />
          <line x1="190" y1="200" x2="220" y2="210" strokeWidth={3} stroke="#111827" />
          {/* Tied shoelace loops and bow on top */}
          <ellipse cx="140" cy="150" rx="25" ry="12" fill="#fff" strokeWidth={3.5} transform="rotate(-30 140 150)" />
          <ellipse cx="190" cy="150" rx="25" ry="12" fill="#fff" strokeWidth={3.5} transform="rotate(30 190 150)" />
          <circle cx="165" cy="165" r="8" fill="#111827" />
          <path d="M165 170 Q145 200 135 220" fill="none" strokeWidth={3.5} strokeLinecap="round" />
          <path d="M165 170 Q185 200 195 220" fill="none" strokeWidth={3.5} strokeLinecap="round" />
        </g>
      );

    case "tucking-in-for-sweet-dreams-coloring-page":
    case "cozy-tuck-in-bedtime-sleeping-child-coloring-page":
      return (
        <g>
          {/* Bed wooden headboard */}
          <rect x="60" y="80" width="280" height="80" rx="10" fill="#fff" strokeWidth={4} />
          <line x1="100" y1="80" x2="100" y2="160" strokeWidth={2.5} />
          <line x1="200" y1="80" x2="200" y2="160" strokeWidth={2.5} />
          <line x1="300" y1="80" x2="300" y2="160" strokeWidth={2.5} />
          {/* Puffy sleeping pillow */}
          <rect x="100" y="140" width="140" height="55" rx="20" fill="#fff" strokeWidth={3.5} />
          {/* Sleeping child face */}
          <circle cx="160" cy="165" r="28" fill="#fff" strokeWidth={3} />
          <path d="M150 165 Q158 175 166 165" fill="none" strokeWidth={2.5} />
          <path d="M172 165 Q180 175 188 165" fill="none" strokeWidth={2.5} />
          {/* Little teddy bear tucked in */}
          <circle cx="255" cy="190" r="20" fill="#fff" strokeWidth={3} />
          <circle cx="240" cy="175" r="7" fill="#fff" strokeWidth={2} />
          <circle cx="270" cy="175" r="7" fill="#fff" strokeWidth={2} />
          {/* Quilt blanket */}
          <rect x="80" y="195" width="240" height="150" rx="15" fill="#fff" strokeWidth={4} />
          <line x1="140" y1="195" x2="140" y2="345" strokeWidth={2} strokeDasharray="6 6" />
          <line x1="200" y1="195" x2="200" y2="345" strokeWidth={2} strokeDasharray="6 6" />
          <line x1="260" y1="195" x2="260" y2="345" strokeWidth={2} strokeDasharray="6 6" />
        </g>
      );

    case "riding-bicycle-with-helmet-coloring-page":
    case "fastening-bicycle-safety-helmet-securely-coloring-page":
      return (
        <g>
          {/* Aerodynamic bicycle safety helmet */}
          <path d="M120 170 C100 120, 160 70, 280 80 C320 90, 340 120, 320 170 Z" fill="#fff" strokeWidth={4} />
          <path d="M160 110 Q200 100 240 110 Q200 125 160 110 Z" fill="#111827" />
          <path d="M180 135 Q220 125 260 135 Q220 150 180 135 Z" fill="#111827" />
          {/* Smiling child head */}
          <circle cx="210" cy="200" r="45" fill="#fff" strokeWidth={3.5} />
          <circle cx="198" cy="195" r="5" fill="#111827" />
          <circle cx="222" cy="195" r="5" fill="#111827" />
          <path d="M200 215 Q210 225 220 215" fill="none" strokeWidth={2.5} />
          {/* Chin strap & buckle */}
          <line x1="165" y1="160" x2="200" y2="250" strokeWidth={3.5} stroke="#111827" />
          <line x1="255" y1="160" x2="210" y2="250" strokeWidth={3.5} stroke="#111827" />
          <rect x="195" y="245" width="20" height="15" rx="3" fill="#111827" />
          {/* Bicycle handlebars */}
          <line x1="80" y1="330" x2="340" y2="330" strokeWidth={6} stroke="#111827" strokeLinecap="round" />
          <circle cx="210" cy="330" r="14" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "packing-healthy-bento-lunchbox-coloring-page":
      return (
        <g>
          {/* Open Bento Lunchbox container */}
          <rect x="60" y="90" width="280" height="230" rx="20" fill="#fff" strokeWidth={4} />
          {/* Internal compartment dividers */}
          <line x1="180" y1="90" x2="180" y2="320" strokeWidth={3.5} stroke="#111827" />
          <line x1="180" y1="200" x2="340" y2="200" strokeWidth={3.5} stroke="#111827" />
          {/* Left large section: Cut triangular sandwich */}
          <polygon points="80,120 160,120 160,200" fill="#fff" strokeWidth={3} />
          <polygon points="80,220 160,220 160,300" fill="#fff" strokeWidth={3} />
          <line x1="100" y1="150" x2="150" y2="150" strokeWidth={2} stroke="#111827" />
          {/* Top right section: Fresh berry cluster */}
          <circle cx="220" cy="140" r="12" fill="#fff" strokeWidth={2.5} />
          <circle cx="245" cy="135" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="230" cy="165" r="12" fill="#fff" strokeWidth={2.5} />
          <circle cx="260" cy="160" r="12" fill="#fff" strokeWidth={2.5} />
          {/* Bottom right section: Sliced crunchy cucumber and cherry tomatoes */}
          <circle cx="225" cy="255" r="16" fill="#fff" strokeWidth={2.5} />
          <circle cx="270" cy="255" r="16" fill="#fff" strokeWidth={2.5} />
          <circle cx="248" cy="285" r="14" fill="#fff" strokeWidth={2.5} />
          {/* Bento box latches on exterior sides */}
          <rect x="45" y="180" width="16" height="40" rx="4" fill="#111827" />
          <rect x="339" y="180" width="16" height="40" rx="4" fill="#111827" />
        </g>
      );

    case "tidying-up-toy-chest-coloring-page":
      return (
        <g>
          {/* Open wooden toy chest trunk */}
          <rect x="70" y="180" width="260" height="150" rx="10" fill="#fff" strokeWidth={4} />
          {/* Hinged lid propped open */}
          <polygon points="70,180 80,70 330,70 330,180" fill="#fff" strokeWidth={4} />
          <line x1="100" y1="180" x2="105" y2="70" strokeWidth={3} />
          {/* Wooden plank slats */}
          <line x1="70" y1="240" x2="330" y2="240" strokeWidth={2.5} />
          {/* Chest lock hasp */}
          <rect x="185" y="170" width="30" height="35" rx="4" fill="#111827" />
          {/* Toys neatly inside and beside chest */}
          {/* Cute teddy bear sitting inside */}
          <circle cx="150" cy="150" r="25" fill="#fff" strokeWidth={3.5} />
          <circle cx="130" cy="130" r="8" fill="#fff" strokeWidth={2.5} />
          <circle cx="170" cy="130" r="8" fill="#fff" strokeWidth={2.5} />
          <circle cx="142" cy="148" r="3.5" fill="#111827" />
          <circle cx="158" cy="148" r="3.5" fill="#111827" />
          {/* Striped bouncy ball on floor */}
          <circle cx="280" cy="290" r="28" fill="#fff" strokeWidth={3.5} />
          <path d="M260 270 Q280 290 300 270" fill="none" strokeWidth={2.5} />
          <path d="M260 310 Q280 290 300 310" fill="none" strokeWidth={2.5} />
          {/* Alphabet wooden block */}
          <rect x="90" y="290" width="35" height="35" rx="3" fill="#fff" strokeWidth={2.5} />
          <text x="100" y="315" fontSize="18" fontWeight="bold" fill="#111827" stroke="none">A</text>
        </g>
      );

    case "morning-yoga-tree-stretch-coloring-page":
    case "stretching-morning-yoga-pose-routine-coloring-page":
      return (
        <g>
          {/* Morning sun with friendly face rising behind */}
          <circle cx="200" cy="85" r="35" fill="#fff" strokeWidth={3.5} />
          <line x1="200" y1="45" x2="200" y2="30" strokeWidth={3} />
          <line x1="160" y1="65" x2="145" y2="55" strokeWidth={3} />
          <line x1="240" y1="65" x2="255" y2="55" strokeWidth={3} />
          {/* Child standing in balancing Yoga Tree Pose */}
          <circle cx="200" cy="140" r="26" fill="#fff" strokeWidth={3.5} />
          <path d="M192 138 Q196 144 200 138" fill="none" strokeWidth={2} />
          <path d="M204 138 Q208 144 212 138" fill="none" strokeWidth={2} />
          <path d="M196 150 Q200 156 204 150" fill="none" strokeWidth={2} />
          {/* Arms raised overhead in prayer hands */}
          <path d="M185 165 C160 120, 190 90, 198 90" strokeWidth={3.5} stroke="#111827" fill="none" />
          <path d="M215 165 C240 120, 210 90, 202 90" strokeWidth={3.5} stroke="#111827" fill="none" />
          {/* Torso */}
          <polygon points="188,165 212,165 215,240 185,240" fill="#fff" strokeWidth={3.5} />
          {/* Standing leg */}
          <rect x="193" y="240" width="14" height="110" rx="3" fill="#111827" />
          {/* Bent tree pose leg */}
          <path d="M193 240 L150 280 L193 290" fill="none" strokeWidth={4.5} stroke="#111827" />
          {/* Yoga mat on floor */}
          <rect x="70" y="350" width="260" height="15" rx="6" fill="#fff" strokeWidth={3} />
        </g>
      );

    default:
      return null;
  }
}
