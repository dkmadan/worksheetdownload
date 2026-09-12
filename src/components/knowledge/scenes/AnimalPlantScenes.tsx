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

// 31. The Life Cycle of a Butterfly
export function ButterflyLifeCycleScene() {
  return (
    <Frame label="The Life Cycle of a Butterfly: Egg, Caterpillar, Chrysalis, Monarch Butterfly">
      <defs>
        <linearGradient id="blc-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="60%" stopColor="#bbf7d0" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#blc-bg)" />
      {/* 1. Leaf with Egg */}
      <g transform="translate(60, 60)">
        <path d="M-30 0 Q0 -30 30 0 Q0 30 -30 0 Z" fill="#15803d" />
        <circle cx="0" cy="-5" r="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <text x="-25" y="45" fill="#14532d" fontSize="9" fontWeight="bold">1. Egg on Leaf</text>
      </g>
      {/* 2. Caterpillar Munching */}
      <g transform="translate(170, 70)">
        <circle cx="-20" cy="0" r="8" fill="#16a34a" />
        <circle cx="-10" cy="-3" r="8" fill="#eab308" />
        <circle cx="0" cy="0" r="8" fill="#16a34a" />
        <circle cx="10" cy="-3" r="8" fill="#eab308" />
        <circle cx="20" cy="0" r="9" fill="#16a34a" />
        <circle cx="22" cy="-3" r="2" fill="#000000" />
        <text x="-30" y="35" fill="#14532d" fontSize="9" fontWeight="bold">2. Caterpillar</text>
      </g>
      {/* 3. Hanging Chrysalis */}
      <g transform="translate(70, 180)">
        <line x1="0" y1="-25" x2="0" y2="-5" stroke="#78350f" strokeWidth="3" />
        <path d="M-10 -5 Q0 -8 10 -5 Q14 15 0 25 Q-14 15 -10 -5 Z" fill="#15803d" stroke="#fef08a" strokeWidth="1.5" />
        <text x="-25" y="45" fill="#14532d" fontSize="9" fontWeight="bold">3. Chrysalis (Pupa)</text>
      </g>
      {/* 4. Adult Monarch Butterfly */}
      <g transform="translate(310, 140)">
        {/* Body */}
        <ellipse cx="0" cy="0" rx="4" ry="24" fill="#0f172a" />
        <circle cx="0" cy="-22" r="5" fill="#0f172a" />
        {/* Antennae */}
        <path d="M-2 -25 Q-15 -35 -12 -42 M2 -25 Q15 -35 12 -42" stroke="#0f172a" strokeWidth="1.5" fill="none" />
        {/* Orange Wings */}
        <path d="M-4 -10 Q-60 -50 -70 -10 Q-70 20 -4 10 Z" fill="#f97316" stroke="#0f172a" strokeWidth="2.5" />
        <path d="M4 -10 Q60 -50 70 -10 Q70 20 4 10 Z" fill="#f97316" stroke="#0f172a" strokeWidth="2.5" />
        <path d="M-4 10 Q-50 20 -45 50 Q-20 45 -4 20 Z" fill="#ea580c" stroke="#0f172a" strokeWidth="2" />
        <path d="M4 10 Q50 20 45 50 Q20 45 4 20 Z" fill="#ea580c" stroke="#0f172a" strokeWidth="2" />
        <text x="-35" y="70" fill="#9a3412" fontSize="10" fontWeight="bold">4. Adult Butterfly 🦋</text>
      </g>
    </Frame>
  );
}

// 32. How Seeds Germinate
export function SeedGerminationScene() {
  return (
    <Frame label="How Seeds Germinate: Imbibition, Radicle Root Growth, Hypocotyl Shoot, First Leaves">
      <defs>
        <linearGradient id="sg-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="40%" stopColor="#7dd3fc" />
          <stop offset="41%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#sg-bg)" />
      {/* Soil Horizon line at y=105 */}
      <line x1="0" y1="105" x2="440" y2="105" stroke="#15803d" strokeWidth="4" />
      {/* 1. Dormant Seed in soil */}
      <g transform="translate(60, 160)">
        <ellipse cx="0" cy="0" rx="14" ry="10" fill="#92400e" stroke="#78350f" strokeWidth="2" />
        <text x="-25" y="30" fill="#fde68a" fontSize="8" fontWeight="bold">1. Imbibition</text>
      </g>
      {/* 2. Radicle Emergence */}
      <g transform="translate(160, 160)">
        <ellipse cx="0" cy="0" rx="14" ry="10" fill="#92400e" />
        <path d="M0 8 Q10 25 5 45" stroke="#ffffff" strokeWidth="3" fill="none" />
        <text x="-25" y="60" fill="#fde68a" fontSize="8" fontWeight="bold">2. Radicle Root</text>
      </g>
      {/* 3. Arching Hypocotyl */}
      <g transform="translate(260, 150)">
        <ellipse cx="-5" cy="0" rx="12" ry="8" fill="#92400e" />
        <path d="M-5 5 Q0 30 0 50 M-5 0 Q-15 -35 0 -45" stroke="#86efac" strokeWidth="3.5" fill="none" />
        <text x="-25" y="68" fill="#fde68a" fontSize="8" fontWeight="bold">3. Shoot Arch</text>
      </g>
      {/* 4. Full Seedling above ground */}
      <g transform="translate(370, 130)">
        <path d="M0 0 L0 60 M0 20 Q-15 35 -20 55 M0 30 Q15 45 20 60" stroke="#ffffff" strokeWidth="3" fill="none" />
        <line x1="0" y1="0" x2="0" y2="-60" stroke="#22c55e" strokeWidth="4" />
        {/* Open Cotyledons & True Leaves */}
        <ellipse cx="-15" cy="-60" rx="16" ry="9" fill="#16a34a" />
        <ellipse cx="15" cy="-60" rx="16" ry="9" fill="#16a34a" />
        <text x="-30" y="80" fill="#fde68a" fontSize="8" fontWeight="bold">4. Photosynthesis</text>
      </g>
      {/* Labels */}
      <rect x="15" y="15" width="135" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#86efac" fontSize="10" fontWeight="bold">🌱 Seedling Germination</text>
    </Frame>
  );
}

// 33. How Flowers Become Fruit
export function FlowerToFruitScene() {
  return (
    <Frame label="How Flowers Become Fruit: Apple Blossom, Pollen Tube, Ovary Swelling, Ripe Apple">
      <defs>
        <linearGradient id="ftf-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdf4ff" />
          <stop offset="60%" stopColor="#fce7f3" />
          <stop offset="100%" stopColor="#fbcfe8" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#ftf-bg)" />
      {/* 1. Open Flower Blossom */}
      <g transform="translate(90, 120)">
        {/* Petals */}
        <circle cx="0" cy="-25" r="16" fill="#ffffff" stroke="#f472b6" strokeWidth="1.5" />
        <circle cx="-25" cy="-8" r="16" fill="#ffffff" stroke="#f472b6" strokeWidth="1.5" />
        <circle cx="25" cy="-8" r="16" fill="#ffffff" stroke="#f472b6" strokeWidth="1.5" />
        <circle cx="-16" cy="20" r="16" fill="#ffffff" stroke="#f472b6" strokeWidth="1.5" />
        <circle cx="16" cy="20" r="16" fill="#ffffff" stroke="#f472b6" strokeWidth="1.5" />
        {/* Central Pistil & Anthers */}
        <circle cx="0" cy="0" r="10" fill="#fef08a" />
        <circle cx="0" cy="0" r="4" fill="#22c55e" />
        <text x="-35" y="55" fill="#831843" fontSize="9" fontWeight="bold">1. Pollinated Blossom</text>
      </g>
      {/* Transition Arrow */}
      <g transform="translate(180, 120)">
        <line x1="0" y1="0" x2="40" y2="0" stroke="#db2777" strokeWidth="3" />
        <polygon points="40,-4 48,0 40,4" fill="#db2777" />
        <text x="-5" y="-10" fill="#9d174d" fontSize="8" fontWeight="bold">Ovary Swells</text>
      </g>
      {/* 2. Ripe Red Fruit (Apple) with Seed Cross Section */}
      <g transform="translate(320, 125)">
        <ellipse cx="0" cy="0" rx="55" ry="50" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
        {/* Stem & Leaf */}
        <path d="M0 -50 Q-10 -75 0 -80" stroke="#78350f" strokeWidth="4" fill="none" />
        <path d="M0 -70 Q15 -80 25 -70 Q15 -60 0 -70 Z" fill="#16a34a" />
        {/* Core Cutout showing seeds */}
        <ellipse cx="0" cy="0" rx="20" ry="24" fill="#fef08a" opacity="0.9" />
        <ellipse cx="-6" cy="0" rx="3" ry="5" fill="#451a03" />
        <ellipse cx="6" cy="0" rx="3" ry="5" fill="#451a03" />
        <text x="-30" y="70" fill="#831843" fontSize="10" fontWeight="bold">2. Ripened Fruit 🍎</text>
      </g>
    </Frame>
  );
}

// 34. How Plants Drink Water
export function PlantDrinkWaterScene() {
  return (
    <Frame label="How Plants Drink Water: Root Osmosis, Xylem Tube Capillary Pull, Leaf Stomatal Transpiration">
      <defs>
        <linearGradient id="pdw-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="50%" stopColor="#bae6fd" />
          <stop offset="51%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#pdw-bg)" />
      {/* Plant Stem with Xylem tubes */}
      <rect x="195" y="30" width="50" height="150" fill="#15803d" />
      {/* Visible Xylem Capillary Pipes inside Stem */}
      <line x1="210" y1="30" x2="210" y2="210" stroke="#38bdf8" strokeWidth="4" />
      <line x1="230" y1="30" x2="230" y2="210" stroke="#38bdf8" strokeWidth="4" />
      {/* Upward Water Molecule Arrows */}
      <g stroke="#ffffff" strokeWidth="2.5" fill="none">
        <path d="M210 180 L210 140 M210 140 L206 146 M210 140 L214 146" />
        <path d="M230 150 L230 110 M230 110 L226 116 M230 110 L234 116" />
        <path d="M210 100 L210 60 M210 60 L206 66 M210 60 L214 66" />
      </g>
      {/* Roots in Soil */}
      <path d="M210 210 Q160 230 120 250 M210 210 Q180 240 170 260 M230 210 Q280 230 320 250 M230 210 Q250 240 260 260" stroke="#fef08a" strokeWidth="3" fill="none" />
      {/* Leaf with Transpiration Vapor */}
      <g transform="translate(195, 60)">
        <path d="M0 0 Q-60 -40 -90 0 Q-50 30 0 0 Z" fill="#16a34a" />
        <path d="M-70 -10 Q-75 -30 -70 -45 M-50 -15 Q-55 -35 -50 -50" stroke="#38bdf8" strokeWidth="2" fill="none" strokeDasharray="3,2" />
      </g>
      {/* Labels */}
      <rect x="15" y="15" width="135" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#38bdf8" fontSize="10" fontWeight="bold">☀️ Leaf Transpiration Pull</text>
      <rect x="290" y="225" width="135" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="297" y="239" fill="#fde68a" fontSize="10" fontWeight="bold">💧 Root Hair Osmosis</text>
    </Frame>
  );
}

// 35. How Pollination Works
export function PollinationScene() {
  return (
    <Frame label="How Pollination Works: Bee Foraging, Anther Pollen Dusting, Sticky Stigma Transfer">
      <defs>
        <linearGradient id="pol-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="60%" stopColor="#bbf7d0" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#pol-bg)" />
      {/* Flower A (Left) */}
      <g transform="translate(90, 150)">
        <circle cx="0" cy="0" r="35" fill="#f43f5e" />
        <circle cx="0" cy="0" r="15" fill="#facc15" />
        {/* Stamens with Anthers */}
        <line x1="-12" y1="-10" x2="-22" y2="-28" stroke="#ca8a04" strokeWidth="2" />
        <circle cx="-22" cy="-28" r="4" fill="#eab308" />
        <line x1="12" y1="-10" x2="22" y2="-28" stroke="#ca8a04" strokeWidth="2" />
        <circle cx="22" cy="-28" r="4" fill="#eab308" />
        <text x="-35" y="55" fill="#881337" fontSize="9" fontWeight="bold">Flower A (Anther)</text>
      </g>
      {/* Foraging Honeybee Flying with Pollen Basket */}
      <g transform="translate(220, 90)">
        {/* Wings */}
        <ellipse cx="-6" cy="-14" rx="7" ry="14" fill="#bae6fd" opacity="0.8" />
        <ellipse cx="6" cy="-14" rx="7" ry="14" fill="#bae6fd" opacity="0.8" />
        {/* Bee Striped Body */}
        <ellipse cx="0" cy="0" rx="16" ry="11" fill="#facc15" stroke="#000000" strokeWidth="2" />
        <line x1="-6" y1="-10" x2="-6" y2="10" stroke="#000000" strokeWidth="3" />
        <line x1="4" y1="-10" x2="4" y2="10" stroke="#000000" strokeWidth="3" />
        {/* Pollen Basket on Leg */}
        <circle cx="6" cy="12" r="4" fill="#eab308" />
      </g>
      {/* Flower B (Right - Receiving Stigma) */}
      <g transform="translate(350, 150)">
        <circle cx="0" cy="0" r="35" fill="#a855f7" />
        <circle cx="0" cy="0" r="15" fill="#facc15" />
        {/* Central Sticky Stigma */}
        <line x1="0" y1="0" x2="0" y2="-32" stroke="#15803d" strokeWidth="3" />
        <circle cx="0" cy="-32" r="5" fill="#22c55e" />
        <circle cx="2" cy="-34" r="2" fill="#eab308" />
        <text x="-35" y="55" fill="#581c87" fontSize="9" fontWeight="bold">Flower B (Stigma)</text>
      </g>
      {/* Flight Path Dotted Line */}
      <path d="M120 120 Q220 40 330 115" stroke="#78350f" strokeWidth="2" fill="none" strokeDasharray="4,4" />
      {/* Labels */}
      <rect x="15" y="15" width="135" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#fef08a" fontSize="10" fontWeight="bold">🐝 Cross-Pollination Flight</text>
    </Frame>
  );
}

// 36. Why Leaves Change Color
export function LeavesColorChangeScene() {
  return (
    <Frame label="Why Leaves Change Color: Summer Green Chlorophyll to Autumn Golden Carotenoids and Red Anthocyanins">
      <defs>
        <linearGradient id="lcc-bg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="50%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="#0f172a" />
      {/* Leaf 1: Summer Green (Chlorophyll) */}
      <g transform="translate(80, 130)">
        <path d="M0 -60 Q-45 0 0 60 Q45 0 0 -60 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
        <line x1="0" y1="-55" x2="0" y2="55" stroke="#15803d" strokeWidth="2" />
        <text x="-35" y="80" fill="#86efac" fontSize="9" fontWeight="bold">Chlorophyll (Green)</text>
      </g>
      {/* Leaf 2: Early Autumn Yellow/Orange (Carotenoids) */}
      <g transform="translate(220, 130)">
        <path d="M0 -60 Q-45 0 0 60 Q45 0 0 -60 Z" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
        <line x1="0" y1="-55" x2="0" y2="55" stroke="#b45309" strokeWidth="2" />
        <text x="-40" y="80" fill="#fde047" fontSize="9" fontWeight="bold">Carotenoid (Orange)</text>
      </g>
      {/* Leaf 3: Peak Autumn Scarlet (Anthocyanins) */}
      <g transform="translate(360, 130)">
        <path d="M0 -60 Q-45 0 0 60 Q45 0 0 -60 Z" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
        <line x1="0" y1="-55" x2="0" y2="55" stroke="#991b1b" strokeWidth="2" />
        <text x="-45" y="80" fill="#fca5a5" fontSize="9" fontWeight="bold">Anthocyanin (Scarlet)</text>
      </g>
      {/* Labels */}
      <rect x="15" y="15" width="165" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#f8fafc" fontSize="10" fontWeight="bold">🍂 Photoperiod Unmasking</text>
    </Frame>
  );
}

// 37. How Fish Breathe Underwater
export function FishBreatheUnderwaterScene() {
  return (
    <Frame label="How Fish Breathe Underwater: Mouth Water Intake, Operculum Gill Flap, Countercurrent Blood Flow">
      <defs>
        <linearGradient id="fbu-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#082f49" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#fbu-water)" />
      {/* Fish Body Profile */}
      <g transform="translate(180, 130)">
        {/* Main Body */}
        <path d="M-110 0 Q-40 -60 60 -40 Q130 0 160 0 Q130 0 60 40 Q-40 60 -110 0 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
        {/* Tail Fin */}
        <polygon points="150,0 200,-35 185,0 200,35" fill="#0284c7" />
        {/* Eye */}
        <circle cx="-80" cy="-15" r="8" fill="#ffffff" />
        <circle cx="-80" cy="-15" r="4" fill="#000000" />
        {/* Mouth Open */}
        <path d="M-110 -5 L-130 0 L-110 8 Z" fill="#0284c7" />
        {/* Water Stream Entering Mouth */}
        <path d="M-160 0 L-130 0" stroke="#ffffff" strokeWidth="4" strokeDasharray="6,3" />
        {/* Exposed Gill Arches & Red Lamellae Filaments */}
        <g transform="translate(-30, -5)">
          <path d="M0 -25 Q15 0 0 25" stroke="#ef4444" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M10 -22 Q25 0 10 22" stroke="#dc2626" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M20 -18 Q35 0 20 18" stroke="#b91c1c" strokeWidth="6" fill="none" strokeLinecap="round" />
        </g>
        {/* Water Exiting Operculum */}
        <path d="M0 0 Q30 20 60 35" stroke="#bae6fd" strokeWidth="3" fill="none" strokeDasharray="4,3" />
      </g>
      {/* Labels */}
      <rect x="15" y="15" width="165" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#38bdf8" fontSize="10" fontWeight="bold">🐟 85% Countercurrent O2 Extraction</text>
    </Frame>
  );
}

// 38. How Birds Fly
export function BirdFlightScene() {
  return (
    <Frame label="How Birds Fly: Curved Airfoil Lift, Pectoralis Muscle Thrust, Hollow Honeycomb Bones">
      <defs>
        <linearGradient id="bf-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="60%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#bae6fd" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#bf-sky)" />
      {/* Soaring Bird in Flight (Eagle Silhouette / Anatomy) */}
      <g transform="translate(220, 130)">
        {/* Body & Head */}
        <ellipse cx="0" cy="0" rx="35" ry="14" fill="#334155" />
        <circle cx="-35" cy="-4" r="10" fill="#ffffff" />
        <polygon points="-45,-4 -55,-2 -45,2" fill="#facc15" />
        {/* Tail */}
        <polygon points="30,0 70,-18 70,18" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
        {/* Left Wing (Airfoil Curve) */}
        <path d="M-10 -5 Q-40 -75 -110 -65 Q-80 -20 0 5 Z" fill="#475569" />
        {/* Right Wing */}
        <path d="M-10 -5 Q40 -75 110 -65 Q80 -20 0 5 Z" fill="#334155" />
        {/* Aerodynamic Airflow Streamlines over Wing */}
        <path d="M-130 -80 Q-60 -95 10 -70" stroke="#ffffff" strokeWidth="2.5" fill="none" strokeDasharray="5,3" />
        <path d="M-130 -50 Q-60 -50 10 -40" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeDasharray="5,3" />
      </g>
      {/* Four Flight Forces Compass */}
      <g transform="translate(70, 70)">
        <line x1="0" y1="0" x2="0" y2="-25" stroke="#22c55e" strokeWidth="2.5" />
        <polygon points="-3,-25 0,-30 3,-25" fill="#22c55e" />
        <text x="5" y="-15" fill="#15803d" fontSize="9" fontWeight="bold">Lift</text>
        <line x1="0" y1="0" x2="-25" y2="0" stroke="#3b82f6" strokeWidth="2.5" />
        <polygon points="-25,-3 -30,0 -25,3" fill="#3b82f6" />
        <text x="-25" y="-6" fill="#1e3a8a" fontSize="9" fontWeight="bold">Thrust</text>
      </g>
      {/* Labels */}
      <rect x="250" y="15" width="175" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="257" y="29" fill="#f8fafc" fontSize="10" fontWeight="bold">🦅 Aerodynamic Cambered Airfoil</text>
    </Frame>
  );
}

// 39. How Animals Hibernate
export function AnimalHibernateScene() {
  return (
    <Frame label="How Animals Hibernate: Subterranean Winter Den, Slow Heart Rate, Brown Adipose Fat">
      <defs>
        <linearGradient id="hib-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="40%" stopColor="#334155" />
          <stop offset="41%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#292524" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#hib-bg)" />
      {/* Snow on Surface */}
      <rect x="0" y="95" width="440" height="15" fill="#f8fafc" />
      {/* Underground Burrow / Den Chamber */}
      <ellipse cx="220" cy="180" rx="110" ry="55" fill="#1c1917" stroke="#451a03" strokeWidth="3" />
      {/* Nesting Dry Leaves Bedding */}
      <ellipse cx="220" cy="205" rx="85" ry="18" fill="#a16207" opacity="0.8" />
      {/* Sleeping Curled Bear / Ground Squirrel */}
      <g transform="translate(220, 185)">
        <ellipse cx="0" cy="0" rx="45" ry="28" fill="#78350f" />
        <circle cx="-30" cy="-5" r="18" fill="#5c2606" />
        <circle cx="-38" cy="-16" r="5" fill="#451a03" />
        {/* Sleeping Eye Line */}
        <path d="M-36 -4 Q-32 -1 -28 -4" stroke="#ffffff" strokeWidth="1.5" fill="none" />
      </g>
      {/* Heart Rate Indicator */}
      <g transform="translate(60, 45)">
        <text x="0" y="0" fill="#fca5a5" fontSize="11" fontWeight="bold">❤️ Heart Rate: 4 bpm</text>
        <text x="0" y="16" fill="#93c5fd" fontSize="10" fontWeight="bold">🌡️ Temp: 2°C (Torpor)</text>
      </g>
      {/* Labels */}
      <rect x="250" y="15" width="175" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="257" y="29" fill="#fde68a" fontSize="10" fontWeight="bold">🐻 Deep Metabolic Torpor</text>
    </Frame>
  );
}

// 40. How Animals Migrate
export function AnimalMigrateScene() {
  return (
    <Frame label="How Animals Migrate: Global Flyway Navigation, Geomagnetic Sensing, Arctic Tern Flight">
      <defs>
        <linearGradient id="mig-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="60%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#mig-bg)" />
      {/* Earth Latitude Grid Curve */}
      <path d="M0 210 Q220 180 440 210 V260 H0 Z" fill="#047857" />
      {/* Migrating V-Formation Bird Flock */}
      <g stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round">
        {/* Lead Bird */}
        <path d="M220 70 L228 60 L236 70" />
        {/* Left Wing Flock */}
        <path d="M190 90 L198 80 L206 90" />
        <path d="M160 110 L168 100 L176 110" />
        <path d="M130 130 L138 120 L146 130" />
        {/* Right Wing Flock */}
        <path d="M250 90 L258 80 L266 90" />
        <path d="M280 110 L288 100 L296 110" />
        <path d="M310 130 L318 120 L326 130" />
      </g>
      {/* Magnetic Field Compass Lines */}
      <path d="M60 40 Q220 10 380 40" stroke="#facc15" strokeWidth="2" fill="none" strokeDasharray="6,4" />
      <text x="170" y="32" fill="#fef08a" fontSize="9" fontWeight="bold">🧲 Geomagnetic Flyway</text>
      {/* Labels */}
      <rect x="15" y="15" width="135" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#f8fafc" fontSize="10" fontWeight="bold">🧭 V-Formation Aerodynamics</text>
    </Frame>
  );
}

