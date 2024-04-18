

const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};
//Es recomendable que los keys y values estén ordenados alfabéticamente. 

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);// Esta es otra forma de acceder a los elementos que queremos
console.log('Edad', personaje.edad);

console.log('Coors', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('No Trajes', personaje.trajes.length);
console.log('Último Traje', personaje.trajes[ personaje.trajes.length - 1 ]);

const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('Última película', personaje['ultima-pelicula']);


//! Más detalles

delete personaje.edad; 
console.log(personaje);
//El delete va a borrar el elemento que no queremos que se vea del objeto literal. En este caso, 
//la edad. 


personaje.casado = true;
//Si necesitamos crear una nueva propiedad en el objeto que se va a crear solo en el momento de ejecución...


const entriesPares = Object.entries( personaje );
console.log( entriesPares);
//Si queremos trabajar con nuestro objeto como si fuera un array con valores. Ayudaría también 
//a saber el valor de cada key.

//? personaje = true;
// Esto va a dar error si cambiamos el objeto personaje de let a const.
// Vamos a poder hacer cambios en las propiedades del objeto (como el delete o trabajar con ello como un array),
// pero no podremos hacer cambios que afecten directamente al objeto. Como por ejemplo, hacer el personaje = true


Object.freeze( personaje );
//Congela el objeto hasta el momento que indicamos el .freeze. Es por ello por lo que el personaje.dinero
//no aparece en consola. 
// A parte de bloquear las propiedades existentes, no permite tampoco hacer cambios en los existentes. 
// OJO! Afecta a las propiedades que afectan directamente al objeto. Pero no afecta a las propiedades que estan 
// dentro de entriesPares. Por ejemplo, no podemos cambiar la propiedad 'dirección', pero si la 'ubicación' dentro
// de la dirección. 
personaje.dinero = 1000000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames( personaje );
const valores     = Object.values( personaje );
console.log( { propiedades, valores } );
//El getOwnPropertyNames es para tener un listado de todas las propiedades que tenemos. Va a crearnos un array.
// El values nos permite ver en formato array los valores de cada una de las propiedades que tenemos. 