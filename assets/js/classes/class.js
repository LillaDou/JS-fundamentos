//Clases - con Upper Camel Case
//Por defecto, todas las clases tiene implementado el 'use strict'

class Persona {

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    //Set: se usa para establecer un valor
    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();//PAra que la comida aparezca en mayúsculas
    }

    //Get: se usa para recuperar un valor
    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }


    //Métodos o funciones dentro de clases
    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }

}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Iron Man', 'Soy Iron Man');
// console.log(ironman);

spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';

console.log(spiderman.getComidaFavorita);
console.log(spiderman);


