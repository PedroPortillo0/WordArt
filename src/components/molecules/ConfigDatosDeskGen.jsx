import go from '../../assets/img/icons/go.png'

function ConfigDatosDeskGen({description, field1, write1, field2, write2}) {
    return ( 
        <div className='content-information'>
            <h2>{description}</h2>
            <div className='box'>
                <label>{field1}</label>
                <label>{write1}</label>
                <img src={go}/> 
            </div>
            <div className='box1'>
                <label>{field2}</label>
                <label>{write2}</label>
                <img src={go}/> 
            </div>
        </div>
     );
}

export default ConfigDatosDeskGen;