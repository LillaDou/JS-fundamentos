
const dia = 0; // 0: Domingo

switch( dia ) {
    case 0:
        console.log('Domingo');
        break; //Si este 'case' se cumple, no continúa ejecutando el resto con el break. 
    case 1:
        console.log('Lunes');
        break;
    case 2: 
        console.log('Martes');
        break;
    default: 
        console.log('No es lunes, martes o domingo');
}

// El default permite poner algo predeterminado en caso de que no se cumplan los casos indicados. 
// La condición del switch (el 'dia') es como si pusiésemos lo siguiente: dia === x
// Valora que la variable sea el mismo tipo de dato como el valor. Si dia = '2' (tipo string),
// los 'case' deberían ser: case '0', pues deben continuar siendo de tipo string.
// En caso de que no lo sea, se vería en consola el default. 