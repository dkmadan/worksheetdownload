import React from "react";

export function renderArcticAndReptiles(slug: string): React.ReactNode | null {
  switch (slug) {
    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 5: ARCTIC & POLAR ANIMALS
    // ══════════════════════════════════════════════════════════════════
    case "polar-bear-mother-and-cub-coloring-page":
    case "polar-bear-and-cub-on-iceberg-coloring-page":
      return (
        <g>
          {/* Floating jagged ice floe */}
          <polygon points="50,330 90,300 230,290 350,320 310,360 80,360" fill="#fff" strokeWidth={3.5} />
          {/* Mother Polar Bear body */}
          <ellipse cx="180" cy="210" rx="90" ry="70" fill="#fff" strokeWidth={4} />
          {/* Thick legs */}
          <rect x="110" y="260" width="30" height="50" rx="10" fill="#fff" strokeWidth={3.5} />
          <rect x="160" y="260" width="30" height="50" rx="10" fill="#fff" strokeWidth={3.5} />
          <rect x="220" y="260" width="30" height="50" rx="10" fill="#fff" strokeWidth={3.5} />
          {/* Head & neck */}
          <ellipse cx="90" cy="150" rx="40" ry="30" fill="#fff" strokeWidth={3.5} transform="rotate(-15 90 150)" />
          {/* Small rounded polar ears */}
          <circle cx="105" cy="125" r="10" fill="#fff" strokeWidth={2.5} />
          {/* Black nose & eye */}
          <ellipse cx="65" cy="155" rx="8" ry="6" fill="#111827" />
          <circle cx="95" cy="142" r="5" fill="#111827" />
          <circle cx="93" cy="140" r="1.5" fill="#fff" stroke="none" />
          {/* Little cub beside mother */}
          <ellipse cx="280" cy="250" rx="40" ry="32" fill="#fff" strokeWidth={3} />
          <circle cx="260" cy="225" r="18" fill="#fff" strokeWidth={2.5} />
          <circle cx="255" cy="215" r="5" fill="#fff" strokeWidth={2} />
          <circle cx="250" cy="228" r="4" fill="#111827" />
          <circle cx="256" cy="222" r="3" fill="#111827" />
          <rect x="260" y="275" width="14" height="25" rx="5" fill="#fff" strokeWidth={2.5} />
          <rect x="290" y="275" width="14" height="25" rx="5" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "emperor-penguin-chick-coloring-page":
      return (
        <g>
          {/* Snowbank ice shelf */}
          <path d="M40 350 Q200 320 360 350" fill="none" strokeWidth={3.5} />
          {/* Fluffy pear-shaped penguin chick body */}
          <ellipse cx="200" cy="230" rx="85" ry="105" fill="#fff" strokeWidth={4} />
          {/* White belly arch mask */}
          <path d="M150 170 C130 220, 140 280, 200 310 C260 280, 270 220, 250 170 Z" fill="#fff" strokeWidth={2.5} strokeDasharray="6 4" />
          {/* Penguin head */}
          <circle cx="200" cy="120" r="45" fill="#fff" strokeWidth={3.5} />
          {/* Iconic chick eye-mask patches */}
          <ellipse cx="178" cy="118" rx="14" ry="16" fill="#fff" strokeWidth={2} />
          <circle cx="178" cy="118" r="7" fill="#111827" />
          <circle cx="176" cy="115" r="2" fill="#fff" stroke="none" />
          <ellipse cx="222" cy="118" rx="14" ry="16" fill="#fff" strokeWidth={2} />
          <circle cx="222" cy="118" r="7" fill="#111827" />
          <circle cx="220" cy="115" r="2" fill="#fff" stroke="none" />
          {/* Pointed beak */}
          <polygon points="192,128 208,128 200,145" fill="#111827" />
          {/* Flippers resting at sides */}
          <ellipse cx="120" cy="225" rx="18" ry="50" fill="#fff" strokeWidth={3} transform="rotate(20 120 225)" />
          <ellipse cx="280" cy="225" rx="18" ry="50" fill="#fff" strokeWidth={3} transform="rotate(-20 280 225)" />
          {/* Webbed feet */}
          <ellipse cx="165" cy="335" rx="25" ry="12" fill="#fff" strokeWidth={3} />
          <ellipse cx="235" cy="335" rx="25" ry="12" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "narwhal-with-spiral-tusk-coloring-page":
    case "magical-narwhal-tusk-whale-coloring-page":
      return (
        <g>
          {/* Sea waves */}
          <path d="M20 330 Q100 300 200 330 T380 330" fill="none" strokeWidth={3.5} />
          {/* Narwhal body leaping upwards */}
          <path d="M120 270 C80 250, 70 190, 110 160 C160 120, 260 140, 290 200 C320 250, 260 290, 200 290 C160 290, 130 280, 120 270 Z" fill="#fff" strokeWidth={4} />
          {/* Tail flukes */}
          <path d="M290 200 C330 170, 365 160, 380 170 C365 190, 345 220, 340 235 C355 240, 375 255, 370 270 C345 260, 320 230, 290 220" fill="#fff" strokeWidth={3.5} />
          {/* Rounded whale head */}
          <circle cx="110" cy="165" r="38" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="115" cy="160" rx="6" ry="8" fill="#111827" />
          <circle cx="113" cy="157" r="2" fill="#fff" stroke="none" />
          <path d="M95 180 Q110 192 125 180" fill="none" strokeWidth={2.5} />
          {/* Long spiral unicorn tusk extending into sky */}
          <polygon points="90,145 80,135 15,25 25,20" fill="#fff" strokeWidth={3.5} />
          <line x1="75" y1="125" x2="85" y2="130" strokeWidth={2.5} />
          <line x1="58" y1="95" x2="68" y2="100" strokeWidth={2.5} />
          <line x1="42" y1="65" x2="52" y2="70" strokeWidth={2.5} />
          <line x1="26" y1="35" x2="36" y2="40" strokeWidth={2.5} />
          <ellipse cx="160" cy="240" rx="25" ry="14" fill="#fff" strokeWidth={3} transform="rotate(30 160 240)" />
        </g>
      );

    case "walrus-on-rocky-ice-coast-coloring-page":
    case "tusked-walrus-resting-on-ice-floe-coloring-page":
      return (
        <g>
          {/* Ice floe base */}
          <polygon points="30,340 100,310 320,310 370,350 40,360" fill="#fff" strokeWidth={3.5} />
          {/* Heavy rounded walrus body */}
          <path d="M120 280 C90 240, 110 160, 190 140 C280 120, 330 200, 320 270 C310 310, 230 320, 140 310 Z" fill="#fff" strokeWidth={4} />
          <ellipse cx="150" cy="180" rx="35" ry="25" fill="#fff" strokeWidth={3.5} />
          <circle cx="150" cy="150" r="7" fill="#111827" />
          <circle cx="148" cy="147" r="2" fill="#fff" stroke="none" />
          <ellipse cx="140" cy="175" rx="4" ry="6" fill="#111827" />
          <ellipse cx="155" cy="175" rx="4" ry="6" fill="#111827" />
          {/* Long ivory tusks */}
          <path d="M135 195 C130 240, 125 270, 130 290 C138 290, 145 260, 148 200 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M158 195 C155 240, 150 270, 155 290 C163 290, 170 260, 172 200 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M180 270 C190 310, 220 320, 240 310 C230 280, 210 260, 180 270 Z" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "arctic-fox-in-winter-coat-coloring-page":
    case "fluffy-white-arctic-fox-coloring-page":
      return (
        <g>
          <path d="M40 340 Q180 300 360 340" fill="none" strokeWidth={3.5} />
          <ellipse cx="200" cy="240" rx="85" ry="65" fill="#fff" strokeWidth={4} />
          <circle cx="150" cy="180" r="42" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="125" cy="140" rx="14" ry="18" fill="#fff" strokeWidth={3} />
          <ellipse cx="165" cy="140" rx="14" ry="18" fill="#fff" strokeWidth={3} />
          <path d="M135 180 Q145 190 155 180" fill="none" strokeWidth={3} />
          <ellipse cx="125" cy="195" rx="6" ry="5" fill="#111827" />
          {/* Huge fluffy tail wrapped around */}
          <path d="M120 250 C80 280, 130 330, 230 320 C320 310, 330 230, 290 190 C260 160, 220 200, 250 240" fill="#fff" strokeWidth={4} />
          <path d="M80 80 L80 110 M65 95 L95 95" strokeWidth={2} strokeLinecap="round" />
          <path d="M320 80 L320 110 M305 95 L335 95" strokeWidth={2} strokeLinecap="round" />
        </g>
      );

    case "harp-seal-pup-on-ice-coloring-page":
    case "playful-harp-seal-pup-coloring-page":
      return (
        <g>
          <ellipse cx="200" cy="320" rx="160" ry="30" fill="#fff" strokeWidth={3} />
          <ellipse cx="200" cy="220" rx="95" ry="65" fill="#fff" strokeWidth={4} />
          <circle cx="120" cy="190" r="50" fill="#fff" strokeWidth={3.5} />
          <circle cx="105" cy="175" r="14" fill="#111827" />
          <circle cx="102" cy="170" r="4.5" fill="#fff" stroke="none" />
          <circle cx="138" cy="175" r="14" fill="#111827" />
          <circle cx="135" cy="170" r="4.5" fill="#fff" stroke="none" />
          <polygon points="122,192 116,202 128,202" fill="#111827" />
          <path d="M112 210 Q122 220 132 210" fill="none" strokeWidth={2.5} />
          <ellipse cx="180" cy="265" rx="25" ry="14" fill="#fff" strokeWidth={3} />
          <ellipse cx="295" cy="225" rx="20" ry="12" fill="#fff" strokeWidth={3} transform="rotate(20 295 225)" />
        </g>
      );

    case "snowy-owl-soaring-over-tundra-coloring-page":
      return (
        <g>
          <polygon points="30,340 120,290 220,340" fill="#fff" strokeWidth={2.5} />
          <polygon points="180,340 280,270 380,340" fill="#fff" strokeWidth={2.5} />
          <ellipse cx="200" cy="180" rx="35" ry="50" fill="#fff" strokeWidth={3.5} />
          <circle cx="200" cy="120" r="32" fill="#fff" strokeWidth={3.5} />
          <circle cx="188" cy="118" r="8" fill="#111827" />
          <circle cx="186" cy="116" r="2.5" fill="#fff" stroke="none" />
          <circle cx="212" cy="118" r="8" fill="#111827" />
          <circle cx="210" cy="116" r="2.5" fill="#fff" stroke="none" />
          <polygon points="197,125 203,125 200,136" fill="#111827" />
          <path d="M175 160 C120 110, 60 100, 30 130 C50 160, 90 200, 170 195 Z" fill="#fff" strokeWidth={4} />
          <path d="M225 160 C280 110, 340 100, 370 130 C350 160, 310 200, 230 195 Z" fill="#fff" strokeWidth={4} />
          <polygon points="185,225 200,265 215,225" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "atlantic-puffin-on-sea-cliff-coloring-page":
    case "atlantic-puffin-with-striped-beak-coloring-page":
      return (
        <g>
          <polygon points="40,360 40,280 260,280 360,360" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="180" cy="200" rx="55" ry="75" fill="#fff" strokeWidth={4} />
          <path d="M140 170 C130 220, 140 260, 180 270 C200 250, 190 200, 170 170 Z" fill="#fff" strokeWidth={2.5} />
          <circle cx="160" cy="120" r="35" fill="#fff" strokeWidth={3.5} />
          <circle cx="150" cy="115" r="6" fill="#111827" />
          <polygon points="175,100 230,120 175,145" fill="#fff" strokeWidth={3.5} />
          <line x1="195" y1="107" x2="195" y2="137" strokeWidth={2.5} />
          <line x1="212" y1="114" x2="212" y2="130" strokeWidth={2.5} />
          <ellipse cx="215" cy="145" rx="12" ry="4" fill="#fff" strokeWidth={2} transform="rotate(30 215 145)" />
          <rect x="155" y="270" width="14" height="20" fill="#111827" />
          <polygon points="145,290 175,290 160,280" fill="#fff" strokeWidth={2.5} />
          <rect x="185" y="270" width="14" height="20" fill="#111827" />
          <polygon points="175,290 205,290 190,280" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "beluga-whale-swimming-coloring-page":
    case "smiling-beluga-white-whale-coloring-page":
      return (
        <g>
          <path d="M20 330 Q100 300 200 330 T380 330" fill="none" strokeWidth={3.5} />
          <path d="M70 240 C50 210, 60 160, 110 140 C170 120, 260 140, 300 190 C340 240, 290 280, 210 280 C140 280, 90 260, 70 240 Z" fill="#fff" strokeWidth={4} />
          <circle cx="115" cy="150" r="38" fill="#fff" strokeWidth={3.5} />
          <path d="M75 175 Q105 195 135 175" fill="none" strokeWidth={3.5} />
          <ellipse cx="125" cy="155" rx="6" ry="8" fill="#111827" />
          <circle cx="123" cy="152" r="2" fill="#fff" stroke="none" />
          <ellipse cx="165" cy="235" rx="25" ry="15" fill="#fff" strokeWidth={3} transform="rotate(25 165 235)" />
          <path d="M295 195 C330 165, 365 155, 380 165 C365 185, 345 210, 340 225 C355 230, 375 245, 370 260 C345 250, 320 225, 295 210" fill="#fff" strokeWidth={3.5} />
        </g>
      );

    case "reindeer-caribou-tundra-coloring-page":
      return (
        <g>
          <path d="M30 350 Q180 320 370 350" fill="none" strokeWidth={3.5} />
          <ellipse cx="210" cy="220" rx="90" ry="65" fill="#fff" strokeWidth={4} />
          <polygon points="135,140 75,160 90,195 150,180" fill="#fff" strokeWidth={3.5} />
          <circle cx="85" cy="175" r="6" fill="#111827" />
          <circle cx="120" cy="155" r="5" fill="#111827" />
          <path d="M130 130 C120 80, 100 40, 80 50 M100 65 L80 70 M110 90 L90 100" fill="none" strokeWidth={4} strokeLinecap="round" />
          <path d="M140 130 C155 75, 185 35, 215 45 M170 65 L190 70 M160 90 L180 100" fill="none" strokeWidth={4} strokeLinecap="round" />
          <rect x="150" y="280" width="18" height="65" rx="5" fill="#fff" strokeWidth={3} />
          <rect x="185" y="280" width="18" height="65" rx="5" fill="#fff" strokeWidth={3} />
          <rect x="245" y="280" width="18" height="65" rx="5" fill="#fff" strokeWidth={3} />
          <rect x="275" y="280" width="18" height="65" rx="5" fill="#fff" strokeWidth={3} />
          <ellipse cx="159" cy="345" rx="12" ry="7" fill="#111827" />
          <ellipse cx="194" cy="345" rx="12" ry="7" fill="#111827" />
          <ellipse cx="254" cy="345" rx="12" ry="7" fill="#111827" />
          <ellipse cx="284" cy="345" rx="12" ry="7" fill="#111827" />
        </g>
      );

    case "musk-ox-in-tundra-breeze-coloring-page":
      return (
        <g>
          {/* Windswept tundra horizon */}
          <path d="M20 340 Q180 320 380 340" fill="none" strokeWidth={3} />
          <path d="M40 80 Q100 70 160 85" fill="none" strokeWidth={2} strokeLinecap="round" strokeDasharray="8 6" />
          <path d="M220 90 Q300 80 370 95" fill="none" strokeWidth={2} strokeLinecap="round" strokeDasharray="8 6" />
          {/* Shaggy long outer coat skirt hanging down */}
          <path d="M80 230 C70 290 85 330 110 330 L310 330 C330 330 340 280 330 220 C310 180 270 160 210 160 C150 160 100 185 80 230 Z" fill="#fff" strokeWidth={4} />
          {/* Long shaggy fur fringe details */}
          <path d="M95 330 L105 310 L115 330 L125 310 L135 330 L145 310 L155 330 L165 310 L175 330 L185 310 L195 330 L205 310 L215 330 L225 310 L235 330 L245 310 L255 330 L265 310 L275 330 L285 310 L295 330" fill="none" strokeWidth={2.5} />
          {/* Heavy massive shoulder hump */}
          <path d="M120 180 Q180 140 240 165" fill="none" strokeWidth={3.5} />
          {/* Head lowered against wind */}
          <ellipse cx="110" cy="210" rx="42" ry="48" fill="#fff" strokeWidth={3.5} />
          {/* Massive curved horns hooking downward and up */}
          <path d="M110 170 C80 170 60 200 65 240 C68 250 78 245 80 235 C75 210 90 190 110 185" fill="#fff" strokeWidth={3.5} />
          <path d="M110 170 C140 170 160 200 155 240 C152 250 142 245 140 235 C145 210 130 190 110 185" fill="#fff" strokeWidth={3.5} />
          {/* Muzzle & nose */}
          <ellipse cx="110" cy="235" rx="18" ry="12" fill="#fff" strokeWidth={2.5} />
          <circle cx="104" cy="235" r="3" fill="#111827" />
          <circle cx="116" cy="235" r="3" fill="#111827" />
          <circle cx="92" cy="205" r="4.5" fill="#111827" />
          <circle cx="128" cy="205" r="4.5" fill="#111827" />
          {/* Sturdy hooves peeking under skirt */}
          <rect x="125" y="325" width="22" height="20" rx="4" fill="#fff" strokeWidth={3} />
          <rect x="165" y="325" width="22" height="20" rx="4" fill="#fff" strokeWidth={3} />
          <rect x="250" y="325" width="22" height="20" rx="4" fill="#fff" strokeWidth={3} />
          <rect x="290" y="325" width="22" height="20" rx="4" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "snow-leopard-on-snowy-peak-coloring-page":
      return (
        <g>
          {/* Jagged icy mountain crags */}
          <polygon points="20,360 90,240 180,360" fill="#fff" strokeWidth={3} />
          <polygon points="140,360 250,210 380,360" fill="#fff" strokeWidth={3} />
          <path d="M90 240 L110 270 L80 280 L100 300" fill="none" strokeWidth={2} />
          <path d="M250 210 L270 245 L240 260 L265 285" fill="none" strokeWidth={2} />
          {/* Rocky cliff ledge */}
          <path d="M60 280 Q200 270 340 290 L320 350 L70 350 Z" fill="#fff" strokeWidth={3.5} />
          {/* Snow leopard body crouched on rocky perch */}
          <ellipse cx="200" cy="230" rx="75" ry="42" fill="#fff" strokeWidth={4} />
          {/* Strong shoulders and paws */}
          <ellipse cx="145" cy="265" rx="16" ry="24" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="180" cy="270" rx="15" ry="22" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="260" cy="265" rx="20" ry="25" fill="#fff" strokeWidth={3.5} />
          {/* Cat head with alert ears */}
          <circle cx="125" cy="180" r="32" fill="#fff" strokeWidth={3.5} />
          <polygon points="105,160 115,135 130,155" fill="#fff" strokeWidth={3} />
          <polygon points="135,155 150,135 155,160" fill="#fff" strokeWidth={3} />
          {/* Eyes, muzzle, nose */}
          <ellipse cx="115" cy="175" rx="5" ry="6" fill="#111827" />
          <circle cx="113" cy="173" r="1.5" fill="#fff" stroke="none" />
          <ellipse cx="138" cy="175" rx="5" ry="6" fill="#111827" />
          <circle cx="136" cy="173" r="1.5" fill="#fff" stroke="none" />
          <polygon points="123,186 131,186 127,192" fill="#111827" />
          <path d="M121 193 Q127 198 133 193" fill="none" strokeWidth={2} />
          {/* Whiskers */}
          <line x1="95" y1="188" x2="115" y2="190" strokeWidth={1.5} />
          <line x1="95" y1="195" x2="115" y2="193" strokeWidth={1.5} />
          <line x1="139" y1="190" x2="159" y2="188" strokeWidth={1.5} />
          <line x1="139" y1="193" x2="159" y2="195" strokeWidth={1.5} />
          {/* Huge thick fluffy tail trailing over rock */}
          <path d="M270 235 C330 230 360 270 340 310 C325 335 295 325 290 310 C285 295 315 285 310 260" fill="none" strokeWidth={12} strokeLinecap="round" />
          {/* Rosette ring spots */}
          <circle cx="185" cy="215" r="8" fill="none" strokeWidth={2.5} strokeDasharray="5 3" />
          <circle cx="215" cy="210" r="9" fill="none" strokeWidth={2.5} strokeDasharray="5 3" />
          <circle cx="245" cy="225" r="8" fill="none" strokeWidth={2.5} strokeDasharray="5 3" />
          <circle cx="195" cy="240" r="8" fill="none" strokeWidth={2.5} strokeDasharray="5 3" />
          <circle cx="225" cy="245" r="9" fill="none" strokeWidth={2.5} strokeDasharray="5 3" />
        </g>
      );

    case "orca-whale-leaping-coloring-page":
      return (
        <g>
          {/* Splashing sea waves */}
          <path d="M20 330 C80 300 120 340 180 320 C240 300 280 340 380 320" fill="none" strokeWidth={4} />
          <path d="M60 360 C120 335 160 365 220 345 C280 330 320 360 370 345" fill="none" strokeWidth={3} />
          {/* Water splash droplets */}
          <circle cx="120" cy="290" r="5" fill="#fff" strokeWidth={2} />
          <circle cx="140" cy="270" r="4" fill="#fff" strokeWidth={2} />
          <circle cx="270" cy="280" r="5" fill="#fff" strokeWidth={2} />
          <circle cx="295" cy="295" r="4" fill="#fff" strokeWidth={2} />
          {/* Leaping Orca body in arch */}
          <path d="M80 270 C85 200 130 130 220 110 C290 95 330 135 340 185 C330 220 280 250 200 255 C140 260 95 285 80 270 Z" fill="#fff" strokeWidth={4} />
          {/* Prominent tall triangular dorsal fin */}
          <polygon points="190,118 220,35 235,110" fill="#fff" strokeWidth={4} />
          {/* Pectoral paddle flipper */}
          <path d="M205 200 C200 240 220 260 235 245 C240 230 235 205 225 195 Z" fill="#fff" strokeWidth={3.5} />
          {/* Tail flukes */}
          <path d="M80 270 C60 250 35 245 30 260 C40 275 60 285 75 285 C60 295 40 305 35 320 C45 325 70 315 85 290 Z" fill="#fff" strokeWidth={3.5} />
          {/* Iconic white eye patch */}
          <ellipse cx="280" cy="140" rx="16" ry="9" fill="#fff" strokeWidth={3} transform="rotate(-15 280 140)" />
          {/* Killer whale eye */}
          <circle cx="295" cy="155" r="4.5" fill="#111827" />
          {/* White chin and belly patch contour */}
          <path d="M270 190 C295 180 325 175 335 185 C320 205 285 225 230 230" fill="none" strokeWidth={2.5} strokeDasharray="6 3" />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 6: REPTILES & AMPHIBIANS (CRITICAL SCREENSHOT FIX)
    // ══════════════════════════════════════════════════════════════════
    case "tree-frog-on-lily-pad-coloring-page":
      return (
        <g>
          {/* Floating water lily pad */}
          <ellipse cx="200" cy="320" rx="160" ry="45" fill="#fff" strokeWidth={4} />
          <polygon points="200,320 290,290 320,335" fill="#fff" stroke="#111827" strokeWidth={3} />
          <path d="M80 300 C80 270, 100 270, 100 300 Z" fill="#fff" strokeWidth={2.5} />
          <path d="M95 295 C95 265, 115 265, 115 295 Z" fill="#fff" strokeWidth={2.5} />
          <ellipse cx="200" cy="215" rx="65" ry="55" fill="#fff" strokeWidth={4} />
          <path d="M150 200 Q200 230 250 200" fill="none" strokeWidth={3.5} />
          <path d="M140 220 C100 210, 80 260, 110 290 L150 260" fill="#fff" strokeWidth={3.5} />
          <path d="M260 220 C300 210, 320 260, 290 290 L250 260" fill="#fff" strokeWidth={3.5} />
          <path d="M170 230 L165 285" strokeWidth={3.5} />
          <circle cx="155" cy="290" r="5" fill="#fff" strokeWidth={2} />
          <circle cx="165" cy="294" r="5" fill="#fff" strokeWidth={2} />
          <circle cx="175" cy="290" r="5" fill="#fff" strokeWidth={2} />
          <path d="M230 230 L235 285" strokeWidth={3.5} />
          <circle cx="225" cy="290" r="5" fill="#fff" strokeWidth={2} />
          <circle cx="235" cy="294" r="5" fill="#fff" strokeWidth={2} />
          <circle cx="245" cy="290" r="5" fill="#fff" strokeWidth={2} />
          <circle cx="165" cy="140" r="28" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="165" cy="140" rx="14" ry="12" fill="#111827" />
          <circle cx="162" cy="136" r="4" fill="#fff" stroke="none" />
          <circle cx="235" cy="140" r="28" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="235" cy="140" rx="14" ry="12" fill="#111827" />
          <circle cx="232" cy="136" r="4" fill="#fff" stroke="none" />
        </g>
      );

    case "chameleon-catching-bug-coloring-page":
    case "chameleon-catching-insect-coloring-sheet":
      return (
        <g>
          {/* Tree branch */}
          <path d="M30 290 Q200 270 370 290" fill="none" strokeWidth={8} stroke="#111827" />
          <path d="M100 280 Q80 250 50 240 Q90 260 110 280" fill="#fff" strokeWidth={2.5} />
          <path d="M120 240 C110 180, 160 130, 230 140 C280 150, 290 210, 260 250 Z" fill="#fff" strokeWidth={4} />
          {/* Curled spiral tail */}
          <path d="M120 240 C80 240, 50 280, 70 320 C90 350, 140 340, 140 300 C140 270, 110 270, 110 290 C110 305, 125 305, 125 295" fill="none" strokeWidth={4.5} />
          <polygon points="230,140 270,95 290,140 295,190 250,190" fill="#fff" strokeWidth={3.5} />
          <circle cx="265" cy="150" r="18" fill="#fff" strokeWidth={3} />
          <circle cx="265" cy="150" r="5" fill="#111827" />
          <circle cx="263" cy="148" r="1.5" fill="#fff" stroke="none" />
          {/* Long curled tongue shooting out to catch fly */}
          <path d="M295 185 Q330 190 350 150" fill="none" strokeWidth={3.5} />
          <circle cx="350" cy="150" r="7" fill="#fff" strokeWidth={2.5} />
          <ellipse cx="360" cy="130" rx="6" ry="4" fill="#111827" />
          <path d="M358 126 Q355 118 360 120" strokeWidth={1.5} />
          <path d="M362 126 Q365 118 360 120" strokeWidth={1.5} />
          <ellipse cx="170" cy="275" rx="14" ry="10" fill="#fff" strokeWidth={3} />
          <ellipse cx="240" cy="275" rx="14" ry="10" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "giant-tortoise-grazing-coloring-page":
      return (
        <g>
          <line x1="40" y1="340" x2="360" y2="340" strokeWidth={3.5} stroke="#111827" />
          <path d="M80 340 L85 320 M85 340 L95 325" strokeWidth={2.5} />
          <path d="M290 340 L295 320 M295 340 L305 325" strokeWidth={2.5} />
          {/* High domed shell */}
          <path d="M100 280 C90 140, 310 140, 300 280 Z" fill="#fff" strokeWidth={4.5} />
          <polygon points="200,165 240,190 240,240 200,265 160,240 160,190" fill="#fff" strokeWidth={2.5} />
          <line x1="200" y1="165" x2="200" y2="140" strokeWidth={2.5} />
          <line x1="240" y1="190" x2="275" y2="180" strokeWidth={2.5} />
          <line x1="240" y1="240" x2="285" y2="250" strokeWidth={2.5} />
          <line x1="160" y1="190" x2="125" y2="180" strokeWidth={2.5} />
          <line x1="160" y1="240" x2="115" y2="250" strokeWidth={2.5} />
          {/* Wrinkled neck grazing */}
          <path d="M120 260 C90 260, 60 280, 50 310 C65 330, 95 315, 115 285" fill="#fff" strokeWidth={3.5} />
          <circle cx="58" cy="305" r="4.5" fill="#111827" />
          <rect x="130" y="275" width="30" height="65" rx="8" fill="#fff" strokeWidth={3.5} />
          <circle cx="138" cy="335" r="3" fill="#111827" />
          <circle cx="146" cy="335" r="3" fill="#111827" />
          <circle cx="154" cy="335" r="3" fill="#111827" />
          <rect x="240" y="275" width="30" height="65" rx="8" fill="#fff" strokeWidth={3.5} />
          <circle cx="248" cy="335" r="3" fill="#111827" />
          <circle cx="256" cy="335" r="3" fill="#111827" />
          <circle cx="264" cy="335" r="3" fill="#111827" />
        </g>
      );

    case "green-iguana-on-river-rock-coloring-page":
    case "green-iguana-on-riverbank-coloring-page":
      return (
        <g>
          {/* Riverbank rock */}
          <rect x="40" y="270" width="320" height="50" rx="15" fill="#fff" strokeWidth={3.5} />
          <line x1="60" y1="295" x2="340" y2="295" strokeWidth={2} strokeDasharray="15 10" />
          <path d="M100 240 C110 200, 240 200, 270 240 L260 270 L105 270 Z" fill="#fff" strokeWidth={4} />
          {/* Dorsal spines */}
          <polygon points="120,225 125,200 130,223" fill="#fff" strokeWidth={2} />
          <polygon points="135,220 140,195 145,218" fill="#fff" strokeWidth={2} />
          <polygon points="150,217 155,190 160,215" fill="#fff" strokeWidth={2} />
          <polygon points="165,215 170,188 175,213" fill="#fff" strokeWidth={2} />
          <polygon points="180,213 185,188 190,212" fill="#fff" strokeWidth={2} />
          <polygon points="195,213 200,190 205,213" fill="#fff" strokeWidth={2} />
          <polygon points="210,215 215,195 220,217" fill="#fff" strokeWidth={2} />
          <polygon points="110,235 60,240 70,265 110,265" fill="#fff" strokeWidth={3.5} />
          <circle cx="85" cy="245" r="5" fill="#111827" />
          <circle cx="95" cy="258" r="8" fill="#fff" strokeWidth={2.5} />
          <path d="M265 245 C320 230, 360 260, 370 310" fill="none" strokeWidth={4} />
          <path d="M115 265 L110 300 L95 305" fill="none" strokeWidth={3.5} />
          <path d="M245 265 L255 300 L270 305" fill="none" strokeWidth={3.5} />
        </g>
      );

    case "american-alligator-basking-coloring-sheet":
    case "american-alligator-sunbathing-coloring-sheet":
      return (
        <g>
          <path d="M30 330 Q120 310 220 330 T370 330" fill="none" strokeWidth={2.5} />
          <ellipse cx="200" cy="250" rx="110" ry="40" fill="#fff" strokeWidth={4} />
          <polygon points="140,230 150,215 160,230" fill="#fff" strokeWidth={2} />
          <polygon points="165,228 175,212 185,228" fill="#fff" strokeWidth={2} />
          <polygon points="190,225 200,210 210,225" fill="#fff" strokeWidth={2} />
          <polygon points="215,225 225,212 235,225" fill="#fff" strokeWidth={2} />
          <polygon points="240,228 250,215 260,228" fill="#fff" strokeWidth={2} />
          <path d="M110 240 L40 250 L40 265 L110 270 Z" fill="#fff" strokeWidth={3.5} />
          <circle cx="50" cy="248" r="3.5" fill="#111827" />
          <polygon points="65,263 70,256 75,263" fill="#fff" strokeWidth={1.5} />
          <polygon points="80,263 85,256 90,263" fill="#fff" strokeWidth={1.5} />
          <circle cx="105" cy="235" r="10" fill="#fff" strokeWidth={3} />
          <ellipse cx="105" cy="235" rx="3" ry="6" fill="#111827" />
          <path d="M295 240 C340 235, 370 260, 360 290" fill="none" strokeWidth={5} />
          <ellipse cx="130" cy="285" rx="16" ry="8" fill="#fff" strokeWidth={3} />
          <ellipse cx="260" cy="285" rx="16" ry="8" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "gecko-on-bamboo-stalk-coloring-page":
      return (
        <g>
          {/* Bamboo stalk */}
          <rect x="180" y="20" width="40" height="360" fill="#fff" strokeWidth={4} />
          <line x1="175" y1="120" x2="225" y2="120" strokeWidth={4} stroke="#111827" />
          <line x1="175" y1="240" x2="225" y2="240" strokeWidth={4} stroke="#111827" />
          {/* Gecko climbing up bamboo */}
          <ellipse cx="200" cy="180" rx="30" ry="55" fill="#fff" strokeWidth={4} />
          <ellipse cx="200" cy="110" rx="22" ry="28" fill="#fff" strokeWidth={3.5} />
          <circle cx="190" cy="105" r="5" fill="#111827" />
          <circle cx="210" cy="105" r="5" fill="#111827" />
          {/* Splayed toe pads clinging */}
          <path d="M175 160 L140 135" strokeWidth={3.5} />
          <circle cx="136" cy="132" r="5" fill="#111827" />
          <path d="M225 160 L260 135" strokeWidth={3.5} />
          <circle cx="264" cy="132" r="5" fill="#111827" />
          <path d="M175 210 L140 235" strokeWidth={3.5} />
          <circle cx="136" cy="238" r="5" fill="#111827" />
          <path d="M225 210 L260 235" strokeWidth={3.5} />
          <circle cx="264" cy="238" r="5" fill="#111827" />
          {/* Tail curving along stalk */}
          <path d="M200 235 Q205 310 185 360" fill="none" strokeWidth={4.5} />
        </g>
      );

    case "bearded-dragon-on-driftwood-coloring-page":
    case "bearded-dragon-basking-on-rock-coloring-page":
      return (
        <g>
          {/* Driftwood log */}
          <polygon points="50,350 130,290 280,290 350,350" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="190" cy="235" rx="85" ry="50" fill="#fff" strokeWidth={4} />
          <polygon points="125,200 65,225 125,260" fill="#fff" strokeWidth={3.5} />
          {/* Spiky beard */}
          <polygon points="105,255 100,270 115,260" fill="#fff" strokeWidth={2} />
          <polygon points="118,255 118,272 128,258" fill="#fff" strokeWidth={2} />
          <polygon points="85,245 78,258 92,250" fill="#fff" strokeWidth={2} />
          <circle cx="95" cy="225" r="6" fill="#111827" />
          <polygon points="150,265 155,278 162,265" fill="#fff" strokeWidth={2} />
          <polygon points="170,268 175,280 182,268" fill="#fff" strokeWidth={2} />
          <polygon points="190,268 195,280 202,268" fill="#fff" strokeWidth={2} />
          <path d="M260 240 C320 240, 360 270, 370 300" fill="none" strokeWidth={4.5} />
        </g>
      );

    case "poison-dart-frog-on-mushroom-coloring-page":
    case "poison-dart-frog-in-rainforest-coloring-page":
      return (
        <g>
          {/* Giant mushroom cap */}
          <path d="M100 240 C100 130, 300 130, 300 240 Z" fill="#fff" strokeWidth={4} />
          <circle cx="150" cy="180" r="14" fill="#111827" />
          <circle cx="250" cy="180" r="14" fill="#111827" />
          <circle cx="200" cy="150" r="14" fill="#111827" />
          {/* Mushroom stem */}
          <rect x="175" y="240" width="50" height="110" rx="10" fill="#fff" strokeWidth={3.5} />
          {/* Dart frog sitting atop mushroom cap */}
          <ellipse cx="200" cy="120" rx="40" ry="28" fill="#fff" strokeWidth={3.5} />
          <circle cx="180" cy="100" r="12" fill="#fff" strokeWidth={2.5} />
          <circle cx="180" cy="100" r="6" fill="#111827" />
          <circle cx="220" cy="100" r="12" fill="#fff" strokeWidth={2.5} />
          <circle cx="220" cy="100" r="6" fill="#111827" />
          {/* Suction toes */}
          <circle cx="160" cy="135" r="4.5" fill="#111827" />
          <circle cx="240" cy="135" r="4.5" fill="#111827" />
        </g>
      );

    case "box-turtle-in-forest-coloring-page":
      return (
        <g>
          {/* Forest floor with mushrooms */}
          <line x1="40" y1="330" x2="360" y2="330" strokeWidth={3.5} stroke="#111827" />
          {/* High domed box turtle shell with radiating pattern */}
          <path d="M110 270 C100 160, 290 160, 280 270 Z" fill="#fff" strokeWidth={4} />
          {/* Yellow starburst spots on dark shell */}
          <circle cx="195" cy="190" r="10" fill="#111827" />
          <circle cx="150" cy="225" r="9" fill="#111827" />
          <circle cx="195" cy="235" r="10" fill="#111827" />
          <circle cx="240" cy="225" r="9" fill="#111827" />
          {/* Head with bright orange-yellow spots */}
          <ellipse cx="85" cy="255" rx="25" ry="18" fill="#fff" strokeWidth={3.5} />
          <circle cx="75" cy="250" r="4.5" fill="#111827" />
          {/* Sturdy clawed legs */}
          <rect x="130" y="270" width="25" height="50" rx="8" fill="#fff" strokeWidth={3} />
          <rect x="230" y="270" width="25" height="50" rx="8" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "gila-monster-on-desert-stone-coloring-page":
    case "komodo-dragon-on-volcanic-rock-coloring-page":
      return (
        <g>
          {/* Desert rocks */}
          <polygon points="40,350 130,290 270,300 360,350" fill="#fff" strokeWidth={3.5} />
          {/* Heavy beaded Gila Monster body */}
          <ellipse cx="200" cy="240" rx="90" ry="48" fill="#fff" strokeWidth={4} />
          {/* Beaded pink and black pattern bands */}
          <path d="M150 200 Q160 240 150 280" fill="none" strokeWidth={8} stroke="#111827" />
          <path d="M200 195 Q210 240 200 285" fill="none" strokeWidth={8} stroke="#111827" />
          <path d="M245 200 Q255 240 245 280" fill="none" strokeWidth={8} stroke="#111827" />
          {/* Heavy rounded head */}
          <ellipse cx="105" cy="235" rx="35" ry="28" fill="#fff" strokeWidth={3.5} />
          <circle cx="95" cy="228" r="5" fill="#111827" />
          {/* Heavy fat sausage tail with rings */}
          <ellipse cx="295" cy="245" rx="40" ry="22" fill="#fff" strokeWidth={4} transform="rotate(15 295 245)" />
          <line x1="285" y1="225" x2="285" y2="265" strokeWidth={5} stroke="#111827" />
          <line x1="310" y1="230" x2="310" y2="265" strokeWidth={5} stroke="#111827" />
          {/* Strong short clawed legs */}
          <path d="M130 265 L115 310" strokeWidth={5} stroke="#111827" strokeLinecap="round" />
          <path d="M245 265 L260 310" strokeWidth={5} stroke="#111827" strokeLinecap="round" />
        </g>
      );

    default:
      return null;
  }
}
