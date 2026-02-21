import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import AuthorityStory from "@/components/sections/AuthorityStory";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSection from "@/components/sections/ProcessSection";
import ResultsCounter from "@/components/sections/ResultsCounter";
import PricingPreview from "@/components/sections/PricingPreview";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import ExitIntent from "@/components/sections/ExitIntent";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <AuthorityStory />
      <ResultsCounter />
      <ServicesGrid />
      <ProcessSection />
      <PricingPreview />
      <FAQ />
      <FinalCTA />
      <ExitIntent />
    </>
  );
}
