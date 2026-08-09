import HeroSection from "@/components/home/HeroSection";
import SubjectSection from "@/components/home/SubjectSection";
import GradeSection from "@/components/home/GradeSection";
import CtaSection from "@/components/home/CtaSection";
import { SUBJECTS } from "@/lib/data";
import { GRADES_CURRICULUM } from "@/lib/curriculum";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SubjectSection subjects={SUBJECTS} />
      <GradeSection grades={GRADES_CURRICULUM} />
      <CtaSection />
    </>
  );
}
