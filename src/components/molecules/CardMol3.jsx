import ImgCardCAtom from "../atoms/ImgCardCAtom";
import ContenidoCards from "../atoms/ContenidoCads";
import Slider from "../atoms/Slider";

import information3 from '../../assets/img/information3.png'

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
    margin-right: 7%;
    margin-top: 12%;
`;


function CardMol3() {
    return (
        <StyleContainerCard className="contenedor">
            <ImgCardCAtom src={information3}/>
            <div className="info">
            <Slider className="sliderUp2"/>
                <ContenidoCards msgTitle="Pintura en acuarela" contenido="En este curso 
                de acuarela aprenderás a utilizar las principales técnicas de pintura en 
                acuarelas, para llevar a cabo la elaboración de una obra artística. 
                Es fácil de aprender y solo se requiere tener conocimientos elementales."/>
            </div>
        </StyleContainerCard>
     );
}

export default CardMol3;