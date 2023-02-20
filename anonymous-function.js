/* Anonymous Function
pada pembahasan sebelumnya, membuat function dengan nama
namun untuk membuat function bisa tanpa menggunakan nama
atau istilahnya anonymous function
function anobymous bisa dibuat dalam sebuah variable atau 
juga bisa dibuat ketika mengisi parameter
*/

// contoh kode anonymous function dalam variable
let say = function (name) {
    document.writeln(`<p> Hello ${name}`);
};

say("Misbah");

// anonymous function sering digunakan dalam javascript


// contoh kode anonymous function dalam parameter

function giveMeName(callback) {
    callback("Adrik");
}

giveMeName(function (name){
    document.writeln(`<p> Hello ${name}`);
});

