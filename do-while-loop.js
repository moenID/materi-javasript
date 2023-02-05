/*
do while loop merupaka perulangan yang mirip dengan while
perbedaannya hanya pada pengecekan kondisi
pengecekan kondisi di while loop, dilakukan di awal 
sebelum perulangan dilakukan, sedangkan di do while loop
dilakukan setelah perulangan dilakukan.
oleh karena itu, dalam do while loop, minimal pasti sekali
perulangan dilakukan walaupun kondisi tidak bernilai true.

penguunakan seperti dlam penampilan menu website
*/

// contoh kode
let bilangan = 1 // coba angka 1 di ganti 100 pasti tetap di jalankan block kodenya.
do {
    document.writeln(`<p> Perulangan ke ${bilangan}</p>`);
    bilangan++ // block kode perulangan
}
while (bilangan <= 10);