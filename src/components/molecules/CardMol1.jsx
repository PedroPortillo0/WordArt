import ImgCardCAtom from "../atoms/ImgCardCAtom";
import ContenidoCards from "../atoms/ContenidoCads";
import Slider from "../atoms/Slider";

import Information1 from '../../assets/img/information1.png';

import '../../assets/styles/LandingPage/Cards.css'

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