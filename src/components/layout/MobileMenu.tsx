"use client";

import { useState } from "react";
import Link from "next/link";
import { GRADES_CURRICULUM, SUBJECTS_META } from "@/lib/curriculum";

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

  const close = () => setOpen(false);

  return (
    <>
      {/* Hamburger — mobile only */}
      <button
        className="sm:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile nav overlay */}
      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-[150] bg-white overflow-y-auto sm:hidden">
          <nav className="flex flex-col divide-y divide-gray-100">

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

          </nav>
        </div>
      )}
    </>
  );
}
