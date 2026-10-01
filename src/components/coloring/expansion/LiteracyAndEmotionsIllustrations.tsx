import React from "react";

export function renderLiteracyAndEmotions(slug: string): React.ReactNode | null {
  switch (slug) {
    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 19: EARLY LITERACY & PHONICS FUN
    // ══════════════════════════════════════════════════════════════════
    case "alphabet-animal-train-a-to-z-coloring-page":
      return (
        <g>
          {/* Railroad track */}
          <line x1="20" y1="330" x2="380" y2="330" strokeWidth={4} stroke="#111827" />
          {/* Steam locomotive engine pulling train */}
          <rect x="220" y="190" width="130" height="90" rx="10" fill="#fff" strokeWidth={4} />
          {/* Engine cab */}
          <rect x="280" y="140" width="70" height="80" rx="8" fill="#fff" strokeWidth={3.5} />
          <rect x="295" y="155" width="40" height="35" rx="4" fill="#fff" strokeWidth={2} />
          {/* Smokestack puffing cloud */}
          <polygon points="240,190 230,130 260,130 250,190" fill="#111827" />
          <circle cx="245" cy="110" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="260" cy="85" r="18" fill="#fff" strokeWidth={2.5} />
          {/* Train cowcatcher grill */}
          <polygon points="350,250 380,280 350,280" fill="#fff" strokeWidth={3} />
          {/* Train wheels */}
          <circle cx="250" cy="295" r="24" fill="#fff" strokeWidth={4} />
          <circle cx="250" cy="295" r="8" fill="#111827" />
          <circle cx="310" cy="295" r="24" fill="#fff" strokeWidth={4} />
          <circle cx="310" cy="295" r="8" fill="#111827" />
          {/* Open flatcar with big alphabet letter blocks A, B, C */}
          <rect x="40" y="240" width="160" height="40" rx="4" fill="#fff" strokeWidth={3.5} />
          <circle cx="70" cy="295" r="18" fill="#fff" strokeWidth={3.5} />
          <circle cx="170" cy="295" r="18" fill="#fff" strokeWidth={3.5} />
          {/* Letter blocks */}
          <rect x="50" y="180" width="45" height="50" rx="5" fill="#fff" strokeWidth={3} />
          <text x="62" y="218" fontSize="28" fontWeight="bold" fill="#111827" stroke="none">A</text>
          <rect x="100" y="180" width="45" height="50" rx="5" fill="#fff" strokeWidth={3} />
          <text x="113" y="218" fontSize="28" fontWeight="bold" fill="#111827" stroke="none">B</text>
          <rect x="150" y="180" width="45" height="50" rx="5" fill="#fff" strokeWidth={3} />
          <text x="162" y="218" fontSize="28" fontWeight="bold" fill="#111827" stroke="none">C</text>
        </g>
      );

    case "rhyming-words-cat-hat-bat-scene-coloring-page":
      return (
        <g>
          {/* Smiling Cat wearing tall top Hat */}
          {/* Cat body sitting */}
          <ellipse cx="190" cy="240" rx="70" ry="60" fill="#fff" strokeWidth={4} />
          {/* Cat head */}
          <circle cx="190" cy="150" r="45" fill="#fff" strokeWidth={3.5} />
          {/* Cat ears */}
          <polygon points="155,120 140,75 180,105" fill="#fff" strokeWidth={3} />
          <polygon points="225,120 240,75 200,105" fill="#fff" strokeWidth={3} />
          {/* Tall top Hat perched on head */}
          <rect x="165" y="50" width="50" height="60" rx="4" fill="#fff" strokeWidth={3.5} />
          <line x1="140" y1="110" x2="240" y2="110" strokeWidth={6} stroke="#111827" strokeLinecap="round" />
          <rect x="165" y="90" width="50" height="15" fill="#111827" />
          {/* Cat face */}
          <circle cx="175" cy="145" r="5" fill="#111827" />
          <circle cx="205" cy="145" r="5" fill="#111827" />
          <polygon points="187,155 193,155 190,162" fill="#111827" />
          <path d="M182 165 Q190 172 198 165" fill="none" strokeWidth={2} />
          <line x1="160" y1="155" x2="140" y2="150" strokeWidth={2} />
          <line x1="160" y1="160" x2="140" y2="165" strokeWidth={2} />
          <line x1="220" y1="155" x2="240" y2="150" strokeWidth={2} />
          <line x1="220" y1="160" x2="240" y2="165" strokeWidth={2} />
          {/* Wooden baseball Bat held in paw */}
          <polygon points="270,140 290,140 280,310 270,310" fill="#fff" strokeWidth={3.5} transform="rotate(25 280 225)" />
          {/* Rhyming text banner labels CAT - HAT - BAT */}
          <text x="75" y="340" fontSize="24" fontWeight="bold" fill="#111827" stroke="none">CAT</text>
          <text x="175" y="340" fontSize="24" fontWeight="bold" fill="#111827" stroke="none">HAT</text>
          <text x="275" y="340" fontSize="24" fontWeight="bold" fill="#111827" stroke="none">BAT</text>
        </g>
      );

    case "word-family-at-house-coloring-page":
      return (
        <g>
          {/* Storybook cottage outline */}
          <polygon points="200,60 80,150 80,340 320,340 320,150" fill="#fff" strokeWidth={4} />
          {/* Roof eaves & chimney with smoke */}
          <rect x="250" y="70" width="25" height="50" fill="#fff" strokeWidth={3} />
          <circle cx="262" cy="55" r="8" fill="#fff" strokeWidth={2} />
          {/* Attic window labeled -AT Word Family */}
          <circle cx="200" cy="115" r="28" fill="#fff" strokeWidth={3} />
          <text x="180" y="123" fontSize="20" fontWeight="bold" fill="#111827" stroke="none">-AT</text>
          {/* 4 Windows each displaying an -at word */}
          {/* Window 1: cat */}
          <rect x="105" y="170" width="75" height="60" rx="5" fill="#fff" strokeWidth={2.5} />
          <text x="122" y="208" fontSize="22" fontWeight="bold" fill="#111827" stroke="none">cat</text>
          {/* Window 2: hat */}
          <rect x="220" y="170" width="75" height="60" rx="5" fill="#fff" strokeWidth={2.5} />
          <text x="237" y="208" fontSize="22" fontWeight="bold" fill="#111827" stroke="none">hat</text>
          {/* Window 3: mat */}
          <rect x="105" y="250" width="75" height="60" rx="5" fill="#fff" strokeWidth={2.5} />
          <text x="120" y="288" fontSize="22" fontWeight="bold" fill="#111827" stroke="none">mat</text>
          {/* Window 4: rat */}
          <rect x="220" y="250" width="75" height="60" rx="5" fill="#fff" strokeWidth={2.5} />
          <text x="238" y="288" fontSize="22" fontWeight="bold" fill="#111827" stroke="none">rat</text>
        </g>
      );

    case "uppercase-and-lowercase-castle-coloring-page":
      return (
        <g>
          {/* Castle fortress walls & battlements */}
          <rect x="100" y="170" width="200" height="150" fill="#fff" strokeWidth={4} />
          <polygon points="100,170 115,150 135,150 150,170 165,150 185,150 200,170 215,150 235,150 250,170 265,150 285,150 300,170" fill="#fff" strokeWidth={3} />
          {/* Central arched gate door with portcullis */}
          <path d="M165 320 L165 240 Q200 215 235 240 L235 320 Z" fill="#111827" />
          {/* Left turret tower */}
          <rect x="60" y="130" width="55" height="190" fill="#fff" strokeWidth={4} />
          <polygon points="50,130 87,60 125,130" fill="#fff" strokeWidth={3.5} />
          {/* Flag on left turret: Aa */}
          <line x1="87" y1="60" x2="87" y2="25" strokeWidth={3} stroke="#111827" />
          <polygon points="87,25 125,37 87,50" fill="#fff" strokeWidth={2.5} />
          <text x="92" y="42" fontSize="16" fontWeight="bold" fill="#111827" stroke="none">Aa</text>
          {/* Right turret tower */}
          <rect x="285" y="130" width="55" height="190" fill="#fff" strokeWidth={4} />
          <polygon points="275,130 312,60 350,130" fill="#fff" strokeWidth={3.5} />
          {/* Flag on right turret: Bb */}
          <line x1="312" y1="60" x2="312" y2="25" strokeWidth={3} stroke="#111827" />
          <polygon points="312,25 350,37 312,50" fill="#fff" strokeWidth={2.5} />
          <text x="317" y="42" fontSize="16" fontWeight="bold" fill="#111827" stroke="none">Bb</text>
        </g>
      );

    case "short-vowels-sound-tree-coloring-page":
      return (
        <g>
          {/* Tree trunk */}
          <polygon points="180,180 170,350 230,350 220,180" fill="#fff" strokeWidth={4} />
          {/* Tree canopy */}
          <circle cx="200" cy="140" r="95" fill="#fff" strokeWidth={4} />
          {/* 5 Big apples prominently displaying vowel letters: A, E, I, O, U */}
          {/* Apple A */}
          <circle cx="140" cy="100" r="22" fill="#fff" strokeWidth={3} />
          <text x="132" y="108" fontSize="24" fontWeight="bold" fill="#111827" stroke="none">A</text>
          {/* Apple E */}
          <circle cx="260" cy="100" r="22" fill="#fff" strokeWidth={3} />
          <text x="253" y="108" fontSize="24" fontWeight="bold" fill="#111827" stroke="none">E</text>
          {/* Apple I */}
          <circle cx="200" cy="75" r="22" fill="#fff" strokeWidth={3} />
          <text x="196" y="83" fontSize="24" fontWeight="bold" fill="#111827" stroke="none">I</text>
          {/* Apple O */}
          <circle cx="150" cy="170" r="22" fill="#fff" strokeWidth={3} />
          <text x="142" y="178" fontSize="24" fontWeight="bold" fill="#111827" stroke="none">O</text>
          {/* Apple U */}
          <circle cx="250" cy="170" r="22" fill="#fff" strokeWidth={3} />
          <text x="242" y="178" fontSize="24" fontWeight="bold" fill="#111827" stroke="none">U</text>
        </g>
      );

    case "cvc-word-blending-bridge-coloring-page":
      return (
        <g>
          {/* River stream flowing */}
          <path d="M40 330 Q200 290 360 330" fill="none" strokeWidth={3} />
          {/* Glowing smiling Sun destination on right bank */}
          <circle cx="330" cy="100" r="35" fill="#fff" strokeWidth={4} />
          <circle cx="320" cy="95" r="4" fill="#111827" />
          <circle cx="340" cy="95" r="4" fill="#111827" />
          <path d="M322 110 Q330 118 338 110" fill="none" strokeWidth={2} />
          <line x1="330" y1="55" x2="330" y2="40" strokeWidth={3} />
          <line x1="285" y1="100" x2="270" y2="100" strokeWidth={3} />
          {/* Three large circular stepping stones labeled S - U - N */}
          {/* Stone S */}
          <ellipse cx="100" cy="240" rx="35" ry="25" fill="#fff" strokeWidth={3.5} />
          <text x="91" y="248" fontSize="28" fontWeight="bold" fill="#111827" stroke="none">S</text>
          {/* Stone U */}
          <ellipse cx="190" cy="210" rx="35" ry="25" fill="#fff" strokeWidth={3.5} />
          <text x="180" y="218" fontSize="28" fontWeight="bold" fill="#111827" stroke="none">U</text>
          {/* Stone N */}
          <ellipse cx="280" cy="180" rx="35" ry="25" fill="#fff" strokeWidth={3.5} />
          <text x="270" y="188" fontSize="28" fontWeight="bold" fill="#111827" stroke="none">N</text>
        </g>
      );

    case "consonant-digraph-ship-sh-and-ch-coloring-page":
      return (
        <g>
          {/* Water waves */}
          <path d="M30 320 Q110 300 200 320 T370 320" fill="none" strokeWidth={3.5} />
          {/* Sailing ship hull */}
          <polygon points="60,250 330,250 290,320 100,320" fill="#fff" strokeWidth={4} />
          {/* Main masts */}
          <line x1="140" y1="250" x2="140" y2="70" strokeWidth={5} stroke="#111827" />
          <line x1="250" y1="250" x2="250" y2="70" strokeWidth={5} stroke="#111827" />
          {/* Sail 1 labeled 'SH' with shell drawing */}
          <polygon points="90,80 140,80 140,210 80,210" fill="#fff" strokeWidth={3.5} />
          <text x="96" y="145" fontSize="30" fontWeight="bold" fill="#111827" stroke="none">SH</text>
          {/* Sail 2 labeled 'CH' with cherry drawing */}
          <polygon points="200,80 250,80 250,210 190,210" fill="#fff" strokeWidth={3.5} />
          <text x="206" y="145" fontSize="30" fontWeight="bold" fill="#111827" stroke="none">CH</text>
          {/* Pirate skull/flag on masthead */}
          <polygon points="140,70 170,80 140,90" fill="#111827" />
        </g>
      );

    case "storybook-cozy-reading-nook-coloring-page":
      return (
        <g>
          {/* Cozy overstuffed armchair */}
          <path d="M120 160 C90 160, 90 280, 110 310 L270 310 C290 280, 290 160, 260 160 Z" fill="#fff" strokeWidth={4} />
          <rect x="130" y="240" width="120" height="50" rx="10" fill="#fff" strokeWidth={3} />
          {/* Warm floor lamp beside chair */}
          <polygon points="280,120 340,120 330,80 290,80" fill="#fff" strokeWidth={3.5} />
          <line x1="310" y1="120" x2="310" y2="330" strokeWidth={4} stroke="#111827" />
          <ellipse cx="310" cy="330" rx="30" ry="10" fill="#fff" strokeWidth={3} />
          {/* Open storybook resting on chair cushion */}
          <polygon points="150,230 190,240 230,230 225,270 190,278 155,270" fill="#fff" strokeWidth={3} />
          <line x1="190" y1="240" x2="190" y2="278" strokeWidth={2} />
          {/* Woven circular rug on floor */}
          <ellipse cx="190" cy="340" rx="100" ry="25" fill="#fff" strokeWidth={3.5} />
        </g>
      );

    case "magic-writing-pencil-and-scroll-coloring-page":
      return (
        <g>
          {/* Unrolled parchment paper scroll */}
          <path d="M80 160 C60 160, 60 280, 80 280 L300 280 C320 280, 320 160, 300 160 Z" fill="#fff" strokeWidth={4} />
          <ellipse cx="80" cy="220" rx="15" ry="60" fill="#fff" strokeWidth={3} />
          <ellipse cx="300" cy="220" rx="15" ry="60" fill="#fff" strokeWidth={3} />
          {/* Cursive alphabet loops written on scroll */}
          <path d="M110 210 Q130 180 150 210 T190 210 T230 210 T270 210" fill="none" strokeWidth={3} stroke="#111827" />
          {/* Oversized smiling cartoon pencil writing */}
          <polygon points="180,60 210,60 205,170 185,170" fill="#fff" strokeWidth={3.5} transform="rotate(25 195 115)" />
          {/* Pencil eraser cap & ferrule */}
          <rect x="175" y="40" width="30" height="25" rx="5" fill="#111827" transform="rotate(25 190 52)" />
          {/* Sharpened pencil tip */}
          <polygon points="212,170 220,195 230,170" fill="#111827" />
          {/* Smiling face on pencil */}
          <circle cx="185" cy="115" r="3" fill="#111827" />
          <circle cx="195" cy="120" r="3" fill="#111827" />
        </g>
      );

    case "community-library-bookshelf-coloring-page":
      return (
        <g>
          {/* Tall wooden bookshelf outer frame */}
          <rect x="80" y="60" width="240" height="290" rx="8" fill="#fff" strokeWidth={4} />
          {/* Three shelves */}
          <rect x="80" y="140" width="240" height="15" fill="#fff" strokeWidth={3} />
          <rect x="80" y="225" width="240" height="15" fill="#fff" strokeWidth={3} />
          <rect x="80" y="310" width="240" height="15" fill="#fff" strokeWidth={3} />
          {/* Neat row of storybooks on shelf 1 */}
          <rect x="100" y="80" width="22" height="60" rx="2" fill="#fff" strokeWidth={2.5} />
          <rect x="125" y="75" width="18" height="65" rx="2" fill="#111827" />
          <rect x="146" y="85" width="24" height="55" rx="2" fill="#fff" strokeWidth={2.5} />
          <rect x="173" y="78" width="20" height="62" rx="2" fill="#fff" strokeWidth={2.5} />
          {/* Leaning book & bookends */}
          <rect x="220" y="80" width="16" height="60" rx="2" fill="#fff" strokeWidth={2.5} transform="rotate(15 228 110)" />
          {/* Shelf 2 books */}
          <rect x="100" y="165" width="20" height="60" rx="2" fill="#fff" strokeWidth={2.5} />
          <rect x="123" y="165" width="20" height="60" rx="2" fill="#fff" strokeWidth={2.5} />
          <rect x="146" y="165" width="20" height="60" rx="2" fill="#fff" strokeWidth={2.5} />
          <circle cx="260" cy="195" r="18" fill="#fff" strokeWidth={2.5} />
          {/* Rolling wooden library ladder */}
          <line x1="280" y1="50" x2="310" y2="350" strokeWidth={4} stroke="#111827" />
          <line x1="300" y1="50" x2="330" y2="350" strokeWidth={4} stroke="#111827" />
          <line x1="285" y1="110" x2="305" y2="110" strokeWidth={2.5} />
          <line x1="293" y1="180" x2="313" y2="180" strokeWidth={2.5} />
          <line x1="300" y1="250" x2="320" y2="250" strokeWidth={2.5} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 20: EMOTIONS, KINDNESS & SOCIAL SKILLS
    // ══════════════════════════════════════════════════════════════════
    case "sharing-wooden-toy-blocks-coloring-page":
      return (
        <g>
          {/* Playroom rug */}
          <ellipse cx="200" cy="330" rx="150" ry="30" fill="#fff" strokeWidth={3.5} />
          {/* Shared block castle in center */}
          <rect x="180" y="250" width="40" height="40" rx="4" fill="#fff" strokeWidth={3} />
          <polygon points="175,250 200,215 225,250" fill="#fff" strokeWidth={3} />
          {/* Child 1 on left smiling and holding a block */}
          <circle cx="120" cy="180" r="30" fill="#fff" strokeWidth={3} />
          <circle cx="112" cy="175" r="4" fill="#111827" />
          <circle cx="128" cy="175" r="4" fill="#111827" />
          <path d="M115 190 Q120 198 125 190" fill="none" strokeWidth={2} />
          <polygon points="100,210 140,210 145,280 95,280" fill="#fff" strokeWidth={3} />
          <rect x="145" y="240" width="25" height="25" rx="3" fill="#111827" />
          {/* Child 2 on right smiling and receiving block */}
          <circle cx="280" cy="180" r="30" fill="#fff" strokeWidth={3} />
          <circle cx="272" cy="175" r="4" fill="#111827" />
          <circle cx="288" cy="175" r="4" fill="#111827" />
          <path d="M275 190 Q280 198 285 190" fill="none" strokeWidth={2} />
          <polygon points="260,210 300,210 305,280 255,280" fill="#fff" strokeWidth={3} />
          {/* Love heart floating between them */}
          <path d="M200 130 C185 110, 160 130, 200 165 C240 130, 215 110, 200 130 Z" fill="#111827" />
        </g>
      );

    case "helping-a-friend-up-on-playground-coloring-page":
      return (
        <g>
          {/* Ground */}
          <line x1="30" y1="330" x2="370" y2="330" strokeWidth={3.5} stroke="#111827" />
          {/* Caring friend standing on left offering hand */}
          <circle cx="140" cy="130" r="30" fill="#fff" strokeWidth={3.5} />
          <circle cx="132" cy="125" r="4" fill="#111827" />
          <circle cx="148" cy="125" r="4" fill="#111827" />
          <path d="M135 140 Q140 148 145 140" fill="none" strokeWidth={2} />
          <polygon points="120,160 160,160 165,260 115,260" fill="#fff" strokeWidth={3.5} />
          <line x1="130" y1="260" x2="130" y2="330" strokeWidth={4} stroke="#111827" />
          <line x1="150" y1="260" x2="150" y2="330" strokeWidth={4} stroke="#111827" />
          {/* Outstretched caring arm reaching down */}
          <line x1="160" y1="190" x2="210" y2="240" strokeWidth={5} stroke="#111827" strokeLinecap="round" />
          {/* Friend who tripped sitting on ground reaching up */}
          <circle cx="260" cy="210" r="28" fill="#fff" strokeWidth={3} />
          <circle cx="252" cy="205" r="4" fill="#111827" />
          <circle cx="268" cy="205" r="4" fill="#111827" />
          <path d="M255 220 Q260 228 265 220" fill="none" strokeWidth={2} />
          <polygon points="240,240 280,240 290,320 230,320" fill="#fff" strokeWidth={3} />
          <line x1="240" y1="250" x2="210" y2="240" strokeWidth={5} stroke="#111827" strokeLinecap="round" />
        </g>
      );

    case "gratitude-and-thank-you-banner-coloring-page":
      return (
        <g>
          {/* Two smiling children holding up a giant banner */}
          <circle cx="80" cy="170" r="25" fill="#fff" strokeWidth={3} />
          <polygon points="65,195 95,195 100,290 60,290" fill="#fff" strokeWidth={3} />
          <circle cx="320" cy="170" r="25" fill="#fff" strokeWidth={3} />
          <polygon points="305,195 335,195 340,290 300,290" fill="#fff" strokeWidth={3} />
          {/* Large decorative ribbon banner reading 'THANK YOU!' */}
          <polygon points="90,140 310,140 330,220 70,220" fill="#fff" strokeWidth={4} />
          <text x="108" y="190" fontSize="32" fontWeight="bold" fill="#111827" stroke="none">THANK YOU!</text>
          {/* Hearts and stars framing banner */}
          <path d="M200 80 C190 65, 175 75, 200 100 C225 75, 210 65, 200 80 Z" fill="#111827" />
          <polygon points="130,100 135,110 145,110 138,118 140,128 130,122 120,128 122,118 115,110 125,110" fill="#111827" />
          <polygon points="270,100 275,110 285,110 278,118 280,128 270,122 260,128 262,118 255,110 265,110" fill="#111827" />
        </g>
      );

    case "four-basic-emotions-faces-coloring-page":
      return (
        <g>
          {/* 4 emotional literacy faces in 2x2 grid */}
          {/* Face 1: HAPPY (top left) */}
          <circle cx="120" cy="110" r="45" fill="#fff" strokeWidth={3.5} />
          <circle cx="105" cy="100" r="6" fill="#111827" />
          <circle cx="135" cy="100" r="6" fill="#111827" />
          <path d="M105 120 Q120 140 135 120" fill="none" strokeWidth={3} strokeLinecap="round" />
          <text x="95" y="175" fontSize="18" fontWeight="bold" fill="#111827" stroke="none">HAPPY</text>
          {/* Face 2: SAD (top right) */}
          <circle cx="280" cy="110" r="45" fill="#fff" strokeWidth={3.5} />
          <circle cx="265" cy="100" r="6" fill="#111827" />
          <circle cx="295" cy="100" r="6" fill="#111827" />
          <path d="M265 130 Q280 115 295 130" fill="none" strokeWidth={3} strokeLinecap="round" />
          <circle cx="258" cy="115" r="3" fill="#111827" />
          <text x="265" y="175" fontSize="18" fontWeight="bold" fill="#111827" stroke="none">SAD</text>
          {/* Face 3: SURPRISED (bottom left) */}
          <circle cx="120" cy="270" r="45" fill="#fff" strokeWidth={3.5} />
          <circle cx="105" cy="255" r="8" fill="#111827" />
          <circle cx="135" cy="255" r="8" fill="#111827" />
          <ellipse cx="120" cy="285" rx="10" ry="14" fill="#111827" />
          <text x="75" y="335" fontSize="16" fontWeight="bold" fill="#111827" stroke="none">SURPRISED</text>
          {/* Face 4: CALM (bottom right) */}
          <circle cx="280" cy="270" r="45" fill="#fff" strokeWidth={3.5} />
          <path d="M260 255 Q268 262 276 255" fill="none" strokeWidth={2.5} />
          <path d="M284 255 Q292 262 300 255" fill="none" strokeWidth={2.5} />
          <line x1="270" y1="285" x2="290" y2="285" strokeWidth={2.5} strokeLinecap="round" />
          <text x="258" y="335" fontSize="18" fontWeight="bold" fill="#111827" stroke="none">CALM</text>
        </g>
      );

    case "calming-deep-breath-butterfly-coloring-page":
      return (
        <g>
          {/* Child sitting peaceful in cross-legged meditation */}
          <circle cx="200" cy="140" r="38" fill="#fff" strokeWidth={3.5} />
          {/* Gentle closed smiling eyes */}
          <path d="M188 135 Q194 142 200 135" fill="none" strokeWidth={2} />
          <path d="M205 135 Q211 142 217 135" fill="none" strokeWidth={2} />
          <path d="M195 150 Q202 156 210 150" fill="none" strokeWidth={2} />
          {/* Crossed legs on meditation cushion */}
          <ellipse cx="200" cy="310" rx="90" ry="25" fill="#fff" strokeWidth={3.5} />
          <polygon points="180,180 220,180 230,290 170,290" fill="#fff" strokeWidth={3.5} />
          {/* Outstretched hand */}
          <line x1="220" y1="210" x2="280" y2="180" strokeWidth={4} stroke="#111827" />
          {/* Friendly butterfly perched on finger */}
          <ellipse cx="285" cy="165" rx="4" ry="16" fill="#111827" />
          <ellipse cx="270" cy="155" rx="14" ry="10" fill="#fff" strokeWidth={2} />
          <ellipse cx="300" cy="155" rx="14" ry="10" fill="#fff" strokeWidth={2} />
        </g>
      );

    case "playground-teamwork-seesaw-coloring-page":
      return (
        <g>
          {/* Ground */}
          <line x1="30" y1="330" x2="370" y2="330" strokeWidth={4} stroke="#111827" />
          {/* Central fulcrum triangle */}
          <polygon points="200,230 170,330 230,330" fill="#fff" strokeWidth={4} />
          <circle cx="200" cy="230" r="10" fill="#111827" />
          {/* Seesaw wooden plank balanced horizontally */}
          <rect x="50" y="222" width="300" height="16" rx="4" fill="#fff" strokeWidth={3.5} />
          {/* Child on left */}
          <circle cx="85" cy="150" r="24" fill="#fff" strokeWidth={3} />
          <circle cx="80" cy="145" r="4" fill="#111827" />
          <path d="M80 158 Q85 165 90 158" fill="none" strokeWidth={2} />
          <rect x="75" y="174" width="20" height="48" fill="#fff" strokeWidth={2.5} />
          {/* Child on right */}
          <circle cx="315" cy="150" r="24" fill="#fff" strokeWidth={3} />
          <circle cx="310" cy="145" r="4" fill="#111827" />
          <path d="M310 158 Q315 165 320 158" fill="none" strokeWidth={2} />
          <rect x="305" y="174" width="20" height="48" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "caring-listening-ears-and-heart-coloring-page":
      return (
        <g>
          {/* Child listening with attentive big ears and caring heart */}
          <circle cx="160" cy="170" r="48" fill="#fff" strokeWidth={4} />
          {/* Large prominent listening ear */}
          <path d="M112 150 C95 150, 95 190, 112 190" fill="none" strokeWidth={4} strokeLinecap="round" />
          {/* Gentle attentive eyes */}
          <circle cx="150" cy="165" r="5" fill="#111827" />
          <circle cx="180" cy="165" r="5" fill="#111827" />
          <path d="M155 185 Q165 192 175 185" fill="none" strokeWidth={2.5} />
          {/* Friendly speaking speech bubble from companion */}
          <path d="M240 100 L320 100 Q340 100 340 130 L340 160 Q340 190 320 190 L270 190 L240 215 L245 190 Q225 190 225 160 L225 130 Q225 100 240 100 Z" fill="#fff" strokeWidth={3.5} />
          <line x1="250" y1="130" x2="315" y2="130" strokeWidth={3} stroke="#111827" />
          <line x1="250" y1="155" x2="295" y2="155" strokeWidth={3} stroke="#111827" />
          {/* Warm heart glowing below */}
          <path d="M160 250 C140 225, 110 245, 160 290 C210 245, 180 225, 160 250 Z" fill="#111827" />
        </g>
      );

    case "giving-a-warm-comforting-hug-coloring-page":
      return (
        <g>
          {/* Two animal friends hugging: Teddy Bear & Floppy Bunny */}
          {/* Teddy bear body on left */}
          <ellipse cx="160" cy="230" rx="55" ry="60" fill="#fff" strokeWidth={4} />
          <circle cx="140" cy="140" r="35" fill="#fff" strokeWidth={3.5} />
          <circle cx="115" cy="115" r="14" fill="#fff" strokeWidth={3} />
          <circle cx="130" cy="135" r="5" fill="#111827" />
          <polygon points="135,142 145,142 140,150" fill="#111827" />
          {/* Floppy bunny on right */}
          <ellipse cx="240" cy="230" rx="50" ry="58" fill="#fff" strokeWidth={4} />
          <circle cx="255" cy="145" r="32" fill="#fff" strokeWidth={3.5} />
          {/* Long floppy bunny ears */}
          <ellipse cx="250" cy="80" rx="12" ry="35" fill="#fff" strokeWidth={3} transform="rotate(-15 250 80)" />
          <ellipse cx="280" cy="85" rx="12" ry="35" fill="#fff" strokeWidth={3} transform="rotate(15 280 85)" />
          <circle cx="265" cy="140" r="4.5" fill="#111827" />
          {/* Hugging interlocking arms */}
          <path d="M160 210 Q200 240 240 210" fill="none" strokeWidth={8} stroke="#111827" strokeLinecap="round" />
          {/* Floating comfort hearts above */}
          <path d="M200 110 C190 95, 175 105, 200 130 C225 105, 210 95, 200 110 Z" fill="#111827" />
        </g>
      );

    case "welcome-new-student-circle-coloring-page":
      return (
        <g>
          {/* Circle of diverse friends waving hands welcoming */}
          {/* Welcome banner at top */}
          <rect x="110" y="50" width="180" height="45" rx="10" fill="#fff" strokeWidth={3.5} />
          <text x="135" y="80" fontSize="24" fontWeight="bold" fill="#111827" stroke="none">WELCOME!</text>
          {/* Left student waving */}
          <circle cx="90" cy="180" r="28" fill="#fff" strokeWidth={3} />
          <polygon points="75,210 105,210 110,310 70,310" fill="#fff" strokeWidth={3} />
          <path d="M105 230 L135 190" strokeWidth={4} stroke="#111827" strokeLinecap="round" />
          {/* New student in center smiling with school backpack */}
          <circle cx="200" cy="190" r="32" fill="#fff" strokeWidth={3.5} />
          <circle cx="190" cy="185" r="5" fill="#111827" />
          <circle cx="210" cy="185" r="5" fill="#111827" />
          <path d="M192 205 Q200 215 208 205" fill="none" strokeWidth={2.5} />
          <polygon points="175,225 225,225 230,330 170,330" fill="#fff" strokeWidth={3.5} />
          {/* Right student waving */}
          <circle cx="310" cy="180" r="28" fill="#fff" strokeWidth={3} />
          <polygon points="295,210 325,210 330,310 290,310" fill="#fff" strokeWidth={3} />
          <path d="M295 230 L265 190" strokeWidth={4} stroke="#111827" strokeLinecap="round" />
        </g>
      );

    case "planting-a-kindness-garden-coloring-page":
      return (
        <g>
          {/* Garden soil bed */}
          <polygon points="40,280 360,280 340,350 60,350" fill="#fff" strokeWidth={4} />
          <line x1="60" y1="315" x2="340" y2="315" strokeWidth={2} strokeDasharray="10 5" />
          {/* Seed packets staked in soil */}
          <rect x="80" y="220" width="45" height="60" rx="3" fill="#fff" strokeWidth={3} />
          <text x="88" y="255" fontSize="12" fontWeight="bold" fill="#111827" stroke="none">CARE</text>
          <line x1="102" y1="280" x2="102" y2="310" strokeWidth={4} stroke="#111827" />
          <rect x="275" y="220" width="45" height="60" rx="3" fill="#fff" strokeWidth={3} />
          <text x="286" y="255" fontSize="13" fontWeight="bold" fill="#111827" stroke="none">JOY</text>
          <line x1="297" y1="280" x2="297" y2="310" strokeWidth={4} stroke="#111827" />
          {/* Blooming Kindness Flower sprouting in center */}
          <line x1="200" y1="280" x2="200" y2="140" strokeWidth={5} stroke="#111827" />
          {/* Broad leaves on stem */}
          <ellipse cx="175" cy="220" rx="22" ry="12" fill="#fff" strokeWidth={2.5} transform="rotate(-30 175 220)" />
          <ellipse cx="225" cy="200" rx="22" ry="12" fill="#fff" strokeWidth={2.5} transform="rotate(30 225 200)" />
          {/* Big cheerful flower with petals */}
          <circle cx="200" cy="120" r="30" fill="#fff" strokeWidth={4} />
          <circle cx="190" cy="115" r="4" fill="#111827" />
          <circle cx="210" cy="115" r="4" fill="#111827" />
          <path d="M192 130 Q200 138 208 130" fill="none" strokeWidth={2} />
          {/* Flower petals */}
          <circle cx="200" cy="75" r="18" fill="#fff" strokeWidth={2.5} />
          <circle cx="245" cy="100" r="18" fill="#fff" strokeWidth={2.5} />
          <circle cx="240" cy="150" r="18" fill="#fff" strokeWidth={2.5} />
          <circle cx="160" cy="150" r="18" fill="#fff" strokeWidth={2.5} />
          <circle cx="155" cy="100" r="18" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    default:
      return null;
  }
}
