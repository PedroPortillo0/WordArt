import ContenidoCards from "../atoms/ContenidoCads";
import ImgCardCAtom from '../atoms/ImgCardCAtom' 
import Slider from "../atoms/Slider";

import Information2 from '../../assets/img/information2.png'

import styled from "styled-components";
import '../../assets/styles/LandingPage/Cards.css'

const StyleContainerCard = styled.div`
    overflow: hidden;
    width: 446px;
    height: 463px;  
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    border-radius: 20px;    
    margin-left: 7%;
`;

function CardMol2() {
    return (
    <StyleContainerCard className="contenedor">
        <ImgCardCAtom src={Information2}/>
        <div className="info">
            <Slider className="sliderUp2"/>
            <ContenidoCards msgTitle="Teatro y Artes escenicas" contenido="En WorldArt queremos brindarte la mejor 
                formación, impartida por centros que se destacan por su profesionalismo y experiencia. Es por eso que 
                tenemos el honor de invitarte a ser parte de la Maestría en Teatro y Artes Escénicas de WordlArt que te 
                proporcionará una formación avanzada"/>
        </div>
    </StyleContainerCard> );
}

export default CardMol2;