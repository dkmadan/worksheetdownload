import type { AccentTokens, CycleStep } from "@/lib/knowledge";

interface Props {
  steps: CycleStep[];
  accent: AccentTokens;
  /** unique id prefix so multiple diagrams on a page don't clash */
  idPrefix: string;
}

/**
 * A circular "cycle" diagram: numbered emoji nodes arranged on a ring with
 * flow arrows pointing clockwise. Purely decorative SVG — the step labels and
 * descriptions are rendered as text alongside it by the page.
 */
export default function CycleRing({ steps, accent, idPrefix }: Props) {
  const size = 320;
  const c = size / 2;
  const ringR = 120;
  const nodeR = 30;
  const n = steps.length;

  const nodes = steps.map((step, i) => {
    const angle = (-90 + (360 / n) * i) * (Math.PI / 180);
    return {
      ...step,
      i,
      x: c + ringR * Math.cos(angle),
      y: c + ringR * Math.sin(angle),
    };
  });

  // Arrow markers sit at the midpoint angle between consecutive nodes.
  const arrows = steps.map((_, i) => {
    const mid = (-90 + (360 / n) * (i + 0.5)) * (Math.PI / 180);
    const x = c + ringR * Math.cos(mid);
    const y = c + ringR * Math.sin(mid);
    // tangent direction (clockwise)
    const deg = (-90 + (360 / n) * (i + 0.5)) + 90;
    return { x, y, deg };
  });

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full h-auto max-w-[340px] mx-auto"
      role="img"
      aria-label={`Cycle diagram with ${n} stages: ${steps.map((s) => s.label).join(", ")}`}
    >
      <defs>
        <linearGradient id={`${idPrefix}-ring`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent.svg.a} />
          <stop offset="100%" stopColor={accent.svg.b} />
        </linearGradient>
        <filter id={`${idPrefix}-soft`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor={accent.svg.b} floodOpacity="0.18" />
        </filter>
      </defs>

      {/* flow ring */}
      <circle
        cx={c}
        cy={c}
        r={ringR}
        fill="none"
        stroke={`url(#${idPrefix}-ring)`}
        strokeWidth={10}
        strokeLinecap="round"
        strokeDasharray="2 16"
        opacity={0.55}
      />

      {/* clockwise flow arrows */}
      {arrows.map((a, i) => (
        <g key={i} transform={`translate(${a.x} ${a.y}) rotate(${a.deg})`}>
          <path d="M -7 -6 L 7 0 L -7 6 Z" fill={accent.svg.b} opacity={0.9} />
        </g>
      ))}

      {/* centre glyph */}
      <circle cx={c} cy={c} r={44} fill={accent.svg.a} opacity={0.1} />
      <text
        x={c}
        y={c + 15}
        textAnchor="middle"
        fontSize={44}
        fill={accent.svg.b}
        opacity={0.35}
        fontWeight="700"
      >
        ↻
      </text>

      {/* nodes */}
      {nodes.map((node) => (
        <g key={node.i} filter={`url(#${idPrefix}-soft)`}>
          <circle cx={node.x} cy={node.y} r={nodeR} fill="#ffffff" stroke={accent.svg.a} strokeWidth={3} />
          <text x={node.x} y={node.y + 8} textAnchor="middle" fontSize={24}>
            {node.emoji}
          </text>
          <circle
            cx={node.x + nodeR - 4}
            cy={node.y - nodeR + 4}
            r={11}
            fill={accent.svg.b}
          />
          <text
            x={node.x + nodeR - 4}
            y={node.y - nodeR + 8}
            textAnchor="middle"
            fontSize={12}
            fontWeight="700"
            fill="#ffffff"
          >
            {node.i + 1}
          </text>
        </g>
      ))}
    </svg>
  );
}
