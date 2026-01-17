// src/Components/PageTransition.tsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
  onComplete?: () => void;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, onComplete }) => {
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const leftCurtain = leftCurtainRef.current;
    const rightCurtain = rightCurtainRef.current;
    const content = contentRef.current;

    if (!leftCurtain || !rightCurtain || !content) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsComplete(true);
        onComplete?.();
      },
    });

    // Initial setup
    gsap.set(content, { opacity: 0, scale: 0.95 });
    gsap.set([leftCurtain, rightCurtain], { scaleX: 1 });

    // Animation sequence
    tl.to([leftCurtain, rightCurtain], {
      scaleX: 0,
      duration: 1.2,
      ease: 'power4.inOut',
      stagger: 0.1,
    })
      .to(
        content,
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div ref={contentRef}>{children}</div>

      {!isComplete && (
        <>
          {/* Left Curtain */}
          <div
            ref={leftCurtainRef}
            className="fixed top-0 left-0 w-1/2 h-full bg-gray-900 z-50 origin-right"
          />
          {/* Right Curtain */}
          <div
            ref={rightCurtainRef}
            className="fixed top-0 right-0 w-1/2 h-full bg-gray-900 z-50 origin-left"
          />
        </>
      )}
    </div>
  );
};

export default PageTransition;
