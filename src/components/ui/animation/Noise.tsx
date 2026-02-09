const Noise = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08] overflow-hidden">
      <div className="w-[200%] h-[200%] absolute top-[-50%] left-[-50%] animate-noise-grain">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
      <style>{`
        @keyframes noise-grain {
            0%, 100% { transform: translate(0, 0); }
            10% { transform: translate(-5%, -5%); }
            20% { transform: translate(-10%, 5%); }
            30% { transform: translate(5%, -10%); }
            40% { transform: translate(-5%, 15%); }
            50% { transform: translate(-10%, 5%); }
            60% { transform: translate(15%, 0); }
            70% { transform: translate(0, 10%); }
            80% { transform: translate(-15%, 0); }
            90% { transform: translate(10%, 5%); }
        }
        .animate-noise-grain {
            animation: noise-grain 0.2s steps(1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Noise;
