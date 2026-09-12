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

// 61. How Friction Works
export function FrictionMechanicsScene() {
  return (
    <Frame label="How Friction Works: Microscopic Asperities Interlocking & Heat Generation">
      <defs>
        <linearGradient id="fr-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c2d12" />
          <stop offset="100%" stopColor="#431407" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#fr-bg)" />
      {/* Sliding Block and Surface with Jagged Asperities */}
      <g transform="translate(60, 90)">
        {/* Top Sliding Block */}
        <rect x="20" y="0" width="280" height="40" fill="#ea580c" stroke="#fed7aa" strokeWidth="2" rx="4" />
        <text x="110" y="26" fill="#ffffff" fontSize="12" fontWeight="bold">Top Sliding Block ➡️</text>
        {/* Microscopic Jagged Contact Zone */}
        <path d="M20 40 L35 48 L50 40 L65 48 L80 40 L95 48 L110 40 L125 48 L140 40 L155 48 L170 40 L185 48 L200 40 L215 48 L230 40 L245 48 L260 40 L275 48 L290 40 L300 40" fill="none" stroke="#fde047" strokeWidth="3" />
        {/* Bottom Stationary Surface */}
        <path d="M20 48 L35 40 L50 48 L65 40 L80 48 L95 40 L110 48 L125 40 L140 48 L155 40 L170 48 L185 40 L200 48 L215 40 L230 48 L245 40 L260 48 L275 40 L290 48 L300 48" fill="none" stroke="#fdba74" strokeWidth="3" />
        <rect x="20" y="48" width="280" height="40" fill="#475569" stroke="#94a3b8" strokeWidth="2" rx="4" />
        <text x="100" y="74" fill="#cbd5e1" fontSize="12" fontWeight="bold">Stationary Ground Surface</text>
      </g>
      {/* Thermal Heat Sparks */}
      <g transform="translate(220, 135)">
        <circle cx="0" cy="0" r="10" fill="#facc15" />
        <circle cx="0" cy="0" r="18" fill="#f97316" opacity="0.4" />
        <text x="-40" y="35" fill="#fde047" fontSize="10" fontWeight="black">Thermal Friction Heat 🔥</text>
      </g>
      <text x="110" y="32" fill="#fde047" fontSize="13" fontWeight="black">Microscopic Contact Asperities 🛞</text>
    </Frame>
  );
}

// 62. How Gravity Affects Us
export function GravityAccelerationScene() {
  return (
    <Frame label="How Gravity Affects Us: 9.8 m/s² Acceleration & Spacetime Warping">
      <defs>
        <linearGradient id="gr-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#gr-bg)" />
      {/* Spacetime Grid Funnel */}
      <g stroke="#4338ca" strokeWidth="1" fill="none" opacity="0.6">
        {[-80, -40, 0, 40, 80].map((x, i) => (
          <line key={i} x1={220 + x * 2} y1="40" x2={220 + x * 0.8} y2="220" />
        ))}
        {[60, 100, 140, 180, 210].map((y, i) => (
          <ellipse key={i} cx="220" cy={y} rx={60 + (y - 40) * 0.7} ry={15 + (y - 40) * 0.15} />
        ))}
      </g>
      {/* Earth Center Sphere */}
      <g transform="translate(220, 190)">
        <circle cx="0" cy="0" r="45" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
        <path d="M-20 -15 Q-10 -30 10 -25 Q25 -10 15 15 Q-10 25 -20 -15 Z" fill="#22c55e" opacity="0.8" />
        <text x="-20" y="5" fill="#ffffff" fontSize="11" fontWeight="bold">Earth</text>
      </g>
      {/* Falling Apple with Acceleration Vector */}
      <g transform="translate(220, 70)">
        <circle cx="0" cy="0" r="14" fill="#ef4444" />
        <path d="M0 -14 Q4 -22 8 -20" stroke="#84cc16" strokeWidth="3" fill="none" />
        <line x1="0" y1="16" x2="0" y2="45" stroke="#fde047" strokeWidth="4" strokeLinecap="round" />
        <polygon points="-5,45 5,45 0,55" fill="#fde047" />
        <text x="18" y="32" fill="#fde047" fontSize="10" fontWeight="bold">g = 9.8 m/s² ⬇️</text>
      </g>
      <text x="120" y="30" fill="#fde047" fontSize="13" fontWeight="black">Universal Gravitational Attraction 🍏</text>
    </Frame>
  );
}

// 63. How Mirrors Work
export function MirrorReflectionScene() {
  return (
    <Frame label="How Mirrors Work: Specular Reflection, Angle of Incidence = Angle of Reflection">
      <defs>
        <linearGradient id="mr-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c4a6e" />
          <stop offset="100%" stopColor="#082f49" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#mr-bg)" />
      {/* Horizontal Mirror Line with Silver backing */}
      <g transform="translate(220, 170)">
        {/* Silver Reflective Surface */}
        <line x1="-150" y1="0" x2="150" y2="0" stroke="#e2e8f0" strokeWidth="6" />
        {/* Glass Base & Hatch marks */}
        <line x1="-150" y1="6" x2="150" y2="6" stroke="#38bdf8" strokeWidth="3" />
        {/* Normal Perpendicular Line */}
        <line x1="0" y1="0" x2="0" y2="-120" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
        <text x="-45" y="-125" fill="#94a3b8" fontSize="10" fontWeight="bold">Normal Line</text>
        {/* Incident Ray (Left) */}
        <line x1="-100" y1="-100" x2="0" y2="0" stroke="#fde047" strokeWidth="4" strokeLinecap="round" />
        <text x="-125" y="-60" fill="#fde047" fontSize="10" fontWeight="bold">Incident Ray (θi)</text>
        {/* Reflected Ray (Right) */}
        <line x1="0" y1="0" x2="100" y2="-100" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
        <text x="60" y="-60" fill="#38bdf8" fontSize="10" fontWeight="bold">Reflected Ray (θr)</text>
        {/* Angle Arc */}
        <path d="M-25 -25 A35 35 0 0 1 0 -35" fill="none" stroke="#fde047" strokeWidth="2" />
        <path d="M0 -35 A35 35 0 0 1 25 -25" fill="none" stroke="#38bdf8" strokeWidth="2" />
        <text x="-70" y="25" fill="#e2e8f0" fontSize="11" fontWeight="black">Law of Reflection: θi = θr 🪞</text>
      </g>
      <text x="130" y="30" fill="#ffffff" fontSize="13" fontWeight="black">Smooth Specular Light Bouncing</text>
    </Frame>
  );
}

// 64. How Lenses Bend Light
export function LensRefractionScene() {
  return (
    <Frame label="How Lenses Bend Light: Convex Lens Convergence at Focal Point">
      <defs>
        <linearGradient id="ln-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#134e4a" />
          <stop offset="100%" stopColor="#042f2e" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#ln-bg)" />
      {/* Convex Glass Lens in Center */}
      <g transform="translate(180, 130)">
        <ellipse cx="0" cy="0" rx="20" ry="75" fill="#a5f3fc" opacity="0.65" stroke="#38bdf8" strokeWidth="3" />
        <text x="-25" y="-85" fill="#67e8f9" fontSize="10" fontWeight="bold">Convex Lens</text>
        {/* Optical Axis Line */}
        <line x1="-150" y1="0" x2="220" y2="0" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Incoming Parallel Rays */}
        <line x1="-140" y1="-45" x2="0" y2="-45" stroke="#fde047" strokeWidth="3" />
        <line x1="-140" y1="0" x2="0" y2="0" stroke="#fde047" strokeWidth="3" />
        <line x1="-140" y1="45" x2="0" y2="45" stroke="#fde047" strokeWidth="3" />
        {/* Refracted Converging Rays meeting at Focal Point */}
        <line x1="0" y1="-45" x2="130" y2="0" stroke="#fde047" strokeWidth="3" />
        <line x1="0" y1="0" x2="130" y2="0" stroke="#fde047" strokeWidth="3" />
        <line x1="0" y1="45" x2="130" y2="0" stroke="#fde047" strokeWidth="3" />
        {/* Focal Point Glow */}
        <circle cx="130" cy="0" r="6" fill="#ef4444" />
        <circle cx="130" cy="0" r="14" fill="#ef4444" opacity="0.35" />
        <text x="110" y="25" fill="#fca5a5" fontSize="10" fontWeight="black">Focal Point (F) 🔍</text>
      </g>
      <text x="120" y="30" fill="#fde047" fontSize="13" fontWeight="black">Refraction &amp; Optical Magnification</text>
    </Frame>
  );
}

// 65. Why Objects Float or Sink
export function BuoyancyFloatScene() {
  return (
    <Frame label="Why Objects Float or Sink: Buoyant Upward Force vs Gravity & Density">
      <defs>
        <linearGradient id="by-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#bae6fd" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#by-sky)" />
      {/* Water Pool in Bottom Half */}
      <rect x="0" y="110" width="440" height="150" fill="#0284c7" opacity="0.85" />
      {/* 1. Floating Wood Block (Left) */}
      <g transform="translate(110, 110)">
        <rect x="-35" y="-20" width="70" height="40" fill="#b45309" stroke="#ffffff" strokeWidth="2" rx="4" />
        <text x="-25" y="5" fill="#fef3c7" fontSize="9" fontWeight="bold">Wood (0.6 g/cm³)</text>
        <path d="M0 -30 L0 -22" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow)" />
        <path d="M0 35 L0 22" stroke="#22c55e" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="-40" y="55" fill="#fef08a" fontSize="10" fontWeight="bold">FLOATS (Buoyant = Weight)</text>
      </g>
      {/* 2. Sinking Steel Pebble (Right) */}
      <g transform="translate(320, 190)">
        <circle cx="0" cy="0" r="18" fill="#475569" stroke="#cbd5e1" strokeWidth="2" />
        <text x="-25" y="-25" fill="#fecdd3" fontSize="9" fontWeight="bold">Steel (7.8 g/cm³)</text>
        <path d="M0 -8 L0 12" stroke="#ef4444" strokeWidth="4" />
        <polygon points="-4,12 4,12 0,20" fill="#ef4444" />
        <text x="-40" y="35" fill="#ffffff" fontSize="10" fontWeight="bold">SINKS (Weight &gt; Buoyancy)</text>
      </g>
      <text x="120" y="30" fill="#0c4a6e" fontSize="13" fontWeight="black">Archimedes' Buoyancy Principle 🚢</text>
    </Frame>
  );
}

// 66. How Airplanes Fly
export function AirplaneLiftScene() {
  return (
    <Frame label="How Airplanes Fly: 4 Forces of Flight (Lift, Weight, Thrust, Drag) on Airfoil">
      <defs>
        <linearGradient id="af-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#075985" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#af-bg)" />
      {/* Airfoil Wing Cross-Section in Center */}
      <g transform="translate(220, 130)">
        {/* Curved Airfoil Wing */}
        <path d="M-80 0 C-40 -45 40 -35 80 0 C40 10 -40 10 -80 0 Z" fill="#cbd5e1" stroke="#ffffff" strokeWidth="3" />
        <text x="-25" y="-5" fill="#1e293b" fontSize="10" fontWeight="bold">Airfoil Wing</text>
        {/* 4 Force Arrows */}
        {/* 1. LIFT Up */}
        <line x1="0" y1="-25" x2="0" y2="-80" stroke="#4ade80" strokeWidth="5" strokeLinecap="round" />
        <polygon points="-6,-80 6,-80 0,-92" fill="#4ade80" />
        <text x="10" y="-70" fill="#4ade80" fontSize="11" fontWeight="black">LIFT ⬆️</text>
        {/* 2. WEIGHT Down */}
        <line x1="0" y1="10" x2="0" y2="65" stroke="#f87171" strokeWidth="5" strokeLinecap="round" />
        <polygon points="-6,65 6,65 0,77" fill="#f87171" />
        <text x="10" y="60" fill="#f87171" fontSize="11" fontWeight="black">WEIGHT ⬇️</text>
        {/* 3. THRUST Forward (Left) */}
        <line x1="-80" y1="0" x2="-140" y2="0" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
        <polygon points="-140,-6 -140,6 -152,0" fill="#38bdf8" />
        <text x="-145" y="-12" fill="#38bdf8" fontSize="11" fontWeight="black">THRUST ⬅️</text>
        {/* 4. DRAG Backward (Right) */}
        <line x1="80" y1="0" x2="140" y2="0" stroke="#fbbf24" strokeWidth="5" strokeLinecap="round" />
        <polygon points="140,-6 140,6 152,0" fill="#fbbf24" />
        <text x="95" y="-12" fill="#fbbf24" fontSize="11" fontWeight="black">DRAG ➡️</text>
      </g>
      <text x="110" y="30" fill="#fde047" fontSize="13" fontWeight="black">Bernoulli &amp; Newton Flight Aerodynamics ✈️</text>
    </Frame>
  );
}

// 67. How Refrigerators Keep Food Cold
export function RefrigeratorCycleScene() {
  return (
    <Frame label="How Refrigerators Keep Food Cold: Compressor, Condenser, Evaporator Phase Change">
      <defs>
        <linearGradient id="rf-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f766e" />
          <stop offset="100%" stopColor="#115e59" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#rf-bg)" />
      {/* Refrigerator Loop Diagram */}
      <g transform="translate(220, 130)">
        {/* Refrigerator Box Frame */}
        <rect x="-140" y="-60" width="130" height="120" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="3" rx="8" />
        <text x="-130" y="-35" fill="#0284c7" fontSize="11" fontWeight="bold">Cold Interior (3°C)</text>
        {/* Inside Evaporator Coil (Blue) */}
        <path d="M-120 -15 Q-100 0 -80 -15 T-40 -15 M-120 15 Q-100 30 -80 15 T-40 15" stroke="#0284c7" strokeWidth="4" fill="none" />
        <text x="-125" y="45" fill="#0369a1" fontSize="9" fontWeight="bold">Evaporator (Absorbs Heat)</text>
        {/* Outside Condenser Coil (Red / Orange) */}
        <g transform="translate(50, 0)">
          <path d="M0 -40 Q20 -25 40 -40 T80 -40 M0 10 Q20 25 40 10 T80 10" stroke="#ea580c" strokeWidth="4" fill="none" />
          <text x="0" y="-50" fill="#fde047" fontSize="10" fontWeight="bold">Condenser Coils (Hot)</text>
          {/* Compressor Pump */}
          <circle cx="40" cy="45" r="16" fill="#334155" stroke="#ffffff" strokeWidth="2" />
          <text x="25" y="50" fill="#ffffff" fontSize="8" fontWeight="bold">Pump</text>
        </g>
      </g>
      <text x="120" y="30" fill="#fde047" fontSize="13" fontWeight="black">Vapor-Compression Heat Extraction 🧊</text>
    </Frame>
  );
}

// 68. How Solar Panels Make Electricity
export function SolarPanelElectricityScene() {
  return (
    <Frame label="How Solar Panels Make Electricity: Photons Strike Silicon, Freeing Electrons">
      <defs>
        <linearGradient id="sp-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#sp-bg)" />
      {/* Sun on Top-Left */}
      <g transform="translate(60, 60)">
        <circle cx="0" cy="0" r="24" fill="#fde047" />
        <text x="-40" y="-30" fill="#fde047" fontSize="10" fontWeight="bold">Solar Photons ☀️</text>
        {/* Photon Streams */}
        <path d="M20 20 L90 80 M30 10 L130 75 M10 30 L80 105" stroke="#fde047" strokeWidth="3" strokeDasharray="3 3" />
      </g>
      {/* Tilted Blue Silicon Solar Cell */}
      <g transform="translate(180, 130)">
        {/* N-Type Silicon Layer */}
        <polygon points="0,0 140,-40 180,-15 40,25" fill="#3b82f6" stroke="#93c5fd" strokeWidth="1.5" />
        <text x="50" y="-12" fill="#ffffff" fontSize="9" fontWeight="bold">N-Type (Phosphorus)</text>
        {/* P-N Junction Interface */}
        <polygon points="0,5 140,-35 180,-10 40,30" fill="#fde047" opacity="0.6" />
        {/* P-Type Silicon Layer */}
        <polygon points="0,10 140,-30 180,-5 40,35" fill="#1d4ed8" stroke="#60a5fa" strokeWidth="1.5" />
        <text x="50" y="20" fill="#bfdbfe" fontSize="9" fontWeight="bold">P-Type (Boron)</text>
      </g>
      {/* Wire & Light Bulb Flow */}
      <g transform="translate(360, 130)">
        <circle cx="0" cy="0" r="18" fill="#fde047" />
        <circle cx="0" cy="0" r="28" fill="#fde047" opacity="0.35" />
        <text x="-25" y="40" fill="#fde047" fontSize="10" fontWeight="bold">Clean DC Power 💡</text>
      </g>
      <text x="120" y="30" fill="#fde047" fontSize="13" fontWeight="black">Photovoltaic Semiconductor Effect ☀️</text>
    </Frame>
  );
}

// 69. How Wi-Fi Carries Information
export function WifiRadioWavesScene() {
  return (
    <Frame label="How Wi-Fi Carries Information: Gigahertz Radio Waves, Modulation, Router to Phone">
      <defs>
        <linearGradient id="wf-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#wf-bg)" />
      {/* Wi-Fi Router on Left */}
      <g transform="translate(80, 140)">
        <rect x="-30" y="0" width="60" height="30" rx="4" fill="#334155" stroke="#64748b" strokeWidth="2" />
        <circle cx="-15" cy="15" r="3" fill="#22c55e" />
        <circle cx="0" cy="15" r="3" fill="#38bdf8" />
        <circle cx="15" cy="15" r="3" fill="#fde047" />
        {/* Antennas */}
        <line x1="-20" y1="0" x2="-20" y2="-35" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
        <line x1="20" y1="0" x2="20" y2="-35" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
        <text x="-35" y="48" fill="#cbd5e1" fontSize="10" fontWeight="bold">Wi-Fi Router</text>
      </g>
      {/* Concentric Radio Waves Transmitting */}
      <g transform="translate(90, 120)" stroke="#38bdf8" strokeWidth="3" fill="none" opacity="0.8">
        <path d="M20 -30 A40 40 0 0 1 20 30" />
        <path d="M50 -50 A70 70 0 0 1 50 50" stroke="#818cf8" strokeWidth="3.5" />
        <path d="M80 -70 A100 100 0 0 1 80 70" stroke="#c084fc" strokeWidth="4" />
      </g>
      {/* Binary Data Bits Floating */}
      <g fill="#fde047" fontSize="11" fontWeight="black" transform="translate(220, 110)">
        <text x="0" y="0">1 0 1 1 0</text>
        <text x="10" y="25">0 1 0 0 1</text>
      </g>
      {/* Smartphone on Right */}
      <g transform="translate(360, 130)">
        <rect x="-20" y="-45" width="40" height="80" rx="6" fill="#1e293b" stroke="#ffffff" strokeWidth="2" />
        <rect x="-16" y="-35" width="32" height="60" fill="#38bdf8" rx="2" />
        <text x="-25" y="55" fill="#ffffff" fontSize="10" fontWeight="bold">Smartphone</text>
      </g>
      <text x="120" y="30" fill="#fde047" fontSize="13" fontWeight="black">2.4 / 5 GHz Electromagnetic Waves 📶</text>
    </Frame>
  );
}

// 70. How Touchscreens Work
export function TouchscreenCapacitiveScene() {
  return (
    <Frame label="How Touchscreens Work: Projected Capacitive Grid & Conductive Finger Detection">
      <defs>
        <linearGradient id="tc-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4c0519" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#tc-bg)" />
      {/* Transparent ITO Capacitive Grid Matrix */}
      <g transform="translate(140, 120)">
        {/* Glass Screen */}
        <rect x="0" y="-40" width="220" height="90" fill="#1e293b" opacity="0.8" stroke="#38bdf8" strokeWidth="2" rx="4" />
        {/* ITO Horizontal & Vertical Grid Lines */}
        {[-20, 0, 20, 40].map((y, i) => (
          <line key={`h-${i}`} x1="0" y1={y} x2="220" y2={y} stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
        ))}
        {[30, 60, 90, 120, 150, 180].map((x, i) => (
          <line key={`v-${i}`} x1={x} y1="-40" x2={x} y2="50" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
        ))}
        {/* Touch Intersection Point Glow */}
        <circle cx="120" cy="0" r="14" fill="#f43f5e" />
        <circle cx="120" cy="0" r="28" fill="#f43f5e" opacity="0.3" />
        <text x="140" y="-10" fill="#fda4af" fontSize="9" fontWeight="bold">X-Y Coordinate (120, 0)</text>
      </g>
      {/* Conductive Human Hand/Fingertip */}
      <g transform="translate(260, 75)">
        <path d="M-10 -40 L-10 10 Q-10 25 0 25 Q10 25 10 10 L10 -40 Z" fill="#fed7aa" stroke="#f97316" strokeWidth="2" />
        <text x="-40" y="-45" fill="#fde047" fontSize="10" fontWeight="bold">Conductive Finger 👆</text>
      </g>
      <text x="110" y="30" fill="#ffffff" fontSize="13" fontWeight="black">Projected Capacitive Touch Matrix 📱</text>
    </Frame>
  );
}

