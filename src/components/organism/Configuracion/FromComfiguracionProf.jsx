import Separador from '../../atoms/Separador';
import Label from '../../atoms/LabelLogin';
import ButtonSalir from '../../atoms/ButtonSalir'
import ConfigRegresar from '../../molecules/ConfigRegresar'
import ConfigDatosDeskGen from '../../molecules/ConfigDatosDeskGen';
import regresar from '../../../assets/img/icons/regresar.png'
import iconUser from '../../../assets/img/icons/user.png'
import "../../../assets/styles/Configuracion/FromConfiguracionProf.css";
import { Link } from 'react-router-dom';
function FromConfiguracionProf() {
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
                            <div><Label  msn="Alan Romeo"/> </div>
                            <div><Label  msn="Profesor"/></div>
                        </div>
                    </div>
                    <div className='container-information'>
                        <ConfigDatosDeskGen 
                            description="Datos de la cuenta"
                            field1="Correo" 
                            write1="alan@gmail.com"
                            field2="Contraseña"
                            write2="*********"/>

                        <ConfigDatosDeskGen 
                            description="Datos personales"
                            field1="Nombre y apellido" 
                            write1="Alan Romeo Lopez"
                            field2="Telefono"
                            write2="9733221220"/>            
                    </div>
                    <div className='content-button-salir'>
                        <ButtonSalir to="/loginprofesor" className="buttonSalir"/>
                    </div>
                </div>
            </div>
        </from>   
    );
}

export default FromConfiguracionProf;