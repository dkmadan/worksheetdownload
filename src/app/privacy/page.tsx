import type { Metadata } from "next";
import PrivacyPolicyPage from "@/app/privacy-policy/page";

export const metadata: Metadata = {
  title: "Privacy Policy — WorksheetDownload",
  description:
    "Privacy policy for worksheetdownload.com and the Worksheets Download Android app. No personal data collection, no tracking, no ads.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: false },
};

export default PrivacyPolicyPage;
