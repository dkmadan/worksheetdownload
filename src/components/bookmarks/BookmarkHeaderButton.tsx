"use client";

import React, { useState, useEffect } from "react";
import { useBookmarks } from "@/context/BookmarkContext";

interface Props {
  className?: string;
  showText?: boolean;
}

export default function BookmarkHeaderButton({ className = "", showText = true }: Props) {
  const { count, setIsDrawerOpen } = useBookmarks();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={() => setIsDrawerOpen(true)}
      aria-label={`View saved bookmarks (${mounted ? count : 0})`}
      className={`relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700/90 hover:border-purple-500/50 shadow-sm transition-all duration-200 group cursor-pointer ${className}`}
    >
      {/* Bookmark Icon */}
      <svg
        className="w-4 h-4 text-purple-300 group-hover:text-purple-200 transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.2}
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>

      {/* Label */}
      {showText && (
        <span className="text-xs font-semibold text-slate-100 tracking-wide">
          Saved
        </span>
      )}

      {/* Badge with count */}
      {mounted && count > 0 && (
        <span
          className="absolute -top-1.5 -right-1.5 min-w-[20px] h-[20px] px-1 bg-purple-600 group-hover:bg-purple-500 text-white text-[11px] font-extrabold rounded-full flex items-center justify-center shadow-lg border-2 border-slate-900 animate-in zoom-in-75 duration-200"
          title={`${count} saved items`}
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}
