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

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 hover:bg-slate-100 hover:text-slate-900 ${
          open ? "text-slate-900 bg-slate-100" : "text-slate-600"
        }`}
      >
        Technologies
        <ChevronDown open={open} />
      </button>

      {/* Mega-menu panel */}
      {open && (
        <div
          className="fixed z-[200] rounded-2xl overflow-hidden"
          style={{
            top: "56px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(960px, calc(100vw - 32px))",
            background: "#111317",
            border: "1px solid #1f2127",
            boxShadow: "0 30px 70px rgba(0,0,0,0.5)",
          }}
        >
          {/* ── Category tabs ── */}
          <div
            className="flex overflow-x-auto"
            style={{
              background: "#0d0f12",
              borderBottom: "1px solid #1f2127",
              padding: "10px 16px 0",
              gap: "3px",
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
                  className="flex items-center gap-1.5 text-xs font-medium whitespace-nowrap flex-shrink-0 transition-colors duration-100"
                  style={{
                    padding: "8px 12px 9px",
                    borderRadius: "8px 8px 0 0",
                    border: isActive ? "1px solid #1f2127" : "1px solid transparent",
                    borderBottom: isActive ? "1px solid #111317" : "1px solid transparent",
                    color: isActive ? "#e5e7eb" : "#6b7280",
                    background: isActive ? "#111317" : "transparent",
                    position: "relative",
                    top: "1px",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  <span style={{ fontSize: "13px", lineHeight: 1 }}>{cat.icon}</span>
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* ── Panel ── */}
          <div style={{ maxHeight: "460px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            {/* Panel header */}
            <div
              className="flex items-center justify-between flex-shrink-0"
              style={{ padding: "13px 20px", borderBottom: "1px solid #1f2127", background: "#0f1114" }}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span style={{ fontSize: "18px", flexShrink: 0 }}>{activeCat.icon}</span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-200 leading-tight">{activeCat.label}</p>
                  <p className="text-[11px] text-gray-600 truncate" style={{ maxWidth: "520px" }}>
                    {activeCat.description}
                  </p>
                </div>
              </div>
              <Link
                href={`/technologies/${activeCat.slug}`}
                onClick={() => setOpen(false)}
                className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors flex-shrink-0 ml-6"
              >
                View all technologies →
              </Link>
            </div>

            {/* Subcategory sections */}
            <div className="flex-1 overflow-y-auto" style={{ padding: "18px 20px" }}>
              {activeCat.subcategories.map((sub) => (
                <div key={sub.name} style={{ marginBottom: "20px" }}>
                  {/* Subcategory label + extending rule */}
                  <div
                    className="flex items-center gap-2 mb-2"
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#6366f1",
                    }}
                  >
                    {sub.name}
                    <div style={{ flex: 1, height: "1px", background: "#1e1f3a" }} />
                  </div>
                  {/* 4-column item grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4, 1fr)",
                      gap: "1px 0",
                    }}
                  >
                    {sub.items.map((tech) => (
                      <Link
                        key={tech.slug}
                        href={`/technologies/${activeCat.slug}/${tech.slug}`}
                        onClick={() => setOpen(false)}
                        className="text-xs text-gray-400 hover:text-gray-100 hover:underline transition-colors py-1 block"
                      >
                        {tech.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
