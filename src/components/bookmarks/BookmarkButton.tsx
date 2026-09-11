"use client";

import React, { useState, useEffect } from "react";
import { useBookmarks } from "@/context/BookmarkContext";
import { BookmarkCategory, BookmarkItem } from "@/types/bookmark";

interface Props {
  item: {
    id: string;
    url: string;
    title: string;
    category?: BookmarkCategory;
    description?: string;
    badge?: string;
    icon?: string;
  };
  variant?: "button" | "icon" | "pill" | "subtle" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  customText?: { save?: string; saved?: string };
}

export default function BookmarkButton({
  item,
  variant = "button",
  size = "md",
  className = "",
  customText,
}: Props) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const [mounted, setMounted] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const saved = mounted ? isBookmarked(item.id) : false;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAnimating(true);
    setTimeout(() => setAnimating(false), 400);

    toggleBookmark({
      id: item.id,
      url: item.url,
      title: item.title,
      category: item.category || "Worksheet",
      description: item.description,
      badge: item.badge,
      icon: item.icon,
    });
  };

  const saveText = customText?.save || "Save";
  const savedText = customText?.saved || "Saved";

  // Icon Only Variant
  if (variant === "icon") {
    return (
      <button
        onClick={handleClick}
        aria-label={saved ? "Remove from bookmarks" : "Save to bookmarks"}
        title={saved ? "Saved in bookmarks" : "Save bookmark"}
        className={`relative inline-flex items-center justify-center rounded-xl transition-all duration-200 cursor-pointer ${
          size === "sm" ? "w-8 h-8" : size === "lg" ? "w-11 h-11" : "w-9 h-9"
        } ${
          saved
            ? "bg-purple-600/15 text-purple-600 dark:text-purple-400 hover:bg-purple-600/25 border border-purple-500/40 shadow-xs"
            : "bg-slate-100/90 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/80"
        } ${animating ? "scale-125 transition-transform" : ""} ${className}`}
      >
        <svg
          className={`${size === "sm" ? "w-4 h-4" : size === "lg" ? "w-5 h-5" : "w-4 h-4"} ${
            saved ? "fill-purple-600 dark:fill-purple-400 stroke-purple-600 dark:stroke-purple-400" : "fill-none stroke-current"
          }`}
          viewBox="0 0 24 24"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      </button>
    );
  }

  // Pill / Tag Variant
  if (variant === "pill") {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
          saved
            ? "bg-purple-600 text-white shadow-sm hover:bg-purple-700"
            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
        } ${animating ? "scale-105" : ""} ${className}`}
      >
        <svg
          className={`w-3.5 h-3.5 ${
            saved ? "fill-white stroke-white" : "fill-none stroke-current"
          }`}
          viewBox="0 0 24 24"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
        <span>{saved ? savedText : saveText}</span>
      </button>
    );
  }

  // Dark variant (for tech dark pages)
  if (variant === "dark") {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
          saved
            ? "bg-purple-600 text-white border border-purple-500 shadow-md shadow-purple-600/20 hover:bg-purple-500"
            : "bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 hover:border-slate-600"
        } ${animating ? "scale-105" : ""} ${className}`}
      >
        <svg
          className={`w-4 h-4 ${
            saved ? "fill-white stroke-white" : "fill-none stroke-current"
          }`}
          viewBox="0 0 24 24"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
        <span>{saved ? savedText : saveText}</span>
      </button>
    );
  }

  // Default Full Button Variant
  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
        size === "sm"
          ? "px-3 py-1.5 text-xs"
          : size === "lg"
          ? "px-5 py-3 text-sm"
          : "px-4 py-2 text-xs"
      } ${
        saved
          ? "bg-purple-600 text-white shadow-md shadow-purple-600/20 hover:bg-purple-700 border border-purple-600"
          : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-2xs hover:border-slate-300"
      } ${animating ? "scale-105" : ""} ${className}`}
    >
      <svg
        className={`w-4 h-4 ${
          saved ? "fill-white stroke-white" : "fill-none stroke-current text-purple-600"
        }`}
        viewBox="0 0 24 24"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
      <span>{saved ? savedText : saveText}</span>
    </button>
  );
}
