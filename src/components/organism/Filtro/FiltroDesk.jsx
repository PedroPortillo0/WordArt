import '../../../assets/styles/Filtro/Filtro.css'
import LogoGeneral from '../../atoms/LogoGeneral';

import { Link } from 'react-router-dom';

function FiltroDesk() {
    return ( 
        <div className="container-filtro-desk">
            <div className='container-filtro-informacion-desk'>
                <div>
                    <div className='information-desk'>
                        <div><LogoGeneral/></div>

                        <div className='information-desk-filtro1' >
                            Si eres estudiante, registrate aquí.
                        </div>
                        <div className='redireccion-desk-filtro'>
                            <Link to="/register" className='redireccion-link-desk'>registrarse</Link>
                        </div>
                    </div>
                    <div className='separador-desk'/>
                    <div className='information-desk'>
                        <div className='information-desk-filtro1' >
                           Para educadores.
                        </div>
                        
                        <div className='information-desk-filtro2'>
                            registrate  aquí
                        </div> 
                        <div className='redireccion-desk-filtro'>
                            <Link to="/registroProfesores" className='redireccion-link-desk'>registrarse</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-filtro-decoration-desk'/>
        </div>
    );
}

export default FiltroDesk;