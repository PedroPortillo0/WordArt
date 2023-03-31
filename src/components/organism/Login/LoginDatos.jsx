import LabelGeneral from '../../atoms/LabelGeneral';
import WrapperlInput from '../../molecules/WrapperInput';

import ir from '../../../assets/img/icons/ir.png';
import '../../../assets/styles/Login/Login.css';
import '../../../assets/js/Login.js'

import { Link } from 'react-router-dom';
import { useRef } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert';
import { useDispatch } from 'react-redux';


function LoginDatos() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const endPoint = 'http://34.205.213.60/register/getAll';
  const Form = useRef()
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  function validarUsuario(register,email, contraseña) {
      let user = null;
      let flag = false;
      for (let i = 0; i < register.length && !flag; i++) {
        if (register[i].email === email && register[i].contraseña === contraseña) {
          user = register[i]
          flag = true;
        }
      }
      return user;
  }
    const handlerClick = () => {
        const newForm = new FormData(Form.current);
        fetch(endPoint, options)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            let email = newForm.get("email")
            let contraseña = newForm.get("contraseña")
            let user = validarUsuario(data,email, contraseña);
            console.log(JSON.stringify(user))
            if (user != null)  {          
              
              dispatch({
                type: "ADD_EVENT",
                value: user
              })
                swal({
                
                    text: `Bienvenido `,
                    icon: 'success',
                })
                navigate("/Homepage");
            } else {
    
              Swal({
                title: 'EROR',
                text: `usuario no encontrado. intenta de nuevo`,
                icon: 'error',
              });
    
            }
          });
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