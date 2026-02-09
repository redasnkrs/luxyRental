import { useRef } from "react";
import { news, type CardType } from "../../../data/news";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const wrapper = wrapperRef.current;
      if (!container || !wrapper) return;

      // Get the total scroll width
      const scrollWidth = wrapper.scrollWidth;
      const viewportWidth = window.innerWidth;

      // Calculate exact movement needed
      const xMovement = -(scrollWidth - viewportWidth + 100); // 100px buffer

      gsap.to(wrapper, {
        x: xMovement,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top 15%",
          end: `+=${Math.abs(xMovement) + 1000}`, // Increased scroll duration for smoother feel
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden pt-20"
    >
      <div
        ref={wrapperRef}
        className="flex h-full gap-10 pl-4 md:pl-20 items-center"
      >
        {news.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <Link
      to={`/news/${card.id}`}
      key={card.id}
      className="group relative h-[542px] w-[509px] overflow-hidden bg-neutral-200 rounded block flex-shrink-0"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: `${card.position}`,
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 brightness-75"
      ></div>
      <div className="absolute z-10 bottom-10 left-0 right-0 p-6">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <p className="text-5xl font-black uppercase text-white leading-none">
              {card.title}
            </p>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] uppercase tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Review
            </span>
          </div>
          <p className="text-white/80 max-w-sm font-['Satoshi-light'] leading-relaxed">
            {card.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalScroll;
