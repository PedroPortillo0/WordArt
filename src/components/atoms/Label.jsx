import styled from 'styled-components';

const StyledLabel = styled.label`
font-weight: bold;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`;

function Label({msn}) {
    return ( 
        <StyledLabel>{msn}</StyledLabel>
     );
}

export default Label;