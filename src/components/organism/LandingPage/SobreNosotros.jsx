import styled from "styled-components";
import SorJuanaAtom from "../../atoms/SorJuanaSobreNosotros";
import SobreNosotrosMol from '../../molecules/SobreNosostrosMol'


import '../../../assets/styles/LandingPage/SobreNosotros.css'

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
                <div>
                    <div className="title">
                        <StyleH2>Sobre</StyleH2><StyleSpan>Nosotros</StyleSpan>
                    </div>
                    <div className="container">
                        <SorJuanaAtom/>
                        <SobreNosotrosMol/>
                    </div>
                </div>
            </StyleCentrar>
        </StyleSobreNosotros>
     );
}

export default SobreNosotros;