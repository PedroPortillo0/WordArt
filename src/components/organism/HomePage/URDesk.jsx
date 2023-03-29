import alumno from '../../../assets/img/icons/alumno.png'
import LabelGeneral from "../../atoms/LabelGeneral";
import iconUser from '../../../assets/img/icons/user.png'


import CardCursosHP from "../../molecules/CardCursosHP";
import CardCursosHP2 from "../../molecules/CardCursosHP2";
import CardCursosHP3 from "../../molecules/CardCursosHP3";
import CardCursosHP4 from "../../molecules/CardCursosHP4";

import cardHP1 from '../../../assets/img/cards-HP.png'
import cardHP2 from '../../../assets/img/cards-HP-2.png'
import cardHP3 from '../../../assets/img/cards-HP-3.png'
import cardHP4 from '../../../assets/img/cards-HP-4.png'

import Separador from '../../atoms/Separador';
import Separador2 from '../../atoms/SeparadorVertical';

function URDesk() {
    return ( 
        <div className="container-user-recomendaciones-desk">
            <div className='container-desk-user-recomendaciones'>
                <div className="container-user-desk">
                    <img className="icon-alumn-desk" src={iconUser}/>
                    <div className='container-text-user-desk'>
                        <div className='name-conectar-desk'>
                            <LabelGeneral msg="Christian Rome"/>
                            <figure className="circulo"/>
                        </div>
                        <div>
                            <LabelGeneral msg="Alumno" />
                            <img className="icon-alumn" src={alumno}/>
                        </div>
                    </div>   
                </div>
                <Separador/>
                <div className='recomendaciones-desk'>
                    <div>
                        <LabelGeneral msg="Recomendado"/>
                        <div className="content-cards-HP">
                            <CardCursosHP msg="Musica" src={cardHP1}/>
                            <CardCursosHP2 msg="Pintura" src={cardHP2}/>
                            <CardCursosHP3 msg="Teatro" src={cardHP3}/>
                            <CardCursosHP4 msg="Danza" src={cardHP4}/>
                        </div>
                    </div>
                </div>
            </div>
            <Separador2/>
            <div className='sections-desk-hp'>
                <div>
                    <div className='title-cursos-desk'>
                        <LabelGeneral msg="Cursos"/>
                    </div>
                    <div className='content-cards-desk'>
                        <div>
                            <CardCursosHP msg="Musica" src={cardHP1}/>
                            <CardCursosHP3 msg="Teatro" src={cardHP3}/>
                        </div>
                        <div>
                            <CardCursosHP2 msg="Pintura" src={cardHP2}/>
                            <CardCursosHP4 msg="Danza" src={cardHP4}/>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
     );
}

export default URDesk;