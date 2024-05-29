
//Estos tres aparecen en el objeto Window en Chrome

//?La alert informa
alert('Hola Mundo'); // Es una instrucción bloqueante. Solo permitirá al usuario seguir
                    //moviéndose en la web cuando hagan click en 'ok'

//? El prompt permite pedir información al usuario
//Podemos recibir un string, un valor o un null en un prompt.

let nombre = prompt('¿Cuál es tu nombre?'); 
console.log( '****' + nombre + '*****');


//? Podemos confirmar info, además de pedirle al usuario si acepta o no acepta algo. 
const seleccion = confirm('¿Está seguro de borrar esto?');
console.log( seleccion );

// console.log( global );
