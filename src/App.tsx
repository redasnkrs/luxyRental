import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import CarDetails from "@/pages/CarDetails";
import BrandPage from "@/pages/BrandPage";
import NewsPage from "@/pages/NewsPage";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function LenisScrollHandler() {
  useLenis(() => {
    // ScrollTrigger.update();
  });

  useEffect(() => {
    return () => {
      // gsap.ticker.remove(update);
    };
  }, []);

  return null;
}

function AppContent() {
  const location = useLocation();
  // Hide navbar only on detail pages, keep it on the main news listing page
  const isNewsDetailPage = location.pathname.startsWith("/news/") && location.pathname !== "/news";

  return (
    <>
      <ScrollToTop />
      {!isNewsDetailPage && <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<CarDetails />} />
        <Route path="/brand/:brandId" element={<BrandPage />} />
      </Routes>
      <Footer />
    </>
  );
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
        <AppContent />
      </Router>
    </ReactLenis>
  );
}