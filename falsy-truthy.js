/* 
1. FALSY 
falsy mesupakan value yang dalam konteks boolean dianggap false.
kondisi itu di javascript tidak hanya bisa boolean, tapii di luar 
boolean bisa. namun harus tahu beberapa tipe data falsy atau dianggap false.
fungsi ini bermanfaat salah satunya untuk merubah tipe data selain
boolean menjadi boolean. namun tetap ada aturaanya yaitu
dengan grouping.

berikut data yang dianggap falsy:
    - false : boolean false
    - 0, -0 : number 0 dan -0 dianggap false
    - "", '', `` : semua string kosong dianggap false
    - null : null dianggap false
    - undefined : undefined dianggap false
    - NaN : Not a Number dianggap false

2. TRUTHY
truthy merupakan kebalikan dari falsy, dimana datanya
dianggap true.
*/

// Contoh Kode Truthy Falsy
let data = "";

if (data){
    document.writeln("TRUE");
} else {
    document.writeln("FALSE");
}


