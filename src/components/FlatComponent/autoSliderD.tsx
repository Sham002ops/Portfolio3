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

const LaptopMockupSlider: React.FC<Props> = ({ screenshots, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, interval);
    return () => clearInterval(timer);
  }, [screenshots.length, interval]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Laptop Mockup */}
      <div className="relative w-full max-w-4xl">
        {/* Laptop Screen */}
        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[16px] rounded-t-xl shadow-2xl">
          {/* Screen Content - Auto Slider */}
          <div className="relative bg-white overflow-hidden aspect-video rounded-lg">
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

        {/* Laptop Base */}
        <div className="relative mx-auto bg-gray-800 rounded-b-xl h-3 w-full max-w-4xl">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-48 h-2 bg-gray-700 rounded-b-lg"></div>
        </div>

        {/* Laptop Bottom Shadow */}
        <div className="mx-auto h-2 w-full max-w-5xl bg-gradient-to-b from-gray-300 to-transparent rounded-full blur-md"></div>
      </div>

      {/* Navigation Dots */}
      <div className="mt-8 flex gap-2.5 justify-center">
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

export default LaptopMockupSlider;
