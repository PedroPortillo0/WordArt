import styled from "styled-components";
import '../../assets/styles/Header.css';

const StyleLabel = styled.label`
    color: white;
    font-family: 'Comfortaa', cursive;
    font-style: normal;
    font-weight: 100;
    text-decoration: none;
`;

function Label({msg}) {
    return ( 
            <StyleLabel className="label">{msg}</StyleLabel>
     );
}

export default Label;