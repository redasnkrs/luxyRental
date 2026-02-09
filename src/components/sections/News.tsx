import NewsScroll from "./NewsScroll";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function News() {
  return (
    <>
      <section id="news" className="mx-auto max-w-6xl px-4 mt-56 flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#eb3813] mb-2 block">Journal</span>
          <h3 className="text-4xl md:text-6xl text-white font-['Boska']">Latest Reviews</h3>
        </div>
        <Link 
          to="/news" 
          className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors font-['Satoshi-medium'] uppercase tracking-widest text-xs border-b border-white/10 pb-2"
        >
          Explore All Reviews <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
      <NewsScroll />
      <div className="mb-56" />
    </>
  );
}