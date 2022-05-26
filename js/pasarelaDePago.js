//MUESTRO LOS PRODUCTOS QUE TIENE EL CLIENTE AÑADIDOS AL CARRITO CUANDO ESTOS PASAN AL LOCALSTORAGE
if(localStorage.listaProductosCarrito != null ){

    //MUESTRO LOS PRODUCTOS QUE TIENE EL CLIENTE CARGADOS EN EL LOCALSTORAGE
    document.getElementById('idCarrito').innerText = JSON.parse(localStorage.listaProductosCarrito).length;
    document.getElementById('cantProdSeleccionados').innerText = JSON.parse(localStorage.listaProductosCarrito).length+' Productos Seleccionados';

    (localStorage.listaProductosDeseos != null) ? document.getElementById('idDeseos').innerText = JSON.parse(localStorage.listaProductosDeseos).length : document.getElementById('idDeseos').innerText = 0;

    let listaCarrito = JSON.parse(localStorage.getItem("listaProductosCarrito")) || null;
    let total = 0;
    for(let productoEnCanasto of listaCarrito){
        
        console.log(productoEnCanasto)
        let mostrarProductoEnEsteDiv = document.getElementsByClassName('listaDeProductoPasarelaDePago');    
        let divParaMostrastrProducto = document.createElement('div');
        divParaMostrastrProducto.id  = productoEnCanasto.idProducto;
        divParaMostrastrProducto.className = "card mb-3";
        divParaMostrastrProducto.innerHTML =`<div  class="card-body">
                                                <div class="d-flex justify-content-between">
                                                    <div class="d-flex flex-row align-items-center">
                                                        <div class="eliminarProductoCanasto">
                                                        <i id="${productoEnCanasto.idProducto}" class="fa fa-times text-danger fs-4 p-4 pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar Producto"></i>
                                                        </div>
                                                        <div>
                                                            <img src="../${productoEnCanasto.imagen}" class="img-fluid rounded-3 imgPago" alt="Shopping item">
                                                        </div>
                                                        <div class="ms-3">
                                                            <h5>${productoEnCanasto.nombreProducto}</h5>
                                                            <p class="small mb-0">${productoEnCanasto.modeloProducto}</p>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center">
                                                        <div>
                                                            <h5 class="mb-0">$ ${productoEnCanasto.precioProducto}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`
        mostrarProductoEnEsteDiv[0].appendChild(divParaMostrastrProducto);

        let btnEliminarProd = document.getElementById(`${productoEnCanasto.idProducto}`)|| null;
        btnEliminarProd.addEventListener('click',() => {quitarProdDelCarrito(`${productoEnCanasto.idProducto}`)
        });

        total+= parseFloat(productoEnCanasto.precioProducto);   

        //Colocamos dentro del html el subtotal, iva y total
         document.getElementById('ivaCarrito').innerText ='$ '+parseFloat((total*.21).toFixed(3));
         document.getElementById('totalCarrito').innerText ='$ '+ total;   
         document.getElementById('subTotalCarrito').innerText ='$ '+ (total*.79).toFixed(3);                                
    }

    const quitarProdDelCarrito = (idQuitarDelCarrito) =>{
        const item = listaCarrito.find((prod) => prod.idProducto === parseInt(idQuitarDelCarrito));
        const element = document.getElementById(item.idProducto);
        element.remove();
        let indeiceDelItem = JSON.parse(localStorage.listaProductosCarrito).findIndex(element => element.idProducto===parseInt(idQuitarDelCarrito))
        listaCarrito.splice(indeiceDelItem,1)
        
        localStorage.setItem("listaProductosCarrito",JSON.stringify(listaCarrito));
    
        document.getElementById('idCarrito').innerText = JSON.parse(localStorage.listaProductosCarrito).length;
        document.getElementById('cantProdSeleccionados').innerText = JSON.parse(localStorage.listaProductosCarrito).length+' Productos Seleccionados';

        if(listaCarrito.length === 0){
            swal({
                title: "",
                text: "¡Tu carrito se quedó vacío!",
                type: "warning",
                confirmButtonColor: "#D10024",
                closeOnConfirm: false
              },
              function(isConfirm){
                  (isConfirm) ? window.location.href = '../index.html' : false;
          });
        }
    }


}else{ //Si el cliente aún no tiene compras, se lo dirige al inicio.
    swal({
		title: "",
		text: "¡Aún no haz realizado ninguna compra!",
		type: "warning",
		confirmButtonColor: "#D10024",
		closeOnConfirm: false
	  },
	  function(isConfirm){
		  (isConfirm) ? window.location.href = '../index.html' : false;
  });
}