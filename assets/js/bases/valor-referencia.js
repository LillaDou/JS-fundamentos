


let a = 10;
let b = a;
a = 30;

console.log({a, b});


let juan = { nombre: 'Juan'};
let ana  = {...juan};
ana.nombre = 'Ana';
// Los tres puntos son los operadores spread. Se da cuando no están dentro del argumento de la función
// Los operadores spread separan los elementos en objetos o arreglos. 
console.log({ juan, ana});


const cambiaNombre = ( {...persona} ) => {
    persona.nombre = 'Tony';
    return persona;
}
// Si queremos usar el operador spread en una función, debemos meter el argumento en llaves y añadir los puntos. 


let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );

console.log({ peter, tony });

//Arreglos

const frutas = ['Manzana', 'Pera', 'Piña'];


console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

// Podemos separar los arreglos con el operador spread o con un .slice. Con el console.time
//estamos mirando en consola la rapidez con la que se ejecutan los  dos tipos de separadores. 
// El spread es un poco más rápido y es más recomendable usar el operador spread. 


otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas }); //Tabla para ver todo de forma más visual