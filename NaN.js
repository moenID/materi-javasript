/*
dalam number terdapat tipe data unik yang namanya NaN (Not a Number).
hal ini terjadi karena data string yang dirubah ke number ternyata tidak valid.
NaN sendiri merupakan tipe data dari number yang menyebutkan bahwa ini bukan number.
selain itu jika NaN dioperasikan dengat data number lainnya, maka hasilnya akan tetap NaN.
*/

//contoh kode yang hasilnya NaN
document.writeln(`<p>${parseInt("aku")}</p>`);// hasil NaN
document.writeln(`<p>${parseInt("1aku")}</p>`);// hasil 1
document.writeln(`<p>${parseFloat("kamu")}</p>`); // hasil NaN
document.writeln(`<p>${parseFloat("2.2kamu")}</p>`); // hasil 2.2
// berarti kode parseInt() dan parseFloat() masih mentolerir kesalahan ketik (typo) dibelakang.

document.writeln(`<p>${Number("aku")}</p>`); // hasil NaN
document.writeln(`<p>${Number("1kamu")}</p>`); // hasil NaN
document.writeln(`<p>${Number("2.2kita")}</p>`); // hasil NaN
// berarti untuk function Number() tidak ada toleransi kesalahan.

// contoh kode operasi pada NaN
const nilai1 = Number("kita"); // hasil NaN
const nilai2 = 100;
const total = nilai1 + nilai2; //hasil NaN

document.writeln(`<p>${total}</p>`);

/* 
Function isNaN()
untuk mengecek apakah suatu number adalah NaN atau bukan
bisa melakukan pengecekan melalui function isNaN(number).
hasil dari pengecekan tersebut bernilai boolean
artinya, jika memang NaN berarti true, dan jika bukan berarti hasilnya false.
*/

// contoh kode function isNaN()
const aku = Number("moen");
const kamu = 100;
document.writeln(`<p>${isNaN(aku)}</p>`);
document.writeln(`<p>${isNaN(kamu)}</p>`);