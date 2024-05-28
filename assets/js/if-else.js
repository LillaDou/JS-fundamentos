

let a = 1;

if ( a >= 10) { // Excepciones: undefined, null, una asignación...
    console.log( 'A es mayor o igual a 10' );
} else {
    console.log( 'A es menor a 10' );
}

// console.log('Fin de programa');

const hoy = new Date();
// El new me permite crear una nueva instancia del objeto Date. 

console.log( hoy );
let dia = hoy.getDay(); // 0: Domingo, 1: lunes, 2: martes...

console.log( {dia} );

if ( dia === 0 ) {
    console.log( 'Domingo' );
} else if ( dia === 1 ) {
    console.log( 'Lunes' );

    // if ( dia === 1) {
    //     console.log( 'Lunes' );
    // } else {
    //     console.log( 'No es lunes ni domingo' );
    // }
} else if ( dia === 2 ) {
    console.log( 'Martes' );
} else {
    console.log( 'No es lunes, martes o domingo' );
}

// = -> regresa una asignación. Es decir, el día ahora va tener el valor de 0
// Al hacer condiciones, no se puede usar un =.
// == -> es una equivalencia. Evalúa que el valor interno sea igual, pero da igual el tipo de dato. 
//E.g. 2 == '2'. Esto devuelve true, porque los valores son iguales aunque el tipo de dato no coincida (number y string)
// === -> Es evaluar que los valores y el tipado sean exactamente idénticos. 
//E.g. 2 === '2'. Esto devuelve false porque los tipos de datos son distintos (number - string), a pesar de que los valores son iguales. 

//! Sin usar If Else, o Switch, únicamente objetos o arreglos
//! imprimir en consola el día de la semana:

dia = 1; //0: domingo, 1: lunes,...

const diaLetras = {
    0: 'domingo',
    1: 'lunes', 
    2: 'martes', 
    3: 'miércoles', 
    4: 'jueves', 
    5: 'viernes', 
    6: 'sábado',
}

console.log( diaLetras[dia] || 'Día no es válido');
// Esto "||" simboliza el operador "or". 
// Es util para preguntar si el diaLetras[dia] tiene valor o no. En caso de no sea null
// o undefined, entonces indicará que el Día no es válido. 

//! Este ejercicio se puede resolver también con un arreglo: 

const diaLetras2 = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
console.log( diaLetras2[dia] );
