import React from "react";

export function DnaScaleZoomDiagram() {
  return (
    <div className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-950/80 px-2.5 py-1 rounded-full border border-rose-800/60">
          The Scale of Genetics
        </span>
        <span className="text-xs text-slate-400 font-medium">From Cell to Nucleus to Chromosome to DNA</span>
      </div>
      <svg viewBox="0 0 720 340" className="w-full h-auto" aria-label="Scale of Genetics: Cell to DNA Diagram">
        <rect width="720" height="340" fill="#0b0f19" rx="12" />

        {/* ── 1. Cell (Far Left) ────────────────────────────────────────── */}
        <g transform="translate(80, 150)">
          {/* Cell Membrane */}
          <circle cx="0" cy="0" r="60" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2.5" />
          {/* Nucleus */}
          <circle cx="0" cy="0" r="30" fill="#4338ca" stroke="#a5b4fc" strokeWidth="2" />
          <text x="0" y="4" fill="#ffffff" fontSize="9" fontWeight="black" textAnchor="middle">Nucleus</text>
          <text x="0" y="80" fill="#a5b4fc" fontSize="12" fontWeight="black" textAnchor="middle">1. Human Cell</text>
          <text x="0" y="95" fill="#94a3b8" fontSize="9" textAnchor="middle">~30 Trillion cells in you</text>
        </g>

        {/* Zoom Line */}
        <path d="M125 150 L180 150" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4 3" markerEnd="url(#arrow)" />

        {/* ── 2. Chromosome (Middle-Left) ──────────────────────────────── */}
        <g transform="translate(250, 150)">
          {/* X-shaped Chromosome */}
          <g stroke="#f43f5e" strokeWidth="12" strokeLinecap="round">
            <line x1="-22" y1="-45" x2="22" y2="45" />
            <line x1="22" y1="-45" x2="-22" y2="45" />
          </g>
          {/* Centromere */}
          <circle cx="0" cy="0" r="7" fill="#facc15" />
          <text x="0" y="80" fill="#fda4af" fontSize="12" fontWeight="black" textAnchor="middle">2. Chromosome</text>
          <text x="0" y="95" fill="#94a3b8" fontSize="9" textAnchor="middle">23 Pairs (46 total in cell)</text>
        </g>

        {/* Zoom Line */}
        <path d="M290 150 L345 150" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4 3" markerEnd="url(#arrow)" />

        {/* ── 3. Histone Spooling (Middle-Right) ───────────────────────── */}
        <g transform="translate(415, 150)">
          {/* Histone protein spheres with DNA wrapped around */}
          {[-25, 0, 25].map((cx, i) => (
            <circle key={i} cx={cx} cy={0} r="14" fill="#3b82f6" stroke="#93c5fd" strokeWidth="1.5" />
          ))}
          {/* DNA fiber coiled around */}
          <path d="M-45 10 Q-25 -18 -5 0 Q15 -18 35 0 T60 10" stroke="#f43f5e" strokeWidth="3" fill="none" />
          <text x="0" y="80" fill="#93c5fd" fontSize="12" fontWeight="black" textAnchor="middle">3. Histone Coils</text>
          <text x="0" y="95" fill="#94a3b8" fontSize="9" textAnchor="middle">Compact 2-meter DNA thread</text>
        </g>

        {/* Zoom Line */}
        <path d="M475 150 L530 150" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4 3" markerEnd="url(#arrow)" />

        {/* ── 4. DNA Double Helix (Far Right) ─────────────────────────── */}
        <g transform="translate(615, 150)">
          {/* Double Helix Strands */}
          <path d="M-30 -55 Q0 -25 30 -5 Q0 25 -30 55" stroke="#38bdf8" strokeWidth="4" fill="none" />
          <path d="M30 -55 Q0 -25 -30 -5 Q0 25 30 55" stroke="#38bdf8" strokeWidth="4" fill="none" />
          {/* Base Pair Rungs */}
          {([
            [-22, -45, 22, -45, "#ef4444", "#22c55e"],
            [-10, -25, 10, -25, "#3b82f6", "#f59e0b"],
            [0, -5, 0, -5, "#22c55e", "#ef4444"],
            [-10, 15, 10, 15, "#f59e0b", "#3b82f6"],
            [-22, 35, 22, 35, "#ef4444", "#22c55e"],
          ] as const).map(([x1, y1, x2, y2, c1, c2], i) => (
            <g key={i}>
              <line x1={x1} y1={y1} x2={0} y2={y1} stroke={c1} strokeWidth="3" />
              <line x1={0} y1={y1} x2={x2} y2={y2} stroke={c2} strokeWidth="3" />
            </g>
          ))}
          <text x="0" y="80" fill="#38bdf8" fontSize="12" fontWeight="black" textAnchor="middle">4. DNA Double Helix</text>
          <text x="0" y="95" fill="#94a3b8" fontSize="9" textAnchor="middle">The Genetic Code (Genes)</text>
        </g>
      </svg>
    </div>
  );
}

export function DnaDoubleHelixBasesDiagram() {
  return (
    <div className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-2.5 py-1 rounded-full border border-teal-800/60">
          Molecular Structure
        </span>
        <span className="text-xs text-slate-400 font-medium">The 4-Letter Chemical Alphabet (A, T, C, G)</span>
      </div>
      <svg viewBox="0 0 720 340" className="w-full h-auto" aria-label="DNA Base Pairs Structure Diagram">
        <rect width="720" height="340" fill="#030712" rx="12" />

        {/* ── LEFT: The Spiral Ladder Segment ─────────────────────────── */}
        <g transform="translate(180, 160)">
          {/* Sugar-Phosphate Backbones (Left & Right blue rails) */}
          <line x1="-90" y1="-120" x2="-90" y2="120" stroke="#0284c7" strokeWidth="8" strokeLinecap="round" />
          <text x="-105" y="0" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="end" transform="rotate(-90, -105, 0)">Sugar-Phosphate Backbone</text>

          <line x1="90" y1="-120" x2="90" y2="120" stroke="#0284c7" strokeWidth="8" strokeLinecap="round" />
          <text x="105" y="0" fill="#38bdf8" fontSize="10" fontWeight="bold" transform="rotate(90, 105, 0)">Sugar-Phosphate Backbone</text>

          {/* 4 Connected Rungs with Letters */}
          {/* Rung 1: A - T */}
          <g transform="translate(0, -80)">
            <rect x="-85" y="-12" width="75" height="24" rx="4" fill="#ef4444" />
            <text x="-50" y="5" fill="#ffffff" fontSize="12" fontWeight="black" textAnchor="middle">A</text>
            <line x1="-10" y1="-4" x2="10" y2="-4" stroke="#facc15" strokeWidth="2" strokeDasharray="2 2" />
            <line x1="-10" y1="4" x2="10" y2="4" stroke="#facc15" strokeWidth="2" strokeDasharray="2 2" />
            <rect x="10" y="-12" width="75" height="24" rx="4" fill="#22c55e" />
            <text x="50" y="5" fill="#ffffff" fontSize="12" fontWeight="black" textAnchor="middle">T</text>
          </g>

          {/* Rung 2: C - G */}
          <g transform="translate(0, -25)">
            <rect x="-85" y="-12" width="75" height="24" rx="4" fill="#3b82f6" />
            <text x="-50" y="5" fill="#ffffff" fontSize="12" fontWeight="black" textAnchor="middle">C</text>
            <line x1="-10" y1="-6" x2="10" y2="-6" stroke="#facc15" strokeWidth="2" strokeDasharray="2 2" />
            <line x1="-10" y1="0" x2="10" y2="0" stroke="#facc15" strokeWidth="2" strokeDasharray="2 2" />
            <line x1="-10" y1="6" x2="10" y2="6" stroke="#facc15" strokeWidth="2" strokeDasharray="2 2" />
            <rect x="10" y="-12" width="75" height="24" rx="4" fill="#f59e0b" />
            <text x="50" y="5" fill="#ffffff" fontSize="12" fontWeight="black" textAnchor="middle">G</text>
          </g>

          {/* Rung 3: T - A */}
          <g transform="translate(0, 30)">
            <rect x="-85" y="-12" width="75" height="24" rx="4" fill="#22c55e" />
            <text x="-50" y="5" fill="#ffffff" fontSize="12" fontWeight="black" textAnchor="middle">T</text>
            <line x1="-10" y1="-4" x2="10" y2="-4" stroke="#facc15" strokeWidth="2" strokeDasharray="2 2" />
            <line x1="-10" y1="4" x2="10" y2="4" stroke="#facc15" strokeWidth="2" strokeDasharray="2 2" />
            <rect x="10" y="-12" width="75" height="24" rx="4" fill="#ef4444" />
            <text x="50" y="5" fill="#ffffff" fontSize="12" fontWeight="black" textAnchor="middle">A</text>
          </g>

          {/* Rung 4: G - C */}
          <g transform="translate(0, 85)">
            <rect x="-85" y="-12" width="75" height="24" rx="4" fill="#f59e0b" />
            <text x="-50" y="5" fill="#ffffff" fontSize="12" fontWeight="black" textAnchor="middle">G</text>
            <line x1="-10" y1="-6" x2="10" y2="-6" stroke="#facc15" strokeWidth="2" strokeDasharray="2 2" />
            <line x1="-10" y1="0" x2="10" y2="0" stroke="#facc15" strokeWidth="2" strokeDasharray="2 2" />
            <line x1="-10" y1="6" x2="10" y2="6" stroke="#facc15" strokeWidth="2" strokeDasharray="2 2" />
            <rect x="10" y="-12" width="75" height="24" rx="4" fill="#3b82f6" />
            <text x="50" y="5" fill="#ffffff" fontSize="12" fontWeight="black" textAnchor="middle">C</text>
          </g>
        </g>

        {/* ── RIGHT: Base Pair Rules Legend ───────────────────────────── */}
        <g transform="translate(420, 50)">
          <rect width="270" height="240" rx="12" fill="#0f172a" stroke="#1e293b" />
          <text x="20" y="32" fill="#f8fafc" fontSize="13" fontWeight="black">Complementary Pairing Rules</text>
          <text x="20" y="50" fill="#94a3b8" fontSize="10">Hydrogen bonds hold the rungs together</text>

          {/* Rule 1: A + T */}
          <g transform="translate(20, 75)">
            <rect width="36" height="26" rx="6" fill="#ef4444" />
            <text x="18" y="18" fill="#ffffff" fontSize="12" fontWeight="black" textAnchor="middle">A</text>
            <text x="45" y="18" fill="#fde047" fontSize="14" fontWeight="bold">⇌</text>
            <rect x="65" y="0" width="36" height="26" rx="6" fill="#22c55e" />
            <text x="83" y="18" fill="#ffffff" fontSize="12" fontWeight="black" textAnchor="middle">T</text>
            <text x="115" y="18" fill="#e2e8f0" fontSize="11" fontWeight="bold">Adenine + Thymine</text>
            <text x="115" y="32" fill="#94a3b8" fontSize="9">2 Hydrogen bonds (A = T)</text>
          </g>

          {/* Rule 2: C + G */}
          <g transform="translate(20, 150)">
            <rect width="36" height="26" rx="6" fill="#3b82f6" />
            <text x="18" y="18" fill="#ffffff" fontSize="12" fontWeight="black" textAnchor="middle">C</text>
            <text x="45" y="18" fill="#fde047" fontSize="14" fontWeight="bold">⇌</text>
            <rect x="65" y="0" width="36" height="26" rx="6" fill="#f59e0b" />
            <text x="83" y="18" fill="#ffffff" fontSize="12" fontWeight="black" textAnchor="middle">G</text>
            <text x="115" y="18" fill="#e2e8f0" fontSize="11" fontWeight="bold">Cytosine + Guanine</text>
            <text x="115" y="32" fill="#94a3b8" fontSize="9">3 Hydrogen bonds (C ≡ G)</text>
          </g>
        </g>
      </svg>
    </div>
  );
}

export function DnaProteinFactoryDiagram() {
  return (
    <div className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-950/80 px-2.5 py-1 rounded-full border border-purple-800/60">
          Protein Synthesis
        </span>
        <span className="text-xs text-slate-400 font-medium">Transcription (DNA ➔ mRNA) &amp; Translation (mRNA ➔ Protein)</span>
      </div>
      <svg viewBox="0 0 720 320" className="w-full h-auto" aria-label="Protein Synthesis Transcription Translation Diagram">
        <rect width="720" height="320" fill="#030712" rx="12" />

        {/* ── STAGE 1: Transcription in Nucleus (Left) ────────────────── */}
        <g transform="translate(20, 20)">
          <rect width="215" height="270" rx="10" fill="#1e1b4b" stroke="#4338ca" />
          <text x="107" y="25" fill="#a5b4fc" fontSize="12" fontWeight="black" textAnchor="middle">1. TRANSCRIPTION</text>
          <text x="107" y="40" fill="#818cf8" fontSize="9" textAnchor="middle">Inside the Cell Nucleus</text>

          {/* DNA Unzipping */}
          <g transform="translate(107, 120)">
            <path d="M-60 -50 Q-10 -20 0 0 Q-10 20 -60 50" stroke="#38bdf8" strokeWidth="3" fill="none" />
            <path d="M60 -50 Q10 -20 0 0 Q10 20 60 50" stroke="#38bdf8" strokeWidth="3" fill="none" />
            {/* Single strand mRNA copy */}
            <path d="M0 0 L50 30" stroke="#f43f5e" strokeWidth="3" strokeDasharray="3 2" />
            <circle cx="0" cy="0" r="14" fill="#a855f7" opacity="0.8" />
            <text x="0" y="4" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">RNA Poly</text>
          </g>

          <text x="107" y="215" fill="#fda4af" fontSize="10" fontWeight="bold" textAnchor="middle">Gene is copied to mRNA</text>
          <text x="107" y="235" fill="#94a3b8" fontSize="8" textAnchor="middle">mRNA carries instructions out to cell</text>
        </g>

        <path d="M245 150 L275 150" stroke="#f43f5e" strokeWidth="3" markerEnd="url(#arrow)" />

        {/* ── STAGE 2: Translation at Ribosome (Middle) ───────────────── */}
        <g transform="translate(285, 20)">
          <rect width="215" height="270" rx="10" fill="#0f172a" stroke="#334155" />
          <text x="107" y="25" fill="#fde047" fontSize="12" fontWeight="black" textAnchor="middle">2. TRANSLATION</text>
          <text x="107" y="40" fill="#94a3b8" fontSize="9" textAnchor="middle">At the Ribosome in Cytoplasm</text>

          {/* Ribosome Clamp reading mRNA */}
          <g transform="translate(107, 120)">
            {/* Ribosome large & small subunits */}
            <ellipse cx="0" cy="-15" rx="45" ry="25" fill="#ca8a04" opacity="0.8" />
            <ellipse cx="0" cy="18" rx="35" ry="18" fill="#a16207" opacity="0.8" />
            {/* mRNA thread going through */}
            <line x1="-70" y1="0" x2="70" y2="0" stroke="#f43f5e" strokeWidth="4" />
            {/* 3-letter Codons */}
            <text x="-40" y="-3" fill="#ffffff" fontSize="8" fontWeight="bold">AUG</text>
            <text x="0" y="-3" fill="#ffffff" fontSize="8" fontWeight="bold">GCC</text>
            <text x="35" y="-3" fill="#ffffff" fontSize="8" fontWeight="bold">UAG</text>
          </g>

          <text x="107" y="215" fill="#fde047" fontSize="10" fontWeight="bold" textAnchor="middle">Ribosome reads 3-letter codons</text>
          <text x="107" y="235" fill="#94a3b8" fontSize="8" textAnchor="middle">Matches each codon to an Amino Acid</text>
        </g>

        <path d="M510 150 L540 150" stroke="#22c55e" strokeWidth="3" markerEnd="url(#arrow)" />

        {/* ── STAGE 3: Folded Functional Protein (Right) ──────────────── */}
        <g transform="translate(550, 20)">
          <rect width="150" height="270" rx="10" fill="#064e3b" stroke="#059669" />
          <text x="75" y="25" fill="#6ee7b7" fontSize="12" fontWeight="black" textAnchor="middle">3. PROTEIN TRAIT</text>
          <text x="75" y="40" fill="#a7f3d0" fontSize="9" textAnchor="middle">Active Living Machine</text>

          {/* Folded polypeptide chain */}
          <g transform="translate(75, 120)">
            <path d="M-30 -30 Q0 -10 -15 10 Q-30 30 0 40 Q25 20 15 -10 Q5 -40 30 -30"
                  stroke="#34d399" strokeWidth="5" fill="none" strokeLinecap="round" />
            {/* Amino acid beads */}
            <circle cx="-30" cy="-30" r="4" fill="#fde047" />
            <circle cx="-15" cy="10" r="4" fill="#ef4444" />
            <circle cx="0" cy="40" r="4" fill="#3b82f6" />
            <circle cx="15" cy="-10" r="4" fill="#f97316" />
          </g>

          <text x="75" y="215" fill="#6ee7b7" fontSize="10" fontWeight="bold" textAnchor="middle">Folded Functional Protein</text>
          <text x="75" y="235" fill="#d1fae5" fontSize="8" textAnchor="middle">Melanin, Keratin, Hemoglobin</text>
        </g>
      </svg>
    </div>
  );
}

export function DnaInheritedTraitsDiagram() {
  return (
    <div className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-800/60">
          Inheritance &amp; Genetics
        </span>
        <span className="text-xs text-slate-400 font-medium">Punnett Square: Dominant vs. Recessive Alleles</span>
      </div>
      <svg viewBox="0 0 720 300" className="w-full h-auto" aria-label="Punnett Square Inherited Traits Diagram">
        <rect width="720" height="300" fill="#020617" rx="12" />

        {/* ── LEFT: Parents and Alleles ───────────────────────────────── */}
        <g transform="translate(40, 40)">
          <text x="0" y="20" fill="#f8fafc" fontSize="13" fontWeight="black">Eye Color Example:</text>
          <text x="0" y="42" fill="#38bdf8" fontSize="11" fontWeight="bold">B = Brown Eyes (Dominant)</text>
          <text x="0" y="60" fill="#93c5fd" fontSize="11" fontWeight="bold">b = Blue Eyes (Recessive)</text>

          <rect x="0" y="80" width="220" height="130" rx="8" fill="#0f172a" stroke="#1e293b" />
          <text x="15" y="105" fill="#fde047" fontSize="11" fontWeight="bold">Mother: Carrier (Bb)</text>
          <text x="15" y="120" fill="#94a3b8" fontSize="9">Has Brown eyes, carries blue gene</text>

          <text x="15" y="155" fill="#fde047" fontSize="11" fontWeight="bold">Father: Carrier (Bb)</text>
          <text x="15" y="170" fill="#94a3b8" fontSize="9">Has Brown eyes, carries blue gene</text>

          <text x="15" y="195" fill="#cbd5e1" fontSize="9" fontWeight="bold">75% Brown Eyes / 25% Blue Eyes!</text>
        </g>

        {/* ── RIGHT: 2x2 Punnett Square ───────────────────────────────── */}
        <g transform="translate(360, 40)">
          {/* Top Column Labels (Mother: B, b) */}
          <text x="80" y="20" fill="#38bdf8" fontSize="14" fontWeight="black" textAnchor="middle">B (Mom)</text>
          <text x="180" y="20" fill="#93c5fd" fontSize="14" fontWeight="black" textAnchor="middle">b (Mom)</text>

          {/* Left Row Labels (Father: B, b) */}
          <text x="10" y="85" fill="#38bdf8" fontSize="14" fontWeight="black">B (Dad)</text>
          <text x="10" y="165" fill="#93c5fd" fontSize="14" fontWeight="black">b (Dad)</text>

          {/* Grid Box: 2x2 */}
          {/* Cell 1: BB */}
          <rect x="30" y="40" width="100" height="75" fill="#1e1b4b" stroke="#4338ca" strokeWidth="2" />
          <text x="80" y="75" fill="#f8fafc" fontSize="18" fontWeight="black" textAnchor="middle">BB</text>
          <text x="80" y="95" fill="#a5b4fc" fontSize="10" textAnchor="middle">Brown Eyes (25%)</text>

          {/* Cell 2: Bb */}
          <rect x="130" y="40" width="100" height="75" fill="#1e1b4b" stroke="#4338ca" strokeWidth="2" />
          <text x="180" y="75" fill="#f8fafc" fontSize="18" fontWeight="black" textAnchor="middle">Bb</text>
          <text x="180" y="95" fill="#a5b4fc" fontSize="10" textAnchor="middle">Brown Eyes (25%)</text>

          {/* Cell 3: Bb */}
          <rect x="30" y="115" width="100" height="75" fill="#1e1b4b" stroke="#4338ca" strokeWidth="2" />
          <text x="80" y="150" fill="#f8fafc" fontSize="18" fontWeight="black" textAnchor="middle">Bb</text>
          <text x="80" y="170" fill="#a5b4fc" fontSize="10" textAnchor="middle">Brown Eyes (25%)</text>

          {/* Cell 4: bb (Blue Eyes Recessive!) */}
          <rect x="130" y="115" width="100" height="75" fill="#082f49" stroke="#0284c7" strokeWidth="2" />
          <text x="180" y="150" fill="#38bdf8" fontSize="18" fontWeight="black" textAnchor="middle">bb</text>
          <text x="180" y="170" fill="#7dd3fc" fontSize="10" fontWeight="black" textAnchor="middle">Blue Eyes (25%)</text>

          <text x="130" y="225" fill="#fde047" fontSize="11" fontWeight="black" textAnchor="middle">
            Offspring receive 50% DNA from mother and 50% from father
          </text>
        </g>
      </svg>
    </div>
  );
}
