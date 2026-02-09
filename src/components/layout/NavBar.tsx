// Navbar.jsx
import { useEffect, useState } from "react";
import Logo from "@/assets/logo/luxyrental-logo-white.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 w-full z-50 transition-all duration-700",
        !scrolled 
          ? "bg-white/10 backdrop-blur-md shadow-lg" 
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="flex items-center justify-evenly gap-4 h-16 px-4">
        <Link to="/">
          <img src={Logo} className="mt-2 h-8 w-auto" alt="Luxy Rental Logo" />
        </Link>

        <ul className="flex items-center gap-5">
          <li>
            <Link to="/fleet">Cars</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button>Book Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
