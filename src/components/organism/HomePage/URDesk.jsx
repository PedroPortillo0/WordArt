import alumno from '../../../assets/img/icons/alumno.png'
import LabelGeneral from "../../atoms/LabelGeneral";
import iconUser from '../../../assets/img/icons/user.png'


import CardCursosHP from "../../molecules/CardCursosHP";
import CardCursosHP2 from "../../molecules/CardCursosHP2";
import CardCursosHP3 from "../../molecules/CardCursosHP3";
import CardCursosHP4 from "../../molecules/CardCursosHP4";
import Recomendacion from '../../molecules/Recomendacion';
import Recomendacion2 from '../../molecules/Recomendacion2';

import cardHP1 from '../../../assets/img/cards-HP.png'
import cardHP2 from '../../../assets/img/cards-HP-2.png'
import cardHP3 from '../../../assets/img/cards-HP-3.png'
import cardHP4 from '../../../assets/img/cards-HP-4.png'

import Separador from '../../atoms/Separador';



import ejemplo1 from '../../../assets/img/recomendaciones/1.png'
import ejemplo2 from '../../../assets/img/recomendaciones/2.png'
import ejemplo3 from '../../../assets/img/recomendaciones/3.png'
import ejemplo4 from '../../../assets/img/recomendaciones/4.png'
import ejemplo5 from '../../../assets/img/recomendaciones/5.png'
import ejemplo6 from '../../../assets/img/recomendaciones/6.png'
import ejemplo7 from '../../../assets/img/recomendaciones/7.png'
import ejemplo8 from '../../../assets/img/recomendaciones/8.png'
import ejemplo9 from '../../../assets/img/recomendaciones/9.png'

function URDesk() {
    return ( 
        <div className="container-homepage">
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
                            <Recomendacion src={ejemplo1} msg="Principios sobre como
                            poder mezclar música!!"/>
                            <Recomendacion2 src={ejemplo2} msg="Todo sobre como iniciar 
                            para poder la gitarra mejor "/>
                            <Recomendacion src={ejemplo3} msg="Mejores Teorias para poder
                            llevar las ideas mas haya"/>
                            <Recomendacion2 src={ejemplo4} msg="Lo que los colores transmiten - 
                            Aprende a crear abstracciones"/> 
                            <Recomendacion src={ejemplo5} msg="Que tipos de colores usar para las 
                            ilustraciones, asi tambien para el tipo de papel que estes usando"/> 
                            <Recomendacion2 src={ejemplo6} msg="Clase principiantes 1 - Danza en varios tipos"/> 
                            <Recomendacion src={ejemplo7} msg="Clase 22 - Conjunto de personas para presentacion"/> 
                            <Recomendacion2 src={ejemplo8} msg="Principales centros - teatros para 
                            desarrollo de personajes, musica o danza"/> 
                            <Recomendacion src={ejemplo9} msg="Teoria musical clase D12 - Ondas sonoras"/>   
                        </div>
                    </div>
                </div>
            </div>
            <div className='sections-desk-hp'>
                <div>
                    <div className='title-cursos-desk'>
                        <LabelGeneral msg="Cursos"/>
                    </div>
                    <div className='content-cards-desk'>
                        <div className='content-cards-desk1'>
                            <CardCursosHP msg="Musica" src={cardHP1}/>
                            <CardCursosHP3 msg="Teatro" src={cardHP3}/>
                        </div>
                        <div className='content-cards-desk2'>
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