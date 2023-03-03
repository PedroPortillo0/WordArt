import Numero from "../atoms/Numero";
import WhatApp from '../../assets/img/WhatsApp.svg';

import styled from "styled-components";

const StyleContacto = styled.div`
    width: 30%;
    font-family: 'Comfortaa', cursive;
    text-align: center;
`;

function Contacto() {
    return ( 
        <StyleContacto>
            <h3>Contactos:</h3>
            <Numero src={WhatApp} msg="555-555-5555"/>
            <Numero src={WhatApp} msg="555-555-5555"/>
        </StyleContacto>
     );
}

export default Contacto;