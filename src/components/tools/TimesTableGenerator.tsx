"use client";

import { useMemo, useState } from "react";
import ToolFrame, { PaperHeader } from "./ToolFrame";
import { Field, Segmented, Chips, Stepper, Toggle } from "./ui";
import { freshSeed } from "@/lib/tools/prng";
import {
  DEFAULT_TABLE_CONFIG,
  TABLE_MODES,
  clampTableConfig,
  generateTable,
  gridAxis,
  tableTitle,
  type TableConfig,
  type TableMode,
} from "@/lib/tools/times-table";
import { buildTimesTablePdf, downloadPdf } from "@/lib/tools/pdf";

const TABLE_CHIPS = Array.from({ length: 12 }, (_, i) => ({ value: String(i + 1), label: String(i + 1) }));

export default function TimesTableGenerator() {
  const [cfg, setCfg] = useState<TableConfig>(DEFAULT_TABLE_CONFIG);
  const [columns, setColumns] = useState(3);
  const [includeKey, setIncludeKey] = useState(true);
  const [seed, setSeed] = useState(0x7a71e50);
  const [busy, setBusy] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const clean = useMemo(() => clampTableConfig(cfg), [cfg]);
  const facts = useMemo(() => generateTable(clean, seed), [clean, seed]);
  const title = useMemo(() => tableTitle(clean), [clean]);
  const grid = useMemo(
    () =>
      clean.mode === "grid"
        ? { axisRow: gridAxis(clean.gridMax, seed, true), axisCol: gridAxis(clean.gridMax, seed + 1, true) }
        : undefined,
    [clean, seed],
  );

  async function download() {
    setBusy(true);
    try {
      const bytes = await buildTimesTablePdf({
        title,
        mode: clean.mode,
        facts,
        columns,
        includeAnswerKey: includeKey,
        grid,
      });
      downloadPdf(bytes, `${title.replace(/\s+/g, "-").toLowerCase()}-${seed.toString(36)}`);
    } finally {
      setBusy(false);
    }
  }

  const isList = clean.mode !== "grid";

  return (
    <ToolFrame
      note="Practice one table, mix several, hide a factor, or fill a blank grid. Every sheet is randomized — the answer key always matches."
      actions={[
        { label: busy ? "Building…" : "Download PDF + Answer Key", onClick: download, primary: true, disabled: busy },
        { label: "New sheet", onClick: () => setSeed(freshSeed()) },
        { label: showAnswers ? "Hide answers" : "Show answers", onClick: () => setShowAnswers((v) => !v) },
      ]}
      controls={
        <>
          <Field label="Sheet type">
            <Segmented
              options={TABLE_MODES.map((m) => ({ value: m.id, label: m.label }))}
              value={clean.mode}
              onChange={(v) => setCfg((c) => ({ ...c, mode: v as TableMode }))}
            />
          </Field>

          {clean.mode === "single" && (
            <Field label="Which table?">
              <Stepper value={cfg.table} min={0} max={15} onChange={(table) => setCfg((c) => ({ ...c, table }))} suffix={`the ${cfg.table}× table`} />
            </Field>
          )}

          {(clean.mode === "drill" || clean.mode === "missing-factor") && (
            <Field label="Tables to include">
              <Chips
                options={TABLE_CHIPS}
                values={clean.tables.map(String)}
                onChange={(v) => setCfg((c) => ({ ...c, tables: v.map(Number).sort((a, b) => a - b) }))}
              />
            </Field>
          )}

          {isList && (
            <Field label="Highest multiplier">
              <Segmented
                options={[10, 12, 15].map((n) => ({ value: String(n), label: `×${n}` }))}
                value={String(clean.maxFactor)}
                onChange={(v) => setCfg((c) => ({ ...c, maxFactor: Number(v) }))}
              />
            </Field>
          )}

          {(clean.mode === "drill" || clean.mode === "missing-factor") && (
            <Field label="Problems">
              <Stepper value={cfg.count} min={6} max={60} step={3} onChange={(count) => setCfg((c) => ({ ...c, count }))} />
            </Field>
          )}

          {clean.mode === "grid" && (
            <Field label="Grid size">
              <Segmented
                options={[10, 12, 15].map((n) => ({ value: String(n), label: `${n} × ${n}` }))}
                value={String(clean.gridMax)}
                onChange={(v) => setCfg((c) => ({ ...c, gridMax: Number(v) }))}
              />
            </Field>
          )}

          {isList && (
            <Field label="Columns">
              <Segmented options={[1, 2, 3, 4].map((n) => ({ value: String(n), label: String(n) }))} value={String(columns)} onChange={(v) => setColumns(Number(v))} />
            </Field>
          )}

          <Toggle checked={includeKey} onChange={setIncludeKey} label="Include answer key page" />
        </>
      }
      preview={
        <div className="pb-8">
          <PaperHeader title={title} subtitle={isList ? "Fill in each product." : "Multiply the row by the column."} badge="Times Table" />
          <div className="px-6 pt-4">
            {isList ? (
              <div className="grid gap-x-6 gap-y-2" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))` }}>
                {facts.map((f, i) => (
                  <div key={i} className="flex items-baseline gap-2 text-[13px] text-slate-800">
                    <span className="text-slate-400 font-semibold w-5 shrink-0">{i + 1}.</span>
                    <span className="font-medium">
                      {clean.mode === "missing-factor" ? (
                        showAnswers ? (
                          f.prompt.replace("__", `[${f.answer}]`)
                        ) : (
                          f.prompt
                        )
                      ) : (
                        <>
                          {f.prompt} ={" "}
                          {showAnswers ? (
                            <span className="text-emerald-600 font-bold">{f.answer}</span>
                          ) : (
                            <span className="inline-block border-b border-slate-300 w-10 align-middle" />
                          )}
                        </>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              grid && (
                <div className="overflow-x-auto">
                  <table className="border-collapse text-[11px] mx-auto">
                    <thead>
                      <tr>
                        <th className="border border-slate-300 w-7 h-7 bg-slate-800 text-white">×</th>
                        {grid.axisRow.map((v) => (
                          <th key={v} className="border border-slate-300 w-7 h-7 bg-slate-100 font-bold text-slate-700">{v}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {grid.axisCol.map((rv) => (
                        <tr key={rv}>
                          <th className="border border-slate-300 w-7 h-7 bg-slate-100 font-bold text-slate-700">{rv}</th>
                          {grid.axisRow.map((cv) => (
                            <td key={cv} className="border border-slate-200 w-7 h-7 text-center text-emerald-600 font-semibold">
                              {showAnswers ? rv * cv : ""}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            )}
          </div>
        </div>
      }
    />
  );
}
