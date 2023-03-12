import HeaderBackground from '../assets/img/HeaderBackground.svg'
import Header from '../components/organism/Header'
import '../assets/styles/LandingPage.css'

import styled from 'styled-components'
import CarruseImg from '../components/organism/CarruseImg'
import SobreNosotros from '../components/organism/SobreNosotros';
import Servicios from '../components/organism/Servicios'
import Cards from '../components/organism/Cards'
import Redireccion from '../components/organism/Redireccion'
import PiePagina from '../components/organism/PiePagina'

const  StyleHeaderBackgroundIMG = styled.img`
    width:100%;
    display: inline-block;
    text-align: center;
    position: static;
`;


function LandingPage() {
    return ( 
        <>
            <StyleHeaderBackgroundIMG src={HeaderBackground}/>
            <Header/>
            <CarruseImg/>
            <SobreNosotros/>
            <Servicios/>
            <Cards/>
            <Redireccion/>
            <PiePagina/>
        </>
     );
}

export default LandingPage;