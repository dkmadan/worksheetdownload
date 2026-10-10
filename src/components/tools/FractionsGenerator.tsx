"use client";

import { useMemo, useState } from "react";
import ToolFrame, { PaperHeader } from "./ToolFrame";
import { Field, Segmented, Chips, Stepper, Toggle } from "./ui";
import { freshSeed } from "@/lib/tools/prng";
import {
  DEFAULT_FRACTIONS_CONFIG,
  EXERCISE_OPTIONS,
  VISUAL_OPTIONS,
  generateFractionProblems,
  renderFractionCircle,
  renderFractionBar,
  renderFractionRect,
  renderFractionNumberLine,
  type FractionsConfig,
  type FractionExerciseType,
  type FractionVisualType,
  type FractionProblem,
} from "@/lib/tools/fractions";
import { buildFractionsPdf, downloadPdf } from "@/lib/tools/generators-pdf";

const DENOM_OPTIONS = [2, 3, 4, 5, 6, 8, 9, 10, 12];

function DiagramRenderer({
  problem,
  diagram,
  grayscale,
}: {
  problem: FractionProblem;
  diagram: FractionProblem["diagramA"];
  grayscale: boolean;
}) {
  const isShadeTask = problem.type === "shade";
  const shaded = isShadeTask ? 0 : diagram.shadedParts;

  if (diagram.visualType === "circle") {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: renderFractionCircle(
            diagram.numerator,
            diagram.denominator,
            shaded,
            68,
            grayscale
          ),
        }}
      />
    );
  }
  if (diagram.visualType === "bar") {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: renderFractionBar(
            diagram.numerator,
            diagram.denominator,
            shaded,
            110,
            28,
            grayscale
          ),
        }}
      />
    );
  }
  if (diagram.visualType === "rectangle") {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: renderFractionRect(
            diagram.numerator,
            diagram.denominator,
            shaded,
            80,
            42,
            grayscale
          ),
        }}
      />
    );
  }
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: renderFractionNumberLine(
          diagram.numerator,
          diagram.denominator,
          !isShadeTask,
          130,
          36
        ),
      }}
    />
  );
}

export default function FractionsGenerator() {
  const [cfg, setCfg] = useState<FractionsConfig>(DEFAULT_FRACTIONS_CONFIG);
  const [seed, setSeed] = useState(0x2f3e4d5c);
  const [busy, setBusy] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const problems = useMemo(
    () => generateFractionProblems(cfg, seed),
    [cfg, seed]
  );

  async function handleDownload() {
    setBusy(true);
    try {
      const bytes = await buildFractionsPdf({
        title: "Visual Fractions Practice Worksheet",
        problems,
        includeAnswerKey: cfg.includeAnswerKey,
        grayscale: cfg.grayscale,
      });
      downloadPdf(bytes, `fractions-visual-${seed.toString(36)}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <ToolFrame
      note="Mathematically accurate SVG fraction models (circles, bars, grids, number lines). Click “New sheet” to randomize numbers."
      actions={[
        {
          label: busy ? "Building PDF…" : "Download PDF + Answer Key",
          onClick: handleDownload,
          primary: true,
          disabled: busy,
        },
        {
          label: "Print sheet",
          onClick: () => window.print(),
        },
        {
          label: "New sheet",
          onClick: () => setSeed(freshSeed()),
        },
        {
          label: showAnswers ? "Hide answers" : "Show answers",
          onClick: () => setShowAnswers((v) => !v),
        },
      ]}
      controls={
        <>
          <Field label="Grade Level">
            <Stepper
              value={cfg.grade}
              min={1}
              max={8}
              onChange={(grade) => setCfg((c) => ({ ...c, grade }))}
              suffix={`Grade ${cfg.grade}`}
            />
          </Field>

          <Field label="Diagram Visual Style">
            <Segmented
              options={VISUAL_OPTIONS.map((v) => ({ value: v.id, label: v.label }))}
              value={cfg.visualType}
              onChange={(visualType) =>
                setCfg((c) => ({ ...c, visualType: visualType as FractionVisualType }))
              }
            />
          </Field>

          <Field label="Exercise Types" hint="pick one or more">
            <Chips
              options={EXERCISE_OPTIONS.map((e) => ({ value: e.id, label: e.label }))}
              values={cfg.exercises}
              onChange={(exercises) =>
                setCfg((c) => ({ ...c, exercises: exercises as FractionExerciseType[] }))
              }
            />
          </Field>

          <Field label="Allowed Denominators">
            <Chips
              options={DENOM_OPTIONS.map((d) => ({ value: String(d), label: `/${d}` }))}
              values={cfg.denominators.map(String)}
              onChange={(dens) =>
                setCfg((c) => ({ ...c, denominators: dens.map(Number) }))
              }
            />
          </Field>

          <Field label="Number of Problems">
            <Stepper
              value={cfg.problemCount}
              min={5}
              max={30}
              step={5}
              onChange={(problemCount) => setCfg((c) => ({ ...c, problemCount }))}
            />
          </Field>

          <div className="pt-2 border-t border-slate-100 space-y-3">
            <Toggle
              checked={cfg.grayscale}
              onChange={(grayscale) => setCfg((c) => ({ ...c, grayscale }))}
              label="Printer-friendly Grayscale mode"
            />
            <Toggle
              checked={cfg.includeAnswerKey}
              onChange={(includeAnswerKey) => setCfg((c) => ({ ...c, includeAnswerKey }))}
              label="Include answer key page"
            />
          </div>
        </>
      }
      preview={
        <div className="pb-8">
          <PaperHeader
            title="Visual Fractions Practice Worksheet"
            subtitle={`Grade ${cfg.grade} · ${problems.length} Visual Fraction Problems`}
            badge="Fractions"
            studentStrip
          />

          <div className="px-6 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-slate-200/90 rounded-xl p-3.5 space-y-2.5 shadow-2xs"
              >
                <div className="flex items-start justify-between gap-1 text-[11px] font-bold text-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] shrink-0 font-extrabold">
                      {p.num}
                    </span>
                    <span className="leading-snug">{p.prompt}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 py-1 bg-slate-50/70 rounded-lg p-2 min-h-[72px]">
                  <DiagramRenderer problem={p} diagram={p.diagramA} grayscale={cfg.grayscale} />

                  {p.operator && (
                    <span className="text-sm font-black text-slate-700 px-1">
                      {p.operator === "vs" ? (
                        <span className="w-6 h-6 rounded-full border border-slate-300 bg-white inline-flex items-center justify-center text-[10px] font-bold text-slate-400">
                          vs
                        </span>
                      ) : (
                        p.operator
                      )}
                    </span>
                  )}

                  {p.diagramB && (
                    <DiagramRenderer problem={p} diagram={p.diagramB} grayscale={cfg.grayscale} />
                  )}
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[11px]">
                  <span className="text-slate-400 text-[10px]">{p.instructions}</span>
                  <div className="font-bold text-slate-700">
                    Ans:{" "}
                    {showAnswers ? (
                      <span className="text-emerald-600 font-extrabold underline">{p.answer}</span>
                    ) : (
                      <span className="inline-block border-b-2 border-slate-300 w-12" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {cfg.includeAnswerKey && (
            <div className="mt-8 mx-6 border-t border-dashed border-slate-200 pt-4">
              <div className="inline-block text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2">
                Answer Key
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[10px] text-slate-600">
                {problems.map((p) => (
                  <div key={p.num} className="bg-slate-50 p-1.5 rounded border border-slate-100">
                    <span className="font-bold text-slate-800">{p.num}.</span> {p.answer}
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
