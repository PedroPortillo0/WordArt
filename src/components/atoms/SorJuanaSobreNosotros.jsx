import styled from "styled-components";
import Juana from '../../assets/img/SorJuana.svg';

const StyleImg = styled.img`
    width: 100%;
    padding: 0 80px;
`;


function SorJuanaAtom() {
    return ( <div>
        <StyleImg src={Juana}/>
    </div> );
}

export default SorJuanaAtom;
