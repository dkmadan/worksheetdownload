import React from "react";
import { Frame } from "./NatureScenes";

// 21. The Journey of Earth Around the Sun
export function EarthAroundSunScene() {
  return (
    <Frame label="The Journey of Earth Around the Sun: 365-Day Orbit and Habitable Goldilocks Zone">
      <defs>
        <radialGradient id="es-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="70%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#dc2626" />
        </radialGradient>
      </defs>
      <rect width="440" height="260" fill="#030712" />
      {/* Stars */}
      {[...Array(25)].map((_, i) => (
        <circle key={i} cx={(i * 47) % 440} cy={(i * 31) % 260} r={(i % 2) + 0.8} fill="#ffffff" opacity={0.6} />
      ))}
      {/* Sun in center */}
      <circle cx="220" cy="130" r="38" fill="url(#es-sun)" />
      {/* Elliptical Orbit Track */}
      <ellipse cx="220" cy="130" rx="160" ry="65" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="5 7" />
      {/* Earth on orbit */}
      <g transform="translate(350, 100)">
        <circle cx="0" cy="0" r="16" fill="#0284c7" />
        <path d="M-6 -6 Q0 -2 6 -8 Q8 4 2 8 Z" fill="#22c55e" />
        <text x="-25" y="30" fill="#bae6fd" fontSize="10" fontWeight="bold">67,000 mph Orbit</text>
      </g>
      <text x="140" y="30" fill="#fde047" fontSize="13" fontWeight="black">365.25 Days / 584 Million Miles</text>
    </Frame>
  );
}

// 22. Why Do We Have Day and Night?
export function DayNightScene() {
  return (
    <Frame label="Why Do We Have Day and Night: Half-lit Spinning Earth, Terminator Line">
      <defs>
        <linearGradient id="dn-bg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="40%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#dn-bg)" />
      {/* Sun rays on left */}
      <g transform="translate(30, 130)">
        <circle cx="0" cy="0" r="40" fill="#fde047" />
        <line x1="50" y1="-30" x2="180" y2="-10" stroke="#fef08a" strokeWidth="3" />
        <line x1="50" y1="0" x2="180" y2="0" stroke="#fef08a" strokeWidth="3" />
        <line x1="50" y1="30" x2="180" y2="10" stroke="#fef08a" strokeWidth="3" />
      </g>
      {/* Earth Sphere: Half Day, Half Night */}
      <g transform="translate(260, 130)">
        <circle cx="0" cy="0" r="60" fill="#0284c7" />
        {/* Dark night hemisphere */}
        <path d="M0 -60 A60 60 0 0 1 0 60 Z" fill="#090d16" opacity="0.85" />
        {/* Rotation axis */}
        <line x1="-20" y1="-80" x2="20" y2="80" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="3 3" />
        <text x="-45" y="-5" fill="#fde047" fontSize="11" fontWeight="bold">DAY ☀️</text>
        <text x="10" y="-5" fill="#bae6fd" fontSize="11" fontWeight="bold">NIGHT 🌙</text>
      </g>
      <text x="170" y="240" fill="#ffffff" fontSize="12" fontWeight="bold">24-Hour Axial Rotation</text>
    </Frame>
  );
}

// 23. The Phases of the Moon
export function MoonPhasesScene() {
  return (
    <Frame label="The Phases of the Moon: 8 Lunar Shapes in 29.5-Day Orbit">
      <rect width="440" height="260" fill="#090d16" />
      {/* Central Earth */}
      <circle cx="220" cy="130" r="28" fill="#0284c7" />
      {/* 8 Moon Phase Badges around Orbit */}
      <g transform="translate(220, 130)">
        {/* 1. New Moon (Right / Toward Sun) */}
        <circle cx="110" cy="0" r="14" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
        {/* 2. Waxing Crescent */}
        <g transform="translate(80, -70)">
          <circle cx="0" cy="0" r="14" fill="#1e293b" />
          <path d="M0 -14 A14 14 0 0 1 0 14 A14 14 0 0 0 0 -14 Z" fill="#f8fafc" />
        </g>
        {/* 3. First Quarter */}
        <g transform="translate(0, -95)">
          <circle cx="0" cy="0" r="14" fill="#1e293b" />
          <path d="M0 -14 A14 14 0 0 1 0 14 Z" fill="#f8fafc" />
        </g>
        {/* 4. Full Moon (Left) */}
        <circle cx="-110" cy="0" r="14" fill="#f8fafc" />
        {/* 5. Last Quarter */}
        <g transform="translate(0, 95)">
          <circle cx="0" cy="0" r="14" fill="#1e293b" />
          <path d="M0 -14 A14 14 0 0 0 0 14 Z" fill="#f8fafc" />
        </g>
      </g>
      <text x="140" y="30" fill="#fde047" fontSize="13" fontWeight="black">8 Lunar Phases (29.5-Day Cycle)</text>
    </Frame>
  );
}

// 24. The Life Cycle of a Star
export function StarLifeCycleScene() {
  return (
    <Frame label="The Life Cycle of a Star: Nebula to Main Sequence to Supernova to Black Hole">
      <defs>
        <radialGradient id="sn-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#ec4899" />
          <stop offset="70%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="440" height="260" fill="#050510" />
      {/* 1. Nebula */}
      <g transform="translate(60, 130)">
        <ellipse cx="0" cy="0" rx="35" ry="25" fill="url(#sn-glow)" opacity="0.8" />
        <text x="-20" y="45" fill="#f472b6" fontSize="10" fontWeight="bold">1. Nebula</text>
      </g>
      {/* 2. Main Sequence Star */}
      <g transform="translate(160, 130)">
        <circle cx="0" cy="0" r="20" fill="#fde047" />
        <text x="-25" y="45" fill="#fde047" fontSize="10" fontWeight="bold">2. Star</text>
      </g>
      {/* 3. Red Giant */}
      <g transform="translate(260, 130)">
        <circle cx="0" cy="0" r="32" fill="#ef4444" opacity="0.9" />
        <text x="-30" y="55" fill="#f87171" fontSize="10" fontWeight="bold">3. Red Giant</text>
      </g>
      {/* 4. Supernova */}
      <g transform="translate(370, 130)">
        <circle cx="0" cy="0" r="40" fill="url(#sn-glow)" />
        <circle cx="0" cy="0" r="8" fill="#000000" />
        <text x="-35" y="55" fill="#c084fc" fontSize="10" fontWeight="bold">4. Supernova 💥</text>
      </g>
      {/* Arrow track */}
      <line x1="95" y1="130" x2="135" y2="130" stroke="#ffffff" strokeWidth="2" strokeDasharray="2 3" />
      <line x1="185" y1="130" x2="225" y2="130" stroke="#ffffff" strokeWidth="2" strokeDasharray="2 3" />
      <line x1="295" y1="130" x2="330" y2="130" stroke="#ffffff" strokeWidth="2" strokeDasharray="2 3" />
    </Frame>
  );
}

// 25. How a Solar Eclipse Happens
export function SolarEclipseScene() {
  return (
    <Frame label="How a Solar Eclipse Happens: Moon between Sun and Earth, Umbra Shadow">
      <rect width="440" height="260" fill="#030712" />
      {/* Big Sun */}
      <circle cx="60" cy="130" r="45" fill="#fde047" />
      {/* Moon in Middle */}
      <circle cx="220" cy="130" r="14" fill="#0f172a" stroke="#ffffff" strokeWidth="1" />
      {/* Earth on Right */}
      <circle cx="370" cy="130" r="30" fill="#0284c7" />
      {/* Shadow Cone (Umbra) */}
      <polygon points="220,116 370,126 370,134 220,144" fill="#000000" opacity="0.8" />
      <polygon points="220,116 370,95 370,165 220,144" fill="#1e293b" opacity="0.35" />
      <text x="35" y="65" fill="#fde047" fontSize="12" fontWeight="bold">Sun</text>
      <text x="205" y="95" fill="#ffffff" fontSize="12" fontWeight="bold">Moon</text>
      <text x="355" y="85" fill="#bae6fd" fontSize="12" fontWeight="bold">Earth</text>
      <text x="130" y="235" fill="#fde047" fontSize="13" fontWeight="black">Solar Eclipse: Moon Blocks Sunlight</text>
    </Frame>
  );
}

// 26. How a Lunar Eclipse Happens
export function LunarEclipseScene() {
  return (
    <Frame label="How a Lunar Eclipse Happens: Earth between Sun and Moon, Blood Moon">
      <rect width="440" height="260" fill="#030712" />
      {/* Sun on Left */}
      <circle cx="60" cy="130" r="45" fill="#fde047" />
      {/* Earth in Middle */}
      <circle cx="220" cy="130" r="30" fill="#0284c7" />
      {/* Moon in Earth's Shadow (Blood Moon) */}
      <circle cx="370" cy="130" r="14" fill="#dc2626" />
      {/* Earth's Umbra Shadow cone */}
      <polygon points="220,100 370,116 370,144 220,160" fill="#7f1d1d" opacity="0.5" />
      <text x="35" y="65" fill="#fde047" fontSize="12" fontWeight="bold">Sun</text>
      <text x="205" y="85" fill="#bae6fd" fontSize="12" fontWeight="bold">Earth</text>
      <text x="345" y="95" fill="#fca5a5" fontSize="12" fontWeight="bold">Blood Moon 🩸</text>
      <text x="120" y="235" fill="#fca5a5" fontSize="13" fontWeight="black">Lunar Eclipse: Earth Casts Red Shadow</text>
    </Frame>
  );
}

// 27. The Journey Through Our Solar System
export function SolarSystemScene() {
  return (
    <Frame label="The Journey Through Our Solar System: 8 Planets and Asteroid Belt">
      <rect width="440" height="260" fill="#030712" />
      {/* Sun slice on left */}
      <circle cx="-30" cy="130" r="70" fill="#fde047" />
      {/* Mercury, Venus, Earth, Mars */}
      <circle cx="70" cy="130" r="5" fill="#94a3b8" />
      <circle cx="100" cy="130" r="8" fill="#f59e0b" />
      <circle cx="135" cy="130" r="9" fill="#0284c7" />
      <circle cx="170" cy="130" r="6" fill="#ef4444" />
      {/* Asteroid belt */}
      <line x1="195" y1="20" x2="195" y2="240" stroke="#94a3b8" strokeWidth="2" strokeDasharray="2 6" opacity="0.6" />
      {/* Jupiter, Saturn, Uranus, Neptune */}
      <circle cx="235" cy="130" r="22" fill="#d97706" />
      {/* Saturn with rings */}
      <g transform="translate(295, 130)">
        <circle cx="0" cy="0" r="16" fill="#fbbf24" />
        <ellipse cx="0" cy="0" rx="30" ry="6" fill="none" stroke="#fef08a" strokeWidth="3" transform="rotate(-20)" />
      </g>
      <circle cx="355" cy="130" r="12" fill="#38bdf8" />
      <circle cx="400" cy="130" r="12" fill="#1d4ed8" />
      <text x="130" y="35" fill="#ffffff" fontSize="12" fontWeight="black">All 8 Planetary Worlds in Order 🪐</text>
    </Frame>
  );
}

// 28. How Rockets Reach Space
export function RocketPhysicsScene() {
  return (
    <Frame label="How Rockets Reach Space: Thrust, Multistage Separation, Orbital Speed">
      <defs>
        <linearGradient id="rp-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#030712" />
          <stop offset="60%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#rp-sky)" />
      {/* Rocket soaring at angle */}
      <g transform="translate(220, 120) rotate(35)">
        {/* Upper capsule */}
        <polygon points="0,-60 12,-30 -12,-30" fill="#ffffff" />
        {/* Second stage body */}
        <rect x="-12" y="-30" width="24" height="40" fill="#f8fafc" />
        {/* First stage booster */}
        <rect x="-14" y="15" width="28" height="50" fill="#e2e8f0" />
        <polygon points="-14,65 -22,80 -14,80" fill="#ef4444" />
        <polygon points="14,65 22,80 14,80" fill="#ef4444" />
        {/* Fire exhaust */}
        <polygon points="-10,80 0,130 10,80" fill="#f97316" />
        <polygon points="-5,80 0,110 5,80" fill="#fef08a" />
      </g>
      <text x="40" y="60" fill="#fde047" fontSize="13" fontWeight="black">Newton's 3rd Law: Action &amp; Reaction</text>
      <text x="40" y="85" fill="#ffffff" fontSize="11" fontWeight="bold">Orbital Speed: 28,000 km/h (17,500 mph) 🚀</text>
    </Frame>
  );
}

// 29. How Astronauts Live in Space
export function AstronautLifeScene() {
  return (
    <Frame label="How Astronauts Live in Space: Zero-G Spacewalk, ISS, Cupola Window">
      <rect width="440" height="260" fill="#030712" />
      {/* Earth curvature below */}
      <path d="M0 220 Q220 180 440 220 V260 H0 Z" fill="#0284c7" />
      {/* ISS Solar Array */}
      <g transform="translate(90, 80)">
        <rect x="-40" y="-10" width="80" height="20" fill="#3b82f6" stroke="#93c5fd" strokeWidth="1" />
        <rect x="-5" y="-20" width="10" height="40" fill="#e2e8f0" />
      </g>
      {/* Spacewalking Astronaut in Center */}
      <g transform="translate(260, 110)">
        {/* Helmet */}
        <circle cx="0" cy="-25" r="16" fill="#ffffff" />
        <ellipse cx="3" cy="-25" rx="10" ry="8" fill="#fde047" opacity="0.85" />
        {/* Suit */}
        <rect x="-16" y="-8" width="32" height="35" rx="6" fill="#f1f5f9" />
        {/* Backpack life support */}
        <rect x="-24" y="-12" width="10" height="38" fill="#cbd5e1" />
        {/* Tether */}
        <path d="M-24 0 Q-80 -40 -120 -20" stroke="#fde047" strokeWidth="2.5" fill="none" strokeDasharray="3 4" />
      </g>
      <text x="140" y="240" fill="#ffffff" fontSize="12" fontWeight="bold">Microgravity Spacewalk on the ISS 👨‍🚀</text>
    </Frame>
  );
}

// 30. What Causes the Northern Lights?
export function NorthernLightsScene() {
  return (
    <Frame label="What Causes the Northern Lights: Solar Wind Plasma and Aurora Curtains">
      <defs>
        <linearGradient id="nl-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#020617" />
          <stop offset="60%" stopColor="#064e3b" />
          <stop offset="100%" stopColor="#042f2e" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#nl-sky)" />
      {/* Stars */}
      {[...Array(20)].map((_, i) => (
        <circle key={i} cx={(i * 43) % 440} cy={(i * 29) % 120} r={1} fill="#ffffff" />
      ))}
      {/* Aurora Curtains (Glowing Green & Violet Waves) */}
      <path d="M0 60 Q110 20 220 70 T440 40 V160 Q330 180 220 140 T0 150 Z" fill="#22c55e" opacity="0.45" />
      <path d="M0 80 Q140 40 280 90 T440 70 V140 Q300 150 160 120 T0 130 Z" fill="#a855f7" opacity="0.4" />
      {/* Snowy Mountains */}
      <path d="M0 260 L90 170 L180 260 Z" fill="#1e293b" />
      <path d="M70 190 L90 170 L110 190 Z" fill="#ffffff" />
      <path d="M150 260 L240 160 L330 260 Z" fill="#0f172a" />
      <path d="M220 180 L240 160 L260 180 Z" fill="#ffffff" />
      <text x="120" y="30" fill="#a7f3d0" fontSize="13" fontWeight="black">Aurora Borealis: Solar Plasma Collisions 🌌</text>
    </Frame>
  );
}

// 21. How the Solar System Formed
export function SolarSystemFormedScene() {
  return (
    <Frame label="How the Solar System Formed: Solar Nebula Collapse, Proto-Sun, Protoplanetary Disk Accretion">
      <defs>
        <radialGradient id="ssf-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#fef08a" />
          <stop offset="80%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#dc2626" />
        </radialGradient>
      </defs>
      <rect width="440" height="260" fill="#030712" />
      {/* Spinning Protoplanetary Dust Disk */}
      <ellipse cx="220" cy="130" rx="190" ry="65" fill="#ca8a04" opacity="0.35" />
      <ellipse cx="220" cy="130" rx="150" ry="48" fill="#d97706" opacity="0.5" />
      <ellipse cx="220" cy="130" rx="100" ry="32" fill="#ea580c" opacity="0.65" />
      {/* Central Newborn Proto-Sun */}
      <circle cx="220" cy="130" r="32" fill="url(#ssf-sun)" />
      {/* Accreting Planetesimals in Disk Tracks */}
      <circle cx="90" cy="120" r="7" fill="#38bdf8" />
      <ellipse cx="90" cy="120" rx="16" ry="5" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2,2" />
      <circle cx="340" cy="140" r="11" fill="#f59e0b" />
      <circle cx="160" cy="155" r="5" fill="#ef4444" />
      <circle cx="290" cy="105" r="6" fill="#22c55e" />
      {/* Spiral Dust Streamers */}
      <path d="M70 90 Q140 70 220 100 Q300 130 380 110" stroke="#fef08a" strokeWidth="2" fill="none" strokeDasharray="6,4" opacity="0.8" />
      {/* Labels */}
      <rect x="15" y="15" width="165" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#fde047" fontSize="10" fontWeight="bold">💿 Protoplanetary Accretion Disk</text>
    </Frame>
  );
}

// 22. What Is Gravity?
export function WhatIsGravityScene() {
  return (
    <Frame label="What Is Gravity: Mass Warping Spacetime Fabric, Orbiting Marbles, Gravitational Attraction">
      <defs>
        <radialGradient id="wig-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#ea580c" />
        </radialGradient>
      </defs>
      <rect width="440" height="260" fill="#090d16" />
      {/* Curving Spacetime Grid Lines (Einsteinian Gravitational Well) */}
      <g stroke="#38bdf8" strokeWidth="1" opacity="0.45" fill="none">
        <ellipse cx="220" cy="140" rx="180" ry="75" />
        <ellipse cx="220" cy="150" rx="140" ry="55" />
        <ellipse cx="220" cy="160" rx="90" ry="35" />
        <ellipse cx="220" cy="170" rx="45" ry="18" />
        {/* Radial grid funnels */}
        <line x1="40" y1="140" x2="220" y2="175" />
        <line x1="400" y1="140" x2="220" y2="175" />
        <line x1="120" y1="75" x2="220" y2="175" />
        <line x1="320" y1="75" x2="220" y2="175" />
        <line x1="120" y1="205" x2="220" y2="175" />
        <line x1="320" y1="205" x2="220" y2="175" />
      </g>
      {/* Heavy Central Mass (Massive Star) in Depression */}
      <circle cx="220" cy="165" r="24" fill="url(#wig-sun)" />
      {/* Orbiting Planet rolling along the curved grid */}
      <circle cx="110" cy="120" r="9" fill="#3b82f6" />
      <path d="M80 90 Q110 120 160 160" stroke="#f43f5e" strokeWidth="2.5" fill="none" strokeDasharray="3,2" />
      {/* Labels */}
      <rect x="15" y="15" width="165" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#38bdf8" fontSize="10" fontWeight="bold">🌐 Spacetime Grid Curvature</text>
      <rect x="270" y="15" width="150" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="277" y="29" fill="#fca5a5" fontSize="10" fontWeight="bold">⬇️ Mass Attracting Mass</text>
    </Frame>
  );
}

// 23. How Satellites Work
export function HowSatellitesWorkScene() {
  return (
    <Frame label="How Satellites Work: Orbital Velocity Balancing Earth's Curvature, Solar Panels, Microwave Beams">
      <defs>
        <radialGradient id="hsw-earth" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="70%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </radialGradient>
      </defs>
      <rect width="440" height="260" fill="#020617" />
      {/* Earth Sphere in bottom corner */}
      <circle cx="110" cy="240" r="120" fill="url(#hsw-earth)" />
      {/* Continents */}
      <path d="M40 180 Q80 150 120 190 Q140 240 100 280 Z" fill="#15803d" />
      {/* Circular Orbital Path */}
      <path d="M20 70 Q160 30 330 90 Q400 130 430 200" stroke="#facc15" strokeWidth="2" fill="none" strokeDasharray="6,4" />
      {/* Satellite Body & Solar Wings */}
      <g transform="translate(290, 80) rotate(-20)">
        {/* Main Body Chassis */}
        <rect x="-15" y="-12" width="30" height="24" rx="4" fill="#e2e8f0" stroke="#475569" strokeWidth="1.5" />
        {/* Left Solar Panel */}
        <rect x="-65" y="-9" width="45" height="18" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1.5" />
        {/* Right Solar Panel */}
        <rect x="20" y="-9" width="45" height="18" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1.5" />
        {/* Dish Antenna */}
        <path d="M0 12 Q10 24 20 12 Z" fill="#cbd5e1" />
        <line x1="0" y1="12" x2="10" y2="24" stroke="#94a3b8" strokeWidth="1.5" />
      </g>
      {/* Microwave Transmission Cones */}
      <g stroke="#38bdf8" strokeWidth="1.5" fill="none" strokeDasharray="3,2">
        <path d="M265 110 Q210 150 150 190" />
        <path d="M275 120 Q220 160 160 200" />
      </g>
      {/* Labels */}
      <rect x="250" y="15" width="175" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="257" y="29" fill="#facc15" fontSize="10" fontWeight="bold">🛰️ Orbital Velocity: 28,000 km/h</text>
    </Frame>
  );
}

// 24. What Is a Black Hole?
export function BlackHoleScene() {
  return (
    <Frame label="What Is a Black Hole: Event Horizon, Superheated Accretion Disk, Relativistic Jets, Singularity">
      <defs>
        <radialGradient id="bh-disk" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#fef08a" />
          <stop offset="60%" stopColor="#f97316" />
          <stop offset="90%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="440" height="260" fill="#020617" />
      {/* Background Starfield */}
      <circle cx="50" cy="40" r="1.5" fill="#ffffff" />
      <circle cx="390" cy="50" r="1.5" fill="#ffffff" />
      <circle cx="80" cy="220" r="1.5" fill="#ffffff" />
      <circle cx="370" cy="210" r="1.5" fill="#ffffff" />
      {/* Accretion Disk (Tilted Oval) */}
      <ellipse cx="220" cy="130" rx="170" ry="45" fill="url(#bh-disk)" />
      {/* Gravitational Lensed Back-Ring of Accretion Disk */}
      <ellipse cx="220" cy="120" rx="65" ry="55" fill="none" stroke="#f97316" strokeWidth="12" opacity="0.85" />
      <ellipse cx="220" cy="120" rx="65" ry="55" fill="none" stroke="#fef08a" strokeWidth="4" />
      {/* Black Hole Shadow (Event Horizon Sphere) */}
      <circle cx="220" cy="130" r="42" fill="#000000" stroke="#fef08a" strokeWidth="1.5" />
      {/* Relativistic Polar Jets */}
      <polygon points="215,130 220,10 225,130" fill="#38bdf8" opacity="0.8" />
      <polygon points="215,130 220,250 225,130" fill="#38bdf8" opacity="0.8" />
      {/* Labels */}
      <rect x="15" y="15" width="135" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#fca5a5" fontSize="10" fontWeight="bold">⭕ Event Horizon Boundary</text>
      <rect x="290" y="225" width="135" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="297" y="239" fill="#38bdf8" fontSize="10" fontWeight="bold">⚡ Relativistic Plasma Jet</text>
    </Frame>
  );
}

// 25. How the Moon Was Formed
export function MoonFormationScene() {
  return (
    <Frame label="How the Moon Was Formed: Theia Impact, Molten Debris Ring, Lunar Coalescence">
      <defs>
        <radialGradient id="mf-impact" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#fef08a" />
          <stop offset="70%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#7c2d12" />
        </radialGradient>
      </defs>
      <rect width="440" height="260" fill="#030712" />
      {/* Molten Proto-Earth */}
      <circle cx="170" cy="140" r="65" fill="#78350f" stroke="#ea580c" strokeWidth="3" />
      {/* Cataclysmic Impact Shockwave Blast */}
      <ellipse cx="220" cy="115" rx="35" ry="25" fill="url(#mf-impact)" />
      {/* Striking Protoplanet Theia Fragment */}
      <circle cx="235" cy="100" r="28" fill="#b45309" stroke="#f97316" strokeWidth="2" />
      {/* Glowing Ejected Debris Ring */}
      <ellipse cx="220" cy="140" rx="180" ry="50" fill="none" stroke="#f97316" strokeWidth="5" strokeDasharray="14,6" opacity="0.85" />
      <ellipse cx="220" cy="140" rx="180" ry="50" fill="none" stroke="#fef08a" strokeWidth="1.5" strokeDasharray="8,4" />
      {/* Coalescing Newborn Moon in Ring */}
      <circle cx="360" cy="115" r="16" fill="#ca8a04" stroke="#fef08a" strokeWidth="2" />
      {/* Labels */}
      <rect x="15" y="15" width="145" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#fde047" fontSize="10" fontWeight="bold">💥 Theia Giant Impact (4.5 Ga)</text>
      <rect x="280" y="15" width="145" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="287" y="29" fill="#fca5a5" fontSize="10" fontWeight="bold">💍 Molten Debris Accretion</text>
    </Frame>
  );
}

// 26. Why Planets Orbit the Sun
export function WhyPlanetsOrbitScene() {
  return (
    <Frame label="Why Planets Orbit the Sun: Inertial Forward Vector, Gravitational Pull Vector, Elliptical Orbit">
      <defs>
        <radialGradient id="wpo-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#ea580c" />
        </radialGradient>
      </defs>
      <rect width="440" height="260" fill="#020617" />
      {/* Central Sun at Ellipse Focus */}
      <circle cx="180" cy="130" r="30" fill="url(#wpo-sun)" />
      {/* Elliptical Orbital Path */}
      <ellipse cx="220" cy="130" rx="170" ry="75" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6,4" />
      {/* Planet on Orbit (Earth) */}
      <g transform="translate(340, 80)">
        <circle cx="0" cy="0" r="12" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
        {/* Forward Inertia Vector (Red arrow pointing forward) */}
        <line x1="0" y1="0" x2="-45" y2="-35" stroke="#ef4444" strokeWidth="3" />
        <polygon points="-45,-35 -38,-42 -35,-32" fill="#ef4444" />
        <text x="-95" y="-40" fill="#fca5a5" fontSize="9" fontWeight="bold">Inertia (Forward)</text>
        {/* Inward Solar Gravity Vector (Yellow arrow pointing to Sun) */}
        <line x1="0" y1="0" x2="-80" y2="25" stroke="#facc15" strokeWidth="3" />
        <polygon points="-80,25 -72,20 -74,30" fill="#facc15" />
        <text x="-120" y="45" fill="#fef08a" fontSize="9" fontWeight="bold">Sun Gravity 🧲</text>
      </g>
      {/* Resulting Curved Path (Green Arc) */}
      <path d="M380 110 Q350 70 300 60" stroke="#22c55e" strokeWidth="4" fill="none" />
      {/* Labels */}
      <rect x="15" y="15" width="155" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#22c55e" fontSize="10" fontWeight="bold">⚖️ Stable Keplerian Orbit</text>
    </Frame>
  );
}

// 27. How Telescopes Work
export function HowTelescopesWorkScene() {
  return (
    <Frame label="How Telescopes Work: Refractor Objective Lens, Mirror Reflection, Focal Point, Eyepiece">
      <rect width="440" height="260" fill="#090d16" />
      {/* Telescope Optical Tube Assembly */}
      <rect x="50" y="100" width="280" height="60" rx="6" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
      {/* Primary Objective Lens (Front) */}
      <ellipse cx="50" cy="130" rx="8" ry="28" fill="#38bdf8" opacity="0.8" stroke="#bae6fd" strokeWidth="1.5" />
      {/* Parallel Incoming Starlight Rays */}
      <line x1="0" y1="110" x2="50" y2="110" stroke="#fef08a" strokeWidth="2" />
      <line x1="0" y1="130" x2="50" y2="130" stroke="#fef08a" strokeWidth="2" />
      <line x1="0" y1="150" x2="50" y2="150" stroke="#fef08a" strokeWidth="2" />
      {/* Converging Rays Inside Tube to Focal Point */}
      <line x1="50" y1="110" x2="270" y2="130" stroke="#fef08a" strokeWidth="2" />
      <line x1="50" y1="150" x2="270" y2="130" stroke="#fef08a" strokeWidth="2" />
      <circle cx="270" cy="130" r="4" fill="#ef4444" />
      {/* Diagonal Eyepiece Adapter */}
      <rect x="300" y="115" width="30" height="30" fill="#334155" />
      <rect x="310" y="70" width="15" height="45" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
      {/* Observer Eye */}
      <g transform="translate(318, 45)">
        <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#334155" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="6" fill="#0284c7" />
        <circle cx="0" cy="0" r="2.5" fill="#000000" />
      </g>
      {/* Labels */}
      <rect x="15" y="15" width="145" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#38bdf8" fontSize="10" fontWeight="bold">🔭 Refracting Optical Train</text>
      <text x="220" y="185" fill="#fca5a5" fontSize="9" fontWeight="bold">Focal Point 🎯</text>
    </Frame>
  );
}

// 28. What Are Comets?
export function WhatAreCometsScene() {
  return (
    <Frame label="What Are Comets: Icy Nucleus, Vaporizing Coma, Ion Gas Tail, Curved Dust Tail">
      <defs>
        <linearGradient id="cm-tail" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cm-dust" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="#020617" />
      {/* Straight Blue Ion Tail */}
      <polygon points="120,130 420,70 420,110" fill="url(#cm-tail)" opacity="0.8" />
      {/* Curved Yellow Dust Tail */}
      <path d="M120 130 Q280 160 420 220 L400 240 Q260 170 120 130 Z" fill="url(#cm-dust)" opacity="0.65" />
      {/* Glowing Coma Halo */}
      <circle cx="110" cy="130" r="30" fill="#38bdf8" opacity="0.5" />
      <circle cx="110" cy="130" r="18" fill="#e0f2fe" opacity="0.85" />
      {/* Dark Icy Nucleus */}
      <path d="M104 125 Q115 120 118 128 Q120 138 110 136 Q100 134 104 125 Z" fill="#1e293b" />
      {/* Sublimating Gas Jets */}
      <line x1="104" y1="125" x2="90" y2="115" stroke="#ffffff" strokeWidth="2" />
      <line x1="110" y1="136" x2="100" y2="150" stroke="#ffffff" strokeWidth="2" />
      {/* Labels */}
      <rect x="270" y="55" width="130" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="277" y="69" fill="#38bdf8" fontSize="9" fontWeight="bold">⚡ Straight Blue Ion Tail</text>
      <rect x="270" y="225" width="130" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="277" y="239" fill="#fde047" fontSize="9" fontWeight="bold">✨ Curved Dust Trail</text>
    </Frame>
  );
}

// 29. What Are Asteroids?
export function WhatAreAsteroidsScene() {
  return (
    <Frame label="What Are Asteroids: Rocky Planetesimals in the Asteroid Belt between Mars and Jupiter">
      <defs>
        <radialGradient id="ast-rock" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="50%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1e293b" />
        </radialGradient>
      </defs>
      <rect width="440" height="260" fill="#030712" />
      {/* Background Starfield */}
      {[...Array(25)].map((_, i) => (
        <circle key={i} cx={(i * 37) % 440} cy={(i * 47) % 260} r={1} fill="#ffffff" />
      ))}
      {/* Giant Main Asteroid with Impact Craters */}
      <g transform="translate(160, 130)">
        <path d="M-60 -40 Q-20 -70 40 -50 Q80 -10 60 50 Q10 70 -50 45 Q-80 10 -60 -40 Z" fill="url(#ast-rock)" />
        {/* Craters */}
        <circle cx="-20" cy="-20" r="14" fill="#334155" stroke="#1e293b" strokeWidth="2" />
        <circle cx="25" cy="15" r="18" fill="#334155" stroke="#1e293b" strokeWidth="2" />
        <circle cx="-30" cy="20" r="9" fill="#1e293b" />
      </g>
      {/* Distant Smaller Asteroid Belt Rocks */}
      <path d="M330 60 Q345 50 355 65 Q350 80 335 75 Z" fill="#64748b" />
      <path d="M360 170 Q375 160 385 175 Q375 190 355 180 Z" fill="#475569" />
      <circle cx="280" cy="210" r="8" fill="#64748b" />
      {/* Labels */}
      <rect x="15" y="15" width="160" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#f8fafc" fontSize="10" fontWeight="bold">🪨 Main Asteroid Belt (2.8 AU)</text>
    </Frame>
  );
}

// 30. How Scientists Explore Mars
export function ExploreMarsScene() {
  return (
    <Frame label="How Scientists Explore Mars: Perseverance Rover, Ingenuity Helicopter, Jezero Crater">
      <defs>
        <linearGradient id="em-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="50%" stopColor="#c2410c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#em-sky)" />
      {/* Martian Crater Rim & Mountains */}
      <polygon points="0,150 90,110 180,150" fill="#9a3412" />
      <polygon points="160,150 270,95 380,150" fill="#7c2d12" />
      {/* Rusty Desert Dunes */}
      <path d="M0 150 Q120 135 240 160 T440 145 V260 H0 Z" fill="#c2410c" />
      <path d="M0 180 Q140 165 280 190 T440 170 V260 H0 Z" fill="#9a3412" />
      {/* Mars Rover (Perseverance style) */}
      <g transform="translate(170, 185)">
        {/* Wheels (Rocker-Bogie 6 wheels) */}
        <circle cx="-40" cy="25" r="9" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="-15" cy="25" r="9" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="25" cy="25" r="9" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
        {/* Suspension Bars */}
        <path d="M-40 25 L-20 10 L0 12 L25 25" stroke="#64748b" strokeWidth="3" fill="none" />
        {/* Rover Body Chassis */}
        <rect x="-35" y="-5" width="65" height="20" rx="3" fill="#e2e8f0" stroke="#334155" strokeWidth="1.5" />
        {/* Remote Sensing Mast with SuperCam Head */}
        <line x1="-20" y1="-5" x2="-20" y2="-35" stroke="#94a3b8" strokeWidth="3" />
        <rect x="-26" y="-45" width="16" height="12" rx="2" fill="#334155" />
        <circle cx="-18" cy="-39" r="3" fill="#38bdf8" />
        {/* Robotic Arm with Drill */}
        <path d="M25 5 L45 -5 L55 15" stroke="#94a3b8" strokeWidth="3" fill="none" />
        <circle cx="55" cy="15" r="4" fill="#334155" />
      </g>
      {/* Ingenuity Mars Helicopter Hovering */}
      <g transform="translate(350, 100)">
        <rect x="-8" y="-6" width="16" height="14" rx="2" fill="#eab308" />
        {/* Counter-rotating blades */}
        <line x1="-30" y1="-10" x2="30" y2="-10" stroke="#1e293b" strokeWidth="2.5" />
        <line x1="-30" y1="-15" x2="30" y2="-15" stroke="#1e293b" strokeWidth="2.5" />
        {/* Landing legs */}
        <line x1="-6" y1="8" x2="-14" y2="20" stroke="#475569" strokeWidth="1.5" />
        <line x1="6" y1="8" x2="14" y2="20" stroke="#475569" strokeWidth="1.5" />
      </g>
      {/* Labels */}
      <rect x="15" y="15" width="145" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#fde047" fontSize="10" fontWeight="bold">🚀 Jezero Crater Exploration</text>
    </Frame>
  );
}

