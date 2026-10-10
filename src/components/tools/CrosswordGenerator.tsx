"use client";

import { useMemo, useState } from "react";
import ToolFrame, { PaperHeader } from "./ToolFrame";
import { Field, Segmented, Stepper, Toggle, TextArea } from "./ui";
import { freshSeed } from "@/lib/tools/prng";
import {
  CROSSWORD_SUBJECTS,
  generateCrossword,
  type CrosswordConfig,
  type CrosswordSubject,
} from "@/lib/tools/crossword";
import { buildCrosswordPdf, downloadPdf } from "@/lib/tools/generators-pdf";

const GRID_SIZE_OPTIONS: { value: string; label: string }[] = [
  { value: "8", label: "8×8" },
  { value: "10", label: "10×10" },
  { value: "12", label: "12×12" },
  { value: "15", label: "15×15" },
];

export default function CrosswordGenerator() {
  const [subject, setSubject] = useState<CrosswordSubject>("science");
  const [gridSize, setGridSize] = useState<8 | 10 | 12 | 15>(10);
  const [wordCount, setWordCount] = useState(8);
  const [useCustomWords, setUseCustomWords] = useState(false);
  const [customInput, setCustomInput] = useState(
    "PLANET: A celestial body orbiting a star\nGRAVITY: The force that pulls objects toward Earth\nCOMET: An icy space rock with a glowing tail\nORBIT: The curved path an object takes in space\nSOLAR: Related to the Sun"
  );
  const [includeWordBank, setIncludeWordBank] = useState(true);
  const [includeAnswerKey, setIncludeAnswerKey] = useState(true);
  const [seed, setSeed] = useState(0x3a4b5c6d);
  const [busy, setBusy] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const cfg: CrosswordConfig = useMemo(
    () => ({
      grade: 4,
      subject,
      difficulty: "medium",
      gridSize,
      wordCount,
      customInput: useCustomWords ? customInput : undefined,
      includeWordBank,
      includeAnswerKey,
    }),
    [subject, gridSize, wordCount, useCustomWords, customInput, includeWordBank, includeAnswerKey]
  );

  const puzzle = useMemo(() => generateCrossword(cfg, seed), [cfg, seed]);

  async function handleDownload() {
    setBusy(true);
    try {
      const bytes = await buildCrosswordPdf({
        title: `${CROSSWORD_SUBJECTS.find((s) => s.id === subject)?.label || "Educational"} Crossword Puzzle`,
        crossword: puzzle,
        includeWordBank,
        includeAnswerKey,
      });
      downloadPdf(bytes, `crossword-${subject}-${seed.toString(36)}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <ToolFrame
      note="Automatic crossword generator. Constructs valid intersecting Across and Down words with standard numbering and solution keys."
      actions={[
        {
          label: busy ? "Building PDF…" : "Download PDF + Solution",
          onClick: handleDownload,
          primary: true,
          disabled: busy,
        },
        {
          label: "Print puzzle",
          onClick: () => window.print(),
        },
        {
          label: "New puzzle",
          onClick: () => setSeed(freshSeed()),
        },
        {
          label: showSolution ? "Hide solution" : "Show solution",
          onClick: () => setShowSolution((v) => !v),
        },
      ]}
      controls={
        <>
          <Field label="Subject">
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value as CrosswordSubject)}
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {CROSSWORD_SUBJECTS.map((sub) => (
                <option key={sub.id} value={sub.id}>
                  {sub.icon} {sub.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Grid Dimensions">
            <Segmented
              options={GRID_SIZE_OPTIONS}
              value={String(gridSize)}
              onChange={(v) => setGridSize(Number(v) as 8 | 10 | 12 | 15)}
            />
          </Field>

          <Field label="Number of Words" hint={`${puzzle.placedWords.length} placed`}>
            <Stepper
              value={wordCount}
              min={5}
              max={25}
              step={1}
              onChange={setWordCount}
            />
          </Field>

          <div className="pt-2 border-t border-slate-100 space-y-3">
            <Toggle
              checked={useCustomWords}
              onChange={setUseCustomWords}
              label="Provide custom words & clues"
            />
            {useCustomWords && (
              <div className="space-y-1 pt-1">
                <span className="text-[10px] text-slate-400">Format: WORD: Clue (one per line)</span>
                <TextArea
                  rows={6}
                  value={customInput}
                  onChange={setCustomInput}
                  placeholder="WORD: Definition or clue..."
                />
              </div>
            )}
            <Toggle
              checked={includeWordBank}
              onChange={setIncludeWordBank}
              label="Show word bank on worksheet"
            />
            <Toggle
              checked={includeAnswerKey}
              onChange={setIncludeAnswerKey}
              label="Include solved puzzle page"
            />
          </div>
        </>
      }
      preview={
        <div className="pb-8">
          <PaperHeader
            title="Educational Crossword Puzzle"
            subtitle={`${CROSSWORD_SUBJECTS.find((s) => s.id === subject)?.label} · ${gridSize}×${gridSize} Grid`}
            badge="Crossword"
            studentStrip
          />

          <div className="px-6 pt-4 space-y-5">
            {/* Word Bank */}
            {includeWordBank && puzzle.allWords.length > 0 && (
              <div className="rounded-xl bg-slate-50 border border-slate-200/90 p-3 shadow-2xs">
                <div className="text-[10px] font-extrabold uppercase text-slate-400 mb-1.5">
                  Word Bank
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-700">
                  {puzzle.allWords.map((w, idx) => (
                    <span
                      key={idx}
                      className="bg-white border border-slate-200 px-2.5 py-1 rounded-md"
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Crossword Grid */}
            <div className="flex justify-center overflow-x-auto py-2">
              <div
                className="grid gap-0 border-2 border-slate-800 bg-slate-900 rounded-sm shadow-sm select-none"
                style={{
                  gridTemplateColumns: `repeat(${puzzle.size}, 1fr)`,
                  width: Math.min(puzzle.size * 28, 480),
                }}
              >
                {puzzle.grid.flatMap((row, r) =>
                  row.map((cell, c) => {
                    const isBlank = cell === null;
                    return (
                      <div
                        key={`${r}-${c}`}
                        className={`aspect-square relative flex items-center justify-center text-xs font-bold ${
                          isBlank
                            ? "bg-slate-900"
                            : "bg-white border border-slate-200 text-slate-900"
                        }`}
                      >
                        {cell?.number && (
                          <span className="absolute top-0.5 left-0.5 text-[8px] font-black leading-none text-slate-500">
                            {cell.number}
                          </span>
                        )}
                        {!isBlank && showSolution && (
                          <span className="text-emerald-700 font-extrabold text-[13px]">
                            {cell.char}
                          </span>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Unplaced words notification */}
            {puzzle.unplacedWords.length > 0 && (
              <p className="text-[11px] text-amber-600 bg-amber-50 border border-amber-200 p-2 rounded-lg">
                Notice: {puzzle.unplacedWords.length} word(s) could not intersect in this grid size. Try selecting a larger grid (12×12 or 15×15).
              </p>
            )}

            {/* Clues Section (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-200">
              <div>
                <h4 className="text-xs font-black uppercase text-blue-800 mb-2 border-b border-blue-100 pb-1 flex items-center gap-1.5">
                  <span>➡️</span> Across Clues
                </h4>
                <div className="space-y-1.5 text-[11px]">
                  {puzzle.acrossClues.map((c) => (
                    <div key={c.number} className="text-slate-700">
                      <span className="font-bold text-slate-900 w-5 inline-block">{c.number}.</span>{" "}
                      {c.clue}
                      {showSolution && (
                        <span className="text-emerald-600 font-extrabold ml-1.5">({c.word})</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase text-blue-800 mb-2 border-b border-blue-100 pb-1 flex items-center gap-1.5">
                  <span>⬇️</span> Down Clues
                </h4>
                <div className="space-y-1.5 text-[11px]">
                  {puzzle.downClues.map((c) => (
                    <div key={c.number} className="text-slate-700">
                      <span className="font-bold text-slate-900 w-5 inline-block">{c.number}.</span>{" "}
                      {c.clue}
                      {showSolution && (
                        <span className="text-emerald-600 font-extrabold ml-1.5">({c.word})</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
