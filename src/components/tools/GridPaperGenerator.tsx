"use client";

import { useState } from "react";
import ToolFrame, { PaperHeader } from "./ToolFrame";
import { Field, Segmented, Slider, Toggle } from "./ui";
import { buildGridPaperPdf, downloadPdf } from "@/lib/tools/pdf";

type Style = "squares" | "dots" | "coordinate";

export default function GridPaperGenerator() {
  const [style, setStyle] = useState<Style>("squares");
  const [spacingMm, setSpacingMm] = useState(5);
  const [heavyEvery, setHeavyEvery] = useState(5);
  const [chrome, setChrome] = useState(true);
  const [busy, setBusy] = useState(false);

  const title =
    style === "coordinate" ? "Coordinate Grid Paper" : style === "dots" ? "Dot Grid Paper" : "Graph Paper";

  async function download() {
    setBusy(true);
    try {
      const bytes = await buildGridPaperPdf({
        title,
        style,
        spacingMm,
        heavyEvery: style === "squares" ? heavyEvery : 0,
        showChrome: chrome,
      });
      downloadPdf(bytes, `${title.replace(/\s+/g, "-").toLowerCase()}-${spacingMm}mm`);
    } finally {
      setBusy(false);
    }
  }

  // preview
  const pxGap = Math.max(6, spacingMm * 2.4);
  const W = 560;
  const H = 720;
  const cols = Math.floor(W / pxGap);
  const rows = Math.floor(H / pxGap);

  return (
    <ToolFrame
      note="A4 output. Spacing is exact millimetres when printed at 100% / “actual size”."
      actions={[{ label: busy ? "Building…" : "Download PDF", onClick: download, primary: true, disabled: busy }]}
      controls={
        <>
          <Field label="Grid style">
            <Segmented
              options={[
                { value: "squares", label: "Squares" },
                { value: "dots", label: "Dots" },
                { value: "coordinate", label: "Coordinate" },
              ]}
              value={style}
              onChange={(v) => setStyle(v as Style)}
            />
          </Field>

          <Field label="Spacing">
            <Slider value={spacingMm} min={3} max={20} onChange={setSpacingMm} format={(v) => `${v} mm`} />
          </Field>

          {style === "squares" && (
            <Field label="Bold line every">
              <Segmented
                options={[
                  { value: "0", label: "Never" },
                  { value: "2", label: "2" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                  { value: "10", label: "10" },
                ]}
                value={String(heavyEvery)}
                onChange={(v) => setHeavyEvery(Number(v))}
              />
            </Field>
          )}

          <Toggle checked={chrome} onChange={setChrome} label="Show title & footer" />
        </>
      }
      preview={
        <div className={chrome ? "px-6 py-6" : "p-3"}>
          {chrome && <PaperHeader title={title} subtitle={`${spacingMm} mm grid`} badge="Grid Paper" studentStrip={false} />}
          <div className={chrome ? "pt-4" : ""}>
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full border border-slate-200">
              {style === "dots"
                ? Array.from({ length: cols + 1 }).flatMap((_, i) =>
                    Array.from({ length: rows + 1 }).map((__, j) => (
                      <circle key={`${i}-${j}`} cx={i * pxGap} cy={j * pxGap} r={1} fill="#64748b" />
                    )),
                  )
                : Array.from({ length: cols + 1 }).map((_, i) => {
                    const bold = style === "squares" && heavyEvery > 0 && i % heavyEvery === 0;
                    return (
                      <line
                        key={`v${i}`}
                        x1={i * pxGap}
                        y1={0}
                        x2={i * pxGap}
                        y2={rows * pxGap}
                        stroke={bold ? "#64748b" : "#cbd5e1"}
                        strokeWidth={bold ? 1 : 0.5}
                      />
                    );
                  })}
              {style !== "dots" &&
                Array.from({ length: rows + 1 }).map((_, j) => {
                  const bold = style === "squares" && heavyEvery > 0 && j % heavyEvery === 0;
                  return (
                    <line
                      key={`h${j}`}
                      x1={0}
                      y1={j * pxGap}
                      x2={cols * pxGap}
                      y2={j * pxGap}
                      stroke={bold ? "#64748b" : "#cbd5e1"}
                      strokeWidth={bold ? 1 : 0.5}
                    />
                  );
                })}
              {style === "coordinate" && (
                <>
                  <line x1={0} y1={Math.floor(rows / 2) * pxGap} x2={cols * pxGap} y2={Math.floor(rows / 2) * pxGap} stroke="#0f172a" strokeWidth={1.5} />
                  <line x1={Math.floor(cols / 2) * pxGap} y1={0} x2={Math.floor(cols / 2) * pxGap} y2={rows * pxGap} stroke="#0f172a" strokeWidth={1.5} />
                </>
              )}
            </svg>
          </div>
        </div>
      }
    />
  );
}
