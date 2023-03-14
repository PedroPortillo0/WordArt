import styled from "styled-components";
import CardMol1 from "../../molecules/CardMol1";
import CardMol2 from "../../molecules/CardMol2";
import CardMol3 from "../../molecules/CardMol3";
import CardMol4 from "../../molecules/CardMol4";

import '../../../assets/styles/LandingPage/Cards.css';

function Cards() {
    return ( 
    <div className="cards">
        <div className="container-cards-1">
            <div className="container-cards">
                <CardMol1/>
                <CardMol2/>
            </div>
            <div className="container-cards">
                <CardMol3/>
                <CardMol4/>
            </div>
        </div>
    </div> );
}

export default Cards;