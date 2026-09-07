import React from "react";
import { Frame } from "./NatureScenes";

// 51. How Electricity Travels
export function ElectricityCircuitScene() {
  return (
    <Frame label="How Electricity Travels: Battery, Closed Circuit Copper Wires, Glowing Bulb">
      <defs>
        <linearGradient id="ec-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#ec-bg)" />
      {/* Battery on Left */}
      <g transform="translate(80, 130)">
        <rect x="-18" y="-35" width="36" height="70" rx="4" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
        <rect x="-8" y="-42" width="16" height="8" fill="#fde047" />
        <text x="-6" y="-10" fill="#ffffff" fontSize="16" fontWeight="black">+</text>
        <text x="-6" y="25" fill="#ffffff" fontSize="16" fontWeight="black">-</text>
        <text x="-18" y="55" fill="#93c5fd" fontSize="10" fontWeight="bold">Battery</text>
      </g>
      {/* Copper Wire Circuit Loop */}
      <rect x="80" y="60" width="260" height="140" fill="none" stroke="#f97316" strokeWidth="6" strokeLinecap="round" />
      {/* Switch in Top Wire (Closed) */}
      <g transform="translate(210, 60)">
        <circle cx="-15" cy="0" r="5" fill="#ffffff" />
        <circle cx="15" cy="0" r="5" fill="#ffffff" />
        <line x1="-15" y1="0" x2="15" y2="0" stroke="#22c55e" strokeWidth="6" />
        <text x="-25" y="-12" fill="#86efac" fontSize="9" fontWeight="bold">Closed Switch</text>
      </g>
      {/* Glowing Light Bulb on Right */}
      <g transform="translate(340, 130)">
        <circle cx="0" cy="0" r="28" fill="#fde047" />
        <circle cx="0" cy="0" r="40" fill="#fde047" opacity="0.3" />
        <path d="M-8 -5 Q0 -15 8 -5" stroke="#ea580c" strokeWidth="3" fill="none" />
        <rect x="-12" y="16" width="24" height="16" fill="#94a3b8" />
        <text x="-20" y="55" fill="#fde047" fontSize="10" fontWeight="bold">Light Bulb 💡</text>
      </g>
      <text x="140" y="30" fill="#fde047" fontSize="13" fontWeight="black">Closed Electrical Circuit Loop ⚡</text>
    </Frame>
  );
}

// 52. How Magnets Work
export function MagnetsScene() {
  return (
    <Frame label="How Magnets Work: North and South Poles, Curved Magnetic Field Lines">
      <defs>
        <linearGradient id="mg-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#mg-bg)" />
      {/* Bar Magnet in Center */}
      <g transform="translate(220, 130)">
        {/* North Pole (Red) */}
        <rect x="-80" y="-20" width="80" height="40" fill="#ef4444" rx="4" />
        <text x="-50" y="8" fill="#ffffff" fontSize="20" fontWeight="black">N</text>
        {/* South Pole (Blue) */}
        <rect x="0" y="-20" width="80" height="40" fill="#3b82f6" rx="4" />
        <text x="35" y="8" fill="#ffffff" fontSize="20" fontWeight="black">S</text>
      </g>
      {/* Curved Magnetic Field Lines */}
      <g stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 6" fill="none" opacity="0.8">
        <path d="M140 110 C140 30 300 30 300 110" />
        <path d="M140 150 C140 230 300 230 300 150" />
        <path d="M140 120 C80 50 360 50 300 120" />
        <path d="M140 140 C80 210 360 210 300 140" />
      </g>
      <text x="140" y="30" fill="#fde047" fontSize="13" fontWeight="black">Invisible Magnetic Force Fields 🧲</text>
    </Frame>
  );
}

// 53. How Sound Travels
export function SoundWavesScene() {
  return (
    <Frame label="How Sound Travels: Vibrating Tuning Fork, Compression and Rarefaction Waves">
      <defs>
        <linearGradient id="sw-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#sw-bg)" />
      {/* Tuning Fork on Left */}
      <g transform="translate(70, 130)">
        <rect x="-12" y="10" width="24" height="60" fill="#cbd5e1" rx="4" />
        <path d="M-12 10 L-12 -60 M12 10 L12 -60" stroke="#f1f5f9" strokeWidth="8" strokeLinecap="round" />
        {/* Vibration aura */}
        <path d="M-22 -60 L-22 0 M22 -60 L22 0" stroke="#93c5fd" strokeWidth="2" strokeDasharray="2 3" />
      </g>
      {/* Sound Compression Waves heading Right */}
      <g stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.9">
        <path d="M130 90 Q150 130 130 170" />
        <path d="M170 70 Q200 130 170 190" strokeWidth="5" />
        <path d="M220 50 Q260 130 220 210" strokeWidth="6" />
        <path d="M280 40 Q330 130 280 220" strokeWidth="6.5" />
      </g>
      {/* Human Ear on Right */}
      <g transform="translate(370, 130)">
        <path d="M0 -40 C-30 -40 -30 40 0 40 C15 40 15 15 0 0 C-15 -15 -10 -40 0 -40 Z" fill="#fda4af" stroke="#ffffff" strokeWidth="3" />
        <text x="-15" y="60" fill="#ffffff" fontSize="10" fontWeight="bold">Eardrum</text>
      </g>
      <text x="130" y="30" fill="#fde047" fontSize="13" fontWeight="black">Longitudinal Compression Waves 🔊</text>
    </Frame>
  );
}

// 54. How Light Creates Shadows
export function LightShadowsScene() {
  return (
    <Frame label="How Light Creates Shadows: Flashlight, Opaque Block, Dark Umbra on Wall">
      <defs>
        <linearGradient id="ls-bg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="35%" stopColor="#ca8a04" />
          <stop offset="70%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#ls-bg)" />
      {/* Flashlight on Left */}
      <g transform="translate(40, 130)">
        <polygon points="0,-15 30,-25 30,25 0,15" fill="#475569" />
        <rect x="-35" y="-12" width="35" height="24" fill="#334155" rx="3" />
        {/* Light Beam Cone */}
        <polygon points="30,-25 180,-60 180,60 30,25" fill="#fef08a" opacity="0.6" />
      </g>
      {/* Opaque Toy Block */}
      <g transform="translate(200, 130)">
        <rect x="-20" y="-35" width="40" height="70" fill="#dc2626" stroke="#ffffff" strokeWidth="2" rx="4" />
        <text x="-18" y="55" fill="#ffffff" fontSize="10" fontWeight="bold">Opaque</text>
      </g>
      {/* Dark Shadow Umbra cast on wall */}
      <g transform="translate(370, 130)">
        <rect x="0" y="-90" width="16" height="180" fill="#e2e8f0" />
        <rect x="-4" y="-60" width="8" height="120" fill="#020617" />
        <text x="-50" y="5" fill="#ffffff" fontSize="11" fontWeight="black">Umbra 👤</text>
      </g>
      <text x="130" y="30" fill="#ffffff" fontSize="13" fontWeight="black">Straight Light Rays Blocked by Opaque Matter</text>
    </Frame>
  );
}

// 55. How a Rainbow Is Formed
export function RainbowFormationScene() {
  return (
    <Frame label="How a Rainbow Is Formed: Light Enters Raindrop, Refracts, Reflects, and Disperses">
      <defs>
        <linearGradient id="rb-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0c4a6e" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#rb-bg)" />
      {/* Giant Spherical Raindrop in Center */}
      <circle cx="220" cy="130" r="75" fill="#38bdf8" opacity="0.3" stroke="#ffffff" strokeWidth="3" />
      {/* White Sunlight Ray entering from top-left */}
      <line x1="60" y1="70" x2="165" y2="95" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
      <text x="50" y="55" fill="#ffffff" fontSize="11" fontWeight="black">White Sunlight ☀️</text>
      {/* Internal Refraction & Reflection Path */}
      {/* Ray bends to back wall */}
      <line x1="165" y1="95" x2="285" y2="140" stroke="#fef08a" strokeWidth="3.5" />
      {/* Total internal bounce to bottom-left */}
      <line x1="285" y1="140" x2="185" y2="190" stroke="#f97316" strokeWidth="3.5" />
      {/* Dispersed Rainbow Rays exiting (Red to Violet) */}
      <g transform="translate(185, 190)" strokeWidth="4" strokeLinecap="round">
        <line x1="0" y1="0" x2="-80" y2="40" stroke="#ef4444" />
        <line x1="0" y1="0" x2="-85" y2="30" stroke="#f97316" />
        <line x1="0" y1="0" x2="-90" y2="20" stroke="#eab308" />
        <line x1="0" y1="0" x2="-95" y2="10" stroke="#22c55e" />
        <line x1="0" y1="0" x2="-100" y2="0" stroke="#3b82f6" />
        <line x1="0" y1="0" x2="-105" y2="-10" stroke="#a855f7" />
      </g>
      <text x="240" y="240" fill="#fde047" fontSize="12" fontWeight="black">Refraction + Internal Reflection 🌈</text>
    </Frame>
  );
}

// 56. The Three States of Matter
export function StatesOfMatterScene() {
  return (
    <Frame label="The Three States of Matter: Solid, Liquid, Gas Particle Motion">
      <defs>
        <linearGradient id="sm-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#sm-bg)" />
      {/* 1. SOLID JAR */}
      <g transform="translate(80, 130)">
        <rect x="-35" y="-45" width="70" height="90" rx="6" fill="none" stroke="#64748b" strokeWidth="3" />
        {/* Tightly packed grid of particles */}
        {[-15, 0, 15].map((x) =>
          [-15, 0, 15, 30].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#38bdf8" />
          ))
        )}
        <text x="-25" y="65" fill="#38bdf8" fontSize="11" fontWeight="bold">1. Solid 🧊</text>
      </g>
      {/* 2. LIQUID JAR */}
      <g transform="translate(220, 130)">
        <rect x="-35" y="-45" width="70" height="90" rx="6" fill="none" stroke="#64748b" strokeWidth="3" />
        {/* Fluid sliding particles */}
        <circle cx="-15" cy="15" r="5" fill="#60a5fa" />
        <circle cx="10" cy="18" r="5" fill="#60a5fa" />
        <circle cx="-5" cy="30" r="5" fill="#60a5fa" />
        <circle cx="20" cy="32" r="5" fill="#60a5fa" />
        <circle cx="-20" cy="32" r="5" fill="#60a5fa" />
        <circle cx="5" cy="2" r="5" fill="#60a5fa" />
        <text x="-25" y="65" fill="#60a5fa" fontSize="11" fontWeight="bold">2. Liquid 💧</text>
      </g>
      {/* 3. GAS JAR */}
      <g transform="translate(360, 130)">
        <rect x="-35" y="-45" width="70" height="90" rx="6" fill="none" stroke="#64748b" strokeWidth="3" />
        {/* Far apart bouncing particles with speed lines */}
        <circle cx="-15" cy="-25" r="5" fill="#f472b6" />
        <circle cx="20" cy="-10" r="5" fill="#f472b6" />
        <circle cx="-20" cy="15" r="5" fill="#f472b6" />
        <circle cx="15" cy="30" r="5" fill="#f472b6" />
        <text x="-20" y="65" fill="#f472b6" fontSize="11" fontWeight="bold">3. Gas 💨</text>
      </g>
      <text x="140" y="35" fill="#ffffff" fontSize="13" fontWeight="black">Thermal Kinetic Energy of Matter</text>
    </Frame>
  );
}

// 57. The Journey of Heat
export function HeatTransferScene() {
  return (
    <Frame label="The Journey of Heat: Conduction, Convection, Infrared Radiation">
      <defs>
        <linearGradient id="ht-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c2d12" />
          <stop offset="60%" stopColor="#451a03" />
          <stop offset="100%" stopColor="#1c1917" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#ht-bg)" />
      {/* Stove Burner Flame */}
      <g transform="translate(220, 200)">
        <ellipse cx="0" cy="0" rx="40" ry="10" fill="#f97316" />
        <polygon points="-25,0 0,-30 25,0" fill="#fde047" />
        <polygon points="-15,0 0,-20 15,0" fill="#ffffff" />
      </g>
      {/* Cooking Pot with Convection currents */}
      <g transform="translate(220, 130)">
        <rect x="-60" y="-40" width="120" height="70" fill="#475569" stroke="#94a3b8" strokeWidth="2" rx="4" />
        {/* Circular convection arrows inside */}
        <path d="M-25 -10 A15 15 0 1 1 -5 5" stroke="#fde047" strokeWidth="3" fill="none" />
        <path d="M25 -10 A15 15 0 1 0 5 5" stroke="#fde047" strokeWidth="3" fill="none" />
        <text x="-35" y="15" fill="#fde047" fontSize="10" fontWeight="bold">Convection</text>
        {/* Metal Handle (Conduction) */}
        <rect x="60" y="-30" width="70" height="12" fill="#ef4444" stroke="#ffffff" strokeWidth="1" rx="3" />
        <text x="65" y="-12" fill="#ffffff" fontSize="9" fontWeight="bold">Conduction ➡️</text>
      </g>
      {/* Radiation Heat Waves */}
      <g stroke="#f97316" strokeWidth="2.5" strokeDasharray="3 4" fill="none" transform="translate(100, 190)">
        <path d="M0 0 Q-20 -20 -40 0 T-80 0" />
        <text x="-80" y="20" fill="#f97316" fontSize="10" fontWeight="bold">Radiation ♨️</text>
      </g>
      <text x="130" y="30" fill="#ffffff" fontSize="13" fontWeight="black">3 Pathways: Conduction, Convection, Radiation</text>
    </Frame>
  );
}

// 58. How Simple Machines Make Work Easier
export function SimpleMachinesScene() {
  return (
    <Frame label="How Simple Machines Make Work Easier: Lever, Pulley, Ramp, Wedge, Screw">
      <defs>
        <linearGradient id="sm-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f766e" />
          <stop offset="100%" stopColor="#115e59" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#sm-bg)" />
      {/* 1. Lever on Fulcrum */}
      <g transform="translate(80, 140)">
        <polygon points="0,20 -15,45 15,45" fill="#fde047" />
        <line x1="-50" y1="10" x2="50" y2="30" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
        <rect x="-55" y="-5" width="20" height="20" fill="#ef4444" />
        <text x="-25" y="65" fill="#ffffff" fontSize="10" fontWeight="bold">1. Lever</text>
      </g>
      {/* 2. Pulley */}
      <g transform="translate(220, 130)">
        <circle cx="0" cy="-25" r="18" fill="#cbd5e1" stroke="#334155" strokeWidth="3" />
        <line x1="-18" y1="-25" x2="-18" y2="35" stroke="#fde047" strokeWidth="3" />
        <line x1="18" y1="-25" x2="18" y2="20" stroke="#fde047" strokeWidth="3" />
        <rect x="-26" y="30" width="16" height="16" fill="#ef4444" />
        <text x="-25" y="65" fill="#ffffff" fontSize="10" fontWeight="bold">2. Pulley</text>
      </g>
      {/* 3. Inclined Plane Ramp */}
      <g transform="translate(360, 140)">
        <polygon points="-40,40 40,40 40,-20" fill="#e2e8f0" />
        <rect x="-10" y="5" width="18" height="18" fill="#ef4444" transform="rotate(-36 -10 5)" />
        <text x="-25" y="65" fill="#ffffff" fontSize="10" fontWeight="bold">3. Ramp</text>
      </g>
      <text x="130" y="35" fill="#fde047" fontSize="13" fontWeight="black">Mechanical Advantage: Force × Distance ⚙️</text>
    </Frame>
  );
}

// 59. How a Battery Works
export function BatteryPhysicsScene() {
  return (
    <Frame label="How a Battery Works: Zinc Anode, Cathode, Electrolyte, Electron Flow">
      <defs>
        <linearGradient id="bp-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#bp-bg)" />
      {/* Cutaway Battery in Center */}
      <g transform="translate(220, 130)">
        {/* Battery Can */}
        <rect x="-100" y="-55" width="200" height="110" fill="#334155" stroke="#94a3b8" strokeWidth="3" rx="8" />
        {/* Negative Anode (Left) */}
        <rect x="-90" y="-45" width="70" height="90" fill="#3b82f6" opacity="0.85" rx="4" />
        <text x="-75" y="-5" fill="#ffffff" fontSize="11" fontWeight="bold">Anode (-)</text>
        <text x="-80" y="15" fill="#bae6fd" fontSize="9">Zinc Oxidation</text>
        {/* Electrolyte / Separator (Middle) */}
        <rect x="-10" y="-45" width="20" height="90" fill="#eab308" opacity="0.75" />
        {/* Positive Cathode (Right) */}
        <rect x="20" y="-45" width="70" height="90" fill="#ef4444" opacity="0.85" rx="4" />
        <text x="28" y="-5" fill="#ffffff" fontSize="11" fontWeight="bold">Cathode (+)</text>
        <text x="32" y="15" fill="#fecdd3" fontSize="9">Reduction</text>
        {/* Positive Nub */}
        <rect x="100" y="-20" width="12" height="40" fill="#e2e8f0" rx="3" />
      </g>
      {/* Electron Flow Arrow on top */}
      <path d="M140 60 Q220 30 300 60" stroke="#fde047" strokeWidth="4" fill="none" strokeDasharray="4 6" />
      <text x="160" y="45" fill="#fde047" fontSize="11" fontWeight="bold">e⁻ Electron Flow ➡️</text>
    </Frame>
  );
}

// 60. How Bridges Stay Strong
export function BridgeForcesScene() {
  return (
    <Frame label="How Bridges Stay Strong: Compression, Tension, Triangular Truss Framework">
      <defs>
        <linearGradient id="bf-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="60%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#bf-sky)" />
      {/* River Canyon Below */}
      <rect x="0" y="190" width="440" height="70" fill="#0369a1" />
      {/* Concrete Piers on Shore */}
      <rect x="40" y="150" width="35" height="110" fill="#64748b" />
      <rect x="365" y="150" width="35" height="110" fill="#64748b" />
      {/* Roadway Deck */}
      <rect x="30" y="145" width="380" height="12" fill="#334155" />
      {/* Suspension Towers & Cables */}
      <g stroke="#ffffff" strokeWidth="3" fill="none">
        <line x1="140" y1="40" x2="140" y2="150" strokeWidth="8" stroke="#cbd5e1" />
        <line x1="300" y1="40" x2="300" y2="150" strokeWidth="8" stroke="#cbd5e1" />
        {/* Main Sweeping Cable */}
        <path d="M40 145 Q140 40 220 120 Q300 40 400 145" stroke="#fde047" strokeWidth="4" />
        {/* Vertical suspenders */}
        {[80, 110, 170, 200, 240, 270, 330, 360].map((x, i) => (
          <line key={i} x1={x} y1="90" x2={x} y2="145" stroke="#f1f5f9" strokeWidth="1.5" />
        ))}
      </g>
      {/* Force Vectors */}
      <text x="110" y="25" fill="#fde047" fontSize="11" fontWeight="bold">⬇️ Compression Down</text>
      <text x="270" y="25" fill="#86efac" fontSize="11" fontWeight="bold">↔️ Tension Pull</text>
      <text x="140" y="235" fill="#ffffff" fontSize="12" fontWeight="black">Suspension Bridge Engineering 🌉</text>
    </Frame>
  );
}
