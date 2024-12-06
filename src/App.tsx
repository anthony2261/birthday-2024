import React, { useState, useRef, useEffect } from "react";
import { MagnifyingGlass } from "./components/MagnifyingGlass";
import { IntroTooltip } from "./components/IntroTooltip";
import { Content } from "./components/Content";
import type { Position } from "./types";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  // 150 if large screen, 140 if small screen
  const magnifierSize = window.innerWidth > 768 ? 150 : 140;
  const scale = 9;

  // Initialize position to center of screen
  const [position, setPosition] = useState<Position>(() => ({
    // x: (typeof window !== 'undefined' ? window.innerWidth : 0) / 2 - magnifierSize / 2,
    // y: (typeof window !== 'undefined' ? window.innerHeight : 0) / 2 - magnifierSize / 2
    // Don't start at the center of the screen
    x: 20,
    y:
      ((typeof window !== "undefined" ? window.innerHeight : 0) * 2) / 3 -
      magnifierSize / 3,
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
          y: window.innerHeight / 2 - magnifierSize / 2,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isDragging, magnifierSize]);

  useEffect(() => {
    if (isDragging && showIntro) {
      setShowIntro(false);
    }
  }, [isDragging, showIntro]);

  const handleHandleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const clientX =
        "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
      const clientY =
        "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

      dragOffsetRef.current = {
        x: clientX - rect.left - position.x,
        y: clientY - rect.top - position.y,
      };
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (isDragging && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const clientX =
        "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
      const clientY =
        "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

      setPosition({
        x: Math.min(
          Math.max(0, clientX - rect.left - dragOffsetRef.current.x),
          rect.width - magnifierSize
        ),
        y: Math.min(
          Math.max(0, clientY - rect.top - dragOffsetRef.current.y),
          rect.height - magnifierSize
        ),
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 select-none cursor-default overflow-hidden touch-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchCancel={handleMouseUp}
    >
      <div className="absolute inset-0">
        <Content blur={true} />
      </div>

      <MagnifyingGlass
        position={position}
        isDragging={isDragging}
        magnifierSize={magnifierSize}
        scale={scale}
        onHandleMouseDown={handleHandleMouseDown}
      >
        <Content blur={false} />
      </MagnifyingGlass>

      {showIntro && <IntroTooltip />}
    </div>
  );
}

export default App;
