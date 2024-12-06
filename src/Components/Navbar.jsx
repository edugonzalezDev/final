import { Link } from 'react-router-dom';
import { useDentistStates } from '../Context/Context';
import '../Styles/Navbar.css';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, setTheme } = useDentistStates();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className={`navbar navbar-${theme}`}>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/contact">Contact</Link>
      <button onClick={toggleTheme}>{theme==='light' ? '🌘' : '🌞'}</button>
    </nav>
  )
}

export default Navbar