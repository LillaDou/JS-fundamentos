

//!Los métodos son funciones dentro de arreglos. Son los cubitos morados. Son las instrucciones que se ejecutan
//! poniéndo un paréntesis
//! Las propiedades son las variables que están dentro de los arreglos

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);


let primero = juegos[ 2-2 ];
let ultimo = juegos[ juegos.length - 1];
// Se pueden poner cálculos matemáticos 

console.log({ primero, ultimo });


juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
} )
// Va a ejecutar una instrucción A CADA ELEMENTO dentro del arreglo. Al ver esto con el console.log,
//veremos que va a poner el elemento (Zelda), el índice o posición en la que se encuentra (0) y el 
// arreglo (4), indicando que hay 4 elementos dentro. Y así sucesivamente con cada elemento del arreglo


let nuevaLongitud = juegos.push( 'F-Zero' ); //EL push va a insertar un nuevo elemento al final del arreglo
console.log({nuevaLongitud, juegos });


nuevaLongitud = juegos.unshift('Fire Emblem'); //El unshift inserta un nuevo elemento al principio del arreglo
console.log({nuevaLongitud, juegos });


let juegoBorrado = juegos.pop(); //Borra el último elemento del array, pero indica cuál es el elemento. 
//E.g. borra F-Zero, por lo que hay 5 elementos en el array, pero indica que fue F-Zero el juegoBorrado
console.log({ juegoBorrado, juegos});


let pos = 1; //Borrar un elemento en una posición específica. 
console.log(juegos);
let juegosBorrados = juegos.splice( pos, 2);// indicamos que borramos el elemento en la posición 1.
//El número dos indica que queremos eliminar dos elementos del array, empezando por la posición 1(el let=pos)
//Además, indicará cuáles has sido los elementos borrados
console.log({ juegosBorrados, juegos });


//Saber la posición índice de un elemento
let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});

//Si el metroidIndex indica un número negativo, es que no encontró ese elemento en el array. 