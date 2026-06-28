import HeroSection from "@/components/home/HeroSection";
import SubjectSection from "@/components/home/SubjectSection";
import GradeSection from "@/components/home/GradeSection";
import CtaSection from "@/components/home/CtaSection";
import { SUBJECTS, GRADES } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SubjectSection subjects={SUBJECTS} />
      <GradeSection grades={GRADES} />
      <CtaSection />
    </>
  );
}
