import CardBuy from './CardBuy'

import colores from '../../assets/img/Pintura/Colores.png'
import dibujo from '../../assets/img/Pintura/Dibujo.png'
import oleo from '../../assets/img/Pintura/Oleo.png'

function ContentInformation() {
    return ( 
        <div className="container-information">
            <CardBuy src={oleo} 
                title="[Pintura al oleo desde 0 2023] 
                !colores, tecnica y más¡" 
                information="aprenderas los conceptos basicos y un poco de teoria
                sobre la pintura y sus carateristicas, tecnivas y experiencia unica" 
                price="670.00"/>
            <CardBuy src={dibujo} 
                title="[Dibujo a lapiz] 
                !grafito y borrador¡" 
                information="Nuevas formas de utilizar el borrador junto al 
                grafito, retomando tus conocimientos intermedios del dibujo junto con 
                nuevas tecnicas" 
                price="990.00"/>
            <CardBuy src={colores} 
                title="[todo sobre colores] 
                !tipos, codigos y mezclas¡" 
                information="aprenderas mediante tus conocimientos basicos de pintura los 
                distinitos colores y formas de combinarlas, utlizaras sus coidog y como 
                mezclar distintos tonos mediante una app" 
                price="880.00"/>
        </div>
     );
}

export default ContentInformation;