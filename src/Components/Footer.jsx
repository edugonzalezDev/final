import '../Styles/Footer.css';
import { useDentistStates } from '../Context/Context';

const Footer = () => {
  const { theme } = useDentistStates();
  
  return (
    <footer className={`footer footer-${theme}`}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
