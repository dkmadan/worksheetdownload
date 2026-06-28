import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-gradient-to-r from-cyan-600 to-teal-600 py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to start learning?
        </h2>
        <p className="text-cyan-100 mt-3 text-lg">
          Browse hundreds of free printable worksheets and make every study session fun.
        </p>
        <Link
          href="/worksheets"
          className="inline-block mt-6 border-2 border-white text-white font-semibold px-7 py-3 rounded-full hover:bg-white hover:text-cyan-700 transition-colors"
        >
          Browse Worksheets
        </Link>
      </div>
    </section>
  );
}
