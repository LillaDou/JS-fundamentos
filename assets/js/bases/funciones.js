
//Los paréntesis indican que es una función
// Es buena práctica que las funciones queden por arriba, y por debajo la llamada a ellas

//! Función tradicional
function saludar ( nombre ) {
    // console.log( arguments );
    // console.log('Hola ' + nombre);
    return 1;

    console.log('Soy un código que está después del return ') //Esto nunca se va a ejecutar
}
//En las funciones tradicionales, o en aquellas en las que aparece la palabra function,
// se puede utilzar el arguments, que permite ver todos los parámetros indicados en los paréntesis
// de la llamada a la función. VER saludar

//! Función anónima
const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre);
}
//Es anónima porque no tiene nombre la función pero al asignarselo a una variable, adapta ese como su nombre. 
// Como se lo asigno a una constante , el nombre no se puede reutilizar. 

//! Función de flecha o lambda function
//Son funciones más eficientes y la forma común de usarlas. 
const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre )=> {
    console.log('Hola ' + nombre);
}
//Al indicar el argumento de nombre, se puede poner dentro de () o sin ellas. Es lo mismo.
//Pero es recomendable usar los ().


const retornoDeSaludar = saludar( 'Fernando', 40, true, 'Costa Rica' );
// console.log( retornoDeSaludar );

// saludar2( 'Stefan' );
// saludarFlecha();
// saludarFlecha2('Melissa');


function sumar(a, b) {
    return a + b;
}

// const sumar2 = (a, b) => {
//     return a + b;
// }

//Si solo tenemos dentro de la función un return, se puede hacer lo siguiente:
const sumar2 = (a, b) => a + b;

// console.log ( sumar2(3,2) );

function getAleatorio() {
    return Math.random();
}

//Transformamos la función anterior en una función de flecha que no tenga llaves/sin return. 
const getAleatorio2 = () => Math.random();


console.log ( getAleatorio2() );
