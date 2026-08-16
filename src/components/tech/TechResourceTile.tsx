"use client";

import { useState, useRef } from "react";
import { useSession } from "next-auth/react";
import AuthModal from "@/components/auth/AuthModal";

const STORAGE_KEY = "wsd_dl_count";
const FREE_LIMIT  = 1;

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
  const { data: session } = useSession();
  const [viewOpen,  setViewOpen]  = useState(false);
  const [showAuth,  setShowAuth]  = useState(false);
  const pendingFn = useRef<(() => void) | null>(null);

  function gate(action: () => void) {
    if (session) { action(); return; }
    const count = parseInt(sessionStorage.getItem(STORAGE_KEY) ?? "0", 10);
    if (count >= FREE_LIMIT) {
      pendingFn.current = action;
      setShowAuth(true);
      return;
    }
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
    gate(() => setViewOpen(true));
  }

  function handleDownload() {
    gate(() => {
      const a = document.createElement("a");
      a.href     = pdfUrl;
      a.download = filename;
      a.target   = "_blank";
      a.rel      = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }

  return (
    <>
      {/* Tile */}
      <div className="flex flex-col bg-gray-800/60 border border-gray-700/60 rounded-2xl overflow-hidden hover:border-gray-500/70 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/30">

        {/* ── PDF Thumbnail ── */}
        <div
          className="relative overflow-hidden bg-gray-900 flex-shrink-0"
          style={{ height: "320px" }}
        >
          {/* Scaled-down iframe shows the actual PDF first page */}
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            title={`${techName} ${label} preview`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "200%",
              height: "200%",
              transform: "scale(0.5)",
              transformOrigin: "0 0",
              border: "none",
              pointerEvents: "none",
              background: "#fff",
            }}
          />
          {/* Transparent overlay — keeps tile clickable without interacting with iframe */}
          <div className="absolute inset-0" />
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
              onClick={handleView}
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

      {/* ── Auth gate modal ── */}
      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onSuccess={onAuthSuccess}
          message="Sign in for unlimited free resource downloads."
        />
      )}

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
