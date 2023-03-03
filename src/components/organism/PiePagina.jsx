import SobreNostrosPie from "../molecules/SobreNosotrosPie";
import Linea from "../atoms/Linea";
import Contacto from "../molecules/Contacto";
import styled from "styled-components";

const StyleDiv = styled.div`
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function PiePagina() {
    return ( 
    <StyleDiv>
        <SobreNostrosPie/>
        <Linea/>
        <Contacto/>
    </StyleDiv> );
}

export default PiePagina;