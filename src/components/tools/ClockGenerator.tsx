"use client";

import { useMemo, useState } from "react";
import ToolFrame, { PaperHeader } from "./ToolFrame";
import { Field, Segmented, Stepper, Toggle } from "./ui";
import { freshSeed } from "@/lib/tools/prng";
import ClockFace from "./ClockFace";
import {
  DEFAULT_CLOCK_CONFIG,
  TIME_STEPS,
  CLOCK_MODES,
  clampClockConfig,
  generateTimes,
  fmtDigital,
  clockTitle,
  type ClockConfig,
  type ClockMode,
  type TimeStep,
} from "@/lib/tools/clock";
import { buildClockPdf, downloadPdf } from "@/lib/tools/pdf";

export default function ClockGenerator() {
  const [cfg, setCfg] = useState<ClockConfig>(DEFAULT_CLOCK_CONFIG);
  const [includeKey, setIncludeKey] = useState(true);
  const [seed, setSeed] = useState(0xc10c2026);
  const [busy, setBusy] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const clean = useMemo(() => clampClockConfig(cfg), [cfg]);
  const times = useMemo(() => generateTimes(clean, seed), [clean, seed]);
  const title = useMemo(() => clockTitle(clean), [clean]);

  async function download() {
    setBusy(true);
    try {
      const bytes = await buildClockPdf({ title, times, columns: clean.columns, includeAnswerKey: includeKey });
      downloadPdf(bytes, `telling-time-${clean.step}-${seed.toString(36)}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <ToolFrame
      note="Analog clocks are drawn to scale. “Read the clock” shows the hands and gives a blank for the digital time; “Draw the hands” gives the time and a blank face."
      actions={[
        { label: busy ? "Building…" : "Download PDF + Answer Key", onClick: download, primary: true, disabled: busy },
        { label: "New sheet", onClick: () => setSeed(freshSeed()) },
        { label: showAnswers ? "Hide answers" : "Show answers", onClick: () => setShowAnswers((v) => !v) },
      ]}
      controls={
        <>
          <Field label="Task">
            <Segmented
              options={CLOCK_MODES.map((m) => ({ value: m.id, label: m.label }))}
              value={clean.mode}
              onChange={(v) => setCfg((c) => ({ ...c, mode: v as ClockMode }))}
            />
          </Field>

          <Field label="Times to the nearest…">
            <Segmented
              options={TIME_STEPS.map((s) => ({ value: s.id, label: s.label }))}
              value={clean.step}
              onChange={(v) => setCfg((c) => ({ ...c, step: v as TimeStep }))}
            />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Clocks">
              <Stepper value={cfg.count} min={2} max={40} step={2} onChange={(count) => setCfg((c) => ({ ...c, count }))} />
            </Field>
            <Field label="Columns">
              <Segmented options={[2, 3, 4].map((n) => ({ value: String(n), label: String(n) }))} value={String(clean.columns)} onChange={(v) => setCfg((c) => ({ ...c, columns: Number(v) }))} />
            </Field>
          </div>

          <Toggle checked={includeKey} onChange={setIncludeKey} label="Include answer key page" />
        </>
      }
      preview={
        <div className="pb-8">
          <PaperHeader title={title} subtitle="Read the clock, or draw the hands to show the time." badge="Telling Time" />
          <div
            className="px-6 pt-5 grid gap-x-4 gap-y-6"
            style={{ gridTemplateColumns: `repeat(${clean.columns}, minmax(0,1fr))` }}
          >
            {times.map((t, i) => {
              const showHands = showAnswers || t.task === "read";
              return (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <div className="text-[10px] font-bold text-slate-400 self-start">{i + 1}</div>
                  <ClockFace h={t.h} m={t.m} hands={showHands} size={96} />
                  {t.task === "read" ? (
                    showAnswers ? (
                      <span className="text-[13px] font-bold text-emerald-600">{fmtDigital(t)}</span>
                    ) : (
                      <span className="text-[13px] text-slate-400 tracking-widest">___ : ___</span>
                    )
                  ) : (
                    <span className={`text-[13px] font-bold ${showAnswers ? "text-emerald-600" : "text-slate-700"}`}>{fmtDigital(t)}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      }
    />
  );
}
