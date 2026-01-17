// src/pages/CaseStudyPage.tsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowLeft, 
  ExternalLink, 
  Calendar, 
  Clock, 
  Users, 
  TrendingUp,
  CheckCircle,
  Award,
  BarChart3
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CaseStudyPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero fade in
      gsap.from('.hero-content', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

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

  return (
    <div ref={sectionRef} className="w-full bg-white">
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <a
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 text-gray-900 hover:text-gray-600"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="hero-content max-w-6xl mx-auto text-center space-y-8">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium">
            <Award className="w-4 h-4" />
            <span>Full-Stack SaaS Platform</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
            Finite Marshall Club
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-600 font-light max-w-4xl mx-auto">
            Building a Multi-Role Wellness Platform With Automated Referrals, 
            Commissions & Content Systems
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>8 months</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>2 Developers</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a
              href="https://finitemarshallclub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors duration-300"
            >
              <span>Visit Live Platform</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#overview"
              className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 rounded-full font-medium hover:border-purple-600 hover:text-purple-600 transition-colors duration-300"
            >
              <span>Read Full Story</span>
            </a>
          </div>

          {/* Hero Image/Mockup */}
          <div className="pt-12">
            <div className="relative max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop"
                alt="FMC Platform"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="animate-section py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Overview
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Finite Marshall Club runs yoga and wellness programs using a hierarchy of 
              <strong> executives → mentors → members</strong>. Their growth depended heavily 
              on referrals and content, but their operations were stuck in:
            </p>
            <ul className="space-y-3 mt-6">
              {[
                'Manual spreadsheets',
                'Zero visibility across the network',
                'Frequent commission disputes',
                'Disorganized content',
                'No dashboards for different roles',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-600 font-light leading-relaxed mt-6">
              This made scaling impossible and caused revenue leakage, churn, and 
              inefficiencies across the board.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem - Full Width Dark Section */}
      <section className="animate-section py-20 px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12">
            The Core Problem
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Operational Breakdown */}
            <div className="space-y-4 p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-medium text-purple-400">
                Operational Breakdown
              </h3>
              <ul className="space-y-3">
                {[
                  'Event bookings took 20+ hours/week manually',
                  'No central system for members, sessions, or attendance',
                  'Zero analytics for revenue, sessions, or performance',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Referral Issues */}
            <div className="space-y-4 p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-medium text-blue-400">
                Referral & Commission Issues
              </h3>
              <ul className="space-y-3">
                {[
                  'Multi-level referrals tracked in Excel',
                  'Calculations took 15+ hours/month',
                  'Zero visibility into downline',
                  'Constant commission disputes',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Fragmentation */}
            <div className="space-y-4 p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-medium text-green-400">
                Content Fragmentation
              </h3>
              <ul className="space-y-3">
                {[
                  'Content stored in WhatsApp/Drive',
                  'No ranking or quality control',
                  'No contribution tracking',
                  'No creator rewards',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Business Impact */}
          <div className="mt-12 p-8 border-2 border-red-500/30 rounded-2xl bg-red-500/5">
            <h3 className="text-2xl font-medium text-red-400 mb-6">
              Business Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: 'Revenue Leakage', value: '~12%' },
                { label: 'Executive Retention', value: 'Low' },
                { label: 'Content Growth', value: 'Slow' },
                { label: 'Scalability', value: 'None' },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="text-3xl font-bold text-red-400">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Goal */}
      <section className="animate-section py-20 px-8 bg-purple-50">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            The Goal
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Build a single platform that would:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Automate all referral & commission calculations',
              'Reduce admin time from 20 hours/week → under 3 hours',
              'Give executives transparent earnings dashboards',
              'Make mentors motivated to create high-quality content',
              'Provide real-time analytics for all stakeholders',
              'Scale to 500+ concurrent users without slowdown',
            ].map((goal, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="animate-section py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              The Solution
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              A full-stack, multi-role wellness platform with automation at its core
            </p>
          </div>

          {/* Key Capabilities */}
          <div className="space-y-12">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  <span>Core Feature 1</span>
                </div>
                <h3 className="text-3xl font-light text-gray-900">
                  Automated Referral & Commission Engine
                </h3>
                <ul className="space-y-3">
                  {[
                    'Multi-level referral tree (executive → mentor → member)',
                    'Real-time commission calculation on every booking',
                    'End-of-day reconciliation to eliminate revenue leakage',
                    'Executive dashboard with live earnings & network performance',
                    'Referral tree visualization',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                <BarChart3 className="w-32 h-32 text-purple-600/20" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <Award className="w-32 h-32 text-blue-600/20" />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  <Award className="w-4 h-4" />
                  <span>Core Feature 2</span>
                </div>
                <h3 className="text-3xl font-light text-gray-900">
                  Mentor Content Platform
                </h3>
                <ul className="space-y-3">
                  {[
                    'Content upload for videos, PDFs, workout plans',
                    'Metadata, categorization & versioning',
                    'Engagement-based ranking algorithm',
                    'Leaderboards, badges & reward tiers',
                    'Analytics: views, completion rates, revenue contribution',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  <Calendar className="w-4 h-4" />
                  <span>Core Feature 3</span>
                </div>
                <h3 className="text-3xl font-light text-gray-900">
                  Smart Event Booking System
                </h3>
                <ul className="space-y-3">
                  {[
                    'Weekly schedules with calendar view',
                    'Automated confirmations',
                    'Waitlist logic',
                    'Referral-based commission attribution per booking',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-green-100 to-yellow-100 flex items-center justify-center">
                <Calendar className="w-32 h-32 text-green-600/20" />
              </div>
            </div>
          </div>

          {/* Multi-Role Dashboards */}
          <div className="p-8 bg-gray-50 rounded-2xl">
            <h3 className="text-3xl font-light text-gray-900 mb-8 text-center">
              Multi-Role Dashboards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  role: 'Admin',
                  features: 'Complete control over users, commissions, content, events',
                  color: 'purple',
                },
                {
                  role: 'Executive',
                  features: 'Earnings dashboard, referral network analytics',
                  color: 'blue',
                },
                {
                  role: 'Mentor',
                  features: 'Content management + performance analytics',
                  color: 'green',
                },
                {
                  role: 'Member',
                  features: 'Easy event booking + personalized content',
                  color: 'yellow',
                },
              ].map((dashboard, idx) => (
                <div key={idx} className="p-6 bg-white rounded-xl shadow-sm space-y-3">
                  <div 
                    className={`inline-flex px-3 py-1 bg-${dashboard.color}-100 text-${dashboard.color}-700 rounded-full text-sm font-medium`}
                  >
                    {dashboard.role}
                  </div>
                  <p className="text-sm text-gray-600">{dashboard.features}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-6">
            <h3 className="text-3xl font-light text-gray-900 text-center">
              Performance & Scalability
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'PostgreSQL + Prisma',
                'Redis for caching',
                'WebSocket real-time updates',
                'VPS + Nginx + PM2',
                'Load-tested: 650 concurrent users',
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-medium hover:border-purple-600 hover:text-purple-600 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results - Stats Grid */}
      <section className="animate-section py-20 px-8 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light">
              Results That Matter
            </h2>
            <p className="text-xl text-purple-100 font-light">
              Measurable impact across all key metrics
            </p>
          </div>

          {/* Operational Efficiency */}
          <div className="space-y-8">
            <h3 className="text-2xl font-medium text-center text-purple-200">
              Operational Efficiency
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: '15 hrs/mo', label: 'Saved on commissions', icon: Clock },
                { value: '20→3 hrs', label: 'Booking workflows', icon: TrendingUp },
                { value: 'Zero', label: 'Commission disputes', icon: CheckCircle },
                { value: '4×', label: 'Operations handled', icon: Users },
              ].map((stat, idx) => (
                <div key={idx} className="stat-item p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center space-y-3">
                  <stat.icon className="w-10 h-10 mx-auto text-purple-200" />
                  <div className="text-4xl font-bold">{stat.value}</div>
                  <div className="text-sm text-purple-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Growth */}
          <div className="space-y-8">
            <h3 className="text-2xl font-medium text-center text-purple-200">
              Business Growth
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: '+47%', label: 'Event registrations' },
                { value: '+52%', label: 'Executive retention' },
                { value: '+320%', label: 'Content creation' },
                { value: '12→0.3%', label: 'Revenue leak reduced' },
              ].map((stat, idx) => (
                <div key={idx} className="stat-item p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center space-y-3">
                  <TrendingUp className="w-10 h-10 mx-auto text-green-300" />
                  <div className="text-4xl font-bold text-green-300">{stat.value}</div>
                  <div className="text-sm text-purple-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Impact */}
          <div className="space-y-8">
            <h3 className="text-2xl font-medium text-center text-purple-200">
              Financial Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { value: '₹2.4L/mo', label: 'Revenue increase' },
                { value: '+38%', label: 'Executive earnings' },
                { value: '₹65K', label: 'Content monetization (3 months)' },
              ].map((stat, idx) => (
                <div key={idx} className="stat-item p-8 bg-white/10 backdrop-blur-sm rounded-2xl text-center space-y-3">
                  <div className="text-5xl font-bold text-yellow-300">{stat.value}</div>
                  <div className="text-base text-purple-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
            {[
              { label: 'Page Load', value: '1.2s' },
              { label: 'Real-time Updates', value: '<2s' },
              { label: 'Uptime', value: '99.8%' },
            ].map((metric, idx) => (
              <div key={idx} className="stat-item text-center space-y-2">
                <div className="text-3xl font-bold">{metric.value}</div>
                <div className="text-sm text-purple-200">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="animate-section py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl">
            <div className="absolute top-8 left-8 text-8xl text-purple-200 font-serif">"</div>
            <blockquote className="relative z-10 space-y-6">
              <p className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed">
                This platform transformed our operations. Commissions, referrals, content — 
                everything is now automated and transparent. Our executives are happier, mentors 
                are more active, and revenue has jumped significantly.
              </p>
              <footer className="flex items-center gap-4 pt-6">
                <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  F
                </div>
                <div>
                  <div className="font-medium text-gray-900">Founder</div>
                  <div className="text-gray-600">Finite Marshall Club</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* What This Proves */}
      <section className="animate-section py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 text-center">
            What This Proves
          </h2>
          <p className="text-xl text-gray-600 font-light text-center">
            This project demonstrates expertise in:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Multi-level commission systems',
              'Referral network architecture',
              'Role-based SaaS platforms',
              'Content ranking algorithms',
              'High-performance dashboards',
              'Complex business logic automation',
            ].map((skill, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl">
                <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-600 font-light text-center pt-6">
            If a business depends on <strong>referrals, commissions, creators, education, 
            or wellness</strong> — this system architecture can be adapted and scaled.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-purple-600 to-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-light">
            Interested in Similar Solutions?
          </h2>
          <p className="text-xl text-purple-100 font-light">
            Let's discuss how this architecture can be adapted for your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://finitemarshallclub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-colors duration-300"
            >
              <span>Visit Platform</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/#contact"
              className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-purple-600 transition-colors duration-300"
            >
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;
