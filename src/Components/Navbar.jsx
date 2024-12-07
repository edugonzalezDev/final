import { Link } from "react-router-dom";
import { useDentistStates } from "../Context/Context";
import "../Styles/Navbar.css";

const Navbar = () => {
  const { state } = useDentistStates();

  return (
    <nav className={`navbar navbar-${state.theme}`}>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
