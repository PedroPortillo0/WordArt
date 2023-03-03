import styled from "styled-components";

const StyleH4 = styled.h4`
    font-family: 'Comfortaa', cursive;
    font-weight: 400;
    margin-top: 6%;
`;


function ApartadoPie({msg}) {
    return ( <StyleH4>{msg}</StyleH4> );
}

export default ApartadoPie;