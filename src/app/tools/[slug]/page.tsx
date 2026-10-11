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
import ReadingGenerator from "@/components/tools/ReadingGenerator";
import FractionsGenerator from "@/components/tools/FractionsGenerator";
import MoneyGenerator from "@/components/tools/MoneyGenerator";
import CrosswordGenerator from "@/components/tools/CrosswordGenerator";
import GrammarGenerator from "@/components/tools/GrammarGenerator";
import FlashcardGenerator from "@/components/tools/FlashcardGenerator";
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
  const seoTitle = tool.title.startsWith("Free") ? tool.title : `Free ${tool.title}`;
  return {
    title: `${seoTitle} — Printable PDF with Answer Key`,
    description: `${tool.description} Customize settings and download a randomized printable PDF with answer key for free.`,
    keywords: tool.keywords,
    alternates: { canonical: `/tools/${tool.slug}` },
    openGraph: {
      title: `${seoTitle} | Free Worksheet Generator`,
      description: tool.description,
      url: `/tools/${tool.slug}`,
      type: "website",
    },
    twitter: {
      title: `${seoTitle} | Free Worksheet Generator`,
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
    case "reading-comprehension-generator":
      return <ReadingGenerator />;
    case "fractions-visual-worksheet-generator":
      return <FractionsGenerator />;
    case "money-counting-worksheet-generator":
      return <MoneyGenerator />;
    case "crossword-generator":
      return <CrosswordGenerator />;
    case "grammar-exercise-generator":
      return <GrammarGenerator />;
    case "flashcard-generator":
      return <FlashcardGenerator />;
    default:
      return null;
  }
}

function getToolSpecificFaqs(slug: string, title: string): { q: string; a: string }[] {
  const base = [
    {
      q: `Is the ${title} completely free to use?`,
      a: `Yes, this worksheet generator is 100% free with unlimited sheet creation, browser printing, and instant high-resolution PDF download with answer keys. No account or subscription required.`,
    },
    {
      q: "Can I generate different randomized versions of this worksheet?",
      a: "Yes, clicking the “New sheet” button instantly creates a fresh, randomized set of questions and exercises while preserving your selected configuration.",
    },
  ];

  switch (slug) {
    case "reading-comprehension-generator":
      return [
        ...base,
        {
          q: "What grade levels and passage categories are supported?",
          a: "The generator supports Kindergarten through Grade 12 across 8 curriculum categories: Fiction, Nonfiction, Science, History, Biography, Nature, Moral Stories, and General Knowledge.",
        },
        {
          q: "Can I use my own custom reading passage?",
          a: "Yes, you can toggle custom passage mode to paste your own classroom text and automatically generate paired comprehension exercises.",
        },
      ];
    case "fractions-visual-worksheet-generator":
      return [
        ...base,
        {
          q: "What types of visual fraction diagrams can I create?",
          a: "You can generate mathematically accurate fraction circles (pie models), horizontal fraction bars, grid rectangles, and numbered fraction lines.",
        },
        {
          q: "Does this generator support blank diagrams for student coloring?",
          a: "Yes, selecting the 'Shade the Fraction' exercise produces blank partition outlines for students to color in with pencil or crayon.",
        },
      ];
    case "money-counting-worksheet-generator":
      return [
        ...base,
        {
          q: "Which world currencies and denominations are available?",
          a: "The tool supports USD ($), INR (₹), GBP (£), EUR (€), CAD ($), and AUD ($) with authentic coin and banknote graphics and exact denomination values.",
        },
        {
          q: "Are calculations accurate and free from rounding errors?",
          a: "All currency math is computed in exact integer minor units (cents, paise, and pence) to ensure 100% mathematical precision in totals and change calculations.",
        },
      ];
    case "crossword-generator":
      return [
        ...base,
        {
          q: "How does the crossword generator construct valid grids?",
          a: "It runs an automated crossword layout algorithm that searches intersecting letter positions, verifies non-colliding cell boundaries, and assigns standard Across and Down clue numbering.",
        },
        {
          q: "Can I create custom classroom crosswords from my own vocabulary list?",
          a: "Yes, enter words and clues in the format 'WORD: Clue' to automatically build a custom puzzle with an optional word bank and solution page.",
        },
      ];
    case "grammar-exercise-generator":
      return [
        ...base,
        {
          q: "What grammar topics can I include on the practice sheet?",
          a: "You can select from 16 key topics including nouns, pronouns, verbs, adjectives, adverbs, articles, prepositions, conjunctions, tenses, subject-verb agreement, active/passive voice, direct/indirect speech, and punctuation.",
        },
        {
          q: "What question types are supported?",
          a: "Exercises can be formatted as fill-in-the-blanks, multiple choice, error correction, sentence rewriting, sentence completion, identifying parts of speech, and matching columns.",
        },
      ];
    case "flashcard-generator":
      return [
        ...base,
        {
          q: "How does double-sided (duplex) flashcard printing work?",
          a: "When double-sided mode is active, the generator horizontally mirrors the card layout on even-numbered pages so that front questions and back answers align perfectly when printed double-sided.",
        },
        {
          q: "Can I import custom flashcard terms from a CSV file?",
          a: "Yes, use the 'Import Custom Cards' button to paste comma-separated or tab-separated question and answer pairs.",
        },
      ];
    default:
      return base;
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

  const toolFaqs = faqJsonLd(getToolSpecificFaqs(slug, tool.title));

  return (
    <div className="min-h-screen bg-[#F7F5EF]">
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

