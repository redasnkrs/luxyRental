import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// On importera ici nos layouts spécifiques
// import FerrariLayout from "@/components/fleet/FerrariLayout";
// import PorscheLayout from "@/components/fleet/PorscheLayout";

export default function BrandFleetDetail() {
  const { brandId } = useParams<{ brandId: string }>();
  const navigate = useNavigate();

  // Pour l'instant on affiche un placeholder stylé pour chaque marque
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Universal back button for the Fleet choice */}
      <nav className="fixed top-24 left-8 z-50">
        <button 
          onClick={() => navigate("/fleet")}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-[10px] uppercase tracking-widest">Back to Selection</span>
        </button>
      </nav>

      <div className="flex items-center justify-center h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={brandId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <h1 className="font-['Boska'] text-9xl uppercase font-bold italic opacity-10 absolute inset-0 flex items-center justify-center select-none">
              {brandId}
            </h1>
            <div className="relative z-10">
              <span className="text-[#eb3813] text-xs uppercase tracking-[0.5em] mb-4 block">Fleet Selection</span>
              <h2 className="text-5xl font-['Boska'] mb-8">Specialized {brandId} Experience</h2>
              <p className="max-w-md mx-auto text-white/50 font-['Satoshi-light']">
                Implementing unique {brandId} layout with bespoke animations and data structure.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
