import LabelGeneral from '../../atoms/LabelGeneral'
import WrapperlInput from '../../molecules/WrapperInput';


import '../../../assets/styles/Register/Register.css';
import '../../../assets/styles/Login/Login.css';

import ir from '../../../assets/img/icons/ir.png';
import { useRef } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';


function RegisterDatos() {

    const endpoint = "http://localhost:8080/register/create";
    const Form = useRef()
    const navigate = useNavigate();

    const handlerClick = (e) => {
        e.preventDefault();
        const newForm = new FormData(Form.current);
       
        if(newForm.get("username") === "" || newForm.get("email")=== ""||newForm.get("password")=== ""||newForm.get("confirmPassword")=== "" ){//el simbolo de pesos despues se nombra la variable
            alert("campos vacios");
         }else{
             alert("campos correctos")
             const options = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    password: newForm.get("password"),
                    email: newForm.get("email"),
                    user_name: newForm.get("user_name"),
                    confirm_password: newForm.get("confirm_password"),
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
        <form ref={Form}>
                        <div className='container-datos'>
                <div>
                <div className='content-title'>
                    <LabelGeneral msg="Crear "></LabelGeneral>
                    <span>Cuenta</span>
                </div>
                <div className='content-form' >
                    <form id='formulario'>
                        <WrapperlInput msn="Nombre:" name={"user_name"}  type="text" placeholder="John123"/>
                        <WrapperlInput msn="Correo:"type="email" name={"email"} placeholder="user@gmail.com"/>
                        <WrapperlInput msn="Contraseña:"  type="password" name={"password"} placeholder="********"/>
                        <WrapperlInput msn="Confirmar contraseña:" name='confirm_password' type="password" placeholder="********"/>
                        
                        <button onClick={handlerClick} className='guardar-register' >
                                Entrar
                                <img className='ir' src={ir}/>
                            </button>

                    </form>
                </div>
            </div>
        </div>
        </form>



     );
}
export default RegisterDatos;
