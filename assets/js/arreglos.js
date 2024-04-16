

// const arr = new Array(10);
// console.log(arr);
//Esta es una manera de hacer arreglos. Es muy común usar el nombre de arr

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({ videoJuegos });
//Las llaves dentro del console.log simboliza que es un objeto literal.
console.log( videoJuegos[0]); //Hace referencia a la primera posición del arreglo

let arregloCosas = [
    true,
    123,
    'Fernando',
    1+2,
    function() {},
    () => {},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr Willy', 
        'Woodman'
    ]],
];
// console.log(arregloCosas);

console.log(arregloCosas [7][4][1] );
// Esto indica que queremos el elemento 7 de nuestro arreglo, y dentro del arreglo del elemento 
// 7, el elemento 4, que es el arreglo que hay dentro. A su vez, dentro de este, la posición 1
// que es Woodman. 