"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { GRADES_CURRICULUM, SUBJECTS_META } from "@/lib/curriculum";
import NavSearch from "@/components/layout/NavSearch";
import AuthModal from "@/components/auth/AuthModal";
import { useBookmarks } from "@/context/BookmarkContext";

const MOBILE_SUBJECTS = [
  "mathematics",
  "english",
  "english-language",
  "science",
  "evs",
  "general-awareness",
  "social-studies",
  "gk",
  "reasoning",
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [gradesOpen, setGradesOpen] = useState(false);
  const [subjectsOpen, setSubjectsOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const { data: session } = useSession();
  const { count, setIsDrawerOpen } = useBookmarks();

  // Lock background scroll while the menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Hamburger — mobile only */}
      <button
        className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200/60 transition-all text-slate-700"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile nav overlay — portalled to <body> so it isn't trapped by the
          header's backdrop-blur containing block. Only renders after a click,
          so there is no SSR/hydration branch. */}
      {open && typeof document !== "undefined" && createPortal(
        <div className="sm:hidden fixed inset-x-0 top-[57px] bottom-0 z-[150] bg-white/95 backdrop-blur-2xl overflow-y-auto border-t border-slate-200/60 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col divide-y divide-slate-100 pb-12">

            {/* Quick CTA pills */}
            <div className="flex gap-2.5 px-4 pt-4 pb-2">
              <Link
                href="/grades"
                onClick={close}
                className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold text-rose-700 bg-rose-50/90 hover:bg-rose-100 border border-rose-200/80 px-3 py-2.5 rounded-2xl transition-all shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>K–8 Curriculums</span>
              </Link>
              <Link
                href="/technologies"
                onClick={close}
                className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold text-indigo-700 bg-indigo-50/90 hover:bg-indigo-100 border border-indigo-200/80 px-3 py-2.5 rounded-2xl transition-all shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span>Tech Cheatsheets</span>
              </Link>
            </div>

            {/* Search bar */}
            <NavSearch inline />

            {/* Simple links */}
            <div className="px-2 py-1 space-y-0.5">
              <button
                onClick={() => {
                  close();
                  setIsDrawerOpen(true);
                }}
                className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-purple-700 bg-purple-50/60 hover:bg-purple-100/80 rounded-xl transition-colors text-left"
              >
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                  <span>Saved Bookmarks</span>
                </div>
                <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-purple-600 text-white">
                  {count}
                </span>
              </button>

              <Link
                href="/"
                onClick={close}
                className="flex items-center px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-50 rounded-xl transition-colors"
              >
                Home
              </Link>
              <Link
                href="/worksheets"
                onClick={close}
                className="flex items-center px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-50 rounded-xl transition-colors"
              >
                Worksheets
              </Link>
              <Link
                href="/coloring-sheets"
                onClick={close}
                className="flex items-center justify-between px-4 py-2.5 text-sm font-bold text-amber-700 bg-amber-50/70 hover:bg-amber-100/80 rounded-xl transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span>🎨</span>
                  <span>Coloring Sheets</span>
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-800 border border-amber-500/30">
                  150 Sheets
                </span>
              </Link>
              <Link
                href="/tools"
                onClick={close}
                className="flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <span>Worksheet Generators</span>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20">
                  New
                </span>
              </Link>
              <Link
                href="/maps"
                onClick={close}
                className="flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <span>Map Worksheets</span>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                  New
                </span>
              </Link>

              {/* Grades accordion */}
              <div>
                <button
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-50 rounded-xl transition-colors"
                  onClick={() => setGradesOpen((v) => !v)}
                >
                  <span>Grades (K–8)</span>
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${gradesOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {gradesOpen && (
                  <div className="px-2 py-2 bg-slate-50/80 rounded-2xl my-1 border border-slate-100">
                    <div className="grid grid-cols-2 gap-1.5">
                      {GRADES_CURRICULUM.map((grade) => (
                        <Link
                          key={grade.id}
                          href={`/grades/${grade.id}`}
                          onClick={close}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-100 shadow-2xs hover:border-slate-300 transition-colors"
                        >
                          <span className="text-lg leading-none">{grade.emoji}</span>
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-slate-800 leading-tight">{grade.label}</div>
                            <div className="text-[10px] text-slate-400 font-medium">{grade.ageRange}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/grades"
                      onClick={close}
                      className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-rose-600 hover:text-rose-700 px-2 py-1 transition-colors"
                    >
                      Browse all grades directory →
                    </Link>
                  </div>
                )}
              </div>

              {/* Subjects accordion */}
              <div>
                <button
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-50 rounded-xl transition-colors"
                  onClick={() => setSubjectsOpen((v) => !v)}
                >
                  <span>Subjects</span>
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${subjectsOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {subjectsOpen && (
                  <div className="px-2 py-2 bg-slate-50/80 rounded-2xl my-1 border border-slate-100">
                    <div className="flex flex-col gap-1">
                      {MOBILE_SUBJECTS.map((id) => {
                        const sub = SUBJECTS_META[id];
                        if (!sub) return null;
                        return (
                          <Link
                            key={sub.id}
                            href={`/subjects/${sub.id}`}
                            onClick={close}
                            className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white transition-colors"
                          >
                            <span className="text-lg w-6 text-center leading-none flex-shrink-0">{sub.emoji}</span>
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-slate-800">{sub.label}</div>
                              <div className="text-[10px] text-slate-400 truncate">{sub.description}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <Link
                      href="/subjects"
                      onClick={close}
                      className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-rose-600 hover:text-rose-700 px-2 py-1 transition-colors"
                    >
                      Browse all subjects →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/technologies"
                onClick={close}
                className="flex items-center px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-50 rounded-xl transition-colors"
              >
                Technologies
              </Link>

              <Link
                href="/knowledge"
                onClick={close}
                className="flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span>Knowledge Hub</span>
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 border border-amber-500/20">
                  60 Guides
                </span>
              </Link>

              <Link
                href="/quiz"
                onClick={close}
                className="flex items-center px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-50 rounded-xl transition-colors"
              >
                Quiz
              </Link>
            </div>

            {/* Auth section */}
            <div className="px-4 py-4 bg-slate-50/80">
              {session?.user ? (
                <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {(session.user.name?.[0] ?? session.user.email?.[0] ?? "U").toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-800 truncate">
                        {session.user.name || session.user.email}
                      </div>
                      <div className="text-[10px] text-slate-400">Signed in</div>
                    </div>
                  </div>
                  <button
                    onClick={() => { signOut(); close(); }}
                    className="text-xs font-bold text-slate-600 hover:text-slate-900 border border-slate-200 px-3 py-1.5 rounded-full transition-colors flex-shrink-0"
                  >
                    Sign out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuth(true)}
                  className="w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-3 rounded-full transition-all shadow-sm"
                >
                  Login / Sign up
                </button>
              )}
            </div>

          </nav>
        </div>,
        document.body
      )}

      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onSuccess={() => { setShowAuth(false); close(); }}
          message="Sign in for unlimited free worksheet downloads."
        />
      )}
    </>
  );
}

