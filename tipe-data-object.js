/* 
Tipe Data Object

tipe data object merupakan tipe data yang mirip dengan Array
yang membedakan adalah, index pada tipe data object bisa menggunakan string
dan index pada object biasanya di sebut attribute atau properties, bukan index.

penulisan array pada javasript menggunakan kurung kotak [],
sedangkan object menggunakan kurung kurawal {}.
*/ 

// contoh penulisan object kosong
const siswa = {};

// contoh penulisan object yang memuat attribute atau properties

const mahasiswa = {
    "nama" : "Misbah",
    "alamat" : "Sawahan",
    "umur" : 22,
    "menikah" : false,
};

console.table(mahasiswa);
// Contoh kode merubah propeties object
const santri={};

santri["nama"] = "Munir";
santri["alamat"] = "Sawahan";
santri["umur"] = 22;
santri["menikah"] = false;

// kode menghapus
delete santri["menikah"];

console.table(santri);

// data pada nama disebut sebagai key dan munir atau misbah disebut value

// Contoh kode untuk mengakses Properti Object 
console.info(`nama : ${santri.nama}`);
document.writeln(`nama : ${mahasiswa.nama}`);
document.writeln(`umur : ${mahasiswa.umur}`);

// jika lebih dari satu kata gunakan kurung kotak [] dan tanda petik dua (")
const person = {
    "nama lengkap" : "Misbahul Munir",
    "alamat" : "sawahan"
};

document.writeln(`nama : ${person["nama lengkap"]}`);