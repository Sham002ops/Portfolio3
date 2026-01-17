import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" relative w-full bg-black/15 text-black px-6 md:px-12 lg:px-28 py-36"
    >
       {/* Left vertical guide line */}
  <div className="absolute top-0 left-8 md:left-12 lg:left-[79px] h-full w-px bg-neutral-400" />
      <div className="max-w-3xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-black mb-10">
          Ready to Build Something That Holds Up?
        </h2>

        {/* Body */}
        <p className="text-black text-lg leading-relaxed mb-8 max-w-2xl">
          I work with founders and teams who already know what they’re building,
          why it matters, and are ready to make deliberate technical decisions.
        </p>

        <p className="text-black text-lg leading-relaxed mb-14 max-w-2xl">
          If that’s you, the next step is a focused conversation — not a sales
          call — to assess alignment and scope.
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-white ttext-black font-semibold text-lg hover:bg-neutral-200 transition-colors"
        >
          Request a Project Discussion
        </a>

        {/* Qualification Line */}
        <p className="mt-10 text-black text-sm max-w-xl">
          I’m not the right choice for rushed timelines, unclear requirements,
          or cost-first decisions. This step is intentional.
        </p>
      </div>
    </section>
  );
}
