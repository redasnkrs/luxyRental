import { useParams, useNavigate } from "react-router-dom";
import { news } from "@/data/news";
import type { NewsCard } from "@/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Gauge, Zap, Wind, Timer } from "lucide-react";

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = news.find((c) => c.id === Number(id)) as NewsCard;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  if (!car) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <h2 className="text-4xl font-['Boska'] mb-4">Car not found</h2>
          <button
            onClick={() => navigate("/")}
            className="text-white underline font-['Satoshi-medium']"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const specIcons = [
    <Wind key="engine" className="w-6 h-6" />,
    <Zap key="power" className="w-6 h-6" />,
    <Timer key="accel" className="w-6 h-6" />,
    <Gauge key="speed" className="w-6 h-6" />,
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-['Satoshi-medium'] text-sm uppercase tracking-widest">Back</span>
        </motion.button>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-['Boska'] text-xl italic"
        >
          LuxyRental Exclusive
        </motion.div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <motion.div
          style={{
            backgroundImage: `url(${car.url})`,
            scale: heroScale,
            opacity: heroOpacity,
            y: heroY,
          }}
          className="absolute inset-0 bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-[#0a0a0a]" />
        </motion.div>

        <div className="relative z-10 flex h-full flex-col justify-end pb-20 px-6 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-['Boska'] text-7xl md:text-[12rem] font-bold uppercase leading-[0.8] mb-8 select-none">
              {car.title.split(" ").map((word, i) => (
                <span key={i} className="block last:ml-12 md:last:ml-24">
                  {word}
                </span>
              ))}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-20">
              <p className="max-w-xl font-['Satoshi-light'] text-lg md:text-xl leading-relaxed text-gray-300">
                {car.description}
              </p>
              <div className="h-px flex-1 bg-white/20 hidden md:block" />
              <div className="flex gap-4">
                <span className="text-sm font-['Satoshi-medium'] uppercase tracking-widest text-white/50">Scroll to explore</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Narrative Section */}
      <section className="py-32 px-6 md:px-20 grid md:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Boska'] text-5xl md:text-7xl mb-12 italic">
            The Art of <br /> Performance
          </h2>
          <div className="space-y-8">
            {car.longDescription?.map((para, i) => (
              <p key={i} className="font-['Satoshi-light'] text-xl text-gray-400 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-3/4 rounded-2xl overflow-hidden group"
        >
          <img
            src={car.gallery?.[1] || car.url}
            alt={car.title}
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
        </motion.div>
      </section>

      {/* Specifications Section */}
      <section className="py-32 px-6 md:px-20 bg-white/5 backdrop-blur-3xl rounded-[3rem] mx-4 md:mx-10 my-20">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
          <h2 className="font-['Boska'] text-5xl md:text-8xl uppercase font-bold">Technical <br /> Mastery</h2>
          <p className="font-['Satoshi-medium'] uppercase tracking-widest text-white/40">Specifications & Data</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {car.specs?.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-white/10 rounded-2xl flex flex-col gap-8 hover:bg-white/5 transition-colors group"
            >
              <div
                className="transition-colors"
                style={{ color: car.accentColor || "inherit" }}
              >
                {specIcons[i % specIcons.length]}
              </div>
              <div>
                <p className="text-sm font-['Satoshi-medium'] uppercase tracking-widest text-white/40 mb-1">{spec.label}</p>
                <p className="text-3xl font-['Boska'] font-bold">{spec.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      {car.gallery && car.gallery.length > 1 && (
        <section className="py-32 px-6 md:px-20">
          <h2 className="font-['Boska'] text-5xl md:text-7xl mb-20 text-center">Visual Narrative</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {car.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`overflow-hidden rounded-xl aspect-square relative group ${
                  i === 0 ? "md:col-span-2 md:aspect-video" : ""
                }`}
              >
                <img
                  src={img}
                  alt={`${car.title} gallery ${i}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="font-['Satoshi-medium'] uppercase tracking-tighter text-sm">View Detail</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="py-40 px-6 md:px-20 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['Boska'] text-6xl md:text-9xl font-bold uppercase mb-12">Experience <br /> The {car.title}</h2>
          <button
            onClick={() => navigate("/")}
            style={{
              backgroundColor: car.accentColor || "white",
              color: "black"
            }}
            className="px-12 py-6 rounded-full font-['Satoshi-bold'] uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]"
          >
            Inquire Now
          </button>
        </motion.div>
      </section>
    </div>
  );
}