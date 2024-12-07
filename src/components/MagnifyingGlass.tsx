import React from "react";
import { Position } from "../types";

interface MagnifyingGlassProps {
  position: Position;
  isDragging: boolean;
  magnifierSize: number;
  scale: number;
  children: React.ReactNode;
  onHandleMouseDown?: (e: React.MouseEvent | React.TouchEvent) => void;
}

export function MagnifyingGlass({
  position,
  isDragging,
  magnifierSize,
  scale,
  children,
  onHandleMouseDown,
}: MagnifyingGlassProps) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: position.x,
        top: position.y,
        width: magnifierSize,
        height: magnifierSize,
        transition: isDragging ? "none" : "all 0.3s ease-out",
      }}
    >
      <div
        className="absolute transform cursor-move touch-none"
        style={{
          height: magnifierSize * 0.6,
          width: "22px",
          right: "14px",
          top: "87%",
          transformOrigin: "center top",
          transform: "rotate(-43deg)",
          pointerEvents: "auto",
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
          onHandleMouseDown?.(e);
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onHandleMouseDown?.(e);
        }}
      >
        <div className="h-full w-full bg-gradient-to-b from-yellow-200 from-10% via-black via-20% to-90% to-black rounded-b-full shadow-md" />
      </div>
      <div
        className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full border-[3px] border-slate-300 shadow-lg"
        style={{ overflow: "hidden" }}
      >
        <div className="absolute inset-0">
          <div
            className="absolute text-gray-800 pointer-events-auto"
            style={{
              left: `${-position.x}px`,
              top: `${-position.y}px`,
              width: "100vw",
              height: "100vh",
              transform: `scale(${scale})`,
              transformOrigin: `${position.x + magnifierSize / 2}px ${
                position.y + magnifierSize / 2
              }px`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
