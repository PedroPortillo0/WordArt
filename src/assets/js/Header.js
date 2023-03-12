let header = document.getElementById('header')

window.addEventListener('scroll', () =>{
        let scroll = window.scrollY;
        if(scroll > 10){
            header.style.backgroundColor = '#00000060';
        }else{
            header.style.backgroundColor = 'transparent';
        }
})



