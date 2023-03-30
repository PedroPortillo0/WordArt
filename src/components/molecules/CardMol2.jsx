import ContenidoCards from "../atoms/ContenidoCads";
import ImgCardCAtom from '../atoms/ImgCardCAtom' 
import Slider from "../atoms/Slider";

import Information2 from '../../assets/img/information2.png'

import '../../assets/styles/LandingPage/Cards.css'

function CardMol2() {
    return (
    <div className="contenedor">
        <ImgCardCAtom src={Information2}/>
        <div className="info">
            <Slider className="sliderUp2"/>
            <ContenidoCards msgTitle="Teatro y Artes escenicas" contenido="En WorldArt queremos brindarte la mejor 
                formación, impartida por centros que se destacan por su profesionalismo y experiencia. Es por eso que 
                tenemos el honor de invitarte a ser parte de la Maestría en Teatro y Artes Escénicas de WordlArt que te 
                proporcionará una formación avanzada"/>
        </div>
    </div> );
}

export default CardMol2;