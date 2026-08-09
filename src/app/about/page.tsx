import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Worksheets Download",
  description: "Learn about Worksheets Download — free printable worksheets for K–5 students.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          About <span className="text-cyan-600">Worksheets Download</span>
        </h1>
      </div>

      <div className="prose prose-gray max-w-none space-y-5 text-gray-600 leading-relaxed">
        <p>
          Worksheets Download is a free resource for parents and teachers looking for high-quality
          printable worksheets for children in kindergarten through 5th grade.
        </p>
        <p>
          Our worksheets cover five core subjects — <strong>Math</strong>, <strong>Reading</strong>,{" "}
          <strong>Writing</strong>, <strong>Science</strong>, and <strong>Art</strong> — and are
          carefully organised by grade level so you can always find the right difficulty for your child.
        </p>
        <p>
          Every worksheet is available to view in your browser and download as a PDF, completely free
          of charge. No sign-up required.
        </p>

        <div className="bg-amber-50 rounded-xl p-5 mt-6">
          <h2 className="font-semibold text-gray-900 mb-2">How to use this site</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Browse by subject or grade from the homepage.</li>
            <li>Click <strong>View</strong> on any worksheet to preview it in your browser.</li>
            <li>Click <strong>Download</strong> to save the PDF for printing.</li>
          </ol>
        </div>
      </div>

      <div className="mt-10">
        <Link
          href="/worksheets"
          className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Browse All Worksheets
        </Link>
      </div>
    </div>
  );
}
