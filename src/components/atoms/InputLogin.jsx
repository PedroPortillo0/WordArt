import styled from 'styled-components';

const StyledInput = styled.input`
 border: 2px solid black;

 width: 100%;
 height: 100%;
 width: 99%;
 height: 50%;
 border-radius: 8px; 
 font-family: Comfortaa;
 font-size: 25px;
line-height: 25px;




`;

function Input({type}){
    return(
        <StyledInput type={type}  />
    )
}

export default Input;