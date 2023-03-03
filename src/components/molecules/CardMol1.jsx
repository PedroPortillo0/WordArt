import ImgCard from "../atoms/ImgCard";
import TitleCard from "../atoms/TitleCard";
import LikeCard from '../atoms/LikeCard'
import ImgCardCAtom from "../atoms/ImgCardCAtom";
import ContenidoCards from "../atoms/ContenidoCads";

import Profile1 from '../../assets/img/profile.svg'
import LikeCard1 from '../../assets/img/like.svg';
import CardVio from '../../assets/img/card-violin.svg'

import styled from "styled-components";

const StyleContainerCard = styled.div`
    width: 329px;
    height: 467px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.543);
    border-radius: 20px;
    margin-right: 7%;
    margin-top: 10%;
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

function CardMol1() {
    return ( 
    <StyleContainerCard>
            <StyleDivHeader>
                <StyleDiverHeaderUni>
                    <ImgCard src={Profile1}/>
                    <TitleCard msg="Musica"/>
                </StyleDiverHeaderUni>
                <LikeCard src={LikeCard1}/>
            </StyleDivHeader>
            <div>
                <ImgCardCAtom src={CardVio}/>
            </div>
            <div>
                <ContenidoCards msgTitle="Violin" contenido="Disfrutar tu tiempo tocando el
                 violín es posible, con el sistema de educación musical más difundido en 
                 más de 40 países. WorldArt te ofrece un aprendizaje integral, por nota, y con metodología para hacer de tu aprendizaje más confiable,
                 seguro y ágil, con maestros altamente capacitados"/>
            </div>
    </StyleContainerCard> );
}

export default CardMol1;