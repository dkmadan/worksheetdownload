import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/auth/Providers";

import { websiteJsonLd, organizationJsonLd } from "@/lib/jsonLd";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F1E4A",
};

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
    <html lang="en" className={`${plusJakartaSans.variable} ${newsreader.variable} h-full antialiased scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
      <body className="min-h-full flex flex-col bg-[#F7F5EF] text-[#14182B] font-sans antialiased selection:bg-[#F2B33D]/30 selection:text-[#0F1E4A]">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
