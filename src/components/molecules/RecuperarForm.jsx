import styled from "styled-components";

import Regresar from '../../assets/img/regresar.svg';

const StyleForm = styled.form`
    margin-top: 5%;
    display: flex;
    justify-content: center;
`;

const StyleDiv = styled.div`
    font-family: 'Comfortaa', cursive;
    width: 90%;
    padding: 10px 30px;
`;

const StyleDivTitle = styled.div`
    display: flex;
    text-align: justify;
    font-weight: 700;
    margin-bottom: 2%;
    font-size: 1.3em;
`;

const StyleInput = styled.input`
    display: flex;
    text-align: justify;
    width: 100%;
    height: 50px;
    padding: 9px 17px;
    border-radius: .5em;
`;

const StyleButtom = styled.button`
    font-family: 'Comfortaa', cursive;
    font-size: 1.3em;
    margin-top: 7%;
    padding: 0px;
    gap: 10px;
    width: 100%;
    height: 25%;
    background-color: #30BFCE;
    border: none;
    color: white;
    border-radius: 2em;
`;

const StyledA = styled.div`
    display: flex;
    text-decoration: underline;
    margin-top: 6%;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

function RecuperarForm() {
    return ( 
        <StyleForm action="">
            <StyleDiv>
                <StyleDivTitle>
                    <label>Escribe tu email:</label>
                </StyleDivTitle>
                <div>
                    <StyleInput type="text" placeholder="Nombre" />
                </div>
                <StyleButtom>Restablecer contraseña</StyleButtom>
                <StyledA>
                        <img src={Regresar}/>
                        <p>Atras para iniciar sesión</p>
                </StyledA>
                
            </StyleDiv>
            
        </StyleForm>
     );
}

export default RecuperarForm;