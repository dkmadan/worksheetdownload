import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TECH_DATA, findCategory } from "@/lib/technologies";
import { TechItemIcon } from "@/components/icons/TechItemIcon";

export function generateStaticParams() {
  return TECH_DATA.map((cat) => ({ tech: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tech: string }>;
}): Promise<Metadata> {
  const { tech } = await params;
  const cat = findCategory(tech);
  if (!cat) return {};
  const count = cat.subcategories.reduce((s, sub) => s + sub.items.length, 0);
  return {
    title: `${cat.label} — ${count} Technologies`,
    description: cat.description,
    alternates: { canonical: `/technologies/${tech}` },
    openGraph: { title: `${cat.label} | WorksheetDownload`, description: cat.description, url: `/technologies/${tech}` },
  };
}

export default async function TechCategoryPage({
  params,
}: {
  params: Promise<{ tech: string }>;
}) {
  const { tech } = await params;
  const cat = findCategory(tech);
  if (!cat) notFound();

  const totalItems = cat.subcategories.reduce((s, sub) => s + sub.items.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Hero banner */}
      <div className={`bg-gradient-to-r ${cat.color}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/technologies" className="hover:text-white transition-colors">Technologies</Link>
            <span>›</span>
            <span className="text-white font-medium">{cat.label}</span>
          </nav>

          <div className="flex items-start gap-5">
            <span className="text-5xl sm:text-6xl leading-none">{cat.icon}</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                {cat.label}
              </h1>
              <p className="text-white/70 text-base max-w-2xl leading-relaxed">{cat.description}</p>
              <div className="flex items-center gap-4 mt-4">
                <span className="text-sm text-white/60 font-medium">
                  <span className="text-white font-bold">{totalItems}</span> technologies
                </span>
                <span className="text-white/30">·</span>
                <span className="text-sm text-white/60 font-medium">
                  <span className="text-white font-bold">{cat.subcategories.length}</span> categories
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-10">
        {cat.subcategories.map((sub) => (
          <div key={sub.name}>
            {/* Subcategory header */}
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-lg font-bold text-white">{sub.name}</h2>
              <span className="text-xs text-gray-500 bg-gray-800 border border-gray-700 px-2 py-0.5 rounded-full">
                {sub.items.length}
              </span>
              <div className="flex-1 h-px bg-gray-800" />
            </div>

            {/* Technology cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {sub.items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/technologies/${cat.slug}/${item.slug}`}
                  className="group bg-gray-800/60 hover:bg-gray-800 border border-gray-700/50 hover:border-gray-600 rounded-xl p-3.5 flex flex-col gap-2 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
                >
                  <TechItemIcon name={item.name} size={32} />
                  <p className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors leading-snug">
                    {item.name}
                  </p>
                  <p className="text-[10px] text-gray-600 group-hover:text-gray-500 transition-colors">
                    {sub.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">Explore more technology categories</p>
            <p className="text-gray-400 text-sm">Browse all 37 categories and 650+ technologies</p>
          </div>
          <Link
            href="/technologies"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm flex-shrink-0"
          >
            All Technologies →
          </Link>
        </div>
      </div>
    </div>
  );
}
