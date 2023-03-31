import ConfigRegresar from '../../molecules/ConfigRegresar';
import Separador from '../../atoms/Separador';
import ConfigProfile from '../../molecules/ConfigProfile';
import ConfigDatosCuenta from '../../molecules/ConfigDatosCuenta';
import ConfigDatosPersonalesUser from '../../molecules/ConfigDatosPersonalesUser';
import ButtonSalir from '../../molecules/buttonSalir';

import goBack from '../../../assets/img/icons/goback.png';

import '../../../assets/styles/Configuracion/FromConfiguracionProf.css'
import { useEffect, useState } from "react";
import {useSelector} from 'react-redux';

function ConfiguracionMobileUser() {
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
            <ConfigRegresar src={goBack} msg="Administracion de cuenta"/>
            <Separador/>
            <ConfigProfile src={user}/>
            <Separador/>
            <ConfigDatosCuenta email={user.user.gmail} password="******"/>
            <Separador/>
            <ConfigDatosPersonalesUser nameLastname={user.user.usuario} />
            <Separador/>
            <ButtonSalir/>
        </div>
     );
}

export default ConfiguracionMobileUser;