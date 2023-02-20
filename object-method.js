/* Object Method
pada tipe data, sudah dipelajari tipe data tentang Object
karena sebenarnya function juga merupakan salah satu tipe data,
jadi function bisa ditambahkan dalam property di object
cara pembuatannya sama seperti dengan function sebagai value
function di object kadang disebut juga sebagai Object Method
*/

// Contoh kode membuat object dengan method

const person1 = {
    name: "Misbah",
    sayHello1: function (name) {
        document.writeln(`<p> Hello ${name} </p>`);
    } 
}

person1.sayHello1("Munir");

// contoh 2
function sayHello2(name) {
    document.writeln(`<p> Hello ${name}`);
}

const person2 = {
    name: "Munir",
    sayHello2: sayHello2
}

person2.sayHello2("Misbah")

// contoh kode menambah method ke object
const person3 = {
    nama: "Muhammad",
};

person3.sayhello3 = function (name) {
    document.writeln(`<p> Hello ${name} </p>`)
}

person3.sayhello3("Adrik");
