import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BrandFleetConfig } from "@/types";
import OptimizedImage from "@/components/ui/OptimizedImage";

// Assets
import ferrariImg from "@/assets/car/ferrari/test1.webp";
import porscheImg from "@/assets/car/porshe/test-1.webp";
import bugattiImg from "@/assets/car/bugatti/bugatti-super-sport.webp";
import toyotaImg from "@/assets/car/nissan/nissan-r35-front.webp";

const BRANDS: BrandFleetConfig[] = [
  {
    id: "ferrari",
    name: "Ferrari",
    tagline: "The Soul of Italian Passion",
    image: ferrariImg,
    color: "#E31E24",
  },
  {
    id: "porsche",
    name: "Porsche",
    tagline: "The Pinnacle of Engineering",
    image: porscheImg,
    color: "#808080",
  },
  {
    id: "bugatti",
    name: "Bugatti",
    tagline: "Defining Speed & Excellence",
    image: bugattiImg,
    color: "#002C5F",
  },
  {
    id: "toyota",
    name: "Toyota",
    tagline: "The Legend of Endurance",
    image: toyotaImg,
    color: "#FFFFFF",
  },
];

export default function FleetPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)] w-full bg-black overflow-hidden mt-16">
      {BRANDS.map((brand, index) => (
        <motion.div
          key={brand.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          onClick={() => navigate(`/fleet/${brand.id}`)}
          className="relative flex-1 group cursor-pointer border-r border-white/5 last:border-none overflow-hidden transition-[flex] duration-700 ease-in-out md:hover:flex-[2]"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <OptimizedImage
              src={brand.image}
              alt={brand.name}
              className="w-full h-full object-cover transition-all duration-[1.2s] ease-out scale-[1.4] group-hover:scale-100 brightness-[0.2] group-hover:brightness-[0.6] grayscale group-hover:grayscale-0"
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 transition-all duration-500 group-hover:pb-20">
            <div className="mb-4 overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                className="block text-[10px] uppercase tracking-[0.4em] text-white/40 mb-2"
              >
                Category 0{index + 1}
              </motion.span>
              <h2 className="font-['Boska'] text-5xl md:text-7xl font-bold text-white uppercase leading-none">
                {brand.name}
              </h2>
            </div>

            <p className="font-['Satoshi-light'] text-white/60 text-sm md:text-base max-w-[200px] leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
              {brand.tagline}
            </p>

            <div
              className="absolute bottom-0 left-0 h-1 w-full transition-all duration-700 scale-x-0 group-hover:scale-x-100 origin-left"
              style={{ backgroundColor: brand.color }}
            />
          </div>

          {/* Hover Glitch Effect Element */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500 bg-white mix-blend-overlay" />
        </motion.div>
      ))}
    </div>
  );
}
