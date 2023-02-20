/* Arrow Function di Object
sebelumnya sudah dibahas tentang arrow function
Arrow function bisa digunakan di sebagai object method
Namun, perlu diketahui, arrow function tidak bisa digunakan
untuk mengakses argument object, function generator, kata kunci this,
dan kata kunci super (di bahas dalam materi Object Oriented Programming)
jadi pastikan gunakan Arrow function hanya memang ketika tidak 
membutuhkan fitur-fitur di atas.
*/

// contoh kode arrow function di object method

const person = {
    name: "Misbah",
    sayHello: (name) => {
        document.writeln(`<p> Hello ${name} </p>`)
    }
};

person.sayHello("Munir");

// jika menggunakan this dalamm arrow function object yang dihasilkan window