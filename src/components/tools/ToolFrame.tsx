"use client";

import { ReactNode } from "react";

export interface ToolAction {
  label: string;
  onClick: () => void;
  primary?: boolean;
  disabled?: boolean;
}

export default function ToolFrame({
  controls,
  preview,
  actions,
  note,
}: {
  controls: ReactNode;
  preview: ReactNode;
  actions: ToolAction[];
  note?: string;
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
      <div className="grid lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] gap-6">
        {/* Controls */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-5 space-y-5">
            {controls}
          </div>
        </div>

        {/* Preview + actions */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {actions.map((a) => (
              <button
                key={a.label}
                type="button"
                onClick={a.onClick}
                disabled={a.disabled}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                  a.primary
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-slate-400"
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>

          {note && <p className="text-xs text-slate-400">{note}</p>}

          <div className="bg-slate-100 rounded-2xl border border-slate-200/80 p-3 sm:p-6 overflow-x-auto">
            <div className="mx-auto bg-white shadow-lg shadow-slate-300/40 rounded-sm origin-top" style={{ width: 640, maxWidth: "100%" }}>
              {preview}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// A shared "paper" chrome for the on-screen preview, echoing the PDF layout.
export function PaperHeader({
  title,
  subtitle,
  badge,
  answerKey,
  studentStrip = true,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
  answerKey?: boolean;
  studentStrip?: boolean;
}) {
  return (
    <div className="px-6 pt-6">
      <div className="flex items-start justify-between gap-3 pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-md bg-[#243b6e] flex items-center justify-center text-[10px]">📄</span>
          <div className="leading-tight">
            <div className="text-[13px] font-extrabold text-slate-900">
              Worksheet<span className="text-blue-600">Download</span>.com
            </div>
            <div className="text-[8px] font-bold tracking-wide text-slate-400">
              FREE PRINTABLE WORKSHEET GENERATOR
            </div>
          </div>
        </div>
        {badge && (
          <span
            className={`text-[9px] font-extrabold uppercase px-2 py-1 rounded border ${
              answerKey
                ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                : "bg-blue-50 text-blue-600 border-blue-200"
            }`}
          >
            {badge}
          </span>
        )}
      </div>

      <div
        className={`mt-3 rounded-md px-3 py-2 ${answerKey ? "bg-emerald-600" : "bg-[#1e3a8a]"}`}
      >
        <div className="text-[13px] font-bold text-white leading-tight">{title}</div>
        {subtitle && (
          <div className={`text-[9px] ${answerKey ? "text-emerald-100" : "text-blue-200"}`}>
            {subtitle}
          </div>
        )}
      </div>

      {studentStrip && !answerKey && (
        <div className="mt-2.5 flex items-center gap-4 text-[9px] font-bold text-slate-400 bg-slate-50 border border-slate-200 rounded px-3 py-1.5">
          <span className="flex-1">Name: ____________________</span>
          <span>Class: ______</span>
          <span>Date: ________</span>
        </div>
      )}
    </div>
  );
}
