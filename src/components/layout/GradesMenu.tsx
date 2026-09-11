"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { GRADES_CURRICULUM, getSubjectsForGrade } from "@/lib/curriculum";

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-3 h-3 ml-0.5 transition-transform duration-200 ${open ? "rotate-180 text-purple-400" : "text-slate-400 group-hover:text-slate-200"}`}
      fill="none" viewBox="0 0 24 24" stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// Relevant SVG icon helper for curriculum subjects
function SubjectIcon({ id }: { id: string }) {
  switch (id) {
    case "mathematics":
      return (
        <svg className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case "english":
    case "english-language":
      return (
        <svg className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case "science":
      return (
        <svg className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
    case "evs":
      return (
        <svg className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    case "social-studies":
      return (
        <svg className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "gk":
    case "general-awareness":
      return (
        <svg className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case "reasoning":
    case "logic-thinking":
      return (
        <svg className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      );
    case "shapes-visual":
    case "coloring-creative":
      return (
        <svg className="w-3.5 h-3.5 text-pink-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4 5 5 0 0112 0 4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      );
    default:
      return (
        <svg className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
  }
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
        className={`group flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-all duration-150 cursor-pointer ${
          dark
            ? open
              ? "text-white bg-white/15 shadow-2xs"
              : "text-slate-200 hover:text-white hover:bg-white/10"
            : open
              ? "text-indigo-600 bg-indigo-50/80 shadow-xs"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
        }`}
      >
        <svg className="w-3.5 h-3.5 text-amber-400 group-hover:text-amber-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
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
            width: "min(1260px, calc(100vw - 32px))",
            background: "rgba(13, 18, 30, 0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 30px 80px -15px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255,255,255,0.06)",
          }}
        >
          {/* Header Banner */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-white/[0.08] bg-white/[0.02]">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/20">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </span>
              <div>
                <span className="text-xs font-bold text-white tracking-wide uppercase">K–8 Grade Curriculum Hub</span>
                <p className="text-[11px] text-slate-400">Structured syllabus with matching worksheets & answer keys</p>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-slate-400 bg-white/[0.05] px-3 py-1 rounded-full border border-white/[0.08]">
              9 Grades · 1,500+ Worksheets
            </span>
          </div>

          {/* 9-column grade grid */}
          <div
            className="grid grid-cols-9 divide-x divide-white/[0.06]"
            style={{
              padding: "20px 14px 20px",
            }}
          >
            {GRADES_CURRICULUM.map((grade) => {
              const subjects = getSubjectsForGrade(grade.id);
              return (
                <div
                  key={grade.id}
                  className="flex flex-col px-2.5 first:pl-1 last:pr-1"
                >
                  {/* Grade column header */}
                  <Link
                    href={`/grades/${grade.id}`}
                    onClick={() => setOpen(false)}
                    className="group no-underline mb-3 p-2.5 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.05] border border-white/[0.08] hover:border-pink-400/40 transition-all text-center block shadow-2xs"
                  >
                    <div className="text-2xl leading-none mb-1.5 group-hover:scale-110 transition-transform">
                      {grade.emoji}
                    </div>
                    <div className="text-[11px] font-bold leading-tight mb-0.5 text-white group-hover:text-pink-300 transition-colors">
                      {grade.label}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium">
                      {grade.ageRange}
                    </div>
                  </Link>

                  {/* Subject items */}
                  <div className="flex flex-col gap-1.5">
                    {subjects.map((sub) => (
                      <Link
                        key={sub.id}
                        href={`/grades/${grade.id}/${sub.id}`}
                        onClick={() => setOpen(false)}
                        className="group flex items-center gap-1.5 py-1 px-1.5 rounded-lg hover:bg-white/[0.07] transition-all no-underline"
                      >
                        <SubjectIcon id={sub.id} />
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
          <div className="flex items-center justify-between px-6 py-3 border-t border-white/[0.08] bg-slate-950/80">
            <Link
              href="/grades"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-400 hover:text-pink-300 transition-colors no-underline group"
            >
              <span>Explore all grade levels & full lesson plans</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <div className="flex items-center gap-3 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Free PDF Downloads
              </span>
              <span>•</span>
              <span>Ready for Print & Classroom</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


