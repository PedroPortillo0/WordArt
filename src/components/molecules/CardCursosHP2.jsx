import LabelGeneral from "../atoms/LabelGeneral";

import { Link } from "react-router-dom";
function CardCursosHP2({msg, src}) {
    return ( 
        <div className="container-card-HP">
            <div className="card-HP">
                <div>
                    <LabelGeneral msg={msg}/>
                </div>
                <div>
                    <img className="img-card-hp" src={src}/>
                </div>
                <Link to="/pintura" >
                    <div>
                        <button className="ver-mas-HP">Ver más</button>
                    </div>
                </Link>
            </div>
        </div>
     );
}

export default CardCursosHP2;