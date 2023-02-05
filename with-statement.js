/*
with statement merupakan fitur yang digunakan untuk menurunkan sabuah scope data
dengan menggunakan with statement, kita bisa mengakses property dalam sebuah data
tanpa harus menyebut datanya.
*/

//contoh kode tanpa with statement

const person = {
    firstName: "Misbahul",
    lastName: "Munir",
    alamat: "Sawahan"
}

document.writeln(`<p> ${person.firstName}</p>`)
document.writeln(`<p> ${person.lastName}</p>`)
document.writeln(`<p> ${person.alamat}</p>`)

// contoh kode dengan with statement
const orang ={
    namaDepan: "Misbahul",
    namaBelakang: "Munir",
    tinggal: "Sawahan"
}

with (orang){
    document.writeln(`<p>${namaDepan}</p>`)
    document.writeln(`<p>${namaBelakang}</p>`)
    document.writeln(`<p>${tinggal}</p>`)
}