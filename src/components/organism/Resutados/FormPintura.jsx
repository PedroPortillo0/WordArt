import styled from 'styled-components';
import Retroceder from '../../../assets/img/icons/GoBack.png';
import Logo from '../../atoms/LogoGeneral';
import Label from '../../atoms/LabelLogin';
import LabelGeneral from '../../atoms/LabelGeneral';
import Button from '../../atoms/ButtonLogin';
import Oleo from '../../../assets/img/Pintura/Oleo.png';
import Dibujo from '../../../assets/img/Pintura/Dibujo.png';
import Colores from '../../../assets/img/Pintura/Colores.png';
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
    border-top: 2.5px solid #30BFCE;
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
const DivImagen = styled.div`
    width:50%;
    height:80%;
    display: flex;
    justify-content: center;
    .guitarra{
        width:95%;
        height:100%;
        
    }
`;
const DivTexto = styled.div`
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

function FormPintura() {
    return ( 
            <StyledContainer>
                <DivHijo1>
                    <div className='hijo1-1'>
                        <div className='ContainerImagen'>
                            <Link to={"/homepage"}>
                                <img className='imagen' src={Retroceder} alt="regresar" />
                            </Link>
                        </div>
                        <div className='ContainerResult'>
                            <div>
                                <Label msn={"resultados de Pintura"}/>
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
                                    <img className='guitarra' src={Oleo} alt="imagen del producto" />
                                </DivImagen>
                                <DivTexto>
                                    <div>
                                        <Label msn="[Pintura al oleo desde cero 2023] ¡colores, tecnica y mas...!"/>
                                    </div>
                                    <div className='segundotexto'>
                                        <LabelGeneral className="labelGeneral" msg="Aprenderas los conceptos basicos y un poco de teoeria sobre la pintura y sus caracteristicas, tecnicas y experiencia unica."/>
                                    </div>
                                     <div className='tercertexto'>
                                        <LabelGeneral className="labelGeneral" msg="45 horas en total  - 35 clases   - principiante"/>
                                    </div> 
                                </DivTexto>
                                <DivIr>
                                    <div className='precio'>
                                        <LabelGeneral className="labelGeneral" msg="670 MX$"/>
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
                                    <img className='guitarra' src={Dibujo} alt="imagen del producto" />
                                </DivImagen>
                                <DivTexto>
                                    <div>
                                        <Label msn="[Dibujo a lapiz ] !grafito y borrador¡"/>
                                    </div>
                                    <div className='segundotexto'>
                                        <LabelGeneral className="labelGeneral" msg="Nuevas formas de utilizar el borrador junto al grafito, retomando tus conocimientos intermedios del dibujo junto con nuevas tecnicas. "/>
                                    </div>
                                     <div className='tercertexto'>
                                        <LabelGeneral className="labelGeneral" msg="40 horas en total  - 25 clases   -avanzado"  />
                                    </div> 
                                </DivTexto>
                                <DivIr>
                                    <div className='precio'>
                                        <LabelGeneral className="labelGeneral" msg="990 MX$"/>
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
                                    <img className='guitarra' src={Colores} alt="imagen del producto" />
                                </DivImagen>
                                <DivTexto>
                                    <div>
                                        <Label msn="[todo sobre colores] !tipos, codigos y mezclas¡"/>
                                    </div>
                                    <div className='segundotexto'>
                                        <LabelGeneral className="labelGeneral" msg="Aprenderas mediante tus conociminetos basicos de pintuta los distintos colores y formas de combinarlos, utilizaras sus codigos y como mezclar distintos tonos mediante una app."/>
                                    </div>
                                     <div className='tercertexto'>
                                        <LabelGeneral className="labelGeneral" msg="28 horas en total  - 30 clases   -intermedio"/>
                                    </div> 
                                </DivTexto>
                                <DivIr>
                                    <div className='precio'>
                                        <LabelGeneral className="labelGeneral" msg="800 MX$"/>
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
export default FormPintura;