import ImgCard from "../atoms/ImgCard";
import TitleCard from "../atoms/TitleCard";
import LikeCard from '../atoms/LikeCard';
import ImgCardCAtom from "../atoms/ImgCardCAtom";
import ContenidoCards from "../atoms/ContenidoCads";

import Profile2 from '../../assets/img/profile2.svg';
import LikeCard1 from '../../assets/img/like.svg';
import Teatro from '../../assets/img/card-teatro.svg';

import styled from "styled-components";

const StyleContainerCard = styled.div`
    background-color: green;
    width: 446px;
    height: 463px;  
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    background: linear-gradient(180deg, rgba(117, 215, 240, 0.7) 0%, rgba(117, 215, 240, 0.1) 100%);
    border-radius: 20px;    
    margin-left: 7%;
`;
const StyleDivHeader = styled.div`
    display: flex;
    padding: 20px 20px;
`;

const StyleDivHeaUni = styled.div`
    display:flex;
    text-align: center;
    align-items: center;
`;

function CardMol2() {
    return (
    <StyleContainerCard>
            <StyleDivHeader>
                <StyleDivHeaUni>
                    <ImgCard src={Profile2}/>
                    <TitleCard msg="Teatro"/>
                </StyleDivHeaUni>
                <LikeCard src={LikeCard1}/>
            </StyleDivHeader>
            <div>
                <ImgCardCAtom src={Teatro}/>
            </div>
            <div>
                <ContenidoCards msgTitle="Teatro y Artes escenicas" contenido="En WorldArt queremos brindarte la mejor 
                formación, impartida por centros que se destacan por su profesionalismo y experiencia. Es por eso que 
                tenemos el honor de invitarte a ser parte de la Maestría en Teatro y Artes Escénicas de WordlArt que te 
                proporcionará una formación avanzada"/>
            </div>
    </StyleContainerCard> );
}

export default CardMol2;