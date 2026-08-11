"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { TECHNOLOGIES, slugifyTech } from "@/lib/technologies";

export { TECHNOLOGIES, slugifyTech };

const COL_COUNT = 4;
const perCol = Math.ceil(TECHNOLOGIES.length / COL_COUNT);
const COLUMNS = Array.from({ length: COL_COUNT }, (_, i) =>
  TECHNOLOGIES.slice(i * perCol, (i + 1) * perCol)
);

export default function TechnologiesMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
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
        className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-gray-900 ${
          open ? "text-gray-900" : "text-gray-600"
        }`}
      >
        Technologies
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Mega-menu dropdown */}
      {open && (
        <div
          className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 z-[200]
                     bg-gray-950 text-white rounded-2xl shadow-2xl border border-gray-800
                     p-6 w-[780px] max-w-[95vw]"
          style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.4)" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-white">Technologies</span>
              <span className="text-xs text-gray-500 ml-1">{TECHNOLOGIES.length} topics</span>
            </div>
            <Link
              href="/technologies"
              onClick={() => setOpen(false)}
              className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              View all →
            </Link>
          </div>

          {/* 4-column grid */}
          <div className="grid grid-cols-4 gap-x-6 gap-y-0.5">
            {COLUMNS.map((col, ci) => (
              <div key={ci} className="flex flex-col">
                {col.map((tech) => (
                  <Link
                    key={tech}
                    href={`/technologies/${slugifyTech(tech)}`}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-gray-300
                               hover:text-white hover:bg-gray-800 transition-all duration-100"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-blue-400 flex-shrink-0 transition-colors" />
                    {tech}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
