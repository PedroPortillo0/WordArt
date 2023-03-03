import styled from "styled-components";
import Label from "../atoms/LabelHeader";

function WrapperLabelHeader({msg}) {
    return ( 
        <div className="WrapperLabel">
            <Label msg={msg}></Label>
        </div>
     );
}

export default WrapperLabelHeader;