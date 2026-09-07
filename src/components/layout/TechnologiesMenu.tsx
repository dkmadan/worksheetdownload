"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import { TECH_DATA } from "@/lib/technologies";

export { TECHNOLOGIES, slugifyTech } from "@/lib/technologies";

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180 text-pink-400" : "text-slate-400 group-hover:text-slate-200"}`}
      fill="none" viewBox="0 0 24 24" stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function TechnologiesMenu({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return TECH_DATA;
    const q = searchQuery.toLowerCase().trim();
    return TECH_DATA.filter((cat) =>
      cat.label.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearchQuery("");
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setSearchQuery("");
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
        <svg className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        <span>Technologies</span>
        <ChevronDown open={open} />
      </button>

      {/* Mega-menu panel (Top-Level Categories Only) */}
      {open && (
        <div
          className="fixed z-[200] rounded-3xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
          style={{
            top: "106px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(1200px, calc(100vw - 32px))",
            maxHeight: "calc(100vh - 128px)",
            background: "rgba(13, 18, 30, 0.98)",
            backdropFilter: "blur(26px)",
            WebkitBackdropFilter: "blur(26px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 35px 85px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header Banner with Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 border-b border-white/[0.08] bg-white/[0.02] flex-shrink-0">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              <div>
                <span className="text-xs font-bold text-white tracking-wide uppercase">Technology Categories</span>
                <p className="text-[11px] text-slate-400">Select a domain to browse cheat sheets, guides, and interview prep</p>
              </div>
            </div>

            {/* Quick Filter */}
            <div className="flex items-center gap-3">
              <div className="relative w-full sm:w-60">
                <svg
                  className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search categories…"
                  className="w-full pl-8.5 pr-3 py-1.5 text-xs bg-white/[0.05] border border-white/[0.08] focus:border-indigo-400/50 rounded-xl text-white placeholder:text-slate-500 outline-none transition-all"
                />
              </div>
              <span className="hidden sm:inline-flex text-[11px] font-semibold text-slate-400 bg-white/[0.05] px-3 py-1.5 rounded-xl border border-white/[0.08] whitespace-nowrap">
                {TECH_DATA.length} Categories
              </span>
            </div>
          </div>

          {/* Categories Grid (Top-Level Only) */}
          <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
            {filteredCategories.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-sm text-slate-400 font-medium">No category matches &quot;{searchQuery}&quot;</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-2 text-xs text-indigo-400 hover:text-indigo-300 underline underline-offset-4 cursor-pointer"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
                {filteredCategories.map((cat) => {
                  const totalTopics = cat.subcategories.reduce((acc, s) => acc + s.items.length, 0);
                  return (
                    <Link
                      key={cat.slug}
                      href={`/technologies/${cat.slug}`}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] hover:border-indigo-500/30 transition-all duration-150 no-underline hover:shadow-lg hover:shadow-indigo-950/40 hover:-translate-y-0.5"
                    >
                      <span className="text-2xl p-2 rounded-xl bg-white/[0.04] group-hover:bg-indigo-500/10 border border-white/[0.06] group-hover:border-indigo-500/20 flex-shrink-0 transition-colors">
                        {cat.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-slate-200 group-hover:text-white leading-tight truncate">
                          {cat.label}
                        </div>
                        <div className="text-[10px] text-slate-400 group-hover:text-indigo-300 font-medium mt-0.5 flex items-center gap-1">
                          <span>{totalTopics} topics</span>
                          <span className="text-slate-500 group-hover:text-indigo-400 transition-colors">↗</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between px-6 py-3 border-t border-white/[0.08] bg-slate-950/80 flex-shrink-0">
            <Link
              href="/technologies"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors no-underline group"
            >
              <span>Explore full Technologies directory & all 650+ cheat sheets</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <div className="hidden md:flex items-center gap-4 text-[11px] text-slate-400">
              <span>Interview Questions</span>
              <span>•</span>
              <span>Syntax Sheets</span>
              <span>•</span>
              <span>Code Snippets</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


