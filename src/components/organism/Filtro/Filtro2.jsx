import '../../../assets/styles/Filtro/Filtro.css'
import LogoGeneral from '../../atoms/LogoGeneral';

import { Link } from 'react-router-dom';

function Filtro2() {
    return ( 
        <div className="container-filtro-desk">
            <div className='container-filtro-informacion-desk'>
                <div>
                    <div className='information-desk'>
                        <div><LogoGeneral/></div>

                        <div className='information-desk-filtro1' >
                            Si eres estudiante, inicia sesion aquí.
                        </div>
                        <div className='redireccion-desk-filtro'>
                            <Link to="/login" className='redireccion-link-desk'>iniciar sesion</Link>
                        </div>
                    </div>
                    <div className='separador-desk'/>
                    <div className='information-desk'>
                        <div className='information-desk-filtro1' >
                           Para educadores.
                        </div>
                        
                        <div className='information-desk-filtro2'>
                        inicia sesion aquí aquí
                        </div> 
                        <div className='redireccion-desk-filtro'>
                            <Link to="/loginprofesor" className='redireccion-link-desk'>iniciar sesion</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-filtro-decoration-desk'/>
        </div>
    );
}

export default Filtro2;