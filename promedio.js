
function calcularMediaAritmetica(lista){
    let sumaLista1 = 0;
    for (let i=0; i<lista.length; i++){
        sumaLista1 = sumaLista1 + lista[i];
    }

    const promedioLista1 = sumaLista1/lista.length;

    console.log(promedioLista1)
}

lista1 = [200,500,600,100,500,900];

//calcularMediaAritmeticaOptimizada;
function calcularMediaAritmeticaOptimizada(lista){

    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista/lista.length;
    console.log(promedioLista);
}

calcularMediaAritmeticaOptimizada(lista1);
    