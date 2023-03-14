import styled from "styled-components";
import { Link } from "react-router-dom";

import CarruseImgMol from '../../molecules/CarruselmgMol'


import '../../../assets/styles/LandingPage/Header.css'
const StyleCarruselImages = styled.div`
    margin-top: -12%;
`;

function CarruseImg() {
    return ( 
        <StyleCarruselImages>
            <CarruseImgMol/>
            <Link to="/login" className="iniciarSesion-link-2"><button type="button" className="iniciarSesion">Iniciar Sesión</button></Link>
        </StyleCarruselImages>
     );
}

export default CarruseImg;