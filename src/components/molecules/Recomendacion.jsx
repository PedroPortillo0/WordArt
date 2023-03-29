function Recomendacion({src, msg}) {
    return ( 
        <div className="container-recomendacion">
            <div>
                <img src={src}/>
                <p>{msg}</p>
            </div>
        </div>
     );
}

export default Recomendacion;