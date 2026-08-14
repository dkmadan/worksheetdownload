// Star-night SVG background — matches the navy-blue star pattern image.
// Used as backgroundImage on the Search button, Login button, and logo gradient.

const SVG_STR = [
  `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="70">`,
  `<rect width="300" height="70" fill="#3d5280"/>`,
  // dotted yellow-green arc
  `<path d="M15,58 Q80,8 180,48 Q248,65 295,28" fill="none" stroke="#c8dc28" stroke-width="1.5" stroke-dasharray="2,7" stroke-linecap="round"/>`,
  // white dots
  `<circle cx="22" cy="20" r="1.8" fill="white" opacity="0.8"/>`,
  `<circle cx="57" cy="47" r="1.4" fill="white" opacity="0.75"/>`,
  `<circle cx="113" cy="28" r="1.8" fill="white" opacity="0.8"/>`,
  `<circle cx="147" cy="11" r="1.4" fill="white" opacity="0.75"/>`,
  `<circle cx="193" cy="57" r="1.8" fill="white" opacity="0.8"/>`,
  `<circle cx="238" cy="44" r="1.4" fill="white" opacity="0.75"/>`,
  `<circle cx="278" cy="16" r="1.8" fill="white" opacity="0.8"/>`,
  // large yellow star (40,34)
  `<polygon transform="translate(40,34)" points="0,-8 1.8,-2.5 7.6,-2.5 2.9,1 4.7,6.5 0,3 -4.7,6.5 -2.9,1 -7.6,-2.5 -1.8,-2.5" fill="#f5c842"/>`,
  // small orange star (95,14)
  `<polygon transform="translate(95,14)" points="0,-5 1.1,-1.6 4.8,-1.6 1.8,0.6 2.9,4.1 0,1.9 -2.9,4.1 -1.8,0.6 -4.8,-1.6 -1.1,-1.6" fill="#e8882a"/>`,
  // pink/coral star (155,52)
  `<polygon transform="translate(155,52)" points="0,-6 1.4,-1.9 5.7,-1.9 2.2,0.7 3.5,4.9 0,2.3 -3.5,4.9 -2.2,0.7 -5.7,-1.9 -1.4,-1.9" fill="#e86868"/>`,
  // white star + sparkle (205,18)
  `<polygon transform="translate(205,18)" points="0,-4 0.9,-1.2 3.8,-1.2 1.5,0.5 2.4,3.2 0,1.5 -2.4,3.2 -1.5,0.5 -3.8,-1.2 -0.9,-1.2" fill="white"/>`,
  `<line x1="205" y1="10" x2="205" y2="7" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity="0.65"/>`,
  `<line x1="205" y1="26" x2="205" y2="29" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity="0.65"/>`,
  `<line x1="197" y1="18" x2="194" y2="18" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity="0.65"/>`,
  `<line x1="213" y1="18" x2="216" y2="18" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity="0.65"/>`,
  // amber star + sparkle (255,36)
  `<polygon transform="translate(255,36)" points="0,-8 1.8,-2.5 7.6,-2.5 2.9,1 4.7,6.5 0,3 -4.7,6.5 -2.9,1 -7.6,-2.5 -1.8,-2.5" fill="#f0a020"/>`,
  `<line x1="255" y1="24" x2="255" y2="21" stroke="#f0a020" stroke-width="1.5" stroke-linecap="round" opacity="0.65"/>`,
  `<line x1="255" y1="48" x2="255" y2="51" stroke="#f0a020" stroke-width="1.5" stroke-linecap="round" opacity="0.65"/>`,
  `<line x1="243" y1="36" x2="240" y2="36" stroke="#f0a020" stroke-width="1.5" stroke-linecap="round" opacity="0.65"/>`,
  `<line x1="267" y1="36" x2="270" y2="36" stroke="#f0a020" stroke-width="1.5" stroke-linecap="round" opacity="0.65"/>`,
  // tiny white star (130,30)
  `<polygon transform="translate(130,30)" points="0,-3 0.7,-0.9 2.9,-0.9 1.1,0.4 1.8,2.4 0,1.1 -1.8,2.4 -1.1,0.4 -2.9,-0.9 -0.7,-0.9" fill="white"/>`,
  // small orange star (72,57)
  `<polygon transform="translate(72,57)" points="0,-4 0.9,-1.2 3.8,-1.2 1.5,0.5 2.4,3.2 0,1.5 -2.4,3.2 -1.5,0.5 -3.8,-1.2 -0.9,-1.2" fill="#e8882a"/>`,
  `</svg>`,
].join("");

export const STAR_BUTTON_BG = `url("data:image/svg+xml,${encodeURIComponent(SVG_STR)}")`;

// The navy blue from the star image — for logo gradient / accent colour
export const STAR_NAVY = "#3d5280";
export const STAR_NAVY_DARK = "#2a3f6a";
