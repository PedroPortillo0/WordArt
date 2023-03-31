import LabelGeneral from "../../atoms/LabelGeneral";
import vacio from '../../../assets/img/icons/user.png'
import alumno from '../../../assets/img/icons/alumno.png'
import { useEffect, useState } from "react";
import {useSelector} from 'react-redux';
function User() {
    const user = useSelector(state => state.user)

    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const response = await fetch("http://34.205.213.60/profesor/getAll");
          const result = await response.json();
          setData(result);
        }
        fetchData();
      }, []);
    return ( 
        <div className="container-user">
            <div className="container-user-2">
                    <div className="name-estado">
                        <LabelGeneral msg={user.user.usuario}/>
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