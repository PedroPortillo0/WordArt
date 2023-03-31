function VistaPrevia({src, information}) {
    return ( 
        <div className="container-card-buy">
            <div className="container-img">
                <img src={src}/>
            </div>
            <div className="information">
                <p>{information}</p>
            </div>
        </div> );
}

export default VistaPrevia;