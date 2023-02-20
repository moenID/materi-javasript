/* Strict Mode
saat menjalankan kode program javascript, secara default kode program
tersebut berjalan dalam mode tidak strict, atau istilahnya sloppy mode.
pada ECMAScript 5, diperkenalkan mode strict, dimana ketikka mode strict dijalankan 
maka akan merubah beberapa cara kerja javascript, seperti:
    - merubah beberapa Javascript error yang tadinya silent error, menjadi throw error (terlihat)
    - memperbaiki beberapa kesalahan engine javascript untuk optimisasi
    - menolak beberapa kode perintah yang kedepannya akan digunakann di Ecmascript 

Cara Menyalakan Strict Mode
untuk menyalakan strict mode dapat menambahkan 'use strict' pada baris awal file javascript
atau juga bisa menambahkan fi awal function 
*/

// contoh kode strict mode dan kode menjadi eror
function useStrictMode() {
    'use strict';
    const person = {
        firstName: "Misbah"
    }
    with (person) {
        console.info(firstName);
    }
}