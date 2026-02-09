import mercFront from "../assets/car/mercedes/mercedess-front.webp";
import laferrari from "../assets/car/ferrari/laferrari-front.webp";
import bmwTop from "../assets/car/bmw/bmw_hero.webp";
import porscheGt3 from "../assets/car/porshe/gt3rs-interrior.webp";
import nissanGtr from "../assets/car/nissan/nissan-r35.webp";
import mclaren720 from "../assets/car/mclaren/mclaren-720s-back.webp";
import lambUrusFront from "../assets/car/lambh/lamb-urus-front.JPG";
import lambUrusBack from "../assets/car/lambh/lamb-urus-back.JPG";
import lambUrusBack2 from "../assets/car/lambh/lamb-urus-back2.JPG";
import lambUrusFront2 from "../assets/car/lambh/lamb-urus-front2.JPG";
import lambInterrior from "../assets/car/lambh/lamb-interrior.JPG";
import porsche911Interrior from "../assets/car/porshe/Porsche-911-Turbo-S-Interrior.webp";
import porscheOutside from "../assets/car/porshe/outside-porsche.webp";
import nissanInterrior from "../assets/car/nissan/nissan-r35-interrior.webp";
import nissanFront from "../assets/car/nissan/nissan-r35-front.webp";

export type CardType = {
  url: string;
  title: string;
  description: string;
  id: number;
  position: string;
  longDescription?: string[];
  gallery?: string[];
  specs?: { label: string; value: string }[];
  accentColor?: string;
};

export const news: CardType[] = [
  {
    url: mercFront,
    title: "Mercedes CLS AMG",
    description:
      "A stylish four-door coupe combining luxury with AMG performance. Known for its sweeping roofline and potent engine options.",
    id: 1,
    position: "left",
    accentColor: "#C0C0C0",
    longDescription: [
      "The Mercedes-Benz CLS AMG stands as a testament to the brand's ability to blend executive elegance with raw, unadulterated power. Its silhouette is iconic, defining the four-door coupe segment for over a decade.",
      "Inside, the cabin is a sanctuary of fine leathers, carbon fiber accents, and the latest MBUX technology, ensuring that every journey is as comfortable as it is exhilarating.",
    ],
    specs: [
      { label: "Engine", value: "4.0L V8 Biturbo" },
      { label: "Power", value: "603 HP" },
      { label: "0-100 km/h", value: "3.4s" },
      { label: "Top Speed", value: "250 km/h" },
    ],
    gallery: [mercFront],
  },
  {
    url: laferrari,
    title: "LaFerrari",
    description:
      "Ferrari's definitive hybrid hypercar. A masterpiece of engineering that combines a V12 with an electric motor for unmatched responsiveness.",
    id: 2,
    position: "left",
    accentColor: "#E31E24",
    longDescription: [
      "LaFerrari represents the pinnacle of Maranello's engineering prowess. It's not just a car; it's a technical laboratory on wheels, showcasing the first application of hybrid technology in a production Ferrari.",
      "The HY-KERS system combines a 6.3-liter V12 with an electric motor to produce a staggering 950 horsepower, delivering a visceral driving experience that few other machines can even hope to match.",
    ],
    specs: [
      { label: "Engine", value: "6.3L V12 Hybrid" },
      { label: "Total Power", value: "950 HP" },
      { label: "0-100 km/h", value: "2.4s" },
      { label: "Top Speed", value: ">350 km/h" },
    ],
    gallery: [laferrari],
  },
  {
    url: lambUrusFront,
    title: "Lamborghini Urus",
    description:
      "The world's first Super Sport Utility Vehicle. Lamborghini Urus merges the soul of a super sports car with the practical functionality of an SUV.",
    id: 3,
    position: "right",
    accentColor: "#D6F12B",
    longDescription: [
      "The Lamborghini Urus is a visionary approach based on the infusion of Lamborghini DNA into the most versatile vehicle, the SUV. It elevates the SUV to a level not previously possible, the Super SUV.",
      "It's a true Lamborghini in terms of design, performance, driving dynamics and emotion as well as drivable every day in a range of environments.",
    ],
    specs: [
      { label: "Engine", value: "4.0L V8 Twin-Turbo" },
      { label: "Power", value: "650 HP" },
      { label: "0-100 km/h", value: "3.6s" },
      { label: "Top Speed", value: "305 km/h" },
    ],
    gallery: [
      lambUrusFront,
      lambUrusBack,
      lambUrusBack2,
      lambUrusFront2,
      lambInterrior,
    ],
  },
  {
    url: bmwTop,
    title: "BMW M4",
    description:
      "The benchmark for sports coupes. The M4 delivers precise handling, aggressive styling, and a powerful inline-six engine.",
    id: 4,
    position: "right",
    accentColor: "#0066B3",
    longDescription: [
      "The BMW M4 is a car that demands attention. With its bold kidney grille and muscular stance, it signals its performance intentions long before the engine is even started.",
      "On the road, the M4 is a precision instrument. The chassis is tuned to provide maximum feedback, allowing the driver to exploit every bit of the twin-turbocharged inline-six's power.",
    ],
    specs: [
      { label: "Engine", value: "3.0L Inline-6 Twin-Turbo" },
      { label: "Power", value: "503 HP" },
      { label: "0-100 km/h", value: "3.8s" },
      { label: "Top Speed", value: "290 km/h" },
    ],
    gallery: [bmwTop],
  },
  {
    url: porscheGt3,
    title: "Porsche GT3 RS",
    description:
      "A track-focused weapon for the road. Featuring a high-revving naturally aspirated engine and extensive aerodynamic upgrades.",
    id: 5,
    position: "right",
    accentColor: "#FF5E00",
    longDescription: [
      "The Porsche 911 GT3 RS is the closest you can get to a Cup car with a license plate. Every vent, every wing, and every scoop is functional, designed to generate massive downforce and keep the car glued to the track.",
      "The heart of the beast is a 4.0-liter naturally aspirated flat-six that screams to a 9,000 RPM redline, providing an acoustic experience that is increasingly rare in the modern automotive world.",
    ],
    specs: [
      { label: "Engine", value: "4.0L Flat-6" },
      { label: "Power", value: "518 HP" },
      { label: "0-100 km/h", value: "3.2s" },
      { label: "Top Speed", value: "296 km/h" },
    ],
    gallery: [porscheGt3, porsche911Interrior, porscheOutside],
  },
  {
    url: nissanGtr,
    title: "Nissan GT-R",
    description:
      "The legendary 'Godzilla'. Famous for its advanced all-wheel-drive system and twin-turbo V6 that challenges supercars twice its price.",
    id: 6,
    position: "left",
    accentColor: "#8B0000",
    longDescription: [
      "Nissan's GT-R remains one of the most capable performance cars on the planet. Its sophisticated ATTESA E-TS all-wheel-drive system allows it to put its power down with unbelievable efficiency.",
      "Despite its age, the R35 continues to evolve, with constant refinements to its aerodynamics and suspension that keep it competitive against much newer rivals.",
    ],
    specs: [
      { label: "Engine", value: "3.8L V6 Twin-Turbo" },
      { label: "Power", value: "565 HP" },
      { label: "0-100 km/h", value: "2.7s" },
      { label: "Top Speed", value: "315 km/h" },
    ],
    gallery: [nissanGtr, nissanFront, nissanInterrior],
  },
  {
    url: mclaren720,
    title: "McLaren 720S",
    description:
      "A supercar that rewrote the rules. Its carbon fiber structure and 4.0L twin-turbo V8 provide blisteringly fast performance and agility.",
    id: 7,
    position: "left",
    accentColor: "#FF8C00",
    longDescription: [
      "The McLaren 720S is a masterclass in weight saving and aerodynamic efficiency. Built around a carbon fiber Monocage II, it is incredibly light and stiff, providing the perfect foundation for its advanced suspension.",
      "The performance is simply breathtaking. The 720S doesn't just accelerate; it teleports, with a power-to-weight ratio that makes even other supercars feel slow by comparison.",
    ],
    specs: [
      { label: "Engine", value: "4.0L V8 Twin-Turbo" },
      { label: "Power", value: "710 HP" },
      { label: "0-100 km/h", value: "2.8s" },
      { label: "Top Speed", value: "341 km/h" },
    ],
    gallery: [mclaren720],
  },
];
