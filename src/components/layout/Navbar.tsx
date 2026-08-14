import Link from "next/link";
import Logo from "@/components/ui/Logo";
import NavAuthButton from "@/components/auth/NavAuthButton";
import GradesMenu from "@/components/layout/GradesMenu";
import SubjectsMenu from "@/components/layout/SubjectsMenu";
import TechnologiesMenu from "@/components/layout/TechnologiesMenu";
import MobileMenu from "@/components/layout/MobileMenu";
import NavSearch from "@/components/layout/NavSearch";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      {/* ── Row 1: Logo · Search · Auth ──────────────────────────────────── */}
      <div className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-4">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo size={36} showText={true} textSize="text-xl" />
          </Link>

          {/* Large search — desktop only */}
          <div className="hidden sm:flex flex-1">
            <NavSearch large />
          </div>

          {/* Auth — desktop only (in row 1) */}
          <div className="hidden sm:flex flex-shrink-0">
            <NavAuthButton />
          </div>

          {/* Mobile: hamburger takes auth slot */}
          <div className="sm:hidden ml-auto">
            <MobileMenu />
          </div>

        </div>
      </div>

      {/* ── Row 2: Nav links · CTA buttons (desktop) ─────────────────────── */}
      <div className="hidden sm:block bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1 flex items-center justify-between gap-2">

          {/* Nav links */}
          <div className="flex items-center gap-0.5 text-sm font-medium overflow-x-auto scrollbar-hide">
            <Link
              href="/"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>

            <Link
              href="/worksheets"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Worksheets
            </Link>

            <GradesMenu dark />
            <SubjectsMenu dark />
            <TechnologiesMenu dark />

            <Link
              href="/quiz"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Quiz
            </Link>
          </div>

          {/* CTA pills — same size as Login/Logout */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              href="/grades"
              className="flex items-center gap-1.5 text-sm font-semibold text-pink-400 bg-pink-400/10 hover:bg-pink-400/20 border border-pink-400/30 hover:border-pink-400/60 px-5 py-2 rounded-full transition-all whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              K–8
            </Link>
            <Link
              href="/technologies"
              className="flex items-center gap-1.5 text-sm font-semibold text-indigo-400 bg-indigo-400/10 hover:bg-indigo-400/20 border border-indigo-400/30 hover:border-indigo-400/60 px-5 py-2 rounded-full transition-all whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Tech
            </Link>
          </div>

        </div>
      </div>

    </header>
  );
}
