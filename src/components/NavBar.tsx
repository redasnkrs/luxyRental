export default function NavBar() {
  return (
    <nav className="bg-red-300 fixed top-0 w-full">
      <div className="flex content-between items-center gap-4 justify-between">
        <img src="/logo.png" alt="Luxy Rental Logo" />
        <ul className="flex items-center gap-5 bg-red">
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
}
