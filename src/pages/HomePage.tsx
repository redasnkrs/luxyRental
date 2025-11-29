import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import About from "../components/About";
import ChooseCar from "../components/ChooseCar";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <ChooseCar />
    </div>
  );
}

export default HomePage;
