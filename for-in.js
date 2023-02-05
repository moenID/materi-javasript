/*
for in merupakan perulangan for yang digunakan untuk mengiterasi 
seluruh data property di object atau index array
walaupun for in bisa digunakan untuk Array, namun tidak direkomendasikan
untuk Array, karena biasanya jarang sekali butuh data index untuk Array, 
namun bisa menggunakan for of
*/

// Kode for in di object 
const person = {
    firstName: "Misbahul",
    middleName: "Munir",
    alamat: "Sawahan"
};

for (const property in person){
    document.writeln(`<p>Property ${property} : ${person[property]}</p>`)
}