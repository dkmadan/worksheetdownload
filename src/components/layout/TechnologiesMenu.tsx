"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { TECH_DATA } from "@/lib/technologies";
import type { TechCategory } from "@/lib/technologies";

export { TECHNOLOGIES, slugifyTech } from "@/lib/technologies";

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

export default function TechnologiesMenu() {
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

  const totalItems = activeCat.subcategories.reduce(
    (sum, s) => sum + s.items.length,
    0
  );

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-gray-900 ${
          open ? "text-gray-900" : "text-gray-600"
        }`}
      >
        Technologies
        <ChevronDown open={open} />
      </button>

      {/* Mega-menu panel */}
      {open && (
        <div
          className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 z-[200]
                     bg-gray-950 rounded-2xl shadow-2xl border border-gray-800
                     w-[920px] max-w-[96vw] flex overflow-hidden"
          style={{ boxShadow: "0 30px 70px rgba(0,0,0,0.45)" }}
        >
          {/* ── LEFT: category list ── */}
          <div className="w-52 flex-shrink-0 border-r border-gray-800 py-2 overflow-y-auto max-h-[520px]">
            <p className="px-4 pt-2 pb-3 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
              37 Categories
            </p>
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
                  className={`w-full text-left px-3 py-2 flex items-center gap-2 text-xs transition-colors rounded-lg mx-1 ${
                    isActive
                      ? "bg-gray-800 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/60"
                  }`}
                  style={{ width: "calc(100% - 8px)" }}
                >
                  <span className="text-base leading-none flex-shrink-0">{cat.icon}</span>
                  <span className="truncate font-medium">{cat.label}</span>
                  {isActive && (
                    <svg className="w-3 h-3 ml-auto flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>

          {/* ── RIGHT: tech items panel ── */}
          <div className="flex-1 flex flex-col min-w-0 max-h-[520px]">
            {/* Panel header */}
            <div className={`flex items-center justify-between px-5 py-3.5 bg-gradient-to-r ${activeCat.color} flex-shrink-0`}>
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{activeCat.icon}</span>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">{activeCat.label}</p>
                  <p className="text-white/60 text-xs">{totalItems} technologies</p>
                </div>
              </div>
              <Link
                href={`/technologies/${activeCat.slug}`}
                onClick={() => setOpen(false)}
                className="text-xs text-white/80 hover:text-white font-semibold bg-white/10 hover:bg-white/20 rounded-full px-3 py-1 transition-colors flex-shrink-0"
              >
                View all →
              </Link>
            </div>

            {/* Subcategory sections */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              {activeCat.subcategories.map((sub) => (
                <div key={sub.name}>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                    {sub.name}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {sub.items.map((tech) => (
                      <Link
                        key={tech.slug}
                        href={`/technologies/${activeCat.slug}/${tech.slug}`}
                        onClick={() => setOpen(false)}
                        className="px-2.5 py-1 rounded-md text-xs text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white border border-gray-700/50 hover:border-gray-600 transition-all duration-100"
                      >
                        {tech.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-gray-800 flex-shrink-0">
              <p className="text-[11px] text-gray-600">
                {activeCat.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
