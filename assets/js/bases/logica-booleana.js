
//! Lógica booleana: manera para trabajar con valores booleanos

const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación'); //! Negación con un !
console.log( true ); //true
console.log( !true ); //false
console.log( !false ); // true

console.log( !regresaFalse() ); // Estamos negando la función que da un return falso. Por lo tanto, es true

console.warn('And'); //! true si TODOS los valores son verdaderos
console.log( true && true ); //true
console.log( true && false ); //false
console.log( true && !false ); //true

console.log('==========');
console.log( regresaFalse() && regresaTrue() ); // false
// Debería devolver false porque ambos valores son diferentes. Pero al llamar a la función, 
// es posible que nos muestre en consola el console log de cada uno.
// En este caso, JS lee primero el regresaFalse, y al dar falso, directamente ignora el && regresaTrue
// pues ya sabe que el && debe ser true. 
// En consola veríamos Regresa false + false
console.log( regresaTrue() && regresaFalse() ); // false
// Va a regresar false porque ambos valores son diferentes. Al llamar a la función regresaTrue primero, 
// JS lo leerá y ejecutará el 'Regresa true', después continuará ejecutando el regresaFalse junto con su console.log
// Finalmente, mostrará que false por ser valores diferentes. 
//Resultado en consola: Regresa True + regresa false + false. 

// Muy usado en JS cuando queremos ejecutar funciones de manera condicional.

console.log('===== && =====');
regresaTrue() && regresaFalse(); // También se suele ver así, y es correcto.

console.log( '4 condiciones', true && true && true && false ); //false



console.warn('OR'); //! Es lo contrario a &&. Siempre va a ser true a menos que ambos valores sean false
console.log( true || false ); // siempre que uno de los valores sea verdadero, será true
console.log( false || false ); // solo en caso de que ambos sean falsos, dará false. 

console.log( regresaTrue() || regresaFalse() ); // true, ejecuta regresaTrue primero y al ser
// true, ya deja de ejecutar el resto del console log.
console.log( '4 condiciones', true || true || true || false ); //true


console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150; // 150 -  los 3 valores (true, hola mundo y 150) tienen un valor. 
// Por ello, en pantalla se imprimiría el último valor de la variable. 
const a2 = 'Hola' && 'Mundo' && soyFalso; // false - todas las condiciones deben ser true.
const a3 = soyFalso || 'Ya no soy falso'; // Ya no soy falso
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true; // Ya no soy falso de nuevo - 
// al llegar a un valor que es true (Ya no soy falso de nuevo), entonces ignora el resto. Por
// lo tanto, en consola veremos que a4 es Ya no soy falso de nuevo. 
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true; // true

console.log({a1, a2, a3, a4, a5 });

if ( regresaFalse() && regresaTrue() && (true || true || false) ) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}
// Este tipo de situaciones se pueden dar en el día a día. Lo importante es intentar no pasarnos de
// esto. No es bueno tener cosas muy enrevesadas