import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-gradient-to-br from-indigo-700 via-violet-700 to-purple-800 py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <span className="inline-block text-xs font-bold text-indigo-300 uppercase tracking-widest mb-3">
          Free. Forever.
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-balance">
          Everything a learner needs — in one place.
        </h2>
        <p className="text-indigo-200 mt-3 text-lg leading-relaxed">
          Whether you&apos;re helping a child with K–8 subjects or prepping for
          your next tech interview, WorksheetDownload has you covered.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-7">
          <Link
            href="/grades"
            className="bg-pink-500 hover:bg-pink-400 text-white font-semibold px-7 py-3 rounded-full transition-colors shadow-lg shadow-pink-950/40"
          >
            Browse Worksheets
          </Link>
          <Link
            href="/technologies"
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3 rounded-full transition-colors backdrop-blur-sm"
          >
            Tech Cheat Sheets
          </Link>
        </div>
      </div>
    </section>
  );
}
