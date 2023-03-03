import WrapperLabelHeader from "../molecules/WrapperLabelHeader";
import Logo from "../atoms/Logo"

import styled from "styled-components";
import '../../assets/styles/Header.css'

const StyleDivHeader = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: relative;
    margin-top: -41%;
`;

const StyleA = styled.button`
    width: 213px;
    height: 35px;
    background-color: #30BFCE;
    border-radius:5em;
    border-color: white;
`;

function Header() {
    return ( 
         <StyleDivHeader>
            <Logo/>
            <a className="sections"><WrapperLabelHeader msg="Sobre nosotros"/></a>
            <a className="sections"><WrapperLabelHeader msg="Servicios"/></a>
            <a className="sections"><WrapperLabelHeader msg="Contacto"/></a>
            <a><StyleA>Inicar Sesion</StyleA></a>
         </StyleDivHeader>
     );
}

export default Header;