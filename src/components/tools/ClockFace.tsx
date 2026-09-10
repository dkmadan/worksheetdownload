import { handAngles, handPoint } from "@/lib/tools/clock";

// SVG analog clock — mirrors drawClockFace() in pdf.ts.
export default function ClockFace({
  h,
  m,
  hands = true,
  size = 120,
}: {
  h: number;
  m: number;
  hands?: boolean;
  size?: number;
}) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 3;

  const ticks = Array.from({ length: 60 }, (_, t) => {
    const [x1, y1] = handPoint(cx, cy, t * 6, r - (t % 5 === 0 ? 7 : 3.5));
    const [x2, y2] = handPoint(cx, cy, t * 6, r - 1);
    return { x1, y1, x2, y2, major: t % 5 === 0 };
  });

  const nums = Array.from({ length: 12 }, (_, i) => {
    const n = i + 1;
    const [nx, ny] = handPoint(cx, cy, n * 30, r - size * 0.14);
    return { n, nx, ny };
  });

  const { hour, minute } = handAngles({ h, m });
  const [hx, hy] = handPoint(cx, cy, hour, r * 0.5);
  const [mx, my] = handPoint(cx, cy, minute, r * 0.78);

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} className="shrink-0">
      <circle cx={cx} cy={cy} r={r} fill="#fff" stroke="#334155" strokeWidth={1.6} />
      {ticks.map((t, i) => (
        <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke={t.major ? "#334155" : "#cbd5e1"} strokeWidth={t.major ? 1.2 : 0.6} />
      ))}
      {nums.map((t) => (
        <text key={t.n} x={t.nx} y={t.ny} textAnchor="middle" dominantBaseline="central" fontSize={size * 0.13} fontWeight={700} fill="#334155">
          {t.n}
        </text>
      ))}
      {hands && (
        <>
          <line x1={cx} y1={cy} x2={hx} y2={hy} stroke="#0f172a" strokeWidth={size * 0.028} strokeLinecap="round" />
          <line x1={cx} y1={cy} x2={mx} y2={my} stroke="#2563eb" strokeWidth={size * 0.02} strokeLinecap="round" />
        </>
      )}
      <circle cx={cx} cy={cy} r={size * 0.022} fill="#0f172a" />
    </svg>
  );
}
