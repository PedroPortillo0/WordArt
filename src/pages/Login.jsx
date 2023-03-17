import FondoMovilLogo from '../components/molecules/FondoMovilLogo';

import LoginDatos from '../components/organism/Login/LoginDatos'
import LoginDesk from '../components/organism/Login/LoginDesk';
import '../assets/styles/Login/Login.css'

function Login() {
    return (  
        <>
            <FondoMovilLogo/>
            <LoginDatos/>
            <LoginDesk/>
        </>
    );
}

export default Login;