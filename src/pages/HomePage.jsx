import HeaderHomePage from "../components/organism/HomePage/HeaderHomePage";
import Separador from "../components/atoms/Separador";
import User from "../components/organism/HomePage/User";

import '../assets/styles/HomePage/HomePage.css'
import Recomendaciones from "../components/organism/HomePage/Recomendaciones";
import Cursos from "../components/organism/HomePage/Cursos";
import URDesk from "../components/organism/HomePage/URDesk";
function HomePage() {
    return ( 
        <>
            <HeaderHomePage/>
            <Separador/>
            <User/>
            <URDesk/>
            <Separador/>
            <Recomendaciones/>
            <Separador/>
            <Cursos/>
        </>
     );
}

export default HomePage;