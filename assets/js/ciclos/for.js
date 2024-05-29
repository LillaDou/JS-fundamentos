
//! FOR

const heroes = ['Batman', 'Superman', 'Mujer maravilla', 'Aquaman'];

console.warn('FOR tradicional');
//!     1.       2.     3. 
for( let i = 0; i < heroes.length; i++ ) {
    console.log( heroes[i] );
}
//! 1. Definición de la variable de control / donde se inicializa la variable
//! 2. Condición para salir del ciclo / se va a ejecutar siempre y cuando se cumpla la condición
//! 3. Cómo queremos que la variable vaya aumentando / incremento


console.warn('FOR in');
for( let i in heroes ) {
    console.log( heroes[i] );
}
// Es lo mismo que el FOR tradicional, pero de una manera más límpia y simplificada. 
// En este caso, hacemos el mismo bucle for, pero centrándonos en el índice o posición del arreglo (posición
// 0, 1, 2...)

console.warn('FOR of');
for( let heroe of heroes) {
    console.log( heroe );
}
// Hacemos el bucle for centrándonos en el valor de heroe (Batman, Superman, ...)
// Es común usar el singular del nombre de la variable en lugar de i. En este caso, héroe.