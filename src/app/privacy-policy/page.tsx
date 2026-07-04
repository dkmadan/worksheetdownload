import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Worksheet Download",
  description:
    "Privacy policy for the Worksheet Download website and mobile app.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mt-2">Last updated: July 4, 2026</p>
      </div>

      <div className="prose prose-gray max-w-none space-y-5 text-gray-600 leading-relaxed">
        <p>
          This Privacy Policy applies to both the <strong>Worksheet Download</strong> website
          (worksheetdownload.com) and the <strong>Worksheet Download</strong> mobile app for
          Android. It explains what information is collected when you use either product.
        </p>

        <h2 className="font-semibold text-gray-900 text-xl mt-8">Information We Collect</h2>
        <p>
          Neither the website nor the app currently collects any personal information. There are
          no user accounts, no analytics, no advertising identifiers, and no cookies or trackers.
          Worksheets on the website are served as static files, and worksheets in the app are
          bundled directly with the app. Downloading or sharing a worksheet happens directly on
          your device — no data about you or your activity is sent to us or to any third party.
        </p>

        <h2 className="font-semibold text-gray-900 text-xl mt-8">Children&apos;s Privacy</h2>
        <p>
          Worksheet Download is intended to be used by parents and teachers to find worksheets for
          children. We do not knowingly collect any information from children, and since neither
          the website nor the app has any data collection mechanism today, no information about
          children is collected at all.
        </p>

        <h2 className="font-semibold text-gray-900 text-xl mt-8">Third-Party Services</h2>
        <p>
          We do not currently use any third-party advertising, analytics, or tracking services on
          the website or in the app.
        </p>

        <h2 className="font-semibold text-gray-900 text-xl mt-8">Changes to This Policy</h2>
        <p>
          If this policy changes in the future — for example, if we add new features that collect
          information — we will update this page and revise the date above.
        </p>

        <h2 className="font-semibold text-gray-900 text-xl mt-8">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, you can reach us at{" "}
          <a
            href="mailto:dkmadannew@gmail.com"
            className="text-cyan-600 hover:text-cyan-700"
          >
            dkmadannew@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
