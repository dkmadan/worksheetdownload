"use client";

import { useState } from "react";
import PdfModal from "./PdfModal";

interface ViewPdfButtonProps {
  pdfUrl: string;
  title: string;
}

export default function ViewPdfButton({ pdfUrl, title }: ViewPdfButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex-1 text-center bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium py-2 rounded-lg transition-colors"
      >
        View
      </button>
      <PdfModal
        pdfUrl={pdfUrl}
        title={title}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
