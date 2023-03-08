import Label from "../atoms/Label";
import Input from "../atoms/Input";
import styled from "styled-components";
import Button from "../atoms/Button";

const StyledWapperInput = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
/* border: 2px solid red; */
/* align-items: left; */
justify-content: center;
/* display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid red;
width: 450px;
margin: 0 auto;
margin-top: 200px; */
`

function WapperInput({msn, type, placeholder}) {
    return ( 
        <StyledWapperInput>
            <Label msn={msn}/>
            <Input type={type} placeholder={placeholder}/>
        </StyledWapperInput>
     );
}

export default WapperInput;