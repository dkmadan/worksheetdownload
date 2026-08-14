/**
 * Animated hero visual: 8 topic/tech bubbles orbiting a central graduation-cap orb.
 * Four bubbles = K-8 subjects (warm), four = developer topics (cool).
 * Pure CSS + inline SVG — no external dependencies, no client hooks needed.
 */

const ORBIT_ITEMS = [
  // ── tech topics ──────────────────────────────────────────────────────────
  { emoji: "🖥️", label: "Backend",  bg: "linear-gradient(135deg,#10b981,#047857)", glow: "#10b98170", deg: 0   },
  { emoji: "🤖", label: "AI / ML",  bg: "linear-gradient(135deg,#a855f7,#7c3aed)", glow: "#a855f780", deg: 90  },
  { emoji: "☁️", label: "Cloud",    bg: "linear-gradient(135deg,#38bdf8,#0284c7)", glow: "#38bdf880", deg: 180 },
  { emoji: "🔗", label: "APIs",     bg: "linear-gradient(135deg,#fb923c,#dc2626)", glow: "#fb923c80", deg: 270 },
  // ── K-8 subjects ─────────────────────────────────────────────────────────
  { emoji: "🧮", label: "Maths",    bg: "linear-gradient(135deg,#60a5fa,#3b82f6)", glow: "#60a5fa80", deg: 45  },
  { emoji: "🧪", label: "Science",  bg: "linear-gradient(135deg,#34d399,#059669)", glow: "#34d39980", deg: 135 },
  { emoji: "📚", label: "English",  bg: "linear-gradient(135deg,#f472b6,#db2777)", glow: "#f472b680", deg: 225 },
  { emoji: "🌱", label: "EVS",      bg: "linear-gradient(135deg,#facc15,#f59e0b)", glow: "#facc1580", deg: 315 },
] as const;

// Staggered float durations so no two bubbles move in sync
const DURATIONS = [2.9, 3.3, 2.7, 3.1, 3.5, 2.8, 3.2, 2.6];

// Small decorative star particles
const PARTICLES = [
  { size: 5, top: "14%", left: "18%",  opacity: 0.7,  delay: "0s",    dur: "3.8s" },
  { size: 4, top: "22%", left: "78%",  opacity: 0.6,  delay: "1.1s",  dur: "4.2s" },
  { size: 6, top: "65%", left: "12%",  opacity: 0.65, delay: "0.6s",  dur: "3.5s" },
  { size: 4, top: "72%", left: "82%",  opacity: 0.6,  delay: "1.7s",  dur: "4.0s" },
  { size: 3, top: "44%", left: "6%",   opacity: 0.55, delay: "2.2s",  dur: "3.9s" },
  { size: 3, top: "38%", left: "90%",  opacity: 0.55, delay: "0.3s",  dur: "4.3s" },
];

export default function HeroVisual() {
  const R = 136; // orbit radius in px

  return (
    <div
      className="relative flex-shrink-0 w-[340px] h-[340px] sm:w-[390px] sm:h-[390px]"
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
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.5"
          strokeDasharray="5 9"
        />

        {/* Connecting lines: center → each bubble */}
        {ORBIT_ITEMS.map((item) => {
          const rad = (item.deg * Math.PI) / 180;
          const x = 180 + R * Math.cos(rad);
          const y = 180 + R * Math.sin(rad);
          return (
            <line
              key={item.label}
              x1={180} y1={180}
              x2={x}   y2={y}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
          );
        })}

        {/* Accent dots at each orbit point */}
        {ORBIT_ITEMS.map((item) => {
          const rad = (item.deg * Math.PI) / 180;
          const x = 180 + R * Math.cos(rad);
          const y = 180 + R * Math.sin(rad);
          return (
            <circle
              key={`dot-${item.label}`}
              cx={x} cy={y} r={4}
              fill="rgba(255,255,255,0.25)"
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
        style={{ top: "calc(50% - 56px)", left: "calc(50% - 56px)", width: 112, height: 112 }}
      >
        {/* Glow halo */}
        <div
          style={{
            position: "absolute",
            inset: -28,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(167,139,250,0.5) 0%, transparent 65%)",
            animation: "heroPulse 3.5s ease-in-out infinite",
          }}
        />
        {/* Sphere */}
        <div
          style={{
            width: 112,
            height: 112,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #6366f1 0%, #a855f7 55%, #ec4899 100%)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.18) inset, 0 0 48px rgba(139,92,246,0.7), 0 0 96px rgba(139,92,246,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 52, lineHeight: 1 }}>🎓</span>
        </div>
      </div>

      {/* ── Orbiting bubbles ─────────────────────────────────────────── */}
      {ORBIT_ITEMS.map((item, i) => (
        <div
          key={item.label}
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            width: 0,
            height: 0,
            transform: `rotate(${item.deg}deg) translateX(${R}px)`,
          }}
        >
          <div style={{ transform: `rotate(-${item.deg}deg)` }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                marginLeft: -36,
                marginTop: -36,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 5,
                animation: `heroFloat ${DURATIONS[i]}s ease-in-out infinite`,
                animationDelay: `${i * 0.38}s`,
              }}
            >
              {/* Bubble */}
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 20,
                  background: item.bg,
                  boxShadow: `0 6px 28px ${item.glow}, 0 1px 0 rgba(255,255,255,0.28) inset`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 30, lineHeight: 1 }}>{item.emoji}</span>
              </div>
              {/* Label */}
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "0.07em",
                  whiteSpace: "nowrap",
                  textShadow: "0 1px 8px rgba(0,0,0,1), 0 0 16px rgba(0,0,0,0.8)",
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
