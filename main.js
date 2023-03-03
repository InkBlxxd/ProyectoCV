/* Boton Subir */

let btn = document.querySelector("#boton-arriba");

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        btn.classList.add('visible');
    }else{
        btn.classList.remove('visible');
    }
});
    
btn.addEventListener("click", function() {
    window.scrollTo(0, 0)
});


