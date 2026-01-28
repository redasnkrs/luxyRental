import Hero from "../components/Hero";
import About from "../components/About";
import ChooseCar from "../components/ChooseCar";
import News from "../components/News";
import { ReactLenis } from "lenis/react";

function HomePage() {
  return (
    <>
      <ReactLenis root />
      <Hero />
      <About />
      <ChooseCar />
      <News />
    </>
  );
}

export default HomePage;
