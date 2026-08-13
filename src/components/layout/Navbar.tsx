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
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <Logo size={32} showText={true} textSize="text-lg" />
        </Link>

        <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <Link href="/worksheets" className="hover:text-gray-900 transition-colors">Worksheets</Link>
          <GradesMenu />
          <SubjectsMenu />
          <TechnologiesMenu />
          <Link href="/quiz" className="hover:text-gray-900 transition-colors">Quiz</Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <NavSearch />
          </div>
          <NavAuthButton />
          <MobileMenu />
          <Link
            href="/worksheets"
            className="hidden sm:block bg-pink-400 hover:bg-pink-500 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            Browse All
          </Link>
        </div>
      </nav>
    </header>
  );
}
