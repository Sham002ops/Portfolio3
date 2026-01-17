'use client';
import React, { useEffect, useState } from "react";

interface Screenshot {
  image: string;
  alt: string;
}

interface Props {
  screenshots: Screenshot[];
  interval?: number;
}

const MobileMockupSlider: React.FC<Props> = ({ screenshots, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, interval);
    return () => clearInterval(timer);
  }, [screenshots.length, interval]);

  return (
    <div className="w-full flex flex-col items-center justify-center py-4">
      {/* Mobile Phone Mockup */}
      <div className="relative">
        {/* Phone Frame */}
        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl">
          
          {/* Volume Buttons */}
          <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          
          {/* Power Button */}
          <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          
          {/* Screen Content - Auto Slider */}
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
            <div
              className="flex h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {screenshots.map((screenshot, idx) => (
                <div key={idx} className="w-full h-full flex-shrink-0">
                  <img
                    src={screenshot.image}
                    alt={screenshot.alt}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="mt-6 flex gap-2.5 justify-center">
        {screenshots.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === idx 
                ? "bg-gray-900 w-8" 
                : "bg-gray-400 w-2.5 hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileMockupSlider;
