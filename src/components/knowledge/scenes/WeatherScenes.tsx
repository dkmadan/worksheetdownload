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

// 11. How Tornadoes Form
export function TornadoFormationScene() {
  return (
    <Frame label="How Tornadoes Form: Supercell Mesocyclone, Rotating Updraft, Funnel Cloud Touchdown">
      <defs>
        <linearGradient id="tf-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="60%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <linearGradient id="tf-funnel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="50%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#tf-sky)" />
      {/* Dark Supercell Cloud Base */}
      <path d="M0 0 H440 V75 Q380 95 320 70 Q260 100 180 65 Q100 90 0 60 Z" fill="#020617" />
      {/* Tornado Funnel Vortex */}
      <path d="M190 70 Q210 130 205 180 Q210 230 216 250 L224 250 Q230 230 235 180 Q230 130 250 70 Z" fill="url(#tf-funnel)" />
      {/* Rotating Air Rings around Funnel */}
      <ellipse cx="220" cy="90" rx="35" ry="8" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,3" />
      <ellipse cx="220" cy="140" rx="25" ry="6" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,3" />
      <ellipse cx="220" cy="190" rx="16" ry="4" fill="none" stroke="#f1f5f9" strokeWidth="1.5" strokeDasharray="3,2" />
      {/* Ground Debris Cloud */}
      <ellipse cx="220" cy="250" rx="45" ry="12" fill="#64748b" opacity="0.85" />
      <circle cx="195" cy="245" r="8" fill="#475569" />
      <circle cx="245" cy="245" r="9" fill="#475569" />
      {/* Lightning Flash */}
      <polygon points="340,70 325,120 338,120 320,175 350,110 335,110" fill="#facc15" />
      {/* Inflow Wind Arrows */}
      <g transform="translate(100, 210)">
        <line x1="0" y1="0" x2="60" y2="0" stroke="#f43f5e" strokeWidth="3" />
        <polygon points="60,-4 68,0 60,4" fill="#f43f5e" />
        <text x="0" y="-8" fill="#f43f5e" fontSize="9" fontWeight="bold">Warm Inflow</text>
      </g>
      <g transform="translate(340, 210)">
        <line x1="0" y1="0" x2="-60" y2="0" stroke="#38bdf8" strokeWidth="3" />
        <polygon points="-60,-4 -68,0 -60,4" fill="#38bdf8" />
        <text x="-55" y="-8" fill="#38bdf8" fontSize="9" fontWeight="bold">Cold Downdraft</text>
      </g>
      {/* Labels */}
      <rect x="15" y="15" width="135" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#f8fafc" fontSize="10" fontWeight="bold">🌪️ Supercell Mesocyclone</text>
    </Frame>
  );
}

// 12. How Fog Forms
export function FogFormationScene() {
  return (
    <Frame label="How Fog Forms: Radiational Cooling, Ground Dew Point, Suspended Water Droplets">
      <defs>
        <linearGradient id="ffg-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="50%" stopColor="#312e81" />
          <stop offset="100%" stopColor="#065f46" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#ffg-sky)" />
      {/* Crescent Moon & Cold Night Sky */}
      <circle cx="380" cy="40" r="18" fill="#fef08a" />
      <circle cx="386" cy="36" r="16" fill="#1e1b4b" />
      {/* Mountains & Trees in Background */}
      <polygon points="60,180 140,90 220,180" fill="#064e3b" opacity="0.6" />
      <polygon points="180,180 270,80 360,180" fill="#064e3b" opacity="0.5" />
      {/* Rolling Forest Hills */}
      <path d="M0 260 L0 180 Q120 160 240 185 T440 170 V260 H0 Z" fill="#064e3b" />
      {/* Dense Ground Fog Layers */}
      <ellipse cx="220" cy="180" rx="200" ry="24" fill="#ffffff" opacity="0.35" />
      <ellipse cx="160" cy="205" rx="170" ry="22" fill="#f1f5f9" opacity="0.45" />
      <ellipse cx="280" cy="225" rx="190" ry="25" fill="#ffffff" opacity="0.55" />
      <ellipse cx="200" cy="245" rx="210" ry="20" fill="#f8fafc" opacity="0.65" />
      {/* Temperature Inversion Arrow */}
      <g transform="translate(50, 60)">
        <line x1="0" y1="50" x2="0" y2="0" stroke="#38bdf8" strokeWidth="2.5" />
        <polygon points="-4,0 0,-8 4,0" fill="#38bdf8" />
        <text x="8" y="28" fill="#bae6fd" fontSize="9" fontWeight="bold">Radiational Heat Loss ❄️</text>
      </g>
      {/* Labels */}
      <rect x="25" y="15" width="145" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="32" y="29" fill="#f8fafc" fontSize="10" fontWeight="bold">🌫️ Surface Dew Point Saturation</text>
    </Frame>
  );
}

// 13. Why the Sky Is Blue
export function BlueSkyScatteringScene() {
  return (
    <Frame label="Why the Sky Is Blue: Rayleigh Scattering, Solar White Light, Scattered Blue Photons">
      <defs>
        <linearGradient id="bs-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="60%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#bae6fd" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#bs-sky)" />
      {/* Sun emitting white light */}
      <circle cx="50" cy="50" r="30" fill="#ffffff" stroke="#fde047" strokeWidth="4" />
      {/* White/Multi-color light beam */}
      <path d="M80 60 L240 120" stroke="#fef08a" strokeWidth="6" strokeLinecap="round" />
      <path d="M80 60 L240 120" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
      {/* Nitrogen / Oxygen Molecule that scatters */}
      <g transform="translate(240, 120)">
        <circle cx="0" cy="0" r="14" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
        <text x="-7" y="4" fill="#38bdf8" fontSize="9" fontWeight="bold">N2</text>
        {/* Radiating Blue Scattered Photons */}
        <g stroke="#0284c7" strokeWidth="2.5">
          <line x1="0" y1="-14" x2="0" y2="-45" />
          <polygon points="-3,-45 0,-52 3,-45" fill="#0284c7" />
          <line x1="-12" y1="-10" x2="-35" y2="-30" />
          <line x1="12" y1="-10" x2="35" y2="-30" />
          <line x1="14" y1="0" x2="45" y2="0" />
          <line x1="10" y1="10" x2="35" y2="35" />
          <line x1="-10" y1="10" x2="-35" y2="35" />
        </g>
      </g>
      {/* Long Red wavelength passing straight through */}
      <path d="M240 120 L420 180" stroke="#ef4444" strokeWidth="4" strokeDasharray="8,4" />
      {/* Observer eye on ground */}
      <g transform="translate(320, 210)">
        <circle cx="0" cy="0" r="16" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
        <circle cx="0" cy="0" r="7" fill="#0284c7" />
        <circle cx="0" cy="0" r="3" fill="#0f172a" />
        <text x="-25" y="32" fill="#0f172a" fontSize="9" fontWeight="bold">Human Eye (Blue Cone)</text>
      </g>
      {/* Labels */}
      <rect x="230" y="15" width="185" height="22" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="237" y="30" fill="#38bdf8" fontSize="10" fontWeight="bold">🔵 Rayleigh Scattering (1/λ⁴)</text>
    </Frame>
  );
}

// 14. How Hail Forms
export function HailFormationScene() {
  return (
    <Frame label="How Hail Forms: Storm Updraft, Supercooled Water Droplets, Onion-like Ice Accretion">
      <defs>
        <linearGradient id="hf-storm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="50%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#hf-storm)" />
      {/* Freezing Line (0°C) */}
      <line x1="0" y1="130" x2="440" y2="130" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6,4" />
      <text x="15" y="125" fill="#38bdf8" fontSize="9" fontWeight="bold">❄️ Freezing Level (0°C / 32°F)</text>
      {/* Updraft Arrow (Looping through freezing zone) */}
      <path d="M120 230 C100 150 80 40 180 50 C240 60 220 180 200 240" stroke="#f59e0b" strokeWidth="4" fill="none" strokeDasharray="6,4" />
      <polygon points="175,45 185,50 177,57" fill="#f59e0b" />
      {/* Layered Hailstone Graphic */}
      <g transform="translate(320, 130)">
        <circle cx="0" cy="0" r="55" fill="#e2e8f0" stroke="#38bdf8" strokeWidth="3" />
        <circle cx="0" cy="0" r="42" fill="#94a3b8" />
        <circle cx="0" cy="0" r="30" fill="#f1f5f9" />
        <circle cx="0" cy="0" r="18" fill="#64748b" />
        <circle cx="0" cy="0" r="8" fill="#ffffff" />
        <text x="-40" y="75" fill="#f8fafc" fontSize="9" fontWeight="bold">Layered Hailstone Ring</text>
      </g>
      {/* Supercooled Droplets */}
      <circle cx="140" cy="80" r="3" fill="#38bdf8" />
      <circle cx="160" cy="65" r="4" fill="#38bdf8" />
      <circle cx="210" cy="95" r="3.5" fill="#38bdf8" />
      {/* Labels */}
      <rect x="15" y="15" width="135" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#f8fafc" fontSize="10" fontWeight="bold">⚡ 100 mph Storm Updraft</text>
    </Frame>
  );
}

// 15. What Causes a Drought
export function DroughtCausesScene() {
  return (
    <Frame label="What Causes a Drought: High Pressure Ridge, Scorching Heat, Cracked Dry Soil, Withered Crops">
      <defs>
        <linearGradient id="dc-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#dc-sky)" />
      {/* Blazing Sun */}
      <circle cx="220" cy="45" r="32" fill="#ef4444" stroke="#facc15" strokeWidth="5" />
      {/* Sinking High-Pressure Air Arrows */}
      <g stroke="#b45309" strokeWidth="3">
        <line x1="160" y1="75" x2="160" y2="120" />
        <polygon points="156,120 160,128 164,120" fill="#b45309" />
        <line x1="280" y1="75" x2="280" y2="120" />
        <polygon points="276,120 280,128 284,120" fill="#b45309" />
      </g>
      {/* Cracked Dry Earth Floor */}
      <path d="M0 160 H440 V260 H0 Z" fill="#78350f" />
      {/* Soil Cracks */}
      <path d="M60 160 L90 200 L70 240 L110 260 M90 200 L130 190 L160 230 M220 160 L240 210 L210 250 M240 210 L290 200 L320 250 M370 160 L350 200 L390 240" stroke="#451a03" strokeWidth="3" fill="none" />
      {/* Withered Dry Crop */}
      <g transform="translate(180, 160)">
        <path d="M0 0 Q-15 -25 -30 -20 M0 0 Q15 -25 30 -20 M0 0 L0 -35" stroke="#a16207" strokeWidth="2.5" fill="none" />
      </g>
      {/* Labels */}
      <rect x="15" y="15" width="130" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#fef08a" fontSize="10" fontWeight="bold">🛑 High-Pressure Ridge</text>
      <rect x="295" y="15" width="130" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="302" y="29" fill="#fde68a" fontSize="10" fontWeight="bold">📉 Soil Moisture Deficit</text>
    </Frame>
  );
}

// 16. How Floods Happen
export function FloodCausesScene() {
  return (
    <Frame label="How Floods Happen: Saturated Soil, Torrential Rain, Overflown Riverbanks, Submerged Land">
      <defs>
        <linearGradient id="fl-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="50%" stopColor="#475569" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#fl-sky)" />
      {/* Storm Clouds & Heavy Rain Sheet */}
      <g fill="#334155">
        <circle cx="80" cy="30" r="35" />
        <circle cx="160" cy="25" r="40" />
        <circle cx="240" cy="35" r="35" />
        <circle cx="330" cy="25" r="45" />
        <circle cx="410" cy="35" r="35" />
      </g>
      {/* Rain Streaks */}
      <g stroke="#38bdf8" strokeWidth="2" strokeDasharray="5,4">
        <line x1="50" y1="70" x2="40" y2="130" />
        <line x1="120" y1="70" x2="110" y2="130" />
        <line x1="200" y1="70" x2="190" y2="130" />
        <line x1="280" y1="70" x2="270" y2="130" />
        <line x1="360" y1="70" x2="350" y2="130" />
      </g>
      {/* Submerged Landscape & Flooded River */}
      <path d="M0 150 Q120 135 240 160 T440 145 V260 H0 Z" fill="#0369a1" />
      <path d="M0 180 Q120 165 240 190 T440 175 V260 H0 Z" fill="#0284c7" opacity="0.8" />
      {/* Submerged House Roof */}
      <g transform="translate(130, 160)">
        <polygon points="0,20 25,0 50,20" fill="#dc2626" />
        <rect x="10" y="20" width="30" height="15" fill="#f8fafc" />
      </g>
      {/* Submerged Tree Top */}
      <g transform="translate(310, 165)">
        <circle cx="0" cy="0" r="22" fill="#15803d" />
        <rect x="-3" y="10" width="6" height="15" fill="#78350f" />
      </g>
      {/* Labels */}
      <rect x="15" y="15" width="135" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#38bdf8" fontSize="10" fontWeight="bold">🌧️ Watershed Overtopping</text>
    </Frame>
  );
}

// 17. How a Weather Front Works
export function WeatherFrontScene() {
  return (
    <Frame label="How a Weather Front Works: Cold Air Wedge, Warm Air Uplift, Frontal Clouds and Rain">
      <defs>
        <linearGradient id="wf-cold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="wf-warm" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="#f8fafc" />
      {/* Cold Air Wedge (Dense) */}
      <path d="M0 70 L0 260 H260 Q180 200 120 120 Z" fill="url(#wf-cold)" />
      {/* Warm Air Mass Being Lifted */}
      <path d="M120 120 Q180 200 260 260 H440 V70 Z" fill="url(#wf-warm)" opacity="0.85" />
      {/* Cumulonimbus Cloud on Frontal Boundary */}
      <g fill="#475569" transform="translate(140, 40)">
        <circle cx="0" cy="40" r="30" />
        <circle cx="35" cy="20" r="35" />
        <circle cx="75" cy="35" r="28" />
        <circle cx="40" cy="-5" r="25" />
      </g>
      {/* Frontal Rain */}
      <g stroke="#0284c7" strokeWidth="2.5" strokeDasharray="4,4">
        <line x1="140" y1="90" x2="130" y2="150" />
        <line x1="170" y1="90" x2="160" y2="150" />
        <line x1="200" y1="90" x2="190" y2="150" />
      </g>
      {/* Arrow labels */}
      <text x="35" y="190" fill="#ffffff" fontSize="12" fontWeight="black">COLD AIR (Dense)</text>
      <text x="280" y="190" fill="#ffffff" fontSize="12" fontWeight="black">WARM AIR (Light)</text>
      {/* Labels */}
      <rect x="15" y="15" width="135" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#f8fafc" fontSize="10" fontWeight="bold">🚩 Cold Front Wedge Slope</text>
    </Frame>
  );
}

// 18. What Causes Ocean Currents
export function OceanCurrentsScene() {
  return (
    <Frame label="What Causes Ocean Currents: Trade Winds, Coriolis Effect, Thermohaline Circulation">
      <defs>
        <linearGradient id="oc-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#082f49" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#oc-bg)" />
      {/* Global Ocean Gyre Loop */}
      <ellipse cx="220" cy="130" rx="140" ry="70" fill="none" stroke="#38bdf8" strokeWidth="6" strokeDasharray="16,8" />
      {/* Warm Surface Current (Red Arrow Top) */}
      <path d="M120 70 Q220 50 320 75" stroke="#ef4444" strokeWidth="6" fill="none" />
      <polygon points="320,70 332,77 320,84" fill="#ef4444" />
      <text x="175" y="45" fill="#fca5a5" fontSize="10" fontWeight="bold">Warm Surface Current ☀️</text>
      {/* Cold Deep Current (Blue Arrow Bottom) */}
      <path d="M320 190 Q220 210 120 185" stroke="#3b82f6" strokeWidth="6" fill="none" />
      <polygon points="120,190 108,183 120,176" fill="#3b82f6" />
      <text x="170" y="225" fill="#93c5fd" fontSize="10" fontWeight="bold">Cold Deep Current ❄️</text>
      {/* Continents (Americas & Eurasia/Africa silhouettes) */}
      <path d="M0 40 Q40 60 50 140 Q60 200 30 260 H0 Z" fill="#15803d" />
      <path d="M440 30 Q390 70 400 150 Q410 210 440 260 Z" fill="#15803d" />
      {/* Labels */}
      <rect x="15" y="15" width="135" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#f8fafc" fontSize="10" fontWeight="bold">🌊 Global Ocean Gyre</text>
    </Frame>
  );
}

// 19. How the Greenhouse Effect Works
export function GreenhouseEffectScene() {
  return (
    <Frame label="How the Greenhouse Effect Works: Solar Inflow, Infrared Re-radiation, Greenhouse Gas Blanket">
      <defs>
        <linearGradient id="gh-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="60%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#065f46" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#gh-bg)" />
      {/* Sun */}
      <circle cx="50" cy="45" r="25" fill="#facc15" />
      {/* Atmosphere Boundary Layer */}
      <line x1="0" y1="90" x2="440" y2="90" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="8,4" />
      <text x="280" y="85" fill="#7dd3fc" fontSize="9" fontWeight="bold">Atmosphere Layer (CO2, CH4, H2O)</text>
      {/* Incoming Sunlight Arrow */}
      <line x1="75" y1="65" x2="160" y2="210" stroke="#fef08a" strokeWidth="4" />
      <polygon points="156,210 162,218 166,210" fill="#fef08a" />
      {/* Outgoing Infrared Radiation (Trapped & Reflected) */}
      <path d="M190 210 L250 110" stroke="#ef4444" strokeWidth="4" />
      <path d="M250 110 L300 200" stroke="#ef4444" strokeWidth="4" />
      <polygon points="296,200 302,208 306,200" fill="#ef4444" />
      <text x="255" y="140" fill="#fca5a5" fontSize="9" fontWeight="bold">Trapped Infrared Heat ♨️</text>
      {/* Earth Surface */}
      <path d="M0 220 Q220 205 440 220 V260 H0 Z" fill="#15803d" />
      {/* Labels */}
      <rect x="15" y="15" width="145" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="22" y="29" fill="#f8fafc" fontSize="10" fontWeight="bold">🛡️ Natural Thermal Blanket</text>
    </Frame>
  );
}

// 20. Why Deserts Are So Dry
export function DesertDrynessScene() {
  return (
    <Frame label="Why Deserts Are So Dry: Mountain Rain Shadow, Subtropical High Pressure, Sand Dunes, Cacti">
      <defs>
        <linearGradient id="dd-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#dd-sky)" />
      {/* Rain Shadow Mountain (Blocks Clouds) */}
      <polygon points="120,50 0,260 240,260" fill="#64748b" />
      <polygon points="120,50 100,90 120,85 140,90" fill="#ffffff" />
      {/* Rain Cloud Stalled on Windward Coast */}
      <g transform="translate(30, 70)" fill="#475569">
        <circle cx="0" cy="0" r="22" />
        <circle cx="25" cy="-5" r="25" />
      </g>
      <g stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,3">
        <line x1="20" y1="95" x2="10" y2="140" />
        <line x1="45" y1="95" x2="35" y2="140" />
      </g>
      {/* Desert Leeward Dunes */}
      <path d="M180 260 Q260 170 340 210 T440 180 V260 H180 Z" fill="#f59e0b" />
      <path d="M240 260 Q320 190 440 220 V260 H240 Z" fill="#d97706" />
      {/* Saguaro Cactus */}
      <g transform="translate(360, 200)">
        <rect x="-4" y="-35" width="8" height="45" rx="4" fill="#15803d" />
        <path d="M-4 -15 H-15 V-28 H-11 V-11 H-4" fill="#15803d" />
        <path d="M4 -20 H15 V-32 H11 V-16 H4" fill="#15803d" />
      </g>
      {/* Labels */}
      <rect x="230" y="15" width="185" height="20" rx="5" fill="#000000" fillOpacity="0.7" />
      <text x="237" y="29" fill="#fde68a" fontSize="10" fontWeight="bold">🏔️ Rain Shadow (Dry Leeward)</text>
    </Frame>
  );
}

