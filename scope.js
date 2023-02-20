/* Scope

scope merupakan area akses sebuah data 
ada dua jenis scope, yaitu global scope dan local scope
setiap membuat function, maka local scope akan dibuat untuk function tersebut
data di global scope bisa diakses dari local scope,
namun data di local scope hanya dapat diakses di local scope tersebut
atau di local scope di bawahnya (dalam kasus inner function)
*/

// contoh kode global scope

let counter = 0; // global scope

function hitMe() {
    // local scope function hitMe
    counter++; // dapat diakses
}

hitMe();
hitMe();

console.info(counter);

/*// contoh kode local scope

function first() {
    let firstVariable = "first";
    console.info(firstVariable); // dapat mengakses local scope
}

function scond() {
    let scondVariable = "scond";
}

first()
scond()

console.info(firstVariable); // tidak dapat mengakses local scope
console.info(scondVariable);  // tidak dapat mengakses local scope
*/
// kode nested function

function pertama() {
    let variablePertama = "Pertama";

    function kedua() {
        console.info(variablePertama); // dapat mengakses local scope dalam function pertama
    }

    kedua();
}

pertama(); // function ini tidak ditampilkan karena sebelumnya ada eror yaitu dalam local scope atas, jika ingin bisa di akses dibuat koment dahulu.