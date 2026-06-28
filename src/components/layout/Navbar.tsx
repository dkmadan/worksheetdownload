import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-bold flex items-center justify-center">
            K
          </span>
          <span className="font-semibold text-gray-900 text-lg">KidsWorksheets</span>
        </Link>

        <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <Link href="/worksheets" className="hover:text-gray-900 transition-colors">Worksheets</Link>
          <Link href="/grades/kindergarten" className="hover:text-gray-900 transition-colors">Grades</Link>
          <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
        </div>

        <Link
          href="/worksheets"
          className="bg-pink-400 hover:bg-pink-500 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
        >
          Browse All
        </Link>
      </nav>
    </header>
  );
}
