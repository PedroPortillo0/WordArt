import LabelGeneral from "../../atoms/LabelGeneral";
import vacio from '../../../assets/img/icons/user.png'
import alumno from '../../../assets/img/icons/alumno.png'
function User() {
    return ( 
        <div className="container-user">
            <div className="container-user-2">
                    <div className="name-estado">
                        <LabelGeneral msg="Cristian Romeo"/>
                        <figure className="circulo"/>
                    </div>
                    <div>
                        <img className="user-vacio" src={vacio}/>
                    </div>
                    <div>
                        <LabelGeneral msg="Alumno" />
                        <img className="icon-alumn" src={alumno}/>
                    </div>
            </div>
        </div>
     );
}

export default User;