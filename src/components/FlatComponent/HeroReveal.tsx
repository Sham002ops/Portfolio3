// src/Components/HeroReveal.tsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

interface HeroRevealProps {
  title: string;
  subtitle?: string;
  image?: string;
  delay?: number;
}

const HeroReveal: React.FC<HeroRevealProps> = ({
  title,
  subtitle,
  image,
  delay = 0.5,
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const subtitleElement = subtitleRef.current;
    const imageElement = imageRef.current;
    const overlay = overlayRef.current;

    if (!titleElement) return;

    const tl = gsap.timeline({ delay });

    // Split text animation
    const split = new SplitText(titleElement, { type: 'chars,words' });
    
    gsap.set(split.chars, { opacity: 0, y: 100, rotationX: -90 });
    gsap.set(titleElement, { perspective: 1000 });

    // Animate title
    tl.to(split.chars, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.8,
      stagger: 0.03,
      ease: 'back.out(1.7)',
    });

    // Animate subtitle
    if (subtitleElement) {
      tl.from(
        subtitleElement,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.4'
      );
    }

    // Animate image reveal
    if (imageElement && overlay) {
      tl.from(
        imageElement,
        {
          scale: 1.2,
          duration: 1.5,
          ease: 'power3.out',
        },
        0
      ).to(
        overlay,
        {
          scaleY: 0,
          transformOrigin: 'top',
          duration: 1.2,
          ease: 'power4.inOut',
        },
        0.5
      );
    }

    return () => {
      tl.kill();
      split.revert();
    };
  }, [delay]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0">
          <div
            ref={imageRef}
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          {/* Reveal Overlay */}
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-black z-10"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-8 text-center">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6 leading-tight"
        >
          {title}
        </h1>
        {subtitle && (
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-white/80 font-light max-w-3xl"
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroReveal;
