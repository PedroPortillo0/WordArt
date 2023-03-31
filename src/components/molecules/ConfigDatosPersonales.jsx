import go from '../../assets/img/icons/go.png';

function ConfigDatosPersonales({nameLastname, phone}) {
    return ( 
        <div className="datos-personales">
            <h2>Datos personales</h2>
            <div>
                <h6>Nombre y apellido</h6>
                <div>
                    <label>{nameLastname}</label>
                    <img src={go}/> 
                </div>
            </div>
            <div>
                <h6>Telefono</h6>
                <div>
                    <label>{phone}</label>
                    <img src={go}/> 
                </div>
            </div>
        </div>
     );
}

export default ConfigDatosPersonales;