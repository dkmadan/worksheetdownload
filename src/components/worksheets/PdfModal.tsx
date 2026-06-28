"use client";

import { useEffect } from "react";

interface PdfModalProps {
  pdfUrl: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function PdfModal({ pdfUrl, title, isOpen, onClose }: PdfModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900 truncate">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-xl leading-none ml-4 transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <iframe
          src={pdfUrl}
          title={title}
          className="w-full h-[70vh]"
        />
      </div>
    </div>
  );
}
