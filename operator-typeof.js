/*
typeof merupakan operator yang bisa kita gunakan untuk melihat tipe data
sebuah value atau variable
operator typeof diperlukan untuk mengecek sebuah value atau
variable, mengingat javascript bahasa yang dynamic.
hasil dari operator typeof adalah string type datanya
berikut daftar hasil operator typeof:
    - type undefined = "undefined"
    - type null = "object"
    - type boolean = "boolean"
    - type number = "number"
    - type BitInt = "bigint"
    - type string = "string"
    - type symbol = "symbol"
    - type function = "function"
    - lainnya = "object"
*/

// contoh kode operator typeof
let data = 10;
if(typeof data === "number"){
    alert("Number");
} else if (typeof data === "string"){
    alert("String");
} else if (typeof data === "bolean"){
    alert("Bolean");
} else if (typeof data === "object"){
    alert("Object");
} else if (typeof data === "undefined"){
    alert("undefined");
} else {
    alert ("cari sendiiri ya guys!")
}