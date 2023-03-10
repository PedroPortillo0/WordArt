import ImgCard from "../atoms/ImgCard";
import TitleCard from "../atoms/TitleCard";
import LikeCard from '../atoms/LikeCard';
import ImgCardCAtom from "../atoms/ImgCardCAtom";
import ContenidoCards from "../atoms/ContenidoCads";

import Profile3 from '../../assets/img/profile3.svg';
import LikeCard1 from '../../assets/img/like.svg';
import CardPintura from '../../assets/img/card-pintura.svg';

import styled from "styled-components";

const StyleContainerCard = styled.div`
    background-color: green;
    width: 446px;
    height: 463px;  
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    background: linear-gradient(180deg, rgba(154, 210, 139, 0.7) 0%, rgba(154, 210, 139, 0.1) 100%);
    border-radius: 20px;    
    margin-right: 7%;
    margin-top: 12%;
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

function CardMol3() {
    return (
        <StyleContainerCard>
            <StyleDivHeader>
                <StyleDivHeaUni>
                    <ImgCard src={Profile3}/>
                    <TitleCard msg="Pintura"/>
                </StyleDivHeaUni>
                <LikeCard src={LikeCard1}/>
            </StyleDivHeader>
            <div>
                <ImgCardCAtom src={CardPintura}/>
            </div>
            <div>
                <ContenidoCards msgTitle="Pintura en acuarela" contenido="En este curso 
                de acuarela aprenderás a utilizar las principales técnicas de pintura en 
                acuarelas, para llevar a cabo la elaboración de una obra artística. 
                Es fácil de aprender y solo se requiere tener conocimientos elementales."/>
            </div>
        </StyleContainerCard>
     );
}

export default CardMol3;