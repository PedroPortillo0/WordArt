import ImgCard from "../atoms/ImgCard";
import TitleCard from "../atoms/TitleCard";
import LikeCard from '../atoms/LikeCard'
import ImgCardCAtom from "../atoms/ImgCardCAtom";
import ContenidoCards from "../atoms/ContenidoCads";

import Profile4 from '../../assets/img/profile4.svg';
import LikeCard1 from '../../assets/img/like.svg';
import CardDanza from '../../assets/img/card-danza.svg';

import styled from "styled-components";

const StyleContainerCard = styled.div`
    width: 329px;
    height: 467px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.543);
    border-radius: 20px;
    margin-left: 7%;
`;

const StyleDivHeader = styled.div`
    display:flex;
    margin-top: 5%;
    padding: 20px 20px;
`;

const StyleDiverHeaderUni = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    width: 50%;
`;

function CardMol4() {
    return ( 
    <StyleContainerCard>
        <StyleDivHeader>
            <StyleDiverHeaderUni>
                <ImgCard src={Profile4}/>
                <TitleCard msg="Danza"/>
            </StyleDiverHeaderUni>
            <LikeCard src={LikeCard1}/>
        </StyleDivHeader>
        <div>
            <ImgCardCAtom src={CardDanza}/>
        </div>
        <div>
            <ContenidoCards msgTitle="Danza urbana" contenido="En este curso de danza 
            urbana aprenderás aplicar las técnicas de este tipo de danza y sus respectivas
             denominaciones. Es fácil de aprender y solo se requiere tener conocimientos 
             elementales."/>
        </div>
    </StyleContainerCard> );
}

export default CardMol4;