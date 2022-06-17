var nombre = 'fernando';
var apellido = 'quiceno';
var nombreUsuario = 'fero1394';
var edad = 28;
var correoElectronico = 'fernando.quiceno@sofka.com';
var mayordeEdad = true;
var dineroAhorrado = 18000000.00;
var deudas = 12000000.00;


var nombreCompleto = nombre+apellido;
var dineroReal = dineroAhorrado-deudas;

console.log(nombreCompleto);
console.log(dineroReal);


//FUNCIONES

const name = 'Fernando';
const lastname = 'Quiceno Gomez';
const nickname = 'fero';

const quienSoy = (nombres, apellidos, nick) => {

    var nombreCompleto = nombres + apellidos;

    console.log('Mi nombre es: '+nombreCompleto+', pero prefiero que me digas '+ nick+'.');
}

quienSoy(name,lastname,nickname);


//CONDICIONALES

const tipoSuscripcion = (suscripcion) => {
    if(suscripcion === 'Basic'){
        console.log('Puedes tomar casi todos los cursos de Platzi durante este MES');
    }
    else if(suscripcion === 'Expert'){
        console.log('Puedes tomar casi todos los cursos de Platzi durante un AÑO');
    }
    else if (suscripcion === 'Expert+'){
        console.log('Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año');
    }
    else{
        console.log('Solo puedes tomar los cursos GRATIS')
    }
}

tipoSuscripcion('Expert');

//CICLOS

var i = 0;

while(i<=5){
    console.log(i);
    i++;
}

/*
var solucion = 0;
do{
    solucion = Number(prompt('Cuando es 2+2?'))
}while(solucion!==4)
*/


//ARRAYS

const suscripciones = ['basic','expert','free'];

const primerElemento = (parametro) => (console.log(parametro[0]));

primerElemento(suscripciones);

