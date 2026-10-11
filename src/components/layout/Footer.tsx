import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F1E4A] text-white pt-16 pb-12 border-t border-[#1b2d63] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">

          {/* Left Column (5 cols): Brand, Lede, and Info Card */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="WorksheetDownload home">
              <Logo size={36} showText={true} textSize="text-xl" lightText={true} />
            </Link>

            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white tracking-tight leading-tight mt-6 mb-3">
              Learn Smarter. <span className="italic text-[#F2B33D]">Practice Better.</span>
            </h2>

            <p className="text-sm leading-relaxed text-white/70 max-w-md mb-6">
              Download 3,000+ free printable worksheets for Kindergarten through Grade 8 and developer cheat sheets for 647+ technologies. Topic-wise practice sheets with complete answer keys.
            </p>

            {/* Academic badge card */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.07] border border-white/15 text-xs text-white/80">
              <span className="w-2 h-2 rounded-full bg-[#F2B33D] animate-pulse" />
              <span>100% Free Educational Resource &bull; No Sign-Up Needed</span>
            </div>
          </div>

          {/* Middle Column 1 (2 cols): Subjects */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#F2B33D] mb-4">
              Curriculum
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/worksheets/mathematics" className="hover:text-white transition-colors">Mathematics</Link>
              </li>
              <li>
                <Link href="/worksheets/english" className="hover:text-white transition-colors">English Language</Link>
              </li>
              <li>
                <Link href="/worksheets/science" className="hover:text-white transition-colors">Science & EVS</Link>
              </li>
              <li>
                <Link href="/worksheets/social-studies" className="hover:text-white transition-colors">Social Studies</Link>
              </li>
              <li>
                <Link href="/worksheets/gk" className="hover:text-white transition-colors">General Knowledge</Link>
              </li>
              <li>
                <Link href="/worksheets/reasoning" className="hover:text-white transition-colors">Logic & Reasoning</Link>
              </li>
              <li>
                <Link href="/coloring-sheets" className="hover:text-white transition-colors">Coloring Sheets</Link>
              </li>
            </ul>
          </div>

          {/* Middle Column 2 (2 cols): Grades */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#F2B33D] mb-4">
              Grade Levels
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/grades/kindergarten" className="hover:text-white transition-colors">Kindergarten (KG)</Link>
              </li>
              <li>
                <Link href="/grades/grade-1" className="hover:text-white transition-colors">Grade 1 & Grade 2</Link>
              </li>
              <li>
                <Link href="/grades/grade-3" className="hover:text-white transition-colors">Grade 3 & Grade 4</Link>
              </li>
              <li>
                <Link href="/grades/grade-5" className="hover:text-white transition-colors">Grade 5 & Grade 6</Link>
              </li>
              <li>
                <Link href="/grades/grade-7" className="hover:text-white transition-colors">Grade 7 & Grade 8</Link>
              </li>
              <li>
                <Link href="/grades" className="hover:text-[#F2B33D] text-white/90 font-semibold transition-colors">Browse All Grades →</Link>
              </li>
            </ul>
          </div>

          {/* Right Column (3 cols): Tech & Tools */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#F2B33D] mb-4">
              Resources & Tools
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/technologies" className="hover:text-white transition-colors">647+ Tech Cheat Sheets</Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-white transition-colors">Worksheet Generators</Link>
              </li>
              <li>
                <Link href="/maps" className="hover:text-white transition-colors">Geography & Map Outlines</Link>
              </li>
              <li>
                <Link href="/knowledge" className="hover:text-white transition-colors">Knowledge Guides</Link>
              </li>
              <li>
                <Link href="/quiz" className="hover:text-white transition-colors">Practice Quizzes</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy & Terms</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} WorksheetDownload. Free printable educational worksheets for students, teachers, and developers.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/60">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
