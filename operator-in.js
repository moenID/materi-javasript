/*
In operator adalah operator yang bisa dilakukan untuk mengecek apakah 
sebuah properti atau attribute berada di dalam object atau tidak
jika properti tersebut berada di dalam object, maka hasilnya true, 
sedangkan jika tidak hasilnya false
tidak hanya di object, operator in juga bisa digunakan untuk mengecek index di array.

catatan:
in operator hanya akan mengecek apakah sebuah property
atau index ada atau tidak. sehingga walaupun property atau index
berupa undefined atau null, maka akan tetap dianggap ada.
*/

// contoh kode operator in

const mahasiswa = {
    "Nama Depan" : "misbah",
    "Nama Belakang" : "Munir"
}

const result = "Nama Depan" in mahasiswa;
document.writeln(`<p>${result}</p>`);

// in operator undefined atau null
const person = {
    "Nama": undefined
}
const hasil = "Nama" in person;
document.writeln(`<p>${hasil}</p>`);

const orang = [null, "misbah", null];
const namaOrang = 2 in orang;
document.writeln(`<p>${namaOrang}</P>`);
