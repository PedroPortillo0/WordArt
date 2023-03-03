import styled from 'styled-components';


const StyledInput = styled.input`
 border: 2px solid black;
 width: 446px;
 height: 52px;
 border-radius: 8px;
`;

function Input({type}){
    return(
        <StyledInput type={type}  />
    )
}

export default Input;