// ChooseYourRide.tsx
import React from "react";
import { cars } from "../../data/cars";
import { CarCard } from "../ui/CarCard";

const ChooseCar: React.FC = () => {
  return (
    <section id="car" className="mx-auto max-w-6xl px-4 py-10">
      <h3 className="mb-20 text-center text-2xl md:text-4xl text-white">
        Choose Your Ride
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            title={car.title}
            imageSrc={car.imageSrc}
            hoverImageSrc={car.hoverImageSrc}
            imageAlt={car.imageAlt}
            pricePerDay={car.pricePerDay}
            stats={car.stats}
            onLearnMore={() => console.log(`Learn more about ${car.title}`)}
          />
        ))}
      </div>
    </section>
  );
};

export default ChooseCar;
