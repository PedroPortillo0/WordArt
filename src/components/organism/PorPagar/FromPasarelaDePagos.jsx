import styled from 'styled-components';
import Retroceder from '../../../assets/img/icons/GoBack.png';
import Logo from '../../atoms/LogoGeneral';
import Label from '../../atoms/LabelLogin';

const StyledContainer = styled.div` //padre listo
    width:100%;
    height:100vh;
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
        width:30%;
        height:100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: hsl(0, 0%, 91%) ;
        .xd{
            width:50%;
            height:100%;
            display: flex;
        align-items: center;
        justify-content: flex-end;
            .logo-general{
            width:40%;
            height:40%;
            margin-top: 0%;
        }

        }
    }
`;
const DivHijo2 = styled.div` //hijo2
    width:100%;
    height:90%;
    display: flex;
`;
const DivMetodoPago = styled.div`
    width:80%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const DivResumen = styled.div`
    width:34.3%;
    height:100%;
    background-color: hsl(0, 0%, 91%); 

`;
const DivContenido = styled.div`
    width:90%;
    height:90%;
    border:1.5px solid #AEAEAE;
    border-radius: 10px;
`;
const Divtext = styled.div`
    width:100%;
    height:10%;
    border: 2px solid ;

`;



function FromPasarelaDePagos() {
    return ( 
            <StyledContainer>
                <DivHijo1>
                    <div className='hijo1-1'>
                        <div className='ContainerImagen'>
                            <img className='imagen' src={Retroceder} alt="regresar" />
                        </div>
                        <div className='ContainerResult'>
                            <div>
                                <Label msn={"pagar"}/>
                            </div>
                        </div>
                    </div>
                    <div className='hijo1-2'>
                        <div className='xd'>
                            <Logo className='logo-general'/>
                        </div>
                    </div>
                </DivHijo1>
                <DivHijo2>
                    <DivMetodoPago>
                        <DivContenido>
                            <Divtext >

                            </Divtext>
                        </DivContenido>

                    </DivMetodoPago>
                    <DivResumen>

                    </DivResumen>
                </DivHijo2>

            </StyledContainer>
    );
}
export default FromPasarelaDePagos;