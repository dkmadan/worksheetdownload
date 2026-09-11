"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { TECH_DATA } from "@/lib/technologies";

export { TECHNOLOGIES, slugifyTech } from "@/lib/technologies";

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

export default function TechnologiesMenu({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
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
        <svg className="w-3.5 h-3.5 text-cyan-400 group-hover:text-cyan-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m16-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
        <span>Technologies</span>
        <ChevronDown open={open} />
      </button>

      {/* Mega-menu panel (Compact Top-Level Categories Grid - No Scrollbar) */}
      {open && (
        <div
          className="fixed z-[200] rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
          style={{
            top: "106px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(1240px, calc(100vw - 32px))",
            background: "rgba(13, 18, 30, 0.98)",
            backdropFilter: "blur(26px)",
            WebkitBackdropFilter: "blur(26px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 35px 85px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255,255,255,0.06)",
          }}
        >
          {/* Header Banner - Compact */}
          <div className="flex items-center justify-between px-5 py-2.5 border-b border-white/[0.08] bg-white/[0.02]">
            <div className="flex items-center gap-2.5">
              <span className="p-1 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              <span className="text-xs font-bold text-white tracking-wide uppercase">Technology Categories</span>
              <span className="text-[10px] font-semibold text-slate-400 bg-white/[0.06] px-2 py-0.5 rounded-full border border-white/[0.08]">
                {TECH_DATA.length} Domains · 650+ Frameworks
              </span>
            </div>

            <Link
              href="/technologies"
              onClick={() => setOpen(false)}
              className="text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1 group"
            >
              <span>Explore all cheatsheets</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>

          {/* Categories Grid (Compact 7 Columns, 5 Rows = 35 Categories, Fits Perfectly Without Scrollbar) */}
          <div className="p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2">
              {TECH_DATA.map((cat) => {
                const totalTopics = cat.subcategories.reduce((acc, s) => acc + s.items.length, 0);
                return (
                  <Link
                    key={cat.slug}
                    href={`/technologies/${cat.slug}`}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-2 px-2.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] hover:border-indigo-500/40 transition-all duration-150 no-underline hover:shadow-md hover:shadow-indigo-950/30"
                  >
                    <span className="text-base flex-shrink-0 leading-none">
                      {cat.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-bold text-slate-200 group-hover:text-white leading-tight truncate">
                        {cat.label}
                      </div>
                      <div className="text-[9px] text-slate-400 group-hover:text-indigo-300 font-medium">
                        {totalTopics} topics
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


