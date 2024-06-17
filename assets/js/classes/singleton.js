

//Es una instancia única de mi clase.
// Si la clase es un molde de galletas, el resultado va a ser siempre la misma galleta (instancia)

class Singleton {

    static instancia; // undefined
    nombre = '';

    constructor( nombre = '' ) {

        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }

}

const instancia1 = new Singleton('IronMan');
const instancia2 = new Singleton('SpiderMan');
const instancia3 = new Singleton('BlackPanther');


console.log(`Nombre en la instancia1 es: ${ instancia1.nombre }`);
console.log(`Nombre en la instancia2 es: ${ instancia2.nombre }`);
console.log(`Nombre en la instancia3 es: ${ instancia3.nombre }`);