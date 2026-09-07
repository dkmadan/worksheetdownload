import React from "react";

const VB = "0 0 440 260";

export function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg
      viewBox={VB}
      className="w-full h-full object-cover"
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid slice"
    >
      {children}
    </svg>
  );
}

// 1. The Rock Cycle
export function RockCycleScene() {
  return (
    <Frame label="The Rock Cycle: Volcano, Magma, Metamorphic and Sedimentary Layers">
      <defs>
        <linearGradient id="rc-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <linearGradient id="rc-magma" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#eab308" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#rc-sky)" />
      {/* Volcano Peak */}
      <path d="M20 260 L120 80 L220 260 Z" fill="#451a03" />
      <path d="M105 80 L120 110 L135 80 L120 50 Z" fill="url(#rc-magma)" />
      <circle cx="120" cy="45" r="14" fill="#fbbf24" opacity="0.85" />
      {/* Lava flows */}
      <path d="M120 80 Q100 130 90 200" stroke="#f97316" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M120 80 Q140 140 150 210" stroke="#ef4444" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      {/* Sedimentary strata */}
      <rect x="200" y="130" width="240" height="32" fill="#ca8a04" />
      <rect x="200" y="162" width="240" height="34" fill="#a16207" />
      <rect x="200" y="196" width="240" height="64" fill="#713f12" />
      {/* Ocean water eroding cliff */}
      <path d="M200 130 Q280 115 360 130 T440 130 V260 H200 Z" fill="#0284c7" opacity="0.65" />
      {/* Magma chamber under crust */}
      <path d="M0 220 Q120 195 240 225 T440 215 V260 H0 Z" fill="url(#rc-magma)" opacity="0.8" />
      {/* Dynamic labels */}
      <text x="35" y="240" fill="#ffffff" fontSize="11" fontWeight="bold">🌋 Igneous</text>
      <text x="240" y="180" fill="#ffffff" fontSize="11" fontWeight="bold">🏖️ Sedimentary</text>
      <text x="310" y="240" fill="#ffffff" fontSize="11" fontWeight="bold">🔥 Metamorphic</text>
    </Frame>
  );
}

// 2. The Food Chain
export function FoodChainScene() {
  return (
    <Frame label="The Food Chain: Sun to Plant to Grasshopper to Frog to Snake to Hawk">
      <defs>
        <linearGradient id="fc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#fc-bg)" />
      {/* Sun */}
      <circle cx="45" cy="45" r="24" fill="#fde047" />
      <circle cx="45" cy="45" r="32" fill="#fef08a" opacity="0.3" />
      {/* Step 1: Plant */}
      <g transform="translate(55, 170)">
        <path d="M0 45 Q18 10 25 -25 Q0 -8 -15 0 Z" fill="#86efac" />
        <path d="M0 45 Q-18 10 -25 -15 Q0 -5 10 0 Z" fill="#4ade80" />
        <text x="-20" y="60" fill="#ffffff" fontSize="10" fontWeight="bold">1. Plant</text>
      </g>
      {/* Step 2: Herbivore (Caterpillar/Insect) */}
      <g transform="translate(150, 140)">
        <ellipse cx="0" cy="0" rx="16" ry="9" fill="#a3e635" />
        <circle cx="12" cy="-3" r="5" fill="#65a30d" />
        <text x="-25" y="45" fill="#ffffff" fontSize="10" fontWeight="bold">2. Insect</text>
      </g>
      {/* Step 3: Frog */}
      <g transform="translate(245, 120)">
        <ellipse cx="0" cy="0" rx="19" ry="13" fill="#22c55e" />
        <circle cx="-8" cy="-8" r="5" fill="#15803d" />
        <circle cx="8" cy="-8" r="5" fill="#15803d" />
        <text x="-22" y="45" fill="#ffffff" fontSize="10" fontWeight="bold">3. Frog</text>
      </g>
      {/* Step 4: Hawk */}
      <g transform="translate(365, 75)">
        <path d="M-28 0 Q0 -22 28 0 Q10 14 0 18 Q-10 14 -28 0 Z" fill="#f59e0b" />
        <circle cx="0" cy="-4" r="7" fill="#d97706" />
        <text x="-25" y="40" fill="#ffffff" fontSize="10" fontWeight="bold">4. Hawk</text>
      </g>
      {/* Arrows */}
      <path d="M75 160 Q110 140 130 140" stroke="#fef08a" strokeWidth="3" fill="none" strokeDasharray="3 5" />
      <path d="M175 135 Q205 120 220 120" stroke="#fef08a" strokeWidth="3" fill="none" strokeDasharray="3 5" />
      <path d="M275 110 Q315 80 335 75" stroke="#fef08a" strokeWidth="3" fill="none" strokeDasharray="3 5" />
    </Frame>
  );
}

// 3. The Food Web
export function FoodWebScene() {
  return (
    <Frame label="The Food Web: Interconnected Network of Organisms">
      <defs>
        <linearGradient id="fw-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#115e59" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#fw-bg)" />
      {/* Center Web Node Network */}
      <g stroke="#ccfbf1" strokeWidth="1.5" strokeDasharray="2 4" opacity="0.7">
        <line x1="80" y1="200" x2="160" y2="130" />
        <line x1="80" y1="200" x2="220" y2="190" />
        <line x1="160" y1="130" x2="280" y2="90" />
        <line x1="160" y1="130" x2="320" y2="160" />
        <line x1="220" y1="190" x2="320" y2="160" />
        <line x1="280" y1="90" x2="380" y2="110" />
        <line x1="320" y1="160" x2="380" y2="110" />
      </g>
      {/* Organism Badges */}
      <g transform="translate(80, 200)">
        <circle cx="0" cy="0" r="22" fill="#14b8a6" stroke="#ffffff" strokeWidth="2" />
        <text x="-12" y="5" fontSize="16">🌿</text>
        <text x="-15" y="34" fill="#ffffff" fontSize="10" fontWeight="bold">Plants</text>
      </g>
      <g transform="translate(160, 130)">
        <circle cx="0" cy="0" r="20" fill="#0f766e" stroke="#ffffff" strokeWidth="2" />
        <text x="-10" y="5" fontSize="15">🐛</text>
        <text x="-15" y="32" fill="#ffffff" fontSize="10" fontWeight="bold">Insects</text>
      </g>
      <g transform="translate(220, 190)">
        <circle cx="0" cy="0" r="20" fill="#0f766e" stroke="#ffffff" strokeWidth="2" />
        <text x="-10" y="5" fontSize="15">🐇</text>
        <text x="-15" y="32" fill="#ffffff" fontSize="10" fontWeight="bold">Rabbit</text>
      </g>
      <g transform="translate(280, 90)">
        <circle cx="0" cy="0" r="22" fill="#134e4a" stroke="#ffffff" strokeWidth="2" />
        <text x="-12" y="5" fontSize="16">🐸</text>
        <text x="-12" y="34" fill="#ffffff" fontSize="10" fontWeight="bold">Frog</text>
      </g>
      <g transform="translate(320, 160)">
        <circle cx="0" cy="0" r="20" fill="#134e4a" stroke="#ffffff" strokeWidth="2" />
        <text x="-10" y="5" fontSize="15">🦊</text>
        <text x="-10" y="32" fill="#ffffff" fontSize="10" fontWeight="bold">Fox</text>
      </g>
      <g transform="translate(380, 110)">
        <circle cx="0" cy="0" r="24" fill="#042f2e" stroke="#fde047" strokeWidth="2.5" />
        <text x="-14" y="6" fontSize="18">🦅</text>
        <text x="-14" y="36" fill="#fde047" fontSize="10" fontWeight="bold">Eagle</text>
      </g>
      <text x="140" y="40" fill="#ffffff" fontSize="14" fontWeight="black">Interconnected Food Web</text>
    </Frame>
  );
}

// 4. The Carbon Cycle
export function CarbonCycleScene() {
  return (
    <Frame label="The Carbon Cycle: Photosynthesis, Respiration, Factories, Ocean Absorption">
      <defs>
        <linearGradient id="cc-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#cc-bg)" />
      {/* Atmosphere CO2 bubble */}
      <g transform="translate(220, 50)">
        <ellipse cx="0" cy="0" rx="60" ry="22" fill="#ffffff" opacity="0.2" />
        <text x="-24" y="5" fill="#ffffff" fontSize="15" fontWeight="black">CO₂ in Air</text>
      </g>
      {/* Tree (Photosynthesis / Absorbs CO2) */}
      <g transform="translate(80, 170)">
        <rect x="-8" y="0" width="16" height="50" fill="#78350f" />
        <circle cx="0" cy="-20" r="35" fill="#22c55e" />
        <text x="-35" y="70" fill="#86efac" fontSize="11" fontWeight="bold">Photosynthesis ⬇️</text>
      </g>
      {/* Factory / Animal (Releases CO2) */}
      <g transform="translate(240, 180)">
        <rect x="-25" y="0" width="50" height="40" fill="#475569" />
        <rect x="0" y="-30" width="14" height="30" fill="#334155" />
        <circle cx="7" cy="-40" r="10" fill="#94a3b8" opacity="0.6" />
        <text x="-25" y="60" fill="#fca5a5" fontSize="11" fontWeight="bold">Emission ⬆️</text>
      </g>
      {/* Ocean / Fossil Fuel */}
      <g transform="translate(360, 190)">
        <path d="M-40 0 Q0 -10 40 0 V40 H-40 Z" fill="#0284c7" />
        <text x="-35" y="30" fill="#bae6fd" fontSize="10" fontWeight="bold">Ocean Sink</text>
      </g>
      {/* Cycle arrows */}
      <path d="M170 50 Q90 90 85 130" stroke="#86efac" strokeWidth="3" fill="none" strokeDasharray="3 4" />
      <path d="M245 140 Q250 90 220 75" stroke="#fca5a5" strokeWidth="3" fill="none" strokeDasharray="3 4" />
    </Frame>
  );
}

// 5. The Nitrogen Cycle
export function NitrogenCycleScene() {
  return (
    <Frame label="The Nitrogen Cycle: Lightning, Soil Bacteria, Plant Roots, Nitrates">
      <defs>
        <linearGradient id="nc-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="50%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#0c4a6e" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#nc-bg)" />
      {/* Nitrogen in Air */}
      <text x="140" y="35" fill="#e0f2fe" fontSize="15" fontWeight="black">78% N₂ Gas in Atmosphere</text>
      {/* Lightning bolt */}
      <path d="M80 40 L65 90 L85 90 L60 140" stroke="#fde047" strokeWidth="4" fill="none" strokeLinecap="round" />
      <text x="95" y="90" fill="#fde047" fontSize="11" fontWeight="bold">Lightning Fixation</text>
      {/* Soil Horizon */}
      <rect x="0" y="140" width="440" height="120" fill="#582f0e" />
      <rect x="0" y="140" width="440" height="12" fill="#7f4f24" />
      {/* Plant Roots with Rhizobium Nodules */}
      <g transform="translate(280, 140)">
        {/* Above ground stem */}
        <path d="M0 0 L0 -45 M0 -25 Q-20 -40 -25 -25 M0 -15 Q20 -30 25 -15" stroke="#22c55e" strokeWidth="4" fill="none" />
        {/* Roots */}
        <path d="M0 0 Q-15 30 -30 60 M0 0 Q15 30 30 60 M0 0 L0 70" stroke="#fef08a" strokeWidth="2.5" fill="none" />
        {/* Pink Nodules */}
        <circle cx="-15" cy="30" r="5" fill="#f43f5e" />
        <circle cx="15" cy="30" r="5" fill="#f43f5e" />
        <circle cx="0" cy="45" r="5" fill="#f43f5e" />
        <text x="-70" y="90" fill="#fef08a" fontSize="10" fontWeight="bold">Root Nodules (Rhizobium)</text>
      </g>
    </Frame>
  );
}

// 6. The Water Pollution Journey
export function WaterPollutionScene() {
  return (
    <Frame label="The Water Pollution Journey: Storm drain runoff, wetland filter, ocean cleanup">
      <defs>
        <linearGradient id="wp-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#wp-sky)" />
      {/* City Street */}
      <rect x="0" y="100" width="120" height="160" fill="#334155" />
      <rect x="10" y="120" width="15" height="20" fill="#fde047" opacity="0.6" />
      <rect x="40" y="120" width="15" height="20" fill="#fde047" opacity="0.6" />
      <path d="M120 150 Q180 180 260 160 T440 180 V260 H120 Z" fill="#0f766e" />
      {/* Polluted Stream flowing into wetlands */}
      <path d="M120 160 Q160 190 200 170" stroke="#854d0e" strokeWidth="12" fill="none" />
      <circle cx="160" cy="180" r="4" fill="#eab308" />
      {/* Wetland reeds filtering */}
      <g transform="translate(240, 160)">
        <line x1="0" y1="0" x2="-5" y2="-30" stroke="#15803d" strokeWidth="3" />
        <line x1="10" y1="5" x2="10" y2="-35" stroke="#16a34a" strokeWidth="3" />
        <line x1="20" y1="0" x2="25" y2="-28" stroke="#15803d" strokeWidth="3" />
        <text x="-20" y="30" fill="#ffffff" fontSize="10" fontWeight="bold">Wetland Filter</text>
      </g>
      {/* Clean Ocean */}
      <g transform="translate(360, 170)">
        <path d="M0 0 Q40 -10 80 0 V90 H0 Z" fill="#0284c7" />
        <text x="15" y="45" fill="#ffffff" fontSize="10" fontWeight="bold">Clean Ocean</text>
      </g>
    </Frame>
  );
}

// 7. How Rivers Are Formed
export function RiverFormationScene() {
  return (
    <Frame label="How Rivers Are Formed: Mountain glaciers, winding meanders, river delta">
      <defs>
        <linearGradient id="rf-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="40%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#rf-bg)" />
      {/* Mountains */}
      <path d="M0 120 L80 30 L160 120 Z" fill="#64748b" />
      <path d="M60 55 L80 30 L100 55 Z" fill="#ffffff" />
      <path d="M120 120 L190 45 L260 120 Z" fill="#475569" />
      <path d="M175 60 L190 45 L205 60 Z" fill="#ffffff" />
      {/* River flowing down and meandering */}
      <path
        d="M80 50 Q100 110 120 130 Q160 150 140 180 Q110 210 200 210 Q300 210 340 230 L440 260"
        stroke="#0284c7"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
      />
      <text x="30" y="80" fill="#ffffff" fontSize="10" fontWeight="bold">1. Source</text>
      <text x="60" y="175" fill="#ffffff" fontSize="10" fontWeight="bold">2. Meander S-Curve</text>
      <text x="320" y="245" fill="#ffffff" fontSize="10" fontWeight="bold">3. Delta</text>
    </Frame>
  );
}

// 8. The Journey of a Raindrop
export function RaindropJourneyScene() {
  return (
    <Frame label="The Journey of a Raindrop: Sun, cloud, falling drop, river return">
      <defs>
        <linearGradient id="rd-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#rd-sky)" />
      {/* Glowing cute large raindrop */}
      <g transform="translate(220, 110)">
        <path d="M0 -50 C25 -10 35 15 35 30 C35 55 -35 55 -35 30 C-35 15 -25 -10 0 -50 Z" fill="#38bdf8" stroke="#ffffff" strokeWidth="3" />
        {/* Shine highlight */}
        <ellipse cx="14" cy="20" rx="6" ry="12" fill="#ffffff" opacity="0.6" transform="rotate(25 14 20)" />
        {/* Happy face */}
        <circle cx="-10" cy="25" r="3" fill="#0c4a6e" />
        <circle cx="6" cy="25" r="3" fill="#0c4a6e" />
        <path d="M-6 34 Q-2 40 2 34" stroke="#0c4a6e" strokeWidth="2" fill="none" />
      </g>
      {/* Cloud above */}
      <g transform="translate(100, 50)">
        <ellipse cx="0" cy="0" rx="35" ry="18" fill="#ffffff" />
        <ellipse cx="25" cy="5" rx="25" ry="14" fill="#ffffff" />
      </g>
      {/* Sea below */}
      <path d="M0 210 Q110 195 220 210 T440 210 V260 H0 Z" fill="#0284c7" />
      <text x="150" y="240" fill="#ffffff" fontSize="12" fontWeight="bold">Ocean Return Loop 🔁</text>
    </Frame>
  );
}

// 9. How Soil Is Made
export function SoilMadeScene() {
  return (
    <Frame label="How Soil Is Made: Horizons, Humus, Earthworms, Rock Breakdown">
      <defs>
        <linearGradient id="sm-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#sm-sky)" />
      {/* Soil Layers */}
      <rect x="0" y="80" width="440" height="25" fill="#451a03" />
      <rect x="0" y="105" width="440" height="50" fill="#78350f" />
      <rect x="0" y="155" width="440" height="55" fill="#a16207" />
      <rect x="0" y="210" width="440" height="50" fill="#57534e" />
      {/* Earthworm */}
      <path d="M220 130 Q240 115 260 130 T300 130" stroke="#f472b6" strokeWidth="7" fill="none" strokeLinecap="round" />
      {/* Plant Roots */}
      <path d="M100 80 Q110 120 90 140 M100 100 Q120 130 130 150" stroke="#fef08a" strokeWidth="2.5" fill="none" />
      {/* Labels */}
      <text x="15" y="100" fill="#fef08a" fontSize="10" fontWeight="bold">O Horizon: Leaf Litter</text>
      <text x="15" y="135" fill="#ffffff" fontSize="10" fontWeight="bold">A Horizon: Topsoil (Humus)</text>
      <text x="15" y="185" fill="#ffffff" fontSize="10" fontWeight="bold">B Horizon: Subsoil</text>
      <text x="15" y="240" fill="#ffffff" fontSize="10" fontWeight="bold">C Horizon: Bedrock</text>
    </Frame>
  );
}

// 10. The Life of a Tree
export function TreeLifeScene() {
  return (
    <Frame label="The Life of a Tree: Seedling, Growth Rings, Mature Canopy, Nurse Log">
      <defs>
        <linearGradient id="tl-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="60%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#tl-bg)" />
      {/* Giant Tree Trunk & Canopy */}
      <g transform="translate(240, 140)">
        <rect x="-25" y="0" width="50" height="120" fill="#78350f" />
        <circle cx="0" cy="-40" r="70" fill="#16a34a" />
        <circle cx="-40" cy="-30" r="45" fill="#15803d" />
        <circle cx="40" cy="-30" r="45" fill="#15803d" />
      </g>
      {/* Tree Cross Section Rings */}
      <g transform="translate(80, 160)">
        <circle cx="0" cy="0" r="40" fill="#d97706" stroke="#78350f" strokeWidth="3" />
        <circle cx="0" cy="0" r="30" fill="none" stroke="#92400e" strokeWidth="2" />
        <circle cx="0" cy="0" r="20" fill="none" stroke="#92400e" strokeWidth="2" />
        <circle cx="0" cy="0" r="10" fill="none" stroke="#92400e" strokeWidth="2" />
        <text x="-25" y="55" fill="#ffffff" fontSize="10" fontWeight="bold">Annual Rings</text>
      </g>
      {/* Small Sprout */}
      <g transform="translate(370, 210)">
        <path d="M0 20 L0 0 M0 5 Q-15 -5 -15 -15 M0 5 Q15 -5 15 -15" stroke="#86efac" strokeWidth="3" fill="none" />
        <text x="-15" y="35" fill="#ffffff" fontSize="9" fontWeight="bold">Seedling</text>
      </g>
    </Frame>
  );
}
