import RecuperarContraseñaDatos from "../components/organism/RecuperarContraseña/RecuperarContraseñaDatos";
import RecuperarContraseñaDesk from "../components/organism/RecuperarContraseña/RecuperarContraseñaDesk";
import FondoMovilLogo from "../components/molecules/FondoMovilLogo";
function RecuperarContraseña() {
    return ( 
        <>
        <FondoMovilLogo/>
        <RecuperarContraseñaDatos/>
        <RecuperarContraseñaDesk/>
    </>
     );
}

export default RecuperarContraseña;