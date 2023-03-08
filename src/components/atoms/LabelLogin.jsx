import styled from 'styled-components';

const StyledLabel = styled.label`
font-family: Comfortaa;
font-size: 30px;
font-size: 20px;
line-height: 30px;

`;

function Label({msn}) {
    return ( 
        <StyledLabel>{msn}</StyledLabel>
     );
}

export default Label;
