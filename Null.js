/*
Null merupakan representasi data kosong
null berbeda dengan undefined, null berarti variable sudah 
ditambahkan hanya saja valuenya null
sedangkan undefined adalah variable belum ditambahkan value apapun
*/

// contoh kode hasil null
const firstName = null;
if(firstName === undefined){
    alert("UNDEFINED");
} else if (firstName === null) {
    alert("Null")
} else {
    alert(firstName);
}