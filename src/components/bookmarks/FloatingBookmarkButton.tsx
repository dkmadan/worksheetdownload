"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useBookmarks } from "@/context/BookmarkContext";
import { BookmarkCategory } from "@/types/bookmark";

function inferPageCategory(pathname: string): {
  category: BookmarkCategory;
  icon: string;
  badge: string;
} {
  if (pathname.startsWith("/grades")) {
    return { category: "Worksheet", icon: "📝", badge: "K–8 Curriculum" };
  }
  if (pathname.startsWith("/technologies")) {
    return { category: "Tech Cheat Sheet", icon: "💻", badge: "Developer Reference" };
  }
  if (pathname.startsWith("/tools")) {
    return { category: "Worksheet Generator", icon: "⚡", badge: "Generator Tool" };
  }
  if (pathname.startsWith("/knowledge")) {
    return { category: "STEM Knowledge", icon: "🔬", badge: "STEM Guide" };
  }
  if (pathname.startsWith("/maps")) {
    return { category: "Map Worksheet", icon: "🗺️", badge: "Printable Map" };
  }
  if (pathname.startsWith("/quiz")) {
    return { category: "Quiz", icon: "🎯", badge: "Interactive Quiz" };
  }
  if (pathname.startsWith("/worksheets") || pathname.startsWith("/subjects")) {
    return { category: "Worksheet", icon: "📚", badge: "Worksheet Directory" };
  }
  return { category: "Page", icon: "📌", badge: "Page" };
}

export default function FloatingBookmarkButton() {
  const pathname = usePathname();
  const { isBookmarked, toggleBookmark, setIsDrawerOpen, count } = useBookmarks();
  const [mounted, setMounted] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hide on auth callback or internal utility pages
  if (pathname.startsWith("/api") || pathname.startsWith("/quiz/start")) {
    return null;
  }

  const saved = mounted ? isBookmarked(pathname) : false;

  const handleToggleCurrent = () => {
    const { category, icon, badge } = inferPageCategory(pathname);
    const title =
      typeof document !== "undefined"
        ? document.title.replace(/\s*\|\s*WorksheetDownload.*$/i, "").trim() || "WorksheetDownload Page"
        : "WorksheetDownload Page";

    toggleBookmark({
      id: pathname,
      url: pathname,
      title,
      category,
      badge,
      icon,
    });
  };

  return (
    <aside aria-label="Quick bookmark controls" className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-2 group">
      {/* Floating Action Pill */}
      <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 shadow-2xl rounded-full transition-all hover:border-purple-500/60">
        {/* Toggle current page */}
        <button
          onClick={handleToggleCurrent}
          title={saved ? "Page is bookmarked — click to remove" : "Bookmark this page"}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
            saved
              ? "bg-purple-600 text-white shadow-md hover:bg-purple-500"
              : "text-slate-300 hover:text-white hover:bg-slate-800"
          }`}
        >
          <svg
            className={`w-4 h-4 ${saved ? "fill-white stroke-white" : "fill-none stroke-current"}`}
            viewBox="0 0 24 24"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
          <span className="hidden sm:inline">{saved ? "Saved" : "Save Page"}</span>
        </button>

        {/* View all saved bookmarks */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          title={`View all saved bookmarks (${mounted ? count : 0})`}
          className="relative flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          {mounted && count > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 text-white text-[9px] font-black rounded-full flex items-center justify-center border border-slate-900 shadow">
              {count > 9 ? "9+" : count}
            </span>
          )}
        </button>
      </div>
    </aside>
  );
}
