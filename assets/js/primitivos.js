
//! Tipo String

let nombre = 'Peter Parker';
console.log( nombre );

nombre = 'Ben Parker';
console.log( nombre );

nombre = "Tía May";
nombre = `Tía May`;
//Estas son otras formas de indicar que la variable son de tipo string

console.log( typeof nombre );
//En consola, esto indicaría que es de tipo STRING

nombre = 123;
console.log( typeof nombre );
//Al hacer este cambio, en consola aparecerá que el tipo de dato ha cambiado, de string a number. 

//! Tipo Boolean

let esMarvel = true;
console.log( typeof esMarvel);

//! Tipo Number

let edad =  33;
console.log( typeof edad);

//! Tipo Undefined

let superPoder;
console.log( typeof superPoder );

//! Tipo Null

let soyNull = null;
console.log( typeof soyNull );
//Al imprimir esto, da como resultado "object". Eso es porque el null es considerado un objeto en ocasiones

//! Tipo Symbol

let symbol1 = Symbol('a'); //Ojo, en mayúscula!
let symbol2 = Symbol('a');

console.log( typeof symbol1 );
console.log( symbol1 === symbol2 );
//Estamos comprobando con esto último si las dos variables son iguales. Al grabar los cambios, 
//vemos que indica false. Esto será explicado más adelante