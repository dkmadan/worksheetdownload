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
