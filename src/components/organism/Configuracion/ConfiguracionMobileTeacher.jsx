import ConfigRegresar from '../../molecules/ConfigRegresar';
import Separador from '../../atoms/Separador';
import ConfigProfile from '../../molecules/ConfigProfile';
import ConfigDatosCuenta from '../../molecules/ConfigDatosCuenta';
import ConfigDatosPersonales from '../../molecules/ConfigDatosPersonales';

import user from '../../../assets/img/icons/user.png'
import goBack from '../../../assets/img/icons/goback.png';

import '../../../assets/styles/Configuracion/FromConfiguracionProf.css'
import ButtonSalirProfesor from '../../molecules/ButtonSalirProfesor';
import { useEffect, useState } from "react";
import {useSelector} from 'react-redux';

function ConfiguracionMobileTeacher() {
    const user = useSelector(state => state.user)

    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const response = await fetch("http://34.205.213.60/profesor/getAll");
          const result = await response.json();
          setData(result);
        }
        fetchData();
      }, []);
    return ( 
        <div className='container-configuracion-mobile'>
            <ConfigRegresar  src={goBack} msg="Administracion de cuenta"/>
            <Separador/>
            <ConfigProfile src={user}/>
            <Separador/>
            <ConfigDatosCuenta email={user.user.gmailP} password="*******"/>
            <Separador/>
            <ConfigDatosPersonales nameLastname={user.user.nombreP}phone={user.user.telefonoP} />
            <Separador/>
            <ButtonSalirProfesor/>
        </div>
     );
}

export default ConfiguracionMobileTeacher;