// src/homeComponents/MenuSection.tsx
import { useRef, useEffect, useState } from 'react';
import FlowingMenu from '../baseComponents/FlowingMenu';

const menuItems = [
  { link: '#work', text: 'Work', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop' },
  { link: '#about', text: 'About', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop' },
  { link: '#services', text: 'Services', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop' },
  { link: '#contact', text: 'Contact', image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&h=400&fit=crop' },
];

function MenuSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Activate when 70% visible
        if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: [0, 0.5, 0.7, 1] }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {isVisible && <FlowingMenu items={menuItems} />}
    </section>
  );
}

export default MenuSection;
