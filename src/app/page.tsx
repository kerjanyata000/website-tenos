import {
  AboutSection,
  AcademySection,
  ConsultingSection,
  FaqSection,
  FinalCtaSection,
  HeroWhySection,
  WorkSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main id="main" className="pg" data-lang="en" lang="en">
      <div className="rs">
        <HeroWhySection />
        <AboutSection />
        <AcademySection />
        <ConsultingSection />
        <WorkSection />
        <FaqSection />
        <FinalCtaSection />
      </div>
    </main>
  );
}
