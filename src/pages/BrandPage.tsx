import { useParams, Navigate } from "react-router-dom";
import { brandsData } from "@/data/brands";
import { useEffect } from "react";

const BrandPage = () => {
  const { brandId } = useParams<{ brandId: string }>();
  
  // Scroll to top on brand change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [brandId]);

  const brand = brandsData[brandId as keyof typeof brandsData];

  if (!brand) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-6">
      <div className="max-w-[1400px] mx-auto space-y-12">
        {/* Header Section */}
        <header className="space-y-4 animate-fade-in-up">
          <h1 className="font-['Boska'] text-6xl md:text-8xl capitalize text-[#eb3813]">
            {brand.name}
          </h1>
          <p className="font-['Satoshi-light'] text-xl md:text-2xl text-white/70 max-w-2xl">
            {brand.description}
          </p>
        </header>

        {/* Hero Image */}
        <div className="w-full h-[50vh] md:h-[70vh] overflow-hidden rounded-lg">
           <img 
             src={brand.heroImage} 
             alt={`${brand.name} Hero`} 
             className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
           />
        </div>

        {/* Gallery Grid (if exists) */}
        {brand.gallery.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {brand.gallery.map((img: string, index: number) => (
                    <div key={index} className="overflow-hidden rounded-lg h-64 md:h-96">
                        <img 
                            src={img} 
                            alt={`${brand.name} gallery ${index + 1}`} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                ))}
            </div>
        )}
        
        {/* CTA */}
        <div className="pt-12 text-center">
            <h3 className="font-['Boska'] text-3xl mb-6">Experience the {brand.name}</h3>
            <button className="text-lg px-8 py-3">Book This Brand</button>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;