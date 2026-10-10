"use client";

import { useMemo, useState } from "react";
import ToolFrame, { PaperHeader } from "./ToolFrame";
import { Field, Segmented, Chips, Stepper, Toggle, TextArea } from "./ui";
import { freshSeed } from "@/lib/tools/prng";
import {
  DEFAULT_READING_CONFIG,
  READING_CATEGORIES,
  QUESTION_TYPES,
  GRADE_LABELS,
  generateReadingWorksheet,
  type ReadingConfig,
  type ReadingGrade,
  type ReadingDifficulty,
  type ReadingCategory,
  type ReadingQuestionType,
} from "@/lib/tools/reading";
import { buildReadingPdf, downloadPdf } from "@/lib/tools/generators-pdf";

const GRADE_OPTIONS: { value: ReadingGrade; label: string }[] = [
  { value: "K", label: "K" },
  { value: "1", label: "G1" },
  { value: "2", label: "G2" },
  { value: "3", label: "G3" },
  { value: "4", label: "G4" },
  { value: "5", label: "G5" },
  { value: "6", label: "G6" },
  { value: "7", label: "G7" },
  { value: "8", label: "G8" },
  { value: "9", label: "G9" },
  { value: "10", label: "G10" },
  { value: "11", label: "G11" },
  { value: "12", label: "G12" },
];

const DIFFICULTY_OPTIONS: { value: ReadingDifficulty; label: string }[] = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

export default function ReadingGenerator() {
  const [cfg, setCfg] = useState<ReadingConfig>(DEFAULT_READING_CONFIG);
  const [seed, setSeed] = useState(0x4a3b2c1d);
  const [busy, setBusy] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [useCustomPassage, setUseCustomPassage] = useState(false);
  const [customTitle, setCustomTitle] = useState("");
  const [customText, setCustomText] = useState("");

  const activeCfg = useMemo<ReadingConfig>(
    () => ({
      ...cfg,
      customTitle: useCustomPassage ? customTitle : undefined,
      customText: useCustomPassage ? customText : undefined,
    }),
    [cfg, useCustomPassage, customTitle, customText]
  );

  const worksheet = useMemo(
    () => generateReadingWorksheet(activeCfg, seed),
    [activeCfg, seed]
  );

  async function handleDownload() {
    setBusy(true);
    try {
      const bytes = await buildReadingPdf({
        title: worksheet.title,
        category: worksheet.category,
        grade: worksheet.grade,
        paragraphs: worksheet.paragraphs,
        questions: worksheet.questions,
        includeAnswerKey: cfg.includeAnswerKey,
      });
      downloadPdf(
        bytes,
        `reading-${worksheet.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${seed.toString(36)}`
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <ToolFrame
      note="Original, age-appropriate reading passages paired with curriculum comprehension questions. Click “New sheet” to generate a new passage or customize text."
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
          <Field label="Grade Level" hint={GRADE_LABELS[cfg.grade]}>
            <div className="flex flex-wrap gap-1">
              {GRADE_OPTIONS.map((g) => (
                <button
                  key={g.value}
                  type="button"
                  onClick={() => setCfg((c) => ({ ...c, grade: g.value }))}
                  className={`w-9 h-8 rounded-lg text-xs font-bold transition-all ${
                    cfg.grade === g.value
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </Field>

          <Field label="Difficulty">
            <Segmented
              options={DIFFICULTY_OPTIONS}
              value={cfg.difficulty}
              onChange={(difficulty) => setCfg((c) => ({ ...c, difficulty }))}
            />
          </Field>

          <Field label="Passage Category">
            <select
              value={cfg.category}
              onChange={(e) =>
                setCfg((c) => ({ ...c, category: e.target.value as ReadingCategory }))
              }
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {READING_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Number of Questions">
            <Stepper
              value={cfg.questionCount}
              min={5}
              max={20}
              step={5}
              onChange={(questionCount) => setCfg((c) => ({ ...c, questionCount }))}
            />
          </Field>

          <Field label="Question Types" hint="pick one or more">
            <Chips
              options={QUESTION_TYPES.map((qt) => ({ value: qt.id, label: qt.label }))}
              values={cfg.questionTypes}
              onChange={(types) =>
                setCfg((c) => ({ ...c, questionTypes: types as ReadingQuestionType[] }))
              }
            />
          </Field>

          <div className="pt-2 border-t border-slate-100 space-y-3">
            <Toggle
              checked={useCustomPassage}
              onChange={setUseCustomPassage}
              label="Provide custom passage text"
            />
            {useCustomPassage && (
              <div className="space-y-2 pt-1">
                <input
                  type="text"
                  placeholder="Passage title..."
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <TextArea
                  rows={5}
                  placeholder="Paste or write your own passage here..."
                  value={customText}
                  onChange={setCustomText}
                />
              </div>
            )}
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
            subtitle={`${worksheet.category} · ${worksheet.grade} · Word Count: ${worksheet.wordCount}`}
            badge="Reading"
            studentStrip
          />

          <div className="px-6 pt-4 space-y-5">
            {/* Passage Text Container */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 shadow-2xs">
              <div className="text-[10px] font-extrabold uppercase tracking-wide text-blue-700 mb-2">
                Reading Passage
              </div>
              <div className="space-y-2.5 text-[12px] leading-relaxed text-slate-800">
                {worksheet.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="indent-3">{para}</p>
                ))}
              </div>
            </div>

            {/* Comprehension Questions */}
            <div className="space-y-4">
              <div className="text-[11px] font-extrabold uppercase tracking-wide text-slate-700 border-b border-slate-200 pb-1">
                Comprehension Questions
              </div>

              {worksheet.questions.map((q, qIdx) => (
                <div key={q.id} className="text-[12px] text-slate-800 space-y-1.5">
                  <div className="font-semibold flex items-start gap-1.5">
                    <span className="text-blue-600 font-bold w-4 shrink-0">{qIdx + 1}.</span>
                    <span>{q.prompt}</span>
                  </div>

                  {q.type === "multiple-choice" && q.options && (
                    <div className="grid grid-cols-2 gap-2 pl-5 pt-1 text-[11px]">
                      {q.options.map((opt, oIdx) => (
                        <div
                          key={oIdx}
                          className="flex items-center gap-1.5 text-slate-600 bg-white border border-slate-200 px-2.5 py-1.5 rounded-lg"
                        >
                          <span className="w-3.5 h-3.5 rounded-full border border-slate-300 inline-block" />
                          <span>{opt}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {q.type === "true-false" && (
                    <div className="flex gap-4 pl-5 pt-1 text-[11px] font-semibold text-slate-600">
                      <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1 rounded-md">
                        [  ] True
                      </span>
                      <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1 rounded-md">
                        [  ] False
                      </span>
                    </div>
                  )}

                  {q.type !== "multiple-choice" && q.type !== "true-false" && (
                    <div className="pl-5 pt-1">
                      <div className="border-b border-dashed border-slate-300 h-5" />
                      <div className="border-b border-dashed border-slate-300 h-5" />
                    </div>
                  )}

                  {showAnswers && (
                    <div className="pl-5 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md mt-1">
                      Answer: {q.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Answer Key Footer */}
            {cfg.includeAnswerKey && (
              <div className="mt-8 border-t border-dashed border-slate-200 pt-4">
                <div className="inline-block text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2">
                  Answer Key Preview
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
        </div>
      }
    />
  );
}
