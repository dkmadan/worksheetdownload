"use client";

import { useMemo, useState } from "react";
import ToolFrame, { PaperHeader } from "./ToolFrame";
import { Field, Segmented, Stepper, Toggle, TextArea } from "./ui";
import { buildHandwritingPdf, downloadPdf } from "@/lib/tools/pdf";

const SIZES = [
  { value: "large", label: "Large (Pre-K–K)", pt: 30 },
  { value: "medium", label: "Medium (G1–2)", pt: 22 },
  { value: "small", label: "Small (G3+)", pt: 15 },
];

const QUICK = [
  { label: "A–Z", text: "A B C D E F G H I J K L M\nN O P Q R S T U V W X Y Z" },
  { label: "a–z", text: "a b c d e f g h i j k l m\nn o p q r s t u v w x y z" },
  { label: "0–9", text: "0 1 2 3 4 5 6 7 8 9" },
  { label: "Aa–Zz", text: "Aa Bb Cc Dd Ee Ff Gg\nHh Ii Jj Kk Ll Mm Nn\nOo Pp Qq Rr Ss Tt Uu\nVv Ww Xx Yy Zz" },
];

export default function HandwritingGenerator() {
  const [raw, setRaw] = useState("The quick brown fox\njumps over the lazy dog.");
  const [size, setSize] = useState("medium");
  const [traceRows, setTraceRows] = useState(1);
  const [blankRows, setBlankRows] = useState(2);
  const [dashed, setDashed] = useState(true);
  const [busy, setBusy] = useState(false);

  const sizePt = SIZES.find((s) => s.value === size)!.pt;
  const lines = useMemo(
    () => raw.split("\n").map((l) => l.trim()).filter(Boolean).slice(0, 40),
    [raw],
  );
  const title = "Handwriting Practice";

  const rows = useMemo(() => {
    const out: { label: string; trace: boolean; firstOfGroup: boolean }[] = [];
    for (const line of lines.length ? lines : ["Aa Bb Cc"]) {
      for (let t = 0; t < traceRows; t++) out.push({ label: line, trace: true, firstOfGroup: t === 0 });
      for (let b = 0; b < blankRows; b++)
        out.push({ label: line, trace: false, firstOfGroup: traceRows === 0 && b === 0 });
    }
    return out;
  }, [lines, traceRows, blankRows]);

  async function download() {
    setBusy(true);
    try {
      const bytes = await buildHandwritingPdf({
        title,
        lines,
        sizePt,
        traceRows,
        blankRows,
        guideStyle: dashed ? "dashed" : "solid",
      });
      downloadPdf(bytes, `handwriting-practice-${size}`);
    } finally {
      setBusy(false);
    }
  }

  // preview scale — map PDF points to preview px
  const px = sizePt * 1.15;
  const ascender = px * 1.9;
  const descender = px * 0.75;

  return (
    <ToolFrame
      note="Type anything — each line becomes a practice row. Trace rows show faint guide letters; blank rows are for writing solo."
      actions={[
        { label: busy ? "Building…" : "Download PDF", onClick: download, primary: true, disabled: busy },
      ]}
      controls={
        <>
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

          <Toggle checked={dashed} onChange={setDashed} label="Dashed centre guide line" />
        </>
      }
      preview={
        <div className="px-6 py-6">
          <PaperHeader title={title} subtitle="Trace the guide letters, then write on your own." badge="Handwriting" />
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
                    className="absolute left-1 right-1 overflow-hidden whitespace-nowrap text-slate-200 font-semibold select-none"
                    style={{ top: 0, lineHeight: `${ascender}px`, fontSize: ascender * 0.82 }}
                  >
                    {(row.label + "   ").repeat(6)}
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
