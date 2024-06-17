//Clases - con Upper Camel Case
//Por defecto, todas las clases tiene implementado el 'use strict'

class Persona {
    //Los static no son clases instanciadas, sino trabajamos con la estructura 
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre ); //undefined, porque no hay una instancia de la misma al trabajar con un método estático 
        console.log('Hola a todos, soy un método stático');

    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    //Se va a ejecutar siempre que cree una nueva instancia de la clase
    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
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

// console.log(spiderman.getComidaFavorita);
// console.log(spiderman);

console.log('Conteo estático', Persona._conteo);
console.log( Persona.conteo );
Persona.mensaje();

//Se pueden definir propiedades estáticas fuera de la clase, pero no es recomendable
//pues no quedará todo ordenado y claro para otros programadores
Persona.propiedadExterna = 'Hola Mundo';
console.log( Persona.propiedadExterna)