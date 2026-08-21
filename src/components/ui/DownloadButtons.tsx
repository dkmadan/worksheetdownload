"use client";

import { useState } from "react";
import PdfModal from "@/components/worksheets/PdfModal";

interface DownloadButtonsProps {
  pdfUrl: string;
  title:  string;
}

export default function DownloadButtons({ pdfUrl, title }: DownloadButtonsProps) {
  const [showPdf, setShowPdf] = useState(false);

  function handleDownload() {
    const a = document.createElement("a");
    a.href     = pdfUrl;
    a.download = title;
    a.target   = "_blank";
    a.rel      = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <>
      <button
        onClick={() => setShowPdf(true)}
        className="flex-1 text-center bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium py-2 rounded-lg transition-colors"
      >
        View
      </button>
      <button
        onClick={handleDownload}
        className="flex-1 text-center border border-gray-200 hover:border-gray-400 text-gray-700 text-sm font-medium py-2 rounded-lg transition-colors"
      >
        Download
      </button>

      {showPdf && (
        <PdfModal
          pdfUrl={pdfUrl}
          title={title}
          isOpen={showPdf}
          onClose={() => setShowPdf(false)}
        />
      )}
    </>
  );
}
