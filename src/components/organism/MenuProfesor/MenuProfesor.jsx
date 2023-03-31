import Separador from '../../atoms/Separador'
import ConfigRegresar from '../../molecules/ConfigRegresar'
import ButtonSalir from '../../atoms/ButtonSalir'

import onnline from '../../../assets/img/icons/onnline.png'
import profesor from '../../../assets/img/icons/teacher.png'
import teacherRed from '../../../assets/img/icons/teacher-red.png'
import bursts from '../../../assets/img/icons/bursts.png'
import cash from '../../../assets/img/icons/cash.png'
import regresar from '../../../assets/img/icons/goback.png'
import user from '../../../assets/img/icons/user.png'
import '../../../assets/styles/MenuProfesor/MenuProfesor.css'
import { Link } from 'react-router-dom';
function MenuProfesor({}) {
    return ( 
        <div className='container-menu-profesor'>
            <ConfigRegresar src={regresar} msg=""/>
            <Separador/>
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
                    <Link to="" className='link'>
                        <label>Profesores</label>
                        <img src={teacherRed}/>
                    </Link>                                                                                        
                </div>
                <div className='container-botton'>
                    <Link to="" className='link2'>
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
                <div className='content-button-salir'>
                    <ButtonSalir to="/login" className="buttonSalir"/>
                </div>
            </div>
        </div>
     );
}

export default MenuProfesor;