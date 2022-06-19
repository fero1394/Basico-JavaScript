const colombia = [];

colombia.push({
    name: 'Juanita',
    salary: 1500,
});

colombia.push({
    name: 'Fernando',
    salary: 2000,
});

colombia.push({
    name: 'Andredy',
    salary: 3000,
});

colombia.push({
    name: 'Felipe',
    salary: 4000,
});

colombia.push({
    name:'Marlon',
    salary: 1000,
});


const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);


const salariosColSorted = salariosCol.sort(
    function(salaryA,salaryB){
    return salaryA - salaryB
    }
);

function esPar(numero){
    return (numero % 2 === 0);
}   

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

function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    
    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = promedio([personaMitad1,personaMitad2]);
        return mediana;
    }
    else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

console.log(medianaSalarios(salariosColSorted));
