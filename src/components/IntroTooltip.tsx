import React from 'react';
import { Search } from 'lucide-react';

export function IntroTooltip() {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-sm text-gray-600 flex items-center gap-2 animate-bounce">
      <Search size={16} />
      Click and drag the magnifying glass!
    </div>
  );
}