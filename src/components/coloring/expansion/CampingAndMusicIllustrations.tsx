import React from "react";

export function renderCampingAndMusic(slug: string): React.ReactNode | null {
  switch (slug) {
    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 9: CAMPING & OUTDOOR ADVENTURE
    // ══════════════════════════════════════════════════════════════════
    case "campfire-and-marshmallow-sticks-coloring-page":
    case "roasting-marshmallows-over-campfire-skewer-coloring-page":
      return (
        <g>
          {/* Campfire stone ring and burning logs */}
          <ellipse cx="200" cy="330" rx="90" ry="30" fill="#fff" strokeWidth={3.5} />
          <line x1="140" y1="340" x2="260" y2="320" strokeWidth={8} stroke="#111827" />
          <line x1="150" y1="320" x2="250" y2="340" strokeWidth={8} stroke="#111827" />
          {/* Tall dancing campfire flames */}
          <path d="M170 320 Q190 200 195 240 Q205 170 215 240 Q225 190 235 320 Z" fill="#fff" strokeWidth={4} />
          {/* Long wooden roasting sticks with marshmallows */}
          <line x1="60" y1="140" x2="210" y2="225" strokeWidth={4} stroke="#111827" />
          <rect x="175" y="195" width="22" height="28" rx="6" fill="#fff" strokeWidth={3} transform="rotate(30 186 209)" />
          <line x1="340" y1="140" x2="190" y2="225" strokeWidth={4} stroke="#111827" />
          <rect x="205" y="195" width="22" height="28" rx="6" fill="#fff" strokeWidth={3} transform="rotate(-30 216 209)" />
        </g>
      );

    case "dome-camping-tent-under-pines-coloring-page":
    case "cozy-camping-tent-and-crackling-campfire-coloring-page":
      return (
        <g>
          {/* Pine trees in background */}
          <polygon points="60,60 40,110 80,110" fill="#fff" strokeWidth={2.5} />
          <polygon points="60,100 30,160 90,160" fill="#fff" strokeWidth={2.5} />
          <rect x="55" y="160" width="10" height="70" fill="#111827" />
          <polygon points="340,70 320,120 360,120" fill="#fff" strokeWidth={2.5} />
          <polygon points="340,110 310,170 370,170" fill="#fff" strokeWidth={2.5} />
          <rect x="335" y="170" width="10" height="70" fill="#111827" />
          {/* Modern dome camping tent with flexible curved poles */}
          <path d="M90 320 C100 170, 300 170, 310 320 Z" fill="#fff" strokeWidth={4} />
          {/* Crossed dome tent poles */}
          <path d="M100 315 Q200 160 300 315" fill="none" strokeWidth={3} stroke="#111827" />
          <path d="M120 280 Q200 180 280 280" fill="none" strokeWidth={2.5} stroke="#111827" />
          {/* Zippered rounded entrance door */}
          <path d="M160 320 C160 230, 240 230, 240 320 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M175 320 C175 250, 225 250, 225 320 Z" fill="#111827" />
          {/* Guy lines & tent pegs */}
          <line x1="90" y1="320" x2="50" y2="340" strokeWidth={2.5} stroke="#111827" />
          <line x1="310" y1="320" x2="350" y2="340" strokeWidth={2.5} stroke="#111827" />
        </g>
      );

    case "cozy-sleeping-bag-and-lantern-coloring-page":
    case "vintage-sleeping-bag-under-starry-night-sky-coloring-page":
      return (
        <g>
          {/* Crescent moon and constellations */}
          <path d="M80 60 A30 30 0 0 0 120 100 A24 24 0 0 1 80 60 Z" fill="#fff" strokeWidth={3} />
          <circle cx="250" cy="70" r="3" fill="#111827" />
          <circle cx="290" cy="85" r="3" fill="#111827" />
          <circle cx="330" cy="75" r="3" fill="#111827" />
          {/* Quilted warm sleeping bag */}
          <rect x="70" y="210" width="200" height="120" rx="30" fill="#fff" strokeWidth={4} />
          <ellipse cx="120" cy="200" rx="35" ry="22" fill="#fff" strokeWidth={3.5} />
          <line x1="100" y1="240" x2="240" y2="300" strokeWidth={2} strokeDasharray="5 5" />
          <line x1="100" y1="280" x2="240" y2="240" strokeWidth={2} strokeDasharray="5 5" />
          {/* Lantern standing on flat rock */}
          <ellipse cx="320" cy="330" rx="40" ry="15" fill="#fff" strokeWidth={2.5} />
          <rect x="300" y="270" width="40" height="50" rx="6" fill="#fff" strokeWidth={3} />
          <circle cx="320" cy="295" r="8" fill="#111827" />
          <path d="M305 270 C300 240, 340 240, 335 270" fill="none" strokeWidth={2.5} />
        </g>
      );

    case "hiker-backpack-and-canteen-coloring-page":
    case "hiker-backpack-trail-map-and-compass-coloring-page":
      return (
        <g>
          {/* Hiker backpack body */}
          <rect x="80" y="120" width="150" height="210" rx="25" fill="#fff" strokeWidth={4} />
          {/* Top zippered flap */}
          <path d="M80 160 Q155 180 230 160" fill="none" strokeWidth={3.5} />
          {/* Front zippered pocket */}
          <rect x="105" y="190" width="100" height="90" rx="10" fill="#fff" strokeWidth={3} />
          <line x1="120" y1="210" x2="190" y2="210" strokeWidth={2.5} />
          {/* Rolled foam sleeping mat on top */}
          <rect x="70" y="90" width="170" height="30" rx="15" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="230" cy="105" rx="8" ry="15" fill="#fff" strokeWidth={2.5} />
          {/* Classic circular metal canteen with fabric strap */}
          <circle cx="295" cy="240" r="45" fill="#fff" strokeWidth={4} />
          <rect x="285" y="185" width="20" height="15" rx="3" fill="#111827" />
          <line x1="260" y1="240" x2="330" y2="240" strokeWidth={3} stroke="#111827" />
          <path d="M295 190 Q340 190 350 250" fill="none" strokeWidth={3} />
        </g>
      );

    case "wooden-canoe-on-mountain-lake-coloring-page":
    case "wooden-canoe-gliding-on-mountain-lake-coloring-page":
      return (
        <g>
          {/* Alpine mountains in background */}
          <polygon points="30,220 120,80 220,220" fill="#fff" strokeWidth={3} />
          <polygon points="120,80 100,120 120,110 140,120" fill="#111827" />
          <polygon points="180,220 280,60 380,220" fill="#fff" strokeWidth={3} />
          <polygon points="280,60 260,105 280,95 300,105" fill="#111827" />
          {/* Lake water ripples */}
          <path d="M20 270 Q100 255 200 270 T380 270" fill="none" strokeWidth={2.5} />
          <path d="M40 340 Q140 325 240 340 T360 340" fill="none" strokeWidth={2.5} />
          {/* Sleek wooden canoe */}
          <path d="M50 250 C120 290, 280 290, 350 250 C290 310, 110 310, 50 250 Z" fill="#fff" strokeWidth={4} />
          <line x1="70" y1="265" x2="330" y2="265" strokeWidth={2.5} />
          {/* Wooden canoe paddle */}
          <line x1="160" y1="180" x2="250" y2="330" strokeWidth={4} stroke="#111827" />
          <ellipse cx="240" cy="315" rx="14" ry="24" fill="#fff" strokeWidth={3} transform="rotate(-30 240 315)" />
        </g>
      );

    case "trail-compass-and-hiking-map-coloring-page":
    case "mountain-peak-hiking-trail-summit-sign-coloring-page":
      return (
        <g>
          {/* Folded trail map with topographic contour lines */}
          <polygon points="50,120 200,90 340,120 330,320 190,300 40,320" fill="#fff" strokeWidth={4} />
          <line x1="200" y1="90" x2="190" y2="300" strokeWidth={2.5} stroke="#111827" />
          {/* Contour elevation lines */}
          <ellipse cx="120" cy="200" rx="45" ry="30" fill="none" strokeWidth={2} strokeDasharray="6 4" />
          <ellipse cx="120" cy="200" rx="25" ry="16" fill="none" strokeWidth={2} strokeDasharray="6 4" />
          {/* Hiking trail dashed path */}
          <path d="M70 280 Q130 250 160 170 T280 140" fill="none" strokeWidth={3} stroke="#111827" strokeDasharray="8 4" />
          {/* Magnetic sighting compass placed on map */}
          <circle cx="260" cy="230" r="55" fill="#fff" strokeWidth={4} />
          <circle cx="260" cy="230" r="45" fill="#fff" strokeWidth={2} />
          {/* Compass Rose needle */}
          <polygon points="260,190 268,230 260,225 252,230" fill="#111827" />
          <polygon points="260,270 268,230 260,235 252,230" fill="#fff" strokeWidth={2} />
          <circle cx="260" cy="230" r="5" fill="#111827" />
          <text x="255" y="185" fontSize="13" fontWeight="bold" fill="#111827">N</text>
        </g>
      );

    case "binoculars-on-picnic-table-coloring-page":
    case "campground-picnic-table-under-tall-pines-coloring-page":
    case "binoculars-and-birdwatching-field-guide-coloring-page":
      return (
        <g>
          {/* Wooden picnic tabletop */}
          <polygon points="30,220 370,220 340,260 20,260" fill="#fff" strokeWidth={4} />
          <line x1="40" y1="240" x2="360" y2="240" strokeWidth={2} />
          {/* Table legs */}
          <line x1="80" y1="260" x2="60" y2="350" strokeWidth={6} stroke="#111827" />
          <line x1="320" y1="260" x2="340" y2="350" strokeWidth={6} stroke="#111827" />
          {/* Binoculars resting on table */}
          <rect x="140" y="110" width="45" height="90" rx="12" fill="#fff" strokeWidth={3.5} />
          <rect x="215" y="110" width="45" height="90" rx="12" fill="#fff" strokeWidth={3.5} />
          <rect x="185" y="140" width="30" height="30" fill="#111827" />
          <circle cx="162" cy="195" r="20" fill="#fff" strokeWidth={3.5} />
          <circle cx="237" cy="195" r="20" fill="#fff" strokeWidth={3.5} />
          <circle cx="162" cy="195" r="10" fill="#fff" strokeWidth={2} />
          <circle cx="237" cy="195" r="10" fill="#fff" strokeWidth={2} />
          {/* Enamel camp coffee mug beside binoculars */}
          <rect x="280" y="170" width="40" height="48" rx="4" fill="#fff" strokeWidth={3} />
          <path d="M320 180 C335 180, 335 205, 320 205" fill="none" strokeWidth={3} />
        </g>
      );

    case "fishing-rod-and-jumping-fish-coloring-page":
      return (
        <g>
          {/* Water surface waves and splashes */}
          <path d="M20 310 Q100 290 200 310 T380 310" fill="none" strokeWidth={3.5} />
          <path d="M40 340 Q130 325 230 340 T370 340" fill="none" strokeWidth={3} />
          {/* Water spray droplets around fish */}
          <circle cx="270" cy="220" r="5" fill="#fff" strokeWidth={2} />
          <circle cx="340" cy="230" r="6" fill="#fff" strokeWidth={2} />
          <circle cx="310" cy="160" r="4" fill="#fff" strokeWidth={2} />
          {/* Leaping speckled fish arched in air */}
          <path d="M240 250 C260 170, 350 170, 350 250 C330 260, 270 270, 240 250 Z" fill="#fff" strokeWidth={3.5} />
          {/* Fish tail fin */}
          <polygon points="350,250 380,230 375,270" fill="#fff" strokeWidth={3} />
          {/* Fish dorsal fin and eye */}
          <path d="M280 180 Q305 160 320 185" fill="#fff" strokeWidth={2.5} />
          <circle cx="255" cy="235" r="4" fill="#111827" />
          {/* Long flexible fishing rod */}
          <path d="M40 350 Q120 220 260 110" fill="none" strokeWidth={4.5} stroke="#111827" strokeLinecap="round" />
          {/* Fishing rod guides / eyelets */}
          <circle cx="90" cy="275" r="4" fill="#111827" />
          <circle cx="140" cy="215" r="4" fill="#111827" />
          <circle cx="195" cy="160" r="4" fill="#111827" />
          <circle cx="260" cy="110" r="4" fill="#111827" />
          {/* Fishing line looping from tip down to fish mouth */}
          <path d="M260 110 Q310 110 255 240" fill="none" strokeWidth={2} stroke="#111827" strokeDasharray="5 3" />
          {/* Spinning reel attached near handle */}
          <rect x="55" y="320" width="16" height="25" rx="3" fill="#111827" />
          <circle cx="63" cy="332" r="14" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "vintage-camping-lantern-coloring-page":
    case "glowing-vintage-camping-lantern-on-stump-coloring-page":
      return (
        <g>
          {/* Tree stump base */}
          <ellipse cx="200" cy="340" rx="90" ry="25" fill="#fff" strokeWidth={3.5} />
          <path d="M110 340 L110 380 Q200 400 290 380 L290 340" fill="#fff" strokeWidth={3.5} />
          {/* Metal base of lantern */}
          <rect x="150" y="270" width="100" height="35" rx="8" fill="#fff" strokeWidth={3.5} />
          {/* Glass globe with warm glowing flame inside */}
          <path d="M155 270 C140 210, 140 180, 160 150 L240 150 C260 180, 260 210, 245 270 Z" fill="#fff" strokeWidth={4} />
          <path d="M195 240 Q200 185 205 210 Q210 185 215 240 Z" fill="#111827" />
          {/* Glow rays */}
          <line x1="120" y1="200" x2="90" y2="195" strokeWidth={2.5} />
          <line x1="125" y1="170" x2="100" y2="155" strokeWidth={2.5} />
          <line x1="275" y1="200" x2="305" y2="195" strokeWidth={2.5} />
          <line x1="270" y1="170" x2="295" y2="155" strokeWidth={2.5} />
          {/* Tiered metal top & chimney */}
          <path d="M150 150 L250 150 L235 110 L165 110 Z" fill="#fff" strokeWidth={3.5} />
          <circle cx="200" cy="95" r="16" fill="#fff" strokeWidth={3} />
          {/* Wire bail carry handle */}
          <path d="M145 150 C120 70, 280 70, 255 150" fill="none" strokeWidth={4} strokeLinecap="round" />
        </g>
      );

    case "road-trip-camper-van-coloring-page":
    case "classic-camper-rv-van-parked-by-forest-coloring-page":
      return (
        <g>
          {/* Pine trees in background */}
          <polygon points="320,80 300,140 340,140" fill="#fff" strokeWidth={2.5} />
          <polygon points="320,130 290,200 350,200" fill="#fff" strokeWidth={2.5} />
          <rect x="315" y="200" width="10" height="120" fill="#111827" />
          {/* Retro camper van rounded body */}
          <path d="M70 200 C70 140, 100 120, 240 120 L270 160 L290 220 L290 280 L60 280 Z" fill="#fff" strokeWidth={4} />
          {/* Split front windshield & side windows */}
          <rect x="85" y="140" width="45" height="40" rx="4" fill="#fff" strokeWidth={2.5} />
          <rect x="140" y="140" width="55" height="40" rx="4" fill="#fff" strokeWidth={2.5} />
          <polygon points="205,140 250,140 265,180 205,180" fill="#fff" strokeWidth={2.5} />
          {/* Pop-up canvas roof */}
          <polygon points="90,120 110,65 220,65 240,120" fill="#fff" strokeWidth={3.5} />
          <line x1="140" y1="65" x2="135" y2="120" strokeWidth={2} />
          <line x1="190" y1="65" x2="195" y2="120" strokeWidth={2} />
          {/* Chrome bumper and big round headlights */}
          <rect x="45" y="270" width="260" height="15" rx="5" fill="#fff" strokeWidth={3} />
          <circle cx="280" cy="240" r="12" fill="#fff" strokeWidth={3} />
          {/* Wheels */}
          <circle cx="105" cy="285" r="32" fill="#fff" strokeWidth={4} />
          <circle cx="105" cy="285" r="14" fill="#111827" />
          <circle cx="245" cy="285" r="32" fill="#fff" strokeWidth={4} />
          <circle cx="245" cy="285" r="14" fill="#111827" />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // CATEGORY 10: MUSICAL INSTRUMENTS
    // ══════════════════════════════════════════════════════════════════
    case "acoustic-guitar-with-music-notes-coloring-page":
    case "classic-acoustic-guitar-with-soundhole-coloring-page":
      return (
        <g>
          {/* Hourglass guitar body */}
          <path d="M160 170 C120 180, 110 230, 150 270 C190 310, 250 310, 270 260 C290 220, 260 180, 220 170 C240 140, 230 110, 195 110 C160 110, 150 140, 160 170 Z" fill="#fff" strokeWidth={4} transform="rotate(-30 200 200)" />
          {/* Round soundhole */}
          <circle cx="200" cy="210" r="24" fill="#fff" strokeWidth={3.5} />
          <circle cx="200" cy="210" r="28" fill="none" strokeWidth={1.5} />
          {/* Bridge */}
          <rect x="180" y="270" width="40" height="14" rx="3" fill="#111827" />
          {/* Fretboard neck */}
          <rect x="192" y="30" width="16" height="120" fill="#fff" strokeWidth={3} transform="rotate(-30 200 100)" />
          {/* Headstock & tuning pegs */}
          <circle cx="65" cy="100" r="6" fill="#111827" />
          <circle cx="90" cy="90" r="6" fill="#111827" />
          {/* Strings */}
          <line x1="196" y1="75" x2="196" y2="270" strokeWidth={1.5} />
          <line x1="200" y1="75" x2="200" y2="270" strokeWidth={1.5} />
          <line x1="204" y1="75" x2="204" y2="270" strokeWidth={1.5} />
          {/* Floating musical notes */}
          <path d="M290 80 L290 60 L315 50 L315 70 M290 60 L315 50" strokeWidth={2.5} stroke="#111827" />
          <circle cx="285" cy="80" r="5" fill="#111827" />
          <circle cx="310" cy="70" r="5" fill="#111827" />
        </g>
      );

    case "grand-piano-with-keyboard-coloring-page":
    case "concert-grand-piano-with-keyboard-coloring-page":
      return (
        <g>
          {/* Curved wing body of grand piano */}
          <path d="M80 180 C80 120, 150 60, 260 70 C330 80, 360 140, 340 180 L80 180 Z" fill="#fff" strokeWidth={4} />
          {/* Open raised piano lid prop stick */}
          <polygon points="80,180 80,70 300,30 260,70" fill="#fff" strokeWidth={3.5} />
          <line x1="240" y1="50" x2="250" y2="100" strokeWidth={3.5} stroke="#111827" />
          {/* Straight piano keyboard bed */}
          <rect x="70" y="180" width="280" height="50" fill="#fff" strokeWidth={3.5} />
          {/* White keys */}
          <line x1="90" y1="180" x2="90" y2="230" strokeWidth={2} />
          <line x1="110" y1="180" x2="110" y2="230" strokeWidth={2} />
          <line x1="130" y1="180" x2="130" y2="230" strokeWidth={2} />
          <line x1="150" y1="180" x2="150" y2="230" strokeWidth={2} />
          <line x1="170" y1="180" x2="170" y2="230" strokeWidth={2} />
          <line x1="190" y1="180" x2="190" y2="230" strokeWidth={2} />
          <line x1="210" y1="180" x2="210" y2="230" strokeWidth={2} />
          <line x1="230" y1="180" x2="230" y2="230" strokeWidth={2} />
          <line x1="250" y1="180" x2="250" y2="230" strokeWidth={2} />
          <line x1="270" y1="180" x2="270" y2="230" strokeWidth={2} />
          <line x1="290" y1="180" x2="290" y2="230" strokeWidth={2} />
          <line x1="310" y1="180" x2="310" y2="230" strokeWidth={2} />
          <line x1="330" y1="180" x2="330" y2="230" strokeWidth={2} />
          {/* Black keys */}
          <rect x="97" y="180" width="8" height="30" fill="#111827" />
          <rect x="117" y="180" width="8" height="30" fill="#111827" />
          <rect x="157" y="180" width="8" height="30" fill="#111827" />
          <rect x="177" y="180" width="8" height="30" fill="#111827" />
          <rect x="197" y="180" width="8" height="30" fill="#111827" />
          <rect x="237" y="180" width="8" height="30" fill="#111827" />
          <rect x="257" y="180" width="8" height="30" fill="#111827" />
          <rect x="297" y="180" width="8" height="30" fill="#111827" />
          <rect x="317" y="180" width="8" height="30" fill="#111827" />
          {/* Three piano legs */}
          <rect x="90" y="230" width="16" height="110" rx="3" fill="#111827" />
          <rect x="310" y="230" width="16" height="110" rx="3" fill="#111827" />
          <rect x="210" y="180" width="16" height="160" rx="3" fill="#111827" />
        </g>
      );

    case "drum-set-with-sticks-coloring-page":
    case "complete-drum-set-kit-with-cymbals-coloring-page":
      return (
        <g>
          {/* Central Bass Drum */}
          <ellipse cx="200" cy="270" rx="65" ry="65" fill="#fff" strokeWidth={4} />
          <ellipse cx="200" cy="270" rx="52" ry="52" fill="#fff" strokeWidth={2} />
          {/* Snare drum on left stand */}
          <ellipse cx="110" cy="210" rx="40" ry="16" fill="#fff" strokeWidth={3.5} />
          <rect x="70" y="210" width="80" height="30" fill="#fff" strokeWidth={3.5} />
          <line x1="110" y1="240" x2="110" y2="340" strokeWidth={4} stroke="#111827" />
          {/* Mounted toms on top of bass */}
          <ellipse cx="170" cy="150" rx="28" ry="12" fill="#fff" strokeWidth={3} />
          <rect x="142" y="150" width="56" height="25" fill="#fff" strokeWidth={3} />
          <ellipse cx="230" cy="150" rx="28" ry="12" fill="#fff" strokeWidth={3} />
          <rect x="202" y="150" width="56" height="25" fill="#fff" strokeWidth={3} />
          {/* Hi-hat cymbals on left */}
          <ellipse cx="60" cy="140" rx="35" ry="10" fill="#fff" strokeWidth={3} />
          <ellipse cx="60" cy="145" rx="35" ry="10" fill="#fff" strokeWidth={3} />
          <line x1="60" y1="145" x2="60" y2="340" strokeWidth={4} stroke="#111827" />
          {/* Crash cymbal on right */}
          <ellipse cx="320" cy="110" rx="45" ry="12" fill="#fff" strokeWidth={3.5} transform="rotate(-15 320 110)" />
          <line x1="320" y1="110" x2="310" y2="340" strokeWidth={4} stroke="#111827" />
          {/* Pair of crossed drumsticks */}
          <line x1="160" y1="110" x2="240" y2="190" strokeWidth={4} stroke="#111827" strokeLinecap="round" />
          <line x1="240" y1="110" x2="160" y2="190" strokeWidth={4} stroke="#111827" strokeLinecap="round" />
        </g>
      );

    case "brass-trumpet-with-valves-coloring-page":
    case "shiny-brass-trumpet-with-valves-coloring-page":
      return (
        <g>
          {/* Main coiled brass tubing */}
          <path d="M60 210 L300 210" strokeWidth={10} stroke="#fff" />
          <path d="M60 210 L300 210" strokeWidth={3.5} stroke="#111827" />
          <path d="M120 170 L260 170" strokeWidth={10} stroke="#fff" />
          <path d="M120 170 L260 170" strokeWidth={3.5} stroke="#111827" />
          {/* Tuning slide bend on left */}
          <path d="M60 210 C30 210, 30 170, 60 170 L120 170" fill="none" strokeWidth={3.5} />
          {/* Mouthpiece */}
          <polygon points="70,165 40,160 40,180 70,175" fill="#fff" strokeWidth={2.5} />
          {/* Flaring bell horn on right */}
          <path d="M260 170 C290 170, 340 130, 360 120 L360 240 C340 230, 290 210, 260 210 Z" fill="#fff" strokeWidth={4} />
          <ellipse cx="360" cy="180" rx="10" ry="60" fill="#fff" strokeWidth={3.5} />
          {/* Three vertical valve casings and finger buttons */}
          <rect x="170" y="145" width="16" height="85" rx="3" fill="#fff" strokeWidth={3} />
          <ellipse cx="178" cy="135" rx="8" ry="5" fill="#111827" />
          <rect x="195" y="145" width="16" height="85" rx="3" fill="#fff" strokeWidth={3} />
          <ellipse cx="203" cy="135" rx="8" ry="5" fill="#111827" />
          <rect x="220" y="145" width="16" height="85" rx="3" fill="#fff" strokeWidth={3} />
          <ellipse cx="228" cy="135" rx="8" ry="5" fill="#111827" />
          {/* Musical notes floating out of bell */}
          <path d="M370 120 L370 100 L390 90 L390 110 M370 100 L390 90" strokeWidth={2.5} stroke="#111827" />
          <circle cx="365" cy="120" r="5" fill="#111827" />
          <circle cx="385" cy="110" r="5" fill="#111827" />
        </g>
      );

    case "classical-violin-and-bow-coloring-page":
    case "wooden-violin-and-horsehair-bow-coloring-page":
      return (
        <g>
          {/* Waist-curved violin body */}
          <path d="M160 130 C120 140, 110 190, 150 220 C130 240, 110 270, 140 310 C180 340, 240 340, 270 300 C290 260, 270 230, 250 220 C290 190, 280 140, 240 130 C220 110, 180 110, 160 130 Z" fill="#fff" strokeWidth={4} />
          {/* Classical f-holes */}
          <path d="M165 200 C155 220, 170 230, 160 250" fill="none" strokeWidth={3.5} strokeLinecap="round" />
          <path d="M235 200 C245 220, 230 230, 240 250" fill="none" strokeWidth={3.5} strokeLinecap="round" />
          {/* Tailpiece & Chinrest */}
          <polygon points="190,320 210,320 205,270 195,270" fill="#111827" />
          <ellipse cx="160" cy="310" rx="18" ry="12" fill="#111827" />
          {/* Neck & scroll */}
          <rect x="193" y="40" width="14" height="80" fill="#fff" strokeWidth={3} />
          {/* Scroll spiral pegbox */}
          <circle cx="200" cy="35" r="14" fill="#fff" strokeWidth={3} />
          <line x1="180" y1="45" x2="220" y2="45" strokeWidth={3} stroke="#111827" />
          <line x1="180" y1="60" x2="220" y2="60" strokeWidth={3} stroke="#111827" />
          {/* Long horsehair bow positioned diagonally across strings */}
          <line x1="50" y1="180" x2="350" y2="260" strokeWidth={3} stroke="#111827" />
          <line x1="50" y1="185" x2="350" y2="265" strokeWidth={1.5} />
        </g>
      );

    case "silver-orchestral-flute-coloring-page":
    case "silver-concert-flute-with-keys-coloring-page":
      return (
        <g>
          {/* Slender horizontal silver tube */}
          <rect x="30" y="190" width="340" height="20" rx="5" fill="#fff" strokeWidth={3.5} transform="rotate(-15 200 200)" />
          {/* Lip plate and oval embouchure hole */}
          <rect x="65" y="150" width="25" height="15" rx="5" fill="#fff" strokeWidth={2.5} transform="rotate(-15 77 157)" />
          <ellipse cx="77" cy="157" rx="6" ry="3" fill="#111827" transform="rotate(-15 77 157)" />
          {/* In-line padded key cups */}
          <circle cx="140" cy="175" r="6" fill="#fff" strokeWidth={2} />
          <circle cx="160" cy="170" r="6" fill="#fff" strokeWidth={2} />
          <circle cx="180" cy="165" r="6" fill="#fff" strokeWidth={2} />
          <circle cx="200" cy="160" r="6" fill="#fff" strokeWidth={2} />
          <circle cx="220" cy="155" r="6" fill="#fff" strokeWidth={2} />
          <circle cx="240" cy="150" r="6" fill="#fff" strokeWidth={2} />
          <circle cx="260" cy="145" r="6" fill="#fff" strokeWidth={2} />
          <circle cx="280" cy="140" r="6" fill="#fff" strokeWidth={2} />
          <circle cx="300" cy="135" r="6" fill="#fff" strokeWidth={2} />
          {/* Key rod line */}
          <line x1="130" y1="168" x2="310" y2="120" strokeWidth={2} stroke="#111827" />
        </g>
      );

    case "golden-concert-harp-coloring-page":
    case "concert-pedal-harp-with-pillar-coloring-page":
      return (
        <g>
          {/* Stately straight front pillar column */}
          <rect x="90" y="50" width="22" height="290" rx="5" fill="#fff" strokeWidth={4} />
          {/* Crown capital on top of pillar */}
          <path d="M80 50 C80 30, 120 30, 120 50 Z" fill="#fff" strokeWidth={3.5} />
          {/* Heavy pedestal base with pedals */}
          <rect x="70" y="330" width="160" height="40" rx="8" fill="#fff" strokeWidth={4} />
          {/* Ornate curved harmonic neck on top */}
          <path d="M100 50 C160 30, 240 80, 280 140" fill="none" strokeWidth={18} stroke="#fff" />
          <path d="M100 50 C160 30, 240 80, 280 140" fill="none" strokeWidth={4} stroke="#111827" />
          {/* Angled soundboard body */}
          <polygon points="280,140 220,335 180,335 250,140" fill="#fff" strokeWidth={3.5} />
          {/* Vertical strings */}
          <line x1="130" y1="60" x2="185" y2="330" strokeWidth={1.5} />
          <line x1="150" y1="68" x2="195" y2="300" strokeWidth={1.5} />
          <line x1="170" y1="80" x2="205" y2="270" strokeWidth={1.5} />
          <line x1="190" y1="95" x2="215" y2="240" strokeWidth={1.5} />
          <line x1="210" y1="108" x2="225" y2="210" strokeWidth={1.5} />
          <line x1="230" y1="120" x2="235" y2="180" strokeWidth={1.5} />
          <line x1="250" y1="132" x2="245" y2="160" strokeWidth={1.5} />
        </g>
      );

    case "jazz-saxophone-horn-coloring-page":
    case "curved-brass-tenor-saxophone-coloring-page":
      return (
        <g>
          {/* Main saxophone body tube */}
          <path d="M190 70 L190 270 C190 330, 270 330, 270 270 L270 210" fill="none" strokeWidth={18} stroke="#fff" />
          <path d="M190 70 L190 270 C190 330, 270 330, 270 270 L270 210" fill="none" strokeWidth={4} stroke="#111827" />
          {/* Upturned flared bell */}
          <path d="M260 230 C260 170, 310 150, 340 140 C340 210, 300 240, 270 240 Z" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="320" cy="155" rx="22" ry="14" fill="#fff" strokeWidth={3} transform="rotate(-30 320 155)" />
          {/* Neck with curved crook and mouthpiece */}
          <path d="M190 75 Q190 40 160 40 L135 45" fill="none" strokeWidth={4} strokeLinecap="round" />
          <rect x="120" y="42" width="18" height="10" rx="2" fill="#111827" />
          {/* Key cups and rods down tube */}
          <circle cx="178" cy="120" r="6" fill="#fff" strokeWidth={2.5} />
          <circle cx="178" cy="145" r="6" fill="#fff" strokeWidth={2.5} />
          <circle cx="178" cy="170" r="6" fill="#fff" strokeWidth={2.5} />
          <circle cx="178" cy="195" r="6" fill="#fff" strokeWidth={2.5} />
          <circle cx="178" cy="220" r="6" fill="#fff" strokeWidth={2.5} />
          <line x1="172" y1="110" x2="172" y2="230" strokeWidth={2} stroke="#111827" />
        </g>
      );

    case "bellows-accordion-with-keys-coloring-page":
    case "accordion-with-bellows-and-keys-coloring-page":
      return (
        <g>
          {/* Pleated folding bellows in center */}
          <polygon points="140,110 160,95 180,110 200,95 220,110 240,95 260,110 260,290 240,305 220,290 200,305 180,290 160,305 140,290" fill="#fff" strokeWidth={3.5} />
          <line x1="160" y1="95" x2="160" y2="305" strokeWidth={2.5} />
          <line x1="180" y1="110" x2="180" y2="290" strokeWidth={2.5} />
          <line x1="200" y1="95" x2="200" y2="305" strokeWidth={2.5} />
          <line x1="220" y1="110" x2="220" y2="290" strokeWidth={2.5} />
          <line x1="240" y1="95" x2="240" y2="305" strokeWidth={2.5} />
          {/* Right hand piano keyboard casing */}
          <rect x="260" y="100" width="70" height="200" rx="10" fill="#fff" strokeWidth={4} />
          <line x1="290" y1="110" x2="290" y2="290" strokeWidth={2} />
          <line x1="260" y1="130" x2="310" y2="130" strokeWidth={2} />
          <line x1="260" y1="150" x2="310" y2="150" strokeWidth={2} />
          <line x1="260" y1="170" x2="310" y2="170" strokeWidth={2} />
          <line x1="260" y1="190" x2="310" y2="190" strokeWidth={2} />
          <line x1="260" y1="210" x2="310" y2="210" strokeWidth={2} />
          {/* Left hand bass button board */}
          <rect x="70" y="100" width="70" height="200" rx="10" fill="#fff" strokeWidth={4} />
          <circle cx="95" cy="140" r="5" fill="#111827" />
          <circle cx="115" cy="140" r="5" fill="#111827" />
          <circle cx="95" cy="170" r="5" fill="#111827" />
          <circle cx="115" cy="170" r="5" fill="#111827" />
          <circle cx="95" cy="200" r="5" fill="#111827" />
          <circle cx="115" cy="200" r="5" fill="#111827" />
          <circle cx="95" cy="230" r="5" fill="#111827" />
          <circle cx="115" cy="230" r="5" fill="#111827" />
        </g>
      );

    case "colorful-wooden-xylophone-coloring-page":
    case "rainbow-xylophone-glockenspiel-with-mallets-coloring-page":
      return (
        <g>
          {/* Trapezoid wooden frame */}
          <polygon points="60,110 340,170 320,290 80,260" fill="#fff" strokeWidth={3.5} />
          {/* Graduated tone bars */}
          <rect x="70" y="90" width="24" height="190" rx="4" fill="#fff" strokeWidth={3} />
          <rect x="105" y="100" width="24" height="175" rx="4" fill="#fff" strokeWidth={3} />
          <rect x="140" y="110" width="24" height="160" rx="4" fill="#fff" strokeWidth={3} />
          <rect x="175" y="120" width="24" height="145" rx="4" fill="#fff" strokeWidth={3} />
          <rect x="210" y="130" width="24" height="130" rx="4" fill="#fff" strokeWidth={3} />
          <rect x="245" y="140" width="24" height="115" rx="4" fill="#fff" strokeWidth={3} />
          <rect x="280" y="150" width="24" height="100" rx="4" fill="#fff" strokeWidth={3} />
          <rect x="315" y="160" width="24" height="85" rx="4" fill="#fff" strokeWidth={3} />
          {/* Mounting pins on each bar */}
          <circle cx="82" cy="115" r="3" fill="#111827" />
          <circle cx="82" cy="255" r="3" fill="#111827" />
          <circle cx="117" cy="125" r="3" fill="#111827" />
          <circle cx="117" cy="245" r="3" fill="#111827" />
          <circle cx="327" cy="175" r="3" fill="#111827" />
          <circle cx="327" cy="225" r="3" fill="#111827" />
          {/* Pair of crossed round mallets */}
          <line x1="140" y1="340" x2="240" y2="230" strokeWidth={4} stroke="#111827" strokeLinecap="round" />
          <circle cx="240" cy="230" r="14" fill="#fff" strokeWidth={3} />
          <line x1="260" y1="340" x2="160" y2="230" strokeWidth={4} stroke="#111827" strokeLinecap="round" />
          <circle cx="160" cy="230" r="14" fill="#fff" strokeWidth={3} />
        </g>
      );

    default:
      return null;
  }
}
