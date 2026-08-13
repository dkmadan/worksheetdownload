/**
 * Animated hero visual: 8 topic/tech bubbles orbiting a central graduation-cap orb.
 * Four bubbles = K-8 subjects (warm), four = developer topics (cool).
 * Pure CSS + inline SVG — no external dependencies, no client hooks needed.
 */

const ORBIT_ITEMS = [
  // ── tech topics (cool palette) ───────────────────────────────────────
  { emoji: "⚙️", label: "Backend",  bg: "linear-gradient(135deg,#059669,#0d9488)", glow: "#05966955", deg: 0   },
  { emoji: "🧠", label: "AI / ML",  bg: "linear-gradient(135deg,#7c3aed,#6d28d9)", glow: "#7c3aed55", deg: 90  },
  { emoji: "☁️", label: "Cloud",    bg: "linear-gradient(135deg,#0284c7,#0369a1)", glow: "#0284c755", deg: 180 },
  { emoji: "🔌", label: "APIs",     bg: "linear-gradient(135deg,#d97706,#b45309)", glow: "#d9770655", deg: 270 },
  // ── K-8 subjects (warm palette) ──────────────────────────────────────
  { emoji: "🔢", label: "Math",     bg: "linear-gradient(135deg,#3b82f6,#4f46e5)", glow: "#3b82f655", deg: 45  },
  { emoji: "🔬", label: "Science",  bg: "linear-gradient(135deg,#06b6d4,#0891b2)", glow: "#06b6d455", deg: 135 },
  { emoji: "📖", label: "English",  bg: "linear-gradient(135deg,#ec4899,#db2777)", glow: "#ec489955", deg: 225 },
  { emoji: "🌿", label: "EVS",      bg: "linear-gradient(135deg,#22c55e,#16a34a)", glow: "#22c55e55", deg: 315 },
] as const;

// Staggered float durations so no two bubbles move in sync
const DURATIONS = [2.9, 3.3, 2.7, 3.1, 3.5, 2.8, 3.2, 2.6];

// Small decorative star particles
const PARTICLES = [
  { size: 5, top: "14%", left: "18%",  opacity: 0.5, delay: "0s",    dur: "3.8s" },
  { size: 4, top: "22%", left: "78%",  opacity: 0.4, delay: "1.1s",  dur: "4.2s" },
  { size: 6, top: "65%", left: "12%",  opacity: 0.45, delay: "0.6s", dur: "3.5s" },
  { size: 4, top: "72%", left: "82%",  opacity: 0.4, delay: "1.7s",  dur: "4.0s" },
  { size: 3, top: "44%", left: "6%",   opacity: 0.35, delay: "2.2s", dur: "3.9s" },
  { size: 3, top: "38%", left: "90%",  opacity: 0.35, delay: "0.3s", dur: "4.3s" },
];

export default function HeroVisual() {
  const R = 132; // orbit radius in px

  return (
    <div
      className="relative flex-shrink-0 w-[340px] h-[340px] sm:w-[380px] sm:h-[380px]"
      aria-hidden="true"
    >
      {/* ── SVG decorative layer ─────────────────────────────────────── */}
      <svg
        viewBox="0 0 360 360"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        {/* Outer dashed orbit ring */}
        <circle
          cx={180} cy={180} r={R}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1.5"
          strokeDasharray="5 9"
        />

        {/* Connecting lines: center → each bubble center */}
        {ORBIT_ITEMS.map((item) => {
          const rad = (item.deg * Math.PI) / 180;
          const x = 180 + R * Math.cos(rad);
          const y = 180 + R * Math.sin(rad);
          return (
            <line
              key={item.label}
              x1={180} y1={180}
              x2={x}   y2={y}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          );
        })}

        {/* Mid-ring accent dots at each orbit point */}
        {ORBIT_ITEMS.map((item) => {
          const rad = (item.deg * Math.PI) / 180;
          const x = 180 + R * Math.cos(rad);
          const y = 180 + R * Math.sin(rad);
          return (
            <circle
              key={`dot-${item.label}`}
              cx={x} cy={y} r={3}
              fill="rgba(255,255,255,0.12)"
            />
          );
        })}
      </svg>

      {/* ── Floating star particles ──────────────────────────────────── */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            opacity: p.opacity,
            animation: `heroFloat ${p.dur} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* ── Central orb ─────────────────────────────────────────────── */}
      <div
        className="absolute"
        style={{ top: "calc(50% - 52px)", left: "calc(50% - 52px)", width: 104, height: 104 }}
      >
        {/* Glow halo */}
        <div
          style={{
            position: "absolute",
            inset: -24,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 65%)",
            animation: "heroPulse 3.5s ease-in-out infinite",
          }}
        />
        {/* Sphere */}
        <div
          style={{
            width: 104,
            height: 104,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 55%, #ec4899 100%)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.12) inset, 0 0 40px rgba(99,102,241,0.55), 0 0 80px rgba(99,102,241,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 46, lineHeight: 1 }}>🎓</span>
        </div>
      </div>

      {/* ── Orbiting bubbles ─────────────────────────────────────────── */}
      {ORBIT_ITEMS.map((item, i) => (
        <div
          key={item.label}
          /* Level 1: rotate to orbit angle + translate outward */
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            width: 0,
            height: 0,
            transform: `rotate(${item.deg}deg) translateX(${R}px)`,
          }}
        >
          {/* Level 2: counter-rotate so bubble stays upright */}
          <div style={{ transform: `rotate(-${item.deg}deg)` }}>
            {/* Level 3: center at orbit point + float animation */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                marginLeft: -30, // center 60px bubble
                marginTop:  -30,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                animation: `heroFloat ${DURATIONS[i]}s ease-in-out infinite`,
                animationDelay: `${i * 0.38}s`,
              }}
            >
              {/* Bubble */}
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 16,
                  background: item.bg,
                  boxShadow: `0 4px 24px ${item.glow}, 0 1px 0 rgba(255,255,255,0.18) inset`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 24, lineHeight: 1 }}>{item.emoji}</span>
              </div>
              {/* Label */}
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.72)",
                  letterSpacing: "0.06em",
                  whiteSpace: "nowrap",
                  textShadow: "0 1px 6px rgba(0,0,0,0.9)",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
