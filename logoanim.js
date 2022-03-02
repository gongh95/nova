// const logo = document.querySelectorAll(".logo-svg");

// function logoAnim() {
//     let scrollTop = document.documentElement.scrollTop;
//     for (var i=0; i < logo.length; i++) {
//         let logoAnimado = logo[i].offsetTop;
//         if (logoAnimado < scrollTop) {
//             logo[i].classList.add(".logo-anim");
//         }
//     }
// }

function logoAnim() {
    const logo = document.querySelector(".logo-svg");
    let scrollTop = document.documentElement.scrollTop;
    // let logoAnimado = logo.offsetTop;
    if (scrollTop > 80) {
        logo.classList.add("logo-anim");
    }
    if (scrollTop < 80) {
        logo.classList.remove("logo-anim");
        logo.classList.add("logo-init");
    }
}



document.onload = logoAnim();
window.addEventListener("scroll", logoAnim);