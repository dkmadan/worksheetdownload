import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-gradient-to-br from-[#1E3A8A] via-[#14285D] to-[#0F1E4A] py-20 px-4 sm:px-6 border-t border-[#1b2d63] relative overflow-hidden">
      {/* Decorative ambient radial glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F2B33D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="inline-block text-xs font-bold text-[#F2B33D] uppercase tracking-widest mb-3 px-3.5 py-1 rounded-full bg-white/10 border border-white/15">
          Free Forever &bull; No Sign-Up Required
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-white text-balance leading-tight">
          Everything a learner needs — in one clear path.
        </h2>

        <p className="text-white/75 mt-4 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
          Whether you&apos;re helping a child master K–8 subject fundamentals or prepping for
          your next tech engineering interview, WorksheetDownload has you covered.
        </p>

        <div className="flex flex-wrap justify-center gap-3.5 mt-8">
          <Link
            href="/grades"
            className="inline-flex items-center gap-2 bg-[#F2B33D] hover:bg-[#e2a42b] text-[#0F1E4A] font-bold px-7 py-3.5 rounded-full transition-all shadow-md hover:scale-[1.01] text-sm"
          >
            <span>Browse Worksheets</span>
            <span>→</span>
          </Link>
          <Link
            href="/technologies"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-7 py-3.5 rounded-full transition-all backdrop-blur-sm hover:scale-[1.01] text-sm"
          >
            <span>Tech Cheat Sheets</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
