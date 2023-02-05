/* Popup
Alert, Prompt dan Confirm
    - Alert digunakan untuk memberi peringatan berupa popup text dibrowser
    - prompt digunakan untuk meminta input string dari pengguna browser
    dalam bentuk popup input text
    - Confirm digunakan untuk meminta input boolean dari pengguna
    browser dalam bentuk popup input pilihan.
*/

// contoh kode Alert
alert("ini alert");

//contoh kode prompt
const name = prompt("what's your name");

alert(`Hello ${name}`);

//contoh kode confirm
const masuk = confirm("apakah anda laki-laki?");
if(masuk){
    const nama = prompt ("masukkan nama anda");
    alert(`hey ${nama}`);
} else {
    alert("bye bye");
}