/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//--------------------------------------------------------CARRITO----------------------------------------------------------------------------------------//
const carrito = JSON.parse(localStorage.getItem("carrito") || []);
datosCarrito()
const mostrarCardsCarrito = (card) => document.getElementById("carrito").innerHTML = card;
generarCardsEnCarrito(carrito)
function generarCardsEnCarrito(carrito){
    let acumuladorDeCards = ``
    carrito.forEach((producto) => {
        acumuladorDeCards +=`
                        <div id="MTB" class="item-prod-carrito">
                            <div class="item-img-container-carrito">
                                <img class= "item-img-carrito" src="../img/prod${producto.id}.jpg" alt= "fotos"
                                </div>
                            </div>
                            <div class="item-desc-container-carrito">
                                <a onclick="eliminar(${producto.id})" class="btn-elim" >Eliminar</a>
                                <h4 class="card-title">${producto.modelo}</h4>
                                <h5>${producto.equipamiento}</h5>
                                <h6>ARS $${producto.precio}</h6>
                                <div class="cantidad-container">
                                    <a onclick="dismCant(${producto.id})" id= "cantidad-${producto.id}" class="btn-cant1">-</a>
                                    <a  id="contadorCant${producto.id}" class="cant"> ${producto.cantidad} </a>
                                    <a onclick="aumentCant(${producto.id})" id= "cantidad+${producto.id}" class ="btn-cant2">+ </a>                          
                                </div>
                            </div>
                        </div>`
                       
 }) 
    mostrarCardsCarrito(acumuladorDeCards)
}

function datosCarrito(){
    cantidadTotalCarritoBtn()
    precioTotal() 
    localStorage.setItem("carrito", JSON.stringify(carrito))
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//----------------------------------------------------BOTONES & CARRITO----------------------------------------------------------------------------------//
carritoBtn()
function carritoBtn(){
    const btnCarrito = document.getElementById("btn-carrito")
    btnCarrito.addEventListener("click", function aC (){const carritoContainer = document.getElementById("carrito-container")
    const btnCarritoAddClass = carritoContainer.classList
    btnCarritoAddClass.toggle("carrito-container-on")
    const btnCerrarCarrito = document.getElementById("btnclose")
    btnCerrarCarrito.addEventListener("click", function (){ const carritoContainer =document.getElementById("carrito-container")
    carritoContainer.className=("carrito-container")
    })
}) 
}
function cantidadTotalCarritoBtn(){  
    const totalProductos = carrito.reduce((acc, producto) => (acc + producto.cantidad), 0)
    const contadorCarrito = document.getElementById('cantidad-carrito')
    contadorCarrito.innerHTML = totalProductos
    if(totalProductos===0){
        contadorCarrito.className=("cantidad-carrito")
    } else {
        contadorCarrito.className=("cantidad-carrito-effect")
    }
}
function precioTotal(){

    const precio = carrito.reduce((acc, productoEnCarrito) => ( acc + (productoEnCarrito.precio * productoEnCarrito.cantidad) ), 0)
    document.getElementById("preciototal").innerHTML= precio
}
function eliminar(idProducto){
    const productoAEliminar = carrito.find(el=> el.id === idProducto)
    let pos = carrito.indexOf(productoAEliminar)             
    carrito.splice(pos, 1);
    productoAEliminar.stock =  productoAEliminar.stock + productoAEliminar.cantidad;
    productoAEliminar.cantidad = 0;
    generarCardsEnCarrito(carrito)
    const productoAgregadoBtn = document.getElementById(`agregCarrito${idProducto}`);
    if (productoAgregadoBtn  !== null){
        productoAgregadoBtn.innerHTML = `+ Agregar al carrito`
        productoAgregadoBtn.className = `btn-prod2` 
    }
    datosCarrito()  
}
function aumentCant(idProducto){          
    const productoAAumentar= carrito.find(el => el.id === idProducto)
    if(productoAAumentar.stock == 0){
        noHayStock()
        
    }else{
    productoAAumentar.cantidad++;
    productoAAumentar.stock--;
    document.getElementById(`contadorCant${idProducto}`).innerHTML = productoAAumentar.cantidad

    }
    datosCarrito()
 
}
function dismCant(idProducto){          
    const productoADisminuir= carrito.find(el => el.id === idProducto)
    if(productoADisminuir.cantidad > 1){
    productoADisminuir.cantidad--;
    productoADisminuir.stock++;
    document.getElementById(`contadorCant${idProducto}`).innerHTML = productoADisminuir.cantidad

    }
    datosCarrito()
 
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//----------------------------------------------------ALERTS----------------------------------------------------------------------------------//
function noHayStock(){
    swal({
        title: "No hay más Stock de este producto!",
        icon: "warning",
        button: "Ok",
      });
}
