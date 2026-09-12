import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOOLS, getTool } from "@/lib/tools/registry";
import MathGenerator from "@/components/tools/MathGenerator";
import HandwritingGenerator from "@/components/tools/HandwritingGenerator";
import NumberLineGenerator from "@/components/tools/NumberLineGenerator";
import GridPaperGenerator from "@/components/tools/GridPaperGenerator";
import SpellingGenerator from "@/components/tools/SpellingGenerator";
import TimesTableGenerator from "@/components/tools/TimesTableGenerator";
import WordSearchGenerator from "@/components/tools/WordSearchGenerator";
import ClockGenerator from "@/components/tools/ClockGenerator";
import CursiveGenerator from "@/components/tools/CursiveGenerator";
import { breadcrumbsJsonLd, softwareAppJsonLd, faqJsonLd } from "@/lib/jsonLd";
import BookmarkButton from "@/components/bookmarks/BookmarkButton";

export function generateStaticParams() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return {
    title: `${tool.title} — Free Printable Worksheet Generator`,
    description: `${tool.description} Customize settings and download a randomized printable PDF with answer key for free.`,
    keywords: tool.keywords,
    alternates: { canonical: `/tools/${tool.slug}` },
    openGraph: {
      title: `${tool.title} | Free Worksheet Generator`,
      description: tool.description,
      url: `/tools/${tool.slug}`,
      type: "website",
    },
    twitter: {
      title: `${tool.title} | Free Worksheet Generator`,
      description: tool.description,
    },
  };
}

function renderTool(slug: string) {
  switch (slug) {
    case "math-worksheet-generator":
      return <MathGenerator />;
    case "handwriting-practice":
      return <HandwritingGenerator />;
    case "number-line-generator":
      return <NumberLineGenerator />;
    case "graph-paper-generator":
      return <GridPaperGenerator />;
    case "spelling-worksheet-generator":
      return <SpellingGenerator />;
    case "multiplication-table-generator":
      return <TimesTableGenerator />;
    case "word-search-generator":
      return <WordSearchGenerator />;
    case "telling-time-worksheet-generator":
      return <ClockGenerator />;
    case "cursive-writing-generator":
      return <CursiveGenerator />;
    default:
      return null;
  }
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const body = renderTool(slug);
  if (!body) notFound();

  const breadcrumbSchema = breadcrumbsJsonLd([
    { name: "Home", url: "/" },
    { name: "Tools", url: "/tools" },
    { name: tool.title, url: `/tools/${tool.slug}` },
  ]);

  const appSchema = softwareAppJsonLd({
    name: tool.title,
    description: tool.description,
    url: `/tools/${tool.slug}`,
    applicationCategory: "EducationalApplication",
  });

  const toolFaqs = faqJsonLd([
    {
      q: `Is the ${tool.title} free to use?`,
      a: `Yes, this worksheet generator is 100% free with unlimited sheet creation and instant PDF download with answer keys.`,
    },
    {
      q: "Can I generate different problem sets?",
      a: "Yes, clicking Generate creates a fresh, randomized set of questions and exercises every time.",
    },
  ]);

  return (
    <div className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolFaqs) }}
      />

      <div className={`bg-gradient-to-r ${tool.gradient} text-white`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <nav className="text-xs font-medium text-white/70 mb-3 flex items-center gap-1.5">
            <Link href="/tools" className="hover:text-white">Tools</Link>
            <span>/</span>
            <span className="text-white/90">{tool.short}</span>
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight flex items-center gap-3">
                <span>{tool.emoji}</span>
                {tool.title}
              </h1>
              <p className="text-white/85 mt-2 max-w-2xl">{tool.tagline}</p>
            </div>
            <div className="flex-shrink-0">
              <BookmarkButton
                item={{
                  id: `/tools/${tool.slug}`,
                  url: `/tools/${tool.slug}`,
                  title: tool.title,
                  category: "Worksheet Generator",
                  badge: "Interactive Tool",
                  icon: tool.emoji,
                  description: tool.description,
                }}
                variant="dark"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8">{body}</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-2">About this generator</h2>
          <p className="text-sm text-slate-500 leading-relaxed">{tool.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {TOOLS.filter((t) => t.slug !== tool.slug).map((t) => (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors"
              >
                <span>{t.emoji}</span> {t.short}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

