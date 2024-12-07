import Navbar from "./Navbar";
import { useDentistStates } from '../Context/Context';
import logo from '../assets/DH.ico';
import '../Styles/Header.css';

const Header = () => {

    const { state, dispatch } = useDentistStates();

    const toggleTheme = () => {
        dispatch({ type: "TOGGLE_THEME", payload: state.theme === 'light' ? 'dark' : 'light' });
    };

  return (
    <header className={`header header-${state.theme}`}>
      <img src={logo} alt="Logo" />
      <Navbar />
      <button onClick={toggleTheme}>{state.theme === "light" ? "🌘" : "🌞"}</button>
    </header>
  );
};

export default Header;
