import WrapperlInput from "../molecules/WrapperInput";
import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import "../../assets/styles/FormLogin.css";
import styled from 'styled-components';

const StyledWrapperButton = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
width:100%;
border: 2px solid yellow;
`;
const StyledWrapperDad = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
width:50%;

border: 4px solid black;
`;

function FormLogin() {
    return (  
        <form >
            <div className="padre">  
            <StyledWrapperDad>       
                <div className="hijo1">
                        <Logo/>
                    <div>
                        <WrapperlInput 
                            msn="correo:"
                            type="text"
                        />
                    </div>
                    <div>
                        <WrapperlInput 
                            msn="contraseña:"
                            type="password"
                        />
                    </div>   
                    
                    <StyledWrapperButton>
                    <Button/> 
                    </StyledWrapperButton> 
                    
                    <p>¿No tienes una cuenta? <Link to="/register"> registrate</Link> </p>
                </div>
                </StyledWrapperDad>

                <div className="hijo2">
                
                <div>
                    <h1>Holaa</h1>
                </div>
                 </div>
               
            </div>
            

        </form>
    );
}

export default FormLogin;
