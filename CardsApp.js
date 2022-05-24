/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------------------CARDS EN PANTALLA-----------------------------------------------------------------------------------//
carrito = JSON.parse(localStorage.getItem('carrito')) || [];
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
motorBusqueda ()
btnCloseOpenInputSearch ()

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
function btnCloseOpenInputSearch (){
    const btnSearch = document.getElementById("btn-search")
    btnSearch.addEventListener("click", () => { 
    const barraDeBusqueda = document.getElementById("input-search-container")
    const barraDeBusquedaClase = barraDeBusqueda.classList       
    barraDeBusquedaClase.toggle("input-search-container-on")    
    const btnCloseInputSearch = document.getElementById("btn-close2")
    btnCloseInputSearch.addEventListener("click", () => {

    barraDeBusqueda.classList.remove("input-search-container-on") 
    })
    btnCardAgregado ()

    })   
}
function motorBusqueda (){  
    const inputSearch = document.getElementById("input-search")
    const btnSearchAct = document.getElementById("btn-search-act")

    inputSearch.addEventListener("input",function filter (e) {
        const value = e.target.value  
       result = productos.filter(item => item.modelo.toLowerCase().includes(value) || item.equipamiento.toLowerCase().includes(value))             
        const productosContainer= document.getElementById('productos-container')
        productosContainer.className=`productos-container`
        productosContainer.innerHTML=``;
        const tituloCatContainer = document.getElementById("titulo-cat-container")
        tituloCatContainer.className = `titulo-cat-container`
        const tituloSection = document.getElementById("titulo-cat")
        tituloSection.innerHTML=`RESULTADO DE BUSQUEDA`
        if(result.length ===0 ){
            const productosContainer= document.getElementById('productos-container')
            productosContainer.className=`productos-container`
            const tituloSinResultados = document.createElement('h2')
            tituloSinResultados.innerHTML=`Sin resultados`; 
            tituloSinResultados.className="titulo-sin-resultado"    
            productosContainer.append(tituloSinResultados)   
        }else{
            generadorDeCards(result) 
        }  
    })
///////////////////////////////////SCROLL A "RESULTADO"//////////////////////////////////////////////////
        btnSearchAct.addEventListener("click", function searchAct(){  
        
        })
        inputSearch.addEventListener("keydown", function (e){
            if(e.key == 'Enter' ){
               
                const tituloCatContainer = document.getElementById("titulo-cat-container")
                tituloCatContainer.scrollIntoView(true)
    }
 
        btnCardAgregado ()  
    } )   

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
    const btnCatAcc = document.getElementById("cat-ACC")
    btnCatAcc.addEventListener("click", () =>{
        const resultACC = productos.filter(item => item.categoria === "ACCESORIOS")
        generadorDeCards(resultACC)
        tituloCatContainer.className = `titulo-cat-container`
        tituloCat.innerHTML=`ACCESORIOS`
        productosContainer.className=`productos-container`
    })  
    const btnCatInd = document.getElementById("cat-IND")
    btnCatInd.addEventListener("click", () =>{
        const resultInd = productos.filter(item => item.categoria === "INDUMENTARIA")
        generadorDeCards(resultInd)
        tituloCatContainer.className = `titulo-cat-container`
        tituloCat.innerHTML=`INDUMENTARIA`
        productosContainer.className=`productos-container`
    })       
}

