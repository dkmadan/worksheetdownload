"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { GRADES_CURRICULUM, getSubjectsForGrade } from "@/lib/curriculum";

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-3.5 h-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
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
        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
          dark
            ? open ? "text-white bg-white/10" : "text-slate-300 hover:text-white hover:bg-white/10"
            : open ? "text-slate-900 bg-slate-100" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        }`}
      >
        Grades
        <ChevronDown open={open} />
      </button>

      {open && (
        <div
          className="fixed z-[200] rounded-2xl overflow-hidden"
          style={{
            top: "106px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(1280px, calc(100vw - 32px))",
            background: "#181818",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.55)",
          }}
        >
          {/* 9-column grade grid */}
          <div
            className="grid grid-cols-9"
            style={{
              padding: "24px 24px 22px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {GRADES_CURRICULUM.map((grade, i) => {
              const subjects = getSubjectsForGrade(grade.id);
              return (
                <div
                  key={grade.id}
                  className="flex flex-col"
                  style={{
                    paddingLeft: i > 0 ? "16px" : "0",
                    paddingRight: i < 8 ? "16px" : "0",
                    borderRight: i < 8 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  {/* Grade column header */}
                  <Link
                    href={`/grades/${grade.id}`}
                    onClick={() => setOpen(false)}
                    className="group no-underline mb-3 block"
                  >
                    <div className="text-lg leading-none mb-1">{grade.emoji}</div>
                    <div className="text-[11px] font-bold leading-tight mb-0.5 text-white/80 group-hover:text-white transition-colors">
                      {grade.label}
                    </div>
                    <div className="text-[10px] text-white/30">{grade.ageRange}</div>
                  </Link>

                  {/* Subject items */}
                  <div className="flex flex-col gap-2.5">
                    {subjects.map((sub) => (
                      <Link
                        key={sub.id}
                        href={`/grades/${grade.id}/${sub.id}`}
                        onClick={() => setOpen(false)}
                        className="group flex items-start gap-1 no-underline"
                      >
                        <span className="text-[12px] leading-snug flex-shrink-0">{sub.emoji}</span>
                        <span className="text-[11px] font-semibold leading-snug text-white/45 group-hover:text-white/90 transition-colors">
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
            className="flex items-center justify-between px-6 py-3"
            style={{ background: "#141414" }}
          >
            <Link
              href="/grades"
              onClick={() => setOpen(false)}
              className="text-xs font-semibold text-pink-400 hover:text-pink-300 transition-colors no-underline"
            >
              Browse all grades →
            </Link>
            <span className="text-[11px] text-white/20">
              9 grades · Kindergarten to Grade 8
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
