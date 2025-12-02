// ChooseYourRide.tsx
import React from "react";
import { CarCard } from "./CarCard";

// Replace with your actual imports
import porscheImg from "../assets/car/porshe/outside-porsche.jpg";
import bugattiImg from "../assets/car/bugatti/bugatti-super-sport.jpeg";
import lamborghiniImg from "../assets/car/lambh/revuelto.jpg";
import ferrariImg from "../assets/car/ferrari/black_812sf_36.jpg";

const ChooseCar: React.FC = () => {
  const handleLearnMore = (title: string) => {
    // Swap with routing or modal
    console.log("Learn more:", title);
  };

  return (
    <section id="car" className="mx-auto max-w-6xl px-4 py-10">
      <h3 className="mb-20 text-center text-2xl md:text-4xl text-white">
        Choose Your Ride
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
        <CarCard
          title="Porsche 911 Turbo S"
          imageSrc={porscheImg}
          imageAlt="Black Porsche 911 Turbo S convertible by a reflective pool at sunset"
          pricePerDay={1299}
          stats={[
            { label: "Top Speed", value: "330 km/h" },
            { label: "0–100", value: "2.5 s" },
            { label: "Horsepower", value: "750 hp" },
          ]}
          onLearnMore={() => handleLearnMore("Porsche 911 Turbo S")}
        />

        <CarCard
          title="Bugatti Veyron Super-Sport"
          imageSrc={bugattiImg}
          imageAlt="Bugatti Veyron Super-Sport in motion"
          pricePerDay={2899}
          stats={[
            { label: "Top Speed", value: "431 km/h" },
            { label: "0–100", value: "2.5 s" },
            { label: "Horsepower", value: "1200 hp" },
          ]}
          onLearnMore={() => handleLearnMore("Bugatti Veyron Super-Sport")}
        />

        <CarCard
          title="Lamborghini Revuelto"
          imageSrc={lamborghiniImg}
          imageAlt="Orange Lamborghini Revuelto parked on a street"
          pricePerDay={2399}
          stats={[
            { label: "Top Speed", value: "350 km/h" },
            { label: "0–100", value: "2.5 s" },
            { label: "Horsepower", value: "1015 hp" },
          ]}
          onLearnMore={() => handleLearnMore("Lamborghini Revuelto")}
        />

        <CarCard
          title="Ferrari 812 Superfast"
          imageSrc={ferrariImg}
          imageAlt="Ferrari in a garage setting"
          pricePerDay={1099}
          stats={[
            { label: "Top Speed", value: "330 km/h" },
            { label: "0–100", value: "3.0 s" },
            { label: "Horsepower", value: "710 hp" },
          ]}
          onLearnMore={() => handleLearnMore("Ferrari")}
        />
      </div>
    </section>
  );
};

export default ChooseCar;
