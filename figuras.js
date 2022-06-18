//CODIDO DEL CUADRADO
console.group("CUADRADOS");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El permitro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
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
    return lado1 + lado2 + base
} 
//console.log('El perimetro del triangulo es: '+ perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log('El perimetro del triangulo es: '+ areaTriangulo + " cm^2");
console.groupEnd();


