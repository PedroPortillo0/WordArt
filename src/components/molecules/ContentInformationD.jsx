import CardBuy from './CardBuy'

import danza from '../../assets/img/Danza/danza.png'
import hiphop from '../../assets/img/Danza/hiphop.png'
import salsa from '../../assets/img/Danza/Salsa.png'

function ContentInformationD() {
    return ( 
        <div className="container-information">
            <CardBuy src={hiphop} 
                title="[Hip Hop Reggeton] 
                !expresion corporal, que es y más¡" 
                information="Aprende paso a paso como aprender el arte esenico del
                teatro, aprenderas cosas basicas como expresiones corporales, 
                movimientos y como no salir del personaje." price="3460.00"/>
            <CardBuy src={salsa} 
                title="[Salsa] 
                !Divierte sacando lo mejor de ti, passos y movimientos¡" 
                information="termina lo que empezaste y vulvete un experto
                en lo falso, aprenderas nuevos pasos y nuevos ridmos" price="760.00"/>
            <CardBuy src={danza} 
                title="[Danza para principantes] 
                !los siete pasos basicos¡" 
                information="Aprende todo lo basico del arte de la danza,
                ritmos y movimientos, cultura y generos" price="999.00"/>
        </div>
     );
}

export default ContentInformationD;