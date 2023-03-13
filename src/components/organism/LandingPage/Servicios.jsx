import styled from "styled-components";
import violin from '../../../assets/img/violin.png'

import '../../../assets/styles/LandingPage/Servicios.css'

const StyleDiv = styled.div`
    position:static;
    margin-top: -20%;
    margin-bottom: 4%;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
`;


const StyleDivServicios = styled.div`
    padding: 23% 0;
`;


function Servicios() {
    return ( 
    <StyleDiv className="container-servicios" id="2">
        <StyleDivServicios>
            <h2 className="titleServicios">
                Ofrecemos cursos de musica, teatro, pintura y danza
            </h2>
            <p className="pServicios">
                WordlArt esta capacitado con los mejores profesores
                en cada una de las areas que puedas encontrar  
            </p>
        </StyleDivServicios> 
        <img className="imgServicios" src={violin}/>
    </StyleDiv> );
}

export default Servicios;