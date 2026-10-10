"use client";

import { useMemo, useState } from "react";
import ToolFrame, { PaperHeader } from "./ToolFrame";
import { Field, Segmented, Chips, Stepper, Toggle } from "./ui";
import { freshSeed } from "@/lib/tools/prng";
import {
  DEFAULT_MONEY_CONFIG,
  CURRENCY_METAS,
  generateMoneyProblems,
  renderCoinSvg,
  renderBanknoteSvg,
  type MoneyConfig,
  type CurrencyCode,
  type MoneyExerciseType,
  type CurrencyItem,
} from "@/lib/tools/money";
import { buildMoneyPdf, downloadPdf } from "@/lib/tools/generators-pdf";

const CURRENCY_OPTIONS: { value: CurrencyCode; label: string }[] = [
  { value: "USD", label: "$ USD" },
  { value: "INR", label: "₹ INR" },
  { value: "GBP", label: "£ GBP" },
  { value: "EUR", label: "€ EUR" },
  { value: "CAD", label: "CA$ CAD" },
  { value: "AUD", label: "A$ AUD" },
];

const EXERCISE_OPTIONS: { id: MoneyExerciseType; label: string }[] = [
  { id: "identify-coins", label: "Identify Coins" },
  { id: "identify-banknotes", label: "Identify Banknotes" },
  { id: "count-coins", label: "Count Coins" },
  { id: "count-mixed", label: "Count Mixed Money" },
  { id: "add-money", label: "Add Money" },
  { id: "compare-money", label: "Compare (<, >, =)" },
  { id: "make-amount", label: "Make Exact Amounts" },
  { id: "calculate-change", label: "Calculate Change" },
  { id: "shopping-word-problems", label: "Shopping Problems" },
];

function MoneyItemDisplay({ item, grayscale }: { item: CurrencyItem; grayscale: boolean }) {
  if (item.isCoin) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: renderCoinSvg(item, 42, grayscale),
        }}
      />
    );
  }
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: renderBanknoteSvg(item, 64, 34, grayscale),
      }}
    />
  );
}

export default function MoneyGenerator() {
  const [cfg, setCfg] = useState<MoneyConfig>(DEFAULT_MONEY_CONFIG);
  const [seed, setSeed] = useState(0x5b6c7d8e);
  const [busy, setBusy] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const problems = useMemo(
    () => generateMoneyProblems(cfg, seed),
    [cfg, seed]
  );

  async function handleDownload() {
    setBusy(true);
    try {
      const bytes = await buildMoneyPdf({
        title: "Money Math & Counting Worksheet",
        problems,
        currency: cfg.currency,
        includeAnswerKey: cfg.includeAnswerKey,
        grayscale: cfg.grayscale,
      });
      downloadPdf(bytes, `money-counting-${cfg.currency.toLowerCase()}-${seed.toString(36)}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <ToolFrame
      note="Educational coin and banknote vector illustrations. Exact integer arithmetic with zero floating-point errors."
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
          <Field label="Currency">
            <Segmented
              options={CURRENCY_OPTIONS}
              value={cfg.currency}
              onChange={(currency) => setCfg((c) => ({ ...c, currency }))}
            />
          </Field>

          <Field label="Grade Level" hint={cfg.grade === 0 ? "Kindergarten" : `Grade ${cfg.grade}`}>
            <Stepper
              value={cfg.grade}
              min={0}
              max={6}
              onChange={(grade) => setCfg((c) => ({ ...c, grade }))}
              suffix={cfg.grade === 0 ? "K" : `G${cfg.grade}`}
            />
          </Field>

          <Field label="Exercise Types" hint="select one or more">
            <Chips
              options={EXERCISE_OPTIONS.map((e) => ({ value: e.id, label: e.label }))}
              values={cfg.exercises}
              onChange={(exercises) =>
                setCfg((c) => ({ ...c, exercises: exercises as MoneyExerciseType[] }))
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
            title="Money-Counting Practice Worksheet"
            subtitle={`${CURRENCY_METAS[cfg.currency].name} (${CURRENCY_METAS[cfg.currency].symbol}) · Grade ${cfg.grade || "K"} · ${problems.length} Problems`}
            badge="Money Math"
            studentStrip
          />

          <div className="px-6 pt-4 space-y-4">
            {problems.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-slate-200/90 rounded-xl p-3.5 space-y-2 shadow-2xs"
              >
                <div className="flex items-start justify-between gap-1 text-[11px] font-bold text-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] shrink-0 font-extrabold">
                      {p.num}
                    </span>
                    <span>{p.instructions}</span>
                  </div>
                </div>

                {/* Cash Items Row */}
                {p.itemsA && p.itemsA.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 p-2 bg-slate-50/70 rounded-lg min-h-[50px]">
                    {p.itemsA.map((item, idx) => (
                      <MoneyItemDisplay key={idx} item={item} grayscale={cfg.grayscale} />
                    ))}
                    {p.itemsB && (
                      <>
                        <span className="font-extrabold text-slate-400 px-2">vs</span>
                        {p.itemsB.map((item, idx) => (
                          <MoneyItemDisplay key={`b-${idx}`} item={item} grayscale={cfg.grayscale} />
                        ))}
                      </>
                    )}
                  </div>
                )}

                {/* Shopping Scenario */}
                {p.storeItems && p.storeItems.length > 0 && (
                  <div className="flex gap-4 p-2.5 bg-amber-50/50 border border-amber-200/50 rounded-lg text-xs">
                    {p.storeItems.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 font-bold text-slate-700">
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                {p.prompt && (
                  <p className="text-[11px] text-slate-600 font-medium pl-6">{p.prompt}</p>
                )}

                <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[11px]">
                  <span className="text-slate-400 text-[10px]">Write your answer:</span>
                  <div className="font-bold text-slate-700">
                    Ans:{" "}
                    {showAnswers ? (
                      <span className="text-emerald-600 font-extrabold underline">{p.answer}</span>
                    ) : (
                      <span className="inline-block border-b-2 border-slate-300 w-24" />
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
