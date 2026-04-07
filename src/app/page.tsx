import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import CaseStudies from "@/components/sections/CaseStudies";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import FeedbackWidget from "@/components/sections/FeedbackWidget";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Portfolio />
      <CaseStudies />
      <SectionDivider />
      <About />
      <Process />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <Contact />
      <FeedbackWidget />
    </>
  );
}
