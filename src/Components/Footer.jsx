import '../Styles/Footer.css';
import { useDentistStates } from '../Context/Context';

const Footer = () => {
  const { state } = useDentistStates();
  
  return (
    <footer className={`footer footer-${state.theme}`}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
