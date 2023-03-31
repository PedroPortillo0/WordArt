import FormLoginProfe from "../components/organism/Login/FormLoginProfe";
import FormLoginProfeDatos from "../components/organism/Login/FormLoginProfedatos";
import FondoMovilLogo from "../components/molecules/FondoMovilLogo";
function LoginProfe() {
    return ( 
        <>
            <FondoMovilLogo/>
            <FormLoginProfe/>
            <FormLoginProfeDatos/>
        </>
        
     );
}

export default LoginProfe;