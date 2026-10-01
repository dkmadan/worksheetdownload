import React from "react";

// ExpansionIllustrations provides vector line-art coloring artwork for the 200 new coloring sheets across all 20 categories
export function renderExpansionArtwork(type: string): React.ReactNode | null {
  const norm = (type || "").toLowerCase().trim();

  // ══════════════════════════════════════════════════════════════════
  // 1. OCEAN & MARINE LIFE
  // ══════════════════════════════════════════════════════════════════
  if (norm.includes("whale") || norm.includes("orca") || norm.includes("beluga")) {
    return (
      <g>
        <path d="M20 330 Q60 300 110 330 T200 330 T290 330 T380 330" fill="none" strokeWidth={3.5} />
        <path d="M60 270 C40 250, 40 210, 80 180 C130 140, 260 140, 310 200 C340 230, 340 260, 300 280 C240 300, 110 300, 60 270 Z" fill="#fff" strokeWidth={3.5} />
        <path d="M120 285 Q210 288 280 275" fill="none" strokeWidth={2.5} />
        <path d="M160 250 C180 270, 200 295, 175 305 C160 300, 150 280, 160 250 Z" fill="#fff" strokeWidth={3} />
        <path d="M305 205 C330 170, 365 150, 380 160 C365 180, 345 210, 340 235 C355 240, 375 255, 370 270 C350 265, 325 245, 305 220" fill="#fff" strokeWidth={3} />
        <ellipse cx="115" cy="210" rx="9" ry="12" fill="#111827" />
        <circle cx="112" cy="206" r="3" fill="#fff" stroke="none" />
        <path d="M85 235 Q110 250 135 235" fill="none" strokeWidth={3} />
        <path d="M150 155 Q130 90 90 75 Q130 115 145 150" fill="#fff" strokeWidth={2.5} />
        <path d="M155 150 Q160 70 155 50 Q170 85 162 150" fill="#fff" strokeWidth={2.5} />
        <path d="M165 155 Q185 90 220 75 Q185 115 170 150" fill="#fff" strokeWidth={2.5} />
        <circle cx="80" cy="70" r="6" fill="#fff" strokeWidth={2} />
        <circle cx="155" cy="40" r="7" fill="#fff" strokeWidth={2} />
        <circle cx="230" cy="70" r="6" fill="#fff" strokeWidth={2} />
      </g>
    );
  }

  if (norm.includes("turtle") || norm.includes("tortoise")) {
    return (
      <g>
        <ellipse cx="200" cy="200" rx="95" ry="75" fill="#fff" strokeWidth={4} />
        <polygon points="200,150 235,175 235,225 200,250 165,225 165,175" fill="#fff" strokeWidth={2.5} />
        <line x1="200" y1="150" x2="200" y2="128" strokeWidth={2.5} />
        <line x1="235" y1="175" x2="275" y2="160" strokeWidth={2.5} />
        <line x1="235" y1="225" x2="280" y2="235" strokeWidth={2.5} />
        <line x1="200" y1="250" x2="200" y2="272" strokeWidth={2.5} />
        <line x1="165" y1="225" x2="120" y2="235" strokeWidth={2.5} />
        <line x1="165" y1="175" x2="125" y2="160" strokeWidth={2.5} />
        <ellipse cx="200" cy="95" rx="35" ry="42" fill="#fff" strokeWidth={3.5} />
        <ellipse cx="185" cy="85" rx="7" ry="9" fill="#111827" />
        <circle cx="183" cy="82" r="2.5" fill="#fff" stroke="none" />
        <ellipse cx="215" cy="85" rx="7" ry="9" fill="#111827" />
        <circle cx="213" cy="82" r="2.5" fill="#fff" stroke="none" />
        <path d="M190 115 Q200 125 210 115" fill="none" strokeWidth={2.5} />
        <path d="M125 160 C80 130, 45 150, 40 190 C60 215, 110 205, 120 190" fill="#fff" strokeWidth={3.5} />
        <path d="M275 160 C320 130, 355 150, 360 190 C340 215, 290 205, 280 190" fill="#fff" strokeWidth={3.5} />
        <path d="M135 250 C105 285, 95 315, 125 325 C145 320, 155 295, 150 270" fill="#fff" strokeWidth={3} />
        <path d="M265 250 C295 285, 305 315, 275 325 C255 320, 245 295, 250 270" fill="#fff" strokeWidth={3} />
      </g>
    );
  }

  if (norm.includes("octopus")) {
    return (
      <g>
        <ellipse cx="200" cy="150" rx="85" ry="95" fill="#fff" strokeWidth={4} />
        <ellipse cx="165" cy="165" rx="14" ry="18" fill="#111827" />
        <circle cx="160" cy="158" r="4.5" fill="#fff" stroke="none" />
        <ellipse cx="235" cy="165" rx="14" ry="18" fill="#111827" />
        <circle cx="230" cy="158" r="4.5" fill="#fff" stroke="none" />
        <path d="M185 200 Q200 218 215 200" fill="none" strokeWidth={3} />
        <path d="M135 225 Q90 260 70 320 Q95 345 120 310 Q140 270 150 240" fill="#fff" strokeWidth={3} />
        <path d="M160 240 Q130 280 120 340 Q150 360 170 315 Q180 270 180 245" fill="#fff" strokeWidth={3} />
        <path d="M220 245 Q220 270 230 315 Q250 360 280 340 Q270 280 240 240" fill="#fff" strokeWidth={3} />
        <path d="M250 240 Q260 270 280 310 Q305 345 330 320 Q310 260 265 225" fill="#fff" strokeWidth={3} />
        <path d="M185 330 Q200 300 215 330 L225 350 Q200 365 175 350 Z" fill="#fff" strokeWidth={2.5} />
      </g>
    );
  }

  if (norm.includes("seahorse")) {
    return (
      <g>
        <circle cx="210" cy="100" r="35" fill="#fff" strokeWidth={3.5} />
        <path d="M180 100 L125 110 L125 125 L180 118 Z" fill="#fff" strokeWidth={3} />
        <ellipse cx="205" cy="95" rx="8" ry="11" fill="#111827" />
        <circle cx="203" cy="91" r="3" fill="#fff" stroke="none" />
        <polygon points="215,65 225,48 235,65 245,50 250,70" fill="#fff" strokeWidth={2.5} />
        <path d="M240 115 C265 155, 270 220, 220 260 C180 290, 185 340, 220 355 C240 360, 255 345, 245 330 C235 320, 220 325, 220 335" fill="none" strokeWidth={18} stroke="#fff" />
        <path d="M240 115 C265 155, 270 220, 220 260 C180 290, 185 340, 220 355 C240 360, 255 345, 245 330 C235 320, 220 325, 220 335" fill="none" strokeWidth={3.5} />
        <path d="M280 380 Q270 290 290 220 Q310 160 300 120" fill="none" strokeWidth={6} stroke="#111827" />
      </g>
    );
  }

  if (norm.includes("shark") || norm.includes("manta-ray") || norm.includes("jellyfish") || norm.includes("starfish") || norm.includes("crab") || norm.includes("otter")) {
    return (
      <g>
        <path d="M40 210 C80 150, 220 130, 320 180 C360 200, 360 220, 310 240 C220 270, 90 270, 40 210 Z" fill="#fff" strokeWidth={4} />
        <path d="M190 145 C195 90, 215 70, 250 85 C240 115, 235 135, 240 148" fill="#fff" strokeWidth={3.5} />
        <path d="M140 245 C135 285, 120 315, 155 315 C175 300, 185 275, 185 245" fill="#fff" strokeWidth={3} />
        <path d="M315 185 C350 140, 385 110, 385 130 C370 170, 345 200, 345 210 C355 230, 385 260, 375 275 C355 270, 330 240, 315 220" fill="#fff" strokeWidth={3.5} />
        <ellipse cx="95" cy="195" rx="8" ry="11" fill="#111827" />
        <circle cx="92" cy="191" r="3" fill="#fff" stroke="none" />
        <path d="M70 225 Q100 245 130 225" fill="none" strokeWidth={3} />
        <path d="M145 190 Q150 205 145 220" fill="none" strokeWidth={2.5} />
        <path d="M155 192 Q160 205 155 218" fill="none" strokeWidth={2.5} />
        <circle cx="340" cy="80" r="14" fill="#fff" strokeWidth={2.5} />
        <circle cx="360" cy="115" r="9" fill="#fff" strokeWidth={2.5} />
      </g>
    );
  }

  // ══════════════════════════════════════════════════════════════════
  // 2. FARM LIFE & BARNYARD
  // ══════════════════════════════════════════════════════════════════
  if (norm.includes("cow")) {
    return (
      <g>
        <rect x="130" y="160" width="180" height="120" rx="35" fill="#fff" strokeWidth={4} />
        <path d="M170 160 Q190 200 220 180 Q210 160 170 160 Z" fill="#fff" strokeWidth={2.5} />
        <path d="M250 210 Q280 230 290 200 Q305 240 270 260 Z" fill="#fff" strokeWidth={2.5} />
        <circle cx="110" cy="150" r="45" fill="#fff" strokeWidth={3.5} />
        <ellipse cx="95" cy="175" rx="35" ry="24" fill="#fff" strokeWidth={3} />
        <ellipse cx="85" cy="175" rx="5" ry="7" fill="#111827" />
        <ellipse cx="105" cy="175" rx="5" ry="7" fill="#111827" />
        <path d="M85 188 Q95 195 105 188" fill="none" strokeWidth={2.5} />
        <circle cx="110" cy="135" r="8" fill="#111827" />
        <rect x="150" y="280" width="22" height="60" rx="5" fill="#fff" strokeWidth={3} />
        <rect x="190" y="280" width="22" height="60" rx="5" fill="#fff" strokeWidth={3} />
        <rect x="250" y="280" width="22" height="60" rx="5" fill="#fff" strokeWidth={3} />
        <rect x="285" y="280" width="22" height="60" rx="5" fill="#fff" strokeWidth={3} />
      </g>
    );
  }

  if (norm.includes("pig")) {
    return (
      <g>
        <ellipse cx="230" cy="220" rx="90" ry="75" fill="#fff" strokeWidth={4} />
        <circle cx="130" cy="180" r="55" fill="#fff" strokeWidth={3.5} />
        <ellipse cx="105" cy="195" rx="25" ry="18" fill="#fff" strokeWidth={3} />
        <ellipse cx="98" cy="195" rx="4" ry="7" fill="#111827" />
        <ellipse cx="112" cy="195" rx="4" ry="7" fill="#111827" />
        <polygon points="110,130 90,85 135,110" fill="#fff" strokeWidth={3} />
        <polygon points="155,130 175,85 135,110" fill="#fff" strokeWidth={3} />
        <circle cx="125" cy="160" r="7" fill="#111827" />
        <path d="M100 222 Q115 235 130 222" fill="none" strokeWidth={2.5} />
        <rect x="170" y="280" width="25" height="50" rx="6" fill="#fff" strokeWidth={3} />
        <rect x="210" y="280" width="25" height="50" rx="6" fill="#fff" strokeWidth={3} />
        <rect x="260" y="280" width="25" height="50" rx="6" fill="#fff" strokeWidth={3} />
        <rect x="295" y="280" width="25" height="50" rx="6" fill="#fff" strokeWidth={3} />
        <path d="M320 200 C345 190, 360 215, 345 230 C335 235, 335 220, 350 210" fill="none" strokeWidth={3.5} />
      </g>
    );
  }

  if (norm.includes("tractor")) {
    return (
      <g>
        <circle cx="120" cy="270" r="55" fill="#fff" strokeWidth={4} />
        <circle cx="120" cy="270" r="30" fill="#fff" strokeWidth={3} />
        <circle cx="290" cy="290" r="35" fill="#fff" strokeWidth={4} />
        <circle cx="290" cy="290" r="18" fill="#fff" strokeWidth={3} />
        <path d="M160 200 L300 200 L310 260 L160 260 Z" fill="#fff" strokeWidth={3.5} />
        <path d="M80 140 L160 140 L160 240 L80 240 Z" fill="#fff" strokeWidth={3.5} />
        <rect x="95" y="155" width="50" height="55" rx="5" fill="#fff" strokeWidth={2.5} />
        <rect x="270" y="140" width="14" height="60" rx="3" fill="#fff" strokeWidth={3} />
      </g>
    );
  }

  // ══════════════════════════════════════════════════════════════════
  // 3. INSECTS & BUGS
  // ══════════════════════════════════════════════════════════════════
  if (norm.includes("ladybug")) {
    return (
      <g>
        <path d="M40 350 C40 200, 150 50, 360 40 C350 220, 200 360, 40 350 Z" fill="#fff" strokeWidth={3.5} />
        <path d="M40 350 Q200 220 360 40" fill="none" strokeWidth={2.5} />
        <ellipse cx="200" cy="200" rx="80" ry="75" fill="#fff" strokeWidth={4} />
        <line x1="200" y1="125" x2="200" y2="275" strokeWidth={3.5} />
        <path d="M165 130 C165 95, 235 95, 235 130 Z" fill="#fff" strokeWidth={3.5} />
        <circle cx="160" cy="165" r="14" fill="#111827" />
        <circle cx="155" cy="225" r="15" fill="#111827" />
        <circle cx="240" cy="165" r="14" fill="#111827" />
        <circle cx="245" cy="225" r="15" fill="#111827" />
      </g>
    );
  }

  if (norm.includes("bee") || norm.includes("caterpillar") || norm.includes("snail") || norm.includes("firefl") || norm.includes("beetle") || norm.includes("ant")) {
    return (
      <g>
        <polygon points="60,100 90,80 120,100 120,135 90,155 60,135" fill="#fff" strokeWidth={2.5} />
        <polygon points="120,100 150,80 180,100 180,135 150,155 120,135" fill="#fff" strokeWidth={2.5} />
        <ellipse cx="230" cy="220" rx="75" ry="55" fill="#fff" strokeWidth={4} />
        <path d="M195 170 Q215 220 195 270" fill="none" strokeWidth={6} stroke="#111827" />
        <path d="M230 165 Q250 220 230 275" fill="none" strokeWidth={6} stroke="#111827" />
        <circle cx="145" cy="220" r="35" fill="#fff" strokeWidth={3.5} />
        <circle cx="135" cy="210" r="8" fill="#111827" />
        <ellipse cx="220" cy="130" rx="30" ry="55" fill="#fff" strokeWidth={3} transform="rotate(-25 220 130)" />
      </g>
    );
  }

  // ══════════════════════════════════════════════════════════════════
  // 4. CONSTRUCTION & VEHICLES
  // ══════════════════════════════════════════════════════════════════
  if (norm.includes("excavator") || norm.includes("bulldozer") || norm.includes("crane") || norm.includes("loader") || norm.includes("forklift")) {
    return (
      <g>
        <rect x="70" y="270" width="180" height="55" rx="27" fill="#fff" strokeWidth={4} />
        <circle cx="100" cy="297" r="18" fill="#fff" strokeWidth={3} />
        <circle cx="160" cy="297" r="14" fill="#fff" strokeWidth={2.5} />
        <circle cx="220" cy="297" r="18" fill="#fff" strokeWidth={3} />
        <path d="M80 210 L190 210 L190 270 L80 270 Z" fill="#fff" strokeWidth={3.5} />
        <path d="M120 150 L185 150 L185 210 L120 210 Z" fill="#fff" strokeWidth={3.5} />
        <rect x="135" y="160" width="40" height="40" rx="4" fill="#fff" strokeWidth={2.5} />
        <line x1="180" y1="210" x2="260" y2="120" strokeWidth={16} stroke="#fff" />
        <line x1="180" y1="210" x2="260" y2="120" strokeWidth={3.5} stroke="#111827" />
        <line x1="260" y1="120" x2="330" y2="190" strokeWidth={14} stroke="#fff" />
        <line x1="260" y1="120" x2="330" y2="190" strokeWidth={3.5} stroke="#111827" />
        <path d="M330 190 C340 230, 360 250, 375 240 L370 220 L350 210 Z" fill="#fff" strokeWidth={3} />
      </g>
    );
  }

  // ══════════════════════════════════════════════════════════════════
  // 5. CAMPING & ADVENTURE
  // ══════════════════════════════════════════════════════════════════
  if (norm.includes("camp") || norm.includes("tent") || norm.includes("canoe") || norm.includes("backpack") || norm.includes("lantern")) {
    return (
      <g>
        <polygon points="200,100 80,310 320,310" fill="#fff" strokeWidth={4} />
        <polygon points="200,100 170,310 230,310" fill="#fff" strokeWidth={3} />
        <path d="M60 280 L20 340 M340 280 L380 340" strokeWidth={3} />
        <path d="M170 310 Q200 230 230 310" fill="#111827" />
        <circle cx="80" cy="90" r="30" fill="#fff" strokeWidth={3} />
        <path d="M70 70 Q90 60 100 80 Q105 100 85 110" fill="none" strokeWidth={2.5} />
      </g>
    );
  }

  // ══════════════════════════════════════════════════════════════════
  // 6. MUSICAL INSTRUMENTS
  // ══════════════════════════════════════════════════════════════════
  if (norm.includes("guitar") || norm.includes("piano") || norm.includes("drum") || norm.includes("trumpet") || norm.includes("violin") || norm.includes("harp") || norm.includes("xylophone")) {
    return (
      <g>
        <path d="M160 170 C120 180, 110 230, 150 270 C190 310, 250 310, 270 260 C290 220, 260 180, 220 170 C240 140, 230 110, 195 110 C160 110, 150 140, 160 170 Z" fill="#fff" strokeWidth={4} transform="rotate(-30 200 200)" />
        <circle cx="200" cy="210" r="24" fill="#fff" strokeWidth={3.5} />
        <rect x="192" y="30" width="16" height="120" fill="#fff" strokeWidth={3} transform="rotate(-30 200 100)" />
        <circle cx="65" cy="100" r="8" fill="#111827" />
        <circle cx="90" cy="90" r="8" fill="#111827" />
      </g>
    );
  }

  // ══════════════════════════════════════════════════════════════════
  // 7. STEM SCIENCE & SIMPLE MACHINES
  // ══════════════════════════════════════════════════════════════════
  if (norm.includes("microscope") || norm.includes("magnet") || norm.includes("volcano") || norm.includes("pulley") || norm.includes("lever") || norm.includes("gear") || norm.includes("prism")) {
    return (
      <g>
        <path d="M110 90 L110 220 C110 310, 290 310, 290 220 L290 90 L230 90 L230 220 C230 250, 170 250, 170 220 L170 90 Z" fill="#fff" strokeWidth={4} />
        <line x1="110" y1="130" x2="170" y2="130" strokeWidth={3} />
        <line x1="230" y1="130" x2="290" y2="130" strokeWidth={3} />
        <text x="132" y="117" fontSize="22" fontWeight="bold" fill="#111827" stroke="none">N</text>
        <text x="253" y="117" fontSize="22" fontWeight="bold" fill="#111827" stroke="none">S</text>
        <circle cx="200" cy="340" r="16" fill="#fff" strokeWidth={3} />
      </g>
    );
  }

  // ══════════════════════════════════════════════════════════════════
  // 8. HEALTHY HABITS & ROUTINES
  // ══════════════════════════════════════════════════════════════════
  if (norm.includes("teeth") || norm.includes("wash") || norm.includes("water") || norm.includes("sleep") || norm.includes("bike") || norm.includes("yoga")) {
    return (
      <g>
        <path d="M140 120 C140 80, 260 80, 260 120 C260 180, 240 280, 220 330 C200 310, 200 310, 180 330 C160 280, 140 180, 140 120 Z" fill="#fff" strokeWidth={4} />
        <circle cx="175" cy="150" r="8" fill="#111827" />
        <circle cx="225" cy="150" r="8" fill="#111827" />
        <path d="M185 180 Q200 195 215 180" fill="none" strokeWidth={3} />
        <polygon points="90,80 110,60 130,80 110,100" fill="#fff" strokeWidth={2.5} />
        <polygon points="270,80 290,60 310,80 290,100" fill="#fff" strokeWidth={2.5} />
      </g>
    );
  }

  // ══════════════════════════════════════════════════════════════════
  // 9. WORLD LANDMARKS
  // ══════════════════════════════════════════════════════════════════
  if (norm.includes("eiffel") || norm.includes("liberty") || norm.includes("colosseum") || norm.includes("taj-mahal") || norm.includes("big-ben") || norm.includes("fuji") || norm.includes("bridge")) {
    return (
      <g>
        <line x1="50" y1="360" x2="350" y2="360" strokeWidth={3.5} />
        <path d="M120 360 Q200 290 280 360" fill="none" strokeWidth={4} />
        <rect x="110" y="270" width="180" height="15" rx="3" fill="#fff" strokeWidth={3} />
        <line x1="80" y1="360" x2="130" y2="270" strokeWidth={5} stroke="#111827" />
        <line x1="320" y1="360" x2="270" y2="270" strokeWidth={5} stroke="#111827" />
        <polygon points="170,190 200,60 230,190" fill="#fff" strokeWidth={3.5} />
        <line x1="200" y1="60" x2="200" y2="30" strokeWidth={3} />
        <circle cx="200" cy="27" r="4" fill="#111827" />
      </g>
    );
  }

  // ══════════════════════════════════════════════════════════════════
  // 10. FRUITS & VEGETABLES
  // ══════════════════════════════════════════════════════════════════
  if (norm.includes("apple") || norm.includes("banana") || norm.includes("watermelon") || norm.includes("carrot") || norm.includes("broccoli") || norm.includes("pineapple") || norm.includes("avocado") || norm.includes("lemon") || norm.includes("corn") || norm.includes("grape")) {
    return (
      <g>
        <path d="M200 130 C160 80, 70 110, 75 210 C80 300, 160 340, 200 325 C240 340, 320 300, 325 210 C330 110, 240 80, 200 130 Z" fill="#fff" strokeWidth={4} />
        <path d="M200 130 C205 90, 220 70, 225 60" fill="none" strokeWidth={3.5} stroke="#111827" />
        <path d="M205 105 Q245 75 270 95 Q245 125 205 105 Z" fill="#fff" strokeWidth={3} />
      </g>
    );
  }

  // ══════════════════════════════════════════════════════════════════
  // 11. ROBOTS & TECH
  // ══════════════════════════════════════════════════════════════════
  if (norm.includes("robot") || norm.includes("drone") || norm.includes("rover")) {
    return (
      <g>
        <rect x="130" y="80" width="140" height="110" rx="20" fill="#fff" strokeWidth={4} />
        <rect x="150" y="105" width="100" height="60" rx="10" fill="#fff" strokeWidth={3} />
        <circle cx="180" cy="130" r="10" fill="#111827" />
        <circle cx="220" cy="130" r="10" fill="#111827" />
        <line x1="200" y1="80" x2="200" y2="40" strokeWidth={3.5} />
        <circle cx="200" cy="35" r="10" fill="#fff" strokeWidth={3} />
        <rect x="120" y="200" width="160" height="120" rx="15" fill="#fff" strokeWidth={4} />
        <circle cx="200" cy="250" r="22" fill="#fff" strokeWidth={2.5} />
        <rect x="110" y="325" width="180" height="40" rx="20" fill="#fff" strokeWidth={4} />
      </g>
    );
  }

  // ══════════════════════════════════════════════════════════════════
  // 12. TOYS & PLAYTIME
  // ══════════════════════════════════════════════════════════════════
  if (norm.includes("rocking-horse") || norm.includes("blocks") || norm.includes("toy") || norm.includes("dollhouse") || norm.includes("yoyo")) {
    return (
      <g>
        <path d="M60 330 Q200 380 340 330" fill="none" strokeWidth={6} stroke="#111827" />
        <path d="M120 230 C120 180, 160 140, 200 160 C240 180, 280 180, 280 230 Z" fill="#fff" strokeWidth={4} />
        <circle cx="130" cy="130" r="30" fill="#fff" strokeWidth={3.5} />
        <path d="M110 135 L80 145" strokeWidth={3} />
        <line x1="120" y1="230" x2="100" y2="340" strokeWidth={4} />
        <line x1="270" y1="230" x2="290" y2="340" strokeWidth={4} />
      </g>
    );
  }

  // ══════════════════════════════════════════════════════════════════
  // 13. SPECIALIZED TRANSPORT
  // ══════════════════════════════════════════════════════════════════
  if (norm.includes("submarine") || norm.includes("tugboat") || norm.includes("cable-car") || norm.includes("balloon") || norm.includes("monorail") || norm.includes("train") || norm.includes("ferry") || norm.includes("seaplane")) {
    return (
      <g>
        <ellipse cx="200" cy="220" rx="140" ry="60" fill="#fff" strokeWidth={4} />
        <circle cx="140" cy="220" r="18" fill="#fff" strokeWidth={3} />
        <circle cx="200" cy="220" r="18" fill="#fff" strokeWidth={3} />
        <circle cx="260" cy="220" r="18" fill="#fff" strokeWidth={3} />
        <rect x="180" y="130" width="40" height="40" rx="5" fill="#fff" strokeWidth={3} />
        <path d="M195 130 L195 90 L215 90" fill="none" strokeWidth={3.5} />
        <path d="M50 200 L30 180 L30 260 L50 240 Z" fill="#fff" strokeWidth={3} />
      </g>
    );
  }

  // ══════════════════════════════════════════════════════════════════
  // 14. LIFE CYCLES & NATURE SCIENCE
  // ══════════════════════════════════════════════════════════════════
  if (norm.includes("cycle") || norm.includes("germination")) {
    return (
      <g>
        <path d="M200 70 A130 130 0 0 1 330 200" fill="none" strokeWidth={3.5} strokeDasharray="8 6" />
        <polygon points="330,195 340,210 320,205" fill="#111827" />
        <path d="M330 200 A130 130 0 0 1 200 330" fill="none" strokeWidth={3.5} strokeDasharray="8 6" />
        <polygon points="205,330 190,340 195,320" fill="#111827" />
        <path d="M200 330 A130 130 0 0 1 70 200" fill="none" strokeWidth={3.5} strokeDasharray="8 6" />
        <polygon points="70,205 60,190 80,195" fill="#111827" />
        <path d="M70 200 A130 130 0 0 1 200 70" fill="none" strokeWidth={3.5} strokeDasharray="8 6" />
        <polygon points="195,70 210,60 205,80" fill="#111827" />
        <circle cx="200" cy="65" r="22" fill="#fff" strokeWidth={3} />
        <circle cx="330" cy="200" r="22" fill="#fff" strokeWidth={3} />
        <circle cx="200" cy="335" r="22" fill="#fff" strokeWidth={3} />
        <circle cx="70" cy="200" r="22" fill="#fff" strokeWidth={3} />
      </g>
    );
  }

  // ══════════════════════════════════════════════════════════════════
  // 15. EARLY LITERACY & PHONICS
  // ══════════════════════════════════════════════════════════════════
  if (norm.includes("alphabet") || norm.includes("rhym") || norm.includes("word") || norm.includes("letter") || norm.includes("vowel") || norm.includes("phonics") || norm.includes("pencil") || norm.includes("book")) {
    return (
      <g>
        <path d="M70 260 C120 240, 180 240, 200 260 C220 240, 280 240, 330 260 L330 130 C280 110, 220 110, 200 130 C180 110, 120 110, 70 130 Z" fill="#fff" strokeWidth={4} />
        <line x1="200" y1="130" x2="200" y2="260" strokeWidth={3} />
        <text x="110" y="205" fontSize="42" fontWeight="bold" fill="#fff" stroke="#111827" strokeWidth="2.5">A</text>
        <text x="250" y="205" fontSize="42" fontWeight="bold" fill="#fff" stroke="#111827" strokeWidth="2.5">B</text>
      </g>
    );
  }

  // ══════════════════════════════════════════════════════════════════
  // 16. EMOTIONS & SOCIAL SKILLS
  // ══════════════════════════════════════════════════════════════════
  if (norm.includes("emotion") || norm.includes("kindness") || norm.includes("sharing") || norm.includes("hug") || norm.includes("thank") || norm.includes("friend")) {
    return (
      <g>
        <path d="M200 130 C180 70, 90 70, 90 150 C90 230, 200 300, 200 320 C200 300, 310 230, 310 150 C310 70, 220 70, 200 130 Z" fill="#fff" strokeWidth={4} />
        <circle cx="165" cy="160" r="10" fill="#111827" />
        <circle cx="235" cy="160" r="10" fill="#111827" />
        <path d="M175 195 Q200 220 225 195" fill="none" strokeWidth={3.5} />
      </g>
    );
  }

  // Return null so ColoringIllustration.tsx falls through to existing artwork
  return null;
}
