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
            <span className="text-xs font-bold bg-pink-500/40 text-pink-100 border border-pink-400/60 px-3 py-1 rounded-full tracking-wide">
              📚 K–8 Printable Worksheets
            </span>
            <span className="text-xs font-bold bg-indigo-500/40 text-indigo-100 border border-indigo-400/60 px-3 py-1 rounded-full tracking-wide">
              💻 647+ Tech Cheat Sheets
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white leading-[1.1] tracking-tight drop-shadow-md">
            Learn Smarter.{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-violet-400 bg-clip-text text-transparent">
              Practice Better.
            </span>
          </h1>

          <p className="text-slate-100 text-lg max-w-lg leading-relaxed">
            Free printable worksheets for every grade{" "}
            <span className="text-white font-semibold">and</span> developer cheat
            sheets for 647 technologies — one place for every learner.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/grades"
              className="bg-pink-500 hover:bg-pink-400 text-white text-sm font-bold px-6 py-3 rounded-full transition-colors shadow-xl shadow-pink-900/60 ring-1 ring-pink-400/40"
            >
              Browse Worksheets
            </Link>
            <Link
              href="/technologies"
              className="bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-bold px-6 py-3 rounded-full transition-colors shadow-xl shadow-indigo-900/60 ring-1 ring-indigo-400/40"
            >
              Tech Cheat Sheets
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-4 border-t border-white/20 text-sm text-slate-200">
            <span><span className="text-white font-bold">3,000+</span> practice sheets</span>
            <span className="text-white/30 hidden sm:inline">·</span>
            <span><span className="text-white font-bold">647</span> tech resources</span>
            <span className="text-white/30 hidden sm:inline">·</span>
            <span><span className="text-white font-bold">K–8</span> all grades</span>
            <span className="text-white/30 hidden sm:inline">·</span>
            <span className="text-emerald-300 font-bold">Always free</span>
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
