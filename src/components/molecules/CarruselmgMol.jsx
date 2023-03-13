import { Link } from "react-router-dom";
import styled from "styled-components";

import slider1 from '../../assets/img/slider1-1.svg';
import slider2 from '../../assets/img/slider1-2.svg';
import slider3 from '../../assets/img/slider1-3.svg';
import slider4 from '../../assets/img/slider1-4.svg';

import slider21 from '../../assets/img/slider2-1.svg';
import slider22 from '../../assets/img/slider2-2.svg';
import slider23 from '../../assets/img/slider2-3.svg';
import slider24 from '../../assets/img/slider2-4.svg';

import slider31 from '../../assets/img/slider3-1.svg';
import slider32 from '../../assets/img/slider3-2.svg';
import slider33 from '../../assets/img/slider3-3.svg';
import slider34 from '../../assets/img/slider3-4.svg';

import slider41 from '../../assets/img/slider4-1.svg';
import slider42 from '../../assets/img/slider4-2.svg';
import slider43 from '../../assets/img/slider4-3.svg';
import slider44 from '../../assets/img/slider4-4.svg';

import slider51 from '../../assets/img/slider5-1.svg';
import slider52 from '../../assets/img/slider5-2.svg';
import slider53 from '../../assets/img/slider5-3.svg';
import slider54 from '../../assets/img/slider5-4.svg';

import slider61 from '../../assets/img/slider6-1.svg'
import slider62 from '../../assets/img/slider6-2.svg'
import slider63 from '../../assets/img/slider6-3.svg'
import slider64 from '../../assets/img/slider6-4.svg'

import '../../assets/styles/LandingPage/CarruselImgLandingPage.css'

const StyleContainerImages = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyleCon2Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const StyleCon3Div = styled.div`
    width: 100%;
    display: flex;
`;

function CarruseImgMol() {
    return ( 
    <StyleContainerImages>
        <div className="slider1">
            <ul>
                <li><img className="carruselImg" src={slider1}/></li>
                <li><img className="carruselImg" src={slider3}/></li>
                <li><img className="carruselImg" src={slider2}/></li>
                <li><img className="carruselImg" src={slider4}/></li>
            </ul>
        </div>

        <div className="container20">
            <StyleCon2Div>
                <div className="slider2">
                    <ul>
                        <li><img className="carruselImg" src={slider21}/></li>
                        <li><img className="carruselImg" src={slider22}/></li>
                        <li><img className="carruselImg" src={slider23}/></li>
                        <li><img className="carruselImg" src={slider24}/></li>
                    </ul>
                </div>
                <div className="slider3">
                    <ul>
                        <li><img className="carruselImg" src={slider31}/></li>
                        <li><img className="carruselImg" src={slider32}/></li>
                        <li><img className="carruselImg" src={slider33}/></li>
                        <li><img className="carruselImg" src={slider34}/></li>
                    </ul>
                </div>
            </StyleCon2Div>

            <StyleCon3Div>
                <div className="slider4">
                    <ul>
                        <li><img className="carruselImg" src={slider42}/></li>
                        <li><img className="carruselImg" src={slider43}/></li>
                        <li><img className="carruselImg" src={slider44}/></li>
                        <li><img className="carruselImg" src={slider41}/></li>
                    </ul>
                </div>
                <div className="slider5">
                    <ul>
                        <li><img className="carruselImg" src={slider51}/></li>
                        <li><img className="carruselImg" src={slider52}/></li>
                        <li><img className="carruselImg" src={slider53}/></li>
                        <li><img className="carruselImg" src={slider54}/></li>
                    </ul>
                </div>
                <div className="slider6">
                    <ul>
                        <li><img className="carruselImg" src={slider63}/></li>
                        <li><img className="carruselImg" src={slider61}/></li>
                        <li><img className="carruselImg" src={slider62}/></li>
                        <li><img className="carruselImg" src={slider64}/></li>
                    </ul>
                </div>
            </StyleCon3Div>
        </div>
        <div className="carruselImg">
            <Link to="/login" />
        </div>
    </StyleContainerImages>
    );
}

export default CarruseImgMol;