import Separador from '../../atoms/Separador';
import Label from '../../atoms/LabelLogin';
import ButtonSalir from '../../atoms/ButtonSalir'
import ConfigRegresar from '../../molecules/ConfigRegresar'
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

    //   function validarUsuario(register,gmailP, contraseñaP) {
    //     let user = null;
    //     let flag = false;
    //     for (let i = 0; i < register.length && !flag; i++) {
    //       if (register[i].gmailP === gmailP && register[i].contraseñaP === contraseñaP) {
    //         user = register[i]
    //         flag = true;
    //       }
    //     }
    //     return user;
    //   }
    // function xd(){
    //     let user=null;
    //     let flag=false;
    //     for(let i=0;i<data.length && !flag; i++){
    //         if(data[i].gmailP===profe){
    //             user=data[i]
    //             flag=true;
    //         }
    //     }
    //     return user;
    // }

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
                            <div>                    
                                    <Label  msn={user.user.nombreP   }/>
                                    <br></br>
                                    <Label  msn={user.user.telefonoP  }/>
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
                            write1={user.user.nombreP}
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