import styled from 'styled-components';
import { Link } from 'react-router-dom';

import WrapperlInput from "../molecules/WrapperInputLogin";

import Button from '../atoms/ButtonLogin';
import Logo from "../atoms/LogoLogin";
import Label from '../atoms/LabelLogin';
import Title from '../atoms/TitleLogin';


const StyledContainer = styled.div` //padre
width:100%;
height:100vh;
display:flex;
`;

const StyledInputGroup = styled.div` //hijo1
width:50%;
height: 100%;
justify-content:center;
align-items:center;
display:flex;
flex-direction:column;
`;

const StyledButton = styled.div` //hijo(1,1) lado izquierdo

width:100%;
height:10%;
display: flex;
justify-content:center;
align-items:flex-start;
flex-direction: column;
margin-top: 5%;

`;

const StyledContainerhijo = styled.div` //hijo(2,1) lado derecho
width:50%;
height: 50vh;
justify-content:center;
border-radius: 10px;
align-items:center;
display:flex;
flex-direction:column;
background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(255, 255, 255, 0.08);
box-shadow: 4px 7px 15px rgba(0, 0, 0, 0.08), inset -1px 4px 2px rgba(201, 201, 201, 0.1), inset -5px 5px 12px rgba(255, 255, 255, 0.05), inset 5px -5px 12px rgba(255, 255, 255, 0.05);
backdrop-filter: blur(75px);
border: 2px solid; 
`;

const StyledContainer2 = styled.div` //hijo2

width:50%;
height: 100%;
background: linear-gradient(90deg, rgba(48, 191, 206, 0.8) 0.29%, rgba(48, 191, 206, 0.6) 50.52%, rgba(48, 191, 206, 0.5) 100%);
justify-content:center;
align-items:center;
display:flex;
flex-direction:column;

`;

const StyledInputHijo = styled.div` //hijo1(1,2)
    display: flex;
    justify-content: center;
    height: 70%;
    align-items: flex-start;
    flex-direction: column;
    width: 70%;
    border: 2px solid yellow;
`;

const StyledLogo= styled.div` //hijo(1,2) lado izquierdo
width:100%;
height:30%;
display: flex;
align-items:center;
flex-direction: column;
margin-top: 5%;

`;
const Styledtexto2= styled.div` 
width:100%;
height:60%;
align-items:center;
flex-direction: column;
`;
const Styledtexto1= styled.div` 
width:100%;
height:25%;
align-items:center;
flex-direction: column;
`;
const StyledCrearCuenta= styled.div` 
width:100%;
height:20%;
padding-top: 2%;

align-items:center;
display:flex;
flex-direction:column;
`;
const StyledCrear= styled.div` 
width:50%;
height:20%;
padding-top: 2%;
`;
const StyledRecuperar= styled.div` 
width:50%;
height:20%;
padding-top: 2%;
align-items:center;
display:flex;
flex-direction:column;
`;
const StyledrexroGrnde= styled.div` 
width:50%;
height:20%;
padding-top: 2%;
align-items:center;
display:flex;
flex-direction:column;
`;


function GroupInputs({msn}) {
    return (
        //padre
        <StyledContainer>
           
            <StyledInputGroup >
                <Logo/>
                <StyledInputHijo>
                    <StyledLogo>
                      <Styledtexto1>
                     <Title  msn=" Hey,hola👋"/>
                      </Styledtexto1>
                      <Styledtexto2>
                      <Label msn ="ㅤTodo ser humano es un artista. El sueño de la vida es crear arte hermoso"/>
                      </Styledtexto2>
                    </StyledLogo>
                    <WrapperlInput 
                    msn="correo:"
                    type="text">
                    </ WrapperlInput>
                    <WrapperlInput 
                        msn="contraseña:"
                        type="password">
                    </ WrapperlInput>  
                    <StyledButton>
                    <Button ></Button>
                    </StyledButton> 
                    <StyledCrearCuenta>
                        <StyledCrear>
                        <Label msn=" ¿no tienes cuenta?" /> <Link to="/register"> <label>registrate</label></Link>
                        </StyledCrear>
                        <StyledRecuperar>
                        <Link to="/"> <label>recuperar contraseña</label></Link>
                        </StyledRecuperar>
                    </StyledCrearCuenta>
                </StyledInputHijo>
            </StyledInputGroup >
    
                <StyledContainer2>
                  <StyledContainerhijo>
                  </StyledContainerhijo>
                  <StyledrexroGrnde> 
                    
                  </StyledrexroGrnde>
                </StyledContainer2>
        </StyledContainer> //fin padre
    );
}

export default GroupInputs;