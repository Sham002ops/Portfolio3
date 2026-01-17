// src/Components/LoadingAnimationCSS.tsx
import React, { useState, useEffect } from 'react';
import './LoadingAnimationCSS.css';

const LoadingAnimationCSS: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    // Counter animation
    const counterInterval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(counterInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    // Phase transitions
    setTimeout(() => setPhase(2), 2500);
    setTimeout(() => setPhase(3), 3500);
    setTimeout(() => setPhase(4), 5000);
    setTimeout(() => {
      setPhase(5);
      onComplete?.();
    }, 6500);

    return () => clearInterval(counterInterval);
  }, [onComplete]);

  return (
    <div className={`loading-hero phase-${phase}`}>
      <div className="loading-bg"></div>
      
      <div className="loading-counter">{counter}</div>

      <div className="loading-images">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="loading-img" style={{ animationDelay: `${i * 0.125}s` }}>
            <img src={`https://picsum.photos/400/300?random=${i}`} alt="" />
          </div>
        ))}
      </div>

      <nav className="loading-nav">
        <div className="logo-name"><a href="#">Sham</a></div>
        <div className="nav-links">
          <a href="#">Portfolio</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <div className="loading-content">
        <h1>Full-Stack Developer</h1>
        <p>Building digital solutions that matter</p>
      </div>
    </div>
  );
};

export default LoadingAnimationCSS;
