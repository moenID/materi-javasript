/*
for merupakan kunci yang bisa digunakan untuk melakukan 
perulangan. block kode yang terdapat pada for akan selalu
diulangi selama kondisi for terpenuhi.

Sintak Perulangan For
for(init statement;kondisi;post statement){
    kode block perulangan
}

- init statement akan dieksekusi hanya sekali di awal sebelum perulangan
- kondisi akan dilakukan pengecekan dalam setiap perulangan, jika true
perulangan akan dilakukan, jika false perulangan berhenti.
- post statement akan dieksekusi setiap kali di akhir perulangan
- init statemen, kondisi, dan post statement tidak wajib di isi
Jika kondisi tidak di isi, berarti kondisi selalu bernilai true.
jadi kondisi dan post statement selalu di ulang selagi tkondisi true.
*/

/* contoh kode init statemen, kondidi dan post statement kosong
for (; ;){
    alert("For Loop");
};
*/

// contoh kode dengan kondisi
let counter = 1;
for (; counter <= 10;){
    document.writeln(`<p>Perulangan ke ${counter}</p>`);
    counter++; // increament biar berhenti mentok sampai 10
};

// contoh kode dengan init statement dan kondisi
for (let bilangan = 1; bilangan <= 10;){
    document.writeln(`<p>Ulang ke ${bilangan}</p>`);
    bilangan++; // increament biar berhenti mentok sampai 10
};

// contoh kode init statement, kondiisi dan post statemen
for (let nomor = 1; nomor <= 10; nomor++){
    document.writeln(`<p>Bilangan ke ${nomor}</p>`);
};
