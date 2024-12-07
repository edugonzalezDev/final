import { Link } from "react-router-dom";
import { useDentistStates } from "../Context/Context";
import "../Styles/Navbar.css";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme } = useDentistStates();

  return (
    <nav className={`navbar navbar-${theme}`}>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
