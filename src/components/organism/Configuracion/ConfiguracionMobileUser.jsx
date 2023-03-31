import ConfigRegresar from '../../molecules/ConfigRegresar';
import Separador from '../../atoms/Separador';
import ConfigProfile from '../../molecules/ConfigProfile';
import ConfigDatosCuenta from '../../molecules/ConfigDatosCuenta';
import ConfigDatosPersonalesUser from '../../molecules/ConfigDatosPersonalesUser';
import ButtonSalir from '../../molecules/buttonSalir';

import user from '../../../assets/img/icons/user.png'
import goBack from '../../../assets/img/icons/goback.png';

import '../../../assets/styles/Configuracion/FromConfiguracionProf.css'
function ConfiguracionMobileUser() {
    return ( 
        <div className='container-configuracion-mobile'>
            <ConfigRegresar src={goBack} msg="Administracion de cuenta"/>
            <Separador/>
            <ConfigProfile src={user}/>
            <Separador/>
            <ConfigDatosCuenta email="christian@gmail.com" password="hola123"/>
            <Separador/>
            <ConfigDatosPersonalesUser nameLastname="Christian Cruz Cass" username="MiTioJuancho3000"/>
            <Separador/>
            <ButtonSalir/>
        </div>
     );
}

export default ConfiguracionMobileUser;