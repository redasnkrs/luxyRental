import { useRef } from "react";
import { cards, CardType } from "../../data/newsCard";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Example = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
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
        start: "top top",
        end: `+=${Math.abs(xMovement)}`, // Scroll duration matches distance
        pin: true,
        scrub: 1, // Smooth scrubbing (adds that 'weight' to the scroll)
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
      <div 
        ref={wrapperRef} 
        className="flex gap-36 items-center h-full px-10 w-max will-change-transform"
      >
        {cards.map((card) => {
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
      <div className="absolute z-10 bottom-10">
        <div className="flex flex-col gap-2">
          <p className=" pl-3 text-5xl font-black uppercase text-white ">
            {card.title}
          </p>
          <p className=" pl-3  text-white w-[510px]">{card.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Example;
