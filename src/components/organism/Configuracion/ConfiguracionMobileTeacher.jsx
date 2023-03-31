import ConfigRegresar from '../../molecules/ConfigRegresar';
import Separador from '../../atoms/Separador';
import ConfigProfile from '../../molecules/ConfigProfile';
import ConfigDatosCuenta from '../../molecules/ConfigDatosCuenta';
import ConfigDatosPersonales from '../../molecules/ConfigDatosPersonales';

import user from '../../../assets/img/icons/user.png'
import goBack from '../../../assets/img/icons/goback.png';

import '../../../assets/styles/Configuracion/FromConfiguracionProf.css'
import ButtonSalirProfesor from '../../molecules/ButtonSalirProfesor';

function ConfiguracionMobileTeacher() {
    return ( 
        <div className='container-configuracion-mobile'>
            <ConfigRegresar  src={goBack} msg="Administracion de cuenta"/>
            <Separador/>
            <ConfigProfile src={user}/>
            <Separador/>
            <ConfigDatosCuenta email="alan@gmail.com" password="12345678"/>
            <Separador/>
            <ConfigDatosPersonales nameLastname="Alan Romeo Lopez" phone="974433212" />
            <Separador/>
            <ButtonSalirProfesor/>
        </div>
     );
}

export default ConfiguracionMobileTeacher;