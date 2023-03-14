import LogoGeneral from '../../atoms/LogoGeneral'
import WrapperlInput from '../../molecules/WrapperInputLogin';

import '../../../assets/styles/Login/Login.css'
import ir from '../../../assets/img/icons/ir.png'

function LoginDesk() {
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
                                <form id='formulario' className='form-desk'>
                                    <WrapperlInput msn="Email:" type="email" placeholder="user@gmail.com"/>
                                    <WrapperlInput msn="Password:" type="password" placeholder="********"/>
                                    <button className='entrar' type="submit">
                                        Entrar
                                        <img className='ir' src={ir}/>
                                    </button>
                                </form>
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

export default LoginDesk;