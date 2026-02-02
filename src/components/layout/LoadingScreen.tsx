import { useEffect, useRef } from "react";
import gsap from "gsap";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Initial state
    gsap.set(containerRef.current, { yPercent: 0 });

    tl.to(progressRef.current, {
      width: "100%",
      duration: 1.5,
      ease: "power2.inOut",
    })
      .to(
        textRef.current,
        {
          opacity: 0,
          y: -20,
          duration: 0.5,
          ease: "power2.in",
        },
        "-=0.3"
      )
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
    >
      <div className="relative overflow-hidden">
        <h1
          ref={textRef}
          className="font-['Boska'] text-6xl md:text-8xl font-light tracking-wider"
        >
          LUXY RENTAL
        </h1>
      </div>
      
      <div className="absolute bottom-10 left-10 right-10 h-[1px] bg-white/20 overflow-hidden md:left-20 md:right-20">
        <div
          ref={progressRef}
          className="h-full w-0 bg-[#eb3813]"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
