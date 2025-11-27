import Logo from "../assets/logo/luxyrental-logo-white.png";

export default function NavBar() {
  return (
    <nav className="bg-transparent fixed top-0 w-full">
      <div className="flex content-between items-center gap-4 justify-evenly">
        <img src={Logo} className="mt-2" alt="Luxy Rental Logo" />
        <div className="mt-2">
          <ul className="flex items-center gap-5 text-white">
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
        </div>
        <button className="mt-2.5">Book Now</button>
      </div>
    </nav>
  );
}
