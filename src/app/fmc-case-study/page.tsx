'use client';
// src/app/fmc-case-study/page.tsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ExternalLink, Calendar, Clock, Users, CheckCircle, Award, BarChart3, Target, Zap, Globe } from 'lucide-react';
import LaptopMockupSlider from '@/components/FlatComponent/autoSliderD';
import MobileMockupSlider from '@/components/FlatComponent/AutoSliderM';
import HeroContactSection from '@/components/homeComponents/ContactSection';

gsap.registerPlugin(ScrollTrigger);

const CaseStudies: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // FMC Case Study Data - Brand Website Service (Payment details removed)
  const fmcCaseStudy = {
    id: 'fmc',
    title: 'Brand website for a wellness organization, designed to present programs clearly.',
    client: 'Finite Marshall Club',
    category: 'Brand Website Development',
    year: '2024',
    duration: '8 months',
    team: 'Full-Stack Development',
    
    desktopScreenshots: [
      { image: "/images/FMC.png", alt: "FMC Homepage" },
      { image: "/images/FMC9.png", alt: "FMC Store" },
      { image: "/images/FMC4.png", alt: "FMC Services" },
      { image: "/images/I2.png", alt: "FMC Store" },
      { image: "/images/FMC5.png", alt: "FMC About" },
      { image: "/images/FMC2.png", alt: "FMC Dashboard" },
      { image: "/images/FMC6.png", alt: "FMC Store" },
      { image: "/images/FMC7.png", alt: "FMC Store" },
 
    ],

    mobileScreenshots: [
      { image: "/images/mobView/FMCM2.jpg", alt: "FMC Mobile Home" },
      { image: "/images/mobView/FMCM3.jpg", alt: "FMC Mobile Dashboard" },
      { image: "/images/mobView/FMCM4.jpg", alt: "FMC Mobile Analytics" },
      { image: "/images/mobView/FMCM10.jpg", alt: "FMC Mobile User Dashboard" },
      { image: "/images/mobView/FMCM9.jpg", alt: "FMC Mobile Store" },
      { image: "/images/mobView/FMCM5.jpg", alt: "FMC User Growth" },
      { image: "/images/mobView/FMCM.jpg", alt: "FMC Top Executive" },
      { image: "/images/mobView/FMCM6.jpg", alt: "FMC User Details" },
      { image: "/images/mobView/FMCM7.jpg", alt: "FMC Total Users" },
      { image: "/images/mobView/FMCM8.jpg", alt: "FMC Coins System" },
    ],
    
    link: 'https://finitemarshallclub.com',
    color: '#8b5cf6',
    
    overview: 'Finite Marshall Club needed a professional online platform to move beyond Instagram and WhatsApp. They required a system to showcase their wellness programs, manage bookings, and build credibility in their local market.',
    
    challenge: {
      problems: [
        'No professional online presence beyond social media',
        'Manual booking through DMs and phone calls',
        'Limited visibility for new customers',
        'No structured way to display services and programs',
        'Competitors with websites capturing market share',
      ],
    },
    
    solutions: [
      {
        title: 'Clear presentation of multiple programs',
        points: [
          'Organized service catalog with detailed descriptions',
          'Visual program showcase with imagery',
          'Easy navigation between different offerings',
        ],
      },
      {
        title: 'Structured content for a large member base',
        points: [
          'Member dashboard for tracking progress',
          'Role-based access (admin, executives, members)',
          'Content management system for updates',
        ],
      },
      {
        title: 'Professional brand identity',
        points: [
          'Modern, responsive design',
          'SEO-optimized for local search',
          'Fast loading performance',
        ],
      },
    ],
    
    results: {
      metrics: [
        { label: 'Clear presentation of multiple programs', icon: CheckCircle },
        { label: 'Structured content for a large member base', icon: Award },
        { label: 'Professional online presence established', icon: Globe },
        { label: 'Automated booking system reducing admin work', icon: Target },
      ],
      stats: [
        { value: '500+', label: 'Active Members' },
        { value: '99.8%', label: 'Uptime' },
        { value: '< 2s', label: 'Page Load' },
      ],
    },
    
    techStack: [
      'React + Next.js',
      'PostgreSQL',
      'Tailwind CSS',
      'AWS Hosting',
    ],
    
    testimonial: {
      quote: 'Having our own professional website completely changed how customers perceive our business. We now compete with established brands in our area.',
      author: 'Founder',
      company: 'Finite Marshall Club',
    },
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.animate-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-black/15  ">
      <div className=' border-black/15 w-full pt-16 border-b-2'></div>
      <div className="max-w-6xl mx-auto px-6 py-2 md:px-12">
          {/* Left vertical guide line */}
  <div className="absolute top-0 left-8 md:left-12 lg:left-20 h-full w-px bg-neutral-400" />
        
        {/* Header */}
        <div className="animate-section mb-16 border-b border-neutral-300 pb-1">
          <div className="flex items-center gap-3 text-sm text-neutral-600 mb-2">
            <span className="uppercase tracking-wider">Case Study</span>
            <span>•</span>
            <span>{fmcCaseStudy.year}</span>
          </div>
          <h1 className="text-4xl md:text-3xl lg:text-4xl font-light text-neutral-900 leading-tight mb-1">
            {fmcCaseStudy.title}
          </h1>
        </div>

        {/* Hero Section */}
        <div className="animate-section mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Left - Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">Client</p>
                <p className="text-neutral-900 font-medium">{fmcCaseStudy.client}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">Category</p>
                <p className="text-neutral-900">{fmcCaseStudy.category}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">Timeline</p>
                <p className="text-neutral-900">{fmcCaseStudy.duration}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {fmcCaseStudy.techStack.map((tech, idx) => (
                    <span key={idx} className="text-sm text-neutral-700">
                      {tech}
                      {idx < fmcCaseStudy.techStack.length - 1 && <span className="ml-2">•</span>}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={fmcCaseStudy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:opacity-60 transition-opacity"
              >
                <span>View Live Site</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Right - Mockup */}
            <div className="lg:col-span-2">
              {/* Desktop View */}
              <div className="hidden lg:block">
                <LaptopMockupSlider 
                  screenshots={fmcCaseStudy.desktopScreenshots}
                  interval={4000}
                />
              </div>
              
              {/* Mobile View */}
              <div className="block lg:hidden flex justify-center">
                <MobileMockupSlider 
                  screenshots={fmcCaseStudy.mobileScreenshots}
                  interval={4000}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="animate-section mb-24">
          <h2 className="text-2xl md:text-3xl font-light text-neutral-900 mb-6">Overview</h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl">
            {fmcCaseStudy.overview}
          </p>
        </div>

        {/* Challenge */}
        <div className="animate-section mb-24">
          <h2 className="text-2xl md:text-3xl font-light text-neutral-900 mb-8">The Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {fmcCaseStudy.challenge.problems.map((problem, idx) => (
              <div key={idx} className="flex items-start gap-3 p-5 bg-white border border-neutral-200 rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 flex-shrink-0" />
                <span className="text-neutral-700">{problem}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="animate-section mb-24">
          <h2 className="text-2xl md:text-3xl font-light text-neutral-900 mb-8">The Solution</h2>
          <div className="space-y-12">
            {fmcCaseStudy.solutions.map((solution, idx) => (
              <div key={idx} className="border-l-2 border-neutral-300 pl-8">
                <h3 className="text-xl font-medium text-neutral-900 mb-4">
                  → {solution.title}
                </h3>
                <ul className="space-y-3">
                  {solution.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-start gap-3 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="animate-section mb-24">
          <h2 className="text-2xl md:text-3xl font-light text-neutral-900 mb-8">Results</h2>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {fmcCaseStudy.results.metrics.map((metric, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white border border-neutral-200 rounded-lg">
                <metric.icon className="w-6 h-6 text-neutral-600 flex-shrink-0 mt-1" />
                <span className="text-neutral-900 font-medium">{metric.label}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 p-8 bg-white border border-neutral-200 rounded-lg">
            {fmcCaseStudy.results.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-light text-neutral-900 mb-2">{stat.value}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="animate-section mb-24">
          <div className="relative p-12 bg-white border border-neutral-200 rounded-lg">
            <div className="absolute top-6 left-6 text-6xl text-neutral-200 font-serif">"</div>
            <blockquote className="relative z-10 space-y-6">
              <p className="text-xl md:text-2xl font-light text-neutral-900 leading-relaxed pl-8">
                {fmcCaseStudy.testimonial.quote}
              </p>
              <footer className="pl-8 pt-4 border-t border-neutral-200">
                <div className="font-medium text-neutral-900">{fmcCaseStudy.testimonial.author}</div>
                <div className="text-neutral-600 text-sm">{fmcCaseStudy.testimonial.company}</div>
              </footer>
            </blockquote>
          </div>
        </div>

        {/* CTA */}
        <div className="animate-section">
          <div className="border-t border-neutral-300 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <h3 className="text-2xl font-light text-neutral-900 mb-2">
                  Ready to build your brand website?
                </h3>
                <p className="text-neutral-600">
                  Let's discuss how we can help your business go digital.
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href={fmcCaseStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  <span>View Live Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-neutral-900 text-neutral-900 rounded-lg hover:bg-neutral-900 hover:text-white transition-colors"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

     <div className=' pt-20'>
        <HeroContactSection/>
     </div>
    </section>
  );
};

export default CaseStudies;
