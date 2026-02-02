import porscheImg from "../assets/car/porshe/outside-porsche.webp";
import porscheInterriorImg from "../assets/car/porshe/Porsche-911-Turbo-S-Interrior.webp";
import bugattiImg from "../assets/car/bugatti/bugatti-super-sport.webp";
import lamborghiniImg from "../assets/car/lambh/revuelto.webp";
import ferrariImg from "../assets/car/ferrari/black_812sf_36.webp";
import ferariInteriorImg from "../assets/car/ferrari/black_812sf_16.webp";

export const cars = [
  {
    title: "Porsche 911 Turbo S",
    imageSrc: porscheImg,
    hoverImageSrc: porscheInterriorImg,
    imageAlt: "Black Porsche 911 Turbo S convertible by a reflective pool at sunset",
    pricePerDay: 1299,
    stats: [
      { label: "Top Speed", value: "322 km/h" },
      { label: "0–100", value: "2.6 s" },
      { label: "Horsepower", value: "750 hp" },
    ],
  },
  {
    title: "Bugatti Veyron Super-Sport",
    imageSrc: bugattiImg,
    hoverImageSrc: undefined,
    imageAlt: "Bugatti Veyron Super-Sport in motion",
    pricePerDay: 2899,
    stats: [
      { label: "Top Speed", value: "431 km/h" },
      { label: "0–100", value: "2.5 s" },
      { label: "Horsepower", value: "1200 hp" },
    ],
  },
  {
    title: "Lamborghini Revuelto",
    imageSrc: lamborghiniImg,
    hoverImageSrc: undefined,
    imageAlt: "Orange Lamborghini Revuelto parked on a street",
    pricePerDay: 2399,
    stats: [
      { label: "Top Speed", value: "350 km/h" },
      { label: "0–100", value: "2.5 s" },
      { label: "Horsepower", value: "1015 hp" },
    ],
  },
  {
    title: "Ferrari 812 Superfast",
    imageSrc: ferrariImg,
    hoverImageSrc: ferariInteriorImg,
    imageAlt: "Ferrari in a garage setting",
    pricePerDay: 1099,
    stats: [
      { label: "Top Speed", value: "355 km/h" },
      { label: "0–100", value: "2.9 s" },
      { label: "Horsepower", value: "800 hp" },
    ],
  },
];
