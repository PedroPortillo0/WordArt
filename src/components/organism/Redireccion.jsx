import StyleDiv from '../atoms/ButtonRedireccion'

import styled from 'styled-components';

const StyleRedireccion = styled.div`
    margin-top: 12%;
    display: flex;
    text-align: center;
    align-items: center;
`;

function Redireccion() {
    return ( 
        <StyleRedireccion>
            <StyleDiv/>
        </StyleRedireccion>
     );
}

export default Redireccion;