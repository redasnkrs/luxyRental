import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const useHorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const wrapper = wrapperRef.current;
      if (!container || !wrapper) return;

      const scrollWidth = wrapper.scrollWidth;
      const viewportWidth = window.innerWidth;
      const xMovement = -(scrollWidth - viewportWidth + 100);

      gsap.to(wrapper, {
        x: xMovement,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top 15%",
          end: `+=${Math.abs(xMovement) + 1000}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    },
    { scope: containerRef }
  );

  return { containerRef, wrapperRef };
};
