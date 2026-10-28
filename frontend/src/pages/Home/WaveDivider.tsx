const WaveDivider = ({ inverted = false }: { inverted?: boolean }) => (
  <div
    className="w-full overflow-hidden leading-none pointer-events-none"
    style={{ transform: inverted ? 'scaleY(-1)' : 'none', marginBottom: inverted ? '-2px' : '0' }}
  >
    <svg
      viewBox="0 0 1440 56"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="w-full h-10 md:h-14"
    >
      <path
        d="M0,28 C180,56 360,0 540,28 C720,56 900,0 1080,28 C1260,56 1380,14 1440,28 L1440,56 L0,56 Z"
        fill="hsl(var(--muted) / 0.5)"
      />
      <path
        d="M0,38 C200,12 400,52 600,30 C800,8 1000,46 1200,32 C1320,22 1400,40 1440,38 L1440,56 L0,56 Z"
        fill="hsl(var(--muted) / 0.3)"
      />
    </svg>
  </div>
);

export default WaveDivider;
