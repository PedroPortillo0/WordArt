import LabelGeneral from '../../atoms/LabelGeneral';
import WrapperlInput from '../../molecules/WrapperInput';


import '../../../assets/styles/Register/RegisterProfesores.css';
import '../../../assets/styles/Login/Login.css';

import ir from '../../../assets/img/icons/ir.png';
import fondoRegister from '../../../assets/img/estatua2.png';
import { useRef } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

function FromRegisterProfesor() {
    const endpoint = "http://3.211.187.52/profesor/create";

    const Form = useRef()
    const navigate = useNavigate();

    const handlerClick = (e) => {
        e.preventDefault();
        const newForm = new FormData(Form.current);

        if(
            newForm.get("username") === null || 
            newForm.get("email")=== null||
            newForm.get("password")=== null||
            newForm.get("confirmPassword")=== null 
        ){
            alert("campos vacios");
        }else{
            const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contraseña: newForm.get("contraseña"),
                    email: newForm.get("email"),
                    usuario: newForm.get("usuario"),
                    confirmar_Contraseña: newForm.get("confirmar_Contraseña"),
                }),
            };
              fetch(endpoint, options)
                .then((response) => response.json())
                .then((data) => {
               
                  alert(JSON.stringify(data))
                  navigate('/login')
                 
                });   
        }
    };

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
                <form id='formulario' ref={Form}>
                    <WrapperlInput msn="Nombre:" name={"usuario"} type="text" placeholder="John"/>
                    <WrapperlInput msn="Apellido"  type="text" placeholder="Bacab"/>
                    <WrapperlInput msn="numero telefonico"  type="text" placeholder="555 555 55 55"/>
                    <WrapperlInput msn="Correo:" name={"email"} type="email" placeholder="user@gmail.com"/>
                    <WrapperlInput msn="Contraseña:" name={"contraseña"}  type="password" placeholder="********"/>
                    <button onClick={handlerClick} className='guardar-register' >
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

export default FromRegisterProfesor;