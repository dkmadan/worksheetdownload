import React from "react";

export function TidesLunarBulgeDiagram() {
  return (
    <div className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800/60">
          Gravitational Forces
        </span>
        <span className="text-xs text-slate-400 font-medium">Dual Tidal Bulges &amp; Earth Rotation</span>
      </div>
      <svg viewBox="0 0 720 360" className="w-full h-auto" aria-label="Moon Gravitational Tidal Bulge Diagram">
        <defs>
          <radialGradient id="ot-moon" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="60%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </radialGradient>
          <linearGradient id="ot-water" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>

        <rect width="720" height="360" fill="#030712" rx="12" />

        {/* Stars */}
        {[
          [50, 40], [120, 90], [200, 30], [290, 70], [420, 40], [670, 60],
          [80, 280], [180, 320], [330, 310], [500, 300], [650, 270],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={1.5} fill="#ffffff" opacity={0.6} />
        ))}

        {/* Moon on right side */}
        <g transform="translate(620, 180)">
          <circle cx="0" cy="0" r="38" fill="url(#ot-moon)" />
          {/* Craters */}
          <circle cx="-10" cy="-10" r="6" fill="#334155" opacity="0.6" />
          <circle cx="12" cy="8" r="8" fill="#334155" opacity="0.5" />
          <circle cx="-8" cy="14" r="5" fill="#334155" opacity="0.4" />
          <text x="0" y="55" fill="#f8fafc" fontSize="13" fontWeight="bold" textAnchor="middle">THE MOON</text>
          <text x="0" y="70" fill="#94a3b8" fontSize="10" textAnchor="middle">Gravitational Anchor</text>
        </g>

        {/* Gravity Pull Vector Arrows toward Moon */}
        <g transform="translate(430, 180)">
          <line x1="0" y1="0" x2="120" y2="0" stroke="#38bdf8" strokeWidth="4" strokeDasharray="6 4" />
          <polygon points="120,-6 120,6 135,0" fill="#38bdf8" />
          <text x="50" y="-12" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Lunar Gravity Pull ➔</text>
        </g>

        {/* Central Earth System */}
        <g transform="translate(250, 180)">
          {/* Elliptical Water Envelope (Dual Bulge) */}
          <ellipse cx="0" cy="0" rx="145" ry="85" fill="url(#ot-water)" opacity="0.75" />

          {/* Solid Earth Sphere */}
          <circle cx="0" cy="0" r="70" fill="#0369a1" stroke="#0284c7" strokeWidth="2" />
          {/* Continents on Earth */}
          <path d="M-30 -40 Q-10 -60 20 -40 Q30 -10 10 10 Q-20 20 -40 0 Z" fill="#22c55e" opacity="0.9" />
          <path d="M-10 30 Q20 25 35 50 Q10 65 -15 55 Z" fill="#22c55e" opacity="0.9" />
          <text x="0" y="5" fill="#ffffff" fontSize="13" fontWeight="black" textAnchor="middle">EARTH</text>
          <text x="0" y="20" fill="#bae6fd" fontSize="9" textAnchor="middle">24-Hr Spin ↺</text>

          {/* Sublunar Bulge Label (Right) */}
          <g transform="translate(125, 0)">
            <line x1="0" y1="-30" x2="0" y2="30" stroke="#fde047" strokeWidth="2" />
            <text x="10" y="-5" fill="#fde047" fontSize="11" fontWeight="black">HIGH TIDE</text>
            <text x="10" y="10" fill="#bae6fd" fontSize="9">Near Bulge (Gravity)</text>
          </g>

          {/* Antipodal Bulge Label (Left) */}
          <g transform="translate(-125, 0)">
            <line x1="0" y1="-30" x2="0" y2="30" stroke="#fde047" strokeWidth="2" />
            <text x="-10" y="-5" fill="#fde047" fontSize="11" fontWeight="black" textAnchor="end">HIGH TIDE</text>
            <text x="-10" y="10" fill="#bae6fd" fontSize="9" textAnchor="end">Far Bulge (Inertia)</text>
          </g>

          {/* Low Tide (Top & Bottom) */}
          <text x="0" y="-95" fill="#f87171" fontSize="11" fontWeight="black" textAnchor="middle">LOW TIDE ⬇️</text>
          <text x="0" y="110" fill="#f87171" fontSize="11" fontWeight="black" textAnchor="middle">LOW TIDE ⬆️</text>
        </g>
      </svg>
      <p className="mt-3 text-xs text-slate-400 text-center">
        <strong>Dual Tidal Bulge:</strong> Lunar gravity pulls ocean water into a high bulge on the side facing the Moon. On the opposite side, inertia and differential gravity produce a twin high tide, creating two high tides and two low tides daily as Earth rotates beneath the bulges.
      </p>
    </div>
  );
}

export function TidesSpringNeapDiagram() {
  return (
    <div className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-full border border-amber-800/60">
          Alignment Cycles
        </span>
        <span className="text-xs text-slate-400 font-medium">Spring Tides vs. Neap Tides</span>
      </div>
      <svg viewBox="0 0 720 380" className="w-full h-auto" aria-label="Spring and Neap Tides Comparison Diagram">
        <rect width="720" height="380" fill="#020617" rx="12" />

        {/* Dividing Line between top & bottom */}
        <line x1="20" y1="190" x2="700" y2="190" stroke="#1e293b" strokeWidth="2" strokeDasharray="4 4" />

        {/* ── TOP: SPRING TIDE (Syzygy - New/Full Moon) ────────────────── */}
        <g transform="translate(30, 20)">
          <rect width="180" height="24" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="10" y="16" fill="#fde047" fontSize="11" fontWeight="black">SPRING TIDE (Straight Line)</text>
          <text x="200" y="16" fill="#94a3b8" fontSize="10">New Moon &amp; Full Moon · Maximum Tidal Range</text>

          {/* Sun on left */}
          <circle cx="50" cy="90" r="30" fill="#f59e0b" />
          <text x="50" y="95" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">SUN ☀️</text>

          {/* Earth in middle with EXTENDED bulge */}
          <g transform="translate(330, 90)">
            <ellipse cx="0" cy="0" rx="95" ry="38" fill="#0284c7" opacity="0.6" />
            <circle cx="0" cy="0" r="36" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <text x="0" y="4" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">EARTH</text>
            <text x="0" y="-45" fill="#f87171" fontSize="9" fontWeight="bold" textAnchor="middle">Low Tide</text>
            <text x="105" y="4" fill="#fde047" fontSize="9" fontWeight="black">Huge High Tide ➔</text>
          </g>

          {/* Moon on right (Aligned in line) */}
          <circle cx="580" cy="90" r="18" fill="#94a3b8" />
          <text x="580" y="94" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">MOON</text>

          {/* Gravity arrows aligned */}
          <path d="M100 85 L220 85" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" />
          <text x="160" y="78" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">Sun Gravity ➔</text>

          <path d="M460 85 L545 85" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrow)" />
          <text x="500" y="78" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Moon Gravity ➔</text>
        </g>

        {/* ── BOTTOM: NEAP TIDE (Quadrature - 90 Degree Angle) ─────────── */}
        <g transform="translate(30, 205)">
          <rect width="180" height="24" rx="6" fill="#0f172a" stroke="#0284c7" strokeWidth="1" />
          <text x="10" y="16" fill="#38bdf8" fontSize="11" fontWeight="black">NEAP TIDE (Right Angle)</text>
          <text x="200" y="16" fill="#94a3b8" fontSize="10">Quarter Moons · Minimum Tidal Range (Weakest Tides)</text>

          {/* Sun on left */}
          <circle cx="50" cy="90" r="30" fill="#f59e0b" />
          <text x="50" y="95" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">SUN ☀️</text>

          {/* Earth in middle with CIRCULAR / WEAK bulge */}
          <g transform="translate(330, 90)">
            <ellipse cx="0" cy="0" rx="55" ry="48" fill="#0284c7" opacity="0.4" />
            <circle cx="0" cy="0" r="36" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <text x="0" y="4" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">EARTH</text>
            <text x="65" y="4" fill="#bae6fd" fontSize="9">Moderate Tide</text>
          </g>

          {/* Moon at 90 DEGREES ABOVE EARTH */}
          <g transform="translate(330, 20)">
            <circle cx="0" cy="0" r="18" fill="#94a3b8" />
            <text x="0" y="4" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">MOON</text>
            <line x1="0" y1="20" x2="0" y2="45" stroke="#38bdf8" strokeWidth="3" strokeDasharray="3 2" />
            <text x="15" y="36" fill="#38bdf8" fontSize="9" fontWeight="bold">90° Pull ⬆️</text>
          </g>

          {/* Sun pulling horizontally */}
          <path d="M100 85 L250 85" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" />
          <text x="175" y="78" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">Sun Pull ➔</text>

          {/* Explanation badge */}
          <g transform="translate(480, 70)">
            <rect width="190" height="42" rx="6" fill="#0f172a" stroke="#334155" />
            <text x="10" y="18" fill="#e2e8f0" fontSize="9" fontWeight="bold">Opposing Gravitational Pulls:</text>
            <text x="10" y="32" fill="#94a3b8" fontSize="9">Sun &amp; Moon partially cancel out</text>
          </g>
        </g>
      </svg>
      <p className="mt-3 text-xs text-slate-400 text-center">
        <strong>Spring vs. Neap:</strong> When the Sun and Moon line up (New &amp; Full Moon), their gravitational forces combine to produce dramatic Spring Tides. When at right angles (Quarter Moons), they counteract, causing mild Neap Tides.
      </p>
    </div>
  );
}

export function TidesDailyClockDiagram() {
  return (
    <div className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-2.5 py-1 rounded-full border border-indigo-800/60">
          The Lunar Clock
        </span>
        <span className="text-xs text-slate-400 font-medium">Why Tides Shift 50 Minutes Every Day</span>
      </div>
      <svg viewBox="0 0 720 280" className="w-full h-auto" aria-label="The 24h 50m Tidal Clock Diagram">
        <rect width="720" height="280" fill="#090d16" rx="12" />

        {/* Center Rotating Earth */}
        <g transform="translate(240, 140)">
          <circle cx="0" cy="0" r="65" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
          <text x="0" y="5" fill="#ffffff" fontSize="12" fontWeight="black" textAnchor="middle">EARTH</text>
          {/* Day 1 Marker */}
          <line x1="0" y1="0" x2="65" y2="0" stroke="#fde047" strokeWidth="3" />
          <circle cx="65" cy="0" r="5" fill="#fde047" />
          <text x="75" y="4" fill="#fde047" fontSize="10" fontWeight="bold">Day 1: 12:00 PM</text>

          {/* 360 degree 24hr rotation arrow */}
          <path d="M-40 -40 A60 60 0 1 1 40 40" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
          <text x="0" y="-75" fill="#94a3b8" fontSize="10" textAnchor="middle">24-Hour Rotation (360°)</text>

          {/* Day 2 Extra 50 min wedge (+12.2°) */}
          <path d="M0 0 L65 0 A65 65 0 0 1 61 22 Z" fill="#ef4444" opacity="0.6" />
          <line x1="0" y1="0" x2="61" y2="22" stroke="#f87171" strokeWidth="2" />
          <circle cx="61" cy="22" r="4" fill="#f87171" />
          <text x="70" y="32" fill="#f87171" fontSize="10" fontWeight="bold">Day 2: 12:50 PM (+50m)</text>
        </g>

        {/* Moon Orbit on the Right */}
        <g transform="translate(560, 140)">
          {/* Moon Day 1 */}
          <circle cx="0" cy="-45" r="22" fill="#94a3b8" />
          <text x="0" y="-40" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">Day 1</text>
          <text x="32" y="-42" fill="#bae6fd" fontSize="10">Moon at Position 1</text>

          {/* Moon orbital movement arc */}
          <path d="M0 -20 Q20 0 0 45" stroke="#38bdf8" strokeWidth="2" fill="none" strokeDasharray="4 3" markerEnd="url(#arrow)" />
          <text x="25" y="6" fill="#38bdf8" fontSize="9">Moon orbits 12.2° east</text>

          {/* Moon Day 2 */}
          <circle cx="0" cy="55" r="22" fill="#e2e8f0" stroke="#38bdf8" strokeWidth="2" />
          <text x="0" y="60" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">Day 2</text>
          <text x="32" y="60" fill="#fde047" fontSize="10">Moon at Position 2</text>
        </g>

        {/* Bottom Explainer Box */}
        <g transform="translate(80, 230)">
          <rect width="560" height="36" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="280" y="22" fill="#e2e8f0" fontSize="11" textAnchor="middle">
            Earth must spin <strong className="text-cyan-400">an extra 50 minutes</strong> each day to catch up with the orbiting Moon!
          </text>
        </g>
      </svg>
    </div>
  );
}

export function TidesIntertidalEcosystemDiagram() {
  return (
    <div className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/60">
          Coastal Ecology
        </span>
        <span className="text-xs text-slate-400 font-medium">The 4 Intertidal Zones &amp; Marine Life</span>
      </div>
      <svg viewBox="0 0 720 320" className="w-full h-auto" aria-label="Intertidal Zones Ecosystem Diagram">
        <defs>
          <linearGradient id="tie-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        <rect width="720" height="320" fill="#020617" rx="12" />

        {/* Rocky Shore Slope */}
        <path d="M40 80 Q200 130 380 210 T720 300 L720 320 L40 320 Z" fill="#334155" stroke="#475569" strokeWidth="2" />

        {/* High Tide Water Line (Covers zone 2, 3, 4) */}
        <line x1="160" y1="120" x2="720" y2="120" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="5 3" />
        <rect x="160" y="120" width="560" height="200" fill="url(#tie-water)" />
        <text x="690" y="112" fill="#38bdf8" fontSize="11" fontWeight="black" textAnchor="end">🌊 High Tide Line</text>

        {/* Low Tide Water Line (Only covers zone 4) */}
        <line x1="500" y1="250" x2="720" y2="250" stroke="#0284c7" strokeWidth="2" strokeDasharray="5 3" />
        <text x="690" y="242" fill="#bae6fd" fontSize="11" fontWeight="bold" textAnchor="end">Low Tide Line 🔻</text>

        {/* 4 Vertical Zone Divisions */}
        {/* Zone 1: Spray Zone */}
        <g transform="translate(60, 40)">
          <rect width="110" height="50" rx="6" fill="#0f172a" fillOpacity="0.85" stroke="#64748b" />
          <text x="10" y="18" fill="#f1f5f9" fontSize="10" fontWeight="bold">1. Spray Zone</text>
          <text x="10" y="32" fill="#94a3b8" fontSize="9">Almost always dry</text>
          <text x="10" y="44" fill="#cbd5e1" fontSize="8">Lichens, Periwinkles</text>
        </g>

        {/* Zone 2: High Intertidal Zone */}
        <g transform="translate(200, 70)">
          <rect width="130" height="50" rx="6" fill="#0f172a" fillOpacity="0.85" stroke="#0284c7" />
          <text x="10" y="18" fill="#38bdf8" fontSize="10" fontWeight="bold">2. High Tide Zone</text>
          <text x="10" y="32" fill="#94a3b8" fontSize="9">Flooded at peak high</text>
          <text x="10" y="44" fill="#cbd5e1" fontSize="8">Barnacles, Limpets</text>
        </g>

        {/* Zone 3: Middle Intertidal Zone */}
        <g transform="translate(360, 150)">
          <rect width="135" height="50" rx="6" fill="#0f172a" fillOpacity="0.85" stroke="#06b6d4" />
          <text x="10" y="18" fill="#22d3ee" fontSize="10" fontWeight="bold">3. Mid Tide Zone</text>
          <text x="10" y="32" fill="#94a3b8" fontSize="9">Submerged 50% time</text>
          <text x="10" y="44" fill="#cbd5e1" fontSize="8">Mussels, Sea Stars, Crabs</text>
        </g>

        {/* Zone 4: Low Intertidal Zone */}
        <g transform="translate(530, 240)">
          <rect width="135" height="50" rx="6" fill="#0f172a" fillOpacity="0.85" stroke="#10b981" />
          <text x="10" y="18" fill="#34d399" fontSize="10" fontWeight="bold">4. Low Tide Zone</text>
          <text x="10" y="32" fill="#94a3b8" fontSize="9">Almost always wet</text>
          <text x="10" y="44" fill="#cbd5e1" fontSize="8">Sea Urchins, Kelp, Anemones</text>
        </g>
      </svg>
      <p className="mt-3 text-xs text-slate-400 text-center">
        <strong>Tidal Ecosystem:</strong> Coastal life is stratified into distinct survival zones dictated by daily exposure to air, sunlight, crashing waves, and ocean seawater.
      </p>
    </div>
  );
}
