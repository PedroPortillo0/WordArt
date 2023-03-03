import styled from "styled-components";

const  StylePuntos = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');
    font-family: 'Comfortaa', cursive;
    font-style: normal;
    font-weight: 600;
    font-size:15px;
    padding: 10px 0;
`;

function PuntosSobreNosotros({msg}) {
    return ( 
        <StylePuntos>{msg}</StylePuntos>
     );
}

export default PuntosSobreNosotros;