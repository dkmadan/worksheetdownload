import Link from "next/link";
import Logo from "@/components/ui/Logo";
import NavAuthButton from "@/components/auth/NavAuthButton";

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
          <Link href="/grades" className="hover:text-gray-900 transition-colors">Grades</Link>
          <Link href="/subjects" className="hover:text-gray-900 transition-colors">Subjects</Link>
          <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
        </div>

        <div className="flex items-center gap-2">
          <NavAuthButton />
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
