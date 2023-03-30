import LogoGeneral from '../../atoms/LogoGeneral'
import WrapperlInput from '../../molecules/WrapperInput';

import '../../../assets/styles/Login/Login.css'
import ir from '../../../assets/img/icons/ir.png'

import { Link } from 'react-router-dom';
import { useRef } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';


function FormLoginProfe() {

    const navigate = useNavigate();

    const Form = useRef()

    const handlerClickf=(e)=>{
        e.preventDefault();
        const newForm= new FormData (Form.current)
        if (newForm.get('gmailP')==''){
            // alert('El campo nobre de usuario no puede estar vacio')
        }else if(newForm.get('contraseñaP')==''){
            // alert('El campo contraseña no puede estar vacio')
        }else{
            fetch('http://34.205.213.60/profesor/getAll')
            .then(response=>response.json())
            .then(data=>{
                const gmailP=data
                let i=0;
                let encontrado=false
                while(!encontrado&&i<gmailP.length){
                    if (gmailP[i].gmailP==newForm.get('gmailP')){
                        if(gmailP[i].contraseña==newForm.get('contraseñaP')){
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
                                    <button className='entrar'  onClick={handlerClickf} >
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