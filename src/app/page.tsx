import HeroSection from "@/components/home/HeroSection";
import SubjectSection from "@/components/home/SubjectSection";
import GradeSection from "@/components/home/GradeSection";
import CtaSection from "@/components/home/CtaSection";
import { GRADES_CURRICULUM, SUBJECTS_META } from "@/lib/curriculum";

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
