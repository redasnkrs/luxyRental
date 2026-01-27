export type CardType = {
  url: string;
  title: string;
  description: string;
  id: number;
  position: string;
};

export const cards: CardType[] = [
  {
    url: "src/assets/car/mercedes/mercedess-front.jpg",
    title: "Mercedes CLS AMG",
    description:
      "Review of the new Mercedes CLS AMG. They have a new V8 we're going look into it. Mercedes says it's the best CLS in 2025.",
    id: 1,
    position: "left",
  },
  {
    url: "src/assets/car/ferrari/laferrari-front.jpg",
    title: "LA FERRARI",
    description:
      "Ferrari announce their new ferrari called LA FERRARI. It should have a new V12.",
    id: 2,
    position: "left",
  },
  {
    url: "src/assets/car/aston/aston-db11.webp",
    title: "Aston Martin DB11",
    description:
      "The ultimate hypercar returns. With 1600 HP and a top speed of 300+ mph, the Chiron Super Sport redefines what is possible on four wheels.",
    id: 3,
    position: "right",
  },
  {
    url: "src/assets/car/bmw/bmw-top.jpg",
    title: "BMW M4",
    description:
      "Born on the track, unleashed on the road. The new GT3 RS features active aerodynamics and a naturally aspirated 4.0L flat-six engine.",
    id: 4,
    position: "right",
  },
  {
    url: "src/assets/car/porshe/gt3rs-interrior.jpg",
    title: "Porsche GT3 RS",
    description:
      "Precision meets power. The new M4 Competition brings aggressive styling and track-ready performance to the luxury coupe segment.",
    id: 5,
    position: "right",
  },
  {
    url: "src/assets/car/nissan/nissan-r35.webp",
    title: "Nissan GT-R",
    description:
      "Lamborghini's first High Performance Electrified Vehicle (HPEV). A V12 plug-in hybrid that keeps the soul of the raging bull alive.",
    id: 6,
    position: "left",
  },

  {
    url: "src/assets/car/mclaren/mclaren-720s-back.png",
    title: "McLaren 720S",
    description:
      "The most powerful naturally aspirated V12 Ferrari has ever produced. A grand tourer that delivers breathtaking acceleration and elegance.",
    id: 7,
    position: "left",
  },
];
