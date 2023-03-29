import LabelGeneral from "../../atoms/LabelGeneral";

import rcmdcion1 from '../../../assets/img/rcmdcion1.png'
import rcmdcion2 from '../../../assets/img/rcmdcion2.png'
import rcmdcion3 from '../../../assets/img/rcmdcion3.png'
function Recomendaciones() {
    return ( 
        <div className="recomendaciones">
            <div>
                <LabelGeneral msg="Recomendaciones"/>
                <div className="carrusel-recomendaciones">
                    <ul>
                        <li><img className="img-recomendacion" src={rcmdcion1}/></li>
                        <li><img className="img-recomendacion" src={rcmdcion2}/></li>
                        <li><img className="img-recomendacion" src={rcmdcion3}/></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Recomendaciones;