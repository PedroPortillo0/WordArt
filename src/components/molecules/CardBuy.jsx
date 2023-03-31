function Card({src, title, information, price}) {
    return ( 
        <div className="container-card-buy">
            <div className="container-img">
                <img src={src}/>
            </div>
            
            <div className="information">
                <h3>{title}</h3>
                <p>{information}</p>
            </div>
            <div className="precio">
                <label>${price} mx</label>
                <button type="submit">ir</button>
            </div>
        </div>
     );
}

export default Card;