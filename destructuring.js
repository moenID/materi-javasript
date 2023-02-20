/* Destructuring

destructuring merupakan fitur yang bisa digunakan untuk membongkar value-value di Array
atau object dalam variable-variable.
fitur ini sangat mempermudah ketika ingin mengambil data dari array atau object tanpa harus
melakukan pengambilan data satu persatu.
*/

// contoh kode pengambilan data di array secara manual
const names = ["Misbah", "Munir", "Adrik"];
const firstName = names[0];
const middleName = names[1];
const lastName = names[2];

document.writeln(`<p> ${firstName} </p>`);
document.writeln(`<p> ${middleName} </p>`);
document.writeln(`<p> ${lastName} </p>`);

// contoh kode destructuring
const nama = ["Misbah", "Adrik", "Munir", "Malik", "Abdul", "Aziz"];
const [namaDepan, namaTengah, namaAkhir, ...tambahan] = nama;

document.writeln(`<p> ${namaDepan} </p>`);
document.writeln(`<p> ${namaTengah} </p>`);
document.writeln(`<p> ${namaAkhir} </p>`);
document.writeln(`<p> ${tambahan} </p>`);

// contoh kode destructuring dalam object
const person = {
    nama1: "Misbah",
    nama2: "Munir",
    alamat: {
        jalan: "Jalan Bagor",
        kota: "Sleman",
        negara: "Indonesia" 
    },
    hobby: "coding",
    channel: "belum punya"
}

const {nama1, nama2, alamat, ...other} = person;
document.writeln(`<p> ${nama1} </p>`);
document.writeln(`<p> ${nama2} </p>`);
document.writeln(`<p> ${alamat.jalan} </p>`);


/* Destructuring FUnction parameter
destructuring function parameter bisa dilakukan untuk mengambil nested data
dalam array atau object yang berada dalam function
*/

// contoh kode destructuring function parameter object

function displayPerson({name, lahir, rumah}) {
    document.writeln(`<p> ${name} </p>`);
    document.writeln(`<p> ${lahir} </p>`);
    document.writeln(`<p> ${rumah} </p>`);
}

const orang = {
    name: "Misbah",
    lahir: "Mei",
    rumah: "Sawahan"
};

displayPerson(orang);

// contoh kode destructuring function parameter array

function sum([first, second]) {
    return first + second;
}

document.writeln(`<p>${sum([10, 10])}</p>`);
document.writeln(`<p>${sum([12, 10])}</p>`);

/* Defaulf Value
destructuring di javascript bisa menambahkan default value
jadi jika melakukan destructuring terhadap array, dan ternyata tidak ada datanya
maka bisa menambahkan default value
hal itu juga bisa dilakukan dalam object, jika property dalam object
tidak ada, bisa ditambahkan default value.
*/

// contoh kode default value Destructuring Array dan bisa juga untuk object

const namaOrang = ["Misbah", "Munir"];
const [namaDepanOrang, namaTengahOrang, namaAkhirOrang = "Muhammad"] = namaOrang;

document.writeln(`<p> ${namaAkhirOrang} </p>`);

/* Menggunakan Nama Variable Lain
saat melakukan destructuring di Array, bisa dengan mudah membuat nama 
variable sesuka hati, namun pada saat destructuring, nama variable harus sama 
dengan nama property.
juga bisa menggunakan nama variable lain saat melakukan destructuring object jika mau.
*/