import CardBuy from './CardBuy'

import cursoGuitar from '../../assets/img/Musica/guitarra.png'
import Acordeon from '../../assets/img/Musica/Acordeon.png'
import piano from '../../assets/img/Musica/piano.png'
function ContentInformation() {
    return ( 
        <div className="container-information">
            <CardBuy src={cursoGuitar} 
                title="[Guitarrra desde cero 2023] 
                !circulos, acordes y más¡" 
                information="Aprende a tocar la guitarra desde cero,
                empezando con el circulo de sol y practicando acordes 
                y notas para poder ser un experto en la música" price="300.00"/>
            <CardBuy src={Acordeon} 
                title="[Piano avanzado 2022] 
                !Notas, escalas¡" 
                information="Sigue aprendiendo a como ser el guru del piano
                con estos pasos, cursos intensivos de como aprender notas dificiles 
                y teclas especiales" price="300.00"/>
            <CardBuy src={piano} 
                title="[Acordeon intermedio] 
                !deja de ser principiante en el acordeon¡" 
                information="Sigue aprendiendo de como tocar correctamente
                el acordeon, no te quedes con lo basico y da mas de ti en este 
                hermoso instrumento" price="300.00"/>
        </div>
     );
}

export default ContentInformation;