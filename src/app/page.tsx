'use client';
import AboutSection from "@/components/homeComponents/About";
// import AboutSection from "@/components/homeComponents/About";
import CaseStudyPreview from "@/components/homeComponents/CaseStudyPreview";
import HeroContactSection from "@/components/homeComponents/ContactSection";
import CTASection from "@/components/homeComponents/CTASection";
import FitSection from "@/components/homeComponents/FitSection";
import ProcessSection from "@/components/homeComponents/ProcessSection";
import ServicesSection from "@/components/homeComponents/ServicesSection";
import LoadingAnimation from "@/components/loadingAnimation1/LoadingAnimation";
import { useState } from "react";

export default function Home() {
    const [showLoading, setShowLoading] = useState(true);
  
    // Images from public folder - use absolute paths starting with /
    const projectImages = [
      '/images/FMC4.png',
      '/images/FMC5.png',
      '/images/FMC6.png',
      '/images/g3.png',
      '/images/g4.png',
      '/images/g5.png',
      '/images/g6.png',
      '/images/FMC9.png',
      '/images/I2.png',
      '/images/FMC.png',

     
    ];
  return (
    <>
          <div className="snap-y  scroll-smooth">
      <section className=" relative z-0 w-full h-screen overflow-hidden bg-black/20">
         <LoadingAnimation
        name="WebAmez"
        tagline=" I design clear, well-structured brand websites that help businesses look credible online."
        images={projectImages}
        onComplete={() => setShowLoading(false)}
      />
      </section>
      {/* <section className="relative z-0 w-full  overflow-hidden bg-black/20">
        <Hero name="Sham" location="Located in India" heroImage="../assets/Sam4.png" />
      </section> */}

      <section>
        <ServicesSection/>
      </section>

      <section className="relative z-0 overflow-hidden">
        <CaseStudyPreview />
      </section>

      <section className="relative z-0 overflow-hidden">
        <AboutSection />
      </section>

      <section>
        <ProcessSection />
      </section>

      <section><FitSection /></section>

      <section><CTASection /></section>

      <section><HeroContactSection /></section>

      {/* <section className="relative z-0 overflow-hidden">
        <FlowingProjects />
      </section> */}
    </div>
      
    </>
  )
}
