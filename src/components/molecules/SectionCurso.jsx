import bookColorRed from '../../assets/img/icons/book-color-red.png'
import bookColorRose from '../../assets/img/icons/book-color-rose.png'
import avanzar from '../../assets/img/icons/avanzar.png'
function SectionCurso({msg}) {
    return ( 
        <div className='section-curso'>
            <img className='book-color' src={bookColorRed}/>
            <label className='msg-section'>{msg}</label>
            <img className='avanzar' src={avanzar}/>
        </div>
     );
}

export default SectionCurso;