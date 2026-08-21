"use client";

import { useState } from "react";

interface Props {
  type: string;
  icon: string;
  label: string;
  description: string;
  pdfUrl: string;
  techName: string;
  filename: string;
}

export default function TechResourceTile({
  type,
  icon,
  label,
  description,
  pdfUrl,
  techName,
  filename,
}: Props) {
  const [viewOpen, setViewOpen] = useState(false);

  function handleDownload() {
    const a = document.createElement("a");
    a.href     = pdfUrl;
    a.download = filename;
    a.target   = "_blank";
    a.rel      = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <>
      {/* Tile */}
      <div className="flex flex-col bg-gray-800/60 border border-gray-700/60 rounded-2xl overflow-hidden hover:border-gray-500/70 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/30">

        {/* ── PDF Thumbnail illustration (works on all devices) ── */}
        <div className="relative overflow-hidden flex-shrink-0" style={{ height: "320px" }}>

          {type === "cheatsheet" ? (
            /* Cheatsheet — dark code-editor look matching actual PDF style */
            <div className="absolute inset-0 bg-slate-950 p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-bold text-blue-400 tracking-wide">WorksheetDownload.com</span>
                <span className="text-[7px] text-slate-500 truncate ml-2 max-w-[40%]">{techName}</span>
              </div>
              <div className="h-px bg-blue-600/40" />
              <p className="text-[9px] font-bold text-white text-center mb-1 truncate">{techName} — Cheatsheet</p>
              <div className="grid grid-cols-3 gap-1.5 flex-1">
                {[
                  { hue: "bg-blue-600/80" },
                  { hue: "bg-emerald-600/80" },
                  { hue: "bg-purple-600/80" },
                  { hue: "bg-orange-600/80" },
                  { hue: "bg-blue-600/80" },
                  { hue: "bg-teal-600/80" },
                  { hue: "bg-rose-600/80" },
                  { hue: "bg-indigo-600/80" },
                  { hue: "bg-emerald-600/80" },
                  { hue: "bg-amber-600/80" },
                  { hue: "bg-cyan-600/80" },
                  { hue: "bg-purple-600/80" },
                ].map((sec, i) => (
                  <div key={i} className="bg-slate-800/80 rounded overflow-hidden flex flex-col">
                    <div className={`${sec.hue} px-1.5 py-1 flex-shrink-0`}>
                      <div className="h-1 bg-white/50 rounded w-3/4" />
                    </div>
                    <div className="p-1.5 flex flex-col gap-1 flex-1">
                      <div className="h-1 bg-slate-600 rounded w-full" />
                      <div className="h-1 bg-slate-600 rounded w-4/5" />
                      <div className="h-1 bg-slate-700 rounded w-3/5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          ) : type === "interview" ? (
            /* Interview sheet — Q&A format */
            <div className="absolute inset-0 bg-gray-50 p-4 flex flex-col gap-1.5">
              <span className="text-[7px] font-bold text-blue-700 tracking-wide">WorksheetDownload.com</span>
              <div className="h-px bg-blue-500" />
              <p className="text-[9px] font-bold text-blue-900 text-center truncate">{techName} — Interview Sheet</p>
              <div className="flex flex-col gap-2.5 mt-2 flex-1 overflow-hidden">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex items-start gap-1.5">
                      <span className="text-[6px] font-bold bg-orange-500 text-white rounded px-1 py-px flex-shrink-0 leading-none pt-0.5">Q{i + 1}</span>
                      <div className="h-1.5 bg-gray-200 rounded flex-1 mt-0.5" />
                    </div>
                    <div className="ml-5 flex flex-col gap-0.5">
                      <div className="h-px bg-gray-200" />
                      <div className="h-px bg-gray-100" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          ) : (
            /* Practice worksheet — exercise format */
            <div className="absolute inset-0 bg-white p-4 flex flex-col gap-1.5">
              <span className="text-[7px] font-bold text-blue-700 tracking-wide">WorksheetDownload.com</span>
              <div className="h-px bg-blue-500" />
              <p className="text-[9px] font-bold text-blue-900 text-center truncate">{techName} Practice</p>
              <div className="flex text-[5.5px] text-gray-400 mt-0.5">
                <span>Name: _______________</span>
                <span className="ml-auto">Date: ________</span>
              </div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-2 flex-1 mt-1 overflow-hidden">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="text-[5.5px] font-bold bg-blue-100 text-blue-600 rounded-full w-3.5 h-3.5 flex items-center justify-center flex-shrink-0 leading-none">{i + 1}</span>
                    <div className="flex-1 space-y-1">
                      <div className="h-px bg-gray-200" />
                      <div className="h-px bg-gray-100" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-[5.5px] text-gray-400">Score: _______ / 10</div>
            </div>
          )}

          {/* Type badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-gray-950/75 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
            <span>{icon}</span>
            {label}
          </div>
        </div>

        {/* ── Info ── */}
        <div className="flex flex-col flex-1 p-5 gap-4">
          <div>
            <h3 className="text-base font-bold text-white mb-1.5">
              {techName} — {label}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
          </div>

          {/* ── Actions ── */}
          <div className="flex gap-3 mt-auto">
            <button
              onClick={() => setViewOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </button>
          </div>
        </div>
      </div>

      {/* ── PDF View Modal ── */}
      {viewOpen && (
        <div
          className="fixed inset-0 z-[300] bg-black/85 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setViewOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl flex flex-col rounded-2xl overflow-hidden bg-gray-900 border border-gray-700"
            style={{ height: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-700 flex-shrink-0 bg-gray-900">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-lg">{icon}</span>
                <span className="font-semibold text-white text-sm truncate">
                  {techName} — {label}
                </span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 bg-blue-600/15 hover:bg-blue-600/25 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </button>
                <button
                  onClick={() => setViewOpen(false)}
                  className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            {/* PDF frame */}
            <iframe
              src={pdfUrl}
              title={`${techName} ${label}`}
              className="flex-1 w-full"
              style={{ border: "none" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
