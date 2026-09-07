import React from "react";
import { Frame } from "./NatureScenes";

// 31. The Life Cycle of a Frog
export function FrogLifeCycleScene() {
  return (
    <Frame label="The Life Cycle of a Frog: Frogspawn, Tadpole, Froglet, Adult Frog">
      <defs>
        <linearGradient id="fl-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="60%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#065f46" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#fl-bg)" />
      {/* 1. Frogspawn */}
      <g transform="translate(60, 190)">
        <circle cx="0" cy="0" r="16" fill="#ffffff" opacity="0.6" stroke="#38bdf8" strokeWidth="1.5" />
        <circle cx="-4" cy="-4" r="3.5" fill="#0f172a" />
        <circle cx="4" cy="4" r="3.5" fill="#0f172a" />
        <text x="-25" y="30" fill="#ffffff" fontSize="9" fontWeight="bold">1. Eggs</text>
      </g>
      {/* 2. Tadpole */}
      <g transform="translate(150, 180)">
        <ellipse cx="0" cy="0" rx="12" ry="7" fill="#15803d" />
        <path d="M12 0 Q25 -10 35 0 Q25 10 12 0" fill="#22c55e" />
        <text x="-15" y="25" fill="#ffffff" fontSize="9" fontWeight="bold">2. Tadpole</text>
      </g>
      {/* 3. Froglet */}
      <g transform="translate(260, 160)">
        <ellipse cx="0" cy="0" rx="16" ry="10" fill="#16a34a" />
        <path d="M16 0 L30 0" stroke="#15803d" strokeWidth="3" />
        <line x1="-5" y1="8" x2="-10" y2="18" stroke="#15803d" strokeWidth="2.5" />
        <text x="-15" y="30" fill="#ffffff" fontSize="9" fontWeight="bold">3. Froglet</text>
      </g>
      {/* 4. Adult Frog on Lilypad */}
      <g transform="translate(365, 130)">
        <ellipse cx="0" cy="20" rx="35" ry="10" fill="#15803d" />
        <circle cx="0" cy="-5" r="22" fill="#22c55e" />
        <circle cx="-8" cy="-18" r="6" fill="#166534" />
        <circle cx="8" cy="-18" r="6" fill="#166534" />
        <text x="-20" y="45" fill="#fde047" fontSize="10" fontWeight="bold">4. Adult Frog 🐸</text>
      </g>
      <text x="120" y="35" fill="#ffffff" fontSize="13" fontWeight="black">Metamorphosis: Gill to Lung Transformation</text>
    </Frame>
  );
}

// 32. The Life Cycle of a Bee
export function BeeLifeCycleScene() {
  return (
    <Frame label="The Life Cycle of a Bee: Hexagonal Wax Cells, Egg, Larva, Pupa, Adult">
      <defs>
        <linearGradient id="bl-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#bl-bg)" />
      {/* Hexagonal Cells */}
      <g transform="translate(80, 130)">
        <polygon points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20" fill="#fbbf24" stroke="#78350f" strokeWidth="3" />
        <line x1="0" y1="-10" x2="0" y2="10" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        <text x="-12" y="55" fill="#ffffff" fontSize="10" fontWeight="bold">1. Egg</text>
      </g>
      <g transform="translate(170, 130)">
        <polygon points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20" fill="#fbbf24" stroke="#78350f" strokeWidth="3" />
        <path d="M-10 -10 Q0 -20 10 -10 Q15 5 0 10 Q-15 5 -10 -10" fill="#ffffff" />
        <text x="-15" y="55" fill="#ffffff" fontSize="10" fontWeight="bold">2. Larva</text>
      </g>
      <g transform="translate(260, 130)">
        <polygon points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20" fill="#d97706" stroke="#78350f" strokeWidth="3" />
        <ellipse cx="0" cy="0" rx="14" ry="20" fill="#ca8a04" />
        <text x="-15" y="55" fill="#ffffff" fontSize="10" fontWeight="bold">3. Pupa</text>
      </g>
      <g transform="translate(360, 120)">
        {/* Adult Bee */}
        <ellipse cx="0" cy="0" rx="16" ry="24" fill="#fde047" stroke="#000000" strokeWidth="2" />
        <line x1="-16" y1="-8" x2="16" y2="-8" stroke="#000000" strokeWidth="4" />
        <line x1="-16" y1="8" x2="16" y2="8" stroke="#000000" strokeWidth="4" />
        {/* Wings */}
        <ellipse cx="-18" cy="-14" rx="14" ry="8" fill="#ffffff" opacity="0.8" transform="rotate(-30 -18 -14)" />
        <ellipse cx="18" cy="-14" rx="14" ry="8" fill="#ffffff" opacity="0.8" transform="rotate(30 18 -14)" />
        <text x="-25" y="45" fill="#ffffff" fontSize="10" fontWeight="bold">4. Adult Bee 🐝</text>
      </g>
      <text x="130" y="40" fill="#ffffff" fontSize="13" fontWeight="black">Four Life Stages of the Honey Bee</text>
    </Frame>
  );
}

// 33. The Life Cycle of a Chicken
export function ChickenLifeCycleScene() {
  return (
    <Frame label="The Life Cycle of a Chicken: 21-Day Egg Incubation to Fluffy Yellow Chick">
      <defs>
        <linearGradient id="cl-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdba74" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#cl-bg)" />
      {/* 1. Warm Egg */}
      <g transform="translate(70, 140)">
        <ellipse cx="0" cy="0" rx="26" ry="36" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="-15" y="55" fill="#ffffff" fontSize="10" fontWeight="bold">1. Egg</text>
      </g>
      {/* 2. Pipping Shell */}
      <g transform="translate(180, 140)">
        <ellipse cx="0" cy="0" rx="26" ry="36" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <path d="M-15 0 L-5 -10 L5 0 L15 -10 L10 10 L-10 10 Z" fill="#ea580c" />
        <text x="-20" y="55" fill="#ffffff" fontSize="10" fontWeight="bold">2. Pipping</text>
      </g>
      {/* 3. Fluffy Chick */}
      <g transform="translate(290, 140)">
        <circle cx="0" cy="10" r="22" fill="#fde047" />
        <circle cx="0" cy="-12" r="16" fill="#fde047" />
        <polygon points="12,-12 22,-8 12,-4" fill="#f97316" />
        <circle cx="6" cy="-15" r="2.5" fill="#000000" />
        <text x="-20" y="55" fill="#ffffff" fontSize="10" fontWeight="bold">3. Chick 🐥</text>
      </g>
      {/* 4. Hen */}
      <g transform="translate(385, 120)">
        <ellipse cx="0" cy="15" rx="25" ry="20" fill="#b45309" />
        <circle cx="-12" cy="-10" r="12" fill="#b45309" />
        <polygon points="-5,-20 0,-15 5,-20 0,-10" fill="#dc2626" />
        <text x="-15" y="55" fill="#ffffff" fontSize="10" fontWeight="bold">4. Hen 🐔</text>
      </g>
      <text x="130" y="40" fill="#ffffff" fontSize="13" fontWeight="black">21-Day Egg Incubation Cycle</text>
    </Frame>
  );
}

// 34. The Life Cycle of a Ladybug
export function LadybugLifeCycleScene() {
  return (
    <Frame label="The Life Cycle of a Ladybug: Yellow Eggs, Alligator Larva, Pupa, Spotted Beetle">
      <defs>
        <linearGradient id="ll-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#ll-bg)" />
      {/* Leaf surface background */}
      <path d="M-20 180 Q220 110 460 200 L460 260 L-20 260 Z" fill="#166534" />
      {/* 1. Yellow Eggs */}
      <g transform="translate(60, 140)">
        <ellipse cx="-6" cy="0" rx="3" ry="7" fill="#fde047" />
        <ellipse cx="0" cy="-2" rx="3" ry="7" fill="#fde047" />
        <ellipse cx="6" cy="0" rx="3" ry="7" fill="#fde047" />
        <text x="-15" y="25" fill="#ffffff" fontSize="10" fontWeight="bold">1. Eggs</text>
      </g>
      {/* 2. Spiky Alligator Larva */}
      <g transform="translate(160, 130)">
        <ellipse cx="0" cy="0" rx="20" ry="8" fill="#1e293b" />
        <circle cx="8" cy="0" r="3" fill="#f97316" />
        <circle cx="-8" cy="0" r="3" fill="#f97316" />
        <text x="-18" y="25" fill="#ffffff" fontSize="10" fontWeight="bold">2. Larva</text>
      </g>
      {/* 3. Leaf Pupa */}
      <g transform="translate(260, 130)">
        <path d="M-10 -15 Q15 -10 10 15 Q-15 10 -10 -15" fill="#ea580c" />
        <text x="-15" y="25" fill="#ffffff" fontSize="10" fontWeight="bold">3. Pupa</text>
      </g>
      {/* 4. Spotted Adult Ladybug */}
      <g transform="translate(365, 110)">
        <circle cx="0" cy="0" r="24" fill="#dc2626" />
        <line x1="0" y1="-24" x2="0" y2="24" stroke="#000000" strokeWidth="2" />
        <circle cx="-10" cy="-8" r="4" fill="#000000" />
        <circle cx="10" cy="-8" r="4" fill="#000000" />
        <circle cx="-12" cy="10" r="4" fill="#000000" />
        <circle cx="12" cy="10" r="4" fill="#000000" />
        <circle cx="0" cy="-22" r="8" fill="#000000" />
        <text x="-25" y="45" fill="#ffffff" fontSize="10" fontWeight="bold">4. Ladybug 🐞</text>
      </g>
      <text x="120" y="40" fill="#ffffff" fontSize="13" fontWeight="black">Ladybird Beetle Complete Metamorphosis</text>
    </Frame>
  );
}

// 35. How Birds Build Nests
export function BirdNestScene() {
  return (
    <Frame label="How Birds Build Nests: Twigs, Spiderwebs, Soft Feather Insulation, Eggs">
      <defs>
        <linearGradient id="bn-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="60%" stopColor="#a7f3d0" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#bn-bg)" />
      {/* Tree Fork Branch */}
      <path d="M40 260 L180 140 L380 260" stroke="#78350f" strokeWidth="24" fill="none" strokeLinecap="round" />
      <path d="M180 140 L180 40" stroke="#78350f" strokeWidth="18" fill="none" strokeLinecap="round" />
      {/* Woven Nest Cup */}
      <g transform="translate(180, 130)">
        <ellipse cx="0" cy="10" rx="55" ry="30" fill="#92400e" />
        <ellipse cx="0" cy="5" rx="45" ry="20" fill="#713f12" />
        {/* Soft lining */}
        <ellipse cx="0" cy="5" rx="35" ry="14" fill="#fde68a" opacity="0.6" />
        {/* 3 speckled eggs inside */}
        <ellipse cx="-15" cy="5" rx="8" ry="12" fill="#bae6fd" transform="rotate(-15 -15 5)" />
        <ellipse cx="0" cy="2" rx="8" ry="12" fill="#bae6fd" />
        <ellipse cx="15" cy="5" rx="8" ry="12" fill="#bae6fd" transform="rotate(15 15 5)" />
      </g>
      {/* Bird perched on branch */}
      <g transform="translate(280, 110)">
        <ellipse cx="0" cy="0" rx="18" ry="12" fill="#0284c7" />
        <circle cx="-12" cy="-8" r="8" fill="#0369a1" />
        <polygon points="-20,-8 -26,-6 -20,-4" fill="#f59e0b" />
      </g>
      <text x="120" y="30" fill="#0f172a" fontSize="13" fontWeight="black">Architectural Nest Engineering 🪺</text>
    </Frame>
  );
}

// 36. How Bees Make Honey
export function HoneyMakingScene() {
  return (
    <Frame label="How Bees Make Honey: Nectar Foraging, Honey Stomach Invertase, Evaporation">
      <defs>
        <linearGradient id="hm-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#hm-bg)" />
      {/* Honey Jar on Right */}
      <g transform="translate(340, 140)">
        <rect x="-35" y="-40" width="70" height="85" rx="10" fill="#ffffff" opacity="0.85" stroke="#78350f" strokeWidth="3" />
        <rect x="-30" y="-15" width="60" height="55" rx="6" fill="#f59e0b" />
        <rect x="-25" y="-48" width="50" height="12" fill="#78350f" rx="3" />
        <text x="-20" y="20" fill="#78350f" fontSize="11" fontWeight="black">HONEY</text>
      </g>
      {/* Flower Nectar Sips */}
      <g transform="translate(80, 160)">
        <circle cx="0" cy="0" r="14" fill="#fbbf24" />
        {[0, 60, 120, 180, 240, 300].map((a, i) => (
          <circle key={i} cx={20 * Math.cos((a * Math.PI) / 180)} cy={20 * Math.sin((a * Math.PI) / 180)} r="10" fill="#f472b6" />
        ))}
        <text x="-20" y="45" fill="#ffffff" fontSize="10" fontWeight="bold">1. Nectar</text>
      </g>
      {/* Flying Bee */}
      <g transform="translate(200, 110)">
        <ellipse cx="0" cy="0" rx="16" ry="22" fill="#fde047" stroke="#000000" strokeWidth="2" />
        <line x1="-16" y1="-5" x2="16" y2="-5" stroke="#000000" strokeWidth="3.5" />
        <line x1="-16" y1="5" x2="16" y2="5" stroke="#000000" strokeWidth="3.5" />
        <text x="-35" y="40" fill="#ffffff" fontSize="10" fontWeight="bold">2. Honey Stomach</text>
      </g>
      <text x="130" y="35" fill="#ffffff" fontSize="13" fontWeight="black">Enzymatic Nectar Evaporation 🍯</text>
    </Frame>
  );
}

// 37. How Plants Make Their Food (Photosynthesis)
export function PhotosynthesisScene() {
  return (
    <Frame label="How Plants Make Their Food: Sunlight, Carbon Dioxide, Water, Glucose, Oxygen">
      <defs>
        <linearGradient id="ps-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="60%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#ps-bg)" />
      {/* Giant Green Leaf in Center */}
      <g transform="translate(220, 130)">
        <path d="M-120 0 Q-60 -90 120 0 Q-60 90 -120 0 Z" fill="#16a34a" stroke="#ffffff" strokeWidth="3" />
        {/* Veins */}
        <line x1="-110" y1="0" x2="110" y2="0" stroke="#86efac" strokeWidth="3" />
        <line x1="-40" y1="0" x2="-10" y2="-40" stroke="#86efac" strokeWidth="2" />
        <line x1="-10" y1="0" x2="25" y2="-40" stroke="#86efac" strokeWidth="2" />
        <line x1="-40" y1="0" x2="-10" y2="40" stroke="#86efac" strokeWidth="2" />
      </g>
      {/* Inputs & Outputs */}
      <text x="40" y="50" fill="#fde047" fontSize="13" fontWeight="black">☀️ Sunlight (Energy)</text>
      <text x="40" y="90" fill="#ffffff" fontSize="12" fontWeight="bold">💨 CO₂ Inflow (Stomata)</text>
      <text x="40" y="225" fill="#bae6fd" fontSize="12" fontWeight="bold">💧 Water H₂O (Xylem)</text>
      <text x="270" y="70" fill="#ffffff" fontSize="13" fontWeight="black">🌬️ Oxygen O₂ Out</text>
      <text x="270" y="215" fill="#fef08a" fontSize="13" fontWeight="black">🍬 Glucose Sugar (Food)</text>
    </Frame>
  );
}

// 38. How Animals Adapt to Their Environment
export function AnimalAdaptationScene() {
  return (
    <Frame label="How Animals Adapt to Environment: Desert Camel, Polar Bear Blubber, Camouflage">
      <defs>
        <linearGradient id="aa-left" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="aa-right" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="220" height="260" fill="url(#aa-left)" />
      <rect x="220" y="0" width="220" height="260" fill="url(#aa-right)" />
      {/* Desert Side (Camel) */}
      <g transform="translate(110, 120)">
        <text x="-40" y="-55" fill="#ffffff" fontSize="13" fontWeight="black">DESERT 🏜️</text>
        <text x="-35" y="15" fontSize="42">🐪</text>
        <text x="-50" y="65" fill="#ffffff" fontSize="10" fontWeight="bold">Fat Humps &amp; Footpads</text>
      </g>
      {/* Arctic Side (Polar Bear) */}
      <g transform="translate(330, 120)">
        <text x="-40" y="-55" fill="#ffffff" fontSize="13" fontWeight="black">ARCTIC ❄️</text>
        <text x="-35" y="15" fontSize="42">🐻‍❄️</text>
        <text x="-50" y="65" fill="#ffffff" fontSize="10" fontWeight="bold">Insulating Blubber &amp; Fur</text>
      </g>
    </Frame>
  );
}

// 39. The Journey of Food Through an Animal
export function AnimalDigestionScene() {
  return (
    <Frame label="The Journey of Food Through an Animal: 4-Chamber Ruminant Cow Stomach">
      <defs>
        <linearGradient id="ad-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdba74" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#ad-bg)" />
      {/* Cow outline with 4 stomach chambers */}
      <g transform="translate(220, 130)">
        {/* Rumen (Large) */}
        <circle cx="-50" cy="0" r="38" fill="#78350f" opacity="0.9" />
        <text x="-75" y="5" fill="#ffffff" fontSize="11" fontWeight="bold">1. Rumen</text>
        {/* Reticulum */}
        <circle cx="10" cy="-20" r="22" fill="#9a3412" opacity="0.9" />
        <text x="-15" y="-15" fill="#ffffff" fontSize="9" fontWeight="bold">2. Reticulum</text>
        {/* Omasum */}
        <circle cx="20" cy="20" r="20" fill="#c2410c" opacity="0.9" />
        <text x="0" y="25" fill="#ffffff" fontSize="9" fontWeight="bold">3. Omasum</text>
        {/* Abomasum (True Stomach) */}
        <circle cx="70" cy="5" r="26" fill="#b45309" opacity="0.9" />
        <text x="40" y="10" fill="#ffffff" fontSize="9" fontWeight="bold">4. Abomasum</text>
      </g>
      <text x="95" y="40" fill="#ffffff" fontSize="13" fontWeight="black">4-Chambered Ruminant Digestion (Cud Chewing) 🐄</text>
    </Frame>
  );
}

// 40. How Ecosystems Work
export function EcosystemScene() {
  return (
    <Frame label="How Ecosystems Work: Forest, Stream, Deer, Fish, Decomposers">
      <defs>
        <linearGradient id="eco-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="40%" stopColor="#86efac" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#eco-bg)" />
      {/* Sun */}
      <circle cx="60" cy="50" r="26" fill="#fde047" />
      {/* Forest Trees */}
      <g transform="translate(100, 140)">
        <rect x="-6" y="0" width="12" height="50" fill="#78350f" />
        <polygon points="0,-40 30,0 -30,0" fill="#166534" />
      </g>
      <g transform="translate(160, 130)">
        <rect x="-8" y="0" width="16" height="60" fill="#78350f" />
        <circle cx="0" cy="-25" r="30" fill="#15803d" />
      </g>
      {/* Stream with Fish */}
      <path d="M220 180 Q280 150 340 180 T440 180 V260 H220 Z" fill="#0284c7" />
      <g transform="translate(320, 220)">
        <ellipse cx="0" cy="0" rx="10" ry="5" fill="#f97316" />
        <polygon points="10,0 16,-5 16,5" fill="#f97316" />
      </g>
      {/* Deer on bank */}
      <text x="185" y="175" fontSize="28">🦌</text>
      {/* Mushroom decomposer */}
      <text x="70" y="235" fontSize="20">🍄</text>
      <text x="130" y="30" fill="#0f172a" fontSize="13" fontWeight="black">Harmonious Living Community (Biotic + Abiotic) 🌲</text>
    </Frame>
  );
}
