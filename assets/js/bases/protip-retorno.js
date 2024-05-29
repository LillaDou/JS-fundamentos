
// function crearPersona( nombre, apellido) {
//     return { nombre, apellido }
            // nombre: nombre,     | Para no repetir 'nombre : nombre', se puede poner solo una palabra.
            // apellido: apellido,
// }

const crearPersona = (nombre, apellido) => ({nombre, apellido});
//Al poner el (), indicamos que queremos que JS haga un return del objeto en conjunto de nombre y apellido


const persona = crearPersona ( 'Fernando', 'Herrera');
console.log( persona );



function imprimeArgumentos() {
    console.log( arguments );
}

const imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log( {edad, args} );
    return args;
}

//? Parámetro/argumento REST: es el ... que añadimos a los arguments en la función. 
//Permite que aparezcan todos los argumentos o parámetros que indicamos en la llamada a la función.
//Después de esto, no puede venir ningún otro parámetro dentro. e.g. (...args, otracosa)
//Si queremos extraer una variable antes del parámetro REST, entonces este debe de tener 
//su propio valor independiente. Por eso añadimos {} en los argumentos del console.log

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({casado, vivo, nombre, saludo});
//Esto permite que se vea el nombre de las variables. Al indicar en la función anterior
//que queremos la edad, no hace falta indicarlo en el array este final. 

const { apellido: nuevoApellido } = crearPersona( 'Fernando', 'Herrera' );
console.log({ nuevoApellido });
//Lo mismo ocurre en esta función. Si queremos cambiar el nombre de la variable, se indica de esta manera. 

//! Desestructuración de argumentos

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    // edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {
//     console.log( 'nombre',personaje.nombre );
//     console.log( 'codeName',personaje.codeName );
//     console.log( 'vivo',personaje.vivo );
//     console.log( 'edad',personaje.edad );
//     console.log( 'trajes',personaje.trajes );
// }

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes } ) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );

//A raiz de un objeto, podemos hacer una función donde los argumentos son las diferentes propiedades
//del objeto. En caso de que exista la posibilidad de que alguno de los valores no esté disponible, 
//por ejemplo, que no tengamos la propiedad de edad en el objeto, podemos poner un valor predeterminado en
//el argumento de la función. En este caso, hemos puesto que en caso de que no haya una edad, el valor predeterminado
//de este será 15. 
//Esto deja nuestro código más limpio y ordenado, en comparación con la función puesta encima comentada. 