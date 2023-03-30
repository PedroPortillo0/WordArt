import styled from 'styled-components';
import Retroceder from '../../../assets/img/icons/GoBack.png';
import Logo from '../../atoms/LogoGeneral';
import Label from '../../atoms/LabelLogin';
import LabelGeneral from '../../atoms/LabelGeneral';
import Button from '../../atoms/ButtonLogin';
import Principiante from '../../../assets/img/Teatro/Principiante.png';
import Medio from '../../../assets/img/Teatro/Medio.png';
import Avanzado from '../../../assets/img/Teatro/Avanzado.png';

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
    border-top: 2.5px solid #A14CF7;
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

function FormTeatro() {
    return ( 
            <StyledContainer>
                <DivHijo1>
                    <div className='hijo1-1'>
                        <div className='ContainerImagen'>
                            <a href="/homepage">
                                <img className='imagen' src={Retroceder} alt="regresar" />
                            </a>
                        </div>
                        <div className='ContainerResult'>
                            <div>
                                <Label msn={"resultados de Teatro"}/>
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
                                    <img className='guitarra' src={Principiante} alt="imagen del producto" />
                                </DivImagen>
                                <DivTexto>
                                    <div>
                                        <Label msn="[Teatro esenico principiante] ¡expresion corporal, que es y mas !"/>
                                    </div>
                                    <div className='segundotexto'>
                                        <LabelGeneral className="labelGeneral" msg="Aprende paso a paso como aprender el arte esenico de el teatro, aprenderas cosas basicas como expresiones corporales, mobimientos y como no salir del personaje."/>
                                    </div>
                                     <div className='tercertexto'>
                                        <LabelGeneral className="labelGeneral" msg="30 horas en total  - 25 clases   -principiante"  />
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
                                    <img className='guitarra' src={Medio} alt="imagen del producto" />
                                </DivImagen>
                                <DivTexto>
                                    <div>
                                        <Label msn="[Teatro nivel medio] !posiciones, lenguaje de expresion y cautivacion del publico¡"/>
                                    </div>
                                    <div className='segundotexto'>
                                        <LabelGeneral className="labelGeneral" msg="seguiras practicando el lenguaje corporal que debes de expras ante el publico, aprenderas a cautivar con tus movimientos y a sentir ese personaje mediante posisiones claves."/>
                                    </div>
                                     <div className='tercertexto'>
                                        <LabelGeneral className="labelGeneral" msg="25 horas en total  - 30 clases   -intermedio"  />
                                    </div> 
                                </DivTexto>
                                <DivIr>
                                    <div className='precio'>
                                        <LabelGeneral className="labelGeneral" msg="760 MX$"/>
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
                                    <img className='guitarra' src={Avanzado} alt="imagen del producto" />
                                </DivImagen>
                                <DivTexto>
                                    <div>
                                        <Label msn="[Teatro nivel avanzado] !termina lo que empezaste y vuelvete un master ¡"/>
                                    </div>
                                    <div className='segundotexto'>
                                        <LabelGeneral className="labelGeneral" msg="repaso de tecnicas y expresiones, mas nuevos metodos de 2023 todo solo para ti; empieza este nuevo año con lo mejor del teatro."/>
                                    </div>
                                     <div className='tercertexto'>
                                        <LabelGeneral className="labelGeneral" msg="48 horas en total  - 35 clases   -avanzado"/>
                                    </div> 
                                </DivTexto>
                                <DivIr>
                                    <div className='precio'>
                                        <LabelGeneral className="labelGeneral" msg="999 MX$"/>
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
export default FormTeatro;