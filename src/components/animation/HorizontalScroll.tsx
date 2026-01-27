import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { cards } from "../../data/newsCard";
const Example = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-98%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-36">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[542px] w-[509px] overflow-hidden bg-neutral-200 rounded"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: `${card.position}`,
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 brightness-75  "
      ></div>
      <div className="absolute z-10 bottom-10">
        <div className="flex flex-col gap-2">
          <p className=" pl-3 text-5xl font-black uppercase text-white ">
            {card.title}
          </p>
          <p className=" pl-3  text-white w-[510px]">{card.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Example;
