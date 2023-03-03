import styled from "styled-components";

const StyleLike = styled.img`
    width: 40px;
    margin-left: 40%;
`;

function LikeCard({src}) {
    return ( <StyleLike src={src}/> );
}

export default LikeCard;