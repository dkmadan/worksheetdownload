import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/auth/Providers";

import { websiteJsonLd, organizationJsonLd } from "@/lib/jsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://worksheetdownload.com"),
  title: {
    template: "%s | WorksheetDownload",
    default: "Free Printable Worksheets for K–8 & Tech Cheat Sheets | WorksheetDownload",
  },
  description:
    "Download 3,000+ free printable worksheets for Kindergarten through Grade 8. Math, English, Science, EVS, GK, Reasoning — topic-wise practice sheets with answer keys, plus 647 developer cheat sheets.",
  keywords: [
    "free printable worksheets",
    "kindergarten worksheets",
    "math worksheets",
    "english worksheets",
    "science worksheets",
    "K-8 worksheets",
    "practice sheets for kids",
    "printable PDF worksheets",
    "free worksheets for students",
    "grade worksheets",
    "developer cheat sheets",
    "tech cheat sheets",
    "coding cheat sheets pdf",
  ],
  authors: [{ name: "WorksheetDownload", url: "https://worksheetdownload.com" }],
  creator: "WorksheetDownload",
  publisher: "WorksheetDownload",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    siteName: "WorksheetDownload",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WorksheetDownload — Free Printable Worksheets for K–8 & Tech Cheat Sheets" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = websiteJsonLd();
  const orgSchema = organizationJsonLd();

  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8VGSPGK16T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8VGSPGK16T');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
