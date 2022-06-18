//CODIDO DEL CUADRADO
console.group("CUADRADOS");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

function perimetroCuadrado(ladoCuadrado){

    return ladoCuadrado * 4;
}

console.log("El permitro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(ladoCuadrado){

    return ladoCuadrado*ladoCuadrado;
}

console.log(" El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();


//CODIGO TRIANGULO
console.group("TRIANGULO");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden "+
    ladoTriangulo1 
    + "cm "
    + ladoTriangulo2
    + "cm "
    + baseTriangulo
    + "cm" 
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo mide: "
+ alturaTriangulo + ' cm');

//funcion
function perimetroTriangulo(lado1,lado2,base){
    perimetroTotalTriangulo = Number(lado1)+Number(lado2)+Number(base);
    return perimetroTotalTriangulo;
} 
//console.log('El perimetro del triangulo es: '+ perimetroTriangulo + " cm");

function areaTriangulo(baseTriangulo, alturaTriangulo){
    return (baseTriangulo * alturaTriangulo)/2;
}


console.log('El perimetro del triangulo es: '+ areaTriangulo + " cm^2");
console.groupEnd();


//INTEREACTUAMOS CON HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");  //vamos a obtener todo el input
    const value = input.value;  // no queremos obtener todo el input solo el valor escrito
    const perimetro = perimetroCuadrado(value);  //dirijimos ese valor a la funcion areaCuadrado para que haga calculos
    alert(perimetro);  //muestra un cuadro de alerta
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");  //vamos a obtener todo el input
    const value = input.value;  // no queremos obtener todo el input solo el valor escrito
    const area = areaCuadrado(value);  //dirijimos ese valor a la funcion areaCuadrado para que haga calculos
    alert(area);
}

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputLado1");
    const inputLado2 = document.getElementById("InputLado2");
    const inputBase = document.getElementById("InputBase");
    const inputAltura = document.getElementById("InputAltura");
    const lado1 = inputLado1.value;
    const lado2 = inputLado2.value;
    const base = inputBase.value;

    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputLado1 = document.getElementById("InputLado1");
    const inputLado2 = document.getElementById("InputLado2");
    const inputBase = document.getElementById("InputBase");
    const inputAltura = document.getElementById("InputAltura");
    const lado1 = inputLado1.value;
    const lado2 = inputLado2.value;
    const base = inputBase.value;
    const altura = inputAltura.value;

    const area = areaTriangulo(base, altura);
    alert(area);
}

