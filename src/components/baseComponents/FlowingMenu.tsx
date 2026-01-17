// src/Components/FlowingMenu.tsx (Compact Version)
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
  className?: string;
  itemHeight?: string; // Control individual item height
  textSize?: string; // Control text size
  imageSize?: { width: string; height: string }; // Control image size
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ 
  items = [], 
  className = '',
  itemHeight = '120px', // Default height per item
  textSize = 'text-2xl md:text-3xl',
  imageSize = { width: '120px', height: '80px' }
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (items.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white">
        <p>No menu items provided</p>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden bg-gray-900 ${className}`}>
      <nav className="flex flex-col m-0 p-0">
        {isActive && items.map((item, idx) => (
          <MenuItem 
            key={`menu-item-${idx}`} 
            {...item} 
            index={idx}
            itemHeight={itemHeight}
            textSize={textSize}
            imageSize={imageSize}
          />
        ))}
      </nav>
    </div>
  );
};

interface MenuItemPropsExtended extends MenuItemProps {
  index: number;
  itemHeight: string;
  textSize: string;
  imageSize: { width: string; height: string };
}

const MenuItem: React.FC<MenuItemPropsExtended> = ({ 
  link, 
  text, 
  image, 
  index,
  itemHeight,
  textSize,
  imageSize
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  const animationDefaults = { duration: 0.6, ease: 'expo.out' };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (marqueeInnerRef.current) {
        animationRef.current = gsap.to(marqueeInnerRef.current, {
          x: '-50%',
          duration: 15,
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
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
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
  };

  const marqueeContent = (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={`content-${index}-${i}`} className="flex items-center flex-shrink-0">
          <span className={`text-[#060010] uppercase font-normal ${textSize} leading-tight px-6 whitespace-nowrap`}>
            {text}
          </span>
          <div
            className="mx-6 rounded-[30px] bg-cover bg-center flex-shrink-0"
            style={{ 
              backgroundImage: `url(${image})`,
              width: imageSize.width,
              height: imageSize.height
            }}
          />
        </div>
      ))}
    </>
  );

  return (
    <div
      className="relative overflow-hidden text-center border-b border-white/10"
      style={{ height: itemHeight }}
      ref={itemRef}
    >
      <a
        className={`flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-white ${textSize} hover:text-[#060010] transition-colors duration-300 z-10`}
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white translate-y-[101%]"
        ref={marqueeRef}
      >
        <div className="h-full flex items-center" ref={marqueeInnerRef}>
          {marqueeContent}
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;
