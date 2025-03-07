import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/list">Lista</Link>
        </li>
        <li>
          <Link to="/form">Agregar Regalo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
