"use client";

import { useEffect, useMemo, useState } from "react";
import { PaperHeader } from "@/components/tools/ToolFrame";
import MapDiagram from "@/components/maps/MapDiagram";
import { downloadPdf } from "@/lib/tools/pdf";
import { buildMapWorksheetPdf } from "@/lib/maps/pdf";
import { allAnswers, splitItem, type MapWorksheet } from "@/lib/maps/types";
import { seededShuffle } from "@/lib/maps/helpers";

export default function MapWorksheetView({ map }: { map: MapWorksheet }) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [busy, setBusy] = useState(false);
  const refSrc = map.referenceImage ? `/maps/reference/${map.referenceImage}` : null;
  const isIndiaSourced = map.category === "india" || map.slug === "india-map" || map.slug === "states-of-india-map";
  // only show the reference image once it has actually loaded — no broken-image
  // flash on maps whose file hasn't been added yet
  const [refOk, setRefOk] = useState(false);
  useEffect(() => {
    if (!refSrc) return;
    const img = new window.Image();
    img.onload = () => setRefOk(true);
    img.src = refSrc;
    return () => {
      img.onload = null;
    };
  }, [refSrc]);

  const words = useMemo(() => seededShuffle(allAnswers(map), map.slug), [map]);

  // number the label items sequentially across all groups
  const numbered = useMemo(() => {
    let n = 0;
    return map.groups.map((g) => ({
      heading: g.heading,
      items: g.items.map((raw) => ({ n: ++n, ...splitItem(raw) })),
    }));
  }, [map]);
  const clueStart = numbered.reduce((s, g) => s + g.items.length, 0);

  async function download() {
    setBusy(true);
    try {
      const bytes = await buildMapWorksheetPdf(map);
      downloadPdf(bytes, `${map.slug}-worksheet`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={download}
          disabled={busy}
          className="px-4 py-2.5 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all disabled:opacity-50"
        >
          {busy ? "Building…" : "Download PDF + Answer Key"}
        </button>
        <button
          type="button"
          onClick={() => setShowAnswers((v) => !v)}
          className="px-4 py-2.5 rounded-xl text-sm font-bold bg-white border border-slate-200 text-slate-700 hover:border-slate-400 transition-all"
        >
          {showAnswers ? "Hide answers" : "Show answers"}
        </button>
      </div>

      <div className="bg-slate-100 rounded-2xl border border-slate-200/80 p-3 sm:p-6 overflow-x-auto">
        <div className="mx-auto bg-white shadow-lg shadow-slate-300/40 rounded-sm" style={{ width: 660, maxWidth: "100%" }}>
          <div className="pb-8">
            <PaperHeader title={map.h1} subtitle={map.labelPrompt} badge="Map Worksheet" />

            <div className="px-6 pt-4">
              {refSrc && refOk ? (
                <figure className="my-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={refSrc}
                    alt={`Reference map — ${map.title}`}
                    className="w-full rounded-lg border border-slate-200"
                  />
                  <figcaption className="mt-1.5 text-[11px] text-slate-400 text-center">
                    Reference map — a labelled copy is also the last page of the PDF.
                    {isIndiaSourced && (
                      <>
                        {" "}
                        India boundaries:{" "}
                        <a
                          href="https://github.com/VictorCazanave/svg-maps"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-slate-500"
                        >
                          SVG Maps
                        </a>
                        , CC BY 4.0.
                      </>
                    )}
                  </figcaption>
                </figure>
              ) : map.diagram ? (
                <MapDiagram kind={map.diagram} />
              ) : (
                <div className="my-4 border border-slate-300 border-dashed rounded-lg bg-slate-50/60 h-28 flex flex-col items-center justify-center text-center px-4">
                  <span className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Map area</span>
                  <span className="text-xs text-slate-500 mt-1">Draw or attach your map here, then label it using the word bank.</span>
                </div>
              )}

              {/* word bank */}
              <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2.5">
                <div className="text-[10px] font-extrabold uppercase tracking-wide text-slate-400 mb-1">Word Bank</div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-600">
                  {words.map((w, i) => (
                    <span key={i}>{w}</span>
                  ))}
                </div>
              </div>

              {/* Section A */}
              <p className="mt-4 text-[11px] font-bold text-slate-500">
                Section A — Use the word bank to fill in each blank.
              </p>
              <div className="mt-2 space-y-3">
                {numbered.map((g) => (
                  <div key={g.heading}>
                    <div className="text-xs font-bold text-slate-800 mb-1">{g.heading}</div>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                      {g.items.map((it) => (
                        <div key={it.n} className="flex items-baseline gap-2 text-[12px]">
                          <span className="text-slate-400 font-semibold w-5 shrink-0">{it.n}.</span>
                          {it.prompt && <span className="text-slate-600 shrink-0">{it.prompt} —</span>}
                          {showAnswers ? (
                            <span className="text-emerald-600 font-semibold">{it.answer}</span>
                          ) : (
                            <span className="flex-1 border-b border-slate-300" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Part B */}
              {map.clues && map.clues.length > 0 && (
                <>
                  <p className="mt-6 text-[11px] font-bold text-slate-500">
                    Part B — Identify each place from the clue.
                  </p>
                  <ol className="mt-2 space-y-1.5">
                    {map.clues.map((c, i) => (
                      <li key={i} className="flex items-baseline gap-2 text-[12px]">
                        <span className="text-slate-400 font-semibold w-5 shrink-0">{clueStart + i + 1}.</span>
                        <span className="text-slate-700">
                          {c.clue}
                          {" — "}
                          {showAnswers ? (
                            <span className="text-emerald-600 font-semibold">{c.answer}</span>
                          ) : (
                            <span className="inline-block border-b border-slate-300 w-32 align-baseline" />
                          )}
                        </span>
                      </li>
                    ))}
                  </ol>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-slate-400">
        The PDF prints as a clean A4 worksheet with a word bank, numbered blanks and a separate answer-key page.
      </p>
    </div>
  );
}
