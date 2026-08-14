"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TECH_DATA } from "@/lib/technologies";
import { CURRICULUM, GRADES_CURRICULUM, SUBJECTS_META, slugifyTopic } from "@/lib/curriculum";
import { WORKSHEETS } from "@/lib/data";

// ── Types ────────────────────────────────────────────────────────────────────

type ResultType = "technology" | "topic" | "worksheet";

interface SearchResult {
  type: ResultType;
  label: string;
  subtitle: string;
  href: string;
  emoji: string;
}

// ── Static search index (built once) ─────────────────────────────────────────

function buildIndex(): SearchResult[] {
  const out: SearchResult[] = [];

  // Technology resource pages
  const seen = new Set<string>();
  for (const cat of TECH_DATA) {
    for (const sub of cat.subcategories) {
      for (const item of sub.items) {
        if (seen.has(item.slug)) continue;
        seen.add(item.slug);
        out.push({
          type: "technology",
          label: item.name,
          subtitle: `${cat.label} · Cheat Sheet & Interview Prep`,
          href: `/technologies/${cat.slug}/${item.slug}/resources`,
          emoji: cat.icon,
        });
      }
    }
  }

  // Curriculum topic pages
  const gradeMap = Object.fromEntries(GRADES_CURRICULUM.map((g) => [g.id, g]));
  for (const [gradeId, subjects] of Object.entries(CURRICULUM)) {
    const grade = gradeMap[gradeId];
    for (const [subjectId, topics] of Object.entries(subjects)) {
      const subject = SUBJECTS_META[subjectId];
      for (const topic of topics) {
        out.push({
          type: "topic",
          label: topic,
          subtitle: `${grade?.label ?? gradeId} · ${subject?.label ?? subjectId}`,
          href: `/grades/${gradeId}/${subjectId}/${slugifyTopic(topic)}`,
          emoji: subject?.emoji ?? "📚",
        });
      }
    }
  }

  // Legacy worksheets
  for (const ws of WORKSHEETS) {
    out.push({
      type: "worksheet",
      label: ws.title,
      subtitle: `${ws.grade} · ${ws.subject}`,
      href: `/worksheets/${ws.subject}`,
      emoji: ws.thumbnailEmoji ?? "📄",
    });
  }

  return out;
}

// ── Search logic ─────────────────────────────────────────────────────────────

const INDEX = buildIndex(); // singleton — computed once per page load

function runSearch(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (q.length < 2) return [];

  const exact: SearchResult[] = [];
  const starts: SearchResult[] = [];
  const contains: SearchResult[] = [];

  for (const r of INDEX) {
    const l = r.label.toLowerCase();
    if (l === q) exact.push(r);
    else if (l.startsWith(q)) starts.push(r);
    else if (l.includes(q)) contains.push(r);
  }

  // Cap: 4 tech + 4 topics + 2 worksheets, then fill rest from overflow
  const pick = (arr: SearchResult[], type: ResultType, max: number) =>
    arr.filter((r) => r.type === type).slice(0, max);

  const merged = [
    ...exact,
    ...pick(starts, "technology", 4),
    ...pick(starts, "topic", 4),
    ...pick(starts, "worksheet", 2),
    ...pick(contains, "technology", 3),
    ...pick(contains, "topic", 3),
    ...pick(contains, "worksheet", 1),
  ];

  // Deduplicate by href
  const seen = new Set<string>();
  return merged.filter((r) => {
    if (seen.has(r.href)) return false;
    seen.add(r.href);
    return true;
  }).slice(0, 10);
}

// ── Badge colours ─────────────────────────────────────────────────────────────

const TYPE_LABEL: Record<ResultType, string> = {
  technology: "Tech",
  topic: "Curriculum",
  worksheet: "Worksheet",
};

const TYPE_CLASS: Record<ResultType, string> = {
  technology: "bg-blue-50 text-blue-600",
  topic: "bg-emerald-50 text-emerald-700",
  worksheet: "bg-pink-50 text-pink-600",
};

// ── Component ─────────────────────────────────────────────────────────────────

interface NavSearchProps {
  /** When true, renders as an inline bar (mobile menu) instead of icon+expand */
  inline?: boolean;
  /** When true, renders as a full-width prominent search bar (top row) */
  large?: boolean;
}

export default function NavSearch({ inline = false, large = false }: NavSearchProps) {
  const [open, setOpen] = useState(inline);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = useMemo(() => runSearch(query), [query]);

  // Auto-focus when expanded
  useEffect(() => {
    if (open && !inline) inputRef.current?.focus();
  }, [open, inline]);

  // Close on outside click
  useEffect(() => {
    if (inline) return;
    function onMouseDown(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [inline]);

  // Close / navigate on keyboard
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
      if (e.key === "Enter" && results.length > 0) {
        router.push(results[0].href);
        setOpen(false);
        setQuery("");
      }
    },
    [results, router]
  );

  function close() {
    if (!inline) setOpen(false);
    setQuery("");
  }

  // ── Large mode (top-row full-width search bar) ────────────────────────────
  if (large) {
    return (
      <div ref={containerRef} className="relative w-full">
        <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-white focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
          <svg
            className="ml-3.5 w-4.5 h-4.5 text-slate-400 flex-shrink-0 w-5 h-5"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search topics, technologies, worksheets…"
            className="flex-1 px-3 py-2.5 text-sm text-slate-900 bg-transparent outline-none placeholder:text-slate-400"
          />
          <button
            type="button"
            onClick={() => { if (results[0]) router.push(results[0].href); }}
            className="flex items-center justify-center gap-1.5 px-4 h-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold self-stretch transition-colors whitespace-nowrap flex-shrink-0"
            aria-label="Search"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search
          </button>
        </div>

        {query && (
          <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[300]">
            {results.length === 0 ? (
              <p className="px-5 py-6 text-sm text-gray-400 text-center">
                No results for &ldquo;{query}&rdquo;
              </p>
            ) : (
              <>
                <div className="max-h-[420px] overflow-y-auto divide-y divide-gray-50">
                  {results.map((r, i) => (
                    <Link
                      key={i}
                      href={r.href}
                      onClick={close}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                    >
                      <span className="text-xl flex-shrink-0 w-8 text-center leading-none">{r.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate group-hover:text-indigo-600 transition-colors">
                          {r.label}
                        </p>
                        <p className="text-xs text-gray-400 truncate">{r.subtitle}</p>
                      </div>
                      <span className={`flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${TYPE_CLASS[r.type]}`}>
                        {TYPE_LABEL[r.type]}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-[11px] text-gray-400">
                    {results.length} result{results.length !== 1 ? "s" : ""}
                  </p>
                  <p className="text-[11px] text-gray-400">↵ to open first · Esc to close</p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    );
  }

  // ── Inline mode (mobile menu bar) ──────────────────────────────────────────
  if (inline) {
    return (
      <div className="relative px-4 py-3 border-b border-gray-100">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search topics, tech, worksheets…"
            className="w-full pl-9 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all"
          />
        </div>

        {query && (
          <div className="absolute left-4 right-4 top-full mt-1 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-[200]">
            {results.length === 0 ? (
              <p className="px-4 py-4 text-sm text-gray-400 text-center">
                No results for &ldquo;{query}&rdquo;
              </p>
            ) : (
              <div className="max-h-72 overflow-y-auto divide-y divide-gray-50">
                {results.map((r, i) => (
                  <Link
                    key={i}
                    href={r.href}
                    onClick={close}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                  >
                    <span className="text-lg flex-shrink-0 w-7 text-center leading-none">{r.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{r.label}</p>
                      <p className="text-xs text-gray-400 truncate">{r.subtitle}</p>
                    </div>
                    <span className={`flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${TYPE_CLASS[r.type]}`}>
                      {TYPE_LABEL[r.type]}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // ── Desktop mode (icon → expand) ───────────────────────────────────────────
  return (
    <div ref={containerRef} className="relative flex items-center">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Search"
        >
          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search topics, tech, worksheets…"
              className="w-64 pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all"
            />
          </div>
          <button
            onClick={() => { setOpen(false); setQuery(""); }}
            className="text-xs text-gray-400 hover:text-gray-600 whitespace-nowrap transition-colors"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Dropdown */}
      {open && query && (
        <div className="absolute right-0 top-[calc(100%+8px)] w-[400px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-[200]">
          {results.length === 0 ? (
            <p className="px-5 py-6 text-sm text-gray-400 text-center">
              No results for &ldquo;{query}&rdquo;
            </p>
          ) : (
            <>
              <div className="max-h-[420px] overflow-y-auto divide-y divide-gray-50">
                {results.map((r, i) => (
                  <Link
                    key={i}
                    href={r.href}
                    onClick={close}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                  >
                    <span className="text-xl flex-shrink-0 w-8 text-center leading-none">{r.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate group-hover:text-pink-600 transition-colors">
                        {r.label}
                      </p>
                      <p className="text-xs text-gray-400 truncate">{r.subtitle}</p>
                    </div>
                    <span className={`flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${TYPE_CLASS[r.type]}`}>
                      {TYPE_LABEL[r.type]}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <p className="text-[11px] text-gray-400">
                  {results.length} result{results.length !== 1 ? "s" : ""}
                </p>
                <p className="text-[11px] text-gray-400">
                  ↵ to open first &nbsp;·&nbsp; Esc to close
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
