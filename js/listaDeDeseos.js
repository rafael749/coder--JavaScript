//MUESTRO LOS PRODUCTOS QUE TIENE EL CLIENTE AÑADIDOS AL CARRITO CUANDO ESTOS PASAN AL LOCALSTORAGE
if(localStorage.listaProductosDeseos != null){

    //MUESTRO LOS PRODUCTOS QUE TIENE EL CLIENTE CARGADOS EN EL LOCALSTORAGE
    document.getElementById('idCarrito').innerText = JSON.parse(localStorage.listaProductosCarrito).length;
    document.getElementById('idDeseos').innerText = JSON.parse(localStorage.listaProductosDeseos).length;
    
    let listaDeseos = JSON.parse(localStorage.getItem("listaProductosDeseos"))

    let contadorProd= 0;
    for(let el of listaDeseos){    
            let grillaPadre = document.getElementsByClassName('grillaPadre')
            let producto = document.createElement("div");
            producto.className = `producto${contadorProd} productos card__css-manual rounded`;
            producto.innerHTML = 	`<span id="" data-action="cart-can" class="cart_menu cart_menu_Nuevo badge rounded">${el.estadoProducto}</span> 
                                                <span id="" data-action="cart-can" class="cart_menu cart_menu_Envio badge rounded">${el.envioProducto}</span> 
                                                <img src="../${el.imagen}" alt="Producto Nuevo Agregado con Js"> 
                                         <div class="productoDetalle"> 
                                                <h3 class="precio__actual">$ ${el.precioProducto}</h3> 
                                                <h5>${el.nombreProducto}</h5> 
                                                <h6>${el.modeloProducto}</h6> 
                                            </div> 
                                            <div class="carrito"> 
												<i id="${el.idProducto}" class="fas fa-heart heart" data-bs-toggle="tooltip" data-bs-placement="top" title="Agregar a Deseos" ></i>
                                                <i class="fas fa-eye eye data-bs-toggle="tooltip" data-bs-placement="top" title="Ver Producto"></i>                                          
                                                <i id="producto${el.idProducto}" class="fas fa-shopping-cart shopping-car agregarCarrito" data-bs-toggle="tooltip" data-bs-placement="top" title="Agregar al Carrito"></i>
                                            </div>`
            contadorProd++;
            grillaPadre[0].appendChild(producto);


			let btnListaDeseos = document.getElementById(`${el.idProducto}`);
			btnListaDeseos.addEventListener("click",() => {agregarListaDeseos(el.idProducto)
			});

			let btnListaCarrito = document.getElementById(`producto${el.idProducto}`);
			btnListaCarrito.addEventListener('click',() => {agregarAlCarrito(el.idProducto)
			});		                                        
    }
    
}else{ //Si el cliente aún no tiene compras, se lo dirige al inicio.
    swal({
		title: "",
		text: "¡Aún no tienes productos dentro de la lista de deseos!",
		type: "warning",
		confirmButtonColor: "#D10024",
		closeOnConfirm: false
	  },
	  function(isConfirm){
		  if (isConfirm) {
			  window.location.href = '../index.html';
		 	} 
  });
}