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
    <header className="sticky top-0 z-50 shadow-sm transition-all">

      {/* ── Row 1: Logo · Prominent Search · Sign In Button (Light Glass) ─── */}
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

          {/* Auth Button (desktop) */}
          <div className="hidden sm:flex items-center flex-shrink-0">
            <NavAuthButton />
          </div>

          {/* Mobile: hamburger only (auth lives inside the menu) */}
          <div className="sm:hidden flex-shrink-0 flex items-center">
            <MobileMenu />
          </div>

        </div>
      </div>

      {/* ── Row 2: Secondary Navigation Bar · Mega-Menus · Quick Badges (Dark Glass) ─── */}
      <div className="hidden sm:block bg-slate-900 border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 h-10">

          {/* Nav links */}
          <div className="flex items-center gap-1 text-xs font-semibold text-slate-300">
            <Link
              href="/"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>

            <Link
              href="/worksheets"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
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
              href="/knowledge"
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Knowledge</span>
              <span className="inline-flex items-center px-1.5 py-0.2 text-[9px] font-extrabold uppercase tracking-wide bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full group-hover:bg-amber-400/30 transition-colors">
                60 Guides
              </span>
            </Link>

            <Link
              href="/quiz"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Quiz
            </Link>
          </div>

          {/* Quick CTA Badges */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              href="/grades"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-300 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 hover:border-pink-500/50 px-3.5 py-1 rounded-full transition-all whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
              <span>K–8 Curriculums</span>
            </Link>
            <Link
              href="/technologies"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 hover:border-indigo-500/50 px-3.5 py-1 rounded-full transition-all whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span>Tech Sheets</span>
            </Link>
          </div>

        </div>
      </div>

    </header>
  );
}


