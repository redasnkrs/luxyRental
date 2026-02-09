import { news } from "@/data/news";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";

export default function NewsPage() {
  // We'll treat the first item as the featured "Cover Story"
  const [featured, ...others] = news;

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-20 border-b border-white/10 pb-12 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4 block">
              Editorial Edition • 2026
            </span>
            <h1 className="font-['Boska'] text-7xl md:text-[10rem] leading-none font-bold italic">
              News
            </h1>
          </div>
          <div className="md:max-w-xs text-right">
            <p className="font-['Satoshi-light'] text-white/60 leading-relaxed italic">
              A curated collection of automotive masterpieces, technical
              breakthroughs, and the soul of performance.
            </p>
          </div>
        </header>

        {/* Featured Cover Story */}
        <section className="mb-32">
          <Link to={`/news/${featured.id}`} className="group block relative">
            <div className="relative aspect-[21/9] overflow-hidden rounded-sm mb-8">
              <OptimizedImage
                src={featured.url}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-50"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-widest text-white/40">
                    Cover Story
                  </span>
                  <span className="w-12 h-px bg-white/20" />
                  <span className="text-[10px] uppercase tracking-widest text-white/40">
                    5 Min Read
                  </span>
                </div>
                <h2 className="font-['Boska'] text-5xl md:text-8xl font-bold uppercase mb-6 group-hover:italic transition-all duration-500">
                  {featured.title}
                </h2>
                <p className="font-['Satoshi-light'] text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
                  {featured.description}
                </p>
              </div>
              <div className="md:col-span-4 flex justify-end items-start pt-12">
                <div className="flex items-center gap-4 group-hover:text-[#eb3813] transition-colors">
                  <span className="font-['Satoshi-medium'] uppercase tracking-widest text-sm">
                    Read Review
                  </span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {others.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
            >
              <Link to={`/news/${item.id}`} className="group block">
                <div
                  className={`relative overflow-hidden mb-8 aspect-[4/5] ${index % 2 === 0 ? "md:mt-12" : ""}`}
                >
                  <OptimizedImage
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundColor: item.accentColor }}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-white/40">
                    <span>In Review</span>
                    <span>No. 0{index + 2}</span>
                  </div>
                  <h3 className="font-['Boska'] text-3xl font-bold uppercase group-hover:text-[#eb3813] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-['Satoshi-light'] text-white/50 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  <div className="pt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-['Satoshi-bold'] opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                    Explore Article <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Closing Editorial Note */}
        <footer className="mt-40 pt-20 border-t border-white/10 text-center">
          <h4 className="font-['Boska'] text-2xl italic text-white/30">
            The pursuit of excellence is a journey without a finish line.
          </h4>
        </footer>
      </div>
    </div>
  );
}
