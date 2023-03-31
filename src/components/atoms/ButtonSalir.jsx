import { Link } from "react-router-dom";

function ButtonSalir({to, className}) {
    return ( 
        <Link to={to} className={className}>Salir</Link>
     );
}

export default ButtonSalir;