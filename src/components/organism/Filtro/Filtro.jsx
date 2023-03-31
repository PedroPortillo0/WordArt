import '../../../assets/styles/Filtro/Filtro.css'

import { Link } from 'react-router-dom';

function Filtro({profesor, alumno}) {
    return ( 
    <div className="container-filtro">
        <div>
            <div className='content-filtro-estudiante'>
                <div className='filtro-div1'>
                    Si eres estudiante, inicia sesión aquí.
                </div>
                <div className='filtro-div2'>
                    Estudiantes registrados en cursos por favor registrate aquí
                </div> 
                <div className='CB'>
                    <Link to="/register" className='iniciarSesion-filtro'>registrate</Link>
                </div>
            </div>
            <div className='linea-filtro'/>
            <div className='content-filtro-profesor'>
                <div className='filtro-div1'>
                    Para educadores.
                </div>
                <div className='filtro-div2'>
                    Si eres un profesor, registrate aquí
                </div> 
                <div className='CB'>
                    <Link to="/registroProfesores"  className='iniciarSesion-filtro'>hola</Link>
                </div>
            </div>
        </div>
    </div> );
}

export default Filtro;