import Link from "next/link";
import Image from "next/image";
import HeroDoodleBackground from "@/components/home/HeroDoodleBackground";

export default function HeroSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden bg-[#F7F5EF] border-b border-[#E4E0D4]">
      {/* Inline SVG doodle pattern on warm ivory */}
      <HeroDoodleBackground />
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14">

        {/* Left column — editorial copy */}
        <div className="flex-1 flex flex-col gap-5 text-left">
          {/* Eyebrow badge (EducationPath style) */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4E0D4] text-[#9A5B00] text-xs font-bold w-fit shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#1E3A8A]" />
            <span className="eb text-[11.5px]">K–8 Printable Worksheets &bull; 647+ Tech Cheat Sheets</span>
          </div>

          {/* Editorial Display Headline (Newsreader Serif) */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal text-[#0F1E4A] tracking-tight leading-[1.08]">
            Learn Smarter.<br />
            <span className="italic font-medium text-[#1E3A8A]">
              Practice Better.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#5B6072] max-w-xl leading-relaxed">
            Free printable worksheets for Kindergarten through Grade 8{" "}
            <span className="text-[#0F1E4A] font-semibold">and</span> developer cheat
            sheets for 647 technologies — curated in one clear place for every learner.
          </p>

          {/* Action buttons (EducationPath Saffron + Navy) */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/grades"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#F2B33D] hover:bg-[#e2a42b] text-[#0F1E4A] text-sm font-bold shadow-xs hover:scale-[1.01] transition-all cursor-pointer border border-[#e2a42b]"
            >
              <span>Browse Worksheets</span>
              <span>→</span>
            </Link>
            <Link
              href="/technologies"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1E3A8A] hover:bg-[#0F1E4A] text-white text-sm font-semibold shadow-xs hover:scale-[1.01] transition-all cursor-pointer"
            >
              <span>Tech Cheat Sheets</span>
              <span>→</span>
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 border-t border-[#E4E0D4] text-xs sm:text-sm text-[#5B6072]">
            <span><span className="text-[#0F1E4A] font-bold">3,000+</span> practice sheets</span>
            <span className="text-[#E4E0D4] hidden sm:inline">&bull;</span>
            <span><span className="text-[#0F1E4A] font-bold">647</span> tech resources</span>
            <span className="text-[#E4E0D4] hidden sm:inline">&bull;</span>
            <span><span className="text-[#0F1E4A] font-bold">K–8</span> all grades</span>
            <span className="text-[#E4E0D4] hidden sm:inline">&bull;</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Always Free
            </span>
          </div>
        </div>

        {/* Right column — 3D Subjects Orbital Hero Image */}
        <div className="flex-shrink-0 flex items-center justify-center relative group">
          <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] transition-transform duration-500 hover:scale-105">
            <Image
              src="/hero-subjects.png"
              alt="K-8 Educational Subjects — Maths, Science, English, EVS, Social Studies, GK, Reasoning, Art"
              fill
              priority
              sizes="(max-width: 640px) 340px, 440px"
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
