// src/Components/CurtainReveal.tsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CurtainRevealProps {
  children: React.ReactNode;
  direction?: 'vertical' | 'horizontal' | 'center';
  duration?: number;
  delay?: number;
  color?: string;
}

const CurtainReveal: React.FC<CurtainRevealProps> = ({
  children,
  direction = 'vertical',
  duration = 1.5,
  delay = 0,
  color = '#000000',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const curtain = curtainRef.current;

    if (!container || !curtain) return;

    const tl = gsap.timeline({
      delay,
      onComplete: () => {
        curtain.style.display = 'none';
      },
    });

    // Set initial states
    gsap.set(container, { opacity: 0 });

    if (direction === 'vertical') {
      // Curtain slides up
      tl.set(curtain, { scaleY: 1, transformOrigin: 'bottom' })
        .to(container, { opacity: 1, duration: 0 })
        .to(curtain, {
          scaleY: 0,
          duration,
          ease: 'power4.inOut',
        });
    } else if (direction === 'horizontal') {
      // Curtain slides left
      tl.set(curtain, { scaleX: 1, transformOrigin: 'right' })
        .to(container, { opacity: 1, duration: 0 })
        .to(curtain, {
          scaleX: 0,
          duration,
          ease: 'power4.inOut',
        });
    } else if (direction === 'center') {
      // Split curtain from center
      tl.set(curtain, { clipPath: 'inset(0 0 0 0)' })
        .to(container, { opacity: 1, duration: 0 })
        .to(curtain, {
          clipPath: 'inset(0 100% 0 0)',
          duration,
          ease: 'power4.inOut',
        });
    }

    return () => {
      tl.kill();
    };
  }, [direction, duration, delay]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {children}
      <div
        ref={curtainRef}
        className="absolute inset-0 z-50 pointer-events-none"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

export default CurtainReveal;
