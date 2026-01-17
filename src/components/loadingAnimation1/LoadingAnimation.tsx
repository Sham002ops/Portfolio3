// src/loadingAnimation/LoadingAnimation.tsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './LoadingAnimation.css';
import Menu from '../baseComponents/Menu';
import CButton from '../../components/FlatComponent/ctaButton';
import CTASection from '../../components/homeComponents/CTASection';
import RButton from '../baseComponents/RButton';

interface LoadingAnimationProps {
  onComplete?: () => void;
  images?: string[];
  name?: string;
  tagline?: string;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  onComplete,
  name = "",
  tagline = "I help founders turn complex ideas into stable, production-ready products.",
  images = [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop',
  ],
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    setTimeout(() => {
      createCounterDigits();
      animateLoader();
    }, 100);

    return () => {
      if (carouselRef.current) {
        carouselRef.current.kill();
      }
    };
  }, []);

  const createCounterDigits = () => {
    const c1 = document.querySelector('.counter-1');
    const c2 = document.querySelector('.counter-2');
    const c3 = document.querySelector('.counter-3');

    if (!c1 || !c2 || !c3) return;

    c1.innerHTML = '';
    c2.innerHTML = '';
    c3.innerHTML = '';

    ['0', '1'].forEach((n, i) => {
      const d = document.createElement('div');
      d.className = 'num' + (i === 1 ? ' num1offset1' : '');
      d.textContent = n;
      c1.appendChild(d);
    });

    for (let i = 0; i <= 10; i++) {
      const d = document.createElement('div');
      d.className = i === 1 ? 'num num1offset2' : 'num';
      d.textContent = i === 10 ? '0' : String(i);
      c2.appendChild(d);
    }

    for (let i = 0; i < 30; i++) {
      const d = document.createElement('div');
      d.className = 'num';
      d.textContent = String(i % 10);
      c3.appendChild(d);
    }
    const end = document.createElement('div');
    end.className = 'num';
    end.textContent = '0';
    c3.appendChild(end);
  };

  const animateCounter = (selector: string, duration: number, delay = 0) => {
    const counter = document.querySelector(selector) as HTMLElement;
    if (!counter) return;

    const height = counter.querySelector('.num')?.clientHeight || 0;
    const total = ((counter.querySelectorAll('.num').length - 1) * height);

    gsap.to(counter, {
      y: -total,
      duration,
      delay,
      ease: 'power2.inOut',
    });
  };

  const preShiftShuffle = () => {
    const imgs = document.querySelectorAll('.img') as NodeListOf<HTMLElement>;
    
    imgs.forEach((img, i) => {
      const tl = gsap.timeline({ delay: i * 0.02 });
      
      tl.to(img, {
        x: "+=445",
        y: "+=195",
        scale: 1.8,
        rotation: (i % 2 === 0 ? 3 : -3),
        duration: 0.6,
        ease: "power2.in",
      });
      
      tl.to(img, {
        x: "+=500",
        y: "+=230",
        scale: 1,
        rotation: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  };
  const preShiftShuffleMobile = () => {
    const imgs = document.querySelectorAll('.img') as NodeListOf<HTMLElement>;
    
    imgs.forEach((img, i) => {
      const tl = gsap.timeline({ delay: i * 0.02 });
      
      tl.to(img, {
        x: "+=00",
        y: "+=155",
        scale: 1.8,
        rotation: (i % 2 === 0 ? 3 : -3),
        duration: 0.6,
        ease: "power2.in",
      });
      
      tl.to(img, {
        x: "+=0",
        y: "+=145",
        scale: 1,
        rotation: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  };


    const preShiftShuffleTablet = () => {
      const imgs = document.querySelectorAll('.img') as NodeListOf<HTMLElement>;
      
      imgs.forEach((img, i) => {
        const tl = gsap.timeline({ delay: i * 0.02 });
        
        tl.to(img, {
          x: "+=0",    // Reduced horizontal shift for tablet
          y: "+=145",    // Adjusted vertical shift
          scale: 1.7,
          rotation: (i % 2 === 0 ? 3 : -3),
          duration: 0.6,
          ease: "power2.in",
        });
        
        tl.to(img, {
          x: "+=150",    // Second tablet shift - adjusted
          y: "+=200",
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    };



  // NEW: Fade carousel function
  const startFadeCarousel = () => {
    const imgs = Array.from(document.querySelectorAll('.img')) as HTMLElement[];
    
    setTimeout(() => {
      let currentIndex = 0;
      
      // Set initial state - only first image visible
      imgs.forEach((img, i) => {
        gsap.set(img, { 
          opacity: i === 0 ? 1 : 0,
          zIndex: imgs.length - i 
        });
      });
      
      carouselRef.current = gsap.timeline({ repeat: -1 });
      
      imgs.forEach((_, index) => {
        carouselRef.current!.add(() => {
          const nextIndex = (index + 1) % imgs.length;
          const currentImg = imgs[index];
          const nextImg = imgs[nextIndex];
          
          // Fade out current image
          gsap.to(currentImg, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
          });
          
          // Fade in next image
          gsap.to(nextImg, {
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut",
          });
        });
        
        // Wait 1.5 seconds before next transition
        carouselRef.current!.to({}, { duration: 1.5 });
      });
    }, 1500); // Start 1.5s after images settle
  };

  const animateLoader = () => {
  animateCounter('.counter-3', 2.5);
  animateCounter('.counter-2', 3);
  animateCounter('.counter-1', 2, 1.5);

  const tl = gsap.timeline({
    onComplete: () => {
      startFadeCarousel();
      setTimeout(() => {
        onComplete?.();
      }, 100);
    },
  });

 // ✅ Make elements visible before animating (CSS already hid them)
  gsap.set(['.hero-case-study-card', '.hero-title', '.hero-subtitle', '.nav', '.img'], {
    visibility: 'visible'
  });

  // Set initial animation states (opacity/transform)
  gsap.set('.hero-case-study-card', {
    opacity: 0,
    y: 50,
  });
  
  gsap.set(['.hero-title', '.hero-subtitle'], {
    opacity: 0,
    y: 50,
  });
  
  gsap.set(['.nav'], {
    opacity: 0,
    y: 50,
  });
  
  gsap.set('.hero-divider', {
    scaleX: 0,
  });

  gsap.set('.img', { scale: 0 });

  tl.to('.hero-bg', {
    scaleY: 1,
    duration: 3,
    ease: 'power2.inOut',
    delay: 0.25,
  });

  tl.to('.img', {
    scale: 1,
    duration: 1,
    stagger: 0.265,
    ease: 'power3.out',
  }, '<');

  tl.to('.counter', {
    opacity: 0,
    duration: 0.3,
    ease: 'power3.out',
    onStart: () => {
      const width = window.innerWidth;
    
    // ✅ 3-Way Conditional Logic
    if (width <= 768) {
      preShiftShuffleMobile();   // Mobile (≤768px)
    } else if (width <= 1024) {
      preShiftShuffleTablet();   // Tablet (769px - 1024px)
    } else {
      preShiftShuffle();         // Desktop (>1024px)
    }
    }
  });

  tl.to('.sidebar .divider', {
    scaleY: 1,
    duration: 1,
    ease: 'power3.inOut',
  }, '+=0.8');

  tl.to('.nav .divider', {
    scaleX: 1,
    duration: 1,
    ease: 'power3.inOut',
  }, '<');

  tl.to('.sidebar .logo img', {
    scale: 1,
    duration: 1,
    ease: 'power4.inOut',
  }, '<');

  // Left side text
  tl.to('.hero-title', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: 'power4.out',
  }, '-=0.5');

  tl.to('.nav', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: 'power4.out',
  }, '-=0.5');

  tl.to('.hero-subtitle', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
  }, '-=0.8');

  // UPDATED: Animate entire card at once
  tl.to('.hero-case-study-card', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: 'power3.out',
  }, '-=0.8'); // Same timing as subtitle

  // Divider inside card
  tl.to('.hero-divider', {
    scaleX: 1,
    duration: 0.8,
    ease: 'power3.inOut',
  }, '-=0.4');
};

  return (
    <section ref={heroRef} className="relative bg-black/15 z-0 w-full h-screen overflow-hidden">
      <div className="hero-bg"></div>

      <div className="counter">
        <div className="counter-1 digit"></div>
        <div className="counter-2 digit"></div>
        <div className="counter-3 digit"></div>
      </div>

      <div className="images-container">
        {images.map((img, idx) => (
          <div key={idx} className="img">
            <img src={img} alt={`Project ${idx + 1}`} />
          </div>
        ))}
      </div>

        <nav className="nav">
  <div className="logo-name">
    <a href="#">{name}</a>
  </div>

  <div className="nav-items ">
    <div className="links">
      <a href="#services" className="font-medium leading-[1.3]">Services</a>
      <p>/</p>
      <a href="#case-studies" className="font-medium leading-[1.3]">Case Studies</a>
      <p>/</p>
      <a href="#process" className="font-medium leading-[1.3] cursor-pointer ">How I Work</a>
    </div>

    <a
      href="#contact"
      className="ml-6"
    >
     <RButton>Get in tuch</RButton>
    </a>
  </div>

  <div className="divider"></div>
</nav>
 <div className="sidebar">
        <div className="logo">
          <img src='/images/SMlogo.jpg' alt="Logo" />
        </div>
        <div className="divider"></div>
      </div>

      <div className="tagline-container absolute top-[20%] sm:top-[20%] lg:top-[40%] left-[7.5rem] -translate-y-1/2 w-[55%] z-10">
        <h1 className="hero-title text-[2.5rem] leading-[1.15] font-medium tracking-[-0.05rem] text-slate-900">
          {tagline}
        </h1>

        <h2 className="hero-subtitle text-[1rem] font-medium leading-[1.3] tracking-[-0.02rem] text-slate-900">
         I help brands turn their message, story, and positioning into a website that feels trustworthy, intentional, and easy to understand.
        </h2>
      </div>
{/* 
      <div className="hero-subtext absolute right-[1.5rem] top-[50%] -translate-y-1/2 w-[22%] flex flex-col gap-4 z-10">
        <h2 className="hero-heading text-[1.4rem] font-medium leading-[1.3] tracking-[-0.02rem] text-slate-900">
          Automated commissions & referrals for a 500+ member organization
        </h2>

        <div className="hero-divider h-[2px] bg-slate-300 w-full"></div>

        <div className="hero-stats z-999999 flex flex-col gap-1">
          <p className="stat text-slate-900">
            Case Study Highlight
          Automated commissions & referrals
          for a 500+ member organization</p>
          <div className="stat z-999999 text-slate-900">

          <CButton/></div>
        </div>
      </div> */}

      {/* RIGHT SIDE - Case Study Card */}
      <div className="hero-case-study-card">
        <span className="case-study-badge">Case Study Highlight</span>
        
        <h2 className="case-study-title">
          Brand website for a wellness organization, designed to present programs clearly.
        </h2>

        <div className="hero-divider"></div>

        <div className="case-study-stats">
          <p className="case-study-stat">Clear presentation of multiple programs</p>
          <p className="case-study-stat">Structured content for a large member base</p>
        </div>
        <a href='#contact' className="case-study-cta">
          <CButton />
        </a>
      </div>
    </section>
  );
};

export default LoadingAnimation;
