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
      className={`relative inline-flex items-center gap-1.5 h-9 px-3 rounded-full bg-white hover:bg-[#FAF9F5] text-[#0F1E4A] border border-[#E4E0D4] hover:border-[#1E3A8A] shadow-2xs transition-all duration-200 group cursor-pointer ${className}`}
    >
      {/* Bookmark Icon */}
      <svg
        className="w-3.5 h-3.5 text-[#1E3A8A] fill-[#ECEFF8] group-hover:scale-105 transition-transform shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>

      {/* Label */}
      {showText && (
        <span className="text-xs font-bold text-[#0F1E4A]">
          Saved
        </span>
      )}

      {/* Badge with count */}
      {mounted && count > 0 && (
        <span
          className="flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-[#1E3A8A] text-white text-[10px] font-black rounded-full shadow-xs"
          title={`${count} saved items`}
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}
