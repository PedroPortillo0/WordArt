import LabelGeneral from '../../atoms/LabelGeneral'
import WrapperlInput from '../../molecules/WrapperInput';


import '../../../assets/styles/Register/Register.css'
import '../../../assets/styles/Login/Login.css'

import ir from '../../../assets/img/icons/ir.png'
import fondoRegister from '../../../assets/img/estatua2.png'

function RegisterDesk() {
    return ( 
        <div className="register">
            <div>
                <img src={fondoRegister} className="fondo-register"/>
            </div>
            <div className='div-fondo'/>  
            <div className="register-container-1">
                <div className='vacio'></div>
                <div className='container-datos-register'>
                    <div className='content-title-register'>
                        <LabelGeneral msg="Crear "></LabelGeneral>
                        <span>Cuenta</span>
                    </div>
                    <div className='content-form'>
                        <form id='formulario'>
                            <WrapperlInput msn="Nombre:" type="text" placeholder="John123"/>
                            <WrapperlInput msn="Correo:" type="email" placeholder="user@gmail.com"/>
                            <WrapperlInput msn="Contraseña:" type="password" placeholder="********"/>
                            <WrapperlInput msn="Confirmar contraseña:" type="password" placeholder="********"/>
                            <button className='guardar-register' type="submit">
                                Entrar
                                <img className='ir' src={ir}/>
                            </button>
                        </form>
                    </div>
                </div>   
            </div>
        </div>
     );
}

export default RegisterDesk;