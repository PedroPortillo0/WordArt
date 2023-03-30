import LabelGeneral from '../../atoms/LabelGeneral';
import WrapperlInput from '../../molecules/WrapperInput';

import ir from '../../../assets/img/icons/ir.png';
import '../../../assets/styles/Login/Login.css';
import '../../../assets/js/Login.js'

import { Link } from 'react-router-dom';
import { useRef } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';



function LoginDatos() {
    const navigate = useNavigate()

    const Form = useRef()

    const handlerClick=(e)=>{
        e.preventDefault();
        const newForm= new FormData (Form.current)
        if (newForm.get('email')==''){
            // setState('El campo nobre de usuario no puede estar vacio')
        }else if(newForm.get('password')==''){
            setState('El campo contraseña no puede estar vacio')
        }else{
            fetch('http://34.205.213.60/register/getAll')
            .then(response=>response.json())
            .then(data=>{
                const email=data
                let i=0;
                let encontrado=false
                while(!encontrado&&i<email.length){
                    if (email[i].email==newForm.get('email')){
                        if(email[i].contraseña==newForm.get('contraseña')){
                            encontrado=true
                            navigate('/homepage')
                        }
                    }
                    i++;
                }
            })
        }
    };

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
                        <form id='formulario' ref={Form} >
                            <WrapperlInput msn="Email:" name={"email"} type="email" placeholder="user@gmail.com"/>
                            <WrapperlInput msn="Password:" name={"contraseña"}  type="password" placeholder="********"/>
                        
                            <button onClick={handlerClick} className='entrar' >
                                Entrar
                                <img className='ir' src={ir}/>
                            </button>
                        </form>
                    </div>
                    <div className='direcciones'>
                        <label className='registrate'>¿No tienes cuenta? <Link to="/filtro" className='link'>Registrate</Link></label>
                        <div className='direcciones-sub'>
                            <Link to="/recuperarContraseña" className='link'>Recuperar contraseña</Link>
                        </div>
                    </div>
                </div>
            </div>



        

        );
}

export default LoginDatos;