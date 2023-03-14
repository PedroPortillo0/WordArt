import Header from '../components/organism/LandingPage/Header'
import CarruseImg from '../components/organism/LandingPage/CarruseImg'
import SobreNosotros from '../components/organism/LandingPage/SobreNosotros';
import Servicios from '../components/organism/LandingPage/Servicios'
import Cards from '../components/organism/LandingPage/Cards'
import Redireccion from '../components/organism/LandingPage/Redireccion'
import PiePagina from '../components/organism/LandingPage/PiePagina'
import BackgroundHeader from '../components/organism/LandingPage/BackgroundHeader'

import '../assets/styles/LandingPage/LandingPage.css'


function LandingPage() {
    return ( 
        <>
            <BackgroundHeader/>
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