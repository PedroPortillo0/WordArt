import LabelGeneral from '../../atoms/LabelGeneral'
import WrapperlInput from '../../molecules/WrapperInput';
import ir from '../../../assets/img/icons/ir.png';
import '../../../assets/styles/Register/Register.css';
import '../../../assets/styles/Login/Login.css';
import { useRef } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

function RegisterDatos() {

    const endpoint = "http://34.205.213.60/profesor/create";

    const Form = useRef()
    const navigate = useNavigate();

    const handlerClickss = (e) => {
        e.preventDefault();
        const newForm = new FormData(Form.current);

        if(
            newForm.get("nombreP") === "" || 
            newForm.get("apellidoP") === "" || 
            newForm.get("gmailP")=== "" ||
            newForm.get("contraseñaP")=== ""||
            newForm.get("telefonoP")=== ""
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
                <div className='container-datos'>
                    <div>
                    <div className='content-title'>
                        <LabelGeneral msg="Crear "></LabelGeneral>
                        <span>Cuenta</span>
                    </div>
                    <div className='content-form' >
                        <form ref={Form}>
                            <WrapperlInput msn="Nombre :" name={"nombreP"}  type="text" placeholder="John123"/>
                            <WrapperlInput msn="Apellido :" name={"apellidoP"}  type="text" placeholder="Bacab"/>
                            <WrapperlInput msn="Numero telefonico :" name={"telefonoP"} type="text" placeholder="555 555 55 55"/>
                            <WrapperlInput msn="Correo :"type="email" name={"gmailP"} placeholder="user@gmail.com"/>
                            <WrapperlInput msn="Contraseña :" name={"contraseñaP"}  type="password"  placeholder="********"/>
                            <button  className='entrar'onClick={handlerClickss} >
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
