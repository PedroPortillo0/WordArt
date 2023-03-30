import styled from 'styled-components';
import "../../../assets/styles/ConfiguracionProf/FromConfiguracionProf.css";
import retroceder from '../../../assets/img/Regresar.png';
import iconUser from '../../../assets/img/icons/user.png'

import ir from '../../../assets/img/icons/irconfiguracion.png';
import Label from '../../atoms/LabelLogin';
import Button from '../../atoms/ButtonLogin';
import { Link } from 'react-router-dom';
const StyledContainer = styled.div` //padre listo
width:100%;
height:100vh;
display:flex;
flex-direction: column;
background-color: hsl(0, 0%, 91%) ;
`;
const Styledcontainerhijo1 = styled.div` //hijo1  listo
width:100%;
height:10%;
display:flex;
align-items: center;
`;
const StyledContainerhijo2 = styled.div` //hijo2 listo
width:100%;
height:90%;
display:flex ;
flex-direction: column;
border-top: 2.5px solid #091f84;
`;
const Divretroceder = styled.div` //hijo1,regresar lito
width:10%;
height:100%;
align-items: center;
justify-content: center;
display: flex;
`;
const Divtext = styled.div` //hijo1,regresar listo
width:90%;
height:100%;
align-items: center;
display: flex;
`;
const DivInformacion = styled.div` //hijo2,informacion1 listo
width:100%;
height:20%;
align-items: center;
display: flex;
`;
const DivInformacion2 = styled.div` //hijo2,informacion2 listo 
width:100%;
height:80%;
display: flex;
align-items: center;
flex-direction: column;

`;
const DivfotoPerfil = styled.div` //hijo2,perfil listo
    width:20%;
    height:100%;
    align-items: center;
    justify-content: flex-end;
    display: flex;
    .foto{
        width:40%;
        height:80%;

    }

`;
const Divfototexto = styled.div` //hijo2,fototexto listo
width:20%;
height:100%;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
font-weight: bold;
`;
const DivDatosCuenta = styled.div`// hijo2-hijo2-datoscuenta listo
    width:75%;
    height:80%;
    display: flex;
    flex-direction: column;
    align-content: space-around;

`;
const DivDatos = styled.div`
    width:35%;
    height:15%;
    justify-content: space-around;
    font-weight: bold;
    display: flex; 
    align-items: center;

`;
const DivInfo = styled.div` //hijo2,fototexto listo
    width:100%;
    height:20%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: #ffffff;
`;
const Div1 = styled.div`
    width:100%;
    height:50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .correo{
        color: #909090;
    }
`;
const Divbutton = styled.div`
    width:100%;
    height:50%;
    display: flex;
    align-items:center;
    justify-content: center;
    .button{
        width:100%;
        height:100%;
        background: linear-gradient(90deg, rgba(233, 0, 0, 0.4) 0.29%, rgba(233, 0, 0, 0.4), rgba(233, 0, 0, 0.4) 100%);
        box-shadow: 0px 4px 4px rgba(0,0,0,0.33);
        color: #7B0000;
        border: 2px solid;
    }
`;
    
function FromConfiguracionUsuario() {
    const lavr=(e)=>{
        e.preventDefault();
        
        
    }
    return ( 
        <from>
            <StyledContainer>
                <Styledcontainerhijo1>
                    <Divretroceder>
                        <a href="/homepage">
                            <img src={retroceder} alt="imagen de la empresa " />
                        </a>
                    </Divretroceder>
                    <Divtext>  
                        <Label  msn="Ajustes"/>  
                    </Divtext>
                </Styledcontainerhijo1>
                <StyledContainerhijo2>
                    <DivInformacion>
                        <DivfotoPerfil>
                            <img src={iconUser} className="foto" alt="foto de perfil" />
                        </DivfotoPerfil>
                        <Divfototexto>
                            <div><Label  msn="Christian Romeo"/> </div>
                            <div><Label  msn="Alumno"/></div>
                        </Divfototexto>
                    </DivInformacion>
                    <DivInformacion2>
                        <DivDatosCuenta>
                            <DivDatos>
                                <Label  msn="Datos de cuenta"/>
                            </DivDatos>
                            <DivInfo>
                                <Div1>
                                    <div>
                                        <Label  msn="Correo"/>
                                    </div>
                                    <div className='correo'>
                                        <Label  msn="christian@gmail.com"/>
                                    </div>
                                    <div>
                                        <img src={ir} alt="ir" />
                                    </div>
                                </Div1>
                                <Div1>
                                    <div>
                                        <Label  msn="Contraseña"/>
                                    </div>
                                    <div className='correo'>
                                        <Label  msn="**********"/>
                                    </div>
                                    <div>
                                        <img src={ir} alt="ir" />
                                    </div>
                                </Div1>
                            </DivInfo>
                            <DivDatos>
                                <Label  msn="Datos personales"/>
                            </DivDatos>
                            <DivInfo>
                                <Div1>
                                    <div>
                                        <Label  msn="Nombre y apellido"/>
                                    </div>
                                    <div className='correo'>
                                        <Label  msn="Christian Romeo Alvarado"/>
                                    </div>
                                    <div>
                                        <img src={ir} alt="ir" />
                                    </div>
                                </Div1>
                                <Div1>
                                    <div>
                                        <Label  msn="Telefono"/>
                                    </div>
                                    <div className='correo'>
                                        <Label  msn="9633221212"/>
                                    </div>
                                    <div>
                                        <img src={ir} alt="ir" />
                                    </div>
                                </Div1>
                            </DivInfo>
                            <Divbutton>
                                <Link to={"/login"}><Button className='button' onclick={lavr} msg={"salir"} /> </Link>
                            </Divbutton>
                        </DivDatosCuenta>
                    </DivInformacion2>
                </StyledContainerhijo2>
            </StyledContainer>
        </from>   
    );
}

export default FromConfiguracionUsuario;