import ButtonSalirA from '../atoms/ButtonSalir'

import '../../assets/styles/Configuracion/FromConfiguracionProf.css'

function ButtonSalir() {
    return ( 
        <div className='configuracion-button-salir'>
            <ButtonSalirA to="/login " className="buttonSalir"/>
        </div>
     );
}

export default ButtonSalir;