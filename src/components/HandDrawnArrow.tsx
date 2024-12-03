import "../styles/animations.css";

export function HandDrawnArrow() {
  return (
    <svg width="60" height="40" viewBox="0 0 120 80" className="transform">
      <path
        d="M5,40 Q30,35 60,37 T90,40"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        className="animate-draw"
      />
      <path
        d="M80,25 L100,40 L80,55"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-draw stroke"
      />
    </svg>
  );
}
