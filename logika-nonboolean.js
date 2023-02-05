/*
operator logika untuk type data non boolean adalah AND (&&) dan OR (||)

Operator OR (||) di non boolean
operator logika OR (||), membaca dari kiri ke kanan.
operator ini akan mengambil nilai pertama yang truthy
jika tidak ada satupun yang bernilai truthy, maka yang terakhir yang
akan diambil
*/

// contoh kode truthy OR
document.writeln("Hello" || "");
document.writeln("<br></br>");
document.writeln("" || 0);

// pemakaian kode truthy 
const mahasiswa = {
    firstName: "Misbah",
    lastName: "Munir"
}

const nama = mahasiswa.firstName || mahasiswa.lastName;

document.writeln(`<p>${nama}</p>`);

// Operator AND (&&)
document.writeln("Hello" && "");
document.writeln("<br></br>");
document.writeln("" && 0);
