import styled from 'styled-components';

const StyledTitle = styled.label`
font-family: Comfortaa;
font-size: 30px;
line-height: 30px;

`;function Title({msn}) {

    return ( 
        <StyledTitle>{msn}</StyledTitle>

     );
}

export default Title;