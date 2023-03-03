import styled from "styled-components";

const StyleConCards = styled.div`
    padding: 7px 18px;
    text-align: justify;
    font-family: 'Comfortaa', cursive;
    font-size: 14px;
`;

const StyleH2 = styled.h2`
    font-family: 'Comfortaa', cursive;
    font-weight: bold;
    margin-bottom: 2.7%;
`;

function ContenidoCards({msgTitle, contenido}) {
    return (
    <StyleConCards>
        <StyleH2>{msgTitle}</StyleH2>
        <p>{contenido}</p>
    </StyleConCards> );
}

export default ContenidoCards;