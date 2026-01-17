import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTA from "../FlatComponent/CTA";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-black/15 px-6 md:px-12 lg:px-28 py-24"
    >
      {/* Left vertical guide */}
      <div className="absolute top-0 left-8 md:left-12 lg:left-20 h-full w-px bg-neutral-400" />

      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-8">
          About
        </h2>

        <div className="space-y-6 text-neutral-800 text-lg leading-relaxed">
          <p>
            I work with growing businesses and brand owners who have outgrown
            social media and need a clear, professional online presence that
            actually explains what they do.
          </p>

          <p>
            Most of my work starts when things feel scattered — inquiries in
            WhatsApp, bookings handled manually, content spread across platforms,
            and no single place that represents the business properly.
          </p>

          <p>
            My role is to bring structure. I design and build websites and custom
            platforms that make the business easier to understand, easier to run,
            and easier to trust — for both customers and internal teams.
          </p>
        </div>

        <div className="mt-10 h-px w-24 bg-neutral-800" />

        <p className="mt-6 text-neutral-800 italic max-w-2xl">
          If you want clarity instead of complexity, and systems that support
          your business instead of adding friction, we’ll work well together.
        </p>

        <div  className="mt-10 flex items-center gap-6">
          <a href="#contact"><CTA/></a>  
        </div>

      </div>


    </section>
  );
}
