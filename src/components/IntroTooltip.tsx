import { Search } from "lucide-react";

export function IntroTooltip() {
  return (
    <div className="absolute top-8 inset-x-0 mx-auto w-fit bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-sm text-gray-600 flex items-center gap-2 animate-bounce">
      <Search size={16} />
      Drag the magnifying glass{" "}
      <span className="font-bold">using the handle!</span>
    </div>
  );
}
