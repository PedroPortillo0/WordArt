import styled from 'styled-components';
import ApartadoPie from '../atoms/ApartadoPie';
import Logo from '../../assets/img/Logo.svg'

const StyleDivContainer = styled.div`
    display: flex;
    width: 30%;
    justify-content:space-around;
`;

const StyleImg = styled.img`
    width: 30%;
`;

const StyleH4 = styled.h4`
    font-family: 'Comfortaa', cursive;
    font-weight: 900;
`;

function SobreNostrosPie() {
    return ( 
        <StyleDivContainer>
            <StyleImg src={Logo}/>
            <div>
                <StyleH4>Inicio</StyleH4>
                <ApartadoPie msg="Sobre nosotros"/>
                <ApartadoPie msg="Servicios"/>
                <ApartadoPie msg="Contactos"/>
            </div>
        </StyleDivContainer>
     );
}

export default SobreNostrosPie;