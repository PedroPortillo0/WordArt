import styled from "styled-components";
import SorJuanaAtom from "../atoms/SorJuanaSobreNosotros";
import SobreNosotrosMol from "../molecules/SobreNosostrosMol";

const StyleSobreNosotros = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const StyleCentrar = styled.div`
    width: 100%;
    padding: 11% 0;
`;

const StyleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyleDivTitle = styled.div`
    display:flex;
    text-align: center;
    justify-content: center;
`;

const StyleH2 = styled.h2`
    font-family: 'Comfortaa', cursive;
    font-style: bold;
`;

const StyleSpan = styled.span`
    font-family: 'Comfortaa', cursive;
    font-style: bold;
    font-size:25px;
    color: #FAA41B;
    padding: 0 10px;
`

function SobreNosotros() {
    return ( 
        <StyleSobreNosotros id="1">
            <StyleCentrar>
                <StyleDivTitle>
                    <StyleH2>Sobre</StyleH2><StyleSpan>Nosotros</StyleSpan>
                </StyleDivTitle>
                <StyleDiv>
                    <SorJuanaAtom/>
                    <SobreNosotrosMol/>
                </StyleDiv>
            </StyleCentrar>
        </StyleSobreNosotros>
     );
}

export default SobreNosotros;