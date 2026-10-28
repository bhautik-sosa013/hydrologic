const WaterFlowAnimation = () => (
  <div className="absolute inset-0 overflow-hidden rounded-2xl">
    {/* Deep gradient base */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />

    {/* Animated glow orbs */}
    <div
      className="absolute top-1/4 right-1/3 w-56 h-56 rounded-full blur-3xl animate-water-glow"
      style={{ background: 'hsl(207 90% 50% / 0.25)' }}
    />
    <div
      className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full blur-3xl animate-water-glow"
      style={{ background: 'hsl(175 80% 40% / 0.2)', animationDelay: '1.5s' }}
    />

    {/* SVG water scene */}
    <svg
      viewBox="0 0 800 500"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="wg-main" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(207,90%,55%)" stopOpacity="0.35" />
          <stop offset="50%" stopColor="hsl(190,90%,60%)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="hsl(207,90%,55%)" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="wg-deep" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(175,80%,42%)" stopOpacity="0.28" />
          <stop offset="50%" stopColor="hsl(200,85%,58%)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="hsl(175,80%,42%)" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient id="wg-surface" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(195,85%,65%)" stopOpacity="0.2" />
          <stop offset="50%" stopColor="hsl(207,90%,70%)" stopOpacity="0.38" />
          <stop offset="100%" stopColor="hsl(195,85%,65%)" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glow-particle">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="wave-blur">
          <feGaussianBlur stdDeviation="1" />
        </filter>
      </defs>

      {/* Grid lines overlay */}
      <defs>
        <pattern id="flow-grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path
            d="M 50 0 L 0 0 0 50"
            fill="none"
            stroke="hsl(207,90%,70%)"
            strokeWidth="0.3"
            opacity="0.25"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#flow-grid)" />

      {/* Wave layer 1 — deepest */}
      <g style={{ animation: 'wave 10s ease-in-out infinite' }}>
        <path
          d="M-200,310 C0,260 200,350 400,290 C600,230 800,330 1000,290 L1000,500 L-200,500 Z"
          fill="url(#wg-deep)"
        />
      </g>

      {/* Wave layer 2 */}
      <g style={{ animation: 'wave 7s ease-in-out infinite reverse' }}>
        <path
          d="M-200,335 C0,295 200,375 400,320 C600,265 800,355 1000,320 L1000,500 L-200,500 Z"
          fill="url(#wg-main)"
        />
      </g>

      {/* Wave layer 3 — surface */}
      <g style={{ animation: 'wave 5s ease-in-out infinite' }}>
        <path
          d="M-200,362 C0,335 200,395 400,358 C600,321 800,382 1000,358 L1000,500 L-200,500 Z"
          fill="url(#wg-surface)"
        />
      </g>

      {/* Flow particles */}
      {Array.from({ length: 20 }).map((_, i) => {
        const x = 20 + i * 38;
        const y = 295 + Math.sin(i * 0.75) * 55;
        const r = 1.5 + (i % 4) * 0.8;
        const color =
          i % 3 === 0
            ? 'hsl(190,90%,70%)'
            : i % 3 === 1
            ? 'hsl(207,85%,75%)'
            : 'hsl(175,80%,65%)';
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={r}
            fill={color}
            filter="url(#glow-particle)"
            style={{
              animation: `pulse ${1.4 + (i % 5) * 0.4}s ease-in-out ${i * 0.13}s infinite`,
            }}
          />
        );
      })}

      {/* Connecting flow lines */}
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={`fl-${i}`}
          x1={20 + i * 76}
          y1={295 + Math.sin(i * 0.75) * 55}
          x2={20 + (i + 1) * 76}
          y2={295 + Math.sin((i + 1) * 0.75) * 55}
          stroke="hsl(207,90%,75%)"
          strokeWidth="0.6"
          opacity="0.25"
          strokeDasharray="5 5"
        />
      ))}

      {/* Ripple circles */}
      {[{ x: 200, y: 270 }, { x: 500, y: 250 }, { x: 700, y: 280 }].map((pt, i) => (
        <circle
          key={`rpl-${i}`}
          cx={pt.x}
          cy={pt.y}
          r="18"
          fill="none"
          stroke="hsl(207,90%,75%)"
          strokeWidth="0.7"
          opacity="0.3"
          style={{
            animation: `ripple 3s ease-out ${i * 1}s infinite`,
            transformOrigin: `${pt.x}px ${pt.y}px`,
          }}
        />
      ))}
    </svg>

    {/* Top fade overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30" />
    {/* Bottom-left fade for text visibility on mobile */}
    <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent lg:hidden" />
  </div>
);

export default WaterFlowAnimation;
