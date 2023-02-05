/*
Operator Logika merupakan operator untuk dua bua data boolean.
Oleh karena itu hasil dari operator logika adalah boolean.

Terdapat tiga operasi logika:
    - operator && (dan)
    - operator || (atau)
    - operator ! (kebalikan)

1. Penjelasan operator &&
    - jika nilai 1 dan 2 benar, maka hasil true
    - jika nilai 1 benar sedangkan nilai 2 salah, maka hasilnya false.
    - jika nilai 1 salah sedangkan nilai 2 benar, maka hasilnya false.
    - jika nilai 1 dan 2 salah maka hasilnya false.

2. Penjelasan operator ||
    - jika nilai 1 dan 2 benar, maka hasil true
    - jika nilai 1 benar sedangkan nilai 2 salah, maka hasilnya true.
    - jika nilai 1 salah sedangkan nilai 2 benar, maka hasilnya true.
    - jika nilai 1 dan 2 salah maka hasilnya false.

3. Operator kebalikan ( atau bisa disebut unary)
    - jika nilai 2 true, maka hasilnya false.
    - jika nilai 2 false, maka hasilnya true.
*/

// contoh operator logika

const ujian = 80; //syarat nilai ujian
const absensi = 75; // syarat nilai absensi

const lulusUjian = ujian > 75; // lulus ujian jika nilai lebih besar dari 75
document.writeln(lulusUjian);

//code untuk ganti baris
document.writeln("</br>");


const lulusAbsensi = absensi > 76; // lulus absensi jika nilai lebih dari 76 
document.writeln(lulusAbsensi);

//code untuk ganti baris
document.writeln("</br>");

//penerapan operator logika &&
const lulus = lulusUjian && lulusAbsensi; // nilai ujian lulus, nilai absensi tidak lulus
document.writeln(lulus);