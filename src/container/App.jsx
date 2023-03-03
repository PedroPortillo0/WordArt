import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from '../pages/NotFound'
import LandingPage from "../pages/LandingPage";
import RecuperarContraseña from '../pages/RecuperarContraseña';

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/recuperarContraseña" element={<RecuperarContraseña/>} />
                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter> 
     );
}

export default App;