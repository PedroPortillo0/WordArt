
import FondoMovilLogo from '../components/molecules/FondoMovilLogo';
import OrgFiltro from '../components/organism/Filtro/Filtro'
import OrgFiltroDesk from '../components/organism/Filtro/FiltroDesk'
import Filtro2 from '../components/organism/Filtro/Filtro2';
import Filtro2Dato from '../components/organism/Filtro/Filtro2Dato';

function Filtro() {
    return ( 
        <>  
            <FondoMovilLogo/>
            <OrgFiltro/>
            <OrgFiltroDesk/>
            <Filtro2/>
            <Filtro2Dato/>
        </>
     );
}

export default Filtro;