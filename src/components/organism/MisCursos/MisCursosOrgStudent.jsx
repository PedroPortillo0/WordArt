import LabelGeneral from '../../atoms/LabelGeneral'
import Separador from '../../atoms/Separador'
import SectionCurso from '../../molecules/SectionCurso';

import User from '../../../assets/img/icons/user.png'
import verMas from '../../../assets/img/icons/ver-mas.png'
import iconRangeAlumno from '../../../assets/img/icons/alumno.png'
function MisCursosOrgStudent() {
    return ( 
        <div className="container-mis-cursos">
            <div className='menu-mis-cursos'>
                <div>
                    <div className='title-mis-cursos'>
                        <LabelGeneral msg="Mis cursos"/>
                    </div>
                    <SectionCurso msg="Escritura Alemana"/>
                    <SectionCurso msg="Partituras"/>
                </div>
            </div>
            <div className='content-all-mi-curso'>
                <div className='vista-user'>
                    <img className='img-user' src={User}/>
                    <div className='datos-user-text'>
                        <div className='name-status'>
                            <LabelGeneral msg="Roberto Luz"/>
                            <div className='circulo'/>
                        </div>
                        <div>
                            <label className='rango'>Alumno</label>
                            <img className='icon-range' src={iconRangeAlumno}/>
                        </div>
                    </div>
                    <img className='ver-mas' src={verMas}/>
                </div>
                <Separador/>
                <div>

                </div>
            </div>
        </div>
     );
}

export default MisCursosOrgStudent;