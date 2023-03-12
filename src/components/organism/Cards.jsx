import styled from "styled-components";
import CardMol1 from "../molecules/CardMol1";
import CardMol2 from "../molecules/CardMol2";
import CardMol3 from "../molecules/CardMol3";
import CardMol4 from "../molecules/CardMol4";

const StyleCards1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const StyleCards2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyleCardsContainer = styled.div`
    margin-top: -15%;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

function Cards() {
    return ( 
    <StyleCardsContainer>
        <StyleCards1>
            <CardMol1/>
            <CardMol2/>
        </StyleCards1>
        <StyleCards2>
            <CardMol3/>
            <CardMol4/>
        </StyleCards2>
    </StyleCardsContainer> );
}

export default Cards;