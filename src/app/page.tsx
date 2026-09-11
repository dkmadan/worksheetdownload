import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TechSection from "@/components/home/TechSection";
import SubjectSection from "@/components/home/SubjectSection";
import GradeSection from "@/components/home/GradeSection";
import ToolsSection from "@/components/home/ToolsSection";
import CtaSection from "@/components/home/CtaSection";
import { GRADES_CURRICULUM, SUBJECTS_META } from "@/lib/curriculum";
import { faqJsonLd } from "@/lib/jsonLd";

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
    "grade 6 worksheets",
    "grade 7 worksheets",
    "grade 8 worksheets",
    "math worksheets for kids",
    "english worksheets",
    "science worksheets for kids",
    "EVS worksheets",
    "GK worksheets",
    "free worksheets download",
    "printable practice sheets",
    "K-8 worksheets",
    "developer cheat sheets",
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

const homeFaqs = [
  {
    q: "Are all worksheets on WorksheetDownload completely free?",
    a: "Yes, 100% of worksheets and developer cheat sheets on WorksheetDownload are free to view and download as PDF with answer keys included. No subscription or sign-up required.",
  },
  {
    q: "What grades and subjects are covered?",
    a: "We offer practice worksheets for Kindergarten through Grade 8 across Mathematics, English Grammar & Reading, Science, Environmental Studies (EVS), General Knowledge (GK), Reasoning & Logic, and Social Studies.",
  },
  {
    q: "Can teachers and parents print these for school or home use?",
    a: "Yes! Teachers, tutors, and homeschooling parents are free to print, photocopy, and distribute our worksheets for classroom instruction and home practice.",
  },
  {
    q: "Do worksheets include answer keys?",
    a: "Yes, all topic practice sheets include complete answer keys for quick grading and independent student self-assessment.",
  },
];

export default function HomePage() {
  const subjects = Object.values(SUBJECTS_META);
  const faqSchema = faqJsonLd(homeFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <GradeSection grades={GRADES_CURRICULUM} />
      <SubjectSection subjects={subjects} />
      <ToolsSection />
      <TechSection />
      <CtaSection />
    </>
  );
}

