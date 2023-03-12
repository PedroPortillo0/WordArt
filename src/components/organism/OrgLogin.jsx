import styled from 'styled-components';
import WrapperlInput from '../molecules/WrapperInput'
import Button from '../atoms/Button';

// const StyledContainer = styled.div` //padre
//     background-color: #18f72a;
// border: 2px solid green;
// width:100%;
// height:100%;
// padding-top: 20%;
// justify-content:center;
// border-radius: 8px;
// align-items:center;
// display:flex;
// `;

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

const StyledContainer2 = styled.div`    
    background-color: red;
    width:50%;
    display: flex;
    justify-content: center;
`;
const StyleCubo = styled.div`
    width:50%;
    height: 50%;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 4px 7px 15px rgba(0, 0, 0, 0.08), inset -1px 4px 2px rgba(201, 201, 201, 0.1), inset -5px 5px 12px rgba(255, 255, 255, 0.05), inset 5px -5px 12px rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(75px);
`;


const StyleContainer = styled.div`
    display: flex;
    background: linear-gradient(90deg, rgba(48, 191, 206, 0.8) 0.29%, rgba(48, 191, 206, 0.6) 50.52%, rgba(48, 191, 206, 0.5) 100%);
    width: 50%;
`;
function OrgLogin() {
    return (
        <StyleContainer>
             <StyledContainer2>
               
            </StyledContainer2>
            <StyledInputGroup >
                <StyleCubo>
                    <p>El arte consiste en celebrar, cantar, lelvar a cabo la belleza</p>
                </StyleCubo>
                {/* <WrapperlInput msn="correo:" type="email"/>
                <WrapperlInput msn="contraseña:" type="password"/>
                <Button>Iniciar Sesión</Button> */}
            </StyledInputGroup >
        </StyleContainer>
    );
}

export default OrgLogin;