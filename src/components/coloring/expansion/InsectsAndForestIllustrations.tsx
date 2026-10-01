import React from "react";

export function renderInsectsAndForest(slug: string): React.ReactNode | null {
  switch (slug) {
    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 3: INSECTS & GARDEN BUGS
    // ══════════════════════════════════════════════════════════════════
    case "seven-spotted-ladybug-on-leaf-coloring-page":
    case "spotted-ladybug-on-leaf-coloring-page":
      return (
        <g>
          {/* Broad leaf underneath */}
          <path d="M40 360 C40 210, 160 50, 360 40 C350 230, 210 360, 40 360 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M40 360 Q200 220 360 40" fill="none" strokeWidth={2.5} />
          <path d="M140 280 Q170 240 220 250" fill="none" strokeWidth={1.5} />
          <path d="M220 200 Q260 170 300 180" fill="none" strokeWidth={1.5} />
          {/* Ladybug round body */}
          <ellipse cx="200" cy="200" rx="80" ry="75" fill="#fff" strokeWidth={4} />
          {/* Wing separation line */}
          <line x1="200" y1="125" x2="200" y2="275" strokeWidth={3.5} />
          {/* Head & Antennae */}
          <path d="M165 130 C165 95, 235 95, 235 130 Z" fill="#fff" strokeWidth={3.5} />
          <circle cx="178" cy="115" r="4" fill="#111827" />
          <circle cx="222" cy="115" r="4" fill="#111827" />
          <path d="M185 95 Q170 70 155 75" fill="none" strokeWidth={2.5} />
          <circle cx="153" cy="76" r="3.5" fill="#111827" />
          <path d="M215 95 Q230 70 245 75" fill="none" strokeWidth={2.5} />
          <circle cx="247" cy="76" r="3.5" fill="#111827" />
          {/* 7 Distinct Polka dot spots */}
          <circle cx="160" cy="165" r="14" fill="#111827" />
          <circle cx="155" cy="225" r="15" fill="#111827" />
          <circle cx="240" cy="165" r="14" fill="#111827" />
          <circle cx="245" cy="225" r="15" fill="#111827" />
          <circle cx="178" cy="255" r="10" fill="#111827" />
          <circle cx="222" cy="255" r="10" fill="#111827" />
          <circle cx="200" cy="145" r="9" fill="#111827" />
        </g>
      );

    case "honeybee-at-honeycomb-coloring-page":
    case "honeybee-collecting-flower-nectar-coloring-page":
    case "busy-honeybee-and-honeycomb-coloring-page":
      return (
        <g>
          {/* Hexagonal honeycomb background cells */}
          <polygon points="50,90 75,75 100,90 100,120 75,135 50,120" fill="#fff" strokeWidth={2.5} />
          <polygon points="100,90 125,75 150,90 150,120 125,135 100,120" fill="#fff" strokeWidth={2.5} />
          <polygon points="75,135 100,120 125,135 125,165 100,180 75,165" fill="#fff" strokeWidth={2.5} />
          {/* Honeybee striped oval body */}
          <ellipse cx="230" cy="220" rx="75" ry="55" fill="#fff" strokeWidth={4} />
          {/* Bee body stripes */}
          <path d="M195 170 Q215 220 195 270" fill="none" strokeWidth={7} stroke="#111827" />
          <path d="M230 165 Q250 220 230 275" fill="none" strokeWidth={7} stroke="#111827" />
          <path d="M265 175 Q280 220 265 265" fill="none" strokeWidth={7} stroke="#111827" />
          {/* Stinger */}
          <polygon points="305,215 325,220 305,225" fill="#111827" />
          {/* Head */}
          <circle cx="145" cy="220" r="35" fill="#fff" strokeWidth={3.5} />
          <circle cx="135" cy="210" r="8" fill="#111827" />
          <circle cx="133" cy="207" r="2.5" fill="#fff" stroke="none" />
          <path d="M125 230 Q135 240 145 230" fill="none" strokeWidth={2.5} />
          {/* Antennae */}
          <path d="M135 185 Q125 155 110 160" fill="none" strokeWidth={2.5} />
          <circle cx="108" cy="160" r="4" fill="#111827" />
          <path d="M150 185 Q155 155 170 160" fill="none" strokeWidth={2.5} />
          <circle cx="172" cy="160" r="4" fill="#111827" />
          {/* Wings */}
          <ellipse cx="210" cy="130" rx="30" ry="60" fill="#fff" strokeWidth={3} transform="rotate(-30 210 130)" />
          <ellipse cx="245" cy="135" rx="25" ry="50" fill="#fff" strokeWidth={3} transform="rotate(-15 245 135)" />
        </g>
      );

    case "monarch-butterfly-on-milkweed-coloring-page":
    case "monarch-butterfly-on-flower-coloring-page":
      return (
        <g>
          {/* Slender butterfly thorax/abdomen */}
          <ellipse cx="200" cy="200" rx="10" ry="65" fill="#fff" strokeWidth={3.5} />
          <circle cx="200" cy="125" r="14" fill="#fff" strokeWidth={3} />
          {/* Antennae with knobs */}
          <path d="M195 112 Q175 70 145 65" fill="none" strokeWidth={2.5} />
          <circle cx="143" cy="65" r="4" fill="#111827" />
          <path d="M205 112 Q225 70 255 65" fill="none" strokeWidth={2.5} />
          <circle cx="257" cy="65" r="4" fill="#111827" />
          {/* Upper Wings with stained-glass patterns */}
          <path d="M192 145 C150 80, 70 80, 50 140 C40 180, 110 230, 190 190 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M208 145 C250 80, 330 80, 350 140 C360 180, 290 230, 210 190 Z" fill="#fff" strokeWidth={3.5} />
          {/* Lower Wings */}
          <path d="M192 190 C130 200, 80 250, 110 310 C140 340, 185 300, 195 245 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M208 190 C270 200, 320 250, 290 310 C260 340, 215 300, 205 245 Z" fill="#fff" strokeWidth={3.5} />
          {/* Wing cell internal veins */}
          <path d="M110 140 Q150 150 180 165" fill="none" strokeWidth={2} />
          <path d="M290 140 Q250 150 220 165" fill="none" strokeWidth={2} />
          <path d="M140 270 Q160 250 190 220" fill="none" strokeWidth={2} />
          <path d="M260 270 Q240 250 210 220" fill="none" strokeWidth={2} />
        </g>
      );

    case "praying-mantis-on-floral-stem-coloring-page":
    case "praying-mantis-on-stem-coloring-page":
    case "praying-mantis-on-garden-twig-coloring-page":
      return (
        <g>
          {/* Plant stem */}
          <path d="M80 380 Q160 260 250 70" fill="none" strokeWidth={7} stroke="#111827" />
          {/* Long slender thorax */}
          <line x1="160" y1="260" x2="230" y2="150" strokeWidth={12} stroke="#fff" />
          <line x1="160" y1="260" x2="230" y2="150" strokeWidth={3.5} stroke="#111827" />
          {/* Abdomen */}
          <ellipse cx="120" cy="300" rx="55" ry="18" fill="#fff" strokeWidth={3.5} transform="rotate(35 120 300)" />
          {/* Triangular head */}
          <polygon points="230,140 260,130 245,165" fill="#fff" strokeWidth={3} />
          <circle cx="238" cy="138" r="5" fill="#111827" />
          <circle cx="254" cy="136" r="5" fill="#111827" />
          {/* Folded spiny raptorial front arms */}
          <path d="M225 160 L200 130 L235 105 L215 115" fill="none" strokeWidth={4} strokeLinejoin="round" />
          {/* Long walking legs */}
          <path d="M170 240 L210 280 L230 330" fill="none" strokeWidth={3} />
          <path d="M150 270 L170 320 L160 360" fill="none" strokeWidth={3} />
        </g>
      );

    case "shimmering-dragonfly-on-reed-coloring-page":
    case "dragonfly-skimming-pond-coloring-page":
    case "dragonfly-resting-on-cattail-coloring-page":
      return (
        <g>
          {/* Water ripples below */}
          <ellipse cx="200" cy="330" rx="150" ry="25" fill="none" strokeWidth={2.5} />
          <ellipse cx="200" cy="330" rx="80" ry="14" fill="none" strokeWidth={2} />
          {/* Reed stalk */}
          <line x1="200" y1="360" x2="200" y2="280" strokeWidth={6} stroke="#111827" />
          {/* Long segmented needle abdomen */}
          <rect x="194" y="160" width="12" height="150" rx="6" fill="#fff" strokeWidth={3.5} />
          <line x1="194" y1="190" x2="206" y2="190" strokeWidth={2} />
          <line x1="194" y1="220" x2="206" y2="220" strokeWidth={2} />
          <line x1="194" y1="250" x2="206" y2="250" strokeWidth={2} />
          <line x1="194" y1="280" x2="206" y2="280" strokeWidth={2} />
          {/* Thorax and compound eyes */}
          <ellipse cx="200" cy="140" rx="14" ry="20" fill="#fff" strokeWidth={3.5} />
          <circle cx="190" cy="125" r="10" fill="#fff" strokeWidth={3} />
          <circle cx="190" cy="125" r="5" fill="#111827" />
          <circle cx="210" cy="125" r="10" fill="#fff" strokeWidth={3} />
          <circle cx="210" cy="125" r="5" fill="#111827" />
          {/* Four long clear wings with cross veins */}
          <ellipse cx="100" cy="130" rx="85" ry="18" fill="#fff" strokeWidth={3} transform="rotate(-10 100 130)" />
          <ellipse cx="300" cy="130" rx="85" ry="18" fill="#fff" strokeWidth={3} transform="rotate(10 300 130)" />
          <ellipse cx="115" cy="165" rx="75" ry="16" fill="#fff" strokeWidth={3} transform="rotate(-5 115 165)" />
          <ellipse cx="285" cy="165" rx="75" ry="16" fill="#fff" strokeWidth={3} transform="rotate(5 285 165)" />
        </g>
      );

    case "friendly-garden-caterpillar-coloring-page":
    case "caterpillar-munching-green-leaf-coloring-page":
    case "cute-caterpillar-crawling-coloring-page":
      return (
        <g>
          {/* Big delicious leaf with bite mark */}
          <path d="M40 330 C40 220, 120 140, 240 130 C270 130, 290 150, 310 140 C340 180, 350 250, 300 320 Z" fill="#fff" strokeWidth={3.5} />
          {/* Segmented body globes */}
          <circle cx="100" cy="230" r="30" fill="#fff" strokeWidth={3.5} />
          <circle cx="145" cy="225" r="28" fill="#fff" strokeWidth={3.5} />
          <circle cx="190" cy="220" r="28" fill="#fff" strokeWidth={3.5} />
          <circle cx="235" cy="215" r="28" fill="#fff" strokeWidth={3.5} />
          <circle cx="280" cy="220" r="28" fill="#fff" strokeWidth={3.5} />
          {/* Big smiling head */}
          <circle cx="325" cy="205" r="34" fill="#fff" strokeWidth={4} />
          <circle cx="320" cy="195" r="6" fill="#111827" />
          <circle cx="318" cy="192" r="2" fill="#fff" stroke="none" />
          <circle cx="340" cy="195" r="6" fill="#111827" />
          <circle cx="338" cy="192" r="2" fill="#fff" stroke="none" />
          <path d="M320 218 Q332 230 345 218" fill="none" strokeWidth={2.5} />
          {/* Antennae */}
          <path d="M330 172 Q325 140 310 145" fill="none" strokeWidth={2.5} />
          <circle cx="308" cy="146" r="4" fill="#111827" />
          <path d="M345 175 Q355 140 370 145" fill="none" strokeWidth={2.5} />
          <circle cx="372" cy="146" r="4" fill="#111827" />
          {/* Little stubby feet on branch */}
          <circle cx="95" cy="265" r="7" fill="#fff" strokeWidth={2.5} />
          <circle cx="140" cy="260" r="7" fill="#fff" strokeWidth={2.5} />
          <circle cx="185" cy="255" r="7" fill="#fff" strokeWidth={2.5} />
          <circle cx="230" cy="250" r="7" fill="#fff" strokeWidth={2.5} />
          <circle cx="275" cy="255" r="7" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "busy-ants-at-anthill-coloring-sheet":
    case "busy-ant-colony-tunnel-coloring-page":
      return (
        <g>
          {/* Sandy Anthill cross-section mound */}
          <path d="M40 340 Q200 150 360 340" fill="#fff" strokeWidth={4} />
          {/* Anthill entrance hole */}
          <ellipse cx="200" cy="220" rx="30" ry="15" fill="#111827" />
          {/* Underground tunnel passageway */}
          <path d="M200 230 Q160 270 200 310 Q240 350 200 380" fill="none" strokeWidth={18} stroke="#fff" />
          <path d="M200 230 Q160 270 200 310 Q240 350 200 380" fill="none" strokeWidth={3} stroke="#111827" strokeDasharray="6 4" />
          {/* Ant 1 carrying leaf up hill */}
          <circle cx="120" cy="260" r="10" fill="#111827" />
          <circle cx="135" cy="255" r="7" fill="#111827" />
          <circle cx="148" cy="250" r="9" fill="#111827" />
          {/* Green leaf carried */}
          <ellipse cx="155" cy="230" rx="20" ry="10" fill="#fff" strokeWidth={2.5} transform="rotate(-30 155 230)" />
          {/* Ant 2 near entrance */}
          <circle cx="240" cy="250" r="10" fill="#111827" />
          <circle cx="255" cy="245" r="7" fill="#111827" />
          <circle cx="268" cy="240" r="9" fill="#111827" />
          {/* Ant 3 marching */}
          <circle cx="300" cy="290" r="9" fill="#111827" />
          <circle cx="312" cy="285" r="6" fill="#111827" />
          <circle cx="324" cy="282" r="8" fill="#111827" />
        </g>
      );

    case "garden-snail-on-vine-coloring-page":
    case "garden-snail-with-spiral-shell-coloring-page":
      return (
        <g>
          {/* Vine stem */}
          <path d="M30 330 Q150 300 370 330" fill="none" strokeWidth={6} stroke="#111827" />
          {/* Snail foot / body */}
          <path d="M60 290 Q120 280 270 280 C320 280, 360 260, 340 220 C320 180, 290 220, 270 240 Q150 250 60 290 Z" fill="#fff" strokeWidth={3.5} />
          {/* Big round shell with spiral */}
          <circle cx="180" cy="180" r="85" fill="#fff" strokeWidth={4} />
          <path d="M180 180 C150 180, 140 140, 170 130 C210 120, 230 160, 210 200 C180 240, 120 220, 110 170" fill="none" strokeWidth={3.5} />
          {/* Eye stalks on head */}
          <line x1="310" y1="210" x2="330" y2="150" strokeWidth={3.5} />
          <circle cx="330" cy="145" r="10" fill="#fff" strokeWidth={3} />
          <circle cx="330" cy="145" r="5" fill="#111827" />
          <line x1="325" y1="215" x2="360" y2="165" strokeWidth={3.5} />
          <circle cx="365" cy="160" r="10" fill="#fff" strokeWidth={3} />
          <circle cx="365" cy="160" r="5" fill="#111827" />
          {/* Cheerful smile */}
          <path d="M315 235 Q325 245 335 235" fill="none" strokeWidth={2.5} />
        </g>
      );

    case "leaping-grasshopper-in-meadow-coloring-page":
    case "jumping-grasshopper-in-tall-grass-coloring-page":
    case "grasshopper-on-blade-of-grass-coloring-page":
      return (
        <g>
          {/* Tall blades of grass */}
          <path d="M50 380 Q40 200 80 100 Q70 230 80 380" fill="#fff" strokeWidth={2.5} />
          <path d="M340 380 Q360 180 330 80 Q325 220 320 380" fill="#fff" strokeWidth={2.5} />
          {/* Grasshopper thorax and abdomen */}
          <ellipse cx="190" cy="210" rx="65" ry="25" fill="#fff" strokeWidth={3.5} transform="rotate(-15 190 210)" />
          {/* Head & large oval eye */}
          <polygon points="120,185 150,165 140,215 110,210" fill="#fff" strokeWidth={3} />
          <ellipse cx="130" cy="185" rx="7" ry="9" fill="#111827" />
          <circle cx="128" cy="182" r="2.5" fill="#fff" stroke="none" />
          {/* Long fine antennae */}
          <path d="M125 170 Q100 110 60 90" fill="none" strokeWidth={2} />
          <path d="M130 168 Q120 100 100 70" fill="none" strokeWidth={2} />
          {/* Big bent jumping hind leg */}
          <path d="M220 200 L260 130 L280 260" fill="none" strokeWidth={6} stroke="#111827" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="240" cy="165" rx="35" ry="12" fill="#fff" strokeWidth={3.5} transform="rotate(-60 240 165)" />
          {/* Front and middle walking legs */}
          <path d="M150 220 L140 265 L125 285" fill="none" strokeWidth={3} />
          <path d="M180 220 L185 270 L200 290" fill="none" strokeWidth={3} />
        </g>
      );

    case "rhinoceros-beetle-coloring-page":
    case "shiny-rhinoceros-beetle-coloring-page":
      return (
        <g>
          {/* Armored beetle body carapace */}
          <ellipse cx="200" cy="225" rx="75" ry="90" fill="#fff" strokeWidth={4} />
          <line x1="200" y1="135" x2="200" y2="315" strokeWidth={3.5} />
          {/* Pronotum / upper shield */}
          <path d="M140 150 C140 115, 260 115, 260 150 Z" fill="#fff" strokeWidth={3.5} />
          {/* Magnificent forked Y-horn */}
          <path d="M200 120 L200 50 L180 30 M200 50 L220 30" fill="none" strokeWidth={6} stroke="#111827" strokeLinecap="round" />
          {/* Eyes on side of head */}
          <circle cx="165" cy="135" r="6" fill="#111827" />
          <circle cx="235" cy="135" r="6" fill="#111827" />
          {/* Six hooked jointed legs */}
          <path d="M130 160 L80 140 L60 165" fill="none" strokeWidth={3.5} />
          <path d="M125 220 L70 220 L50 250" fill="none" strokeWidth={3.5} />
          <path d="M135 270 L85 290 L75 330" fill="none" strokeWidth={3.5} />
          <path d="M270 160 L320 140 L340 165" fill="none" strokeWidth={3.5} />
          <path d="M275 220 L330 220 L350 250" fill="none" strokeWidth={3.5} />
          <path d="M265 270 L315 290 L325 330" fill="none" strokeWidth={3.5} />
        </g>
      );

    case "glowing-fireflies-in-jar-coloring-page":
    case "glowing-firefly-in-night-jar-coloring-page":
      return (
        <g>
          {/* Glass mason jar with screw lid */}
          <rect x="70" y="110" width="130" height="230" rx="20" fill="#fff" strokeWidth={3.5} />
          <rect x="80" y="85" width="110" height="25" rx="5" fill="#fff" strokeWidth={3} />
          <line x1="85" y1="97" x2="185" y2="97" strokeWidth={2} />
          <path d="M90 140 Q90 280 105 310" fill="none" strokeWidth={2} strokeDasharray="8 6" />
          {/* Glowing firefly flying outside */}
          <ellipse cx="280" cy="180" rx="35" ry="24" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="320" cy="180" rx="20" ry="18" fill="#fff" strokeWidth={3.5} />
          <line x1="345" y1="180" x2="375" y2="180" strokeWidth={3} stroke="#111827" />
          <line x1="335" y1="155" x2="360" y2="135" strokeWidth={3} stroke="#111827" />
          <line x1="335" y1="205" x2="360" y2="225" strokeWidth={3} stroke="#111827" />
          <line x1="320" y1="205" x2="320" y2="230" strokeWidth={3} stroke="#111827" />
          <line x1="320" y1="155" x2="320" y2="130" strokeWidth={3} stroke="#111827" />
          <circle cx="240" cy="180" r="18" fill="#fff" strokeWidth={3} />
          <circle cx="235" cy="175" r="5" fill="#111827" />
          <ellipse cx="280" cy="135" rx="16" ry="38" fill="#fff" strokeWidth={2.5} transform="rotate(30 280 135)" />
          {/* Glowing stars inside jar */}
          <polygon points="135,160 138,168 146,168 140,173 142,180 135,175 128,180 130,173 124,168 132,168" fill="#111827" />
          <polygon points="110,230 113,238 121,238 115,243 117,250 110,245 103,250 105,243 99,238 107,238" fill="#111827" />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 4: FOREST & WOODLAND WILDLIFE
    // ══════════════════════════════════════════════════════════════════
    case "red-fox-resting-under-birch-coloring-page":
    case "curious-red-fox-in-clearing-coloring-page":
      return (
        <g>
          {/* Birch tree trunk in background */}
          <rect x="40" y="30" width="45" height="340" fill="#fff" strokeWidth={3.5} />
          <line x1="40" y1="90" x2="70" y2="90" strokeWidth={4} stroke="#111827" />
          <line x1="55" y1="160" x2="85" y2="160" strokeWidth={4} stroke="#111827" />
          <line x1="40" y1="230" x2="75" y2="230" strokeWidth={4} stroke="#111827" />
          {/* Sitting fox body */}
          <path d="M150 200 C140 250, 160 310, 220 310 C250 310, 270 280, 260 230 C250 190, 200 180, 150 200 Z" fill="#fff" strokeWidth={4} />
          {/* White chest bib */}
          <path d="M180 190 C165 220, 175 250, 200 260 C215 240, 210 205, 180 190 Z" fill="#fff" strokeWidth={2.5} />
          {/* Fox head */}
          <polygon points="180,105 130,150 230,150" fill="#fff" strokeWidth={3.5} />
          {/* Pointy ears with inner ear triangles */}
          <polygon points="140,120 120,60 170,100" fill="#fff" strokeWidth={3} />
          <polygon points="135,105 128,75 155,95" fill="#111827" />
          <polygon points="220,120 240,60 190,100" fill="#fff" strokeWidth={3} />
          <polygon points="225,105 232,75 205,95" fill="#111827" />
          {/* Cute muzzle and black nose */}
          <circle cx="180" cy="155" r="7" fill="#111827" />
          {/* Slanted clever eyes */}
          <ellipse cx="155" cy="130" rx="5" ry="7" fill="#111827" transform="rotate(-15 155 130)" />
          <circle cx="153" cy="128" r="2" fill="#fff" stroke="none" />
          <ellipse cx="205" cy="130" rx="5" ry="7" fill="#111827" transform="rotate(15 205 130)" />
          <circle cx="203" cy="128" r="2" fill="#fff" stroke="none" />
          {/* Front paws */}
          <rect x="175" y="270" width="16" height="45" rx="6" fill="#111827" />
          <rect x="200" y="270" width="16" height="45" rx="6" fill="#111827" />
          {/* Giant bushy tail with white tip */}
          <path d="M250 250 C310 250, 350 210, 340 160 C320 120, 280 150, 270 200" fill="#fff" strokeWidth={4} />
          <path d="M320 130 Q310 160 340 160" fill="none" strokeWidth={2.5} />
        </g>
      );

    case "playful-raccoon-by-stream-coloring-page":
    case "masked-raccoon-by-stream-coloring-page":
      return (
        <g>
          {/* Water stream stones */}
          <ellipse cx="100" cy="350" rx="60" ry="20" fill="#fff" strokeWidth={3} />
          <path d="M20 330 Q120 310 220 330 T380 330" fill="none" strokeWidth={3} />
          {/* Chubby raccoon body */}
          <ellipse cx="200" cy="220" rx="80" ry="65" fill="#fff" strokeWidth={4} />
          {/* Raccoon head */}
          <circle cx="150" cy="150" r="45" fill="#fff" strokeWidth={3.5} />
          {/* Rounded ears */}
          <circle cx="120" cy="115" r="14" fill="#fff" strokeWidth={3} />
          <circle cx="120" cy="115" r="7" fill="#111827" />
          <circle cx="180" cy="115" r="14" fill="#fff" strokeWidth={3} />
          <circle cx="180" cy="115" r="7" fill="#111827" />
          {/* Bandit mask across eyes */}
          <path d="M110 145 Q150 160 190 145 Q180 165 150 165 Q120 165 110 145 Z" fill="#111827" />
          <circle cx="132" cy="152" r="5" fill="#fff" />
          <circle cx="132" cy="152" r="2.5" fill="#111827" />
          <circle cx="168" cy="152" r="5" fill="#fff" />
          <circle cx="168" cy="152" r="2.5" fill="#111827" />
          {/* Nose and whiskers */}
          <circle cx="150" cy="172" r="5" fill="#111827" />
          {/* Ringed striped tail */}
          <path d="M275 220 C325 210, 360 250, 330 300 C300 320, 270 290, 260 250" fill="#fff" strokeWidth={4} />
          <path d="M285 228 Q300 245 280 260" fill="none" strokeWidth={6} stroke="#111827" />
          <path d="M310 240 Q325 260 300 280" fill="none" strokeWidth={6} stroke="#111827" />
          <path d="M328 268 Q335 285 315 295" fill="none" strokeWidth={6} stroke="#111827" />
        </g>
      );

    case "woodland-hedgehog-with-berries-coloring-page":
    case "cute-spiky-hedgehog-with-apple-coloring-page":
      return (
        <g>
          {/* Teardrop body covered in quills */}
          <path d="M120 270 C80 230, 80 150, 160 120 C250 90, 330 150, 320 240 C310 280, 260 300, 180 290 Z" fill="#fff" strokeWidth={4} />
          {/* Spiky quill outer ridges */}
          <path d="M130 135 L120 115 L145 125 L145 100 L168 115 L175 90 L195 110 L210 85 L225 110 L250 90 L255 115 L280 100 L280 130 L305 120 L295 150 L325 145 L310 175 L335 180 L315 205 L335 215 L315 240" fill="none" strokeWidth={3} strokeLinejoin="round" />
          {/* Friendly face cone */}
          <path d="M120 220 L60 250 L120 270 Z" fill="#fff" strokeWidth={3.5} />
          <circle cx="58" cy="250" r="7" fill="#111827" />
          <circle cx="95" cy="235" r="6" fill="#111827" />
          <circle cx="93" cy="232" r="2" fill="#fff" stroke="none" />
          <circle cx="115" cy="215" r="10" fill="#fff" strokeWidth={2.5} />
          {/* Wild woodland berries on prickly back */}
          <circle cx="210" cy="115" r="14" fill="#fff" strokeWidth={3} />
          <circle cx="235" cy="105" r="16" fill="#fff" strokeWidth={3} />
          <circle cx="255" cy="120" r="14" fill="#fff" strokeWidth={3} />
          <path d="M230 90 Q240 75 255 80" fill="none" strokeWidth={2.5} />
          {/* Little feet */}
          <ellipse cx="140" cy="290" rx="15" ry="8" fill="#fff" strokeWidth={2.5} />
          <ellipse cx="240" cy="295" rx="15" ry="8" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "busy-beaver-at-pond-dam-coloring-sheet":
    case "busy-beaver-building-dam-coloring-page":
      return (
        <g>
          {/* Wooden log dam */}
          <rect x="70" y="240" width="130" height="50" rx="10" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="70" cy="265" rx="10" ry="25" fill="#fff" strokeWidth={3} />
          <circle cx="100" cy="310" r="4" fill="#111827" />
          <circle cx="120" cy="315" r="5" fill="#111827" />
          {/* Beaver sitting body */}
          <ellipse cx="230" cy="220" rx="75" ry="60" fill="#fff" strokeWidth={4} />
          <circle cx="180" cy="150" r="40" fill="#fff" strokeWidth={3.5} />
          <circle cx="160" cy="115" r="10" fill="#fff" strokeWidth={2.5} />
          <circle cx="205" cy="115" r="10" fill="#fff" strokeWidth={2.5} />
          <circle cx="170" cy="145" r="5" fill="#111827" />
          <ellipse cx="175" cy="165" rx="18" ry="12" fill="#fff" strokeWidth={2.5} />
          <circle cx="175" cy="160" r="4" fill="#111827" />
          <rect x="168" y="172" width="7" height="12" fill="#fff" strokeWidth={2} />
          <rect x="175" y="172" width="7" height="12" fill="#fff" strokeWidth={2} />
          <circle cx="160" cy="220" r="12" fill="#fff" strokeWidth={2.5} />
          {/* Iconic broad criss-cross paddle tail */}
          <ellipse cx="320" cy="260" rx="55" ry="25" fill="#fff" strokeWidth={4} transform="rotate(25 320 260)" />
          <line x1="280" y1="245" x2="360" y2="280" strokeWidth={2} />
          <line x1="295" y1="230" x2="340" y2="295" strokeWidth={2} />
        </g>
      );

    case "forest-chipmunk-with-acorn-coloring-page":
    case "chubby-cheeked-chipmunk-with-acorn-coloring-page":
      return (
        <g>
          {/* Big acorn held in front paws */}
          <path d="M120 220 C120 270, 180 270, 180 220 Z" fill="#fff" strokeWidth={3.5} />
          <rect x="110" y="200" width="80" height="25" rx="10" fill="#fff" strokeWidth={3} />
          <line x1="150" y1="200" x2="150" y2="185" strokeWidth={3} />
          {/* Chipmunk body */}
          <ellipse cx="230" cy="230" rx="65" ry="60" fill="#fff" strokeWidth={4} />
          {/* Back stripes */}
          <path d="M210 180 Q240 220 220 270" fill="none" strokeWidth={6} stroke="#111827" />
          <path d="M235 180 Q265 220 245 270" fill="none" strokeWidth={6} stroke="#111827" />
          {/* Head with puffed cheeks */}
          <circle cx="160" cy="150" r="42" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="130" cy="165" rx="18" ry="14" fill="#fff" strokeWidth={3} />
          <ellipse cx="165" cy="110" rx="10" ry="16" fill="#fff" strokeWidth={2.5} />
          <ellipse cx="190" cy="115" rx="10" ry="16" fill="#fff" strokeWidth={2.5} />
          <circle cx="155" cy="145" r="7" fill="#111827" />
          <circle cx="153" cy="142" r="2.5" fill="#fff" stroke="none" />
          <circle cx="140" cy="205" r="10" fill="#fff" strokeWidth={2.5} />
          <circle cx="165" cy="205" r="10" fill="#fff" strokeWidth={2.5} />
          <path d="M280 260 C340 270, 360 170, 310 120 C290 100, 270 120, 290 150 C310 180, 290 230, 275 245" fill="#fff" strokeWidth={3.5} />
        </g>
      );

    case "majestic-moose-in-pine-lake-coloring-page":
    case "majestic-canadian-moose-coloring-page":
      return (
        <g>
          {/* Pine trees and lake ripples */}
          <polygon points="50,140 30,200 70,200" fill="#fff" strokeWidth={2.5} />
          <polygon points="50,190 20,260 80,260" fill="#fff" strokeWidth={2.5} />
          <rect x="45" y="260" width="10" height="70" fill="#111827" />
          {/* Water ripples */}
          <path d="M30 350 Q120 335 220 350 T370 350" fill="none" strokeWidth={3} />
          {/* Huge moose body */}
          <rect x="130" y="160" width="180" height="120" rx="40" fill="#fff" strokeWidth={4} />
          <ellipse cx="160" cy="160" rx="35" ry="25" fill="#fff" strokeWidth={3.5} />
          {/* Legs in water */}
          <rect x="150" y="280" width="18" height="65" rx="5" fill="#fff" strokeWidth={3} />
          <rect x="185" y="280" width="18" height="65" rx="5" fill="#fff" strokeWidth={3} />
          <rect x="245" y="280" width="18" height="65" rx="5" fill="#fff" strokeWidth={3} />
          <rect x="275" y="280" width="18" height="65" rx="5" fill="#fff" strokeWidth={3} />
          {/* Long snout / head */}
          <polygon points="140,140 70,170 85,210 145,190" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="78" cy="188" rx="6" ry="5" fill="#111827" />
          <circle cx="120" cy="155" r="5" fill="#111827" />
          <polygon points="120,200 115,235 130,205" fill="#fff" strokeWidth={2.5} />
          {/* Massive palmate broad antlers */}
          <path d="M145 130 C130 90, 110 50, 80 60 C65 80, 85 105, 110 115 M80 60 L60 50 M85 75 L65 75 M95 90 L75 95" fill="none" strokeWidth={4} strokeLinecap="round" />
          <path d="M155 130 C170 85, 195 45, 230 55 C245 75, 225 100, 200 115 M230 55 L250 45 M225 70 L245 70 M215 85 L235 90" fill="none" strokeWidth={4} strokeLinecap="round" />
        </g>
      );

    case "friendly-striped-skunk-coloring-page":
      return (
        <g>
          {/* Round skunk body */}
          <ellipse cx="180" cy="240" rx="75" ry="55" fill="#fff" strokeWidth={4} />
          {/* Skunk head */}
          <circle cx="110" cy="190" r="38" fill="#fff" strokeWidth={3.5} />
          {/* Tiny ears */}
          <circle cx="85" cy="165" r="10" fill="#fff" strokeWidth={2.5} />
          <circle cx="125" cy="165" r="10" fill="#fff" strokeWidth={2.5} />
          {/* Head facial white stripe */}
          <polygon points="105,155 115,155 112,185 108,185" fill="#111827" />
          <ellipse cx="95" cy="190" rx="5" ry="6" fill="#111827" />
          <circle cx="108" cy="205" r="4" fill="#111827" />
          {/* Iconic broad white back stripes */}
          <path d="M130 185 Q170 215 220 220" fill="none" strokeWidth={8} stroke="#111827" />
          {/* Magnificent tall plumes of skunk tail arched over back */}
          <path d="M240 240 C320 250, 360 140, 280 80 C230 40, 200 110, 240 180" fill="#fff" strokeWidth={4} />
          <path d="M260 210 Q320 130 250 85" fill="none" strokeWidth={7} stroke="#111827" />
          {/* Paws */}
          <ellipse cx="140" cy="290" rx="14" ry="8" fill="#fff" strokeWidth={2.5} />
          <ellipse cx="210" cy="290" rx="14" ry="8" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "woodland-badger-by-burrow-coloring-page":
      return (
        <g>
          {/* Earthen burrow entrance mound */}
          <path d="M50 360 Q120 260 220 270 Q320 280 370 360 Z" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="140" cy="320" rx="45" ry="25" fill="#111827" />
          {/* Sturdy low-slung badger body */}
          <ellipse cx="240" cy="260" rx="85" ry="50" fill="#fff" strokeWidth={4} />
          {/* Pointed badger snout & wedge head */}
          <polygon points="150,225 105,255 160,275" fill="#fff" strokeWidth={3.5} />
          {/* Distinctive black eye stripes on white head */}
          <polygon points="115,245 155,225 160,240 125,255" fill="#111827" />
          <circle cx="130" cy="245" r="4" fill="#fff" />
          <circle cx="102" cy="255" r="5" fill="#111827" />
          {/* Small rounded ears */}
          <circle cx="170" cy="225" r="9" fill="#fff" strokeWidth={2.5} />
          {/* Heavy digging front claws */}
          <rect x="180" y="295" width="22" height="35" rx="5" fill="#fff" strokeWidth={3} />
          <line x1="185" y1="330" x2="182" y2="345" strokeWidth={3} stroke="#111827" />
          <line x1="192" y1="330" x2="192" y2="347" strokeWidth={3} stroke="#111827" />
          <line x1="199" y1="330" x2="202" y2="345" strokeWidth={3} stroke="#111827" />
          <rect x="270" y="295" width="20" height="35" rx="5" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "river-otter-on-mudslide-coloring-sheet":
      return (
        <g>
          {/* Muddy riverbank slide slope */}
          <path d="M30 180 Q150 200 360 360" fill="none" strokeWidth={8} stroke="#111827" />
          {/* Water splash at bottom of slide */}
          <path d="M260 360 Q310 330 360 360" fill="none" strokeWidth={3.5} />
          <circle cx="310" cy="325" r="6" fill="#fff" strokeWidth={2} />
          <circle cx="335" cy="315" r="5" fill="#fff" strokeWidth={2} />
          {/* Sleek otter sliding on its belly */}
          <ellipse cx="180" cy="220" rx="85" ry="35" fill="#fff" strokeWidth={4} transform="rotate(25 180 220)" />
          {/* Happy otter head */}
          <circle cx="250" cy="265" r="28" fill="#fff" strokeWidth={3.5} />
          <circle cx="238" cy="245" r="8" fill="#fff" strokeWidth={2.5} />
          <circle cx="265" cy="248" r="8" fill="#fff" strokeWidth={2.5} />
          <circle cx="245" cy="262" r="4.5" fill="#111827" />
          <circle cx="262" cy="262" r="4.5" fill="#111827" />
          <ellipse cx="254" cy="272" rx="5" ry="4" fill="#111827" />
          <path d="M248 278 Q254 284 260 278" fill="none" strokeWidth={2} />
          {/* Whiskers */}
          <line x1="240" y1="272" x2="225" y2="270" strokeWidth={2} />
          <line x1="268" y1="272" x2="283" y2="270" strokeWidth={2} />
          {/* Tucked front paws & long tapered muscular tail */}
          <ellipse cx="215" cy="275" rx="14" ry="10" fill="#fff" strokeWidth={2.5} />
          <path d="M110 180 C80 150, 50 140, 40 135" fill="none" strokeWidth={12} stroke="#fff" />
          <path d="M110 180 C80 150, 50 140, 40 135" fill="none" strokeWidth={3.5} stroke="#111827" />
        </g>
      );

    case "pine-marten-leaping-coloring-page":
      return (
        <g>
          {/* Pine branches with needle sprays */}
          <polygon points="60,120 20,180 100,180" fill="#fff" strokeWidth={2.5} />
          <polygon points="320,240 280,310 360,310" fill="#fff" strokeWidth={2.5} />
          {/* Sleek acrobatic marten arched in mid-leap */}
          <path d="M100 170 C140 110, 240 120, 270 200 C250 230, 160 210, 100 170 Z" fill="#fff" strokeWidth={4} />
          {/* Creamy yellow throat patch */}
          <ellipse cx="130" cy="165" rx="18" ry="12" fill="#fff" strokeWidth={2.5} />
          {/* Marten alert face & pointed muzzle */}
          <circle cx="105" cy="155" r="24" fill="#fff" strokeWidth={3.5} />
          <circle cx="85" cy="135" r="10" fill="#fff" strokeWidth={2.5} />
          <circle cx="115" cy="132" r="10" fill="#fff" strokeWidth={2.5} />
          <circle cx="98" cy="152" r="4" fill="#111827" />
          <circle cx="92" cy="160" r="3.5" fill="#111827" />
          {/* Extended outstretched paws */}
          <path d="M115 185 L90 220" strokeWidth={5} stroke="#111827" strokeLinecap="round" />
          <path d="M260 210 L290 250" strokeWidth={5} stroke="#111827" strokeLinecap="round" />
          {/* Long bushy trailing tail */}
          <path d="M260 190 Q340 170 330 250" fill="none" strokeWidth={10} stroke="#fff" />
          <path d="M260 190 Q340 170 330 250" fill="none" strokeWidth={3.5} stroke="#111827" />
        </g>
      );

    default:
      return null;
  }
}
