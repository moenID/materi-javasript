/* Arrow Function
Arrow function merupakan pembuatan function yang lebih sederhana 
dari function biasanya. Namun terdapat limitasi dan juga tidak bisa
digunakan di semua situasi.
Dinamakan arrow function karena mengginakan tanda => (seperti panah)
berikut beberapa contoh kekuarangan arrow function:
    - tidak memiliki fitur argument object
    - tidak bisa menggunakan function generator
    - tidak bisa mengakses this (yang akan dibahas di function di object)
    - tidak bisa mengakses super (yang akan di bahas di Javascript Object Oriented Programing)
*/

// Arrow function hampir mirip dengan anonymus function (harus di dalam variable)

// contoh kode arrow function

const sayHello = (name) => {
    const say = `Hello ${name}`;
    document.writeln(say);
}

sayHello("Misbah");

/* Arrow function tanpa block
jika sebuah arrow function isinya sederhana, misalnya satu baris
arrow function bisa dibuat tanpa harus menggunakan block kurung kurawal {}
*/

const hello = (name) => document.writeln(`<p> Hello ${name}</p>`);

hello("Munir");

/* Arrow Function return value
arrow function bisa mengembalikan value, sama seperti function biasa
jika menggunakan bllock, maka perlu menggunakan kata kunci return
jika tidak menggunakan block, tidak perlu menggunakan kata kunci return
*/

// contoh kode arrow function return value 
const jumlah = (pertama, kedua) => {
    return pertama + kedua
}
const hasil = jumlah(10, 5);
document.writeln(`<p> ${hasil} </p>`)

// contoh kode arrow function tanpa return value
const sum = (first, second) => first + second; 

document.writeln(sum(10,10));

/* arrow function tanpa kurung parameter
jika parameter di arrow function hanya satu, 
bisa tidak menggunakan  kurung pada parameter
*/

// contoh kode tanpa kurung parameter
const helo = name => document.writeln(`<p>hello ${name}</p>`);
helo("Misbah");


/* Arrow function sebagai parameter
karena arrow function seperti anonymous function
jadi bisa menggunakan arrow function sebagai parameter di function lain
*/

// contoh kode arrow function sebagai parameter

function giveMeName(callback) {
    callback("Misbah");
}

giveMeName(name => document.writeln(`<p> Hello ${name} </p>`));