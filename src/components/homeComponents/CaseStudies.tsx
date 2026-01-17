// src/Components/CaseStudies.tsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ExternalLink, Calendar, Clock, Users, TrendingUp, CheckCircle, Award, BarChart3, Target, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CaseStudies: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);

  // FMC Case Study Data
  const fmcCaseStudy = {
    id: 'fmc',
    title: 'Building a Multi-Role Wellness Platform With Automated Referrals, Commissions & Content Systems',
    client: 'Finite Marshall Club',
    category: 'Full-Stack SaaS Platform',
    year: '2024',
    duration: '8 months',
    team: '2 Developers',
    tagline: 'Yoga and wellness programs with automated commission engine',
    
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&h=800&fit=crop',
    ],
    
    link: 'https://finitemarshallclub.com',
    color: '#8b5cf6',
    
    overview: [
      'Manual spreadsheets',
      'Zero visibility across the network',
      'Frequent commission disputes',
      'Disorganized content',
      'No dashboards for different roles',
    ],
    
    problems: {
      operational: [
        'Event bookings took 20+ hours/week manually',
        'No central system for members, sessions, or attendance',
        'Zero analytics for revenue, sessions, or performance',
      ],
      referral: [
        'Multi-level referrals tracked in Excel',
        'Calculations took 15+ hours/month and were inaccurate',
        'Executives had no visibility into their downline',
        'Constant disputes over commission payouts',
      ],
      content: [
        'Mentors stored content in WhatsApp/Drive',
        'No ranking, quality control, or contribution tracking',
        'No way to reward top creators',
      ],
      impact: [
        '~12% revenue leakage',
        'Low executive retention',
        'Slow content growth',
        'No scalability',
      ],
    },
    
    goals: [
      'Automate all referral & commission calculations',
      'Reduce admin time from 20 hours/week → under 3 hours',
      'Give executives transparent earnings dashboards',
      'Make mentors motivated to create high-quality content',
      'Provide real-time analytics for all stakeholders',
      'Scale to 500+ concurrent users without slowdown',
    ],
    
    solutions: [
      {
        title: 'Automated Referral & Commission Engine',
        icon: TrendingUp,
        color: '#8b5cf6',
        features: [
          'Multi-level referral tree (executive → mentor → member)',
          'Real-time commission calculation on every booking/content purchase',
          'End-of-day reconciliation to eliminate revenue leakage',
          'Executive dashboard with live earnings & network performance',
          'Referral tree visualization & top mentor insights',
        ],
      },
      {
        title: 'Mentor Content Platform',
        icon: Award,
        color: '#3b82f6',
        features: [
          'Content upload system for videos, PDFs, workout plans',
          'Metadata, categorization & content versioning',
          'Engagement-based ranking algorithm',
          'Leaderboards, badges & reward tiers',
          'Analytics: views, completion rates, revenue contribution',
        ],
      },
      {
        title: 'Smart Event Booking System',
        icon: Calendar,
        color: '#10b981',
        features: [
          'Weekly schedules with calendar view',
          'Automated confirmations',
          'Waitlist logic',
          'Referral-based commission attribution per booking',
        ],
      },
    ],
    
    dashboards: [
      { role: 'Admin', features: 'Complete control over users, commissions, content, events', color: 'purple' },
      { role: 'Executive', features: 'Earnings dashboard, referral network analytics', color: 'blue' },
      { role: 'Mentor', features: 'Content management + performance analytics', color: 'green' },
      { role: 'Member', features: 'Easy event booking + personalized content', color: 'yellow' },
    ],
    
    techStack: [
      'PostgreSQL + Prisma',
      'Redis for caching',
      'WebSocket real-time updates',
      'VPS + Nginx + PM2',
      'Load-tested: 650 concurrent users',
    ],
    
    results: {
      operational: [
        { label: '15 hours/month saved on commission tasks' },
        { label: 'Booking workflows: 20+ hours/week → 3 hours/week' },
        { label: 'Zero commission disputes after automation' },
        { label: 'Admin team handles 4× more operations without hiring' },
      ],
      business: [
        { value: '+47%', label: 'Event registrations' },
        { value: '+52%', label: 'Executive retention' },
        { value: '+320%', label: 'Content creation' },
        { value: '12→0.3%', label: 'Revenue leak reduced' },
      ],
      financial: [
        { value: '₹2.4L/mo', label: 'Monthly revenue increase' },
        { value: '+38%', label: 'Executive earnings improved' },
        { value: '₹65K', label: 'Content monetization (3 months)' },
      ],
      performance: [
        { label: 'Page Load', value: '1.2s' },
        { label: 'Real-time Updates', value: '<2s' },
        { label: 'Uptime', value: '99.8%' },
      ],
      satisfaction: [
        { label: 'Executives', value: '4.8/5' },
        { label: 'Mentor Engagement', value: '+240%' },
        { label: 'Member Retention', value: '+28%' },
      ],
    },
    
    expertise: [
      'Multi-level commission systems',
      'Referral network architecture',
      'Role-based SaaS platforms',
      'Content ranking algorithms',
      'High-performance dashboards',
      'Complex business logic automation',
    ],
    
    testimonial: {
      quote: 'This platform transformed our operations. Commissions, referrals, content — everything is now automated and transparent. Our executives are happier, mentors are more active, and revenue has jumped significantly.',
      author: 'Founder',
      company: 'Finite Marshall Club',
    },
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate sections on scroll
      gsap.utils.toArray<HTMLElement>('.animate-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
          },
          y: 80,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      });

      // Animate stats
      gsap.utils.toArray<HTMLElement>('.stat-item').forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'back.out(1.7)',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % fmcCaseStudy.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const imageRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.05,
        duration: 0.6,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
      });
    }
  };

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="animate-section mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6">
            Case Study
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl">
            Deep dive into a project that made measurable impact. From challenge to solution to results.
          </p>
        </div>

        {/* Main Case Study */}
        <div className="space-y-32">
          {/* Hero Section */}
          <div className="animate-section grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-7" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a href={fmcCaseStudy.link} target="_blank" rel="noopener noreferrer" className="block relative group">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100">
                  <div
                    ref={imageRef}
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                    style={{ backgroundImage: `url(${fmcCaseStudy.images[activeImage]})` }}
                  />
                  
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${fmcCaseStudy.color}00 0%, ${fmcCaseStudy.color}80 100%)` }}
                  />

                  {/* Link Button */}
                  <div className="absolute top-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg">
                    <ExternalLink className="w-6 h-6 text-gray-900" />
                  </div>

                  {/* Image Counter */}
                  <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-light">
                    {activeImage + 1} / {fmcCaseStudy.images.length}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-3 mt-4">
                  {fmcCaseStudy.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveImage(idx);
                      }}
                      className={`w-16 h-16 rounded-lg bg-cover bg-center transition-all duration-300 ${
                        activeImage === idx ? 'ring-2 ring-offset-2 scale-105' : 'opacity-50 hover:opacity-100'
                      }`}
                      style={{ backgroundImage: `url(${img})`, ringColor: fmcCaseStudy.color }}
                    />
                  ))}
                </div>
              </a>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 space-y-6">
              {/* Meta */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{fmcCaseStudy.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{fmcCaseStudy.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{fmcCaseStudy.team}</span>
                </div>
              </div>

              {/* Client Badge */}
              <p className="text-sm uppercase tracking-wider font-medium" style={{ color: fmcCaseStudy.color }}>
                {fmcCaseStudy.client}
              </p>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
                {fmcCaseStudy.title}
              </h3>

              {/* Category */}
              <div className="inline-flex px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                {fmcCaseStudy.category}
              </div>

              {/* Tagline */}
              <p className="text-lg text-gray-600 font-light">
                {fmcCaseStudy.tagline}
              </p>

              {/* CTA */}
              <a
                href={fmcCaseStudy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-base font-medium transition-all duration-300"
                style={{ color: fmcCaseStudy.color }}
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Overview */}
          <div className="animate-section space-y-8">
            <h3 className="text-3xl md:text-4xl font-light text-gray-900">Overview</h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Finite Marshall Club runs yoga and wellness programs using a hierarchy of <strong>executives → mentors → members</strong>. 
              Their growth depended heavily on referrals and content, but their operations were stuck in:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fmcCaseStudy.overview.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              This made scaling impossible and caused revenue leakage, churn, and inefficiencies across the board.
            </p>
          </div>

          {/* The Problem */}
          <div className="animate-section">
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">The Core Problem</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Operational */}
              <div className="space-y-4 p-6 bg-red-50 rounded-2xl border border-red-100">
                <h4 className="text-xl font-medium text-red-700">Operational Breakdown</h4>
                <ul className="space-y-3">
                  {fmcCaseStudy.problems.operational.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Referral */}
              <div className="space-y-4 p-6 bg-orange-50 rounded-2xl border border-orange-100">
                <h4 className="text-xl font-medium text-orange-700">Referral & Commission Issues</h4>
                <ul className="space-y-3">
                  {fmcCaseStudy.problems.referral.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Content */}
              <div className="space-y-4 p-6 bg-yellow-50 rounded-2xl border border-yellow-100">
                <h4 className="text-xl font-medium text-yellow-700">Content Fragmentation</h4>
                <ul className="space-y-3">
                  {fmcCaseStudy.problems.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Business Impact */}
            <div className="mt-8 p-8 bg-gray-900 rounded-2xl text-white">
              <h4 className="text-2xl font-medium mb-6">Business Impact</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {fmcCaseStudy.problems.impact.map((item, idx) => (
                  <div key={idx} className="text-center space-y-2">
                    <Target className="w-8 h-8 mx-auto text-red-400" />
                    <div className="text-sm text-gray-300">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* The Goal */}
          <div className="animate-section space-y-8">
            <h3 className="text-3xl md:text-4xl font-light text-gray-900">The Goal</h3>
            <p className="text-xl text-gray-600 font-light">Build a single platform that would:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fmcCaseStudy.goals.map((goal, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{goal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Solution */}
          <div className="animate-section space-y-16">
            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-light text-gray-900">The Solution</h3>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                A full-stack, multi-role wellness platform with automation at its core
              </p>
            </div>

            {/* Features */}
            {fmcCaseStudy.solutions.map((solution, idx) => (
              <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                    <solution.icon className="w-32 h-32 text-purple-600/20" />
                  </div>
                </div>
                <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: `${solution.color}20`, color: solution.color }}>
                    <solution.icon className="w-4 h-4" />
                    <span>Key Feature {idx + 1}</span>
                  </div>
                  <h4 className="text-3xl font-light text-gray-900">{solution.title}</h4>
                  <ul className="space-y-3">
                    {solution.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: solution.color }} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Dashboards */}
            <div className="p-8 bg-gray-50 rounded-2xl">
              <h4 className="text-3xl font-light text-gray-900 mb-8 text-center">Multi-Role Dashboards</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {fmcCaseStudy.dashboards.map((dashboard, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-xl shadow-sm space-y-3">
                    <div className={`inline-flex px-3 py-1 bg-${dashboard.color}-100 text-${dashboard.color}-700 rounded-full text-sm font-medium`}>
                      {dashboard.role}
                    </div>
                    <p className="text-sm text-gray-600">{dashboard.features}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="text-center space-y-6">
              <h4 className="text-3xl font-light text-gray-900">Performance & Scalability</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {fmcCaseStudy.techStack.map((tech, idx) => (
                  <span key={idx} className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-medium hover:border-purple-600 hover:text-purple-600 transition-colors duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="animate-section space-y-16 p-12 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 rounded-3xl text-white">
            <div className="text-center space-y-4">
              <h3 className="text-4xl md:text-5xl font-light">Results That Matter</h3>
              <p className="text-xl text-purple-100 font-light">Measurable impact across all key metrics</p>
            </div>

            {/* Operational Efficiency */}
            <div className="space-y-6">
              <h4 className="text-2xl font-medium text-center text-purple-200">Operational Efficiency</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {fmcCaseStudy.results.operational.map((item, idx) => (
                  <div key={idx} className="stat-item p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                    <CheckCircle className="w-8 h-8 mx-auto mb-3 text-green-300" />
                    <p className="text-sm text-center text-purple-100">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Growth */}
            <div className="space-y-6">
              <h4 className="text-2xl font-medium text-center text-purple-200">Business Growth</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {fmcCaseStudy.results.business.map((stat, idx) => (
                  <div key={idx} className="stat-item p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center space-y-2">
                    <div className="text-4xl font-bold text-green-300">{stat.value}</div>
                    <div className="text-sm text-purple-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Impact */}
            <div className="space-y-6">
              <h4 className="text-2xl font-medium text-center text-purple-200">Financial Impact</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {fmcCaseStudy.results.financial.map((stat, idx) => (
                  <div key={idx} className="stat-item p-8 bg-white/10 backdrop-blur-sm rounded-2xl text-center space-y-2">
                    <div className="text-5xl font-bold text-yellow-300">{stat.value}</div>
                    <div className="text-base text-purple-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance & Satisfaction */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/20">
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-purple-200">Performance Metrics</h4>
                <div className="grid grid-cols-3 gap-4">
                  {fmcCaseStudy.results.performance.map((metric, idx) => (
                    <div key={idx} className="text-center space-y-2">
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div className="text-xs text-purple-200">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-purple-200">User Satisfaction</h4>
                <div className="grid grid-cols-3 gap-4">
                  {fmcCaseStudy.results.satisfaction.map((metric, idx) => (
                    <div key={idx} className="text-center space-y-2">
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div className="text-xs text-purple-200">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* What This Proves */}
          <div className="animate-section space-y-8">
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 text-center">What This Proves</h3>
            <p className="text-xl text-gray-600 font-light text-center">This project demonstrates expertise in:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {fmcCaseStudy.expertise.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                  <Zap className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-600 font-light text-center pt-6">
              If a business depends on <strong>referrals, commissions, creators, education, or wellness</strong> — 
              this system architecture can be adapted and scaled.
            </p>
          </div>

          {/* Testimonial */}
          <div className="animate-section">
            <div className="relative p-12 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl">
              <div className="absolute top-8 left-8 text-8xl text-purple-200 font-serif">"</div>
              <blockquote className="relative z-10 space-y-6">
                <p className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed">
                  {fmcCaseStudy.testimonial.quote}
                </p>
                <footer className="flex items-center gap-4 pt-6">
                  <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                    F
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{fmcCaseStudy.testimonial.author}</div>
                    <div className="text-gray-600">{fmcCaseStudy.testimonial.company}</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>

          {/* CTA */}
          <div className="animate-section text-center space-y-8 p-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl text-white">
            <h3 className="text-3xl md:text-4xl font-light">Interested in Similar Solutions?</h3>
            <p className="text-xl text-purple-100 font-light">
              Let's discuss how this architecture can be adapted for your business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={fmcCaseStudy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-colors duration-300"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-purple-600 transition-colors duration-300"
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
