/*
Nullist value itu tipe data null dan undefined
nullist coalescing operator (??) merupakan operator mirip 
dengan ternary operator, bedanya adalah kondisinya.
jika datanya null atau undefined, maka baru value default yang diambil.
*/

// contoh kode tanpa nullish 
let parameter;

let data = parameter;
if (data === undefined || data === null){
    data = "Nilai Defaulf";
}

document.writeln(`<p>${data}</p>`);

let orang;

let nama = orang ?? "Nilai Default";
document.writeln(`<p>${nama}</p>`);
