import { Link } from 'react-router-dom';
import LogoGeneral from '../../atoms/LogoGeneral'

function HeaderHomePage() {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    const presionado = () =>{
        nav.classList.add("visible")

    }
    const ClickCerrar = () =>{
        nav.classList.remove("visible")
    }
    return ( 
        <div className="headerHP">
            <div className='header-content-HP'>
                <LogoGeneral/>
                <div>
                   <Link to={"/configuracion2"}><i class="bi bi-gear-fill"/></Link>

                </div>
            </div>
        </div>
     );
}

export default HeaderHomePage;