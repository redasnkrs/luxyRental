import { useParams } from "react-router-dom";
import { news } from "../data/news";

export default function CarDetails() {
  const { id } = useParams();
  const car = news.find((c) => c.id === Number(id));

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Image Background */}
      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${car.url})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full flex-col justify-center px-10 md:px-20">
          <h1 className="font-['Boska'] text-6xl md:text-8xl font-bold uppercase tracking-wider mb-6">
            {car.title}
          </h1>
          <p className="max-w-2xl font-['Satoshi-light'] text-xl md:text-2xl leading-relaxed text-gray-200">
            {car.description}
          </p>
        </div>
      </div>

      {/* Content Section (Placeholder for more details) */}
      <div className="px-10 py-20 md:px-20">
        <h2 className="font-['Boska'] text-4xl mb-8">More Details</h2>
        <p className="text-gray-400 font-['Satoshi-light']">
          Full technical specifications and gallery coming soon...
        </p>
      </div>
    </div>
  );
};


