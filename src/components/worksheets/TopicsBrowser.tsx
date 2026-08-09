"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { GRADES_CURRICULUM } from "@/lib/curriculum";

export interface TopicEntry {
  gradeId: string;
  gradeLabel: string;
  gradeEmoji: string;
  subjectId: string;
  subjectLabel: string;
  subjectEmoji: string;
  subjectGradient: string;
  topic: string;
  topicSlug: string;
}

function TopicCard({ entry }: { entry: TopicEntry }) {
  return (
    <Link
      href={`/grades/${entry.gradeId}/${entry.subjectId}/${entry.topicSlug}`}
      className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex flex-col border border-gray-100"
    >
      {/* Illustrated header */}
      <div className={`bg-gradient-to-br ${entry.subjectGradient} relative h-28 flex items-center justify-center overflow-hidden`}>
        {/* Decorative floating circles */}
        <div className="absolute top-2 left-3 w-9 h-9 rounded-full bg-white/10" />
        <div className="absolute bottom-3 right-4 w-14 h-14 rounded-full bg-white/10" />
        <div className="absolute top-5 right-9 w-5 h-5 rounded-full bg-white/15" />
        <div className="absolute bottom-1 left-12 w-4 h-4 rounded-full bg-white/10" />
        <div className="absolute top-1 right-2 w-3 h-3 rounded-full bg-white/20" />

        {/* Subject emoji — main visual */}
        <span className="relative text-5xl drop-shadow select-none group-hover:scale-110 transition-transform duration-200 z-10">
          {entry.subjectEmoji}
        </span>

        {/* Grade pill overlay */}
        <span className="absolute top-2.5 right-2.5 bg-black/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
          {entry.gradeLabel}
        </span>
      </div>

      {/* Card body */}
      <div className="p-3.5 flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors min-h-[2.5rem]">
          {entry.topic}
        </h3>

        <div className="flex flex-wrap gap-1 mt-auto pt-1">
          <span className="text-[10px] font-semibold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
            {entry.gradeEmoji} {entry.gradeLabel}
          </span>
          <span className="text-[10px] font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full truncate max-w-[120px]">
            {entry.subjectLabel}
          </span>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-gray-50">
          <span className="text-[10px] text-gray-400">📄 4 Practice Sheets</span>
          <span className="text-xs text-blue-500 font-semibold group-hover:translate-x-0.5 transition-transform">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}

const PAGE_SIZE = 60;

interface Props {
  topics: TopicEntry[];
}

export default function TopicsBrowser({ topics }: Props) {
  const [gradeFilter, setGradeFilter] = useState("all");
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [showCount, setShowCount] = useState(PAGE_SIZE);

  const availableGrades = useMemo(() => {
    const seen = new Set(topics.map((t) => t.gradeId));
    return GRADES_CURRICULUM.filter((g) => seen.has(g.id));
  }, [topics]);

  const availableSubjects = useMemo(() => {
    const pool = gradeFilter === "all" ? topics : topics.filter((t) => t.gradeId === gradeFilter);
    const seen = new Map<string, { id: string; label: string; emoji: string }>();
    pool.forEach((t) => {
      if (!seen.has(t.subjectId))
        seen.set(t.subjectId, { id: t.subjectId, label: t.subjectLabel, emoji: t.subjectEmoji });
    });
    return Array.from(seen.values());
  }, [topics, gradeFilter]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return topics.filter((t) => {
      if (gradeFilter !== "all" && t.gradeId !== gradeFilter) return false;
      if (subjectFilter !== "all" && t.subjectId !== subjectFilter) return false;
      if (q && !t.topic.toLowerCase().includes(q) && !t.subjectLabel.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [topics, gradeFilter, subjectFilter, search]);

  function handleGrade(id: string) {
    setGradeFilter(id);
    setSubjectFilter("all");
    setShowCount(PAGE_SIZE);
  }

  function handleSubject(id: string) {
    setSubjectFilter(id);
    setShowCount(PAGE_SIZE);
  }

  const visible = filtered.slice(0, showCount);

  return (
    <div>
      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-lg">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search topics or subjects..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setShowCount(PAGE_SIZE); }}
            className="w-full pl-11 pr-10 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white shadow-sm"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Grade filter */}
      <div className="overflow-x-auto pb-2 mb-3 -mx-1 px-1">
        <div className="flex gap-2 min-w-max">
          <button
            onClick={() => handleGrade("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors whitespace-nowrap border ${
              gradeFilter === "all"
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600"
            }`}
          >
            All Grades
          </button>
          {availableGrades.map((g) => (
            <button
              key={g.id}
              onClick={() => handleGrade(g.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors whitespace-nowrap border ${
                gradeFilter === g.id
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {g.emoji} {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* Subject filter */}
      <div className="overflow-x-auto pb-2 mb-6 -mx-1 px-1">
        <div className="flex gap-2 min-w-max">
          <button
            onClick={() => handleSubject("all")}
            className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-colors whitespace-nowrap ${
              subjectFilter === "all"
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800"
            }`}
          >
            All Subjects
          </button>
          {availableSubjects.map((s) => (
            <button
              key={s.id}
              onClick={() => handleSubject(s.id)}
              className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-colors whitespace-nowrap ${
                subjectFilter === s.id
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800"
              }`}
            >
              {s.emoji} {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-sm text-gray-500 mb-5">
        Showing{" "}
        <span className="font-semibold text-gray-900">{Math.min(showCount, filtered.length)}</span>{" "}
        of <span className="font-semibold text-gray-900">{filtered.length}</span> topics
      </p>

      {/* Grid or empty */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-5xl mb-4">🔍</p>
          <p className="font-semibold text-lg text-gray-500">No topics found</p>
          <p className="text-sm mt-1">Try a different search or filter</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {visible.map((entry) => (
              <TopicCard
                key={`${entry.gradeId}-${entry.subjectId}-${entry.topicSlug}`}
                entry={entry}
              />
            ))}
          </div>

          {filtered.length > showCount && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowCount((c) => c + PAGE_SIZE)}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full shadow-sm transition-colors"
              >
                Load more — {filtered.length - showCount} remaining
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
