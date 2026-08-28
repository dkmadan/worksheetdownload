"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { GRADES_CURRICULUM, SUBJECTS_META } from "@/lib/curriculum";
import NavSearch from "@/components/layout/NavSearch";
import AuthModal from "@/components/auth/AuthModal";

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

  const close = () => setOpen(false);

  return (
    <>
      {/* Hamburger — mobile only */}
      <button
        className="sm:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-slate-100 transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile nav overlay */}
      {open && (
        <div className="fixed inset-x-0 top-[57px] bottom-0 z-[150] bg-white overflow-y-auto sm:hidden">
          <nav className="flex flex-col divide-y divide-gray-100">

            {/* Quick CTA pills */}
            <div className="flex gap-3 px-5 py-4">
              <Link
                href="/grades"
                onClick={close}
                className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold text-pink-600 bg-pink-50 hover:bg-pink-100 border border-pink-200 px-4 py-2.5 rounded-full transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                K–8 Worksheets
              </Link>
              <Link
                href="/technologies"
                onClick={close}
                className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-4 py-2.5 rounded-full transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Tech Sheets
              </Link>
            </div>

            {/* Search bar */}
            <NavSearch inline />

            {/* Simple links */}
            <Link href="/" onClick={close}
              className="flex items-center px-5 h-13 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Home
            </Link>
            <Link href="/worksheets" onClick={close}
              className="flex items-center px-5 h-13 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Worksheets
            </Link>

            {/* Grades accordion */}
            <div>
              <button
                className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setGradesOpen((v) => !v)}
              >
                Grades
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${gradesOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {gradesOpen && (
                <div className="px-4 pb-4 bg-gray-50">
                  <div className="grid grid-cols-2 gap-2 pt-3">
                    {GRADES_CURRICULUM.map((grade) => (
                      <Link
                        key={grade.id}
                        href={`/grades/${grade.id}`}
                        onClick={close}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white border border-gray-100 hover:border-gray-200 shadow-sm transition-colors"
                      >
                        <span className="text-xl leading-none">{grade.emoji}</span>
                        <div>
                          <div className="text-xs font-bold text-gray-800 leading-tight">{grade.label}</div>
                          <div className="text-[10px] text-gray-400 mt-0.5">{grade.ageRange}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/grades"
                    onClick={close}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-pink-500 hover:text-pink-600 px-1 transition-colors"
                  >
                    Browse all grades →
                  </Link>
                </div>
              )}
            </div>

            {/* Subjects accordion */}
            <div>
              <button
                className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setSubjectsOpen((v) => !v)}
              >
                Subjects
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${subjectsOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {subjectsOpen && (
                <div className="px-4 pb-4 bg-gray-50">
                  <div className="flex flex-col gap-1 pt-2">
                    {MOBILE_SUBJECTS.map((id) => {
                      const sub = SUBJECTS_META[id];
                      if (!sub) return null;
                      return (
                        <Link
                          key={sub.id}
                          href={`/subjects/${sub.id}`}
                          onClick={close}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white transition-colors"
                        >
                          <span className="text-xl w-7 text-center leading-none flex-shrink-0">{sub.emoji}</span>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-800">{sub.label}</div>
                            <div className="text-[11px] text-gray-400 truncate">{sub.description}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <Link
                    href="/subjects"
                    onClick={close}
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-pink-500 hover:text-pink-600 px-3 transition-colors"
                  >
                    Browse all subjects →
                  </Link>
                </div>
              )}
            </div>

            <Link href="/technologies" onClick={close}
              className="flex items-center px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Technologies
            </Link>
            <Link href="/quiz" onClick={close}
              className="flex items-center px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Quiz
            </Link>
            <Link href="/knowledge" onClick={close}
              className="flex items-center px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Knowledge
            </Link>

            {/* Browse CTA */}
            <div className="px-5 py-4">
              <Link
                href="/worksheets"
                onClick={close}
                className="block text-center bg-pink-400 hover:bg-pink-500 text-white text-sm font-semibold px-4 py-3 rounded-full transition-colors"
              >
                Browse All Worksheets
              </Link>
            </div>

            {/* Auth section */}
            <div className="px-5 py-4 border-t border-gray-100 bg-gray-50">
              {session?.user ? (
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {(session.user.name?.[0] ?? session.user.email?.[0] ?? "U").toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-gray-800 truncate">
                        {session.user.name || session.user.email}
                      </div>
                      <div className="text-xs text-gray-400">Signed in</div>
                    </div>
                  </div>
                  <button
                    onClick={() => { signOut(); close(); }}
                    className="text-sm font-semibold text-gray-500 hover:text-gray-700 border border-gray-200 px-4 py-2 rounded-full transition-colors flex-shrink-0"
                  >
                    Sign out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuth(true)}
                  className="w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-3 rounded-full transition-colors"
                >
                  Login / Sign up
                </button>
              )}
            </div>

          </nav>
        </div>
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
