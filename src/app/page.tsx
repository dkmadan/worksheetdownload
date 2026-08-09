import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import SubjectSection from "@/components/home/SubjectSection";
import GradeSection from "@/components/home/GradeSection";
import CtaSection from "@/components/home/CtaSection";
import { GRADES_CURRICULUM, SUBJECTS_META } from "@/lib/curriculum";

export const metadata: Metadata = {
  title: "Free Printable Worksheets for K–8 — Math, English, Science & More",
  description:
    "Download 3,000+ free printable worksheets for Kindergarten through Grade 8. Math, English, Science, EVS, GK, Reasoning — 4 unique practice sheets per topic with answer keys.",
  keywords: [
    "free printable worksheets",
    "kindergarten worksheets",
    "grade 1 worksheets",
    "grade 2 worksheets",
    "grade 3 worksheets",
    "grade 4 worksheets",
    "grade 5 worksheets",
    "math worksheets for kids",
    "english worksheets",
    "science worksheets for kids",
    "EVS worksheets",
    "GK worksheets",
    "free worksheets download",
    "printable practice sheets",
    "K-8 worksheets",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Free Printable Worksheets for K–8 | WorksheetDownload",
    description:
      "3,000+ free printable worksheets for Kindergarten through Grade 8. Math, English, Science, EVS, GK — topic-wise practice sheets with answer keys.",
    url: "/",
    type: "website",
  },
  twitter: {
    title: "Free Printable Worksheets for K–8 | WorksheetDownload",
    description:
      "3,000+ free printable worksheets for Kindergarten through Grade 8 — Math, English, Science, EVS, GK and more.",
  },
};

export default function HomePage() {
  const subjects = Object.values(SUBJECTS_META);

  return (
    <>
      <HeroSection />
      <SubjectSection subjects={subjects} />
      <GradeSection grades={GRADES_CURRICULUM} />
      <CtaSection />
    </>
  );
}
