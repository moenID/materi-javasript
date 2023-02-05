/*
optional chaining atau operator tanda tanya (?) merupakan operator 
yang digunakan untuk mengamankan ketika ingin mengakses property sebuah object dari data nullish.
sehingga, jika mengakses property dari sebuah object dari data nullish
tanpa menggunakan optional chaining operator, maka akan error.
*/

/*
// contoh kode eror saat mengakses property nullish
const person ={};
const country = person.address.country;
document.writeln(`<p>${country}</p>`);
// eror terlihat dalam console web dengan keterangan cannot read property 'country' of undefined.
*/
// kode pengecekan dengan if
const mahasiswa = {};
let alamat;
if (mahasiswa.nama !== undefined && mahasiswa.nama !== null){
    alamat = mahasiswa.nama.alamat;
}

document.writeln(`<p>${alamat}</p>`);

// kode optional chaining 
const orang = {};
const ayah = orang?.nama?.ayah;

document.writeln(`<p>${ayah}</p>`);