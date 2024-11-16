import React from 'react';
import { Position } from '../types';

interface MagnifyingGlassProps {
  position: Position;
  isDragging: boolean;
  magnifierSize: number;
  scale: number;
  children: React.ReactNode;
  onHandleMouseDown?: (e: React.MouseEvent) => void;
}

export function MagnifyingGlass({ position, isDragging, magnifierSize, scale, children, onHandleMouseDown }: MagnifyingGlassProps) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: position.x,
        top: position.y,
        width: magnifierSize,
        height: magnifierSize,
        transition: isDragging ? 'none' : 'all 0.3s ease-out'
      }}
    >
      <div 
        className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full border-4 border-indigo-200/50 shadow-lg"
        style={{ overflow: 'hidden' }}
      >
        <div className="absolute inset-0">
          <div 
            className="absolute text-gray-800"
            style={{
              left: `${-position.x}px`,
              top: `${-position.y}px`,
              width: '100vw',
              height: '100vh',
              transform: `scale(${scale})`,
              transformOrigin: `${position.x + magnifierSize/2}px ${position.y + magnifierSize/2}px`
            }}
          >
            {children}
          </div>
        </div>
      </div>

      <div 
        className="absolute transform cursor-move"
        style={{
          height: magnifierSize * 0.6,
          width: '15px',
          right: '12px',
          top: '80%',
          transformOrigin: 'center top',
          transform: 'rotate(-45deg)',
          pointerEvents: 'auto'
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
          onHandleMouseDown?.(e);
        }}
      >
        <div className="h-full w-full bg-gradient-to-b from-indigo-200/50 to-indigo-300/50 rounded-full shadow-md" />
      </div>
    </div>
  );
}