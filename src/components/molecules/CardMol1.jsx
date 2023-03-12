import ImgCardCAtom from "../atoms/ImgCardCAtom";
import ContenidoCards from "../atoms/ContenidoCads";
import Slider from "../atoms/Slider";

import Information1 from '../../assets/img/information1.png';

import styled from "styled-components";

import '../../assets/styles/LandingPage/Cards.css'

const StyleContainerCard = styled.div`
    overflow: hidden;
    width: 329px;
    height: 467px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.543);
    border-radius: 20px;
    margin-right: 7%;
    margin-top: 10%;
`;

function CardMol1() {
    return ( 
    <div className="contenedor">
        <ImgCardCAtom src={Information1}/>
        <div className="info">
            <Slider className="sliderUp" />
            <ContenidoCards msgTitle="Violin" contenido="Disfrutar tu tiempo tocando el
            violín es posible, con el sistema de educación musical más difundido en 
            más de 40 países. WorldArt te ofrece un aprendizaje integral, por nota, y con metodología para hacer de tu aprendizaje más confiable,
            seguro y ágil, con maestros altamente capacitados"/>
        </div>
    </div> );
}

export default CardMol1;