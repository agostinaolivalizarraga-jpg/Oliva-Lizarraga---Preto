/* carrito */
let pedido = [];

function agregarProducto(nombre, precio){

    let producto = {
        nombre: nombre,
        precio: precio
    };

    pedido.push(producto);

}

function mostrarPedido(){

    let caja = document.getElementById("detallePedido");

    if(pedido.length == 0){

        caja.innerHTML = "No agregaste productos";

    }else{

        let contenido = "<h2>Tu pedido</h2>";

        for(let i = 0; i < pedido.length; i++){

            contenido += pedido[i].nombre +
            " , " +
            pedido[i].precio +
            "<br>";

        }

        caja.innerHTML = contenido;
    }
}

function vaciarPedido(){

    pedido = [];

    mostrarPedido();
}




/* carrusel */
let imagenes = [
    "./Multimedia/imagen1.png",
    "./Multimedia/imagen2.jpg",
    "./Multimedia/imagen3.jpg"
];

let posicion = 0;

function siguienteImagen(){

    posicion++;

    if(posicion >= imagenes.length){
        posicion = 0;
    }

    document.getElementById("imagenCarrusel").src = imagenes[posicion];
}

function anteriorImagen(){

    posicion--;

    if(posicion < 0){
        posicion = imagenes.length - 1;
    }

    document.getElementById("imagenCarrusel").src = imagenes[posicion];
}