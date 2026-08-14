"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { SUBJECTS_META } from "@/lib/curriculum";
import type { SubjectDef } from "@/lib/curriculum";

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

const SUBJECT_GROUPS: { header: string; ids: string[] }[] = [
  {
    header: "Core Academics",
    ids: ["mathematics", "english", "english-language"],
  },
  {
    header: "Sciences",
    ids: ["science", "evs", "general-awareness"],
  },
  {
    header: "Social & Knowledge",
    ids: ["social-studies", "gk", "reasoning"],
  },
  {
    header: "Creative & Special",
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
        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
          dark
            ? open ? "text-white bg-white/10" : "text-slate-300 hover:text-white hover:bg-white/10"
            : open ? "text-slate-900 bg-slate-100" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        }`}
      >
        Subjects
        <ChevronDown open={open} />
      </button>

      {open && (
        <div
          className="fixed z-[200] rounded-2xl overflow-hidden"
          style={{
            top: "106px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(960px, calc(100vw - 32px))",
            background: "#181818",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.55)",
          }}
        >
          {/* 4-column subject group grid */}
          <div
            className="grid grid-cols-4"
            style={{
              padding: "24px 24px 22px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {SUBJECT_GROUPS.map((group, i) => {
              const subjects: SubjectDef[] = group.ids
                .map((id) => SUBJECTS_META[id])
                .filter(Boolean);
              return (
                <div
                  key={group.header}
                  className="flex flex-col"
                  style={{
                    paddingLeft: i > 0 ? "24px" : "0",
                    paddingRight: i < 3 ? "24px" : "0",
                    borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  {/* Group header */}
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.18em] mb-4"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    {group.header}
                  </p>

                  {/* Subject items */}
                  <div className="flex flex-col gap-4">
                    {subjects.map((sub) => (
                      <Link
                        key={sub.id}
                        href={`/subjects/${sub.id}`}
                        onClick={() => setOpen(false)}
                        className="group flex flex-col gap-0.5 no-underline"
                      >
                        <span className="text-[13px] font-semibold text-white/75 group-hover:text-white transition-colors">
                          {sub.emoji} {sub.label}
                        </span>
                        <span className="text-[11px] leading-[1.4] text-white/30">
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
            className="flex items-center justify-between px-6 py-3"
            style={{ background: "#141414" }}
          >
            <Link
              href="/subjects"
              onClick={() => setOpen(false)}
              className="text-xs font-semibold text-pink-400 hover:text-pink-300 transition-colors no-underline"
            >
              Browse all subjects →
            </Link>
            <span className="text-[11px] text-white/20">
              13 subjects · Kindergarten to Grade 8
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
