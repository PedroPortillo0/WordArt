import LogoGeneral from '../../atoms/LogoGeneral'
import settings from '../../../assets/img/icons/settings.png'

import { Link } from 'react-router-dom';
function HeaderHomePage() {
    return ( 
        <div className="headerHP">
            <div className='header-content-HP'>
                <LogoGeneral/>
                <div>
                    <Link to="/configuraciones"><img className='settingsHP' src={settings}/></Link>
                </div>
            </div>
        </div>
     );
}

export default HeaderHomePage;