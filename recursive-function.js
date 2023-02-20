/* Recursive Function
recursive function merupakan kemampuan function memanggil function dirinya sendiri
terkadang memang ada banyak problem, yang lebih mudah diselesaikan 
menggunakan recursive function
seperti pada kasus factorial
*/

// kode factorial loop
function factorial(value) {
    let result = 1
    for ( let i = 1; i <= value; i++) {
        result *= i;
    }
    return result;
}

console.info(factorial(5));
console.info(1 * 2 * 3 * 4 * 5);


// kode factorial recursive

function factorialRecursive(value) {
    if ( value === 1) {
        return 1;
    } else {
        return value * factorialRecursive(value - 1);
    }
}

console.info(factorialRecursive(5));