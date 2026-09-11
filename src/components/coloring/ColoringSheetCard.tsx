"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ColoringSheet } from "@/lib/coloring";
import ColoringIllustration from "@/components/coloring/ColoringIllustration";
import PdfModal from "@/components/worksheets/PdfModal";
import BookmarkButton from "@/components/bookmarks/BookmarkButton";

interface ColoringSheetCardProps {
  sheet: ColoringSheet;
}

export default function ColoringSheetCard({ sheet }: ColoringSheetCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const pdfUrl = `/worksheets/pdfs/coloring/${sheet.pdfFilename}`;
  const sheetHref = `/coloring-sheets/${sheet.categoryId}/${sheet.slug}`;

  const difficultyColors = {
    Easy: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Medium: "bg-amber-50 text-amber-700 border-amber-200",
    Advanced: "bg-purple-50 text-purple-700 border-purple-200",
  };

  return (
    <>
      <div className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden">
        
        {/* Header Preview Banner / Canvas */}
        <Link
          href={sheetHref}
          className="relative aspect-4/3 bg-slate-50 border-b border-slate-100 flex items-center justify-center p-4 overflow-hidden group-hover:bg-amber-50/20 transition-colors"
        >
          {/* Subtle dotted sheet background */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />

          {/* SVG Outline Illustration */}
          <div className="relative z-10 w-44 h-44 drop-shadow-sm group-hover:scale-108 transition-transform duration-300">
            <ColoringIllustration type={sheet.svgType} />
          </div>

          {/* Category Pill */}
          <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 text-[11px] font-bold text-slate-700 shadow-2xs">
            <span>{sheet.emoji}</span>
            <span>{sheet.categoryName}</span>
          </div>

          {/* Quick Bookmark Button */}
          <div className="absolute top-3 right-3 z-20">
            <BookmarkButton
              item={{
                id: sheetHref,
                url: sheetHref,
                title: sheet.title,
                category: "Coloring Sheet",
                description: sheet.subtitle,
                badge: sheet.difficulty,
                icon: sheet.emoji,
              }}
              variant="icon"
              size="sm"
            />
          </div>

          {/* Age tag */}
          <div className="absolute bottom-3 right-3 z-20 px-2 py-0.5 rounded-md bg-slate-900/70 backdrop-blur-md text-[10px] font-bold text-white tracking-wide">
            {sheet.ageRange}
          </div>
        </Link>

        {/* Content Body */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                  difficultyColors[sheet.difficulty]
                }`}
              >
                {sheet.difficulty}
              </span>
              <span className="text-xs text-slate-400">· Printable Sheet</span>
            </div>

            <Link href={sheetHref} className="block group-hover:text-blue-600 transition-colors">
              <h3 className="font-extrabold text-slate-900 text-base leading-snug line-clamp-1">
                {sheet.title}
              </h3>
            </Link>

            <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
              {sheet.subtitle}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
            <button
              onClick={() => setModalOpen(true)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>Quick View</span>
            </button>

            <a
              href={pdfUrl}
              download={sheet.pdfFilename}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* PDF Modal */}
      <PdfModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        pdfUrl={pdfUrl}
        title={sheet.title}
      />
    </>
  );
}
