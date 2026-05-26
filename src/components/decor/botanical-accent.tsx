/** Subtle botanical line art — hero decoration only */
export function BotanicalAccent({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M10 65 Q40 20 60 40 T110 25"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M25 70 Q50 35 70 50"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.25"
      />
      <ellipse cx="95" cy="22" rx="4" ry="7" fill="currentColor" opacity="0.2" />
      <ellipse cx="108" cy="28" rx="3" ry="5" fill="currentColor" opacity="0.15" />
    </svg>
  );
}
