import styled from "styled-components";
import Label from "../atoms/LabelHeader";
import SorJuanaAtom from "../atoms/SorJuanaSobreNosotros";
import SobreNosotrosMol from "../molecules/SobreNosostrosMol";

const StyleSobreNosotros = styled.div`
    margin-top: 5%;
    align-items: center;
    justify-content: center;
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
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');
    font-family: 'Comfortaa', cursive;
    font-style: bold;
`;

const StyleSpan = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');
    font-family: 'Comfortaa', cursive;
    font-style: bold;
    font-size:25px;
    color: #FAA41B;
    padding: 0 10px;
`

function SobreNosotros() {
    return ( 
        <StyleSobreNosotros>
            <StyleDivTitle>
                <StyleH2>Sobre</StyleH2><StyleSpan>Nosotros</StyleSpan>
            </StyleDivTitle>
            <StyleDiv>
                <SorJuanaAtom/>
                <SobreNosotrosMol/>
            </StyleDiv>
        </StyleSobreNosotros>
     );
}

export default SobreNosotros;