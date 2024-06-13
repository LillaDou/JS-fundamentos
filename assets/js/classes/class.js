//Clases - con Upper Camel Case
//Por defecto, todas las clases tiene implementado el 'use strict'

class Persona {

    nombre;
    codigo;
    frase;

    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

    }


}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Iron Man', 'Soy Iron Man');

console.log(spiderman);
console.log(ironman);