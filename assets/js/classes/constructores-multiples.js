
class Persona {

    static porObjeto({ nombre, apellido, pais }) {
        return new Persona( nombre, apellido, pais );
    }

    constructor( nombre, apellido, pais ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log( `info: ${ this.nombre }, ${ this.apellido }, ${ this.pais}` );
    }
}

const nombre1 = 'Melissa',
    apellido1 = 'Flores',
    pais1 = 'Honduras';

const fher = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    pais: 'Costa Rica'
}

const persona1 = new Persona( nombre1, apellido1, pais1 );
const persona2 = Persona.porObjeto( fher );

persona1.getInfo();
persona2.getInfo();

//Para no repetir las variables cada vez que queramos hacer una nueva instancia (como por ejemplo
//con la persona1, que tiene nombre1, apellido1, pais1), podemos crear un método estático
//con esa estructura, para luego poder llamar directamente un objeto (fher).
//Tiene una estructura diferente a la hora de crear la nueva instancia, pero es una manera
//más simple de crear instancias nuevas. 