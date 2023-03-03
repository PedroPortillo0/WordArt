import styled from "styled-components";

const StyleDiv = styled.div`
    margin-top:7%;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const StyleH2 = styled.h2`
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');
    font-family: 'Comfortaa', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 33px;
    text-align: center;
    color: #FAA41B;
`;

const StyleP = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300&display=swap');
    font-family: 'Comic Neue', cursive;;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #000000;
    margin-top:1%;
`;

function Oferta() {
    return ( 
    <StyleDiv>
        <StyleH2>Ofrecemos cursos de musica, teatro, pintura y danza</StyleH2>
        <StyleP>WordlArt esta capacitado con los mejores profesores
             en cada una de las areas que puedas encontrar  </StyleP>
    </StyleDiv> );
}

export default Oferta;