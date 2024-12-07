import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
