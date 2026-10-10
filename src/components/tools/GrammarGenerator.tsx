"use client";

import { useMemo, useState } from "react";
import ToolFrame, { PaperHeader } from "./ToolFrame";
import { Field, Segmented, Chips, Stepper, Toggle } from "./ui";
import { freshSeed } from "@/lib/tools/prng";
import {
  DEFAULT_GRAMMAR_CONFIG,
  GRAMMAR_TOPICS,
  EXERCISE_TYPE_OPTIONS,
  generateGrammarWorksheet,
  type GrammarConfig,
  type GrammarTopic,
  type GrammarExerciseType,
} from "@/lib/tools/grammar";
import { buildGrammarPdf, downloadPdf } from "@/lib/tools/generators-pdf";

const DIFFICULTY_OPTIONS = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

export default function GrammarGenerator() {
  const [cfg, setCfg] = useState<GrammarConfig>(DEFAULT_GRAMMAR_CONFIG);
  const [seed, setSeed] = useState(0x6c7d8e9f);
  const [busy, setBusy] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const worksheet = useMemo(
    () => generateGrammarWorksheet(cfg, seed),
    [cfg, seed]
  );

  async function handleDownload() {
    setBusy(true);
    try {
      const bytes = await buildGrammarPdf({
        title: worksheet.title,
        subtitle: worksheet.subtitle,
        items: worksheet.items,
        includeAnswerKey: cfg.includeAnswerKey,
      });
      downloadPdf(bytes, `grammar-practice-${seed.toString(36)}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <ToolFrame
      note="Covers 16 essential grammar topics and 7 exercise formats with age-appropriate curriculum questions and answer keys."
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
              max={12}
              onChange={(grade) => setCfg((c) => ({ ...c, grade }))}
              suffix={`Grade ${cfg.grade}`}
            />
          </Field>

          <Field label="Difficulty">
            <Segmented
              options={DIFFICULTY_OPTIONS}
              value={cfg.difficulty}
              onChange={(difficulty) =>
                setCfg((c) => ({ ...c, difficulty: difficulty as "easy" | "medium" | "hard" }))
              }
            />
          </Field>

          <Field label="Grammar Topics" hint="select one or more">
            <div className="max-h-48 overflow-y-auto pr-1">
              <Chips
                options={GRAMMAR_TOPICS.map((t) => ({ value: t.id, label: t.label }))}
                values={cfg.topics}
                onChange={(topics) =>
                  setCfg((c) => ({ ...c, topics: topics as GrammarTopic[] }))
                }
              />
            </div>
          </Field>

          <Field label="Exercise Types">
            <Chips
              options={EXERCISE_TYPE_OPTIONS.map((e) => ({ value: e.id, label: e.label }))}
              values={cfg.exerciseTypes}
              onChange={(exerciseTypes) =>
                setCfg((c) => ({ ...c, exerciseTypes: exerciseTypes as GrammarExerciseType[] }))
              }
            />
          </Field>

          <Field label="Number of Exercises">
            <Stepper
              value={cfg.problemCount}
              min={5}
              max={30}
              step={5}
              onChange={(problemCount) => setCfg((c) => ({ ...c, problemCount }))}
            />
          </Field>

          <div className="pt-2 border-t border-slate-100">
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
            title={worksheet.title}
            subtitle={`${worksheet.subtitle} · ${worksheet.gradeLabel}`}
            badge="Grammar"
            studentStrip
          />

          <div className="px-6 pt-4 space-y-4">
            {worksheet.items.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200/90 rounded-xl p-3.5 space-y-2 shadow-2xs"
              >
                <div className="flex items-start justify-between text-[11px] font-bold text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[10px] font-extrabold">
                      {idx + 1}
                    </span>
                    <span className="text-slate-500 italic">{item.instructions}</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 uppercase font-extrabold">
                    {item.topic}
                  </span>
                </div>

                <p className="text-[12px] font-semibold text-slate-800 pl-6 leading-relaxed">
                  {item.prompt}
                </p>

                {item.exerciseType === "multiple-choice" && item.options && (
                  <div className="grid grid-cols-2 gap-2 pl-6 pt-1 text-[11px]">
                    {item.options.map((opt, oIdx) => (
                      <div
                        key={oIdx}
                        className="flex items-center gap-1.5 text-slate-700 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-lg"
                      >
                        <span className="w-3 h-3 rounded-full border border-slate-300" />
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>
                )}

                {item.exerciseType === "match-columns" && item.columns && (
                  <div className="grid grid-cols-2 gap-4 pl-6 pt-1 text-[11px] bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <div className="space-y-1">
                      <div className="font-bold text-slate-400 uppercase text-[9px]">Column A</div>
                      {item.columns.map((c, cIdx) => (
                        <div key={cIdx} className="font-semibold text-slate-700">{c.a}</div>
                      ))}
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-slate-400 uppercase text-[9px]">Column B</div>
                      {item.columns.map((c, cIdx) => (
                        <div key={cIdx} className="text-slate-600">{c.b}</div>
                      ))}
                    </div>
                  </div>
                )}

                {item.exerciseType !== "multiple-choice" && item.exerciseType !== "match-columns" && (
                  <div className="pl-6 pt-1">
                    <div className="border-b border-dashed border-slate-300 h-6" />
                  </div>
                )}

                <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[11px]">
                  <span className="text-slate-400 text-[10px]">Student Answer:</span>
                  <div className="font-bold text-slate-700">
                    Ans:{" "}
                    {showAnswers ? (
                      <span className="text-emerald-600 font-extrabold underline">{item.answer}</span>
                    ) : (
                      <span className="inline-block border-b-2 border-slate-300 w-20" />
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] text-slate-600">
                {worksheet.answerKey.map((k) => (
                  <div key={k.num} className="bg-slate-50 p-1.5 rounded border border-slate-100">
                    <span className="font-bold text-slate-800">{k.num}.</span> {k.answer}
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
