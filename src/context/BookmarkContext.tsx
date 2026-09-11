"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { BookmarkItem, BookmarkCategory } from "@/types/bookmark";

const STORAGE_KEY = "worksheetdownload_bookmarks_v1";

interface BookmarkContextType {
  bookmarks: BookmarkItem[];
  count: number;
  isBookmarked: (idOrUrl: string) => boolean;
  addBookmark: (item: Omit<BookmarkItem, "savedAt">) => void;
  removeBookmark: (idOrUrl: string) => void;
  toggleBookmark: (item: Omit<BookmarkItem, "savedAt">) => boolean;
  clearBookmarks: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  toast: { message: string; type: "add" | "remove" } | null;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "add" | "remove" } | null>(null);
  const [hasHydrated, setHasHydrated] = useState(false);

  // Load bookmarks from localStorage on initial mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setBookmarks(parsed);
        }
      }
    } catch (err) {
      console.warn("Failed to load bookmarks from localStorage:", err);
    } finally {
      setHasHydrated(true);
    }
  }, []);

  // Sync to localStorage whenever bookmarks change (after hydration)
  useEffect(() => {
    if (!hasHydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
    } catch (err) {
      console.warn("Failed to save bookmarks to localStorage:", err);
    }
  }, [bookmarks, hasHydrated]);

  // Listen for storage changes across tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          if (Array.isArray(parsed)) {
            setBookmarks(parsed);
          }
        } catch {
          // ignore
        }
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const showToast = useCallback((message: string, type: "add" | "remove") => {
    setToast({ message, type });
    const timer = setTimeout(() => {
      setToast((cur) => (cur?.message === message ? null : cur));
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const isBookmarked = useCallback(
    (idOrUrl: string) => {
      const normalized = idOrUrl.toLowerCase().trim();
      return bookmarks.some(
        (b) => b.id.toLowerCase() === normalized || b.url.toLowerCase() === normalized
      );
    },
    [bookmarks]
  );

  const addBookmark = useCallback(
    (item: Omit<BookmarkItem, "savedAt">) => {
      setBookmarks((prev) => {
        const normalized = item.id.toLowerCase().trim();
        const exists = prev.some(
          (b) => b.id.toLowerCase() === normalized || b.url.toLowerCase() === item.url.toLowerCase().trim()
        );
        if (exists) return prev;
        const newItem: BookmarkItem = {
          ...item,
          savedAt: Date.now(),
        };
        showToast(`Saved "${item.title}" to bookmarks!`, "add");
        return [newItem, ...prev];
      });
    },
    [showToast]
  );

  const removeBookmark = useCallback(
    (idOrUrl: string) => {
      setBookmarks((prev) => {
        const normalized = idOrUrl.toLowerCase().trim();
        const target = prev.find(
          (b) => b.id.toLowerCase() === normalized || b.url.toLowerCase() === normalized
        );
        if (!target) return prev;
        showToast(`Removed "${target.title}" from bookmarks`, "remove");
        return prev.filter(
          (b) => b.id.toLowerCase() !== normalized && b.url.toLowerCase() !== normalized
        );
      });
    },
    [showToast]
  );

  const toggleBookmark = useCallback(
    (item: Omit<BookmarkItem, "savedAt">) => {
      const normalized = item.id.toLowerCase().trim();
      const exists = bookmarks.some(
        (b) => b.id.toLowerCase() === normalized || b.url.toLowerCase() === item.url.toLowerCase().trim()
      );
      if (exists) {
        removeBookmark(item.id);
        return false;
      } else {
        addBookmark(item);
        return true;
      }
    },
    [bookmarks, addBookmark, removeBookmark]
  );

  const clearBookmarks = useCallback(() => {
    setBookmarks([]);
    showToast("All bookmarks cleared", "remove");
  }, [showToast]);

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        count: bookmarks.length,
        isBookmarked,
        addBookmark,
        removeBookmark,
        toggleBookmark,
        clearBookmarks,
        isDrawerOpen,
        setIsDrawerOpen,
        toast,
      }}
    >
      {children}
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[400] flex items-center gap-3 px-4 py-3 bg-slate-900/95 backdrop-blur-md text-white text-sm font-medium rounded-2xl shadow-2xl border border-slate-700/80 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <span
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
              toast.type === "add" ? "bg-purple-600 text-white" : "bg-slate-700 text-slate-300"
            }`}
          >
            {toast.type === "add" ? "★" : "✕"}
          </span>
          <span className="max-w-xs truncate">{toast.message}</span>
        </div>
      )}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return context;
}
