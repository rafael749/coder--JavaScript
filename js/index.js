
//MUESTRO LOS PRODUCTOS QUE TIENE EL CLIENTE AÑADIDOS AL CARRITO CARGADOS EN EL LOCALSTORAGE
if(localStorage.listaProductosCarrito != null){	
document.getElementById('idCarrito').innerText = JSON.parse(localStorage.listaProductosCarrito).length;
}

//MUESTRO LOS PRODUCTOS QUE TIENE EL CLIENTE AÑADIDOS A LA LISTA DE DESEOS CARGADOS EN EL LOCALSTORAGE
if(localStorage.listaProductosDeseos != null){	
	document.getElementById('idDeseos').innerText = JSON.parse(localStorage.listaProductosDeseos).length;
}

let mostrarProductoCargadosEnSistema = (arr) => {

    let contadorProd=0;

    for (const el of arr){
        if(el.categoriaProducto==="tecnologias" || el.categoriaProducto==="accesorios"){
            let grillaPadre = document.getElementsByClassName('grillaPadre')
            let producto = document.createElement("div");
            producto.className = `producto${contadorProd} productos card__css-manual rounded`;
            producto.innerHTML = 	`<span id="" data-action="cart-can" class="cart_menu cart_menu_Nuevo badge rounded">${el.estadoProducto}</span> 
                                                <span id="" data-action="cart-can" class="cart_menu cart_menu_Envio badge rounded">${el.envioProducto}</span> 
                                                <img src="${el.imagen}" alt="Producto Nuevo Agregado con Js"> 
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

			if(contadorProd===10){break;}
        } 	
    }					
}    

mostrarProductoCargadosEnSistema(productos);


//AGREGAR A LA LISTA DE DESEOS y COMPRA LOS PRODUCTOS SELECCIONADOS

let misDeseos = parseInt(document.getElementById('idDeseos').innerText);
let miCarrito = parseInt(document.getElementById('idCarrito').innerText);

const agregarListaDeseos = (idDeseo) => {
//	console.log(`Producto sumado a la lista de Deseos ${id.target.id}`)
	//Si el cliente ya tiene compras en el carrito almacenado en el localStorage, se añaden el mismo. SINO en el array carrito[] vacío.
	let deseos= [];

	if(localStorage.listaProductosDeseos != null){
		deseos = JSON.parse(localStorage.listaProductosDeseos);
	};

	//AÑADIMOS EL PRODUCTO SELECCIONADO A deseos[]
	const item = productos.find((prod) => prod.idProducto === idDeseo);

	deseos.push({
		"categoriaProducto": item.categoriaProducto,
		"nombreProducto":item.nombreProducto,
		"marcaProducto":item.marcaProducto,
		"precioProducto":item.precioProducto,
		"modeloProducto":item.modeloProducto,
		"envioProducto":item.envioProducto,
		"estadoProducto":item.estadoProducto,
		"imagen":item.imagen,
		"idProducto":item.idProducto
	});
	
	console.log("deseos",deseos)

	//PASAMOS CARRITO AL LOCAL STORAGE

	localStorage.setItem("listaProductosDeseos",JSON.stringify(deseos)); 	
	document.getElementById('idDeseos').innerText = deseos.length

	swal({
		title: "",
		text: "¡Producto agregado a la lista de deseos!",
		type: "success",
		confirmButtonColor: "#59a501",
		closeOnConfirm: false
	});
}

const agregarAlCarrito = (idProd) => {

	//Si el cliente ya tiene compras en el carrito almacenado en el localStorage, se añaden el mismo. SINO en el array carrito[] vacío.
	let carrito= [];

	if(localStorage.listaProductosCarrito != null){
	 	carrito = JSON.parse(localStorage.listaProductosCarrito);
	};

	//AÑADIMOS EL PRODUCTO SELECCIONADO A CARRITO[]
	const item = productos.find((prod) => prod.idProducto === idProd);

	carrito.push({
		"categoriaProducto": item.categoriaProducto,
		"nombreProducto":item.nombreProducto,
		"marcaProducto":item.marcaProducto,
		"precioProducto":item.precioProducto,
		"modeloProducto":item.modeloProducto,
		"envioProducto":item.envioProducto,
		"estadoProducto":item.estadoProducto,
		"imagen":item.imagen,
		"idProducto":item.idProducto
	});
	
	console.log("carrito",carrito)

	//PASAMOS CARRITO AL LOCAL STORAGE

	localStorage.setItem("listaProductosCarrito",JSON.stringify(carrito)); 	
	document.getElementById('idCarrito').innerText = carrito.length
	
	//Mostrar alerta del producto Agregado
	swal({
		title: "",
		text: "¡Se ha agregado un nuevo producto al carrito de compras!",
		type: "success",
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		cancelButtonText: "¡Continuar comprando!",
		confirmButtonText: "¡Ir a mi carrito de compras!",
		closeOnConfirm: false
	  },
	  function(isConfirm){
		  if (isConfirm) {
			  window.location.href = "html/pasarelaDePago.html"
		 	} 
  });
}
        