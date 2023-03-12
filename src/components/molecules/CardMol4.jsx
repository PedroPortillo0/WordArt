import ImgCardCAtom from "../atoms/ImgCardCAtom";
import ContenidoCards from "../atoms/ContenidoCads";
import Slider from "../atoms/Slider";

import information4 from '../../assets/img/information4.png'

import styled from "styled-components";
import '../../assets/styles/LandingPage/Cards.css'

const StyleContainerCard = styled.div`
    overflow: hidden;
    width: 329px;
    height: 467px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.543);
    border-radius: 20px;
    margin-left: 7%;
`;


function CardMol4() {
    return ( 
    <StyleContainerCard className="contenedor">
        <ImgCardCAtom src={information4}/>
        <div className="info">
            <Slider className="sliderUp"/>
            <ContenidoCards msgTitle="Danza urbana" contenido="En este curso de danza 
                urbana aprenderás aplicar las técnicas de este tipo de danza y sus respectivas
                denominaciones. Es fácil de aprender y solo se requiere tener conocimientos 
                elementales."/>
        </div>
    </StyleContainerCard> );
}

export default CardMol4;