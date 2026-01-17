import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FiniteMarshallCaseStudy() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (!section) return;
      gsap.fromTo(
        section,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  const addRef = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="w-full min-h-screen bg-neutral-950 text-neutral-200 px-6 md:px-12 lg:px-28 py-20 font-inter">
      {/* HEADER */}
      <header className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Case Study — Finite Marshall Club
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
          A multi-role wellness & business automation platform designed to remove operational chaos, scale commissions, and create a transparent ecosystem for executives, mentors, and members.
        </p>
      </header>

      {/* SUGGESTED HERO IMAGE */}
      {/* Suggestion: A clean dashboard screenshot mockup / animation */}
      <div className="w-full max-w-5xl mx-auto mb-24">
        <div className="aspect-video bg-neutral-800 rounded-2xl flex items-center justify-center text-neutral-500 text-xl">
          HERO IMAGE / DASHBOARD GIF
        </div>
      </div>

      {/* PROBLEM SECTION */}
      <section ref={addRef} className="max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">The Problem</h2>
        <div className="space-y-4 text-neutral-300 leading-relaxed">
          <p>Manual bookings, untracked referrals, and zero insight into performance caused operational bottlenecks and major revenue leakage.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>20+ hours/week wasted on manual event handling</li>
            <li>No system to track executives, mentors, and member performance</li>
            <li>15+ hours/month spent calculating commissions manually</li>
            <li>Frequent payment disputes and zero transparency</li>
          </ul>
        </div>
      </section>

      {/* SOLUTION */}
      <section ref={addRef} className="max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">The Solution</h2>
        <p className="text-neutral-300 leading-relaxed mb-8">
          Designed a complete hierarchical system with automated commissions, referral tracking, mentor content management, and real‑time dashboards.
        </p>

        {/* SUGGESTED VIDEO */}
        <div className="aspect-video bg-neutral-800 rounded-xl flex items-center justify-center text-neutral-500 mb-10">
          EXECUTIVE DASHBOARD WALKTHROUGH VIDEO
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3 text-white">Referral Engine</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Recursive multi-level referral tree built with PostgreSQL CTEs enabling instant commission crediting.
            </p>
          </div>
          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3 text-white">Content Ranking System</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Mentor content evaluated via engagement, retention, revenue and peer rating metrics.
            </p>
          </div>
          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3 text-white">Role-Based Dashboards</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Different dashboards for Admin, Executive, Mentor, Member with tailored analytics.
            </p>
          </div>
          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3 text-white">Real-Time Updates</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              WebSocket-driven commission updates & network notifications.
            </p>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section ref={addRef} className="max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">Results</h2>
        <div className="space-y-4 text-neutral-300">
          <p>Massive operational improvements with measurable business outcomes.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Saved 15+ hours/month in commission manual work</li>
            <li>Executive retention improved by 52%</li>
            <li>Mentor content creation rose by 320%</li>
            <li>Revenue leakage dropped from 12% → 0.3%</li>
            <li>650 concurrent users successfully load-tested</li>
          </ul>
        </div>
      </section>

      {/* MOCKUP SUGGESTION: BEFORE/AFTER */}
      <section ref={addRef} className="max-w-5xl mx-auto mb-28">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-white text-center">Before vs After</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 text-neutral-300">BEFORE WORKFLOW IMAGE</div>
          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 text-neutral-300">AFTER WORKFLOW IMAGE</div>
        </div>
      </section>

      {/* CTA */}
      <section ref={addRef} className="max-w-3xl mx-auto text-center py-20">
        <h2 className="text-4xl font-semibold text-white mb-6">Have a complex business model?</h2>
        <p className="text-neutral-400 mb-10 text-lg">
          I build platforms with automated workflows, intelligent dashboards, and scalable architectures.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-white text-neutral-900 rounded-xl font-semibold hover:bg-neutral-200 transition-all"
        >
          Contact Me
        </a>
      </section>
    </div>
  );
}
