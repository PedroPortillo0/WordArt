import styled from "styled-components";

import HeaderBackground from '../../../assets/img/HeaderBackground.svg'

const StyleImg = styled.img`
    width: 100%;
    position: static;
`;

function BackgroundHeader() {
    return ( 
        <StyleImg src={HeaderBackground}/>
    );
}

export default BackgroundHeader;