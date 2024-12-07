import '../Styles/Footer.css';
import { useDentistStates } from '../Context/Context';
import logo from '../assets/DH.png';

const Footer = () => {
  const { state } = useDentistStates();
  
  return (
    <footer className={`footer footer-${state.theme}`}>
        <p>Powered by</p>
        <img src={logo} alt='DH-logo' />
    </footer>
  )
}

export default Footer
