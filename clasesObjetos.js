class Producto {
	constructor(nombreProducto,categoriaProducto,marcaProducto,precioProducto,modeloProducto,envioProducto,estadoProducto){
		this.nombreProducto    = nombreProducto;
		this.categoriaProducto = categoriaProducto;
		this.marcaProducto     = marcaProducto;
		this.precioProducto    = precioProducto;
		this.modeloProducto    = modeloProducto;
	 	this.envioProducto     = envioProducto;
		this.estadoProducto    = estadoProducto;

	
		this.mostrarProducto = (arr) => {

			let contadorProd=0;

			for (const el of arr){
				let grillaPadre = document.getElementsByClassName('grillaPadre')
				let producto = document.createElement("div");
				producto.id = contadorProd;
				producto.className = `producto${contadorProd} productos card__css-manual rounded`;
				producto.innerHTML = 	`<span id="" data-action="cart-can" class="cart_menu cart_menu_Nuevo badge rounded">${el.estadoProducto}</span> 
													<span id="" data-action="cart-can" class="cart_menu cart_menu_Envio badge rounded">${envioProducto}</span> 
													<img src="img/salero.jpg" alt="Producto Nuevo Agregado con Js"> 
												<div class="productoDetalle"> 
													<h3 class="precio__actual">$ ${el.precioProducto}</h3> 
													<h5>${el.nombreProducto}</h5> 
													<h6>${el.modeloProducto}</h6> 
												</div> 
												<div class="carrito"> 
													<a href="/html/listaDeseos.html"><i class="fas fa-heart heart"></i></a>
													<i class="fas fa-eye eye"></i> 
													<i class="fas fa-trash heart"></i>
													<a href="/html/pasarelaDePago.html">
														<i class="fas fa-shopping-cart shopping-car"></i>
													</a> 
												</div>`
				contadorProd++;
				grillaPadre[0].appendChild(producto);
			}						
		}    
	}
}
