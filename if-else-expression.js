/* If Expression
if merupakan kunci percabangan. arti dari percabangan adalah
kode tertendu dieksekusi ketika suatu kondisi terpenuhi.
oleh karena itu semua bahasa pemograman mendukung if expression, terutama 
javascript.

*/

// contoh kode if expression

const nilaiLulus = 85;

if (nilaiLulus > 70){
    document.writeln("<p> Selamat Anda Lulus</p>");
};
// kode yang berada dalam kode kurung kurawal disebut blok program

/* Else Expression
blok if akan dieksekusi jika kondisi if bernilai true
namun, terkadang seseorang ingin mengeksekusi program tertentu 
jika kondisi if bernilai false. oleh karena itu, hal ini
bisa dilakukan menggunakan else expression.
*/

// contoh kode program Else Expression
const nilaiKerja = 85;

if (nilaiLulus > 90){
    document.writeln("<p> Selamat Anda Naik Pangkat</p>");
} else {
    document.writeln("<p> Semoga tahun depan naik</p>");
};


/* Else If Expression
terkadang dalam if membutuhkan beberapa kondisi. pada kasus seperti ini
di javascript bisa menggunakan else if expression.
*/

// contoh kode program else if expression
const nilai = 77;

if (nilai > 80){
    document.writeln("<p>Kerja Bagus</P>");
} else if (nilai > 70){
    document.writeln("<p>Jangan Kecil Hati</p>");
} else {
    document.writeln("<p> Coba Lagi Jangan Menyerah</p>");
};