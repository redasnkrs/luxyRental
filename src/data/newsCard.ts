import mercFront from "../assets/car/mercedes/mercedess-front.webp";
import laferrari from "../assets/car/ferrari/laferrari-front.webp";
import astonDb11 from "../assets/car/aston/aston-db11.webp";
import bmwTop from "../assets/car/bmw/bmw_hero.webp";
import porscheGt3 from "../assets/car/porshe/gt3rs-interrior.webp";
import nissanGtr from "../assets/car/nissan/nissan-r35.webp";
import mclaren720 from "../assets/car/mclaren/mclaren-720s-back.webp";

export type CardType = {
  url: string;
  title: string;
  description: string;
  id: number;
  position: string;
};

export const cards: CardType[] = [
  {
    url: mercFront,
    title: "Mercedes CLS AMG",
    description:
      "A stylish four-door coupe combining luxury with AMG performance. Known for its sweeping roofline and potent engine options.",
    id: 1,
    position: "left",
  },
  {
    url: laferrari,
    title: "LaFerrari",
    description:
      "Ferrari's definitive hybrid hypercar. A masterpiece of engineering that combines a V12 with an electric motor for unmatched responsiveness.",
    id: 2,
    position: "left",
  },
  {
    url: astonDb11,
    title: "Aston Martin DB11",
    description:
      "The standard-bearer for modern Aston Martin grand tourers. It blends timeless elegance with twin-turbocharged V8 or V12 power.",
    id: 3,
    position: "right",
  },
  {
    url: bmwTop,
    title: "BMW M4",
    description:
      "The benchmark for sports coupes. The M4 delivers precise handling, aggressive styling, and a powerful inline-six engine.",
    id: 4,
    position: "right",
  },
  {
    url: porscheGt3,
    title: "Porsche GT3 RS",
    description:
      "A track-focused weapon for the road. Featuring a high-revving naturally aspirated engine and extensive aerodynamic upgrades.",
    id: 5,
    position: "right",
  },
  {
    url: nissanGtr,
    title: "Nissan GT-R",
    description:
      "The legendary 'Godzilla'. Famous for its advanced all-wheel-drive system and twin-turbo V6 that challenges supercars twice its price.",
    id: 6,
    position: "left",
  },
  {
    url: mclaren720,
    title: "McLaren 720S",
    description:
      "A supercar that rewrote the rules. Its carbon fiber structure and 4.0L twin-turbo V8 provide blisteringly fast performance and agility.",
    id: 7,
    position: "left",
  },
];
