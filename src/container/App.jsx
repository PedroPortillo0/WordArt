import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from '../pages/NotFound'
import LandingPage from "../pages/LandingPage";
import RecuperarContraseña from '../pages/RecuperarContraseña';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ConfiguracionProfesor from '../pages/ConfiguracionProfesor';
import ConfiguracionUsuario from '../pages/ConfiguracionUsuario';
import Musica from '../pages/Musica';
import Teatro from '../pages/Teatro';
import Danza  from '../pages/Danza';
import Pintura from '../pages/Pintura';
import PorPagar from '../pages/PorPagar';
import HomePage from '../pages/HomePage';
import PasarelaDePagos from '../pages/PasarelaDePagos';
import MenuProfesores from '../pages/MenuProfesores';
import RegistroProfesor from '../pages/RegistroProfesor';
import Filtro from '../pages/Filtro';


function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/recuperarContraseña" element={<RecuperarContraseña/>} />
                <Route path="/homepage" element={<HomePage/>}/>
                <Route path="/configuracion1" element={<ConfiguracionProfesor/>}/>
                <Route path="/configuracion2" element={<ConfiguracionUsuario/>}/>   
                <Route path="/resultadoMusica" element={<Musica/>}/>  
                <Route path="/resultadoTeatro" element={<Teatro/>}/> 
                <Route path="/resultadoDanza" element={<Danza/>}/>
                <Route path="/resultadoPintura" element={<Pintura/>}/>
                <Route path="/PorPagar" element={<PorPagar/>}/>
                <Route path="/pagar" element={<PasarelaDePagos/>}/>
                <Route path="/menuProfesores" element={<MenuProfesores/>}/>
                <Route path="/registroProfesores" element={<RegistroProfesor/>}/>
                <Route path="/filtro" element={<Filtro/>}/>



                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter> 
     );
}

export default App;