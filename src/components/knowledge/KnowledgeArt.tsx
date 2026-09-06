import React from "react";

/**
 * Hand-drawn-style SVG scenes for knowledge articles. Rendered large in the
 * article hero and scaled down inside the index tiles. Pure SVG with rich gradients and vector shapes.
 */
interface Props {
  slug: string;
  className?: string;
}

const VB = "0 0 440 260";

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
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

// ─────────────────────────────────────────────────────────────────────────────
// Category Specialized Illustrations
// ─────────────────────────────────────────────────────────────────────────────

function RockCycleScene() {
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
      {/* Mountain / Volcano */}
      <path d="M40 260 L140 90 L240 260 Z" fill="#451a03" />
      <path d="M125 90 L140 120 L155 90 L140 60 Z" fill="url(#rc-magma)" />
      <circle cx="140" cy="50" r="16" fill="#fbbf24" opacity="0.8" />
      <line x1="140" y1="60" x2="110" y2="150" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
      <line x1="140" y1="60" x2="170" y2="160" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
      {/* Sedimentary strata */}
      <rect x="220" y="140" width="220" height="30" fill="#ca8a04" opacity="0.85" />
      <rect x="220" y="170" width="220" height="35" fill="#a16207" opacity="0.9" />
      <rect x="220" y="205" width="220" height="55" fill="#713f12" />
      {/* Wave / Water erosion */}
      <path d="M220 140 Q280 125 340 140 T440 140 V260 H220 Z" fill="#0284c7" opacity="0.6" />
      {/* Magma chamber under */}
      <path d="M0 220 Q120 200 240 230 T440 220 V260 H0 Z" fill="url(#rc-magma)" opacity="0.7" />
      {/* Cycle arrows */}
      <path d="M140 180 C180 150 260 110 320 120" fill="none" stroke="#fef08a" strokeWidth="4" strokeDasharray="3 7" />
      <text x="320" y="110" fill="#ffffff" fontSize="13" fontWeight="bold">Erosion</text>
      <text x="70" y="245" fill="#ffffff" fontSize="13" fontWeight="bold">Igneous</text>
      <text x="310" y="195" fill="#ffffff" fontSize="13" fontWeight="bold">Sedimentary</text>
    </Frame>
  );
}

function FoodChainWebScene() {
  return (
    <Frame label="Food Chain and Food Web: Sun, Plant, Grasshopper, Frog, Hawk">
      <defs>
        <linearGradient id="fc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#fc-bg)" />
      {/* Glowing sun */}
      <circle cx="50" cy="50" r="28" fill="#fde047" />
      <circle cx="50" cy="50" r="36" fill="#fef08a" opacity="0.3" />
      {/* Plant */}
      <g transform="translate(60, 180)">
        <path d="M0 40 Q20 10 30 -30 Q0 -10 -20 0 Z" fill="#86efac" />
        <path d="M0 40 Q-20 10 -30 -20 Q0 -5 10 0 Z" fill="#4ade80" />
        <text x="-15" y="60" fill="#ffffff" fontSize="12" fontWeight="bold">Producer</text>
      </g>
      {/* Primary Consumer (Insect) */}
      <g transform="translate(160, 140)">
        <ellipse cx="0" cy="0" rx="18" ry="10" fill="#a3e635" />
        <circle cx="14" cy="-3" r="6" fill="#65a30d" />
        <path d="M-10 10 L-18 24 M0 10 L0 26 M10 10 L18 24" stroke="#4d7c0f" strokeWidth="2.5" />
        <text x="-25" y="45" fill="#ffffff" fontSize="12" fontWeight="bold">Herbivore</text>
      </g>
      {/* Secondary Consumer (Frog) */}
      <g transform="translate(270, 120)">
        <ellipse cx="0" cy="0" rx="22" ry="15" fill="#22c55e" />
        <circle cx="-10" cy="-10" r="6" fill="#15803d" />
        <circle cx="10" cy="-10" r="6" fill="#15803d" />
        <text x="-25" y="45" fill="#ffffff" fontSize="12" fontWeight="bold">Carnivore</text>
      </g>
      {/* Apex Predator (Eagle/Hawk) */}
      <g transform="translate(380, 70)">
        <path d="M-30 0 Q0 -25 30 0 Q10 15 0 20 Q-10 15 -30 0 Z" fill="#f59e0b" />
        <circle cx="0" cy="-5" r="8" fill="#d97706" />
        <text x="-20" y="40" fill="#ffffff" fontSize="12" fontWeight="bold">Apex Predator</text>
      </g>
      {/* Energy Flow Arrows */}
      <path d="M80 70 Q120 100 140 130" stroke="#fef08a" strokeWidth="3" strokeDasharray="3 5" fill="none" />
      <path d="M185 130 Q220 110 245 120" stroke="#fef08a" strokeWidth="3" strokeDasharray="3 5" fill="none" />
      <path d="M295 110 Q330 80 355 75" stroke="#fef08a" strokeWidth="3" strokeDasharray="3 5" fill="none" />
    </Frame>
  );
}

function WeatherCloudsRainScene() {
  return (
    <Frame label="Weather: Clouds, Thunderstorm, Rain and Rainbow">
      <defs>
        <linearGradient id="wr-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="60%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#wr-sky)" />
      {/* Sun peeking */}
      <circle cx="80" cy="70" r="35" fill="#fde047" />
      {/* White Cloud */}
      <g transform="translate(130, 70)">
        <ellipse cx="0" cy="0" rx="45" ry="25" fill="#ffffff" />
        <ellipse cx="35" cy="5" rx="30" ry="20" fill="#ffffff" />
        <ellipse cx="-30" cy="10" rx="25" ry="18" fill="#ffffff" />
      </g>
      {/* Dark Storm Cloud */}
      <g transform="translate(310, 85)">
        <ellipse cx="0" cy="0" rx="55" ry="30" fill="#475569" />
        <ellipse cx="40" cy="5" rx="38" ry="24" fill="#334155" />
        <ellipse cx="-35" cy="10" rx="32" ry="22" fill="#334155" />
        {/* Lightning */}
        <path d="M-10 25 L-25 60 L-10 60 L-20 95" stroke="#fef08a" strokeWidth="4" fill="none" strokeLinecap="round" />
      </g>
      {/* Rain streaks */}
      {[270, 295, 320, 345, 370].map((x, i) => (
        <line key={i} x1={x} y1="130" x2={x - 15} y2="200" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 12" />
      ))}
      {/* Green ground */}
      <path d="M0 220 Q110 200 220 215 T440 210 V260 H0 Z" fill="#16a34a" />
    </Frame>
  );
}

function SpaceCosmicScene() {
  return (
    <Frame label="Space: Sun, Earth Orbit, Moon Phases and Distant Stars">
      <defs>
        <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="60%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#dc2626" />
        </radialGradient>
        <linearGradient id="space-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#090d16" />
          <stop offset="50%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#311042" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#space-bg)" />
      {/* Stars */}
      {[...Array(35)].map((_, i) => (
        <circle key={i} cx={(i * 37) % 440} cy={(i * 23) % 260} r={(i % 3) * 0.8 + 0.8} fill="#ffffff" opacity={0.6 + (i % 4) * 0.1} />
      ))}
      {/* Glowing Sun */}
      <circle cx="80" cy="130" r="50" fill="url(#sun-glow)" />
      <circle cx="80" cy="130" r="65" fill="#f59e0b" opacity="0.25" />
      {/* Orbit ellipse */}
      <ellipse cx="230" cy="130" rx="160" ry="60" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 8" opacity="0.6" />
      {/* Earth */}
      <g transform="translate(340, 130)">
        <circle cx="0" cy="0" r="24" fill="#0284c7" />
        <path d="M-10 -10 Q0 -5 10 -15 Q15 5 5 15 Q-5 10 -10 -10 Z" fill="#22c55e" />
        <circle cx="0" cy="0" r="24" fill="#000000" opacity="0.3" mask="url(#shadow)" />
        {/* Orbiting Moon */}
        <circle cx="34" cy="-18" r="7" fill="#e2e8f0" />
      </g>
      {/* Saturn / Ring planet in background */}
      <g transform="translate(230, 50) scale(0.6)">
        <circle cx="0" cy="0" r="20" fill="#fbbf24" />
        <ellipse cx="0" cy="0" rx="38" ry="8" fill="none" stroke="#fef08a" strokeWidth="4" transform="rotate(-15)" />
      </g>
      {/* Rocket */}
      <g transform="translate(200, 190) rotate(-45)">
        <path d="M0 -15 L8 10 L-8 10 Z" fill="#ffffff" />
        <path d="M-8 6 L-14 14 L-8 12 Z" fill="#ef4444" />
        <path d="M8 6 L14 14 L8 12 Z" fill="#ef4444" />
        <path d="M-4 10 L0 22 L4 10 Z" fill="#f97316" />
      </g>
    </Frame>
  );
}

function HumanBodyAnatomyScene() {
  return (
    <Frame label="Human Body: Brain, Heart, Lungs and Circulation">
      <defs>
        <linearGradient id="hb-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="50%" stopColor="#be123c" />
          <stop offset="100%" stopColor="#4c0519" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#hb-bg)" />
      {/* Brain illustration */}
      <g transform="translate(90, 80)">
        <path d="M-25 0 C-30 -20 0 -35 15 -20 C30 -20 35 0 25 15 C15 30 -10 25 -25 0 Z" fill="#fda4af" stroke="#ffffff" strokeWidth="2.5" />
        <path d="M-15 -5 Q0 -20 10 -5 Q20 10 5 15" fill="none" stroke="#be123c" strokeWidth="2" />
        <text x="-20" y="45" fill="#ffffff" fontSize="12" fontWeight="bold">Brain</text>
      </g>
      {/* Heart */}
      <g transform="translate(220, 120)">
        <path d="M0 25 C-30 0 -30 -30 0 -20 C30 -30 30 0 0 25 Z" fill="#ef4444" stroke="#ffffff" strokeWidth="3" />
        <line x1="-15" y1="-25" x2="-10" y2="-40" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" />
        <line x1="10" y1="-25" x2="15" y2="-45" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" />
        <text x="-15" y="45" fill="#ffffff" fontSize="12" fontWeight="bold">Heart</text>
      </g>
      {/* Lungs */}
      <g transform="translate(340, 100)">
        <path d="M-5 -25 C-25 -20 -35 15 -10 30 L-5 -25 Z" fill="#fca5a5" stroke="#ffffff" strokeWidth="2" />
        <path d="M5 -25 C25 -20 35 15 10 30 L5 -25 Z" fill="#fca5a5" stroke="#ffffff" strokeWidth="2" />
        <line x1="0" y1="-40" x2="0" y2="-20" stroke="#ffffff" strokeWidth="4" />
        <text x="-18" y="55" fill="#ffffff" fontSize="12" fontWeight="bold">Lungs</text>
      </g>
      {/* Arteries & Veins loops */}
      <path d="M125 90 Q170 110 200 115" stroke="#38bdf8" strokeWidth="3.5" strokeDasharray="3 6" fill="none" />
      <path d="M245 125 Q285 110 320 105" stroke="#f87171" strokeWidth="3.5" strokeDasharray="3 6" fill="none" />
    </Frame>
  );
}

function EverydayPhysicsScene() {
  return (
    <Frame label="Everyday Science: Electricity, Magnetism, Gears and Light">
      <defs>
        <linearGradient id="ep-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#ep-bg)" />
      {/* Glowing Lightbulb */}
      <g transform="translate(90, 110)">
        <circle cx="0" cy="0" r="30" fill="#fef08a" />
        <path d="M-15 20 L-10 38 L10 38 L15 20 Z" fill="#94a3b8" />
        <path d="M-10 -5 Q0 -20 10 -5 Q0 10 -10 -5" fill="none" stroke="#ea580c" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="42" fill="#fef08a" opacity="0.3" />
        <text x="-25" y="60" fill="#ffffff" fontSize="12" fontWeight="bold">Electricity</text>
      </g>
      {/* Horseshoe Magnet */}
      <g transform="translate(220, 100)">
        <path d="M-25 35 V0 C-25 -25 25 -25 25 0 V35" fill="none" stroke="#ef4444" strokeWidth="18" strokeLinecap="square" />
        <rect x="-34" y="20" width="18" height="15" fill="#3b82f6" />
        <rect x="16" y="20" width="18" height="15" fill="#ef4444" />
        <text x="-25" y="70" fill="#ffffff" fontSize="12" fontWeight="bold">Magnetism</text>
      </g>
      {/* Interlocking Gears */}
      <g transform="translate(340, 110)">
        <circle cx="0" cy="0" r="26" fill="#64748b" />
        <circle cx="0" cy="0" r="10" fill="#1e293b" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
          <rect
            key={i}
            x="-4"
            y="-32"
            width="8"
            height="10"
            fill="#64748b"
            transform={`rotate(${a})`}
          />
        ))}
        <text x="-20" y="55" fill="#ffffff" fontSize="12" fontWeight="bold">Machines</text>
      </g>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Themed Dispatcher
// ─────────────────────────────────────────────────────────────────────────────

export default function KnowledgeArt({ slug, className }: Props) {
  // 1. Nature & Earth
  if (slug === "the-rock-cycle" || slug === "how-rivers-are-formed" || slug === "how-soil-is-made") {
    return <div className={className}><RockCycleScene /></div>;
  }
  if (slug === "the-food-chain" || slug === "the-food-web" || slug === "the-carbon-cycle" || slug === "the-nitrogen-cycle" || slug === "how-ecosystems-work") {
    return <div className={className}><FoodChainWebScene /></div>;
  }

  // 2. Weather & Climate
  if (
    slug === "how-clouds-are-made" ||
    slug === "the-journey-of-the-wind" ||
    slug === "how-rain-happens" ||
    slug === "how-thunderstorms-form" ||
    slug === "why-do-we-have-seasons" ||
    slug === "how-snow-is-formed" ||
    slug === "the-life-cycle-of-a-hurricane" ||
    slug === "how-weather-forecasting-works" ||
    slug === "the-journey-of-sunlight" ||
    slug === "weather-vs-climate" ||
    slug === "the-journey-of-a-raindrop" ||
    slug === "the-water-pollution-journey"
  ) {
    return <div className={className}><WeatherCloudsRainScene /></div>;
  }

  // 3. Space
  if (
    slug === "journey-of-earth-around-sun" ||
    slug === "why-do-we-have-day-and-night" ||
    slug === "the-phases-of-the-moon" ||
    slug === "the-life-cycle-of-a-star" ||
    slug === "how-a-solar-eclipse-happens" ||
    slug === "how-a-lunar-eclipse-happens" ||
    slug === "journey-through-our-solar-system" ||
    slug === "how-rockets-reach-space" ||
    slug === "how-astronauts-live-in-space" ||
    slug === "what-causes-the-northern-lights"
  ) {
    return <div className={className}><SpaceCosmicScene /></div>;
  }

  // 4. Animal & Plant Life
  if (
    slug === "the-life-cycle-of-a-frog" ||
    slug === "the-life-cycle-of-a-bee" ||
    slug === "the-life-cycle-of-a-chicken" ||
    slug === "the-life-cycle-of-a-ladybug" ||
    slug === "how-birds-build-nests" ||
    slug === "how-bees-make-honey" ||
    slug === "how-plants-make-their-food" ||
    slug === "how-animals-adapt-to-their-environment" ||
    slug === "the-journey-of-food-through-an-animal" ||
    slug === "the-life-of-a-tree"
  ) {
    return <div className={className}><FoodChainWebScene /></div>;
  }

  // 5. Human Body
  if (
    slug === "journey-of-food-through-your-body" ||
    slug === "how-we-breathe" ||
    slug === "how-the-heart-pumps-blood" ||
    slug === "how-bones-help-us-move" ||
    slug === "how-muscles-work" ||
    slug === "how-our-brain-sends-messages" ||
    slug === "how-our-five-senses-work" ||
    slug === "how-the-immune-system-protects-us" ||
    slug === "how-we-grow" ||
    slug === "why-do-we-sleep"
  ) {
    return <div className={className}><HumanBodyAnatomyScene /></div>;
  }

  // 6. Everyday Science
  return <div className={className}><EverydayPhysicsScene /></div>;
}
