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
    url: "src/assets/car/bugatti/bugatti-super-sport.jpeg",
    title: "Title 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: 3,
    position: "right",
  },
  {
    url: "src/assets/car/bugatti/bugatti-super-sport.jpeg",
    title: "Title 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: 4,
    position: "right",
  },
  {
    url: "src/assets/car/bugatti/bugatti-super-sport.jpeg",
    title: "Title 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: 5,
    position: "right",
  },
  {
    url: "src/assets/car/bugatti/bugatti-super-sport.jpeg",
    title: "Title 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: 6,
    position: "right",
  },
  {
    url: "src/assets/car/bugatti/bugatti-super-sport.jpeg",
    title: "Title 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: 7,
    position: "right",
  },
];
