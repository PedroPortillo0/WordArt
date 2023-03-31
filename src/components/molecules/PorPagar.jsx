import CardBuy from './CardBuy'

import danza from '../../assets/img/Danza/danza.png'
import hiphop from '../../assets/img/Danza/hiphop.png'
import salsa from '../../assets/img/Danza/Salsa.png'
import CardBuyFinish from './CardBuyFinish';

function PorPagar() {
    return ( 
        <div className="container-information">
            <CardBuyFinish src={hiphop} 
                title="[Hip Hop Reggeton] 
                !expresion corporal, que es y más¡" 
                information="" price="3460.00"/>
            <CardBuyFinish src={salsa} 
                title="[Salsas] 
                !Divierte sacando lo mejor de ti, passos y movimientos¡" 
                information="" price="760.00"/>
            <CardBuyFinish src={danza} 
                title="[Danza para principantes] 
                !los siete pasos basicos¡" 
                information="" price="999.00"/>
   
        </div>
     );
}

export default PorPagar;