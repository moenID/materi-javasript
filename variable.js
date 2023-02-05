/* 
- variable mmerupakan tempat penyimpanan data
data yang disimpan di variable, dapat
digunakan kembali dengan menyebutkan variablenya.

- untuk membuat variable di javascript bisa menggunakan kata kunci:
1. var = jika ingin dirubah kembali datanya. dan tidak berlaku di javascript ECMA Script 6 
2. let = data bisa dirubah dan digunakan di javascript ECMA Script 6
3. const = tidak bisa dirubah datanya 

- javascript itu dynamic language, yakni variable di javascript
tidak terpaku harus menggunakan satu tipe data. artinya
bisa mengubah-ubah tipe data divariable yang sama.

- variable tidak boleh menganduk sepasi dst. dan lebih bagus camelcase
*/

//berikut contoh kode tanpa variable membuat tulisan moen.id 10 kali
document.writeln("moen.id");
document.writeln("</br>");
document.writeln("moen.id");
document.writeln("</br>");
document.writeln("moen.id");
document.writeln("</br>");
document.writeln("moen.id");
document.writeln("</br>");
document.writeln("moen.id");
document.writeln("</br>");
document.writeln("moen.id");
document.writeln("</br>");
document.writeln("moen.id");
document.writeln("</br>");
document.writeln("moen.id");
document.writeln("</br>");
document.writeln("moen.id");
document.writeln("</br>");
document.writeln("moen.id");

//code break
document.writeln("</br>");

// berikut contoh kode variable javascript
let firstName;
let lastName;
let alamat;

/* mengubah value di Variable
- setelah variable dideklarasikan, nilai di dalam variable
tersebut dapat dirubah
- untuk mengubahnya, gunakan perintah nama variable 
diikuti tanda = (sama dengan) lalu diikuti value atau nilainya */

//contoh code mengubah nilai variable

firstName = "Misbahul";
lastName = "Munir";
alamat = "Sawahan";

// code merubah nilai variable dari alamat
alamat = "Nogotirto";

/* Membuat Variable Langsung
- javascrip dapat mendeklarasikan sebuah variable langsung
dengan nilainnya.
- caranya, dengan menggunakan langsung kata kunci let 
lalu diikuti nama variablenya, kebudia tanda = (sama dengan),
dan diikuti nilainya.
*/

// Contoh kode variable langsung

let namaDepan = "Misbahul";
let namaBelakang = "Munir";
let tempatTinggal = "Sawahan Nogotirto";

/* Mengakses Variable
- kegunaan variable adalah agar variable bisa digunakan kembali
- untuk mempermudah menggunakan data yang sama berkali-kali
- untuk menggunakan variablenya, tinggal menyebutkan nama variablenya. */
 
// contoh kode mengakses variable 

document.writeln(namaDepan);
document.writeln("</br>");
document.writeln(namaBelakang);
document.writeln("</br>")
document.writeln(alamat);
document.writeln("</br>");
document.writeln(tempatTinggal)

//contoh variavle yang tidak dapat dirubah dengan const

const sekolah = "Sekolah Dasar";

sekolah = "Sekolah SMP"; //eror

// halama tidak menampikan sekolah karena kode eror. untuk melihat erornya bisa buka console.
document.writeln(sekolah);