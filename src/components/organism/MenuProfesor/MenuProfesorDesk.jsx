import Separador from '../../atoms/Separador'
import ButtonSalir from '../../atoms/ButtonSalir'

import ConfigRegresar from '../../molecules/ConfigRegresar';
import regresar from '../../../assets/img/icons/goback.png'
import onnline from '../../../assets/img/icons/onnline.png'
import profesor from '../../../assets/img/icons/teacher.png'
import user from '../../../assets/img/icons/user.png'
import teacherRed from '../../../assets/img/icons/teacher-red.png'
import bursts from '../../../assets/img/icons/bursts.png'
import cash from '../../../assets/img/icons/cash.png'
import '../../../assets/styles/MenuProfesor/MenuProfesor.css'
import { Link } from 'react-router-dom';

function MenuProfesorDesk() {
    return ( 
        <div className="container-menu-profesor-desk">
            <div className='container-todo'>
                <div className='container-profile'>
                    <div className='content-img-profile'>
                        <img src={user}/>
                    </div>
                    <div className='text-profile'>
                        <div className='name'>
                            <h2>Name</h2>
                            <img src={onnline}/>
                        </div>
                        <div className='type'>
                            <label>Profesor</label>
                            <img src={profesor}/>
                        </div>
                    </div>
                </div>
                <Separador/>
                <div className='bottons'>
                    <div className='container-botton'>
                        <Link to="/configuracion1" className='link'>
                            <label>Configuracion</label>
                            <img src={teacherRed}/>
                        </Link>                                                                                        
                    </div>
                    <div className='container-botton'>
                        <Link to="/misCursosProfesor" className='link2'>
                            <label>Mis cursos</label>
                            <img src={bursts}/>
                        </Link>
                    </div>
                    <div className='container-botton'>
                        <Link to="" className='link3'>
                            <label>Mis despositos</label>
                            <img src={cash}/>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
     );
}

export default MenuProfesorDesk;