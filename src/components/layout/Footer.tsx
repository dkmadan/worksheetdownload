import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center">K</span>
          <span className="font-medium text-gray-700">KidsWorksheets</span>
          <span>— Free printable worksheets for K–5</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/worksheets/math" className="hover:text-gray-700 transition-colors">Math</Link>
          <Link href="/worksheets/reading" className="hover:text-gray-700 transition-colors">Reading</Link>
          <Link href="/worksheets/science" className="hover:text-gray-700 transition-colors">Science</Link>
          <Link href="/about" className="hover:text-gray-700 transition-colors">About</Link>
        </div>
      </div>
    </footer>
  );
}
