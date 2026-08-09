import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/auth/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://worksheetdownload.com"),
  title: {
    template: "%s | WorksheetDownload",
    default: "Free Printable Worksheets for K–8 | WorksheetDownload",
  },
  description:
    "Download 3,000+ free printable worksheets for Kindergarten through Grade 8. Math, English, Science, EVS, GK, Reasoning — topic-wise practice sheets with answer keys.",
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
  ],
  authors: [{ name: "WorksheetDownload", url: "https://worksheetdownload.com" }],
  creator: "WorksheetDownload",
  publisher: "WorksheetDownload",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    siteName: "WorksheetDownload",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "WorksheetDownload — Free Printable Worksheets for K–8" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
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
