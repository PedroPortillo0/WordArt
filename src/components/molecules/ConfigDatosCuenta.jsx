import go from '../../assets/img/icons/go.png';

function ConfigDatosCuenta({email, password}) {
    return ( 
        <div className="datos-cuenta">
            <h2>Datos de cuenta</h2>
            <div>
                <h6>Correo</h6>
                <div>
                    <label>{email}</label>
                    <img src={go}/> 
                </div>
            </div>
            <div>
                <h6>Contraseña</h6>
                <div>
                    <label>{password}</label>
                    <img src={go}/> 
                </div>
            </div>
        </div>
     );
}

export default ConfigDatosCuenta;