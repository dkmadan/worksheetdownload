import React from "react";
import { Frame } from "./NatureScenes";

// 41. The Journey of Food Through Your Body
export function HumanDigestionScene() {
  return (
    <Frame label="The Journey of Food Through Your Body: Esophagus, Stomach, Small & Large Intestine">
      <defs>
        <linearGradient id="hd-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="#881337" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#hd-bg)" />
      {/* Digestive System Tract */}
      <g transform="translate(220, 30)">
        {/* Mouth */}
        <ellipse cx="0" cy="15" rx="14" ry="8" fill="#fda4af" />
        {/* Esophagus tube */}
        <line x1="0" y1="20" x2="0" y2="70" stroke="#fecdd3" strokeWidth="8" />
        {/* Stomach bag */}
        <path d="M0 70 C-30 70 -40 110 -10 120 C15 125 20 100 0 70 Z" fill="#fb7185" stroke="#ffffff" strokeWidth="2" />
        <text x="-70" y="105" fill="#ffffff" fontSize="10" fontWeight="bold">Stomach</text>
        {/* Liver */}
        <polygon points="10,75 45,85 20,110" fill="#7f1d1d" />
        <text x="35" y="80" fill="#fecdd3" fontSize="9" fontWeight="bold">Liver</text>
        {/* Small intestine loops */}
        <g transform="translate(0, 150)">
          <ellipse cx="0" cy="0" rx="30" ry="22" fill="#f472b6" stroke="#ffffff" strokeWidth="2" />
          <path d="M-15 -10 Q0 15 15 -10 M-20 5 Q0 -15 20 5" stroke="#be185d" strokeWidth="3" fill="none" />
          <text x="-40" y="38" fill="#ffffff" fontSize="10" fontWeight="bold">Small Intestine (20 ft)</text>
        </g>
        {/* Large intestine colon frame */}
        <rect x="-42" y="125" width="84" height="65" fill="none" stroke="#f97316" strokeWidth="7" rx="8" />
      </g>
      <text x="110" y="245" fill="#fef08a" fontSize="12" fontWeight="black">30-Foot Muscular Digestion Tube 🍎</text>
    </Frame>
  );
}

// 42. How We Breathe
export function BreathingScene() {
  return (
    <Frame label="How We Breathe: Trachea, Branching Bronchial Trees, Lungs and Diaphragm">
      <defs>
        <linearGradient id="br-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#br-bg)" />
      {/* Respiratory Tree */}
      <g transform="translate(220, 100)">
        {/* Trachea windpipe */}
        <line x1="0" y1="-60" x2="0" y2="-10" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
        {/* Bronchi branches */}
        <path d="M0 -10 Q-30 10 -60 30" stroke="#ffffff" strokeWidth="6" fill="none" />
        <path d="M0 -10 Q30 10 60 30" stroke="#ffffff" strokeWidth="6" fill="none" />
        {/* Left and Right Lungs */}
        <path d="M-10 -20 C-60 -20 -90 60 -40 90 L-10 80 Z" fill="#fca5a5" opacity="0.85" stroke="#ffffff" strokeWidth="2" />
        <path d="M10 -20 C60 -20 90 60 40 90 L10 80 Z" fill="#fca5a5" opacity="0.85" stroke="#ffffff" strokeWidth="2" />
        {/* Moving Diaphragm dome */}
        <path d="M-110 110 Q0 85 110 110" stroke="#fde047" strokeWidth="7" fill="none" strokeLinecap="round" />
        <text x="-45" y="130" fill="#fde047" fontSize="11" fontWeight="bold">Diaphragm Muscle ⬇️</text>
      </g>
      <text x="130" y="30" fill="#ffffff" fontSize="13" fontWeight="black">300 Million Alveoli Gas Exchange 🫁</text>
    </Frame>
  );
}

// 43. How the Heart Pumps Blood
export function HeartPumpScene() {
  return (
    <Frame label="How the Heart Pumps Blood: 4 Chambers, Aorta, Pulmonary Circulation">
      <defs>
        <linearGradient id="hp-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#991b1b" />
          <stop offset="100%" stopColor="#450a0a" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#hp-bg)" />
      {/* 4-Chambered Heart */}
      <g transform="translate(220, 130)">
        {/* Heart outer muscle */}
        <path d="M0 65 C-80 15 -80 -60 0 -35 C80 -60 80 15 0 65 Z" fill="#dc2626" stroke="#ffffff" strokeWidth="3" />
        {/* Blue Right side (Deoxygenated) */}
        <path d="M0 -35 C-70 -55 -70 10 0 65 Z" fill="#1d4ed8" opacity="0.65" />
        {/* Red Left side (Oxygenated) */}
        <path d="M0 -35 C70 -55 70 10 0 65 Z" fill="#ef4444" opacity="0.8" />
        {/* Aorta arch top */}
        <path d="M10 -40 C10 -80 -30 -80 -30 -50" stroke="#ef4444" strokeWidth="12" fill="none" strokeLinecap="round" />
        {/* Vena cava blue pipe */}
        <line x1="-35" y1="-70" x2="-35" y2="-40" stroke="#3b82f6" strokeWidth="10" strokeLinecap="round" />
        <text x="-70" y="5" fill="#93c5fd" fontSize="10" fontWeight="bold">Right (Blue)</text>
        <text x="15" y="5" fill="#fef08a" fontSize="10" fontWeight="bold">Left (Red)</text>
      </g>
      <text x="130" y="30" fill="#ffffff" fontSize="13" fontWeight="black">100,000 Beats a Day / Double Loop ❤️</text>
    </Frame>
  );
}

// 44. How Bones Help Us Move
export function SkeletonBonesScene() {
  return (
    <Frame label="How Bones Help Us Move: 206 Bones, Joint Levers, Ball-and-Socket">
      <defs>
        <linearGradient id="sb-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#sb-bg)" />
      {/* Skeleton Figure in motion */}
      <g transform="translate(220, 120)" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none">
        {/* Skull */}
        <circle cx="0" cy="-70" r="16" fill="#f8fafc" stroke="#ffffff" strokeWidth="2" />
        {/* Spine */}
        <line x1="0" y1="-54" x2="0" y2="10" strokeWidth="5" />
        {/* Ribs */}
        <path d="M-15 -40 Q0 -35 15 -40 M-18 -25 Q0 -20 18 -25" strokeWidth="3" />
        {/* Arm levers (Ball & Socket Joint) */}
        <line x1="0" y1="-45" x2="-35" y2="-25" />
        <line x1="-35" y1="-25" x2="-55" y2="-55" />
        <line x1="0" y1="-45" x2="35" y2="-25" />
        <line x1="35" y1="-25" x2="55" y2="5" />
        {/* Leg levers (Hinge Knee Joint) */}
        <line x1="0" y1="10" x2="-25" y2="50" strokeWidth="5" />
        <line x1="-25" y1="50" x2="-20" y2="95" strokeWidth="4" />
        <line x1="0" y1="10" x2="25" y2="45" strokeWidth="5" />
        <line x1="25" y1="45" x2="45" y2="85" strokeWidth="4" />
      </g>
      <text x="140" y="30" fill="#fde047" fontSize="13" fontWeight="black">206 Bones: Rigid Levers &amp; Joints 🦴</text>
    </Frame>
  );
}

// 45. How Muscles Work
export function MuscleWorkScene() {
  return (
    <Frame label="How Muscles Work: Antagonistic Biceps & Triceps Pulling Arm Bones">
      <defs>
        <linearGradient id="mw-bg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#881337" />
          <stop offset="100%" stopColor="#4c0519" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#mw-bg)" />
      {/* Arm bones & muscles */}
      <g transform="translate(200, 130)">
        {/* Humerus Bone */}
        <rect x="-100" y="-10" width="100" height="20" fill="#f8fafc" rx="4" />
        {/* Forearm bone bent up */}
        <g transform="rotate(-60 0 0)">
          <rect x="0" y="-8" width="110" height="16" fill="#f8fafc" rx="4" />
        </g>
        {/* Bicep (Contracted / Bulging) */}
        <ellipse cx="-45" cy="-25" rx="35" ry="18" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
        <text x="-65" y="-20" fill="#ffffff" fontSize="10" fontWeight="bold">BICEPS (Contracted)</text>
        {/* Tricep (Relaxed / Stretched) */}
        <ellipse cx="-45" cy="20" rx="40" ry="10" fill="#991b1b" stroke="#ffffff" strokeWidth="1.5" />
        <text x="-65" y="24" fill="#fca5a5" fontSize="9" fontWeight="bold">TRICEPS (Relaxed)</text>
      </g>
      <text x="110" y="35" fill="#fde047" fontSize="13" fontWeight="black">Antagonistic Muscle Pairs: Muscles Only PULL 💪</text>
    </Frame>
  );
}

// 46. How Our Brain Sends Messages
export function BrainMessagesScene() {
  return (
    <Frame label="How Our Brain Sends Messages: 86B Neurons, Axon Myelin, Synaptic Sparks">
      <defs>
        <linearGradient id="bm-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#bm-bg)" />
      {/* Glowing Neuron */}
      <g transform="translate(180, 130)">
        {/* Cell body / Soma */}
        <circle cx="-80" cy="0" r="28" fill="#818cf8" stroke="#c7d2fe" strokeWidth="3" />
        {/* Dendrites */}
        <path d="M-105 -15 L-130 -30 M-108 5 L-140 10 M-90 -25 L-115 -50 M-90 25 L-120 45" stroke="#818cf8" strokeWidth="3" strokeLinecap="round" />
        {/* Long Axon with Myelin Sheaths */}
        <line x1="-52" y1="0" x2="110" y2="0" stroke="#c7d2fe" strokeWidth="4" />
        {[-30, 10, 50, 90].map((x, i) => (
          <rect key={i} x={x} y="-9" width="28" height="18" fill="#fde047" rx="4" />
        ))}
        {/* Synapse Spark at terminal */}
        <circle cx="130" cy="0" r="10" fill="#f43f5e" />
        <circle cx="130" cy="0" r="18" fill="#f43f5e" opacity="0.3" />
        <text x="145" y="5" fill="#f43f5e" fontSize="10" fontWeight="bold">Synapse ⚡</text>
      </g>
      <text x="120" y="35" fill="#fde047" fontSize="13" fontWeight="black">270 mph Electrochemical Signals 🧠</text>
    </Frame>
  );
}

// 47. How Our Five Senses Work
export function FiveSensesScene() {
  return (
    <Frame label="How Our Five Senses Work: Sight, Hearing, Smell, Taste, Touch">
      <defs>
        <linearGradient id="fs-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4c1d95" />
          <stop offset="100%" stopColor="#311042" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#fs-bg)" />
      {/* 5 Sense Circles */}
      <g transform="translate(60, 130)">
        <circle cx="0" cy="0" r="28" fill="#7c3aed" stroke="#ffffff" strokeWidth="2" />
        <text x="-14" y="8" fontSize="26">👁️</text>
        <text x="-14" y="44" fill="#ffffff" fontSize="10" fontWeight="bold">Sight</text>
      </g>
      <g transform="translate(140, 130)">
        <circle cx="0" cy="0" r="28" fill="#7c3aed" stroke="#ffffff" strokeWidth="2" />
        <text x="-14" y="8" fontSize="26">👂</text>
        <text x="-18" y="44" fill="#ffffff" fontSize="10" fontWeight="bold">Hearing</text>
      </g>
      <g transform="translate(220, 130)">
        <circle cx="0" cy="0" r="28" fill="#7c3aed" stroke="#ffffff" strokeWidth="2" />
        <text x="-14" y="8" fontSize="26">👃</text>
        <text x="-15" y="44" fill="#ffffff" fontSize="10" fontWeight="bold">Smell</text>
      </g>
      <g transform="translate(300, 130)">
        <circle cx="0" cy="0" r="28" fill="#7c3aed" stroke="#ffffff" strokeWidth="2" />
        <text x="-14" y="8" fontSize="26">👅</text>
        <text x="-14" y="44" fill="#ffffff" fontSize="10" fontWeight="bold">Taste</text>
      </g>
      <g transform="translate(380, 130)">
        <circle cx="0" cy="0" r="28" fill="#7c3aed" stroke="#ffffff" strokeWidth="2" />
        <text x="-14" y="8" fontSize="26">✋</text>
        <text x="-14" y="44" fill="#ffffff" fontSize="10" fontWeight="bold">Touch</text>
      </g>
      <text x="140" y="40" fill="#fde047" fontSize="13" fontWeight="black">Translating the Physical World</text>
    </Frame>
  );
}

// 48. How the Immune System Protects Us
export function ImmuneSystemScene() {
  return (
    <Frame label="How the Immune System Protects Us: White Blood Cells, Antibodies, Pathogens">
      <defs>
        <linearGradient id="is-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#is-bg)" />
      {/* Giant Friendly White Blood Cell (Macrophage) */}
      <g transform="translate(180, 130)">
        <circle cx="0" cy="0" r="55" fill="#a7f3d0" stroke="#ffffff" strokeWidth="4" />
        <path d="M-20 -15 Q-10 0 -20 15 M0 -25 Q15 0 0 25" stroke="#059669" strokeWidth="5" fill="none" />
        <text x="-40" y="75" fill="#ffffff" fontSize="11" fontWeight="bold">Macrophage Defender</text>
      </g>
      {/* Y-Shaped Antibodies */}
      <g transform="translate(290, 90)" stroke="#fde047" strokeWidth="5" strokeLinecap="round">
        <line x1="0" y1="15" x2="0" y2="0" />
        <line x1="0" y1="0" x2="-12" y2="-15" />
        <line x1="0" y1="0" x2="12" y2="-15" />
        <text x="-25" y="32" fill="#fde047" fontSize="10" fontWeight="bold">Antibody</text>
      </g>
      {/* Virus invader tagged */}
      <g transform="translate(360, 140)">
        <circle cx="0" cy="0" r="22" fill="#ef4444" />
        {/* Spikes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
          <line
            key={i}
            x1={22 * Math.cos((a * Math.PI) / 180)}
            y1={22 * Math.sin((a * Math.PI) / 180)}
            x2={30 * Math.cos((a * Math.PI) / 180)}
            y2={30 * Math.sin((a * Math.PI) / 180)}
            stroke="#ef4444"
            strokeWidth="3"
          />
        ))}
        <text x="-20" y="45" fill="#fca5a5" fontSize="10" fontWeight="bold">Neutralized Virus</text>
      </g>
      <text x="130" y="35" fill="#ffffff" fontSize="13" fontWeight="black">24/7 Cellular Defense Army 🛡️</text>
    </Frame>
  );
}

// 49. How We Grow
export function HumanGrowthScene() {
  return (
    <Frame label="How We Grow: Cell Division Mitosis and Growth Milestones">
      <defs>
        <linearGradient id="hg-bg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#hg-bg)" />
      {/* Growth Silhouettes */}
      <g transform="translate(60, 190)">
        <text x="-12" y="0" fontSize="24">👶</text>
        <text x="-15" y="25" fill="#ffffff" fontSize="10" fontWeight="bold">Baby</text>
      </g>
      <g transform="translate(150, 175)">
        <text x="-12" y="0" fontSize="32">🧒</text>
        <text x="-15" y="25" fill="#ffffff" fontSize="10" fontWeight="bold">Child</text>
      </g>
      <g transform="translate(250, 155)">
        <text x="-12" y="0" fontSize="42">🧑</text>
        <text x="-12" y="25" fill="#ffffff" fontSize="10" fontWeight="bold">Teen</text>
      </g>
      <g transform="translate(360, 140)">
        <text x="-12" y="0" fontSize="50">🧍</text>
        <text x="-15" y="25" fill="#ffffff" fontSize="10" fontWeight="bold">Adult</text>
      </g>
      {/* Mitosis Cell Splitting on top */}
      <g transform="translate(220, 60)">
        <ellipse cx="-20" cy="0" rx="18" ry="14" fill="#a7f3d0" stroke="#ffffff" strokeWidth="2" />
        <ellipse cx="20" cy="0" rx="18" ry="14" fill="#a7f3d0" stroke="#ffffff" strokeWidth="2" />
        <text x="-40" y="-22" fill="#fde047" fontSize="11" fontWeight="bold">Mitosis: 37 Trillion Cells</text>
      </g>
    </Frame>
  );
}

// 50. Why Do We Sleep?
export function SleepScene() {
  return (
    <Frame label="Why Do We Sleep: Brainwash Glymphatic Flush, Melatonin, REM Dreaming">
      <defs>
        <linearGradient id="sl-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="60%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#sl-bg)" />
      {/* Crescent Moon & Stars */}
      <g transform="translate(80, 80)">
        <path d="M0 -30 A30 30 0 0 1 0 30 A22 22 0 0 0 0 -30 Z" fill="#fde047" />
      </g>
      {/* Sleeping Head Silhouette with Glowing Brain Waves */}
      <g transform="translate(260, 140)">
        <circle cx="0" cy="-10" r="45" fill="#4338ca" opacity="0.6" />
        {/* Brainwave rhythm */}
        <path d="M-35 -10 L-20 -25 L-10 10 L5 -30 L20 15 L35 -10" stroke="#38bdf8" strokeWidth="3" fill="none" />
        <text x="-45" y="55" fill="#93c5fd" fontSize="10" fontWeight="bold">REM Memory Filing 🧠</text>
        <text x="-45" y="72" fill="#a7f3d0" fontSize="9" fontWeight="bold">Glymphatic Nightly Wash</text>
      </g>
      <text x="130" y="30" fill="#fde047" fontSize="13" fontWeight="black">Brain Detox &amp; Memory Storage 😴</text>
    </Frame>
  );
}
