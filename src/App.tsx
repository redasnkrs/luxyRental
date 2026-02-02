import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarDetails from "./pages/CarDetails";
import BrandPage from "./pages/BrandPage";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import LoadingScreen from "./components/layout/LoadingScreen";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function LenisScrollHandler() {
  useLenis(() => {
    // ScrollTrigger.update(); // Not always needed with newer versions but good for safety
  });

  useEffect(() => {
    // Synchronize Lenis and GSAP ScrollTrigger
    // lenis.on("scroll", ScrollTrigger.update); // Access lenis instance if needed via ref or hook context if available, but basic sync is often automatic or handled via ticker

    // GSAP Ticker for Lenis
    // Note: ReactLenis usually handles internal raf, but if we need explicit gsap ticker sync:
    /* 
    const update = (time: number) => {
      // lenis.raf(time * 1000)
    }
    gsap.ticker.add(update)
    */
    
    // For now, keeping default configuration as it was working, just cleaned up comments
    
    return () => {
      // gsap.ticker.remove(update);
    };
  }, []);

  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <ReactLenis root>
      <LenisScrollHandler />
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news/:id" element={<CarDetails />} />
          
          {/* Dynamic Brand Page */}
          <Route path="/brand/:brandId" element={<BrandPage />} />
        </Routes>
        <Footer />
      </Router>
    </ReactLenis>
  );
}
