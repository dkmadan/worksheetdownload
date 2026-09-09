import { diagramSpec } from "@/lib/maps/diagram-spec";
import type { DiagramKind } from "@/lib/maps/types";

// On-screen diagram for geometry-based map worksheets. Mirrors the PDF diagram.
export default function MapDiagram({ kind }: { kind: DiagramKind }) {
  const spec = diagramSpec(kind);

  const VB_W = 560;
  const VB_H = 300;
  const L = 168; // left margin for latitude labels
  const R = 26;
  const T = 16;
  const B = 42; // bottom margin for longitude labels
  const fw = VB_W - L - R;
  const fh = VB_H - T - B;
  const fx = (n: number) => L + n * fw;
  const fy = (n: number) => T + n * fh;

  const stroke = "#334155";
  const faint = "#cbd5e1";

  return (
    <figure className="my-4">
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="w-full rounded-lg border border-slate-200 bg-white" role="img" aria-label={`${kind} diagram`}>
        {spec.shape === "world" && (
          <>
            {spec.bands.map((band, i) => {
              const isVertical = kind === "prime-meridian";
              return isVertical ? (
                <rect key={i} x={fx(band.from)} y={T} width={fx(band.to) - fx(band.from)} height={fh} fill={`rgba(15,23,42,${band.tint})`} />
              ) : (
                <rect key={i} x={L} y={fy(band.from)} width={fw} height={fy(band.to) - fy(band.from)} fill={`rgba(15,23,42,${band.tint})`} />
              );
            })}
            <rect x={L} y={T} width={fw} height={fh} fill="none" stroke={stroke} strokeWidth={1.25} />

            {spec.bands.map((band, i) => {
              const isVertical = kind === "prime-meridian";
              const cx = isVertical ? (fx(band.from) + fx(band.to)) / 2 : L + fw / 2;
              const cy = isVertical ? T + fh / 2 : (fy(band.from) + fy(band.to)) / 2;
              return (
                <text key={i} x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fontSize={9} fontWeight={700} fill="#475569" opacity={0.9}>
                  {band.label}
                </text>
              );
            })}

            {spec.hlines.map((ln, i) => (
              <g key={i}>
                <line x1={L} y1={fy(ln.at)} x2={L + fw} y2={fy(ln.at)} stroke={ln.dashed ? faint : stroke} strokeWidth={ln.bold ? 1.8 : 1} strokeDasharray={ln.dashed ? "4 3" : undefined} />
                {ln.label && (
                  <text x={L - 8} y={fy(ln.at)} textAnchor="end" dominantBaseline="middle" fontSize={7.5} fontWeight={ln.bold ? 700 : 500} fill="#334155">
                    {ln.label}
                  </text>
                )}
              </g>
            ))}

            {spec.vlines.map((ln, i) => (
              <g key={i}>
                <line x1={fx(ln.at)} y1={T} x2={fx(ln.at)} y2={T + fh} stroke={ln.dashed ? faint : stroke} strokeWidth={ln.bold ? 1.8 : 0.9} strokeDasharray={ln.dashed ? "4 3" : undefined} />
                {ln.label && (
                  <text x={fx(ln.at)} y={T + fh + 12} textAnchor="middle" fontSize={8} fontWeight={ln.bold ? 700 : 500} fill="#334155">
                    {ln.label}
                  </text>
                )}
              </g>
            ))}
          </>
        )}

        {(spec.shape === "globe-ns" || spec.shape === "globe-ew") && (
          <GlobeDiagram shape={spec.shape} />
        )}

        {spec.shape === "compass" && <CompassRose />}

        {spec.shape === "grid" && spec.grid && <LabeledGrid cols={spec.grid.cols} rows={spec.grid.rows} L={L} T={T} fw={fw} fh={fh} />}
      </svg>
      <figcaption className="mt-1.5 text-xs text-slate-400 text-center">{spec.caption}</figcaption>
    </figure>
  );
}

function GlobeDiagram({ shape }: { shape: "globe-ns" | "globe-ew" }) {
  const cx = 235;
  const cy = 145;
  const r = 110;
  return (
    <>
      <circle cx={cx} cy={cy} r={r} fill="#f8fafc" stroke="#334155" strokeWidth={1.5} />
      {/* equator */}
      <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} stroke="#334155" strokeWidth={shape === "globe-ns" ? 1.8 : 1} strokeDasharray={shape === "globe-ew" ? "4 3" : undefined} />
      {/* prime meridian */}
      <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} stroke="#334155" strokeWidth={shape === "globe-ew" ? 1.8 : 1} strokeDasharray={shape === "globe-ns" ? "4 3" : undefined} />
      {shape === "globe-ns" ? (
        <>
          <text x={cx} y={cy - r / 2} textAnchor="middle" fontSize={11} fontWeight={700} fill="#475569">Northern Hemisphere</text>
          <text x={cx} y={cy + r / 2 + 4} textAnchor="middle" fontSize={11} fontWeight={700} fill="#475569">Southern Hemisphere</text>
          <text x={cx - r - 6} y={cy - 2} textAnchor="end" fontSize={8.5} fill="#334155">Equator</text>
        </>
      ) : (
        <>
          <text x={cx - r / 2} y={cy} textAnchor="middle" fontSize={11} fontWeight={700} fill="#475569">Western</text>
          <text x={cx + r / 2} y={cy} textAnchor="middle" fontSize={11} fontWeight={700} fill="#475569">Eastern</text>
          <text x={cx} y={cy - r - 4} textAnchor="middle" fontSize={8.5} fill="#334155">Prime Meridian</text>
        </>
      )}
    </>
  );
}

function CompassRose() {
  const cx = 235;
  const cy = 145;
  const R = 108;
  const hub = 38;
  const pt = (ang: number, rad: number): [number, number] => {
    const a = ((ang - 90) * Math.PI) / 180;
    return [cx + rad * Math.cos(a), cy + rad * Math.sin(a)];
  };
  const dirs = [
    { a: 0, l: "N", card: true },
    { a: 45, l: "NE", card: false },
    { a: 90, l: "E", card: true },
    { a: 135, l: "SE", card: false },
    { a: 180, l: "S", card: true },
    { a: 225, l: "SW", card: false },
    { a: 270, l: "W", card: true },
    { a: 315, l: "NW", card: false },
  ];
  return (
    <>
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="#e2e8f0" strokeWidth={1} />
      {dirs.map((d, i) => {
        const [tx, ty] = pt(d.a, R - 12);
        const [l1x, l1y] = pt(d.a - 90, hub * 0.5);
        const [l2x, l2y] = pt(d.a + 90, hub * 0.5);
        const [labx, laby] = pt(d.a, R + 4);
        return (
          <g key={i}>
            <polygon points={`${tx},${ty} ${l1x},${l1y} ${l2x},${l2y}`} fill={d.card ? "#1e3a8a" : "#94a3b8"} opacity={d.card ? 0.9 : 0.5} />
            <text x={labx} y={laby + 4} textAnchor="middle" fontSize={d.card ? 13 : 10} fontWeight={700} fill="#334155">
              {d.l}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={3} fill="#1e3a8a" />
    </>
  );
}

function LabeledGrid({ cols, rows, L, T, fw, fh }: { cols: number; rows: number; L: number; T: number; fw: number; fh: number }) {
  const cw = fw / cols;
  const ch = fh / rows;
  const letters = "ABCDEFGHJKLMN".split("");
  return (
    <>
      <rect x={L} y={T} width={fw} height={fh} fill="#f8fafc" stroke="#334155" strokeWidth={1.25} />
      {Array.from({ length: cols - 1 }).map((_, i) => (
        <line key={`v${i}`} x1={L + (i + 1) * cw} y1={T} x2={L + (i + 1) * cw} y2={T + fh} stroke="#cbd5e1" strokeWidth={0.75} />
      ))}
      {Array.from({ length: rows - 1 }).map((_, i) => (
        <line key={`h${i}`} x1={L} y1={T + (i + 1) * ch} x2={L + fw} y2={T + (i + 1) * ch} stroke="#cbd5e1" strokeWidth={0.75} />
      ))}
      {Array.from({ length: cols }).map((_, i) => (
        <text key={`cl${i}`} x={L + i * cw + cw / 2} y={T - 4} textAnchor="middle" fontSize={9} fontWeight={700} fill="#475569">
          {letters[i]}
        </text>
      ))}
      {Array.from({ length: rows }).map((_, i) => (
        <text key={`rl${i}`} x={L - 8} y={T + i * ch + ch / 2 + 3} textAnchor="middle" fontSize={9} fontWeight={700} fill="#475569">
          {i + 1}
        </text>
      ))}
    </>
  );
}
