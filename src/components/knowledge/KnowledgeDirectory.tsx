"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  KnowledgeArticle,
  KNOWLEDGE_CATEGORIES,
  ACCENTS,
  relatedGrades,
} from "@/lib/knowledge";
import KnowledgeArt from "@/components/knowledge/KnowledgeArt";

interface Props {
  articles: KnowledgeArticle[];
}

export default function KnowledgeDirectory({ articles }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === "all" || article.categorySlug === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.subtitle.toLowerCase().includes(q) ||
        article.bigIdea.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q) ||
        article.vocabulary.some((v) => v.term.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  return (
    <div className="space-y-10">
      {/* ── Category Filter Tabs + Search Bar ────────────────────────────── */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-thin">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedCategory === "all"
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              🌟 All Topics ({articles.length})
            </button>

            {KNOWLEDGE_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isSelected ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] lg:min-w-[280px]">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
              🔍
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 60 topics, terms, cycles..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Selected Category Header Banner */}
        {selectedCategory !== "all" && (
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            {(() => {
              const cat = KNOWLEDGE_CATEGORIES.find((c) => c.slug === selectedCategory);
              if (!cat) return null;
              return (
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-xl">{cat.emoji}</span>
                    <span>{cat.name}</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{cat.description}</p>
                </div>
              );
            })()}
            <button
              onClick={() => setSelectedCategory("all")}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
            >
              Reset to All
            </button>
          </div>
        )}
      </div>

      {/* ── Results Count ─────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
        <span>
          Showing {filteredArticles.length} of {articles.length} Science Guides
        </span>
        {searchQuery && (
          <span className="text-indigo-600">Filtered by &quot;{searchQuery}&quot;</span>
        )}
      </div>

      {/* ── Articles Grid ─────────────────────────────────────────────────── */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <span className="text-4xl">🔍</span>
          <h3 className="text-lg font-bold text-slate-800 mt-3">No matching articles found</h3>
          <p className="text-sm text-slate-500 mt-1">
            Try adjusting your search term or select &quot;All Topics&quot;.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl shadow hover:bg-indigo-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => {
            const accent = ACCENTS[article.accent];
            const grades = relatedGrades(article);
            return (
              <Link
                key={article.slug}
                href={`/knowledge/${article.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Visual Art Header */}
                <div className={`relative h-44 bg-gradient-to-br ${accent.gradient} overflow-hidden`}>
                  <KnowledgeArt slug={article.slug} className="absolute inset-0" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5 border border-white/15">
                    <span>{article.categoryEmoji}</span>
                    <span>{article.category}</span>
                  </span>

                  {/* Reading stats */}
                  <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                    {article.cycle.length} stages · {article.readingMinutes} min read
                  </span>
                </div>

                {/* Body Content */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xl">{article.emoji}</span>
                    <h3
                      className={`text-lg font-bold text-slate-900 leading-snug ${accent.groupHoverText} transition-colors line-clamp-1`}
                    >
                      {article.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed flex-1">
                    {article.subtitle}
                  </p>

                  {/* Key Vocab Preview */}
                  {article.vocabulary.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {article.vocabulary.slice(0, 3).map((v) => (
                        <span
                          key={v.term}
                          className="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded-md"
                        >
                          #{v.term}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Grade Connections */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-slate-100">
                    {grades.slice(0, 3).map((g) => (
                      <span
                        key={g.id}
                        className={`inline-flex items-center gap-1 ${accent.chipBg} ${accent.chipText} text-[11px] font-semibold px-2 py-0.5 rounded-full`}
                      >
                        {g.emoji} {g.label}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <span
                    className={`mt-3 inline-flex items-center gap-1 text-sm font-bold ${accent.text}`}
                  >
                    Read full explainer
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
