import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — WorksheetDownload",
  description:
    "WorksheetDownload provides free educational worksheets and technology cheat sheets for reference and learning. Content is provided in good faith but may contain errors — always cross-verify answers.",
  alternates: { canonical: "/disclaimer" },
};

const sections = [
  {
    icon: "📋",
    title: "Educational Content",
    body: "All worksheets, cheat sheets, and learning resources on WorksheetDownload.com are provided purely for educational and reference purposes. We have made every reasonable effort to ensure the accuracy of the content, but we cannot guarantee that all information is free of errors, omissions, or inaccuracies.",
  },
  {
    icon: "✅",
    title: "Always Cross-Verify Answers",
    body: "Worksheet answers and cheat sheet content are generated to the best of our ability and reviewed for quality. However, for academic submissions, professional work, or any decision-making, we strongly recommend independently verifying answers and facts against authoritative sources such as textbooks, official documentation, or certified instructors.",
  },
  {
    icon: "⚙️",
    title: "Technology Cheat Sheets — Important Notice",
    body: "Technology evolves rapidly. Syntax, APIs, commands, configuration options, and best practices for frameworks, libraries, and tools can change significantly between versions and releases. Our cheat sheets reflect the state of each technology at the time of creation and may not reflect the latest updates. Always consult the official documentation for the specific version you are using.",
    bullets: [
      "Version numbers and release dates shown may be outdated.",
      "Code snippets and commands should be tested in your own environment before use in production.",
      "Security recommendations may have changed — refer to the official security advisories for each technology.",
      "Deprecations, breaking changes, and new features may not be reflected.",
      "Cloud provider services (AWS, GCP, Azure) pricing and availability are subject to change.",
    ],
  },
  {
    icon: "🎓",
    title: "K–8 Worksheets",
    body: "Grade worksheets are designed to align with common curriculum standards but may not perfectly match every school board, state, or national syllabus. Teachers and parents should review worksheet content for suitability before use. Questions and answers are algorithmically generated for practice purposes and should supplement, not replace, formal instruction.",
  },
  {
    icon: "🔗",
    title: "No Professional Advice",
    body: "Nothing on this website constitutes professional academic, legal, financial, or technical advice. WorksheetDownload.com is a supplemental learning tool. For professional or certified guidance, consult a qualified expert in the relevant field.",
  },
  {
    icon: "⚖️",
    title: "Limitation of Liability",
    body: "WorksheetDownload.com and its contributors shall not be held liable for any loss, damage, or inconvenience arising from the use of, or reliance on, information provided on this site. Use of the resources is entirely at your own risk. We make no warranties, express or implied, as to the accuracy, completeness, or fitness for any particular purpose of the content.",
  },
  {
    icon: "🔄",
    title: "Content Updates",
    body: "We regularly review and update our resources to improve accuracy and coverage. If you spot an error, outdated information, or have a suggestion, we welcome feedback. Please reach out through our contact channels so we can improve the experience for everyone.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Disclaimer</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Disclaimer</h1>
          <p className="mt-3 text-gray-500 text-base leading-relaxed">
            Last updated: August 2026 &nbsp;·&nbsp; Please read this disclaimer carefully before using our resources.
          </p>
          <div className="mt-5 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
            <span className="text-amber-500 text-lg flex-shrink-0 mt-0.5">⚠️</span>
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>Quick summary:</strong> Our worksheets and cheat sheets are provided in good faith for educational use.
              Content may contain errors or become outdated — especially technology cheat sheets.{" "}
              <strong>Always cross-verify answers</strong> before relying on them for academic, professional, or production use.
            </p>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {sections.map((sec) => (
          <div key={sec.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{sec.icon}</span>
              <h2 className="text-lg font-bold text-gray-900">{sec.title}</h2>
            </div>
            <p className="text-gray-600 text-[15px] leading-relaxed">{sec.body}</p>
            {sec.bullets && (
              <ul className="mt-4 space-y-2">
                {sec.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                    <span className="text-amber-400 mt-0.5 flex-shrink-0">•</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Footer note */}
        <div className="text-center text-sm text-gray-400 pb-4">
          By using WorksheetDownload.com you agree to this disclaimer.{" "}
          <Link href="/privacy-policy" className="text-blue-500 hover:text-blue-600 transition-colors">Privacy Policy</Link>
          {" "}·{" "}
          <Link href="/about" className="text-blue-500 hover:text-blue-600 transition-colors">About Us</Link>
        </div>
      </div>
    </div>
  );
}
