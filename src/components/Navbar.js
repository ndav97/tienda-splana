import "../styles/Navbar.scss";
import CarWidget from "./CarWidget";
function Navbar() {
  return (
    <header className="Navbar-header flex items-center bg-red-700">
      <img src="img/logo-splana.png" className="Navbar-logo" alt="logo" />
      <ul className="flex gap-4 text-white font-bold ml-10">
        <li><a href="">Hombre</a></li>
        <li><a href="">Mujer</a></li>
        <li><a href="">Niños</a></li>
        <li><a href="">Ofertas</a></li>
      </ul>
      <CarWidget/>
    </header>
  );
}

export default Navbar;
