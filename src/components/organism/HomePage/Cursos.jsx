import LabelGeneral from "../../atoms/LabelGeneral";
import CardCursosHP from "../../molecules/CardCursosHP";

import cardHP1 from '../../../assets/img/cards-HP.png'
import cardHP2 from '../../../assets/img/cards-HP-2.png'
import cardHP3 from '../../../assets/img/cards-HP-3.png'
import cardHP4 from '../../../assets/img/cards-HP-4.png'
function Cursos() {
    return ( 
        <div className="container-cursos">
            <div>
                <LabelGeneral msg="Cursos"/>
                <div className="">
                    <CardCursosHP msg="Musica" src={cardHP1}/>
                    <CardCursosHP msg="Pintura" src={cardHP2}/>
                    <CardCursosHP msg="Teatro" src={cardHP3}/>
                    <CardCursosHP msg="Danza" src={cardHP4}/>
                </div>
            </div>
        </div>
     );
}

export default Cursos;