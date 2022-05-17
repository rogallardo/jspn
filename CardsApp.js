/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------------------CARDS EN PANTALLA-----------------------------------------------------------------------------------//
const carrito = JSON.parse(localStorage.getItem('carrito') || []);
function generadorDeCards(productos) {
    const productosContainer= document.getElementById('productos-container')
    productosContainer.innerHTML=``;
    for(const producto of productos){
        const itemContainer = document.createElement('div')
        itemContainer.className="item-prod-container"
        itemContainer.innerHTML=`
                        <div id="MTB" class="item-prod ">
                            <div class="item-img-container">
                                <img class= "item-img" src="../img/prod${producto.id}.jpg" alt= "fotos"
                                </div>
                          </div>

                            <div id= "item-desc-container" class="item-desc-container">
                                <a class="btn-prod" >VER PRODUCTO</a>
                                <h4 class="card-title">${producto.modelo}</h4>
                                <h5>${producto.equipamiento}</h5>
                                <h6>US$${producto.precio}</h6>
                                <a onclick="agregarAlCarrito(${producto.id})"id= "agregCarrito${producto.id}" class="btn-prod2">+ Agregar al carrito </a>
                            </div> 
                        </div>`  
        productosContainer.append(itemContainer)
        btnCardAgregado () 
                
}};

mostrarProductoPorCategoria ()
btnCardAgregado ()
BarraBusqueda ()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------BOTONES CARDS------------------------------------------------------------------------------------//
function agregarAlCarrito(idProducto){
    const productoAgregado = productos.find(el => el.id === idProducto)
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
    carrito.forEach((producto) => {  
        let productoAgregadoBtn = document.getElementById(`agregCarrito${producto.id}`);
        if(productoAgregadoBtn !== null){
             productoAgregadoBtn.innerHTML =`Agregado`;
        productoAgregadoBtn.className = `btn-prod3`
        }  
    })
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------INPUT SEARCH------------------------------------------------------------------------------------//
function BarraBusqueda (){
    const btnSearch = document.getElementById("btn-search")
    btnSearch.addEventListener("click", () => { 
    const barraDeBusqueda = document.getElementById("input-search-container")
    const barraDeBusquedaClase = barraDeBusqueda.classList
    barraDeBusquedaClase.toggle("input-search-container-on")
    btnCardAgregado ()
    motorBusqueda ()
    })   
}
function motorBusqueda (){  
    const inputSearch = document.getElementById("input-search")
    inputSearch.addEventListener("input",(e) => {
    const value = e.target.value  
    const result = productos.filter(item => item.modelo.toLowerCase().includes(value) || item.equipamiento.toLowerCase().includes(value))
    const searchAction = document.getElementById("btn-search-act")
    searchAction.addEventListener("click", function mostrarResultado(){
    const productosContainer= document.getElementById('productos-container')
    productosContainer.className=`productos-container`
    productosContainer.innerHTML=``;
    const tituloCatContainer = document.getElementById("titulo-cat-container")
    tituloCatContainer.className = `titulo-cat-container`
    const tituloSection = document.getElementById("titulo-cat")
    tituloSection.innerHTML=`RESULTADO DE BUSQUEDA`
    if(result.length <1){
        const productosContainer= document.getElementById('productos-container')
        productosContainer.className=`productos-container`
        const tituloSinResultados = document.createElement('h2')
        tituloSinResultados.innerHTML=`Sin resultados`; 
        tituloSinResultados.className="titulo-sin-resultado"    
        productosContainer.append(tituloSinResultados)   
    }
    generadorDeCards(result)
    btnCardAgregado ()  
    })   
})

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------FILTROS------------------------------------------------------------------------------------//
function mostrarProductoPorCategoria (){
    const productosContainer= document.getElementById('productos-container')
    productosContainer.className="productos-container-display-none";
    const tituloCatContainer = document.getElementById("titulo-cat-container")
    const tituloCat = document.getElementById("titulo-cat")
    const btnCatMTB = document.getElementById("cat-MTB")
    btnCatMTB.addEventListener("click", () =>{
        const resultMTB = productos.filter(item =>item.categoria === "Bicicletas MTB") 
        generadorDeCards(resultMTB)
        tituloCatContainer.className = `titulo-cat-container`
        tituloCat.innerHTML=`MOUNTAIN BIKE` 
        productosContainer.className=`productos-container`      
    })
    const btnCatRep = document.getElementById("cat-REP")
    btnCatRep.addEventListener("click", () =>{
        const resultREP = productos.filter(item => item.categoria === "REPUESTOS")
        generadorDeCards(resultREP)
        tituloCatContainer.className = `titulo-cat-container`
        tituloCat.innerHTML=`REPUESTOS`
        productosContainer.className=`productos-container`
    })    
}
