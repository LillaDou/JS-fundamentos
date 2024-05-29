
//! CICLOS

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while( i < carros.length ) { // Indicamos una condición
//     console.log( carros[i] );
//     // i = i + 1;
//     i++; // Al sumar uno, ayuda a que no sea un bucle infinito
// }

console.warn('While');
// La condición del while ( en este caso, el i<carros.length ) debería ser verdadera para que se ejecute. 
// Es falso cuando es undefined, null y false. Son condiciones falsas que no permitirían que se ejecute el while. 

while( carros[i] ) { // "While carros[i] existe..."
    if( i === 1 ) {
        // break;
        i++;
        continue; // Si se cumple el if, le suma 1 a i y vuelve a empezar con el ciclo while si procede. 
                // A diferencia del break, el continue no rompe el ciclo, sino que obliga a ejecutarlo 
                // una vez más si procede. 
    }

    console.log( carros[i] );
    i++;
}

console.warn('Do While');
// Va a ejecutar el "do" al menos una vez, hasta que se cumpla la condición del while. 
// "It executes a block of code once, then checks a condition (while). If the condition is true, 
// the loop is executed again. This continues until the condition is false."

let j = 0;

do {
    console.log( carros[j] );
    j++;

} while( carros[j] );
