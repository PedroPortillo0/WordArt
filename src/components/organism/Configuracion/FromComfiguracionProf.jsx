import Separador from '../../atoms/Separador';
import Label from '../../atoms/LabelLogin';
import ButtonSalir from '../../atoms/ButtonSalir'
import ConfiRegresar2 from '../../molecules/ConfiRegresar2'
import ConfigDatosDeskGen from '../../molecules/ConfigDatosDeskGen';
import regresar from '../../../assets/img/icons/regresar.png'
import iconUser from '../../../assets/img/icons/user.png'
import "../../../assets/styles/Configuracion/FromConfiguracionProf.css";
import { useEffect, useState } from "react";
import {useSelector} from 'react-redux';


function FromConfiguracionProf() {
    // const profe = useSelector(state => state.events);
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
                <ConfiRegresar2 src={regresar} msg="Ajustes"/>
                <Separador/>
                <div className='container-information-config-desk'>
                    
                    <div className='container-profile'>
                        <div className='container-foto'>
                            <img src={iconUser} className="foto" alt="foto de perfil" />
                        </div>
                        <div className='container-name-typ'>
                            <div>                    
                                    <Label  msn={user.user.nombreP}/>
                            </div>
                            <div><Label  msn="Profesor"/></div>
                          
                        </div>
                    </div>
                    <div className='container-information'>
                        <ConfigDatosDeskGen 
                            description="Datos de la cuenta"
                            field1="Correo" 
                            write1= {user.user.gmailP}
                            field2="Contraseña"
                            write2="*********"/>

                        <ConfigDatosDeskGen 
                            description="Datos personales"
                            field1="Nombre y apellido" 
                            write1={user.user.nombreP }
                            field2="Telefono"
                            write2={user.user.telefonoP}/>            
                    </div>
                    <div className='content-button-salir'>
                        <ButtonSalir to="/filtro2" className="buttonSalir"/>
                    </div>
                </div>
            </div>
        </from>   
    );
}

export default FromConfiguracionProf;