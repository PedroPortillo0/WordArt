import ConfigRegresar from '../../molecules/ConfigRegresar'

import goback from '../../../assets/img/icons/goback.png'
import paypal from '../../../assets/img/icons/paypal.png'
import LogoGeneral from '../../atoms/LogoGeneral';
import guitar from '../../../assets/img/Musica/guitarra.png'
import '../../../assets/styles/MethPago/MethPago.css'
import VistaPrevia from '../../molecules/VistaPrevia';
import Swal from 'sweetalert';

function FromPasarelaDePagos() {
    const handlerClick = () => {
        swal({   
            text: `PAGO EXITOSO, disfruta de tu video `,
            icon: 'success',
        })
    }
    return ( 
            <div className='MethPago'>
                <div className='container-ingresar-datos'>
                    <ConfigRegresar src={goback} msg="pagar"/>
                    <div className='content-ingresar-datos'>
                        <h3>Metodo de pago</h3>
                        <div className='container-paypal'>
                            <img src={paypal}/>
                        </div>
                        <div className='datos'>
                            <h2>Tus datos de pago</h2>
                            <form className='ingresar-datos'>
                                <div>
                                    <label className='title-campo'>Titular de la targeta</label>
                                    <input className='input' type="text" placeholder='Ej. Rodolfo Rivera'/>
                                </div>
                                <div>
                                    <label className='title-campo'>Número de la tarjeta</label>
                                    <input className='input' type="number" placeholder='XXXX XXXX XXXX XXXX XXXX'/>
                                </div>
                                <div className='container-2'>
                                    <div className='container-date'>
                                        <label className='title-campo'>Fecha de vencimiento</label>
                                        <input className='input' type="date" />
                                    </div>
                                    <div className='container-cvv'>
                                        <label>CVV?</label>
                                        <input className='input' type="number" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='container-resumen'>
                    <div className='content-logo'>
                        <LogoGeneral/>
                    </div>
                    <div className='container-resumen-2'>
                        <h2>Resumen</h2>
                        <div className='content-precio'>
                            <label className='label1'>precio: </label>
                            <label>$300</label>
                        </div>
                        <div>
                            <h2>Detalles del pedido:</h2>
                            <VistaPrevia src={guitar} 
                                information="Musica :  [Guitarra desde cero 
                                2023] ¡circulos, acordes y mas!" />
                        </div>
                    </div>
                    <div className='content-terminos'>
                        <label>Al aceptar la compra, aceptas estas <span>condiciones de uso</span></label>
                    </div>
                    <div className='content-pagar-ahora'>
                        <button onClick={handlerClick}>Pagar ahora</button>
                    </div>
                </div>
            </div>
    );
}
export default FromPasarelaDePagos;