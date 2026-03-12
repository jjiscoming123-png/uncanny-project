export default function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="100" height="100" rx="12" fill="#f5f0e8" />
      {/* Face that's almost right - one eye slightly off */}
      <circle cx="38" cy="42" r="5" fill="#1a1a1a" />
      <circle cx="62" cy="41" r="5" fill="#1a1a1a" /> {/* Slightly higher */}
      <path d="M40 62 Q50 68 60 62" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="50" cy="45" r="25" stroke="#c9a87c" strokeWidth="1.5" fill="none" opacity="0.3" />
    </svg>
  );
}
