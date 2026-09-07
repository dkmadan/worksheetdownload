import React from "react";
import { Frame } from "./NatureScenes";

// 11. How Clouds Are Made
export function CloudFormationScene() {
  return (
    <Frame label="How Clouds Are Made: Thermal Updrafts, Dew Point, Condensation Nuclei">
      <defs>
        <linearGradient id="cf-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="60%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#cf-sky)" />
      {/* Sun warming ground */}
      <circle cx="60" cy="50" r="28" fill="#fde047" />
      {/* Warm rising arrows (thermals) */}
      <path d="M120 220 Q110 160 130 110" stroke="#f97316" strokeWidth="4" strokeDasharray="4 6" fill="none" />
      <path d="M160 220 Q170 160 150 110" stroke="#f97316" strokeWidth="4" strokeDasharray="4 6" fill="none" />
      <text x="110" y="240" fill="#ea580c" fontSize="10" fontWeight="bold">Rising Warm Air</text>
      {/* Fluffy cumulus cloud forming */}
      <g transform="translate(260, 90)">
        <ellipse cx="0" cy="0" rx="65" ry="32" fill="#ffffff" />
        <ellipse cx="45" cy="5" rx="45" ry="26" fill="#ffffff" />
        <ellipse cx="-45" cy="10" rx="38" ry="24" fill="#ffffff" />
        <ellipse cx="10" cy="-20" r="35" fill="#ffffff" />
        <text x="-40" y="10" fill="#0284c7" fontSize="12" fontWeight="bold">Condensation Zone</text>
      </g>
      {/* Ground */}
      <path d="M0 220 Q220 200 440 220 V260 H0 Z" fill="#16a34a" />
    </Frame>
  );
}

// 12. The Journey of the Wind
export function WindJourneyScene() {
  return (
    <Frame label="The Journey of the Wind: High and low pressure, wind turbine, streamlines">
      <defs>
        <linearGradient id="wj-sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#wj-sky)" />
      {/* Wind turbine */}
      <g transform="translate(320, 140)">
        <rect x="-4" y="0" width="8" height="90" fill="#e2e8f0" />
        <circle cx="0" cy="0" r="7" fill="#cbd5e1" />
        {/* 3 blades */}
        <path d="M0 0 L-6 -60 L6 -60 Z" fill="#ffffff" />
        <path d="M0 0 L50 25 L45 35 Z" fill="#ffffff" />
        <path d="M0 0 L-45 35 L-50 25 Z" fill="#ffffff" />
      </g>
      {/* Wind Streamlines */}
      <path d="M20 70 Q140 40 260 80 T420 60" stroke="#bae6fd" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.85" />
      <path d="M40 110 Q160 80 280 120 T440 100" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.9" />
      <path d="M10 150 Q130 130 250 160 T410 140" stroke="#bae6fd" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.8" />
      {/* Pressure badges */}
      <text x="30" y="50" fill="#fde047" fontSize="12" fontWeight="black">HIGH Pressure (Cold) ➡️</text>
      <text x="240" y="240" fill="#fca5a5" fontSize="12" fontWeight="black">LOW Pressure (Warm)</text>
    </Frame>
  );
}

// 13. How Rain Happens
export function RainHappensScene() {
  return (
    <Frame label="How Rain Happens: Cloud Droplets, Coalescence, Falling Raindrops">
      <defs>
        <linearGradient id="rh-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="60%" stopColor="#334155" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#rh-bg)" />
      {/* Dark Rain Cloud */}
      <g transform="translate(220, 60)">
        <ellipse cx="0" cy="0" rx="90" ry="40" fill="#64748b" />
        <ellipse cx="60" cy="10" rx="60" ry="32" fill="#475569" />
        <ellipse cx="-60" cy="10" rx="60" ry="32" fill="#475569" />
        <ellipse cx="20" cy="-25" r="45" fill="#64748b" />
      </g>
      {/* Raindrops falling with speed streaks */}
      {[80, 130, 180, 230, 280, 330, 380].map((x, i) => (
        <g key={i} transform={`translate(${x}, ${120 + (i % 3) * 30})`}>
          <ellipse cx="0" cy="0" rx="6" ry="10" fill="#38bdf8" />
          <line x1="0" y1="-15" x2="0" y2="-5" stroke="#93c5fd" strokeWidth="2" />
        </g>
      ))}
      <text x="130" y="235" fill="#93c5fd" fontSize="13" fontWeight="bold">Coalescence: Droplets Merge & Fall 🌧️</text>
    </Frame>
  );
}

// 14. How Thunderstorms Form
export function ThunderstormScene() {
  return (
    <Frame label="How Thunderstorms Form: Towering Cumulonimbus, Electrical Charge, Lightning">
      <defs>
        <linearGradient id="ts-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="60%" stopColor="#312e81" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#ts-sky)" />
      {/* Anvil cloud top */}
      <path d="M40 50 Q220 30 400 50 L340 100 L100 100 Z" fill="#64748b" />
      <text x="180" y="45" fill="#fde047" fontSize="11" fontWeight="bold">+ + + + +</text>
      {/* Cloud body */}
      <rect x="100" y="100" width="240" height="80" fill="#334155" />
      <text x="180" y="170" fill="#38bdf8" fontSize="11" fontWeight="bold">- - - - -</text>
      {/* Jagged lightning bolt */}
      <path d="M220 170 L200 200 L230 200 L195 245" stroke="#fef08a" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="195" cy="245" r="10" fill="#fef08a" opacity="0.6" />
      <text x="250" y="215" fill="#ffffff" fontSize="13" fontWeight="black">⚡ 30,000°C Flash</text>
    </Frame>
  );
}

// 15. Why Do We Have Seasons?
export function SeasonsScene() {
  return (
    <Frame label="Why Do We Have Seasons: 23.5 Degree Earth Tilt and Sunlight Angle">
      <defs>
        <linearGradient id="ss-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#ss-bg)" />
      {/* Center Sun */}
      <circle cx="220" cy="130" r="32" fill="#fde047" />
      <circle cx="220" cy="130" r="44" fill="#fef08a" opacity="0.25" />
      {/* Orbit ring */}
      <ellipse cx="220" cy="130" rx="170" ry="75" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 6" />
      {/* Summer Earth (Tilted toward Sun) */}
      <g transform="translate(60, 130)">
        <circle cx="0" cy="0" r="20" fill="#0284c7" />
        <line x1="-10" y1="-28" x2="10" y2="28" stroke="#f43f5e" strokeWidth="2.5" />
        <text x="-25" y="42" fill="#86efac" fontSize="10" fontWeight="bold">June: North Summer</text>
      </g>
      {/* Winter Earth (Tilted away from Sun) */}
      <g transform="translate(380, 130)">
        <circle cx="0" cy="0" r="20" fill="#0284c7" />
        <line x1="-10" y1="-28" x2="10" y2="28" stroke="#f43f5e" strokeWidth="2.5" />
        <text x="-35" y="42" fill="#93c5fd" fontSize="10" fontWeight="bold">Dec: North Winter</text>
      </g>
      <text x="140" y="30" fill="#ffffff" fontSize="13" fontWeight="black">23.5° Axial Tilt Creates Seasons</text>
    </Frame>
  );
}

// 16. How Snow Is Formed
export function SnowFormationScene() {
  return (
    <Frame label="How Snow Is Formed: Six-Sided Crystalline Snowflake Lattice">
      <defs>
        <linearGradient id="sf-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="50%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#0c4a6e" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#sf-bg)" />
      {/* Giant Detailed Symmetrical Snowflake in Center */}
      <g transform="translate(220, 120)">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <g key={i} transform={`rotate(${angle})`}>
            <line x1="0" y1="0" x2="0" y2="-80" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
            <path d="M0 -35 L-20 -50 M0 -35 L20 -50" stroke="#e0f2fe" strokeWidth="3" strokeLinecap="round" />
            <path d="M0 -60 L-15 -72 M0 -60 L15 -72" stroke="#e0f2fe" strokeWidth="3" strokeLinecap="round" />
          </g>
        ))}
        <circle cx="0" cy="0" r="10" fill="#bae6fd" />
      </g>
      <text x="120" y="240" fill="#ffffff" fontSize="12" fontWeight="bold">Direct Vapor to Solid Deposition ❄️</text>
    </Frame>
  );
}

// 17. The Life Cycle of a Hurricane
export function HurricaneScene() {
  return (
    <Frame label="The Life Cycle of a Hurricane: Swirling Spiral Eyewall and Calm Eye">
      <defs>
        <linearGradient id="hc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#082f49" />
          <stop offset="50%" stopColor="#0c4a6e" />
          <stop offset="100%" stopColor="#075985" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#hc-bg)" />
      {/* Spiral Storm Bands */}
      <g transform="translate(220, 120)">
        <path d="M0 0 Q60 -80 140 -20 Q180 50 120 120" stroke="#ffffff" strokeWidth="18" fill="none" opacity="0.85" />
        <path d="M0 0 Q-60 80 -140 20 Q-180 -50 -120 -120" stroke="#ffffff" strokeWidth="18" fill="none" opacity="0.85" />
        {/* Eyewall */}
        <circle cx="0" cy="0" r="30" fill="none" stroke="#f1f5f9" strokeWidth="14" />
        {/* Calm Blue Eye */}
        <circle cx="0" cy="0" r="14" fill="#0369a1" />
        <text x="-12" y="4" fill="#fde047" fontSize="9" fontWeight="bold">Eye</text>
      </g>
      <text x="130" y="240" fill="#fde047" fontSize="12" fontWeight="black">Spiral Vortex &gt;74 mph Winds</text>
    </Frame>
  );
}

// 18. How Weather Forecasting Works
export function WeatherForecastingScene() {
  return (
    <Frame label="How Weather Forecasting Works: Satellites, Doppler Radar, Supercomputer Models">
      <defs>
        <linearGradient id="wf-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#wf-bg)" />
      {/* Orbiting Satellite */}
      <g transform="translate(90, 70)">
        <rect x="-15" y="-10" width="30" height="20" fill="#e2e8f0" />
        <rect x="-45" y="-6" width="28" height="12" fill="#0284c7" />
        <rect x="17" y="-6" width="28" height="12" fill="#0284c7" />
        {/* Signal waves */}
        <path d="M0 12 Q30 50 60 90" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 4" fill="none" />
        <text x="-25" y="32" fill="#38bdf8" fontSize="10" fontWeight="bold">Weather Satellite</text>
      </g>
      {/* Doppler Radar Tower */}
      <g transform="translate(340, 170)">
        <polygon points="-15,50 15,50 6,0 -6,0" fill="#94a3b8" />
        <circle cx="0" cy="-10" r="18" fill="#f1f5f9" />
        <text x="-35" y="70" fill="#94a3b8" fontSize="10" fontWeight="bold">Doppler Radar</text>
      </g>
      {/* Computer Model Grid Screen */}
      <g transform="translate(200, 130)">
        <rect x="-45" y="-30" width="90" height="60" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" rx="6" />
        <path d="M-35 0 L-15 -15 L15 10 L35 -10" stroke="#fde047" strokeWidth="2.5" fill="none" />
        <text x="-35" y="45" fill="#fde047" fontSize="9" fontWeight="bold">Supercomputer 💻</text>
      </g>
    </Frame>
  );
}

// 19. The Journey of Sunlight
export function SunlightJourneyScene() {
  return (
    <Frame label="The Journey of Sunlight: Sun Core Fusion, 8 Minute Space Flight, Earth Atmosphere">
      <defs>
        <radialGradient id="sj-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#fde047" />
          <stop offset="80%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#dc2626" />
        </radialGradient>
      </defs>
      <rect width="440" height="260" fill="#050814" />
      {/* Sun on left */}
      <circle cx="40" cy="130" r="80" fill="url(#sj-sun)" />
      {/* Photon speed ray */}
      <line x1="120" y1="130" x2="330" y2="130" stroke="#fde047" strokeWidth="6" strokeDasharray="16 8" />
      {/* Earth on right */}
      <g transform="translate(370, 130)">
        <circle cx="0" cy="0" r="30" fill="#0284c7" />
        <circle cx="0" cy="0" r="36" fill="none" stroke="#38bdf8" strokeWidth="3" opacity="0.6" />
      </g>
      <text x="140" y="105" fill="#fde047" fontSize="13" fontWeight="black">300,000 km/s (Speed of Light)</text>
      <text x="160" y="165" fill="#ffffff" fontSize="12" fontWeight="bold">8 Minutes &amp; 20 Seconds to Earth ⏱️</text>
    </Frame>
  );
}

// 20. Weather vs Climate
export function WeatherVsClimateScene() {
  return (
    <Frame label="Weather vs Climate: Daily Rain Gauge Moods vs 30-Year Global Climate Belts">
      <defs>
        <linearGradient id="vc-left" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="vc-right" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="220" height="260" fill="url(#vc-left)" />
      <rect x="220" y="0" width="220" height="260" fill="url(#vc-right)" />
      <line x1="220" y1="0" x2="220" y2="260" stroke="#ffffff" strokeWidth="3" />
      {/* Weather side (Daily) */}
      <g transform="translate(110, 100)">
        <text x="-40" y="-45" fill="#ffffff" fontSize="15" fontWeight="black">WEATHER</text>
        <text x="-35" y="-25" fill="#93c5fd" fontSize="10" fontWeight="bold">(Today's Mood)</text>
        <text x="-25" y="30" fontSize="42">🌧️</text>
        <text x="-30" y="70" fill="#ffffff" fontSize="11" fontWeight="bold">24-Hour Shifts</text>
      </g>
      {/* Climate side (30+ Years) */}
      <g transform="translate(330, 100)">
        <text x="-40" y="-45" fill="#ffffff" fontSize="15" fontWeight="black">CLIMATE</text>
        <text x="-40" y="-25" fill="#a7f3d0" fontSize="10" fontWeight="bold">(30-Year Trend)</text>
        <text x="-25" y="30" fontSize="42">🌍</text>
        <text x="-40" y="70" fill="#ffffff" fontSize="11" fontWeight="bold">Tropical / Polar Zones</text>
      </g>
    </Frame>
  );
}
