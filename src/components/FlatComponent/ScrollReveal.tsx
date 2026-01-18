// src/Components/ScrollReveal.tsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 1,
  className = '',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    const mask = maskRef.current;

    if (!element || !mask) return;

    const getInitialTransform = () => {
      switch (direction) {
        case 'up':
          return { y: 100, opacity: 0 };
        case 'down':
          return { y: -100, opacity: 0 };
        case 'left':
          return { x: 100, opacity: 0 };
        case 'right':
          return { x: -100, opacity: 0 };
        case 'scale':
          return { scale: 0.8, opacity: 0 };
        default:
          return { y: 100, opacity: 0 };
      }
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse',
      },
    });

    // Mask animation
    tl.to(mask, {
      scaleY: 0,
      transformOrigin: 'top',
      duration: duration * 0.8,
      ease: 'power3.inOut',
      delay,
    });

    // Content animation
    tl.from(
      element.children[0],
      {
        ...getInitialTransform(),
        duration,
        ease: 'power3.out',
      },
      `-=${duration * 0.5}`
    );

    return () => {
      tl.kill();
    };
  }, [direction, delay, duration]);

  return (
    <div ref={elementRef} className={`relative overflow-hidden ${className}`}>
      {children}
      <div
        ref={maskRef}
        className="absolute inset-0 bg-white z-10 pointer-events-none"
      />
    </div>
  );
};

export default ScrollReveal;
