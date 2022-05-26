
//MUESTRO LOS PRODUCTOS QUE TIENE EL CLIENTE AÑADIDOS AL CARRITO CUANDO ESTOS PASAN AL LOCALSTORAGE
(localStorage.listaProductosDeseos != null) ? document.getElementById('idCarrito').innerText = JSON.parse(localStorage.listaProductosCarrito).length : document.getElementById('idCarrito').innerText = 0;

(localStorage.listaProductosDeseos != null) ? document.getElementById('idDeseos').innerText = JSON.parse(localStorage.listaProductosDeseos).length : document.getElementById('idDeseos').innerText = 0;
