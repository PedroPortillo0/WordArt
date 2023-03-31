import go from '../../assets/img/icons/go.png';

function ConfigDatosPersonalesUser({nameLastname, username}) {
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
                <h6>Nombre de usuario</h6>
                <div>
                    <label>{username}</label>
                    <img src={go}/> 
                </div>
            </div>
        </div>
     );
}

export default ConfigDatosPersonalesUser;