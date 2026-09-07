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
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200/75 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3 sm:gap-6">
        
        {/* ── Left: Logo ──────────────────────────────────────────────── */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-[1.02]">
            <Logo size={34} showText={true} textSize="text-lg sm:text-xl" />
          </Link>
        </div>

        {/* ── Center: Primary Navigation (Desktop) ────────────────────── */}
        <nav className="hidden md:flex items-center gap-1 text-slate-600">
          <Link
            href="/worksheets"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-tight text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 transition-all"
          >
            <span>Worksheets</span>
          </Link>

          <GradesMenu />
          <SubjectsMenu />
          <TechnologiesMenu />

          <Link
            href="/knowledge"
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-tight text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 transition-all"
          >
            <span>Knowledge</span>
            <span className="inline-flex items-center px-1.5 py-0.2 text-[9px] font-extrabold uppercase tracking-wide bg-amber-500/10 text-amber-600 border border-amber-500/20 rounded-full group-hover:bg-amber-500/20 transition-colors">
              60 Guides
            </span>
          </Link>

          <Link
            href="/quiz"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-tight text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 transition-all"
          >
            <span>Quiz</span>
          </Link>
        </nav>

        {/* ── Right: Search · Quick Pills · Auth · Mobile Menu ─────────── */}
        <div className="flex items-center gap-2.5 flex-shrink-0 ml-auto">
          {/* Search bar */}
          <NavSearch />

          {/* Quick Access Badges (Large screens) */}
          <div className="hidden lg:flex items-center gap-1.5 pl-1">
            <Link
              href="/grades"
              className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700 bg-rose-50/90 hover:bg-rose-100/80 border border-rose-200/80 px-3 py-1.5 rounded-full transition-all shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span>K–8</span>
            </Link>
            <Link
              href="/technologies"
              className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-700 bg-indigo-50/90 hover:bg-indigo-100/80 border border-indigo-200/80 px-3 py-1.5 rounded-full transition-all shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span>Tech</span>
            </Link>
          </div>

          {/* User Auth (Desktop) */}
          <div className="hidden sm:flex items-center pl-1">
            <NavAuthButton />
          </div>

          {/* Mobile hamburger & auth */}
          <div className="sm:hidden flex items-center gap-2">
            <NavAuthButton />
            <MobileMenu />
          </div>
        </div>

      </div>
    </header>
  );
}

