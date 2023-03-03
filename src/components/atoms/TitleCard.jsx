import styled from "styled-components";

const StyleH2 = styled.h2`
    margin-left:15px;
    font-family: 'Comic Neue', cursive;
`;

function TitleCard({msg}) {
    return ( <StyleH2>{msg}</StyleH2> );
}

export default TitleCard;