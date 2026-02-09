import { news } from "@/data/news";
import { Link } from "react-router-dom";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import type { NewsCard } from "@/types";

const NewsScroll = () => {
  const { containerRef, wrapperRef } = useHorizontalScroll();

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden pt-20"
    >
      <div
        ref={wrapperRef}
        className="flex h-full gap-10 pl-4 md:pl-20 items-center"
      >
        {news.map((card) => (
          <NewsCardItem card={card} key={card.id} />
        ))}
      </div>
    </section>
  );
};

const NewsCardItem = ({ card }: { card: NewsCard }) => {
  return (
    <Link
      to={`/news/${card.id}`}
      className="group relative h-[542px] w-[509px] overflow-hidden bg-neutral-900 rounded block flex-shrink-0"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: `${card.position}`,
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 brightness-75"
      />
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

export default NewsScroll;