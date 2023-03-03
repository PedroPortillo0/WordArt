import styled from "styled-components";

const StyleLabel = styled.label`


@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');
    padding:10px 50px;
    color: white;
    font-family: 'Comfortaa', cursive;
    font-style: normal;
    font-weight: 100;
    font-size: 24px;
    line-height: 27px;
`;

function Label({msg}) {
    return ( 
        <div>
            <StyleLabel>{msg}</StyleLabel>
        </div>
     );
}

export default Label;