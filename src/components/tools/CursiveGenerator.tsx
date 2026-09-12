"use client";

import { useMemo, useState } from "react";
import ToolFrame, { PaperHeader } from "./ToolFrame";
import { Field, Segmented, Stepper, Toggle, TextArea } from "./ui";
import { buildCursivePdf, downloadPdf } from "@/lib/tools/pdf";

const SIZES = [
  { value: "large", label: "Large (G1–2)", pt: 34 },
  { value: "medium", label: "Medium (G3–4)", pt: 25 },
  { value: "small", label: "Small (G5+)", pt: 18 },
];

const CASES = [
  { value: "lower", label: "Lowercase (a–z)", text: "a b c d e f g h i j k l m\nn o p q r s t u v w x y z" },
  { value: "upper", label: "Uppercase (A–Z)", text: "A B C D E F G H I J K L M\nN O P Q R S T U V W X Y Z" },
  { value: "both", label: "Both (Aa–Zz)", text: "Aa Bb Cc Dd Ee Ff Gg\nHh Ii Jj Kk Ll Mm Nn\nOo Pp Qq Rr Ss Tt Uu\nVv Ww Xx Yy Zz" },
];

const QUICK = [
  { label: "Letter joins", text: "th wh sh ch qu\noo ea ou ing all" },
  { label: "Sentence", text: "Practice makes perfect penmanship." },
];

const CURSIVE_FONT = "'Practice Script', cursive";

export default function CursiveGenerator() {
  const [caseMode, setCaseMode] = useState(CASES[0].value);
  const [raw, setRaw] = useState(CASES[0].text);
  const [size, setSize] = useState("medium");
  const [traceRows, setTraceRows] = useState(1);
  const [blankRows, setBlankRows] = useState(2);
  const [dashed, setDashed] = useState(true);
  const [busy, setBusy] = useState(false);

  const sizePt = SIZES.find((s) => s.value === size)!.pt;
  const title = "Cursive Writing Practice";

  // preview scale — map PDF points to preview px (matches DancingScript's
  // tall loops/swashes, which need more headroom than a plain sans font)
  const px = sizePt * 1.15;
  const ascender = px * 2.4;
  const descender = px * 1.15;
  const glyphPx = px * 1.35;

  const lines = useMemo(
    () => raw.split("\n").map((l) => l.replace(/\s+$/, "")).filter((l) => l.trim().length).slice(0, 40),
    [raw],
  );

  const maxChars = Math.max(4, Math.floor(560 / (glyphPx * 0.42)));

  // wrap long lines onto consecutive rows so all typed text is shown
  const segments = useMemo(() => {
    const wrap = (line: string): string[] => {
      if (line.length <= maxChars) return [line];
      const words = line.split(" ");
      const out: string[] = [];
      let cur = "";
      for (const w of words) {
        const test = cur ? `${cur} ${w}` : w;
        if (test.length > maxChars && cur) {
          out.push(cur);
          cur = w;
        } else cur = test;
      }
      if (cur) out.push(cur);
      return out.length ? out : [line];
    };
    return (lines.length ? lines : ["a b c d e f g h"]).map((l) => ({ raw: l, segs: wrap(l) }));
  }, [lines, maxChars]);

  const rows = useMemo(() => {
    const out: { label: string; trace: boolean; firstOfGroup: boolean; repeat: boolean }[] = [];
    for (const { segs } of segments) {
      const repeat = segs.length === 1; // repeat guide text only for un-wrapped lines
      segs.forEach((seg, si) => {
        for (let t = 0; t < traceRows; t++)
          out.push({ label: seg, trace: true, firstOfGroup: si === 0 && t === 0, repeat });
        for (let b = 0; b < blankRows; b++)
          out.push({ label: seg, trace: false, firstOfGroup: si === 0 && traceRows === 0 && b === 0, repeat });
      });
    }
    return out;
  }, [segments, traceRows, blankRows]);

  async function download() {
    setBusy(true);
    try {
      const bytes = await buildCursivePdf({
        title,
        lines,
        sizePt,
        traceRows,
        blankRows,
        guideStyle: dashed ? "dashed" : "solid",
      });
      downloadPdf(bytes, `cursive-writing-practice-${size}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <ToolFrame
      note="Type letters, words or a sentence — each line becomes a practice row in a flowing cursive font. Trace rows show faint guide letters; blank rows are for writing solo."
      actions={[
        { label: busy ? "Building…" : "Download PDF", onClick: download, primary: true, disabled: busy },
      ]}
      controls={
        <>
          <Field label="Alphabet case" hint="big or small letters">
            <Segmented
              options={CASES.map((c) => ({ value: c.value, label: c.label }))}
              value={caseMode}
              onChange={(v) => {
                setCaseMode(v);
                setRaw(CASES.find((c) => c.value === v)!.text);
              }}
            />
          </Field>

          <Field label="Text to practise" hint="one line = one row">
            <TextArea value={raw} onChange={setRaw} rows={4} placeholder="Type letters, words or a sentence…" />
            <div className="flex flex-wrap gap-1.5 mt-2">
              {QUICK.map((q) => (
                <button
                  key={q.label}
                  type="button"
                  onClick={() => setRaw(q.text)}
                  className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200"
                >
                  {q.label}
                </button>
              ))}
            </div>
          </Field>

          <Field label="Letter size">
            <Segmented options={SIZES.map((s) => ({ value: s.value, label: s.label }))} value={size} onChange={setSize} />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Trace rows">
              <Stepper value={traceRows} min={0} max={4} onChange={setTraceRows} />
            </Field>
            <Field label="Blank rows">
              <Stepper value={blankRows} min={0} max={6} onChange={setBlankRows} />
            </Field>
          </div>

          <Toggle checked={dashed} onChange={setDashed} label="Dashed midline guide" />
        </>
      }
      preview={
        <div className="px-6 py-6">
          <PaperHeader title={title} subtitle="Trace the flowing guide letters, then write on your own." badge="Cursive" />
          <div className="pt-5 space-y-1">
            {rows.slice(0, 22).map((row, i) => (
              <div
                key={i}
                style={{
                  height: ascender + descender,
                  marginTop: row.firstOfGroup && i !== 0 ? 12 : 0,
                }}
                className="relative"
              >
                {/* top line */}
                <div className="absolute left-0 right-0 border-t border-slate-200" style={{ top: 0 }} />
                {/* midline */}
                <div
                  className={`absolute left-0 right-0 ${dashed ? "border-t border-dashed border-slate-300" : "border-t border-slate-100"}`}
                  style={{ top: ascender - px }}
                />
                {/* baseline */}
                <div className="absolute left-0 right-0 border-t-2 border-slate-400" style={{ top: ascender }} />
                {/* descender line */}
                <div className="absolute left-0 right-0 border-t border-slate-100" style={{ top: ascender + descender }} />
                {row.trace && (
                  <div
                    className="absolute left-1 right-1 overflow-hidden whitespace-nowrap text-slate-200 font-bold select-none"
                    style={{ top: 0, lineHeight: `${ascender}px`, fontSize: glyphPx, fontFamily: CURSIVE_FONT }}
                  >
                    {row.repeat
                      ? (row.label + "   ").repeat(Math.max(1, Math.ceil(maxChars / (row.label.length + 3))))
                      : row.label}
                  </div>
                )}
              </div>
            ))}
            {rows.length > 22 && (
              <p className="text-[10px] text-slate-400 pt-2">+ {rows.length - 22} more rows in the PDF…</p>
            )}
          </div>
        </div>
      }
    />
  );
}
