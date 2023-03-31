import CardBuy from './CardBuy'

import principiante from '../../assets/img/Teatro/Principiante.png'
import medio from '../../assets/img/Teatro/medio.png'
import avanzado from '../../assets/img/Teatro/avanzado.png'

function ContentInformation2() {
    return ( 
        <div className="container-information">
            <CardBuy src={principiante} 
                title="[Teatro esenico] 
                !expresion corporal, que es y más¡" 
                information="Aprende paso a paso como aprender el arte esenico del
                teatro, aprenderas cosas basicas como expresiones corporales, 
                movimientos y como no salir del personaje." price="3460.00"/>
            <CardBuy src={medio} 
                title="[Teatro nivel medio] 
                !Posiciones, lenguaje de expresion y creatividad del publico¡" 
                information="Seguiras practicando el lenguaje corporal que debes de 
                expresar ante el publico, aprenderas a cautivar con tus movimientos y a 
                sentir ese personaje mediante posiciones claves" price="760.00"/>
            <CardBuy src={avanzado} 
                title="[Teatro nivel avanzado] 
                !Termina lo que empezaste y vuelvete un master¡" 
                information="Repaso de tecnicas y expresiones, mas nuevos metodos
                de 2023 todo solo para ti" price="999.00"/>
        </div>
     );
}

export default ContentInformation2;