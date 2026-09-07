"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { TECH_DATA } from "@/lib/technologies";
import type { TechCategory } from "@/lib/technologies";

export { TECHNOLOGIES, slugifyTech } from "@/lib/technologies";

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

export default function TechnologiesMenu({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const [activeSlug, setActiveSlug] = useState(TECH_DATA[0].slug);
  const ref = useRef<HTMLDivElement>(null);

  const activeCat: TechCategory =
    TECH_DATA.find((c) => c.slug === activeSlug) ?? TECH_DATA[0];

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
      {/* Trigger */}
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
        <span>Technologies</span>
        <ChevronDown open={open} />
      </button>

      {/* Mega-menu panel */}
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
              <span className="text-base">💻</span>
              <span className="text-xs font-bold text-white tracking-wide uppercase">Developer Technology Cheatsheets</span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium">Quick Reference & Interview Preparation</span>
          </div>

          {/* ── Category tabs ── */}
          <div
            className="flex overflow-x-auto border-b border-white/[0.08] px-4 pt-2.5 gap-1.5 bg-slate-950/40"
            style={{
              scrollbarWidth: "none",
            }}
          >
            {TECH_DATA.map((cat) => {
              const isActive = cat.slug === activeSlug;
              return (
                <button
                  key={cat.slug}
                  onMouseEnter={() => setActiveSlug(cat.slug)}
                  onClick={() => {
                    setOpen(false);
                    window.location.href = `/technologies/${cat.slug}`;
                  }}
                  className={`flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-t-xl transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "text-white bg-slate-800/80 border-t border-x border-white/10 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="text-sm leading-none">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* ── Panel Content ── */}
          <div className="flex flex-col max-h-[460px] overflow-hidden bg-slate-900/60">
            {/* Active Category Header */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/[0.07] bg-white/[0.02]">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-xl flex-shrink-0">{activeCat.icon}</span>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-white leading-tight">{activeCat.label}</p>
                  <p className="text-[11px] text-slate-400 truncate max-w-[500px] mt-0.5">
                    {activeCat.description}
                  </p>
                </div>
              </div>
              <Link
                href={`/technologies/${activeCat.slug}`}
                onClick={() => setOpen(false)}
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors flex-shrink-0 ml-4 group"
              >
                <span>View all {activeCat.label}</span>
                <span className="inline-block group-hover:translate-x-0.5 transition-transform ml-1">→</span>
              </Link>
            </div>

            {/* Subcategory sections */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {activeCat.subcategories.map((sub) => (
                <div key={sub.name}>
                  {/* Subcategory label + line */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-indigo-400">
                      {sub.name}
                    </span>
                    <div className="flex-1 h-[1px] bg-indigo-500/20" />
                  </div>
                  {/* 4-column item grid */}
                  <div className="grid grid-cols-4 gap-1.5">
                    {sub.items.map((tech) => (
                      <Link
                        key={tech.slug}
                        href={`/technologies/${activeCat.slug}/${tech.slug}`}
                        onClick={() => setOpen(false)}
                        className="text-xs text-slate-300 hover:text-white hover:bg-white/[0.07] px-2.5 py-1.5 rounded-lg transition-all truncate"
                      >
                        {tech.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-3 border-t border-white/10 bg-slate-950/70">
            <Link
              href="/technologies"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors no-underline group"
            >
              <span>Explore all developer technologies & frameworks</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <span className="text-[11px] text-slate-400">
              Cheat Sheets · Interview Questions · Practice Exercises
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

