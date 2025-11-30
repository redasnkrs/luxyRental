// Navbar.jsx
import { useEffect, useState } from "react";
import Logo from "../assets/logo/luxyrental-logo-white.png";

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
        "fixed top-0 w-full z-50",
        "transition-colors duration-200",
        scrolled ? "bg-white/20 backdrop-blur-md shadow-md" : "bg-transparent",
      ].join(" ")}
    >
      <div className="flex items-center justify-evenly gap-4 h-16 px-4">
        <img src={Logo} className="mt-2 h-8 w-auto" alt="Luxy Rental Logo" />

        <ul className="flex items-center gap-5">
          <li>
            <a href="">Cars</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <button>Book Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
