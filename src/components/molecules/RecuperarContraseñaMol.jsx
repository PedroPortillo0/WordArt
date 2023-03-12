import Logo1 from '../../assets/img/Logo.webp'
import Huella from '../../assets/img/Huella.svg'


import styled from 'styled-components';
const StyleDiv = styled.div`
    text-align: center;
    font-family: 'Comfortaa', cursive;
`;

const StyleLogo = styled.img`
    width: 15%;
`;

const Styleh4 = styled.h4`
    font-weight: 550;
    font-size: 20px;
`;
function RecuperarContraseñaMol() {
    return ( 
    <div>
        <StyleDiv>
            <StyleLogo src={Logo1}/>
        </StyleDiv>
        <StyleDiv>
            <img src={Huella}/>
        </StyleDiv>
        <StyleDiv>
            <Styleh4>¿Has olvidado tu contraseña?</Styleh4>
        </StyleDiv>
    </div> );
}

export default RecuperarContraseñaMol;