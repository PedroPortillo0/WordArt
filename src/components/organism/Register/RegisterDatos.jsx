import LabelGeneral from '../../atoms/LabelGeneral'
import WrapperlInput from '../../molecules/WrapperInput';
import ir from '../../../assets/img/icons/ir.png';
import '../../../assets/styles/Register/Register.css';
import { useRef } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

function RegisterDatos() {
    
    const endpoint = "http://34.205.213.60/register/create";

    const Form = useRef()
    const navigate = useNavigate();

    const handlerClicks = (e) => {
        e.preventDefault();
        const newForm = new FormData(Form.current);

        if(
            newForm.get("usuario") === "" || 
            newForm.get("email")=== ""||
            newForm.get("contraseña")=== "" ||
            newForm.get("confirmar_Contraseña")=== "" 
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
        <div className='container-datos'>
            <div>
                <div className='content-title'>
                    <LabelGeneral msg="Crear "/>
                    <span>Cuenta</span>
                </div>
                <div className='content-form' >
                    <form ref={Form}>
                        <WrapperlInput msn="Nombre:" name={"usuario"}  type="text" placeholder="John123"/>
                            <WrapperlInput msn="Correo:"type="email"name={"email"}  placeholder="user@gmail.com"/>
                            <WrapperlInput msn="Contraseña:" name={"contraseña"} type="password" placeholder="@fewq"/>
                            <WrapperlInput msn="Confirmar contraseña:" name={"confirmar_Contraseña"}  type="password" placeholder="@fewq" />
                            <button  className='entrar'onClick={handlerClicks} >
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
