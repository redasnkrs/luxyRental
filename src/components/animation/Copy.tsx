"use client";
import React, { useRef } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Copy({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = "#000",
  stagger = 0.15,
  duration = 0.75,
}) {
  const containerRef = useRef(null);
  const splitRefs = useRef([]);
  const lines = useRef([]);
  const blocks = useRef([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRefs.current = [];
      lines.current = [];
      blocks.current = [];

      let elements = [];
      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        const split = SplitText.create(element, {
          type: "lines",
          linesClass: "block-line++",
          lineThreshold: 0.1,
        });

        splitRefs.current.push(split);

        split.lines.forEach((line) => {
          const wrapper = document.createElement("div");
          wrapper.className = "block-line-wrapper";
          line.parentNode.insertBefore(wrapper, line);
          wrapper.appendChild(line);

          const block = document.createElement("div");
          block.className = "block-revealer";
          block.style.backgroundColor = blockColor;
          wrapper.appendChild(block);

          lines.current.push(line);
          blocks.current.push(block);
        });
      });

      gsap.set(lines.current, { opacity: 0 });
      gsap.set(blocks.current, { scaleX: 0, transformOrigin: "left center" });

      const createBlockRevealAnimation = (block, line, index) => {
        const tl = gsap.timeline({ delay: delay + index * stagger });

        tl.to(block, { scaleX: 1, duration: duration, ease: "power4.inOut" });
        tl.set(line, { opacity: 1 });
        tl.set(block, { transformOrigin: "right center" });
        tl.to(block, { scaleX: 0, duration: duration, ease: "power4.inOut" });

        return tl;
      };

      if (animateOnScroll) {
        blocks.current.forEach((block, index) => {
          const tl = createBlockRevealAnimation(
            block,
            lines.current[index],
            index,
          );
          tl.pause();

          ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top 90%",
            once: true,
            onEnter: () => tl.play(),
          });
        });
      } else {
        blocks.current.forEach((block, index) => {
          createBlockRevealAnimation(block, lines.current[index], index);
        });
      }

      return () => {
        splitRefs.current.forEach((split) => split?.revert());

        const wrappers = containerRef.current?.querySelectorAll(
          ".block-line-wrapper",
        );
        wrappers?.forEach((wrapper) => {
          if (wrapper.parentNode && wrapper.firstChild) {
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
            wrapper.remove();
          }
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay, blockColor, stagger, duration],
    },
  );

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, { ref: containerRef });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
