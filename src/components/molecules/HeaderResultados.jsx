import LogoGeneral from "../atoms/LogoGeneral";
import retroceder from '../../assets/img/icons/goback.png'

import { Link } from "react-router-dom";
function HeaderResultados({titleBusqueda}) {
    return ( 
        <div className="container-header-search">
            <div className="various">
                <Link to="/homepage">
                    <img className='regresar' src={retroceder}/>
                </Link>
                <h3>{titleBusqueda}</h3>
            </div>
            <div className="content-logo">
                <LogoGeneral/>
            </div>
        </div>
     );
}

export default HeaderResultados;