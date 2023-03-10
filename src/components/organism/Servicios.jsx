import styled from "styled-components";
import violin from '../../assets/img/violin.png'

import '../../assets/styles/Servicios.css'

const StyleDiv = styled.div`
    position:static;
    margin-top: -20%;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const StyleH2 = styled.h2`
    font-family: 'Comfortaa', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 33px;
    text-align: center;
    color: #FAA41B;
`;

const StyleP = styled.p`
    font-family: 'Comic Neue', cursive;;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #000000;
    margin-top:1%;
`;

const StyleDivServicios = styled.div`
    padding: 23% 0;
`;

const StyleImg = styled.img`
    width: 35%;
    position: absolute;
    margin-left: -70%;
    margin-top:-46%;
`;

function Servicios() {
    return ( 
    <StyleDiv id="2">
        <StyleDivServicios>
            <StyleH2>
                Ofrecemos cursos de musica, teatro, pintura y danza
            </StyleH2>
            <StyleP>
                WordlArt esta capacitado con los mejores profesores
                en cada una de las areas que puedas encontrar  
            </StyleP>
        </StyleDivServicios> 
        <StyleImg src={violin}/>
    </StyleDiv> );
}

export default Servicios;