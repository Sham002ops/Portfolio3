// src/pages/LandingPage.tsx
import React, { useState } from 'react';
import LoadingAnimation from '../loadingAnimation1/LoadingAnimation';
import Hero from '../homeComponents/HeroSection';
import About from '../homeComponents/About';
import CaseStudyPreview from '../homeComponents/CaseStudyPreview';
import FlowingProjects from '../homeComponents/ProjectCard';
import ServicesSection from '../homeComponents/ServicesSection';
import ProcessSection from '../homeComponents/ProcessSection';
import FitSection from '../homeComponents/FitSection';
import CTASection from '../homeComponents/CTASection';
import ContactSection from '../homeComponents/ContactSection';

function LandingPage() {
  const [showLoading, setShowLoading] = useState(true);

  // Images from public folder - use absolute paths starting with /
  const projectImages = [
    '/images/I2.png',
    '/images/g1.png',
    '/images/g2.jpg',
    '/images/g3.png',
    '/images/g4.png',
    '/images/g5.png',
    '/images/g6.png',
    '/images/L4.jpeg',
    '/images/I2.png',
   
  ];

  // if (showLoading) {
  //   return (
  //     <LoadingAnimation
  //       name="Sham"
  //       tagline="Full-Stack Developer & Healthcare Tech Specialist"
  //       images={projectImages}
  //       onComplete={() => setShowLoading(false)}
  //     />
  //   );
  // }

  return (
    <div className="snap-y  scroll-smooth">
      <section className=" relative z-0 w-full h-screen overflow-hidden bg-black/20">
         <LoadingAnimation
        name=""
        tagline="I help founders turn complex ideas into stable, production-ready products."
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
        <About />
      </section>

      <section>
        <ProcessSection />
      </section>

      <section><FitSection /></section>

      <section><CTASection /></section>

      <section><ContactSection /></section>

      {/* <section className="relative z-0 overflow-hidden">
        <FlowingProjects />
      </section> */}
    </div>
  );
}

export default LandingPage;
