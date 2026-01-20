'use client';

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTA from "@/components/FlatComponent/CTA";
import { useRouter } from "next/navigation";
import RButton from "@/components/baseComponents/RButton";

gsap.registerPlugin(ScrollTrigger);
export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!sectionRef.current) return;
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
      className="relative w-full bg-black/15  py-4"
    >
     <nav className="nav flex justify-between items-center px-6 md:px-12 lg:px-28">
        <div className="logo-name">
          <div className=' flex justify-center items-center text-black/85 font-bold text-2xl'>
          <div>
            <img src="/images/BAWA.png"  className='w-11 h-11' alt="" />
            </div>
            <div>
              <a href="#">WebAmez</a>
            </div>
        </div>
        </div> 

        <div className="nav-items ml-20 flex items-center " onClick={() => router.push('/contact')}> 
          <RButton>Get in tuch</RButton>
        </div>

        
      </nav>
      <div className=" w-full border-b-2 border-black/15 py-2"></div>
      {/* Left vertical guide */}
      <div className="absolute top-0 left-8 md:left-12 lg:left-20 h-full w-px hidden lg:block  bg-neutral-400" />

      <div className="max-w-3xl py-10 px-6 md:px-12 lg:px-28">
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
          <div onClick={() => router.push('/contact')} style={{ cursor: 'pointer' }}><CTA/></div>  
        </div>
        

      </div>


    </section>
  );
}
