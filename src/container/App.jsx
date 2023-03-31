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
import RegistroProfesor from '../pages/RegistroProfesor';
import Filtro from '../pages/Filtro';
import LoginProfe from '../pages/LoginProfe';
import Filtro2 from '../components/organism/Filtro/Filtro2';
import Filtro2Dato from '../components/organism/Filtro/Filtro2Dato';
import MenuProfesores from '../pages/MenuProfesores';
import { Provider } from 'react-redux'
import Store from '../redux/store/Store';


function App() {
    return ( 
        <BrowserRouter>
            <Provider store={Store}>
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
                    <Route path="/MenuProfesores" element={<MenuProfesores/>}/> 
                    <Route path="/resultadoDanza" element={<Danza/>}/>
                    <Route path="/resultadoPintura" element={<Pintura/>}/>
                    <Route path="/PorPagar" element={<PorPagar/>}/>
                    <Route path="/pagar" element={<PasarelaDePagos/>}/>
                    <Route path="/registroProfesores" element={<RegistroProfesor/>}/>
                    <Route path="/filtro" element={<Filtro/>}/>
                    <Route path="/loginprofesor" element={<LoginProfe/>}/>
                    <Route path="/filtro2" element={<Filtro2/>}/>
                    <Route path="/filtro2Dato" element={<Filtro2Dato/>}/>
                    <Route path="/*" element={<NotFound/>} />
                </Routes>
            </Provider>
        </BrowserRouter> 
     );
}

export default App;