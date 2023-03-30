import ImgCardCAtom from "../atoms/ImgCardCAtom";
import ContenidoCards from "../atoms/ContenidoCads";
import Slider from "../atoms/Slider";

import information3 from '../../assets/img/information3.png'

import '../../assets/styles/LandingPage/Cards.css'


function CardMol3() {
    return (
        <div className="contenedor">
            <ImgCardCAtom src={information3}/>
            <div className="info">
            <Slider className="sliderUp2"/>
                <ContenidoCards msgTitle="Pintura en acuarela" contenido="En este curso 
                de acuarela aprenderás a utilizar las principales técnicas de pintura en 
                acuarelas, para llevar a cabo la elaboración de una obra artística. 
                Es fácil de aprender y solo se requiere tener conocimientos elementales."/>
            </div>
        </div>
     );
}

export default CardMol3;