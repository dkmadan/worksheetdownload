import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#dbeafe] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-5">
          <span className="self-start text-xs font-semibold bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
            ✦ Free for everyone
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Worksheets that make{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">
              learning fun
            </span>
          </h1>

          <p className="text-gray-600 text-lg max-w-md leading-relaxed">
            Hundreds of printable worksheets for kindergarten through 5th grade.
            Math, reading, writing, science, and art — all designed to spark
            curiosity.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/worksheets"
              className="bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
            >
              Browse Worksheets
            </Link>
            <Link
              href="/grades/kindergarten"
              className="border border-gray-900 text-gray-900 hover:bg-gray-100 text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
            >
              Find by Grade
            </Link>
          </div>
        </div>

        {/* Right column — illustration placeholder */}
        <div className="flex-shrink-0 w-72 h-64 bg-white/60 rounded-2xl shadow-sm flex items-center justify-center">
          <div className="text-center select-none">
            <div className="text-7xl mb-3">👧🧒👦</div>
            <div className="text-5xl">📚✏️🎨</div>
            <p className="text-gray-400 text-xs mt-3 font-medium">Learning together</p>
          </div>
        </div>
      </div>
    </section>
  );
}
