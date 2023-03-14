import LoginLogo from '../components/organism/Login/LoginLogo'
import LoginDatos from '../components/organism/Login/LoginDatos'

import '../assets/styles/Login/Login.css'
import LoginDesk from '../components/organism/Login/LoginDesk';
function Login() {
    return (  
        <>
            <LoginLogo/>
            <LoginDatos/>
            <LoginDesk/>
        </>
    );
}

export default Login;