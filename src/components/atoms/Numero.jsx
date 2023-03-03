import styled from "styled-components";

const StyleDiv = styled.div`
    margin-top: 3%;
    display: flex;
    margin-left: 20%;
`;

function Numero({src, msg}) {
    return ( 
    <StyleDiv>
        <img src={src}/>
        <p>{msg}</p>
    </StyleDiv> );
}

export default Numero;