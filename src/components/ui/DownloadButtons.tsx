"use client";

import { useState, useRef } from "react";
import { useSession } from "next-auth/react";
import AuthModal from "@/components/auth/AuthModal";
import PdfModal from "@/components/worksheets/PdfModal";

const STORAGE_KEY = "wsd_dl_count";
const FREE_LIMIT  = 1; // downloads allowed before auth prompt

interface DownloadButtonsProps {
  pdfUrl: string;
  title:  string;
}

export default function DownloadButtons({ pdfUrl, title }: DownloadButtonsProps) {
  const { data: session }   = useSession();
  const [showAuth, setShowAuth] = useState(false);
  const [showPdf,  setShowPdf]  = useState(false);
  const pendingFn = useRef<(() => void) | null>(null);

  function gate(action: () => void) {
    // Logged-in users: unlimited, no tracking needed
    if (session) {
      action();
      return;
    }

    const count = parseInt(sessionStorage.getItem(STORAGE_KEY) ?? "0", 10);

    if (count >= FREE_LIMIT) {
      // 2nd+ attempt while not logged in — show auth wall
      pendingFn.current = action;
      setShowAuth(true);
      return;
    }

    // First download: allow and record
    sessionStorage.setItem(STORAGE_KEY, String(count + 1));
    action();
  }

  function onAuthSuccess() {
    setShowAuth(false);
    const fn = pendingFn.current;
    pendingFn.current = null;
    fn?.();
  }

  function handleView() {
    gate(() => setShowPdf(true));
  }

  function handleDownload() {
    gate(() => {
      const a = document.createElement("a");
      a.href   = pdfUrl;
      a.download = title;
      a.target   = "_blank";
      a.rel      = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }

  return (
    <>
      <button
        onClick={handleView}
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

      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onSuccess={onAuthSuccess}
          message="Sign in for unlimited free worksheet downloads."
        />
      )}
    </>
  );
}
