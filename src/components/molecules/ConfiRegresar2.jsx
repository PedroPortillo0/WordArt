import { Link } from "react-router-dom";
function ConfigRegresar2({src, msg}) {
    return ( 
        <div className='header-administracion-cuenta'>
            <Link to="/menuProfesores">
                <div><img src={src}/></div></Link>
            <div>
                {msg}
            </div>
            
        </div>
     );
}

export default ConfigRegresar2;