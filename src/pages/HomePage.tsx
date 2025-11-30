import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import About from "../components/About";
import ChooseCar from "../components/ChooseCar";
import { ReactLenis } from "lenis/react";

function HomePage() {
  return (
    <>
      <ReactLenis root />
      <NavBar />
      <Hero />
      <About />
      <ChooseCar />
    </>
  );
}

export default HomePage;
