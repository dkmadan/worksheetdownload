"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ColoringCategory, ColoringSheet } from "@/lib/coloring";
import ColoringIllustration from "@/components/coloring/ColoringIllustration";
import PdfModal from "@/components/worksheets/PdfModal";
import BookmarkButton from "@/components/bookmarks/BookmarkButton";

interface Props {
  sheet: ColoringSheet;
  category: ColoringCategory;
}

export default function PrintableWorksheetFrame({ sheet, category }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const pdfUrl = `/worksheets/pdfs/coloring/${sheet.pdfFilename}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      {/* ── Action Control Bar (Hidden on print) ── */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <div className="flex items-center gap-3">
          <Link
            href={`/coloring-sheets/${category.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-xl transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>{category.name}</span>
          </Link>

          <span className="text-slate-300">|</span>

          <span className="text-xs font-bold text-slate-500">
            {sheet.difficulty} · {sheet.ageRange}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Bookmark Button */}
          <BookmarkButton
            item={{
              id: `/coloring-sheets/${category.slug}/${sheet.slug}`,
              url: `/coloring-sheets/${category.slug}/${sheet.slug}`,
              title: sheet.title,
              category: "Coloring Sheet",
              description: sheet.subtitle,
              badge: sheet.difficulty,
              icon: sheet.emoji,
            }}
            variant="button"
            size="sm"
          />

          {/* Quick PDF Modal Viewer */}
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>View PDF</span>
          </button>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span>Print Sheet</span>
          </button>

          {/* Direct Download PDF Button */}
          <a
            href={pdfUrl}
            download={sheet.pdfFilename}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* ── Printable Worksheet Template (Letter / A4 Page Aspect Ratio) ── */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-6 sm:p-10 max-w-3xl mx-auto printable-sheet">
        
        {/* Template Header Row */}
        <div className="flex items-start justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            {/* Logo block */}
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-xs">
              W
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-slate-900 leading-tight">
                Worksheet<span className="text-blue-600">Download</span><span className="text-slate-500 text-sm">.com</span>
              </div>
              <div className="text-[9px] font-extrabold uppercase tracking-widest text-blue-600">
                Free Printable Worksheet Generator
              </div>
            </div>
          </div>

          <div className="px-3 py-1 rounded-md border border-blue-400 bg-blue-50 text-blue-700 text-xs font-bold">
            Coloring Page
          </div>
        </div>

        {/* Blue Title Banner */}
        <div className="mt-4 bg-[#233876] text-white px-5 py-3 rounded-md shadow-xs">
          <h2 className="text-lg sm:text-xl font-black tracking-tight text-white">
            {sheet.prompt}
          </h2>
          <p className="text-xs text-blue-100 mt-0.5">
            {sheet.subtitle}
          </p>
        </div>

        {/* Student Name / Class / Date Strip */}
        <div className="mt-4 border-b border-dashed border-slate-300 pb-3 flex flex-wrap items-center justify-between text-xs font-medium text-slate-600 gap-2">
          <div>
            <span className="font-bold text-slate-800">Name:</span>{" "}
            <span className="text-slate-300">...................................................</span>
          </div>
          <div>
            <span className="font-bold text-slate-800">Class:</span>{" "}
            <span className="text-slate-300">.................................</span>
          </div>
          <div>
            <span className="font-bold text-slate-800">Date:</span>{" "}
            <span className="text-slate-300">.................................</span>
          </div>
        </div>

        {/* Sub-instruction + Decorative Sun */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">
            Use any colours you like — there&apos;s no wrong way to colour!
          </p>
          {/* Decorative outline sun */}
          <div className="w-10 h-10 flex-shrink-0">
            <svg viewBox="0 0 40 40" fill="none" stroke="#111827" strokeWidth="1.5">
              <circle cx="20" cy="20" r="7" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <line
                  key={deg}
                  x1="20"
                  y1="9"
                  x2="20"
                  y2="5"
                  transform={`rotate(${deg} 20 20)`}
                  strokeLinecap="round"
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Main Artwork Coloring Canvas Area */}
        <div className="relative my-4 aspect-square max-w-[460px] mx-auto flex items-center justify-center">
          <div className="w-full h-full p-2">
            <ColoringIllustration type={sheet.svgType} />
          </div>
        </div>

        {/* Ground Line with Grass Tufts */}
        <div className="relative w-full border-b-2 border-slate-900 mt-2 mb-6">
          <div className="absolute -top-3 left-0 right-0 flex justify-around px-4 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <svg key={i} className="w-4 h-3 text-slate-900" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M0 12 C 2 4, 4 0, 8 0 C 12 0, 14 4, 16 12" />
              </svg>
            ))}
          </div>
        </div>

        {/* Template Footer */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 pt-3">
          <div>© 2026 WorksheetDownload.com · Free to print & share</div>
          <div>Page 1 of 1</div>
        </div>
      </div>

      {/* PDF Modal */}
      <PdfModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        pdfUrl={pdfUrl}
        title={sheet.title}
      />
    </div>
  );
}
