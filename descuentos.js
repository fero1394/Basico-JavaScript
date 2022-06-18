function calcularDescuento(precioOriginal, descuento){

    let valorPagar = (precioOriginal*(100 - descuento))/100;

    return valorPagar;
}

//DESCUENTO
function calcularDescuentoProducto(){
    const inputPrecio = document.getElementById("inputPrecio");
    const valorPrecio = inputPrecio.value;

    const inputDescuento = document.getElementById('inputDescuento');
    const valorDescuento = inputDescuento.value;

    const total = calcularDescuento(valorPrecio,valorDescuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerHTML = "El precio con descuento es: $" + total;
}

//DESCUENTO CON CUPON

function calcularDescuentoConCupon(){
    const inputCupon = document.getElementById('idCupon');
    const cupon = inputCupon.value;

    const inputPrecio = document.getElementById('idPrecio');
    const precio = inputPrecio.value;

    const salida = document.getElementById("salidaPrecioFinal");

    const listaCupones = ["cupon1","cupon2","cupon3"];
    
        if(listaCupones[0] === cupon){

            let descuento = 20;
            const precioFinal = calcularDescuento(precio,descuento)

            salida.innerHTML = "El Descuento es del "+descuento+" % El valor a pagar es de: "+precioFinal+"$";
        }
        else if(listaCupones[1] === cupon){
            let descuento = 30;
            const precioFinal = calcularDescuento(precio,descuento)

            salida.innerHTML = "El Descuento es del "+descuento+" % El valor a pagar es de: "+precioFinal+"$";
        }
        else if(listaCupones[2] === cupon){
            let descuento = 40;
            const precioFinal = calcularDescuento(precio,descuento)

            salida.innerHTML = "El Descuento es del "+descuento+" % El valor a pagar es de: "+precioFinal+"$";
        }
        else{
            salida.innerHTML = "El Cupon no es valido El valor a pagar es de: " +precio+"$";

        }
}


