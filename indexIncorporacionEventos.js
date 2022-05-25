
//objeto que contiene los produdctos del ecommerce



//TODO: ya tengo mi objeto cargado de producto. lo que tengo que hacer ahora:

	//Recorrer cada objeto con un for of y mostrarlo










// Introducir un producto a Mano
const productoCargadoPorUserArray = [];

let crearProducto= () => {

	alert('Estimado, el producto creado \nTendrá por defecto las etiqueta "Nuevo" y "Envío Gratis" \nSe lo visualizará al final de la web \nPara fines demostrativos la imagen a crear será la de un salero. Gracias');	
	let nombre 	  = prompt("Introduce la categoría del Producto a crear");
	let categoria = prompt("Introduce nombre del Producto a crear");
	let marca     = prompt("Introducie la marca del producto");
	let precio    = prompt("introduce el precio del producto");
	let modelo    = prompt("introduce el Modelo del producto");
	let envio	  = "Envío Gratis";
	let estado    = "Nuevo";

	let producto = new crearObjetoProducto(nombre,categoria,marca,precio,modelo,envio,estado);
	
	productoCargadoPorUserArray.push(producto);
	
	producto.mostrarProducto(productoCargadoPorUserArray);
}

//Se crea boton para cargar producto a mano desde el front
let menuNav = document.querySelectorAll('.menu > ul')[0]
let htmlBotonCrearProd = document.createElement("li");
let htmlBotonEliminarProd = document.createElement("li");
htmlBotonCrearProd.innerHTML = 	`<button type="button" id="btnCrearProducto" class="btn btn-primary my-1 p-2">Crear Producto</button>`

menuNav.appendChild(htmlBotonCrearProd);	

let botonCrearProducto = document.getElementById('btnCrearProducto');
botonCrearProducto.onclick = () => {crearProducto()};



/*************************************************************************************************************/

let grillaPadre1 = document.getElementsByClassName('grillaPadre');
	
/*************************************************************************************************************/
