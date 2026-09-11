"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useBookmarks } from "@/context/BookmarkContext";
import { BookmarkCategory, BookmarkItem } from "@/types/bookmark";

const CATEGORIES: { label: string; value: BookmarkCategory | "All"; icon: string }[] = [
  { label: "All Items", value: "All", icon: "📑" },
  { label: "Worksheets", value: "Worksheet", icon: "📝" },
  { label: "Tech Cheat Sheets", value: "Tech Cheat Sheet", icon: "💻" },
  { label: "Generators", value: "Worksheet Generator", icon: "⚡" },
  { label: "Knowledge Hub", value: "STEM Knowledge", icon: "🔬" },
  { label: "Maps", value: "Map Worksheet", icon: "🗺️" },
  { label: "Quizzes", value: "Quiz", icon: "🎯" },
];

export default function SavedBookmarksModal() {
  const { bookmarks, count, removeBookmark, clearBookmarks, isDrawerOpen, setIsDrawerOpen } =
    useBookmarks();
  const [activeCategory, setActiveCategory] = useState<BookmarkCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!isDrawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isDrawerOpen]);

  const filteredBookmarks = useMemo(() => {
    return bookmarks.filter((item) => {
      const matchCategory =
        activeCategory === "All" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        (item.badge && item.badge.toLowerCase().includes(q)) ||
        item.category.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [bookmarks, activeCategory, searchQuery]);

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[350] flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Slide-over panel */}
      <div className="relative w-full max-w-lg bg-slate-900 border-l border-slate-800 shadow-2xl z-10 flex flex-col h-full animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-white">Saved Bookmarks</h2>
                <span className="bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {count}
                </span>
              </div>
              <p className="text-xs text-slate-400">Your personal library of worksheets & guides</p>
            </div>
          </div>

          <button
            onClick={() => setIsDrawerOpen(false)}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close saved drawer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 border-b border-slate-800 bg-slate-950/40 flex flex-col gap-3">
          {/* Search input */}
          <div className="relative">
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search saved items..."
              className="w-full bg-slate-800/80 border border-slate-700/80 rounded-xl pl-9 pr-8 py-2 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.value;
              const catCount =
                cat.value === "All"
                  ? count
                  : bookmarks.filter((b) => b.category === cat.value).length;

              if (cat.value !== "All" && catCount === 0 && activeCategory !== cat.value) {
                return null;
              }

              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-all text-xs ${
                    isActive
                      ? "bg-purple-600 text-white shadow-sm"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/50"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-purple-700 text-white" : "bg-slate-700 text-slate-400"
                    }`}
                  >
                    {catCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5 divide-y divide-slate-800/0">
          {filteredBookmarks.length > 0 ? (
            filteredBookmarks.map((item) => (
              <div
                key={item.id}
                className="group p-3.5 rounded-2xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-purple-500/40 transition-all flex items-start justify-between gap-3 shadow-sm"
              >
                <Link
                  href={item.url}
                  onClick={() => setIsDrawerOpen(false)}
                  className="flex-1 min-w-0 flex flex-col gap-1"
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs px-2 py-0.5 rounded-md font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {item.icon || "📌"} {item.category}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md font-medium bg-slate-700 text-slate-300">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  <span className="text-[10px] text-slate-500 mt-1">
                    Saved on {new Date(item.savedAt).toLocaleDateString()}
                  </span>
                </Link>

                {/* Actions */}
                <div className="flex items-center gap-1.5 flex-shrink-0 pt-1">
                  <Link
                    href={item.url}
                    onClick={() => setIsDrawerOpen(false)}
                    className="p-1.5 rounded-lg bg-slate-700 hover:bg-purple-600 text-slate-300 hover:text-white transition-colors"
                    title="Open Worksheet"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                  <button
                    onClick={() => removeBookmark(item.id)}
                    className="p-1.5 rounded-lg bg-slate-700/60 hover:bg-rose-600/80 text-slate-400 hover:text-white transition-colors"
                    title="Remove from saved"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 px-4 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-3xl mb-4">
                🔖
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                {searchQuery ? "No matching saved items" : "No saved worksheets yet"}
              </h3>
              <p className="text-xs text-slate-400 max-w-xs mb-6">
                {searchQuery
                  ? "Try adjusting your search terms or category filters."
                  : "Click the 'Bookmark' or 'Save' button on any worksheet, tech sheet, or generator to build your personal collection!"}
              </p>

              {!searchQuery && (
                <div className="w-full flex flex-col gap-2 max-w-xs">
                  <Link
                    href="/grades"
                    onClick={() => setIsDrawerOpen(false)}
                    className="w-full py-2 px-3 text-xs font-semibold text-center rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition-colors"
                  >
                    Browse K–8 Worksheets
                  </Link>
                  <Link
                    href="/technologies"
                    onClick={() => setIsDrawerOpen(false)}
                    className="w-full py-2 px-3 text-xs font-semibold text-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                  >
                    Explore Tech Cheat Sheets
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {count > 0 && (
          <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              {filteredBookmarks.length} of {count} items showing
            </span>

            {showClearConfirm ? (
              <div className="flex items-center gap-2">
                <span className="text-xs text-rose-400">Clear all?</span>
                <button
                  onClick={() => {
                    clearBookmarks();
                    setShowClearConfirm(false);
                  }}
                  className="px-2.5 py-1 text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white rounded-lg transition-colors"
                >
                  Yes, Clear
                </button>
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="px-2 py-1 text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowClearConfirm(true)}
                className="text-xs text-slate-400 hover:text-rose-400 transition-colors flex items-center gap-1"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Clear all
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
