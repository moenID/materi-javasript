/*
Konversi String dan Number

di javascript tipe data string dan number dapat dikonversi.
bentuk konvensi tersebut dapat berupa
    - konversi string ke number
    - konversi number ke string

*/

// Contoh masalah kode tanpa konversi.
const nilai1 = "1";
const nilai2 = 1;
const jumlah = nilai1 + nilai2;

document.writeln(`${jumlah}`); //hasil 11

document.writeln("<br>");


/* melakukan konversi string dan number dengan function.
berikut ini beberapa function untuk konversi;

    - parseInt(string) : untuk konversi dari string ke number (bilangan bulat).
    - parseFloat (string) : untuk konversi dari string ke number (bilangan pecahan).
    - Number(string) : untuk korversi dari string ke number (bilangan bulat dan pecahan).
    - number.toString() : untuk konversi dari number ke string.

*/

// contoh kode konversi string ke namber
const value1 = parseInt("1");
const value2 = 1;
const hasil = value1 + value2;

document.writeln(`${hasil}`);

document.writeln("<br>");

// kode konversi number ke string
const a = 1;
const b = 1;
const total = a.toString() + b.toString();
document.writeln(`${total}`);