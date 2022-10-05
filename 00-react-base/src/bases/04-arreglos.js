// Arreglos en JS
// const arreglo = new Array( 100 );
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)
// [1 al 100 empty, 1, 2, 3, 4] total array 104 item

const arreglo = [1,2,3,4];
let arreglo2 = [ ...arreglo, 5 ];//add nuevo item al array

const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});


console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );








