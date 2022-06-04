////////////////////////////////EFECTO DE OCULTAMIENTO PARCIAL EN EL MENU////////////////////////////////////
function menuHide() {
  const menuBtn = document.getElementById("menu-mobile-btn")
    const header = document.getElementById("header")
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    
 if (currentScroll > lastScroll && !menuBtn.classList.contains("menu-mobile-btn-on")) {      
      header.className="header-hide";     
    }else if (currentScroll < lastScroll && header.classList.contains("header-hide")){
        header.classList.remove("header-hide")
        header.className="header";
    }
    lastScroll = currentScroll;
  })
}
menuHide()
function menuListMobileBtns () {
  const menuList = document.getElementsByClassName("a-btn-mobile")
  for(let el of menuList) {
    el.addEventListener("click", ()=>{
      console.log("gola")
    })
  }
}

menuListMobileBtns ()
function menuMobileShow (){
  const mobileMenu = document.getElementById("mobile-menu")
  const menuBtn = document.getElementById("menu-mobile-btn")
  const menuBtnTopLine = document.getElementById("border-top-menumobile")
  const menuBtnBottomLine = document.getElementById("border-bottom-menumobile")
  const menuBtnCTopLine = document.getElementById("border-centertop-menumobile")
  const menuBtnCBottomLine = document.getElementById("border-centerbottom-menumobile")
  menuBtn.addEventListener("click", ()=>{
    menuBtnAddClass = menuBtn.classList
    menuBtnAddClass.toggle("menu-mobile-btn-on")

    mobileMenuAddClass = mobileMenu.classList
    mobileMenuAddClass.toggle("mobile-menu-on")

    menuBtnCTopLineAddClass = menuBtnCTopLine.classList
    menuBtnCTopLineAddClass.toggle("border-top-close-mobile")

    menuBtnCBottomLineAddClass = menuBtnCBottomLine.classList
    menuBtnCBottomLineAddClass.toggle("border-bottom-close-mobile")

    menuBtnTopLineAddClass = menuBtnTopLine.classList
    menuBtnTopLineAddClass.toggle("border-top-menumobile-off")

    menuBtnBottomLineAddClass = menuBtnBottomLine.classList
    menuBtnBottomLineAddClass.toggle("border-bottom-menumobile-off")


  })
}
menuMobileShow ()


