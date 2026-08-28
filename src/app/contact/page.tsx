import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — WorksheetDownload",
  description:
    "Get in touch with WorksheetDownload. Questions, suggestions, topic requests, or worksheet feedback are always welcome.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Contact Us</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Contact Us</h1>
          <p className="mt-3 text-gray-500 text-base max-w-2xl leading-relaxed">
            Have questions, feedback, or suggestions for new worksheets and tech cheat sheets?
            We&apos;re here to help!
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {/* Main Contact Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-gray-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50 text-cyan-700 text-xs font-semibold rounded-full mb-3">
                <span>✉️</span> Direct Support Email
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch via Email</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                For general support, feedback, bug reports, and copyright inquiries, email us directly:
              </p>
            </div>
            <a
              href="mailto:support@toytobook.com"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700 text-white font-medium px-6 py-3 rounded-xl shadow-sm transition-all text-sm font-semibold flex-shrink-0"
            >
              <span>📧</span> support@toytobook.com
            </a>
          </div>

          {/* Topics Grid */}
          <div className="grid sm:grid-cols-3 gap-6 pt-8">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-2xl mb-2 block">📝</span>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Worksheet Feedback</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Spotted a typo or mistake in an answer key? Send us the worksheet topic and grade level so we can update it promptly.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-2xl mb-2 block">💡</span>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Topic &amp; Sheet Requests</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Looking for a specific math concept, science topic, or programming cheat sheet? Let us know what to add next!
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-2xl mb-2 block">🤝</span>
              <h3 className="font-bold text-gray-900 text-sm mb-1">General Inquiries</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Questions about classroom licensing, partnerships, or app integrations? Reach out anytime at{" "}
                <a href="mailto:support@toytobook.com" className="text-cyan-600 hover:underline">
                  support@toytobook.com
                </a>.
              </p>
            </div>
          </div>
        </div>

        {/* Quick FAQs */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-gray-800 mb-1">Are all worksheets and cheat sheets free?</p>
              <p className="text-gray-500">
                Yes! 100% of our worksheets and developer cheat sheets are completely free to view and download. No subscription or sign-up needed.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">Can I use these materials in my school or homeschool?</p>
              <p className="text-gray-500">
                Absolutely. You may freely print, photocopy, and distribute our worksheets to your students or children for educational purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
