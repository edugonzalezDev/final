import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { useDentistStates } from '../Context/Context';
import '../Styles/Layout.css';

const Layout = () => {
  const { theme } = useDentistStates();

  return (
    <div className={`main main-${theme}`}>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout