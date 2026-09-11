import Link from "next/link";
import Logo from "@/components/ui/Logo";
import NavAuthButton from "@/components/auth/NavAuthButton";
import BookmarkHeaderButton from "@/components/bookmarks/BookmarkHeaderButton";
import GradesMenu from "@/components/layout/GradesMenu";
import SubjectsMenu from "@/components/layout/SubjectsMenu";
import TechnologiesMenu from "@/components/layout/TechnologiesMenu";
import MobileMenu from "@/components/layout/MobileMenu";
import NavSearch from "@/components/layout/NavSearch";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 shadow-sm transition-all">

      {/* ── Row 1: Logo · Prominent Search · Saved Bookmarks & Sign In Button ─── */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-2 sm:gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 group transition-transform hover:scale-[1.01]">
            <Logo size={36} showText={true} textSize="text-lg sm:text-xl" />
          </Link>

          {/* Large prominent search bar (desktop) */}
          <div className="hidden sm:flex flex-1 max-w-2xl mx-auto">
            <NavSearch large />
          </div>

          {/* Saved Bookmarks & Auth Button (desktop) */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <BookmarkHeaderButton />
            <NavAuthButton />
          </div>

          {/* Mobile: Saved Bookmarks + Hamburger Menu */}
          <div className="sm:hidden flex-shrink-0 flex items-center gap-2">
            <BookmarkHeaderButton showText={false} />
            <MobileMenu />
          </div>

        </div>
      </div>

      {/* ── Row 2: Secondary Navigation Bar (Dark Violet Theme Matching Reference) ─── */}
      <div className="hidden sm:block bg-[#090514] border-b border-[#2d1b4e]/50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-1 lg:gap-1.5 h-11 overflow-hidden">

          {/* Nav links */}
          <div className="flex items-center gap-1 lg:gap-1.5 text-xs font-semibold">
            {/* Active Home Pill */}
            <Link
              href="/"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-sm shadow-purple-600/30 hover:brightness-110 transition-all whitespace-nowrap"
            >
              Home
            </Link>

            {/* Technologies Dropdown */}
            <TechnologiesMenu dark />

            {/* Grades Dropdown */}
            <GradesMenu dark />

            {/* Subjects Dropdown */}
            <SubjectsMenu dark />

            {/* Coloring Sheets */}
            <Link
              href="/coloring-sheets"
              className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 text-pink-400 group-hover:text-pink-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4 4 4 0 014-4 4 4 0 014 4 4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <span>Coloring Sheets</span>
            </Link>

            {/* Worksheets */}
            <Link
              href="/worksheets"
              className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 text-emerald-400 group-hover:text-emerald-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Worksheets</span>
            </Link>

            {/* Roadmaps & Maps */}
            <Link
              href="/maps"
              className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Maps</span>
            </Link>

            {/* Tools */}
            <Link
              href="/tools"
              className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 text-yellow-400 group-hover:text-yellow-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span>Tools</span>
            </Link>

            {/* Knowledge */}
            <Link
              href="/knowledge"
              className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 text-teal-400 group-hover:text-teal-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Knowledge</span>
            </Link>

            {/* Quiz */}
            <Link
              href="/quiz"
              className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 text-indigo-400 group-hover:text-indigo-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Quiz</span>
            </Link>
          </div>

          {/* Optional Right CTA (only on wide screens, never causes horizontal overflow) */}
          <div className="hidden xl:flex items-center gap-2 flex-shrink-0">
            <Link
              href="/grades"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-300 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/20 px-3 py-0.5 rounded-full transition-all whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
              <span>K–8</span>
            </Link>
            <Link
              href="/technologies"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 px-3 py-0.5 rounded-full transition-all whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Tech</span>
            </Link>
          </div>

        </div>
      </div>

    </header>
  );
}


