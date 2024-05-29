
/**
 * Días de la semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

//Entra a un sitio web, para consultar si está abierto hoy...
const dia = 1; // 0: domingo, 1: lunes...
const horaActual = 10;

let horaApertura;
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las XX

// if ( dia === 0 || dia === 6 ){   // Otra manera de escribirlo es:
// if ( [0,6].includes( dia ) ) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Día de semana');
//     horaApertura = 11;
// } 
//? Pero todo esto se puede resumir con el OPERADOR TERNARIO:
horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;
// La interrogación hace el efecto de: esto se cumple? Entonces 9.
// Si no se cumple (indicado con :), entonces 11. 



// if ( horaActual >= horaApertura ){
//     mensaje = 'Está abierto';
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura }`; //! Back tick!! Para concatenaciones de strings
// }
//? Esto se resume en lo siguiente con el OPERADOR TERNARIO:
mensaje = ( horaActual >= horaApertura ) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${ horaApertura }`;

console.log( {horaApertura, mensaje} );