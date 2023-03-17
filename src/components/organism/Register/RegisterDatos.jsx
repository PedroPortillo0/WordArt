import LabelGeneral from '../../atoms/LabelGeneral'
import WrapperlInput from '../../molecules/WrapperInput';


import '../../../assets/styles/Register/Register.css'
import '../../../assets/styles/Login/Login.css'

import ir from '../../../assets/img/icons/ir.png'
function RegisterDatos() {
    return ( 
        <div className='container-datos'>
            <div>
                <div className='content-title'>
                    <LabelGeneral msg="Crear "></LabelGeneral>
                    <span>Cuenta</span>
                </div>
                <div className='content-form'>
                    <form id='formulario'>
                        <WrapperlInput msn="Nombre:" type="text" placeholder="John123"/>
                        <WrapperlInput msn="Correo:" type="email" placeholder="user@gmail.com"/>
                        <WrapperlInput msn="Contraseña:" type="password" placeholder="********"/>
                        <WrapperlInput msn="Confirmar contraseña:" type="password" placeholder="********"/>
                        <button className='entrar' type="submit">
                            Entrar
                            <img className='ir' src={ir}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
     );
}
export default RegisterDatos;
