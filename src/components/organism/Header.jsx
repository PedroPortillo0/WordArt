import WrapperLabelHeader from "../molecules/WrapperLabelHeader";
import Logo from "../atoms/Logo"

import '../../assets/styles/Header.css'
import { Link } from "react-router-dom";


function Header() {
    return ( 
         <header className="header">
            <Logo/>
            <a className="section" href="#1"><WrapperLabelHeader msg="Sobre nosotros"/></a>
            <a className="section2" href="#2"><WrapperLabelHeader msg="Servicios"/></a>
            <a className="section3" href="#3"><WrapperLabelHeader msg="Contacto"/></a>
            <Link to="/login" className="iniciarSesion-link"><button type="button" className="iniciarSesion">Iniciar Sesión</button></Link>
         </header>
     );
}

export default Header;