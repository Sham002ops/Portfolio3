import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    step: "01",
    title: "Understand the Real Problem",
    description:
      "Before touching code, I map workflows, users, constraints, and failure points. Most projects don’t fail technically — they fail because assumptions were never clarified.",
  },
  {
    step: "02",
    title: "Lock Scope & Design for Change",
    description:
      "I define what gets built now versus later to prevent scope creep and missed deadlines. Architecture is planned for future change, not optimistic assumptions.",
  },
  {
    step: "03",
    title: "Build With Checkpoints",
    description:
      "Work happens in small, testable increments with visible checkpoints. Problems surface early — not at the deadline. Communication is consistent and explicit.",
  },
  {
    step: "04",
    title: "Deliver Without Dependency",
    description:
      "You receive clean code, documentation, and a system your team can extend independently. I don’t ship and vanish, and I don’t create lock-in.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  const addItemRef = (el: HTMLDivElement) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full bg-black/15 text-neutral-200 px-6 md:px-12 lg:px-28 py-28"
    >

            {/* Left vertical guide */}
      <div className="absolute top-0 left-8 md:left-12 lg:left-20 h-full w-px bg-neutral-400" />
      <div className="max-w-5xl">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
            How I Work
          </h2>
          <p className="text-black/75 text-lg max-w-3xl leading-relaxed">
            A deliberate process designed to reduce risk, remove ambiguity, and
            produce systems that survive real usage — not just demos.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-16">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-neutral-800" />

          {steps.map((step, index) => (
            <div
              key={index}
              ref={addItemRef}
              className="relative flex gap-10"
            >
              {/* Step Indicator */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center text-sm font-mono text-neutral-400">
                  {step.step}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                  {step.title}
                </h3>
                <p className="text-black/75 leading-relaxed max-w-3xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Filter */}
        <div className="mt-24 pt-10 border-t border-neutral-800">
          <p className="text-neutral-500 italic max-w-2xl">
            If you’re optimizing for speed at the cost of stability, I’m not the
            right fit — and that’s intentional.
          </p>
        </div>
      </div>
    </section>
  );
}
