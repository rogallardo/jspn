/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------------------CARDS EN PANTALLA-----------------------------------------------------------------------------------//
carrito = JSON.parse(localStorage.getItem('carrito') || []);
function generadorDeCards(bicis) {
    const productosContainer= document.getElementById('productos-container')
    for(const bici of bicis){
        const itemContainer = document.createElement('div')
        itemContainer.className="item-prod-container"
        itemContainer.innerHTML=`
                        <div id="MTB" class="item-prod ">
                        <div class="item-img-container">
                            <img class= "item-img" src="../img/prod${bici.id}.jpg" alt= "fotos"
                        </div>
                        <div id= "item-desc-container" class="item-desc-container">
                        <a  class="btn-prod" >VER PRODUCTO</a>
                            <h4 class="card-title">${bici.modelo}</h4>
                            <h5>${bici.equipamiento}</h5>
                            <h6>US$${bici.precio}</h6>
                            <a onclick="agregarAlCarrito(${bici.id})"id= "agregCarrito${bici.id}" class="btn-prod2">+ Agregar al carrito </a>
                        </div> 
                    </div>`  
        productosContainer.append(itemContainer)  
        
}};
generadorDeCards(bicis);
btnCardAgregado ()
mostrarBarraBusqueda ()
motorBusqueda ()
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------BOTONES CARDS------------------------------------------------------------------------------------//
function agregarAlCarrito(idProducto){
    const productoAgregado = bicis.find(el => el.id === idProducto)
    const productoEnCarrito = carrito.find(el => el.id === idProducto)
    if((productoAgregado.stock > 0) && (productoEnCarrito === undefined)){
            carrito.push(productoAgregado);
            productoAgregado.stock--;
            productoAgregado.cantidad++; 
            generarCardsEnCarrito(carrito)
            btnCardAgregado()
            datosCarrito()        
    }   
}
function btnCardAgregado () {
    carrito.forEach((bici) => {  
        let productoAgregadoBtn = document.getElementById(`agregCarrito${bici.id}`);
        if(productoAgregadoBtn !== null){
             productoAgregadoBtn.innerHTML =`Agregado`;
        productoAgregadoBtn.className = `btn-prod3`
        }  
    })
}
function mostrarBarraBusqueda (){
    const btnSearch = document.getElementById("btn-search")
    btnSearch.addEventListener("click", () => { 
    const barraDeBusqueda = document.getElementById("input-search-container")
    const barraDeBusquedaClase = barraDeBusqueda.classList
    barraDeBusquedaClase.toggle("input-search-container-on")
    })   
}
function motorBusqueda (){  
    const inputSearch = document.getElementById("input-search")
    inputSearch.addEventListener("input", (e) => {
    const value = e.target.value  
    const result = bicis.filter(item => item.modelo.toLowerCase().includes(value) || item.equipamiento.toLowerCase().includes(value))
    const searchAction = document.getElementById("btn-search-act")
    searchAction.addEventListener("click", function mostrarResultado(){
    const productosContainer= document.getElementById('productos-container')
    productosContainer.innerHTML=``;
    generadorDeCards(result)
    btnCardAgregado ()  
    })   
})

}


