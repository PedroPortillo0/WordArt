import LabelGeneral from '../../atoms/LabelGeneral'
import WrapperlInput from '../../molecules/WrapperInput';


import '../../../assets/styles/Register/Register.css';
import '../../../assets/styles/Login/Login.css';

import { useRef } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';


function RegisterDatos() {

    const endpoint = "http://3.211.187.52/ptofrsor/create";
    const Form = useRef()
    const navigate = useNavigate();

    const handlerClick = (e) => {
        e.preventDefault();
        const newForm = new FormData(Form.current);
       
        if(
            newForm.get("usuario") === null ||
            newForm.get("email")=== null||
            newForm.get("contraseña")=== null||
            newForm.get("confirmar_Contraseña")=== null )
        {
            alert("campos vacios");
         }else{
             alert("campos correctos")
             const options = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    password: newForm.get("contraseña"),
                    email: newForm.get("email"),
                    user_name: newForm.get("usuario"),
                    confirm_password: newForm.get("confirmar_Contraseña"),
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
                        <WrapperlInput msn="Nombre:" name={"usuario"}  type="text" placeholder="John123"/>
                        <WrapperlInput msn="Correo:"type="email" name={"email"} placeholder="user@gmail.com"/>
                        <WrapperlInput msn="Contraseña:"  type="password" name={"contraseña"} placeholder="********"/>
                        <WrapperlInput msn="Confirmar contraseña:" name='confirmar_Contraseña' type="password" placeholder="********"/>
                        
                        

                    </form>
                </div>
            </div>
        </div>
        </form>



     );
}
export default RegisterDatos;
