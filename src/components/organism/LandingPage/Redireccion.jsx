import { Link } from 'react-router-dom';

import WrapperLabelHeader from '../../molecules/WrapperLabelHeader';

import '../../../assets/styles/LandingPage/PiePagina.css'


function Redireccion() {
    return ( 
        <Link to="/login" className='Redireccion'>
            <div className='redireccion'>
                <div className='title-redireccion'>
                    <WrapperLabelHeader  msg="Conoce más"/>
                </div>
            </div>
        </Link>
     );
}

export default Redireccion;