import Separador from '../../atoms/Separador';
import Label from '../../atoms/LabelLogin';
import ButtonSalir from '../../atoms/ButtonSalir'
import ConfigRegresar from '../../molecules/ConfigRegresar'
import ConfigDatosDeskGen from '../../molecules/ConfigDatosDeskGen';
import ConfigDatosDesk2 from '../../molecules/ConfigDatosDesk2';
import regresar from '../../../assets/img/icons/regresar.png'
import iconUser from '../../../assets/img/icons/user.png'
import "../../../assets/styles/Configuracion/FromConfiguracionProf.css";
import { Link } from 'react-router-dom';
function FromConfiguracionUsuario() {
    const lavr=(e)=>{
        e.preventDefault();
    }
    return ( 
        <from>
            <div className='container-config-user-desk'>
                <ConfigRegresar src={regresar} msg="Ajustes"/>
                <Separador/>
                <div className='container-information-config-desk'>
                    <div className='container-profile'>
                        <div className='container-foto'>
                            <img src={iconUser} className="foto" alt="foto de perfil" />
                        </div>
                        <div className='container-name-typ'>
                            <div><Label  msn="Christian Romeo"/> </div>
                            <div><Label  msn="Alumno"/></div>
                        </div>
                    </div>
                    <div className='container-information'>
                        <ConfigDatosDeskGen 
                            description="Datos de la cuenta"
                            field1="Correo" 
                            write1="christian@gmail.com"
                            field2="Contraseña"
                            write2="*********"/>

                        <ConfigDatosDesk2 
                            description="Datos personales"
                            field1="Nombre y apellido" 
                            write1="Christian Cruz Ramirez"
                        />            
                    </div>
                    <div className='content-button-salir'>
                        <ButtonSalir to="/login" className="buttonSalir"/>
                    </div>
                </div>
            </div>
        </from>   
    );
}

export default FromConfiguracionUsuario;