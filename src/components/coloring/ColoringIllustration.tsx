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
  const norm = (type || "").toLowerCase().trim();
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
    case "elephant":
    case "friendly-elephant":
      return (
        <g>
          {/* Big ears */}
          <circle cx="85" cy="155" r="70" fill="#fff" />
          <path d="M50 115 C35 140, 35 175, 65 200" fill="none" strokeWidth={2.5} />
          <circle cx="315" cy="155" r="70" fill="#fff" />
          <path d="M350 115 C365 140, 365 175, 335 200" fill="none" strokeWidth={2.5} />
          {/* Body */}
          <ellipse cx="200" cy="275" rx="100" ry="75" fill="#fff" />
          {/* Head */}
          <circle cx="200" cy="165" r="80" fill="#fff" />
          {/* Eyes */}
          <ellipse cx="165" cy="150" rx="14" ry="18" fill="#111827" />
          <circle cx="160" cy="144" r="4" fill="#fff" stroke="none" />
          <ellipse cx="235" cy="150" rx="14" ry="18" fill="#111827" />
          <circle cx="230" cy="144" r="4" fill="#fff" stroke="none" />
          {/* Eyebrows */}
          <path d="M145 125 Q165 115 180 125" fill="none" strokeWidth={2.5} />
          <path d="M255 125 Q235 115 220 125" fill="none" strokeWidth={2.5} />
          {/* Trunk */}
          <path
            d="M190 200 C175 220, 160 240, 158 270 C155 295, 165 315, 155 330 C150 338, 138 340, 130 330 C125 322, 130 315, 138 315 C146 315, 150 300, 152 275 C158 245, 175 225, 205 205 Z"
            fill="#fff"
            strokeWidth={3}
          />
          <path d="M155 260 Q165 262 175 258" fill="none" strokeWidth={2} />
          <path d="M152 290 Q162 292 172 288" fill="none" strokeWidth={2} />
          {/* Legs */}
          <rect x="120" y="310" width="35" height="50" rx="8" fill="#fff" />
          <rect x="165" y="310" width="35" height="50" rx="8" fill="#fff" />
          <rect x="210" y="310" width="35" height="50" rx="8" fill="#fff" />
          <rect x="255" y="310" width="35" height="50" rx="8" fill="#fff" />
        </g>
      );

    case "cute-bear":
      return (
        <g>
          {/* Ears */}
          <circle cx="120" cy="110" r="45" fill="#fff" />
          <circle cx="120" cy="110" r="25" fill="#fff" strokeWidth={2} />
          <circle cx="280" cy="110" r="45" fill="#fff" />
          <circle cx="280" cy="110" r="25" fill="#fff" strokeWidth={2} />
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
          {/* Front arms */}
          <path d="M175 250 L170 340 M225 250 L230 340" fill="none" strokeWidth={2.5} />
        </g>
      );

    case "baby-hippo":
      return (
        <g>
          {/* Ears */}
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
          {/* Mouth */}
          <path d="M140 205 Q200 255 260 205" fill="#111827" />
          {/* Teeth */}
          <rect x="165" y="206" width="12" height="10" rx="3" fill="#fff" />
          <rect x="223" y="206" width="12" height="10" rx="3" fill="#fff" />
          {/* Paws */}
          <ellipse cx="130" cy="330" rx="30" ry="25" fill="#fff" />
          <ellipse cx="270" cy="330" rx="30" ry="25" fill="#fff" />
          <path d="M175 270 L170 345 M225 270 L230 345" fill="none" strokeWidth={2.5} />
        </g>
      );

    case "friendly-lion":
    case "lion":
    case "lion-cub":
      return (
        <g>
          {/* Fluffy mane */}
          <circle cx="200" cy="165" r="105" fill="#fff" strokeDasharray="16 8" strokeWidth={5} />
          {/* Ears */}
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
    case "puppy":
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
          {/* Wagging tail */}
          <path d="M270 290 Q320 280 325 240" fill="none" strokeWidth={4} />
          {/* Paws */}
          <ellipse cx="140" cy="335" rx="28" ry="22" fill="#fff" />
          <ellipse cx="260" cy="335" rx="28" ry="22" fill="#fff" />
          <path d="M180 270 L175 345 M220 270 L225 345" fill="none" strokeWidth={2.5} />
        </g>
      );

    case "cute-kitten":
    case "happy-kitten":
    case "kitten":
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

    case "tall-giraffe":
    case "giraffe":
      return (
        <g>
          {/* Ossicones */}
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
          {/* Nostrils & Eyes */}
          <circle cx="190" cy="115" r="4" fill="#111827" />
          <circle cx="210" cy="115" r="4" fill="#111827" />
          <circle cx="180" cy="85" r="8" fill="#111827" />
          <circle cx="178" cy="83" r="2.5" fill="#fff" stroke="none" />
          <circle cx="220" cy="85" r="8" fill="#111827" />
          <circle cx="218" cy="83" r="2.5" fill="#fff" stroke="none" />
          {/* Spots */}
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
    case "monkey":
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
          {/* Face mask */}
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
          {/* Tail */}
          <path d="M130 270 C60 270, 50 180, 85 160 C100 150, 110 170, 95 180" fill="none" strokeWidth={4} />
          {/* Paws */}
          <circle cx="130" cy="330" r="18" fill="#fff" />
          <circle cx="270" cy="330" r="18" fill="#fff" />
        </g>
      );

    case "happy-dolphin":
    case "dolphin":
      return (
        <g>
          {/* Waves */}
          <path d="M40 330 Q90 300 140 330 Q190 300 240 330 Q290 300 340 330 Q370 310 390 330" fill="none" strokeWidth={3} />
          {/* Body */}
          <path d="M100 270 C90 200, 150 120, 260 120 C310 120, 340 160, 310 190 C250 240, 160 280, 100 270 Z" fill="#fff" strokeWidth={3.5} />
          {/* Snout & Smile */}
          <path d="M290 140 C320 140, 330 150, 320 160 C300 170, 280 165, 275 160 Z" fill="#fff" strokeWidth={2.5} />
          <path d="M290 155 Q305 160 315 155" fill="none" strokeWidth={2} />
          {/* Eye */}
          <circle cx="265" cy="140" r="7" fill="#111827" />
          <circle cx="263" cy="138" r="2.5" fill="#fff" stroke="none" />
          {/* Dorsal Fin */}
          <path d="M190 130 C195 90, 220 80, 230 125 Z" fill="#fff" strokeWidth={3} />
          {/* Flippers */}
          <path d="M210 210 C220 250, 190 260, 185 220 Z" fill="#fff" strokeWidth={2.5} />
          {/* Tail Fluke */}
          <path d="M105 270 C80 250, 60 260, 50 280 C70 285, 90 280, 100 280 C90 290, 70 305, 50 310 C65 330, 90 320, 110 280 Z" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "striped-tiger":
    case "tiger":
      return (
        <g>
          {/* Ears */}
          <circle cx="120" cy="100" r="30" fill="#fff" />
          <circle cx="280" cy="100" r="30" fill="#fff" />
          {/* Body */}
          <path d="M135 240 C105 295, 115 350, 200 350 C285 350, 295 295, 265 240 Z" fill="#fff" />
          {/* Head */}
          <ellipse cx="200" cy="165" rx="85" ry="75" fill="#fff" />
          {/* Tiger forehead stripes */}
          <polygon points="200,105 195,125 205,125" fill="#111827" />
          <polygon points="175,115 180,130 170,130" fill="#111827" />
          <polygon points="225,115 220,130 230,130" fill="#111827" />
          {/* Cheek stripes */}
          <polygon points="125,160 145,165 145,155" fill="#111827" />
          <polygon points="125,180 145,185 145,175" fill="#111827" />
          <polygon points="275,160 255,165 255,155" fill="#111827" />
          <polygon points="275,180 255,185 255,175" fill="#111827" />
          {/* Eyes */}
          <circle cx="165" cy="155" r="11" fill="#111827" />
          <circle cx="162" cy="152" r="3.5" fill="#fff" stroke="none" />
          <circle cx="235" cy="155" r="11" fill="#111827" />
          <circle cx="232" cy="152" r="3.5" fill="#fff" stroke="none" />
          {/* Snout */}
          <ellipse cx="200" cy="190" rx="30" ry="20" fill="#fff" />
          <polygon points="190,180 210,180 200,195" fill="#111827" />
          <path d="M200 195 L200 205 M190 202 Q200 212 210 202" fill="none" strokeWidth={2.5} />
          {/* Paws */}
          <ellipse cx="140" cy="335" rx="28" ry="22" fill="#fff" />
          <ellipse cx="260" cy="335" rx="28" ry="22" fill="#fff" />
          <path d="M180 270 L175 345 M220 270 L225 345" fill="none" strokeWidth={2.5} />
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
          {/* Eyes */}
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
          {/* Branch & Talons */}
          <rect x="60" y="335" width="280" height="18" rx="8" fill="#fff" />
          <circle cx="160" cy="335" r="8" fill="#fff" />
          <circle cx="175" cy="335" r="8" fill="#fff" />
          <circle cx="225" cy="335" r="8" fill="#fff" />
          <circle cx="240" cy="335" r="8" fill="#fff" />
        </g>
      );

    case "cute-penguin":
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
    case "tropical-toucan":
    case "cute-toucan":
      return (
        <g>
          {/* Perch */}
          <rect x="50" y="320" width="300" height="16" rx="8" fill="#fff" />
          {/* Body */}
          <ellipse cx="180" cy="210" rx="60" ry="90" fill="#fff" />
          {/* Tail */}
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
          {/* Body & S-neck */}
          <path d="M230 180 C270 190, 300 230, 280 270 C250 300, 180 280, 170 250 C160 210, 200 180, 230 180 Z" fill="#fff" />
          <path d="M230 180 C210 150, 180 120, 190 75 C195 55, 215 50, 230 65" fill="none" strokeWidth={4} />
          {/* Head */}
          <circle cx="230" cy="65" r="22" fill="#fff" />
          <path d="M245 60 C275 60, 280 90, 255 100 C245 90, 240 80, 235 75 Z" fill="#fff" />
          <circle cx="225" cy="60" r="4" fill="#111827" />
          {/* Wings */}
          <path d="M200 220 Q240 210 270 240 M210 240 Q250 230 280 260" fill="none" strokeWidth={2.5} />
          {/* Standing leg & bent leg */}
          <line x1="210" y1="275" x2="210" y2="370" strokeWidth={3.5} />
          <path d="M240 270 L265 310 L225 325" fill="none" strokeWidth={3.5} />
          <ellipse cx="210" cy="370" rx="45" ry="10" fill="none" strokeWidth={2} />
        </g>
      );

    case "royal-peacock":
      return (
        <g>
          {/* Peacock Fan */}
          <path d="M70 240 C50 120, 350 120, 330 240 Z" fill="#fff" strokeWidth={3.5} />
          {[100, 135, 170, 200, 230, 265, 300].map((x, i) => (
            <g key={i}>
              <line x1="200" y1="250" x2={x} y2="120" strokeWidth={2} />
              <circle cx={x} cy="115" r="14" fill="#fff" strokeWidth={2.5} />
              <circle cx={x} cy="115" r="7" fill="#111827" />
            </g>
          ))}
          {/* Body */}
          <ellipse cx="200" cy="260" rx="35" ry="60" fill="#fff" strokeWidth={3} />
          <circle cx="200" cy="180" r="24" fill="#fff" strokeWidth={3} />
          <polygon points="200,180 230,185 200,195" fill="#fff" strokeWidth={2} />
          <circle cx="195" cy="175" r="4" fill="#111827" />
          {/* Crown */}
          <line x1="200" y1="160" x2="190" y2="140" strokeWidth={2} />
          <circle cx="190" cy="138" r="4" fill="#111827" />
          <line x1="200" y1="160" x2="200" y2="135" strokeWidth={2} />
          <circle cx="200" cy="133" r="4" fill="#111827" />
          <line x1="200" y1="160" x2="210" y2="140" strokeWidth={2} />
          <circle cx="210" cy="138" r="4" fill="#111827" />
        </g>
      );

    case "little-duckling":
      return (
        <g>
          {/* Water waves */}
          <path d="M60 330 Q130 310 200 330 Q270 310 340 330" fill="none" strokeWidth={3} />
          {/* Body */}
          <ellipse cx="180" cy="250" rx="75" ry="55" fill="#fff" strokeWidth={3.5} />
          <path d="M120 240 Q90 220 95 200 Q120 220 140 240" fill="#fff" strokeWidth={2.5} />
          {/* Head */}
          <circle cx="250" cy="180" r="45" fill="#fff" strokeWidth={3.5} />
          {/* Beak */}
          <path d="M285 180 C325 180, 330 200, 285 205 Z" fill="#fff" strokeWidth={2.5} />
          {/* Eye */}
          <circle cx="245" cy="170" r="9" fill="#111827" />
          <circle cx="242" cy="167" r="3" fill="#fff" stroke="none" />
          {/* Wing */}
          <ellipse cx="180" cy="250" rx="38" ry="24" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "mighty-eagle":
      return (
        <g>
          {/* Spread wings */}
          <path d="M200 170 C140 100, 60 110, 40 180 C90 200, 140 210, 170 230" fill="#fff" strokeWidth={3.5} />
          <path d="M200 170 C260 100, 340 110, 360 180 C310 200, 260 210, 230 230" fill="#fff" strokeWidth={3.5} />
          {/* Body */}
          <ellipse cx="200" cy="240" rx="45" ry="70" fill="#fff" strokeWidth={3.5} />
          {/* Head */}
          <circle cx="200" cy="150" r="38" fill="#fff" strokeWidth={3.5} />
          {/* Hooked Beak */}
          <path d="M215 140 C265 145, 255 175, 220 165 Z" fill="#fff" strokeWidth={3} />
          <circle cx="190" cy="140" r="7" fill="#111827" />
          {/* Talons */}
          <circle cx="180" cy="315" r="8" fill="#fff" />
          <circle cx="220" cy="315" r="8" fill="#fff" />
        </g>
      );

    case "tiny-hummingbird":
      return (
        <g>
          {/* Flower */}
          <circle cx="90" cy="240" r="22" fill="#fff" strokeWidth={3} />
          <path d="M90 262 L90 350" fill="none" strokeWidth={4} />
          {/* Long Needle Beak */}
          <line x1="112" y1="240" x2="210" y2="190" strokeWidth={3.5} />
          {/* Hummingbird Head & Body */}
          <circle cx="225" cy="180" r="26" fill="#fff" strokeWidth={3} />
          <circle cx="220" cy="175" r="6" fill="#111827" />
          <ellipse cx="265" cy="220" rx="45" ry="30" fill="#fff" strokeWidth={3} transform="rotate(25 265 220)" />
          {/* Fast Wings */}
          <path d="M250 200 C270 120, 310 100, 330 140 C300 170, 280 190, 250 200 Z" fill="#fff" strokeWidth={3} />
          {/* Tail */}
          <polygon points="295,240 360,280 340,300 285,250" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "sweet-robin":
      return (
        <g>
          {/* Perch Branch */}
          <rect x="60" y="310" width="280" height="14" rx="7" fill="#fff" />
          {/* Plump Songbird Body */}
          <circle cx="190" cy="210" r="75" fill="#fff" strokeWidth={3.5} />
          {/* Red/Belly breast area */}
          <path d="M190 170 C240 190, 250 250, 190 280 Z" fill="#fff" strokeWidth={2.5} />
          {/* Beak */}
          <polygon points="255,190 295,200 255,210" fill="#fff" strokeWidth={2.5} />
          {/* Eye */}
          <circle cx="230" cy="185" r="9" fill="#111827" />
          <circle cx="227" cy="182" r="3" fill="#fff" stroke="none" />
          {/* Tail */}
          <polygon points="120,230 60,260 80,280 135,255" fill="#fff" strokeWidth={3} />
          {/* Musical Notes */}
          <text x="310" y="150" fontSize="26" fontWeight="bold" fill="#111827" stroke="none">
            ♪
          </text>
          <text x="340" y="120" fontSize="32" fontWeight="bold" fill="#111827" stroke="none">
            ♫
          </text>
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 3. FLOWERS & PLANTS
    // ══════════════════════════════════════════════════════════════════
    case "bright-sunflower":
    case "sunny-sunflower":
      return (
        <g>
          {/* Stem & Leaves */}
          <path d="M200 220 Q190 290 200 370" fill="none" strokeWidth={6} />
          <path d="M195 280 C130 270, 120 310, 180 320 Z" fill="#fff" />
          <path d="M205 250 C270 240, 280 280, 220 290 Z" fill="#fff" />
          {/* Flower petals (12 radiating petals) */}
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
          {/* Center disc & texture */}
          <circle cx="200" cy="150" r="50" fill="#fff" strokeWidth={3.5} />
          <circle cx="200" cy="150" r="35" fill="#fff" strokeDasharray="6 6" strokeWidth={2} />
          <circle cx="200" cy="150" r="20" fill="#fff" strokeDasharray="4 4" strokeWidth={2} />
        </g>
      );

    case "beautiful-rose":
    case "blooming-rose":
      return (
        <g>
          {/* Stem & Thorns */}
          <path d="M200 200 L200 360" fill="none" strokeWidth={5} />
          <polygon points="200,270 215,260 200,285" fill="#111827" />
          <polygon points="200,310 185,300 200,325" fill="#111827" />
          <path d="M195 260 C130 240, 120 290, 190 290 Z" fill="#fff" />
          <path d="M205 230 C270 210, 280 260, 210 260 Z" fill="#fff" />
          {/* Rose Blossom Petals */}
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

    case "spring-tulip":
      return (
        <g>
          {/* Stem & Leaves */}
          <path d="M200 180 L200 360" fill="none" strokeWidth={5} />
          <path d="M195 280 C110 240, 110 330, 195 330 Z" fill="#fff" strokeWidth={3} />
          <path d="M205 250 C290 210, 290 300, 205 300 Z" fill="#fff" strokeWidth={3} />
          {/* Tulip Cup Petals */}
          <path d="M140 120 C140 210, 260 210, 260 120 C230 150, 170 150, 140 120 Z" fill="#fff" strokeWidth={3.5} />
          <polygon points="140,120 170,75 200,140" fill="#fff" strokeWidth={3} />
          <polygon points="260,120 230,75 200,140" fill="#fff" strokeWidth={3} />
          <polygon points="170,75 200,55 230,75 200,120" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "desert-cactus":
      return (
        <g>
          {/* Pot/Ground */}
          <path d="M90 340 L310 340" strokeWidth={4} />
          {/* Central Stem */}
          <rect x="170" y="110" width="60" height="230" rx="30" fill="#fff" strokeWidth={3.5} />
          {/* Left Arm */}
          <path d="M170 200 L120 200 L120 140" fill="none" strokeWidth={26} strokeLinecap="round" />
          <path d="M170 200 L120 200 L120 140" fill="none" stroke="#fff" strokeWidth={20} strokeLinecap="round" />
          {/* Right Arm */}
          <path d="M230 240 L280 240 L280 170" fill="none" strokeWidth={26} strokeLinecap="round" />
          <path d="M230 240 L280 240 L280 170" fill="none" stroke="#fff" strokeWidth={20} strokeLinecap="round" />
          {/* Cactus Flower on Top */}
          <circle cx="200" cy="100" r="14" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "cheerful-daisy":
    case "delicate-daisy":
      return (
        <g>
          {/* Stem & Leaves */}
          <path d="M200 210 L200 360" fill="none" strokeWidth={5} />
          <path d="M195 270 C140 260, 140 290, 195 290 Z" fill="#fff" />
          <path d="M205 240 C260 230, 260 260, 205 260 Z" fill="#fff" />
          {/* Radiating Rounded Petals */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <ellipse
              key={deg}
              cx="200"
              cy="95"
              rx="18"
              ry="42"
              fill="#fff"
              transform={`rotate(${deg} 200 150)`}
            />
          ))}
          {/* Center Smiling Disc */}
          <circle cx="200" cy="150" r="40" fill="#fff" strokeWidth={3.5} />
          <circle cx="185" cy="142" r="5" fill="#111827" />
          <circle cx="215" cy="142" r="5" fill="#111827" />
          <path d="M188 158 Q200 170 212 158" fill="none" strokeWidth={2.5} />
        </g>
      );

    case "sacred-lotus":
    case "gentle-lotus":
      return (
        <g>
          {/* Lotus Leaf / Pond Pad */}
          <ellipse cx="200" cy="310" rx="140" ry="40" fill="#fff" strokeWidth={3.5} />
          <path d="M200 310 L290 330" fill="none" strokeWidth={2.5} />
          {/* Water ripples */}
          <ellipse cx="200" cy="335" rx="170" ry="20" fill="none" strokeWidth={2} strokeDasharray="8 8" />
          {/* Lotus Blossom */}
          <path d="M200 130 C130 180, 150 290, 200 290 C250 290, 270 180, 200 130 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M140 220 C110 240, 130 280, 180 285 Z" fill="#fff" strokeWidth={3} />
          <path d="M260 220 C290 240, 270 280, 220 285 Z" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "mighty-oak-tree":
    case "giant-oak-tree":
      return (
        <g>
          {/* Ground */}
          <path d="M50 350 Q200 330 350 350" fill="none" strokeWidth={3.5} />
          {/* Trunk with roots */}
          <path d="M175 345 L185 190 L215 190 L225 345 Z" fill="#fff" strokeWidth={3.5} />
          {/* Foliage Puffs */}
          <circle cx="200" cy="130" r="75" fill="#fff" strokeWidth={3.5} />
          <circle cx="140" cy="160" r="55" fill="#fff" strokeWidth={3.5} />
          <circle cx="260" cy="160" r="55" fill="#fff" strokeWidth={3.5} />
          <circle cx="160" cy="95" r="48" fill="#fff" strokeWidth={3.5} />
          <circle cx="240" cy="95" r="48" fill="#fff" strokeWidth={3.5} />
        </g>
      );

    case "magic-mushroom":
    case "mushroom-grove":
      return (
        <g>
          {/* Ground grass */}
          <path d="M60 340 L340 340" strokeWidth={3} />
          {/* Mushroom Stalk */}
          <path d="M170 330 C165 240, 180 200, 185 180 L215 180 C220 200, 235 240, 230 330 Z" fill="#fff" strokeWidth={3.5} />
          {/* Big Cap */}
          <path d="M90 190 C90 90, 310 90, 310 190 Z" fill="#fff" strokeWidth={4} />
          {/* Polka Dots */}
          <circle cx="150" cy="140" r="16" fill="#fff" strokeWidth={2.5} />
          <circle cx="200" cy="120" r="18" fill="#fff" strokeWidth={2.5} />
          <circle cx="250" cy="145" r="16" fill="#fff" strokeWidth={2.5} />
          <circle cx="180" cy="165" r="12" fill="#fff" strokeWidth={2.5} />
          <circle cx="225" cy="165" r="12" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "exotic-orchid":
    case "butterfly-and-flower":
      return (
        <g>
          {/* Flower */}
          <circle cx="200" cy="270" r="35" fill="#fff" strokeWidth={3} />
          <path d="M200 305 L200 370" fill="none" strokeWidth={4} />
          {/* Butterfly above */}
          <ellipse cx="200" cy="130" rx="8" ry="35" fill="#111827" />
          <path d="M200 115 C130 50, 80 120, 195 135 Z" fill="#fff" strokeWidth={3} />
          <path d="M200 115 C270 50, 320 120, 205 135 Z" fill="#fff" strokeWidth={3} />
          <path d="M200 135 C150 140, 120 190, 195 160 Z" fill="#fff" strokeWidth={3} />
          <path d="M200 135 C250 140, 280 190, 205 160 Z" fill="#fff" strokeWidth={3} />
          {/* Antennae */}
          <path d="M196 100 Q180 80 170 85 M204 100 Q220 80 230 85" fill="none" strokeWidth={2} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 4. DINOSAURS
    // ══════════════════════════════════════════════════════════════════
    case "mighty-t-rex":
    case "t-rex":
    case "speedy-velociraptor":
      return (
        <g>
          {/* Body & Big Tail */}
          <path
            d="M90 280 C50 250, 60 210, 130 200 C150 150, 200 110, 260 100 C290 100, 320 120, 310 150 C290 170, 260 170, 240 180 C230 220, 240 280, 210 320 C170 330, 130 310, 90 280 Z"
            fill="#fff"
            strokeWidth={3.5}
          />
          {/* Jaws & Sharp teeth */}
          <path d="M260 140 L310 140 L280 160 Z" fill="#fff" />
          <polygon points="270,140 275,146 280,140" fill="#111827" />
          <polygon points="285,140 290,146 295,140" fill="#111827" />
          {/* Eye */}
          <circle cx="255" cy="125" r="8" fill="#111827" />
          <circle cx="253" cy="123" r="2.5" fill="#fff" stroke="none" />
          {/* Tiny arms */}
          <path d="M230 200 L255 210 L250 218" fill="none" strokeWidth={3} />
          {/* Strong legs */}
          <path d="M180 270 C180 310, 160 340, 150 360 L180 360" fill="none" strokeWidth={5} />
          <path d="M210 270 C210 310, 200 340, 195 360 L225 360" fill="none" strokeWidth={5} />
        </g>
      );

    case "three-horned-triceratops":
    case "triceratops":
      return (
        <g>
          {/* Frill Shield */}
          <path d="M210 90 C290 70, 320 160, 270 190 Z" fill="#fff" strokeWidth={3.5} />
          {/* Body */}
          <ellipse cx="170" cy="240" rx="90" ry="60" fill="#fff" strokeWidth={3.5} />
          {/* Head & Beak */}
          <circle cx="260" cy="180" r="45" fill="#fff" strokeWidth={3.5} />
          {/* 3 Horns */}
          <polygon points="260,140 290,90 275,145" fill="#fff" strokeWidth={3} />
          <polygon points="245,145 260,100 255,150" fill="#fff" strokeWidth={3} />
          <polygon points="295,175 325,165 295,185" fill="#fff" strokeWidth={2.5} />
          {/* Eye */}
          <circle cx="250" cy="165" r="7" fill="#111827" />
          {/* Sturdy 4 legs */}
          <rect x="110" y="270" width="25" height="60" rx="6" fill="#fff" strokeWidth={3} />
          <rect x="150" y="270" width="25" height="60" rx="6" fill="#fff" strokeWidth={3} />
          <rect x="200" y="270" width="25" height="60" rx="6" fill="#fff" strokeWidth={3} />
          <rect x="240" y="270" width="25" height="60" rx="6" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "long-neck-brachiosaurus":
    case "giant-diplodocus":
      return (
        <g>
          {/* Long Neck & Body */}
          <path
            d="M320 280 C360 270, 370 290, 340 300 C270 320, 240 330, 170 320 C120 310, 100 240, 110 130 C115 80, 140 60, 160 70 C165 85, 145 105, 140 140 C130 220, 160 250, 220 250 C260 250, 290 260, 320 280 Z"
            fill="#fff"
            strokeWidth={3.5}
          />
          {/* Head & eye */}
          <circle cx="150" cy="70" r="18" fill="#fff" />
          <circle cx="145" cy="68" r="4" fill="#111827" />
          {/* 4 Pillar legs */}
          <rect x="160" y="300" width="22" height="60" rx="6" fill="#fff" strokeWidth={3} />
          <rect x="195" y="300" width="22" height="60" rx="6" fill="#fff" strokeWidth={3} />
          <rect x="250" y="300" width="22" height="60" rx="6" fill="#fff" strokeWidth={3} />
          <rect x="285" y="300" width="22" height="60" rx="6" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "armored-stegosaurus":
      return (
        <g>
          {/* Body */}
          <path d="M100 260 C60 220, 70 170, 140 160 C170 140, 230 140, 270 170 C310 200, 300 250, 260 270 C230 280, 150 280, 100 260 Z" fill="#fff" strokeWidth={3.5} />
          {/* Diamond Plates along back */}
          <polygon points="120,170 135,120 150,170" fill="#fff" strokeWidth={3} />
          <polygon points="160,150 180,95 200,150" fill="#fff" strokeWidth={3} />
          <polygon points="210,145 230,90 250,145" fill="#fff" strokeWidth={3} />
          <polygon points="255,160 270,115 285,165" fill="#fff" strokeWidth={3} />
          {/* Head & eye */}
          <ellipse cx="290" cy="210" rx="25" ry="16" fill="#fff" strokeWidth={3} />
          <circle cx="290" cy="205" r="4" fill="#111827" />
          {/* Spiked tail */}
          <line x1="85" y1="240" x2="65" y2="215" strokeWidth={3.5} />
          <line x1="75" y1="250" x2="50" y2="245" strokeWidth={3.5} />
          {/* Legs */}
          <rect x="140" y="260" width="26" height="60" rx="6" fill="#fff" strokeWidth={3} />
          <rect x="220" y="260" width="26" height="60" rx="6" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "flying-pterodactyl":
      return (
        <g>
          {/* Wide Wings */}
          <path d="M200 190 C150 110, 80 100, 40 160 C90 190, 140 210, 190 230 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M200 190 C250 110, 320 100, 360 160 C310 190, 260 210, 210 230 Z" fill="#fff" strokeWidth={3.5} />
          {/* Body */}
          <ellipse cx="200" cy="220" rx="20" ry="45" fill="#fff" strokeWidth={3} />
          {/* Head & Crest */}
          <polygon points="170,130 200,165 245,150" fill="#fff" strokeWidth={3} />
          <circle cx="195" cy="155" r="4" fill="#111827" />
        </g>
      );

    case "club-tailed-ankylosaurus":
    case "sail-backed-spinosaurus":
    case "baby-dino-hatching":
      return (
        <g>
          {/* Eggshell / Baby Dino */}
          <path d="M120 280 C120 360, 280 360, 280 280 L250 260 L230 290 L200 250 L170 290 L150 260 Z" fill="#fff" strokeWidth={3.5} />
          {/* Baby Dino Head peeking */}
          <circle cx="200" cy="200" r="55" fill="#fff" strokeWidth={3.5} />
          <circle cx="180" cy="185" r="8" fill="#111827" />
          <circle cx="178" cy="183" r="2.5" fill="#fff" stroke="none" />
          <circle cx="220" cy="185" r="8" fill="#111827" />
          <circle cx="218" cy="183" r="2.5" fill="#fff" stroke="none" />
          <path d="M185 215 Q200 230 215 215" fill="none" strokeWidth={2.5} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 5. VEHICLES
    // ══════════════════════════════════════════════════════════════════
    case "speedy-sports-car":
    case "speedy-race-car":
      return (
        <g>
          {/* Body */}
          <path
            d="M60 260 L110 260 L130 200 L270 200 L300 260 L340 260 C355 260, 360 275, 345 290 L65 290 C50 290, 45 260, 60 260 Z"
            fill="#fff"
            strokeWidth={3.5}
          />
          {/* Windshield */}
          <polygon points="150,200 180,160 240,160 260,200" fill="#fff" strokeWidth={3} />
          {/* Spoiler */}
          <rect x="50" y="210" width="12" height="50" fill="#fff" />
          <rect x="40" y="200" width="35" height="12" rx="4" fill="#fff" />
          {/* Wheels */}
          <circle cx="120" cy="290" r="32" fill="#fff" strokeWidth={4} />
          <circle cx="120" cy="290" r="16" fill="#fff" strokeWidth={2.5} />
          <circle cx="285" cy="290" r="32" fill="#fff" strokeWidth={4} />
          <circle cx="285" cy="290" r="16" fill="#fff" strokeWidth={2.5} />
          {/* Race number */}
          <circle cx="205" cy="245" r="18" fill="#fff" strokeWidth={2} />
          <text x="205" y="252" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#111827" stroke="none">
            1
          </text>
        </g>
      );

    case "yellow-school-bus":
    case "friendly-school-bus":
      return (
        <g>
          {/* Bus Body */}
          <rect x="60" y="140" width="280" height="140" rx="20" fill="#fff" strokeWidth={3.5} />
          <path d="M340 200 L365 200 C375 200, 375 280, 340 280 Z" fill="#fff" strokeWidth={3} />
          {/* Windows */}
          <rect x="80" y="160" width="40" height="40" rx="6" fill="#fff" strokeWidth={2.5} />
          <rect x="135" y="160" width="40" height="40" rx="6" fill="#fff" strokeWidth={2.5} />
          <rect x="190" y="160" width="40" height="40" rx="6" fill="#fff" strokeWidth={2.5} />
          <rect x="245" y="160" width="40" height="40" rx="6" fill="#fff" strokeWidth={2.5} />
          <rect x="300" y="160" width="35" height="40" rx="6" fill="#fff" strokeWidth={2.5} />
          {/* Stripes & Wheels */}
          <line x1="60" y1="230" x2="340" y2="230" strokeWidth={3} />
          <circle cx="120" cy="285" r="30" fill="#fff" strokeWidth={4} />
          <circle cx="120" cy="285" r="14" fill="#fff" strokeWidth={2.5} />
          <circle cx="290" cy="285" r="30" fill="#fff" strokeWidth={4} />
          <circle cx="290" cy="285" r="14" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "jet-airplane":
    case "soaring-airplane":
      return (
        <g>
          {/* Fuselage */}
          <ellipse cx="200" cy="200" rx="140" ry="40" fill="#fff" strokeWidth={3.5} />
          {/* Tail */}
          <polygon points="70,180 30,110 90,170" fill="#fff" strokeWidth={3} />
          {/* Wings */}
          <polygon points="180,180 130,90 190,90 230,180" fill="#fff" strokeWidth={3} />
          <polygon points="180,220 130,310 190,310 230,220" fill="#fff" strokeWidth={3} />
          {/* Windows */}
          <circle cx="250" cy="195" r="7" fill="#fff" strokeWidth={2} />
          <circle cx="220" cy="195" r="7" fill="#fff" strokeWidth={2} />
          <circle cx="190" cy="195" r="7" fill="#fff" strokeWidth={2} />
        </g>
      );

    case "fire-truck-rescue":
    case "heroic-fire-truck":
      return (
        <g>
          {/* Cabin & Body */}
          <rect x="60" y="170" width="280" height="110" rx="12" fill="#fff" strokeWidth={3.5} />
          <rect x="250" y="185" width="75" height="50" rx="6" fill="#fff" strokeWidth={2.5} />
          {/* Ladder on top */}
          <rect x="70" y="140" width="180" height="20" fill="#fff" strokeWidth={3} />
          <line x1="100" y1="140" x2="100" y2="160" strokeWidth={2} />
          <line x1="130" y1="140" x2="130" y2="160" strokeWidth={2} />
          <line x1="160" y1="140" x2="160" y2="160" strokeWidth={2} />
          <line x1="190" y1="140" x2="190" y2="160" strokeWidth={2} />
          <line x1="220" y1="140" x2="220" y2="160" strokeWidth={2} />
          {/* Siren */}
          <circle cx="280" cy="155" r="10" fill="#fff" strokeWidth={2.5} />
          {/* Wheels */}
          <circle cx="110" cy="280" r="28" fill="#fff" strokeWidth={4} />
          <circle cx="290" cy="280" r="28" fill="#fff" strokeWidth={4} />
        </g>
      );

    case "choo-choo-steam-train":
    case "puffing-steam-train":
      return (
        <g>
          {/* Engine boiler & Cabin */}
          <rect x="80" y="190" width="160" height="90" rx="8" fill="#fff" strokeWidth={3.5} />
          <rect x="240" y="150" width="80" height="130" rx="10" fill="#fff" strokeWidth={3.5} />
          <rect x="255" y="165" width="50" height="40" rx="6" fill="#fff" strokeWidth={2} />
          {/* Chimney & Puffs */}
          <rect x="100" y="135" width="30" height="55" fill="#fff" strokeWidth={3} />
          <circle cx="115" cy="100" r="16" fill="#fff" strokeWidth={2} />
          <circle cx="140" cy="70" r="24" fill="#fff" strokeWidth={2} />
          {/* Wheels */}
          <circle cx="120" cy="290" r="24" fill="#fff" strokeWidth={3.5} />
          <circle cx="180" cy="290" r="24" fill="#fff" strokeWidth={3.5} />
          <circle cx="280" cy="290" r="32" fill="#fff" strokeWidth={4} />
        </g>
      );

    case "police-cruiser":
    case "police-patrol-car":
      return (
        <g>
          {/* Body */}
          <path d="M70 250 L110 250 L140 190 L260 190 L290 250 L340 250 L340 280 L70 280 Z" fill="#fff" strokeWidth={3.5} />
          <polygon points="150,190 170,160 230,160 250,190" fill="#fff" strokeWidth={2.5} />
          {/* Siren lightbar */}
          <rect x="185" y="145" width="30" height="15" rx="4" fill="#fff" strokeWidth={2.5} />
          {/* Wheels */}
          <circle cx="120" cy="280" r="26" fill="#fff" strokeWidth={4} />
          <circle cx="290" cy="280" r="26" fill="#fff" strokeWidth={4} />
        </g>
      );

    case "blast-off-rocket":
    case "deep-space-rocket":
    case "blasting-space-rocket":
      return (
        <g>
          {/* Rocket Body */}
          <path d="M200 60 C150 120, 150 220, 150 260 L250 260 C250 220, 250 120, 200 60 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M175 110 Q200 70 225 110 Z" fill="#fff" strokeWidth={2.5} />
          {/* Porthole */}
          <circle cx="200" cy="170" r="28" fill="#fff" strokeWidth={3.5} />
          <circle cx="200" cy="170" r="18" fill="#fff" strokeWidth={2} />
          {/* Fins */}
          <polygon points="150,220 90,280 150,270" fill="#fff" strokeWidth={3} />
          <polygon points="250,220 310,280 250,270" fill="#fff" strokeWidth={3} />
          {/* Flames */}
          <path d="M175 260 Q200 360 225 260 Q200 320 175 260 Z" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "two-wheel-bicycle":
    case "road-cyclist":
    case "bicycle-rider":
      return (
        <g>
          {/* Wheels */}
          <circle cx="110" cy="270" r="48" fill="#fff" strokeWidth={4} />
          <circle cx="290" cy="270" r="48" fill="#fff" strokeWidth={4} />
          {/* Frame Triangle */}
          <polygon points="110,270 190,270 160,180" fill="none" strokeWidth={4} />
          <polygon points="190,270 270,180 160,180" fill="none" strokeWidth={4} />
          <line x1="270" y1="180" x2="290" y2="270" strokeWidth={4} />
          {/* Handlebars & Seat */}
          <line x1="260" y1="150" x2="280" y2="150" strokeWidth={5} />
          <line x1="145" y1="165" x2="175" y2="165" strokeWidth={6} />
        </g>
      );

    case "ocean-sailboat":
    case "sailing-boat":
      return (
        <g>
          {/* Hull */}
          <path d="M80 270 L320 270 L280 330 L120 330 Z" fill="#fff" strokeWidth={3.5} />
          {/* Mast */}
          <line x1="200" y1="80" x2="200" y2="270" strokeWidth={5} />
          {/* Sails */}
          <polygon points="190,95 100,255 190,255" fill="#fff" strokeWidth={3.5} />
          <polygon points="210,120 295,255 210,255" fill="#fff" strokeWidth={3.5} />
          {/* Water waves */}
          <path d="M50 345 Q120 330 200 345 Q280 330 350 345" fill="none" strokeWidth={3} />
        </g>
      );

    case "rescue-helicopter":
    case "delivery-helicopter":
      return (
        <g>
          {/* Body & Cockpit */}
          <ellipse cx="180" cy="220" rx="85" ry="55" fill="#fff" strokeWidth={3.5} />
          <path d="M190 190 Q240 190 250 220 L190 220 Z" fill="#fff" strokeWidth={2.5} />
          {/* Tail boom */}
          <path d="M100 210 L40 180 L40 160 L60 215 Z" fill="#fff" strokeWidth={3} />
          {/* Top Rotor */}
          <line x1="180" y1="165" x2="180" y2="140" strokeWidth={4} />
          <line x1="60" y1="140" x2="300" y2="140" strokeWidth={5} />
          {/* Skids */}
          <line x1="120" y1="275" x2="120" y2="300" strokeWidth={3} />
          <line x1="220" y1="275" x2="220" y2="300" strokeWidth={3} />
          <line x1="90" y1="300" x2="250" y2="300" strokeWidth={4} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 6. NATURE
    // ══════════════════════════════════════════════════════════════════
    case "rainbow-and-clouds":
    case "beautiful-rainbow-sky":
      return (
        <g>
          {/* Sun in center */}
          <circle cx="200" cy="180" r="30" fill="#fff" strokeWidth={3} />
          {/* Rainbow Arches */}
          <path d="M80 270 C80 120, 320 120, 320 270" fill="none" strokeWidth={10} stroke="#111827" />
          <path d="M95 270 C95 140, 305 140, 305 270" fill="none" strokeWidth={10} stroke="#111827" />
          <path d="M110 270 C110 160, 290 160, 290 270" fill="none" strokeWidth={10} stroke="#111827" />
          {/* Clouds */}
          <circle cx="80" cy="270" r="35" fill="#fff" strokeWidth={3} />
          <circle cx="115" cy="270" r="28" fill="#fff" strokeWidth={3} />
          <circle cx="285" cy="270" r="28" fill="#fff" strokeWidth={3} />
          <circle cx="320" cy="270" r="35" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "mountain-sunrise":
    case "sunny-mountain-landscape":
      return (
        <g>
          {/* Sun */}
          <circle cx="200" cy="180" r="45" fill="#fff" strokeWidth={3.5} />
          {[0, 30, 60, 90, 120, 150, 180].map((deg) => (
            <line key={deg} x1="200" y1="120" x2="200" y2="95" strokeWidth={3} transform={`rotate(${deg - 90} 200 180)`} />
          ))}
          {/* Mountains */}
          <polygon points="50,330 160,150 270,330" fill="#fff" strokeWidth={3.5} />
          <polygon points="160,150 140,195 160,185 180,200" fill="#fff" strokeWidth={2.5} />
          <polygon points="180,330 280,180 370,330" fill="#fff" strokeWidth={3.5} />
          <polygon points="280,180 265,215 280,205 295,220" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "forest-waterfall":
    case "rushing-waterfall":
      return (
        <g>
          {/* Cliffs */}
          <path d="M50 120 L150 120 L150 330 L50 330 Z" fill="#fff" strokeWidth={3.5} />
          <path d="M250 120 L350 120 L350 330 L250 330 Z" fill="#fff" strokeWidth={3.5} />
          {/* Waterfall streams */}
          <path d="M150 120 L150 330 L250 330 L250 120 Z" fill="#fff" strokeWidth={3} />
          <line x1="175" y1="130" x2="175" y2="320" strokeWidth={2} strokeDasharray="8 6" />
          <line x1="200" y1="130" x2="200" y2="320" strokeWidth={2} strokeDasharray="8 6" />
          <line x1="225" y1="130" x2="225" y2="320" strokeWidth={2} strokeDasharray="8 6" />
          {/* Splash pool */}
          <ellipse cx="200" cy="330" rx="90" ry="25" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "tropical-island":
    case "peaceful-tropical-island":
      return (
        <g>
          {/* Sandy Island Mound */}
          <path d="M80 320 Q200 270 320 320 Z" fill="#fff" strokeWidth={3.5} />
          {/* Palm Tree Trunk */}
          <path d="M190 300 Q170 200 210 140" fill="none" strokeWidth={12} strokeLinecap="round" />
          {/* Palm Leaves */}
          <path d="M210 140 Q140 130 120 170" fill="none" strokeWidth={4} />
          <path d="M210 140 Q210 70 190 60" fill="none" strokeWidth={4} />
          <path d="M210 140 Q280 90 300 130" fill="none" strokeWidth={4} />
          <path d="M210 140 Q270 160 280 200" fill="none" strokeWidth={4} />
          {/* Coconuts */}
          <circle cx="200" cy="145" r="7" fill="#111827" />
          <circle cx="215" cy="148" r="7" fill="#111827" />
        </g>
      );

    case "sandy-beach-and-waves":
    case "sunny-summer-beach":
      return (
        <g>
          {/* Sun */}
          <circle cx="310" cy="90" r="30" fill="#fff" strokeWidth={3} />
          {/* Beach Umbrella */}
          <path d="M110 240 C110 160, 230 160, 230 240 Z" fill="#fff" strokeWidth={3.5} />
          <line x1="170" y1="160" x2="170" y2="330" strokeWidth={4} />
          {/* Sand Beach & Waves */}
          <path d="M40 330 Q200 310 360 330" fill="none" strokeWidth={3} />
          <path d="M260 290 Q290 280 320 300" fill="none" strokeWidth={2.5} />
        </g>
      );

    case "starry-night-sky":
    case "star-filled-night-sky":
      return (
        <g>
          {/* Big Crescent Moon */}
          <path d="M200 90 C270 90, 310 160, 290 230 C250 220, 210 170, 210 120 C210 110, 205 100, 200 90 Z" fill="#fff" strokeWidth={3.5} />
          <circle cx="250" cy="145" r="5" fill="#111827" />
          <path d="M255 170 Q265 180 275 170" fill="none" strokeWidth={2.5} />
          {/* Stars */}
          <polygon points="120,90 126,108 145,108 130,120 136,138 120,126 104,138 110,120 95,108 114,108" fill="#fff" strokeWidth={2} />
          <polygon points="110,220 114,232 127,232 117,240 121,252 110,244 99,252 103,240 93,232 106,232" fill="#fff" strokeWidth={2} />
          <polygon points="310,260 314,272 327,272 317,280 321,292 310,284 299,292 303,280 293,272 306,272" fill="#fff" strokeWidth={2} />
        </g>
      );

    case "smoking-volcano":
      return (
        <g>
          {/* Volcano mountain */}
          <polygon points="70,340 175,180 225,180 330,340" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="200" cy="180" rx="25" ry="8" fill="#fff" strokeWidth={3} />
          {/* Smoke clouds */}
          <circle cx="200" cy="130" r="28" fill="#fff" strokeWidth={3} />
          <circle cx="170" cy="90" r="35" fill="#fff" strokeWidth={3} />
          <circle cx="230" cy="85" r="32" fill="#fff" strokeWidth={3} />
          {/* Lava drips */}
          <path d="M185 188 L180 240 M215 188 L220 230" fill="none" strokeWidth={3} />
        </g>
      );

    case "coral-reef-fishes":
    case "pine-forest-trail":
    case "desert-sand-dunes":
      return (
        <g>
          {/* Sand dunes */}
          <path d="M40 280 Q130 200 240 280 Q320 230 380 280" fill="#fff" strokeWidth={3.5} />
          <path d="M40 340 Q180 290 360 340" fill="#fff" strokeWidth={3.5} />
          {/* Desert Sun */}
          <circle cx="290" cy="110" r="38" fill="#fff" strokeWidth={3.5} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 7. FOOD
    // ══════════════════════════════════════════════════════════════════
    case "ice-cream-sundae":
    case "sweet-cupcake":
      return (
        <g>
          {/* Cherry */}
          <circle cx="200" cy="75" r="18" fill="#fff" strokeWidth={3} />
          <path d="M205 60 Q230 40 240 50" fill="none" strokeWidth={3} />
          {/* Scoops */}
          <circle cx="200" cy="140" r="50" fill="#fff" strokeWidth={3.5} />
          <circle cx="150" cy="170" r="45" fill="#fff" strokeWidth={3.5} />
          <circle cx="250" cy="170" r="45" fill="#fff" strokeWidth={3.5} />
          {/* Cup */}
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
          {/* Toppings */}
          <circle cx="180" cy="170" r="18" fill="#fff" strokeWidth={2.5} />
          <circle cx="230" cy="180" r="16" fill="#fff" strokeWidth={2.5} />
          <circle cx="200" cy="240" r="18" fill="#fff" strokeWidth={2.5} />
          <circle cx="170" cy="285" r="12" fill="#fff" strokeWidth={2.5} />
        </g>
      );

    case "birthday-cake":
      return (
        <g>
          {/* Candles */}
          <rect x="160" y="80" width="8" height="40" fill="#fff" strokeWidth={2} />
          <circle cx="164" cy="70" r="6" fill="#111827" />
          <rect x="196" y="70" width="8" height="50" fill="#fff" strokeWidth={2} />
          <circle cx="200" cy="60" r="6" fill="#111827" />
          <rect x="232" y="80" width="8" height="40" fill="#fff" strokeWidth={2} />
          <circle cx="236" cy="70" r="6" fill="#111827" />
          {/* Top Tier */}
          <rect x="140" y="120" width="120" height="90" rx="10" fill="#fff" strokeWidth={3.5} />
          {/* Bottom Tier */}
          <rect x="90" y="210" width="220" height="110" rx="12" fill="#fff" strokeWidth={3.5} />
          {/* Plate */}
          <ellipse cx="200" cy="325" rx="130" ry="18" fill="#fff" strokeWidth={3.5} />
        </g>
      );

    case "burger-and-fries":
      return (
        <g>
          {/* Top Bun */}
          <path d="M100 170 C100 90, 300 90, 300 170 Z" fill="#fff" strokeWidth={3.5} />
          {/* Seeds */}
          <circle cx="160" cy="120" r="3" fill="#111827" />
          <circle cx="200" cy="110" r="3" fill="#111827" />
          <circle cx="240" cy="130" r="3" fill="#111827" />
          {/* Patty & Cheese */}
          <rect x="95" y="180" width="210" height="25" rx="8" fill="#fff" strokeWidth={3} />
          <polygon points="120,205 140,225 160,205" fill="#fff" strokeWidth={2} />
          <polygon points="220,205 240,230 260,205" fill="#fff" strokeWidth={2} />
          <rect x="90" y="215" width="220" height="30" rx="10" fill="#fff" strokeWidth={3.5} />
          {/* Bottom Bun */}
          <path d="M100 250 L300 250 C300 290, 100 290, 100 250 Z" fill="#fff" strokeWidth={3.5} />
        </g>
      );

    case "glazed-donut":
      return (
        <g>
          {/* Outer Ring */}
          <circle cx="200" cy="200" r="125" fill="#fff" strokeWidth={4} />
          {/* Center Hole */}
          <circle cx="200" cy="200" r="45" fill="#fff" strokeWidth={3.5} />
          {/* Frosting */}
          <path
            d="M100 180 Q120 220 140 180 Q160 230 180 180 Q210 235 230 180 Q260 230 280 180 Q300 210 320 180"
            fill="none"
            strokeWidth={2.5}
          />
          {/* Sprinkles */}
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

    case "sweet-strawberry":
    case "fresh-fruit-bowl":
    case "tasty-taco":
    case "movie-popcorn":
      return (
        <g>
          {/* Popcorn bucket / Fruit */}
          <path d="M130 150 L150 340 L250 340 L270 150 Z" fill="#fff" strokeWidth={3.5} />
          <line x1="165" y1="150" x2="175" y2="340" strokeWidth={2.5} />
          <line x1="200" y1="150" x2="200" y2="340" strokeWidth={2.5} />
          <line x1="235" y1="150" x2="225" y2="340" strokeWidth={2.5} />
          {/* Fluffy Popcorn on top */}
          <circle cx="160" cy="130" r="22" fill="#fff" strokeWidth={3} />
          <circle cx="200" cy="115" r="26" fill="#fff" strokeWidth={3} />
          <circle cx="240" cy="130" r="22" fill="#fff" strokeWidth={3} />
          <circle cx="180" cy="90" r="24" fill="#fff" strokeWidth={3} />
          <circle cx="220" cy="90" r="24" fill="#fff" strokeWidth={3} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 8. SPACE
    // ══════════════════════════════════════════════════════════════════
    case "astronaut-floating":
    case "space-astronaut":
      return (
        <g>
          {/* Helmet & Visor */}
          <circle cx="200" cy="130" r="60" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="200" cy="130" rx="42" ry="32" fill="#fff" strokeWidth={3} />
          <path d="M175 120 Q190 115 195 125" fill="none" strokeWidth={2} />
          {/* Suit Body */}
          <rect x="150" y="190" width="100" height="95" rx="20" fill="#fff" strokeWidth={3.5} />
          <rect x="175" y="210" width="50" height="35" rx="6" fill="#fff" strokeWidth={2} />
          {/* Arms */}
          <path d="M150 205 Q100 210 110 245" fill="none" strokeWidth={16} strokeLinecap="round" />
          <circle cx="110" cy="245" r="14" fill="#fff" strokeWidth={3} />
          <path d="M250 205 Q300 170 310 145" fill="none" strokeWidth={16} strokeLinecap="round" />
          <circle cx="310" cy="145" r="14" fill="#fff" strokeWidth={3} />
          {/* Boots */}
          <rect x="155" y="285" width="35" height="50" rx="10" fill="#fff" strokeWidth={3} />
          <ellipse cx="170" cy="340" rx="25" ry="14" fill="#fff" strokeWidth={3} />
          <rect x="210" y="285" width="35" height="50" rx="10" fill="#fff" strokeWidth={3} />
          <ellipse cx="230" cy="340" rx="25" ry="14" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "ringed-planet-saturn":
      return (
        <g>
          {/* Back ring */}
          <path d="M50 200 C50 160, 350 160, 350 200" fill="none" strokeWidth={12} stroke="#111827" />
          {/* Sphere */}
          <circle cx="200" cy="200" r="90" fill="#fff" strokeWidth={4} />
          <path d="M115 170 Q200 210 285 170" fill="none" strokeWidth={2.5} />
          <path d="M115 230 Q200 270 285 230" fill="none" strokeWidth={2.5} />
          {/* Front ring */}
          <path d="M50 200 C50 240, 350 240, 350 200" fill="none" strokeWidth={12} stroke="#111827" />
          <path d="M70 200 C70 230, 330 230, 330 200" fill="none" strokeWidth={4} stroke="#fff" />
        </g>
      );

    case "friendly-alien-ufo":
      return (
        <g>
          {/* UFO Saucer */}
          <ellipse cx="200" cy="220" rx="130" ry="40" fill="#fff" strokeWidth={4} />
          <path d="M130 210 C130 130, 270 130, 270 210 Z" fill="#fff" strokeWidth={3.5} />
          {/* Alien */}
          <circle cx="200" cy="170" r="25" fill="#fff" strokeWidth={2.5} />
          <circle cx="190" cy="165" r="5" fill="#111827" />
          <circle cx="210" cy="165" r="5" fill="#111827" />
          <circle cx="200" cy="135" r="4" fill="#111827" />
          <line x1="200" y1="145" x2="200" y2="135" strokeWidth={2} />
          {/* Lights */}
          <circle cx="110" cy="225" r="9" fill="#fff" strokeWidth={2} />
          <circle cx="155" cy="235" r="9" fill="#fff" strokeWidth={2} />
          <circle cx="200" cy="240" r="9" fill="#fff" strokeWidth={2} />
          <circle cx="245" cy="235" r="9" fill="#fff" strokeWidth={2} />
          <circle cx="290" cy="225" r="9" fill="#fff" strokeWidth={2} />
        </g>
      );

    case "solar-system-planets":
    case "moon-surface-rover":
    case "blazing-shooting-star":
    case "space-shuttle-orbit":
    case "orbiting-satellite":
    case "spiral-galaxy-stars":
      return (
        <g>
          {/* Shooting Star */}
          <polygon points="200,90 220,150 285,150 235,190 255,250 200,210 145,250 165,190 115,150 180,150" fill="#fff" strokeWidth={4} />
          {/* Star trails */}
          <path d="M150 250 Q100 320 60 350" fill="none" strokeWidth={3.5} />
          <path d="M200 230 Q160 310 120 360" fill="none" strokeWidth={3.5} />
          <path d="M245 250 Q210 320 180 370" fill="none" strokeWidth={3.5} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 9. PEOPLE & PROFESSIONS
    // ══════════════════════════════════════════════════════════════════
    case "helpful-doctor":
    case "kind-teacher":
    case "brave-firefighter":
    case "police-officer":
    case "master-chef":
    case "airplane-pilot":
    case "creative-artist":
    case "construction-builder":
    case "lab-scientist":
      return (
        <g>
          {/* Hat/Helmet */}
          <path d="M130 110 C130 60, 270 60, 270 110 Z" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="200" cy="110" rx="80" ry="14" fill="#fff" strokeWidth={3} />
          {/* Face */}
          <circle cx="200" cy="160" r="50" fill="#fff" strokeWidth={3.5} />
          {/* Eyes & Smile */}
          <circle cx="180" cy="150" r="6" fill="#111827" />
          <circle cx="220" cy="150" r="6" fill="#111827" />
          <path d="M185 175 Q200 190 215 175" fill="none" strokeWidth={2.5} />
          {/* Body Uniform */}
          <rect x="140" y="210" width="120" height="110" rx="16" fill="#fff" strokeWidth={3.5} />
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
          {/* Magic Horn */}
          <polygon points="180,50 195,110 165,110" fill="#fff" strokeWidth={3} />
          <line x1="172" y1="95" x2="188" y2="90" strokeWidth={2} />
          <line x1="176" y1="75" x2="184" y2="70" strokeWidth={2} />
          {/* Ears & Head */}
          <polygon points="140,110 130,70 160,95" fill="#fff" strokeWidth={2.5} />
          <circle cx="190" cy="150" r="55" fill="#fff" strokeWidth={3.5} />
          <ellipse cx="230" cy="170" rx="35" ry="25" fill="#fff" strokeWidth={3} />
          <circle cx="245" cy="165" r="4" fill="#111827" />
          {/* Eye & Mane */}
          <ellipse cx="185" cy="140" rx="10" ry="14" fill="#111827" />
          <circle cx="182" cy="135" r="3.5" fill="#fff" stroke="none" />
          <path d="M145 130 C110 150, 115 190, 140 200" fill="none" strokeWidth={5} />
          <path d="M135 170 C100 190, 105 230, 130 240" fill="none" strokeWidth={5} />
          {/* Body & Hooves */}
          <ellipse cx="160" cy="270" rx="75" ry="55" fill="#fff" strokeWidth={3.5} />
          <rect x="120" y="310" width="24" height="50" rx="6" fill="#fff" strokeWidth={3} />
          <rect x="180" y="310" width="24" height="50" rx="6" fill="#fff" strokeWidth={3} />
        </g>
      );

    case "friendly-dragon":
    case "fairytale-castle":
    case "castle-tower":
    case "beautiful-mermaid":
    case "forest-fairy":
    case "magic-wizard":
    case "brave-knight":
    case "flying-pegasus":
    case "treasure-chest":
    case "magic-genie-lamp":
      return (
        <g>
          {/* Castle Towers */}
          <rect x="90" y="160" width="60" height="170" fill="#fff" strokeWidth={3.5} />
          <polygon points="90,160 120,90 150,160" fill="#fff" strokeWidth={3} />
          <rect x="250" y="160" width="60" height="170" fill="#fff" strokeWidth={3.5} />
          <polygon points="250,160 280,90 310,160" fill="#fff" strokeWidth={3} />
          {/* Central Keep */}
          <rect x="150" y="190" width="100" height="140" fill="#fff" strokeWidth={3.5} />
          <path d="M180 330 L180 270 C180 250, 220 250, 220 270 L220 330 Z" fill="#fff" strokeWidth={3} />
          {/* Flag */}
          <line x1="120" y1="90" x2="120" y2="60" strokeWidth={2.5} />
          <polygon points="120,60 150,70 120,80" fill="#fff" strokeWidth={2} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 11. FESTIVALS & HOLIDAYS
    // ══════════════════════════════════════════════════════════════════
    case "christmas-tree":
      return (
        <g>
          {/* Star */}
          <polygon points="200,45 206,62 225,62 210,74 216,92 200,81 184,92 190,74 175,62 194,62" fill="#fff" strokeWidth={2.5} />
          {/* Tiers */}
          <polygon points="200,80 150,150 250,150" fill="#fff" strokeWidth={3.5} />
          <polygon points="200,130 125,220 275,220" fill="#fff" strokeWidth={3.5} />
          <polygon points="200,190 95,300 305,300" fill="#fff" strokeWidth={3.5} />
          {/* Baubles */}
          <circle cx="170" cy="140" r="9" fill="#fff" strokeWidth={2} />
          <circle cx="225" cy="145" r="9" fill="#fff" strokeWidth={2} />
          <circle cx="145" cy="205" r="10" fill="#fff" strokeWidth={2} />
          <circle cx="200" cy="185" r="10" fill="#fff" strokeWidth={2} />
          <circle cx="255" cy="210" r="10" fill="#fff" strokeWidth={2} />
          {/* Trunk & Gift */}
          <rect x="180" y="300" width="40" height="45" fill="#fff" strokeWidth={3} />
          <rect x="235" y="315" width="45" height="40" rx="4" fill="#fff" strokeWidth={2.5} />
          <line x1="257" y1="315" x2="257" y2="355" strokeWidth={2} />
          <line x1="235" y1="335" x2="280" y2="335" strokeWidth={2} />
        </g>
      );

    case "halloween-pumpkin":
    case "autumn-pumpkin-patch":
      return (
        <g>
          {/* Stem */}
          <path d="M190 140 C190 100, 220 80, 230 75" fill="#fff" strokeWidth={4} />
          {/* Pumpkin Lobes */}
          <ellipse cx="200" cy="230" rx="120" ry="90" fill="#fff" strokeWidth={4} />
          <ellipse cx="200" cy="230" rx="80" ry="90" fill="#fff" strokeWidth={3} />
          <ellipse cx="200" cy="230" rx="40" ry="90" fill="#fff" strokeWidth={2.5} />
          {/* Carved Eyes & Smile */}
          <polygon points="160,190 175,215 145,215" fill="#111827" />
          <polygon points="240,190 255,215 225,215" fill="#111827" />
          <polygon points="200,225 208,240 192,240" fill="#111827" />
          <path d="M150 260 Q200 300 250 260 Z" fill="#111827" />
        </g>
      );

    case "santa-claus":
    case "easter-bunny":
    case "diwali-diya":
    case "birthday-party":
    case "thanksgiving-turkey":
    case "new-year-fireworks":
    case "valentine-heart":
    case "gingerbread-man":
      return (
        <g>
          {/* Diya / Festival lamp */}
          <ellipse cx="200" cy="260" rx="110" ry="40" fill="#fff" strokeWidth={3.5} />
          <path d="M90 260 C90 320, 310 320, 310 260 Z" fill="#fff" strokeWidth={3.5} />
          {/* Flame */}
          <path d="M200 130 C160 190, 180 230, 200 240 C220 230, 240 190, 200 130 Z" fill="#fff" strokeWidth={3.5} />
          <circle cx="100" cy="120" r="4" fill="#111827" />
          <circle cx="300" cy="120" r="4" fill="#111827" />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 12. SPORTS
    // ══════════════════════════════════════════════════════════════════
    case "soccer-goal":
    case "soccer-ball-and-net":
    case "basketball-hoop":
    case "baseball-bat":
    case "tennis-racket":
    case "swimmer-pool":
    case "karate-kick":
    case "skateboard-trick":
    case "gymnastics-ribbon":
    case "ice-skating":
      return (
        <g>
          {/* Sports Ball */}
          <circle cx="200" cy="200" r="110" fill="#fff" strokeWidth={4} />
          <polygon points="200,165 230,188 220,222 180,222 170,188" fill="#111827" />
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
    case "school-house":
    case "cozy-home":
    case "ocean-lighthouse":
    case "farm-barn":
    case "dutch-windmill":
    case "city-skyline":
    case "secret-treehouse":
    case "arctic-igloo":
    case "great-pyramid":
      return (
        <g>
          {/* Lighthouse / Landmark */}
          <path d="M160 330 L175 140 L225 140 L240 330 Z" fill="#fff" strokeWidth={3.5} />
          <line x1="168" y1="200" x2="232" y2="200" strokeWidth={3} />
          <line x1="164" y1="250" x2="236" y2="250" strokeWidth={3} />
          <line x1="161" y1="300" x2="239" y2="300" strokeWidth={3} />
          <rect x="170" y="95" width="60" height="45" rx="6" fill="#fff" strokeWidth={3} />
          <polygon points="160,95 200,55 240,95" fill="#fff" strokeWidth={3} />
          {/* Light beam */}
          <polygon points="230,115 350,70 350,160" fill="none" strokeWidth={2} strokeDasharray="4 4" />
          <path d="M60 340 Q130 320 200 340 Q270 320 340 340" fill="none" strokeWidth={3} />
        </g>
      );

    // ══════════════════════════════════════════════════════════════════
    // 14. EDUCATIONAL COLORING
    // ══════════════════════════════════════════════════════════════════
    case "alphabet-abc-fun":
    case "number-counting-10":
    case "shapes-world":
    case "color-by-number":
    case "telling-time-clock":
    case "body-parts-fun":
    case "solar-system-map":
    case "emotions-faces":
    case "animal-habitats":
    case "rainbow-color-wheel":
      return (
        <g>
          {/* Big Letter A & Apple */}
          <ellipse cx="200" cy="220" rx="95" ry="90" fill="#fff" strokeWidth={4} />
          <path d="M200 135 C200 100, 220 80, 230 75" fill="none" strokeWidth={5} />
          <path d="M205 105 C245 95, 255 125, 210 120 Z" fill="#fff" strokeWidth={2.5} />
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
    case "winter-snowman":
    case "autumn-falling-leaves":
    case "spring-garden-blooms":
    case "rainy-day-umbrella":
    case "windy-flying-kite":
    case "stormy-thundercloud":
    case "spring-birdhouse":
      return (
        <g>
          {/* Snowman */}
          <circle cx="200" cy="285" r="70" fill="#fff" strokeWidth={3.5} />
          <circle cx="200" cy="180" r="50" fill="#fff" strokeWidth={3.5} />
          <circle cx="200" cy="105" r="35" fill="#fff" strokeWidth={3.5} />
          {/* Top Hat */}
          <rect x="175" y="45" width="50" height="40" fill="#fff" strokeWidth={3} />
          <line x1="160" y1="85" x2="240" y2="85" strokeWidth={4} />
          {/* Carrot Nose & Face */}
          <polygon points="200,105 235,112 200,115" fill="#fff" strokeWidth={2} />
          <circle cx="190" cy="98" r="4" fill="#111827" />
          <circle cx="210" cy="98" r="4" fill="#111827" />
          {/* Scarf */}
          <path d="M175 135 Q200 150 225 135" fill="none" strokeWidth={8} stroke="#111827" />
          <rect x="210" y="140" width="16" height="45" rx="3" fill="#fff" strokeWidth={2.5} />
          {/* Buttons */}
          <circle cx="200" cy="175" r="5" fill="#111827" />
          <circle cx="200" cy="200" r="5" fill="#111827" />
          <circle cx="200" cy="265" r="5" fill="#111827" />
        </g>
      );

    default:
      return (
        <g>
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
