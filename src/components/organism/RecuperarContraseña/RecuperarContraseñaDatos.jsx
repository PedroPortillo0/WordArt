import LabelGeneral from '../../atoms/LabelGeneral'
import WrapperlInput from '../../molecules/WrapperInput';

import '../../../assets/styles/RecuperarContraseña/RecuperarContraseña.css'
import '../../../assets/styles/Login/Login.css'

import iconPassword from '../../../assets/img/icons/iconPassword.png'
import ir from '../../../assets/img/icons/ir.png'
import retroceder from '../../../assets/img/icons/retroceder.png'
import { Link } from 'react-router-dom';

function RecuperarContraseñaDatos() {
    return ( 
        <div className="container-datos-recuperar">
        <div>
            <div className='content-title-recuperar'>
                <div>
                    <img className='iconPassword' src={iconPassword}/>
                </div>
                <LabelGeneral msg="¿Has olvidado tu cuenta?"></LabelGeneral>
            </div>
            <div className='content-form'>
                <form id='formulario'>
                    <WrapperlInput msn="Escribe tu email:" type="email" placeholder="user@gmail.com"/>
                    <button className='entrar' type="submit">
                        Restablecer
                        <img className='ir' src={ir}/>
                    </button>
                </form>
            </div>
            <div className='direcciones'>
                <Link to="/login" className='link'>
                    <div className='direcciones-sub'>
                        Atras para iniciar sesión
                    </div>
                    <div>
                        <img className='retroceder-recuperar' src={retroceder}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
     );
}

export default RecuperarContraseñaDatos;