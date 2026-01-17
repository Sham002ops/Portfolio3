import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FitSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const addCardRef = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className=" relative w-full bg-black/15 text-neutral-200 px-6 md:px-12 lg:px-28 py-28"
    >

      {/* Left vertical guide */}
      <div className="absolute top-0 left-8 md:left-12 lg:left-20 h-full w-px bg-neutral-400" />

      <div className="max-w-5xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
          Let’s Be Clear About Fit
        </h2>
        <p className="text-black text-lg leading-relaxed max-w-3xl mb-20">
          I don’t take every project — by design.  
          The goal is long-term outcomes, not short-term velocity.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Ideal Clients */}
          <div
            ref={addCardRef}
            className="relative bg-neutral-800 border border-neutral-800 rounded-2xl p-8"
          >
            <span className="absolute -top-3 left-6 bg-neutral-950 px-3 text-sm text-white">
              Ideal Clients
            </span>

            <h3 className="text-xl font-semibold text-white mb-6">
              We’ll Work Exceptionally Well If:
            </h3>

            <ul className="space-y-4 text-neutral-300 leading-relaxed">
              <li>— You’re solving a real business problem, not experimenting</li>
              <li>— You care about structure, clarity, and technical decisions</li>
              <li>— You value maintainability over quick hacks</li>
              <li>— You expect honest feedback, not blind agreement</li>
              <li>— You think in terms of systems, not just screens</li>
            </ul>
          </div>

          {/* Misaligned Clients */}
          <div
            ref={addCardRef}
            className="relative bg-neutral-800 border border-neutral-800 rounded-2xl p-8"
          >
            <span className="absolute -top-3 left-6 bg-neutral-950 px-3 text-sm text-white">
              Likely Misaligned
            </span>

            <h3 className="text-xl font-semibold text-white mb-6">
              We Shouldn’t Work Together If:
            </h3>

            <ul className="space-y-4 text-neutral-400 leading-relaxed">
              <li>— Speed matters more than correctness</li>
              <li>— Cost is the primary decision factor</li>
              <li>— Scope changes are treated as “minor tweaks”</li>
              <li>— You want visuals before logic</li>
              <li>— You disappear during decision points</li>
            </ul>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-20 pt-8 border-t border-neutral-800 max-w-3xl">
          <p className="text-black/75 italic">
            Strong alignment upfront prevents frustration later.  
            If this feels restrictive, it’s working as intended.
          </p>
        </div>
      </div>
    </section>
  );
}
