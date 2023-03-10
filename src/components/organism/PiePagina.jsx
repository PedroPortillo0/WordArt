import SobreNostrosPie from "../molecules/SobreNosotrosPie";
import Linea from "../atoms/Linea";
import Contacto from "../molecules/Contacto";
import styled from "styled-components";

import '../../assets/styles/PiePagina.css';

const StyleDiv = styled.div`
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function PiePagina() {
    return ( 
    <StyleDiv className="PiePagina" id="3">
        <SobreNostrosPie/>
        <Linea/>
        <Contacto/>
    </StyleDiv> );
}

export default PiePagina;