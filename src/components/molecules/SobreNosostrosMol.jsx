import Label from "../atoms/LabelHeader";
import PuntosSobreNosotros from "../atoms/PuntosSobreNosotros";
import styled from "styled-components";

const StyleP = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');
    font-family: 'Comfortaa', cursive;
    font-style: bold;
    width: 100%;
    text-align: justify;
`;

const StyleDiv = styled.div`
 width: 32%;
`;

function SobreNosotrosMol({msg}) {
    return ( 
    <StyleDiv>
        <Label msg="Sobre Nosotros"/>
        <StyleP>
        Nosotros somos diseñado para brindar cursos 
        dedicados al arte, 
        los cuales tenemos las siguientes secciones:
        </StyleP>
        <PuntosSobreNosotros msg="1. Musica"/>
        <PuntosSobreNosotros msg="2. Teatro"/>
        <PuntosSobreNosotros msg="3. Pintura"/>
        <PuntosSobreNosotros msg="4. Danza"/>
        <StyleP>Aqui encontraras expertos dedicados a cada una de las areas
            especificas.
        </StyleP>
    </StyleDiv> );
}

export default SobreNosotrosMol;