import ButtonSalirA from '../atoms/ButtonSalir'

import '../../assets/styles/Configuracion/FromConfiguracionProf.css'

function ButtonSalirProfesor() {
    return ( 
        <div className='configuracion-button-salir'>
            <ButtonSalirA to="/filtro2 " className="buttonSalir"/>
        </div>
     );
}

export default ButtonSalirProfesor;