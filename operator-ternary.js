/* 
ternary operator merupakan operator sederhada dari if statement
ternary operator terdiri dari kondisi yang dievaluasi, 
jika menghasilkan true nilai pertama yang diambil,
jika false maka nilai kedua yang diambil.
*/

// contoh kode tanpa ternary operator
const nilai = 75;
let ucapan;

if(nilai >= 75){
    ucapan = "Selamat Anda Lulus";
} else {
    ucapan = "Silahkan Coba Lagi";
}

document.writeln(`<p>${ucapan}</p>`);


// contoh kode tenary operator
const umur = 21;
const kata = umur >= 22 ? "Selamat Ulang TAhun" : "Selamat Anda Muda";
// jika "Selamat Ulang Tahun" bernilai true, maka ia yang diambil, jika salah maka pernyataan setelahnya.
document.writeln(`<p>${kata}</p>`);
