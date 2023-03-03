import styled from "styled-components";

const StyleImg = styled.img`
    width: 40px;
`;

function ImgCard({src}) {
    return ( <StyleImg src={src}/> );
}

export default ImgCard;