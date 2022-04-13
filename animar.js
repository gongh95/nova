let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 550 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("animado-move");
        }
    }
}

document.onload = mostrarScroll();
// window.onload(mostrarScroll());
window.addEventListener("scroll", mostrarScroll);