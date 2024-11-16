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
    // x: (typeof window !== 'undefined' ? window.innerWidth : 0) / 2 - magnifierSize / 2,
    // y: (typeof window !== 'undefined' ? window.innerHeight : 0) / 2 - magnifierSize / 2
    // Don't start at the center of the screen
    x: 20,
    y: (typeof window !== 'undefined' ? window.innerHeight : 0) * 2 / 3 - magnifierSize / 3
  }));
  
  const [isDragging, setIsDragging] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Add these new refs to track the initial click position
  const dragOffsetRef = useRef<Position>({ x: 0, y: 0 });

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

  // const handleMouseDown = (e: React.MouseEvent) => {
  //   // Remove this function as we don't want to handle clicks anywhere
  // };

  const handleHandleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      // Store the offset between click position and magnifying glass position
      dragOffsetRef.current = {
        x: e.clientX - rect.left - position.x,
        y: e.clientY - rect.top - position.y
      };
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      // Use the stored offset to maintain the relative position
      setPosition({
        x: Math.min(Math.max(0, e.clientX - rect.left - dragOffsetRef.current.x), rect.width - magnifierSize),
        y: Math.min(Math.max(0, e.clientY - rect.top - dragOffsetRef.current.y), rect.height - magnifierSize)
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 select-none cursor-default overflow-hidden"
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
        onHandleMouseDown={handleHandleMouseDown}
      >
        <Content />
      </MagnifyingGlass>

      {showIntro && <IntroTooltip />}
    </div>
  );
}

export default App;