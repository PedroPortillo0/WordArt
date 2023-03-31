import LogoGeneral from '../../atoms/LogoGeneral'
import WrapperlInput from '../../molecules/WrapperInput';

import '../../../assets/styles/Login/Login.css'
import ir from '../../../assets/img/icons/ir.png'

import { Link } from 'react-router-dom';
import { useRef } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert';
import { useDispatch } from 'react-redux';

function FormLoginProfe() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const endPoint = 'http://34.205.213.60/profesor/getAll';
  const Form = useRef()
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  function validarUsuario(register,gmailP, contraseñaP) {
      let user = null;
      let flag = false;
      for (let i = 0; i < register.length && !flag; i++) {
        if (register[i].gmailP === gmailP && register[i].contraseñaP === contraseñaP) {
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
            let gmailP = newForm.get("gmailP")
            let contraseñaP = newForm.get("contraseñaP")
            let user = validarUsuario(data,gmailP, contraseñaP);
            console.log(JSON.stringify(user))
            if (user != null)  {          
              
              dispatch({
                type: "ADD_EVENT",
                value: user
              })
                swal({
                
                    text: `Bienvenido profesor  `,
                    icon: 'success',
                })
                navigate("/MenuProfesores");
            } else {
    
              Swal({
                title: 'EROR',
                text: `profesor no encontrado. intenta de nuevo`,
                icon: 'error',
              });
    
            }
          });
    };


    



    return ( 
            
        <div className="container-login-desk">
            <div className="login-datos-desk">
                <div>
                    <div>
                        <LogoGeneral/>
                    </div>
                    <div className='datos-container-desk'>
                        <div>
                            <div className='all-text-hola'>Hey, hola 👋</div>
                            <div className='all-text-desk'>Todo ser humano es un artista.
                                El sueño de la vida es crear arte
                            </div>
                            <div className='all-text-desk'>hermoso</div>
                            <div className='div-form-desk'>
                                <form id='formulario' className='form-desk' ref={Form}  >
                                    <WrapperlInput msn="Email:" name={"gmailP"}  type="email" placeholder="user@gmail.com"/>
                                    <WrapperlInput msn="Password:" name={"contraseñaP"}  type="password" placeholder="********"/>
                                    <button className='entrar'  onClick={handlerClick} >
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
                </div>
            </div>
            <div className="container-text-desk">
                <div className="text-desk">
                    <div className="content-text">
                        <label>El arte consiste en</label>
                        <div className="desk"><span className="C">celebrar</span>,<span className="Ca">cantar</span> y llevar a cabo la</div>
                        <span className="B">belleza</span>
                    </div>
                </div>
            </div>
        </div>        
     );
}

export default FormLoginProfe;