import Logo from '../../atoms/Logo'
import WrapperLabelHeader from '../../molecules/WrapperLabelHeader';

import '../../../assets/styles/LandingPage/Header.css';
import '../../../assets/js/Header';

import LogoImg from '../../../assets/img/Logo.webp'
import iconLogo from '../../../assets/img/iconLogo.png'
import { Link } from "react-router-dom";


function Header() {
    return ( 
         <header className="header" id="header">
            <Logo src={LogoImg}/>
            <img className="iconLogo" src={iconLogo}/>
            <a className="section" href="#1"><WrapperLabelHeader msg="Sobre nosotros"/></a>
            <a className="section2" href="#2"><WrapperLabelHeader msg="Servicios"/></a>
            <a className="section3" href="#3"><WrapperLabelHeader msg="Contacto"/></a>
            <Link to="/login" className="iniciarSesion-link"><button type="button" className="iniciarSesion">Iniciar Sesión</button></Link>
         </header>
     );
}

export default Header;