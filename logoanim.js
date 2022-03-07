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