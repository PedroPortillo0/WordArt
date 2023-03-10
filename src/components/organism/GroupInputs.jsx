import styled from 'styled-components';
import WrapperlInput from '../molecules/WrapperInput'
import Button from '../atoms/Button';

const StyledContainer = styled.div` //padre
border: 2px solid green;
width:100%;
height:100%;
padding-top: 20%;
justify-content:center;
border-radius: 8px;
align-items:center;
display:flex;
`;

const StyledInputGroup = styled.div` //hijo1
border: 2px solid red;
width:50%;
justify-content:center;
 border-radius: 8px;
 align-items:center;
display:flex;
flex-direction:column;
`;
const StyledFrent = styled.div` //hijo1
border: 2px solid red;
width:50%;
justify-content:center;
 border-radius: 8px;
 align-items:center;
display:flex;
flex-direction:column;
`;

const StyledContainer2 = styled.div` //hijo2
    border: 2px solid blue;
    width:50%;
    background: linear-gradient(90deg, rgba(48, 191, 206, 0.8) 0.29%, rgba(48, 191, 206, 0.6) 50.52%, rgba(48, 191, 206, 0.5) 100%);
    justify-content:center;
    border-radius: 8px;
    align-items:center;
    display:flex;
    flex-direction:column;
`;

function GroupInputs() {
    return (
        //padre
        <StyledContainer>
            <StyledInputGroup >
                <WrapperlInput msn="correo:" type="email"/>
                <WrapperlInput msn="contraseña:" type="password"/>
                <Button>Iniciar Sesión</Button>
            </StyledInputGroup >

            <StyledContainer2>
            
            </StyledContainer2>
        </StyledContainer> //fin padre
    );
}

export default GroupInputs;