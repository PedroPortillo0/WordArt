import styled from "styled-components";

import Battle from '../../assets/img/battle.svg'
import Eyes from '../../assets/img/eyes.svg'
import GuitarLarge from '../../assets/img/guitar-large.svg'
import Guitar from '../../assets/img/guitar.svg'
import HumansLarge from '../../assets/img/humans-large.svg'
import Humans from '../../assets/img/humans.svg'

const StyleContainerImages = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyleImg = styled.img`
    padding: 2px 10px;
`;

function CarruseImgMol() {
    return ( 
    <StyleContainerImages>
        <div>
            <StyleImg src={Humans}/>
        </div>
        <div>
            <div>
                <StyleImg src={Battle}/>
                <StyleImg src={GuitarLarge}/>
            </div>
            <div>
                <StyleImg src={Guitar}/>
                <StyleImg src={Eyes}/>
                <StyleImg src={HumansLarge}/>
            </div>
        </div>
    </StyleContainerImages> );
}

export default CarruseImgMol;