import LogoOF from '../../assets/img/Logo.svg'
import styled from 'styled-components';

const StyleLogo = styled.img`
    width:10%;
`;

function Logo() {
    return ( 
            <StyleLogo src={LogoOF}/>
     );
}

export default Logo;