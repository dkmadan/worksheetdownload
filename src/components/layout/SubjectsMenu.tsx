"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { SUBJECTS_META } from "@/lib/curriculum";
import type { SubjectDef } from "@/lib/curriculum";

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

const SUBJECT_GROUPS: { header: string; icon: string; ids: string[] }[] = [
  {
    header: "Core Academics",
    icon: "📐",
    ids: ["mathematics", "english", "english-language"],
  },
  {
    header: "Sciences & Nature",
    icon: "🔬",
    ids: ["science", "evs", "general-awareness"],
  },
  {
    header: "Social & Knowledge",
    icon: "🌐",
    ids: ["social-studies", "gk", "reasoning"],
  },
  {
    header: "Creative & Thinking",
    icon: "🎨",
    ids: ["shapes-visual", "coloring-creative", "logic-thinking", "social-emotional"],
  },
];

export default function SubjectsMenu({ dark = false }: { dark?: boolean }) {
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
        className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-150 ${
          open
            ? "text-indigo-600 bg-indigo-50/80 shadow-xs"
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
        }`}
      >
        <span>Subjects</span>
        <ChevronDown open={open} />
      </button>

      {open && (
        <div
          className="fixed z-[200] rounded-3xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
          style={{
            top: "68px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(980px, calc(100vw - 32px))",
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
              <span className="text-base">📚</span>
              <span className="text-xs font-bold text-white tracking-wide uppercase">Subjects by Domain</span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium">13 Academic & Skill Disciplines</span>
          </div>

          {/* 4-column subject group grid */}
          <div
            className="grid grid-cols-4 divide-x divide-white/[0.07]"
            style={{
              padding: "22px 20px 22px",
            }}
          >
            {SUBJECT_GROUPS.map((group) => {
              const subjects: SubjectDef[] = group.ids
                .map((id) => SUBJECTS_META[id])
                .filter(Boolean);
              return (
                <div
                  key={group.header}
                  className="flex flex-col px-4 first:pl-2 last:pr-2"
                >
                  {/* Group header */}
                  <div className="flex items-center gap-1.5 mb-3.5 pb-1.5 border-b border-white/[0.06]">
                    <span className="text-xs leading-none">{group.icon}</span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      {group.header}
                    </p>
                  </div>

                  {/* Subject items */}
                  <div className="flex flex-col gap-3">
                    {subjects.map((sub) => (
                      <Link
                        key={sub.id}
                        href={`/subjects/${sub.id}`}
                        onClick={() => setOpen(false)}
                        className="group flex flex-col gap-0.5 p-2 rounded-xl hover:bg-white/[0.06] transition-all no-underline"
                      >
                        <span className="text-[12.5px] font-semibold text-slate-200 group-hover:text-white transition-colors flex items-center gap-1.5">
                          <span>{sub.emoji}</span>
                          <span>{sub.label}</span>
                        </span>
                        <span className="text-[11px] leading-[1.35] text-slate-400 line-clamp-2 pl-5">
                          {sub.description}
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
              href="/subjects"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-400 hover:text-pink-300 transition-colors no-underline group"
            >
              <span>Browse all curriculum subjects</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <span className="text-[11px] text-slate-400">
              Kindergarten to Grade 8 · Activity & Practice Worksheets
            </span>
          </div>
        </div>
      )}
    </div>
  );
}


