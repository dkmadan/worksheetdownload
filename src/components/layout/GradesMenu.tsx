"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { GRADES_CURRICULUM, getSubjectsForGrade } from "@/lib/curriculum";

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180 text-indigo-600" : "text-slate-400 group-hover:text-slate-600"}`}
      fill="none" viewBox="0 0 24 24" stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function GradesMenu({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-all duration-150 cursor-pointer ${
          dark
            ? open
              ? "text-white bg-white/15 shadow-2xs"
              : "text-slate-300 hover:text-white hover:bg-white/10"
            : open
              ? "text-indigo-600 bg-indigo-50/80 shadow-xs"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
        }`}
      >
        <span>Grades</span>
        <ChevronDown open={open} />
      </button>

      {open && (
        <div
          className="fixed z-[200] rounded-3xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
          style={{
            top: "106px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(1240px, calc(100vw - 32px))",
            background: "rgba(15, 23, 42, 0.96)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.09)",
            boxShadow: "0 30px 70px -15px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        >
          {/* Header Banner */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="text-base">🎓</span>
              <span className="text-xs font-bold text-white tracking-wide uppercase">K–8 Curriculum Directory</span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium">9 Grades · 1,500+ Curated Worksheets</span>
          </div>

          {/* 9-column grade grid */}
          <div
            className="grid grid-cols-9 divide-x divide-white/[0.07]"
            style={{
              padding: "20px 16px 20px",
            }}
          >
            {GRADES_CURRICULUM.map((grade) => {
              const subjects = getSubjectsForGrade(grade.id);
              return (
                <div
                  key={grade.id}
                  className="flex flex-col px-3 first:pl-2 last:pr-2"
                >
                  {/* Grade column header */}
                  <Link
                    href={`/grades/${grade.id}`}
                    onClick={() => setOpen(false)}
                    className="group no-underline mb-3 p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/5 hover:border-white/20 transition-all text-center"
                  >
                    <div className="text-xl leading-none mb-1 group-hover:scale-110 transition-transform">{grade.emoji}</div>
                    <div className="text-[11px] font-bold leading-tight mb-0.5 text-white group-hover:text-pink-300 transition-colors">
                      {grade.label}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium">{grade.ageRange}</div>
                  </Link>

                  {/* Subject items */}
                  <div className="flex flex-col gap-2">
                    {subjects.map((sub) => (
                      <Link
                        key={sub.id}
                        href={`/grades/${grade.id}/${sub.id}`}
                        onClick={() => setOpen(false)}
                        className="group flex items-center gap-1.5 py-1 px-1.5 rounded-lg hover:bg-white/[0.06] transition-all no-underline"
                      >
                        <span className="text-[12px] leading-none flex-shrink-0">{sub.emoji}</span>
                        <span className="text-[11px] font-medium leading-tight text-slate-300 group-hover:text-white transition-colors truncate">
                          {sub.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div
            className="flex items-center justify-between px-6 py-3 border-t border-white/10 bg-slate-950/70"
          >
            <Link
              href="/grades"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-400 hover:text-pink-300 transition-colors no-underline group"
            >
              <span>Explore all grade levels & complete syllabus</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <div className="flex items-center gap-4 text-[11px] text-slate-400">
              <span>Free PDF downloads</span>
              <span>•</span>
              <span>No login required</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

