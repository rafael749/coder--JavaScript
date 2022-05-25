
//MUESTRO LOS PRODUCTOS QUE TIENE EL CLIENTE AÑADIDOS AL CARRITO CUANDO ESTOS PASAN AL LOCALSTORAGE
if(localStorage.listaProductosDeseos != null){
    //MUESTRO LOS PRODUCTOS QUE TIENE EL CLIENTE CARGADOS EN EL LOCALSTORAGE
    document.getElementById('idCarrito').innerText = JSON.parse(localStorage.listaProductosCarrito).length;
}else{
    document.getElementById('idCarrito').innerText = 0;
}

if(localStorage.listaProductosDeseos != null){
document.getElementById('idDeseos').innerText = JSON.parse(localStorage.listaProductosDeseos).length;
}else{
    document.getElementById('idDeseos').innerText = 0;
}