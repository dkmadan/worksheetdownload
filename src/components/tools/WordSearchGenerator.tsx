"use client";

import { useMemo, useState } from "react";
import ToolFrame, { PaperHeader } from "./ToolFrame";
import { Field, Segmented, Chips, TextArea, Toggle } from "./ui";
import { freshSeed } from "@/lib/tools/prng";
import { generateWordSearch, type WordSearchOptions } from "@/lib/tools/wordsearch";
import { buildWordSearchPdf, downloadPdf } from "@/lib/tools/pdf";

type DirKey = "vertical" | "diagonal" | "backward";
const DIR_CHIPS: { value: DirKey; label: string }[] = [
  { value: "vertical", label: "Vertical" },
  { value: "diagonal", label: "Diagonal" },
  { value: "backward", label: "Backwards" },
];

export default function WordSearchGenerator() {
  const [raw, setRaw] = useState("planet\nstar\ncomet\ngalaxy\norbit\nmeteor\nsolar\neclipse\ngravity\nasteroid\nnebula\nrocket");
  const [heading, setHeading] = useState("Space Word Search");
  const [size, setSize] = useState(13);
  const [dirs, setDirs] = useState<DirKey[]>(["vertical", "diagonal"]);
  const [showBank, setShowBank] = useState(true);
  const [includeKey, setIncludeKey] = useState(true);
  const [seed, setSeed] = useState(0x3c0de123);
  const [busy, setBusy] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const words = useMemo(
    () => raw.split(/[\n,]/).map((w) => w.trim()).filter(Boolean).slice(0, 24),
    [raw],
  );

  const options: WordSearchOptions = useMemo(
    () => ({
      size,
      allowVertical: dirs.includes("vertical"),
      allowDiagonal: dirs.includes("diagonal"),
      allowBackward: dirs.includes("backward"),
    }),
    [size, dirs],
  );

  const ws = useMemo(() => generateWordSearch(words, options, seed), [words, options, seed]);
  const answerCells = useMemo(() => {
    const s = new Set<string>();
    for (const p of ws.placed) for (const c of p.cells) s.add(`${c.r},${c.c}`);
    return s;
  }, [ws]);

  async function download() {
    setBusy(true);
    try {
      const bytes = await buildWordSearchPdf({
        title: heading || "Word Search",
        ws,
        showWordBank: showBank,
        includeAnswerKey: includeKey,
      });
      downloadPdf(bytes, `word-search-${seed.toString(36)}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <ToolFrame
      note="Paste words, choose the directions, and get an instant puzzle with a solution page. Words share letters where they cross."
      actions={[
        { label: busy ? "Building…" : "Download PDF + Solution", onClick: download, primary: true, disabled: busy },
        { label: "New puzzle", onClick: () => setSeed(freshSeed()) },
        { label: showAnswers ? "Hide solution" : "Show solution", onClick: () => setShowAnswers((v) => !v) },
      ]}
      controls={
        <>
          <Field label="Puzzle title">
            <input
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Field>

          <Field label="Words" hint={`${words.length} words`}>
            <TextArea value={raw} onChange={setRaw} rows={7} placeholder="one word per line…" />
          </Field>

          <Field label="Grid size">
            <Segmented
              options={[10, 13, 15, 18].map((n) => ({ value: String(n), label: `${n}×${n}` }))}
              value={String(size)}
              onChange={(v) => setSize(Number(v))}
            />
          </Field>

          <Field label="Word directions" hint="horizontal is always on">
            <Chips options={DIR_CHIPS} values={dirs} onChange={(v) => setDirs(v as DirKey[])} />
          </Field>

          <Toggle checked={showBank} onChange={setShowBank} label="Show word bank on the puzzle" />
          <Toggle checked={includeKey} onChange={setIncludeKey} label="Include solution page" />
        </>
      }
      preview={
        <div className="pb-8">
          <PaperHeader title={heading || "Word Search"} subtitle="Find and circle every word from the list." badge="Word Search" studentStrip />
          <div className="px-6 pt-4">
            {showBank && (
              <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 mb-3">
                <div className="text-[10px] font-extrabold uppercase text-slate-400 mb-1">Word Bank</div>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[11px] font-semibold text-slate-600">
                  {[...ws.placed.map((p) => p.word), ...ws.unplaced].map((w, i) => (
                    <span key={i} className={ws.unplaced.includes(w) ? "text-red-400 line-through" : ""}>{w}</span>
                  ))}
                </div>
              </div>
            )}
            <div className="overflow-x-auto">
              <div
                className="grid mx-auto font-mono select-none"
                style={{ gridTemplateColumns: `repeat(${ws.size}, 1fr)`, width: Math.min(ws.size * 22, 560) }}
              >
                {ws.grid.flatMap((row, r) =>
                  row.map((ch, c) => {
                    const inWord = answerCells.has(`${r},${c}`);
                    return (
                      <div
                        key={`${r}-${c}`}
                        className={`aspect-square flex items-center justify-center text-[12px] border border-slate-100 ${
                          showAnswers && inWord ? "bg-emerald-100 text-emerald-700 font-bold" : "text-slate-700"
                        }`}
                      >
                        {ch}
                      </div>
                    );
                  }),
                )}
              </div>
            </div>
            {ws.unplaced.length > 0 && (
              <p className="text-[10px] text-red-400 mt-2">
                {ws.unplaced.length} word(s) didn&apos;t fit — try a bigger grid or shorter words.
              </p>
            )}
          </div>
        </div>
      }
    />
  );
}
