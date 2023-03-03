import ImgRecuperar from '../../assets/img/ImgRecuperarContraseña.png';

import styled from "styled-components";
import RecuperarContraseñaMol from '../molecules/RecuperarContraseñaMol';
import RecuperarForm from '../molecules/RecuperarForm';

const StyledContainer = styled.div`
    margin-left:-24%;
    display: flex;
    width:164.5%;
    height:760px;
`;

const StyleImgExtra = styled.img`
    border: 10px white solid;
    width: 70%;
    padding: 0px 0;
`;

const StyleContainer = styled.div`
    background-color: white;
    width: 50%;
`;
const StyleContainer2 = styled.div`
    display: flex;
    align-items: center;
    background: linear-gradient(90deg, rgba(48, 191, 206, 0.8) 0.29%, rgba(48, 191, 206, 0.6) 50.52%, rgba(48, 191, 206, 0.5) 100%);
    width: 55%;
`;

const StyleGrupo = styled.div`
    position: absolute;
    margin-top: 10%;
    width: 40%;
`;


function RecuperarContraOrg() {
    return ( 
        <StyledContainer>
            <StyleContainer>
                <StyleGrupo>
                    <RecuperarContraseñaMol/>
                    <RecuperarForm/>
                </StyleGrupo>
            </StyleContainer>
            <StyleContainer2>
                <StyleImgExtra src={ImgRecuperar}/>
            </StyleContainer2>
        </StyledContainer>
     );
}

export default RecuperarContraOrg;