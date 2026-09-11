import React from "react";

interface ColoringIllustrationProps {
  type: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function ColoringIllustration({
  type,
  className = "w-full h-full",
  width = "100%",
  height = "100%",
}: ColoringIllustrationProps) {
  const norm = type.toLowerCase().trim();

  // Helper for outline path
  const strokeColor = "#111827";
  const strokeW = 3;

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      width={width}
      height={height}
      fill="white"
      stroke={strokeColor}
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {renderArtwork(norm)}
    </svg>
  );
}

function renderArtwork(type: string): React.ReactNode {
  switch (type) {
    // ══════════════════════════════════════════════════════════════════
    // 1. ANIMALS
    // ══════════════════════════════════════════════════════════════════
    case "cute-bear":
      return (
        <g>
          {/* Ears */}
          <circle cx="120" cy="110" r="45" fill="#fff" />
          <circle cx="120" cy="110" r="25" fill="#fff" />
          <circle cx="280" cy="110" r="45" fill="#fff" />
          <circle cx="280" cy="110" r="25" fill="#fff" />
          {/* Body */}
          <path d="M130 250 C110 320, 110 350, 200 350 C290 350, 290 320, 270 250 Z" fill="#fff" />
          {/* Head */}
          <circle cx="200" cy="170" r="95" fill="#fff" />
          {/* Snout */}
          <ellipse cx="200" cy="200" rx="42" ry="32" fill="#fff" />
          {/* Nose & Mouth */}
          <path d="M185 188 Q200 180 215 188 Q200 202 185 188 Z" fill="#111827" />
          <path d="M200 195 L200 215 M188 212 Q200 224 212 212" fill="none" strokeWidth={2.5} />
          {/* Eyes */}
          <ellipse cx="160" cy="155" rx="12" ry="16" fill="#111827" />
          <circle cx="157" cy="150" r="4" fill="#fff" stroke="none" />
          <ellipse cx="240" cy="155" rx="12" ry="16" fill="#111827" />
          <circle cx="237" cy="150" r="4" fill="#fff" stroke="none" />
          {/* Legs & Paws */}
          <ellipse cx="120" cy="335" rx="35" ry="30" fill="#fff" />
          <circle cx="120" cy="340" r="14" fill="#fff" strokeWidth={2} />
          <circle cx="106" cy="320" r="5" fill="#fff" strokeWidth={2} />
          <circle cx="120" cy="315" r="5" fill="#fff" strokeWidth={2} />
          <circle cx="134" cy="320" r="5" fill="#fff" strokeWidth={2} />

          <ellipse cx="280" cy="335" rx="35" ry="30" fill="#fff" />
          <circle cx="280" cy="340" r="14" fill="#fff" strokeWidth={2} />
          <circle cx="266" cy="320" r="5" fill="#fff" strokeWidth={2} />
          <circle cx="280" cy="315" r="5" fill="#fff" strokeWidth={2} />
          <circle cx="294" cy="320" r="5" fill="#fff" strokeWidth={2} />

          {/* Front paws */}
          <path d="M175 250 L170 340 M225 250 L230 340" fill="none" strokeWidth={2.5} />
        </g>
      );

    case "baby-hippo":
      return (
        <g>
          {/* Small ears */}
          <path d="M130 90 C110 80, 100 110, 125 120 Z" fill="#fff" />
          <path d="M270 90 C290 80, 300 110, 275 120 Z" fill="#fff" />
          {/* Body */}
          <path d="M120 220 C80 270, 90 350, 200 350 C310 350, 320 270, 280 220 Z" fill="#fff" />
          {/* Head & Big muzzle */}
          <circle cx="200" cy="150" r="75" fill="#fff" />
          <ellipse cx="200" cy="205" rx="80" ry="55" fill="#fff" />
          {/* Eyes */}
          <ellipse cx="160" cy="130" rx="10" ry="14" fill="#111827" />
          <circle cx="157" cy="125" r="3" fill="#fff" stroke="none" />
          <ellipse cx="240" cy="130" rx="10" ry="14" fill="#111827" />
          <circle cx="237" cy="125" r="3" fill="#fff" stroke="none" />
          {/* Nostrils */}
          <ellipse cx="170" cy="180" rx="7" ry="10" fill="#111827" />
          <ellipse cx="230" cy="180" rx="7" ry="10" fill="#111827" />
          {/* Big happy mouth */}
          <path d="M140 205 Q200 260 260 205" fill="#fff" />
          <path d="M140 205 Q200 245 260 205" fill="#111827" />
          {/* Cute teeth */}
          <rect x="165" y="206" width="12" height="10" rx="3" fill="#fff" />
          <rect x="223" y="206" width="12" height="10" rx="3" fill="#fff" />
          {/* Paws */}
          <ellipse cx="130" cy="330" rx="30" ry="25" fill="#fff" />
          <ellipse cx="270" cy="330" rx="30" ry="25" fill="#fff" />
          <path d="M175 270 L170 345 M225 270 L230 345" fill="none" strokeWidth={2.5} />
        </g>
      );

    case "friendly-elephant":
      return (
        <g>
          {/* Big ears */}
          <circle cx="85" cy="155" r="70" fill="#fff" />
          <path d="M50 115 C35 140, 35 175, 65 200" fill="none" strokeWidth={2} />
          <circle cx="315" cy="155" r="70" fill="#fff" />
          <path d="M350 115 C365 140, 365 175, 335 200" fill="none" strokeWidth={2} />
          {/* Body */}
          <ellipse cx="200" cy="275" rx="100" ry="75" fill="#fff" />
          {/* Head */}
          <circle cx="200" cy="165" r="80" fill="#fff" />
          {/* Trunk */}
          <path
            d="M190 200 C175 220, 160 240, 158 270 C155 295, 165 315, 155 330 C150 338, 138 340, 130 330 C125 322, 130 315, 138 315 C146 315, 150 300, 152 275 C158 245, 175 225, 205 205 Z"
            fill="#fff"
          />
          {/* Eyes */}
          <ellipse cx="165" cy="150" rx="14" ry="18" fill="#111827" />
          <circle cx="160" cy="144" r="4" fill="#fff" stroke="none" />
          <ellipse cx="235" cy="150" rx="14" ry="18" fill="#111827" />
          <circle cx="230" cy="144" r="4" fill="#fff" stroke="none" />
          {/* Eyebrows */}
          <path d="M145 125 Q165 115 180 125" fill="none" strokeWidth={2.5} />
          <path d="M255 125 Q235 115 220 125" fill="none" strokeWidth={2.5} />
          {/* Legs */}
          <rect x="120" y="310" width="35" height="50" rx="8" fill="#fff" />
          <rect x="165" y="310" width="35" height="50" rx="8" fill="#fff" />
          <rect x="210" y="310" width="35" height="50" rx="8" fill="#fff" />
          <rect x="255" y="310" width="35" height="50" rx="8" fill="#fff" />
        </g>
      );

    case "lion-cub":
      return (
        <g>
          {/* Mane puffs */}
          <circle cx="200" cy="160" r="105" fill="#fff" strokeDasharray="16 8" strokeWidth={4} />
          <circle cx="130" cy="95" r="30" fill="#fff" />
          <circle cx="270" cy="95" r="30" fill="#fff" />
          {/* Body */}
          <path d="M140 240 C110 300, 120 350, 200 350 C280 350, 290 300, 260 240 Z" fill="#fff" />
          {/* Head */}
          <circle cx="200" cy="165" r="75" fill="#fff" />
          {/* Muzzle */}
          <ellipse cx="200" cy="195" rx="35" ry="25" fill="#fff" />
          <path d="M185 180 L215 180 L200 195 Z" fill="#111827" />
          <path d="M200 195 L200 208 M190 206 Q200 215 210 206" fill="none" strokeWidth={2.5} />
          {/* Eyes */}
          <circle cx="165" cy="150" r="12" fill="#111827" />
          <circle cx="162" cy="146" r="3.5" fill="#fff" stroke="none" />
          <circle cx="235" cy="150" r="12" fill="#111827" />
          <circle cx="232" cy="146" r="3.5" fill="#fff" stroke="none" />
          {/* Whiskers */}
          <line x1="140" y1="195" x2="110" y2="190" strokeWidth={2} />
          <line x1="140" y1="202" x2="110" y2="205" strokeWidth={2} />
          <line x1="260" y1="195" x2="290" y2="190" strokeWidth={2} />
          <line x1="260" y1="202" x2="290" y2="205" strokeWidth={2} />
          {/* Paws */}
          <ellipse cx="140" cy="335" rx="28" ry="22" fill="#fff" />
          <ellipse cx="260" cy="335" rx="28" ry="22" fill="#fff" />
          <path d="M180 270 L175 345 M220 270 L225 345" fill="none" strokeWidth={2.5} />
        </g>
      );

    case "playful-puppy":
      return (
        <g>
          {/* Floppy ears */}
          <path d="M125 120 C90 120, 70 180, 100 210 C120 210, 130 170, 135 140 Z" fill="#fff" />
          <path d="M275 120 C310 120, 330 180, 300 210 C280 210, 270 170, 265 140 Z" fill="#fff" />
          {/* Body */}
          <path d="M135 240 C110 300, 120 350, 200 350 C280 350, 290 300, 265 240 Z" fill="#fff" />
          {/* Head */}
          <circle cx="200" cy="160" r="75" fill="#fff" />
          {/* Snout */}
          <ellipse cx="200" cy="190" rx="32" ry="24" fill="#fff" />
          <ellipse cx="200" cy="180" rx="14" ry="10" fill="#111827" />
          <path d="M200 190 L200 202 M190 200 Q200 210 210 200" fill="none" strokeWidth={2.5} />
          {/* Eyes */}
          <circle cx="165" cy="145" r="11" fill="#111827" />
          <circle cx="162" cy="142" r="3.5" fill="#fff" stroke="none" />
          <circle cx="235" cy="145" r="11" fill="#111827" />
          <circle cx="232" cy="142" r="3.5" fill="#fff" stroke="none" />
          {/* Tongue */}
          <path d="M195 204 Q200 222 205 204" fill="#fff" strokeWidth={2} />
          {/* Wagging tail */}
          <path d="M270 290 Q320 280 325 240" fill="none" strokeWidth={4} />
          {/* Paws */}
          <ellipse cx="140" cy="335" rx="28" ry="22" fill="#fff" />
          <ellipse cx="260" cy="335" rx="28" ry="22" fill="#fff" />
          <path d="M180 270 L175 345 M220 270 L225 345" fill="none" strokeWidth={2.5} />
        </g>
      );

    case "happy-kitten":
      return (
        <g>
          {/* Pointy ears */}
          <path d="M125 130 L110 70 L160 100 Z" fill="#fff" />
          <path d="M130 115 L120 85 L150 100 Z" fill="#fff" strokeWidth={2} />
          <path d="M275 130 L290 70 L240 100 Z" fill="#fff" />
          <path d="M270 115 L280 85 L250 100 Z" fill="#fff" strokeWidth={2} />
          {/* Body */}
          <path d="M140 230 C110 290, 120 345, 200 345 C280 345, 290 290, 260 230 Z" fill="#fff" />
          {/* Head */}
          <ellipse cx="200" cy="160" rx="80" ry="70" fill="#fff" />
          {/* Nose & Smile */}
          <path d="M192 178 L208 178 L200 188 Z" fill="#111827" />
          <path d="M200 188 L200 196 M190 194 Q200 202 210 194" fill="none" strokeWidth={2.5} />
          {/* Eyes */}
          <ellipse cx="160" cy="145" rx="12" ry="16" fill="#111827" />
          <circle cx="156" cy="140" r="4" fill="#fff" stroke="none" />
          <ellipse cx="240" cy="145" rx="12" ry="16" fill="#111827" />
          <circle cx="236" cy="140" r="4" fill="#fff" stroke="none" />
          {/* Whiskers */}
          <line x1="145" y1="185" x2="105" y2="180" strokeWidth={2} />
          <line x1="145" y1="192" x2="105" y2="195" strokeWidth={2} />
          <line x1="255" y1="185" x2="295" y2="180" strokeWidth={2} />
          <line x1="255" y1="192" x2="295" y2="195" strokeWidth={2} />
          {/* Tail */}
          <path d="M270 290 C330 280, 340 200, 315 180" fill="none" strokeWidth={4} />
          {/* Paws */}
          <ellipse cx="145" cy="335" rx="26" ry="20" fill="#fff" />
          <ellipse cx="255" cy="335" rx="26" ry="20" fill="#fff" />
        </g>
      );

    case "cuddly-panda":
      return (
        <g>
          {/* Black ears */}
          <circle cx="125" cy="105" r="35" fill="#111827" />
          <circle cx="275" cy="105" r="35" fill="#111827" />
          {/* Body */}
          <path d="M130 240 C100 300, 110 350, 200 350 C290 350, 300 300, 270 240 Z" fill="#fff" />
          {/* Head */}
          <circle cx="200" cy="165" r="85" fill="#fff" />
          {/* Eye patches */}
          <ellipse cx="155" cy="155" rx="22" ry="28" transform="rotate(-15 155 155)" fill="#111827" />
          <circle cx="157" cy="150" r="5" fill="#fff" stroke="none" />
          <ellipse cx="245" cy="155" rx="22" ry="28" transform="rotate(15 245 155)" fill="#111827" />
          <circle cx="243" cy="150" r="5" fill="#fff" stroke="none" />
          {/* Nose & Mouth */}
          <ellipse cx="200" cy="188" rx="14" ry="10" fill="#111827" />
          <path d="M200 198 L200 208 M190 205 Q200 216 210 205" fill="none" strokeWidth={2.5} />
          {/* Bamboo stick */}
          <line x1="280" y1="120" x2="330" y2="340" strokeWidth={6} stroke="#111827" />
          <line x1="290" y1="160" x2="310" y2="155" strokeWidth={3} stroke="#111827" />
          {/* Paws */}
          <ellipse cx="130" cy="335" rx="32" ry="24" fill="#111827" />
          <ellipse cx="270" cy="335" rx="32" ry="24" fill="#111827" />
          {/* Front arms */}
          <path d="M120 220 Q160 260 170 300 M280 220 Q240 260 230 300" fill="none" strokeWidth={4} />
        </g>
      );

    case "hopping-bunny":
      return (
        <g>
          {/* Long ears */}
          <ellipse cx="150" cy="90" rx="24" ry="75" fill="#fff" transform="rotate(-10 150 90)" />
          <ellipse cx="150" cy="90" rx="12" ry="50" fill="#fff" transform="rotate(-10 150 90)" strokeWidth={2} />
          <ellipse cx="250" cy="90" rx="24" ry="75" fill="#fff" transform="rotate(10 250 90)" />
          <ellipse cx="250" cy="90" rx="12" ry="50" fill="#fff" transform="rotate(10 250 90)" strokeWidth={2} />
          {/* Body */}
          <ellipse cx="200" cy="270" rx="80" ry="75" fill="#fff" />
          {/* Head */}
          <circle cx="200" cy="180" r="65" fill="#fff" />
          {/* Cheeks */}
          <circle cx="170" cy="205" r="15" fill="#fff" strokeWidth={2} />
          <circle cx="230" cy="205" r="15" fill="#fff" strokeWidth={2} />
          {/* Nose & Mouth */}
          <ellipse cx="200" cy="195" rx="8" ry="6" fill="#111827" />
          <path d="M200 201 L200 210 M192 208 Q200 216 208 208" fill="none" strokeWidth={2.5} />
          {/* Eyes */}
          <ellipse cx="165" cy="165" rx="10" ry="14" fill="#111827" />
          <circle cx="162" cy="160" r="3.5" fill="#fff" stroke="none" />
          <ellipse cx="235" cy="165" rx="10" ry="14" fill="#111827" />
          <circle cx="232" cy="160" r="3.5" fill="#fff" stroke="none" />
          {/* Whiskers */}
          <line x1="145" y1="195" x2="105" y2="190" strokeWidth={2} />
          <line x1="145" y1="205" x2="105" y2="208" strokeWidth={2} />
          <line x1="255" y1="195" x2="295" y2="190" strokeWidth={2} />
          <line x1="255" y1="205" x2="295" y2="208" strokeWidth={2} />
          {/* Fluffy tail */}
          <circle cx="110" cy="300" r="20" fill="#fff" />
          {/* Big back feet */}
          <ellipse cx="140" cy="340" rx="35" ry="20" fill="#fff" />
          <ellipse cx="260" cy="340" rx="35" ry="20" fill="#fff" />
        </g>
      );

    case "tall-giraffe":
      return (
        <g>
          {/* Horns (ossicones) */}
          <line x1="180" y1="50" x2="180" y2="80" strokeWidth={4} />
          <circle cx="180" cy="45" r="8" fill="#111827" />
          <line x1="220" y1="50" x2="220" y2="80" strokeWidth={4} />
          <circle cx="220" cy="45" r="8" fill="#111827" />
          {/* Ears */}
          <ellipse cx="140" cy="85" rx="20" ry="10" fill="#fff" transform="rotate(-25 140 85)" />
          <ellipse cx="260" cy="85" rx="20" ry="10" fill="#fff" transform="rotate(25 260 85)" />
          {/* Long Neck & Body */}
          <path d="M170 120 L160 260 C120 280, 110 330, 200 340 C290 330, 280 280, 240 260 L230 120 Z" fill="#fff" />
          {/* Head */}
          <circle cx="200" cy="95" r="40" fill="#fff" />
          <ellipse cx="200" cy="115" rx="28" ry="18" fill="#fff" />
          {/* Nostrils */}
          <circle cx="190" cy="115" r="4" fill="#111827" />
          <circle cx="210" cy="115" r="4" fill="#111827" />
          {/* Eyes */}
          <circle cx="180" cy="85" r="8" fill="#111827" />
          <circle cx="178" cy="83" r="2.5" fill="#fff" stroke="none" />
          <circle cx="220" cy="85" r="8" fill="#111827" />
          <circle cx="218" cy="83" r="2.5" fill="#fff" stroke="none" />
          {/* Giraffe spots */}
          <rect x="180" y="150" width="22" height="18" rx="6" fill="#fff" strokeWidth={2} />
          <rect x="195" y="190" width="26" height="22" rx="7" fill="#fff" strokeWidth={2} />
          <rect x="175" y="235" width="20" height="20" rx="6" fill="#fff" strokeWidth={2} />
          <rect x="150" y="290" width="28" height="24" rx="8" fill="#fff" strokeWidth={2} />
          <rect x="220" y="290" width="28" height="24" rx="8" fill="#fff" strokeWidth={2} />
          {/* Legs */}
          <rect x="145" y="325" width="20" height="45" rx="5" fill="#fff" />
          <rect x="235" y="325" width="20" height="45" rx="5" fill="#fff" />
        </g>
      );

    case "cheeky-monkey":
      return (
        <g>
          {/* Ears */}
          <circle cx="120" cy="150" r="35" fill="#fff" />
          <circle cx="120" cy="150" r="20" fill="#fff" />
          <circle cx="280" cy="150" r="35" fill="#fff" />
          <circle cx="280" cy="150" r="20" fill="#fff" />
          {/* Body */}
          <ellipse cx="200" cy="270" rx="70" ry="60" fill="#fff" />
          <ellipse cx="200" cy="275" rx="45" ry="40" fill="#fff" strokeWidth={2} />
          {/* Head */}
          <circle cx="200" cy="150" r="70" fill="#fff" />
          {/* Face mask / heart shape */}
          <path d="M150 145 C150 115, 195 115, 200 135 C205 115, 250 115, 250 145 C250 185, 200 195, 200 195 C200 195, 150 185, 150 145 Z" fill="#fff" strokeWidth={2} />
          {/* Eyes */}
          <circle cx="175" cy="140" r="8" fill="#111827" />
          <circle cx="173" cy="138" r="2.5" fill="#fff" stroke="none" />
          <circle cx="225" cy="140" r="8" fill="#111827" />
          <circle cx="223" cy="138" r="2.5" fill="#fff" stroke="none" />
          {/* Muzzle */}
          <ellipse cx="200" cy="175" rx="30" ry="20" fill="#fff" />
          <circle cx="193" cy="168" r="3" fill="#111827" />
          <circle cx="207" cy="168" r="3" fill="#111827" />
          <path d="M185 178 Q200 190 215 178" fill="none" strokeWidth={2.5} />
          {/* Swirly tail */}
          <path d="M130 270 C60 270, 50 180, 85 160 C100 150, 110 170, 95 180" fill="none" strokeWidth={4} />
          {/* Hands & feet */}
          <circle cx="130" cy="330" r="18" fill="#fff" />
          <circle cx="270" cy="330" r="18" fill="#fff" />
          <ellipse cx="160" cy="330" rx="16" ry="12" fill="#fff" />
          <ellipse cx="240" cy="330" rx="16" ry="12" fill="#fff" />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 2. BIRDS
    // ══════════════════════════════════════════════════════════════════
    case "wise-owl":
      return (
        <g>
          {/* Ear tufts */}
          <path d="M130 110 L105 55 L160 85 Z" fill="#fff" />
          <path d="M270 110 L295 55 L240 85 Z" fill="#fff" />
          {/* Body */}
          <ellipse cx="200" cy="230" rx="90" ry="110" fill="#fff" />
          {/* Belly feathers */}
          <path d="M170 250 Q200 270 230 250 M160 280 Q200 300 240 280" fill="none" strokeWidth={2.5} />
          {/* Big eye circles */}
          <circle cx="155" cy="140" r="35" fill="#fff" strokeWidth={3} />
          <circle cx="155" cy="140" r="18" fill="#111827" />
          <circle cx="150" cy="135" r="5" fill="#fff" stroke="none" />
          <circle cx="245" cy="140" r="35" fill="#fff" strokeWidth={3} />
          <circle cx="245" cy="140" r="18" fill="#111827" />
          <circle cx="240" cy="135" r="5" fill="#fff" stroke="none" />
          {/* Beak */}
          <polygon points="190,165 210,165 200,190" fill="#fff" strokeWidth={2.5} />
          {/* Wings */}
          <path d="M110 180 C80 230, 95 300, 130 310" fill="#fff" strokeWidth={3} />
          <path d="M290 180 C320 230, 305 300, 270 310" fill="#fff" strokeWidth={3} />
          {/* Branch */}
          <rect x="60" y="335" width="280" height="18" rx="8" fill="#fff" />
          {/* Talons */}
          <circle cx="160" cy="335" r="8" fill="#fff" />
          <circle cx="175" cy="335" r="8" fill="#fff" />
          <circle cx="225" cy="335" r="8" fill="#fff" />
          <circle cx="240" cy="335" r="8" fill="#fff" />
        </g>
      );

    case "emperor-penguin":
      return (
        <g>
          {/* Body */}
          <ellipse cx="200" cy="220" rx="85" ry="120" fill="#111827" />
          {/* White Belly */}
          <ellipse cx="200" cy="235" rx="55" ry="90" fill="#fff" />
          {/* Beak */}
          <polygon points="185,130 215,130 200,155" fill="#fff" stroke="#111827" strokeWidth={2.5} />
          {/* Eyes */}
          <circle cx="165" cy="115" r="8" fill="#fff" stroke="#111827" strokeWidth={2} />
          <circle cx="165" cy="115" r="4" fill="#111827" />
          <circle cx="235" cy="115" r="8" fill="#fff" stroke="#111827" strokeWidth={2} />
          <circle cx="235" cy="115" r="4" fill="#111827" />
          {/* Flippers */}
          <path d="M120 180 C80 230, 90 280, 120 260" fill="#111827" stroke="#111827" />
          <path d="M280 180 C320 230, 310 280, 280 260" fill="#111827" stroke="#111827" />
          {/* Feet */}
          <ellipse cx="160" cy="340" rx="25" ry="12" fill="#fff" />
          <ellipse cx="240" cy="340" rx="25" ry="12" fill="#fff" />
        </g>
      );

    case "colorful-parrot":
    case "cute-toucan":
      return (
        <g>
          {/* Perch */}
          <rect x="50" y="320" width="300" height="16" rx="8" fill="#fff" />
          {/* Body */}
          <ellipse cx="180" cy="210" rx="60" ry="90" fill="#fff" />
          {/* Long tail */}
          <path d="M150 280 L120 370 L160 370 L175 280 Z" fill="#fff" />
          <path d="M165 280 L150 380 L180 380 L185 280 Z" fill="#fff" />
          {/* Head */}
          <circle cx="190" cy="110" r="50" fill="#fff" />
          {/* Big curved beak */}
          <path d="M220 90 C290 90, 310 150, 240 160 C230 140, 220 130, 210 130 Z" fill="#fff" />
          {/* Eye */}
          <circle cx="175" cy="100" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="175" cy="100" r="7" fill="#111827" />
          {/* Wing */}
          <path d="M150 170 C130 220, 150 280, 210 250 C210 200, 190 170, 150 170 Z" fill="#fff" />
          {/* Feet */}
          <circle cx="170" cy="320" r="8" fill="#fff" />
          <circle cx="190" cy="320" r="8" fill="#fff" />
        </g>
      );

    case "graceful-flamingo":
      return (
        <g>
          {/* S-neck & body */}
          <path d="M230 180 C270 190, 300 230, 280 270 C250 300, 180 280, 170 250 C160 210, 200 180, 230 180 Z" fill="#fff" />
          <path d="M230 180 C210 150, 180 120, 190 75 C195 55, 215 50, 230 65" fill="none" strokeWidth={4} />
          {/* Head */}
          <circle cx="230" cy="65" r="22" fill="#fff" />
          <path d="M245 60 C275 60, 280 90, 255 100 C245 90, 240 80, 235 75 Z" fill="#fff" />
          <circle cx="225" cy="60" r="4" fill="#111827" />
          {/* Wing feathers */}
          <path d="M200 220 Q240 210 270 240 M210 240 Q250 230 280 260" fill="none" strokeWidth={2.5} />
          {/* Long standing leg */}
          <line x1="210" y1="275" x2="210" y2="370" strokeWidth={3.5} />
          {/* Bent leg */}
          <path d="M240 270 L265 310 L225 325" fill="none" strokeWidth={3.5} />
          {/* Water ripples */}
          <ellipse cx="210" cy="370" rx="45" ry="10" fill="none" strokeWidth={2} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 3. FLOWERS & PLANTS
    // ══════════════════════════════════════════════════════════════════
    case "sunny-sunflower":
      return (
        <g>
          {/* Stem & Leaves */}
          <path d="M200 220 Q190 290 200 370" fill="none" strokeWidth={6} stroke="#111827" />
          <path d="M195 280 C130 270, 120 310, 180 320 Z" fill="#fff" />
          <path d="M205 250 C270 240, 280 280, 220 290 Z" fill="#fff" />
          {/* Flower petals (12 petals) */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <ellipse
              key={deg}
              cx="200"
              cy="80"
              rx="22"
              ry="48"
              fill="#fff"
              transform={`rotate(${deg} 200 150)`}
            />
          ))}
          {/* Center disc */}
          <circle cx="200" cy="150" r="50" fill="#fff" strokeWidth={3.5} />
          {/* Center seed pattern */}
          <circle cx="200" cy="150" r="35" fill="#fff" strokeDasharray="6 6" strokeWidth={2} />
          <circle cx="200" cy="150" r="20" fill="#fff" strokeDasharray="4 4" strokeWidth={2} />
        </g>
      );

    case "blooming-rose":
    case "spring-tulip":
    case "delicate-daisy":
    case "gentle-lotus":
      return (
        <g>
          {/* Stem & Pot/Leaves */}
          <path d="M200 200 L200 360" fill="none" strokeWidth={5} />
          <path d="M195 260 C130 240, 120 290, 190 290 Z" fill="#fff" />
          <path d="M205 230 C270 210, 280 260, 210 260 Z" fill="#fff" />
          {/* Flower Blossom */}
          <path
            d="M200 80 C130 80, 120 180, 200 210 C280 180, 270 80, 200 80 Z"
            fill="#fff"
            strokeWidth={3.5}
          />
          <path d="M160 120 C180 150, 220 150, 240 120" fill="none" strokeWidth={3} />
          <path d="M180 100 C190 120, 210 120, 220 100" fill="none" strokeWidth={2.5} />
          <circle cx="200" cy="95" r="14" fill="#fff" strokeWidth={2} />
        </g>
      );

    case "tropical-palm-tree":
    case "giant-oak-tree":
    case "desert-cactus":
    case "mushroom-grove":
    case "lucky-clover":
      return (
        <g>
          {/* Ground */}
          <path d="M50 350 Q200 330 350 350" fill="none" strokeWidth={3} />
          {/* Trunk */}
          <path d="M180 340 L190 180 L210 180 L220 340 Z" fill="#fff" strokeWidth={3.5} />
          {/* Crown */}
          <circle cx="200" cy="140" r="70" fill="#fff" strokeWidth={3.5} />
          <circle cx="150" cy="160" r="50" fill="#fff" strokeWidth={3} />
          <circle cx="250" cy="160" r="50" fill="#fff" strokeWidth={3} />
          <circle cx="170" cy="100" r="45" fill="#fff" strokeWidth={3} />
          <circle cx="230" cy="100" r="45" fill="#fff" strokeWidth={3} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 4. DINOSAURS
    // ══════════════════════════════════════════════════════════════════
    case "mighty-t-rex":
    case "swift-velociraptor":
      return (
        <g>
          {/* Body & Big Tail */}
          <path
            d="M90 280 C50 250, 60 210, 130 200 C150 150, 200 110, 260 100 C290 100, 320 120, 310 150 C290 170, 260 170, 240 180 C230 220, 240 280, 210 320 C170 330, 130 310, 90 280 Z"
            fill="#fff"
            strokeWidth={3.5}
          />
          {/* Open mouth & teeth */}
          <path d="M260 140 L310 140 L280 160 Z" fill="#fff" />
          <polygon points="270,140 275,146 280,140" fill="#111827" />
          <polygon points="285,140 290,146 295,140" fill="#111827" />
          {/* Eye */}
          <circle cx="255" cy="125" r="8" fill="#111827" />
          <circle cx="253" cy="123" r="2.5" fill="#fff" stroke="none" />
          {/* Tiny arms */}
          <path d="M230 200 L255 210 L250 218" fill="none" strokeWidth={3} />
          {/* Big strong legs */}
          <path d="M180 270 C180 310, 160 340, 150 360 L180 360" fill="none" strokeWidth={5} />
          <path d="M210 270 C210 310, 200 340, 195 360 L225 360" fill="none" strokeWidth={5} />
        </g>
      );

    case "gentle-brachiosaurus":
      return (
        <g>
          {/* Long Neck & Body */}
          <path
            d="M320 280 C360 270, 370 290, 340 300 C270 320, 240 330, 170 320 C120 310, 100 240, 110 130 C115 80, 140 60, 160 70 C165 85, 145 105, 140 140 C130 220, 160 250, 220 250 C260 250, 290 260, 320 280 Z"
            fill="#fff"
            strokeWidth={3.5}
          />
          {/* Cute head */}
          <circle cx="150" cy="70" r="18" fill="#fff" />
          <circle cx="145" cy="68" r="4" fill="#111827" />
          {/* Four pillar legs */}
          <rect x="160" y="300" width="22" height="60" rx="6" fill="#fff" />
          <rect x="195" y="300" width="22" height="60" rx="6" fill="#fff" />
          <rect x="250" y="300" width="22" height="60" rx="6" fill="#fff" />
          <rect x="285" y="300" width="22" height="60" rx="6" fill="#fff" />
        </g>
      );

    case "armored-triceratops":
    case "spiked-stegosaurus":
    case "winged-pterodactyl":
    case "heavy-ankylosaurus":
    case "cute-dino-hatchling":
    case "crested-parasaurolophus":
    case "swimming-plesiosaur":
      return (
        <g>
          {/* Generic friendly Dino template */}
          <path
            d="M100 260 C60 220, 70 170, 140 160 C170 110, 230 110, 270 140 C310 170, 300 230, 260 260 C230 280, 150 280, 100 260 Z"
            fill="#fff"
            strokeWidth={3.5}
          />
          {/* Back plates/spikes */}
          <polygon points="150,150 165,110 180,150" fill="#fff" strokeWidth={2.5} />
          <polygon points="190,140 205,100 220,140" fill="#fff" strokeWidth={2.5} />
          <polygon points="230,140 245,105 260,145" fill="#fff" strokeWidth={2.5} />
          {/* Face */}
          <circle cx="260" cy="170" r="8" fill="#111827" />
          <circle cx="258" cy="168" r="2.5" fill="#fff" stroke="none" />
          <path d="M255 190 Q270 200 285 190" fill="none" strokeWidth={2.5} />
          {/* Legs */}
          <rect x="140" y="260" width="26" height="60" rx="8" fill="#fff" />
          <rect x="220" y="260" width="26" height="60" rx="8" fill="#fff" />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 5. VEHICLES
    // ══════════════════════════════════════════════════════════════════
    case "speedy-race-car":
      return (
        <g>
          {/* Body */}
          <path
            d="M60 260 L110 260 L130 200 L270 200 L300 260 L340 260 C355 260, 360 275, 345 290 L65 290 C50 290, 45 260, 60 260 Z"
            fill="#fff"
            strokeWidth={3.5}
          />
          {/* Cockpit / Windshield */}
          <polygon points="150,200 180,160 240,160 260,200" fill="#fff" strokeWidth={3} />
          {/* Racing spoiler */}
          <rect x="50" y="210" width="12" height="50" fill="#fff" />
          <rect x="40" y="200" width="35" height="12" rx="4" fill="#fff" />
          {/* Big wheels */}
          <circle cx="120" cy="290" r="32" fill="#fff" strokeWidth={4} />
          <circle cx="120" cy="290" r="16" fill="#fff" strokeWidth={2.5} />
          <circle cx="285" cy="290" r="32" fill="#fff" strokeWidth={4} />
          <circle cx="285" cy="290" r="16" fill="#fff" strokeWidth={2.5} />
          {/* Racing number */}
          <circle cx="205" cy="245" r="18" fill="#fff" strokeWidth={2} />
          <text x="205" y="252" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#111827" stroke="none">
            1
          </text>
        </g>
      );

    case "friendly-school-bus":
      return (
        <g>
          {/* Main Bus Body */}
          <rect x="60" y="140" width="280" height="140" rx="20" fill="#fff" strokeWidth={3.5} />
          {/* Front Hood */}
          <path d="M340 200 L365 200 C375 200, 375 280, 340 280 Z" fill="#fff" strokeWidth={3} />
          {/* Windows */}
          <rect x="80" y="160" width="40" height="40" rx="6" fill="#fff" strokeWidth={2.5} />
          <rect x="135" y="160" width="40" height="40" rx="6" fill="#fff" strokeWidth={2.5} />
          <rect x="190" y="160" width="40" height="40" rx="6" fill="#fff" strokeWidth={2.5} />
          <rect x="245" y="160" width="40" height="40" rx="6" fill="#fff" strokeWidth={2.5} />
          <rect x="300" y="160" width="35" height="40" rx="6" fill="#fff" strokeWidth={2.5} />
          {/* Bus stripes */}
          <line x1="60" y1="230" x2="340" y2="230" strokeWidth={3} />
          <line x1="60" y1="245" x2="340" y2="245" strokeWidth={3} />
          {/* Wheels */}
          <circle cx="120" cy="285" r="30" fill="#fff" strokeWidth={4} />
          <circle cx="120" cy="285" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="290" cy="285" r="30" fill="#fff" strokeWidth={4} />
          <circle cx="290" cy="285" r="14" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "soaring-airplane":
    case "delivery-helicopter":
      return (
        <g>
          {/* Clouds */}
          <path d="M50 120 Q80 90 110 120 Q140 120 140 150 L50 150 Z" fill="#fff" />
          <path d="M260 280 Q290 250 320 280 Q350 280 350 310 L260 310 Z" fill="#fff" />
          {/* Fuselage */}
          <ellipse cx="200" cy="200" rx="140" ry="40" fill="#fff" strokeWidth={3.5} />
          {/* Tail fin */}
          <polygon points="70,180 30,110 90,170" fill="#fff" strokeWidth={3} />
          {/* Main Wings */}
          <polygon points="180,180 130,90 190,90 230,180" fill="#fff" strokeWidth={3} />
          <polygon points="180,220 130,310 190,310 230,220" fill="#fff" strokeWidth={3} />
          {/* Cockpit Windows & Passenger Windows */}
          <path d="M300 185 Q330 195 300 205 Z" fill="#fff" strokeWidth={2.5} />
          <circle cx="250" cy="195" r="7" fill="#fff" strokeWidth={2} />
          <circle cx="220" cy="195" r="7" fill="#fff" strokeWidth={2} />
          <circle cx="190" cy="195" r="7" fill="#fff" strokeWidth={2} />
          <circle cx="160" cy="195" r="7" fill="#fff" strokeWidth={2} />
        </g>
      );

    case "puffing-steam-train":
    case "sailing-boat":
    case "heroic-fire-truck":
    case "police-patrol-car":
    case "deep-sea-submarine":
    case "sturdy-tractor":
      return (
        <g>
          {/* Cute boat/train generic vehicle template */}
          <path d="M70 240 L330 240 L290 310 L110 310 Z" fill="#fff" strokeWidth={3.5} />
          <rect x="150" y="160" width="100" height="80" rx="10" fill="#fff" strokeWidth={3} />
          <circle cx="180" cy="195" r="15" fill="#fff" strokeWidth={2.5} />
          <circle cx="220" cy="195" r="15" fill="#fff" strokeWidth={2.5} />
          <rect x="185" y="110" width="30" height="50" rx="5" fill="#fff" strokeWidth={3} />
          {/* Smoke puffs / waves */}
          <circle cx="200" cy="85" r="16" fill="#fff" strokeWidth={2} />
          <circle cx="225" cy="65" r="22" fill="#fff" strokeWidth={2} />
          <path d="M40 330 Q100 310 160 330 Q220 310 280 330 Q340 310 380 330" fill="none" strokeWidth={3} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 6. NATURE
    // ══════════════════════════════════════════════════════════════════
    case "sunny-mountain-landscape":
    case "rainbow-over-the-hills":
    case "rushing-waterfall":
    case "ocean-wave-coral-reef":
    case "quiet-forest-clearing":
    case "sandy-desert-dune":
    case "star-filled-night-sky":
    case "cozy-campfire-scene":
    case "peaceful-tropical-island":
    case "bubbling-river-brook":
      return (
        <g>
          {/* Sun */}
          <circle cx="310" cy="100" r="35" fill="#fff" strokeWidth={3} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="310"
              y1="50"
              x2="310"
              y2="35"
              strokeWidth={2.5}
              transform={`rotate(${deg} 310 100)`}
            />
          ))}
          {/* Mountains */}
          <polygon points="60,320 170,120 280,320" fill="#fff" strokeWidth={3.5} />
          <polygon points="170,120 150,165 170,155 190,170" fill="#fff" strokeWidth={2.5} />
          <polygon points="180,320 270,160 360,320" fill="#fff" strokeWidth={3.5} />
          <polygon points="270,160 255,195 270,185 285,200" fill="#fff" strokeWidth={2.5} />
          {/* Rolling hills & trees */}
          <path d="M40 340 Q150 280 260 340 Q330 310 380 340" fill="#fff" strokeWidth={3} />
          <circle cx="110" cy="310" r="20" fill="#fff" strokeWidth={2} />
          <circle cx="140" cy="320" r="15" fill="#fff" strokeWidth={2} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 7. FOOD
    // ══════════════════════════════════════════════════════════════════
    case "sweet-ice-cream-sundae":
    case "birthday-cupcake":
      return (
        <g>
          {/* Cherry on top */}
          <circle cx="200" cy="75" r="18" fill="#fff" strokeWidth={3} />
          <path d="M205 60 Q230 40 240 50" fill="none" strokeWidth={3} />
          {/* Ice cream scoops */}
          <circle cx="200" cy="140" r="50" fill="#fff" strokeWidth={3.5} />
          <circle cx="150" cy="170" r="45" fill="#fff" strokeWidth={3.5} />
          <circle cx="250" cy="170" r="45" fill="#fff" strokeWidth={3.5} />
          {/* Sprinkles */}
          <line x1="180" y1="130" x2="190" y2="125" strokeWidth={3} />
          <line x1="210" y1="135" x2="220" y2="145" strokeWidth={3} />
          <line x1="150" y1="160" x2="160" y2="170" strokeWidth={3} />
          <line x1="240" y1="160" x2="250" y2="155" strokeWidth={3} />
          {/* Sundae glass cup */}
          <path d="M120 190 L160 310 L240 310 L280 190 Z" fill="#fff" strokeWidth={3.5} />
          <line x1="200" y1="310" x2="200" y2="355" strokeWidth={6} />
          <ellipse cx="200" cy="355" rx="50" ry="12" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "cheesy-pizza-slice":
      return (
        <g>
          {/* Crust */}
          <path d="M100 100 Q200 70 300 100 L285 130 Q200 105 115 130 Z" fill="#fff" strokeWidth={3.5} />
          {/* Slice */}
          <polygon points="115,130 285,130 200,340" fill="#fff" strokeWidth={3.5} />
          {/* Pepperoni & toppings */}
          <circle cx="180" cy="170" r="18" fill="#fff" strokeWidth={2.5} />
          <circle cx="230" cy="180" r="16" fill="#fff" strokeWidth={2.5} />
          <circle cx="200" cy="240" r="18" fill="#fff" strokeWidth={2.5} />
          <circle cx="170" cy="285" r="12" fill="#fff" strokeWidth={2.5} />
          {/* Cheese melt drips */}
          <path d="M140 130 Q145 155 155 140 Q170 165 180 135" fill="none" strokeWidth={2} />
        </g>
      );

    case "glazed-sprinkle-donut":
      return (
        <g>
          {/* Big Outer Ring */}
          <circle cx="200" cy="200" r="125" fill="#fff" strokeWidth={4} />
          {/* Center Hole */}
          <circle cx="200" cy="200" r="45" fill="#fff" strokeWidth={3.5} />
          {/* Frosting dripping border */}
          <path
            d="M100 180 Q120 220 140 180 Q160 230 180 180 Q210 235 230 180 Q260 230 280 180 Q300 210 320 180"
            fill="none"
            strokeWidth={2.5}
          />
          {/* Sprinkles all around */}
          {[20, 60, 100, 140, 180, 220, 260, 300, 340].map((deg, i) => (
            <rect
              key={i}
              x="195"
              y="105"
              width="8"
              height="18"
              rx="4"
              fill="#fff"
              strokeWidth={2}
              transform={`rotate(${deg} 200 200)`}
            />
          ))}
        </g>
      );

    case "crunchy-hamburger-fries":
    case "juicy-fresh-fruits":
    case "crisp-sweet-apple":
    case "hot-taco-nachos":
    case "warm-popcorn-bucket":
    case "cute-boba-bubble-tea":
      return (
        <g>
          {/* Boba cup / Drink template */}
          <path d="M120 120 L140 330 Q200 350 260 330 L280 120 Z" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="200" cy="120" rx="80" ry="18" fill="#fff" strokeWidth={3.5} />
          {/* Big straw */}
          <rect x="185" y="40" width="22" height="100" rx="4" fill="#fff" strokeWidth={3} transform="rotate(10 185 40)" />
          {/* Smiling face on cup */}
          <circle cx="175" cy="200" r="6" fill="#111827" />
          <circle cx="225" cy="200" r="6" fill="#111827" />
          <path d="M185 220 Q200 235 215 220" fill="none" strokeWidth={2.5} />
          {/* Boba pearls */}
          <circle cx="160" cy="300" r="14" fill="#111827" />
          <circle cx="195" cy="315" r="14" fill="#111827" />
          <circle cx="230" cy="305" r="14" fill="#111827" />
          <circle cx="170" cy="270" r="14" fill="#111827" />
          <circle cx="210" cy="280" r="14" fill="#111827" />
          <circle cx="245" cy="270" r="14" fill="#111827" />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 8. SPACE
    // ══════════════════════════════════════════════════════════════════
    case "blasting-space-rocket":
      return (
        <g>
          {/* Rocket Body */}
          <path
            d="M200 60 C150 120, 150 220, 150 260 L250 260 C250 220, 250 120, 200 60 Z"
            fill="#fff"
            strokeWidth={3.5}
          />
          {/* Nosecone tip */}
          <path d="M175 110 Q200 70 225 110 Z" fill="#fff" strokeWidth={2.5} />
          {/* Porthole window */}
          <circle cx="200" cy="170" r="28" fill="#fff" strokeWidth={3.5} />
          <circle cx="200" cy="170" r="18" fill="#fff" strokeWidth={2} />
          {/* Fins */}
          <polygon points="150,220 90,280 150,270" fill="#fff" strokeWidth={3} />
          <polygon points="250,220 310,280 250,270" fill="#fff" strokeWidth={3} />
          {/* Flame engine */}
          <polygon points="165,260 175,280 225,280 235,260" fill="#fff" strokeWidth={2.5} />
          <path d="M175 280 Q200 360 225 280 Q200 330 175 280 Z" fill="#fff" strokeWidth={3} />
          {/* Little stars */}
          <circle cx="90" cy="90" r="4" fill="#111827" />
          <circle cx="310" cy="120" r="4" fill="#111827" />
          <circle cx="80" cy="200" r="3" fill="#111827" />
        </g>
      );

    case "floating-astronaut":
      return (
        <g>
          {/* Helmet & Visor */}
          <circle cx="200" cy="130" r="60" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="200" cy="130" rx="42" ry="32" fill="#fff" strokeWidth={3} />
          <path d="M175 120 Q190 115 195 125" fill="none" strokeWidth={2} />
          {/* Suit Body */}
          <rect x="150" y="190" width="100" height="95" rx="20" fill="#fff" strokeWidth={3.5} />
          <rect x="175" y="210" width="50" height="35" rx="6" fill="#fff" strokeWidth={2} />
          {/* Arms & Gloves */}
          <path d="M150 205 Q100 210 110 245" fill="none" strokeWidth={16} strokeLinecap="round" />
          <circle cx="110" cy="245" r="14" fill="#fff" strokeWidth={3} />
          <path d="M250 205 Q300 170 310 145" fill="none" strokeWidth={16} strokeLinecap="round" />
          <circle cx="310" cy="145" r="14" fill="#fff" strokeWidth={3} />
          {/* Legs & Boots */}
          <rect x="155" y="285" width="35" height="50" rx="10" fill="#fff" strokeWidth={3} />
          <ellipse cx="170" cy="340" rx="25" ry="14" fill="#fff" strokeWidth={3} />
          <rect x="210" y="285" width="35" height="50" rx="10" fill="#fff" strokeWidth={3} />
          <ellipse cx="230" cy="340" rx="25" ry="14" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "ringed-planet-saturn":
      return (
        <g>
          {/* Behind ring */}
          <path d="M50 200 C50 160, 350 160, 350 200" fill="none" strokeWidth={12} stroke="#111827" />
          {/* Planet sphere */}
          <circle cx="200" cy="200" r="90" fill="#fff" strokeWidth={4} />
          {/* Planet bands */}
          <path d="M115 170 Q200 210 285 170" fill="none" strokeWidth={2.5} />
          <path d="M115 230 Q200 270 285 230" fill="none" strokeWidth={2.5} />
          {/* Front ring */}
          <path d="M50 200 C50 240, 350 240, 350 200" fill="none" strokeWidth={12} stroke="#111827" />
          <path d="M70 200 C70 230, 330 230, 330 200" fill="none" strokeWidth={4} stroke="#fff" />
          {/* Stars */}
          <circle cx="100" cy="90" r="5" fill="#111827" />
          <circle cx="300" cy="310" r="5" fill="#111827" />
        </g>
      );

    case "friendly-alien-ufo":
    case "bright-shining-sun":
    case "smiling-crescent-moon":
    case "dazzling-shooting-star":
    case "satellite-in-orbit":
    case "solar-system-planets":
    case "deep-space-telescope":
      return (
        <g>
          {/* UFO flying saucer */}
          <ellipse cx="200" cy="220" rx="130" ry="40" fill="#fff" strokeWidth={4} />
          {/* Glass dome */}
          <path d="M130 210 C130 130, 270 130, 270 210 Z" fill="#fff" strokeWidth={3.5} />
          {/* Little green alien */}
          <circle cx="200" cy="170" r="25" fill="#fff" strokeWidth={2.5} />
          <circle cx="190" cy="165" r="5" fill="#111827" />
          <circle cx="210" cy="165" r="5" fill="#111827" />
          <circle cx="200" cy="135" r="4" fill="#111827" />
          <line x1="200" y1="145" x2="200" y2="135" strokeWidth={2} />
          {/* Saucer glowing lights */}
          <circle cx="110" cy="225" r="9" fill="#fff" strokeWidth={2} />
          <circle cx="155" cy="235" r="9" fill="#fff" strokeWidth={2} />
          <circle cx="200" cy="240" r="9" fill="#fff" strokeWidth={2} />
          <circle cx="245" cy="235" r="9" fill="#fff" strokeWidth={2} />
          <circle cx="290" cy="225" r="9" fill="#fff" strokeWidth={2} />
          {/* Tractor beam */}
          <polygon points="160,260 100,360 300,360 240,260" fill="none" strokeWidth={2.5} strokeDasharray="6 6" />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 9. PEOPLE & PROFESSIONS
    // ══════════════════════════════════════════════════════════════════
    case "brave-firefighter":
    case "caring-doctor":
    case "inspiring-teacher":
    case "adventurous-pilot":
    case "talented-chef":
    case "police-officer":
    case "creative-artist":
    case "curious-scientist":
    case "strong-builder-architect":
    case "fearless-astronaut-explorer":
      return (
        <g>
          {/* Helmet/Hat */}
          <path d="M130 110 C130 60, 270 60, 270 110 Z" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="200" cy="110" rx="80" ry="14" fill="#fff" strokeWidth={3} />
          <rect x="188" y="70" width="24" height="24" rx="4" fill="#fff" strokeWidth={2} />
          {/* Face */}
          <circle cx="200" cy="160" r="50" fill="#fff" strokeWidth={3.5} />
          {/* Eyes & Smile */}
          <circle cx="180" cy="150" r="6" fill="#111827" />
          <circle cx="220" cy="150" r="6" fill="#111827" />
          <path d="M185 175 Q200 190 215 175" fill="none" strokeWidth={2.5} />
          {/* Uniform Body */}
          <rect x="140" y="210" width="120" height="110" rx="16" fill="#fff" strokeWidth={3.5} />
          {/* Badge & Collar */}
          <polygon points="200,210 180,240 220,240" fill="#fff" strokeWidth={2} />
          <line x1="140" y1="260" x2="260" y2="260" strokeWidth={3} />
          {/* Boots */}
          <rect x="150" y="320" width="40" height="40" rx="8" fill="#fff" strokeWidth={3} />
          <rect x="210" y="320" width="40" height="40" rx="8" fill="#fff" strokeWidth={3} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 10. FANTASY & FAIRY TALES
    // ══════════════════════════════════════════════════════════════════
    case "magical-unicorn":
      return (
        <g>
          {/* Magic Horn with swirls */}
          <polygon points="180,50 195,110 165,110" fill="#fff" strokeWidth={3} />
          <line x1="172" y1="95" x2="188" y2="90" strokeWidth={2} />
          <line x1="176" y1="75" x2="184" y2="70" strokeWidth={2} />
          {/* Ears */}
          <polygon points="140,110 130,70 160,95" fill="#fff" strokeWidth={2.5} />
          {/* Head & Mane */}
          <circle cx="190" cy="150" r="55" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="230" cy="170" rx="35" ry="25" fill="#fff" strokeWidth={3} />
          <circle cx="245" cy="165" r="4" fill="#111827" />
          <path d="M235 180 Q245 188 255 180" fill="none" strokeWidth={2} />
          {/* Big Sparkly Eye */}
          <ellipse cx="185" cy="140" rx="10" ry="14" fill="#111827" />
          <circle cx="182" cy="135" r="3.5" fill="#fff" stroke="none" />
          {/* Curly Mane */}
          <path d="M145 130 C110 150, 115 190, 140 200" fill="none" strokeWidth={5} />
          <path d="M135 170 C100 190, 105 230, 130 240" fill="none" strokeWidth={5} />
          {/* Body */}
          <ellipse cx="160" cy="270" rx="75" ry="55" fill="#fff" strokeWidth={3.5} />
          {/* Hooves */}
          <rect x="120" y="310" width="24" height="50" rx="6" fill="#fff" strokeWidth={3} />
          <rect x="180" y="310" width="24" height="50" rx="6" fill="#fff" strokeWidth={3} />
          {/* Stars */}
          <circle cx="280" cy="90" r="5" fill="#111827" />
          <circle cx="310" cy="140" r="4" fill="#111827" />
        </g>
      );

    case "friendly-dragon":
    case "enchanted-fairy":
    case "fairy-tale-castle":
    case "swimming-mermaid":
    case "wise-wizard":
    case "royal-princess":
    case "brave-knight":
    case "floating-magic-carpet":
    case "cute-garden-gnome":
      return (
        <g>
          {/* Castle Towers & Walls */}
          <rect x="90" y="160" width="60" height="170" fill="#fff" strokeWidth={3.5} />
          <polygon points="90,160 120,90 150,160" fill="#fff" strokeWidth={3} />
          <rect x="250" y="160" width="60" height="170" fill="#fff" strokeWidth={3.5} />
          <polygon points="250,160 280,90 310,160" fill="#fff" strokeWidth={3} />
          {/* Central Keep */}
          <rect x="150" y="190" width="100" height="140" fill="#fff" strokeWidth={3.5} />
          {/* Battlements */}
          <rect x="150" y="175" width="20" height="15" fill="#fff" strokeWidth={2} />
          <rect x="190" y="175" width="20" height="15" fill="#fff" strokeWidth={2} />
          <rect x="230" y="175" width="20" height="15" fill="#fff" strokeWidth={2} />
          {/* Grand Arch Door */}
          <path d="M180 330 L180 270 C180 250, 220 250, 220 270 L220 330 Z" fill="#fff" strokeWidth={3} />
          {/* Flag */}
          <line x1="120" y1="90" x2="120" y2="60" strokeWidth={2.5} />
          <polygon points="120,60 150,70 120,80" fill="#fff" strokeWidth={2} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 11. FESTIVALS & HOLIDAYS
    // ══════════════════════════════════════════════════════════════════
    case "decorated-christmas-tree":
      return (
        <g>
          {/* Star on top */}
          <polygon points="200,45 206,62 225,62 210,74 216,92 200,81 184,92 190,74 175,62 194,62" fill="#fff" strokeWidth={2.5} />
          {/* Tree tiers */}
          <polygon points="200,80 150,150 250,150" fill="#fff" strokeWidth={3.5} />
          <polygon points="200,130 125,220 275,220" fill="#fff" strokeWidth={3.5} />
          <polygon points="200,190 95,300 305,300" fill="#fff" strokeWidth={3.5} />
          {/* Baubles / ornaments */}
          <circle cx="170" cy="140" r="9" fill="#fff" strokeWidth={2} />
          <circle cx="225" cy="145" r="9" fill="#fff" strokeWidth={2} />
          <circle cx="145" cy="205" r="10" fill="#fff" strokeWidth={2} />
          <circle cx="200" cy="185" r="10" fill="#fff" strokeWidth={2} />
          <circle cx="255" cy="210" r="10" fill="#fff" strokeWidth={2} />
          <circle cx="130" cy="280" r="11" fill="#fff" strokeWidth={2} />
          <circle cx="190" cy="265" r="11" fill="#fff" strokeWidth={2} />
          <circle cx="270" cy="285" r="11" fill="#fff" strokeWidth={2} />
          {/* Trunk & Gift */}
          <rect x="180" y="300" width="40" height="45" fill="#fff" strokeWidth={3} />
          <rect x="235" y="315" width="45" height="40" rx="4" fill="#fff" strokeWidth={2.5} />
          <line x1="257" y1="315" x2="257" y2="355" strokeWidth={2} />
          <line x1="235" y1="335" x2="280" y2="335" strokeWidth={2} />
        </g>
      );

    case "happy-easter-bunny":
    case "glowing-halloween-pumpkin":
    case "diwali-diya-lamp":
    case "thanksgiving-harvest-cornucopia":
    case "new-year-fireworks":
    case "st-patricks-pot-of-gold":
    case "eid-crescent-moon-mosque":
    case "hanukkah-menorah":
    case "colorful-birthday-party":
      return (
        <g>
          {/* Diya / Festival lantern / Party template */}
          <ellipse cx="200" cy="260" rx="110" ry="40" fill="#fff" strokeWidth={3.5} />
          <path d="M90 260 C90 320, 310 320, 310 260 Z" fill="#fff" strokeWidth={3.5} />
          {/* Flame */}
          <path d="M200 130 C160 190, 180 230, 200 240 C220 230, 240 190, 200 130 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M200 170 C185 200, 190 220, 200 225 C210 220, 215 200, 200 170 Z" fill="#fff" strokeWidth={2} />
          {/* Sparkles / Fireworks around */}
          <circle cx="100" cy="120" r="4" fill="#111827" />
          <circle cx="300" cy="120" r="4" fill="#111827" />
          <circle cx="70" cy="190" r="3" fill="#111827" />
          <circle cx="330" cy="190" r="3" fill="#111827" />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 12. SPORTS
    // ══════════════════════════════════════════════════════════════════
    case "soccer-ball-and-net":
    case "basketball-slam-dunk":
    case "baseball-glove-and-bat":
    case "swimming-pool-splash":
    case "bicycle-rider":
    case "tennis-racket-and-ball":
    case "skateboard-park-trick":
    case "gymnastics-ribbon-dancer":
    case "martial-arts-karate-kick":
    case "ice-hockey-puck-and-stick":
      return (
        <g>
          {/* Big Sports Ball */}
          <circle cx="200" cy="200" r="110" fill="#fff" strokeWidth={4} />
          {/* Soccer pentagon in center */}
          <polygon points="200,165 230,188 220,222 180,222 170,188" fill="#111827" />
          {/* Radiating soccer seam lines */}
          <line x1="200" y1="165" x2="200" y2="120" strokeWidth={3} />
          <line x1="230" y1="188" x2="270" y2="175" strokeWidth={3} />
          <line x1="220" y1="222" x2="255" y2="255" strokeWidth={3} />
          <line x1="180" y1="222" x2="145" y2="255" strokeWidth={3} />
          <line x1="170" y1="188" x2="130" y2="175" strokeWidth={3} />
          {/* Motion lines */}
          <path d="M60 220 Q40 200 60 180" fill="none" strokeWidth={3} />
          <path d="M340 220 Q360 200 340 180" fill="none" strokeWidth={3} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 13. PLACES & BUILDINGS
    // ══════════════════════════════════════════════════════════════════
    case "cozy-country-cottage":
    case "tall-modern-skyscraper":
    case "seaside-lighthouse":
    case "school-house-playground":
    case "ancient-egyptian-pyramid":
    case "majestic-taj-mahal":
    case "paris-eiffel-tower":
    case "london-big-ben-clock":
    case "colorful-carnival-ferris-wheel":
    case "farm-barn-and-windmill":
      return (
        <g>
          {/* Lighthouse / Landmark template */}
          <path d="M160 330 L175 140 L225 140 L240 330 Z" fill="#fff" strokeWidth={3.5} />
          {/* Stripes */}
          <line x1="168" y1="200" x2="232" y2="200" strokeWidth={3} />
          <line x1="164" y1="250" x2="236" y2="250" strokeWidth={3} />
          <line x1="161" y1="300" x2="239" y2="300" strokeWidth={3} />
          {/* Lantern Room on top */}
          <rect x="170" y="95" width="60" height="45" rx="6" fill="#fff" strokeWidth={3} />
          <polygon points="160,95 200,55 240,95" fill="#fff" strokeWidth={3} />
          {/* Light beam */}
          <polygon points="230,115 350,70 350,160" fill="none" strokeWidth={2} strokeDasharray="4 4" />
          {/* Waves at bottom */}
          <path d="M60 340 Q130 320 200 340 Q270 320 340 340" fill="none" strokeWidth={3} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 14. EDUCATIONAL COLORING
    // ══════════════════════════════════════════════════════════════════
    case "alphabet-a-for-apple":
    case "numbers-123-adventure":
    case "geometric-shapes-fun":
    case "world-map-continents":
    case "human-body-organs-simple":
    case "color-wheel-artist":
    case "plant-lifecycle-sprout":
    case "time-clock-learn-to-tell-time":
    case "traffic-light-road-safety":
    case "musical-notes-instruments":
      return (
        <g>
          {/* Big Cute Letter 'A' or Apple */}
          <ellipse cx="200" cy="220" rx="95" ry="90" fill="#fff" strokeWidth={4} />
          {/* Stem & Leaf */}
          <path d="M200 135 C200 100, 220 80, 230 75" fill="none" strokeWidth={5} />
          <path d="M205 105 C245 95, 255 125, 210 120 Z" fill="#fff" strokeWidth={2.5} />
          {/* Big Letter A inside */}
          <text
            x="200"
            y="260"
            fontSize="100"
            fontWeight="900"
            fontFamily="Arial, sans-serif"
            textAnchor="middle"
            fill="#fff"
            stroke="#111827"
            strokeWidth="4"
          >
            A
          </text>
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 15. SEASONS & WEATHER
    // ══════════════════════════════════════════════════════════════════
    case "blooming-spring-garden":
    case "sunny-summer-beach-day":
    case "autumn-falling-leaves":
    case "winter-snowman-wonderland":
    case "rainy-day-umbrella-boots":
    case "thunderstorm-lightning-cloud":
    case "snowy-mountain-blizzard":
    case "windy-day-kite-flying":
    case "spring-rainbow-showers":
    case "autumn-pumpkin-patch":
      return (
        <g>
          {/* Snowman / Season template */}
          {/* Bottom sphere */}
          <circle cx="200" cy="285" r="70" fill="#fff" strokeWidth={3.5} />
          {/* Middle sphere */}
          <circle cx="200" cy="180" r="50" fill="#fff" strokeWidth={3.5} />
          {/* Head */}
          <circle cx="200" cy="105" r="35" fill="#fff" strokeWidth={3.5} />
          {/* Top Hat */}
          <rect x="175" y="45" width="50" height="40" fill="#fff" strokeWidth={3} />
          <line x1="160" y1="85" x2="240" y2="85" strokeWidth={4} />
          {/* Carrot Nose */}
          <polygon points="200,105 235,112 200,115" fill="#fff" strokeWidth={2} />
          {/* Eyes & Smile */}
          <circle cx="190" cy="98" r="4" fill="#111827" />
          <circle cx="210" cy="98" r="4" fill="#111827" />
          <circle cx="190" cy="120" r="2.5" fill="#111827" />
          <circle cx="197" cy="123" r="2.5" fill="#111827" />
          <circle cx="204" cy="123" r="2.5" fill="#111827" />
          <circle cx="211" cy="120" r="2.5" fill="#111827" />
          {/* Scarf */}
          <path d="M175 135 Q200 150 225 135" fill="none" strokeWidth={8} stroke="#111827" />
          <rect x="210" y="140" width="16" height="45" rx="3" fill="#fff" strokeWidth={2.5} />
          {/* Buttons */}
          <circle cx="200" cy="175" r="5" fill="#111827" />
          <circle cx="200" cy="200" r="5" fill="#111827" />
          <circle cx="200" cy="265" r="5" fill="#111827" />
          {/* Snowflake dots */}
          <circle cx="80" cy="90" r="4" fill="#111827" />
          <circle cx="320" cy="130" r="4" fill="#111827" />
          <circle cx="90" cy="230" r="4" fill="#111827" />
          <circle cx="310" cy="280" r="4" fill="#111827" />
        </g>
      );

    default:
      return (
        <g>
          {/* Fallback cute coloring character */}
          <circle cx="200" cy="200" r="100" fill="#fff" strokeWidth={4} />
          <circle cx="165" cy="180" r="14" fill="#111827" />
          <circle cx="160" cy="175" r="4" fill="#fff" stroke="none" />
          <circle cx="235" cy="180" r="14" fill="#111827" />
          <circle cx="230" cy="175" r="4" fill="#fff" stroke="none" />
          <path d="M180 220 Q200 245 220 220" fill="none" strokeWidth={3} />
        </g>
      );
  }
}
