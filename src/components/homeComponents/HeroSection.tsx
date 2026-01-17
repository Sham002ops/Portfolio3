// components/Hero.tsx
import React from 'react';
import { Globe } from 'lucide-react';
import ScrollVelocity from '../baseComponents/ScrollVelocity';
import Menu from '../baseComponents/Menu';

interface HeroProps {
  name?: string;
  title?: string;
  location?: string;
  heroImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  name = 'Sham',
  location = 'Located in India',
  heroImage = '/hero-image.jpg',
}) => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-linear-to-b from-black/10 to-black/20">
      {/* Navigation - Highest z-index */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6">
        <div className="text-white text-sm md:text-base font-light">
          © Code by {name}
        </div>
        <Menu />
      </nav>

      {/* Layer 1: Background Text (Behind Image) - z-10 */}
      <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
        <ScrollVelocity
          texts={['Full-Stack Developer']}
          velocity={100}
          className="text-white text-[8vw] md:text-[10vw]"
        />
      </div>

      {/* Layer 2: Center Image - z-20 */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="w-[710px] h-[800px]mb-20">
          <img
            src='/Sam4.png'
            alt="Hero background"
            className="w-full h-full object-cover"
          />
         
        </div>
      </div>

      {/* <div>
         <img src="/Sam4.png" alt="" />
      </div>
      <div>
         <img src="/MyPortfolio/public/Sam4.png" alt="" />
      </div> */}

      {/* Layer 3: Foreground Text (Above Image) - z-30 */}
      <div className="absolute inset-0 z-30 flex mt-64 items-center justify-center">
        <ScrollVelocity
          texts={['— Sham Baand']}
          velocity={-100}
          className="text-white text-[8vw] md:text-[10vw]"
        />
      </div>

      {/* Layer 4: UI Elements - z-40 */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        {/* Location Badge - Desktop */}
        <div className="hidden md:flex absolute left-8 md:left-16 top-1/2 -translate-y-1/2 items-center gap-4 bg-gray-900/80 backdrop-blur-sm rounded-full px-6 py-4 border border-white/10 pointer-events-auto">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div className="text-white text-sm font-light pr-2">{location}</div>
        </div>

        {/* Location Badge - Mobile */}
        <div className="md:hidden absolute bottom-12 left-8 flex items-center gap-3 bg-gray-900/80 backdrop-blur-sm rounded-full px-4 py-3 border border-white/10 pointer-events-auto">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <div className="text-white text-xs font-light pr-2">{location}</div>
        </div>

        {/* Large Background Name Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[12vw] md:text-[15vw] font-bold text-white/5 select-none pointer-events-none whitespace-nowrap">
            {name} — {name}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
