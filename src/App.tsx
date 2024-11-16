import React, { useState, useRef, useEffect } from 'react';
import { MagnifyingGlass } from './components/MagnifyingGlass';
import { IntroTooltip } from './components/IntroTooltip';
import { Content } from './components/Content';
import type { Position } from './types';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const magnifierSize = 150;
  // const scale = 1.75;
  const scale = 5;
  // const scale = 1;
  // const scale = 1.2;

  // Initialize position to center of screen
  const [position, setPosition] = useState<Position>(() => ({
    x: (typeof window !== 'undefined' ? window.innerWidth : 0) / 2 - magnifierSize / 2,
    y: (typeof window !== 'undefined' ? window.innerHeight : 0) / 2 - magnifierSize / 2
  }));
  
  const [isDragging, setIsDragging] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Update position when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (!isDragging) {
        setPosition({
          x: window.innerWidth / 2 - magnifierSize / 2,
          y: window.innerHeight / 2 - magnifierSize / 2
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDragging, magnifierSize]);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left - magnifierSize / 2,
        y: e.clientY - rect.top - magnifierSize / 2
      });
    }
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: Math.min(Math.max(0, e.clientX - rect.left - magnifierSize / 2), rect.width - magnifierSize),
        y: Math.min(Math.max(0, e.clientY - rect.top - magnifierSize / 2), rect.height - magnifierSize)
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 select-none cursor-move overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="absolute inset-0">
        <Content />
      </div>

      <MagnifyingGlass
        position={position}
        isDragging={isDragging}
        magnifierSize={magnifierSize}
        scale={scale}
      >
        <Content />
      </MagnifyingGlass>

      {showIntro && <IntroTooltip />}
    </div>
  );
}

export default App;