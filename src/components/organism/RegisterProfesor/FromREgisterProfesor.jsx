import LabelGeneral from '../../atoms/LabelGeneral';
import WrapperlInput from '../../molecules/WrapperInput';
import LogoGeneral from  '../../atoms/LogoGeneral'

import '../../../assets/styles/Register/RegisterProfesores.css';
import '../../../assets/styles/Login/Login.css';

import ir from '../../../assets/img/icons/ir.png';
import fondoRegister from '../../../assets/img/estatua2.png';
import { useRef } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

function FromRegisterProfesor() {
    const endpoint = "http://34.205.213.60/profesor/create";

    const Form = useRef()
    const navigate = useNavigate();

    const handlerClick = (e) => {
        e.preventDefault();
        const newForm = new FormData(Form.current);

        if(
            newForm.get("nombreP") === null || 
            newForm.get("apellidoP") === null || 
            newForm.get("gmailP")=== null||
            newForm.get("contraseñaP")=== null||
            newForm.get("telefonoP")=== null 
        ){
            alert("campos vacios");
        }else{
            const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contraseñaP: newForm.get("contraseñaP"),
                    gmailP: newForm.get("gmailP"),
                    nombreP: newForm.get("nombreP"),
                    apellidoP: newForm.get("apellidoP"),
                    telefonoP: newForm.get("telefonoP"),
                }),
            };
              fetch(endpoint, options)
                .then((response) => response.json())
                .then((data) => {
               
                  alert(JSON.stringify(data))
                  navigate('/filtro2')
                 
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
                    <LogoGeneral/> 
                        <LabelGeneral msg="Crear "></LabelGeneral>
                        <span>Cuenta</span>
                    </div>
                    <div className='content-form'>
                        <form id='formulario' ref={Form}>
                            <WrapperlInput msn="Nombre:" name={"nombreP"} type="text" placeholder="John"/>
                            <WrapperlInput msn="Apellido" name={"apellidoP"} type="text" placeholder="Bacab"/>
                            <WrapperlInput msn="numero telefonico" name={"telefonoP"} type="text" placeholder="555 555 55 55"/>
                            <WrapperlInput msn="Correo:" name={"gmailP"} type="email" placeholder="user@gmail.com"/>
                            <WrapperlInput msn="Contraseña:" name={"contraseñaP"}  type="password" placeholder="********"/>
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