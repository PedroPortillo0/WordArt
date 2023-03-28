import ir from '../assets/img/icons/GoBack.png';
import '../assets/styles/MenuProfesores.css';
function MenuProfesores() {
    return (  
        <>
        <nav class="navbar bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="src\assets\img\icons\GoBack.png" class="styleimg"/>
                </a>
            </div>
        </nav>
        <div class="container text-center">
            <div class="row align-items-center">
                <div class="col-3">
                    One of three columns
                </div>
                <div class="col-6">
                    <div class="card text-center estilo">
                        <div class="card-header estilo-header">
                            Featured
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary estilo">Go somewhere</a>
                        </div>
                        <div class="card-footer text-body-secondary estilo-header">
                            2 days ago
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    One of three columns
                </div>
            </div>
        // </div>
       
        </>
    );
}

export default MenuProfesores;