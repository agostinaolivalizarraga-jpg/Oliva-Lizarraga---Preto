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

function finalizarCompra(){

    let caja = document.getElementById("detallePedido");

    if(pedido.length == 0){

        caja.innerHTML = "No agregaste productos";

    }else{

        caja.innerHTML =
        "<h2>¡Gracias por tu compra!</h2><p>Tu pedido estará listo para retirar.</p>";

        pedido = [];
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





/*contacto*/
function enviarFormulario(){

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
    let motivo = document.getElementById("motivo").value;

    let respuesta = document.getElementById("respuesta");

    if(nombre == "" || email == "" || mensaje == "" || motivo == "Motivo del mensaje"){

        respuesta.innerHTML =
        "Por favor complete todos los campos";

    }else{

        respuesta.innerHTML =
        "Mensaje enviado correctamente";
    }
}




/* Registrarse */
function registrarse(){

    let nombre = document.getElementById("emailRegistro").value;
    let email = document.getElementById("primerContraseñaRegistro").value;
    let password = document.getElementById("segundaContraseñaRegistro").value;

    let respuesta = document.getElementById("respuestaRegistro");

    if(nombre == "" || email == "" || password == ""){

        respuesta.innerHTML =
        "Complete todos los campos";

    }else{

        respuesta.innerHTML =
        "¡Registro realizado con éxito!";
    }
}