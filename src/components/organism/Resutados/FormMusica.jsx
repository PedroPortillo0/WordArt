import styled from 'styled-components';
import Retroceder from '../../../assets/img/icons/GoBack.png';
import Logo from '../../atoms/LogoGeneral';
import Label from '../../atoms/LabelLogin';
import LabelGeneral from '../../atoms/LabelGeneral';
import Button from '../../atoms/ButtonLogin';
import Guitarra from '../../../assets/img/Musica/Guitarra.png';
import Piano from '../../../assets/img/Musica/Piano.png';
import Acordeon from '../../../assets/img/Musica/Acordeon.png';
import { Link } from 'react-router-dom';

const StyledContainer = styled.div` //padre listo
width:100%;
height:100vh;
display:flex;
flex-direction: column;
align-items: center;
background-color: hsl(0, 0%, 91%) ;
`;
const DivHijo1 = styled.div` //hijo1
    width:100%;
    height:10%;
    display:flex;
    justify-content: center;
    .hijo1-1{
        width:70%;
        height:100%;
        display:flex;
        .ContainerImagen{
            width:10%;
            height:100%;
            display:flex;
            align-items: center;
            .imagen{
                width:70%;
                height:50%;
            }
        }
        .ContainerResult{
            width:50%;
            height:100%;
            display:flex;
            align-items: center;
            font-weight: bold;
        }
    }
    .hijo1-2{
        width:25%;
        height:100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .logo-general{
            width:25%;
            height:50%;
            margin-top: 0%;
        }
    }
`;
const DivHijo2 = styled.div`//hijo2
    width:94%;
    height:85%;
    display:flex;
    align-items: center;
    justify-content: center;
    border-top: 2.5px solid #FAA41B;
`;
const DivContainer = styled.div`
    width:95%;
    height:95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;  
`;
const DivContenidoContainer = styled.div`
    width:95%;
    height:30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const DivContenido = styled.div`
    width:90%;
    height:80%;
    border:1.5px solid #AEAEAE;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
const DivImagen = styled.div` //DivImagen listo
    width:50%;
    height:80%;
    display: flex;
    justify-content: center;
    .guitarra{
        width:95%;
        height:100%;
        
    }
`;
const DivTexto = styled.div`//listo
    width:80%;
    height:70%;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .segundotexto{
        .labelGeneral{
            font-size: 0.9em;
        }
    }
    .tercertexto{
        .labelGeneral{
            font-size: 0.7em;
        }
    }
`;
const DivIr = styled.div`
    width:40%;
    height:50%;
    display: flex;
    flex-direction: column;
    .precio{
        width:100%;
        height:50%;
        display: flex;
        justify-content: center;
        align-items: flex-end;;
        font-size: 0.9em;
        .labelGeneral{
            color: #30BFCE
        }
    }
    .buttun{
        width:100%;
        height:50%;
        display: flex;
        justify-content: center;
        align-items: flex-end;;
        .button{
            width:30%;
            height:90%;

        }


    }
`;

function FormMusica() {
    const llevar =()=>{
    }
    return ( 
            <StyledContainer>
                <DivHijo1>
                    <div className='hijo1-1'>
                        <div className='ContainerImagen' >
                            <Link to={"/homepage"}>
                                <img className='imagen' src={Retroceder} alt="regresar" />
                            </Link>
                    
                        </div>
                        <div className='ContainerResult'>
                            <div>
                                <Label msn={"resultados de Musica"}/>
                            </div>
                        </div>
                    </div>
                    <div className='hijo1-2'>
                        <Logo className='logo-general'/>
                    </div>
                </DivHijo1>
                <DivHijo2>
                    <DivContainer>
                        <DivContenidoContainer>
                            <DivContenido>
                                <DivImagen>
                                    <img className='guitarra' src={Guitarra} alt="imagen del producto" />
                                </DivImagen>
                                <DivTexto>
                                    <div>
                                        <Label msn="[Guitarra desde cero 2023] ¡circulos, acordes y mas!"/>
                                    </div>
                                    <div className='segundotexto'>
                                        <LabelGeneral className="labelGeneral" msg="Aprende a tocar la guitarra desde cero, empezando con el circulo de sol y practicando acordes y notas para poder ser un experto en la musica."/>
                                    </div>
                                     <div className='tercertexto'>
                                        <LabelGeneral className="labelGeneral" msg="25 horas en total  - 35 clases   -principiante"  />
                                    </div> 
                                </DivTexto>
                                <DivIr>
                                    <div className='precio'>
                                        <LabelGeneral className="labelGeneral" msg="300 MX$"/>
                                    </div>
                                    <div className='buttun'>
                                        
                                        <Button className='button' msg={"ir"}/>
                                        
                                            
                                       
                                        
                                    </div>
                                </DivIr>
                            </DivContenido>
                        </DivContenidoContainer>
                        <DivContenidoContainer>
                            <DivContenido>
                            <DivImagen>
                                    <img className='guitarra' src={Piano} alt="imagen del producto" />
                                </DivImagen>
                                <DivTexto>
                                    <div>
                                        <Label msn="[Piano avanzado 2022] !Notas, escalas,octavas y armonia¡"/>
                                    </div>
                                    <div className='segundotexto'>
                                        <LabelGeneral className="labelGeneral" msg="sigue aprendiendo a como ser el guru del piano con estos pasos, curso intensivo de como aprender notas dificiles y teclas especiales."/>
                                    </div>
                                     <div className='tercertexto'>
                                        <LabelGeneral className="labelGeneral" msg="30 horas en total - 45 clases -avanzado"  />
                                    </div> 
                                </DivTexto>
                                <DivIr>
                                    <div className='precio'>
                                        <LabelGeneral className="labelGeneral" msg="460 MX$"/>
                                    </div>
                                    <div className='buttun'>
                                        <Button className='button' msg={"ir"}/>
                                    </div>
                                </DivIr>

                            </DivContenido> 
                        </DivContenidoContainer>
                        <DivContenidoContainer>
                            <DivContenido>
                                <DivImagen>
                                    <img className='guitarra' src={Acordeon} alt="imagen del producto" />
                                </DivImagen>
                                <DivTexto>
                                    <div>
                                        <Label msn="[Acordeon intermedio] !deja de ser principiante en el acordeon ¡"/>
                                    </div>
                                    <div className='segundotexto'>
                                        <LabelGeneral className="labelGeneral" msg="Sigue aprendiendo q como tcar correctamente el acordeon, no te quedes con lo basico y da mas de ti en este hermoso instrumento."/>
                                    </div>
                                     <div className='tercertexto'>
                                        <LabelGeneral className="labelGeneral" msg="35 horas en total - 45 clases -intermedio"/>
                                    </div> 
                                </DivTexto>
                                <DivIr>
                                    <div className='precio'>
                                        <LabelGeneral className="labelGeneral" msg="900 MX$"/>
                                    </div>
                                    <div className='buttun'>
                                        
                                        <Button className='button' msg={"ir"}/>
                                        
                                    </div>
                                </DivIr>

                            </DivContenido>
                        </DivContenidoContainer>
                    </DivContainer>
                </DivHijo2>
                
            </StyledContainer>

    );
}
export default FormMusica;