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
function iniciarMap(){
  var coord = {lat:-34.5956145 ,lng: -58.4431949};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 15,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}
menuHide()
// iniciarMap()

