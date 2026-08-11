import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TECHNOLOGIES, slugifyTech } from "@/lib/technologies";

export function generateStaticParams() {
  return TECHNOLOGIES.map((tech) => ({ tech: slugifyTech(tech) }));
}

function findTech(slug: string) {
  return TECHNOLOGIES.find((t) => slugifyTech(t) === slug) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tech: string }>;
}): Promise<Metadata> {
  const { tech } = await params;
  const label = findTech(tech);
  if (!label) return {};
  return {
    title: `${label} — Technology Topic`,
    description: `Explore worksheets and learning resources for ${label}. Printable practice sheets covering key concepts, tools, and skills.`,
    alternates: { canonical: `/technologies/${tech}` },
  };
}

export default async function TechPage({
  params,
}: {
  params: Promise<{ tech: string }>;
}) {
  const { tech } = await params;
  const label = findTech(tech);
  if (!label) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <span>›</span>
          <Link href="/technologies" className="hover:text-gray-300 transition-colors">Technologies</Link>
          <span>›</span>
          <span className="text-gray-300 font-medium">{label}</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{label}</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Worksheets and learning resources for {label} are coming soon.
            Meanwhile, browse our full worksheet library.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/worksheets"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Browse All Worksheets →
          </Link>
          <Link
            href="/technologies"
            className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold px-6 py-3 rounded-full transition-colors border border-gray-700"
          >
            ← All Technologies
          </Link>
        </div>
      </div>
    </div>
  );
}
