import styled from 'styled-components';

const StyledButton = styled.button`
background: linear-gradient(90deg, rgba(48, 191, 206, 0.8) 0.29%, rgba(48, 191, 206, 0.6) 50.52%, rgba(48, 191, 206, 0.5) 100%);
 width: 100%;
 height: 100%;
 font-size: 25px;
line-height: 25px;
border-radius: 25px;
color: white;
font-family: Comfortaa;
border: 0px;


`;

function Button() {
    return (  
        <StyledButton >
           Entrar
        </StyledButton>
        
    );
}

export default Button;