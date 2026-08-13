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
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <Link href="/" className="flex-shrink-0">
          <Logo size={32} showText={true} textSize="text-lg" />
        </Link>

        {/* ── Desktop nav links ── */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600 flex-1">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <Link href="/worksheets" className="hover:text-gray-900 transition-colors">Worksheets</Link>
          <GradesMenu />
          <SubjectsMenu />
          <TechnologiesMenu />
          <Link href="/quiz" className="hover:text-gray-900 transition-colors">Quiz</Link>
        </div>

        {/* ── Right side: two rows (desktop) + hamburger (mobile) ── */}
        <div className="flex items-center gap-2">

          {/* Desktop: stacked rows */}
          <div className="hidden sm:flex flex-col items-end gap-1.5">
            {/* Row 1 — user info */}
            <NavAuthButton />
            {/* Row 2 — search + browse */}
            <div className="flex items-center gap-2">
              <NavSearch />
              <Link
                href="/worksheets"
                className="bg-pink-400 hover:bg-pink-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
              >
                Browse All
              </Link>
            </div>
          </div>

          {/* Mobile: only hamburger */}
          <MobileMenu />
        </div>

      </nav>
    </header>
  );
}
