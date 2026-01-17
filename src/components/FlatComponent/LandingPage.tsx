// src/pages/LandingPage.tsx
import React, { useState } from 'react';
import PageTransition from './PageTransition';
import HeroReveal from './HeroReveal';
import ScrollReveal from './ScrollReveal';
import About from '../homeComponents/About';
import CaseStudyPreview from '../homeComponents/CaseStudyPreview';
import FlowingProjects from '../homeComponents/ProjectCard';

function LandingPage() {
  const [transitionComplete, setTransitionComplete] = useState(false);

  return (
    <PageTransition onComplete={() => setTransitionComplete(true)}>
      <div className="w-full">
        {/* Hero with Reveal */}
        <HeroReveal
          title="Sham Baand"
          subtitle="Building Healthcare Technology & Full-Stack Solutions"
          image="/hero-bg.jpg"
          delay={0.3}
        />

        {/* About Section */}
        <ScrollReveal direction="up" className="min-h-screen">
          <About />
        </ScrollReveal>

        {/* Case Study */}
        <ScrollReveal direction="scale" className="min-h-screen">
          <CaseStudyPreview />
        </ScrollReveal>

        {/* Projects */}
        <ScrollReveal direction="left" className="min-h-screen">
          <FlowingProjects />
        </ScrollReveal>
      </div>
    </PageTransition>
  );
}

export default LandingPage;
