import Link from "next/link";
import { TECH_DATA } from "@/lib/technologies";

const FEATURED_SLUGS = [
  "backend-technologies",
  "ai-ml",
  "ai-agents",
  "cloud",
  "api-technologies",
  "architecture",
  "caching",
  "bi-visualization",
];

export default function TechSection() {
  const featured = TECH_DATA.filter((cat) => FEATURED_SLUGS.includes(cat.slug));

  const totalItems = TECH_DATA.reduce(
    (n, cat) =>
      n + cat.subcategories.reduce((m, sub) => m + sub.items.length, 0),
    0
  );

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">
            Developer Resources
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Tech Cheat Sheets & Interview Prep
          </h2>
          <p className="text-slate-500 mt-3 max-w-lg mx-auto text-base">
            Free PDF cheat sheets for {totalItems}+ technologies across{" "}
            {TECH_DATA.length} categories — perfect for interviews and quick
            reference.
          </p>
        </div>

        {/* Featured category cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {featured.map((cat) => {
            const count = cat.subcategories.reduce(
              (n, sub) => n + sub.items.length,
              0
            );
            return (
              <Link
                key={cat.slug}
                href={`/technologies/${cat.slug}`}
                className="group relative overflow-hidden rounded-2xl p-5 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-xl shadow-md transition-all duration-200"
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cat.color}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Content */}
                <span className="relative text-3xl leading-none">{cat.icon}</span>
                <div className="relative">
                  <h3 className="font-bold text-white text-sm leading-snug">
                    {cat.label}
                  </h3>
                  <p className="text-white/70 text-xs mt-1">{count} resources</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Browse all link */}
        <div className="text-center mt-8">
          <Link
            href="/technologies"
            className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-indigo-400 text-slate-700 hover:text-indigo-600 font-semibold text-sm px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          >
            Browse all {TECH_DATA.length} tech categories
            <span className="text-base">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
