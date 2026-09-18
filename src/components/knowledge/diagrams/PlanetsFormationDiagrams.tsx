import React from "react";

export function PlanetsNebulaDiskDiagram() {
  return (
    <div className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-2.5 py-1 rounded-full border border-indigo-800/60">
          Solar Nebula Collapse
        </span>
        <span className="text-xs text-slate-400 font-medium">From Gas Cloud to Circumstellar Disk</span>
      </div>
      <svg viewBox="0 0 720 340" className="w-full h-auto" aria-label="Nebula Collapse and Protoplanetary Disk Diagram">
        <defs>
          <radialGradient id="pnd-proto" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#fef08a" />
            <stop offset="70%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </radialGradient>
          <linearGradient id="pnd-disk" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
            <stop offset="30%" stopColor="#f59e0b" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#ef4444" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <rect width="720" height="340" fill="#030712" rx="12" />

        {/* Stars in background */}
        {[
          [30, 40], [80, 100], [180, 50], [300, 30], [550, 40], [680, 70],
          [50, 300], [140, 270], [600, 290], [670, 310],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={1.5} fill="#ffffff" opacity={0.5} />
        ))}

        {/* ── STAGE 1: Spherical Molecular Cloud (Left) ────────────────── */}
        <g transform="translate(140, 160)">
          <ellipse cx="0" cy="0" rx="90" ry="85" fill="#1e1b4b" stroke="#4338ca" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.8" />
          {/* Dust clumps */}
          <circle cx="-30" cy="-20" r="15" fill="#312e81" opacity="0.7" />
          <circle cx="20" cy="30" r="18" fill="#312e81" opacity="0.6" />
          <circle cx="0" cy="0" r="10" fill="#6366f1" opacity="0.5" />
          {/* Gravitational collapse arrows */}
          <path d="M-65 -45 L-25 -15" stroke="#a5b4fc" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M65 -45 L25 -15" stroke="#a5b4fc" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M-65 45 L-25 15" stroke="#a5b4fc" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M65 45 L25 15" stroke="#a5b4fc" strokeWidth="2" markerEnd="url(#arrow)" />
          <text x="0" y="110" fill="#c7d2fe" fontSize="11" fontWeight="black" textAnchor="middle">1. Giant Molecular Cloud</text>
          <text x="0" y="125" fill="#94a3b8" fontSize="9" textAnchor="middle">Cold gas &amp; dust collapse by gravity</text>
        </g>

        {/* Transition Arrow */}
        <g transform="translate(290, 160)">
          <path d="M0 0 L50 0" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" />
          <text x="25" y="-12" fill="#fde047" fontSize="10" fontWeight="bold" textAnchor="middle">Angular Momentum</text>
          <text x="25" y="18" fill="#94a3b8" fontSize="8" textAnchor="middle">Spins faster &amp; flattens</text>
        </g>

        {/* ── STAGE 2: Flattened Protoplanetary Disk (Right) ──────────── */}
        <g transform="translate(520, 160)">
          {/* Outer diffuse disk */}
          <ellipse cx="0" cy="0" rx="170" ry="55" fill="url(#pnd-disk)" />
          {/* Concentric rings / gaps where planets form */}
          <ellipse cx="0" cy="0" rx="140" ry="44" fill="none" stroke="#090d16" strokeWidth="6" />
          <ellipse cx="0" cy="0" rx="100" ry="30" fill="none" stroke="#090d16" strokeWidth="5" />
          <ellipse cx="0" cy="0" rx="60" ry="18" fill="none" stroke="#090d16" strokeWidth="4" />

          {/* Infant Protoplanets in the gaps */}
          <circle cx="100" cy="0" r="5" fill="#38bdf8" />
          <circle cx="-60" cy="0" r="3.5" fill="#f97316" />

          {/* Central Baby Protostar */}
          <circle cx="0" cy="0" r="24" fill="url(#pnd-proto)" />
          <text x="0" y="4" fill="#78350f" fontSize="8" fontWeight="black" textAnchor="middle">PROTO-SUN</text>

          <text x="0" y="110" fill="#fde047" fontSize="11" fontWeight="black" textAnchor="middle">2. Protoplanetary Disk</text>
          <text x="0" y="125" fill="#94a3b8" fontSize="9" textAnchor="middle">Rotating circumstellar accretion disk</text>
        </g>
      </svg>
    </div>
  );
}

export function PlanetsAccretionGrowthDiagram() {
  return (
    <div className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-full border border-amber-800/60">
          The Accretion Ladder
        </span>
        <span className="text-xs text-slate-400 font-medium">From Microscopic Dust to Full Planets</span>
      </div>
      <svg viewBox="0 0 720 300" className="w-full h-auto" aria-label="Planetary Accretion Steps Diagram">
        <rect width="720" height="300" fill="#090d16" rx="12" />

        {/* 4 Evolutionary Steps */}
        {/* Step 1: Dust Grains */}
        <g transform="translate(20, 30)">
          <rect width="145" height="230" rx="10" fill="#0f172a" stroke="#334155" />
          <text x="72" y="25" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="middle">1. Dust Grains</text>
          <text x="72" y="40" fill="#64748b" fontSize="9" textAnchor="middle">Microns to Millimeters</text>
          {/* Clustered tiny specks */}
          <g transform="translate(72, 110)">
            <circle cx="-15" cy="-20" r="2" fill="#cbd5e1" />
            <circle cx="10" cy="-15" r="3" fill="#94a3b8" />
            <circle cx="-5" cy="5" r="4" fill="#fde047" />
            <circle cx="20" cy="15" r="2.5" fill="#cbd5e1" />
            <circle cx="-25" cy="20" r="3" fill="#94a3b8" />
          </g>
          <text x="72" y="190" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Electrostatic Clumping</text>
          <text x="72" y="205" fill="#94a3b8" fontSize="8" textAnchor="middle">Static electricity sticks dust</text>
        </g>

        <path d="M175 140 L195 140" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" />

        {/* Step 2: Pebbles & Boulders */}
        <g transform="translate(200, 30)">
          <rect width="145" height="230" rx="10" fill="#0f172a" stroke="#334155" />
          <text x="72" y="25" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">2. Pebbles &amp; Rocks</text>
          <text x="72" y="40" fill="#64748b" fontSize="9" textAnchor="middle">Centimeters to Meters</text>
          {/* Clustered rocks */}
          <g transform="translate(72, 110)">
            <ellipse cx="-12" cy="-10" rx="14" ry="10" fill="#78716c" />
            <ellipse cx="15" cy="10" rx="16" ry="12" fill="#57534e" />
            <ellipse cx="-5" cy="18" rx="10" ry="8" fill="#a8a29e" />
          </g>
          <text x="72" y="190" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">Pebble Accretion</text>
          <text x="72" y="205" fill="#94a3b8" fontSize="8" textAnchor="middle">Gas drag concentrates rocks</text>
        </g>

        <path d="M355 140 L375 140" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" />

        {/* Step 3: Planetesimals */}
        <g transform="translate(380, 30)">
          <rect width="145" height="230" rx="10" fill="#0f172a" stroke="#334155" />
          <text x="72" y="25" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">3. Planetesimals</text>
          <text x="72" y="40" fill="#64748b" fontSize="9" textAnchor="middle">1 to 100 Kilometers</text>
          {/* Lumpy asteroid-like body */}
          <g transform="translate(72, 110)">
            <path d="M-25 -10 Q-30 -25 0 -28 Q25 -25 28 0 Q30 25 5 28 Q-25 30 -28 5 Z" fill="#44403c" stroke="#78716c" strokeWidth="1.5" />
            <circle cx="-8" cy="-5" r="5" fill="#1c1917" opacity="0.6" />
            <circle cx="10" cy="8" r="4" fill="#1c1917" opacity="0.5" />
          </g>
          <text x="72" y="190" fill="#ef4444" fontSize="9" fontWeight="bold" textAnchor="middle">Gravity Takes Over</text>
          <text x="72" y="205" fill="#94a3b8" fontSize="8" textAnchor="middle">Mass pulls in debris</text>
        </g>

        <path d="M535 140 L555 140" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" />

        {/* Step 4: Protoplanet / Planet */}
        <g transform="translate(560, 30)">
          <rect width="140" height="230" rx="10" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
          <text x="70" y="25" fill="#38bdf8" fontSize="11" fontWeight="black" textAnchor="middle">4. Protoplanet</text>
          <text x="70" y="40" fill="#64748b" fontSize="9" textAnchor="middle">1,000+ Kilometers</text>
          {/* Spherical glowing world */}
          <g transform="translate(70, 110)">
            <circle cx="0" cy="0" r="32" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <path d="M-15 -10 Q0 -20 15 -10 Q20 15 -5 15 Z" fill="#22c55e" />
          </g>
          <text x="70" y="190" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Hydrostatic Balance</text>
          <text x="70" y="205" fill="#bae6fd" fontSize="8" textAnchor="middle">Spherical full planet</text>
        </g>
      </svg>
    </div>
  );
}

export function PlanetsFrostLineDiagram() {
  return (
    <div className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800/60">
          Cosmic Geography
        </span>
        <span className="text-xs text-slate-400 font-medium">The Frost Line (Snow Line) at ~2.7 AU</span>
      </div>
      <svg viewBox="0 0 720 320" className="w-full h-auto" aria-label="Frost Line in Solar System Diagram">
        <defs>
          <linearGradient id="pfl-warm" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="pfl-cold" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        <rect width="720" height="320" fill="#020617" rx="12" />

        {/* Sun on Far Left */}
        <g transform="translate(0, 160)">
          <circle cx="0" cy="0" r="70" fill="#f59e0b" />
          <text x="25" y="5" fill="#ffffff" fontSize="12" fontWeight="black">SUN ☀️</text>
        </g>

        {/* Inner Warm Zone */}
        <rect x="70" y="30" width="250" height="260" fill="url(#pfl-warm)" />
        <text x="195" y="60" fill="#fca5a5" fontSize="13" fontWeight="black" textAnchor="middle">WARM INNER ZONE</text>
        <text x="195" y="78" fill="#fde047" fontSize="10" textAnchor="middle">Too hot for ice · Only rock &amp; metal condense</text>

        {/* Inner Terrestrial Planets */}
        {/* Mercury */}
        <circle cx="115" cy="160" r="5" fill="#a8a29e" />
        <text x="115" y="185" fill="#d6d3d1" fontSize="9" textAnchor="middle">Mercury</text>
        {/* Venus */}
        <circle cx="155" cy="160" r="9" fill="#f59e0b" />
        <text x="155" y="188" fill="#fed7aa" fontSize="9" textAnchor="middle">Venus</text>
        {/* Earth */}
        <circle cx="205" cy="160" r="10" fill="#0284c7" stroke="#22c55e" strokeWidth="1.5" />
        <text x="205" y="190" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Earth</text>
        {/* Mars */}
        <circle cx="255" cy="160" r="7" fill="#ef4444" />
        <text x="255" y="185" fill="#fca5a5" fontSize="9" textAnchor="middle">Mars</text>

        <text x="195" y="240" fill="#e2e8f0" fontSize="10" fontWeight="bold" textAnchor="middle">Rocky Terrestrial Planets</text>
        <text x="195" y="255" fill="#94a3b8" fontSize="8" textAnchor="middle">High density · Solid surfaces · Small size</text>

        {/* ── THE FROST LINE DIVIDER (Dashed Cyan Line) ────────────────── */}
        <line x1="320" y1="20" x2="320" y2="300" stroke="#22d3ee" strokeWidth="3" strokeDasharray="6 4" />
        <g transform="translate(320, 160)">
          <rect x="-60" y="-120" width="120" height="26" rx="6" fill="#083344" stroke="#06b6d4" strokeWidth="1.5" />
          <text x="0" y="-103" fill="#a5f3fc" fontSize="10" fontWeight="black" textAnchor="middle">❄️ THE FROST LINE</text>
          <text x="0" y="-85" fill="#67e8f9" fontSize="8" textAnchor="middle">~2.7 AU (175 Kelvin)</text>
        </g>

        {/* Outer Cold Zone */}
        <rect x="320" y="30" width="380" height="260" fill="url(#pfl-cold)" />
        <text x="510" y="60" fill="#a5f3fc" fontSize="13" fontWeight="black" textAnchor="middle">COLD OUTER ZONE</text>
        <text x="510" y="78" fill="#bae6fd" fontSize="10" textAnchor="middle">Water, methane &amp; ammonia freeze into ice</text>

        {/* Outer Giant Planets */}
        {/* Jupiter */}
        <circle cx="410" cy="160" r="28" fill="#d97706" stroke="#fef3c7" strokeWidth="1" />
        <text x="410" y="205" fill="#fde68a" fontSize="10" fontWeight="bold" textAnchor="middle">Jupiter</text>
        {/* Saturn */}
        <g transform="translate(500, 160)">
          <ellipse cx="0" cy="0" rx="35" ry="8" fill="none" stroke="#fde047" strokeWidth="3" />
          <circle cx="0" cy="0" r="22" fill="#ca8a04" />
          <text x="0" y="42" fill="#fef08a" fontSize="10" fontWeight="bold" textAnchor="middle">Saturn</text>
        </g>
        {/* Uranus */}
        <circle cx="585" cy="160" r="15" fill="#06b6d4" />
        <text x="585" y="195" fill="#a5f3fc" fontSize="9" textAnchor="middle">Uranus</text>
        {/* Neptune */}
        <circle cx="655" cy="160" r="14" fill="#3b82f6" />
        <text x="655" y="195" fill="#93c5fd" fontSize="9" textAnchor="middle">Neptune</text>

        <text x="510" y="240" fill="#e2e8f0" fontSize="10" fontWeight="bold" textAnchor="middle">Gas &amp; Ice Giants</text>
        <text x="510" y="255" fill="#94a3b8" fontSize="8" textAnchor="middle">Massive icy cores pulled in vast H &amp; He gas envelopes</text>
      </svg>
    </div>
  );
}

export function PlanetsCoreDifferentiationDiagram() {
  return (
    <div className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-950/80 px-2.5 py-1 rounded-full border border-rose-800/60">
          Internal Architecture
        </span>
        <span className="text-xs text-slate-400 font-medium">Planetary Differentiation: Heavy Cores Sink</span>
      </div>
      <svg viewBox="0 0 720 280" className="w-full h-auto" aria-label="Planetary Differentiation Diagram">
        <rect width="720" height="280" fill="#030712" rx="12" />

        {/* ── LEFT: Primitive Molten Mixture ─────────────────────────── */}
        <g transform="translate(180, 130)">
          <circle cx="0" cy="0" r="80" fill="#78350f" stroke="#b45309" strokeWidth="2" />
          {/* Mixed iron blobs & silicate rocks */}
          {[
            [-30, -30], [25, -20], [-10, 30], [40, 20], [-45, 10], [10, -45],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={9} fill="#ef4444" stroke="#facc15" strokeWidth="1" />
          ))}
          <text x="0" y="110" fill="#fed7aa" fontSize="11" fontWeight="bold" textAnchor="middle">1. Homogeneous Protoplanet</text>
          <text x="0" y="125" fill="#94a3b8" fontSize="9" textAnchor="middle">Heavy metals &amp; rock mixed randomly</text>
        </g>

        {/* Transition Arrow: Gravity & Melting */}
        <g transform="translate(360, 130)">
          <path d="M-30 0 L30 0" stroke="#f97316" strokeWidth="4" markerEnd="url(#arrow)" />
          <text x="0" y="-15" fill="#fde047" fontSize="11" fontWeight="bold" textAnchor="middle">Gravity &amp; Decay Heat</text>
          <text x="0" y="20" fill="#cbd5e1" fontSize="9" textAnchor="middle">Total Internal Melting</text>
        </g>

        {/* ── RIGHT: Differentiated Concentric Layers ────────────────── */}
        <g transform="translate(540, 130)">
          {/* Crust (Outer thin) */}
          <circle cx="0" cy="0" r="82" fill="#57534e" stroke="#a8a29e" strokeWidth="2" />
          {/* Mantle (Middle silicate) */}
          <circle cx="0" cy="0" r="76" fill="#ea580c" />
          {/* Liquid Outer Core */}
          <circle cx="0" cy="0" r="45" fill="#f97316" />
          {/* Solid Inner Metallic Core */}
          <circle cx="0" cy="0" r="22" fill="#fef08a" stroke="#facc15" strokeWidth="1" />

          {/* Layer Labels */}
          <text x="0" y="4" fill="#78350f" fontSize="8" fontWeight="black" textAnchor="middle">Fe-Ni CORE</text>
          <text x="0" y="-55" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">MANTLE</text>

          <text x="0" y="110" fill="#fde047" fontSize="11" fontWeight="bold" textAnchor="middle">2. Differentiated Planet</text>
          <text x="0" y="125" fill="#94a3b8" fontSize="9" textAnchor="middle">Dense iron sinks; light silicates float</text>
        </g>
      </svg>
    </div>
  );
}
