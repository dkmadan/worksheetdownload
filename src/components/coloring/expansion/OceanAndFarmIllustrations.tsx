import React from "react";

export function renderOceanAndFarm(slug: string): React.ReactNode | null {
  switch (slug) {
    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 1: OCEAN & MARINE LIFE
    // ══════════════════════════════════════════════════════════════════
    case "blue-whale-spouting-water-coloring-page":
      return (
        <g>
          {/* Gentle water waves */}
          <path d="M20 330 Q60 305 110 330 T200 330 T290 330 T380 330" fill="none" strokeWidth={3.5} />
          {/* Whale body */}
          <path d="M50 260 C35 240, 40 190, 80 160 C140 120, 260 120, 310 180 C340 220, 335 255, 290 275 C230 295, 100 295, 50 260 Z" fill="#fff" strokeWidth={3.5} />
          {/* Belly grooves */}
          <path d="M120 280 Q200 285 270 265" fill="none" strokeWidth={2.5} />
          <path d="M140 265 Q210 270 280 250" fill="none" strokeWidth={2.5} />
          {/* Flipper */}
          <path d="M160 230 C185 255, 205 285, 180 295 C165 290, 150 265, 160 230 Z" fill="#fff" strokeWidth={3} />
          {/* Tail flukes */}
          <path d="M305 185 C330 150, 370 130, 385 140 C370 165, 350 195, 340 220 C360 225, 385 245, 375 260 C350 255, 325 230, 305 200" fill="#fff" strokeWidth={3} />
          {/* Eye */}
          <ellipse cx="105" cy="195" rx="8" ry="11" fill="#111827" />
          <circle cx="102" cy="191" r="3" fill="#fff" stroke="none" />
          {/* Smile */}
          <path d="M75 220 Q100 235 125 220" fill="none" strokeWidth={3} />
          {/* Water fountain spout */}
          <path d="M140 135 Q115 70 75 55 Q120 100 135 130" fill="#fff" strokeWidth={2.5} />
          <path d="M145 130 Q150 50 145 30 Q160 65 152 130" fill="#fff" strokeWidth={2.5} />
          <path d="M155 135 Q175 70 215 55 Q175 100 160 130" fill="#fff" strokeWidth={2.5} />
          <circle cx="68" cy="50" r="5" fill="#fff" strokeWidth={2} />
          <circle cx="145" cy="22" r="6" fill="#fff" strokeWidth={2} />
          <circle cx="222" cy="50" r="5" fill="#fff" strokeWidth={2} />
        </g>
      );

    case "sea-turtle-swimming-coloring-page":
      return (
        <g>
          {/* Turtle carapace / shell */}
          <ellipse cx="200" cy="205" rx="90" ry="72" fill="#fff" strokeWidth={4} />
          {/* Hexagonal scute pattern */}
          <polygon points="200,160 230,180 230,225 200,245 170,225 170,180" fill="#fff" strokeWidth={2.5} />
          <line x1="200" y1="160" x2="200" y2="135" strokeWidth={2.5} />
          <line x1="230" y1="180" x2="270" y2="165" strokeWidth={2.5} />
          <line x1="230" y1="225" x2="275" y2="235" strokeWidth={2.5} />
          <line x1="200" y1="245" x2="200" y2="275" strokeWidth={2.5} />
          <line x1="170" y1="225" x2="125" y2="235" strokeWidth={2.5} />
          <line x1="170" y1="180" x2="130" y2="165" strokeWidth={2.5} />
          {/* Head */}
          <ellipse cx="200" cy="105" rx="32" ry="40" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="185" cy="98" rx="6" ry="8" fill="#111827" />
          <circle cx="183" cy="95" r="2" fill="#fff" stroke="none" />
          <ellipse cx="215" cy="98" rx="6" ry="8" fill="#111827" />
          <circle cx="213" cy="95" r="2" fill="#fff" stroke="none" />
          <path d="M190 125 Q200 135 210 125" fill="none" strokeWidth={2.5} />
          {/* Large front flippers */}
          <path d="M130 170 C85 135, 45 155, 38 195 C60 220, 115 210, 125 195" fill="#fff" strokeWidth={3.5} />
          <path d="M270 170 C315 135, 355 155, 362 195 C340 220, 285 210, 275 195" fill="#fff" strokeWidth={3.5} />
          {/* Hind flippers */}
          <path d="M140 260 C110 295, 100 325, 130 335 C150 330, 160 305, 155 280" fill="#fff" strokeWidth={3} />
          <path d="M260 260 C290 295, 300 325, 270 335 C250 330, 240 305, 245 280" fill="#fff" strokeWidth={3} />
          {/* Little tail */}
          <polygon points="195,275 200,295 205,275" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "octopus-with-seashell-coloring-sheet":
      return (
        <g>
          {/* Big round octopus head */}
          <ellipse cx="200" cy="140" rx="85" ry="90" fill="#fff" strokeWidth={4} />
          {/* Cute expressive eyes */}
          <ellipse cx="165" cy="155" rx="14" ry="18" fill="#111827" />
          <circle cx="160" cy="148" r="4.5" fill="#fff" stroke="none" />
          <circle cx="170" cy="162" r="2" fill="#fff" stroke="none" />
          <ellipse cx="235" cy="155" rx="14" ry="18" fill="#111827" />
          <circle cx="230" cy="148" r="4.5" fill="#fff" stroke="none" />
          <circle cx="240" cy="162" r="2" fill="#fff" stroke="none" />
          {/* Smile */}
          <path d="M185 190 Q200 208 215 190" fill="none" strokeWidth={3} />
          {/* Curled tentacles */}
          <path d="M130 215 Q80 250 60 310 Q85 335 110 300 Q130 260 140 230" fill="#fff" strokeWidth={3} />
          <path d="M155 230 Q120 270 105 330 Q135 350 155 305 Q165 260 165 235" fill="#fff" strokeWidth={3} />
          <path d="M245 230 Q280 270 295 330 Q265 350 245 305 Q235 260 235 235" fill="#fff" strokeWidth={3} />
          <path d="M270 215 Q320 250 340 310 Q315 335 290 300 Q270 260 260 230" fill="#fff" strokeWidth={3} />
          {/* Center tentacles holding seashell */}
          <path d="M175 235 Q175 285 160 315" fill="none" strokeWidth={3} />
          <path d="M225 235 Q225 285 240 315" fill="none" strokeWidth={3} />
          {/* Scallop seashell */}
          <path d="M170 320 C165 355, 235 355, 230 320 Q200 305 170 320 Z" fill="#fff" strokeWidth={3} />
          <line x1="200" y1="312" x2="200" y2="350" strokeWidth={2} />
          <line x1="200" y1="312" x2="182" y2="345" strokeWidth={2} />
          <line x1="200" y1="312" x2="218" y2="345" strokeWidth={2} />
        </g>
      );

    case "seahorse-on-coral-branch-coloring-page":
      return (
        <g>
          {/* Coral branch */}
          <path d="M90 380 Q130 300 120 200 Q110 130 80 90" fill="none" strokeWidth={8} stroke="#111827" />
          <path d="M120 250 Q160 220 180 180" fill="none" strokeWidth={6} stroke="#111827" />
          <path d="M120 310 Q70 290 50 250" fill="none" strokeWidth={5} stroke="#111827" />
          {/* Seahorse head */}
          <circle cx="230" cy="95" r="32" fill="#fff" strokeWidth={3.5} />
          {/* Long snout */}
          <path d="M200 95 L145 105 L145 118 L200 112 Z" fill="#fff" strokeWidth={3} />
          {/* Crown crest */}
          <polygon points="235,65 245,45 255,62 265,48 270,68" fill="#fff" strokeWidth={2.5} />
          {/* Eye */}
          <ellipse cx="225" cy="90" rx="7" ry="10" fill="#111827" />
          <circle cx="223" cy="87" r="2.5" fill="#fff" stroke="none" />
          {/* Curved seahorse body */}
          <path d="M255 110 C285 150, 290 215, 240 255 C200 285, 205 330, 240 345 C260 350, 275 335, 265 320 C255 310, 240 315, 240 325" fill="#fff" strokeWidth={4} />
          {/* Belly ridges */}
          <path d="M245 140 Q275 165 260 190" fill="none" strokeWidth={2.5} />
          <path d="M235 170 Q270 195 250 220" fill="none" strokeWidth={2.5} />
          <path d="M225 200 Q255 225 235 245" fill="none" strokeWidth={2.5} />
          {/* Dorsal fin */}
          <path d="M275 170 C300 160, 305 200, 280 210 Z" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "great-white-shark-swimming-coloring-page":
      return (
        <g>
          {/* Shark body */}
          <path d="M30 210 C70 145, 220 125, 330 175 C370 195, 370 215, 320 235 C230 270, 80 270, 30 210 Z" fill="#fff" strokeWidth={4} />
          {/* Sharp dorsal fin */}
          <path d="M190 142 C195 85, 215 65, 255 80 C245 110, 240 130, 245 145 Z" fill="#fff" strokeWidth={3.5} />
          {/* Pectoral fin */}
          <path d="M135 245 C130 290, 115 320, 155 320 C175 305, 185 275, 185 245 Z" fill="#fff" strokeWidth={3} />
          {/* Heterocercal crescent tail */}
          <path d="M325 180 C360 135, 395 105, 395 125 C380 165, 355 195, 355 205 C365 225, 395 255, 385 270 C365 265, 340 235, 325 215 Z" fill="#fff" strokeWidth={3.5} />
          {/* Shark snout & open toothy smile */}
          <path d="M50 225 Q85 250 120 225" fill="none" strokeWidth={3} />
          <polygon points="75,230 82,238 90,230" fill="#fff" strokeWidth={2} />
          <polygon points="90,230 98,239 105,230" fill="#fff" strokeWidth={2} />
          {/* Eye */}
          <ellipse cx="80" cy="190" rx="7" ry="10" fill="#111827" />
          <circle cx="78" cy="187" r="2.5" fill="#fff" stroke="none" />
          {/* Gill slits */}
          <line x1="140" y1="185" x2="140" y2="215" strokeWidth={2.5} />
          <line x1="150" y1="187" x2="150" y2="213" strokeWidth={2.5} />
          <line x1="160" y1="190" x2="160" y2="210" strokeWidth={2.5} />
        </g>
      );

    case "bell-jellyfish-floating-coloring-page":
      return (
        <g>
          {/* Umbrella dome bell */}
          <path d="M90 190 C85 90, 315 90, 310 190 C290 215, 270 190, 240 210 C210 190, 190 215, 160 190 C130 215, 110 190, 90 190 Z" fill="#fff" strokeWidth={4} />
          {/* Internal bell arc */}
          <path d="M120 170 Q200 130 280 170" fill="none" strokeWidth={2.5} strokeDasharray="6 6" />
          {/* Friendly eyes on jellyfish bell */}
          <circle cx="165" cy="150" r="10" fill="#111827" />
          <circle cx="162" cy="146" r="3" fill="#fff" stroke="none" />
          <circle cx="235" cy="150" r="10" fill="#111827" />
          <circle cx="232" cy="146" r="3" fill="#fff" stroke="none" />
          <path d="M185 168 Q200 180 215 168" fill="none" strokeWidth={2.5} />
          {/* Wavy oral arms & tentacles */}
          <path d="M120 205 Q90 270 130 330 T110 380" fill="none" strokeWidth={3} />
          <path d="M160 215 Q140 280 180 340 T150 390" fill="none" strokeWidth={3.5} />
          <path d="M200 210 Q220 275 190 335 T210 390" fill="none" strokeWidth={4} />
          <path d="M240 215 Q260 280 220 340 T250 390" fill="none" strokeWidth={3.5} />
          <path d="M280 205 Q310 270 270 330 T290 380" fill="none" strokeWidth={3} />
          {/* Water bubbles */}
          <circle cx="70" cy="120" r="12" fill="#fff" strokeWidth={2.5} />
          <circle cx="330" cy="100" r="15" fill="#fff" strokeWidth={2.5} />
          <circle cx="340" cy="150" r="8" fill="#fff" strokeWidth={2} />
        </g>
      );

    case "hermit-crab-in-spiral-shell-coloring-page":
      return (
        <g>
          {/* Spiral gastropod shell */}
          <path d="M120 220 C70 180, 80 100, 160 80 C240 60, 310 110, 310 180 C310 230, 270 270, 210 270 C160 270, 120 250, 120 220 Z" fill="#fff" strokeWidth={4} />
          <path d="M150 170 C130 140, 150 110, 200 105 C250 100, 280 130, 270 170" fill="none" strokeWidth={3} />
          <path d="M180 160 C170 145, 185 130, 215 130 C245 130, 250 150, 240 165" fill="none" strokeWidth={2.5} />
          {/* Crab body peeking out */}
          <ellipse cx="230" cy="270" rx="45" ry="30" fill="#fff" strokeWidth={3.5} />
          {/* Eye stalks */}
          <line x1="215" y1="245" x2="210" y2="215" strokeWidth={3.5} />
          <circle cx="210" cy="210" r="10" fill="#fff" strokeWidth={3} />
          <circle cx="210" cy="210" r="5" fill="#111827" />
          <line x1="245" y1="245" x2="250" y2="215" strokeWidth={3.5} />
          <circle cx="250" cy="210" r="10" fill="#fff" strokeWidth={3} />
          <circle cx="250" cy="210" r="5" fill="#111827" />
          {/* Big pincer claw */}
          <path d="M260 270 C300 250, 335 270, 340 300 C330 325, 290 320, 265 295 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M310 270 C340 260, 355 285, 335 300" fill="none" strokeWidth={3} />
          {/* Small claw & walking legs */}
          <path d="M190 275 C165 265, 150 280, 160 300 C175 315, 195 295, 190 275 Z" fill="#fff" strokeWidth={3} />
          <path d="M210 295 Q190 330 180 360" fill="none" strokeWidth={3.5} />
          <path d="M235 300 Q230 340 225 370" fill="none" strokeWidth={3.5} />
          <path d="M260 295 Q270 335 280 365" fill="none" strokeWidth={3.5} />
        </g>
      );

    case "manta-ray-gliding-coloring-page":
      return (
        <g>
          {/* Diamond winged body */}
          <path d="M200 70 C240 120, 360 170, 385 200 C360 230, 270 240, 240 250 C220 280, 200 310, 200 310 C200 310, 180 280, 160 250 C130 240, 40 230, 15 200 C40 170, 160 120, 200 70 Z" fill="#fff" strokeWidth={4} />
          {/* Cephalic horns at front */}
          <path d="M180 75 C170 50, 185 40, 195 65" fill="none" strokeWidth={3.5} />
          <path d="M220 75 C230 50, 215 40, 205 65" fill="none" strokeWidth={3.5} />
          {/* Eyes on sides */}
          <circle cx="160" cy="110" r="7" fill="#111827" />
          <circle cx="240" cy="110" r="7" fill="#111827" />
          {/* Decorative dorsal pattern */}
          <path d="M170 140 Q200 120 230 140" fill="none" strokeWidth={2.5} />
          <path d="M160 170 Q200 150 240 170" fill="none" strokeWidth={2.5} />
          <path d="M175 200 Q200 185 225 200" fill="none" strokeWidth={2.5} />
          {/* Long whip tail */}
          <path d="M200 310 Q210 350 195 385" fill="none" strokeWidth={3.5} />
        </g>
      );

    case "starfish-and-clam-shell-coloring-page":
      return (
        <g>
          {/* 5-pointed starfish */}
          <path d="M140 70 L158 120 L210 125 L170 160 L182 210 L135 185 L90 215 L100 160 L60 125 L115 120 Z" fill="#fff" strokeWidth={3.5} />
          {/* Starfish smiling face */}
          <circle cx="125" cy="140" r="6" fill="#111827" />
          <circle cx="145" cy="140" r="6" fill="#111827" />
          <path d="M128 155 Q135 162 142 155" fill="none" strokeWidth={2.5} />
          {/* Little texture dots on starfish arms */}
          <circle cx="138" cy="95" r="3" fill="#111827" />
          <circle cx="185" cy="135" r="3" fill="#111827" />
          <circle cx="165" cy="185" r="3" fill="#111827" />
          <circle cx="105" cy="185" r="3" fill="#111827" />
          <circle cx="85" cy="135" r="3" fill="#111827" />
          {/* Open clam shell */}
          <path d="M210 320 C180 250, 330 220, 340 300 C340 340, 240 360, 210 320 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M215 320 C230 270, 340 270, 325 320" fill="none" strokeWidth={2.5} />
          {/* Rib lines on clam */}
          <line x1="215" y1="320" x2="260" y2="245" strokeWidth={2} />
          <line x1="215" y1="320" x2="295" y2="255" strokeWidth={2} />
          <line x1="215" y1="320" x2="320" y2="280" strokeWidth={2} />
          {/* Shiny round pearl */}
          <circle cx="270" cy="310" r="22" fill="#fff" strokeWidth={3} />
          <path d="M260 300 Q270 295 278 302" fill="none" strokeWidth={2} />
        </g>
      );

    case "sea-otter-floating-coloring-page":
      return (
        <g>
          {/* Water ripples */}
          <path d="M40 260 Q120 240 200 260 T360 260" fill="none" strokeWidth={3} />
          <path d="M60 290 Q140 270 220 290 T340 290" fill="none" strokeWidth={3} />
          {/* Floating otter body */}
          <ellipse cx="200" cy="220" rx="100" ry="50" fill="#fff" strokeWidth={4} />
          {/* Otter head resting back */}
          <circle cx="115" cy="180" r="42" fill="#fff" strokeWidth={3.5} />
          {/* Cute rounded ears */}
          <circle cx="90" cy="150" r="12" fill="#fff" strokeWidth={3} />
          <circle cx="135" cy="145" r="12" fill="#fff" strokeWidth={3} />
          {/* Face */}
          <circle cx="102" cy="175" r="5" fill="#111827" />
          <circle cx="122" cy="175" r="5" fill="#111827" />
          <polygon points="112,185 106,192 118,192" fill="#111827" />
          <path d="M106 195 Q112 202 118 195" fill="none" strokeWidth={2} />
          {/* Whiskers */}
          <line x1="95" y1="190" x2="80" y2="188" strokeWidth={2} />
          <line x1="95" y1="194" x2="80" y2="198" strokeWidth={2} />
          <line x1="125" y1="190" x2="140" y2="188" strokeWidth={2} />
          <line x1="125" y1="194" x2="140" y2="198" strokeWidth={2} />
          {/* Paws resting on chest holding clam */}
          <ellipse cx="198" cy="205" rx="15" ry="12" fill="#fff" strokeWidth={2.5} />
          {/* Hind flipper feet & tail */}
          <ellipse cx="285" cy="215" rx="20" ry="16" fill="#fff" strokeWidth={3} />
          <path d="M290 230 C330 230, 360 215, 350 200" fill="none" strokeWidth={4} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 2: FARM LIFE & BARNYARD
    // ══════════════════════════════════════════════════════════════════
    case "dairy-cow-grazing-coloring-page":
    case "dairy-cow-grazing-pasture-coloring-page":
      return (
        <g>
          {/* Cow body */}
          <rect x="120" y="150" width="190" height="130" rx="40" fill="#fff" strokeWidth={4} />
          {/* Cow spots */}
          <path d="M160 150 Q185 190 220 170 Q210 150 160 150 Z" fill="#111827" />
          <path d="M240 210 Q275 235 285 200 Q305 240 265 260 Z" fill="#111827" />
          {/* Udder */}
          <path d="M220 280 Q240 300 260 280" fill="#fff" strokeWidth={3} />
          {/* Legs */}
          <rect x="140" y="280" width="22" height="65" rx="5" fill="#fff" strokeWidth={3} />
          <rect x="180" y="280" width="22" height="65" rx="5" fill="#fff" strokeWidth={3} />
          <rect x="240" y="280" width="22" height="65" rx="5" fill="#fff" strokeWidth={3} />
          <rect x="275" y="280" width="22" height="65" rx="5" fill="#fff" strokeWidth={3} />
          {/* Hooves */}
          <rect x="140" y="330" width="22" height="15" fill="#111827" />
          <rect x="180" y="330" width="22" height="15" fill="#111827" />
          <rect x="240" y="330" width="22" height="15" fill="#111827" />
          <rect x="275" y="330" width="22" height="15" fill="#111827" />
          {/* Head */}
          <circle cx="100" cy="140" r="45" fill="#fff" strokeWidth={3.5} />
          {/* Horns & Ears */}
          <polygon points="85,100 80,75 95,95" fill="#fff" strokeWidth={2.5} />
          <polygon points="115,100 120,75 105,95" fill="#fff" strokeWidth={2.5} />
          <ellipse cx="65" cy="130" rx="18" ry="10" fill="#fff" strokeWidth={2.5} transform="rotate(-20 65 130)" />
          <ellipse cx="135" cy="130" rx="18" ry="10" fill="#fff" strokeWidth={2.5} transform="rotate(20 135 130)" />
          {/* Muzzle */}
          <ellipse cx="85" cy="165" rx="35" ry="24" fill="#fff" strokeWidth={3} />
          <ellipse cx="75" cy="165" rx="5" ry="7" fill="#111827" />
          <ellipse cx="95" cy="165" rx="5" ry="7" fill="#111827" />
          <path d="M75 178 Q85 186 95 178" fill="none" strokeWidth={2.5} />
          {/* Eyes */}
          <circle cx="102" cy="125" r="7" fill="#111827" />
          {/* Bell collar */}
          <path d="M100 185 L120 205" strokeWidth={4} />
          <polygon points="115,205 125,205 128,220 112,220" fill="#fff" strokeWidth={2.5} />
          {/* Tail */}
          <path d="M310 180 Q340 210 330 250" fill="none" strokeWidth={3} />
          <circle cx="330" cy="255" r="7" fill="#111827" />
        </g>
      );

    case "muddy-piglet-playing-coloring-page":
    case "friendly-muddy-pig-coloring-page":
      return (
        <g>
          {/* Mud puddle */}
          <ellipse cx="200" cy="330" rx="160" ry="35" fill="#fff" strokeWidth={3} strokeDasharray="10 5" />
          {/* Round pig body */}
          <ellipse cx="230" cy="210" rx="95" ry="80" fill="#fff" strokeWidth={4} />
          {/* Round head */}
          <circle cx="125" cy="170" r="55" fill="#fff" strokeWidth={3.5} />
          {/* Triangular floppy ears */}
          <polygon points="105,120 80,75 130,100" fill="#fff" strokeWidth={3} />
          <polygon points="150,120 175,75 135,100" fill="#fff" strokeWidth={3} />
          {/* Big snout */}
          <ellipse cx="95" cy="185" rx="26" ry="18" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="88" cy="185" rx="5" ry="7" fill="#111827" />
          <ellipse cx="102" cy="185" rx="5" ry="7" fill="#111827" />
          {/* Happy eyes */}
          <circle cx="120" cy="150" r="7" fill="#111827" />
          <circle cx="118" cy="147" r="2" fill="#fff" stroke="none" />
          {/* Big smile */}
          <path d="M90 212 Q110 225 130 212" fill="none" strokeWidth={2.5} />
          {/* Trotters / legs */}
          <rect x="165" y="275" width="24" height="45" rx="6" fill="#fff" strokeWidth={3} />
          <rect x="205" y="275" width="24" height="45" rx="6" fill="#fff" strokeWidth={3} />
          <rect x="260" y="275" width="24" height="45" rx="6" fill="#fff" strokeWidth={3} />
          <rect x="295" y="275" width="24" height="45" rx="6" fill="#fff" strokeWidth={3} />
          {/* Curly tail */}
          <path d="M325 190 Q360 175 350 205 Q340 225 365 215" fill="none" strokeWidth={4} />
        </g>
      );

    case "farm-tractor-with-hay-trailer-coloring-sheet":
    case "farm-tractor-plowing-field-coloring-page":
      return (
        <g>
          {/* Giant rear wheel */}
          <circle cx="120" cy="265" r="60" fill="#fff" strokeWidth={4} />
          <circle cx="120" cy="265" r="32" fill="#fff" strokeWidth={3} />
          <circle cx="120" cy="265" r="14" fill="#111827" />
          {/* Wheel treads */}
          <line x1="120" y1="205" x2="120" y2="233" strokeWidth={3} />
          <line x1="120" y1="297" x2="120" y2="325" strokeWidth={3} />
          <line x1="60" y1="265" x2="88" y2="265" strokeWidth={3} />
          <line x1="152" y1="265" x2="180" y2="265" strokeWidth={3} />
          {/* Small front wheel */}
          <circle cx="300" cy="285" r="38" fill="#fff" strokeWidth={4} />
          <circle cx="300" cy="285" r="18" fill="#fff" strokeWidth={3} />
          <circle cx="300" cy="285" r="8" fill="#111827" />
          {/* Chassis & Hood */}
          <path d="M165 200 L320 200 L325 270 L165 270 Z" fill="#fff" strokeWidth={3.5} />
          <line x1="320" y1="215" x2="280" y2="215" strokeWidth={2.5} />
          <line x1="320" y1="230" x2="280" y2="230" strokeWidth={2.5} />
          {/* Cab with roof and steering wheel */}
          <path d="M75 130 L165 130 L165 230 L75 230 Z" fill="#fff" strokeWidth={3.5} />
          <rect x="90" y="145" width="55" height="55" rx="5" fill="#fff" strokeWidth={2.5} />
          {/* Exhaust stack with smoke puffs */}
          <rect x="270" y="130" width="14" height="70" rx="3" fill="#fff" strokeWidth={3} />
          <circle cx="277" cy="115" r="10" fill="#fff" strokeWidth={2} />
          <circle cx="285" cy="95" r="14" fill="#fff" strokeWidth={2} />
        </g>
      );

    case "mother-hen-and-chicks-coloring-page":
    case "crowing-rooster-on-fence-coloring-page":
      return (
        <g>
          {/* Nest of hay straw */}
          <ellipse cx="180" cy="300" rx="100" ry="30" fill="#fff" strokeWidth={3.5} />
          <line x1="90" y1="310" x2="270" y2="305" strokeWidth={2.5} />
          {/* Plump Mother Hen body */}
          <ellipse cx="170" cy="210" rx="70" ry="60" fill="#fff" strokeWidth={4} />
          {/* Wing tucked on side */}
          <path d="M140 200 C120 230, 160 250, 190 230 C200 210, 170 190, 140 200 Z" fill="#fff" strokeWidth={3} />
          {/* Hen head */}
          <circle cx="230" cy="150" r="30" fill="#fff" strokeWidth={3.5} />
          {/* Red comb on head */}
          <path d="M220 125 Q230 105 240 125 Q250 110 255 130" fill="#fff" strokeWidth={2.5} />
          {/* Beak & wattle */}
          <polygon points="255,145 275,152 255,160" fill="#fff" strokeWidth={2.5} />
          <ellipse cx="250" cy="165" rx="6" ry="10" fill="#111827" />
          <circle cx="238" cy="145" r="4.5" fill="#111827" />
          {/* Tail feathers */}
          <polygon points="105,190 70,160 90,210" fill="#fff" strokeWidth={3} />
          {/* Two cute fluffy baby chicks */}
          <ellipse cx="285" cy="290" rx="18" ry="15" fill="#fff" strokeWidth={2.5} />
          <circle cx="295" cy="275" r="11" fill="#fff" strokeWidth={2.5} />
          <circle cx="298" cy="273" r="2.5" fill="#111827" />
          <polygon points="305,275 315,278 305,281" fill="#fff" strokeWidth={1.5} />
          <ellipse cx="325" cy="295" rx="16" ry="13" fill="#fff" strokeWidth={2.5} />
          <circle cx="335" cy="282" r="10" fill="#fff" strokeWidth={2.5} />
          <circle cx="337" cy="280" r="2" fill="#111827" />
          <polygon points="344,282 352,284 344,287" fill="#fff" strokeWidth={1.5} />
        </g>
      );

    case "woolly-lamb-in-meadow-coloring-sheet":
    case "woolly-sheep-and-lamb-coloring-page":
      return (
        <g>
          {/* Big cloud sheep body */}
          <path d="M140 180 C110 170, 90 200, 100 230 C80 250, 95 290, 130 290 C140 320, 180 330, 210 310 C240 330, 280 320, 290 290 C320 290, 335 250, 315 220 C335 190, 310 150, 270 160 C250 130, 200 130, 180 150 C160 130, 120 150, 140 180 Z" fill="#fff" strokeWidth={4} />
          {/* Sheep head */}
          <ellipse cx="120" cy="180" rx="35" ry="45" fill="#fff" strokeWidth={3.5} />
          {/* Floppy ears */}
          <ellipse cx="85" cy="160" rx="20" ry="10" fill="#fff" strokeWidth={2.5} transform="rotate(25 85 160)" />
          <ellipse cx="155" cy="160" rx="20" ry="10" fill="#fff" strokeWidth={2.5} transform="rotate(-25 155 160)" />
          {/* Wool cap on head */}
          <circle cx="110" cy="140" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="130" cy="140" r="14" fill="#fff" strokeWidth={2.5} />
          {/* Face */}
          <ellipse cx="108" cy="175" rx="5" ry="7" fill="#111827" />
          <ellipse cx="132" cy="175" rx="5" ry="7" fill="#111827" />
          <path d="M112 205 Q120 215 128 205" fill="none" strokeWidth={2.5} />
          {/* Sheep legs */}
          <rect x="150" y="300" width="16" height="50" rx="4" fill="#111827" />
          <rect x="180" y="305" width="16" height="50" rx="4" fill="#111827" />
          <rect x="240" y="300" width="16" height="50" rx="4" fill="#111827" />
          <rect x="270" y="305" width="16" height="50" rx="4" fill="#111827" />
        </g>
      );

    case "farm-horse-in-paddock-coloring-page":
    case "playful-farm-horse-trotting-coloring-page":
      return (
        <g>
          {/* Horse body */}
          <ellipse cx="210" cy="200" rx="90" ry="60" fill="#fff" strokeWidth={4} />
          {/* Muscular arched neck */}
          <path d="M140 180 C130 130, 145 90, 175 60 C195 90, 205 130, 220 160" fill="#fff" strokeWidth={3.5} />
          {/* Horse head */}
          <path d="M165 65 L120 95 L115 120 L160 110 Z" fill="#fff" strokeWidth={3.5} />
          {/* Ears */}
          <polygon points="160,65 165,40 175,60" fill="#fff" strokeWidth={2.5} />
          <polygon points="172,65 180,42 188,62" fill="#fff" strokeWidth={2.5} />
          {/* Eye & Muzzle */}
          <circle cx="150" cy="85" r="6" fill="#111827" />
          <circle cx="122" cy="108" r="4" fill="#111827" />
          {/* Flowing mane */}
          <path d="M175 65 Q190 90 180 120 Q200 140 195 170" fill="none" strokeWidth={6} stroke="#111827" />
          {/* Trotting legs */}
          <path d="M145 235 L125 310 L135 340" fill="none" strokeWidth={10} stroke="#fff" />
          <path d="M145 235 L125 310 L135 340" fill="none" strokeWidth={3.5} />
          <rect x="127" y="335" width="18" height="15" fill="#111827" />
          <path d="M185 240 L195 305 L215 330" fill="none" strokeWidth={10} stroke="#fff" />
          <path d="M185 240 L195 305 L215 330" fill="none" strokeWidth={3.5} />
          <rect x="207" y="325" width="18" height="15" fill="#111827" />
          <path d="M260 235 L275 300 L265 335" fill="none" strokeWidth={10} stroke="#fff" />
          <path d="M260 235 L275 300 L265 335" fill="none" strokeWidth={3.5} />
          <rect x="257" y="330" width="18" height="15" fill="#111827" />
          <path d="M285 225 L320 280 L340 310" fill="none" strokeWidth={10} stroke="#fff" />
          <path d="M285 225 L320 280 L340 310" fill="none" strokeWidth={3.5} />
          <rect x="333" y="305" width="18" height="15" fill="#111827" />
          {/* Flowing tail */}
          <path d="M295 180 C340 190, 360 240, 330 280 C345 250, 340 210, 300 195" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "classic-red-barn-and-silo-coloring-page":
      return (
        <g>
          {/* Tall cylindrical Silo */}
          <rect x="60" y="130" width="60" height="210" fill="#fff" strokeWidth={3.5} />
          <path d="M60 130 C60 80, 120 80, 120 130 Z" fill="#fff" strokeWidth={3.5} />
          <line x1="90" y1="90" x2="90" y2="70" strokeWidth={3} />
          {/* Barn main structure */}
          <polygon points="230,80 120,150 120,340 340,340 340,150" fill="#fff" strokeWidth={4} />
          <polygon points="230,80 160,115 120,150 340,150 300,115" fill="#fff" strokeWidth={3.5} />
          <line x1="230" y1="80" x2="230" y2="40" strokeWidth={3} />
          <line x1="215" y1="55" x2="245" y2="55" strokeWidth={2.5} />
          {/* Barn double doors with X cross braces */}
          <rect x="190" y="240" width="80" height="100" fill="#fff" strokeWidth={3.5} />
          <line x1="230" y1="240" x2="230" y2="340" strokeWidth={2.5} />
          <line x1="190" y1="240" x2="230" y2="340" strokeWidth={2} />
          <line x1="230" y1="240" x2="190" y2="340" strokeWidth={2} />
          <line x1="230" y1="240" x2="270" y2="340" strokeWidth={2} />
          <line x1="270" y1="240" x2="230" y2="340" strokeWidth={2} />
          {/* Upper hayloft window */}
          <rect x="210" y="165" width="40" height="40" fill="#fff" strokeWidth={2.5} />
          <line x1="230" y1="165" x2="230" y2="205" strokeWidth={2} />
          <line x1="210" y1="185" x2="250" y2="185" strokeWidth={2} />
        </g>
      );

    case "farm-donkey-with-wagon-coloring-page":
    case "mother-duck-and-ducklings-coloring-page":
      return (
        <g>
          {/* Wooden farm cart wagon */}
          <rect x="210" y="220" width="130" height="60" rx="5" fill="#fff" strokeWidth={3.5} />
          <line x1="210" y1="250" x2="340" y2="250" strokeWidth={2} />
          {/* Cart spoked wheel */}
          <circle cx="275" cy="300" r="30" fill="#fff" strokeWidth={4} />
          <circle cx="275" cy="300" r="8" fill="#111827" />
          <line x1="275" y1="270" x2="275" y2="330" strokeWidth={2} />
          <line x1="245" y1="300" x2="305" y2="300" strokeWidth={2} />
          {/* Donkey body */}
          <rect x="90" y="190" width="110" height="70" rx="20" fill="#fff" strokeWidth={3.5} />
          {/* Donkey legs */}
          <rect x="100" y="260" width="16" height="60" rx="4" fill="#fff" strokeWidth={3} />
          <rect x="130" y="260" width="16" height="60" rx="4" fill="#fff" strokeWidth={3} />
          <rect x="165" y="260" width="16" height="60" rx="4" fill="#fff" strokeWidth={3} />
          <rect x="185" y="260" width="16" height="60" rx="4" fill="#fff" strokeWidth={3} />
          {/* Dark hooves */}
          <rect x="100" y="305" width="16" height="15" fill="#111827" />
          <rect x="130" y="305" width="16" height="15" fill="#111827" />
          <rect x="165" y="305" width="16" height="15" fill="#111827" />
          <rect x="185" y="305" width="16" height="15" fill="#111827" />
          {/* Donkey head & iconic long ears */}
          <polygon points="100,190 70,160 55,185 85,215" fill="#fff" strokeWidth={3} />
          <ellipse cx="75" cy="115" rx="10" ry="35" fill="#fff" strokeWidth={3} transform="rotate(-15 75 115)" />
          <ellipse cx="95" cy="120" rx="10" ry="35" fill="#fff" strokeWidth={3} transform="rotate(10 95 120)" />
          {/* Muzzle */}
          <circle cx="62" cy="180" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="58" cy="177" r="3" fill="#111827" />
          <circle cx="80" cy="165" r="4" fill="#111827" />
          {/* Harness connecting to wagon */}
          <line x1="120" y1="210" x2="210" y2="235" strokeWidth={3} stroke="#111827" />
        </g>
      );

    case "playful-farm-goat-coloring-page":
    case "friendly-billy-goat-coloring-page":
      return (
        <g>
          {/* Rocky boulder */}
          <path d="M100 360 Q150 290 240 300 Q320 310 360 360 Z" fill="#fff" strokeWidth={3.5} />
          {/* Goat body */}
          <ellipse cx="210" cy="210" rx="75" ry="55" fill="#fff" strokeWidth={4} />
          {/* Goat legs */}
          <rect x="160" y="260" width="18" height="50" rx="4" fill="#fff" strokeWidth={3} />
          <rect x="195" y="260" width="18" height="50" rx="4" fill="#fff" strokeWidth={3} />
          <rect x="245" y="260" width="18" height="50" rx="4" fill="#fff" strokeWidth={3} />
          <rect x="275" y="260" width="18" height="50" rx="4" fill="#fff" strokeWidth={3} />
          {/* Cloven hooves */}
          <rect x="160" y="300" width="18" height="12" fill="#111827" />
          <rect x="195" y="300" width="18" height="12" fill="#111827" />
          <rect x="245" y="300" width="18" height="12" fill="#111827" />
          <rect x="275" y="300" width="18" height="12" fill="#111827" />
          {/* Goat head */}
          <polygon points="150,130 110,170 125,200 175,170" fill="#fff" strokeWidth={3.5} />
          {/* Backward curved horns */}
          <path d="M155 130 C165 80, 205 60, 220 70 C205 85, 175 105, 165 130 Z" fill="#fff" strokeWidth={3} />
          <path d="M140 130 C150 85, 185 68, 200 78" fill="none" strokeWidth={2.5} />
          {/* Beard */}
          <polygon points="112,190 100,230 125,200" fill="#fff" strokeWidth={2.5} />
          {/* Eye */}
          <ellipse cx="140" cy="155" rx="5" ry="4" fill="#111827" />
          {/* Ears */}
          <ellipse cx="170" cy="140" rx="16" ry="8" fill="#fff" strokeWidth={2.5} transform="rotate(30 170 140)" />
          {/* Stubby tail pointing up */}
          <polygon points="280,185 305,170 290,200" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "farm-scarecrow-in-cornfield-coloring-page":
    case "happy-garden-scarecrow-coloring-page":
      return (
        <g>
          {/* Wooden pole T-frame */}
          <line x1="200" y1="80" x2="200" y2="370" strokeWidth={8} stroke="#111827" />
          <line x1="60" y1="180" x2="340" y2="180" strokeWidth={7} stroke="#111827" />
          {/* Head (burlap sack) */}
          <circle cx="200" cy="130" r="40" fill="#fff" strokeWidth={3.5} />
          {/* Button eyes */}
          <circle cx="185" cy="125" r="7" fill="#111827" />
          <circle cx="215" cy="125" r="7" fill="#111827" />
          {/* Triangle nose & stitched smile */}
          <polygon points="200,132 195,142 205,142" fill="#fff" strokeWidth={2} />
          <path d="M180 152 Q200 165 220 152" fill="none" strokeWidth={2.5} />
          <line x1="190" y1="150" x2="190" y2="158" strokeWidth={1.5} />
          <line x1="200" y1="152" x2="200" y2="160" strokeWidth={1.5} />
          <line x1="210" y1="150" x2="210" y2="158" strokeWidth={1.5} />
          {/* Straw hat */}
          <ellipse cx="200" cy="95" rx="65" ry="16" fill="#fff" strokeWidth={3.5} />
          <polygon points="170,95 180,50 220,50 230,95" fill="#fff" strokeWidth={3} />
          {/* Perched crow on hat */}
          <ellipse cx="235" cy="40" rx="14" ry="10" fill="#111827" />
          <polygon points="247,38 258,40 247,44" fill="#111827" />
          {/* Flannel shirt */}
          <polygon points="160,170 240,170 250,260 150,260" fill="#fff" strokeWidth={3.5} />
          {/* Overalls with patches */}
          <rect x="170" y="220" width="60" height="90" fill="#fff" strokeWidth={3} />
          <rect x="180" y="270" width="20" height="20" fill="#fff" strokeWidth={2} strokeDasharray="3 3" />
          {/* Straw poking out sleeves and cuffs */}
          <line x1="75" y1="175" x2="50" y2="165" strokeWidth={2.5} />
          <line x1="75" y1="180" x2="45" y2="180" strokeWidth={2.5} />
          <line x1="75" y1="185" x2="50" y2="195" strokeWidth={2.5} />
          <line x1="325" y1="175" x2="350" y2="165" strokeWidth={2.5} />
          <line x1="325" y1="180" x2="355" y2="180" strokeWidth={2.5} />
          <line x1="325" y1="185" x2="350" y2="195" strokeWidth={2.5} />
        </g>
      );

    default:
      return null;
  }
}

