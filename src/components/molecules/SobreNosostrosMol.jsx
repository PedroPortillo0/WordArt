import Label from "../atoms/LabelHeader";
import PuntosSobreNosotros from "../atoms/PuntosSobreNosotros";
import styled from "styled-components";

import '../../assets/styles/LandingPage/SobreNosotros.css'

const StyleP = styled.p`
    font-family: 'Comfortaa', cursive;
    font-style: bold;
    width: 100%;
    text-align: justify;
`;



function SobreNosotrosMol({msg}) {
    return ( 
    <div className="contenido-text">
        <Label msg="Sobre Nosotros"/>
        <StyleP>
        Nosotros somos diseñado para brindar cursos 
        dedicados al arte, 
        los cuales tenemos las siguientes secciones:
        </StyleP>
        <PuntosSobreNosotros  msg="1. Musica"/>
        <PuntosSobreNosotros  msg="2. Teatro"/>
        <PuntosSobreNosotros  msg="3. Pintura"/>
        <PuntosSobreNosotros  msg="4. Danza"/>
        <StyleP>Aqui encontraras expertos dedicados a cada una de las areas
            especificas.
        </StyleP>
    </div> );
}

export default SobreNosotrosMol;