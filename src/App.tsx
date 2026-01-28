import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarDetails from "./pages/CarDetails";
import AstonPage from "./pages/brands/AstonPage";
import BmwPage from "./pages/brands/BmwPage";
import BugattiPage from "./pages/brands/BugattiPage";
import FerrariPage from "./pages/brands/FerrariPage";
import LamborghiniPage from "./pages/brands/LamborghiniPage";
import MclarenPage from "./pages/brands/MclarenPage";
import MercedesPage from "./pages/brands/MercedesPage";
import NissanPage from "./pages/brands/NissanPage";
import PorschePage from "./pages/brands/PorschePage";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news/:id" element={<CarDetails />} />
        
        {/* Brand Specific Pages */}
        <Route path="/brand/aston" element={<AstonPage />} />
        <Route path="/brand/bmw" element={<BmwPage />} />
        <Route path="/brand/bugatti" element={<BugattiPage />} />
        <Route path="/brand/ferrari" element={<FerrariPage />} />
        <Route path="/brand/lamborghini" element={<LamborghiniPage />} />
        <Route path="/brand/mclaren" element={<MclarenPage />} />
        <Route path="/brand/mercedes" element={<MercedesPage />} />
        <Route path="/brand/nissan" element={<NissanPage />} />
        <Route path="/brand/porsche" element={<PorschePage />} />
      </Routes>
    </Router>
  );
}
