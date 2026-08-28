import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-3">
          <Logo size={24} showText={true} textSize="text-sm" />
          <span>— Free printable worksheets for K–8</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/worksheets/math" className="hover:text-gray-700 transition-colors">Math</Link>
          <Link href="/worksheets/reading" className="hover:text-gray-700 transition-colors">Reading</Link>
          <Link href="/worksheets/science" className="hover:text-gray-700 transition-colors">Science</Link>
          <Link href="/knowledge" className="hover:text-gray-700 transition-colors">Knowledge</Link>
          <Link href="/about" className="hover:text-gray-700 transition-colors">About</Link>
          <Link href="/disclaimer" className="hover:text-gray-700 transition-colors">Disclaimer</Link>
          <Link href="/privacy-policy" className="hover:text-gray-700 transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
