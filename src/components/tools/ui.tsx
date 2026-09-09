"use client";

import { ReactNode } from "react";

// ── Field wrapper ───────────────────────────────────────────────────────────
export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2 mb-1.5">
        <label className="text-sm font-semibold text-slate-700">{label}</label>
        {hint && <span className="text-[11px] text-slate-400">{hint}</span>}
      </div>
      {children}
    </div>
  );
}

// ── Segmented control (single select) ───────────────────────────────────────
export function Segmented<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-xl">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          className={`flex-1 min-w-[calc(50%-0.375rem)] px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
            value === o.value
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

// ── Multi-select chips ──────────────────────────────────────────────────────
export function Chips<T extends string>({
  options,
  values,
  onChange,
}: {
  options: { value: T; label: string }[];
  values: T[];
  onChange: (v: T[]) => void;
}) {
  const toggle = (v: T) =>
    onChange(values.includes(v) ? values.filter((x) => x !== v) : [...values, v]);
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = values.includes(o.value);
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => toggle(o.value)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              on
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

// ── Stepper ─────────────────────────────────────────────────────────────────
export function Stepper({
  value,
  onChange,
  min = 0,
  max = 999,
  step = 1,
  suffix,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
}) {
  const set = (v: number) => onChange(Math.max(min, Math.min(max, v)));
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => set(value - step)}
        className="w-9 h-9 rounded-lg border border-slate-200 bg-white text-slate-600 font-bold hover:border-slate-400 disabled:opacity-40"
        disabled={value <= min}
      >
        −
      </button>
      <div className="flex-1 text-center">
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={(e) => set(Number(e.target.value))}
          className="w-full text-center text-sm font-bold text-slate-900 border border-slate-200 rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {suffix && <span className="block text-[10px] text-slate-400 mt-0.5">{suffix}</span>}
      </div>
      <button
        type="button"
        onClick={() => set(value + step)}
        className="w-9 h-9 rounded-lg border border-slate-200 bg-white text-slate-600 font-bold hover:border-slate-400 disabled:opacity-40"
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
}

// ── Slider ──────────────────────────────────────────────────────────────────
export function Slider({
  value,
  onChange,
  min,
  max,
  step = 1,
  format,
}: {
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  format?: (v: number) => string;
}) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="flex-1 accent-blue-600"
      />
      <span className="text-xs font-bold text-slate-700 tabular-nums w-14 text-right">
        {format ? format(value) : value}
      </span>
    </div>
  );
}

// ── Toggle ──────────────────────────────────────────────────────────────────
export function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex items-center gap-2.5 w-full text-left"
    >
      <span
        className={`relative w-9 h-5 rounded-full transition-colors flex-shrink-0 ${
          checked ? "bg-blue-600" : "bg-slate-300"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
            checked ? "translate-x-4" : ""
          }`}
        />
      </span>
      <span className="text-sm font-medium text-slate-700">{label}</span>
    </button>
  );
}

// ── Text input ──────────────────────────────────────────────────────────────
export function TextArea({
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
    />
  );
}
