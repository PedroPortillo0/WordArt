import ImgCardCAtom from "../atoms/ImgCardCAtom";
import ContenidoCards from "../atoms/ContenidoCads";
import Slider from "../atoms/Slider";

import information4 from '../../assets/img/information4.png'

import styled from "styled-components";
import '../../assets/styles/LandingPage/Cards.css'

function CardMol4() {
    return ( 
    <div className="contenedor">
        <ImgCardCAtom src={information4}/>
        <div className="info">
            <Slider className="sliderUp"/>
            <ContenidoCards msgTitle="Danza urbana" contenido="En este curso de danza 
                urbana aprenderás aplicar las técnicas de este tipo de danza y sus respectivas
                denominaciones. Es fácil de aprender y solo se requiere tener conocimientos 
                elementales."/>
        </div>
    </div> );
}

export default CardMol4;