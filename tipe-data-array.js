/*
1. Tipe data Array
aray merupakan data yang berisikan kumpulan data.
aray di  javascript memiliki sifat yang dinamis, maksudnya data array bisa
bertambah dengan sendirinya saat data lain di masukkan ke dalam array.

2. Cara kerja Array
setiap data di Array akan disimpan dalam posisi berurutan
di mulai dari 0
setiap data ditambahkan ke Array, otomatis data disimpan
di urutan terakhit.
Uratan dalam Array disebut Index. ex ; 0, 1, 2, 3 dst.
Index array di mulai dari 0. sehingga jika panjang array 4
berarti indexnya sampai 3.

3. Daftar Operasi di Array
    - operasi array.push(value) : menambahkan data ke Array
    - operasi array.length : mendapatkan panjang Array
    - array[index] : mendapatkan data di posisi index
    -array[index] = value : mengubah data di posisi index
    - delete array[index] : menghapus data di posisi index,
                            namun index tidak bergeser.

* catatan:
tidak ada batasan data yang masuk ke dalam array
bahkan sebuah array dapat masuk ke dalam array. atau bisa disebut multidimensional array.
*/

// contoh Array kosong (belum ada data)
let namaArray = [];

document.writeln(namaArray);
document.writeln("<br>");

// contoh Array yang sudah ada isinya
let arrayNama = ["misbah", "Munir", "2020", "true"];

document.writeln(arrayNama);
document.writeln("<br>");

// contoh kode menambah data dengan operasi aray.push
const names = [];
names.push("Misbah");
names.push("munir, 2020");
document.writeln(names);

// kode melihat hasil di console dalam bentuk table
console.table(names);
document.writeln("<br>");

// contoh kode operasi array[index]
console.info(names[2]);

//contoh kode array[index] = value
names[1] = "moen";
console.table(names);

// contoh kode delete array[index]
delete names[2];
console.table(names);
