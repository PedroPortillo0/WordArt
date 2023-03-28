import LabelGeneral from '../../atoms/LabelGeneral';
import WrapperlInput from '../../molecules/WrapperInput';

import ir from '../../../assets/img/icons/ir.png';
import '../../../assets/styles/Login/Login.css';
import '../../../assets/js/Login.js'

import { Link } from 'react-router-dom';



function LoginDatos() {

    return ( 
        <div className="container-datos">
            <div>
                <div className='content-title'>
                    <span>Bienvenido </span>
                    <LabelGeneral msg="de nuevo 😉"></LabelGeneral>
                </div>
                <div className='content-subtitle'>
                    <label className="subtitulo">Ingresa tus datos a continuación</label>
                </div>
                <div className='content-form'>
                    <form id='formulario'>
                        <WrapperlInput msn="Email:" type="email" placeholder="user@gmail.com"/>
                        <WrapperlInput msn="Password:" type="password" placeholder="********"/>
                        <button className='entrar' type="submit">
                            Entrar
                            <img className='ir' src={ir}/>
                        </button>
                    </form>
                </div>
                <div className='direcciones'>
                    <label className='registrate'>¿No tienes cuenta? <Link to="/register" className='link'>Registrate</Link></label>
                    <div className='direcciones-sub'>
                        <Link to="/recuperarContraseña" className='link'>Recuperar contraseña</Link>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default LoginDatos;