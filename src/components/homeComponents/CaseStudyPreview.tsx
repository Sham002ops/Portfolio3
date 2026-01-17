// src/Components/CaseStudyPreview.tsx
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import LaptopMockupSlider from "../FlatComponent/autoSliderD";
import MobileMockupSlider from "../FlatComponent/AutoSliderM";
import GradientText from "../FlatComponent/GradientText";
import CButton from "../FlatComponent/ctaButton";


gsap.registerPlugin(ScrollTrigger);

export default function CaseStudyPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!sectionRef.current || !rowRef.current) return;

    gsap.fromTo(
      rowRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  // Screenshots for the slider
  const desktopScreenshots = [
    { image: "/images/FMC.png", alt: "FMC Homepage" },
    { image: "/images/FMC4.png", alt: "FMC Homepage" },
    { image: "/images/FMC5.png", alt: "FMC Homepage" },
    { image: "/images/FMC2.png", alt: "FMC Homepage" },
    { image: "/images/FMC3.png", alt: "FMC Homepage" },
   
  ];

  const mobileScreenshots = [
   { image: "/images/mobView/FMCM2.jpg", alt: "FMC Homepage" },
   { image: "/images/mobView/FMCM3.jpg", alt: "FMC Dashboard" },
   { image: "/images/mobView/FMCM4.jpg", alt: "FMC Analytics" },
   { image: "/images/mobView/FMCM10.jpg", alt: "FMC user Dashboard" },
   { image: "/images/mobView/FMCM9.jpg", alt: "FMC Store" },
   { image: "/images/mobView/FMCM5.jpg", alt: "FMC User growth" },
   { image: "/images/mobView/FMCM.jpg", alt: "FMC Top Executive" },
   { image: "/images/mobView/FMCM6.jpg", alt: "FMC user detail" },
   { image: "/images/mobView/FMCM7.jpg", alt: "FMC Total users" },
   { image: "/images/mobView/FMCM8.jpg", alt: "FMC Coins" },



  ];

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="relative w-full bg-black/15 px-6 md:px-12 lg:px-28 py-32"
    >
      {/* Left vertical guide */}
      <div className="absolute top-0 left-8 md:left-12 lg:left-20 h-full w-px bg-neutral-400" />

      {/* Content */}
      <div className="relative pl-6 md:pl-10 lg:pl-14">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            Case Study
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6">
            Taking a wellness brand from Instagram to a complete digital ecosystem
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl">
            A full-stack transformation that helped a growing brand establish online presence, 
            automate bookings, and scale operations beyond social media.
          </p>
        </div>

        {/* Case Row */}
        <div
          ref={rowRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          {/* Left – Text */}
          <div className="lg:col-span-7">
            <h3 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-6">
              Finite Marshall Club
            </h3>

            <div className="h-px w-full bg-neutral-300 mb-6" />

            <p className="text-neutral-700 text-lg leading-relaxed mb-6 max-w-2xl">
              Designed and developed a comprehensive brand website with event booking, 
              automated referral system, payment integration, and admin controls — 
              transforming a social media presence into a revenue-generating platform.
            </p>

            <ul className="space-y-4 text-neutral-700 mb-10">
              <li>• Built custom booking system with automated confirmations</li>
              <li>• multi-level referral tracking</li>
              <li>• Increased online visibility and reduced manual operations significantly</li>
            </ul>

            <div
              onClick={() => router.push("/fmc-case-study")}
              className="inline-flex items-center gap-3 text-xl font-medium text-neutral-900 border-b border-neutral-900 pb-1 hover:opacity-70 transition"
            >
             <CButton/>
             
  
            </div>
                

          </div>

          {/* Right – Visual */}
          <div className="lg:col-span-5">
            {/* Desktop View - Laptop Mockup */}
            <div className="hidden lg:block">
              <LaptopMockupSlider 
                screenshots={desktopScreenshots}
                interval={3500}
              />
            </div>
            
            {/* Mobile/Tablet View - Mobile Mockup */}
            <div className="block lg:hidden">
              <MobileMockupSlider
                screenshots={mobileScreenshots}
                interval={3500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
