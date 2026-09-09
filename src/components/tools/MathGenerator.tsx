"use client";

import { useMemo, useState } from "react";
import ToolFrame, { PaperHeader } from "./ToolFrame";
import { Field, Segmented, Chips, Stepper, Toggle } from "./ui";
import { freshSeed } from "@/lib/tools/prng";
import {
  DEFAULT_MATH_CONFIG,
  OPERATIONS,
  RANGE_PRESETS,
  clampMathConfig,
  generateMathProblems,
  type MathConfig,
  type MathOperation,
} from "@/lib/tools/math";
import { buildMathPdf, downloadPdf } from "@/lib/tools/pdf";

const OP_OPTIONS = OPERATIONS.map((o) => ({ value: o.id, label: o.label }));

function titleFor(ops: MathOperation[]): string {
  if (ops.length === 1) return `${OPERATIONS.find((o) => o.id === ops[0])!.label} Practice`;
  if (ops.length >= 4) return "Mixed Operations Practice";
  return ops.map((id) => OPERATIONS.find((o) => o.id === id)!.label).join(" & ") + " Practice";
}

export default function MathGenerator() {
  const [cfg, setCfg] = useState<MathConfig>(DEFAULT_MATH_CONFIG);
  const [columns, setColumns] = useState(2);
  const [vertical, setVertical] = useState(false);
  const [includeKey, setIncludeKey] = useState(true);
  // fixed initial seed keeps SSR and first client render identical; the user
  // gets randomization via the "New sheet" button.
  const [seed, setSeed] = useState(0x1a2b3c4d);
  const [busy, setBusy] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const clean = useMemo(() => clampMathConfig(cfg), [cfg]);
  const problems = useMemo(() => generateMathProblems(clean, seed), [clean, seed]);
  const title = useMemo(() => titleFor(clean.operations), [clean.operations]);
  const subtitle = `Numbers ${clean.min}–${clean.max} · ${problems.length} problems`;

  const activePreset = RANGE_PRESETS.find((p) => p.min === cfg.min && p.max === cfg.max)?.id ?? "custom";

  async function download(mode: "full") {
    setBusy(true);
    try {
      const bytes = await buildMathPdf({
        title,
        subtitle,
        problems,
        columns,
        vertical,
        includeAnswerKey: includeKey,
      });
      downloadPdf(bytes, `${title.replace(/\s+/g, "-").toLowerCase()}-${seed.toString(36)}`);
    } finally {
      setBusy(false);
    }
    void mode;
  }

  return (
    <ToolFrame
      note="Every sheet is randomly generated in your browser. Click “New sheet” for a fresh set of problems — the answer key always matches."
      actions={[
        { label: busy ? "Building…" : "Download PDF + Answer Key", onClick: () => download("full"), primary: true, disabled: busy },
        { label: "New sheet", onClick: () => setSeed(freshSeed()) },
        { label: showAnswers ? "Hide answers" : "Show answers", onClick: () => setShowAnswers((v) => !v) },
      ]}
      controls={
        <>
          <Field label="Operations" hint="pick one or more">
            <Chips
              options={OP_OPTIONS}
              values={clean.operations}
              onChange={(operations) => setCfg((c) => ({ ...c, operations: operations as MathOperation[] }))}
            />
          </Field>

          <Field label="Number range">
            <Segmented
              options={[...RANGE_PRESETS.map((p) => ({ value: p.id, label: p.label })), { value: "custom", label: "Custom" }]}
              value={activePreset}
              onChange={(id) => {
                const preset = RANGE_PRESETS.find((p) => p.id === id);
                if (preset) setCfg((c) => ({ ...c, min: preset.min, max: preset.max }));
              }}
            />
            {activePreset === "custom" && (
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div>
                  <span className="text-[11px] text-slate-400">Min</span>
                  <Stepper value={cfg.min} min={0} max={cfg.max - 1} onChange={(min) => setCfg((c) => ({ ...c, min }))} />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400">Max</span>
                  <Stepper value={cfg.max} min={cfg.min + 1} max={9999} onChange={(max) => setCfg((c) => ({ ...c, max }))} />
                </div>
              </div>
            )}
          </Field>

          <Field label="Problems">
            <Stepper value={cfg.count} min={4} max={60} step={2} onChange={(count) => setCfg((c) => ({ ...c, count }))} />
          </Field>

          <Field label="Columns">
            <Segmented
              options={[1, 2, 3, 4].map((n) => ({ value: String(n), label: String(n) }))}
              value={String(columns)}
              onChange={(v) => setColumns(Number(v))}
            />
          </Field>

          <div className="space-y-3 pt-1">
            <Toggle checked={vertical} onChange={setVertical} label="Vertical (column) format" />
            {clean.operations.includes("subtraction") || clean.operations.includes("fractions") ? (
              <Toggle
                checked={cfg.allowNegatives}
                onChange={(allowNegatives) => setCfg((c) => ({ ...c, allowNegatives }))}
                label="Allow negative answers"
              />
            ) : null}
            <Toggle checked={includeKey} onChange={setIncludeKey} label="Include answer key page" />
          </div>

          {clean.operations.includes("fractions") && (
            <Field label="Largest denominator">
              <Stepper
                value={cfg.maxDenominator}
                min={2}
                max={12}
                onChange={(maxDenominator) => setCfg((c) => ({ ...c, maxDenominator }))}
              />
            </Field>
          )}
        </>
      }
      preview={
        <div className="pb-8">
          <PaperHeader title={title} subtitle={subtitle} badge="Worksheet" />
          <div
            className="px-6 pt-4 grid gap-x-6 gap-y-3"
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
          >
            {problems.map((p, i) => (
              <div key={i} className="flex items-baseline gap-2 text-[13px] text-slate-800">
                <span className="text-slate-400 font-semibold w-5 shrink-0">{i + 1}.</span>
                {vertical ? (
                  <span className="font-mono whitespace-pre leading-tight">
                    {(() => {
                      const [a, op, b] = p.prompt.split(" ");
                      const w = Math.max(a.length, b.length + 2);
                      return `${a.padStart(w)}\n${op} ${b.padStart(w - 2)}\n${"—".repeat(w)}`;
                    })()}
                  </span>
                ) : (
                  <span className="font-medium">
                    {p.prompt} ={" "}
                    {showAnswers ? (
                      <span className="text-emerald-600 font-bold">{p.answer}</span>
                    ) : (
                      <span className="inline-block border-b border-slate-300 w-12 align-middle" />
                    )}
                  </span>
                )}
              </div>
            ))}
          </div>

          {includeKey && (
            <div className="mt-8 mx-6 border-t border-dashed border-slate-200 pt-4">
              <div className="inline-block text-[9px] font-extrabold uppercase px-2 py-1 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 mb-3">
                Answer Key
              </div>
              <div className="grid grid-cols-4 gap-x-4 gap-y-1 text-[10px] text-slate-500">
                {problems.map((p, i) => (
                  <div key={i}>
                    <span className="text-slate-400">{i + 1}.</span> {p.prompt} ={" "}
                    <span className="font-bold text-emerald-600">{p.answer}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      }
    />
  );
}
