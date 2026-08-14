import Link from "next/link";
import HeroVisual from "@/components/home/HeroVisual";
import HeroDoodleBackground from "@/components/home/HeroDoodleBackground";

export default function HeroSection() {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Inline SVG doodle pattern — no external image required */}
      <HeroDoodleBackground />
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12">

        {/* Left column — copy */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Eyebrow badges */}
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-semibold bg-pink-100 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">
              📚 K–8 Printable Worksheets
            </span>
            <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 border border-indigo-200 px-3 py-1 rounded-full">
              💻 647+ Tech Cheat Sheets
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 leading-[1.1] tracking-tight">
            Learn Smarter.{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
              Practice Better.
            </span>
          </h1>

          <p className="text-slate-600 text-lg max-w-lg leading-relaxed">
            Free printable worksheets for every grade{" "}
            <span className="text-slate-900 font-medium">and</span> developer cheat
            sheets for 647 technologies — one place for every learner.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/grades"
              className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-md shadow-pink-200"
            >
              Browse Worksheets
            </Link>
            <Link
              href="/technologies"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-md shadow-indigo-200"
            >
              Tech Cheat Sheets
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-4 border-t border-slate-200 text-sm text-slate-500">
            <span><span className="text-slate-900 font-semibold">3,000+</span> practice sheets</span>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <span><span className="text-slate-900 font-semibold">647</span> tech resources</span>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <span><span className="text-slate-900 font-semibold">K–8</span> all grades</span>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <span className="text-emerald-600 font-semibold">Always free</span>
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
