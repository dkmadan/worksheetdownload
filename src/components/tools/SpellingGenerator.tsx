"use client";

import { useMemo, useState } from "react";
import ToolFrame, { PaperHeader } from "./ToolFrame";
import { Field, Chips, TextArea, Toggle } from "./ui";
import { freshSeed } from "@/lib/tools/prng";
import {
  SPELLING_ACTIVITIES,
  parseWordList,
  abcSort,
  scramble,
  withMissingLetters,
  pyramidRows,
  type SpellingActivity,
} from "@/lib/tools/spelling";
import { buildSpellingPdf, downloadPdf } from "@/lib/tools/pdf";

const ACT_OPTIONS = SPELLING_ACTIVITIES.map((a) => ({ value: a.id, label: a.label }));

export default function SpellingGenerator() {
  const [raw, setRaw] = useState("because\nfriend\nwhich\nthought\npeople\nbeautiful\nbecause\nknew\nwrite\nenough");
  const [activities, setActivities] = useState<SpellingActivity[]>(["trace-write", "abc-order", "missing-letters", "write-sentence"]);
  const [includeKey, setIncludeKey] = useState(true);
  const [seed, setSeed] = useState(0x5e1f10a5);
  const [busy, setBusy] = useState(false);

  const words = useMemo(() => parseWordList(raw), [raw]);
  const title = "Spelling Practice";
  const scrambled = useMemo(() => scramble(words, seed), [words, seed]);

  async function download() {
    setBusy(true);
    try {
      const bytes = await buildSpellingPdf({ title, words, activities, seed, includeAnswerKey: includeKey });
      downloadPdf(bytes, `spelling-practice-${seed.toString(36)}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <ToolFrame
      note="Paste your spelling list — one word per line. Pick which activities to include; each becomes a section on the sheet."
      actions={[
        { label: busy ? "Building…" : "Download PDF + Answer Key", onClick: download, primary: true, disabled: busy },
        { label: "Reshuffle", onClick: () => setSeed(freshSeed()) },
      ]}
      controls={
        <>
          <Field label="Spelling words" hint={`${words.length} words`}>
            <TextArea value={raw} onChange={setRaw} rows={7} placeholder="one word per line…" />
          </Field>

          <Field label="Activities" hint="pick one or more">
            <Chips options={ACT_OPTIONS} values={activities} onChange={(v) => setActivities(v as SpellingActivity[])} />
          </Field>

          <Toggle checked={includeKey} onChange={setIncludeKey} label="Include answer key page" />
        </>
      }
      preview={
        <div className="pb-8">
          <PaperHeader title={title} subtitle={`Word list: ${words.slice(0, 8).join(", ")}${words.length > 8 ? "…" : ""}`} badge="Spelling" />
          <div className="px-6 pt-4 space-y-6">
            {activities.length === 0 && <p className="text-xs text-slate-400">Pick at least one activity.</p>}
            {activities.map((act) => {
              const meta = SPELLING_ACTIVITIES.find((a) => a.id === act)!;
              return (
                <div key={act}>
                  <div className="text-sm font-bold text-slate-900">{meta.label}</div>
                  <div className="text-[11px] text-slate-400 mb-2">{meta.blurb}</div>

                  {act === "trace-write" && (
                    <div className="space-y-1.5">
                      {words.map((w, i) => (
                        <div key={i} className="flex items-baseline gap-3 text-[13px]">
                          <span className="text-slate-300 font-semibold w-24 shrink-0">{w}</span>
                          <span className="flex-1 border-b border-slate-300" />
                        </div>
                      ))}
                    </div>
                  )}

                  {act === "abc-order" && (
                    <div className="text-[12px] text-slate-600">
                      <p className="mb-1">
                        Given: <span className="text-slate-400">{scrambled.join(",  ")}</span>
                      </p>
                      <ol className="grid grid-cols-2 gap-x-6 gap-y-1">
                        {words.map((_, i) => (
                          <li key={i} className="flex items-baseline gap-2">
                            <span className="text-slate-400 w-4">{i + 1}.</span>
                            <span className="flex-1 border-b border-slate-300" />
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {act === "missing-letters" && (
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-[13px]">
                      {words.map((w, i) => (
                        <div key={i} className="flex items-baseline gap-3">
                          <span className="font-mono tracking-widest text-slate-700">{withMissingLetters(w)}</span>
                          <span className="flex-1 border-b border-slate-300" />
                        </div>
                      ))}
                    </div>
                  )}

                  {act === "write-sentence" && (
                    <div className="space-y-3">
                      {words.slice(0, 6).map((w, i) => (
                        <div key={i}>
                          <span className="text-[13px] font-bold text-slate-700">{w}</span>
                          <div className="border-b border-slate-300 mt-3" />
                        </div>
                      ))}
                    </div>
                  )}

                  {act === "spelling-test" && (
                    <ol className="grid grid-cols-2 gap-x-6 gap-y-1 text-[12px]">
                      {words.map((_, i) => (
                        <li key={i} className="flex items-baseline gap-2">
                          <span className="text-slate-400 w-4">{i + 1}.</span>
                          <span className="flex-1 border-b border-slate-300" />
                        </li>
                      ))}
                    </ol>
                  )}

                  {act === "pyramid" && (
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[12px] text-slate-300 font-mono">
                      {words.slice(0, 6).map((w, i) => (
                        <div key={i}>{pyramidRows(w).join("  ·  ")}</div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {includeKey && activities.some((a) => ["abc-order", "missing-letters", "spelling-test"].includes(a)) && (
              <div className="mt-6 border-t border-dashed border-slate-200 pt-3">
                <div className="inline-block text-[9px] font-extrabold uppercase px-2 py-1 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 mb-2">
                  Answer Key
                </div>
                <p className="text-[11px] text-slate-500">ABC order: {abcSort(words).join(", ")}</p>
              </div>
            )}
          </div>
        </div>
      }
    />
  );
}
