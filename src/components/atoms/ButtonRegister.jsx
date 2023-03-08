import styled from "styled-components";

const StyledButton = styled.button`
    display: flex;
    
    border: none;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 5px;
    gap: 10px;
    background: linear-gradient(90.78deg, #30BFCE 0%, rgba(48, 191, 206, 0.58) 100%);
    border-radius: 30px;
    margin-top: 10%;
    font-family: 'Comfortaa';
    font-style: normal;
    font-size: 24px;
    line-height: 27px;
    color: #FFFFFF;

`;
function Button({type, msn}) {
    return ( 
        <StyledButton type={type}>{msn}</StyledButton>
     );
}

export default Button;