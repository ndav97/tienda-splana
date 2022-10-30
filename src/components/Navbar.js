import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.scss";
import CarWidget from "./CarWidget";
function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="Navbar-header flex items-center bg-red-700">
      <img
        src="/img/logo-splana.png"
        className="Navbar-logo cursor-pointer"
        alt="logo"
        onClick={() => navigate(`/`)}
      />
      <ul className="flex gap-4 text-white font-bold ml-10">
        <li>
          <NavLink to={`/category/hombre`}>Hombre</NavLink>
        </li>
        <li>
          <NavLink to={`/category/mujer`}>Mujer</NavLink>
        </li>
        <li>
          <NavLink to={`/category/infantil`}>Niños</NavLink>
        </li>
        {/* <li>
          <a href="">Ofertas</a>
        </li> */}
      </ul>
      <CarWidget />
    </header>
  );
}

export default Navbar;
