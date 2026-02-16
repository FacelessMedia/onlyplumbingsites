import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import AuthorityStory from "@/components/sections/AuthorityStory";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSection from "@/components/sections/ProcessSection";
import PricingPreview from "@/components/sections/PricingPreview";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <AuthorityStory />
      <ServicesGrid />
      <ProcessSection />
      <PricingPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
