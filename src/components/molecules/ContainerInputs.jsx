import Button from "../atoms/Button";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import styled from 'styled-components';

const StyledWrapperInput = styled.div`
display:flex;
justify-content:center;
align-items:flex-start;
flex-direction: column;
`;


const ContainerInputs = () => {
    return (
    <StyledWrapperInput>
        <Label msn="Email"></Label>
        <Input type={type}/>
    </StyledWrapperInput>
      );
}
 
export default ContainerInputs;