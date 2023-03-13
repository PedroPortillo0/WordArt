import styled from "styled-components";
import CarruseImgMol from '../../molecules/CarruselmgMol'

const StyleCarruselImages = styled.div`
    margin-top: -12%;
`;

function CarruseImg() {
    return ( 
        <StyleCarruselImages>
            <CarruseImgMol/>
        </StyleCarruselImages>
     );
}

export default CarruseImg;