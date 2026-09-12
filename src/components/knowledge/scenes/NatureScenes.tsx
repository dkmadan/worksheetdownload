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

// 11. How Volcanoes Erupt
export function VolcanoEruptScene() {
  return (
    <Frame label="How Volcanoes Erupt: Magma Chamber, Conduit Vent, Ash Cloud, Lava Flow">
      <defs>
        <linearGradient id="ve-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="40%" stopColor="#431407" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <linearGradient id="ve-magma" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#facc15" />
        </linearGradient>
        <radialGradient id="ve-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
          <stop offset="50%" stopColor="#f97316" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="440" height="260" fill="url(#ve-sky)" />
      {/* Ash and smoke explosion */}
      <circle cx="220" cy="45" r="45" fill="#475569" opacity="0.85" />
      <circle cx="180" cy="55" r="35" fill="#64748b" opacity="0.8" />
      <circle cx="260" cy="50" r="38" fill="#334155" opacity="0.9" />
      <circle cx="220" cy="25" r="28" fill="#1e293b" opacity="0.85" />
      <circle cx="220" cy="75" r="25" fill="url(#ve-glow)" />
      {/* Volcano Slopes */}
      <path d="M50 260 L195 90 L245 90 L390 260 Z" fill="#292524" />
      <path d="M90 260 L205 95 L235 95 L350 260 Z" fill="#44403c" />
      {/* Magma Conduit & Chamber */}
      <path d="M210 90 L210 200 Q210 245 150 245 Q220 260 290 245 Q230 245 230 200 L230 90 Z" fill="url(#ve-magma)" />
      {/* Flowing Lava Streams */}
      <path d="M200 95 Q170 140 140 260" stroke="#f97316" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M200 95 Q170 140 140 260" stroke="#fef08a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M240 95 Q270 150 290 260" stroke="#ef4444" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Lava Bombs */}
      <circle cx="160" cy="40" r="4" fill="#facc15" />
      <circle cx="280" cy="35" r="5" fill="#f97316" />
      <circle cx="205" cy="15" r="3.5" fill="#ef4444" />
      {/* Labels */}
      <rect x="25" y="15" width="95" height="22" rx="6" fill="#000000" fillOpacity="0.6" />
      <text x="32" y="30" fill="#fef08a" fontSize="10" fontWeight="bold">🌋 Ash Cloud</text>
      <rect x="315" y="195" width="105" height="22" rx="6" fill="#000000" fillOpacity="0.6" />
      <text x="322" y="210" fill="#f97316" fontSize="10" fontWeight="bold">🔥 Magma Chamber</text>
    </Frame>
  );
}

// 12. How Earthquakes Happen
export function EarthquakeScene() {
  return (
    <Frame label="How Earthquakes Happen: Tectonic Fault Line, Hypocenter, Epicenter, Seismic Waves">
      <defs>
        <linearGradient id="eq-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="35%" stopColor="#38bdf8" />
          <stop offset="36%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#292524" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#eq-bg)" />
      {/* Ground & Fault split */}
      <path d="M0 95 L200 95 L240 260 L0 260 Z" fill="#92400e" />
      <path d="M200 102 L440 102 L440 260 L240 260 Z" fill="#78350f" />
      {/* Houses on surface */}
      <g transform="translate(110, 65)">
        <rect x="0" y="10" width="30" height="20" fill="#f1f5f9" stroke="#334155" strokeWidth="1.5" />
        <path d="M-4 10 L15 -5 L34 10 Z" fill="#dc2626" />
      </g>
      <g transform="translate(290, 72) rotate(6)">
        <rect x="0" y="10" width="30" height="20" fill="#f1f5f9" stroke="#334155" strokeWidth="1.5" />
        <path d="M-4 10 L15 -5 L34 10 Z" fill="#2563eb" />
      </g>
      {/* Jagged Fault Line */}
      <path d="M200 95 L215 130 L195 165 L225 205 L210 260" stroke="#facc15" strokeWidth="4" fill="none" />
      {/* Hypocenter (Focus) & Radiating Seismic Waves */}
      <circle cx="210" cy="180" r="18" fill="none" stroke="#f97316" strokeWidth="2.5" opacity="0.9" />
      <circle cx="210" cy="180" r="38" fill="none" stroke="#fbbf24" strokeWidth="2.5" opacity="0.75" />
      <circle cx="210" cy="180" r="60" fill="none" stroke="#fef08a" strokeWidth="2" opacity="0.55" />
      <circle cx="210" cy="180" r="7" fill="#ef4444" />
      {/* Epicenter marker */}
      <circle cx="205" cy="95" r="5" fill="#facc15" />
      <line x1="205" y1="95" x2="210" y2="180" stroke="#facc15" strokeDasharray="3,3" strokeWidth="1.5" />
      {/* Labels */}
      <rect x="230" y="30" width="90" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="237" y="44" fill="#facc15" fontSize="10" fontWeight="bold">📍 Epicenter</text>
      <rect x="30" y="170" width="115" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="36" y="184" fill="#fca5a5" fontSize="10" fontWeight="bold">💥 Focus (Hypocenter)</text>
    </Frame>
  );
}

// 13. How Mountains Are Formed
export function MountainFormationScene() {
  return (
    <Frame label="How Mountains Are Formed: Tectonic Plate Collision, Folding Strata, Glacial Peaks">
      <defs>
        <linearGradient id="mf-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="60%" stopColor="#bae6fd" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#mf-sky)" />
      {/* Distant Mountains */}
      <path d="M60 170 L140 90 L220 170 Z" fill="#64748b" />
      <path d="M220 170 L300 80 L380 170 Z" fill="#475569" />
      {/* Foreground Folded Mountain Range */}
      <path d="M0 260 L90 140 L160 210 L240 70 L330 200 L440 110 L440 260 Z" fill="#334155" />
      {/* Snow Caps */}
      <path d="M240 70 L215 110 L230 105 L240 115 L255 105 L265 112 Z" fill="#ffffff" />
      <path d="M90 140 L75 165 L85 160 L90 168 L105 162 Z" fill="#ffffff" />
      <path d="M440 110 L415 145 L428 140 L440 148 Z" fill="#ffffff" />
      {/* Crustal Strata Compression Fold Lines */}
      <path d="M0 210 Q90 180 160 225 T300 190 T440 210" stroke="#f59e0b" strokeWidth="4" fill="none" />
      <path d="M0 230 Q90 200 160 245 T300 210 T440 230" stroke="#b45309" strokeWidth="4" fill="none" />
      <path d="M0 250 Q90 220 160 265 T300 230 T440 250" stroke="#78350f" strokeWidth="4" fill="none" />
      {/* Opposing tectonic arrows */}
      <g transform="translate(60, 235)">
        <line x1="0" y1="0" x2="40" y2="0" stroke="#fef08a" strokeWidth="4" />
        <polygon points="40,-6 52,0 40,6" fill="#fef08a" />
      </g>
      <g transform="translate(380, 235)">
        <line x1="0" y1="0" x2="-40" y2="0" stroke="#fef08a" strokeWidth="4" />
        <polygon points="-40,-6 -52,0 -40,6" fill="#fef08a" />
      </g>
      {/* Labels */}
      <rect x="15" y="15" width="145" height="22" rx="6" fill="#000000" fillOpacity="0.6" />
      <text x="22" y="30" fill="#ffffff" fontSize="10" fontWeight="bold">🏔️ Fold Mountain Orogeny</text>
    </Frame>
  );
}

// 14. The Water Cycle
export function WaterCycleScene() {
  return (
    <Frame label="The Water Cycle: Evaporation, Condensation, Precipitation, Runoff, Ocean Collection">
      <defs>
        <linearGradient id="wc-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="60%" stopColor="#bae6fd" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#wc-sky)" />
      {/* Sun */}
      <circle cx="60" cy="50" r="28" fill="#facc15" />
      <g stroke="#fbbf24" strokeWidth="2.5">
        <line x1="60" y1="12" x2="60" y2="4" />
        <line x1="60" y1="88" x2="60" y2="96" />
        <line x1="22" y1="50" x2="14" y2="50" />
        <line x1="98" y1="50" x2="106" y2="50" />
      </g>
      {/* Mountains & Landscape */}
      <path d="M220 260 L320 120 L440 260 Z" fill="#475569" />
      <path d="M320 120 L305 145 L320 140 L335 145 Z" fill="#ffffff" />
      <path d="M0 260 L0 180 Q100 170 200 210 L240 260 Z" fill="#16a34a" />
      <path d="M160 260 Q260 200 440 260 Z" fill="#0369a1" />
      {/* Rain Cloud */}
      <g transform="translate(310, 45)">
        <circle cx="0" cy="0" r="24" fill="#94a3b8" />
        <circle cx="25" cy="-5" r="28" fill="#64748b" />
        <circle cx="50" cy="0" r="22" fill="#94a3b8" />
        {/* Raindrops */}
        <line x1="0" y1="35" x2="-8" y2="55" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="3,3" />
        <line x1="25" y1="35" x2="17" y2="55" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="3,3" />
        <line x1="50" y1="35" x2="42" y2="55" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="3,3" />
      </g>
      {/* Evaporation Squiggles */}
      <g stroke="#38bdf8" strokeWidth="2.5" fill="none">
        <path d="M120 170 Q125 150 120 130 Q115 110 120 90" />
        <path d="M150 180 Q155 160 150 140 Q145 120 150 100" />
      </g>
      {/* Stage Badges */}
      <rect x="80" y="80" width="80" height="18" rx="4" fill="#0284c7" />
      <text x="86" y="93" fill="#ffffff" fontSize="9" fontWeight="bold">☀️ Evaporation</text>
      <rect x="290" y="15" width="90" height="18" rx="4" fill="#475569" />
      <text x="296" y="28" fill="#ffffff" fontSize="9" fontWeight="bold">🌧️ Precipitation</text>
    </Frame>
  );
}

// 15. How Caves Are Formed
export function CaveFormationScene() {
  return (
    <Frame label="How Caves Are Formed: Limestone Dissolution, Stalactites, Stalagmites, Underground River">
      <defs>
        <linearGradient id="cf-rock" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#cf-rock)" />
      {/* Cave Chamber Ceiling & Floor Cutouts */}
      <path d="M0 0 H440 V70 Q360 90 280 50 Q200 110 120 60 Q60 85 0 55 Z" fill="#334155" />
      <path d="M0 260 H440 V200 Q360 180 280 215 Q200 175 120 220 Q60 190 0 210 Z" fill="#334155" />
      {/* Stalactites (Ceiling) */}
      <polygon points="90,60 100,130 110,60" fill="#cbd5e1" />
      <polygon points="160,80 168,150 176,80" fill="#94a3b8" />
      <polygon points="250,55 258,125 266,55" fill="#cbd5e1" />
      <polygon points="340,70 348,160 356,70" fill="#94a3b8" />
      {/* Stalagmites (Floor) */}
      <polygon points="92,210 100,150 108,210" fill="#cbd5e1" />
      <polygon points="252,210 258,160 264,210" fill="#94a3b8" />
      <polygon points="342,205 348,160 354,205" fill="#cbd5e1" />
      {/* United Column */}
      <polygon points="162,80 168,200 174,80" fill="#e2e8f0" opacity="0.9" />
      {/* Underground River */}
      <path d="M0 235 Q120 215 240 240 T440 225 V260 H0 Z" fill="#0284c7" opacity="0.8" />
      {/* Water Drips */}
      <circle cx="100" cy="140" r="2.5" fill="#38bdf8" />
      <circle cx="258" cy="138" r="2.5" fill="#38bdf8" />
      {/* Labels */}
      <text x="35" y="45" fill="#f8fafc" fontSize="10" fontWeight="bold">⬇️ Stalactites (Hold Tight)</text>
      <text x="250" y="248" fill="#f8fafc" fontSize="10" fontWeight="bold">⬆️ Stalagmites (Grow Up)</text>
    </Frame>
  );
}

// 16. How Fossils Are Made
export function FossilFormationScene() {
  return (
    <Frame label="How Fossils Are Made: Ancient Creature Burial, Sediment Layers, Permineralization, Excavation">
      <defs>
        <linearGradient id="ff-rock" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="35%" stopColor="#a16207" />
          <stop offset="70%" stopColor="#713f12" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#ff-rock)" />
      {/* Strata Layers */}
      <line x1="0" y1="65" x2="440" y2="65" stroke="#ca8a04" strokeWidth="2.5" strokeDasharray="6,4" />
      <line x1="0" y1="135" x2="440" y2="135" stroke="#92400e" strokeWidth="3" strokeDasharray="8,4" />
      <line x1="0" y1="205" x2="440" y2="205" stroke="#581c87" strokeWidth="2.5" strokeDasharray="6,4" />
      {/* Embedded Dinosaur Fossil Skeleton */}
      <g transform="translate(180, 155)">
        {/* Skull */}
        <path d="M-40 -10 Q-20 -25 0 -15 Q10 0 -10 10 Q-30 15 -40 -10 Z" fill="#fef08a" />
        <circle cx="-25" cy="-5" r="3" fill="#451a03" />
        {/* Spine and Ribs */}
        <path d="M0 -15 Q60 -20 120 10" stroke="#fef08a" strokeWidth="4" fill="none" />
        <path d="M20 -15 L20 15 M40 -15 L40 15 M60 -10 L60 20 M80 -5 L80 20" stroke="#fef08a" strokeWidth="2.5" />
        {/* Leg Bones */}
        <path d="M70 10 L80 40 L95 45" stroke="#fef08a" strokeWidth="3.5" fill="none" />
        <path d="M25 5 L20 35 L10 40" stroke="#fef08a" strokeWidth="3" fill="none" />
      </g>
      {/* Ammonite Shell Fossil */}
      <g transform="translate(70, 95)">
        <circle cx="0" cy="0" r="22" fill="#d97706" stroke="#fef08a" strokeWidth="2" />
        <path d="M0 0 Q10 -15 0 -20 Q-15 -10 -10 10 Q5 15 12 0" fill="none" stroke="#fef08a" strokeWidth="2" />
      </g>
      {/* Labels */}
      <rect x="20" y="15" width="130" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="27" y="29" fill="#fef08a" fontSize="10" fontWeight="bold">🦖 Permineralized Fossil</text>
      <rect x="290" y="15" width="125" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="297" y="29" fill="#fde68a" fontSize="10" fontWeight="bold">⏳ Sedimentary Strata</text>
    </Frame>
  );
}

// 17. How Glaciers Shape the Land
export function GlacierLandformScene() {
  return (
    <Frame label="How Glaciers Shape the Land: U-Shaped Valleys, Horns, Moraines, Striations">
      <defs>
        <linearGradient id="gl-ice" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="#0f172a" />
      {/* Sharp Mountain Peaks (Horns) */}
      <polygon points="120,40 30,220 210,220" fill="#475569" />
      <polygon points="320,30 230,220 410,220" fill="#334155" />
      <polygon points="120,40 100,80 120,75 140,80" fill="#ffffff" />
      <polygon points="320,30 300,70 320,65 340,70" fill="#ffffff" />
      {/* Carving Glacial Ice Tongue in U-Shaped Valley */}
      <path d="M120 110 Q220 150 220 260 L160 260 Q160 170 80 140 Z" fill="url(#gl-ice)" opacity="0.9" />
      <path d="M320 100 Q220 150 220 260 L280 260 Q280 160 360 130 Z" fill="url(#gl-ice)" opacity="0.9" />
      {/* Terminal Moraine Deposits */}
      <ellipse cx="220" cy="255" rx="55" ry="12" fill="#78350f" />
      {/* Deep U-Valley Base Outline */}
      <path d="M40 220 Q220 260 400 220" stroke="#f59e0b" strokeWidth="3" fill="none" strokeDasharray="6,4" />
      {/* Labels */}
      <rect x="25" y="15" width="130" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="32" y="29" fill="#38bdf8" fontSize="10" fontWeight="bold">🏔️ Pyramidal Horn</text>
      <rect x="280" y="225" width="135" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="287" y="239" fill="#fde68a" fontSize="10" fontWeight="bold">🚜 U-Shaped Trough</text>
    </Frame>
  );
}

// 18. Why Oceans Are Salty
export function OceanSalinityScene() {
  return (
    <Frame label="Why Oceans Are Salty: Mineral Weathering, River Runoff, Hydrothermal Vents, Evaporation">
      <defs>
        <linearGradient id="os-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="45%" stopColor="#93c5fd" />
          <stop offset="46%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#0c4a6e" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#os-sky)" />
      {/* Sun Evaporating Water */}
      <circle cx="370" cy="45" r="24" fill="#facc15" />
      {/* Land & Mountain */}
      <path d="M0 120 L80 60 L180 120 L0 120 Z" fill="#64748b" />
      {/* River Runoff with mineral ions */}
      <path d="M80 60 Q120 100 160 120" stroke="#38bdf8" strokeWidth="5" fill="none" />
      <circle cx="110" cy="85" r="3" fill="#facc15" />
      <circle cx="140" cy="105" r="3" fill="#ef4444" />
      {/* Ocean floor & Undersea Volcano/Vent */}
      <path d="M0 260 L140 230 L220 260 L440 240 V260 H0 Z" fill="#1e293b" />
      <polygon points="130,260 140,225 150,260" fill="#475569" />
      <path d="M140 225 Q135 190 140 160" stroke="#f97316" strokeWidth="3" fill="none" />
      {/* Salt Crystal Molecules floating (NaCl) */}
      <g transform="translate(240, 160)">
        <circle cx="0" cy="0" r="10" fill="#3b82f6" />
        <text x="-7" y="4" fill="#ffffff" fontSize="9" fontWeight="bold">Na+</text>
        <circle cx="22" cy="0" r="12" fill="#22c55e" />
        <text x="16" y="4" fill="#ffffff" fontSize="9" fontWeight="bold">Cl-</text>
      </g>
      <g transform="translate(320, 195)">
        <circle cx="0" cy="0" r="9" fill="#3b82f6" />
        <text x="-6" y="3" fill="#ffffff" fontSize="8" fontWeight="bold">Na+</text>
        <circle cx="18" cy="0" r="11" fill="#22c55e" />
        <text x="13" y="4" fill="#ffffff" fontSize="8" fontWeight="bold">Cl-</text>
      </g>
      {/* Labels */}
      <rect x="15" y="15" width="135" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#ffffff" fontSize="10" fontWeight="bold">🏞️ River Mineral Inflow</text>
      <rect x="230" y="15" width="115" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="237" y="29" fill="#facc15" fontSize="10" fontWeight="bold">☀️ Pure H2O Evap</text>
    </Frame>
  );
}

// 19. How Beaches Are Formed
export function BeachFormationScene() {
  return (
    <Frame label="How Beaches Are Formed: Cliff Erosion, Longshore Drift, Wave Swash and Sand Dunes">
      <defs>
        <linearGradient id="bf-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="45%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#fef08a" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#bf-sky)" />
      {/* Coastal Headland Cliff */}
      <path d="M0 0 H90 V140 Q70 170 40 260 H0 Z" fill="#78350f" />
      {/* Golden Sandy Beach Berm */}
      <path d="M40 260 Q180 180 340 140 L440 140 V260 H40 Z" fill="#fde047" />
      {/* Ocean Waters & Rolling Breaking Waves */}
      <path d="M90 140 Q220 130 440 110 V160 Q260 175 140 260 H90 Z" fill="#0284c7" opacity="0.85" />
      <path d="M140 170 Q240 155 380 135" stroke="#ffffff" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M170 210 Q280 190 420 165" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Sand Dunes with Marram Grass */}
      <g transform="translate(360, 190)">
        <ellipse cx="30" cy="20" rx="45" ry="18" fill="#eab308" />
        <path d="M15 10 L10 -10 M25 8 L30 -12 M35 12 L45 -8" stroke="#16a34a" strokeWidth="2.5" />
      </g>
      {/* Longshore Drift Arrow */}
      <g transform="translate(220, 230) rotate(-25)">
        <line x1="0" y1="0" x2="50" y2="0" stroke="#dc2626" strokeWidth="3" />
        <polygon points="50,-5 60,0 50,5" fill="#dc2626" />
        <text x="-5" y="-6" fill="#dc2626" fontSize="8" fontWeight="bold">Longshore Drift</text>
      </g>
      {/* Labels */}
      <rect x="15" y="15" width="115" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#ffffff" fontSize="10" fontWeight="bold">🏖️ Swash & Dunes</text>
    </Frame>
  );
}

// 20. Inside the Layers of the Earth
export function EarthLayersScene() {
  return (
    <Frame label="Inside the Layers of the Earth: Crust, Mantle, Outer Core, Inner Core">
      <defs>
        <radialGradient id="el-inner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fef08a" />
        </radialGradient>
      </defs>
      <rect width="440" height="260" fill="#090d16" />
      {/* Earth Concentric Spheres (Cutaway view) */}
      <g transform="translate(220, 130)">
        {/* Crust & Atmosphere Outer Ring */}
        <circle cx="0" cy="0" r="115" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
        {/* Continental Crust patches */}
        <path d="M-80 -60 Q-40 -110 0 -90 Q50 -100 80 -60 Q110 0 70 60 Q0 100 -70 60 Z" fill="#15803d" />
        {/* Cutaway quadrant */}
        <path d="M0 0 L115 0 A115 115 0 0 1 0 115 Z" fill="#78350f" />
        {/* Mantle */}
        <path d="M0 0 L95 0 A95 95 0 0 1 0 95 Z" fill="#ea580c" />
        {/* Outer Core (Molten Iron) */}
        <path d="M0 0 L60 0 A60 60 0 0 1 0 60 Z" fill="#f59e0b" />
        {/* Inner Core (Solid Iron Sphere) */}
        <path d="M0 0 L25 0 A25 25 0 0 1 0 25 Z" fill="url(#el-inner)" />
      </g>
      {/* Layer Annotations */}
      <g fill="#ffffff" fontSize="9" fontWeight="bold">
        <text x="315" y="55">🌍 Crust (0–70 km)</text>
        <text x="315" y="110">🔥 Mantle (2,900 km)</text>
        <text x="315" y="165">🌊 Outer Core (Liquid)</text>
        <text x="315" y="215">☀️ Inner Core (Solid)</text>
      </g>
      <g stroke="#ffffff" strokeWidth="1" strokeDasharray="2,2">
        <line x1="310" y1="52" x2="260" y2="60" />
        <line x1="310" y1="107" x2="270" y2="150" />
        <line x1="310" y1="162" x2="250" y2="160" />
        <line x1="310" y1="212" x2="230" y2="145" />
      </g>
    </Frame>
  );
}

