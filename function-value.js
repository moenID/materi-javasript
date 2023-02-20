/* Function sebagai value
function tidak hanya bisa digunakan sebagai kode program
yang dieksekusi, namun juga bisa sebagai value
artinya, function bisa disimpan di variable, bisa juga dikirim
melalui parameter ke function lain.
*/

//contoh kode function di variable

function sayHello(name) {
    document.writeln(`<p> Hello ${name}</p>`);
}

let say = sayHello; // memasukan function sayHello ke dalam variable bukan memanngil function, sehingga tanpa kurung()
sayHello("Misbah");
say("Munir");


// contoh kode function di parameter

function giveMeName(callback) {
    callback("Misbah");
}

giveMeName(sayHello);
giveMeName(say);