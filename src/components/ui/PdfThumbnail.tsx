"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  pdfUrl: string;
  /** Height of the visible preview area in px (default 180) */
  previewHeight?: number;
}

export default function PdfThumbnail({ pdfUrl, previewHeight = 180 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const pdfjsLib = await import("pdfjs-dist");
        pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

        const loadingTask = pdfjsLib.getDocument({ url: pdfUrl });
        const pdf = await loadingTask.promise;
        if (cancelled) return;

        const page = await pdf.getPage(1);
        if (cancelled) return;

        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const containerWidth = container.clientWidth || 260;
        const rawViewport = page.getViewport({ scale: 1 });
        const scale = containerWidth / rawViewport.width;
        const viewport = page.getViewport({ scale });

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        await page.render({ canvasContext: ctx, viewport, canvas }).promise;
        if (!cancelled) setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    render();
    return () => {
      cancelled = true;
    };
  }, [pdfUrl]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden bg-white relative"
      style={{ height: previewHeight }}
    >
      {/* Loading skeleton */}
      {status === "loading" && (
        <div className="absolute inset-0 bg-gray-50 flex flex-col gap-2 p-4 animate-pulse">
          <div className="h-3 bg-blue-200 rounded-full w-3/4 mx-auto" />
          <div className="h-2 bg-gray-200 rounded-full w-1/2 mx-auto mt-1" />
          <div className="h-px bg-gray-200 mt-2" />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-2 mt-1">
              <div className="h-2 bg-gray-200 rounded w-4" />
              <div className="h-2 bg-gray-200 rounded flex-1" />
            </div>
          ))}
        </div>
      )}

      {/* Error fallback */}
      {status === "error" && (
        <div className="absolute inset-0 bg-gray-50 flex flex-col items-center justify-center gap-2 text-gray-300">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-xs font-medium">Preview</span>
        </div>
      )}

      {/* PDF canvas — rendered at full width, clipped to previewHeight from top */}
      <canvas
        ref={canvasRef}
        className="w-full block transition-opacity duration-300"
        style={{ opacity: status === "ready" ? 1 : 0 }}
      />
    </div>
  );
}
