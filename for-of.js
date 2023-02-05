/*
Jika For In digunakan untuk melakukan iterasi property atau index, for of digunakan
untuk melakukan iterasi terhadap isi value dari iterable object
seperti array, string, dll
for of tidak digunakan untuk melakukan iterasi data  di object
karena bukan iterable

untuk iterator atau iterable nanti di bahas di object oriented
*/

//contoh kode for of

const names = ["Misbahul", "Munir", "Sawahan"];

for (const name of names){
    document.writeln(`<p>${name}</p>`);
}