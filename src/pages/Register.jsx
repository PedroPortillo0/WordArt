import RegisterDatos from "../components/organism/Register/RegisterDatos";
import FondoMovilLogo from '../components/molecules/FondoMovilLogo'

import '../assets/styles/Register/Register.css'
import RegisterDesk from "../components/organism/Register/RegisterDesk";

function Register() {
    return ( 
        <>
            <FondoMovilLogo/>
            <RegisterDatos/>
            <RegisterDesk/>
        </>    
     );
}

export default Register;
