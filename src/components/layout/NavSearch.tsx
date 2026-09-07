"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TECH_DATA } from "@/lib/technologies";
import { CURRICULUM, GRADES_CURRICULUM, SUBJECTS_META, slugifyTopic } from "@/lib/curriculum";
import { WORKSHEETS } from "@/lib/data";
import { KNOWLEDGE_ARTICLES } from "@/lib/knowledge";

// ── Types ────────────────────────────────────────────────────────────────────

type ResultType = "technology" | "topic" | "knowledge" | "worksheet";

interface SearchResult {
  type: ResultType;
  label: string;
  subtitle: string;
  href: string;
  emoji: string;
  tag?: string;
}

// ── Synonym map — common shorthands → canonical terms ────────────────────────

const SYNONYMS: Record<string, string> = {
  maths:     "mathematics",
  math:      "mathematics",
  sci:       "science",
  eng:       "english",
  sst:       "social studies",
  social:    "social studies",
  gk:        "general knowledge",
  "gen knowledge": "general knowledge",
  "gen awareness": "general awareness",
  logic:     "logic thinking",
  shapes:    "shapes visual",
  coloring:  "coloring creative",
  colouring: "coloring creative",
  emotional: "social emotional",
  kg:        "kindergarten",
  kinder:    "kindergarten",
  reasoning: "reasoning",
  evs:       "evs",
  nature:    "nature & earth",
  space:     "space",
  weather:   "weather & climate",
  body:      "human body",
};

// ── Static search index (built once) ─────────────────────────────────────────

function buildIndex(): SearchResult[] {
  const out: SearchResult[] = [];

  // 1. Knowledge Articles (60 illustrated guides)
  for (const art of KNOWLEDGE_ARTICLES) {
    out.push({
      type: "knowledge",
      label: art.title,
      subtitle: `${art.category} · ${art.readingMinutes} min guide`,
      href: `/knowledge/${art.slug}`,
      emoji: art.emoji,
      tag: "Knowledge",
    });
  }

  // 2. Technology resource pages
  const seen = new Set<string>();
  for (const cat of TECH_DATA) {
    for (const sub of cat.subcategories) {
      for (const item of sub.items) {
        if (seen.has(item.slug)) continue;
        seen.add(item.slug);
        out.push({
          type: "technology",
          label: item.name,
          subtitle: `${cat.label} · Cheatsheet & Resources`,
          href: `/technologies/${cat.slug}/${item.slug}/resources`,
          emoji: cat.icon,
          tag: "Tech",
        });
      }
    }
  }

  const gradeMap = Object.fromEntries(GRADES_CURRICULUM.map((g) => [g.id, g]));

  // 3. Grade-level pages (e.g. searching "grade 5" or "kindergarten")
  for (const grade of GRADES_CURRICULUM) {
    out.push({
      type: "topic",
      label: grade.label,
      subtitle: `${grade.ageRange} · Complete Curriculum`,
      href: `/grades/${grade.id}`,
      emoji: grade.emoji,
      tag: "Curriculum",
    });
  }

  // 4. Grade + subject pages (e.g. searching "mathematics" or "evs grade 3")
  for (const [gradeId, subjects] of Object.entries(CURRICULUM)) {
    const grade = gradeMap[gradeId];
    for (const [subjectId, topics] of Object.entries(subjects)) {
      const subject = SUBJECTS_META[subjectId];
      out.push({
        type: "topic",
        label: subject?.label ?? subjectId,
        subtitle: `${grade?.label ?? gradeId} · ${topics.length} topics`,
        href: `/grades/${gradeId}/${subjectId}`,
        emoji: subject?.emoji ?? "📚",
        tag: "Subject",
      });
    }
  }

  // 5. Individual curriculum topic pages
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
          tag: "Topic",
        });
      }
    }
  }

  // 6. Worksheets
  for (const ws of WORKSHEETS) {
    out.push({
      type: "worksheet",
      label: ws.title,
      subtitle: `${ws.grade} · ${ws.subject}`,
      href: `/worksheets/${ws.subject}`,
      emoji: ws.thumbnailEmoji ?? "📄",
      tag: "Worksheet",
    });
  }

  return out;
}

// ── Search logic ─────────────────────────────────────────────────────────────

const INDEX = buildIndex(); // singleton — computed once per page load

function runSearch(query: string): SearchResult[] {
  const raw = query.toLowerCase().trim();
  if (raw.length < 2) return [];

  const canonical = SYNONYMS[raw];
  const terms = canonical ? [canonical, raw] : [raw];

  const exact: SearchResult[] = [];
  const starts: SearchResult[] = [];
  const contains: SearchResult[] = [];

  for (const r of INDEX) {
    const label = r.label.toLowerCase();
    const searchable = label + " " + r.subtitle.toLowerCase();

    if (terms.some((t) => label === t)) {
      exact.push(r);
    } else if (terms.some((t) => label.startsWith(t) || searchable.startsWith(t))) {
      starts.push(r);
    } else if (terms.some((t) => searchable.includes(t))) {
      contains.push(r);
    }
  }

  const pick = (arr: SearchResult[], type: ResultType, max: number) =>
    arr.filter((r) => r.type === type).slice(0, max);

  const merged = [
    ...exact,
    ...pick(starts, "knowledge", 3),
    ...pick(starts, "technology", 3),
    ...pick(starts, "topic", 5),
    ...pick(starts, "worksheet", 2),
    ...pick(contains, "knowledge", 3),
    ...pick(contains, "technology", 2),
    ...pick(contains, "topic", 4),
    ...pick(contains, "worksheet", 1),
  ];

  const seen = new Set<string>();
  return merged.filter((r) => {
    if (seen.has(r.href)) return false;
    seen.add(r.href);
    return true;
  }).slice(0, 10);
}

// ── Badge colours ─────────────────────────────────────────────────────────────

const TYPE_LABEL: Record<ResultType, string> = {
  knowledge: "Knowledge",
  technology: "Tech",
  topic: "Curriculum",
  worksheet: "Worksheet",
};

const TYPE_CLASS: Record<ResultType, string> = {
  knowledge: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20",
  technology: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20",
  topic: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
  worksheet: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20",
};

// ── Component ─────────────────────────────────────────────────────────────────

interface NavSearchProps {
  /** When true, renders as an inline bar (mobile menu) */
  inline?: boolean;
  /** When true, renders as full width */
  large?: boolean;
}

export default function NavSearch({ inline = false, large = false }: NavSearchProps) {
  const [open, setOpen] = useState(inline);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = useMemo(() => runSearch(query), [query]);

  // Reset selection on new results
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  // Auto-focus when opened
  useEffect(() => {
    if (open && !inline) {
      inputRef.current?.focus();
    }
  }, [open, inline]);

  // Global keyboard shortcut: Cmd+K / Ctrl+K to trigger search
  useEffect(() => {
    function onGlobalKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
        setTimeout(() => inputRef.current?.focus(), 50);
      }
    }
    window.addEventListener("keydown", onGlobalKeyDown);
    return () => window.removeEventListener("keydown", onGlobalKeyDown);
  }, []);

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

  // Keyboard navigation inside search
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          results.length > 0 ? (prev - 1 + results.length) % results.length : 0
        );
      } else if (e.key === "Enter" && results.length > 0) {
        e.preventDefault();
        const target = results[selectedIndex] || results[0];
        if (target) {
          router.push(target.href);
          setOpen(false);
          setQuery("");
        }
      }
    },
    [results, selectedIndex, router]
  );

  function close() {
    if (!inline) setOpen(false);
    setQuery("");
  }

  // ── Inline mode (mobile menu) ──────────────────────────────────────────────
  if (inline) {
    return (
      <div className="relative px-4 py-3">
        <div className="relative">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
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
            placeholder="Search 2,000+ topics, tech, guides…"
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-100/90 border border-slate-200/80 rounded-2xl outline-none focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-slate-800 placeholder:text-slate-400 transition-all"
          />
        </div>

        {query && (
          <div className="absolute left-4 right-4 top-full mt-1.5 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-[200]">
            {results.length === 0 ? (
              <p className="px-4 py-6 text-sm text-slate-400 text-center">
                No results for &ldquo;{query}&rdquo;
              </p>
            ) : (
              <div className="max-h-80 overflow-y-auto divide-y divide-slate-50">
                {results.map((r, i) => (
                  <Link
                    key={i}
                    href={r.href}
                    onClick={close}
                    className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                      i === selectedIndex ? "bg-indigo-50/70" : "hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-lg flex-shrink-0 w-7 text-center leading-none">{r.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-800 truncate">{r.label}</p>
                      <p className="text-xs text-slate-400 truncate">{r.subtitle}</p>
                    </div>
                    <span className={`flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-md ${TYPE_CLASS[r.type]}`}>
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

  // ── Large Mode (Full-width prominent search bar in top row) ───────────────
  if (large) {
    return (
      <div ref={containerRef} className="relative w-full">
        <div className="relative flex items-center h-10.5 bg-slate-50 hover:bg-white focus-within:bg-white border border-slate-200 focus-within:border-indigo-500 focus-within:ring-3 focus-within:ring-indigo-100 rounded-full transition-all shadow-2xs">
          <div className="flex items-center pl-4 pointer-events-none text-slate-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search 2,000+ topics, tech cheatsheets, guides, worksheets…"
            className="flex-1 px-3 text-xs md:text-sm font-medium text-slate-900 bg-transparent outline-none placeholder:text-slate-400"
          />
          <div className="flex items-center pr-1.5 gap-1.5">
            <kbd className="hidden md:inline-flex items-center justify-center text-[10px] font-semibold text-slate-400 bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 shadow-2xs tracking-tight">
              ⌘K
            </kbd>
            <button
              type="button"
              onClick={() => { if (results[0]) router.push(results[0].href); }}
              className="hidden sm:flex items-center gap-1 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-full transition-all shadow-xs cursor-pointer"
            >
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Dropdown Suggestions */}
        {query && (
          <div className="absolute left-0 right-0 top-[calc(100%+8px)] bg-white/98 backdrop-blur-2xl rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] border border-slate-100 overflow-hidden z-[300] animate-in fade-in slide-in-from-top-2 duration-150">
            {results.length === 0 ? (
              <div className="px-6 py-8 text-center">
                <div className="text-3xl mb-2">🔍</div>
                <p className="text-sm font-semibold text-slate-800">No matching results for &ldquo;{query}&rdquo;</p>
                <p className="text-xs text-slate-400 mt-1">Try searching for &quot;Rock Cycle&quot;, &quot;Grade 3 Math&quot;, &quot;Python&quot;, or &quot;Photosynthesis&quot;</p>
              </div>
            ) : (
              <>
                <div className="px-4 py-2 bg-slate-50/90 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Results ({results.length})
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">Use ↑↓ to navigate · ↵ to open</span>
                </div>
                <div className="max-h-[380px] overflow-y-auto divide-y divide-slate-50 p-1">
                  {results.map((r, i) => (
                    <Link
                      key={i}
                      href={r.href}
                      onClick={close}
                      onMouseEnter={() => setSelectedIndex(i)}
                      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all duration-100 group ${
                        i === selectedIndex ? "bg-indigo-50/80 text-indigo-950" : "hover:bg-slate-50"
                      }`}
                    >
                      <span className="text-xl flex-shrink-0 w-8 text-center leading-none drop-shadow-xs">
                        {r.emoji}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-semibold truncate ${
                          i === selectedIndex ? "text-indigo-600" : "text-slate-800 group-hover:text-indigo-600"
                        } transition-colors`}>
                          {r.label}
                        </p>
                        <p className="text-[11px] text-slate-400 truncate mt-0.5">{r.subtitle}</p>
                      </div>
                      <span className={`flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-md ${TYPE_CLASS[r.type]}`}>
                        {TYPE_LABEL[r.type]}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="px-4 py-2 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>WorksheetDownload Catalog</span>
                  <span>Press <kbd className="font-mono bg-white px-1 py-0.5 rounded border border-slate-200">Esc</kbd> to exit</span>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    );
  }

  // ── Desktop / Header Compact Mode ──────────────────────────────────────────
  return (
    <div ref={containerRef} className="relative flex items-center">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="group flex items-center gap-2.5 h-9 pl-3 pr-2.5 bg-slate-100/80 hover:bg-slate-100 border border-slate-200/70 hover:border-slate-300/80 rounded-full text-slate-500 hover:text-slate-800 text-xs font-medium transition-all duration-150 shadow-sm"
          aria-label="Search"
        >
          <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="hidden lg:inline text-slate-500 group-hover:text-slate-700">Search 2,000+ topics…</span>
          <span className="lg:hidden text-slate-500">Search…</span>
          <kbd className="hidden sm:inline-flex items-center justify-center text-[10px] font-semibold text-slate-400 bg-white border border-slate-200 rounded px-1.5 py-0.5 shadow-xs tracking-tight">
            ⌘K
          </kbd>
        </button>
      ) : (
        <div className="relative flex items-center animate-in fade-in zoom-in-95 duration-150">
          <div className="relative">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-500 pointer-events-none"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type topic, subject, tech, or guide…"
              className="w-72 md:w-80 pl-9.5 pr-8 py-2 text-xs font-medium bg-white border-2 border-indigo-500/80 rounded-full outline-none shadow-lg shadow-indigo-500/10 text-slate-900 placeholder:text-slate-400 transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          <button
            onClick={() => { setOpen(false); setQuery(""); }}
            className="ml-2 text-xs font-semibold text-slate-400 hover:text-slate-700 whitespace-nowrap px-2 py-1 transition-colors"
          >
            Esc
          </button>
        </div>
      )}

      {/* Instant Dropdown Preview */}
      {open && query && (
        <div className="absolute right-0 top-[calc(100%+10px)] w-[420px] max-w-[calc(100vw-32px)] bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18)] border border-slate-100 overflow-hidden z-[300] animate-in fade-in slide-in-from-top-2 duration-150">
          {results.length === 0 ? (
            <div className="px-6 py-8 text-center">
              <div className="text-3xl mb-2">🔍</div>
              <p className="text-sm font-semibold text-slate-800">No matching results</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for &quot;Maths&quot;, &quot;Rock Cycle&quot;, &quot;Python&quot;, or &quot;Grade 3&quot;</p>
            </div>
          ) : (
            <>
              <div className="px-4 py-2 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Top Results ({results.length})
                </span>
                <span className="text-[10px] text-slate-400 font-medium">Use ↑↓ to navigate · ↵ to select</span>
              </div>
              <div className="max-h-[380px] overflow-y-auto divide-y divide-slate-50 p-1">
                {results.map((r, i) => (
                  <Link
                    key={i}
                    href={r.href}
                    onClick={close}
                    onMouseEnter={() => setSelectedIndex(i)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all duration-100 group ${
                      i === selectedIndex ? "bg-indigo-50/80 text-indigo-950" : "hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-xl flex-shrink-0 w-8 text-center leading-none drop-shadow-xs">
                      {r.emoji}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-semibold truncate ${
                        i === selectedIndex ? "text-indigo-600" : "text-slate-800 group-hover:text-indigo-600"
                      } transition-colors`}>
                        {r.label}
                      </p>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">{r.subtitle}</p>
                    </div>
                    <span className={`flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-md ${TYPE_CLASS[r.type]}`}>
                      {TYPE_LABEL[r.type]}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="px-4 py-2 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>WorksheetDownload Catalog</span>
                <span>Press <kbd className="font-mono bg-white px-1 py-0.5 rounded border border-slate-200">Esc</kbd> to exit</span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}


