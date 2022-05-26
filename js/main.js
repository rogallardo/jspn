////////////////////////////////EFECTO DE OCULTAMIENTO PARCIAL EN EL MENU////////////////////////////////////
function menuHide() {
    const header = document.getElementById("header")
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    
 if (currentScroll > lastScroll) {      
      header.className="header-hide";     
    }else if (currentScroll < lastScroll && header.classList.contains("header-hide")){
        header.classList.remove("header-hide")
        header.className="header";
    }
    lastScroll = currentScroll;
  })
}
menuHide()


