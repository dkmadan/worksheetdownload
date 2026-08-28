import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions — WorksheetDownload",
  description:
    "Terms and Conditions for WorksheetDownload. Free educational worksheets for K–8 and tech cheat sheets for developers.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Terms &amp; Conditions</h1>
        <p className="text-sm text-gray-500 mt-2">Last updated: August 2026</p>
      </div>

      <div className="prose prose-gray max-w-none space-y-5 text-gray-600 leading-relaxed">
        <p>
          Welcome to <strong>WorksheetDownload</strong> (worksheetdownload.com). By accessing or using
          our website, resources, printable worksheets, and developer cheat sheets, you agree to comply
          with and be bound by the following terms and conditions.
        </p>

        <h2 className="font-semibold text-gray-900 text-xl mt-8">1. Permitted Educational Use</h2>
        <p>
          WorksheetDownload provides free educational resources. You are welcome to:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Download, print, and duplicate worksheets for classroom, homeschool, tutoring, or personal study.</li>
          <li>Share unmodified PDF materials with students, teachers, and peers.</li>
          <li>Use developer cheat sheets for technical interview preparation, learning, and reference.</li>
        </ul>

        <h2 className="font-semibold text-gray-900 text-xl mt-8">2. Intellectual Property &amp; Restrictions</h2>
        <p>
          All original content, designs, illustrations, and compilations on WorksheetDownload are protected
          by copyright and intellectual property laws. You may not:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Resell, redistribute for commercial profit, or bundle our worksheets into paid packages without written permission.</li>
          <li>Systematically scrape, harvest, or bulk-extract worksheets or content without authorization.</li>
          <li>Remove copyright, logo, or watermark notices from downloaded worksheets and cheat sheets.</li>
        </ul>

        <h2 className="font-semibold text-gray-900 text-xl mt-8">3. Accuracy of Educational Content</h2>
        <p>
          While we strive for 100% accuracy in our questions, answers, and cheat sheets, errors can occasionally occur.
          All materials are provided &ldquo;as is&rdquo; without warranties of any kind. Please refer to our{" "}
          <Link href="/disclaimer" className="text-cyan-600 hover:text-cyan-700 underline">
            Disclaimer
          </Link>{" "}
          for more details on verifying answers.
        </p>

        <h2 className="font-semibold text-gray-900 text-xl mt-8">4. Limitation of Liability</h2>
        <p>
          In no event shall WorksheetDownload, its authors, or operators be liable for any direct, indirect,
          incidental, or consequential damages resulting from the use or inability to use the site or its materials.
        </p>

        <h2 className="font-semibold text-gray-900 text-xl mt-8">5. Changes to Terms</h2>
        <p>
          We reserve the right to revise these Terms &amp; Conditions at any time. Your continued use of the website
          signifies your agreement to the updated terms.
        </p>

        <h2 className="font-semibold text-gray-900 text-xl mt-8">6. Contact Us</h2>
        <p>
          If you have any questions or feedback regarding these Terms &amp; Conditions, please reach out to us at{" "}
          <a
            href="mailto:support@toytobook.com"
            className="text-cyan-600 hover:text-cyan-700"
          >
            support@toytobook.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
