"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import { TECH_DATA } from "@/lib/technologies";
import type { TechCategory } from "@/lib/technologies";

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
  const [activeSlug, setActiveSlug] = useState(TECH_DATA[0].slug);
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return TECH_DATA;
    const q = searchQuery.toLowerCase().trim();
    return TECH_DATA.filter(
      (cat) =>
        cat.label.toLowerCase().includes(q) ||
        cat.subcategories.some(
          (sub) =>
            sub.name.toLowerCase().includes(q) ||
            sub.items.some((item) => item.name.toLowerCase().includes(q))
        )
    );
  }, [searchQuery]);

  const activeCat: TechCategory =
    TECH_DATA.find((c) => c.slug === activeSlug) ?? filteredCategories[0] ?? TECH_DATA[0];

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

      {/* Mega-menu panel */}
      {open && (
        <div
          className="fixed z-[200] rounded-3xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
          style={{
            top: "106px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(1120px, calc(100vw - 32px))",
            height: "540px",
            background: "rgba(13, 18, 30, 0.98)",
            backdropFilter: "blur(26px)",
            WebkitBackdropFilter: "blur(26px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 35px 85px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top Header Banner */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-white/[0.08] bg-white/[0.02] flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              <div>
                <span className="text-xs font-bold text-white tracking-wide uppercase">Developer Technology Cheatsheets</span>
                <p className="text-[11px] text-slate-400">Quick syntax reference, interview prep, and practice sheets</p>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-slate-400 bg-white/[0.05] px-3 py-1 rounded-full border border-white/[0.08]">
              {TECH_DATA.length} Domains · 650+ Frameworks
            </span>
          </div>

          {/* Main Two-Column Body */}
          <div className="flex flex-1 min-h-0 overflow-hidden divide-x divide-white/[0.07]">

            {/* ── Left Sidebar: Category List with Search ─────────────────── */}
            <div className="w-[300px] flex-shrink-0 flex flex-col bg-slate-950/50">
              {/* Sidebar Search Filter */}
              <div className="p-3 border-b border-white/[0.06]">
                <div className="relative">
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
                    placeholder="Filter domains…"
                    className="w-full pl-8.5 pr-3 py-1.5 text-xs bg-white/[0.05] border border-white/[0.08] focus:border-indigo-400/50 rounded-xl text-white placeholder:text-slate-500 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Scrollable Category List */}
              <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-thin">
                {filteredCategories.length === 0 ? (
                  <p className="text-xs text-slate-500 p-4 text-center">No categories found</p>
                ) : (
                  filteredCategories.map((cat) => {
                    const isActive = cat.slug === activeCat.slug;
                    const totalItems = cat.subcategories.reduce((acc, s) => acc + s.items.length, 0);
                    return (
                      <button
                        key={cat.slug}
                        onMouseEnter={() => setActiveSlug(cat.slug)}
                        onClick={() => {
                          setActiveSlug(cat.slug);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all duration-150 cursor-pointer group ${
                          isActive
                            ? "bg-gradient-to-r from-indigo-600/30 to-indigo-600/10 border border-indigo-500/30 text-white shadow-xs"
                            : "hover:bg-white/[0.05] text-slate-300 hover:text-white border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-base leading-none flex-shrink-0">{cat.icon}</span>
                          <div className="min-w-0">
                            <div className="text-xs font-bold leading-tight truncate">{cat.label}</div>
                            <div className="text-[10px] text-slate-400">{totalItems} topics</div>
                          </div>
                        </div>
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-150 ${
                            isActive ? "text-indigo-400 translate-x-0.5" : "text-slate-600 opacity-0 group-hover:opacity-100"
                          }`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            {/* ── Right Content: Active Category Subcategories & Tech Grid ── */}
            <div className="flex-1 flex flex-col min-w-0 bg-slate-900/40">
              {/* Category Top Banner */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.07] bg-white/[0.02] flex-shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-2xl flex-shrink-0 p-2 rounded-2xl bg-white/[0.06] border border-white/10">{activeCat.icon}</span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-white leading-tight flex items-center gap-2">
                      <span>{activeCat.label}</span>
                      <span className="text-[10px] font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                        {activeCat.subcategories.reduce((acc, s) => acc + s.items.length, 0)} Cheatsheets
                      </span>
                    </h3>
                    <p className="text-[11px] text-slate-400 line-clamp-1 max-w-[500px] mt-0.5">
                      {activeCat.description}
                    </p>
                  </div>
                </div>
                <Link
                  href={`/technologies/${activeCat.slug}`}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 px-3.5 py-1.5 rounded-xl transition-all flex-shrink-0 ml-4 group"
                >
                  <span>View All Hub</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
              </div>

              {/* Subcategories & Items Scroll Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-5 scrollbar-thin">
                {activeCat.subcategories.map((sub) => (
                  <div key={sub.name} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 shadow-2xs">
                    {/* Subcategory Heading */}
                    <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-white/[0.05]">
                      <span className="text-[11px] font-bold tracking-wider uppercase text-indigo-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <span>{sub.name}</span>
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        {sub.items.length} items
                      </span>
                    </div>

                    {/* Tech items grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                      {sub.items.map((tech) => (
                        <Link
                          key={tech.slug}
                          href={`/technologies/${activeCat.slug}/${tech.slug}/resources`}
                          onClick={() => setOpen(false)}
                          className="group/item flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] hover:border-indigo-400/40 transition-all no-underline"
                        >
                          <span className="text-xs font-medium text-slate-300 group-hover/item:text-white truncate">
                            {tech.name}
                          </span>
                          <span className="text-[10px] text-slate-500 group-hover/item:text-indigo-400 opacity-0 group-hover/item:opacity-100 transition-opacity pl-1">
                            ↗
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-3 border-t border-white/[0.08] bg-slate-950/80 flex-shrink-0">
            <Link
              href="/technologies"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors no-underline group"
            >
              <span>Explore all 35 technology categories & developer roadmaps</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <div className="flex items-center gap-4 text-[11px] text-slate-400">
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


