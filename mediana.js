//PROMEDIO
function promedio(lista){

    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista/lista.length;
    console.log(promedioLista);
}

const lista1 = [100,200,300,1000000];

const mitadLista1 = parseInt(lista1.length/2);

//ESTO SOLO ES PARA EXPLICAR POR QUE TENEMOS QUE USAR LA FUNCION parseInt()
function esPar(numerito){
    if(numerito%2 === 0){
        return true;
    }
    else{
        return false;
    }
}

if(esPar(lista1.length)){

    const elemento1 = lista1[mitadLista1-1];
    const elemento2 = lista1[mitadLista1];

    const nuevaLista = [elemento1,elemento2];
    
    return promedio(nuevaLista);
}
else{
   console.log(mitadLista1);
    return console.log(lista1[mitadLista1]);
}

//DESDE EL COMPUTADOR DE SOFKA
