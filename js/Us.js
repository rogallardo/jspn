////////////////////////////////////API DE GOOGLE MAPS (se muestra en la seccion 'Nosotros')////////////////////
function iniciarMap(){
    var coord = {lat:-34.574868665319066, lng: -58.483606227087144}; 
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  }
  iniciarMap()