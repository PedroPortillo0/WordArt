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
import { useEffect, useState } from "react";
import {useSelector} from 'react-redux';
function FromConfiguracionUsuario() {
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
                            <div><Label  msn={user.user.usuario}/> </div>
                            <div><Label  msn="Alumno"/></div>
                        </div>
                    </div>
                    <div className='container-information'>
                        <ConfigDatosDeskGen 
                            description="Datos de la cuenta"
                            field1="Correo" 
                            write1={user.user.email}
                            field2="Contraseña"
                            write2="*********"/>

                        <ConfigDatosDesk2 
                            description="Datos personales"
                            field1="Nombre " 
                            write1={user.user.usuario}
                        />            
                    </div>
                    <div className='content-button-salir'>
                        <ButtonSalir to="/filtro2" className="buttonSalir"/>
                    </div>
                </div>
            </div>
        </from>   
    );
}

export default FromConfiguracionUsuario;