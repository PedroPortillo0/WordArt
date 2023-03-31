function CardBuyFinish({src, title, information, price}) {
    return ( 
        <div className="container-card-buy">
            <div className="container-img">
                <img src={src}/>
            </div>
            
            <div className="information">
                <h3>{title}</h3>
                <p>{information}</p>
            </div>
            <div className="borrar">
                <button type="submit">Eliminar</button>
            </div>
            <div className="precio">
                <label>total: ${price} mx</label>
                <button type="submit">ir</button>
            </div>
        </div>
     );
}

export default CardBuyFinish;