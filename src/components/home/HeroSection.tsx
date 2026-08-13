import Link from "next/link";
import HeroVisual from "@/components/home/HeroVisual";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12">

        {/* Left column — copy */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Eyebrow badges */}
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-semibold bg-pink-900/50 text-pink-300 border border-pink-700/40 px-3 py-1 rounded-full">
              📚 K–8 Printable Worksheets
            </span>
            <span className="text-xs font-semibold bg-indigo-900/50 text-indigo-300 border border-indigo-700/40 px-3 py-1 rounded-full">
              💻 647+ Tech Cheat Sheets
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white leading-[1.1] tracking-tight">
            Learn Smarter.{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Practice Better.
            </span>
          </h1>

          <p className="text-slate-300 text-lg max-w-lg leading-relaxed">
            Free printable worksheets for every grade{" "}
            <span className="text-white font-medium">and</span> developer cheat
            sheets for 647 technologies — one place for every learner.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/grades"
              className="bg-pink-500 hover:bg-pink-400 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-lg shadow-pink-950/50"
            >
              Browse Worksheets
            </Link>
            <Link
              href="/technologies"
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-lg shadow-indigo-950/50"
            >
              Tech Cheat Sheets
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-4 border-t border-slate-800 text-sm text-slate-400">
            <span><span className="text-white font-semibold">3,000+</span> practice sheets</span>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <span><span className="text-white font-semibold">647</span> tech resources</span>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <span><span className="text-white font-semibold">K–8</span> all grades</span>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <span className="text-emerald-400 font-semibold">Always free</span>
          </div>
        </div>

        {/* Right column — animated visual */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
