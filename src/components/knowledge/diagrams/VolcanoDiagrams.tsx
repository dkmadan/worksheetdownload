import React from "react";

export function VolcanoAnatomyDiagram() {
  return (
    <div className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-950/80 px-2.5 py-1 rounded-full border border-orange-800/60">
          Cross-Section Anatomy
        </span>
        <span className="text-xs text-slate-400 font-medium">Inside an Active Composite Volcano</span>
      </div>
      <svg viewBox="0 0 720 400" className="w-full h-auto" aria-label="Anatomy of a Volcano Diagram">
        <defs>
          <linearGradient id="va-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="50%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#311006" />
          </linearGradient>
          <linearGradient id="va-magma" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="35%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
          <radialGradient id="va-chamber" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="45%" stopColor="#f97316" />
            <stop offset="85%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </radialGradient>
          <filter id="va-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Sky Background */}
        <rect width="720" height="400" fill="url(#va-sky)" rx="12" />

        {/* Ash Cloud & Eruption Column */}
        <g opacity="0.9">
          <ellipse cx="360" cy="80" rx="140" ry="50" fill="#334155" />
          <ellipse cx="320" cy="65" rx="90" ry="45" fill="#475569" />
          <ellipse cx="400" cy="65" rx="85" ry="40" fill="#1e293b" />
          <ellipse cx="360" cy="45" rx="110" ry="35" fill="#64748b" />
          <ellipse cx="360" cy="110" rx="60" ry="25" fill="#f97316" opacity="0.8" filter="url(#va-glow)" />
          {/* Volcanic bombs & sparks */}
          <circle cx="270" cy="70" r="3.5" fill="#facc15" />
          <circle cx="430" cy="55" r="4" fill="#f97316" />
          <circle cx="480" cy="85" r="3" fill="#facc15" />
          <circle cx="240" cy="100" r="3" fill="#ef4444" />
          {/* Volcanic lightning */}
          <path d="M330 40 L345 65 L335 75 L350 100" stroke="#a5f3fc" strokeWidth="2" fill="none" />
        </g>

        {/* Subterranean Crust Layers */}
        <rect x="0" y="270" width="720" height="130" fill="#292524" />
        <rect x="0" y="320" width="720" height="80" fill="#1c1917" />
        <line x1="0" y1="270" x2="720" y2="270" stroke="#44403c" strokeWidth="2" />
        <line x1="0" y1="320" x2="720" y2="320" stroke="#292524" strokeWidth="2" />

        {/* Volcano Cone Layers (Strata of Tephra & Lava) */}
        <path d="M100 270 L320 120 L400 120 L620 270 Z" fill="#44403c" />
        {/* Strata stripes */}
        <path d="M140 270 L328 140 L392 140 L580 270" stroke="#57534e" strokeWidth="12" fill="none" />
        <path d="M180 270 L335 160 L385 160 L540 270" stroke="#292524" strokeWidth="10" fill="none" />
        <path d="M220 270 L342 185 L378 185 L500 270" stroke="#78350f" strokeWidth="8" fill="none" />

        {/* Crater Rim */}
        <path d="M320 120 Q360 145 400 120" stroke="#f97316" strokeWidth="3" fill="#1c1917" />

        {/* Magma Chamber (Bottom Center) */}
        <ellipse cx="360" cy="350" rx="130" ry="42" fill="url(#va-chamber)" filter="url(#va-glow)" />

        {/* Main Central Conduit / Pipe */}
        <path d="M346 320 L350 130 L370 130 L374 320 Z" fill="url(#va-magma)" filter="url(#va-glow)" />

        {/* Secondary / Side Branch Conduit */}
        <path d="M366 230 Q420 210 470 190 L475 200 Q425 220 366 242 Z" fill="url(#va-magma)" />
        {/* Side Vent Eruption */}
        <path d="M470 190 Q500 180 520 190 Q495 205 475 200 Z" fill="#f97316" />

        {/* Surface Lava Flow */}
        <path d="M325 125 Q260 170 180 270" stroke="#f97316" strokeWidth="6" fill="none" strokeLinecap="round" filter="url(#va-glow)" />
        <path d="M325 125 Q260 170 180 270" stroke="#fef08a" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Callout Pins & Labels */}
        {/* 1. Ash Cloud */}
        <g transform="translate(110, 50)">
          <rect width="130" height="26" rx="6" fill="#0f172a" fillOpacity="0.85" stroke="#475569" strokeWidth="1" />
          <text x="10" y="17" fill="#f1f5f9" fontSize="11" fontWeight="bold">☁️ Ash &amp; Gas Plume</text>
          <line x1="130" y1="13" x2="220" y2="40" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
        </g>

        {/* 2. Crater */}
        <g transform="translate(450, 110)">
          <rect width="125" height="26" rx="6" fill="#0f172a" fillOpacity="0.85" stroke="#f97316" strokeWidth="1" />
          <text x="10" y="17" fill="#fdba74" fontSize="11" fontWeight="bold">🌋 Crater / Vent</text>
          <line x1="0" y1="13" x2="-65" y2="15" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3 3" />
        </g>

        {/* 3. Lava Flow */}
        <g transform="translate(60, 190)">
          <rect width="115" height="26" rx="6" fill="#0f172a" fillOpacity="0.85" stroke="#ea580c" strokeWidth="1" />
          <text x="10" y="17" fill="#fed7aa" fontSize="11" fontWeight="bold">🔥 Lava Flow</text>
          <line x1="115" y1="13" x2="215" y2="200" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="3 3" />
        </g>

        {/* 4. Parasitic Side Vent */}
        <g transform="translate(540, 185)">
          <rect width="135" height="26" rx="6" fill="#0f172a" fillOpacity="0.85" stroke="#ea580c" strokeWidth="1" />
          <text x="10" y="17" fill="#fdba74" fontSize="11" fontWeight="bold">Secondary Vent</text>
          <line x1="0" y1="13" x2="-45" y2="10" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="3 3" />
        </g>

        {/* 5. Central Conduit */}
        <g transform="translate(180, 235)">
          <rect width="120" height="26" rx="6" fill="#0f172a" fillOpacity="0.85" stroke="#f97316" strokeWidth="1" />
          <text x="10" y="17" fill="#fde047" fontSize="11" fontWeight="bold">Central Conduit</text>
          <line x1="120" y1="13" x2="165" y2="225" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3 3" />
        </g>

        {/* 6. Crust Strata */}
        <g transform="translate(530, 265)">
          <rect width="155" height="26" rx="6" fill="#0f172a" fillOpacity="0.85" stroke="#78716c" strokeWidth="1" />
          <text x="10" y="17" fill="#d6d3d1" fontSize="11" fontWeight="bold">Layers of Ash &amp; Lava</text>
          <line x1="0" y1="13" x2="-55" y2="-5" stroke="#78716c" strokeWidth="1.5" strokeDasharray="3 3" />
        </g>

        {/* 7. Magma Chamber */}
        <g transform="translate(70, 340)">
          <rect width="145" height="28" rx="6" fill="#0f172a" fillOpacity="0.9" stroke="#ef4444" strokeWidth="1.5" />
          <text x="10" y="18" fill="#fca5a5" fontSize="11" fontWeight="black">🔥 Magma Chamber</text>
          <line x1="145" y1="14" x2="230" y2="14" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
        </g>
      </svg>
      <p className="mt-3 text-xs text-slate-400 text-center">
        <strong>Cross-Section:</strong> Magma rises under gas pressure from the subterranean magma chamber through the main conduit, exploding through the crater as lava and pyroclastic ash.
      </p>
    </div>
  );
}

export function VolcanoTectonicsDiagram() {
  return (
    <div className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-full border border-amber-800/60">
          Plate Tectonics
        </span>
        <span className="text-xs text-slate-400 font-medium">Subduction Zone &amp; Magma Genesis</span>
      </div>
      <svg viewBox="0 0 720 360" className="w-full h-auto" aria-label="Subduction Zone Volcano Diagram">
        <defs>
          <linearGradient id="vt-ocean" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#075985" />
          </linearGradient>
          <linearGradient id="vt-magma" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>

        <rect width="720" height="360" fill="#090d16" rx="12" />

        {/* Ocean Water */}
        <path d="M0 70 L260 70 L230 140 L0 140 Z" fill="url(#vt-ocean)" opacity="0.8" />
        <text x="50" y="100" fill="#bae6fd" fontSize="13" fontWeight="bold">Pacific Ocean</text>

        {/* Asthenosphere / Mantle (Hot Orange/Brown Bottom) */}
        <rect x="0" y="180" width="720" height="180" fill="#431407" />
        <text x="40" y="320" fill="#fdba74" fontSize="12" fontWeight="bold">Semi-Molten Mantle (Asthenosphere 1,300°C)</text>

        {/* Oceanic Plate (Dense, Thin, Subducting) */}
        <path d="M0 140 L230 140 L450 330 L400 360 L210 180 L0 180 Z" fill="#334155" stroke="#475569" strokeWidth="2" />
        <text x="60" y="165" fill="#f1f5f9" fontSize="11" fontWeight="bold">Dense Oceanic Plate</text>
        {/* Subduction Motion Arrow */}
        <path d="M250 170 L340 250" stroke="#38bdf8" strokeWidth="4" fill="none" markerEnd="url(#arrow)" strokeDasharray="6 4" />
        <text x="310" y="210" fill="#38bdf8" fontSize="11" fontWeight="bold">Subduction ↘️</text>

        {/* Deep Ocean Trench */}
        <line x1="230" y1="70" x2="230" y2="140" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="170" y="60" fill="#38bdf8" fontSize="11" fontWeight="black">Deep Oceanic Trench</text>

        {/* Continental Plate (Lighter, Thicker) */}
        <path d="M260 70 L480 70 L520 30 L560 70 L720 70 L720 220 L450 220 L260 70 Z" fill="#57534e" stroke="#78716c" strokeWidth="2" />
        <text x="580" y="110" fill="#f5f5f4" fontSize="12" fontWeight="bold">Continental Plate</text>

        {/* Melting Zone at Depth */}
        <ellipse cx="430" cy="270" rx="40" ry="25" fill="#ea580c" opacity="0.8" />
        <text x="395" y="275" fill="#fef08a" fontSize="10" fontWeight="bold">Melting Zone</text>

        {/* Rising Magma Diapirs / Plumes */}
        <path d="M430 250 Q460 200 480 150 Q510 100 520 55" stroke="url(#vt-magma)" strokeWidth="6" fill="none" strokeDasharray="4 3" />
        <ellipse cx="520" cy="115" rx="25" ry="15" fill="#f97316" />
        <text x="490" y="120" fill="#ffffff" fontSize="9" fontWeight="bold">Magma</text>

        {/* Volcanic Arc Mountain Peak */}
        <path d="M480 70 L520 25 L560 70 Z" fill="#78350f" />
        <circle cx="520" cy="15" r="12" fill="#ef4444" opacity="0.9" />
        <path d="M515 25 L525 25 L522 5 Z" fill="#facc15" />
        <text x="460" y="15" fill="#fca5a5" fontSize="11" fontWeight="black">Volcanic Arc</text>

        {/* Annotations */}
        <g transform="translate(460, 310)">
          <rect width="230" height="36" rx="8" fill="#0f172a" stroke="#f97316" strokeWidth="1" />
          <text x="12" y="16" fill="#fef08a" fontSize="10" fontWeight="bold">Flux Melting Mechanism:</text>
          <text x="12" y="28" fill="#cbd5e1" fontSize="9">Seawater lowers mantle melting point</text>
        </g>
      </svg>
      <p className="mt-3 text-xs text-slate-400 text-center">
        <strong>Tectonic Subduction:</strong> Oceanic plates slide beneath lighter continental plates. Intense heat and friction melt rock into magma, which forces its way up to form explosive volcanic arcs.
      </p>
    </div>
  );
}

export function VolcanoTypesDiagram() {
  return (
    <div className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-950/80 px-2.5 py-1 rounded-full border border-rose-800/60">
          Volcano Classification
        </span>
        <span className="text-xs text-slate-400 font-medium">Shield vs. Composite vs. Cinder Cone</span>
      </div>
      <svg viewBox="0 0 720 300" className="w-full h-auto" aria-label="Three Types of Volcanoes Diagram">
        <rect width="720" height="300" fill="#0b0f19" rx="12" />

        {/* Ground level line across all 3 */}
        <line x1="20" y1="230" x2="700" y2="230" stroke="#334155" strokeWidth="2" />

        {/* 1. Shield Volcano */}
        <g transform="translate(30, 20)">
          <text x="100" y="25" fill="#38bdf8" fontSize="14" fontWeight="black" textAnchor="middle">1. Shield Volcano</text>
          <text x="100" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">e.g., Mauna Loa, Hawaii</text>
          {/* Broad, gentle shield profile */}
          <path d="M5 210 Q100 130 195 210 Z" fill="#1e293b" stroke="#0284c7" strokeWidth="2" />
          <path d="M100 135 L100 210" stroke="#f97316" strokeWidth="3" />
          {/* Effusive lava streams */}
          <path d="M95 135 Q50 170 20 210" stroke="#ef4444" strokeWidth="2" fill="none" />
          <path d="M105 135 Q150 170 180 210" stroke="#ef4444" strokeWidth="2" fill="none" />
          {/* Specs */}
          <rect x="15" y="225" width="170" height="42" rx="6" fill="#0f172a" stroke="#1e293b" />
          <text x="25" y="240" fill="#e2e8f0" fontSize="9" fontWeight="bold">Slope: Gentle (2°–10°)</text>
          <text x="25" y="255" fill="#38bdf8" fontSize="9">Lava: Low viscosity, runny basalt</text>
        </g>

        {/* 2. Composite / Stratovolcano */}
        <g transform="translate(260, 20)">
          <text x="100" y="25" fill="#f97316" fontSize="14" fontWeight="black" textAnchor="middle">2. Stratovolcano</text>
          <text x="100" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">e.g., Mount Fuji, St. Helens</text>
          {/* Steep, tall symmetrical cone */}
          <path d="M20 210 L90 85 L110 85 L180 210 Z" fill="#332722" stroke="#ea580c" strokeWidth="2" />
          {/* Explosive Ash cloud */}
          <ellipse cx="100" cy="55" rx="35" ry="18" fill="#64748b" opacity="0.8" />
          <path d="M100 85 L100 210" stroke="#f97316" strokeWidth="4" />
          {/* Specs */}
          <rect x="15" y="225" width="170" height="42" rx="6" fill="#0f172a" stroke="#1e293b" />
          <text x="25" y="240" fill="#e2e8f0" fontSize="9" fontWeight="bold">Slope: Steep (~30°)</text>
          <text x="25" y="255" fill="#f97316" fontSize="9">Lava: Sticky, gas-rich andesite</text>
        </g>

        {/* 3. Cinder Cone */}
        <g transform="translate(490, 20)">
          <text x="100" y="25" fill="#eab308" fontSize="14" fontWeight="black" textAnchor="middle">3. Cinder Cone</text>
          <text x="100" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">e.g., Parícutin, Mexico</text>
          {/* Small steep cone with wide crater bowl */}
          <path d="M40 210 L85 140 L115 140 L160 210 Z" fill="#292524" stroke="#eab308" strokeWidth="2" />
          <path d="M85 140 Q100 155 115 140" stroke="#facc15" strokeWidth="2" fill="#1c1917" />
          {/* Cinders flying */}
          <circle cx="95" cy="120" r="2.5" fill="#f97316" />
          <circle cx="105" cy="115" r="3" fill="#facc15" />
          {/* Specs */}
          <rect x="15" y="225" width="170" height="42" rx="6" fill="#0f172a" stroke="#1e293b" />
          <text x="25" y="240" fill="#e2e8f0" fontSize="9" fontWeight="bold">Slope: Steep (30°–40°)</text>
          <text x="25" y="255" fill="#eab308" fontSize="9">Structure: Piled scoria &amp; tephra</text>
        </g>
      </svg>
    </div>
  );
}

export function VolcanoRingOfFireDiagram() {
  return (
    <div className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/80 px-2.5 py-1 rounded-full border border-red-800/60">
          Global Geology
        </span>
        <span className="text-xs text-slate-400 font-medium">The Pacific &quot;Ring of Fire&quot; Arc</span>
      </div>
      <svg viewBox="0 0 720 320" className="w-full h-auto" aria-label="Pacific Ring of Fire Diagram">
        <rect width="720" height="320" fill="#030712" rx="12" />

        {/* Stylized Ocean Base */}
        <rect x="160" y="30" width="400" height="260" rx="16" fill="#082f49" stroke="#0e7490" strokeWidth="1" />
        <text x="360" y="160" fill="#0284c7" fontSize="18" fontWeight="black" textAnchor="middle" opacity="0.6">PACIFIC OCEAN</text>
        <text x="360" y="185" fill="#38bdf8" fontSize="11" textAnchor="middle" opacity="0.8">Pacific Tectonic Plate</text>

        {/* Continents surrounding Pacific */}
        {/* Asia / Japan (West) */}
        <path d="M40 40 Q110 50 140 100 T120 220 L40 220 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />
        <text x="70" y="120" fill="#94a3b8" fontSize="12" fontWeight="bold">Asia</text>
        <text x="80" y="170" fill="#fca5a5" fontSize="10">Japan Arc</text>

        {/* North America (Northeast) */}
        <path d="M540 40 Q620 50 680 70 L680 160 Q600 130 550 140 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />
        <text x="600" y="80" fill="#94a3b8" fontSize="12" fontWeight="bold">N. America</text>
        <text x="580" y="105" fill="#fca5a5" fontSize="10">Cascades</text>

        {/* South America & Andes (Southeast) */}
        <path d="M570 170 Q620 180 660 210 L650 280 Q590 280 560 220 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />
        <text x="600" y="240" fill="#94a3b8" fontSize="12" fontWeight="bold">S. America</text>
        <text x="590" y="260" fill="#fca5a5" fontSize="10">Andes</text>

        {/* Australia / Oceania (Southwest) */}
        <path d="M70 240 Q130 240 160 280 L70 280 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />
        <text x="90" y="265" fill="#94a3b8" fontSize="11" fontWeight="bold">Oceania</text>

        {/* Horseshoe Ring of Fire Belt (Glowing Red Horseshoe) */}
        <path d="M140 260 C130 180 150 90 220 50 C290 20 450 20 530 50 C580 80 580 140 570 200 C565 240 580 270 590 280"
              stroke="#ef4444" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.9" strokeDasharray="12 4" />

        {/* Volcano Triangle Dots Along the Ring */}
        {[
          [145, 230], [140, 180], [150, 130], [170, 90], [220, 60], [280, 45],
          [350, 40], [420, 42], [480, 50], [535, 75], [555, 120], [565, 160],
          [565, 210], [575, 250],
        ].map(([x, y], i) => (
          <polygon key={i} points={`${x},${y - 6} ${x - 5},${y + 4} ${x + 5},${y + 4}`} fill="#fde047" stroke="#b91c1c" strokeWidth="1" />
        ))}

        {/* Stats Callout */}
        <g transform="translate(230, 220)">
          <rect width="260" height="50" rx="8" fill="#0f172a" fillOpacity="0.9" stroke="#ef4444" strokeWidth="1.5" />
          <text x="15" y="22" fill="#fca5a5" fontSize="12" fontWeight="black">🔥 40,000 km Horseshoe Arc</text>
          <text x="15" y="38" fill="#e2e8f0" fontSize="10">Home to 75% of Earth&apos;s active volcanoes &amp; 90% of quakes</text>
        </g>
      </svg>
    </div>
  );
}
