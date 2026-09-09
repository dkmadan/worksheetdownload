"use client";

import { useMemo, useState } from "react";
import ToolFrame, { PaperHeader } from "./ToolFrame";
import { Field, Segmented, Stepper, Toggle } from "./ui";
import { makeRng, freshSeed } from "@/lib/tools/prng";
import { buildNumberLinePdf, downloadPdf } from "@/lib/tools/pdf";

type Mode = "blank" | "filled" | "gaps";

const MODES: { value: Mode; label: string }[] = [
  { value: "gaps", label: "Fill the gaps" },
  { value: "blank", label: "All blank" },
  { value: "filled", label: "All labelled" },
];

interface Line {
  start: number;
  end: number;
  step: number;
  mode: Mode;
  gapIdx: number[];
}

export default function NumberLineGenerator() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(20);
  const [step, setStep] = useState(2);
  const [mode, setMode] = useState<Mode>("gaps");
  const [lineCount, setLineCount] = useState(4);
  const [includeKey, setIncludeKey] = useState(true);
  // fixed initial seed → deterministic SSR/first render; "New sheet" randomizes.
  const [seed, setSeed] = useState(0x51ed5eed);
  const [busy, setBusy] = useState(false);

  const tickCount = useMemo(
    () => Math.max(2, Math.min(30, Math.floor((end - start) / Math.max(1, step)) + 1)),
    [start, end, step],
  );

  const lines: Line[] = useMemo(() => {
    const rng = makeRng(seed);
    const out: Line[] = [];
    for (let i = 0; i < lineCount; i++) {
      const gapIdx: number[] = [];
      if (mode === "gaps") {
        for (let t = 1; t < tickCount - 1; t++) {
          if (rng() < 0.45) gapIdx.push(t);
        }
        if (gapIdx.length === 0 && tickCount > 2) gapIdx.push(Math.floor(tickCount / 2));
      }
      out.push({ start, end, step, mode, gapIdx });
    }
    return out;
  }, [seed, lineCount, mode, start, end, step, tickCount]);

  const title = `Number Line — Count by ${step}`;

  async function download() {
    setBusy(true);
    try {
      const bytes = await buildNumberLinePdf({ title, lines, includeAnswerKey: includeKey });
      downloadPdf(bytes, `number-line-count-by-${step}-${seed.toString(36)}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <ToolFrame
      note="Number lines are drawn to scale in the PDF. “Fill the gaps” hides a random set of labels on each line; the answer key restores them."
      actions={[
        { label: busy ? "Building…" : "Download PDF", onClick: download, primary: true, disabled: busy },
        { label: "New sheet", onClick: () => setSeed(freshSeed()) },
      ]}
      controls={
        <>
          <div className="grid grid-cols-3 gap-2">
            <Field label="Start"><Stepper value={start} min={-50} max={end - 1} onChange={setStart} /></Field>
            <Field label="End"><Stepper value={end} min={start + 1} max={200} onChange={setEnd} /></Field>
            <Field label="Step"><Stepper value={step} min={1} max={25} onChange={setStep} /></Field>
          </div>
          <p className="text-[11px] text-slate-400 -mt-2">{tickCount} tick marks per line</p>

          <Field label="Line style">
            <Segmented options={MODES} value={mode} onChange={setMode} />
          </Field>

          <Field label="Lines per page">
            <Stepper value={lineCount} min={1} max={8} onChange={setLineCount} />
          </Field>

          <Toggle checked={includeKey} onChange={setIncludeKey} label="Include answer key" />
        </>
      }
      preview={
        <div className="px-6 py-6">
          <PaperHeader title={title} subtitle="Fill in the missing numbers on each line." badge="Number Lines" />
          <div className="pt-6 space-y-7">
            {lines.map((ln, li) => {
              const ticks: number[] = [];
              for (let v = ln.start; v <= ln.end + 1e-9; v += ln.step) ticks.push(Math.round(v * 100) / 100);
              const W = 560;
              const H = 46;
              const x0 = 16;
              const x1 = W - 16;
              return (
                <div key={li}>
                  <div className="text-[10px] font-bold text-slate-500 mb-1">
                    {li + 1}. Count by {ln.step} from {ln.start} to {ln.end}
                  </div>
                  <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
                    <line x1={x0 - 8} y1={20} x2={x1 + 8} y2={20} stroke="#0f172a" strokeWidth={1.5} />
                    <polygon points={`${x1 + 8},20 ${x1 + 2},17 ${x1 + 2},23`} fill="#0f172a" />
                    <polygon points={`${x0 - 8},20 ${x0 - 2},17 ${x0 - 2},23`} fill="#0f172a" />
                    {ticks.map((t, i) => {
                      const tx = x0 + (ticks.length === 1 ? 0 : ((x1 - x0) * i) / (ticks.length - 1));
                      const isGap = ln.mode === "gaps" && ln.gapIdx.includes(i);
                      const hide = ln.mode === "blank" || isGap;
                      return (
                        <g key={i}>
                          <line x1={tx} y1={14} x2={tx} y2={26} stroke="#0f172a" strokeWidth={1} />
                          {hide ? (
                            <rect x={tx - 9} y={30} width={18} height={12} rx={2} fill="#fff" stroke="#94a3b8" strokeWidth={0.75} />
                          ) : (
                            <text x={tx} y={40} textAnchor="middle" fontSize={9} fontWeight={700} fill="#0f172a">
                              {t}
                            </text>
                          )}
                        </g>
                      );
                    })}
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
      }
    />
  );
}
