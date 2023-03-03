import styled from "styled-components";

const StyleDiv = styled.div`
    width: 100%;
    height: 120px;
    background-color:#FAA41B;
    text-decoration-line:underline;
    font-family: 'Comfortaa', cursive;
    font-size: 2em;
    color: white;
    font-weight: 200;
    text-align: center;
    align-items:center;
    align-content: center;
`;

const StyleDiv2 = styled.div`
    text-align: center;
    margin-top: 40px;
`;

function ButtonRedireccion() {
    return (
    <StyleDiv>
        <StyleDiv2>Conoce más</StyleDiv2>
    </StyleDiv> );
}

export default ButtonRedireccion;