/* Undifined merupakan kata kunci di javascript.
undifined sendiri merupakan sebuah tipe data.
sebuah variable yang belum ditambahkan nilai, maka artinya
variable tersebut bertipep data undifined.
undifiined itu berbeda dengan null dibahasa pemograman lain.
*/

// contoh kode
let name;
if (name === undefined){
    alert("UNDEFINED");
} else {
    alert("DEFINED");
}


// kode undefined array value
const names = ["misbah", "munir"];
if (names[2] === undefined){
    alert("data undefined");
} else {
    alert(`hello${names[2]}`);
}
