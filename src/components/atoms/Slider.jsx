import styled from "styled-components";

const StyleDiv = styled.div`
    position: relative;
    width: 100%;
    height: 2.5em;
    border-radius:25px 25px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyleLine = styled.div`
    background-color: #091F84;
    width: 36px;
    height: 5px;
    border-radius: 10px;
`;
function Slider({className}) {
    return ( 
    <StyleDiv className={className}>
        <StyleLine/>
    </StyleDiv> );
}

export default Slider;