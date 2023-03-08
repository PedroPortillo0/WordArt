import styled from 'styled-components';
import FondoRegister from '../../assets/img/FondoRegister.svg'
import Fondo from '../../assets/img/FondoRegister.svg'

import Title from '../atoms/TitleRegister'
import Logo from '../atoms/LogoRegister';
import Button from '../atoms/ButtonRegister';
import Subtitulo from '../atoms/SubtituloRegister';

import WapperInput from '../molecules/WrapperInputRegister';

import estatua from '../../assets/img/estatua.png'


const StyledDivPadre = styled.div`
    width: 100%;
    height:100vh;
    display: flex;
    align-items: center;
    align-content: center;
    /* flex-direction: column; */
    
`
const StyledDivHijo1 = styled.image`
    width: 70%;
    height:100%;
    flex-direction: column;
    /* background-color: black; */
    /* background-image: url(image.png); */
    background-image: url('https://images.unsplash.com/photo-1548811579-017cf2a4268b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80');
    
`
const StyledDivHijo2 = styled.div`
    width: 30%;
    height:100vh;
    flex-direction: column;
    background: linear-gradient(90deg, rgba(48, 191, 206, 0.8) 0.29%, rgba(48, 191, 206, 0.6) 50.52%, rgba(48, 191, 206, 0.5) 100%);
`
const StyledDivHijo3 = styled.div`
    position: absolute; 
    width: 80%;
    height: 80%;
    left: 100px; 
    top: 100px;
    z-index: 3;
    flex-direction: column;
    border: 10px solid #ffffff;
    border-radius: 10px;
    box-sizing: border-box;
`
const StyledDivHijo4 = styled.div`
    position: absolute;
    background-color: #ffffff;
    width: 40%;
    height: 80%;
    left: 50%;
    top: 100px;
    z-index: 4;
    flex-direction: column;
    /* border: 2px solid red; */
    border: 10px solid #ffffff;
    border-radius: 10px;
    box-sizing: border-box;
    

`

function FormRegister() {
    return ( 
        <StyledDivPadre>
            <StyledDivHijo1>
               
            </StyledDivHijo1>

            <StyledDivHijo2>

            </StyledDivHijo2>

            <StyledDivHijo3>

            </StyledDivHijo3>

            <StyledDivHijo4>
                <div>
                    <img src={Logo} alt="" />
                    <Title>Registrarse</Title>
                    <Subtitulo>Vamos a preparar todo para que pueda verificar su cuenta personal y comenzar a configurar su perfil</Subtitulo>
                    <WapperInput msn="Usuario:" type="text" placeholder=""/>
                    <WapperInput msn="Email:" type="text" placeholder=""/>
                    <WapperInput msn="Consaseña:" type="password" placeholder=""/>
                    <WapperInput msn="Confirmar contraseña:" type="password" placeholder=""/>
                    <Button msn="Registrarse" type="button"/>

                </div>
                

            </StyledDivHijo4>

        </StyledDivPadre>
     );
}
export default FormRegister;
