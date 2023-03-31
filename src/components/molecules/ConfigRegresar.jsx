import { Link } from "react-router-dom";
function ConfigRegresar({src, msg}) {
    return ( 
        <div className='header-administracion-cuenta'>
            <Link to="/homepage">
                <div><img src={src}/></div></Link>
            <div>
                {msg}
            </div>
            
        </div>
     );
}

export default ConfigRegresar;