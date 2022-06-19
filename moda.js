const listadoDeNumeros = [
1,
3,
4,
4,
2,
2,
2,
6,
7,
8,
9];

//creando una funcion
function calcularModa(listado){
    
    //objeto vacio
const lista1Count = {};

    listado.map(
        function(elemento){                 //toma el elemento del listado
            if(lista1Count[elemento]){      //pregunta si el elemento esta en el objeto lista1Count 
                lista1Count[elemento] +=1;  // si esta le suma 1 y esta suma va quedando en el argumento
            }else{
                lista1Count[elemento] = 1;  //si no esta lo crea como 1
            }
        }
    );

    const lista1Array = Object.entries(lista1Count).sort(      //Este metodo object.entries convierte el objeto en un array 
                                                                // queda como un arrays de arrays por que es objeto y tiene clave valor
        function(a,b){                                          // el metodo sort tiene comoa argumento una funcion para ordenar
            return a[1] - b[1];                               //los valores que nos sirven son solo los de la posicion 1 de array
        }
    );  

    console.log(lista1Array);

    const moda = lista1Array[lista1Array.length - 1][0];      // solo nos muesta el valor del array que mas se repite

    console.log("la moda es: " + moda);

}


calcularModa(listadoDeNumeros);