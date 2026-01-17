// src/Components/FlowingProjects.tsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  thumbnail: string; // Small image for marquee
  link: string;
  color: string;
  description: string;
}

interface FlowingProjectsProps {
  projects?: Project[];
  className?: string;
  itemHeight?: string;
}

const FlowingProjects: React.FC<FlowingProjectsProps> = ({ 
  projects,
  className = '',
  itemHeight = '160px'
}) => {
  const defaultProjects: Project[] = [
    {
      id: '1',
      title: 'Prescripto',
      category: 'Healthcare Platform',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=200&fit=crop',
      link: '#prescripto',
      color: '#10b981',
      description: 'Digital prescription management with ABDM integration',
    },
    {
      id: '2',
      title: 'Med-Adher',
      category: 'Mobile Health',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=300&h=200&fit=crop',
      link: '#med-adher',
      color: '#3b82f6',
      description: 'Medication adherence tracking for practitioners',
    },
    {
      id: '3',
      title: 'FMC Platform',
      category: 'Event Management',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      link: 'https://finitemarshallclub.com',
      color: '#8b5cf6',
      description: 'Complete webinar and mentor management solution',
    },
    {
      id: '4',
      title: '2nd Brain Vault',
      category: 'Productivity Tool',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop',
      link: '#brain-vault',
      color: '#f59e0b',
      description: 'Save and organize content from across the web',
    },
  ];

  const projectList = projects || defaultProjects;
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`w-full  bg-gray-900 relative z-0 ${className}`}>
      <nav className="flex flex-col m-0 p-0">
        {isActive && projectList.map((project, idx) => (
          <FlowingProjectItem 
            key={project.id} 
            project={project} 
            index={idx}
            itemHeight={itemHeight}
          />
        ))}
      </nav>
    </div>
  );
};

interface FlowingProjectItemProps {
  project: Project;
  index: number;
  itemHeight: string;
}

const FlowingProjectItem: React.FC<FlowingProjectItemProps> = ({ 
  project, 
  index,
  itemHeight 
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const animationDefaults = { duration: 0.6, ease: 'expo.out' };

  // Marquee animation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (marqueeInnerRef.current) {
        animationRef.current = gsap.to(marqueeInnerRef.current, {
          x: '-50%',
          duration: 25,
          ease: 'none',
          repeat: -1,
        });
      }
    }, 200 + index * 100);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [index]);

  // Preview image follow mouse
  useEffect(() => {
    if (showPreview && previewRef.current) {
      gsap.to(previewRef.current, {
        x: mousePos.x,
        y: mousePos.y,
        duration: 0.6,
        ease: 'power2.out',
      });
    }
  }, [mousePos, showPreview]);

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number
  ): 'top' | 'bottom' => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    
    setShowPreview(true);
    
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });

    // Animate preview
    if (previewRef.current) {
      gsap.fromTo(previewRef.current, 
        { scale: 0, rotation: -10, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
      );
    }
  };

  const handleMouseMove = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    setMousePos({
      x: ev.clientX - rect.left - 150, // Offset to center preview
      y: ev.clientY - rect.top - 100,
    });
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    
    setShowPreview(false);
    
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }).to(
      marqueeInnerRef.current,
      { y: edge === 'top' ? '101%' : '-101%' },
      '<'
    );

    // Animate out preview
    if (previewRef.current) {
      gsap.to(previewRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
    }
  };

  const marqueeContent = (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={`marquee-${index}-${i}`} className="flex items-center flex-shrink-0 gap-6">
          {/* Project Number */}
         <span 
            className="text-5xl md:text-6xl font-light transition-all duration-300 group-hover:opacity-0"
            style={{ color: project.color }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          
          {/* Project Title */}
          <span className="text-[#060010] uppercase font-semibold text-3xl md:text-4xl leading-tight px-4 whitespace-nowrap">
            {project.title}
          </span>
          
          {/* Small Thumbnail */}
          <div
            className="w-[140px] h-[90px] rounded-2xl bg-cover bg-center flex-shrink-0 mx-4"
            style={{ backgroundImage: `url(${project.thumbnail})` }}
          />
          
          {/* Category */}
          <span className="text-gray-700 text-lg font-light px-4 whitespace-nowrap">
            {project.category}
          </span>
          
          {/* Year */}
          <span className="text-gray-500 text-base font-light px-4">
            {project.year}
          </span>
        </div>
      ))}
    </>
  );

  return (
    <div
      className={`relative ${showPreview ? 'overflow-visible ': 'overflow-hidden'}  text-center border-b border-white/10`}
      style={{ height: itemHeight }}
      ref={itemRef}
    >
      {/* Main Link */}
      <a
        className=" group... flex items-center justify-center h-full relative cursor-pointer no-underline z-10"
        href={project.link}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center gap-8">
          {/* Number */}
          <span 
            className="text-5xl md:text-6xl font-light transition-all duration-300"
            style={{ color: project.color }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          
          {/* Title */}
          <h3 className="text-4xl md:text-5xl font-light text-white uppercase tracking-wide 
            transition-all duration-300 group-hover:opacity-0">
            {project.title}
          </h3>
          
          {/* Arrow Icon */}
          <ArrowUpRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </a>

      {/* Flowing Marquee Overlay */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white translate-y-[101%] z-20"
          ref={marqueeRef}
        >

        <div className="h-full flex items-center" ref={marqueeInnerRef}>
          {marqueeContent}
        </div>
      </div>

      {/* Preview Image - Follows Mouse */}
      {showPreview && (
          <div
            ref={previewRef}
            className="absolute pointer-events-none  z-999999 overflow-visible -mt-32"
            style={{
              width: '300px',
              height: '200px',
            }}
          >
          <div className="relative w-full h-full">
            <div
              className="w-full h-full rounded-2xl bg-cover bg-center shadow-2xl"
              style={{ 
                backgroundImage: `url(${project.image})`,
                boxShadow: `0 20px 60px ${project.color}40`,
              }}
            />

            <div 
              className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
              style={{ backgroundColor: project.color }}
            >
              View Project
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default FlowingProjects;
