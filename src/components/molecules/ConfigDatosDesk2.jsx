import go from '../../assets/img/icons/go.png'

function ConfigDatosDesk2({description, field1, write1}) {
    return ( 
        <div className='content-information'>
            <h2>{description}</h2>
            <div className='box'>
                <label>{field1}</label>
                <label>{write1}</label>
                <img src={go}/> 
            </div>
        </div>
     );
}

export default ConfigDatosDesk2;