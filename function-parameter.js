/* Function Parameter
sebuah informasi bisa dikirim ke function yang akan dipanggil
untuk melakukan hal tersebut, perlu menambahkan parameter atau
argument di function yang sudah dibuat.
parameter ditempatkan di dalam kurung() di deklarasi method
parameter bisa lebih dari satu, dan jika lebih dari satu 
harus dipisah dengan tanda koma. 
*/

// contoh kode function dengan parameter

function sayHello(firstName, lastName) {
    document.writeln(`<p>Hello ${firstName} ${lastName}</p>`);
}

// memanggil function dengan parameter
sayHello("Misbahul", "Munir");
sayHello("Muhammad", "Adrik");