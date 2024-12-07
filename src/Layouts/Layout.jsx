import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { useDentistStates } from '../Context/Context';
import '../Styles/Layout.css';

const Layout = () => {
  const { state } = useDentistStates();

  return (
    <div className={`main main-${state.theme}`}>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout