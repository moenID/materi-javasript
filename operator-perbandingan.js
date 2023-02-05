/*
Operasi Perbandingan meerupakan operasi untuk membandingkan dua buah data.
Oleh karena itu operasi perbandingan menghasilkan nilai boolean (benar atau salah)
    - jika hasil operasinya benar maka nilainya true.
    - jika hasil operasinya salah maka nilainya falsr/

Bentuk Operator Perbandingan:

    - operator > (lebih dari)
    - operator < (kurang dari)
    - operator >= (lebih dari sama dengan)
    - operator <= (kurang dari sama dengan)
    - operator == (sama dengan)
    - operator === (sama dengan dan sama tipe)
    - operator != (tidak sama dengan)
    - operator !== (tidak sama dengan atau tidak sama tipe)    
*/

//contoh kode operasi perbandingan

let bilangan = 7 == "7";
document.writeln(bilangan);

// kode untuk ganti baris
document.writeln("</br>");

bilangan = 7 === "7";
document.writeln(bilangan);

// kode untuk ganti baris
document.writeln("</br>");

bilangan = 7 > "11";
document.writeln(bilangan);

// kode untuk ganti baris
document.writeln("</br>");

bilangan = 7 < "11";
document.writeln(bilangan);

// kode untuk ganti baris
document.writeln("</br>");

bilangan = 7 != 7;
document.writeln(bilangan);

// kode untuk ganti baris
document.writeln("</br>");

bilangan = 7 <= 7;
document.writeln(bilangan);