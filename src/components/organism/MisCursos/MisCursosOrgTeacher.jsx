import LabelGeneral from '../../atoms/LabelGeneral'
import Separador from '../../atoms/Separador'
import SectionCurso from '../../molecules/SectionCurso';

import User from '../../../assets/img/icons/user.png'
import verMas from '../../../assets/img/icons/ver-mas.png'
import iconRangeAlumno from '../../../assets/img/icons/alumno.png'
import { useEffect, useState } from "react";
import {useSelector} from 'react-redux';

function MisCursosOrgTeacher() {
    const user = useSelector(state => state.user)

    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const response = await fetch("http://34.205.213.60/profesor/getAll");
          const result = await response.json();
          setData(result);
        }
        fetchData();
      }, []);

    return ( 
        <div className="container-mis-cursos-teacher">
            <div className='menu-mis-cursos-teacher'>
                <div>
                    <div className='title-mis-cursos-teacher'>
                        <LabelGeneral msg="Mis cursos"/>
                    </div>
                    <SectionCurso msg="Escritura Alemana"/>
                    <SectionCurso msg="Partituras"/>
                    <SectionCurso msg="Escala de mayores y menores"/>
                    <SectionCurso msg="Composicion"/>
                </div>
            </div>
            <div className='content-all-mi-curso-teacher'>
                <div className='vista-user-teacher'>
                    <img className='img-user-teacher' src={User}/>
                    <div className='datos-user-text-teacher'>
                        <div className='name-status-teacher'>
                            <LabelGeneral msg={user.user.nombreP}/>
                            <div className='circulo'/>
                        </div>
                        <div>
                            <label className='rango-teacher'>Profesor</label>
                            <img className='icon-range' src={iconRangeAlumno}/>
                        </div>
                    </div>
                    <img className='ver-mas-teacher' src={verMas}/>
                </div>
                <Separador/>
                <div>

                </div>
            </div>
        </div>
     );
}

export default MisCursosOrgTeacher;